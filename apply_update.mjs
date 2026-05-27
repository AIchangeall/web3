#!/usr/bin/env node
// ============================================================================
//  apply_update.mjs — 把"今日抓取到的岗位"合并进 data.js 的确定性脚本
//
//  用法：
//    node apply_update.mjs new_jobs.json [--date YYYY-MM-DD] [--note "说明"]
//
//  约定：
//   - new_jobs.json 是一个数组，每个元素为一个岗位对象（字段见 data.js 头注释）。
//   - 若新岗位的 company+position 已存在 → 视为仍在招，刷新其 lastSeen=当日；
//     否则视为今日新增 → 自动补 firstSeen=lastSeen=当日，并置顶。
//   - 同步：bump lastUpdated；在 changelog 顶部插入一条当日记录。
//   - 不会自动删除旧岗位（招聘聚合源常不完整，避免误删）。
//   - 幂等：同一天对同一批数据重复运行，不会重复计数为新增。
// ============================================================================
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { extractKeywords, extractDuties } from "./keywords.mjs";
import { generate as genJobPages } from "./gen_job_pages.mjs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const DATA_FILE = path.join(__dirname, "data.js");

function arg(flag, dflt) {
  const i = process.argv.indexOf(flag);
  return i >= 0 && process.argv[i + 1] ? process.argv[i + 1] : dflt;
}
const today = arg("--date", new Date().toISOString().slice(0, 10));
const note = arg("--note", null);
const newFile = process.argv[2];
if (!newFile || newFile.startsWith("--")) {
  console.error("用法: node apply_update.mjs new_jobs.json [--date YYYY-MM-DD] [--note \"说明\"]");
  process.exit(1);
}

// 读取当前 data.js（它是 window.WEB3_JOBS_DATA = {...}; 形式）
const raw = fs.readFileSync(DATA_FILE, "utf-8");
const assignAt = raw.indexOf("window.WEB3_JOBS_DATA");
const objStart = raw.indexOf("{", assignAt);
const json = raw.slice(objStart, raw.lastIndexOf("}") + 1);
const D = JSON.parse(json);

// 读取今日抓取数据
const incoming = JSON.parse(fs.readFileSync(newFile, "utf-8"));
if (!Array.isArray(incoming)) { console.error("new_jobs.json 必须是数组"); process.exit(1); }

const slug = s => (s || "").toLowerCase().replace(/[^a-z0-9一-龥]+/g, "-").replace(/(^-|-$)/g, "");
const keyOf = j => slug(j.company) + "||" + slug(j.position);

const existing = new Map(D.jobs.map(j => [keyOf(j), j]));

let added = 0, refreshed = 0;
const freshOnes = [];
for (const j of incoming) {
  const k = keyOf(j);
  if (existing.has(k)) {
    existing.get(k).lastSeen = today;          // 仍在招，刷新
    refreshed++;
  } else {
    j.firstSeen = today;
    j.lastSeen = today;
    if (!j.id) j.id = keyOf(j);
    freshOnes.push(j);
    existing.set(k, j);
    added++;
  }
}

// 新岗位置顶
D.jobs = freshOnes.concat(D.jobs);
D.lastUpdated = today;                          // 日期：用于 firstSeen/NEW 比对与 changelog 分组
D.lastUpdatedAt = new Date().toISOString();     // 完整时间戳(UTC)：前端转本地时区显示到分钟

// 确保每个公司在 companies 映射中都有条目（新公司留空简介，待人工/后续补全）
D.companies = D.companies || {};
for (const j of D.jobs) { if (!D.companies[j.company]) D.companies[j.company] = { intro: "" }; }

// 为缺少 keywords / duties 的岗位自动派生岗位关键字与职责关键词
for (const j of D.jobs) {
  const text = (j.position || "") + " " + (j.requirements || "");
  if (!Array.isArray(j.keywords) || !j.keywords.length) j.keywords = extractKeywords(text);
  if (!Array.isArray(j.duties) || !j.duties.length) j.duties = extractDuties(text);
}

// 写 changelog：同一天累计（每 5 小时多次运行会累加当日新增；同一批数据重复跑 added=0，保持幂等）
D.changelog = D.changelog || [];
const sameDay = D.changelog.find(c => c.date === today);
if (sameDay) {
  sameDay.added = (sameDay.added || 0) + added;
  sameDay.note = note || `当日累计新增 ${sameDay.added} 个岗位${refreshed ? `；本次刷新 ${refreshed} 个` : ""}。`;
} else {
  const defaultNote = added
    ? `新增 ${added} 个岗位${refreshed ? `，刷新 ${refreshed} 个在招岗位` : ""}。`
    : (refreshed ? `无新增，刷新 ${refreshed} 个在招岗位。` : "今日无变化。");
  D.changelog.unshift({ date: today, added, removed: 0, note: note || defaultNote });
}

// 序列化回 JSON 风格的 data.js（保留文件头注释）
const headerEnd = raw.indexOf("window.WEB3_JOBS_DATA");
const header = headerEnd > 0 ? raw.slice(0, headerEnd) : "";
fs.writeFileSync(DATA_FILE, header + "window.WEB3_JOBS_DATA = " + JSON.stringify(D, null, 2) + ";\n");

// 同步重建每岗位静态页（jobs/<id>.html，含 JobPosting 结构化数据）与 sitemap.xml
const pages = genJobPages(D);

console.log(`✅ 更新完成 @ ${today}  新增 ${added} | 刷新 ${refreshed} | 岗位总数 ${D.jobs.length} | 静态页 ${pages}`);
