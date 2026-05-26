# 每日职位更新 · 操作手册（Runbook）

本看板的数据维护遵循"**抓取 → 写临时 JSON → 合并**"三步，核心由确定性脚本 `apply_update.mjs` 完成，
避免每天手改 `data.js` 时出错。无论用哪种调度方式（远程定时 Agent / 本地 cron / 手动），执行的都是下面这套流程。

## 每日要做的事

1. **联网检索**最近 24–72 小时内发布的 web3 / crypto 运维方向岗位，覆盖关键词：
   `SRE` / `Site Reliability` / `运维` / `DevOps` / `Platform Engineer` / `Infrastructure Engineer` /
   `稳定性` / `运维负责人` / `Head of Infrastructure` / `Reliability`。
   重点来源：
   - 聚合站：`web3.career/reliability-jobs`、`web3.career/devops-jobs`、`cryptojobslist.com/sre`、
     `cryptojobslist.com/devops`、`cryptocurrencyjobs.co/devops/`
   - 公司招聘系统：Lever（Binance/Offchain Labs）、Ashby（Kraken/Phantom/Uniswap/QuickNode/EF）、
     Greenhouse（Fireblocks/Aptos）
   - 中文区：V2EX 招聘版 `v2ex.com/go/cv`、登链社区 `learnblockchain.cn/jobs`

2. **筛选**：只保留确属 web3/crypto 行业、且方向为运维/SRE/稳定性/基础设施的岗位；
   去掉非 web3、纯研发、与稳定性无关的岗位。优先收录近一周新发布的。

3. **写入临时文件** `new_jobs.json`（数组），每个岗位字段如下（与 `data.js` 一致）：
   ```json
   {
     "company": "公司名",
     "category": "exchange | chain | defi | infra | other",
     "position": "英文/中文职位名",
     "level": "head | senior | mid",
     "location": "地点描述",
     "region": ["remote","cn","hk","sg","us","eu","dubai","asia"],
     "salary": "公开 JD 或聚合估算，无则\"面议\"",
     "salaryNum": 160000,
     "requirements": "一句话要点：年限 / 技术栈 / 职责。",
     "link": "原始 JD 或来源页 URL"
   }
   ```
   - `category`：交易所=exchange，公链/L2=chain，钱包/DeFi=defi，节点/RPC基础设施=infra，合规/托管/其他=other。
   - `level`：负责人/总监=head，资深/Staff=senior，中级=mid。
   - `salaryNum`：USD/年的代表值（区间取中位数），仅用于排序，估算即可。
   - **不要编造薪资**：JD 未标注就写"面议"，`salaryNum` 给一个合理量级。

4. **合并**：
   ```bash
   node apply_update.mjs new_jobs.json --note "今日要点（可选）"
   ```
   脚本会：自动按 `公司+职位` 去重（已存在→刷新 `lastSeen`，未存在→标 `firstSeen`=今天并置顶），
   bump `lastUpdated`，在 `changelog` 顶部插入当天记录。**同一天重复跑是幂等的，不会重复计数。**

5. **核对**：用浏览器打开 `index.html`，确认顶部"今日已更新"徽标变绿、"今日新增"数量正确、NEW 标记出现。
   清理临时文件：`rm new_jobs.json`。

## 给"自动化 Agent"的现成提示词（prompt）

> 你是 web3 运维岗位看板的每日更新程序。工作目录 `项目目录`。
> 1）联网检索最近 1–3 天发布的 web3/crypto 运维/SRE/DevOps/稳定性/基础设施/运维负责人岗位（来源见 UPDATE_RUNBOOK.md）。
> 2）只保留确属 web3 行业且方向相关的岗位，按 `data.js` 字段结构写入 `new_jobs.json`，不要编造薪资。
> 3）执行 `node apply_update.mjs new_jobs.json`。
> 4）报告今日新增数量、公司清单，并删除 `new_jobs.json`。
> 若当天检索不到新岗位，则不写入、不改动数据，回复"今日无新增"。

## 注意

- 脚本**不会自动删除**旧岗位（招聘聚合源经常不完整，避免误删）。如需下线已关闭岗位，手动从 `data.js` 的 `jobs` 数组移除即可。
- `data.js` 是机器友好的 JSON 风格（键带引号），可被 `apply_update.mjs` 安全读写，也能被浏览器 `<script>` 直接加载。
- 原始静态看板 `web3-sre-hiring.html` 已保留作历史备份，不再维护；以 `index.html` + `data.js` 为准。
