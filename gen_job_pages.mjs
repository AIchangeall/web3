#!/usr/bin/env node
// ============================================================================
//  gen_job_pages.mjs — 为每个岗位生成独立静态页 jobs/<id>.html，并重建 sitemap.xml
//
//  目的：
//   - 每个岗位有独立可索引/可分享的 URL，页面内含该岗位的 JobPosting 结构化数据
//     与专属 OG/Twitter 卡片 —— 这是 Google for Jobs 收录最稳的做法，也让分享到
//     社交平台时落地页带完整岗位信息（无需 JS 即可被爬虫读取）。
//   - sitemap.xml 同步收录全部岗位页 + 4 个主页面。
//
//  用法：
//   - 独立运行：node gen_job_pages.mjs            （读 data.js，全量重建 jobs/ 与 sitemap.xml）
//   - 被 apply_update.mjs 调用：import { generate } from "./gen_job_pages.mjs"; generate(D);
//
//  说明：
//   - jobs/ 每次全量重建（先清空再生成），从而自动剔除已下线岗位的孤儿页。
//   - 页面内容只依赖该岗位自身字段（不含全局 lastUpdated / 该岗位 lastSeen），
//     因此未变动的岗位每次生成字节一致、git 无 diff，避免每 5 小时全量churn。
// ============================================================================
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const SITE = "https://gmjobs.github.io/chainhire";

const FUNC = { eng: "工程研发", ops: "运维/SRE/基础设施", product: "产品", design: "设计", data: "数据/AI", security: "安全", growth: "市场/增长/运营", bd: "BD/商务/销售", ga: "合规/法务/财务HR" };
const CAT = { exchange: "交易所", chain: "公链/L2", defi: "钱包/DeFi", infra: "节点/RPC基础设施", other: "合规/托管/其他" };
const LVL = { head: "负责人/总监", senior: "资深/Staff", mid: "中级" };
const REGION = { remote: "远程", cn: "中文区", hk: "香港", sg: "新加坡", us: "美国", eu: "欧洲", dubai: "迪拜", asia: "亚洲其他" };
const COUNTRY = { cn: "CN", hk: "HK", sg: "SG", us: "US", eu: "DE", dubai: "AE", asia: "SG" };

const PALETTE = ["#6d5efc", "#0ea5e9", "#10b981", "#f59e0b", "#ef4444", "#8b5cf6", "#ec4899", "#14b8a6", "#f97316", "#3b82f6"];
const acolor = n => { let h = 0; for (const c of (n || "")) h = (h * 31 + c.charCodeAt(0)) >>> 0; return PALETTE[h % PALETTE.length]; };
const initial = n => ((n || "?").trim()[0] || "?").toUpperCase();

const slug = s => (s || "").toLowerCase().replace(/[^a-z0-9一-龥]+/g, "-").replace(/(^-|-$)/g, "");
const keyOf = j => slug(j.company) + "||" + slug(j.position);
const safeId = id => (id || "").replace(/\|+/g, "-").replace(/-+/g, "-").replace(/(^-|-$)/g, "");
const esc = s => String(s == null ? "" : s).replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

function jobLd(j, url) {
  const remote = (j.region || []).includes("remote");
  const countries = (j.region || []).map(x => COUNTRY[x]).filter(Boolean);
  const o = {
    "@context": "https://schema.org/", "@type": "JobPosting",
    "title": j.position,
    "description": (j.requirements || j.position || ""),
    "datePosted": j.firstSeen,
    "employmentType": "FULL_TIME",
    "hiringOrganization": { "@type": "Organization", "name": j.company },
    "identifier": { "@type": "PropertyValue", "name": j.company, "value": j.id || keyOf(j) },
    "url": url, "directApply": false,
    "jobLocation": { "@type": "Place", "address": { "@type": "PostalAddress", "addressLocality": (j.location || "").replace(/\s*[\/／].*$/, "") || j.company, "addressCountry": countries[0] || "SG" } }
  };
  if (remote) { o.jobLocationType = "TELECOMMUTE"; if (countries.length) o.applicantLocationRequirements = countries.map(c => ({ "@type": "Country", "name": c })); }
  if (j.salaryNum) o.baseSalary = { "@type": "MonetaryAmount", "currency": "USD", "value": { "@type": "QuantitativeValue", "value": j.salaryNum, "unitText": "YEAR" } };
  return o;
}

