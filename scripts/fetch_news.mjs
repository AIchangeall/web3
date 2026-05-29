#!/usr/bin/env node
/**
 * fetch_news.mjs — 通过 Anthropic API + web_search 抓取加密行业资讯
 * 用法: node scripts/fetch_news.mjs <market|geopolitics>
 * 输出: ./news_input.json (供 apply_news.mjs 读取)
 */
import Anthropic from "@anthropic-ai/sdk";
import { writeFileSync } from "node:fs";

const TYPE = process.argv[2];
if (!["market", "geopolitics"].includes(TYPE)) {
  console.error("Usage: node scripts/fetch_news.mjs <market|geopolitics>");
  process.exit(1);
}

const today = new Date().toISOString().slice(0, 10);
const nowIso = new Date().toISOString();

const PROMPTS = {
  market: `你是 Web3 行情编辑。请搜索过去 24-48 小时内最重要的加密货币市场资讯。
关注方向：BTC/ETH 重大价格波动、ETF 资金流入/流出、机构大额买卖、重要 DeFi 事件、宏观经济对加密的影响、主要交易所事件。

筛选 3-6 条最有价值的新闻，以 JSON 数组返回，格式如下（不要加任何 markdown 或说明文字，只返回纯 JSON）：
[
  {
    "type": "market",
    "title": "中文标题，20字以内",
    "summary": "中文摘要，50-80字，客观描述事件与市场影响",
    "url": "原文链接（必须真实可访问）",
    "source": "媒体来源名称，如 CoinDesk",
    "publishedAt": "${today}T00:00:00.000Z"
  }
]
规则：只输出 JSON 数组；标题和摘要必须是中文；没有可靠原文链接的条目不要包含；不要编造内容。`,

  geopolitics: `你是 Web3 地缘政治编辑。请搜索过去 24-72 小时内最重要的加密货币监管与地缘政治资讯。
关注方向：主要国家出台加密法规或禁令、议会/国会加密相关立法、制裁与 OFAC 执法、央行数字货币 CBDC 进展、稳定币监管动态、主要交易所在特定国家获批或被禁。

筛选 3-6 条最有价值的新闻，以 JSON 数组返回，格式如下（不要加任何 markdown 或说明文字，只返回纯 JSON）：
[
  {
    "type": "geopolitics",
    "title": "中文标题，20字以内",
    "summary": "中文摘要，50-80字，客观描述政策内容与影响",
    "url": "原文链接（必须真实可访问）",
    "source": "媒体来源名称，如 Reuters",
    "publishedAt": "${today}T00:00:00.000Z"
  }
]
规则：只输出 JSON 数组；标题和摘要必须是中文；没有可靠原文链接的条目不要包含；不得包含政治立场或主观评论；不要编造内容。`
};

const client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });

console.log(`[fetch_news] type=${TYPE} date=${today}`);

let msg;
try {
  msg = await client.messages.create({
    model: "claude-sonnet-4-6",
    max_tokens: 4096,
    tools: [{ type: "web_search_20250305", name: "web_search" }],
    messages: [{ role: "user", content: PROMPTS[TYPE] }]
  });
} catch (err) {
  console.error("Anthropic API error:", err.message);
  writeFileSync("news_input.json", "[]", "utf8");
  process.exit(0);
}

const text = msg.content
  .filter(b => b.type === "text")
  .map(b => b.text)
  .join("");

console.log("[fetch_news] model response (text blocks):\n", text.slice(0, 500));

const match = text.match(/\[[\s\S]*\]/);
if (!match) {
  console.log("[fetch_news] No JSON array found, writing empty array");
  writeFileSync("news_input.json", "[]", "utf8");
  process.exit(0);
}

let items;
try {
  items = JSON.parse(match[0]);
} catch (e) {
  console.error("[fetch_news] JSON parse error:", e.message);
  writeFileSync("news_input.json", "[]", "utf8");
  process.exit(0);
}

// 确保 publishedAt 和 type 字段正确
items = items
  .filter(it => it.url && it.title && it.summary)
  .map(it => ({
    type: TYPE,
    title: String(it.title).trim(),
    summary: String(it.summary).trim(),
    url: String(it.url).trim(),
    source: String(it.source || "").trim() || undefined,
    publishedAt: it.publishedAt || nowIso
  }));

writeFileSync("news_input.json", JSON.stringify(items, null, 2), "utf8");
console.log(`[fetch_news] Written ${items.length} items to news_input.json`);
