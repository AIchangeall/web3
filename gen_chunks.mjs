// ============================================================================
//  gen_chunks.mjs — data.js 分页/懒加载架构
//
//  把 data.js 拆成两层：
//   - data.js（manifest，极小、同步 <script>）：lastUpdated / lastUpdatedAt /
//     snapshotNote / changelog / companies / totalJobs / chunks: [...]
//   - data-jobs-1.json … data-jobs-N.json（每块 CHUNK_SIZE 个岗位，紧凑 JSON）：浏览器
//     并行 fetch。jobs 按 firstSeen desc 排序，故第一块=最新岗位（命中默认排序）。
//
//  统一对外暴露 readData()/writeData()，所有数据脚本（apply_update/crawl_ats/crawl_moka/
//  check_links/apply_desc/fetch_desc）经此读写，避免膨胀回 data.js。
// ============================================================================
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const DATA_FILE = path.join(__dirname, "data.js");
const CHUNK_SIZE = 500;
const MAX_CHUNKS_CLEANUP = 50; // 容错：清理过去残留的多余 chunk 文件

const DEFAULT_HEADER = `// ============================================================================
//  Web3 行业全职能岗位数据源（机器可维护，分页 manifest + data-jobs-*.json 分块）
//  本文件是 manifest（极小，同步 <script> 加载）；岗位正文在 descriptions.json，
//  岗位数组分块在 data-jobs-1.json 等，浏览器异步并行 fetch 后拼成完整列表。
//  字段结构：{ lastUpdated, lastUpdatedAt, snapshotNote, changelog[], companies{},
//             totalJobs, chunks:[...] }
// ============================================================================
`;

function preservedHeader() {
  try {
    const raw = fs.readFileSync(DATA_FILE, "utf-8");
    const idx = raw.indexOf("window.WEB3_JOBS_DATA");
    if (idx > 0) return raw.slice(0, idx);
  } catch (e) { }
  return DEFAULT_HEADER;
}

export function readData() {
  const raw = fs.readFileSync(DATA_FILE, "utf-8");
  const idx = raw.indexOf("{", raw.indexOf("window.WEB3_JOBS_DATA"));
  const D = JSON.parse(raw.slice(idx, raw.lastIndexOf("}") + 1));
  // 若是分块 manifest，则把所有分块拼起来
  if (!Array.isArray(D.jobs) && Array.isArray(D.chunks)) {
    D.jobs = [];
    for (const f of D.chunks) {
      try {
        const arr = JSON.parse(fs.readFileSync(path.join(__dirname, f), "utf-8"));
        if (Array.isArray(arr)) D.jobs.push(...arr);
      } catch (e) { /* 缺一块就跳过，整体仍可用 */ }
    }
  } else if (!Array.isArray(D.jobs)) {
    D.jobs = [];
  }
  return D;
}

export function writeData(D) {
  // jobs 按 firstSeen desc 排序：第一块即最新岗位（命中默认 latest 排序）
  const jobs = (D.jobs || []).slice().sort((a, b) => (b.firstSeen || "").localeCompare(a.firstSeen || ""));

  // 切块写文件（紧凑 JSON）
  const chunkFiles = [];
  for (let i = 0; i < jobs.length; i += CHUNK_SIZE) {
    const name = `data-jobs-${(i / CHUNK_SIZE) + 1}.json`;
    fs.writeFileSync(path.join(__dirname, name), JSON.stringify(jobs.slice(i, i + CHUNK_SIZE)));
    chunkFiles.push(name);
  }
  // 清理超出当前数量的残留 chunk
  for (let i = chunkFiles.length; i < MAX_CHUNKS_CLEANUP; i++) {
    const stale = path.join(__dirname, `data-jobs-${i + 1}.json`);
    if (fs.existsSync(stale)) { try { fs.unlinkSync(stale); } catch (e) { } }
  }

  // manifest（保留头部注释、控制字段顺序便于 diff）
  const manifest = {
    lastUpdated: D.lastUpdated,
    lastUpdatedAt: D.lastUpdatedAt,
    snapshotNote: D.snapshotNote,
    changelog: D.changelog || [],
    companies: D.companies || {},
    totalJobs: jobs.length,
    chunks: chunkFiles,
  };
  fs.writeFileSync(DATA_FILE, preservedHeader() + "window.WEB3_JOBS_DATA = " + JSON.stringify(manifest, null, 2) + ";\n");

  return { totalJobs: jobs.length, chunks: chunkFiles.length };
}

// 允许直接 `node gen_chunks.mjs` 一键重切（从现有 data.js 迁移用）
if (import.meta.url === `file://${process.argv[1]}`) {
  const D = readData();
  const r = writeData(D);
  console.log(`✅ 切分完成：${r.totalJobs} 个岗位 → ${r.chunks} 个 chunk 文件`);
}
