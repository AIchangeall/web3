// ============================================================================
//  岗位关键字词典与提取器
//  extractKeywords(text) 从「职位名 + 要点」文本中提取技能 / 技术关键字，
//  返回命中的 canonical 列表（按词典顺序、去重）。供 apply_update.mjs 与派生脚本使用；
//  前端直接读取每个 job 上已存好的 keywords 数组，无需再依赖本文件。
// ============================================================================
export const KEYWORD_DICT = [
  // 语言 / 框架
  ["Solidity", /\bsolidity\b/i],
  ["Rust", /\brust\b/i],
  ["Go", /\bgo(lang)?\b/i],
  ["Python", /\bpython\b/i],
  ["TypeScript", /\btypescript\b/i],
  ["Node.js", /node\.?js/i],
  ["JavaScript", /\bjavascript\b/i],
  ["C++", /c\+\+/i],
  ["React", /\breact\b/i],
  // web3 核心
  ["Smart Contract", /smart contract|智能合约|合约/i],
  ["EVM", /\bevm\b/i],
  ["DeFi", /\bdefi\b/i],
  ["L2/Rollup", /\bl2\b|layer ?2|rollup|zkevm/i],
  ["ZK", /\bzk\b|zero[\- ]knowledge/i],
  ["Validator/节点", /validator|验证者|\bnode\b|节点/i],
  ["RPC", /\brpc\b/i],
  ["Staking", /staking|质押/i],
  ["MEV", /\bmev\b/i],
  ["Wallet", /wallet|钱包/i],
  ["Ethereum", /ethereum|以太坊/i],
  ["Solana", /solana/i],
  ["Bitcoin", /bitcoin|比特币/i],
  ["Foundry", /foundry/i],
  // 基础设施 / 运维
  ["Kubernetes", /kubernetes|k8s/i],
  ["Docker", /docker/i],
  ["Terraform", /terraform/i],
  ["AWS", /\baws\b/i],
  ["GCP", /\bgcp\b|google cloud/i],
  ["CI/CD", /ci\/cd|cicd/i],
  ["Prometheus", /prometheus/i],
  ["Grafana", /grafana/i],
  ["Linux", /\blinux\b/i],
  ["可观测性", /observability|可观测/i],
  ["SLO/SLA", /\bslo\b|\bsla\b|error budget/i],
  ["On-call", /on[\- ]?call/i],
  // 数据 / AI
  ["Kafka", /kafka/i],
  ["Flink", /flink/i],
  ["Spark", /spark/i],
  ["ClickHouse", /clickhouse/i],
  ["SQL", /\bsql\b/i],
  ["Machine Learning", /machine learning|\bml\b|机器学习/i],
  ["AI", /\bai\b|人工智能/i],
  // 安全 / 合规 / 业务
  ["安全审计", /\baudit\b|审计/i],
  ["形式化验证", /formal verification|形式化验证/i],
  ["AML/KYC", /\baml\b|\bkyc\b/i],
  ["合规", /compliance|合规/i],
  ["社区", /community|社区/i],
  ["营销/增长", /marketing|growth|营销|增长/i],
  ["出入金", /on.?ramp|off.?ramp|出入金/i],
];

export function extractKeywords(text, max = 8) {
  const s = text || "";
  const out = [];
  for (const [name, re] of KEYWORD_DICT) {
    if (re.test(s)) out.push(name);
    if (out.length >= max) break;
  }
  return out;
}
