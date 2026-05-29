#!/usr/bin/env node
/* ============================================================================
 * apply_news.mjs — 把抓取到的资讯（行业要闻 / 招聘动态）归并写入 news.json
 *
 * 输入：news_input.json (数组)
 *   [{ "type":"industry"|"hiring", "title", "summary", "url", "source",
 *      "publishedAt":"ISO 时间", "tag":"(可选)分类标签" }, ...]
 *
 * 输出：news.json
 *   { "updated":"yyyy-mm-dd", "updatedAt":"ISO", "industry":[...], "hiring":[...] }
 *
 * 规则：
 *   - 用 URL 去重（域名去 utm_* / fbclid / gclid 等追踪参数；末尾 / 归一）
 *   - 按 publishedAt 倒序；同时间按出现顺序
 *   - 每类最多保留 12 条，前端默认展示前 5–6 条
 *   - 字段清洗：title/summary 去多余空白；source 缺省用域名
 *   - 同一天重复运行幂等：完全相同 URL+title 不会重复
 * ========================================================================== */
import fs from "node:fs";
import path from "node:path";

const NEWS_FILE = path.resolve("./news.json");
const PER_CATEGORY_CAP = 12;

function readInput(p) {
  const txt = fs.readFileSync(p, "utf8");
  const arr = JSON.parse(txt);
  if (!Array.isArray(arr)) throw new Error("news_input.json 必须是数组");
  return arr;
}

function normalizeUrl(u) {
  if (!u) return "";
  try {
    const url = new URL(u);
    // 剔除常见追踪参数
    [...url.searchParams.keys()].forEach(k => {
      if (/^(utm_.*|fbclid|gclid|mc_eid|mc_cid|igshid|ref|spm)$/i.test(k)) url.searchParams.delete(k);
    });
    // 末尾斜杠归一
    let s = url.toString();
    if (s.endsWith("/")) s = s.slice(0, -1);
    return s;
  } catch { return String(u).trim(); }
}

function hostOf(u) {
  try { return new URL(u).hostname.replace(/^www\./, ""); } catch { return ""; }
}

function tidy(s) {
  if (s == null) return "";
  return String(s).replace(/\s+/g, " ").trim();
}

function pickTime(p) {
  if (!p) return null;
  try {
    const d = new Date(p);
    if (isNaN(d.getTime())) return null;
    return d.toISOString();
  } catch { return null; }
}

function clean(item) {
  const url = normalizeUrl(item.url || "");
  if (!url) return null;
  const title = tidy(item.title);
  if (!title) return null;
  const type = (item.type || "").toLowerCase();
  if (type !== "industry" && type !== "hiring") return null;
  return {
    type,
    title,
    summary: tidy(item.summary).slice(0, 220),
    url,
    source: tidy(item.source) || hostOf(url),
    publishedAt: pickTime(item.publishedAt) || new Date().toISOString(),
    tag: tidy(item.tag).slice(0, 24) || ""
  };
}

function loadExisting() {
  if (!fs.existsSync(NEWS_FILE)) return { industry: [], hiring: [] };
  try {
    const j = JSON.parse(fs.readFileSync(NEWS_FILE, "utf8"));
    return { industry: Array.isArray(j.industry) ? j.industry : [], hiring: Array.isArray(j.hiring) ? j.hiring : [] };
  } catch { return { industry: [], hiring: [] }; }
}

function dedupeMerge(existing, incoming) {
  const seen = new Map();
  for (const it of existing) seen.set(it.url, it);
  let added = 0;
  for (const it of incoming) {
    if (!seen.has(it.url)) { seen.set(it.url, it); added++; }
    else {
      // 已有则用新版本覆盖（更新 summary / source / publishedAt 等）
      const old = seen.get(it.url);
      seen.set(it.url, { ...old, ...it });
    }
  }
  return { merged: [...seen.values()], added };
}

function sortAndCap(arr) {
  return arr
    .filter(x => x && x.url && x.title)
    .sort((a, b) => (b.publishedAt || "").localeCompare(a.publishedAt || ""))
    .slice(0, PER_CATEGORY_CAP);
}

function main() {
  const inputPath = process.argv[2];
  if (!inputPath) {
    console.error("用法：node apply_news.mjs news_input.json");
    process.exit(1);
  }
  const raw = readInput(inputPath);
  const cleaned = raw.map(clean).filter(Boolean);

  const incomingInd = cleaned.filter(x => x.type === "industry");
  const incomingHir = cleaned.filter(x => x.type === "hiring");

  const existing = loadExisting();
  const ind = dedupeMerge(existing.industry, incomingInd);
  const hir = dedupeMerge(existing.hiring, incomingHir);

  const today = new Date().toISOString().slice(0, 10);
  const out = {
    updated: today,
    updatedAt: new Date().toISOString(),
    industry: sortAndCap(ind.merged),
    hiring: sortAndCap(hir.merged)
  };
  fs.writeFileSync(NEWS_FILE, JSON.stringify(out, null, 2) + "\n");
  console.log(
    `news.json 已更新：行业要闻 ${out.industry.length}（本次新增 ${ind.added}），招聘动态 ${out.hiring.length}（本次新增 ${hir.added}）`
  );
}

main();
