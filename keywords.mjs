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

// ============================================================================
//  职责关键词词典（偏「做什么 / 职责范围」，区别于上面的技能 / 技术关键字）
//  extractDuties(text) 返回命中的职责 canonical 列表，供猎头端展示与检索。
// ============================================================================
export const DUTY_DICT = [
  ["团队管理", /带团队|团队管理|管理团队|带.{0,2}人|head of|总监|负责人|\bdirector\b|\bleader\b|leadership|engineering manager|people manage/i],
  ["架构设计", /architect|架构|系统设计|technical design|design.{0,6}system/i],
  ["稳定性保障", /reliability|稳定性|availability|可用性|\bsla\b|\bslo\b|uptime|error budget/i],
  ["故障/值班", /incident|故障|事故|排障|troubleshoot|on[\- ]?call|值班|响应/i],
  ["监控告警", /monitor|监控|告警|\balert/i],
  ["性能/容量", /capacity|容量|performance|性能|latency|延迟|scal(e|ing|ability)|优化/i],
  ["部署发布", /deploy|部署|发布|上线|ci\/cd|cicd|release|pipeline|流水线/i],
  ["自动化", /automat|自动化/i],
  ["节点运维", /\bnode\b|节点|validator|验证者|\brpc\b|staking|质押/i],
  ["协议/合约开发", /protocol|协议|smart contract|智能合约|合约|onchain|链上/i],
  ["多链/跨链", /multi[\- ]?chain|多链|cross[\- ]?chain|跨链|interoperab/i],
  ["安全/审计", /\baudit\b|审计|security|安全|漏洞|vulnerab/i],
  ["合规风控", /compliance|合规|\baml\b|\bkyc\b|监管|regulat|风控/i],
  ["数据分析", /data scien|数据分析|analytics|\banalyst\b|建模|machine learning|机器学习/i],
  ["产品规划", /product manage|产品经理|产品规划|roadmap|产品需求/i],
  ["设计/品牌", /\bdesigner\b|产品设计|视觉设计|品牌设计|交互设计|\bbrand\b|\bui\b|\bux\b/i],
  ["增长营销", /growth|增长|marketing|营销/i],
  ["社区运营", /community|社区|运营/i],
  ["商务拓展", /business development|\bbd\b|\bsales\b|销售|商务|拓展|partnership/i],
  ["招聘/HR", /recruit|招聘|\bhr\b|talent|人才/i],
  ["客户/机构对接", /customer|客户|\bclient\b|机构|institutional/i],
];

export function extractDuties(text, max = 6) {
  const s = text || "";
  const out = [];
  for (const [name, re] of DUTY_DICT) {
    if (re.test(s)) out.push(name);
    if (out.length >= max) break;
  }
  return out;
}
