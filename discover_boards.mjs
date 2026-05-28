#!/usr/bin/env node
// ============================================================================
//  discover_boards.mjs — 探测 web3 top 公司的 ATS 招聘板（Lever/Greenhouse/Ashby）
//
//  做法：维护一份 CANDIDATES（公司 → 候选 slug 列表跨 ATS），逐一调用各 ATS 的列表接口，
//  只接受【返回 >0 个开放职位】的命中，写入 boards.json（[{company,category,ats,id,count}]）。
//  crawl_ats.mjs 会读 boards.json 来抓全量真实职位与 JD 正文。
//
//  用法：node discover_boards.mjs            （探测 + 写 boards.json）
//        node discover_boards.mjs --dry      （只打印结果，不写）
// ============================================================================
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const DRY = process.argv.includes("--dry");
const TIMEOUT = 12000;
const UA = "Mozilla/5.0 (compatible; ChainHireBot/1.0; +https://gmjobs.github.io/chainhire/)";

// 候选清单：{ company, category, tries:[{ats, id}] }
// ats: lever | greenhouse | ashby ；id 为该 ATS 中的 slug/org（公司名常见小写无空格变体）
const CANDIDATES = [
  // —— 交易所 ——
  { c: "Coinbase", k: "exchange", t: [["greenhouse","coinbase"],["lever","coinbase"]] },
  { c: "Kraken", k: "exchange", t: [["greenhouse","kraken"],["lever","kraken"]] },
  { c: "Bybit", k: "exchange", t: [["lever","bybit"],["greenhouse","bybit"]] },
  { c: "KuCoin", k: "exchange", t: [["lever","kucoin"],["greenhouse","kucoin"]] },
  { c: "Robinhood", k: "exchange", t: [["greenhouse","robinhood"],["greenhouse","robinhoodcrypto"]] },
  { c: "BitGo", k: "other", t: [["greenhouse","bitgo"],["lever","bitgo"]] },
  { c: "Gemini", k: "exchange", t: [["greenhouse","gemini"],["lever","gemini"]] },
  { c: "OKX", k: "exchange", t: [["greenhouse","okx"]] },
  { c: "Bitstamp", k: "exchange", t: [["lever","bitstamp"],["greenhouse","bitstamp"]] },
  { c: "Crypto.com", k: "exchange", t: [["lever","crypto"]] },
  { c: "MEXC", k: "exchange", t: [["lever","mexc"]] },
  { c: "Phemex", k: "exchange", t: [["lever","phemex"]] },
  { c: "Hyperliquid Labs", k: "exchange", t: [["ashby","Hyperliquid Labs"]] },
  { c: "Backpack Exchange", k: "exchange", t: [["ashby","backpack"]] },
  { c: "Eclipse Labs", k: "chain", t: [["ashby","eclipse"],["lever","eclipse"]] },
  // —— 公链 / L2 / 协议 ——
  { c: "Ethereum Foundation", k: "chain", t: [["lever","ethereumfoundation"],["lever","ethereum"]] },
  { c: "Solana Foundation", k: "chain", t: [["greenhouse","solana"],["greenhouse","solanafoundation"],["lever","solana"]] },
  { c: "Sui Foundation / Mysten Labs", k: "chain", t: [["greenhouse","mystenlabs"],["lever","mystenlabs"]] },
  { c: "Aptos Labs", k: "chain", t: [["greenhouse","aptoslabs"]] },
  { c: "Polygon Labs", k: "chain", t: [["greenhouse","polygon"],["greenhouse","polygontechnology"],["greenhouse","polygonlabs"],["lever","polygon"]] },
  { c: "Avalanche / Ava Labs", k: "chain", t: [["greenhouse","avalabs"],["greenhouse","avalanche"]] },
  { c: "Matter Labs (zkSync)", k: "chain", t: [["greenhouse","matterlabs"],["greenhouse","zksync"],["ashby","matter-labs"]] },
  { c: "Consensys (MetaMask)", k: "defi", t: [["greenhouse","consensys"]] },
  { c: "Scroll", k: "chain", t: [["ashby","scroll"],["greenhouse","scroll"]] },
  { c: "Mantle", k: "chain", t: [["greenhouse","mantlenetwork"],["lever","mantle"]] },
  { c: "Sei Labs", k: "chain", t: [["lever","seilabs"],["greenhouse","seilabs"],["ashby","sei"]] },
  { c: "Monad Foundation", k: "chain", t: [["ashby","monad.foundation"]] },
  { c: "Berachain", k: "chain", t: [["ashby","berachain"],["lever","berachain"]] },
  { c: "Celestia", k: "chain", t: [["lever","celestia"],["greenhouse","celestia"]] },
  { c: "Initia", k: "chain", t: [["ashby","initia"]] },
  { c: "Movement Labs", k: "chain", t: [["ashby","movement"],["greenhouse","movementlabs"]] },
  { c: "NEAR Foundation", k: "chain", t: [["greenhouse","nearfoundation"],["lever","near"]] },
  { c: "Cardano (IOG)", k: "chain", t: [["greenhouse","iohk"],["lever","iohk"]] },
  { c: "Filecoin Foundation", k: "infra", t: [["greenhouse","filecoinfoundation"]] },
  { c: "Protocol Labs", k: "infra", t: [["greenhouse","protocollabs"]] },
  { c: "Worldcoin", k: "other", t: [["greenhouse","toolsforhumanity"],["ashby","worldcoin"]] },
  // —— DeFi / 钱包 ——
  { c: "Uniswap Labs", k: "defi", t: [["ashby","Uniswap"],["ashby","uniswap"]] },
  { c: "MakerDAO / Sky", k: "defi", t: [["greenhouse","sky"],["greenhouse","makerdao"]] },
  { c: "Lido", k: "defi", t: [["lever","lido"]] },
  { c: "Compound Labs", k: "defi", t: [["lever","compound"]] },
  { c: "Curve", k: "defi", t: [["lever","curve"]] },
  { c: "Synthetix", k: "defi", t: [["lever","synthetix"]] },
  { c: "1inch", k: "defi", t: [["lever","1inch"]] },
  { c: "Eigen Labs", k: "infra", t: [["ashby","eigenlabs"]] },
  { c: "Pendle", k: "defi", t: [["ashby","pendle"]] },
  { c: "Morpho", k: "defi", t: [["ashby","morpho-labs"],["ashby","morpho"]] },
  { c: "Across (Risk Labs)", k: "defi", t: [["greenhouse","risklabs"],["lever","risklabs"]] },
  { c: "EigenLayer (Eigen Labs)", k: "infra", t: [["ashby","eigenlabs"]] },
  { c: "Pyth Network", k: "infra", t: [["ashby","pyth"],["lever","pyth"]] },
  { c: "Polymarket", k: "defi", t: [["ashby","polymarket"],["greenhouse","polymarket"]] },
  { c: "Phantom", k: "defi", t: [["ashby","phantom"]] },
  { c: "Consensys (MetaMask)", k: "defi", t: [["greenhouse","consensys"]] },
  { c: "Rainbow", k: "defi", t: [["ashby","rainbow"]] },
  { c: "Trust Wallet", k: "defi", t: [["ashby","trust-wallet"],["ashby","trustwallet"]] },
  { c: "Ledger", k: "other", t: [["ashby","ledger"],["greenhouse","ledger"],["lever","ledger"]] },
  { c: "Magic Eden", k: "other", t: [["greenhouse","magiceden"],["ashby","magic-eden"]] },
  { c: "OpenSea", k: "other", t: [["greenhouse","opensea"],["lever","opensea"]] },
  { c: "Safe (Gnosis Safe)", k: "infra", t: [["ashby","safeglobal"],["lever","safe"]] },
  { c: "WalletConnect (Reown)", k: "infra", t: [["ashby","walletconnect"],["ashby","reown"]] },
  { c: "Lit Protocol", k: "infra", t: [["ashby","litprotocol"],["lever","litprotocol"]] },
  // —— 基础设施 ——
  { c: "Alchemy", k: "infra", t: [["greenhouse","alchemy"]] },
  { c: "Consensys (MetaMask)", k: "defi", t: [["greenhouse","consensys"]] },
  { c: "QuickNode", k: "infra", t: [["ashby","quicknode"]] },
  { c: "Ankr", k: "infra", t: [["lever","ankr"]] },
  { c: "Chainstack", k: "infra", t: [["lever","chainstack"],["greenhouse","chainstack"]] },
  { c: "Blockdaemon", k: "infra", t: [["greenhouse","blockdaemon"],["lever","blockdaemon"]] },
  { c: "Kiln", k: "infra", t: [["lever","kiln"],["ashby","kiln"]] },
  { c: "Figment", k: "infra", t: [["lever","figment"],["greenhouse","figment"]] },
  { c: "P2P.org", k: "infra", t: [["lever","p2p"],["lever","p2p-org"]] },
  { c: "The Graph (Edge & Node)", k: "infra", t: [["lever","edgeandnode"],["greenhouse","edgeandnode"]] },
  { c: "Helius", k: "infra", t: [["ashby","helius"]] },
  { c: "thirdweb", k: "infra", t: [["ashby","thirdweb"]] },
  { c: "Foundry", k: "infra", t: [["greenhouse","foundrydigital"]] },
  // —— 托管 / 交易 / 机构 ——
  { c: "Anchorage Digital", k: "other", t: [["lever","anchorage"]] },
  { c: "Fireblocks", k: "other", t: [["greenhouse","fireblocks"]] },
  { c: "Copper.co", k: "other", t: [["lever","copper"],["greenhouse","copper"]] },
  { c: "Galaxy Digital", k: "other", t: [["greenhouse","galaxydigitalservices"]] },
  { c: "Paxos", k: "other", t: [["greenhouse","paxos"],["lever","paxos"]] },
  { c: "Circle", k: "other", t: [["greenhouse","circle"],["lever","circle"]] },
  { c: "Ripple", k: "other", t: [["greenhouse","ripple"],["lever","ripple"]] },
  { c: "Cumberland (DRW)", k: "other", t: [["greenhouse","drw"]] },
  { c: "FalconX", k: "other", t: [["greenhouse","falconx"],["lever","falconx"]] },
  // —— 安全 / 审计 ——
  { c: "Trail of Bits", k: "infra", t: [["ashby","trail-of-bits"],["greenhouse","trailofbits"]] },
  { c: "CertiK", k: "infra", t: [["lever","certik"]] },
  { c: "Halborn", k: "infra", t: [["ashby","halborn"]] },
  { c: "Quantstamp", k: "infra", t: [["ashby","quantstamp"]] },
  { c: "Veridise", k: "infra", t: [["ashby","veridise"]] },
  { c: "Hacken", k: "infra", t: [["ashby","hacken"]] },
  { c: "Certora", k: "infra", t: [["ashby","certora"]] },
  { c: "Spearbit", k: "infra", t: [["ashby","spearbit"]] },
  { c: "Cyfrin", k: "infra", t: [["ashby","cyfrin"]] },
  // —— 分析 / 数据 ——
  { c: "Chainalysis", k: "infra", t: [["greenhouse","chainalysis"]] },
  { c: "TRM Labs", k: "infra", t: [["ashby","trm-labs"]] },
  { c: "Elliptic", k: "infra", t: [["greenhouse","elliptic"],["lever","elliptic"]] },
  { c: "Dune Analytics", k: "infra", t: [["ashby","dune"],["ashby","duneanalytics"]] },
  { c: "Nansen", k: "infra", t: [["ashby","nansen"]] },
  { c: "Messari", k: "infra", t: [["lever","messari"],["ashby","messari"]] },
  { c: "Glassnode", k: "infra", t: [["greenhouse","glassnode"]] },
  // —— 支付 / On-off ramp ——
  { c: "MoonPay", k: "other", t: [["lever","moonpay"]] },
  { c: "Ramp Network", k: "other", t: [["ashby","ramp"],["greenhouse","ramp"]] },
  { c: "Transak", k: "other", t: [["ashby","transak"]] },
  { c: "Mercuryo", k: "other", t: [["lever","mercuryo"]] },
  // —— 游戏 / NFT / 社交 ——
  { c: "Sky Mavis", k: "other", t: [["ashby","skymavis"]] },
  { c: "Yuga Labs", k: "other", t: [["greenhouse","yugalabs"],["ashby","yugalabs"]] },
  { c: "Animoca Brands", k: "other", t: [["lever","animocabrands"]] },
  { c: "Immutable", k: "infra", t: [["lever","immutable"]] },
  { c: "Mythical Games", k: "other", t: [["lever","mythicalgames"]] },
  { c: "Farcaster", k: "other", t: [["ashby","farcaster"],["ashby","merkle-manufactory"]] },
];

