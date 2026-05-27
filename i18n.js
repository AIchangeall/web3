// ============================================================================
//  i18n.js — 中文 / English 双语支持（所有页面共用）
//  用法：
//   - 页面在自身脚本「之前」引入 <script src="i18n.js"></script>
//   - 静态文案：给元素加 data-i18n="key"（文本）或 data-i18n-ph="key"（placeholder）
//   - 动态渲染：用 I18N.t(key) / I18N.map(name) / I18N.kw(c) / I18N.duty(c) 取当前语言文案
//   - 语言切换按钮：<button data-langbtn onclick="I18N.toggle()"></button>
//   - 切换时派发 window 'langchange' 事件，各页监听后重渲染
// ============================================================================
(function () {
  const DICT = {
    "nav.jobs":        ["职位", "Jobs"],
    "nav.stats":       ["数据洞察", "Insights"],
    "nav.companies":   ["企业库", "Companies"],
    "nav.leads":       ["招聘线索", "Leads"],
    "brand.tag":       ["Web3 全职能招聘 · 每日更新", "Web3 hiring · updated daily"],
    "upd.prefix":      ["更新", "Updated"],
    "views":           ["浏览量", "Views"],
    "visitors":        ["访客", "Visitors"],
    "partner":         ["合作沟通", "Contact"],
    "partner.title":   ["合作沟通", "Partnership & Contact"],
    "partner.sub":     ["扫码添加微信，洽谈合作与商务对接", "Scan the WeChat QR to discuss partnership"],
    "partner.hint":    ["二维码待添加：把图片保存为 assets/wechat-qr.png", "Add the QR image at assets/wechat-qr.png"],
    "partner.close":   ["关闭", "Close"],
    "sponsor":         ["赞助支持", "Support"],
    "pay.title":       ["☕ 赞赏作者", "☕ Tip the author"],
    "pay.sub":         ["本站岗位每日自动更新、永久免费浏览。若对你有帮助，欢迎扫码自愿赞赏，金额随意 🙏", "All jobs here update daily and are free to browse forever. If it helped you, a small voluntary tip is welcome 🙏"],
    "pay.ali":         ["微信 · 金额随意", "WeChat · any amount"],
    "pay.ok":          ["继续浏览", "Continue browsing"],
    "pay.hint":        ["赞赏码待添加：把图片保存为 assets/wxskm.jpg", "Add your tip QR at assets/wxskm.jpg"],

    // index 职位
    "idx.h1":          ["Web3 行业全职能岗位", "Web3 All-Function Jobs"],
    "idx.desc":        ["聚合头部交易所、公链 / L2、钱包 / DeFi、节点 RPC 基础设施、合规托管等公司的工程研发、运维 SRE、产品、设计、数据 AI、安全、市场增长、BD、合规 HR 等各类公开职位，每日自动更新。",
                        "Aggregating open roles — engineering, SRE, product, design, data/AI, security, growth, BD, compliance & HR — across top exchanges, chains/L2, wallets/DeFi, node & RPC infra and custody. Updated daily."],
    "idx.searchph":    ["搜索公司 / 职位 / 技能关键字，如 Solidity、SRE、产品经理…", "Search company, role or skill — Solidity, SRE, PM…"],
    "idx.searchbtn":   ["搜索", "Search"],
    "flt.title":       ["筛选", "Filters"],
    "flt.reset":       ["重置", "Reset"],
    "flt.newonly":     ["仅看今日新增", "New today only"],
    "flt.func":        ["职能", "Function"],
    "flt.cat":         ["公司类型", "Company type"],
    "flt.lvl":         ["级别", "Level"],
    "flt.region":      ["地区", "Region"],
    "kpi.new":         ["今日新增", "New today"],
    "kpi.total":       ["在招岗位", "Open roles"],
    "kpi.comp":        ["招聘公司", "Companies"],
    "kpi.remote":      ["支持远程", "Remote"],
    "kpi.head":        ["负责人 / 总监", "Lead / Director"],
    "sort.label":      ["排序", "Sort"],
    "sort.latest":     ["最新发布", "Latest posted"],
    "sort.recommended":["推荐（新增优先）", "Recommended"],
    "sort.salary_desc":["薪资 高 → 低", "Salary: high → low"],
    "sort.salary_asc": ["薪资 低 → 高", "Salary: low → high"],
    "sort.company":    ["公司名 A → Z", "Company A → Z"],
    "card.apply":      ["查看职位 →", "View job →"],
    "card.posted":     ["上架", "Posted"],
    "card.remote":     ["远程友好", "Remote-friendly"],
    "empty.jobs":      ["未匹配到职位，试试放宽筛选条件。", "No jobs match — try loosening the filters."],
    "foot.changelog":  ["📋 更新日志（每日自动维护）", "📋 Changelog (auto-maintained)"],
    "foot.sources":    ["数据来源", "Data sources"],
    "salary.negotiable":["面议", "Negotiable"],
    "found.tpl":       ["找到 {n} 个职位", "{n} jobs found"],
    "more.tpl":        ["加载更多（剩余 {n} 个）", "Load more ({n} left)"],

    // stats 数据洞察
    "st.h1":           ["数据洞察 · Web3 招聘市场", "Insights · Web3 Hiring Market"],
    "st.desc":         ["基于看板在招岗位实时计算的招聘趋势、热门公司与薪资分布。", "Live hiring trends, top companies and salary distribution from current open roles."],
    "st.kpi.total":    ["在招岗位", "Open roles"],
    "st.kpi.comp":     ["招聘公司", "Companies"],
    "st.kpi.new":      ["今日新增", "New today"],
    "st.kpi.remote":   ["远程友好占比", "Remote share"],
    "st.kpi.median":   ["薪资中位（USD/年）", "Median salary (USD/yr)"],
    "st.kpi.func":     ["覆盖职能", "Functions"],
    "st.p.trend":      ["新发布岗位趋势", "New postings trend"],
    "st.p.trend.sub":  ["按岗位首次上架日期统计的每日新增数量，随每日更新积累", "Daily new postings by first-seen date, accumulating over time"],
    "st.p.func":       ["职能分布", "By function"],
    "st.p.func.sub":   ["各职能在招岗位数量", "Open roles per function"],
    "st.p.cat":        ["公司类型占比", "By company type"],
    "st.p.cat.sub":    ["岗位所属公司类型分布", "Roles by company type"],
    "st.donut.center": ["岗位", "roles"],
    "st.p.company":    ["Top 招聘公司", "Top hiring companies"],
    "st.p.company.sub":["在招岗位数最多的公司（猎头重点关注的活跃雇主）", "Most active employers by open-role count"],
    "st.p.level":      ["级别分布", "By level"],
    "st.p.level.sub":  ["负责人 / 资深 / 中级", "Lead / Senior / Mid"],
    "st.p.region":     ["地区分布", "By region"],
    "st.p.region.sub": ["岗位覆盖地区（一个岗位可对应多个地区）", "Regions covered (a role may span several)"],
    "st.p.salary":     ["各职能薪资中位", "Median salary by function"],
    "st.p.salary.sub": ["基于公开 JD 或聚合估算的中位值（USD/年），仅供参考", "Median (USD/yr) from public/aggregated data, estimate only"],
    "st.p.kw":         ["热门技能关键字", "Top skills"],
    "st.p.kw.sub":     ["从全部在招岗位的职位名与要求中提取的高频技能关键字（Top 18）", "Top 18 skills extracted from all open roles"],

    // companies 企业库
    "co.h1":           ["企业库", "Companies"],
    "co.desc":         ["各招聘单位的简介与基于其在招职位实时计算的背景数据，帮助候选人与猎头快速了解公司画像。", "Company profiles with live hiring stats for quick background research by candidates and recruiters."],
    "co.searchph":     ["搜索公司名 / 简介…", "Search company or profile…"],
    "co.stat.open":    ["在招职位", "Open roles"],
    "co.stat.median":  ["薪资中位", "Median"],
    "co.stat.remote":  ["远程", "Remote"],
    "co.latest":       ["最新发布", "Latest"],
    "co.viewjobs":     ["查看职位 →", "View jobs →"],
    "co.empty":        ["未找到匹配的公司。", "No matching companies."],
    "co.firms.tpl":    ["{n} 家招聘单位", "{n} companies"],
    "co.open.tpl":     ["{n} 个在招职位", "{n} open roles"],
    "co.active.tpl":   ["{n} 家今日有新增", "{n} hiring today"],
    "co.more.tpl":     ["展开全部 {n} 家", "Show all {n}"],

    // headhunter 招聘线索
    "hh.h1":           ["招聘线索", "Hiring Leads"],
    "hh.desc":         ["招聘线索表：招聘公司、来源渠道、岗位信息、关键词、联系人 / 联系方式与最新发布时间，可搜索、筛选与排序。", "Outreach leads: company, source, role, keywords, contact and latest posting — searchable, filterable & sortable."],
    "hh.count.tpl":    ["共 {n} 条线索", "{n} leads"],
    "hh.searchph":     ["搜索公司 / 岗位 / 来源 / 联系人…", "Search company, role, source or contact…"],
    "hh.contactonly":  ["仅看有联系方式", "With contact only"],
    "hh.sort.latest":  ["按最新发布", "Latest first"],
    "hh.sort.company": ["按公司名", "By company"],
    "hh.sort.salary":  ["按薪资高低", "By salary"],
    "hh.th.company":   ["招聘公司", "Company"],
    "hh.th.job":       ["岗位信息", "Role"],
    "hh.th.kw":        ["关键词", "Keywords"],
    "hh.th.salary":    ["薪资", "Salary"],
    "hh.th.source":    ["来源渠道", "Source"],
    "hh.th.contact":   ["联系人", "Contact"],
    "hh.th.cinfo":     ["联系方式 / 投递", "Contact / Apply"],
    "hh.th.posted":    ["最新发布", "Latest"],
    "hh.duty":         ["职责", "Duties"],
    "hh.apply":        ["投递链接 →", "Apply link →"],
    "hh.origin":       ["原帖", "Source"],
    "hh.empty":        ["未匹配到线索，试试放宽筛选。", "No leads — try loosening the filters."],
  };

  const FUNC = { eng:["工程研发","Engineering"], ops:["运维/SRE/基础设施","SRE / Infrastructure"], product:["产品","Product"], design:["设计","Design"], data:["数据/AI","Data / AI"], security:["安全","Security"], growth:["市场/增长/运营","Growth / Marketing"], bd:["BD/商务/销售","BD / Sales"], ga:["合规/法务/财务HR","Legal / Compliance / HR"] };
  const CAT  = { exchange:["交易所","Exchange"], chain:["公链/L2","Chain / L2"], defi:["钱包/DeFi","Wallet / DeFi"], infra:["节点/RPC基础设施","Node / RPC Infra"], other:["合规/托管/其他","Custody / Other"] };
  const LVL  = { head:["负责人/总监","Lead / Director"], senior:["资深/Staff","Senior / Staff"], mid:["中级","Mid"] };
  const REGION = { remote:["远程","Remote"], cn:["中文区","Chinese"], hk:["香港","Hong Kong"], sg:["新加坡","Singapore"], us:["美国","US"], eu:["欧洲","Europe"], dubai:["迪拜","Dubai"], asia:["亚洲其他","Asia"] };
  const MAPS = { func:FUNC, cat:CAT, lvl:LVL, region:REGION };

  // 关键字 / 职责的中文 canonical → 英文（英文 canonical 原样返回）
  const KW_EN = { "Validator/节点":"Validator / Node", "可观测性":"Observability", "安全审计":"Security Audit", "形式化验证":"Formal Verification", "合规":"Compliance", "社区":"Community", "营销/增长":"Marketing / Growth", "出入金":"On/Off-ramp" };
  const DUTY_EN = { "团队管理":"Management", "架构设计":"Architecture", "稳定性保障":"Reliability", "故障/值班":"Incident / On-call", "监控告警":"Monitoring", "性能/容量":"Performance / Capacity", "部署发布":"Deployment", "自动化":"Automation", "节点运维":"Node Ops", "协议/合约开发":"Protocol / Contract Dev", "多链/跨链":"Multi / Cross-chain", "安全/审计":"Security / Audit", "合规风控":"Compliance / Risk", "数据分析":"Data Analysis", "产品规划":"Product Planning", "设计/品牌":"Design / Brand", "增长营销":"Growth / Marketing", "社区运营":"Community", "商务拓展":"Business Dev", "招聘/HR":"Recruiting / HR", "客户/机构对接":"Client / Institutional" };

  const I18N = {
    lang: (localStorage.getItem("lang") === "en") ? "en" : "zh",
    t(key) { const e = DICT[key]; return e ? e[this.lang === "zh" ? 0 : 1] : key; },
    tpl(key, n) { return this.t(key).replace("{n}", n); },
    map(name) { const m = MAPS[name], i = this.lang === "zh" ? 0 : 1, out = {}; for (const k in m) out[k] = m[k][i]; return out; },
    label(name, k) { const m = MAPS[name]; return m[k] ? m[k][this.lang === "zh" ? 0 : 1] : k; },
    kw(c) { return this.lang === "en" ? (KW_EN[c] || c) : c; },
    duty(c) { return this.lang === "en" ? (DUTY_EN[c] || c) : c; },
    salary(s) { return this.lang === "en" ? String(s || "").replace(/面议/g, "Negotiable").replace(/约\s*/g, "~").replace(/起/g, "+") : s; },
    applyStatic() {
      document.querySelectorAll("[data-i18n]").forEach(el => { const v = this.t(el.getAttribute("data-i18n")); if (v != null) el.textContent = v; });
      document.querySelectorAll("[data-i18n-ph]").forEach(el => { const v = this.t(el.getAttribute("data-i18n-ph")); if (v != null) el.placeholder = v; });
      document.querySelectorAll("[data-langbtn]").forEach(b => b.textContent = this.lang === "zh" ? "EN" : "中");
      document.documentElement.lang = this.lang === "zh" ? "zh-CN" : "en";
    },
    toggle() {
      this.lang = this.lang === "zh" ? "en" : "zh";
      localStorage.setItem("lang", this.lang);
      this.applyStatic();
      window.dispatchEvent(new Event("langchange"));
    }
  };
  window.I18N = I18N;
  document.addEventListener("DOMContentLoaded", () => I18N.applyStatic());
})();
