#!/usr/bin/env node
// ============================================================================
//  fetch_desc.mjs — 通过各招聘系统(ATS)的公开 JSON 接口抓取【真实 JD 正文】，
//  写入 data.js 的 description 字段，并重建静态页 / sitemap / feed。
//
//  支持：Lever（api.lever.co）、Greenhouse（boards-api.greenhouse.io）、Ashby（posting-api）。
//  仅抓真实结构化正文，严禁编造；抓不到（链接为聚合/分类页、SPA、已下架等）则跳过该岗位。
//  用法：node fetch_desc.mjs [--limit N] [--concurrency 6] [--timeout 12000] [--force]
//    默认只补「尚无 description」的岗位；--force 则覆盖已有。
// ============================================================================
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { loadDescs, saveDescs } from "./descstore.mjs";
import { generate as genJobPages } from "./gen_job_pages.mjs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const DATA_FILE = path.join(__dirname, "data.js");
const slug = s => (s || "").toLowerCase().replace(/[^a-z0-9一-龥]+/g, "-").replace(/(^-|-$)/g, "");
const keyOf = j => slug(j.company) + "||" + slug(j.position);
const DESC = loadDescs();
const idOf = j => j.id || keyOf(j);
const arg = (f, d) => { const i = process.argv.indexOf(f); return i >= 0 && process.argv[i + 1] && !process.argv[i + 1].startsWith("--") ? process.argv[i + 1] : d; };
const LIMIT = Number(arg("--limit", 9999));
const CONC = Number(arg("--concurrency", 6));
const TIMEOUT = Number(arg("--timeout", 12000));
const FORCE = process.argv.includes("--force");
const UA = "Mozilla/5.0 (compatible; ChainHireBot/1.0; +https://gmjobs.github.io/chainhire/)";

const raw = fs.readFileSync(DATA_FILE, "utf-8");
const objStart = raw.indexOf("{", raw.indexOf("window.WEB3_JOBS_DATA"));
const D = JSON.parse(raw.slice(objStart, raw.lastIndexOf("}") + 1));

const decode = s => String(s || "").replace(/&amp;/g, "&").replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&quot;/g, '"').replace(/&#0?39;|&apos;|&rsquo;/g, "'").replace(/&nbsp;/g, " ").replace(/&#(\d+);/g, (m, n) => String.fromCharCode(+n));
const stripHtml = h => decode(String(h || "")
  .replace(/<\s*(br|\/p|\/div|\/h[1-6]|\/tr)\s*>/gi, "\n")
  .replace(/<li[^>]*>/gi, "\n• ")
  .replace(/<[^>]+>/g, ""))
  .replace(/\r/g, "").replace(/[ \t]+\n/g, "\n").replace(/\n{3,}/g, "\n\n").trim().slice(0, 4000);

async function getJSON(url) {
  const res = await fetch(url, { signal: AbortSignal.timeout(TIMEOUT), headers: { "User-Agent": UA, "Accept": "application/json" } });
  if (!res.ok) throw new Error("HTTP " + res.status);
  return res.json();
}

const ashbyCache = new Map(); // org -> postings[]
async function fromAshby(u) {
  const seg = u.pathname.split("/").filter(Boolean); // /<org>/<id>
  const org = decodeURIComponent(seg[0] || ""), id = seg[1] || "";
  if (!org) return "";
  if (!ashbyCache.has(org)) {
    try { const o = await getJSON("https://api.ashbyhq.com/posting-api/job-board/" + encodeURIComponent(org) + "?includeCompensation=false"); ashbyCache.set(org, o.jobs || []); }
    catch (e) { ashbyCache.set(org, []); }
  }
  const jobs = ashbyCache.get(org);
  const p = jobs.find(j => j.id === id || j.jobId === id) || jobs.find(j => (j.jobUrl || "").includes(id));
  if (!p) return "";
  return (p.descriptionPlain && p.descriptionPlain.trim()) || stripHtml(p.descriptionHtml || p.description || "");
}
async function fromLever(u) {
  const m = u.pathname.replace(/^\//, ""); // <site>/<id>
  const o = await getJSON("https://api.lever.co/v0/postings/" + m);
  if (!o || o.ok === false || (!o.description && !o.descriptionPlain && !(o.lists || []).length)) return "";
  const parts = [];
  if (o.descriptionPlain) parts.push(o.descriptionPlain.trim()); else if (o.description) parts.push(stripHtml(o.description));
  for (const l of o.lists || []) parts.push((l.text ? l.text + "：\n" : "") + stripHtml(l.content));
  if (o.additionalPlain) parts.push(o.additionalPlain.trim()); else if (o.additional) parts.push(stripHtml(o.additional));
  return parts.filter(Boolean).join("\n\n").slice(0, 4000);
}
async function fromGreenhouse(u) {
  const seg = u.pathname.split("/").filter(Boolean); // <token>/jobs/<id>
  const token = seg[0], id = seg[seg.indexOf("jobs") + 1];
  if (!token || !id) return "";
  const o = await getJSON("https://boards-api.greenhouse.io/v1/boards/" + token + "/jobs/" + id);
  return stripHtml(o.content || "");
}

function extractorFor(host) {
  if (host.endsWith("lever.co")) return fromLever;
  if (host.endsWith("greenhouse.io")) return fromGreenhouse;
  if (host.endsWith("ashbyhq.com")) return fromAshby;
  return null;
}

const targets = (D.jobs || []).filter(j => j.link && (FORCE || !DESC[idOf(j)])).filter(j => {
  try { return !!extractorFor(new URL(j.link).hostname.replace(/^www\./, "")); } catch (e) { return false; }
}).slice(0, LIMIT);

let ok = 0, fail = 0;
async function handle(j) {
  try {
    const u = new URL(j.link);
    const fn = extractorFor(u.hostname.replace(/^www\./, ""));
    const text = await fn(u);
    if (text && text.length >= 120) { DESC[idOf(j)] = text; ok++; } else fail++;
  } catch (e) { fail++; }
}
async function run() {
  let i = 0;
  await Promise.all(Array.from({ length: Math.min(CONC, targets.length || 1) }, async () => { while (i < targets.length) await handle(targets[i++]); }));
}

console.log(`候选(可走 ATS 接口且缺正文)：${targets.length} 个，开始抓取…`);
await run();

const total = saveDescs(DESC);
const pages = genJobPages(D);
console.log(`✅ 抓取成功 ${ok} | 失败/跳过 ${fail} | descriptions.json 共 ${total} 条正文 | 重建静态页 ${pages}`);
