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
    "nav.home":        ["行业资讯", "Industry News"],
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
    "idx.todaynew":    ["今日新增 {n} 个岗位 →", "{n} new jobs today →"],
    "idx.todaynew0":   ["每日持续更新 · 查看全部 →", "Updated daily · view all →"],
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
    "news.industry":   ["行业要闻", "Industry highlights"],
    "news.hiring":     ["招聘动态", "Hiring pulse"],
    "news.more":       ["展开全部", "Show all"],
    "home.h1":             ["资讯关注", "News pulse"],
    "home.tag.industry":   ["资讯", "NEWS"],
    "home.tag.hiring":     ["招聘", "HIRING"],
    "home.lastrun":        ["最近运行", "Last run"],
    "home.archive":        ["查看完整归档 →", "View archive →"],
    "home.original":       ["原文 ↗", "Source ↗"],
    "home.foot":           ["数据每 5 小时更新，来源于公开数据，仅供参考；以原文与官方渠道为准。", "Data refreshes every 5 hours from public sources — for reference only; verify with the original publishers."],
    "card.apply":      ["查看职位 →", "View job →"],
    "card.posted":     ["上架", "Posted"],
    "card.remote":     ["远程友好", "Remote-friendly"],
    "empty.jobs":      ["未匹配到职位，试试放宽筛选条件。", "No jobs match — try loosening the filters."],
    "foot.changelog":  ["📋 更新日志（每日自动维护）", "📋 Changelog (auto-maintained)"],
    "foot.sources":    ["数据来源", "Data sources"],
    "salary.negotiable":["面议", "Negotiable"],
    "found.tpl":       ["找到 {n} 个职位", "{n} jobs found"],
    "more.tpl":        ["加载更多（剩余 {n} 个）", "Load more ({n} left)"],
    "card.share":      ["分享", "Share"],
    "card.detail":     ["详情", "Details"],
    "share.copied":    ["✅ 分享链接已复制，去粘贴吧", "✅ Share link copied — paste anywhere"],
    "detail.req":      ["职位要求 / 描述", "Requirements / description"],
    "detail.kw":       ["技能关键字", "Skills"],
    "detail.duty":     ["职责方向", "Duties"],
    "detail.contact":  ["联系人", "Contact"],
    "detail.cinfo":    ["联系方式", "Contact info"],
    "detail.copy":     ["🔗 复制分享链接", "🔗 Copy share link"],
    "detail.apply":    ["查看 / 投递原始职位 →", "View / apply on source →"],
    "detail.nolink":   ["该岗位暂无直接投递链接，可在企业库或公司官网检索", "No direct apply link — search the company site or our directory"],
    "detail.close":    ["关闭", "Close"],
    "detail.full":     ["📄 查看完整职位详情 →", "📄 View full job details →"],
    "badge.stale":     ["⏳ 可能已截止", "⏳ May be closed"],
    "badge.dead":      ["⚠️ 原页面已下线", "⚠️ Link offline"],
    "flt.hidestale":   ["仅看近期在招", "Recent & open only"],
    "detail.stale":    ["该信息较旧（30 天以上未再出现于来源渠道），可能已截止，请以原招聘页为准。", "This posting is 30+ days old and may be closed — please verify on the source page."],
    "detail.dead":     ["原始招聘页经探测可能已下线或失效，信息仅供参考，建议前往公司官网核实。", "The original posting appears offline; treat as reference only and verify on the company site."],

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
    "hh.coverage":     ["联系方式覆盖率", "Contact coverage"],
    "hh.export":       ["⬇ 导出 CSV", "⬇ Export CSV"],
    "hh.exported":     ["已导出 {n} 条线索（当前筛选）", "Exported {n} leads (current filter)"],
    "hh.tipnudge":     ["如对你的招聘有帮助，欢迎赞赏支持 💜", "If this helps your hiring, support with a tip 💜"],

    // 导航 / 收藏 / 筛选 / RSS
    "nav.about":       ["关于", "About"],
    "nav.heatmap":     ["招聘热度", "Heatmap"],
    "hm.h1":           ["招聘热度 · 365 天活跃度", "Hiring Heatmap · 365-Day Activity"],
    "hm.desc":         ["基于每日新增岗位数的年度热力图，看 Web3 招聘市场节奏一目了然——什么时候在猛招、什么时候降温、周末/节假日趋势。", "A 365-day calendar heatmap of daily new postings — see when the Web3 hiring market is hot, when it cools off, and weekend / holiday patterns."],
    "hm.kpi.total":    ["全年新增", "Total added"],
    "hm.kpi.peak":     ["最活跃日", "Peak day"],
    "hm.kpi.avg":      ["活跃日均", "Avg per active day"],
    "hm.kpi.silent":   ["静默日", "Silent days"],
    "hm.heat":         ["招聘活跃度", "Hiring activity"],
    "hm.heat.sub":     ["近 365 天每日新增岗位数，色块越深当日新增越多。悬停看明细，点击跳到该日新增。", "Daily new postings over the last 365 days — darker = more added that day. Hover for detail, click to jump to that day's new roles."],
    "hm.legend.less":  ["少", "Less"],
    "hm.legend.more":  ["多", "More"],
    "hm.top":          ["Top 10 活跃日", "Top 10 active days"],
    "hm.top.sub":      ["新增岗位数最多的日期，点击跳到职位页查看该日新增。", "Days with the most new postings — click to see that day's roles."],
    "flt.savedonly":   ["仅看收藏", "Saved only"],
    "flt.paidonly":    ["仅看公开薪资", "Disclosed salary"],
    "flt.recent7":     ["近 7 天新增", "New in 7 days"],
    "flt.fresh.label": ["上架时效", "Posted"],
    "flt.fresh.all":   ["全部", "All time"],
    "flt.fresh.today": ["今日", "Today"],
    "flt.fresh.7d":    ["近 7 天", "Last 7 days"],
    "fab.contact":     ["💬 联系", "💬 Contact"],
    "fab.tab.partner": ["合作", "Partner"],
    "fab.tab.tip":     ["赞赏", "Tip"],
    "flt.mine":        ["我的", "Mine"],
    "card.save":       ["收藏", "Save"],
    "card.saved":      ["已收藏", "Saved"],
    "card.markapplied":["标记已投", "Mark applied"],
    "card.applied":    ["已投递", "Applied"],
    "foot.rss":        ["📡 RSS 订阅最新岗位", "📡 Subscribe new jobs (RSS)"],
    "flag.note":       ["合规提示", "Compliance note"],

    // 关于页
    "about.h1":        ["关于 链聘 ChainHire", "About ChainHire"],
    "about.lead":      ["链聘 ChainHire 是一个聚合 Web3 / 加密行业公开招聘信息的看板，覆盖交易所、公链 / L2、钱包 / DeFi、节点基础设施等各类公司的全职能岗位，面向猎头与求职者，每日自动更新。",
                        "ChainHire aggregates publicly posted Web3 / crypto job openings — across exchanges, chains / L2, wallets / DeFi and node infrastructure, all functions — for recruiters and job seekers, updated daily."],
    "about.s1.t":      ["数据从哪来", "Where the data comes from"],
    "about.s1.d":      ["岗位信息整理自公开渠道：公司官网招聘页、Lever / Ashby / Greenhouse、Web3.career、CryptoJobsList、CryptocurrencyJobs、V2EX 招聘版、登链社区等。本站不抓取或展示任何非公开数据，联系人 / 联系方式仅在来源已明确公开时才展示。",
                        "Roles are compiled from public sources: company career pages, Lever / Ashby / Greenhouse, Web3.career, CryptoJobsList, CryptocurrencyJobs, V2EX, LearnBlockchain and more. We never scrape or show non-public data; contacts appear only when publicly disclosed by the source."],
    "about.s2.t":      ["多久更新", "How often it updates"],
    "about.s2.d":      ["由自动化程序约每 5 小时同步一次：新岗位置顶并标「NEW」；长时间未再出现于来源的岗位标「可能已截止」；经探测失效的链接标「原页面已下线」。",
                        "An automated job syncs roughly every 5 hours: new roles are pinned and tagged “NEW”; roles long absent from sources are flagged “may be closed”; links detected as broken are flagged “offline”."],
    "about.s3.t":      ["完全免费", "Completely free"],
    "about.s3.d":      ["本站对求职者与猎头完全免费浏览与使用，不收取任何求职、投递、招聘、会员或解锁费用。页面中的「赞赏」纯属自愿，关闭后不再打扰。",
                        "ChainHire is completely free to browse and use for both job seekers and recruiters. We charge no application, posting, membership or unlock fees. Any “tip” prompt is entirely voluntary and won’t nag once dismissed."],
    "about.s4.t":      ["免责声明", "Disclaimer"],
    "about.s4.d":      ["所有岗位、薪资、联系方式均整理自公开渠道；薪资多为公开 JD 或聚合估算，仅供参考，具体以原招聘方与面试谈薪为准。本站不保证信息的实时性、完整性或准确性，投递前请通过原招聘页或公司官方渠道核实。涉及受监管 / 受制裁实体的岗位，请自行了解所在地区的合规要求。",
                        "All roles, salaries and contacts are compiled from public sources; salaries are mostly from public JDs or aggregated estimates, for reference only — confirm with the employer and during interviews. We do not guarantee the timeliness, completeness or accuracy of any information; verify via the original posting or the company’s official channels before applying. For roles at regulated / sanctioned entities, please check the compliance requirements in your own jurisdiction."],
    "about.summary.t": ["关于本站", "About this site"],
    "about.summary.d": ["岗位信息整理自公司官网招聘页、Lever / Ashby / Greenhouse、Web3.career、CryptoJobsList、CryptocurrencyJobs、V2EX、登链社区等公开渠道，由自动化程序约每 5 小时同步一次：新岗位置顶并标「NEW」；长时间未再出现的标「可能已截止」；失效链接标「原页面已下线」。本站对求职者与猎头完全免费，不收取任何求职、投递、招聘、会员或解锁费用；页面中的「赞赏」纯属自愿，关闭后不再打扰。",
                        "Roles are aggregated from public sources — company career pages, Lever / Ashby / Greenhouse, Web3.career, CryptoJobsList, CryptocurrencyJobs, V2EX, LearnBlockchain — and synced about every 5 hours: new roles are pinned and tagged “NEW”; roles long absent from sources are flagged “may be closed”; broken links are flagged “offline”. The site is completely free for both job seekers and recruiters — no application, posting, membership or unlock fees. Any “tip” prompt is entirely voluntary and won’t nag once dismissed."],
    "about.s5.t":      ["合作与联系", "Partnership & contact"],
    "about.s5.d":      ["商务合作、数据对接或信息纠错，请点击右下角「合作沟通」扫码添加微信。",
                        "For partnership, data integration or corrections, tap “Contact” at the bottom-right to add us on WeChat."],
    "about.back":      ["← 返回职位列表", "← Back to jobs"],
  };

  const FUNC = { eng:["工程研发","Engineering"], ops:["运维/SRE/基础设施","SRE / Infrastructure"], product:["产品","Product"], design:["设计","Design"], data:["数据/AI","Data / AI"], security:["安全","Security"], growth:["市场/增长/运营","Growth / Marketing"], bd:["BD/商务/销售","BD / Sales"], ga:["合规/法务/财务HR","Legal / Compliance / HR"] };
  const CAT  = { exchange:["交易所","Exchange"], chain:["公链/L2","Chain / L2"], defi:["钱包/DeFi","Wallet / DeFi"], infra:["节点/RPC基础设施","Node / RPC Infra"], other:["合规/托管/其他","Custody / Other"] };
  const LVL  = { head:["负责人/总监","Lead / Director"], senior:["资深/Staff","Senior / Staff"], mid:["中级","Mid"] };
  const REGION = { remote:["远程","Remote"], cn:["中文区","Chinese"], hk:["香港","Hong Kong"], sg:["新加坡","Singapore"], us:["美国","US"], eu:["欧洲","Europe"], dubai:["迪拜","Dubai"], asia:["亚洲其他","Asia"] };
  const MAPS = { func:FUNC, cat:CAT, lvl:LVL, region:REGION };

  // 关键字 / 职责的中文 canonical → 英文（英文 canonical 原样返回）
  const KW_EN = { "Validator/节点":"Validator / Node", "可观测性":"Observability", "安全审计":"Security Audit", "形式化验证":"Formal Verification", "合规":"Compliance", "社区":"Community", "营销/增长":"Marketing / Growth", "出入金":"On/Off-ramp" };
  const DUTY_EN = { "团队管理":"Management", "架构设计":"Architecture", "稳定性保障":"Reliability", "故障/值班":"Incident / On-call", "监控告警":"Monitoring", "性能/容量":"Performance / Capacity", "部署发布":"Deployment", "自动化":"Automation", "节点运维":"Node Ops", "协议/合约开发":"Protocol / Contract Dev", "多链/跨链":"Multi / Cross-chain", "安全/审计":"Security / Audit", "合规风控":"Compliance / Risk", "数据分析":"Data Analysis", "产品规划":"Product Planning", "设计/品牌":"Design / Brand", "增长营销":"Growth / Marketing", "社区运营":"Community", "商务拓展":"Business Dev", "招聘/HR":"Recruiting / HR", "客户/机构对接":"Client / Institutional" };

  // 自动选语言：①用户已选过(localStorage)→ 用之；②navigator.language(s) 含 zh* → zh；
  // ③时区在大中华区 → zh；④其余 → en。仍可点 EN/中 切换并记忆。
  function detectLang() {
    try { const saved = localStorage.getItem("lang"); if (saved === "en" || saved === "zh") return saved; } catch (e) {}
    try {
      const langs = (navigator.languages && navigator.languages.length ? navigator.languages : [navigator.language || ""]).map(s => String(s || "").toLowerCase());
      if (langs.some(l => l === "zh" || l.startsWith("zh-") || l.startsWith("zh_"))) return "zh";
      if (langs.length && langs.some(l => l && !l.startsWith("zh"))) {
        // 浏览器明确给出非中文偏好 → en
        const tz = (Intl.DateTimeFormat().resolvedOptions().timeZone || "").toLowerCase();
        if (/asia\/(shanghai|chongqing|harbin|urumqi|hong_kong|macau|taipei)/.test(tz)) return "zh";
        return "en";
      }
      const tz = (Intl.DateTimeFormat().resolvedOptions().timeZone || "").toLowerCase();
      if (/asia\/(shanghai|chongqing|harbin|urumqi|hong_kong|macau|taipei)/.test(tz)) return "zh";
    } catch (e) {}
    return "en";
  }

  const I18N = {
    lang: detectLang(),
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
