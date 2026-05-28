#!/usr/bin/env node
// ============================================================================
//  crawl_moka.mjs — 抓取使用 Moka 招聘系统(mokahr.com)的公司的【真实职位 + JD 正文】
//
//  Moka 社招公开接口（无需登录，Node 端可直接调）：
//   - 列表：POST https://hire-r1.mokahr.com/api/outer/ats-apply/website/jobs/module
//           body { siteId, orgId, limit, offset } → data.jobs[]{ id,title,status,deptId }
//   - 详情：POST https://hire-r1.mokahr.com/api/outer/ats-apply/website/job
//           body { siteId, orgId, jobId } → data.jobDescription(HTML 正文) / title / locations
//   - 职位页：https://hire-r1.mokahr.com/social-recruitment/<orgId>/<siteId>#/job/<jobId>
//
//  对 SITES 里的每家公司抓全量 open 职位与正文，upsert 进 data.js：已存在(company+position
//  去重)→补/换具体职位 link + 真实正文 + 地点；新职位→限量新增(--cap)。正文写 descriptions.json。
//  仅真实接口数据，严禁编造。合并后重建静态页 / sitemap / feed。
//  用法：node crawl_moka.mjs [--cap 40] [--concurrency 6] [--timeout 15000]
// ============================================================================
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { extractKeywords, extractDuties } from "./keywords.mjs";
import { loadDescs, saveDescs } from "./descstore.mjs";
import { readData, writeData } from "./gen_chunks.mjs";
import { generate as genJobPages } from "./gen_job_pages.mjs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const DATA_FILE = path.join(__dirname, "data.js");
const argN = (f, d) => { const i = process.argv.indexOf(f); return i >= 0 && process.argv[i + 1] ? Number(process.argv[i + 1]) : d; };
const CAP = argN("--cap", 40);
const CONC = argN("--concurrency", 6);
const TIMEOUT = argN("--timeout", 15000);
const TODAY = new Date().toISOString().slice(0, 10);
const UA = "Mozilla/5.0 (compatible; ChainHireBot/1.0; +https://gmjobs.github.io/chainhire/)";

// 使用 Moka 的公司站点（orgId + siteId 取自其社招公开页 URL：social-recruitment/<orgId>/<siteId>）
const SITES = [
  { company: "Bitget", orgId: "bitget", siteId: 100000079, category: "exchange" },
];

