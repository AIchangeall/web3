#!/usr/bin/env node
// ============================================================================
//  crawl_ats.mjs — 爬取各公司 ATS 招聘板的【具体职位 + 真实 JD 正文】，合并进 data.js
//
//  做法：从现有 data.js 链接反推各公司的招聘板标识（Lever site / Greenhouse token /
//  Ashby org），再调各自列表接口抓全量在招职位（含正文），upsert 进 data.js：
//   - 已存在(company+position 去重)：补/换为【具体职位详情页 link】、写真实 description、
//     补 location，刷新 lastSeen；保留 firstSeen/salary 等。
//   - 新职位：新增（推断 func/level/region、继承公司 category、派生 keywords/duties），
//     每个招聘板最多新增 NEW_CAP 个，避免数据量爆炸。
//  仅真实接口数据，严禁编造；抓不到则跳过。合并后重建静态页/sitemap/feed。
//  用法：node crawl_ats.mjs [--dry] [--new-cap 15] [--timeout 15000]
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
const DRY = process.argv.includes("--dry");
const argN = (f, d) => { const i = process.argv.indexOf(f); return i >= 0 && process.argv[i + 1] ? Number(process.argv[i + 1]) : d; };
const NEW_CAP = argN("--new-cap", 15);
const TIMEOUT = argN("--timeout", 15000);
const TODAY = new Date().toISOString().slice(0, 10);
const UA = "Mozilla/5.0 (compatible; ChainHireBot/1.0; +https://gmjobs.github.io/chainhire/)";

const D = readData();