function pageHtml(j) {
  const id = j.id || keyOf(j);
  const sid = safeId(id);
  const url = `${SITE}/jobs/${sid}.html`;
  const negSalary = !j.salary || /面议/.test(j.salary);
  const salary = negSalary ? "面议" : j.salary;
  const desc = `${j.company} 正在招聘 ${j.position}（${LVL[j.level] || ""} · ${j.location || "地点面议"}）。${(j.requirements || "").slice(0, 120)}`;
  const tags = [FUNC[j.func] || "其他", LVL[j.level] || j.level, `📍 ${j.location || "面议"}`, ...(j.region || []).map(r => REGION[r]).filter(Boolean)]
    .map(t => `<span class="tag">${esc(t)}</span>`).join("");
  const kws = (j.keywords || []).map(k => `<span class="kw">#${esc(k)}</span>`).join("");
  const duties = (j.duties || []).map(d => `<span class="tag">${esc(d)}</span>`).join("");
  const contact = (j.contact || j.contactInfo)
    ? `<div class="sec"><h2>联系人 / 联系方式</h2><p class="req">${esc([j.contact, j.contactInfo].filter(Boolean).join("  ·  "))}</p></div>` : "";
  const applyBtn = j.link ? `<a class="btn primary" href="${esc(j.link)}" target="_blank" rel="noopener">查看 / 投递原始职位 →</a>` : "";
  const ld = JSON.stringify(jobLd(j, url));
  return `<!doctype html>
<html lang="zh-CN">
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<title>${esc(j.position)} · ${esc(j.company)}｜链聘 ChainHire</title>
<meta name="description" content="${esc(desc)}" />
<meta name="robots" content="index,follow" />
<link rel="canonical" href="${url}" />
<meta name="theme-color" content="#6d5efc" />
<link rel="icon" type="image/svg+xml" href="../assets/favicon.svg" />
<meta property="og:type" content="article" />
<meta property="og:site_name" content="链聘 ChainHire" />
<meta property="og:title" content="${esc(j.position)} · ${esc(j.company)}" />
<meta property="og:description" content="${esc(desc)}" />
<meta property="og:url" content="${url}" />
<meta property="og:image" content="${SITE}/assets/og-cover.png" />
<meta property="og:image:width" content="1200" />
<meta property="og:image:height" content="630" />
<meta property="og:locale" content="zh_CN" />
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="${esc(j.position)} · ${esc(j.company)}" />
<meta name="twitter:description" content="${esc(desc)}" />
<meta name="twitter:image" content="${SITE}/assets/og-cover.png" />
<script type="application/ld+json">${ld}</script>
<style>
  :root{--accent:#6d5efc;--bg:#f4f5f9;--card:#fff;--ink:#0f1729;--muted:#6b7280;--line:#e8eaf0;--grad:linear-gradient(135deg,#6d5efc,#a855f7)}
  *{box-sizing:border-box}body{margin:0;font-family:-apple-system,"PingFang SC","Microsoft YaHei",Inter,"Segoe UI",sans-serif;background:var(--bg);color:var(--ink);line-height:1.6;font-size:14px}
  a{color:inherit;text-decoration:none}
  .nav{background:rgba(255,255,255,.9);border-bottom:1px solid var(--line);position:sticky;top:0;z-index:5}
  .nav-in{max-width:760px;margin:0 auto;padding:0 20px;height:56px;display:flex;align-items:center;justify-content:space-between}
  .brand{display:flex;align-items:center;gap:9px;font-weight:700;font-size:15px}
  .brand .logo{width:28px;height:28px;border-radius:7px;background:var(--grad);color:#fff;display:grid;place-items:center;font-weight:800}
  .nav a.back{font-size:13px;font-weight:600;color:var(--accent)}
  main{max-width:760px;margin:24px auto 60px;padding:0 20px}
  .card{background:var(--card);border:1px solid var(--line);border-radius:18px;padding:26px;box-shadow:0 1px 3px rgba(15,23,41,.06)}
  .top{display:flex;gap:15px;align-items:flex-start}
  .avatar{width:54px;height:54px;border-radius:14px;color:#fff;display:grid;place-items:center;font-weight:800;font-size:22px;flex:none}
  h1{font-size:23px;margin:0;letter-spacing:-.01em}
  .co{margin-top:6px;color:var(--muted);font-size:14px}.co b{color:#374151}
  .salary{font-size:22px;font-weight:800;color:#047857;margin:18px 0 4px}.salary.neg{color:#94a3b8;font-size:16px}
  .tags{display:flex;flex-wrap:wrap;gap:7px;margin:12px 0}
  .tag{font-size:12.5px;font-weight:600;background:#f1f2f6;color:#475569;border-radius:8px;padding:4px 10px}
  .sec{margin-top:22px}.sec h2{font-size:13px;text-transform:uppercase;letter-spacing:.04em;color:var(--muted);margin:0 0 8px}
  .req{font-size:14px;color:#334155;white-space:pre-wrap;margin:0}
  .kws{display:flex;flex-wrap:wrap;gap:7px}.kw{font-size:12px;color:#5b5bd6;background:#eeeefb;border:1px solid #e3e3fb;border-radius:7px;padding:3px 9px}
  .actions{display:flex;flex-wrap:wrap;gap:10px;margin-top:26px}
  .btn{display:inline-block;border:1px solid var(--line);background:#fff;color:var(--ink);font-weight:700;font-size:13.5px;padding:11px 18px;border-radius:11px}
  .btn:hover{border-color:var(--accent);color:var(--accent)}
  .btn.primary{background:var(--ink);color:#fff;border-color:var(--ink)}.btn.primary:hover{background:var(--accent);border-color:var(--accent);color:#fff}
  .disc{margin-top:24px;padding-top:16px;border-top:1px solid var(--line);font-size:12px;color:#9aa1b1}
  .disc a{color:var(--accent);font-weight:600}
  @media(max-width:560px){.card{padding:20px}h1{font-size:20px}}
</style>
</head>
<body>
<nav class="nav"><div class="nav-in">
  <a class="brand" href="../index.html"><span class="logo">链</span> 链聘 ChainHire</a>
  <a class="back" href="../index.html">← 全部职位</a>
</div></nav>
<main>
  <article class="card">
    <div class="top">
      <div class="avatar" style="background:${acolor(j.company)}">${esc(initial(j.company))}</div>
      <div>
        <h1>${esc(j.position)}</h1>
        <div class="co"><b>${esc(j.company)}</b> · ${esc(CAT[j.category] || j.category || "")}${j.firstSeen ? ` · 上架 ${esc(j.firstSeen)}` : ""}</div>
      </div>
    </div>
    <div class="salary ${negSalary ? "neg" : ""}">${esc(salary)}</div>
    <div class="tags">${tags}</div>
    <div class="sec"><h2>职位要求 / 描述</h2><p class="req">${esc(j.requirements || "")}</p></div>
    ${kws ? `<div class="sec"><h2>技能关键字</h2><div class="kws">${kws}</div></div>` : ""}
    ${duties ? `<div class="sec"><h2>职责方向</h2><div class="tags">${duties}</div></div>` : ""}
    ${contact}
    <div class="actions">
      ${applyBtn}
      <a class="btn" href="../index.html?q=${encodeURIComponent(j.company)}">查看 ${esc(j.company)} 全部职位 →</a>
    </div>
    <p class="disc">数据来自公开渠道整理，薪资为公开 JD 或聚合估算，仅供参考，以面试谈薪为准。 <a href="../index.html">← 返回链聘 ChainHire 职位看板</a></p>
  </article>
</main>
</body>
</html>
`;
}

