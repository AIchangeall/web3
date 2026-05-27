# 每日职位更新 · 操作手册（Runbook）

本看板的数据维护遵循"**抓取 → 写临时 JSON → 合并**"三步，核心由确定性脚本 `apply_update.mjs` 完成，
避免每天手改 `data.js` 时出错。无论用哪种调度方式（远程定时 Agent / 本地 cron / 手动），执行的都是下面这套流程。

## 每日要做的事

1. **联网检索**最近 24–72 小时内发布的 web3 / crypto 行业**各职能**岗位，按职能覆盖关键词：
   - 工程研发 eng：`smart contract` / `protocol engineer` / `frontend` / `backend` / `full-stack` / `Solidity` / `Rust`
   - 运维 ops：`SRE` / `Site Reliability` / `运维` / `DevOps` / `Platform` / `Infrastructure` / `运维负责人` / `Reliability`
   - 产品 product：`product manager` / `产品经理`；设计 design：`product designer` / `brand designer`
   - 数据 data：`data scientist` / `analyst` / `machine learning` / `AI`
   - 安全 security：`security engineer` / `smart contract auditor` / `security researcher`
   - 市场增长 growth：`marketing` / `growth` / `community manager` / `运营`
   - BD bd：`business development` / `sales` / `商务`；合规HR ga：`compliance` / `legal counsel` / `finance` / `HR` / `recruiter`
   重点来源：
   - 聚合站：`web3.career`（各职能子页 `/product-manager-jobs`、`/front-end-jobs`、`/design-jobs`、`/marketing-jobs`、
     `/business-development-jobs`、`/security+smart-contract-jobs`、`/data-science-jobs`、`/crypto+legal-jobs`、`/reliability-jobs` 等）、
     `cryptojobslist.com`、`cryptocurrencyjobs.co`
   - 公司招聘系统：Lever、Ashby、Greenhouse
   - 中文区：V2EX 招聘版 `v2ex.com/go/cv`、登链社区 `learnblockchain.cn/jobs`

2. **筛选**：只保留确属 web3/crypto 行业的岗位（任意职能均可）；剔除明显非 web3 行业的岗位。优先收录近一周新发布的，各职能均衡覆盖。

3. **写入临时文件** `new_jobs.json`（数组），每个岗位字段如下（与 `data.js` 一致）：
   ```json
   {
     "company": "公司名",
     "func": "eng | ops | product | design | data | security | growth | bd | ga",
     "category": "exchange | chain | defi | infra | other",
     "position": "英文/中文职位名",
     "level": "head | senior | mid",
     "location": "地点描述",
     "region": ["remote","cn","hk","sg","us","eu","dubai","asia"],
     "salary": "公开 JD 或聚合估算，无则\"面议\"",
     "salaryNum": 160000,
     "requirements": "一句话要点：年限 / 技术栈 / 职责。",
     "link": "原始 JD 或来源页 URL",
     "contact": "（可选）来源公开披露的联系人，如 V2EX 用户名 / 招聘人姓名",
     "contactInfo": "（可选）来源公开披露的联系方式，如邮箱 / Telegram / 微信"
   }
   ```
   - `contact` / `contactInfo`（招聘线索页用）：**仅当来源招聘信息中明确公开了**联系人或联系方式（常见于 V2EX / 登链等中文区招聘帖）才填写；**严禁编造**联系人或邮箱。聚合站 / Lever / Ashby 等无公开联系人的，留空即可（招聘线索页会以来源渠道作为投递入口）。来源渠道由 `link` 域名自动识别，无需手填。
   - `keywords`（技能/技术关键字）与 `duties`（职责关键词，偏"做什么"）：**均无需手填**。`apply_update.mjs` 调用 `keywords.mjs`（`extractKeywords` / `extractDuties`）从职位名 + 要点自动派生（用于职位/招聘线索展示与数据洞察分析）。如要扩充识别词，编辑 `keywords.mjs` 的 `KEYWORD_DICT` / `DUTY_DICT` 词典即可。
   - `func`（职能）：工程研发=eng，运维/SRE/基础设施=ops，产品=product，设计=design，数据/AI=data，安全=security，市场/增长/运营=growth，BD/商务/销售=bd，合规/法务/财务/HR=ga。
   - `category`（公司类型）：交易所=exchange，公链/L2=chain，钱包/DeFi=defi，节点/RPC基础设施=infra，合规/托管/其他=other。
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

> 你是 web3 行业全职能岗位看板的每日更新程序。工作目录为本仓库根目录。
> 1）联网检索最近 1–3 天发布的 web3/crypto **各职能**岗位（工程/运维/产品/设计/数据AI/安全/市场增长/BD/合规HR，来源与关键词见上）。
> 2）只保留确属 web3 行业的岗位，按 `data.js` 字段结构（含 `func` 职能字段）写入 `new_jobs.json`，不要编造薪资。
> 3）执行 `node apply_update.mjs new_jobs.json`。
> 4）报告今日新增数量（可按职能分组）、公司清单，并删除 `new_jobs.json`。
> 若当天检索不到新岗位，则不写入、不改动数据，回复"今日无新增"。

## 注意

- 脚本**不会自动删除**旧岗位（招聘聚合源经常不完整，避免误删）。如需下线已关闭岗位，手动从 `data.js` 的 `jobs` 数组移除即可。
- `data.js` 是机器友好的 JSON 风格（键带引号），可被 `apply_update.mjs` 安全读写，也能被浏览器 `<script>` 直接加载。
- 网站唯一入口为 `index.html`（读取 `data.js` 渲染）。