const slug = s => (s || "").toLowerCase().replace(/[^a-z0-9一-龥]+/g, "-").replace(/(^-|-$)/g, "");
const keyOf = j => slug(j.company) + "||" + slug(j.position);
const decode = s => String(s || "").replace(/&amp;/g, "&").replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&quot;/g, '"').replace(/&#0?39;|&apos;|&rsquo;/g, "'").replace(/&nbsp;/g, " ").replace(/&#(\d+);/g, (m, n) => String.fromCharCode(+n));
const stripHtml = h => decode(String(h || "").replace(/<\s*(br|\/p|\/div|\/h[1-6]|\/tr)\s*>/gi, "\n").replace(/<li[^>]*>/gi, "\n• ").replace(/<[^>]+>/g, "")).replace(/\r/g, "").replace(/[ \t]+\n/g, "\n").replace(/\n{3,}/g, "\n\n").trim().slice(0, 4000);

const inferFunc = t => { t = (t || "").toLowerCase();
  if (/\bsre\b|site relia|devops|infrastructure|platform eng|reliability|sysadmin|运维/.test(t)) return "ops";
  if (/security|audit|安全|审计/.test(t)) return "security";
  if (/data|analyst|analytics|machine learning|\bml\b|\bai\b|scientist|数据/.test(t)) return "data";
  if (/product manager|product owner|\bpm\b|产品经理|产品/.test(t)) return "product";
  if (/design|\bux\b|\bui\b|brand|设计/.test(t)) return "design";
  if (/marketing|growth|community|social media|content|增长|市场|社区|运营/.test(t)) return "growth";
  if (/business development|\bbd\b|sales|partnership|institutional|商务|销售|拓展/.test(t)) return "bd";
  if (/legal|compliance|counsel|\baml\b|\bkyc\b|recruit|talent|people ops|\bhr\b|finance|accountant|合规|法务|财务|招聘|人力/.test(t)) return "ga";
  if (/engineer|developer|engineering|protocol|backend|frontend|full.?stack|software|研发|工程/.test(t)) return "eng";
  return "eng";
};
const inferLevel = t => { t = (t || "").toLowerCase(); if (/head|director|\bvp\b|chief|principal|总监|负责人/.test(t)) return "head"; if (/senior|staff|\bsr\.?\b|\blead\b|资深/.test(t)) return "senior"; return "mid"; };
const inferRegion = loc => { loc = (loc || "").toLowerCase(); const r = [];
  if (/remote|anywhere|distributed|远程/.test(loc)) r.push("remote");
  if (/singapore|新加坡/.test(loc)) r.push("sg");
  if (/hong kong|香港/.test(loc)) r.push("hk");
  if (/united states|\busa?\b|u\.s\.|new york|san francisco|\bus\b|美国/.test(loc)) r.push("us");
  if (/london|europe|berlin|paris|amsterdam|lisbon|欧/.test(loc)) r.push("eu");
  if (/dubai|\buae\b|迪拜/.test(loc)) r.push("dubai");
  if (/china|beijing|shanghai|shenzhen|中国|北京|上海|深圳/.test(loc)) r.push("cn");
  if (/tokyo|seoul|bangkok|jakarta|manila|taipei|asia|亚/.test(loc)) r.push("asia");
  return r.length ? [...new Set(r)] : ["remote"];
};

// 招聘板 (id → {company, category})：①从现有链接反推 ②叠加 boards.json 的【人工策展清单】(后者优先)
const boards = { lever: new Map(), greenhouse: new Map(), ashby: new Map() };
for (const j of D.jobs) {
  try {
    const u = new URL(j.link), h = u.hostname.replace(/^www\./, ""), seg = u.pathname.split("/").filter(Boolean);
    const info = { company: j.company, category: j.category };
    if (h.endsWith("lever.co") && seg[0]) boards.lever.set(seg[0], info);
    else if (h.endsWith("greenhouse.io") && seg[0]) boards.greenhouse.set(seg[0], info);
    else if (h.endsWith("ashbyhq.com") && seg[0]) boards.ashby.set(decodeURIComponent(seg[0]), info);
  } catch (e) {}
}
try {
  const curated = JSON.parse(fs.readFileSync(path.join(__dirname, "boards.json"), "utf-8"));
  for (const b of curated) { const m = boards[b.ats]; if (m) m.set(b.id, { company: b.company, category: b.category || "other" }); }
} catch (e) { /* boards.json 缺失则只用自动反推 */ }

async function getJSON(url) { const res = await fetch(url, { signal: AbortSignal.timeout(TIMEOUT), headers: { "User-Agent": UA, "Accept": "application/json" } }); if (!res.ok) throw new Error("HTTP " + res.status); return res.json(); }

// 各 ATS 抓全量 → 统一 {position, link, description, location}
async function crawlLever(site) {
  const arr = await getJSON("https://api.lever.co/v0/postings/" + site + "?mode=json");
  return (arr || []).map(o => {
    const parts = [];
    if (o.descriptionPlain) parts.push(o.descriptionPlain.trim()); else if (o.description) parts.push(stripHtml(o.description));
    for (const l of o.lists || []) parts.push((l.text ? l.text + "：\n" : "") + stripHtml(l.content));
    if (o.additionalPlain) parts.push(o.additionalPlain.trim());
    return { position: o.text, link: o.hostedUrl, description: parts.filter(Boolean).join("\n\n").slice(0, 4000), location: (o.categories && (o.categories.location || (o.categories.allLocations || [])[0])) || "" };
  }).filter(x => x.position && x.link);
}
async function crawlGreenhouse(token) {
  const o = await getJSON("https://boards-api.greenhouse.io/v1/boards/" + token + "/jobs?content=true");
  return (o.jobs || []).map(j => ({ position: j.title, link: j.absolute_url, description: stripHtml(j.content || ""), location: (j.location && j.location.name) || "" })).filter(x => x.position && x.link);
}
async function crawlAshby(org) {
  const o = await getJSON("https://api.ashbyhq.com/posting-api/job-board/" + encodeURIComponent(org) + "?includeCompensation=false");
  return (o.jobs || []).filter(j => j.isListed !== false).map(j => ({ position: j.title, link: j.jobUrl || j.applyUrl, description: (j.descriptionPlain && j.descriptionPlain.trim()) || stripHtml(j.descriptionHtml || j.description || ""), location: j.location || j.locationName || "" })).filter(x => x.position && x.link);
}

const existing = new Map(D.jobs.map(j => [keyOf(j), j]));
const DESC = loadDescs();
let enriched = 0, added = 0, boardsOK = 0, boardsFail = 0;
const report = [];

async function processBoard(kind, id, info, fn) {
  const company = info.company;
  let jobs;
  try { jobs = await fn(id); boardsOK++; } catch (e) { boardsFail++; report.push(`  ✗ ${kind}:${id} (${company}) — ${e.message}`); return; }
  report.push(`  ✓ ${kind}:${id} (${company}) — ${jobs.length} 个在招`);
  if (DRY) return;
  let newThis = 0;
  for (const c of jobs) {
    const k = slug(company) + "||" + slug(c.position);
    const ex = existing.get(k);
    if (ex) {
      let touched = false;
      const exId = ex.id || k;
      if (c.link && ex.link !== c.link) { ex.link = c.link; touched = true; }
      if (c.description && c.description.length >= 120 && (!DESC[exId] || DESC[exId].length < c.description.length)) { DESC[exId] = c.description.slice(0, 4000); touched = true; }
      if (c.location && (!ex.location || /^(remote|面议|—|全球)?$/i.test(ex.location))) { ex.location = c.location; touched = true; }
      ex.lastSeen = TODAY;
      if (touched) enriched++;
    } else {
      if (newThis >= NEW_CAP) continue;
      const job = {
        company, func: inferFunc(c.position), category: info.category || "other",
        position: c.position, level: inferLevel(c.position), location: c.location || "远程",
        region: inferRegion(c.location), salary: "面议", salaryNum: 0,
        requirements: (c.description || "").split("\n").map(s => s.trim()).filter(Boolean)[0]?.slice(0, 120) || c.position,
        link: c.link, firstSeen: (D.lastUpdated || TODAY), lastSeen: TODAY, id: k
      };
      const text = job.position + " " + (c.description || job.requirements || "");
      job.keywords = extractKeywords(text); job.duties = extractDuties(text);
      if (c.description && c.description.length >= 120) DESC[k] = c.description.slice(0, 4000);
      D.jobs.unshift(job); existing.set(k, job); added++; newThis++;
    }
  }
}

const tasks = [];
for (const [id, info] of boards.lever) tasks.push(processBoard("lever", id, info, crawlLever));
for (const [id, info] of boards.greenhouse) tasks.push(processBoard("greenhouse", id, info, crawlGreenhouse));
for (const [id, info] of boards.ashby) tasks.push(processBoard("ashby", id, info, crawlAshby));

console.log(`招聘板：Lever ${boards.lever.size} | Greenhouse ${boards.greenhouse.size} | Ashby ${boards.ashby.size}（共 ${tasks.length}）${DRY ? " [DRY]" : ""}`);
// 限并发
const POOL = 5; let ti = 0;
await Promise.all(Array.from({ length: POOL }, async () => { while (ti < tasks.length) await tasks[ti++]; }));
console.log(report.sort().join("\n"));
console.log(`\n板成功 ${boardsOK} / 失败 ${boardsFail}`);

if (!DRY) {
  writeData(D);
  const withDesc = saveDescs(DESC);
  const pages = genJobPages(D);
  console.log(`✅ 富化已有 ${enriched} | 新增 ${added} | 岗位总数 ${D.jobs.length} | descriptions.json 共 ${withDesc} 条 | 重建静态页 ${pages}`);
} else {
  const totalJobs = report.filter(r => r.includes("✓")).reduce((s, r) => s + (Number((r.match(/— (\d+) 个/) || [])[1]) || 0), 0);
  console.log(`\n[DRY] 各板在招合计约 ${totalJobs} 个（实际新增受 --new-cap=${NEW_CAP}/板 限制）`);
}
