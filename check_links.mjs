#!/usr/bin/env node
// ============================================================================
//  check_links.mjs — 保守地探测每个岗位 link 的可用性，标记确属下线的岗位 linkDead
//
//  设计原则（守数据可信度，宁可漏判不可误判）：
//   - 只有【明确死亡信号】才计一次失败：HTTP 404 / 410，或 DNS 解析失败(ENOTFOUND)/
//     连接被拒(ECONNREFUSED/ECONNRESET)。
//   - 403/401/405/429/5xx/超时/TLS 错误 一律视为「未知」——招聘站常封爬虫或临时抖动，
//     绝不能据此把在招岗位误标为下线。未知不改变 linkDead 判定。
//   - 【两次确认】：连续 2 次（跨多次运行）拿到死亡信号才置 linkDead=true；任何一次拿到
//     2xx/3xx(成功) 立即清除 linkFails 与 linkDead。避免单次抖动造成误判。
//   - 【预算轮换】：每次运行只检查「最久未检 / 未检过」的一批（--budget，默认 80），
//     避免对来源站点造成压力；配合每 5h 运行，约 1 天覆盖全量、之后每 ~3 天复检。
//
//  写回字段：linkDead(bool, 仅 true 时保留)、linkFails(int, 仅 >0 时保留)、linkCheckedAt(ISO)。
//  运行后重建 jobs/ 静态页与 sitemap.xml（反映 linkDead 变化）。
//
//  用法：node check_links.mjs [--budget 80] [--recheck-days 3] [--concurrency 8] [--timeout 9000]
// ============================================================================
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { readData, writeData } from "./gen_chunks.mjs";
import { generate as genJobPages } from "./gen_job_pages.mjs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const DATA_FILE = path.join(__dirname, "data.js");

const arg = (flag, dflt) => { const i = process.argv.indexOf(flag); return i >= 0 && process.argv[i + 1] ? process.argv[i + 1] : dflt; };
const BUDGET = Number(arg("--budget", 80));
const RECHECK_DAYS = Number(arg("--recheck-days", 3));
const CONCURRENCY = Number(arg("--concurrency", 8));
const TIMEOUT_MS = Number(arg("--timeout", 9000));
const STRIKES = 2; // 连续两次死亡信号才判定下线
const UA = "Mozilla/5.0 (compatible; ChainHireLinkBot/1.0; +https://gmjobs.github.io/chainhire/)";

const D = readData();

const now = Date.now();
const nowIso = new Date().toISOString();
const daysSince = iso => iso ? (now - Date.parse(iso)) / 86400000 : Infinity;

// 选取候选：有 link，且（从未检 或 距上次检查 ≥ RECHECK_DAYS），最久未检优先
const candidates = (D.jobs || [])
  .filter(j => j.link && /^https?:\/\//i.test(j.link) && daysSince(j.linkCheckedAt) >= RECHECK_DAYS)
  .sort((a, b) => daysSince(b.linkCheckedAt) - daysSince(a.linkCheckedAt))
  .slice(0, BUDGET);

// 探测单个 URL → 'dead' | 'alive' | 'unknown'
async function probe(url) {
  try {
    const res = await fetch(url, {
      method: "GET", redirect: "follow",
      signal: AbortSignal.timeout(TIMEOUT_MS),
      headers: { "User-Agent": UA, "Accept": "text/html,application/xhtml+xml" },
    });
    try { await res.body?.cancel?.(); } catch { }
    const s = res.status;
    if (s === 404 || s === 410) return "dead";
    if (s >= 200 && s < 400) return "alive";
    return "unknown"; // 401/403/405/429/5xx 等：可能被封爬虫，不据此判定
  } catch (e) {
    const code = (e && (e.cause?.code || e.code)) || (e && e.name) || "";
    if (code === "ENOTFOUND" || code === "ECONNREFUSED" || code === "ECONNRESET") return "dead";
    return "unknown"; // 超时/中断/TLS 等：视为未知
  }
}

let checked = 0, marked = 0, cleared = 0, unknown = 0;

async function handle(j) {
  const r = await probe(j.link);
  j.linkCheckedAt = nowIso;
  checked++;
  if (r === "dead") {
    j.linkFails = (j.linkFails || 0) + 1;
    if (j.linkFails >= STRIKES && !j.linkDead) { j.linkDead = true; marked++; }
  } else if (r === "alive") {
    if (j.linkFails) delete j.linkFails;
    if (j.linkDead) { delete j.linkDead; cleared++; }
  } else {
    unknown++; // 未知：不改 linkDead / linkFails，仅更新 linkCheckedAt 以参与轮换
  }
}

// 简单并发池
async function run() {
  let idx = 0;
  async function worker() { while (idx < candidates.length) { const j = candidates[idx++]; await handle(j); } }
  await Promise.all(Array.from({ length: Math.min(CONCURRENCY, candidates.length || 1) }, worker));
}

await run();

// 写回 data.js（保留文件头注释）
writeData(D);

// 重建静态页 + sitemap（反映 linkDead）
const pages = genJobPages(D);

const deadTotal = (D.jobs || []).filter(j => j.linkDead).length;
console.log(`🔗 探活完成：检查 ${checked}（候选 ${candidates.length}/${(D.jobs || []).length}）| 新标下线 ${marked} | 复活清除 ${cleared} | 未知 ${unknown} | 当前下线总数 ${deadTotal} | 重建静态页 ${pages}`);
