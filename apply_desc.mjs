#!/usr/bin/env node
// ============================================================================
//  apply_desc.mjs — 把抓到的【完整 JD 正文】合并进 descriptions.json（按岗位 id）
//  正文不入 data.js，只存 descriptions.json（供 gen_job_pages 生成静态页）。
//  用法：node apply_desc.mjs descs.json
//    descs.json = [{ "id": "<岗位id>", "description": "<正文>" }, ...] 或 { "<id>": "<正文>" }
//  严禁编造；正文轻清洗、上限 4000 字；合并后重建静态页 / sitemap / feed。
// ============================================================================
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { loadDescs, saveDescs } from "./descstore.mjs";
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
const validIds = new Set(D.jobs.map(j => j.id || keyOf(j)));

const incoming = JSON.parse(fs.readFileSync(inFile, "utf-8"));
const pairs = Array.isArray(incoming) ? incoming.map(it => [it && it.id, it && it.description]) : Object.entries(incoming || {});

const DESC = loadDescs();
let applied = 0;
for (const [id, desc] of pairs) {
  if (!id || !desc) continue;
  const c = clean(desc);
  if (c.length < 20) continue;
  if (!validIds.has(id)) continue; // 只接受能对上岗位的 id
  DESC[id] = c; applied++;
}
const total = saveDescs(DESC);
const pages = genJobPages(D);
console.log(`📝 合并 ${applied} 条 → descriptions.json（共 ${total} 条正文）| 重建静态页 ${pages}`);
