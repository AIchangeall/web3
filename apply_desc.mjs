#!/usr/bin/env node
// ============================================================================
//  apply_desc.mjs — 把抓取到的岗位【完整 JD 正文】合并进 data.js 的 description 字段
//
//  用法：node apply_desc.mjs descs.json
//    descs.json 形如 [{ "id": "<job id>", "description": "<完整正文>" }, ...]
//                或   { "<job id>": "<完整正文>", ... }
//
//  约定（守真实性）：
//   - description 必须是从原招聘页抓取的真实正文（职责 + 要求等），保留换行；严禁编造。
//   - 按 job.id 匹配；缺 id 的岗位回退用 company||position 规则匹配。
//   - 正文做轻度清洗：去首尾空白、合并 3+ 连续空行为 2 行、上限 4000 字。
//   - 合并后重建 jobs/ 静态页与 sitemap.xml / feed.xml（前端据 description 展示全文）。
//  幂等：同一 descs 重复跑只是覆盖同值。
// ============================================================================
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { generate as genJobPages } from "./gen_job_pages.mjs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const DATA_FILE = path.join(__dirname, "data.js");
const inFile = process.argv[2];
if (!inFile) { console.error("用法: node apply_desc.mjs descs.json"); process.exit(1); }

const slug = s => (s || "").toLowerCase().replace(/[^a-z0-9一-龥]+/g, "-").replace(/(^-|-$)/g, "");
const keyOf = j => slug(j.company) + "||" + slug(j.position);
const clean = s => String(s || "").replace(/\r\n/g, "\n").replace(/[ \t]+\n/g, "\n").replace(/\n{3,}/g, "\n\n").trim().slice(0, 4000);

const raw = fs.readFileSync(DATA_FILE, "utf-8");
const objStart = raw.indexOf("{", raw.indexOf("window.WEB3_JOBS_DATA"));
const D = JSON.parse(raw.slice(objStart, raw.lastIndexOf("}") + 1));

// 归一化输入为 id -> description
const incoming = JSON.parse(fs.readFileSync(inFile, "utf-8"));
const map = {};
if (Array.isArray(incoming)) for (const it of incoming) { if (it && it.id && it.description) map[it.id] = it.description; }
else for (const k of Object.keys(incoming || {})) { if (incoming[k]) map[k] = incoming[k]; }

let applied = 0;
for (const j of D.jobs || []) {
  const id = j.id || keyOf(j);
  const desc = map[id] != null ? map[id] : (map[keyOf(j)] != null ? map[keyOf(j)] : null);
  if (desc != null) {
    const c = clean(desc);
    if (c && c.length >= 20) { j.description = c; applied++; }
  }
}

const header = raw.slice(0, raw.indexOf("window.WEB3_JOBS_DATA"));
fs.writeFileSync(DATA_FILE, header + "window.WEB3_JOBS_DATA = " + JSON.stringify(D, null, 2) + ";\n");

const pages = genJobPages(D);
const withDesc = (D.jobs || []).filter(j => j.description).length;
console.log(`📝 合并完成：本次写入 ${applied} 条 description | 已有完整正文岗位共 ${withDesc}/${(D.jobs || []).length} | 重建静态页 ${pages}`);