const slug = s => (s || "").toLowerCase().replace(/[^a-z0-9一-龥]+/g, "-").replace(/(^-|-$)/g, "");
const keyOf = j => slug(j.company) + "||" + slug(j.position);
const decode = s => String(s || "").replace(/&amp;/g, "&").replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&quot;/g, '"').replace(/&#0?39;|&apos;|&rsquo;/g, "'").replace(/&nbsp;/g, " ").replace(/&#(\d+);/g, (m, n) => String.fromCharCode(+n));
const stripHtml = h => decode(String(h || "").replace(/<\s*(br|\/p|\/div|\/h[1-6]|\/tr|\/li)\s*>/gi, "\n").replace(/<li[^>]*>/gi, "\n• ").replace(/<[^>]+>/g, "")).replace(/\r/g, "").replace(/[ \t]+\n/g, "\n").replace(/\n{3,}/g, "\n\n").trim().slice(0, 4000);

const inferFunc = t => { t = (t || "").toLowerCase();
  if (/\bsre\b|site relia|devops|infrastructure|reliability|运维|稳定性/.test(t)) return "ops";
  if (/security|audit|安全|审计|风控/.test(t)) return "security";
  if (/data|analyst|analytics|machine learning|\bml\b|\bai\b|scientist|数据|算法|分析/.test(t)) return "data";
  if (/product manager|产品经理|产品/.test(t)) return "product";
  if (/design|\bux\b|\bui\b|设计/.test(t)) return "design";
  if (/marketing|growth|community|社区|增长|市场|运营|策划|品牌/.test(t)) return "growth";
  if (/business development|\bbd\b|sales|商务|销售|拓展|客户经理|风控运营|清结算/.test(t)) return "bd";
  if (/legal|compliance|counsel|\baml\b|\bkyc\b|recruit|talent|\bhr\b|finance|accountant|合规|法务|财务|招聘|人力|会计|分析师/.test(t)) return "ga";
  if (/engineer|developer|backend|frontend|后端|前端|工程师|研发|架构/.test(t)) return "eng";
  return "eng";
};
const inferLevel = t => { t = (t || "").toLowerCase(); if (/head|director|\bvp\b|lead|chief|总监|负责人|主管/.test(t)) return "head"; if (/senior|staff|资深|高级/.test(t)) return "senior"; return "mid"; };
const inferRegion = loc => { loc = (loc || "").toLowerCase(); const r = [];
  if (/remote|anywhere|远程/.test(loc)) r.push("remote");
  if (/singapore|新加坡/.test(loc)) r.push("sg");
  if (/hong kong|香港/.test(loc)) r.push("hk");
  if (/dubai|\buae\b|迪拜/.test(loc)) r.push("dubai");
  if (/united states|\busa?\b|美国|纽约/.test(loc)) r.push("us");
  if (/london|europe|欧/.test(loc)) r.push("eu");
  if (/china|beijing|shanghai|shenzhen|中国|北京|上海|深圳/.test(loc)) r.push("cn");
  if (/tokyo|seoul|bangkok|taipei|jakarta|manila|asia|台北|首尔|东京|曼谷|亚/.test(loc)) r.push("asia");
  return r.length ? [...new Set(r)] : ["remote"];
};

async function api(pathname, body) {
  const r = await fetch("https://hire-r1.mokahr.com/api/outer/ats-apply/website" + pathname, {
    method: "POST", signal: AbortSignal.timeout(TIMEOUT),
    headers: { "Content-Type": "application/json", "User-Agent": UA, "Accept": "application/json" },
    body: JSON.stringify(body),
  });
  if (!r.ok) throw new Error("HTTP " + r.status);
  const o = await r.json();
  if (o.code !== 0) throw new Error("code " + o.code + " " + (o.msg || ""));
  return o.data;
}

const D = readData();
const existing = new Map(D.jobs.map(j => [keyOf(j), j]));
const DESC = loadDescs();
let enriched = 0, added = 0;
const report = [];

function locOf(d) {
  const ls = d.locations || [];
  const parts = ls.map(l => l && (l.cityName || l.city || l.name || l.locationName)).filter(Boolean);
  return parts.join(" / ") || d.cityName || d.city || "";
}

async function processSite(site) {
  let list;
  try { list = await api("/jobs/module", { siteId: site.siteId, orgId: site.orgId, limit: 300, offset: 0 }); }
  catch (e) { report.push(`✗ ${site.company} 列表失败：${e.message}`); return; }
  const jobs = (list.jobs || []).filter(j => j.status === "open");
  report.push(`✓ ${site.company}：${jobs.length} 个在招（站点共 ${list.jobStats?.total || jobs.length}）`);
  let newThis = 0, i = 0;
  async function worker() {
    while (i < jobs.length) {
      const jm = jobs[i++];
      let d;
      try { d = await api("/job", { siteId: site.siteId, orgId: site.orgId, jobId: jm.id }); }
      catch (e) { continue; }
      const position = d.title || jm.title;
      const body = stripHtml(d.jobDescription || "");
      const location = locOf(d);
      const link = `https://hire-r1.mokahr.com/social-recruitment/${site.orgId}/${site.siteId}#/job/${jm.id}`;
      const k = slug(site.company) + "||" + slug(position);
      const ex = existing.get(k);
      if (ex) {
        ex.link = link; ex.lastSeen = TODAY;
        if (location && (!ex.location || /^(remote|面议|—|全球|远程)?$/i.test(ex.location))) ex.location = location;
        if (body.length >= 120 && (!DESC[ex.id || k] || DESC[ex.id || k].length < body.length)) DESC[ex.id || k] = body;
        enriched++;
      } else {
        if (newThis >= CAP) continue;
        const job = {
          company: site.company, func: inferFunc(position), category: site.category,
          position, level: inferLevel(position), location: location || "远程",
          region: inferRegion(location), salary: "面议", salaryNum: 0,
          requirements: (body.split("\n").map(s => s.trim()).filter(Boolean)[0] || position).slice(0, 120),
          link, firstSeen: (D.lastUpdated || TODAY), lastSeen: TODAY, id: k
        };
        const text = position + " " + (body || "");
        job.keywords = extractKeywords(text); job.duties = extractDuties(text);
        if (body.length >= 120) DESC[k] = body;
        D.jobs.unshift(job); existing.set(k, job); added++; newThis++;
      }
    }
  }
  await Promise.all(Array.from({ length: CONC }, worker));
}

for (const s of SITES) await processSite(s);
console.log(report.join("\n"));

writeData(D);
const totalDesc = saveDescs(DESC);
const pages = genJobPages(D);
console.log(`✅ 富化 ${enriched} | 新增 ${added} | 岗位总数 ${D.jobs.length} | descriptions ${totalDesc} 条 | 静态页 ${pages}`);