function genSitemap(items, lastUpdated) {
  const lm = lastUpdated || new Date().toISOString().slice(0, 10);
  const head = [
    { loc: `${SITE}/`, lm, cf: "daily", pr: "1.0" },
    { loc: `${SITE}/stats.html`, lm, cf: "daily", pr: "0.7" },
    { loc: `${SITE}/companies.html`, lm, cf: "daily", pr: "0.7" },
    { loc: `${SITE}/headhunter.html`, lm, cf: "daily", pr: "0.6" },
  ];
  const jobUrls = items.map(it => ({ loc: `${SITE}/jobs/${it.sid}.html`, lm: it.firstSeen || lm, cf: "weekly", pr: "0.5" }));
  const body = head.concat(jobUrls)
    .map(u => `  <url>\n    <loc>${u.loc}</loc>\n    <lastmod>${u.lm}</lastmod>\n    <changefreq>${u.cf}</changefreq>\n    <priority>${u.pr}</priority>\n  </url>`)
    .join("\n");
  fs.writeFileSync(path.join(__dirname, "sitemap.xml"),
    `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${body}\n</urlset>\n`);
}

export function generate(D) {
  const jobsDir = path.join(__dirname, "jobs");
  fs.rmSync(jobsDir, { recursive: true, force: true });
  fs.mkdirSync(jobsDir, { recursive: true });
  const seen = new Set();
  const items = [];
  for (const j of D.jobs || []) {
    const sid = safeId(j.id || keyOf(j));
    if (!sid || seen.has(sid)) continue;
    seen.add(sid);
    fs.writeFileSync(path.join(jobsDir, sid + ".html"), pageHtml(j));
    items.push({ sid, firstSeen: j.firstSeen });
  }
  genSitemap(items, D.lastUpdated);
  return items.length;
}

function readData() {
  const raw = fs.readFileSync(path.join(__dirname, "data.js"), "utf-8");
  const objStart = raw.indexOf("{", raw.indexOf("window.WEB3_JOBS_DATA"));
  return JSON.parse(raw.slice(objStart, raw.lastIndexOf("}") + 1));
}

// 独立运行入口
if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  const n = generate(readData());
  console.log(`✅ 生成 ${n} 个岗位静态页 → jobs/ ，并重建 sitemap.xml`);
}