async function probeLever(id) { const r = await fetch("https://api.lever.co/v0/postings/" + id + "?mode=json", { signal: AbortSignal.timeout(TIMEOUT), headers: { "User-Agent": UA } }); if (!r.ok) return 0; const a = await r.json(); return Array.isArray(a) ? a.length : 0; }
async function probeGreenhouse(id) { const r = await fetch("https://boards-api.greenhouse.io/v1/boards/" + id + "/jobs", { signal: AbortSignal.timeout(TIMEOUT), headers: { "User-Agent": UA } }); if (!r.ok) return 0; const o = await r.json(); return (o.jobs || []).length; }
async function probeAshby(id) { const r = await fetch("https://api.ashbyhq.com/posting-api/job-board/" + encodeURIComponent(id), { signal: AbortSignal.timeout(TIMEOUT), headers: { "User-Agent": UA } }); if (!r.ok) return 0; const o = await r.json(); return ((o.jobs || []).filter(j => j.isListed !== false)).length; }
const probers = { lever: probeLever, greenhouse: probeGreenhouse, ashby: probeAshby };

const found = [];   // {company, category, ats, id, count}
const seenCompanies = new Set();
let probes = 0, hits = 0;

async function workCandidate(cand) {
  if (seenCompanies.has(cand.c)) return;
  for (const [ats, id] of cand.t) {
    probes++;
    try {
      const n = await probers[ats](id);
      if (n > 0) { found.push({ company: cand.c, category: cand.k, ats, id, count: n }); seenCompanies.add(cand.c); hits++; return; }
    } catch (e) { /* ignore, try next */ }
  }
}

// 限并发
const POOL = 8; let i = 0;
await Promise.all(Array.from({ length: POOL }, async () => { while (i < CANDIDATES.length) await workCandidate(CANDIDATES[i++]); }));

// 按 (ats+id) 去重：同一招聘板被多个候选命中（如 Consensys greenhouse 覆盖 MetaMask/Linea/Infura）只保留一条
const seen = new Set();
const dedup = found.filter(f => { const k = f.ats + ":" + f.id; if (seen.has(k)) return false; seen.add(k); return true; });
found.length = 0; for (const f of dedup) found.push(f);
found.sort((a, b) => a.company.localeCompare(b.company));
console.log(`探测 ${probes} 次，命中 ${hits} 家公司：`);
for (const f of found) console.log(`  ${f.company.padEnd(30)} ${f.ats.padEnd(10)} ${f.id.padEnd(28)} ${f.count} 在招`);

if (!DRY) {
  const out = JSON.stringify(found, null, 2) + "\n";
  fs.writeFileSync(path.join(__dirname, "boards.json"), out);
  console.log(`\n✅ 已写入 boards.json（${found.length} 条）`);
}
