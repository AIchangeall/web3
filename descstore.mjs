// ============================================================================
//  descstore.mjs — 职位完整 JD 正文的存储（descriptions.json，{ id: 正文 }）
//  正文【不放进 data.js】（避免前端每页加载的 data.js 膨胀），只供 gen_job_pages.mjs
//  生成岗位静态页时使用；前端详情弹层展示摘要 + 跳转静态页看全文。
//  各抓取脚本（crawl_ats / fetch_desc / apply_desc）统一经此读写。
// ============================================================================
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const FILE = path.join(path.dirname(fileURLToPath(import.meta.url)), "descriptions.json");

export function loadDescs() {
  try { return JSON.parse(fs.readFileSync(FILE, "utf-8")); } catch (e) { return {}; }
}
export function saveDescs(map) {
  // 按 key 排序后紧凑写入，减小体积并保证 diff 稳定
  const sorted = {};
  for (const k of Object.keys(map).sort()) if (map[k]) sorted[k] = map[k];
  fs.writeFileSync(FILE, JSON.stringify(sorted) + "\n");
  return Object.keys(sorted).length;
}
