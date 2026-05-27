// ============================================================================
//  Web3 行业全职能岗位数据源（机器可维护，JSON 风格）
//  本文件由每日更新程序自动维护；前端 index.html 通过 <script src> 加载。
//  结构: { lastUpdated, lastUpdatedAt, snapshotNote, changelog[], jobs[], companies{} }
//  lastUpdated=日期(用于 firstSeen/NEW 比对); lastUpdatedAt=ISO 时间戳(前端转本地时区显示到分钟)
//  每个 job: id?/company/category/func/position/level/location/region[]/salary/
//            salaryNum/requirements/link/firstSeen/lastSeen/contact?/contactInfo?/keywords[]/duties[]
//  contact/contactInfo(猎头端用): 仅当来源公开招聘信息明确披露联系人/邮箱·TG·微信时填写，勿编造
//  keywords(技能/技术关键字) 与 duties(职责关键词,偏"做什么"): 由 keywords.mjs 从 position+requirements
//    自动派生(extractKeywords / extractDuties)；apply_update 对缺失者自动补全。猎头端两者并列展示
//  companies: { "公司名": { intro:"一句话简介" } }（合作单位页用；新公司可留空简介）
//  func(职能): eng工程研发 | ops运维SRE基础设施 | product产品 | design设计 |
//              data数据AI | security安全 | growth市场增长运营 | bd商务销售 | ga合规法务财务HR
//  category(公司类型): exchange交易所 | chain公链L2 | defi钱包DeFi | infra节点RPC | other合规托管其他
//  约定: 新岗位 firstSeen=当日(即被标 NEW); 每次扫描把仍在招岗位的 lastSeen 改为当日。
// ============================================================================
window.WEB3_JOBS_DATA = {
  "lastUpdated": "2026-05-27",
  "snapshotNote": "覆盖 web3/crypto 行业全职能公开招聘（工程研发 / 运维SRE / 产品 / 设计 / 数据AI / 安全 / 市场增长 / BD / 合规HR）。数据来自公司官网 / Lever / Ashby / Greenhouse / Web3.career / CryptoJobsList / CryptocurrencyJobs / V2EX / 登链社区。薪资为公开 JD 或聚合估算，仅供参考。",
  "changelog": [
    {
      "date": "2026-05-27",
      "added": 167,
      "removed": 0,
      "note": "新增 Hyperliquid/dYdX/CEX.IO/Biconomy/THORChain/Certora等覆盖"
    },
    {
      "date": "2026-05-26",
      "added": 56,
      "removed": 0,
      "note": "每日更新 2026-05-26：新增工程/运维/产品/设计/数据AI/安全/市场增长/BD/合规HR 共 24 个岗位（来源：Lever/Greenhouse，覆盖 Immutable/1inch/Limit Break/Fuel Labs/Story Protocol/Offchain Labs/Arbitrum Foundation/MyShell/Coins.ph 等）"
    }
  ],
  "jobs": [
    {
      "company": "dYdX",
      "func": "data",
      "category": "exchange",
      "position": "Data Scientist",
      "level": "senior",
      "location": "纽约 / 远程",
      "region": [
        "us",
        "remote"
      ],
      "salary": "$190K–$240K",
      "salaryNum": 215000,
      "requirements": "量化方向学士/硕士（CS/统计/经济学）；DeFi数据洞察与用户增长分析；数据基础设施维护；链上数据处理经验。",
      "link": "https://dydx.exchange/careers",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "dydx||data-scientist",
      "keywords": [
        "DeFi",
        "营销/增长"
      ],
      "duties": [
        "协议/合约开发",
        "数据分析",
        "增长营销"
      ]
    },
    {
      "company": "dYdX",
      "func": "eng",
      "category": "exchange",
      "position": "Senior Software Engineer, Backend",
      "level": "senior",
      "location": "旧金山 / 远程",
      "region": [
        "us",
        "remote"
      ],
      "salary": "$170K–$275K",
      "salaryNum": 220000,
      "requirements": "区块链工具与升级策略开发；工程最佳实践；DEX/链上基础设施丰富经验；Go/TypeScript。",
      "link": "https://dydx.exchange/careers",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "dydx||senior-software-engineer-backend",
      "keywords": [
        "Go",
        "TypeScript"
      ],
      "duties": [
        "协议/合约开发"
      ]
    },
    {
      "company": "dYdX",
      "func": "data",
      "category": "exchange",
      "position": "Research Lead",
      "level": "head",
      "location": "旧金山 / 远程",
      "region": [
        "us",
        "remote"
      ],
      "salary": "$200K–$275K",
      "salaryNum": 240000,
      "requirements": "市场结构/协议设计/用户行为研究；数据基础设施建设；社区参与；DeFi协议深度研究经验。",
      "link": "https://dydx.exchange/careers",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "dydx||research-lead",
      "keywords": [
        "DeFi",
        "社区"
      ],
      "duties": [
        "协议/合约开发",
        "社区运营"
      ]
    },
    {
      "company": "CEX.IO",
      "func": "ops",
      "category": "exchange",
      "position": "DevSecOps Engineer",
      "level": "mid",
      "location": "远程（英/美/乌克兰/塞浦路斯/直布罗陀）",
      "region": [
        "remote",
        "eu",
        "us"
      ],
      "salary": "面议",
      "salaryNum": 120000,
      "requirements": "DevSecOps安全与基础设施；高负载加密货币平台运维；安全自动化；320+人团队。",
      "link": "https://cex.io/we-are-hiring",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "cex-io||devsecops-engineer",
      "keywords": [],
      "duties": [
        "自动化",
        "安全/审计"
      ]
    },
    {
      "company": "CEX.IO",
      "func": "eng",
      "category": "exchange",
      "position": "Android Developer",
      "level": "mid",
      "location": "远程（混合办公）",
      "region": [
        "remote",
        "eu"
      ],
      "salary": "面议",
      "salaryNum": 90000,
      "requirements": "3年+Android开发（Java/Kotlin）；Android SDK深度经验；高负载千万级用户产品；交易所移动端。",
      "link": "https://cex.io/we-are-hiring",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "cex-io||android-developer",
      "keywords": [],
      "duties": []
    },
    {
      "company": "CEX.IO",
      "func": "design",
      "category": "exchange",
      "position": "Lead Product Designer",
      "level": "head",
      "location": "远程（混合办公）",
      "region": [
        "remote",
        "eu"
      ],
      "salary": "面议",
      "salaryNum": 130000,
      "requirements": "主导CEX.IO加密钱包/交易所/DeFi生态系统完整设计所有权；加密金融产品设计经验；团队领导。",
      "link": "https://cex.io/we-are-hiring",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "cex-io||lead-product-designer",
      "keywords": [
        "DeFi",
        "Wallet"
      ],
      "duties": [
        "设计/品牌"
      ]
    },
    {
      "company": "Biconomy",
      "func": "eng",
      "category": "infra",
      "position": "Blockchain Technical Lead",
      "level": "head",
      "location": "远程（全球）",
      "region": [
        "remote"
      ],
      "salary": "面议",
      "salaryNum": 170000,
      "requirements": "5年+开发（2年+区块链）；Account Abstraction/AA+LLM融合；领导DAN技术团队；LLM开发经验；AI加密钱包。",
      "link": "https://wellfound.com/company/biconomy/jobs",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "biconomy||blockchain-technical-lead",
      "keywords": [
        "Wallet",
        "AI"
      ],
      "duties": []
    },
    {
      "company": "Biconomy",
      "func": "eng",
      "category": "infra",
      "position": "Web3 Blockchain Engineer",
      "level": "mid",
      "location": "远程（全球）",
      "region": [
        "remote"
      ],
      "salary": "$46K–$60K",
      "salaryNum": 53000,
      "requirements": "4年+开发（2年+区块链）；智能合约+后端服务开发；SDK/文档协作；Account Abstraction基础设施。",
      "link": "https://web3.career/blockchain-engineer-biconomy/39563",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "biconomy||web3-blockchain-engineer",
      "keywords": [
        "Smart Contract"
      ],
      "duties": [
        "协议/合约开发"
      ]
    },
    {
      "company": "Biconomy",
      "func": "ops",
      "category": "infra",
      "position": "Lead DevOps Engineer",
      "level": "head",
      "location": "远程（全球）",
      "region": [
        "remote"
      ],
      "salary": "$63K–$90K",
      "salaryNum": 76500,
      "requirements": "DevOps/Infra负责人；Kubernetes/Terraform/GitOps；区块链节点管理；CI/CD流程设计。",
      "link": "https://web3.career/lead-devops-engineer-biconomy/51211",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "biconomy||lead-devops-engineer",
      "keywords": [
        "Validator/节点",
        "Kubernetes",
        "Terraform",
        "CI/CD"
      ],
      "duties": [
        "团队管理",
        "部署发布",
        "节点运维"
      ]
    },
    {
      "company": "THORChain",
      "func": "eng",
      "category": "chain",
      "position": "Senior Protocol Engineer",
      "level": "senior",
      "location": "远程（全球）",
      "region": [
        "remote"
      ],
      "salary": "面议",
      "salaryNum": 160000,
      "requirements": "生产级Go代码开发；Cosmos SDK协议升级（激励机制/跨链能力）；Bifrost多链桥接客户端；分布式系统经验。",
      "link": "https://blockchain.works-hub.com/jobs/remote-senior-core-protocol-engineer-e07",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "thorchain||senior-protocol-engineer",
      "keywords": [
        "Go"
      ],
      "duties": [
        "协议/合约开发",
        "多链/跨链",
        "客户/机构对接"
      ]
    },
    {
      "company": "Eight Forces",
      "func": "growth",
      "category": "other",
      "position": "Web3 Marketing/Growth Manager",
      "level": "mid",
      "location": "远程（无地域限制）",
      "region": [
        "remote"
      ],
      "salary": "面议",
      "salaryNum": 80000,
      "requirements": "3年+web3增长营销经验；营销/销售漏斗设计；团队管理（内部+外包）；数据分析与活动复盘。",
      "link": "https://cryptocurrencyjobs.co/marketing/eight-forces-web3-marketing-growth-manager/",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "eight-forces||web3-marketing-growth-manager",
      "keywords": [
        "营销/增长"
      ],
      "duties": [
        "团队管理",
        "数据分析",
        "增长营销",
        "商务拓展"
      ]
    },
    {
      "company": "Analog",
      "func": "growth",
      "category": "chain",
      "position": "Web3/Crypto Marketing Lead",
      "level": "senior",
      "location": "远程（无地域限制）",
      "region": [
        "remote"
      ],
      "salary": "面议",
      "salaryNum": 100000,
      "requirements": "3年+营销/2年+web3社区建设；Layer-0跨链项目；内容营销/社交媒体/KOL合作；Proof-of-Time共识网络。",
      "link": "https://cryptocurrencyjobs.co/marketing/analog-web3-crypto-marketing-lead/",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "analog||web3-crypto-marketing-lead",
      "keywords": [
        "社区",
        "营销/增长"
      ],
      "duties": [
        "多链/跨链",
        "增长营销",
        "社区运营"
      ]
    },
    {
      "company": "Cere Network",
      "func": "bd",
      "category": "infra",
      "position": "Business Development Manager (Web3)",
      "level": "mid",
      "location": "远程 / 旧金山 / 阿姆斯特丹 / 柏林 / 亚洲",
      "region": [
        "remote",
        "us",
        "eu",
        "asia"
      ],
      "salary": "$60K–$100K",
      "salaryNum": 80000,
      "requirements": "去中心化数据协议BD；扩展链/DeFi/DAO生态伙伴关系；Binance Labs/Republic Labs背书；web3生态系统经验。",
      "link": "https://web3.career/business-development-manager-web-3-cere-network/42467",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "cere-network||business-development-manager-web3",
      "keywords": [
        "DeFi"
      ],
      "duties": [
        "协议/合约开发",
        "商务拓展"
      ]
    },
    {
      "company": "Google Cloud",
      "func": "growth",
      "category": "other",
      "position": "Head of Product Marketing, Global Web3",
      "level": "head",
      "location": "纽约 / 旧金山 / 西雅图 / 桑尼维尔",
      "region": [
        "us"
      ],
      "salary": "面议",
      "salaryNum": 280000,
      "requirements": "领导谷歌云Web3产品营销团队；制定Web3 GTM策略与消息体系；B2B云/开发者受众营销经验；跨地区团队管理。",
      "link": "https://cryptocurrencyjobs.co/marketing/google-head-of-product-marketing-global-web3-google-cloud/",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "google-cloud||head-of-product-marketing-global-web3",
      "keywords": [
        "营销/增长"
      ],
      "duties": [
        "团队管理",
        "增长营销"
      ]
    },
    {
      "company": "NodeReal",
      "func": "ops",
      "category": "infra",
      "position": "Site Reliability Engineer",
      "level": "mid",
      "location": "远程（无地域限制）",
      "region": [
        "remote"
      ],
      "salary": "面议",
      "salaryNum": 100000,
      "requirements": "大规模分布式系统设计与可靠性保障；C/C++/Java/Python/Go任一语言；Linux/Unix；区块链节点基础设施运维。",
      "link": "https://cryptocurrencyjobs.co/engineering/nodereal-sre/",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "nodereal||site-reliability-engineer",
      "keywords": [
        "Go",
        "Python",
        "C++",
        "Validator/节点",
        "Linux"
      ],
      "duties": [
        "架构设计",
        "稳定性保障",
        "节点运维"
      ]
    },
    {
      "company": "Jupiter",
      "func": "design",
      "category": "defi",
      "position": "Product Designer (Crypto)",
      "level": "mid",
      "location": "远程",
      "region": [
        "remote",
        "sg"
      ],
      "salary": "面议",
      "salaryNum": 120000,
      "requirements": "3年+产品设计（移动端优先）；UX基础与视觉设计；Solana最大DEX/DeFi协议产品体验；web3/DeFi/fintech设计经验优先。",
      "link": "https://jobs.solana.com/companies/jupiter-2-051c86c1-68fc-4de2-a5d3-406864e3e717",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "jupiter||product-designer-crypto",
      "keywords": [
        "DeFi",
        "Solana"
      ],
      "duties": [
        "协议/合约开发",
        "设计/品牌"
      ]
    },
    {
      "company": "Anchorage Digital",
      "func": "ga",
      "category": "other",
      "position": "Singapore Compliance Lead",
      "level": "head",
      "location": "新加坡",
      "region": [
        "sg"
      ],
      "salary": "面议",
      "salaryNum": 180000,
      "requirements": "新加坡MPI/AML/CFT合规监管框架专家；数字支付与加密货币合规体系建设；MAS法规执行与监管报告。",
      "link": "https://jobs.lever.co/anchorage/f8ae8302-980b-41f5-a408-1f336c25b0fb",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "anchorage-digital||singapore-compliance-lead",
      "keywords": [
        "AML/KYC",
        "合规"
      ],
      "duties": [
        "合规风控"
      ]
    },
    {
      "company": "Kraken",
      "func": "data",
      "category": "exchange",
      "position": "Sr. Staff AI/ML Engineer",
      "level": "senior",
      "location": "远程（全球）",
      "region": [
        "remote"
      ],
      "salary": "$170K–$350K",
      "salaryNum": 250000,
      "requirements": "10年+大规模ML系统生产经验；MLOps平台架构；PyTorch/TensorFlow/Spark；Python/Go/Rust；反欺诈/风控/推荐系统。",
      "link": "https://jobs.theblockchainassociation.org/companies/kraken/jobs/66076684-sr-staff-ai-ml-engineer",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "kraken||sr-staff-ai-ml-engineer",
      "keywords": [
        "Rust",
        "Go",
        "Python",
        "Spark",
        "Machine Learning",
        "AI"
      ],
      "duties": [
        "架构设计",
        "合规风控"
      ]
    },
    {
      "company": "Certora",
      "func": "security",
      "category": "other",
      "position": "Web3 Security Researcher",
      "level": "mid",
      "location": "远程（全球）",
      "region": [
        "remote"
      ],
      "salary": "面议",
      "salaryNum": 200000,
      "requirements": "智能合约形式验证/安全审计；Certora Prover工具；EVM/Solidity深度理解；审计报告撰写；顶级安全审计公司。",
      "link": "https://www.certora.com/careers/web3-security-researcher",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "certora||web3-security-researcher",
      "keywords": [
        "Solidity",
        "Smart Contract",
        "EVM",
        "安全审计"
      ],
      "duties": [
        "协议/合约开发",
        "安全/审计"
      ]
    },
    {
      "company": "dYdX",
      "func": "eng",
      "category": "defi",
      "position": "Software Engineer",
      "level": "senior",
      "location": "纽约 / 远程",
      "region": [
        "us",
        "remote"
      ],
      "salary": "$225K–$345K+",
      "salaryNum": 280000,
      "requirements": "5年以上后端/系统工程经验；Go/TypeScript；构建并扩展 dYdX v4 去中心化永续合约协议；加密原生开发背景。",
      "link": "https://dydx.exchange/careers",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "dydx||software-engineer",
      "keywords": [
        "Go",
        "TypeScript",
        "Smart Contract"
      ],
      "duties": [
        "协议/合约开发"
      ]
    },
    {
      "company": "dYdX",
      "func": "data",
      "category": "defi",
      "position": "GTM Data Engineering Lead",
      "level": "senior",
      "location": "纽约（混合办公）",
      "region": [
        "us"
      ],
      "salary": "$190K–$240K",
      "salaryNum": 215000,
      "requirements": "4年以上数据科学/分析经验，2年以上区块链数据背景；SQL/Python/BigQuery/GCP；主导增长漏斗分析与营销数据管道，支持DEX增长策略。",
      "link": "https://dydx.exchange/careers",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "dydx||gtm-data-engineering-lead",
      "keywords": [
        "Python",
        "GCP",
        "SQL",
        "营销/增长"
      ],
      "duties": [
        "增长营销"
      ]
    },
    {
      "company": "Hyperliquid Labs",
      "func": "eng",
      "category": "exchange",
      "position": "Backend Engineer",
      "level": "senior",
      "location": "新加坡（现场）",
      "region": [
        "sg"
      ],
      "salary": "$105K–$150K",
      "salaryNum": 128000,
      "requirements": "Rust系统工程；优化共识算法与交易API，支持10万TPS去中心化链上订单簿；算法竞赛背景优先；新加坡现场办公。",
      "link": "https://jobs.ashbyhq.com/Hyperliquid%20Labs/08060480-1355-490c-b765-97ea1b529ac6",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "hyperliquid-labs||backend-engineer",
      "keywords": [
        "Rust"
      ],
      "duties": [
        "性能/容量",
        "协议/合约开发"
      ],
      "description": "Key Responsibilities:\n\n - Design, implement, and optimize all layers of the Hyperliquid protocol stack. This includes consensus, execution (HyperCore and HyperEVM), and API/RPC servers.\n\n - Design and implement financial and trading primitives on the Hyperliquid L1\n\nAbout You:\n\n - Very strong systems engineering ability: writing modular, maintainable code within a complex codebase, where correctness and performance are critical\n\n - Interest in performance optimization\n\n - Strong first principles thinker\n\n - Excellent problem-solving skills, attention to detail, and communication skills\n\n - Competitive programming experience (e.g., IOI, ICPC) or similar level of programming ability\n\n - Experience with Rust\n\n - Able to work in-person in Singapore"
    },
    {
      "company": "Hyperliquid Labs",
      "func": "eng",
      "category": "exchange",
      "position": "Senior Frontend Engineer",
      "level": "senior",
      "location": "新加坡（现场）",
      "region": [
        "sg"
      ],
      "salary": "面议",
      "salaryNum": 130000,
      "requirements": "React/TypeScript；构建高性能DEX前端应用；负责产品设计与UX；参与完整前端技术栈；新加坡现场办公优先。",
      "link": "https://jobs.ashbyhq.com/Hyperliquid%20Labs/2172f854-7005-4dde-8e33-de94aed0fb27",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "hyperliquid-labs||senior-frontend-engineer",
      "keywords": [
        "TypeScript",
        "React"
      ],
      "duties": [
        "性能/容量",
        "设计/品牌"
      ],
      "description": "Key Responsibilities:\n\n - Develop and maintain scalable, robust, and performant frontend applications using React, TypeScript, and CSS\n\n - Participate in other parts of the full frontend stack including product design, UX, frontend performance optimization\n\n - Translate designs from Figma into complex layouts and animations\n\nAbout You:\n\n - Strong general engineering ability: writing modular, maintainable code within a complex codebase\n\n - Deep understanding of modern React and TypeScript concepts\n\n - Expertise in responsive and adaptive design principles\n\n - Excellent problem-solving skills and attention to detail\n\n - Strong design and product sense\n\n - Able to work in-person in Singapore"
    },
    {
      "company": "Nibiru Chain",
      "func": "eng",
      "category": "chain",
      "position": "Developer Relations Engineer",
      "level": "mid",
      "location": "远程",
      "region": [
        "remote"
      ],
      "salary": "$91K–$108K",
      "salaryNum": 100000,
      "requirements": "3年以上Web3开发者关系经验；Cosmos生态与L1知识；Rust/TypeScript/Golang；制作教程与工具文档、主持黑客松及会议工作坊。",
      "link": "https://jobs.lever.co/nibiru/189b8ceb-5552-4735-8e07-062e48ed1599",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "nibiru-chain||developer-relations-engineer",
      "keywords": [
        "Rust",
        "Go",
        "TypeScript"
      ],
      "duties": [],
      "description": "Nibiru Chain is a breakthrough L1 blockchain and smart contract ecosystem sporting superior throughput and unparalleled security. Nibiru aims to be the most developer-friendly and user-friendly smart contract ecosystem, leading the charge toward mainstream Web3 adoption by innovating at each layer of the stack: dApp development, infra, consensus, a comprehensive dev toolkit, value accrual.\n\nOur team operates worldwide, allowing new members the flexibility to work entirely remotely.\n\nPosition Start Date: Available Now\nSalary: Competitive\n\nRole Overview\nWe’re looking for a talented and eager Developer Relations Engineer to support the growing developer community for Nibiru Chain globally.This role will be a highly visible role in the organization and in the broader web3 ecosystem. You will not only manage our day-to-day online presence, you will also be responsible for keeping your finger on the pulse of what’s happening in the broader crypto ecosystem. You will help partners build development tools and platforms, establish strong relationships with the developer community and translate their needs into products that contribute to a world-class developer experience. You should love community-building and have a knack for developing online relationships. You will be joining a lean team, and this role will have a lot of autonomy – you should be a self-starter and be capable of self-directed work.\n\nWhat you'll be doing：\n• Support the Ecosystem strategy while ensuring the growth and success of new and existing Web3 partnerships and ecosystem projects\n• Create demo videos, twitter thread content, tutorials, blog posts and more, to promote Nibiru Chain\n• Improve developer experience by creating developer-focused tooling, tutorials, documentation.\n• Contribute to the technical design and implementation of new products and protocols on Nibiru Chain\n• Coordinate, give workshops at, and participate in meetups, hackathons, and conferences across the worldActive and engaged on topics of cryptocurrency and NFTs, and interested in continuously learning about various types of assets\n• Comfortable working autonomously and in a fast-paced, highly collaborative environment with an emphasis on cross-team communication\n\nWhat we’re looking for：\n• 3+ years experience working with start-ups and/or scale-ups with notable experience in Web3 developer relations\n• A passion and deep understanding of web3 ecosystems and knowledge of the current Layer 1 landscape\n• Experience with programming languages such as Rust, TypeScript, Golang\n• Strong understanding of blockchain ecosystems and the app landscape within Cosmos and elsewhere\n• Passion for startups – understanding of how startups operate and the unique characteristics of startup ecosystems and communities\n• Some relevant business-level technical knowledge (fundamentals of blockchain and web3, with the ability to differentiate between Cosmos and other blockchains)\n• Analytical ability to set and assess success metrics/KPIs on a per-project basis\n• Ability to communicate Nibiru Chain’ value proposition to startups and developers\n• Ability to multitask and manage multiple projects - work prioritization, planning, and task delegation)A high degree of comfort with ambiguity and a knack for quickly ramping up on new skills and functions.\n• Self-starter and independent mindset, you are driven to create an impact in the organization\n• Experience with internet culture, memes, Discord and Twitter\n• Excellent English and regional language written and oral communication skills, as this role requires frequent communication with members of our community, members of our team, and various third parties"
    },
    {
      "company": "Shardeum Foundation",
      "func": "security",
      "category": "chain",
      "position": "Security Software Engineer - Blockchain / Web3",
      "level": "senior",
      "location": "远程（APAC）",
      "region": [
        "remote",
        "asia"
      ],
      "salary": "面议",
      "salaryNum": 130000,
      "requirements": "区块链/Web3安全；智能合约威胁建模与漏洞评估；链上攻击实时检测系统开发；NodeJS/TypeScript；EVM安全；支持Shardeum主网安全上线。",
      "link": "https://boards.greenhouse.io/shardeumfoundation/jobs/4306858005",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "shardeum-foundation||security-software-engineer-blockchain-web3",
      "keywords": [
        "TypeScript",
        "Node.js",
        "Smart Contract",
        "EVM"
      ],
      "duties": [
        "部署发布",
        "协议/合约开发",
        "安全/审计",
        "数据分析"
      ]
    },
    {
      "company": "Shardeum Foundation",
      "func": "eng",
      "category": "chain",
      "position": "Principal Software Engineer - Core Blockchain",
      "level": "head",
      "location": "远程",
      "region": [
        "remote"
      ],
      "salary": "面议",
      "salaryNum": 180000,
      "requirements": "区块链核心协议工程；动态状态分片设计；EVM兼容L1高性能开发；分布式系统高并发；作为核心工程师主导Shardeum协议层研发。",
      "link": "https://job-boards.greenhouse.io/shardeumfoundation/jobs/4559618005",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "shardeum-foundation||principal-software-engineer-core-blockchain",
      "keywords": [
        "EVM"
      ],
      "duties": [
        "性能/容量",
        "协议/合约开发"
      ],
      "description": "<div class=\"content-intro\"><p><strong>About the Company</strong>: </p>\n<p><span style=\"font-weight: 400;\">Shardeum is building a layer 1, EVM-based, linearly scalable, smart contract platform that provides low gas fees forever while maintaining true decentralization and solid security through dynamic state sharding. Shardeum aims to be a chain capable of onboarding over a billion people to the crypto revolution, while also democratizing accessibility to decentralization.</span></p>\n<p><span style=\"font-weight: 400;\">Shardeum’s mission is supported by prominent Venture Capitalists in the blockchain space, and we are on track to become one of the most widely used and well known smart contract platforms in blockchain history.</span><span style=\"font-weight: 400;\"><br></span><span style=\"font-weight: 400;\"><br></span><span style=\"font-weight: 400;\">We encourage you to browse our <a href=\"https://shardeum.org/\" target=\"_blank\">website</a>, <a href=\"https://shardeum.org/Shardeum_Whitepaper.pdf\">Whitepaper</a>, <a href=\"https://discord.com/invite/shardeum\" target=\"_blank\">Discord</a> and <a href=\"https://www.youtube.com/c/Shardeum\" target=\"_blank\">YouTube channel</a> to learn more about the project. You can even try <a href=\"https://docs.shardeum.org/node/run/validator\" target=\"_blank\">downloading our validator software</a> and joining our Testnet.</span></p>\n<p><span style=\"font-weight: 400;\">We encourage people of all backgrounds to apply. Your talent and potential is what matters most to us. Shardeum is committed to creating an inclusive culture.</span></p></div><p><strong>About The Ro</strong>le:</p>\n<p>The Software Engineering team at Shardeum is responsible for delivering the Shardeum Mainnet, and developing the smart contract platform, the consensus layer and the protocol layer. We focus on building scalable, performant, secure and reliable software that can be downloaded by thousands of node operators to actualize the Shardeum network. We are in search of a highly talented, innovative Principal Blockchain Engineer that can take on a technical leadership role on highly complex, blockchain projects.</p>\n<p>If you enjoy solving complex computer science problems, are passionate about what you work on, are a perfectionist who wants to build things the right way, and are persistent about finishing what you started, then you're the kind of person we are looking for. You will be working with equally talented and innovative individuals with the goal of building incredible software with the potential to change the world.</p>\n<p><strong>What You'll Be Doing:</strong></p>\n<ul>\n<li>Provide technical structure to teams and work closely with management and stakeholders to define strategic road maps for complex, Layer-1 blockchain projects.</li>\n<li>Manage individual projects, priorities, deadlines and deliverables with your technical expertise.</li>\n<li>Mentor and train other team members on design techniques, coding standards and best blockchain basics.</li>\n<li>Contribute to the architecture and implementation of complex software components on the blockchain.</li>\n<li>Take on end-to-end ownership of critical software components related to our L1.</li>\n<li>Design and develop innovative new consensus and protocol software.</li>\n<li>Ensure performance optimization, and making scalability / reliability improvements to the software.</li>\n<li>Resolve issues, debugging errors and fixing code to improve the reliability and security of Shardeum software components.</li>\n<li>The tech stack you will be using is: Nodejs, TypeScript, SQLite, Postgres, React and Vuejs.</li>\n<li>The development environment will be: Linux, Git, AWS, Docker and VS Code.</li>\n</ul>\n<p><strong>What We're Looking</strong></p>\n<ul>\n<li>Extensive experience designing, implementing and maintaining complex blockchain components.</li>\n<li>You know what high quality code looks like and know how to foster an environment that creates it.</li>\n<li>Fluency with algorithms and data str"
    },
    {
      "company": "Eigen Labs",
      "func": "eng",
      "category": "infra",
      "position": "Software Engineer, Backend (EigenLayer)",
      "level": "senior",
      "location": "西雅图 / 远程",
      "region": [
        "us",
        "remote"
      ],
      "salary": "$180K–$220K",
      "salaryNum": 200000,
      "requirements": "5年以上分布式系统后端经验；Go/Rust/C++；Solidity智能合约；Docker容器化；构建EigenLayer再质押协议与节点运营商工具。",
      "link": "https://jobs.ashbyhq.com/eigen-labs",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "eigen-labs||software-engineer-backend-eigenlayer",
      "keywords": [
        "Solidity",
        "Rust",
        "Go",
        "C++",
        "Smart Contract",
        "Validator/节点",
        "Staking",
        "Docker"
      ],
      "duties": [
        "节点运维",
        "协议/合约开发",
        "社区运营"
      ],
      "description": "Eigen Labs is building the infrastructure for a more trustworthy internet.\n\nToday's digital world runs on trust-me promises: \"Trust that this AI model is giving you unbiased results.\" \"Trust that this platform isn't manipulating your feed.\" \"Trust that this service will honor its commitments.\" These trust assumptions create massive friction and limit what's possible online.\n\nEigenCloud changes this by making any digital service verifiable. Built on our EigenLayer protocol, which has attracted billions in economic security, EigenCloud lets developers build applications with mathematical trust guarantees instead of pinky promises.\n\nFor developers, this means the best of both worlds: Use familiar cloud tools and programming environments while gaining blockchain-level verifiability. No need to rewrite your application in specialized blockchain languages or accept the limitations of smart contract environments.\n\nFor the world, this unlocks transformative applications:\n\n - AI systems with economic accountability for their outputs\n\n - Social platforms with verifiable, manipulation-resistant algorithms\n\n - Prediction markets that can resolve on any real-world event\n\n - Financial services with cryptographic transparency\n\n - Any application where trust and correctness matter\n\nWe're moving beyond crypto's current focus on digital money to make all digital interactions more trustworthy. With the fastest-growing developer ecosystem in crypto and backing from top-tier investors, we're at the inflection point where verifiable computing goes mainstream.\n\nReady to build the trust layer for the internet? We're looking for builders who want to solve hard problems and create technology that makes the digital world fundamentally more reliable.\n\n\n\nTHE ROLE\n\nThis is not a solicitation intended to recruit job applicants for a specific available position. Rather, this is a general application for future and opportunistic roles across Eigen Labs. Tell us who you are, what you’re great at, and what you want to build. We’ll review on a rolling basis and reach out when there’s a strong fit.\n\n\n\nEQUAL OPPORTUNITY EMPLOYMENT\n\nThere's one more, very important thing. We are an equal opportunity employer. We search for amazing people of diverse backgrounds, experiences, abilities, and perspectives. We take care of each other to create an inclusive work environment where we love to come to work every day. We hope you can join us.\n\nWith EigenLayer, building blockchain infrastructure modules (AVSs) in a permissionless manner is no longer a hypothetical—it's our reality. Now, we invite you to be part of this exciting journey."
    },
    {
      "company": "Eigen Labs",
      "func": "design",
      "category": "infra",
      "position": "Senior/Staff Brand Designer",
      "level": "senior",
      "location": "远程",
      "region": [
        "remote"
      ],
      "salary": "面议",
      "salaryNum": 130000,
      "requirements": "4年以上品牌设计经验；定义视觉系统与设计语言；多媒介（插画/3D/动效/摄影/视频）；Figma组件库；Token+股权激励；全球远程。",
      "link": "https://jobs.ashbyhq.com/eigen-labs",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "eigen-labs||senior-staff-brand-designer",
      "keywords": [],
      "duties": [
        "设计/品牌"
      ],
      "description": "Eigen Labs is building the infrastructure for a more trustworthy internet.\n\nToday's digital world runs on trust-me promises: \"Trust that this AI model is giving you unbiased results.\" \"Trust that this platform isn't manipulating your feed.\" \"Trust that this service will honor its commitments.\" These trust assumptions create massive friction and limit what's possible online.\n\nEigenCloud changes this by making any digital service verifiable. Built on our EigenLayer protocol, which has attracted billions in economic security, EigenCloud lets developers build applications with mathematical trust guarantees instead of pinky promises.\n\nFor developers, this means the best of both worlds: Use familiar cloud tools and programming environments while gaining blockchain-level verifiability. No need to rewrite your application in specialized blockchain languages or accept the limitations of smart contract environments.\n\nFor the world, this unlocks transformative applications:\n\n - AI systems with economic accountability for their outputs\n\n - Social platforms with verifiable, manipulation-resistant algorithms\n\n - Prediction markets that can resolve on any real-world event\n\n - Financial services with cryptographic transparency\n\n - Any application where trust and correctness matter\n\nWe're moving beyond crypto's current focus on digital money to make all digital interactions more trustworthy. With the fastest-growing developer ecosystem in crypto and backing from top-tier investors, we're at the inflection point where verifiable computing goes mainstream.\n\nReady to build the trust layer for the internet? We're looking for builders who want to solve hard problems and create technology that makes the digital world fundamentally more reliable.\n\n\n\nTHE ROLE\n\nThis is not a solicitation intended to recruit job applicants for a specific available position. Rather, this is a general application for future and opportunistic roles across Eigen Labs. Tell us who you are, what you’re great at, and what you want to build. We’ll review on a rolling basis and reach out when there’s a strong fit.\n\n\n\nEQUAL OPPORTUNITY EMPLOYMENT\n\nThere's one more, very important thing. We are an equal opportunity employer. We search for amazing people of diverse backgrounds, experiences, abilities, and perspectives. We take care of each other to create an inclusive work environment where we love to come to work every day. We hope you can join us.\n\nWith EigenLayer, building blockchain infrastructure modules (AVSs) in a permissionless manner is no longer a hypothetical—it's our reality. Now, we invite you to be part of this exciting journey."
    },
    {
      "company": "TRM Labs",
      "func": "design",
      "category": "other",
      "position": "Senior Brand Designer",
      "level": "senior",
      "location": "远程",
      "region": [
        "remote"
      ],
      "salary": "面议",
      "salaryNum": 110000,
      "requirements": "4年以上营销/品牌设计经验；AI设计工具（Midjourney/Adobe Firefly/Runway）；Figma组件库与模板体系；主导会议品牌与社交媒体视觉；2026年5月发布。",
      "link": "https://jobs.ashbyhq.com/trm-labs",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "trm-labs||senior-brand-designer",
      "keywords": [
        "AI",
        "营销/增长"
      ],
      "duties": [
        "部署发布",
        "设计/品牌",
        "增长营销"
      ],
      "description": "BUILD A SAFER WORLD.\n\nTRM Labs provides AI-powered intelligence solutions that help public and private sector agencies investigate and disrupt crime. TRM's platforms enable investigators to trace illicit activity, build cases, and construct operating pictures of threat networks. Leading agencies and businesses worldwide rely on TRM to make the world safer and more secure.\n\nTeam & Job Summary:\n\nAs a Senior Solutions Architect at TRM Labs, you will be responsible for delivering technical excellence and strategic guidance to customer accounts while also feeding back domain expertise into the broader Solutions Architecture team. In this role, you will oversee the technical pre-sales relationship, propose business processes and technical architectures, demonstrate the TRM platform, and support clients in integrating and succeeding with our solutions. Your success will be measured by both the outcomes clients achieve with the platform and your leadership in scaling the Solutions Architect team.\n\nThe impact you will have here:\n\n - Own and deliver end-to-end TRM solutions for clients, from understanding complex client requirements to designing advanced business processes, customizing the platform, integrating TRM APIs, and conducting testing and training for maximum client impact.\n\n - Act as the go-to technical consultant during discovery calls with key clients and prospects, documenting intricate technical requirements and guiding solution design.\n\n - Present TRM's APIs and architecture to clients, providing detailed guidance on implementation, timelines, and potential challenges, while ensuring alignment with their strategic goals.\n\n - Develop and maintain high-quality resources for client integrations, including API documentation, reference architectures, and implementation guides, ensuring a smooth client onboarding experience.\n\n - Cultivate strong relationships with technical stakeholders at client organizations, providing expert-level support throughout the integration process and troubleshooting any issues that arise.\n\n - Stay current with TRM’s evolving product features and technical dependencies to ensure alignment between client needs and TRM's product roadmap, advocating for enhancements when necessary.\n\nWhat we’re looking for:\n\n - Professional experience in pre-and post-sales roles, such as Senior Solutions Architect, Senior Sales Engineer, or Senior Customer Success Engineer.\n\n - Exceptional customer-facing skills with the ability to empathize with both technical and non-technical audiences, demonstrating how complex solutions can meet their business goals.\n\n - Proven experience collaborating with engineering and product teams to customize API-based SaaS products at scale, including implementation, testing, and launch.\n\n - Comfortable scripting in one more languages to help build PoCs for customers or prototype APIs (e.g., Python, Javascript, Typescript)\n\n - Strong problem-solving skills with the ability to prioritize and manage multiple complex tasks independently while maintaining attention to detail.\n\n - High initiative and a proactive approach to identifying opportunities for improvement, both in technical solutions and team processes.\n\n - Bonus: Previous experience in AI development is highly preferred.\n\nAbout the Team:\n\n - As a globally distributed team, members may observe different timezones. However, most of the team will overlap between the hours of 8am-5:00 pm EST for meetings and collaboration.\n\n - Our Solutions Architect Team is fully remote, thriving on asynchronous communication and collaboration through Slack channels and detailed documentation. We hold weekly Customer Syncs, bi-weekly health syncs, join our associated POD calls, and regularly engage with our customers. As experts in our craft, we focus on providing support, driving value, and building meaningful relationships with our customers as trusted advisors. We are on the front lines of TRM, ensuring our customers get the most out of the product and bringing valuable insights back to the team.\n\nLearn about TRM Speed in this position:\n\n - Timely Documentation: You will deliver integration documents within 1-2 days by prioritizing tasks, reusing existing content, and focusing strictly on the document's goal.\n\n - Immediate Contingency Solutions: You will resolve urgent client issues by quickly assessing the situation and providing immediate alternatives, like manually exporting critical data if a fix takes longer.\n\n\nLIFE AT TRM\n\nWe are building a safer world. That promise shows up in how we work every day.\n\nTRM moves quickly. We are a high velocity, high ownership team that expects clarity, follow-through, and impact. People who thrive here are energized by hard problems, experimentation, and continuous feedback. If something takes months elsewhere, it will ship here in days.\n\nOur work sits at the intersection of AI, national security, and fighting crime. The problems are complex, the stakes are real, and the environment evolves quickly. The pace and intensity of the work reflect the importance of the mission. As a result, the way we operate requires a high level of ownership, adaptability, collaboration, and creative problem-solving.\n\nAt TRM, you should expect:\n\n - Priorities and targets to change quickly as we experiment and iterate\n\n - Work that often requires operating with a high degree of ambiguity\n\n - A high level of personal ownership and accountability\n\n - Close collaboration across teams and functions\n\n - Frequent, high-touch communication\n\n - Creative problem solving and out-of-the-box thinking\n\n - A pace that rewards urgency, adaptability, and outcomes\n\nThis environment is energizing for people who enjoy building, solving hard problems, and making progress in situations that are not always fully defined. It also requires comfort navigating ambiguity, adjusting course as new information emerges, and maintaining focus and positivity in a fast-moving and intense environment.\n\nWe also recognize that this style of operating is not for everyone. If you are primarily optimizing for predictability or a consistently balanced workload, we encourage you to use the interview process to pressure test whether this environment is truly the right fit. We want teammates who thrive here, not just survive here.\n\nAt the same time, many people find this work deeply rewarding. If you are excited by meaningful problems, motivated by ambitious goals, and energized by working alongside mission-driven colleagues, there is a good chance you will find TRM to be an exceptional place to grow and contribute. Learn more: Interviewing at TRM: How We Hire and What Success Looks Like https://www.trmlabs.com/resources/blog/interviewing-at-trm-how-we-hire-and-what-success-looks-like\n\n \n\n\nAI FLUENCY AT TRM\n\nAI fluency is a baseline expectation at TRM.\n\nWe believe AI meaningfully changes how top performers operate. We expect every team member to use AI to accelerate and reimagine their craft, not just automate surface tasks.\n\nAt TRM, AI fluency means you are among the top 10 percent of operators in your function in how you apply AI to:\n\n - Accelerate repeatable workflows\n\n - Structure and solve problems\n\n - Improve output quality\n\n - Increase speed and leverage\n\nYou will be evaluated on applied AI fluency during the interview process.\n\n\nLEADERSHIP PRINCIPLES\n\nWe hire and grow against three leadership principles. They’re the standards for how we operate, treat each other, and make decisions.\n\n - Impact-Oriented Trailblazer: We put customers first and move with speed, focus, and adaptability. We treat every plan like an experiment – test, ship, measure, and iterate quickly.\n\n - Master Craftsperson: We care deeply about our craft. We balance speed with high standards, own outcomes end‑to‑end, and invest in getting better everyday.\n\n - Inspiring Colleague: We add clarity and energy, not noise. We bring humility, candor, and a one‑team mindset — giving and receiving feedback to make the team stronger.\n\n\n\n\n\nJOIN OUR MISSION\n\nAt TRM we care deeply about our craft. We are looking for individuals who want their work to matter, who experiment with speed and rigor, and who take pride in building a safer world for billions of people. If you’re excited by TRM’s mission but don’t check every box, we encourage you to apply — we hire for slope, judgment, and the will to learn fast.\n\nTRM is a Series C company with $220M in total funding, backed by Blockchain Capital, Goldman Sachs, Bessemer, Y Combinator, Thoma Bravo, and others. Headquartered in San Francisco, TRM operates as a distributed-first company with hubs in Los Angeles, San Francisco, New York, Washington D.C., London, and Singapore.\n\n\n\n\n\nPRIVACY POLICY AND ADDITIONAL INFORMATION\n\nBy submitting your application, you are agreeing to allow TRM to process your personal information in accordance with the TRM Privacy Policy https://www.trmlabs.com/policies/privacy-policy.\n\nOur typical hiring cycles for specialized roles span 24 to 36 months. Accordingly, we retain your personal information for up to 36 months to evaluate your application and to consider you for current and future employment opportunities, unless you request earlier deletion or a different retention period is required or permitted by law.\n\nTo notify TRM Labs that you believe this job posting is non-compliant, please submit a report through this form https://docs.google.com/forms/d/e/1FAIpQLSc6e8jRCl2cQwgIzXLpIGQXtwvMQh__TcokvO2toAAkT44A6Q/viewform?usp=dialog. No response will be provided to inquiries unrelated to job posting compliance.\n\nThe use of AI tools of any kind (including but not limited to notetakers, interview assistants, and real-time coaching tools such as Otter.ai, Fireflies, Fathom, Cluey, or similar) during TRM interviews is not permitted without prior approval from TRM. TRM uses its own internal tools for note-taking to ensure a consistent and confidential experience for all candidates.\n\nWe are committed to providing reasonable accommodations to applicants with disabilities, and requests can be made via this form https://docs.google.com/forms/d/e/1FAIpQLSevmAzPxWOYm_7kMHb9lEJlX3tpdBeHvvvNWjsI_6xhUfnXjw/viewform?usp=dialog.\n\n\nRECRUITMENT AGENCIES\n\nTRM Labs does not accept unsolicited agency resumes. Please do not forward resumes to TRM employees. TRM Labs is not responsible for any fees related to unsolicited resumes and will not pay fees to any third-party agency or company without a signed agreement.\n\n\nLEARN MORE: COMPANY VALUES https://www.trmlabs.com/culture | INTERVIEWING https://www.trmlabs.com/interviewing | FAQS https://www.trmlabs.com/faq"
    },
    {
      "company": "TRM Labs",
      "func": "eng",
      "category": "other",
      "position": "Senior Software Engineer (Graph Analytics)",
      "level": "senior",
      "location": "远程",
      "region": [
        "remote",
        "us"
      ],
      "salary": "面议",
      "salaryNum": 180000,
      "requirements": "区块链数据PB级ETL管道设计；加密货币交易网络图算法开发；分布式系统；链上情报分析平台核心工程。",
      "link": "https://jobs.ashbyhq.com/trm-labs",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "trm-labs||senior-software-engineer-graph-analytics",
      "keywords": [],
      "duties": [
        "协议/合约开发",
        "数据分析"
      ],
      "description": "BUILD A SAFER WORLD.\n\nTRM Labs provides AI-powered intelligence solutions that help public and private sector agencies investigate and disrupt crime. TRM's platforms enable investigators to trace illicit activity, build cases, and construct operating pictures of threat networks. Leading agencies and businesses worldwide rely on TRM to make the world safer and more secure.\n\nTeam & Job Summary:\n\nAs a Senior Solutions Architect at TRM Labs, you will be responsible for delivering technical excellence and strategic guidance to customer accounts while also feeding back domain expertise into the broader Solutions Architecture team. In this role, you will oversee the technical pre-sales relationship, propose business processes and technical architectures, demonstrate the TRM platform, and support clients in integrating and succeeding with our solutions. Your success will be measured by both the outcomes clients achieve with the platform and your leadership in scaling the Solutions Architect team.\n\nThe impact you will have here:\n\n - Own and deliver end-to-end TRM solutions for clients, from understanding complex client requirements to designing advanced business processes, customizing the platform, integrating TRM APIs, and conducting testing and training for maximum client impact.\n\n - Act as the go-to technical consultant during discovery calls with key clients and prospects, documenting intricate technical requirements and guiding solution design.\n\n - Present TRM's APIs and architecture to clients, providing detailed guidance on implementation, timelines, and potential challenges, while ensuring alignment with their strategic goals.\n\n - Develop and maintain high-quality resources for client integrations, including API documentation, reference architectures, and implementation guides, ensuring a smooth client onboarding experience.\n\n - Cultivate strong relationships with technical stakeholders at client organizations, providing expert-level support throughout the integration process and troubleshooting any issues that arise.\n\n - Stay current with TRM’s evolving product features and technical dependencies to ensure alignment between client needs and TRM's product roadmap, advocating for enhancements when necessary.\n\nWhat we’re looking for:\n\n - Professional experience in pre-and post-sales roles, such as Senior Solutions Architect, Senior Sales Engineer, or Senior Customer Success Engineer.\n\n - Exceptional customer-facing skills with the ability to empathize with both technical and non-technical audiences, demonstrating how complex solutions can meet their business goals.\n\n - Proven experience collaborating with engineering and product teams to customize API-based SaaS products at scale, including implementation, testing, and launch.\n\n - Comfortable scripting in one more languages to help build PoCs for customers or prototype APIs (e.g., Python, Javascript, Typescript)\n\n - Strong problem-solving skills with the ability to prioritize and manage multiple complex tasks independently while maintaining attention to detail.\n\n - High initiative and a proactive approach to identifying opportunities for improvement, both in technical solutions and team processes.\n\n - Bonus: Previous experience in AI development is highly preferred.\n\nAbout the Team:\n\n - As a globally distributed team, members may observe different timezones. However, most of the team will overlap between the hours of 8am-5:00 pm EST for meetings and collaboration.\n\n - Our Solutions Architect Team is fully remote, thriving on asynchronous communication and collaboration through Slack channels and detailed documentation. We hold weekly Customer Syncs, bi-weekly health syncs, join our associated POD calls, and regularly engage with our customers. As experts in our craft, we focus on providing support, driving value, and building meaningful relationships with our customers as trusted advisors. We are on the front lines of TRM, ensuring our customers get the most out of the product and bringing valuable insights back to the team.\n\nLearn about TRM Speed in this position:\n\n - Timely Documentation: You will deliver integration documents within 1-2 days by prioritizing tasks, reusing existing content, and focusing strictly on the document's goal.\n\n - Immediate Contingency Solutions: You will resolve urgent client issues by quickly assessing the situation and providing immediate alternatives, like manually exporting critical data if a fix takes longer.\n\n\nLIFE AT TRM\n\nWe are building a safer world. That promise shows up in how we work every day.\n\nTRM moves quickly. We are a high velocity, high ownership team that expects clarity, follow-through, and impact. People who thrive here are energized by hard problems, experimentation, and continuous feedback. If something takes months elsewhere, it will ship here in days.\n\nOur work sits at the intersection of AI, national security, and fighting crime. The problems are complex, the stakes are real, and the environment evolves quickly. The pace and intensity of the work reflect the importance of the mission. As a result, the way we operate requires a high level of ownership, adaptability, collaboration, and creative problem-solving.\n\nAt TRM, you should expect:\n\n - Priorities and targets to change quickly as we experiment and iterate\n\n - Work that often requires operating with a high degree of ambiguity\n\n - A high level of personal ownership and accountability\n\n - Close collaboration across teams and functions\n\n - Frequent, high-touch communication\n\n - Creative problem solving and out-of-the-box thinking\n\n - A pace that rewards urgency, adaptability, and outcomes\n\nThis environment is energizing for people who enjoy building, solving hard problems, and making progress in situations that are not always fully defined. It also requires comfort navigating ambiguity, adjusting course as new information emerges, and maintaining focus and positivity in a fast-moving and intense environment.\n\nWe also recognize that this style of operating is not for everyone. If you are primarily optimizing for predictability or a consistently balanced workload, we encourage you to use the interview process to pressure test whether this environment is truly the right fit. We want teammates who thrive here, not just survive here.\n\nAt the same time, many people find this work deeply rewarding. If you are excited by meaningful problems, motivated by ambitious goals, and energized by working alongside mission-driven colleagues, there is a good chance you will find TRM to be an exceptional place to grow and contribute. Learn more: Interviewing at TRM: How We Hire and What Success Looks Like https://www.trmlabs.com/resources/blog/interviewing-at-trm-how-we-hire-and-what-success-looks-like\n\n \n\n\nAI FLUENCY AT TRM\n\nAI fluency is a baseline expectation at TRM.\n\nWe believe AI meaningfully changes how top performers operate. We expect every team member to use AI to accelerate and reimagine their craft, not just automate surface tasks.\n\nAt TRM, AI fluency means you are among the top 10 percent of operators in your function in how you apply AI to:\n\n - Accelerate repeatable workflows\n\n - Structure and solve problems\n\n - Improve output quality\n\n - Increase speed and leverage\n\nYou will be evaluated on applied AI fluency during the interview process.\n\n\nLEADERSHIP PRINCIPLES\n\nWe hire and grow against three leadership principles. They’re the standards for how we operate, treat each other, and make decisions.\n\n - Impact-Oriented Trailblazer: We put customers first and move with speed, focus, and adaptability. We treat every plan like an experiment – test, ship, measure, and iterate quickly.\n\n - Master Craftsperson: We care deeply about our craft. We balance speed with high standards, own outcomes end‑to‑end, and invest in getting better everyday.\n\n - Inspiring Colleague: We add clarity and energy, not noise. We bring humility, candor, and a one‑team mindset — giving and receiving feedback to make the team stronger.\n\n\n\n\n\nJOIN OUR MISSION\n\nAt TRM we care deeply about our craft. We are looking for individuals who want their work to matter, who experiment with speed and rigor, and who take pride in building a safer world for billions of people. If you’re excited by TRM’s mission but don’t check every box, we encourage you to apply — we hire for slope, judgment, and the will to learn fast.\n\nTRM is a Series C company with $220M in total funding, backed by Blockchain Capital, Goldman Sachs, Bessemer, Y Combinator, Thoma Bravo, and others. Headquartered in San Francisco, TRM operates as a distributed-first company with hubs in Los Angeles, San Francisco, New York, Washington D.C., London, and Singapore.\n\n\n\n\n\nPRIVACY POLICY AND ADDITIONAL INFORMATION\n\nBy submitting your application, you are agreeing to allow TRM to process your personal information in accordance with the TRM Privacy Policy https://www.trmlabs.com/policies/privacy-policy.\n\nOur typical hiring cycles for specialized roles span 24 to 36 months. Accordingly, we retain your personal information for up to 36 months to evaluate your application and to consider you for current and future employment opportunities, unless you request earlier deletion or a different retention period is required or permitted by law.\n\nTo notify TRM Labs that you believe this job posting is non-compliant, please submit a report through this form https://docs.google.com/forms/d/e/1FAIpQLSc6e8jRCl2cQwgIzXLpIGQXtwvMQh__TcokvO2toAAkT44A6Q/viewform?usp=dialog. No response will be provided to inquiries unrelated to job posting compliance.\n\nThe use of AI tools of any kind (including but not limited to notetakers, interview assistants, and real-time coaching tools such as Otter.ai, Fireflies, Fathom, Cluey, or similar) during TRM interviews is not permitted without prior approval from TRM. TRM uses its own internal tools for note-taking to ensure a consistent and confidential experience for all candidates.\n\nWe are committed to providing reasonable accommodations to applicants with disabilities, and requests can be made via this form https://docs.google.com/forms/d/e/1FAIpQLSevmAzPxWOYm_7kMHb9lEJlX3tpdBeHvvvNWjsI_6xhUfnXjw/viewform?usp=dialog.\n\n\nRECRUITMENT AGENCIES\n\nTRM Labs does not accept unsolicited agency resumes. Please do not forward resumes to TRM employees. TRM Labs is not responsible for any fees related to unsolicited resumes and will not pay fees to any third-party agency or company without a signed agreement.\n\n\nLEARN MORE: COMPANY VALUES https://www.trmlabs.com/culture | INTERVIEWING https://www.trmlabs.com/interviewing | FAQS https://www.trmlabs.com/faq"
    },
    {
      "company": "HashKey Group",
      "func": "product",
      "category": "exchange",
      "position": "Senior Product Manager",
      "level": "senior",
      "location": "香港",
      "region": [
        "hk"
      ],
      "salary": "面议",
      "salaryNum": 130000,
      "requirements": "数字资产交易所产品管理；交易产品规划与迭代；跨工程/合规/运营协作；香港持牌交易所（SFC及MAS持牌）背景优先。",
      "link": "https://group.hashkey.com/careers",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "hashkey-group||senior-product-manager",
      "keywords": [
        "合规"
      ],
      "duties": [
        "合规风控",
        "产品规划",
        "社区运营"
      ]
    },
    {
      "company": "HashKey Group",
      "func": "ga",
      "category": "exchange",
      "position": "Compliance Manager",
      "level": "mid",
      "location": "新加坡 / 香港",
      "region": [
        "sg",
        "hk"
      ],
      "salary": "面议",
      "salaryNum": 100000,
      "requirements": "MAS AML/CFT合规；数字资产VASP监管；虚拟资产交易所合规框架搭建；新加坡或香港加密合规经验。",
      "link": "https://group.hashkey.com/careers",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "hashkey-group||compliance-manager",
      "keywords": [
        "AML/KYC",
        "合规"
      ],
      "duties": [
        "合规风控"
      ]
    },
    {
      "company": "Jito Labs",
      "func": "security",
      "category": "infra",
      "position": "Security Engineer",
      "level": "senior",
      "location": "远程（美国）",
      "region": [
        "remote",
        "us"
      ],
      "salary": "面议",
      "salaryNum": 160000,
      "requirements": "区块链/MEV安全；密钥与访问管理；漏洞识别与安全架构；Solana生态安全审查；智能合约安全审计；向安全负责人汇报。",
      "link": "https://jobs.lever.co/jito.wtf",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "jito-labs||security-engineer",
      "keywords": [
        "Smart Contract",
        "MEV",
        "Solana",
        "安全审计"
      ],
      "duties": [
        "团队管理",
        "架构设计",
        "协议/合约开发",
        "安全/审计"
      ]
    },
    {
      "company": "Jito Labs",
      "func": "ops",
      "category": "infra",
      "position": "Platform Engineer",
      "level": "senior",
      "location": "远程（美国）",
      "region": [
        "remote",
        "us"
      ],
      "salary": "面议",
      "salaryNum": 170000,
      "requirements": "5年以上基础设施/SRE/DevOps经验；Terraform/Ansible；Grafana/Prometheus；Rust/PostgreSQL；Solana验证节点低延迟生产系统维护；HCP Vault/Cloudflare/Tailscale。",
      "link": "https://jobs.lever.co/jito.wtf",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "jito-labs||platform-engineer",
      "keywords": [
        "Rust",
        "Validator/节点",
        "Solana",
        "Terraform",
        "Prometheus",
        "Grafana"
      ],
      "duties": [
        "性能/容量",
        "节点运维"
      ]
    },
    {
      "company": "Jito Labs",
      "func": "bd",
      "category": "infra",
      "position": "Validator Relations Associate",
      "level": "mid",
      "location": "远程",
      "region": [
        "remote"
      ],
      "salary": "面议",
      "salaryNum": 80000,
      "requirements": "Solana验证者生态与质押经济学深入了解；JitoSOL委托机制对接；验证者需求收集与产品反馈；协助制作入驻指南和教育内容。",
      "link": "https://jobs.lever.co/jito.wtf/eebaeb41-a547-49f2-9499-a9bd18c41155",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "jito-labs||validator-relations-associate",
      "keywords": [
        "Validator/节点",
        "Staking",
        "Solana"
      ],
      "duties": [
        "节点运维"
      ]
    },
    {
      "company": "Ondo Finance",
      "func": "eng",
      "category": "defi",
      "position": "Senior Smart Contract Engineer",
      "level": "senior",
      "location": "远程",
      "region": [
        "remote"
      ],
      "salary": "面议",
      "salaryNum": 200000,
      "requirements": "3年以上区块链工程经验；Solidity及非EVM智能合约语言；多链DeFi协议（Ethereum/Arbitrum/Solana/Sui/Aptos）；RWA代币化（USDY/OUSG）技术负责人。",
      "link": "https://jobs.gem.com/ondo-finance",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "ondo-finance||senior-smart-contract-engineer",
      "keywords": [
        "Solidity",
        "Smart Contract",
        "EVM",
        "DeFi",
        "Ethereum",
        "Solana"
      ],
      "duties": [
        "团队管理",
        "协议/合约开发",
        "多链/跨链"
      ]
    },
    {
      "company": "Ondo Finance",
      "func": "security",
      "category": "defi",
      "position": "Senior Security Engineer - Operations / Incident Response",
      "level": "senior",
      "location": "远程",
      "region": [
        "remote"
      ],
      "salary": "面议",
      "salaryNum": 170000,
      "requirements": "3-5年以上安全运营/检测工程/事件响应经验；SIEM（Splunk/Panther/Elastic/Sentinel）；EDR调优；Python脚本；将检测逻辑代码化；RWA协议安全防御。",
      "link": "https://jobs.gem.com/ondo-finance",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "ondo-finance||senior-security-engineer-operations-incident-response",
      "keywords": [
        "Python"
      ],
      "duties": [
        "故障/值班",
        "协议/合约开发",
        "安全/审计",
        "社区运营"
      ]
    },
    {
      "company": "Ondo Finance",
      "func": "growth",
      "category": "defi",
      "position": "Senior Developer Relations Lead",
      "level": "senior",
      "location": "远程",
      "region": [
        "remote"
      ],
      "salary": "面议",
      "salaryNum": 160000,
      "requirements": "深度DeFi/RWA生态知识；构建0到1开发者生态系统；技术传道与开发者社区运营；RWA代币化协议推广；Token+股权激励。",
      "link": "https://jobs.gem.com/ondo-finance",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "ondo-finance||senior-developer-relations-lead",
      "keywords": [
        "DeFi",
        "社区"
      ],
      "duties": [
        "协议/合约开发",
        "社区运营"
      ]
    },
    {
      "company": "Deribit",
      "func": "eng",
      "category": "exchange",
      "position": "Software Development Engineer in Test",
      "level": "senior",
      "location": "阿姆斯特丹 / 远程",
      "region": [
        "eu",
        "remote"
      ],
      "salary": "$115K–$138K",
      "salaryNum": 127000,
      "requirements": "5年以上QA自动化经验；TypeScript/Python；测试框架构建；CI/CD管道；加密衍生品交易所（期权/永续合约）质量保障；金融交易领域背景优先。",
      "link": "https://deribit.recruitee.com/",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "deribit||software-development-engineer-in-test",
      "keywords": [
        "Python",
        "TypeScript",
        "Smart Contract",
        "CI/CD"
      ],
      "duties": [
        "架构设计",
        "部署发布",
        "自动化",
        "协议/合约开发"
      ]
    },
    {
      "company": "Bullish",
      "func": "eng",
      "category": "exchange",
      "position": "Principal Engineer, High-Performance Systems",
      "level": "senior",
      "location": "纽约 / 香港 / 新加坡",
      "region": [
        "us",
        "hk",
        "sg"
      ],
      "salary": "$125K–$175K+",
      "salaryNum": 165000,
      "requirements": "高性能数据系统设计与开发；低延迟系统；多地混合办公；合规数字资产交易所（德国/香港/直布罗陀持牌）。",
      "link": "https://www.bullish.com/us/careers",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "bullish||principal-engineer-high-performance-systems",
      "keywords": [
        "合规"
      ],
      "duties": [
        "架构设计",
        "性能/容量",
        "合规风控"
      ]
    },
    {
      "company": "Bullish",
      "func": "eng",
      "category": "exchange",
      "position": "Lead Full Stack Engineer",
      "level": "head",
      "location": "纽约 / 全球",
      "region": [
        "us"
      ],
      "salary": "面议",
      "salaryNum": 200000,
      "requirements": "全栈工程师负责人；用户端交易应用；前后端协作；AI辅助开发；七地办公室（纽约/香港/新加坡）。",
      "link": "https://www.bullish.com/us/careers",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "bullish||lead-full-stack-engineer",
      "keywords": [
        "AI"
      ],
      "duties": [
        "团队管理"
      ]
    },
    {
      "company": "Bullish",
      "func": "product",
      "category": "exchange",
      "position": "Director of Product Management, US Derivatives",
      "level": "head",
      "location": "纽约 / 开曼群岛",
      "region": [
        "us"
      ],
      "salary": "面议",
      "salaryNum": 250000,
      "requirements": "美国衍生品产品总监；合规交易所；跨工程/设计/合规协作；多国持牌交易所产品经验。",
      "link": "https://www.bullish.com/us/careers",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "bullish||director-of-product-management-us-derivatives",
      "keywords": [
        "合规"
      ],
      "duties": [
        "团队管理",
        "合规风控",
        "产品规划"
      ]
    },
    {
      "company": "Flipster",
      "func": "eng",
      "category": "exchange",
      "position": "Junior / Intermediate Backend Software Engineer",
      "level": "mid",
      "location": "新加坡 / 远程 (APAC)",
      "region": [
        "sg",
        "asia",
        "remote"
      ],
      "salary": "面议",
      "salaryNum": 90000,
      "requirements": "初/中级后端工程师；高性能合约永续交易所；Golang或Rust优先；新加坡/APAC。",
      "link": "https://careers.flipster.io/jobs",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "flipster||junior-intermediate-backend-software-engineer",
      "keywords": [
        "Rust",
        "Go",
        "Smart Contract"
      ],
      "duties": [
        "性能/容量",
        "协议/合约开发"
      ]
    },
    {
      "company": "Flipster",
      "func": "eng",
      "category": "exchange",
      "position": "Senior Mobile Platform Engineer",
      "level": "senior",
      "location": "远程",
      "region": [
        "remote",
        "sg",
        "asia"
      ],
      "salary": "面议",
      "salaryNum": 130000,
      "requirements": "iOS/Android移动端平台工程师；零利差永续合约交易所App；多端性能优化；全球远程。",
      "link": "https://careers.flipster.io/jobs",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "flipster||senior-mobile-platform-engineer",
      "keywords": [
        "Smart Contract"
      ],
      "duties": [
        "性能/容量",
        "协议/合约开发"
      ]
    },
    {
      "company": "Flipster",
      "func": "product",
      "category": "exchange",
      "position": "Product Partnerships Manager",
      "level": "mid",
      "location": "远程",
      "region": [
        "remote"
      ],
      "salary": "面议",
      "salaryNum": 100000,
      "requirements": "产品合作伙伴经理；交易所API生态拓展；产品+BD复合背景；全球远程。",
      "link": "https://careers.flipster.io/jobs",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "flipster||product-partnerships-manager",
      "keywords": [],
      "duties": [
        "商务拓展"
      ]
    },
    {
      "company": "BTSE",
      "func": "eng",
      "category": "exchange",
      "position": "Senior Backend Engineer (Python / Java)",
      "level": "senior",
      "location": "远程",
      "region": [
        "remote",
        "asia"
      ],
      "salary": "面议",
      "salaryNum": 130000,
      "requirements": "5年以上Python/Java后端；高频交易系统；RESTful API；可扩展微服务架构；全球远程。",
      "link": "https://jobs.lever.co/BTSE",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "btse||senior-backend-engineer-python-java",
      "keywords": [
        "Python"
      ],
      "duties": [
        "架构设计"
      ]
    },
    {
      "company": "BTSE",
      "func": "ops",
      "category": "exchange",
      "position": "Infrastructure Cloud Engineer",
      "level": "senior",
      "location": "远程",
      "region": [
        "remote",
        "asia"
      ],
      "salary": "面议",
      "salaryNum": 140000,
      "requirements": "云基础设施（AWS/GCP）；Kubernetes；高可用交易所架构；监控自动化运维；全球远程。",
      "link": "https://jobs.lever.co/BTSE",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "btse||infrastructure-cloud-engineer",
      "keywords": [
        "Kubernetes",
        "AWS",
        "GCP"
      ],
      "duties": [
        "架构设计",
        "监控告警",
        "自动化"
      ]
    },
    {
      "company": "BTSE",
      "func": "bd",
      "category": "exchange",
      "position": "OTC Institutional Sales",
      "level": "mid",
      "location": "远程",
      "region": [
        "remote"
      ],
      "salary": "面议",
      "salaryNum": 100000,
      "requirements": "机构OTC大宗交易销售；加密行业客户开发；关系维护；全球合规交易所（新加坡+英属维尔京群岛持牌）。",
      "link": "https://jobs.lever.co/BTSE",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "btse||otc-institutional-sales",
      "keywords": [
        "合规"
      ],
      "duties": [
        "合规风控",
        "商务拓展",
        "客户/机构对接"
      ]
    },
    {
      "company": "BTSE",
      "func": "data",
      "category": "exchange",
      "position": "Research Data Engineer",
      "level": "mid",
      "location": "远程",
      "region": [
        "remote",
        "asia"
      ],
      "salary": "面议",
      "salaryNum": 110000,
      "requirements": "数据工程/量化研究；交易所量化数据管道；Python/SQL；金融/加密市场数据分析背景。",
      "link": "https://jobs.lever.co/BTSE",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "btse||research-data-engineer",
      "keywords": [
        "Python",
        "SQL"
      ],
      "duties": [
        "数据分析"
      ]
    },
    {
      "company": "Bitrue",
      "func": "ga",
      "category": "exchange",
      "position": "Finance Associate",
      "level": "mid",
      "location": "新加坡",
      "region": [
        "sg"
      ],
      "salary": "面议",
      "salaryNum": 70000,
      "requirements": "财务运营；加密交易所后台；会计/财务背景；新加坡持牌交易所（700+ 币种）。",
      "link": "https://www.linkedin.com/jobs/view/finance-associate-at-bitrue-4227239136",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "bitrue||finance-associate",
      "keywords": [],
      "duties": [
        "社区运营"
      ]
    },
    {
      "company": "Bitrue",
      "func": "growth",
      "category": "exchange",
      "position": "Director of Marketing Operations",
      "level": "head",
      "location": "美国",
      "region": [
        "us"
      ],
      "salary": "面议",
      "salaryNum": 140000,
      "requirements": "营销运营总监；Bitrue美国市场增长；团队管理；加密行业品牌运营经验。",
      "link": "https://www.linkedin.com/jobs/view/director-of-marketing-operations-at-bitrue-us-4205299985",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "bitrue||director-of-marketing-operations",
      "keywords": [
        "营销/增长"
      ],
      "duties": [
        "团队管理",
        "增长营销",
        "社区运营"
      ]
    },
    {
      "company": "BloFin",
      "func": "bd",
      "category": "exchange",
      "position": "Senior BD Expert (Payment)",
      "level": "senior",
      "location": "远程 (APAC)",
      "region": [
        "remote",
        "asia"
      ],
      "salary": "面议",
      "salaryNum": 100000,
      "requirements": "高级BD专家（加密支付方向）；APAC支付渠道拓展；Crypto合规支付合作谈判经验。",
      "link": "https://www.linkedin.com/jobs/view/senior-bd-expert-payment-at-blofin-4386726914",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "blofin||senior-bd-expert-payment",
      "keywords": [
        "合规"
      ],
      "duties": [
        "合规风控",
        "商务拓展"
      ]
    },
    {
      "company": "BloFin",
      "func": "ops",
      "category": "exchange",
      "position": "P2P Operations Manager",
      "level": "mid",
      "location": "远程 (APAC)",
      "region": [
        "remote",
        "asia"
      ],
      "salary": "面议",
      "salaryNum": 90000,
      "requirements": "P2P交易运营管理；风控与流动性维护；亚太区用户P2P市场运营。",
      "link": "https://www.linkedin.com/jobs/view/p2p-operations-manager-at-blofin-4164907962",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "blofin||p2p-operations-manager",
      "keywords": [],
      "duties": [
        "合规风控",
        "社区运营"
      ]
    },
    {
      "company": "CoinDCX",
      "func": "eng",
      "category": "exchange",
      "position": "Staff Software Engineer, Backend – Trading Platform",
      "level": "senior",
      "location": "班加罗尔, 印度",
      "region": [
        "asia"
      ],
      "salary": "面议",
      "salaryNum": 80000,
      "requirements": "Staff级后端工程师；交易引擎平台；高吞吐分布式系统；印度头部合规加密交易所。",
      "link": "https://careers.coindcx.com/o/staff-software-engineer-backend-trading-platform",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "coindcx||staff-software-engineer-backend-trading-platform",
      "keywords": [
        "合规"
      ],
      "duties": [
        "合规风控"
      ]
    },
    {
      "company": "Independent Reserve",
      "func": "eng",
      "category": "exchange",
      "position": "Backend Developer (.NET / MS SQL Server)",
      "level": "mid",
      "location": "悉尼, 澳大利亚",
      "region": [
        "asia"
      ],
      "salary": "面议",
      "salaryNum": 90000,
      "requirements": "后端开发（C#/.NET/MSSQL）；澳大利亚合规交易所（500k+ 用户）；AUSTRAC/MAS持牌。",
      "link": "https://independentreserve.freshteam.com/jobs",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "independent-reserve||backend-developer-net-ms-sql-server",
      "keywords": [
        "SQL",
        "合规"
      ],
      "duties": [
        "合规风控"
      ]
    },
    {
      "company": "Independent Reserve",
      "func": "ga",
      "category": "exchange",
      "position": "Compliance Officer",
      "level": "mid",
      "location": "悉尼 / 新加坡",
      "region": [
        "sg",
        "asia"
      ],
      "salary": "面议",
      "salaryNum": 100000,
      "requirements": "合规官；AML/交易监控；AUSTRAC/MAS持牌交易所；加密行业合规背景。",
      "link": "https://independentreserve.freshteam.com/jobs",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "independent-reserve||compliance-officer",
      "keywords": [
        "AML/KYC",
        "合规"
      ],
      "duties": [
        "监控告警",
        "合规风控"
      ]
    },
    {
      "company": "Toobit",
      "func": "bd",
      "category": "exchange",
      "position": "BD Manager / Leader (North American Region)",
      "level": "head",
      "location": "远程 (北美)",
      "region": [
        "remote",
        "us"
      ],
      "salary": "面议",
      "salaryNum": 90000,
      "requirements": "北美区BD负责人；KOL/联盟合作伙伴拓展；交易所用户增长；前Huobi核心成员创办团队。",
      "link": "https://wellfound.com/company/toobit-2/jobs",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "toobit||bd-manager-leader-north-american-region",
      "keywords": [
        "营销/增长"
      ],
      "duties": [
        "团队管理",
        "增长营销",
        "商务拓展"
      ]
    },
    {
      "company": "Deepcoin",
      "func": "eng",
      "category": "exchange",
      "position": "Backend Engineer (Golang)",
      "level": "mid",
      "location": "远程 / 亚洲",
      "region": [
        "remote",
        "asia"
      ],
      "salary": "面议",
      "salaryNum": 100000,
      "requirements": "Golang后端；微服务架构（MySQL/Redis/Kafka）；CeFi现货/衍生品交易所；亚洲团队。",
      "link": "https://www.deepcoin.com/turbo/en/careers",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "deepcoin||backend-engineer-golang",
      "keywords": [
        "Go",
        "Kafka"
      ],
      "duties": [
        "架构设计"
      ]
    },
    {
      "company": "Hotcoin Global",
      "func": "growth",
      "category": "exchange",
      "position": "Marketing Director",
      "level": "head",
      "location": "远程",
      "region": [
        "remote"
      ],
      "salary": "面议",
      "salaryNum": 120000,
      "requirements": "营销总监；加密交易所全球增长；品牌/活动/社媒运营；7M+ 用户、180+ 国家平台。",
      "link": "https://www.hotcoin.com/en_US/position/",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "hotcoin-global||marketing-director",
      "keywords": [
        "营销/增长"
      ],
      "duties": [
        "团队管理",
        "增长营销",
        "社区运营"
      ]
    },
    {
      "company": "Hotcoin Global",
      "func": "bd",
      "category": "exchange",
      "position": "Chief Business Development Officer (CBDO)",
      "level": "head",
      "location": "远程",
      "region": [
        "remote"
      ],
      "salary": "面议",
      "salaryNum": 180000,
      "requirements": "首席商务发展官；全球战略合作；机构/项目生态拓展；加密交易所C级管理经验。",
      "link": "https://www.hotcoin.com/en_US/position/",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "hotcoin-global||chief-business-development-officer-cbdo",
      "keywords": [],
      "duties": [
        "商务拓展",
        "客户/机构对接"
      ]
    },
    {
      "company": "Aztec",
      "func": "eng",
      "category": "chain",
      "position": "Software Engineer (Noir Generalist)",
      "level": "senior",
      "location": "远程",
      "region": [
        "remote"
      ],
      "salary": "面议",
      "salaryNum": 200000,
      "requirements": "Noir ZK语言全栈；零知识证明电路；隐私智能合约；Aztec L2（发明PLONK zkSNARK + Noir语言；a16z/Paradigm投资）。",
      "link": "https://web3.career/web3-companies/aztec",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "aztec||software-engineer-noir-generalist",
      "keywords": [
        "Smart Contract",
        "L2/Rollup",
        "ZK"
      ],
      "duties": [
        "协议/合约开发"
      ]
    },
    {
      "company": "Caldera",
      "func": "eng",
      "category": "infra",
      "position": "Senior Protocol Engineer (Rollups)",
      "level": "senior",
      "location": "远程",
      "region": [
        "remote"
      ],
      "salary": "$190K–$250K",
      "salaryNum": 220000,
      "requirements": "高级协议工程师；OP Stack/Arbitrum/ZKsync Rollup框架；模块化链基础设施；Rust/Go。",
      "link": "https://jobs.ashbyhq.com/Caldera/4cca4a1a-e53e-455c-8470-09724c8f840e",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "caldera||senior-protocol-engineer-rollups",
      "keywords": [
        "Rust",
        "Go",
        "L2/Rollup"
      ],
      "duties": [
        "协议/合约开发"
      ]
    },
    {
      "company": "Zokyo",
      "func": "security",
      "category": "other",
      "position": "Senior Security Engineer (Smart Contract Auditor)",
      "level": "senior",
      "location": "远程",
      "region": [
        "remote"
      ],
      "salary": "面议",
      "salaryNum": 180000,
      "requirements": "智能合约审计；Solidity/Rust安全漏洞分析；DeFi协议安全；形式化验证经验；全球100% 远程。",
      "link": "https://cryptocurrencyjobs.co/startups/zokyo/",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "zokyo||senior-security-engineer-smart-contract-auditor",
      "keywords": [
        "Solidity",
        "Rust",
        "Smart Contract",
        "DeFi",
        "安全审计",
        "形式化验证"
      ],
      "duties": [
        "协议/合约开发",
        "安全/审计"
      ]
    },
    {
      "company": "Horizen Labs",
      "func": "eng",
      "category": "chain",
      "position": "Developer Relations Engineer",
      "level": "mid",
      "location": "纽约 / 米兰 / 远程",
      "region": [
        "us",
        "eu",
        "remote"
      ],
      "salary": "$65K–$80K",
      "salaryNum": 72500,
      "requirements": "开发者关系工程师；ZKVerify公链；开发者文档/SDK支持；ZK技术传播；纽约/米兰/远程。",
      "link": "https://job-boards.greenhouse.io/horizenlabs",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "horizen-labs||developer-relations-engineer",
      "keywords": [
        "ZK"
      ],
      "duties": []
    },
    {
      "company": "Horizen Labs",
      "func": "design",
      "category": "chain",
      "position": "UI/UX Designer",
      "level": "mid",
      "location": "远程",
      "region": [
        "remote"
      ],
      "salary": "$65K–$80K",
      "salaryNum": 72500,
      "requirements": "UI/UX设计师；ZK区块链产品设计；Web3钱包/DApp交互体验；Figma；用户研究。",
      "link": "https://job-boards.greenhouse.io/horizenlabs",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "horizen-labs||ui-ux-designer",
      "keywords": [
        "ZK",
        "Wallet"
      ],
      "duties": [
        "设计/品牌"
      ]
    },
    {
      "company": "Paradex",
      "func": "eng",
      "category": "defi",
      "position": "Software Engineer (High-Performance DEX)",
      "level": "senior",
      "location": "远程",
      "region": [
        "remote"
      ],
      "salary": "面议",
      "salaryNum": 160000,
      "requirements": "高级工程师；Starknet链上永续合约DEX；高性能撮合系统；Paradigm孵化项目。",
      "link": "https://cryptojobslist.com/companies/paradex",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "paradex||software-engineer-high-performance-dex",
      "keywords": [
        "Smart Contract"
      ],
      "duties": [
        "性能/容量",
        "协议/合约开发"
      ]
    },
    {
      "company": "Mellow Protocol",
      "func": "eng",
      "category": "defi",
      "position": "Senior Smart Contract Developer (Solidity / AMM)",
      "level": "senior",
      "location": "远程",
      "region": [
        "remote"
      ],
      "salary": "面议",
      "salaryNum": 180000,
      "requirements": "Solidity高级合约开发；Uniswap V3 AMM定制化；DeFi流动性优化；形式化验证经验加分。",
      "link": "https://cryptojobslist.com/companies/mellow-protocol",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "mellow-protocol||senior-smart-contract-developer-solidity-amm",
      "keywords": [
        "Solidity",
        "Smart Contract",
        "DeFi",
        "形式化验证"
      ],
      "duties": [
        "性能/容量",
        "协议/合约开发"
      ]
    },
    {
      "company": "StarkWare Industries",
      "func": "eng",
      "category": "chain",
      "position": "Software Engineer / Researcher (ZK-STARK)",
      "level": "senior",
      "location": "以色列 / 远程",
      "region": [
        "remote",
        "eu"
      ],
      "salary": "面议",
      "salaryNum": 200000,
      "requirements": "ZK-STARK/Cairo/Starknet工程师或研究员；零知识证明系统；性能优化；以色列总部或远程。",
      "link": "https://starkware.co/careers/",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "starkware-industries||software-engineer-researcher-zk-stark",
      "keywords": [
        "ZK"
      ],
      "duties": [
        "性能/容量"
      ]
    },
    {
      "company": "MoonPay",
      "func": "data",
      "category": "other",
      "position": "Staff Data Engineer",
      "level": "senior",
      "location": "远程",
      "region": [
        "remote"
      ],
      "salary": "面议",
      "salaryNum": 160000,
      "requirements": "Staff级数据工程师；加密支付基础设施数据管道/仓储；Python/SQL；100+ 法币/加密货币支持平台。",
      "link": "https://jobs.lever.co/moonpay",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "moonpay||staff-data-engineer",
      "keywords": [
        "Python",
        "SQL"
      ],
      "duties": []
    },
    {
      "company": "Gemini",
      "func": "eng",
      "category": "exchange",
      "position": "Senior Software Engineer, Risk Engineering",
      "level": "senior",
      "location": "NYC / 远程 (美国)",
      "region": [
        "us",
        "remote"
      ],
      "salary": "$140K–$200K",
      "salaryNum": 170000,
      "requirements": "风控引擎后端；高可靠交易系统；美国合规交易所（Winklevoss 创办）。",
      "link": "https://www.gemini.com/careers",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "gemini||senior-software-engineer-risk-engineering",
      "keywords": [
        "合规"
      ],
      "duties": [
        "合规风控"
      ]
    },
    {
      "company": "Gemini",
      "func": "product",
      "category": "exchange",
      "position": "Lead Product Manager",
      "level": "senior",
      "location": "NYC / 远程 (美国)",
      "region": [
        "us",
        "remote"
      ],
      "salary": "$168K–$240K",
      "salaryNum": 204000,
      "requirements": "交易所产品负责人；跨研发/设计/合规协作。",
      "link": "https://www.gemini.com/careers",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "gemini||lead-product-manager",
      "keywords": [
        "合规"
      ],
      "duties": [
        "团队管理",
        "合规风控",
        "产品规划"
      ]
    },
    {
      "company": "Gemini",
      "func": "ops",
      "category": "exchange",
      "position": "Staff Enterprise Infrastructure Engineer",
      "level": "senior",
      "location": "远程 (美国)",
      "region": [
        "us",
        "remote"
      ],
      "salary": "面议",
      "salaryNum": 200000,
      "requirements": "企业级基础设施；K8s/云平台；高可用与可观测性。",
      "link": "https://www.gemini.com/careers",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "gemini||staff-enterprise-infrastructure-engineer",
      "keywords": [
        "Kubernetes",
        "可观测性"
      ],
      "duties": []
    },
    {
      "company": "WOO X",
      "func": "ops",
      "category": "exchange",
      "position": "Senior Technical Support Engineer",
      "level": "mid",
      "location": "远程 (欧洲/亚洲)",
      "region": [
        "remote",
        "eu",
        "asia"
      ],
      "salary": "面议",
      "salaryNum": 90000,
      "requirements": "技术支持；客户问题排查；与研发协作；8 国 12 城远程团队。",
      "link": "https://woox.io/careers",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "woo-x||senior-technical-support-engineer",
      "keywords": [],
      "duties": [
        "客户/机构对接"
      ]
    },
    {
      "company": "WOO X",
      "func": "ga",
      "category": "exchange",
      "position": "People Operations Specialist",
      "level": "mid",
      "location": "远程",
      "region": [
        "remote"
      ],
      "salary": "面议",
      "salaryNum": 80000,
      "requirements": "HR 运营；薪酬/政策合规；全球团队。",
      "link": "https://woox.io/careers",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "woo-x||people-operations-specialist",
      "keywords": [
        "合规"
      ],
      "duties": [
        "合规风控",
        "社区运营",
        "招聘/HR"
      ]
    },
    {
      "company": "Backpack Exchange",
      "func": "eng",
      "category": "exchange",
      "position": "Mobile Engineer (React Native)",
      "level": "senior",
      "location": "远程 (芝加哥/迪拜/东京)",
      "region": [
        "remote",
        "us",
        "asia"
      ],
      "salary": "面议",
      "salaryNum": 150000,
      "requirements": "React Native 移动端；交易所 App；含公司股权。",
      "link": "https://jobs.backpack.app/",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "backpack-exchange||mobile-engineer-react-native",
      "keywords": [
        "React"
      ],
      "duties": []
    },
    {
      "company": "Backpack Exchange",
      "func": "eng",
      "category": "exchange",
      "position": "Wallet Engineer (React Web)",
      "level": "senior",
      "location": "远程",
      "region": [
        "remote"
      ],
      "salary": "面议",
      "salaryNum": 150000,
      "requirements": "钱包前端（React Web）；自托管钱包；多链。",
      "link": "https://jobs.backpack.app/",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "backpack-exchange||wallet-engineer-react-web",
      "keywords": [
        "React",
        "Wallet"
      ],
      "duties": [
        "多链/跨链"
      ]
    },
    {
      "company": "Binance.US",
      "func": "eng",
      "category": "exchange",
      "position": "Backend Engineer",
      "level": "senior",
      "location": "远程 (美国)",
      "region": [
        "us",
        "remote"
      ],
      "salary": "面议",
      "salaryNum": 160000,
      "requirements": "美国合规交易所后端；高并发；微服务；详见招聘页。",
      "link": "https://www.binance.us/careers",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "binance-us||backend-engineer",
      "keywords": [
        "合规"
      ],
      "duties": [
        "合规风控",
        "招聘/HR"
      ]
    },
    {
      "company": "bitFlyer",
      "func": "eng",
      "category": "exchange",
      "position": "Backend Engineer",
      "level": "senior",
      "location": "东京, 日本",
      "region": [
        "asia"
      ],
      "salary": "面议",
      "salaryNum": 130000,
      "requirements": "日本头部合规交易所；后端开发；高可用。",
      "link": "https://web3.career/web3-companies/bitflyer",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "bitflyer||backend-engineer",
      "keywords": [
        "合规"
      ],
      "duties": [
        "合规风控"
      ]
    },
    {
      "company": "Pionex",
      "func": "eng",
      "category": "exchange",
      "position": "Backend Engineer",
      "level": "mid",
      "location": "新加坡 / 远程",
      "region": [
        "sg",
        "asia",
        "remote"
      ],
      "salary": "面议",
      "salaryNum": 120000,
      "requirements": "网格交易/量化交易所后端；策略系统；详见招聘页。",
      "link": "https://web3.career/web3-companies/pionex",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "pionex||backend-engineer",
      "keywords": [],
      "duties": [
        "招聘/HR"
      ]
    },
    {
      "company": "CoinEx",
      "func": "ops",
      "category": "exchange",
      "position": "DevOps / SRE Engineer",
      "level": "senior",
      "location": "全球远程",
      "region": [
        "remote"
      ],
      "salary": "面议",
      "salaryNum": 140000,
      "requirements": "交易系统运维；K8s；监控告警；全球远程。",
      "link": "https://web3.career/web3-companies/coinex",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "coinex||devops-sre-engineer",
      "keywords": [
        "Kubernetes"
      ],
      "duties": [
        "监控告警"
      ]
    },
    {
      "company": "Bitvavo",
      "func": "eng",
      "category": "exchange",
      "position": "Backend Engineer",
      "level": "senior",
      "location": "阿姆斯特丹, 欧洲",
      "region": [
        "eu"
      ],
      "salary": "面议",
      "salaryNum": 130000,
      "requirements": "欧洲（荷兰）合规交易所后端；高并发；详见招聘页。",
      "link": "https://bitvavo.com/en/careers",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "bitvavo||backend-engineer",
      "keywords": [
        "合规"
      ],
      "duties": [
        "合规风控",
        "招聘/HR"
      ]
    },
    {
      "company": "BitMEX",
      "func": "eng",
      "category": "exchange",
      "position": "Backend Engineer",
      "level": "senior",
      "location": "远程 / 香港",
      "region": [
        "remote",
        "hk",
        "asia"
      ],
      "salary": "面议",
      "salaryNum": 160000,
      "requirements": "衍生品交易所后端；高频撮合；低延迟系统。",
      "link": "https://www.bitmex.com/careers",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "bitmex||backend-engineer",
      "keywords": [],
      "duties": [
        "性能/容量"
      ]
    },
    {
      "company": "Bitso",
      "func": "eng",
      "category": "exchange",
      "position": "Backend Engineer",
      "level": "senior",
      "location": "远程 (拉美)",
      "region": [
        "remote"
      ],
      "salary": "面议",
      "salaryNum": 130000,
      "requirements": "拉美头部交易所后端；支付与交易系统；详见招聘页。",
      "link": "https://bitso.com/careers",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "bitso||backend-engineer",
      "keywords": [],
      "duties": [
        "招聘/HR"
      ]
    },
    {
      "company": "Luno",
      "func": "eng",
      "category": "exchange",
      "position": "Backend Engineer (Go)",
      "level": "senior",
      "location": "远程 / 欧洲",
      "region": [
        "remote",
        "eu"
      ],
      "salary": "面议",
      "salaryNum": 130000,
      "requirements": "交易所后端；Go；新兴市场用户规模大。",
      "link": "https://www.luno.com/careers",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "luno||backend-engineer-go",
      "keywords": [
        "Go"
      ],
      "duties": []
    },
    {
      "company": "Bitkub",
      "func": "eng",
      "category": "exchange",
      "position": "Backend Engineer",
      "level": "mid",
      "location": "曼谷, 泰国",
      "region": [
        "asia"
      ],
      "salary": "面议",
      "salaryNum": 90000,
      "requirements": "泰国头部交易所后端；高并发；详见招聘页。",
      "link": "https://web3.career/web3-companies/bitkub",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "bitkub||backend-engineer",
      "keywords": [],
      "duties": [
        "招聘/HR"
      ]
    },
    {
      "company": "Coincheck",
      "func": "eng",
      "category": "exchange",
      "position": "Backend Engineer",
      "level": "senior",
      "location": "东京, 日本",
      "region": [
        "asia"
      ],
      "salary": "面议",
      "salaryNum": 120000,
      "requirements": "日本合规交易所后端；纳斯达克上市集团；详见招聘页。",
      "link": "https://web3.career/web3-companies/coincheck",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "coincheck||backend-engineer",
      "keywords": [
        "合规"
      ],
      "duties": [
        "合规风控",
        "招聘/HR"
      ]
    },
    {
      "company": "AscendEX",
      "func": "eng",
      "category": "exchange",
      "position": "Backend Engineer",
      "level": "mid",
      "location": "新加坡 / 远程",
      "region": [
        "sg",
        "asia",
        "remote"
      ],
      "salary": "面议",
      "salaryNum": 120000,
      "requirements": "交易所后端；现货/合约；详见招聘页。",
      "link": "https://web3.career/web3-companies/ascendex",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "ascendex||backend-engineer",
      "keywords": [
        "Smart Contract"
      ],
      "duties": [
        "协议/合约开发",
        "招聘/HR"
      ]
    },
    {
      "company": "Poloniex",
      "func": "eng",
      "category": "exchange",
      "position": "Backend Engineer",
      "level": "mid",
      "location": "全球远程",
      "region": [
        "remote"
      ],
      "salary": "面议",
      "salaryNum": 120000,
      "requirements": "老牌交易所后端；多币种交易系统；全球远程。",
      "link": "https://web3.career/web3-companies/poloniex",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "poloniex||backend-engineer",
      "keywords": [],
      "duties": []
    },
    {
      "company": "Bitfinex",
      "func": "eng",
      "category": "exchange",
      "position": "Senior Node.js Backend Developer",
      "level": "senior",
      "location": "100% 远程 (全球)",
      "region": [
        "remote"
      ],
      "salary": "面议",
      "salaryNum": 160000,
      "requirements": "Node.js 后端开发；高并发交易系统；分布式架构；全球远程。",
      "link": "https://careers.bitfinex.com/",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "bitfinex||senior-node-js-backend-developer",
      "keywords": [
        "Node.js",
        "Validator/节点"
      ],
      "duties": [
        "架构设计",
        "节点运维"
      ]
    },
    {
      "company": "Bitfinex",
      "func": "eng",
      "category": "exchange",
      "position": "Mobile Developer - React Native",
      "level": "mid",
      "location": "100% 远程 (全球)",
      "region": [
        "remote"
      ],
      "salary": "面议",
      "salaryNum": 110000,
      "requirements": "React Native 移动端开发；交易所 App；全球远程。",
      "link": "https://careers.bitfinex.com/",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "bitfinex||mobile-developer-react-native",
      "keywords": [
        "React"
      ],
      "duties": []
    },
    {
      "company": "Bitfinex",
      "func": "growth",
      "category": "exchange",
      "position": "Content Marketing Manager",
      "level": "mid",
      "location": "远程 (CET 时区)",
      "region": [
        "remote",
        "eu"
      ],
      "salary": "面议",
      "salaryNum": 90000,
      "requirements": "内容营销；加密行业内容策略；CET 时区；远程。",
      "link": "https://careers.bitfinex.com/",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "bitfinex||content-marketing-manager",
      "keywords": [
        "营销/增长"
      ],
      "duties": [
        "增长营销"
      ]
    },
    {
      "company": "Bitfinex",
      "func": "ga",
      "category": "exchange",
      "position": "Junior Risk Monitoring Analyst",
      "level": "mid",
      "location": "远程 (CET 时区)",
      "region": [
        "remote",
        "eu"
      ],
      "salary": "面议",
      "salaryNum": 80000,
      "requirements": "风险监控与分析；交易风控；合规；CET 时区。",
      "link": "https://careers.bitfinex.com/",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "bitfinex||junior-risk-monitoring-analyst",
      "keywords": [
        "合规"
      ],
      "duties": [
        "监控告警",
        "合规风控",
        "数据分析"
      ]
    },
    {
      "company": "MEXC",
      "func": "eng",
      "category": "exchange",
      "position": "Backend Engineer",
      "level": "senior",
      "location": "全球远程",
      "region": [
        "remote"
      ],
      "salary": "面议",
      "salaryNum": 150000,
      "requirements": "交易所后端；高并发撮合；微服务；全员远程文化。",
      "link": "https://cryptojobslist.com/companies/mexc",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "mexc||backend-engineer",
      "keywords": [],
      "duties": []
    },
    {
      "company": "MEXC",
      "func": "growth",
      "category": "exchange",
      "position": "Marketing Manager",
      "level": "mid",
      "location": "全球远程",
      "region": [
        "remote"
      ],
      "salary": "面议",
      "salaryNum": 95000,
      "requirements": "市场营销与增长；多市场拓展；全球远程。",
      "link": "https://cryptojobslist.com/companies/mexc",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "mexc||marketing-manager",
      "keywords": [
        "营销/增长"
      ],
      "duties": [
        "增长营销",
        "商务拓展"
      ]
    },
    {
      "company": "HTX",
      "func": "eng",
      "category": "exchange",
      "position": "Backend Engineer",
      "level": "senior",
      "location": "全球远程",
      "region": [
        "remote"
      ],
      "salary": "面议",
      "salaryNum": 150000,
      "requirements": "交易系统后端；高可用；服务 130+ 国家用户。",
      "link": "https://crypto.jobs/companies/htx",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "htx||backend-engineer",
      "keywords": [],
      "duties": []
    },
    {
      "company": "Bitstamp by Robinhood",
      "func": "ga",
      "category": "exchange",
      "position": "Senior Counsel (Legal)",
      "level": "senior",
      "location": "远程 (EU)",
      "region": [
        "remote",
        "eu"
      ],
      "salary": "面议",
      "salaryNum": 150000,
      "requirements": "加密法务；证券/支付监管；合规；老牌合规交易所（Robinhood 旗下）。",
      "link": "https://apply.workable.com/bitstamp/",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "bitstamp-by-robinhood||senior-counsel-legal",
      "keywords": [
        "合规"
      ],
      "duties": [
        "合规风控"
      ]
    },
    {
      "company": "Bitstamp by Robinhood",
      "func": "ga",
      "category": "exchange",
      "position": "Risk Governance Senior Specialist",
      "level": "senior",
      "location": "远程 (EU)",
      "region": [
        "remote",
        "eu"
      ],
      "salary": "面议",
      "salaryNum": 130000,
      "requirements": "风险治理；合规风控体系；监管报告。",
      "link": "https://apply.workable.com/bitstamp/",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "bitstamp-by-robinhood||risk-governance-senior-specialist",
      "keywords": [
        "合规"
      ],
      "duties": [
        "合规风控"
      ]
    },
    {
      "company": "Bitstamp by Robinhood",
      "func": "ga",
      "category": "exchange",
      "position": "Corporate Accountant",
      "level": "mid",
      "location": "远程 (EU)",
      "region": [
        "remote",
        "eu"
      ],
      "salary": "面议",
      "salaryNum": 90000,
      "requirements": "公司财务会计；账务核算；报表。",
      "link": "https://apply.workable.com/bitstamp/",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "bitstamp-by-robinhood||corporate-accountant",
      "keywords": [],
      "duties": []
    },
    {
      "company": "BingX",
      "func": "eng",
      "category": "exchange",
      "position": "Blockchain Developer (BTC/ETH)",
      "level": "senior",
      "location": "新加坡 / 远程",
      "region": [
        "sg",
        "asia",
        "remote"
      ],
      "salary": "面议",
      "salaryNum": 150000,
      "requirements": "比特币/以太坊开发；钱包与链上集成；新加坡 HQ。",
      "link": "https://careers.bingx.com/jobs",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "bingx||blockchain-developer-btc-eth",
      "keywords": [
        "Wallet",
        "Ethereum",
        "Bitcoin"
      ],
      "duties": [
        "协议/合约开发"
      ]
    },
    {
      "company": "BingX",
      "func": "product",
      "category": "exchange",
      "position": "Product Manager",
      "level": "mid",
      "location": "新加坡 / 远程",
      "region": [
        "sg",
        "asia",
        "remote"
      ],
      "salary": "面议",
      "salaryNum": 120000,
      "requirements": "交易所产品；社交交易方向；新加坡/远程。",
      "link": "https://careers.bingx.com/jobs",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "bingx||product-manager",
      "keywords": [],
      "duties": [
        "产品规划"
      ]
    },
    {
      "company": "BingX",
      "func": "design",
      "category": "exchange",
      "position": "UI/UX Designer",
      "level": "mid",
      "location": "新加坡 / 远程",
      "region": [
        "sg",
        "asia",
        "remote"
      ],
      "salary": "面议",
      "salaryNum": 100000,
      "requirements": "UI/UX 设计；移动端交易体验。",
      "link": "https://careers.bingx.com/jobs",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "bingx||ui-ux-designer",
      "keywords": [],
      "duties": [
        "设计/品牌"
      ]
    },
    {
      "company": "BingX",
      "func": "growth",
      "category": "exchange",
      "position": "Community Manager",
      "level": "mid",
      "location": "全球远程",
      "region": [
        "remote"
      ],
      "salary": "面议",
      "salaryNum": 75000,
      "requirements": "社区运营；社媒；多语言社区增长。",
      "link": "https://careers.bingx.com/jobs",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "bingx||community-manager",
      "keywords": [
        "社区",
        "营销/增长"
      ],
      "duties": [
        "增长营销",
        "社区运营"
      ]
    },
    {
      "company": "Upbit (Dunamu)",
      "func": "growth",
      "category": "exchange",
      "position": "Director of Marketing and Growth",
      "level": "head",
      "location": "美国 (Salt Lake City)",
      "region": [
        "us"
      ],
      "salary": "面议",
      "salaryNum": 200000,
      "requirements": "市场与增长总监；带团队；海外扩张；韩国最大交易所母公司 Dunamu。",
      "link": "https://www.dunamu.com/en",
      "contact": "Dunamu HR",
      "contactInfo": "jobs@dunamu.com",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "upbit-dunamu||director-of-marketing-and-growth",
      "keywords": [
        "营销/增长"
      ],
      "duties": [
        "团队管理",
        "增长营销"
      ]
    },
    {
      "company": "Upbit (Dunamu)",
      "func": "ga",
      "category": "exchange",
      "position": "Director of Strategic Planning",
      "level": "head",
      "location": "美国",
      "region": [
        "us"
      ],
      "salary": "面议",
      "salaryNum": 200000,
      "requirements": "战略规划总监；业务战略；合规与扩张。",
      "link": "https://www.dunamu.com/en",
      "contact": "Dunamu HR",
      "contactInfo": "jobs@dunamu.com",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "upbit-dunamu||director-of-strategic-planning",
      "keywords": [
        "合规"
      ],
      "duties": [
        "团队管理",
        "合规风控"
      ]
    },
    {
      "company": "Upbit (Dunamu)",
      "func": "eng",
      "category": "exchange",
      "position": "Backend Engineer (백오피스 플랫폼)",
      "level": "senior",
      "location": "首尔, 韩国",
      "region": [
        "asia"
      ],
      "salary": "约 ₩150M+ (Dunamu 公开均薪)",
      "salaryNum": 115000,
      "requirements": "后台平台后端开发；Java/Kotlin/JVM；高并发金融系统。",
      "link": "https://www.dunamu.com/en",
      "contact": "Dunamu HR",
      "contactInfo": "jobs@dunamu.com",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "upbit-dunamu||backend-engineer",
      "keywords": [],
      "duties": []
    },
    {
      "company": "Bithumb",
      "func": "eng",
      "category": "exchange",
      "position": "Backend Engineer",
      "level": "senior",
      "location": "首尔, 韩国",
      "region": [
        "asia"
      ],
      "salary": "面议",
      "salaryNum": 120000,
      "requirements": "交易所后端；高并发；韩国头部交易所。",
      "link": "https://cryptojobslist.com/companies/bithumb",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "bithumb||backend-engineer",
      "keywords": [],
      "duties": []
    },
    {
      "company": "BitMart",
      "func": "eng",
      "category": "exchange",
      "position": "Backend Engineer",
      "level": "senior",
      "location": "全球远程",
      "region": [
        "remote"
      ],
      "salary": "面议",
      "salaryNum": 140000,
      "requirements": "交易所后端开发；高并发；全球远程。",
      "link": "https://web3.career/web3-companies/bitmart",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "bitmart||backend-engineer",
      "keywords": [],
      "duties": []
    },
    {
      "company": "LBank",
      "func": "ops",
      "category": "exchange",
      "position": "DevOps / SRE Engineer",
      "level": "senior",
      "location": "全球远程",
      "region": [
        "remote"
      ],
      "salary": "面议",
      "salaryNum": 140000,
      "requirements": "交易系统运维；K8s；监控告警；全球远程。",
      "link": "https://web3.career/web3-companies/lbank",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "lbank||devops-sre-engineer",
      "keywords": [
        "Kubernetes"
      ],
      "duties": [
        "监控告警"
      ]
    },
    {
      "company": "XT.COM",
      "func": "eng",
      "category": "exchange",
      "position": "Backend Engineer",
      "level": "mid",
      "location": "全球远程",
      "region": [
        "remote"
      ],
      "salary": "面议",
      "salaryNum": 110000,
      "requirements": "交易所后端开发；微服务；全球远程。",
      "link": "https://web3.career/web3-companies/xt-com",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "xt-com||backend-engineer",
      "keywords": [],
      "duties": []
    },
    {
      "company": "MoonPay",
      "func": "eng",
      "category": "other",
      "position": "Blockchain Engineer",
      "level": "senior",
      "location": "全球远程",
      "region": [
        "remote"
      ],
      "salary": "面议",
      "salaryNum": 145000,
      "requirements": "DeFi/钱包/自托管产品经验；链上合约交互（MEV 感知/swap 路由）；链下服务对接链上合约；交易所/托管/钱包基础设施团队背景。",
      "link": "https://jobs.lever.co/moonpay/33021311-30a3-4296-be88-324d37751e1f",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "moonpay||blockchain-engineer",
      "keywords": [
        "Smart Contract",
        "DeFi",
        "MEV",
        "Wallet"
      ],
      "duties": [
        "协议/合约开发"
      ]
    },
    {
      "company": "Anchorage Digital",
      "func": "eng",
      "category": "other",
      "position": "Member of Technical Staff, Blockchain (Backend Engineer)",
      "level": "senior",
      "location": "远程（美国/葡萄牙/阿根廷/巴西）",
      "region": [
        "remote",
        "us",
        "eu"
      ],
      "salary": "面议",
      "salaryNum": 165000,
      "requirements": "Go；深研新加密资产协议白皮书并集成；分布式系统；质押/治理/vesting 等参与功能开发；跨链抽象层设计。",
      "link": "https://jobs.lever.co/anchorage/8db9058f-6302-4f48-a277-f0812a7cf028",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "anchorage-digital||member-of-technical-staff-blockchain-backend-engineer",
      "keywords": [
        "Go",
        "Staking"
      ],
      "duties": [
        "节点运维",
        "协议/合约开发",
        "多链/跨链"
      ]
    },
    {
      "company": "Zora",
      "func": "ops",
      "category": "other",
      "position": "Sr. Software Engineer, Infrastructure",
      "level": "senior",
      "location": "全球远程",
      "region": [
        "remote"
      ],
      "salary": "$170K–$200K",
      "salaryNum": 185000,
      "requirements": "5+年基础设施/平台工程；Go（优先）或 Python；Kubernetes；分布式存储（Ceph）；以太坊/EVM 链深度理解；可观测性工具。",
      "link": "https://web3.career/sr-software-engineer-infrastructure-zora/142721",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "zora||sr-software-engineer-infrastructure",
      "keywords": [
        "Go",
        "Python",
        "EVM",
        "Ethereum",
        "Kubernetes",
        "可观测性"
      ],
      "duties": []
    },
    {
      "company": "Binance",
      "func": "ops",
      "category": "exchange",
      "position": "Senior DevOps Engineer (Blockchain)",
      "level": "senior",
      "location": "全球远程（居家）",
      "region": [
        "remote",
        "asia"
      ],
      "salary": "面议",
      "salaryNum": 155000,
      "requirements": "3+年 DevOps/云工程；AWS(EC2/VPC/IAM)/Kubernetes(EKS)/CI-CD；Bash/Python/Go；区块链共识/Layer 2/智能合约理解；中英双语。",
      "link": "https://jobs.lever.co/binance/014f8ea5-bdba-491d-91bb-df4d6f1aad0a",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "binance||senior-devops-engineer-blockchain",
      "keywords": [
        "Go",
        "Python",
        "Smart Contract",
        "L2/Rollup",
        "Kubernetes",
        "AWS"
      ],
      "duties": [
        "协议/合约开发"
      ],
      "description": "Binance is a leading global blockchain ecosystem behind the world’s largest cryptocurrency exchange by trading volume and registered users. We are trusted by 300+ million people in 100+ countries for our industry-leading security, user fund transparency, trading engine speed, deep liquidity, and an unmatched portfolio of digital-asset products. Binance offerings range from trading and finance to education, research, payments, institutional services, Web3 features, and more. We leverage the power of digital assets and blockchain to build an inclusive financial ecosystem to advance the freedom of money and improve financial access for people around the world.\n\n\nAbout the Role\nWe are looking for a skilled and motivated DevOps Engineer with experience in deploying and managing blockchain infrastructure, as well as in-depth knowledge of AWS, Kubernetes (EKS), and CI/CD pipelines. The successful candidate will be instrumental in automating and maintaining our infrastructure to enable secure and scalable blockchain-based solutions.\n\nResponsibilities：\n• Deploy, configure, and manage blockchain networks (e.g., Bitcoin, Ethereum, Solana)\n\n• Design and implement cloud infrastructure on AWS in line with best practices.\n\n• Administer and scale Kubernetes clusters (EKS) for deploying blockchain nodes and related services.\n\n• Develop and maintain CI/CD pipelines using tools such as GitHub Actions, ArgoCD, and AWS CodeBuild.\n\n• Automate infrastructure provisioning and management using tools like Terraform and Helm.\n\nRequirements：\n• A minimum of 3 years’ experience in DevOps, Cloud Engineering, or a related field.\n\n• Solid hands-on experience with AWS services such as EC2, VPC, IAM, S3, and infrastructure-as-code tools like CloudFormation or Terraform.\n\n• Practical experience with Kubernetes, particularly with managed services such as EKS.\n\n• Proficiency in scripting languages such as Bash, Python, or Go.\n\n• Familiarity with monitoring and logging tools, along with system performance tuning.\n\n• Bilingual English/Mandarin is required to be able to coordinate with overseas partners and stakeholders.\n\nPreferred\n\n• Understanding of blockchain technologies, including consensus mechanisms, smart contracts, or Layer 2 scaling solutions.\n\n• Practical experience leveraging AI models and tools to address real-world workplace challenges, enhancing both efficiency and deployment quality.\n\n• Strong enthusiasm for discovering and integrating emerging technologies into daily workflows to foster innovation and drive continuous operational improvement.\n\nWhy Binance\n• Shape the future with the world’s leading blockchain ecosystem\n• Collaborate with world-class talent in a user-centric global organization with a flat structure\n• Tackle unique, fast-paced projects with autonomy in an innovative environment\n• Thrive in a results-driven workplace with opportunities for career growth and continuous learning\n• Competitive salary and company benefits\n• Work-from-home arrangement (the arrangement may vary depending on the work nature of the business team)\n\nBinance is committed to being an equal opportunity employer. We believe that having a diverse workforce is fundamental to our success.\nBy submitting a job application, you confirm that you have read and agree to our Candidate Privacy Notice."
    },
    {
      "company": "Linera",
      "func": "ops",
      "category": "chain",
      "position": "Web3 Infrastructure Engineer",
      "level": "senior",
      "location": "全球远程",
      "region": [
        "remote"
      ],
      "salary": "$157K–$175K",
      "salaryNum": 166000,
      "requirements": "5+年 DevOps/SRE/基础设施；AWS/GCP+Terraform；Docker/Kubernetes；Prometheus/Grafana/Loki；Rust 优先；保障 testnet 与 mainnet 可靠性。",
      "link": "https://jobs.ashbyhq.com/linera.io/e1af1e7c-4318-4823-9433-e3fdffa45322",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "linera||web3-infrastructure-engineer",
      "keywords": [
        "Rust",
        "Kubernetes",
        "Docker",
        "Terraform",
        "AWS",
        "GCP",
        "Prometheus",
        "Grafana"
      ],
      "duties": []
    },
    {
      "company": "Kraken",
      "func": "ops",
      "category": "exchange",
      "position": "SRE / DevOps Engineer",
      "level": "senior",
      "location": "全球远程",
      "region": [
        "remote"
      ],
      "salary": "面议",
      "salaryNum": 160000,
      "requirements": "大规模加密交易所可靠性工程；Kubernetes/CI-CD；SRE 实践与 on-call；链上基础设施自动化维护；多区域高可用架构。",
      "link": "https://jobs.ashbyhq.com/kraken.com/308e2a7c-197b-4ba0-a485-f7a6b00079d3",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "kraken||sre-devops-engineer",
      "keywords": [
        "Kubernetes",
        "On-call"
      ],
      "duties": [
        "架构设计",
        "故障/值班",
        "自动化",
        "协议/合约开发"
      ]
    },
    {
      "company": "0G Labs",
      "func": "product",
      "category": "chain",
      "position": "Senior Product Manager, Web3",
      "level": "senior",
      "location": "全球远程",
      "region": [
        "remote"
      ],
      "salary": "面议",
      "salaryNum": 160000,
      "requirements": "主导 0G AI 数据基础设施产品生态愿景与执行；核心 infra 产品路线图制定；跨团队协调交付；Web3 协议层产品经验。",
      "link": "https://jobs.ashbyhq.com/0g/09aca14b-e4b2-49b1-8dfc-25e2092430c4",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "0g-labs||senior-product-manager-web3",
      "keywords": [
        "AI"
      ],
      "duties": [
        "协议/合约开发",
        "产品规划"
      ]
    },
    {
      "company": "0x",
      "func": "data",
      "category": "defi",
      "position": "Data Scientist (GTM)",
      "level": "senior",
      "location": "全球远程（美国）",
      "region": [
        "remote",
        "us"
      ],
      "salary": "面议",
      "salaryNum": 165000,
      "requirements": "4–8+年数据分析；EVM 链上数据（Dune/Allium）；SQL；链上行为洞察转化为 GTM 决策；全球出差及每半年 offsite。",
      "link": "https://jobs.ashbyhq.com/0x/6dbca8eb-0553-411d-b903-dfa5f73dfcd3",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "0x||data-scientist-gtm",
      "keywords": [
        "EVM",
        "SQL"
      ],
      "duties": [
        "协议/合约开发",
        "数据分析"
      ]
    },
    {
      "company": "Sky Mavis",
      "func": "security",
      "category": "other",
      "position": "Web3 Security Engineer",
      "level": "senior",
      "location": "胡志明市 / 远程",
      "region": [
        "asia",
        "remote"
      ],
      "salary": "面议",
      "salaryNum": 130000,
      "requirements": "2+年安全工程+智能合约审计；Solidity；Ronin 区块链/钱包安全；威胁建模与链上监控方案；协助工程团队修复漏洞。",
      "link": "https://jobs.ashbyhq.com/skymavis/4b58a7cf-538a-44c7-908b-da8918348efb",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "sky-mavis||web3-security-engineer",
      "keywords": [
        "Solidity",
        "Smart Contract",
        "Wallet",
        "安全审计"
      ],
      "duties": [
        "监控告警",
        "协议/合约开发",
        "安全/审计",
        "数据分析"
      ],
      "description": "ABOUT SKY MAVIS\n\nSky Mavis is building the future of gaming. We’re the creators of Axie Infinity, the most successful Web3 game ever, and Ronin, a purpose-built blockchain that ranked as the 4th most-used chain in 2024, behind Ethereum, Bitcoin, and Solana.\n\nWe’ve processed over $4.3 billion in on-chain volume and are backed by more than $170 million from top-tier investors, including a16z, Accel, Libertus Capital, and Paradigm.\n\nOur team moves fast, builds with intention, and believes in a world where players truly own what they earn. If you’re excited by open economies, massive scale, and shaping new digital frontiers, join us.\n\n\nABOUT THE ROLE\n\nThe Security team drives Web2 and Web3 security for all of Sky Mavis games and digital assets, including the Ronin blockchain network, Ronin wallet, and more. With experience spanning many blockchain startups as well as recognized companies (Coinbase, Circle, JP Morgan Chase, Microsoft, Amazon, etc), the security team is building strong security policies and SDLC processes internally.\n\nThe Web3 Security Engineer is responsible for the security of smart contracts developed by the engineering team. This individual will be embedded with the engineering team to drive security best practices and ensure the bulletproof safety of smart contracts deployed. The security engineer will perform threat modeling, running scanning tools, audit the code base, work closely with engineering to resolve security vulnerabilities, and ensure the secure deployment of smart contracts.\n\nSky Mavis is fast adopting GenAI solutions to 100x our engineers. The security engineer will have the opportunity to learn and leverage AI to enhance and automate their workstream to improve our security best practices. This role is based in Ho Chi Minh City, Vietnam.\n\n\nWHAT YOU’LL DO\n\n - Security assessments: Perform internal and external assessments of products (games, wallet, etc) to ensure the highest level of security before launch, including conducting threat modeling, tabletop exercises, and code reviews. Put on your white hat and go hunt for security vulnerabilities.\n\n - Monitoring: Ensure smart contracts generate sufficient events to monitor. Leverage blockchain monitoring platform to continuously monitor smart contracts.\n\n - Incident response: Maintain and update a runbook of procedures for handling and escalating security incidents. Participate in the incident response process to address and resolve smart contract incidents.\n\n - Evaluate new technology: Identify and evaluate new security technologies/tooling to adopt internally to continuously improve Sky Mavis’ security best practices.\n\n - Drive impact: Identify security gaps and drive positive change to improve Sky Mavis’ security posture.\n\n - Cross-functional collaboration: Collaborate with the engineering team to identify security gaps in smart contract architecture. Works well with others and is highly responsive.\n\n\nWHAT WE LOOK FOR\n\n - Education: Bachelor or master degree in computer science or related field.\n\n - Experience: 2+ years in software engineering. Audited smart contracts.\n\n - Programming Languages: Strong knowledge of Solidity.\n\n - Skills/Knowledge: Hands-on expertise with blockchain and smart contract security. Able to audit Solidity code. Familiarity with blockchain monitoring solutions.\n\n - Attitude: Bias for action, driven to learn, top talent.\n\n - Strong communicator and active listener: Clear communication (English) and capable of building trust across diverse teams.\n\n - Problem-Solving: Strong analytical and problem-solving skills to identify and resolve security issues.\n\n - Bonus: Gamer, active crypto user, does hackathons on weekends.\n\nNice to Have:\n\n - Python scripting.\n\n - Experience using LLMs."
    },
    {
      "company": "Wormhole Foundation",
      "func": "growth",
      "category": "infra",
      "position": "Head of Marketing",
      "level": "head",
      "location": "全球远程（美洲/欧洲）",
      "region": [
        "remote",
        "us",
        "eu"
      ],
      "salary": "面议",
      "salaryNum": 185000,
      "requirements": "Web3+传统双栈营销战略；跨链生态品牌建设与增长执行；营销团队建设与管理；数据驱动度量与机构/零售受众兼顾。",
      "link": "https://job-boards.greenhouse.io/wormholefoundation/jobs/4859304008",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "wormhole-foundation||head-of-marketing",
      "keywords": [
        "营销/增长"
      ],
      "duties": [
        "团队管理",
        "多链/跨链",
        "增长营销",
        "客户/机构对接"
      ]
    },
    {
      "company": "Nethermind",
      "func": "bd",
      "category": "other",
      "position": "Business Development Associate (Web3 Security)",
      "level": "mid",
      "location": "伦敦",
      "region": [
        "eu"
      ],
      "salary": "面议",
      "salaryNum": 115000,
      "requirements": "Web3 安全审计/形式化验证服务 BD；客户拓展、关系管理与合同谈判；Web3 网络资源；安全服务销售经验优先。",
      "link": "https://boards.eu.greenhouse.io/nethermind/jobs/4225896101",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "nethermind||business-development-associate-web3-security",
      "keywords": [
        "安全审计",
        "形式化验证"
      ],
      "duties": [
        "安全/审计",
        "商务拓展",
        "客户/机构对接"
      ]
    },
    {
      "company": "Kraken",
      "func": "design",
      "category": "exchange",
      "position": "Senior Product Designer, Onboarding",
      "level": "senior",
      "location": "全球远程",
      "region": [
        "remote"
      ],
      "salary": "$81K–$116K",
      "salaryNum": 98000,
      "requirements": "端到端用户引导流程设计；数据驱动 A/B 测试与 UX 迭代；人本设计方法论；跨职能协作；Crypto/交易所产品背景优先。",
      "link": "https://web3.career/senior-product-designer-kraken/48616",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "kraken||senior-product-designer-onboarding",
      "keywords": [],
      "duties": [
        "设计/品牌"
      ]
    },
    {
      "company": "Anchorage Digital",
      "func": "ga",
      "category": "other",
      "position": "Member of Compliance, FCC Program (AML/BSA Analytics)",
      "level": "mid",
      "location": "全球远程（美国/葡萄牙/新加坡）",
      "region": [
        "remote",
        "us",
        "sg",
        "eu"
      ],
      "salary": "面议",
      "salaryNum": 130000,
      "requirements": "3+年 AML/OFAC 合规数据分析；数字资产 BSA/AML 监管框架与红旗识别；SQL/Excel；CAMS 认证加分；联邦持牌加密银行合规项目。",
      "link": "https://himalayas.app/companies/anchorage-digital/jobs/member-of-compliance-fcc-program",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "anchorage-digital||member-of-compliance-fcc-program-aml-bsa-analytics",
      "keywords": [
        "SQL",
        "AML/KYC",
        "合规"
      ],
      "duties": [
        "合规风控",
        "数据分析"
      ]
    },
    {
      "company": "Chainlink Labs",
      "func": "eng",
      "category": "infra",
      "position": "Senior Smart Contract Engineer, Solidity (CCIP)",
      "level": "senior",
      "location": "全球远程",
      "region": [
        "remote"
      ],
      "salary": "面议",
      "salaryNum": 175000,
      "requirements": "5+年 Solidity/EVM 主网生产经验；驱动 CCIP 跨链合约端到端交付；安全设计与多链部署。",
      "link": "https://jobs.ashbyhq.com/chainlink-labs/842e9d47-982c-4dfb-8461-1080759c82d9",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "chainlink-labs||senior-smart-contract-engineer-solidity-ccip",
      "keywords": [
        "Solidity",
        "Smart Contract",
        "EVM"
      ],
      "duties": [
        "部署发布",
        "协议/合约开发",
        "多链/跨链",
        "安全/审计"
      ]
    },
    {
      "company": "CoW DAO",
      "func": "eng",
      "category": "defi",
      "position": "Web3 Backend Engineer (Rust)",
      "level": "senior",
      "location": "全球远程（欧洲优先）",
      "region": [
        "remote",
        "eu"
      ],
      "salary": "$84K–$124K",
      "salaryNum": 104000,
      "requirements": "1+年 Rust 生产经验；与 Solidity 合约交互；DeFi/以太坊；高并发链下订单流处理。",
      "link": "https://jobs.ashbyhq.com/cow-dao/92622acb-7be1-4017-9f64-b20bf8a25c7f",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "cow-dao||web3-backend-engineer-rust",
      "keywords": [
        "Solidity",
        "Rust",
        "Smart Contract",
        "DeFi",
        "Ethereum"
      ],
      "duties": [
        "协议/合约开发"
      ]
    },
    {
      "company": "Monad Foundation",
      "func": "eng",
      "category": "chain",
      "position": "Senior Software Engineer, Full Stack (Web3)",
      "level": "senior",
      "location": "全球远程",
      "region": [
        "remote"
      ],
      "salary": "面议",
      "salaryNum": 180000,
      "requirements": "4+年全栈（React/Next.js/TypeScript）；wallet connectors/ethers.js；构建链上 DApp 与区块链 SDK。",
      "link": "https://jobs.ashbyhq.com/monad.foundation/2242c712-d2cf-4fe5-8cc4-eae0ce2bc4f5",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "monad-foundation||senior-software-engineer-full-stack-web3",
      "keywords": [
        "TypeScript",
        "React",
        "Wallet"
      ],
      "duties": [
        "协议/合约开发"
      ]
    },
    {
      "company": "pod network",
      "func": "eng",
      "category": "infra",
      "position": "Smart Contract Engineer (EVM / Low-Level Execution)",
      "level": "senior",
      "location": "全球远程",
      "region": [
        "remote"
      ],
      "salary": "面议",
      "salaryNum": 160000,
      "requirements": "深入理解 EVM 内部机制与字节码；Solidity 合约架构；低级 EVM 执行层研究与优化。",
      "link": "https://jobs.ashbyhq.com/pod-network/64ec90ae-a0d3-4175-b29d-27fc35eef85b",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "pod-network||smart-contract-engineer-evm-low-level-execution",
      "keywords": [
        "Solidity",
        "Smart Contract",
        "EVM"
      ],
      "duties": [
        "架构设计",
        "性能/容量",
        "协议/合约开发"
      ],
      "description": "ABOUT THE ROLE\n\nWe’re looking for a Solidity engineer who can design and implement smart contracts at the core of our system. You will:\n\n - Own the development of smart contracts for pod’s core protocol (staking, slashing, committee rotation, etc) and applications built on top.\n\n - Work closely with scientists and protocol engineers to design efficient and secure protocols.\n\n - Participate in security reviews, simulations, and adversarial thinking exercises.\n\n - Write thorough tests and documentation.\n\n\nQUALIFICATIONS\n\nMust-haves:\n\n - 2+ years of experience with Solidity and Ethereum smart contract development.\n\n - Deep understanding of EVM, gas model, state management, EIPs, and tooling (Foundry, Hardhat, etc.).\n\n - Experience deploying and maintaining production-grade contracts.\n\n - Familiarity with DeFi protocols, MEV-aware design, and on-chain incentives.\n\n - Good understanding of smart contract security and common pitfalls.\n\nNice-to-haves:\n\n - Background in distributed systems, auctions, or mechanism design.\n\n - Prior work on high-performance protocols or real-time systems.\n\n - Experience writing Rust and familiarity with Reth.\n\n\nWHAT WE OFFER\n\n - Competitive salary.\n\n - High-impact role in an ambitious, fast-moving startup.\n\n - Travel opportunities and thought leadership visibility in the crypto community.\n\n\nABOUT US\n\nWe are an ambitious, early-stage Web3 startup building a revolutionary new layer-1 protocol designed to bring Web2-like experience to Web3 systems. Our team is creating a chainless, blockless, leaderless protocol that challenges the conventional notion of consensus. Read more about pod network here https://pod.network/.\n\nWe’re backed by a16z crypto, 1kx, and BBF—and we’re looking for exceptional engineers to help us shape the future of decentralized systems."
    },
    {
      "company": "Trust Wallet",
      "func": "eng",
      "category": "defi",
      "position": "Senior Backend Engineer (Web3)",
      "level": "senior",
      "location": "全球远程",
      "region": [
        "remote"
      ],
      "salary": "$90K–$100K",
      "salaryNum": 95000,
      "requirements": "Go 微服务；多链链上数据解析（EVM/Solana 等）；AWS/K8s；分布式系统与分布式账本集成。",
      "link": "https://jobs.ashbyhq.com/trust-wallet/ec71403d-e365-48b4-833a-63d1852ec58d",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "trust-wallet||senior-backend-engineer-web3",
      "keywords": [
        "Go",
        "EVM",
        "Solana",
        "Kubernetes",
        "AWS"
      ],
      "duties": [
        "协议/合约开发",
        "多链/跨链"
      ]
    },
    {
      "company": "Crypto.com",
      "func": "product",
      "category": "exchange",
      "position": "Senior Product Manager, API",
      "level": "senior",
      "location": "全球远程",
      "region": [
        "remote",
        "asia"
      ],
      "salary": "面议",
      "salaryNum": 150000,
      "requirements": "API 产品策略设计；5+年 PM 经验；加密交易所生态系统；与工程/BD/合规跨职能协作。",
      "link": "https://jobs.lever.co/crypto/5bb16711-a863-4ded-9e89-20a0be9eae1e",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "crypto-com||senior-product-manager-api",
      "keywords": [
        "合规"
      ],
      "duties": [
        "合规风控",
        "产品规划",
        "商务拓展"
      ]
    },
    {
      "company": "OKX",
      "func": "product",
      "category": "exchange",
      "position": "Senior Product Manager, Web3 Risk Controls",
      "level": "senior",
      "location": "香港 / 新加坡",
      "region": [
        "hk",
        "sg",
        "asia"
      ],
      "salary": "$87K–$115K",
      "salaryNum": 101000,
      "requirements": "Web3 风控产品规划；DEX/DeFi 风险框架设计；3-5年产品经验；区块链合规与安全产品方向。",
      "link": "https://job-boards.greenhouse.io/okx/jobs/6989066003",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "okx||senior-product-manager-web3-risk-controls",
      "keywords": [
        "DeFi",
        "合规"
      ],
      "duties": [
        "安全/审计",
        "合规风控",
        "产品规划"
      ]
    },
    {
      "company": "Trust Wallet",
      "func": "design",
      "category": "defi",
      "position": "Senior Product Designer (Trading)",
      "level": "senior",
      "location": "全球远程",
      "region": [
        "remote"
      ],
      "salary": "面议",
      "salaryNum": 130000,
      "requirements": "非托管钱包交易核心产品 UX；端到端设计交付；Web3 DApp 复杂交互与用户旅程设计。",
      "link": "https://jobs.ashbyhq.com/trust-wallet/7a286b2a-940a-441b-a02b-9b2790dcf561",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "trust-wallet||senior-product-designer-trading",
      "keywords": [
        "Wallet"
      ],
      "duties": [
        "设计/品牌"
      ]
    },
    {
      "company": "Crypto.com",
      "func": "design",
      "category": "exchange",
      "position": "Senior Product Designer, Web",
      "level": "senior",
      "location": "全球远程",
      "region": [
        "remote",
        "asia"
      ],
      "salary": "面议",
      "salaryNum": 140000,
      "requirements": "Web 端加密交易平台 UX/UI 设计；5+年产品设计；Web3 金融产品用户体验设计与规范制定。",
      "link": "https://jobs.lever.co/crypto/3f9af9c2-045f-4243-be19-459f63b3eb68",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "crypto-com||senior-product-designer-web",
      "keywords": [],
      "duties": [
        "设计/品牌"
      ]
    },
    {
      "company": "Binance",
      "func": "data",
      "category": "exchange",
      "position": "Senior LLM Algorithm Engineer",
      "level": "senior",
      "location": "全球远程",
      "region": [
        "remote",
        "asia"
      ],
      "salary": "面议",
      "salaryNum": 165000,
      "requirements": "定制基础大语言模型研发；Web3 数据湖 ETL 管道设计；LLM 预训练/微调；Crypto 场景 AI 落地。",
      "link": "https://jobs.lever.co/binance/c0980db4-ea30-4f3a-be47-a17fe8424ceb",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "binance||senior-llm-algorithm-engineer",
      "keywords": [
        "AI"
      ],
      "duties": [],
      "description": "Calling top-tier AI and Web3 innovators from around the globe!  Binance is building the world’s foremost crypto and Web3 platform—and we’re just getting started. We’re assembling a lean, elite LLM Algorithm & Data Science Team (3–5 members) to pioneer next-generation AI solutions in finance, blockchain, and beyond. If you’re young, passionate, and driven by cutting-edge research, this is your moment to make history. \n\nWhat You’ll Build: \n\nWe’re not here to retrofit yesterday’s models—we’re here to invent tomorrow’s:\n\n-Web3 Data Lake LLM\nIngest and reason over massive on-chain and off-chain datasets to power real-time insights.\n\n-Trading System LLM\nDesign intelligent trading agents, signal generators, and strategy-optimization engines.\n\n-Compliance and Regulatory LLM \nAutomate compliance, travel-rule enforcement, and on-chain forensics at scale.\n\n.…and beyond\nFrom customer-service agents and personalized navigation experiences to completely new AI-powered Web3 applications.\n\nYour creations will underpin multiple internal products—customer support bots, trading-signal dashboards, compliance workflows, user-experience agents—while also bootstrapping entirely new AI-Web3 innovations.\n\nResponsibilities: ：\n• Model R&D: Architect and train custom foundation LLMs optimized for trading, compliance, and Web3 data.\n• Agent Development: Build next-gen multi-agent systems that blend search, RL, and LLM reasoning for real-world tasks.\n• Data Engineering: Collaborate on Web3 data-lake design—ETL pipelines, vector stores, real-time feeds.\n• Cross-Functional Impact: Partner with product, compliance, and customer-support teams to deploy models in production.\n• Innovation Pipeline: Surface new AI-Web3 use cases, prototype MVPs, and shepherd them toward scale.\n\nRequirement:：\n• Academic Excellence: Master’s or PhD in ML, AI, Computer Science, Mathematics, or related field.\n• Research Prodigy: Published in top conferences/journals (ICLR, NeurIPS, ACL, etc.) on foundational LLMs, agent frameworks, or reasoning architectures.\n• Reinforcement & Reasoning: Deep expertise in reinforcement learning, reasoning algorithms, or related paradigms—bonus if you’ve built or extended agentic frameworks.\n• Polyglot Coder: Fluent in Python; experience with PyTorch, TensorFlow, JAX, or similar. You can prototype new model architectures end-to-end.\n• Crypto & Web3 Curious: Enthusiasm for finance engineering, blockchain protocols, on-chain data, DeFi mechanics, or regulatory landscapes."
    },
    {
      "company": "Saga",
      "func": "data",
      "category": "chain",
      "position": "Senior AI Agent Engineer",
      "level": "senior",
      "location": "全球远程",
      "region": [
        "remote",
        "us"
      ],
      "salary": "面议",
      "salaryNum": 160000,
      "requirements": "AI Agent 构建、训练与部署；Python/Go；LLM/SLM 推理管道；MCP/A2A 协议；链上支付集成。",
      "link": "https://jobs.lever.co/saga-xyz/6f4e2b80-c18f-4f62-b61b-da67d257b828",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "saga||senior-ai-agent-engineer",
      "keywords": [
        "Go",
        "Python",
        "AI"
      ],
      "duties": [
        "部署发布",
        "协议/合约开发"
      ],
      "description": "Saga is building the infrastructure and products for the next generation of AI agents. Our AI Character Agent Network allows studios, creators, and publishers to turn their most iconic IP into living, breathing digital companions that engage fans across social media, drive organic user acquisition, and power a new kind of agentic commerce.\nOur agents run on a proprietary training architecture that combines LLMs and SLMs to produce fine-tuned character AI agents — autonomous enough to develop their own intelligence and personality, while guided by the creative vision of the original studios and creators. We've processed over 23 million transactions worth more than $2 billion since our early 2024 launch, and we're just getting started.\nOur team is world-class — veteran web3 entrepreneurs and builders from  Apple, X (formerly Twitter), Robinhood, Samsung, NVIDIA, Tendermint and Skuchain — and we're looking to grow as we scale our agent platform to more studios, more platforms, and more users.\nWe offer a flexible, remote working environment. You can expect a warm welcome from a friendly and international team that will support you in your personal and professional growth.\nThe Role\nAs a Senior AI Agent Engineer, you'll be at the center of how we build, train, deploy, and operate character AI agents at scale. You'll work across the full lifecycle — from fine-tuning models and orchestrating SLM swarms to deploying agents across social platforms and building the infrastructure that keeps them running reliably. This role blends ML engineering, backend development, and systems thinking.\nThe Work\nBuild and maintain the training and inference pipelines for character AI agents, including LLM/SLM orchestration and swarm-based architectures\nDeploy and operate AI agents across social media platforms (Instagram, X, WhatsApp, TikTok) with consistent character behavior and personality coherence\nDevelop tooling for studios and creators to customize agent personality, lore, brand guidelines, and behavioral guardrails\nBuild and improve the feedback loops — fine-tuning, reward models, RLHF, and RLAIF — that keep agents improving over time\nArchitect and scale the infrastructure supporting agent deployments, including multi-modal capabilities (text, voice, video, livestreaming)\nContribute to the agentic commerce platform — enabling agents to drive transactions, recommend products, and interact with payment systems\nImplement safety and content moderation systems to ensure agents behave appropriately across diverse user interactions\nCollaborate with studio partners to translate creative direction into agent training parameters and behavioral specifications\nMonitor agent performance, engagement metrics, and behavioral drift in production\nMust Have\n5+ years of backend or ML engineering experience, with hands-on work deploying AI/ML models to production\nExperience with LLM fine-tuning, prompt engineering, and inference optimization\nStrong proficiency in Python; experience with Golang is a plus\nExperience building and operating API services and data pipelines at scale\nFamiliarity with reinforcement learning techniques (RLHF, reward modeling) or agent framework development\nUnderstanding of multi-model architectures — orchestrating multiple models or agents to collaborate on tasks\nExperience deploying applications that integrate with third-party platforms and APIs (social media, messaging, commerce)\nStrong systems thinking — comfortable reasoning about distributed systems, scaling, and reliability\nExceptional problem-solving and communication skills\nNice to Have\nExperience with character AI, conversational AI, or NPC behavior systems\nBackground in gaming, entertainment, or media technology\nExperience with multi-modal AI (voice, image, video generation or processing)\nFamiliarity with blockchain infrastructure, on-chain payments, or crypto-native commerce\nExperience with MCP (Model Context Protocol) or agent-to-agent communication protocols\nUnderstanding of con"
    },
    {
      "company": "Token Metrics",
      "func": "data",
      "category": "other",
      "position": "Senior Crypto Data Engineer",
      "level": "senior",
      "location": "全球远程（非美国）",
      "region": [
        "remote"
      ],
      "salary": "面议",
      "salaryNum": 120000,
      "requirements": "大数据工程（ETL/实时流处理）；链上/链下 Crypto 数据整合；Spark/Kafka；AI 投研平台支撑。",
      "link": "https://jobs.lever.co/tokenmetrics/5c80bc13-c7dc-4aa5-97f2-1314b30a2686",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "token-metrics||senior-crypto-data-engineer",
      "keywords": [
        "Kafka",
        "Spark",
        "AI"
      ],
      "duties": [
        "协议/合约开发"
      ]
    },
    {
      "company": "Paxos",
      "func": "security",
      "category": "other",
      "position": "Lead Security Engineer",
      "level": "head",
      "location": "纽约 / 远程",
      "region": [
        "us",
        "remote"
      ],
      "salary": "$130K–$180K",
      "salaryNum": 155000,
      "requirements": "Web2+Web3 全栈安全架构；AWS/Azure 云安全与密钥管理；DeFi 集成漏洞研究；NYDFS 持牌机构。",
      "link": "https://jobs.ashbyhq.com/PaxosLabs/ad5179f9-c859-43bb-a7d3-2ab8ef8c9884",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "paxos||lead-security-engineer",
      "keywords": [
        "DeFi",
        "AWS"
      ],
      "duties": [
        "架构设计",
        "安全/审计",
        "客户/机构对接"
      ],
      "description": "WHO WE ARE\n\nPaxos Labs builds enterprise infrastructure that powers the next generation of trusted onchain financial products. We work with the largest financial enterprises in the world to build transparent and verifiable onchain infrastructure that works for end users and everyday financial use cases. If you believe in bringing DeFi and digital assets to the mainstream, consider building your career at Paxos Labs.\n\nWe believe security is critical to our culture and long term success. We are hiring a Lead Security Engineer to help take Paxos Labs's security capabilities to the next level.\n\n\nWHO WE'RE LOOKING FOR\n\nThe engineering team at Paxos Labs deploys production software across the web2 and web3 stack, from smart contract protocols, DeFi integrations, and cloud infrastructure to public API/SDKs that requires a comprehensive security posture. We are looking for a motivated developer that can not only develop, but aptly research and deploy extensive knowledge across TradFi and DeFi to secure mission critical software.\n\nMost importantly, we are looking for developers with interest in the following overlap:\n\n 1. Smart Contract Security\n\n 2. Cloud Security\n\n 3. Operational Security\n\n\nRESPONSIBILITIES\n\n\nCLOUD SECURITY\n\n - Conduct internal audits of Cloud (Azure, AWS) platform security and implement best practices around key management, network security, monitoring, etc.\n\n - Create threat models for first party and third party software, research possible vulnerabilities and patch them.\n\n - Collaborate closely with infrastructure engineers to detect, fix, and prevent future exploits by creating resuable tools and processes.\n\n\nOPERATIONAL SECURITY\n\n - Develop tooling and SOPs such as incident response manuals.\n\n - Conduct periodic incident response training for team members. Simulating hacks, alerts, and social engineering vectors.\n\n - Collaborate closely with both the technical and the non-technical staff to secure non-code related attack vectors and protect the weakest link i.e. the humans involved.\n\n\nSMART CONTRACT / DEFI SECURITY\n\n - Collaborate closely with the Smart Contract team to conduct internal audits and to set up secure operational practices for the development and maintenance of smart contract protocols..\n\n - Build and deploy full stack tools for mitigating exploits and financial risks such as\n   \n   - Detecting malicious transactions in the mempool and automating pauses across the smart contracts deployed on multiple chains.\n   \n   - Defining invariants and detecting violations in realtime.\n   \n   - Integrating third party security software where necessary.\n\n\nQUALIFICATIONS\n\n - Deep knowledge of cloud infrastructure and web2 security practices.\n\n - Deep knowledge of cybersecurity standards and social engineering defenses.\n\n - Experience building full stack applications.\n\n - Deep Knowledge of the EVM security tooling, testing, and best practices\n\n - Deep knowledge of common hacks and exploits in DeFi protocols.\n\n - Deep knowledge of financial attack vectors in DeFi protocols.\n\n - Experience with CTFs, bugbounties, whitehat activities.\n\n\nWHY JOIN US?\n\nJoining Paxos Labs means becoming part of a pioneering team at the forefront of financial innovation for the mass market. You will have the opportunity to:\n\n - Build the Future: Play a critical role in transforming traditional enterprises with innovative crypto solutions.\n\n - Do Impactful Work: Contribute to projects that have a tangible impact on the global financial landscape.\n\n - Enable Personal Growth: Benefit from continuous learning and professional development in a rapidly evolving industry with an emphasis on personal career advancement.\n\n - Receive Competitive Compensation: Receive a competitive salary and participate in directly in ownership structures that provide top-of-the-line benefits.\n\n - Join A Dynamic Team: Thrive in a fast-paced, agile setting where your ideas are valued and your contributions are recognized.\n\n\nLOCATION\n\nWe are a heavily in-person team working in New York City. We prize effective in-person collaboration.\n\nOnce we receive your application, we'll be in touch if we are interested."
    },
    {
      "company": "Vac (Status / Logos)",
      "func": "security",
      "category": "other",
      "position": "Application Security Engineer (Web3)",
      "level": "senior",
      "location": "全球远程",
      "region": [
        "remote"
      ],
      "salary": "面议",
      "salaryNum": 130000,
      "requirements": "5+年 Web3 安全工程；区块链协议/密码学系统漏洞研究；智能合约安全；P2P 隐私通信安全。",
      "link": "https://job-boards.greenhouse.io/vac/jobs/6986179",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "vac-status-logos||application-security-engineer-web3",
      "keywords": [
        "Smart Contract"
      ],
      "duties": [
        "协议/合约开发",
        "安全/审计"
      ]
    },
    {
      "company": "OKX",
      "func": "growth",
      "category": "exchange",
      "position": "Senior Product Marketing Manager, Web3",
      "level": "senior",
      "location": "香港 / 新加坡 / 加州",
      "region": [
        "hk",
        "sg",
        "us",
        "asia"
      ],
      "salary": "$180K–$264K",
      "salaryNum": 222000,
      "requirements": "8+年 Crypto 原生社区建设与 KOL 网络；Web3 产品营销 GTM；分析驱动增长策略。",
      "link": "https://job-boards.greenhouse.io/okx/jobs/6573704003",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "okx||senior-product-marketing-manager-web3",
      "keywords": [
        "社区",
        "营销/增长"
      ],
      "duties": [
        "增长营销",
        "社区运营"
      ]
    },
    {
      "company": "Animoca Brands",
      "func": "growth",
      "category": "other",
      "position": "Marketing Manager",
      "level": "mid",
      "location": "香港 / 亚洲",
      "region": [
        "hk",
        "asia"
      ],
      "salary": "面议",
      "salaryNum": 100000,
      "requirements": "Web3/NFT/游戏生态品牌营销；跨渠道内容与活动策划执行；合作伙伴 co-marketing。",
      "link": "https://jobs.lever.co/animocabrands/b912661b-cb7e-431f-8084-645978716c32",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "animoca-brands||marketing-manager",
      "keywords": [
        "营销/增长"
      ],
      "duties": [
        "增长营销"
      ]
    },
    {
      "company": "Risk Labs (UMA / Across)",
      "func": "bd",
      "category": "defi",
      "position": "BD Manager",
      "level": "mid",
      "location": "全球远程",
      "region": [
        "remote"
      ],
      "salary": "面议",
      "salaryNum": 120000,
      "requirements": "3+年 BD/销售/解决方案工程（软件或协议领域）；DeFi 生态合作开发；推动 Across 跨链桥集成与增长。",
      "link": "https://jobs.lever.co/risklabs/eb7a1ecd-f42d-4c59-8963-f87ef3417330",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "risk-labs-uma-across||bd-manager",
      "keywords": [
        "DeFi",
        "营销/增长"
      ],
      "duties": [
        "协议/合约开发",
        "多链/跨链",
        "增长营销",
        "商务拓展"
      ]
    },
    {
      "company": "CoinMarketCap",
      "func": "bd",
      "category": "other",
      "position": "Business Development Manager (API)",
      "level": "mid",
      "location": "全球远程",
      "region": [
        "remote",
        "asia"
      ],
      "salary": "面议",
      "salaryNum": 120000,
      "requirements": "CMC 数据 API 端到端销售；交易所/DeFi 协议/机构客户拓展；加密数据产品商业化。",
      "link": "https://jobs.lever.co/coinmarketcap/43e9d6cf-31fe-4434-a2c4-850cefa4683c",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "coinmarketcap||business-development-manager-api",
      "keywords": [
        "DeFi"
      ],
      "duties": [
        "协议/合约开发",
        "商务拓展",
        "客户/机构对接"
      ],
      "description": "About CoinMarketCap\nCoinMarketCap is the world’s most trusted and accurate source of cryptocurrency data. Used by millions of individuals, organizations, and exchanges globally, we bring the most up-to-date market capitalizations, pricing, and crypto information to our users.\nOur mission is to be the world’s authority on cryptocurrency data. We believe in an open and decentralized world, where we play a pivotal role in powering decisions and insights to drive greater understanding and adoption of cryptocurrencies.\nThe Role\nAs BD Manager for our API product line, you’ll own the end-to-end sales cycle for CoinMarketCap’s data API offerings. You’ll work with exchanges, DeFi protocols, fintech apps, data aggregators, and institutional clients to help them leverage CMC’s market-leading crypto data through our API solutions.\nWhat You’ll Do\n•    Own the full sales cycle for CMC’s API products — from prospecting and demo to close and expansion\n•    Identify and engage new API customers across exchanges, DeFi protocols, fintech platforms, data aggregators, and institutional/TradFi firms\n•    Build and maintain a healthy pipeline of qualified API opportunities, tracking progress and forecasting revenue\n•    Understand client data needs and propose the right API tier, endpoints, and integration approach\n•    Serve as the primary point of contact between API clients and internal teams (product, engineering, support) for onboarding and issue resolution\n•    Expand revenue from existing API clients by identifying upsell and cross-sell opportunities\n•    Stay current on competitor API offerings, pricing, and market trends to sharpen CMC’s positioning\n•    Collaborate with Product to relay client feedback and influence the API roadmap\nWhat You Bring\n•    3+ years of B2B sales or business development experience, ideally selling API/data/SaaS products\n•    Strong network within the crypto industry — exchanges, DeFi, fintech, or institutional crypto\n•    Solid understanding of APIs, data products, and how technical buyers evaluate them\n•    Proven track record of meeting or exceeding revenue targets\n•    Fluency in English (native level); additional languages are a bonus\n•    Excellent communication and relationship-building skills across all organizational levels\n•    Strong organizational skills and comfort working in a fast-paced, remote-first environment\n•    BS/BA in business, marketing, computer science, or a related field\nNice to Have\n•    Experience selling crypto market data or financial data APIs specifically\n•    Familiarity with REST/WebSocket APIs and developer documentation\n•    Existing relationships with exchanges, trading desks, or institutional crypto firms\n•    Experience with CRM tools (HubSpot, Salesforce, etc.)"
    },
    {
      "company": "Binance",
      "func": "ga",
      "category": "exchange",
      "position": "Senior Corporate Legal Counsel",
      "level": "senior",
      "location": "全球远程",
      "region": [
        "remote",
        "asia"
      ],
      "salary": "面议",
      "salaryNum": 180000,
      "requirements": "8+年公司法务（顶级律所/上市公司）；跨境公司治理/重组/内部交易；多辖区并行项目管理。",
      "link": "https://jobs.lever.co/binance/257a6829-fa82-46fa-a09b-f3026ed7d2b2",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "binance||senior-corporate-legal-counsel",
      "keywords": [],
      "duties": [],
      "description": "Binance is a leading global blockchain ecosystem behind the world’s largest cryptocurrency exchange by trading volume and registered users. We are trusted by 300+ million people in 100+ countries for our industry-leading security, user fund transparency, trading engine speed, deep liquidity, and an unmatched portfolio of digital-asset products. Binance offerings range from trading and finance to education, research, payments, institutional services, Web3 features, and more. We leverage the power of digital assets and blockchain to build an inclusive financial ecosystem to advance the freedom of money and improve financial access for people around the world.\n\n\nServe as a senior legal counsel for Binance’s global Corporate Legal Affairs team, delivering complex strategic projects together with corporate transactions, governance, reorganisations, intra-group arrangements, board secretarial and entity management.\n\nResponsibilities:：\n• Drive the development and implementation of group legal strategy and contribute to the delivery of the organization’s general business strategy.\n\n• Provide proactive, in-depth, business focused advice and execution.\n\n• Manage and assist with legal response to corporate and wider matters encountered by the company and internal stakeholders and provide sound and robust legal advice and support; and leading external communication on legal matters including negotiation with external parties.\n\n• Lead, advise and support a wide variety of transactional, reorganisation and corporate governance initiatives.\n\n• Assist in transactional activities including M&A, majority and minority investments and joint ventures as well as restructurings globally.\n\n• Be responsible for drafting and reviewing legal documents and providing holistic risk assessment and suggestions to enhance business value while mitigating downside risk across multiple areas of the company.\n\n• Partner with cross-functional and regional teams and provide support on legal matters of varying complexity, sensitivity, and tangibility.\n\n• Provide training and counsel non-legal colleagues to promote greater awareness and risk management across the company.\n\n• Anticipate and maintain up-to-date knowledge of current laws.\n\n• Identify legal framework developments, align and promote consistency of approach in legal matters between the internal stakeholders.\n\n• Take prudent risks within the context of the overall business, and advise and implement solutions to address issues identified.\n\nRequirements:：\n• Qualified to practice law in a leading jurisdiction with significant corporate legal experience.\n\n• Typically 8+ years of post qualification experience (as a guide) working at a top law firm and/or in-house at a well-established corporate or high-growth company.\n\n• Ideally trained in a reputable law firm within the corporate practice with a focus on corporate transactional work and general corporate governance.\n\n• Proven expertise in managing complex projects across multiple jurisdictions globally.\n\n• Possesses strong legal technical expertise as well as exceptional business acumen and people skills.\n\n• Comfortable working in a fast-paced in-house environment is essential.\n\n• Strong team player and good business sense.\n\n• Hands on at work and can be independent in managing complex projects whilst still working as part of a team.\n\n• Ability to come up with and execute creative solutions to meet current and evolving business needs.\n\n• Excellent legal drafting and interpretation skills.\n\n• Excellent problem solving, analytical and organisational skills.\n\nWhy Binance\n• Shape the future with the world’s leading blockchain ecosystem\n• Collaborate with world-class talent in a user-centric global organization with a flat structure\n• Tackle unique, fast-paced projects with autonomy in an innovative environment\n• Thrive in a results-driven workplace with opportunities for career growth and continuous learning\n• Competitive salary and company benefits\n• Work-from-home"
    },
    {
      "company": "Immutable",
      "func": "eng",
      "category": "chain",
      "position": "Protocol Blockchain Engineer",
      "level": "senior",
      "location": "全球远程",
      "region": [
        "remote",
        "asia"
      ],
      "salary": "面议",
      "salaryNum": 180000,
      "requirements": "使用 Go/Rust 构建 Immutable zkEVM L2 协议核心；强类型高性能语言；分布式系统设计。",
      "link": "https://jobs.lever.co/immutable/03e6848f-6cc7-4295-a162-7910b0368c4d",
      "firstSeen": "2026-05-26",
      "lastSeen": "2026-05-26",
      "id": "immutable||protocol-blockchain-engineer",
      "keywords": [
        "Rust",
        "Go",
        "L2/Rollup"
      ],
      "duties": [
        "架构设计",
        "性能/容量",
        "协议/合约开发"
      ]
    },
    {
      "company": "1inch",
      "func": "eng",
      "category": "defi",
      "position": "Technical Lead (Blockchain)",
      "level": "head",
      "location": "全球远程",
      "region": [
        "remote"
      ],
      "salary": "面议",
      "salaryNum": 200000,
      "requirements": "Solidity/Yul 主网生产部署经验；Rust 知识；DeFi 聚合器核心合约技术主管。",
      "link": "https://jobs.lever.co/1inch/a39cdc2d-36df-47c2-be7a-09be92e57979",
      "firstSeen": "2026-05-26",
      "lastSeen": "2026-05-26",
      "id": "1inch||technical-lead-blockchain",
      "keywords": [
        "Solidity",
        "Rust",
        "Smart Contract",
        "DeFi"
      ],
      "duties": [
        "部署发布",
        "协议/合约开发"
      ]
    },
    {
      "company": "1inch",
      "func": "eng",
      "category": "defi",
      "position": "Senior Software Engineer (Blockchain)",
      "level": "senior",
      "location": "全球远程",
      "region": [
        "remote"
      ],
      "salary": "面议",
      "salaryNum": 175000,
      "requirements": "Solidity/Yul/Rust/TypeScript 智能合约开发框架；DeFi 链上产品开发。",
      "link": "https://jobs.lever.co/1inch/b43b5dfa-95ff-4a30-9a42-6fb7860ff0ec",
      "firstSeen": "2026-05-26",
      "lastSeen": "2026-05-26",
      "id": "1inch||senior-software-engineer-blockchain",
      "keywords": [
        "Solidity",
        "Rust",
        "TypeScript",
        "Smart Contract",
        "DeFi"
      ],
      "duties": [
        "协议/合约开发"
      ],
      "description": "1inch is the DeFi ecosystem building financial freedom for everyone. 1inch products help users and builders trade, hold and track digital assets - with the self-custody, comprehensive security and the intuitive user experience they need to unlock the potential of true crypto ownership. 1inch protocols and APIs provide core infrastructure across the DeFi industry and beyond.\n \nSo if you’re someone who thinks big, moves fast and wants to make an impact right from day one, then get ready to join our industry-changing team.\n \nLocation: We prioritise candidates who are based in Dubai then consider those working remotely in one of our European Hub Locations (UK, Spain or Germany).\n \n\n\nWe are seeking a Senior Blockchain Engineerwith a high-agency, \"Get Stuff Done\" mindset and an unrelenting passion for decentralised innovation.\nAs a core contributor to our engineering ecosystem, you will design, develop, and optimise the smart contracts and underlying blockchain infrastructure powering 1inch. This role requires a sophisticated problem-solver who can navigate the lightning-fast shifts of the crypto landscape while executing securely at scale. Working directly alongside our CPO, product leads, and world-class engineers, your commitment to open-source excellence will keep 1inch at the absolute cutting edge of DeFi.\n\nKey responsibilities：\n• Architecture & Scalability: Design and optimise robust blockchain product architecture, keeping scalability, security, and peak performance at the absolute forefront.\n\n• Smart Contract Lifecycle: Lead the end-to-end development, integration, and internal auditing of high-value smart contracts across decentralised protocols.\n\n• R&D and PoCs: Conduct advanced technical research and execute proof-of-concept (PoC) experiments to pioneer new features within the DeFi space.\n\n• Cross-Chain Innovation: Design and evolve cross-chain interoperability solutions, including atomic swaps and advanced bridging infrastructure.\n\n• Gas Optimisation: Deep-dive into execution efficiency, designing algorithms with an extreme focus on gas preservation and low-latency performance.\n\n• Security & Audit Collaboration: Systematically analyse attack vectors, enforce ironclad security protocols, and collaborate directly with tier-one external auditors for flawless product launches.\n\n• Engineering Excellence: Champion rigorous code reviews, build effective CI/CD pipelines for Web3, and mentor junior/mid-level developers to scale our technical capabilities.\n\nRequirements：\n• Proven Footprint: 7+ years of professional software development experience, with a minimum of 3+ years dedicated purely to production-grade blockchain engineering.\n\n• EVM Mastery: Deep, native understanding of the Ethereum ecosystem, smart contracts (Solidity, Yul), and the mechanics of decentralized applications (dApps).\n\n• Scaling & Infrastructure: Hands-on experience deploying to Layer 2 solutions (Optimistic & ZK Rollups) and manipulating cross-chain architecture.\n\n• Technical Leadership: A proven track record of owning architectural decisions from inception to deployment, guiding development teams through complex technical delivery.\n\n• Security Focus: Deep expertise in smart contract security principles, vulnerability mitigation, and the auditing process.\n\nWhy join 1inch?：\n• Pioneering Spirit: Work with a globally distributed, highly collaborative team that shaped the history of DeFi; from winning hackathons to launching one of crypto's most legendary retroactive governance token airdrops.\n\n• Impact & Autonomy: Join a fast-paced, supportive environment where fresh ideas are valued. If you have a vision, you will have the space and autonomy to pitch it and make it happen.\n\n• Competitive Compensation: Enjoy a competitive salary that matches your expertise, paired with a discretionary bonus scheme to reward your impact.\n\n• Flawless Hardware & Development: We set you up for success by fully providing equipment for your remote workspace, alongside a dedicated le"
    },
    {
      "company": "Limit Break",
      "func": "eng",
      "category": "other",
      "position": "Sr Blockchain Engineer (Smart Contract)",
      "level": "senior",
      "location": "远程 / 洛杉矶",
      "region": [
        "remote",
        "us"
      ],
      "salary": "面议",
      "salaryNum": 180000,
      "requirements": "Solidity 主网智能合约开发与审计上线；NFT/链上游戏协议；安全设计。",
      "link": "https://jobs.lever.co/limitbreak/d358beee-a1a9-4055-a653-f594672ca415",
      "firstSeen": "2026-05-26",
      "lastSeen": "2026-05-26",
      "id": "limit-break||sr-blockchain-engineer-smart-contract",
      "keywords": [
        "Solidity",
        "Smart Contract",
        "安全审计"
      ],
      "duties": [
        "部署发布",
        "协议/合约开发",
        "安全/审计"
      ]
    },
    {
      "company": "Crypto.com",
      "func": "ops",
      "category": "exchange",
      "position": "Blockchain DevOps Engineer",
      "level": "mid",
      "location": "全球远程",
      "region": [
        "remote",
        "asia"
      ],
      "salary": "面议",
      "salaryNum": 140000,
      "requirements": "区块链软件配置与 CI/CD 自动化；前后端基础设施可扩展设计；云计算工作负载维护。",
      "link": "https://jobs.lever.co/crypto/920768e5-3b79-401e-8c12-a9e0da82190a",
      "firstSeen": "2026-05-26",
      "lastSeen": "2026-05-26",
      "id": "crypto-com||blockchain-devops-engineer",
      "keywords": [
        "CI/CD"
      ],
      "duties": [
        "部署发布",
        "自动化"
      ]
    },
    {
      "company": "MyShell",
      "func": "product",
      "category": "other",
      "position": "Web3 Product Manager (Consumer Crypto)",
      "level": "mid",
      "location": "新加坡",
      "region": [
        "sg",
        "asia"
      ],
      "salary": "面议",
      "salaryNum": 120000,
      "requirements": "AI Agent + Web3 消费端产品；链上交易平台与 DeFi 融合方向；产品生命周期管理。",
      "link": "https://job-boards.greenhouse.io/myshell/jobs/4024148008",
      "firstSeen": "2026-05-26",
      "lastSeen": "2026-05-26",
      "id": "myshell||web3-product-manager-consumer-crypto",
      "keywords": [
        "DeFi",
        "AI"
      ],
      "duties": [
        "协议/合约开发",
        "产品规划"
      ]
    },
    {
      "company": "OKX",
      "func": "product",
      "category": "exchange",
      "position": "Senior Infra Product Manager (Web3)",
      "level": "senior",
      "location": "香港 / 新加坡",
      "region": [
        "hk",
        "sg",
        "asia"
      ],
      "salary": "面议",
      "salaryNum": 150000,
      "requirements": "Web3 跨业务基础设施产品设计与生命周期管理；技术产品路线图；跨团队协作。",
      "link": "https://job-boards.greenhouse.io/okx/jobs/6686184003",
      "firstSeen": "2026-05-26",
      "lastSeen": "2026-05-26",
      "id": "okx||senior-infra-product-manager-web3",
      "keywords": [],
      "duties": [
        "产品规划",
        "设计/品牌"
      ]
    },
    {
      "company": "Binance",
      "func": "product",
      "category": "exchange",
      "position": "Product Manager, Web3 Growth",
      "level": "senior",
      "location": "全球远程",
      "region": [
        "remote",
        "asia"
      ],
      "salary": "面议",
      "salaryNum": 150000,
      "requirements": "Web3 钱包产品战略规划与上线；增长方向；数据驱动迭代；跨职能协作。",
      "link": "https://jobs.lever.co/binance/38b8287d-6ef2-4bfd-8eab-490b74ac892a",
      "firstSeen": "2026-05-26",
      "lastSeen": "2026-05-26",
      "id": "binance||product-manager-web3-growth",
      "keywords": [
        "Wallet",
        "营销/增长"
      ],
      "duties": [
        "部署发布",
        "产品规划",
        "增长营销"
      ]
    },
    {
      "company": "Crypto.com",
      "func": "product",
      "category": "exchange",
      "position": "Associate Product Manager (Early Career)",
      "level": "mid",
      "location": "全球远程",
      "region": [
        "remote",
        "asia"
      ],
      "salary": "面议",
      "salaryNum": 95000,
      "requirements": "从产品构思到 GTM 全流程参与；加速成长通道；Web3/交易所产品方向。",
      "link": "https://jobs.lever.co/crypto/62ae1c4c-2063-4f55-8131-8b0a407e564e",
      "firstSeen": "2026-05-26",
      "lastSeen": "2026-05-26",
      "id": "crypto-com||associate-product-manager-early-career",
      "keywords": [],
      "duties": [
        "产品规划"
      ]
    },
    {
      "company": "Fuel Labs",
      "func": "design",
      "category": "chain",
      "position": "Web3 Product Designer",
      "level": "senior",
      "location": "全球远程",
      "region": [
        "remote",
        "us"
      ],
      "salary": "面议",
      "salaryNum": 150000,
      "requirements": "首位设计师，与 Head of Product 紧密协作打造最佳区块链用户体验；2+ 年 crypto 经验；5+ 年产品设计。",
      "link": "https://jobs.lever.co/fuellabs/a49576f1-eb27-487c-9baa-223600080c91",
      "firstSeen": "2026-05-26",
      "lastSeen": "2026-05-26",
      "id": "fuel-labs||web3-product-designer",
      "keywords": [],
      "duties": [
        "团队管理",
        "设计/品牌"
      ]
    },
    {
      "company": "Story Protocol",
      "func": "design",
      "category": "chain",
      "position": "Product Designer",
      "level": "senior",
      "location": "全球远程",
      "region": [
        "remote",
        "us"
      ],
      "salary": "面议",
      "salaryNum": 145000,
      "requirements": "UX+UI 双向能力；Web3 空间产品设计作品集；IP 区块链协议产品体验设计。",
      "link": "https://jobs.lever.co/storyprotocol/d49d2c0e-3025-496b-a405-33ab931acaa9",
      "firstSeen": "2026-05-26",
      "lastSeen": "2026-05-26",
      "id": "story-protocol||product-designer",
      "keywords": [],
      "duties": [
        "协议/合约开发",
        "设计/品牌"
      ]
    },
    {
      "company": "Ethereum Foundation",
      "func": "design",
      "category": "chain",
      "position": "Product Designer",
      "level": "mid",
      "location": "全球远程",
      "region": [
        "remote"
      ],
      "salary": "面议",
      "salaryNum": 140000,
      "requirements": "Web2+Web3 产品管理与 UX 设计经验；视觉设计与 UI/UX 原则融合；以太坊生态产品体验。",
      "link": "https://jobs.lever.co/ethereumfoundation/6df6ebd3-ff9f-4ee2-81c0-c7f1bc4e6da7",
      "firstSeen": "2026-05-26",
      "lastSeen": "2026-05-26",
      "id": "ethereum-foundation||product-designer",
      "keywords": [
        "Ethereum"
      ],
      "duties": [
        "设计/品牌"
      ]
    },
    {
      "company": "OKX",
      "func": "data",
      "category": "exchange",
      "position": "Senior Data Scientist (Web3)",
      "level": "senior",
      "location": "香港 / 新加坡",
      "region": [
        "hk",
        "sg",
        "asia"
      ],
      "salary": "面议",
      "salaryNum": 170000,
      "requirements": "算法驱动的链上交易与市场数据产品；高级数据科学方法；内部业务分析支持。",
      "link": "https://job-boards.greenhouse.io/okx/jobs/6691995003",
      "firstSeen": "2026-05-26",
      "lastSeen": "2026-05-26",
      "id": "okx||senior-data-scientist-web3",
      "keywords": [],
      "duties": [
        "协议/合约开发",
        "数据分析"
      ]
    },
    {
      "company": "Blockchain.com",
      "func": "data",
      "category": "exchange",
      "position": "Data Scientist",
      "level": "mid",
      "location": "全球远程",
      "region": [
        "remote"
      ],
      "salary": "面议",
      "salaryNum": 140000,
      "requirements": "ETL 数据管道；GCP；概率统计与机器学习算法；链上数据工程。",
      "link": "https://boards.greenhouse.io/blockchain/jobs/3035279",
      "firstSeen": "2026-05-26",
      "lastSeen": "2026-05-26",
      "id": "blockchain-com||data-scientist",
      "keywords": [
        "GCP",
        "Machine Learning"
      ],
      "duties": [
        "协议/合约开发",
        "数据分析"
      ]
    },
    {
      "company": "Binance",
      "func": "data",
      "category": "exchange",
      "position": "Web3 Security Data Analyst",
      "level": "senior",
      "location": "全球远程",
      "region": [
        "remote",
        "asia"
      ],
      "salary": "面议",
      "salaryNum": 140000,
      "requirements": "5+ 年区块链/反欺诈/风控；SQL/Python/Spark/Flink；链上安全数据分析与反欺诈模型。",
      "link": "https://jobs.lever.co/binance/1d2fc9c5-bb7d-4bab-b596-df3a8336e171",
      "firstSeen": "2026-05-26",
      "lastSeen": "2026-05-26",
      "id": "binance||web3-security-data-analyst",
      "keywords": [
        "Python",
        "Flink",
        "Spark",
        "SQL"
      ],
      "duties": [
        "协议/合约开发",
        "安全/审计",
        "合规风控",
        "数据分析"
      ]
    },
    {
      "company": "CertiK",
      "func": "security",
      "category": "other",
      "position": "Blockchain Security Engineer (Solidity / Rust / Golang)",
      "level": "mid",
      "location": "全球远程",
      "region": [
        "remote",
        "us",
        "asia"
      ],
      "salary": "面议",
      "salaryNum": 100000,
      "requirements": "初级安全工程师；智能合约/区块链节点/去中心化基础设施漏洞研究；Solidity/Rust/Go。",
      "link": "https://jobs.lever.co/certik/478ab0cd-9f5e-4b88-88b5-01d3beac4d81",
      "firstSeen": "2026-05-26",
      "lastSeen": "2026-05-26",
      "id": "certik||blockchain-security-engineer-solidity-rust-golang",
      "keywords": [
        "Solidity",
        "Rust",
        "Go",
        "Smart Contract",
        "Validator/节点"
      ],
      "duties": [
        "节点运维",
        "协议/合约开发",
        "安全/审计"
      ],
      "description": "About the Company\n\nCertiK is the largest blockchain security auditor and provides a comprehensive suite of tools to secure the industry at scale. To date, CertiK has worked with over 4,900 Enterprise clients, secured over $557 billion worth of digital assets, and has detected over 18,000 vulnerabilities in blockchain code. Our clients include leading projects such as OKX, Tether, Ripple, and Pancakeswap. Our investors include top VCs like Tiger Global, Coatue Management, Shunwei Capital and Hillhouse Capital as well as industry leaders like Coinbase Ventures and Binance.\n\nAbout the Role \n\nWe are seeking a Junior Blockchain Security Engineer with a strong security mindset and foundational technical expertise across smart contracts, blockchain nodes, and decentralized infrastructure. In this role, you will support Web3 projects by assisting in code audits, contributing to security tools, and conducting research under guidance. If you are eager to grow your career in blockchain security and passionate about securing decentralized technologies, we’d love to hear from you.\n\nResponsibilities：\n•  Audit and review codebases for smart contracts, blockchain protocols, and decentralized applications (dApps) to identify and remediate vulnerabilities.\n• Conduct guided security research, explore new attack vectors, and deliver actionable insights.\n• Contribute to the design, development, and maintenance of internal security tools and frameworks.\n• Support improvements to internal processes, methodologies, and service offerings, ensuring high-quality delivery for clients.\n\nRequirements：\n• Bachelor’s, Master’s, or PhD in Mathematics, Computer Science, or Information Security.\n• At least 1 years of hands-on experience with blockchain technologies, including: Smart contracts (EVM chains, Solana, Move, etc.), Blockchain protocols (nodes, SDKs, Cosmos, etc.)\n• Experience in threat modeling, risk assessment, and security analysis.\n• Proficiency in one or more programming languages: Rust, Go, Solidity, Python, etc.\n• Passion for Cryptocurrency, DeFi, and Blockchain technologies.\n\nPreferred Qualifications：\n• Solid academic or practical background in Mathematics, Cryptography, or Cybersecurity.\n• Demonstrated experience conducting audits and collaborating with leading Web3 protocols.\n• Recognized achievements such as published CVEs, or strong placements in Attackathons, Bug Bounties, or Audit Contests.\n\nCompensation\n\nTarget annual salary for this role performed in the US is $102,000 - $180,000. The exact compensation at which this job is filled will be determined by the skills and experience of qualified candidates.\n\nCertiK accepts applications for this position on an ongoing basis. CertiK is proud to offer medical, vision, and dental insurance, 401(k) plan with company matching, life and accidental death and dismemberment insurance, HSA (with high deductible plan), FSA, and other benefits to all full-time employees, along with flexible paid time off and holidays. CertiK also offers a variable commission program for business development sales roles. \n\nIn compliance with federal law, all persons hired will be required to verify identity and eligibility to work in the United States and to complete the required employment eligibility verification form upon hire. CertiK is proud to be an equal opportunity employer. We will not discriminate against any applicant or employee on the basis of age, race, color, creed, religion, sex, sexual orientation, gender, gender identity or expression, medical condition, national origin, ancestry, citizenship, marital status or civil partnership/union status, physical or mental disability, pregnancy, childbirth, genetic information, military and veteran status, or any other basis prohibited by applicable federal, state or local law. \n\nCertiK will consider for employment qualified applicants with criminal histories in a manner consistent with local and federal requirements. https://www.eeoc.gov/sites/default/files/migrate"
    },
    {
      "company": "Binance",
      "func": "security",
      "category": "exchange",
      "position": "Blockchain Security Engineer (Smart Contract Auditing)",
      "level": "senior",
      "location": "全球远程",
      "region": [
        "remote",
        "asia"
      ],
      "salary": "面议",
      "salaryNum": 155000,
      "requirements": "Solidity/Rust/Go 智能合约安全审计；漏洞识别与修复建议；DeFi 安全威胁研究。",
      "link": "https://jobs.lever.co/binance/31a86987-81b3-4719-9d93-fc80bd5584a5",
      "firstSeen": "2026-05-26",
      "lastSeen": "2026-05-26",
      "id": "binance||blockchain-security-engineer-smart-contract-auditing",
      "keywords": [
        "Solidity",
        "Rust",
        "Go",
        "Smart Contract",
        "DeFi",
        "安全审计"
      ],
      "duties": [
        "协议/合约开发",
        "安全/审计"
      ],
      "description": "Binance is a leading global blockchain ecosystem behind the world’s largest cryptocurrency exchange by trading volume and registered users. We are trusted by 300+ million people in 100+ countries for our industry-leading security, user fund transparency, trading engine speed, deep liquidity, and an unmatched portfolio of digital-asset products. Binance offerings range from trading and finance to education, research, payments, institutional services, Web3 features, and more. We leverage the power of digital assets and blockchain to build an inclusive financial ecosystem to advance the freedom of money and improve financial access for people around the world.\n\nResponsibilities：\n• Conduct security audits on smart contracts, wallets and blockchains, and write high-quality audit reports\n• Develop automated scanning and monitoring tools for smart contracts, wallets and blockchains\n• Utilize scanning tools to detect vulnerabilities in online contracts and promptly issue risk warnings\n• Conduct post-mortem analysis on various hacking incidents, examining the causes, processes, prevention, correction and basic fund tracing\n• Proactively identify on-chain risks, monitor and model emerging on-chain attack vector trends, and possess a solid understanding of on-chain security risks such as fraud and phishing\n• Demonstrate a strong understanding of EVM and non-EVM blockchains and layer 2 solutions, and be familiar with DeFi design patterns\n• Perform a review analysis on newly disclosed vulnerabilities for smart contracts and summarize the root cause behind the exploits for early detection in the future\n• Demonstrate good understanding of cryptography and Security solutions which is utilized under blockchain products\n• Conduct Pen Testing and reviews for blockchain products and provide high quality feedback\n\nRequirements：\n• Currently enrolled or holding a bachelor's degree (or higher) in Computer Science or a related field\n• Proficient in programming languages, such as Solidity, Rust, Go among others which are currently engaged with the Blockchain field\n• Basic understanding of common Smart Contract security vulnerabilities, Current incidents, Wallet Security and Simulation testing\n• Basic understanding of blockchain and smart contract principles, experienced with reading Blockchain explorers and creating scripts to track and scan data. Well versed with the different types of hacks on wallets and blockchain, including smart contracts, and its common attack vectors\n• Well versed with the different types of libraries and security associated with it\n• Familiar with smart contract development testing cycle, pen testing cycle, transaction analysis, and other tools\n• Experienced in using VSCode, Git, or other version control applications\n• Proficient in Python, Go, Rust or another object-oriented programming language\n• Fundamental knowledge of code analysis and program debugging\n\nWhy Binance\n• Shape the future with the world’s leading blockchain ecosystem\n• Collaborate with world-class talent in a user-centric global organization with a flat structure\n• Tackle unique, fast-paced projects with autonomy in an innovative environment\n• Thrive in a results-driven workplace with opportunities for career growth and continuous learning\n• Competitive salary and company benefits\n• Work-from-home arrangement (the arrangement may vary depending on the work nature of the business team)\n\nBinance is committed to being an equal opportunity employer. We believe that having a diverse workforce is fundamental to our success.\nBy submitting a job application, you confirm that you have read and agree to our Candidate Privacy Notice."
    },
    {
      "company": "Arbitrum Foundation",
      "func": "growth",
      "category": "chain",
      "position": "Marketing Strategy & Operations Lead",
      "level": "head",
      "location": "全球远程",
      "region": [
        "remote",
        "us"
      ],
      "salary": "面议",
      "salaryNum": 155000,
      "requirements": "面向机构受众（资产管理/企业/协议）的综合营销战略与运营；L2 生态品牌建设。",
      "link": "https://jobs.lever.co/arbitrumfoundation/de077057-81ff-4db1-b89f-701d44d280eb",
      "firstSeen": "2026-05-26",
      "lastSeen": "2026-05-26",
      "id": "arbitrum-foundation||marketing-strategy-operations-lead",
      "keywords": [
        "L2/Rollup",
        "营销/增长"
      ],
      "duties": [
        "协议/合约开发",
        "增长营销",
        "社区运营",
        "客户/机构对接"
      ]
    },
    {
      "company": "Offchain Labs",
      "func": "growth",
      "category": "chain",
      "position": "Community Manager",
      "level": "mid",
      "location": "全球远程",
      "region": [
        "remote",
        "us"
      ],
      "salary": "面议",
      "salaryNum": 100000,
      "requirements": "4–7 年区块链创业公司营销/社区管理经验；Web3/crypto 社区运营与增长。",
      "link": "https://jobs.lever.co/offchainlabs/2d897afa-bbb3-4694-85b3-0c5c6a83e466",
      "firstSeen": "2026-05-26",
      "lastSeen": "2026-05-26",
      "id": "offchain-labs||community-manager",
      "keywords": [
        "社区",
        "营销/增长"
      ],
      "duties": [
        "增长营销",
        "社区运营"
      ]
    },
    {
      "company": "1inch",
      "func": "growth",
      "category": "defi",
      "position": "Social Media Manager",
      "level": "mid",
      "location": "全球远程",
      "region": [
        "remote"
      ],
      "salary": "面议",
      "salaryNum": 85000,
      "requirements": "3+ 年社媒营销（含 2+ 年 Web3/crypto）；社交频道管理与增长；内容策略。",
      "link": "https://jobs.lever.co/1inch/30fc85c7-d65d-42c9-9cae-e76a4ad21b33",
      "firstSeen": "2026-05-26",
      "lastSeen": "2026-05-26",
      "id": "1inch||social-media-manager",
      "keywords": [
        "营销/增长"
      ],
      "duties": [
        "增长营销"
      ]
    },
    {
      "company": "Coins.ph",
      "func": "bd",
      "category": "exchange",
      "position": "Web3 Business Development Associate",
      "level": "mid",
      "location": "菲律宾 / 远程",
      "region": [
        "asia"
      ],
      "salary": "面议",
      "salaryNum": 65000,
      "requirements": "建立合作伙伴信任关系；市场研究与合作趋势分析；东南亚 Web3 生态扩展。",
      "link": "https://jobs.lever.co/coins/5ce8eff6-d4df-44c9-9a09-dbc5f152341c",
      "firstSeen": "2026-05-26",
      "lastSeen": "2026-05-26",
      "id": "coins-ph||web3-business-development-associate",
      "keywords": [],
      "duties": [
        "商务拓展"
      ]
    },
    {
      "company": "Offchain Labs",
      "func": "ga",
      "category": "chain",
      "position": "Corporate Counsel",
      "level": "senior",
      "location": "全球远程",
      "region": [
        "remote",
        "us"
      ],
      "salary": "面议",
      "salaryNum": 185000,
      "requirements": "公司法务；美国及国际产品合规审查；Arbitrum 协议法律与战略支持。",
      "link": "https://jobs.lever.co/offchainlabs/f2fb76a8-705f-4a0e-be43-a8119f830dfa",
      "firstSeen": "2026-05-26",
      "lastSeen": "2026-05-26",
      "id": "offchain-labs||corporate-counsel",
      "keywords": [
        "合规"
      ],
      "duties": [
        "协议/合约开发",
        "合规风控"
      ]
    },
    {
      "company": "Binance",
      "func": "ga",
      "category": "exchange",
      "position": "Regulatory Counsel - MENA",
      "level": "senior",
      "location": "迪拜 / 远程",
      "region": [
        "dubai",
        "remote"
      ],
      "salary": "面议",
      "salaryNum": 175000,
      "requirements": "MENA 地区监管战略制定；产品发布法律支持；金融监管合规与商业目标平衡。",
      "link": "https://jobs.lever.co/binance/22ff0aae-c34e-4e0f-95d4-132d9290132f",
      "firstSeen": "2026-05-26",
      "lastSeen": "2026-05-26",
      "id": "binance||regulatory-counsel-mena",
      "keywords": [
        "合规"
      ],
      "duties": [
        "部署发布",
        "合规风控"
      ]
    },
    {
      "company": "Binance",
      "func": "ga",
      "category": "exchange",
      "position": "Talent Acquisition Specialist (Corporate)",
      "level": "mid",
      "location": "全球远程",
      "region": [
        "remote",
        "asia"
      ],
      "salary": "面议",
      "salaryNum": 100000,
      "requirements": "覆盖合规/法务/运营/财务/安全等职能的全球扩张招聘；全周期猎头。",
      "link": "https://jobs.lever.co/binance/c4e205be-a2a6-47bc-b45c-cb1bdf49421a",
      "firstSeen": "2026-05-26",
      "lastSeen": "2026-05-26",
      "id": "binance||talent-acquisition-specialist-corporate",
      "keywords": [
        "合规"
      ],
      "duties": [
        "安全/审计",
        "合规风控",
        "社区运营",
        "招聘/HR"
      ]
    },
    {
      "company": "Aave Labs",
      "func": "eng",
      "category": "defi",
      "position": "Staff Smart Contract Engineer",
      "level": "senior",
      "location": "全球远程",
      "region": [
        "remote"
      ],
      "salary": "面议",
      "salaryNum": 210000,
      "requirements": "设计/实现/部署以太坊及 EVM 链智能合约；Solidity 专家；DeFi 协议安全。",
      "link": "https://jobs.eu.lever.co/aavelabs/a3f47e26-ab0a-403d-8e59-ca2d7e5b4fe7",
      "firstSeen": "2026-05-26",
      "lastSeen": "2026-05-26",
      "id": "aave-labs||staff-smart-contract-engineer",
      "keywords": [
        "Solidity",
        "Smart Contract",
        "EVM",
        "DeFi",
        "Ethereum"
      ],
      "duties": [
        "部署发布",
        "协议/合约开发",
        "安全/审计"
      ]
    },
    {
      "company": "Sei Labs",
      "func": "eng",
      "category": "chain",
      "position": "Solidity / Smart Contracts Engineer",
      "level": "senior",
      "location": "全球远程",
      "region": [
        "remote"
      ],
      "salary": "面议 + token",
      "salaryNum": 185000,
      "requirements": "在 Sei 区块链上开发创新 DApp；Solidity；EVM；协议级集成。",
      "link": "https://jobs.lever.co/SeiLabs/64c40993-eaaf-41de-a73f-60d846f7393c",
      "firstSeen": "2026-05-26",
      "lastSeen": "2026-05-26",
      "id": "sei-labs||solidity-smart-contracts-engineer",
      "keywords": [
        "Solidity",
        "Smart Contract",
        "EVM"
      ],
      "duties": [
        "协议/合约开发"
      ]
    },
    {
      "company": "ZetaChain",
      "func": "eng",
      "category": "chain",
      "position": "Frontend Engineer (Web3 + Consumer Apps)",
      "level": "mid",
      "location": "全球远程（LATAM 优先）",
      "region": [
        "remote"
      ],
      "salary": "面议",
      "salaryNum": 130000,
      "requirements": "React/Next.js；ethers.js；与设计/产品协作；响应式高性能前端。",
      "link": "https://job-boards.greenhouse.io/zetachain/jobs/4934204008",
      "firstSeen": "2026-05-26",
      "lastSeen": "2026-05-26",
      "id": "zetachain||frontend-engineer-web3-consumer-apps",
      "keywords": [
        "React"
      ],
      "duties": [
        "故障/值班",
        "性能/容量"
      ]
    },
    {
      "company": "Binance",
      "func": "eng",
      "category": "exchange",
      "position": "Senior Frontend Engineer, Web3 Wallet",
      "level": "senior",
      "location": "全球远程",
      "region": [
        "remote",
        "asia"
      ],
      "salary": "面议",
      "salaryNum": 160000,
      "requirements": "Web3 钱包前端架构与开发；性能优化；稳定性与安全用户体验。",
      "link": "https://jobs.lever.co/binance/1801f2c6-fee7-4ec2-b37d-b3dd08a3e3ed",
      "firstSeen": "2026-05-26",
      "lastSeen": "2026-05-26",
      "id": "binance||senior-frontend-engineer-web3-wallet",
      "keywords": [
        "Wallet"
      ],
      "duties": [
        "架构设计",
        "稳定性保障",
        "性能/容量",
        "安全/审计"
      ],
      "description": "Binance is a leading global blockchain ecosystem behind the world’s largest cryptocurrency exchange by trading volume and registered users. We are trusted by 300+ million people in 100+ countries for our industry-leading security, user fund transparency, trading engine speed, deep liquidity, and an unmatched portfolio of digital-asset products. Binance offerings range from trading and finance to education, research, payments, institutional services, Web3 features, and more. We leverage the power of digital assets and blockchain to build an inclusive financial ecosystem to advance the freedom of money and improve financial access for people around the world.\n\n\nWe are building a **multi-chain DEX data analytics and trading platform** within the Binance ecosystem, aiming to offer the best trading prices and user experience across multiple blockchains. Join us to work on real DeFi infrastructure that powers on-chain analytics and trading.\n\nResponsibilities：\n• Build and maintain frontend features using React / TypeScript\n\n• Collaborate with product and backend engineers on feature delivery\n\n• Debug, test, and optimize UI performance\n\n• Stay updated on trends in DeFi, DEXs, on-chain trading technologies\n\nRequirements：\n• Solid understanding of HTML, CSS, JavaScript/TypeScript\n\n• Experience with React or similar frameworks\n\n• Interest in Web3 / DeFi\n\n• A learning mindset and strong communication skills\n\n• Git and modern dev workflows\n\n• Ability to leverage AI tools and technologies to enhance development efficiency\n\nNice to Have：\n• Have experience of on-chain trading\n\n• Familiarity with ethers.js / web3.js\n\n• Have experience of building Web3 App\n\n• Experienced in building real-time data platforms\n\nWhy Binance\n• Shape the future with the world’s leading blockchain ecosystem\n• Collaborate with world-class talent in a user-centric global organization with a flat structure\n• Tackle unique, fast-paced projects with autonomy in an innovative environment\n• Thrive in a results-driven workplace with opportunities for career growth and continuous learning\n• Competitive salary and company benefits\n• Work-from-home arrangement (the arrangement may vary depending on the work nature of the business team)\n\nBinance is committed to being an equal opportunity employer. We believe that having a diverse workforce is fundamental to our success.\nBy submitting a job application, you confirm that you have read and agree to our Candidate Privacy Notice."
    },
    {
      "company": "Gate.io",
      "func": "eng",
      "category": "exchange",
      "position": "Web3 Backend Engineer",
      "level": "mid",
      "location": "全球远程",
      "region": [
        "remote",
        "asia"
      ],
      "salary": "面议",
      "salaryNum": 140000,
      "requirements": "设计开发链上交易系统；EVM/UTXO 模型研究；高吞吐 API。",
      "link": "https://jobs.lever.co/gate/49bc4443-981c-4cc4-9734-1033c1e2d36e",
      "firstSeen": "2026-05-26",
      "lastSeen": "2026-05-26",
      "id": "gate-io||web3-backend-engineer",
      "keywords": [
        "EVM"
      ],
      "duties": [
        "协议/合约开发"
      ]
    },
    {
      "company": "LayerZero Labs",
      "func": "eng",
      "category": "infra",
      "position": "Backend Engineer",
      "level": "mid",
      "location": "全球远程",
      "region": [
        "remote"
      ],
      "salary": "$120K–$200K",
      "salaryNum": 160000,
      "requirements": "构建跨链互操作后端系统；Node.js/Go；高可用分布式架构。",
      "link": "https://boards.greenhouse.io/layerzerolabs/jobs/4290390004",
      "firstSeen": "2026-05-26",
      "lastSeen": "2026-05-26",
      "id": "layerzero-labs||backend-engineer",
      "keywords": [
        "Go",
        "Node.js",
        "Validator/节点"
      ],
      "duties": [
        "架构设计",
        "节点运维",
        "多链/跨链"
      ]
    },
    {
      "company": "Ethereum Foundation",
      "func": "eng",
      "category": "chain",
      "position": "Developer – Account Abstraction & Interop",
      "level": "senior",
      "location": "全球远程",
      "region": [
        "remote"
      ],
      "salary": "面议",
      "salaryNum": 180000,
      "requirements": "ERC-4337/AA 及跨链互操作；Solidity；合约部署与测试；协议贡献。",
      "link": "https://jobs.lever.co/ethereumfoundation/7c34b7a5-62c4-4905-98eb-2920b6074c09",
      "firstSeen": "2026-05-26",
      "lastSeen": "2026-05-26",
      "id": "ethereum-foundation||developer-account-abstraction-interop",
      "keywords": [
        "Solidity",
        "Smart Contract"
      ],
      "duties": [
        "部署发布",
        "协议/合约开发",
        "多链/跨链"
      ]
    },
    {
      "company": "Triton One",
      "func": "ops",
      "category": "infra",
      "position": "Site Reliability Engineer (Solana Infrastructure)",
      "level": "senior",
      "location": "全球远程",
      "region": [
        "remote"
      ],
      "salary": "面议（支持加密支付）",
      "salaryNum": 140000,
      "requirements": "大规模 Solana/SUI 区块链节点运维；自动化监控；可用性与容量管理。",
      "link": "https://cryptojobslist.com/sre",
      "firstSeen": "2026-05-26",
      "lastSeen": "2026-05-26",
      "id": "triton-one||site-reliability-engineer-solana-infrastructure",
      "keywords": [
        "Validator/节点",
        "Solana"
      ],
      "duties": [
        "稳定性保障",
        "监控告警",
        "性能/容量",
        "自动化",
        "节点运维"
      ]
    },
    {
      "company": "Binance",
      "func": "product",
      "category": "exchange",
      "position": "Product Manager – Web3 / DeFi",
      "level": "senior",
      "location": "全球远程",
      "region": [
        "remote",
        "asia"
      ],
      "salary": "面议",
      "salaryNum": 150000,
      "requirements": "5+ 年 Web3 产品经验；钱包/链上交易生命周期/DeFi；跨链产品路线图。",
      "link": "https://jobs.lever.co/binance/feeb939d-5dac-46fa-bfbc-e13bc2ba7fea",
      "firstSeen": "2026-05-26",
      "lastSeen": "2026-05-26",
      "id": "binance||product-manager-web3-defi",
      "keywords": [
        "DeFi",
        "Wallet"
      ],
      "duties": [
        "协议/合约开发",
        "多链/跨链",
        "产品规划"
      ],
      "description": "Binance is a leading global blockchain ecosystem behind the world’s largest cryptocurrency exchange by trading volume and registered users. We are trusted by 300+ million people in 100+ countries for our industry-leading security, user fund transparency, trading engine speed, deep liquidity, and an unmatched portfolio of digital-asset products. Binance offerings range from trading and finance to education, research, payments, institutional services, Web3 features, and more. We leverage the power of digital assets and blockchain to build an inclusive financial ecosystem to advance the freedom of money and improve financial access for people around the world.\n\nResponsibilities：\n• Own and drive wallet product development, with a focus on core wallet infrastructure, including key management, transaction construction and signing, and DeFi integrations\n\n• Research, innovate, and develop viable product strategies, and lead execution from concept through launch and post-launch iterations\n\n• Conduct competitive analysis, stay up to date with market trends, and differentiate products from competitors\n\n• Gather and analyze feedback from stakeholders and cross-functional teams, and translate insights into product requirements, features, and final deliverables\n\n• Communicate product plans and roadmaps with senior management\n\n• Write and review Product Requirement Documents (PRDs)\n\n• Ensure timely and high-quality delivery of products and releases\n\n• Track and drive development and testing progress\n\n• Monitor and analyze key user metrics and continuously improve product performance\n\nRequirements：\n• At least 5 years of Web3 product experience, with strong understanding of blockchain fundamentals, wallet infrastructure, on-chain transaction lifecycle, payments, and DeFi\n\n• Proven experience leading large-scale product design and delivery from concept to launch\n\n• Strong market intuition and data-driven mindset, with the ability to quickly translate insights into actionable product solutions and drive execution\n\n• Excellent communication skills in English and Mandarin\n\n• Passion for emerging technologies and innovation, with an entrepreneurial mindset and strong execution ability in a fast-evolving industry\n\nNice to Have：\n• Experience in AI + Web3 products (e.g., Agent, automation, intelligent execution)\n\nWhy Binance\n• Shape the future with the world’s leading blockchain ecosystem\n• Collaborate with world-class talent in a user-centric global organization with a flat structure\n• Tackle unique, fast-paced projects with autonomy in an innovative environment\n• Thrive in a results-driven workplace with opportunities for career growth and continuous learning\n• Competitive salary and company benefits\n• Work-from-home arrangement (the arrangement may vary depending on the work nature of the business team)\n\nBinance is committed to being an equal opportunity employer. We believe that having a diverse workforce is fundamental to our success.\nBy submitting a job application, you confirm that you have read and agree to our Candidate Privacy Notice."
    },
    {
      "company": "Space and Time Labs",
      "func": "product",
      "category": "infra",
      "position": "Product Manager – DeFi",
      "level": "mid",
      "location": "全球远程",
      "region": [
        "remote",
        "us"
      ],
      "salary": "面议",
      "salaryNum": 140000,
      "requirements": "主导 DeFi 产品路线图；链上分析平台；智能合约集成；数据产品。",
      "link": "https://jobs.lever.co/space-time/77e0d156-4869-40d7-8d70-3e4d3b64dc8a",
      "firstSeen": "2026-05-26",
      "lastSeen": "2026-05-26",
      "id": "space-and-time-labs||product-manager-defi",
      "keywords": [
        "Smart Contract",
        "DeFi"
      ],
      "duties": [
        "协议/合约开发",
        "产品规划"
      ]
    },
    {
      "company": "Crypto.com",
      "func": "product",
      "category": "exchange",
      "position": "Product Manager – Onchain",
      "level": "senior",
      "location": "全球远程",
      "region": [
        "remote",
        "asia"
      ],
      "salary": "面议",
      "salaryNum": 155000,
      "requirements": "5+ 年产品交付经验；DeFi/区块链领域知识；链上产品迭代与增长。",
      "link": "https://jobs.lever.co/crypto/161feab0-def0-4b63-b719-2ac87f4f849e",
      "firstSeen": "2026-05-26",
      "lastSeen": "2026-05-26",
      "id": "crypto-com||product-manager-onchain",
      "keywords": [
        "DeFi",
        "营销/增长"
      ],
      "duties": [
        "协议/合约开发",
        "产品规划",
        "增长营销"
      ]
    },
    {
      "company": "OKX",
      "func": "design",
      "category": "exchange",
      "position": "Senior Product Designer, Web3 DeFi",
      "level": "senior",
      "location": "香港 / 新加坡",
      "region": [
        "hk",
        "sg",
        "asia"
      ],
      "salary": "面议",
      "salaryNum": 140000,
      "requirements": "5+ 年产品/交互设计；DeFi/钱包复杂产品设计；端到端用户体验。",
      "link": "https://job-boards.greenhouse.io/OKX/jobs/6660783003",
      "firstSeen": "2026-05-26",
      "lastSeen": "2026-05-26",
      "id": "okx||senior-product-designer-web3-defi",
      "keywords": [
        "DeFi",
        "Wallet"
      ],
      "duties": [
        "设计/品牌"
      ],
      "description": "<div data-page-id=\"JAF7dFJcWoUusRx7RKkuM14BsYc\" data-docx-has-block-data=\"false\">\n<div class=\"ace-line ace-line old-record-id-OqGZdUPi6oJlXzxlmNiu3gAmsVg\"><strong>OKX will be prioritising applicants who have a current right to work in Singapore, and do not require OKX's sponsorship of a visa.</strong></div>\n<h2 class=\"heading-2 ace-line old-record-id-doxusd6NtLTrM8e4ysmP03OKuHd\"><strong>Who We Are</strong></h2>\n<div class=\"ace-line ace-line old-record-id-ZDGzdXG4poqMiSxarJbuzJzls1d\">\n<div data-page-id=\"RpoEdRXrWoavx2xJ5CPu6mmysBc\" data-lark-html-role=\"root\" data-docx-has-block-data=\"false\">\n<div class=\"ace-line ace-line old-record-id-RKOAdw3kVoh5EQxcr2juP3i0sTb\">\n<div data-page-id=\"Kpucdjv7JoAcSZxSf7PuRl5Yscb\" data-lark-html-role=\"root\" data-docx-has-block-data=\"false\">\n<div class=\"ace-line ace-line old-record-id-Cfb8dvi9voxFkWxhNcmuJX50sZb\">At OKX, we believe that the future will be reshaped by crypto, and ultimately contribute to every individual's freedom. OKX is a leading crypto exchange, and the developer of OKX Wallet, giving millions access to crypto trading and decentralized crypto applications (dApps). OKX is also a trusted brand by hundreds of large institutions seeking access to crypto markets. We are safe and reliable, backed by our Proof of Reserves. Across our multiple offices globally, we are united by our core principles: <em>We Before Me</em>, <em>Do the Right Thing</em>, and <em>Get Things Done</em>. These shared values drive our culture, shape our processes, and foster a friendly, rewarding, and diverse environment for every OK-er. OKX is part of OKG, a group that brings the value of Blockchain to users around the world, through our leading products OKX, OKX Wallet, OKLink and more.</div>\n</div>\n</div>\n</div>\n</div>\n<h2 class=\"heading-2 ace-line old-record-id-doxusl417D129Ked7hp9WBVv9lg\"><strong>About the Opportunity</strong></h2>\n<div class=\"ace-line ace-line old-record-id-doxusk4HSdQ2A0bSc6ivMeQbF5L\">\n<div data-page-id=\"Y0yZdOTa4oD7cWxGZqjuJEoysqg\" data-docx-has-block-data=\"false\">\n<div class=\"ace-line ace-line old-record-id-IuQAdmUZCoyi2Bx9mvGudKODsQc\">\n<div data-zone-id=\"0\" data-line-index=\"0\" data-line=\"true\"><em>Join us at OKX, where we're shaping the future of decentralized finance (DeFi) to make it accessible to everyone. We're seeking Product Designers to define our DeFi products, strategize, and cultivate exceptional user experiences. </em></div>\n<div data-zone-id=\"0\" data-line-index=\"0\" data-line=\"true\"><em>As we expand our focus beyond CEX traders, we're building a world class Decentralised Platform tailored for our web3 users. Your role will involve owning transaction workflows, data display, and feature execution, crafting experiences that delight our global user base. This is your chance to have a significant impact on millions of users worldwide, collaborating with cross-functional teams to deliver top-notch DeFi experiences.  If you're passionate about revolutionizing decentralised finance, join us as we build cutting edge web3 products with the latest blockchain technologies.</em></div>\n</div>\n</div>\n</div>\n<div class=\"ace-line ace-line old-record-id-doxuss6XESKYQHip9PQStty5I5K\"> </div>\n<h2 class=\"heading-2 ace-line old-record-id-doxusI2RkaIWtuQsGjyJjA6hybg\"><strong>What Yo</strong></h2>\n<h2 class=\"heading-2 ace-line old-record-id-doxlgOOmDSKH9xYav2CQw7XLV6g\"><strong>What You’ll Be Doing</strong></h2>\n<ul class=\"list-bullet1\">\n<li class=\"ace-line ace-line old-record-id-NutFd3IW9ocN5gxKh3zlUzqugWe\" data-list=\"bullet\">\n<div>Lead the complete product design process from inception to execution, driving the entire journey from demand insight to high-quality implementation, creating intuitive, trustworthy, and aesthetically pleasing user experiences.</div>\n</li>\n<li class=\"ace-line ace-line old-record-id-LTFWdcX51oXmnDxMOXrlxIAIgKb\" data-list=\"bullet\">\n<div>Deeply understand business objectives and user needs, collaborating closely with product, development, and marketing teams to translate quali"
    },
    {
      "company": "Phantom",
      "func": "design",
      "category": "defi",
      "position": "Brand Designer",
      "level": "senior",
      "location": "全球远程",
      "region": [
        "remote",
        "us"
      ],
      "salary": "$165K–$200K",
      "salaryNum": 182000,
      "requirements": "加密钱包品牌视觉；视觉系统与品牌规范；跨媒介素材产出。",
      "link": "https://job-boards.greenhouse.io/phantom45/jobs/4502077005",
      "firstSeen": "2026-05-26",
      "lastSeen": "2026-05-26",
      "id": "phantom||brand-designer",
      "keywords": [
        "Wallet"
      ],
      "duties": [
        "设计/品牌"
      ]
    },
    {
      "company": "Immunefi",
      "func": "design",
      "category": "other",
      "position": "Senior UX Product Designer",
      "level": "senior",
      "location": "全球远程",
      "region": [
        "remote"
      ],
      "salary": "面议",
      "salaryNum": 130000,
      "requirements": "安全漏洞赏金平台 UX；用户研究与原型；Web3 用户体验设计。",
      "link": "https://boards.greenhouse.io/immunefi/jobs/5475815004",
      "firstSeen": "2026-05-26",
      "lastSeen": "2026-05-26",
      "id": "immunefi||senior-ux-product-designer",
      "keywords": [],
      "duties": [
        "安全/审计",
        "设计/品牌"
      ]
    },
    {
      "company": "Binance",
      "func": "data",
      "category": "exchange",
      "position": "Data Scientist – AI Agent Engineering & Infrastructure",
      "level": "senior",
      "location": "全球远程",
      "region": [
        "remote",
        "asia"
      ],
      "salary": "面议",
      "salaryNum": 170000,
      "requirements": "AI Agent 基础设施数据建模；LLM/强化学习；PB 级数据平台。",
      "link": "https://jobs.lever.co/binance/b823f1b9-f62e-4156-b8e2-c20d11a163a3",
      "firstSeen": "2026-05-26",
      "lastSeen": "2026-05-26",
      "id": "binance||data-scientist-ai-agent-engineering-infrastructure",
      "keywords": [
        "AI"
      ],
      "duties": [
        "数据分析"
      ]
    },
    {
      "company": "Binance",
      "func": "data",
      "category": "exchange",
      "position": "Data Scientist – Computer Vision (Risk Management)",
      "level": "senior",
      "location": "全球远程",
      "region": [
        "remote",
        "asia"
      ],
      "salary": "面议",
      "salaryNum": 155000,
      "requirements": "CV/ML 模型开发（KYC/图像任务）；风控场景；深度学习框架。",
      "link": "https://jobs.lever.co/binance/efc8b129-8ddb-457a-9d5f-7eb3fe0e4dc6",
      "firstSeen": "2026-05-26",
      "lastSeen": "2026-05-26",
      "id": "binance||data-scientist-computer-vision-risk-management",
      "keywords": [
        "Machine Learning",
        "AML/KYC"
      ],
      "duties": [
        "合规风控",
        "数据分析"
      ]
    },
    {
      "company": "CertiK",
      "func": "security",
      "category": "other",
      "position": "Senior Blockchain Security Engineer (Solidity / Rust / Golang)",
      "level": "senior",
      "location": "全球远程",
      "region": [
        "remote",
        "us",
        "asia"
      ],
      "salary": "$102K–$180K",
      "salaryNum": 141000,
      "requirements": "区块链代码审计；安全工具开发；Solidity/Rust/Go；Web3 漏洞研究。",
      "link": "https://jobs.lever.co/certik/e15a5a75-137f-4e37-a402-85079dd12b94",
      "firstSeen": "2026-05-26",
      "lastSeen": "2026-05-26",
      "id": "certik||senior-blockchain-security-engineer-solidity-rust-golang",
      "keywords": [
        "Solidity",
        "Rust",
        "Go",
        "安全审计"
      ],
      "duties": [
        "安全/审计"
      ],
      "description": "About the Role:\nWe are seeking a Senior Blockchain Security Engineer with a strong security mindset and deep technical expertise across smart contracts, blockchain nodes, and decentralized infrastructure. You will play a critical role in safeguarding Web3 projects by auditing code, building security tools, and driving research. If you have hands-on experience in Web3 and are passionate about advancing the security of decentralized technologies, we’d love to hear from you.\n\nResponsibilities：\n• Audit and review codebases for smart contracts, blockchain protocols, and decentralized applications (dApps) to identify and remediate vulnerabilities.\n• Work closely with external blockchain teams to enhance the security of their products by providing expert security consultation and implementing remediation strategies.\n• Conduct independent security research, explore new attack vectors, and deliver actionable insights.\n• Design, develop, and maintain internal security tools and frameworks to strengthen our security services.\n• Continuously improve internal processes, methodologies, and service offerings while ensuring high client satisfaction and long-term partnerships.\n\nRequirements：\n• Bachelor’s, Master’s, or PhD in Mathematics, Computer Science, or Information Security.\n• Minimum 3 years of professional experience as a Software Engineer, Security Engineer, or in a related role.\n• At least 2 years of hands-on experience with blockchain technologies, including:  Smart contracts (EVM chains, Solana, Move, etc.), Blockchain protocols (nodes, SDKs, Cosmos, etc.)\n•  Strong expertise in threat modeling, risk assessment, and security analysis.\n• Proficiency in one or more programming languages: Rust, Go, Solidity, Python, etc.\n• Passion for Cryptocurrency, DeFi, and Blockchain technologies.\n\nPreferred Qualifications：\n• Solid academic or practical background in Mathematics, Cryptography, or Cybersecurity.\n• Demonstrated experience conducting audits and collaborating with leading Web3 protocols.\n• Recognized achievements such as published CVEs, or strong placements in Attackathons, Bug Bounties, or Audit Contests.\n\nAbout the Company\nCertiK is the largest blockchain security auditor and provides a comprehensive suite of tools to secure the industry at scale. To date, CertiK has worked with over 4,900 Enterprise clients, secured over $557 billion worth of digital assets, and has detected over 18,000 vulnerabilities in blockchain code. Our clients include leading projects such as OKX, Tether, Ripple, and Pancakeswap. Our investors include top VCs like Tiger Global, Coatue Management, Shunwei Capital and Hillhouse Capital as well as industry leaders like Coinbase Ventures and Binance.\n\nInvestors = Insight Partners, Sequoia, Tiger Global, Coatue Management, Lightspeed, Advent International, SoftBank, Hillhouse Capital, Goldman Sachs, Shunwei Capital, IDG Capital, Wing, Legend Star, Danhua Capital and other investors.\n\nAbout You\nYou’re a self-starter. You believe in tackling the most important problems, even if they are the most difficult problems. You’re comfortable with the unknown and understand that startup life means that you’re going to be wearing multiple hats. And that’s what motivates you. You’re accountable and obsessed with improvement, both in yourself and in others. You’re up to the challenge of building a world-class company that aims to be the infrastructure for more secure software for all.\n\nCompensation\nTarget annual salary for this role performed in the US is $102,000 - $180,000.\n\nThe exact compensation at which this job is filled will be determined by the skills and experience of qualified candidates.\n\n\n\n\nCertiK accepts applications for this position on an ongoing basis.\n \nCertiK is proud to offer medical, vision, and dental insurance, 401(k) plan with company matching, life and accidental death and dismemberment insurance, HSA (with high deductible plan), FSA, and other benefits to all full-time employees, along with flexible pai"
    },
    {
      "company": "Binance",
      "func": "security",
      "category": "exchange",
      "position": "Smart Contract Auditor",
      "level": "senior",
      "location": "全球远程",
      "region": [
        "remote",
        "asia"
      ],
      "salary": "面议",
      "salaryNum": 160000,
      "requirements": "智能合约安全审计；自动化扫描工具开发；DeFi/链上安全分析。",
      "link": "https://jobs.lever.co/binance/6f64f1c8-2fdc-4231-8da3-631ebdf3ae2a",
      "firstSeen": "2026-05-26",
      "lastSeen": "2026-05-26",
      "id": "binance||smart-contract-auditor",
      "keywords": [
        "Smart Contract",
        "DeFi",
        "安全审计"
      ],
      "duties": [
        "自动化",
        "协议/合约开发",
        "安全/审计"
      ],
      "description": "Binance is a leading global blockchain ecosystem behind the world’s largest cryptocurrency exchange by trading volume and registered users. We are trusted by 300+ million people in 100+ countries for our industry-leading security, user fund transparency, trading engine speed, deep liquidity, and an unmatched portfolio of digital-asset products. Binance offerings range from trading and finance to education, research, payments, institutional services, Web3 features, and more. We leverage the power of digital assets and blockchain to build an inclusive financial ecosystem to advance the freedom of money and improve financial access for people around the world.\n\n\nAbout the role \nThis is a unique opportunity to contribute to the field and contribute to the blockchain community. You will work hand-in-hand with various talented workers from Binance on the cutting-edge of crypto to guard safety across many projects and systems. You will also coordinate with other teams aside from the security group, which could provide you an in-depth understanding of the crypto world.\n\nResponsibilities：\n• Conduct security audits and reviews on smart contracts and related protocols. Also write high-quality audit reports\n• Develop/Enhance automated scanning and monitoring tools for smart contracts\n• Utilize scanning tools to detect vulnerabilities in online contracts and promptly issue risk warnings\n• Conduct root cause analysis on various hacking incidents, examining the causes, processes, prevention, correction and basic fund tracing\n• Demonstrate a good understanding of EVM chains, and be familiar with DeFi design patterns\n• Perform a review analysis on newly disclosed vulnerabilities for smart contracts and summarize the root cause behind the exploits for early detection in the future\n\nRequirements：\n• Proficient in either of the programming languages, such as Solidity, Go, Rust among & others which are currently engaged with the Blockchain field\n• Basic understanding of common Smart Contract security vulnerabilities, Current incidents and Simulation testing\n• Basic understanding of blockchain and smart contract principles, experienced with reading Blockchain explorers and creating scripts to track and scan data\n• Understanding of different types of solidity libraries and security associated with it\n• Familiar with smart contract development testing cycle and transaction analysis\n\nAdditional beneficial skills：\n• Passionate about cryptocurrency / DeFi / smart contract / blockchain\n• Basic understanding of using VSCode, Git, or other version control applications\n• Basic knowledge of detection, exploitation, and prevention of security vulnerabilities\n• Experience in smart contracts development (e.g Foundry, HardHat, etc.)\n• Have great interest in Binance, high work enthusiasm, fit into remote working culture and responsibility, good and humble work attitude\n\nWhy Binance\n• Shape the future with the world’s leading blockchain ecosystem\n• Collaborate with world-class talent in a user-centric global organization with a flat structure\n• Tackle unique, fast-paced projects with autonomy in an innovative environment\n• Thrive in a results-driven workplace with opportunities for career growth and continuous learning\n• Competitive salary and company benefits\n• Work-from-home arrangement (the arrangement may vary depending on the work nature of the business team)\n\nBinance is committed to being an equal opportunity employer. We believe that having a diverse workforce is fundamental to our success.\nBy submitting a job application, you confirm that you have read and agree to our Candidate Privacy Notice."
    },
    {
      "company": "OKX",
      "func": "security",
      "category": "exchange",
      "position": "Web3 Security Researcher (Smart Contract)",
      "level": "senior",
      "location": "香港 / 新加坡",
      "region": [
        "hk",
        "sg",
        "asia"
      ],
      "salary": "面议",
      "salaryNum": 165000,
      "requirements": "智能合约安全审计；代币上线安全评估；EVM/密码学/分布式系统。",
      "link": "https://job-boards.greenhouse.io/okx/jobs/6483958003",
      "firstSeen": "2026-05-26",
      "lastSeen": "2026-05-26",
      "id": "okx||web3-security-researcher-smart-contract",
      "keywords": [
        "Smart Contract",
        "EVM",
        "安全审计"
      ],
      "duties": [
        "部署发布",
        "协议/合约开发",
        "安全/审计"
      ]
    },
    {
      "company": "Jump Crypto",
      "func": "security",
      "category": "other",
      "position": "Blockchain Security Engineer",
      "level": "senior",
      "location": "芝加哥 / 远程",
      "region": [
        "us",
        "remote"
      ],
      "salary": "面议",
      "salaryNum": 200000,
      "requirements": "多链 L1 安全工程；与研究团队协作确保协议安全；安全工具研发。",
      "link": "https://boards.greenhouse.io/jumpcrypto/jobs/3959660",
      "firstSeen": "2026-05-26",
      "lastSeen": "2026-05-26",
      "id": "jump-crypto||blockchain-security-engineer",
      "keywords": [],
      "duties": [
        "协议/合约开发",
        "多链/跨链",
        "安全/审计"
      ]
    },
    {
      "company": "OKX",
      "func": "growth",
      "category": "exchange",
      "position": "Web3 Ecosystem Marketing Manager",
      "level": "senior",
      "location": "香港 / 新加坡",
      "region": [
        "hk",
        "sg",
        "asia"
      ],
      "salary": "面议",
      "salaryNum": 130000,
      "requirements": "4+ 年 Web3/Crypto 生态营销；社区增长；GTM；合作伙伴协作。",
      "link": "https://boards.greenhouse.io/okx/jobs/5820258003",
      "firstSeen": "2026-05-26",
      "lastSeen": "2026-05-26",
      "id": "okx||web3-ecosystem-marketing-manager",
      "keywords": [
        "社区",
        "营销/增长"
      ],
      "duties": [
        "增长营销",
        "社区运营"
      ]
    },
    {
      "company": "Crypto.com",
      "func": "growth",
      "category": "exchange",
      "position": "Growth Manager",
      "level": "mid",
      "location": "全球远程",
      "region": [
        "remote",
        "asia"
      ],
      "salary": "面议",
      "salaryNum": 110000,
      "requirements": "移动端 App 增长；ASO；Crypto 原生用户；数据驱动增长策略。",
      "link": "https://jobs.lever.co/crypto/cbf62afb-e150-4f3b-b894-d529bb191262",
      "firstSeen": "2026-05-26",
      "lastSeen": "2026-05-26",
      "id": "crypto-com||growth-manager",
      "keywords": [
        "营销/增长"
      ],
      "duties": [
        "增长营销"
      ]
    },
    {
      "company": "Blockchain.com",
      "func": "growth",
      "category": "exchange",
      "position": "Community Manager, Web3",
      "level": "mid",
      "location": "全球远程",
      "region": [
        "remote"
      ],
      "salary": "面议",
      "salaryNum": 80000,
      "requirements": "Discord/Twitter/Telegram 社区运营；Web3 全球社区增长；内容与活动。",
      "link": "https://job-boards.greenhouse.io/blockchain/jobs/6865066",
      "firstSeen": "2026-05-26",
      "lastSeen": "2026-05-26",
      "id": "blockchain-com||community-manager-web3",
      "keywords": [
        "社区",
        "营销/增长"
      ],
      "duties": [
        "增长营销",
        "社区运营"
      ]
    },
    {
      "company": "Token Metrics",
      "func": "growth",
      "category": "other",
      "position": "Head of Marketing and Communications",
      "level": "head",
      "location": "全球远程",
      "region": [
        "remote"
      ],
      "salary": "面议",
      "salaryNum": 160000,
      "requirements": "7+ 年营销经验（含 4 年领导）；Crypto/Fintech 行业；增长黑客与产品营销。",
      "link": "https://jobs.lever.co/tokenmetrics/e5e3f4c0-37ee-42fc-9ce9-c3f6611f3e13",
      "firstSeen": "2026-05-26",
      "lastSeen": "2026-05-26",
      "id": "token-metrics||head-of-marketing-and-communications",
      "keywords": [
        "营销/增长"
      ],
      "duties": [
        "团队管理",
        "增长营销"
      ]
    },
    {
      "company": "OKX",
      "func": "bd",
      "category": "exchange",
      "position": "Business Development Manager, Web3 Community",
      "level": "senior",
      "location": "香港 / 新加坡",
      "region": [
        "hk",
        "sg",
        "asia"
      ],
      "salary": "面议",
      "salaryNum": 145000,
      "requirements": "DeFi/DEX 生态 BD；全球用户增长；社区与机构合作谈判。",
      "link": "https://job-boards.greenhouse.io/okx/jobs/7537363003",
      "firstSeen": "2026-05-26",
      "lastSeen": "2026-05-26",
      "id": "okx||business-development-manager-web3-community",
      "keywords": [
        "DeFi",
        "社区",
        "营销/增长"
      ],
      "duties": [
        "增长营销",
        "社区运营",
        "商务拓展",
        "客户/机构对接"
      ]
    },
    {
      "company": "Crypto.com",
      "func": "bd",
      "category": "exchange",
      "position": "Business Development Manager, VIP Partnerships",
      "level": "mid",
      "location": "全球远程",
      "region": [
        "remote",
        "asia"
      ],
      "salary": "面议",
      "salaryNum": 120000,
      "requirements": "1+ 年数字资产/Web3 经验；2+ 年金融产品销售；VIP 客户拓展。",
      "link": "https://jobs.lever.co/crypto/682e46b9-70e8-4256-a010-32aa010a5db1",
      "firstSeen": "2026-05-26",
      "lastSeen": "2026-05-26",
      "id": "crypto-com||business-development-manager-vip-partnerships",
      "keywords": [],
      "duties": [
        "商务拓展",
        "客户/机构对接"
      ]
    },
    {
      "company": "Celo Foundation",
      "func": "bd",
      "category": "chain",
      "position": "Head of Business Development and Partnerships",
      "level": "head",
      "location": "全球远程",
      "region": [
        "remote"
      ],
      "salary": "面议",
      "salaryNum": 200000,
      "requirements": "主导 Celo 生态合作战略；交易所/Web 基础设施/Crypto BD；合作谈判。",
      "link": "https://boards.greenhouse.io/celofoundation/jobs/4310556004",
      "firstSeen": "2026-05-26",
      "lastSeen": "2026-05-26",
      "id": "celo-foundation||head-of-business-development-and-partnerships",
      "keywords": [],
      "duties": [
        "团队管理",
        "商务拓展"
      ]
    },
    {
      "company": "Gateway.fm",
      "func": "bd",
      "category": "infra",
      "position": "Business Development Manager – Web3",
      "level": "mid",
      "location": "全球远程",
      "region": [
        "remote",
        "eu"
      ],
      "salary": "面议",
      "salaryNum": 120000,
      "requirements": "Web3/区块链基础设施战略合作；全球会议网络；长期伙伴关系建立。",
      "link": "https://boards.eu.greenhouse.io/gatewayfm/jobs/4552399101",
      "firstSeen": "2026-05-26",
      "lastSeen": "2026-05-26",
      "id": "gateway-fm||business-development-manager-web3",
      "keywords": [],
      "duties": [
        "商务拓展"
      ]
    },
    {
      "company": "Crypto.com",
      "func": "ga",
      "category": "exchange",
      "position": "Regulatory Legal Counsel",
      "level": "senior",
      "location": "全球远程",
      "region": [
        "remote",
        "asia"
      ],
      "salary": "面议",
      "salaryNum": 180000,
      "requirements": "Crypto 行业监管研究与合规分析；区块链法务；多司法辖区政策解读。",
      "link": "https://jobs.lever.co/crypto/8a3e7811-28a4-4217-aaf2-21856f3a9834",
      "firstSeen": "2026-05-26",
      "lastSeen": "2026-05-26",
      "id": "crypto-com||regulatory-legal-counsel",
      "keywords": [
        "合规"
      ],
      "duties": [
        "合规风控"
      ]
    },
    {
      "company": "Circle",
      "func": "ga",
      "category": "other",
      "position": "Web3 & Blockchain Researcher, Compliance",
      "level": "mid",
      "location": "全球远程",
      "region": [
        "remote",
        "us"
      ],
      "salary": "面议",
      "salaryNum": 120000,
      "requirements": "Web3 合规技术研究；新兴区块链风险识别；监管合规方案设计。",
      "link": "https://boards.greenhouse.io/circle/jobs/6012230002",
      "firstSeen": "2026-05-26",
      "lastSeen": "2026-05-26",
      "id": "circle||web3-blockchain-researcher-compliance",
      "keywords": [
        "合规"
      ],
      "duties": [
        "合规风控"
      ]
    },
    {
      "company": "Galaxy Digital",
      "func": "ga",
      "category": "other",
      "position": "Head of Legal – Retail",
      "level": "head",
      "location": "美国",
      "region": [
        "us"
      ],
      "salary": "面议",
      "salaryNum": 220000,
      "requirements": "零售法务主管；联邦/州证券/加密货币法规；GalaxyOne 零售平台合规。",
      "link": "https://job-boards.greenhouse.io/galaxydigitalservices/jobs/5669303004",
      "firstSeen": "2026-05-26",
      "lastSeen": "2026-05-26",
      "id": "galaxy-digital||head-of-legal-retail",
      "keywords": [
        "合规"
      ],
      "duties": [
        "团队管理",
        "合规风控"
      ]
    },
    {
      "company": "Offchain Labs",
      "func": "ga",
      "category": "chain",
      "position": "Technical Recruiter, Crypto",
      "level": "mid",
      "location": "全球远程",
      "region": [
        "remote",
        "us"
      ],
      "salary": "面议",
      "salaryNum": 110000,
      "requirements": "3+ 年 Web3/区块链技术招聘；端到端招聘流程；工程师猎头。",
      "link": "https://jobs.lever.co/offchainlabs/2f0f490e-d5cd-44e1-8151-126c27fb5d01",
      "firstSeen": "2026-05-26",
      "lastSeen": "2026-05-26",
      "id": "offchain-labs||technical-recruiter-crypto",
      "keywords": [],
      "duties": [
        "招聘/HR"
      ]
    },
    {
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "company": "OP Labs (Optimism)",
      "category": "chain",
      "func": "eng",
      "position": "Protocol Engineer (Go/Rust)",
      "level": "senior",
      "location": "全球远程",
      "region": [
        "remote"
      ],
      "salary": "面议 + token",
      "salaryNum": 200000,
      "requirements": "L2 协议核心开发；Optimism Bedrock；Go/Rust；EVM 底层。",
      "link": "https://web3.career/blockchain-jobs",
      "id": "op-labs-optimism-protocol-engineer-go-rust",
      "keywords": [
        "Rust",
        "Go",
        "EVM",
        "L2/Rollup"
      ],
      "duties": [
        "协议/合约开发"
      ]
    },
    {
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "company": "Aave",
      "category": "defi",
      "func": "eng",
      "position": "Senior Smart Contract Engineer (Solidity)",
      "level": "senior",
      "location": "全球远程",
      "region": [
        "remote"
      ],
      "salary": "面议",
      "salaryNum": 190000,
      "requirements": "DeFi 借贷协议合约开发；Solidity；Foundry；合约安全。",
      "link": "https://web3.career/smart-contract-jobs",
      "id": "aave-senior-smart-contract-engineer-solidity",
      "keywords": [
        "Solidity",
        "Smart Contract",
        "DeFi",
        "Foundry"
      ],
      "duties": [
        "协议/合约开发",
        "安全/审计"
      ]
    },
    {
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "company": "Uniswap Labs",
      "category": "defi",
      "func": "eng",
      "position": "Senior Frontend Engineer (React/TS)",
      "level": "senior",
      "location": "NYC / Remote",
      "region": [
        "us",
        "remote"
      ],
      "salary": "$180K–$220K",
      "salaryNum": 200000,
      "requirements": "DApp 前端；React/Next.js；ethers.js；高 QPS 数据展示。",
      "link": "https://web3.career/front-end-jobs",
      "id": "uniswap-labs-senior-frontend-engineer-react-ts",
      "keywords": [
        "React"
      ],
      "duties": []
    },
    {
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "company": "Halliday",
      "category": "infra",
      "func": "eng",
      "position": "Backend Engineer",
      "level": "mid",
      "location": "全球远程",
      "region": [
        "remote"
      ],
      "salary": "面议",
      "salaryNum": 140000,
      "requirements": "Node.js/Go；The Graph；API 集成；IPFS。",
      "link": "https://web3.career/backend-jobs",
      "id": "halliday-backend-engineer",
      "keywords": [
        "Go",
        "Node.js",
        "Validator/节点"
      ],
      "duties": [
        "节点运维"
      ]
    },
    {
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "company": "Symbiotic",
      "category": "chain",
      "func": "eng",
      "position": "Protocol Engineer (Restaking)",
      "level": "senior",
      "location": "全球远程",
      "region": [
        "remote"
      ],
      "salary": "面议 + token",
      "salaryNum": 200000,
      "requirements": "restaking 协议工程；Rust/Solidity；分布式系统。",
      "link": "https://web3.career/blockchain-jobs",
      "id": "symbiotic-protocol-engineer-restaking",
      "keywords": [
        "Solidity",
        "Rust",
        "Staking"
      ],
      "duties": [
        "节点运维",
        "协议/合约开发"
      ]
    },
    {
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "company": "OP Labs PBC",
      "category": "chain",
      "func": "product",
      "position": "Senior Product Manager",
      "level": "senior",
      "location": "全球远程",
      "region": [
        "remote"
      ],
      "salary": "$90K–$200K",
      "salaryNum": 150000,
      "requirements": "L2 产品策略；onchain 产品；跨研发/设计协作。",
      "link": "https://web3.career/product-manager-jobs",
      "id": "op-labs-pbc-senior-product-manager",
      "keywords": [
        "L2/Rollup"
      ],
      "duties": [
        "协议/合约开发",
        "产品规划"
      ]
    },
    {
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "company": "Kraken",
      "category": "exchange",
      "func": "product",
      "position": "Product Manager, Onchain",
      "level": "senior",
      "location": "全球远程",
      "region": [
        "remote"
      ],
      "salary": "面议",
      "salaryNum": 160000,
      "requirements": "交易所 onchain 产品；钱包/链上交互方向。",
      "link": "https://web3.career/product-manager-jobs",
      "id": "kraken-product-manager-onchain",
      "keywords": [
        "Wallet"
      ],
      "duties": [
        "协议/合约开发",
        "产品规划"
      ]
    },
    {
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "company": "MoonPay",
      "category": "other",
      "func": "product",
      "position": "Product Manager (On/Off-ramp)",
      "level": "mid",
      "location": "全球远程",
      "region": [
        "remote"
      ],
      "salary": "面议",
      "salaryNum": 130000,
      "requirements": "法币出入金产品；支付合规；增长指标。",
      "link": "https://web3.career/product-manager-jobs",
      "id": "moonpay-product-manager-on-off-ramp",
      "keywords": [
        "合规",
        "营销/增长",
        "出入金"
      ],
      "duties": [
        "合规风控",
        "产品规划",
        "增长营销"
      ]
    },
    {
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "company": "Figure",
      "category": "other",
      "func": "design",
      "position": "Principal Product Designer",
      "level": "senior",
      "location": "全球远程",
      "region": [
        "remote"
      ],
      "salary": "$125.8K–$190K",
      "salaryNum": 158000,
      "requirements": "6+ 年；移动优先消费级产品；端到端交付。",
      "link": "https://web3.career/product-designer-jobs",
      "id": "figure-principal-product-designer",
      "keywords": [],
      "duties": [
        "设计/品牌"
      ]
    },
    {
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "company": "Alchemy",
      "category": "infra",
      "func": "design",
      "position": "Senior Associate, Brand & Design",
      "level": "mid",
      "location": "全球远程",
      "region": [
        "remote",
        "us"
      ],
      "salary": "面议",
      "salaryNum": 120000,
      "requirements": "品牌视觉设计；5+ 年 fintech/crypto/SaaS。",
      "link": "https://web3.career/brand-designer-jobs",
      "id": "alchemy-senior-associate-brand-design",
      "keywords": [],
      "duties": [
        "设计/品牌"
      ]
    },
    {
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "company": "Squads",
      "category": "defi",
      "func": "design",
      "position": "Brand Designer",
      "level": "mid",
      "location": "全球远程",
      "region": [
        "remote"
      ],
      "salary": "面议",
      "salaryNum": 110000,
      "requirements": "品牌视觉/视觉系统；多渠道素材产出。",
      "link": "https://web3.career/brand-designer-jobs",
      "id": "squads-brand-designer",
      "keywords": [],
      "duties": [
        "设计/品牌"
      ]
    },
    {
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "company": "Binance",
      "category": "exchange",
      "func": "data",
      "position": "Data Scientist (On-chain)",
      "level": "senior",
      "location": "全球远程",
      "region": [
        "remote",
        "asia"
      ],
      "salary": "面议",
      "salaryNum": 160000,
      "requirements": "链上数据分析与建模；Python；趋势/风险洞察；看板。",
      "link": "https://web3.career/data-science-jobs",
      "id": "binance-data-scientist-on-chain",
      "keywords": [
        "Python"
      ],
      "duties": [
        "协议/合约开发",
        "数据分析"
      ]
    },
    {
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "company": "OKX",
      "category": "exchange",
      "func": "data",
      "position": "Machine Learning Engineer",
      "level": "senior",
      "location": "香港 / 远程",
      "region": [
        "hk",
        "cn",
        "remote"
      ],
      "salary": "$191K–$235K",
      "salaryNum": 213000,
      "requirements": "风控/推荐 ML 模型；Python；神经网络/聚类。",
      "link": "https://cryptojobslist.com/machine-learning",
      "id": "okx-machine-learning-engineer",
      "keywords": [
        "Python",
        "Machine Learning"
      ],
      "duties": [
        "合规风控",
        "数据分析"
      ]
    },
    {
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "company": "Chainalysis",
      "category": "other",
      "func": "data",
      "position": "Data Analyst (Investigations)",
      "level": "mid",
      "location": "全球远程",
      "region": [
        "remote",
        "us",
        "eu"
      ],
      "salary": "面议",
      "salaryNum": 120000,
      "requirements": "链上数据；调查分析；SQL；可视化。",
      "link": "https://web3.career/analyst-jobs",
      "id": "chainalysis-data-analyst-investigations",
      "keywords": [
        "SQL"
      ],
      "duties": [
        "协议/合约开发",
        "数据分析"
      ]
    },
    {
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "company": "Trail of Bits",
      "category": "other",
      "func": "security",
      "position": "Smart Contract Security Auditor",
      "level": "senior",
      "location": "全球远程",
      "region": [
        "remote"
      ],
      "salary": "$300K–$500K+",
      "salaryNum": 400000,
      "requirements": "Solidity 安全审计；形式化验证；Foundry/Slither/Echidna；EVM。",
      "link": "https://web3.career/security+smart-contract-jobs",
      "id": "trail-of-bits-smart-contract-security-auditor",
      "keywords": [
        "Solidity",
        "Smart Contract",
        "EVM",
        "Foundry",
        "安全审计",
        "形式化验证"
      ],
      "duties": [
        "协议/合约开发",
        "安全/审计"
      ]
    },
    {
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "company": "Nethermind",
      "category": "infra",
      "func": "security",
      "position": "Smart Contract Auditor",
      "level": "senior",
      "location": "全球远程",
      "region": [
        "remote"
      ],
      "salary": "面议",
      "salaryNum": 200000,
      "requirements": "3+ 年 Solidity 安全；EVM/Yellow Paper；常见漏洞模式。",
      "link": "https://web3.career/smart-contract-auditor-nethermind/78699",
      "id": "nethermind-smart-contract-auditor",
      "keywords": [
        "Solidity",
        "Smart Contract",
        "EVM"
      ],
      "duties": [
        "协议/合约开发",
        "安全/审计"
      ]
    },
    {
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "company": "Veridise",
      "category": "other",
      "func": "security",
      "position": "Security Researcher",
      "level": "senior",
      "location": "全球远程",
      "region": [
        "remote"
      ],
      "salary": "面议",
      "salaryNum": 200000,
      "requirements": "形式化验证；漏洞研究；ZK/合约审计。",
      "link": "https://web3.career/security+smart-contract-jobs",
      "id": "veridise-security-researcher",
      "keywords": [
        "Smart Contract",
        "ZK",
        "安全审计",
        "形式化验证"
      ],
      "duties": [
        "协议/合约开发",
        "安全/审计"
      ]
    },
    {
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "company": "Binance",
      "category": "exchange",
      "func": "growth",
      "position": "Growth Operations (Binance Academy)",
      "level": "mid",
      "location": "全球远程",
      "region": [
        "remote",
        "asia"
      ],
      "salary": "面议",
      "salaryNum": 90000,
      "requirements": "增长运营；内容与社区；数据驱动。",
      "link": "https://web3.career/marketing-jobs",
      "id": "binance-growth-operations-binance-academy",
      "keywords": [
        "社区",
        "营销/增长"
      ],
      "duties": [
        "增长营销",
        "社区运营"
      ]
    },
    {
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "company": "MoonPay",
      "category": "other",
      "func": "growth",
      "position": "Product Marketing Manager",
      "level": "senior",
      "location": "全球远程",
      "region": [
        "remote"
      ],
      "salary": "$90K–$140K",
      "salaryNum": 115000,
      "requirements": "产品营销；GTM；跨市场内容策略。",
      "link": "https://cryptojobslist.com/marketing",
      "id": "moonpay-product-marketing-manager",
      "keywords": [
        "营销/增长"
      ],
      "duties": [
        "增长营销"
      ]
    },
    {
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "company": "Mercuryo",
      "category": "other",
      "func": "growth",
      "position": "Community Manager",
      "level": "mid",
      "location": "全球远程",
      "region": [
        "remote"
      ],
      "salary": "$50K–$80K",
      "salaryNum": 65000,
      "requirements": "社区运营；X/Telegram/Discord；内容；活动。",
      "link": "https://web3.career/community-manager-jobs",
      "id": "mercuryo-community-manager",
      "keywords": [
        "社区"
      ],
      "duties": [
        "社区运营"
      ]
    },
    {
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "company": "Bitget",
      "category": "exchange",
      "func": "bd",
      "position": "Institutional BD Manager",
      "level": "senior",
      "location": "新加坡 / 远程",
      "region": [
        "sg",
        "asia",
        "remote"
      ],
      "salary": "面议",
      "salaryNum": 150000,
      "requirements": "机构业务拓展；交易所机构客户；谈判与成单。",
      "link": "https://web3.career/business-development-jobs",
      "id": "bitget-institutional-bd-manager",
      "keywords": [],
      "duties": [
        "商务拓展",
        "客户/机构对接"
      ]
    },
    {
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "company": "Anchorage Digital",
      "category": "other",
      "func": "bd",
      "position": "Regional Institutional Manager",
      "level": "senior",
      "location": "美国",
      "region": [
        "us"
      ],
      "salary": "面议",
      "salaryNum": 170000,
      "requirements": "机构客户关系；托管/数字资产；区域拓展。",
      "link": "https://web3.career/business-development-jobs",
      "id": "anchorage-digital-regional-institutional-manager",
      "keywords": [],
      "duties": [
        "商务拓展",
        "客户/机构对接"
      ]
    },
    {
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "company": "Paxos",
      "category": "other",
      "func": "bd",
      "position": "Sales / Business Development",
      "level": "mid",
      "location": "全球远程",
      "region": [
        "remote",
        "us"
      ],
      "salary": "面议",
      "salaryNum": 120000,
      "requirements": "3+ 年 web3 销售；outbound 开发；线索培育与成单。",
      "link": "https://web3.career/sales-jobs",
      "id": "paxos-sales-business-development",
      "keywords": [],
      "duties": [
        "商务拓展"
      ]
    },
    {
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "company": "Crypto.com",
      "category": "exchange",
      "func": "ga",
      "position": "Legal Counsel (Crypto)",
      "level": "senior",
      "location": "全球远程",
      "region": [
        "remote",
        "asia"
      ],
      "salary": "面议",
      "salaryNum": 180000,
      "requirements": "证券/商品监管；区块链法务；多司法辖区。",
      "link": "https://web3.career/crypto+legal-jobs",
      "id": "crypto-com-legal-counsel-crypto",
      "keywords": [],
      "duties": [
        "合规风控"
      ]
    },
    {
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "company": "Binance",
      "category": "exchange",
      "func": "ga",
      "position": "Compliance Officer (AML/KYC)",
      "level": "mid",
      "location": "全球远程",
      "region": [
        "remote",
        "asia"
      ],
      "salary": "面议",
      "salaryNum": 110000,
      "requirements": "AML/KYC；travel rule；多辖区合规流程。",
      "link": "https://web3.career/crypto-jobs",
      "id": "binance-compliance-officer-aml-kyc",
      "keywords": [
        "AML/KYC",
        "合规"
      ],
      "duties": [
        "合规风控"
      ]
    },
    {
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "company": "Anchorage Digital",
      "category": "other",
      "func": "ga",
      "position": "Crypto Technical Recruiter",
      "level": "mid",
      "location": "全球远程",
      "region": [
        "remote",
        "us"
      ],
      "salary": "面议",
      "salaryNum": 110000,
      "requirements": "技术招聘；web3 人才；端到端招聘流程。",
      "link": "https://web3.career/crypto+recruiter-jobs",
      "id": "anchorage-digital-crypto-technical-recruiter",
      "keywords": [],
      "duties": [
        "招聘/HR"
      ]
    },
    {
      "company": "Flashbots",
      "category": "infra",
      "position": "Senior DevOps Engineer",
      "level": "senior",
      "location": "全球远程",
      "region": [
        "remote"
      ],
      "salary": "面议",
      "salaryNum": 160000,
      "requirements": "MEV/区块构建基础设施；K8s+裸金属混合部署；Terraform/Ansible/Helm/Prometheus；4–10年分布式生产系统运维；L1/L2链上基础设施经验。",
      "link": "https://jobs.ashbyhq.com/flashbots.net/8fa82d12-baef-4f95-86af-a8354af820d8",
      "firstSeen": "2026-05-26",
      "lastSeen": "2026-05-26",
      "id": "flashbots||senior-devops-engineer",
      "func": "ops",
      "keywords": [
        "L2/Rollup",
        "MEV",
        "Kubernetes",
        "Terraform",
        "Prometheus"
      ],
      "duties": [
        "部署发布",
        "协议/合约开发"
      ],
      "description": "ABOUT US\n\nAt Flashbots, we're building the foundations of the future Internet and financial system. As an R&D organization https://medium.com/flashbots/frontrunning-the-mev-crisis-40629a613752, we focus on MEV through our dual engines of open research https://writings.flashbots.net/ and breakthrough product development – like mev-geth https://docs.flashbots.net/flashbots-auction/overview, Flashbots Protect https://protect.flashbots.net/, MEV-Boost https://collective.flashbots.net/t/merge-anniversary-a-year-in-review/2400, MEV-Share https://docs.flashbots.net/flashbots-protect/mev-share, Flashblocks https://writings.flashbots.net/introducing-rollup-boost, and BuilderNet https://buildernet.org/blog/introducing-buildernet.\n\n\nOur vibe is accelerationist, exceptional, kind, and independent. We are explorers, innovators, builders, and thinkers. We thrive on action, curiosity, and impact - driving the future in an iterative way while keeping an eye towards the long term version we want to see in the world.\n\n\n[https://app.ashbyhq.com/api/images/user-content/2ae4651e-df3c-4045-827f-9016b44031f3/062530ef-3800-4d7e-9336-12ab0aeee361/Untitled%20design%20(7).png]\n\n\n\n\nFlashbots is hiring a Senior DevOps Engineer with a platform-first mindset to fortify the infrastructure powering our Block Builders.\n\nYou’ll work at the intersection of distributed systems, blockchain infrastructure, and trusted compute thus ensuring that our production environment remains scalable, resilient, and secure.\n\n\n\n\nWHAT YOU’LL DO\n\n - Platform Reliability & Operations\n   \n   - Contribute, support and or lead the deployment, operation, and reliability of the block builder platform from Kubernetes clusters to bare-metal environments.\n   \n   - Maintain and scale distributed infrastructure spanning L1 and L2 environments, ensuring consistent performance under high-throughput and latency-sensitive workloads.\n   \n   - Drive observability, incident response, and performance optimization through modern SRE and DevOps practices.\n\n - Infrastructure Development & Automation\n   \n   - Build automation and tooling to simplify operations, improve developer experience, and reduce toil across our systems.\n   \n   - Design CI/CD workflows for high-assurance environments, including TEE-based systems and blockchain node infrastructure.\n   \n   - Contribute to the design of reproducible, secure environments across multiple clouds and hosting providers.\n\n - Cross-Functional Collaboration\n   \n   - Partner with backend, research, and protocol teams to support rollup infrastructure, MEV systems, and next-generation execution environments.\n   \n   - Participate in the envisioning, proofing, and deployment of new L2 infrastructure components and TEE-integrated products.\n\n - Operational Excellence & Open Source\n   \n   - Lead root-cause investigations, reliability reviews, and postmortems for production systems.\n   \n   - Contribute to open-source tooling and documentation that powers the Ethereum ecosystem.\n     \n     \n\n\nWHO YOU ARE\n\n - Seasoned DevOps/Infra Engineer\n   \n   - +4–10 years of experience operating complex production systems. Ideally spanning both traditional infrastructure and crypto-native environments.\n\n - Technical Generalist with Depth\n   \n   - Strong command of Linux, networking, and system internals. You understand how to scale, secure, and debug systems from the OS to the application layer.\n\n - Automation & Tooling Expert\n   \n   - Proficient with modern infrastructure tooling (Terraform, Ansible, Helm, Prometheus, Grafana) and comfortable designing CI/CD pipelines for secure distributed systems.\n\n - Programming Fluency\n   \n   - Familiarity with scripting (Python, Bash) for operational workflows. Ideally skilled in Go or Rust for building automation and integration tooling.\n\n - Collaborative & Curious\n   \n   - You thrive in async, remote-first teams, communicate with clarity, and proactively improve shared systems. You’re deeply curious about MEV, Ethereum, and the frontier of decentralized compute.\n     \n     \n\n\n\nDETAILS THAT MATTER\n\n - Significantly above market rate equity compensation package\n\n - Unlimited PTO with a high level of freedom and autonomy for your work\n\n - Attractive health coverage package for US employees\n\n - $3000 Yearly budget for your individual learning and development goals\n\n - Work alongside the brightest minds in the crypto space\n\n - Help save the world by ensuring crypto remains decentralized, permissionless and censorship-resistant\n\n - Remote working, while we have a preference for EU/US time zones, you can work from anywhere in the world\n\n - Paid travel - 2 x team on-site in different parts of the world per year plus periodic travel to events\n   \n\nAt Flashbots, we are committed to building a diverse and inclusive team. We welcome applications from all qualified candidates regardless of gender, race, ethnicity, religion, sexual orientation, age, or disability status."
    },
    {
      "company": "Stellar Development Foundation",
      "category": "chain",
      "position": "Senior Site Reliability Engineer",
      "level": "senior",
      "location": "New York, NY (Hybrid)",
      "region": [
        "us"
      ],
      "salary": "$150K–$200K",
      "salaryNum": 175000,
      "requirements": "5+年SRE/Infra；AWS/GCP及Linux系统运维；K8s集群；Jenkins/CI-CD；公链基础设施稳定性；监控告警体系。",
      "link": "https://jobs.theblockchainassociation.org/companies/stellar-development-foundation/jobs/66495955-senior-site-reliability-engineer",
      "firstSeen": "2026-05-26",
      "lastSeen": "2026-05-26",
      "id": "stellar-development-foundation||senior-site-reliability-engineer",
      "func": "ops",
      "keywords": [
        "Kubernetes",
        "AWS",
        "GCP",
        "Linux"
      ],
      "duties": [
        "稳定性保障",
        "监控告警"
      ]
    },
    {
      "company": "Kiln",
      "category": "infra",
      "position": "Senior SRE / DevOps Engineer (Blockchain)",
      "level": "senior",
      "location": "Paris / EU 远程 (法、英、意、西、葡、荷)",
      "region": [
        "remote",
        "eu"
      ],
      "salary": "€80K–€100K + equity",
      "salaryNum": 94000,
      "requirements": "6+年SRE/Infra；Kubernetes专家级；Terraform/Helm/GitOps；多链验证者协议部署；SOC 2合规；法语+英语。",
      "link": "https://jobs.ashbyhq.com/kiln.fi/ae5ec77c-f490-4060-a004-15dd00050a30",
      "firstSeen": "2026-05-26",
      "lastSeen": "2026-05-26",
      "id": "kiln||senior-sre-devops-engineer-blockchain",
      "func": "ops",
      "keywords": [
        "Validator/节点",
        "Kubernetes",
        "Terraform",
        "合规"
      ],
      "duties": [
        "部署发布",
        "节点运维",
        "协议/合约开发",
        "多链/跨链",
        "合规风控"
      ]
    },
    {
      "company": "Galaxy Digital",
      "category": "other",
      "position": "Site Reliability Engineer (Blockchain Infrastructure)",
      "level": "senior",
      "location": "香港",
      "region": [
        "hk",
        "asia"
      ],
      "salary": "面议",
      "salaryNum": 130000,
      "requirements": "5+年SRE/DevOps (web3/blockchain)；PoS验证者及数字资产托管高可用基础设施；K8s/Terraform/Flux/Helm；PagerDuty on-call；约5天前发布。",
      "link": "https://job-boards.greenhouse.io/galaxydigitalservices",
      "firstSeen": "2026-05-26",
      "lastSeen": "2026-05-26",
      "id": "galaxy-digital||site-reliability-engineer-blockchain-infrastructure",
      "func": "ops",
      "keywords": [
        "Validator/节点",
        "Kubernetes",
        "Terraform",
        "On-call"
      ],
      "duties": [
        "稳定性保障",
        "故障/值班",
        "部署发布",
        "节点运维"
      ]
    },
    {
      "company": "P2P.org",
      "category": "infra",
      "position": "Senior SRE Engineer - Solana Ecosystem",
      "level": "senior",
      "location": "欧洲远程",
      "region": [
        "remote",
        "eu"
      ],
      "salary": "面议 (可加密货币支付)",
      "salaryNum": 120000,
      "requirements": "Solana验证者/RPC基础设施运维与性能优化；GCP为主 (AWS/on-prem加分)；Go/Rust/Python；密钥安全管理；最大机构质押平台 (TVL $10B+)。",
      "link": "https://cryptocurrencyjobs.co/engineering/p2p-org-senior-sre-engineer-solana-ecosystem/",
      "firstSeen": "2026-05-26",
      "lastSeen": "2026-05-26",
      "id": "p2p-org||senior-sre-engineer-solana-ecosystem",
      "func": "ops",
      "keywords": [
        "Rust",
        "Go",
        "Python",
        "Validator/节点",
        "RPC",
        "Staking",
        "Solana",
        "AWS"
      ],
      "duties": [
        "性能/容量",
        "节点运维",
        "安全/审计",
        "客户/机构对接"
      ]
    },
    {
      "company": "P2P.org",
      "category": "infra",
      "position": "Senior SRE Engineer - Bitcoin Team",
      "level": "senior",
      "location": "欧洲远程",
      "region": [
        "remote",
        "eu"
      ],
      "salary": "面议 (可加密货币支付)",
      "salaryNum": 110000,
      "requirements": "比特币节点大规模基础设施运维；高可用质押平台；监控与故障响应；EU时区；机构级质押提供商。",
      "link": "https://remotive.com/remote-jobs/devops/senior-sre-bitcoin-1973683",
      "firstSeen": "2026-05-26",
      "lastSeen": "2026-05-26",
      "id": "p2p-org||senior-sre-engineer-bitcoin-team",
      "func": "ops",
      "keywords": [
        "Validator/节点",
        "Staking",
        "Bitcoin"
      ],
      "duties": [
        "故障/值班",
        "监控告警",
        "节点运维",
        "客户/机构对接"
      ]
    },
    {
      "company": "Copper.co",
      "category": "other",
      "position": "Principal Site Reliability Engineer",
      "level": "senior",
      "location": "全球远程",
      "region": [
        "remote",
        "eu"
      ],
      "salary": "$140K–$180K",
      "salaryNum": 160000,
      "requirements": "机构级数字资产托管平台稳定性；高可用与容量规划；K8s；可观测性；带架构方向；约一周前发布。",
      "link": "https://web3.career/reliability-jobs",
      "firstSeen": "2026-05-26",
      "lastSeen": "2026-05-26",
      "func": "ops",
      "keywords": [
        "Kubernetes",
        "可观测性"
      ],
      "duties": [
        "架构设计",
        "稳定性保障",
        "性能/容量",
        "部署发布",
        "客户/机构对接"
      ]
    },
    {
      "company": "Bloxstaking (ssv.network)",
      "category": "infra",
      "position": "Senior Site Reliability Engineer",
      "level": "senior",
      "location": "全球远程",
      "region": [
        "remote"
      ],
      "salary": "$82K–$112K",
      "salaryNum": 97000,
      "requirements": "以太坊质押 / 分布式验证者基础设施稳定性；节点监控；K8s；on-call；约一周前发布。",
      "link": "https://web3.career/reliability-jobs",
      "firstSeen": "2026-05-26",
      "lastSeen": "2026-05-26",
      "func": "ops",
      "keywords": [
        "Validator/节点",
        "Staking",
        "Ethereum",
        "Kubernetes",
        "On-call"
      ],
      "duties": [
        "稳定性保障",
        "故障/值班",
        "监控告警",
        "部署发布",
        "节点运维"
      ]
    },
    {
      "company": "Bitpanda",
      "category": "exchange",
      "position": "Senior DevOps Engineer",
      "level": "senior",
      "location": "维也纳, 奥地利",
      "region": [
        "eu"
      ],
      "salary": "$90K–$106K",
      "salaryNum": 98000,
      "requirements": "欧洲合规交易所；CI/CD；AWS；K8s；基础设施自动化；约一周前发布。",
      "link": "https://web3.career/devops-jobs",
      "firstSeen": "2026-05-26",
      "lastSeen": "2026-05-26",
      "func": "ops",
      "keywords": [
        "Kubernetes",
        "AWS",
        "CI/CD",
        "合规"
      ],
      "duties": [
        "部署发布",
        "自动化",
        "合规风控"
      ]
    },
    {
      "company": "Auros",
      "category": "other",
      "position": "Senior DevOps Engineer",
      "level": "senior",
      "location": "全球远程",
      "region": [
        "remote"
      ],
      "salary": "约 $87K",
      "salaryNum": 87000,
      "requirements": "加密做市 / 量化交易基础设施；低延迟系统运维；自动化部署；监控告警；约一周前发布。",
      "link": "https://web3.career/devops-jobs",
      "firstSeen": "2026-05-26",
      "lastSeen": "2026-05-26",
      "func": "ops",
      "keywords": [],
      "duties": [
        "监控告警",
        "性能/容量",
        "部署发布",
        "自动化"
      ]
    },
    {
      "company": "Binance",
      "category": "exchange",
      "position": "Senior DevOps Engineer, Blockchain Kubernetes",
      "level": "senior",
      "location": "曼谷, 泰国",
      "region": [
        "asia"
      ],
      "salary": "面议",
      "salaryNum": 150000,
      "requirements": "区块链节点集群 K8s 运维；多链部署；容器编排；高可用；故障处置；约两周前发布。",
      "link": "https://jobs.lever.co/binance",
      "firstSeen": "2026-05-26",
      "lastSeen": "2026-05-26",
      "func": "ops",
      "keywords": [
        "Validator/节点",
        "Kubernetes"
      ],
      "duties": [
        "故障/值班",
        "部署发布",
        "节点运维",
        "多链/跨链"
      ]
    },
    {
      "company": "Reown (WalletConnect)",
      "category": "infra",
      "position": "Site Reliability Engineer",
      "level": "mid",
      "location": "100% 远程 (无地域限制)",
      "region": [
        "remote"
      ],
      "salary": "面议",
      "salaryNum": 120000,
      "requirements": "2+ 年 Linux Sysadmin / SRE / DevOps；网络协议 (TCP/IP, UDP, ICMP)；Rust / TypeScript / Go 之一；钱包连接基础设施。",
      "link": "https://cryptocurrencyjobs.co/engineering/walletconnect-site-reliability-engineer/",
      "firstSeen": "2026-05-26",
      "lastSeen": "2026-05-26",
      "func": "ops",
      "keywords": [
        "Rust",
        "Go",
        "TypeScript",
        "Wallet",
        "Linux"
      ],
      "duties": [
        "稳定性保障",
        "协议/合约开发"
      ]
    },
    {
      "company": "Triton One",
      "category": "infra",
      "position": "Senior SRE / System Administrator (Solana RPC)",
      "level": "senior",
      "location": "全球远程",
      "region": [
        "remote"
      ],
      "salary": "面议",
      "salaryNum": 160000,
      "requirements": "运营全球最大 Solana RPC 集群；7x24 生产可用性 / 延迟 / 容量；自动化与弹性架构；资深系统管理 / SRE 经验。",
      "link": "https://cryptojobslist.com/sre",
      "firstSeen": "2026-05-26",
      "lastSeen": "2026-05-26",
      "func": "ops",
      "keywords": [
        "RPC",
        "Solana"
      ],
      "duties": [
        "架构设计",
        "稳定性保障",
        "性能/容量",
        "自动化",
        "节点运维",
        "社区运营"
      ]
    },
    {
      "company": "Binance",
      "category": "exchange",
      "position": "Senior Site Reliability Engineer (SRE) / Rust Developer",
      "level": "senior",
      "location": "Asia / 远程",
      "region": [
        "remote",
        "asia",
        "cn"
      ],
      "salary": "面议 (Levels.fyi 估算 SWE L5 在迪拜约 AED 514K–626K)",
      "salaryNum": 180000,
      "requirements": "5+ 年；Rust / Node.js；高并发实时生产系统；自研内部工具；故障排查；线上稳定性保障。",
      "link": "https://jobs.lever.co/binance",
      "lastSeen": "2026-05-26",
      "func": "ops",
      "keywords": [
        "Rust",
        "Node.js",
        "Validator/节点"
      ],
      "duties": [
        "稳定性保障",
        "故障/值班",
        "节点运维"
      ]
    },
    {
      "company": "Binance",
      "category": "exchange",
      "position": "Big Data SRE / DevOps Leader",
      "level": "head",
      "location": "新加坡 / 迪拜 / 远程",
      "region": [
        "sg",
        "dubai",
        "remote",
        "asia"
      ],
      "salary": "面议 (Director 级，年包通常 250K+ USD)",
      "salaryNum": 250000,
      "requirements": "带领大数据 SRE/DevOps 团队；Hadoop/Spark/Flink 平台稳定性；K8s；CI/CD；多 region 容灾。",
      "link": "https://www.nodeflair.com/jobs/binance-big-data-sre-devops-leader-9568",
      "lastSeen": "2026-05-26",
      "func": "ops",
      "keywords": [
        "Kubernetes",
        "CI/CD",
        "Flink",
        "Spark"
      ],
      "duties": [
        "团队管理",
        "稳定性保障",
        "部署发布"
      ]
    },
    {
      "company": "Binance",
      "category": "exchange",
      "position": "Senior SRE, Trading Technologies (Node.js)",
      "level": "senior",
      "location": "Asia / 远程",
      "region": [
        "remote",
        "asia"
      ],
      "salary": "面议",
      "salaryNum": 170000,
      "requirements": "5+ 年 Node.js；测试自动化平台 (Playwright/Puppeteer/WDIO)；分布式测试环境运维。",
      "link": "https://jobs.lever.co/binance/3372ed44-94ed-4f48-b448-91957f2b3e95",
      "lastSeen": "2026-05-26",
      "func": "ops",
      "keywords": [
        "Node.js",
        "Validator/节点"
      ],
      "duties": [
        "自动化",
        "节点运维"
      ],
      "description": "Binance is a leading global blockchain ecosystem behind the world’s largest cryptocurrency exchange by trading volume and registered users. We are trusted by 300+ million people in 100+ countries for our industry-leading security, user fund transparency, trading engine speed, deep liquidity, and an unmatched portfolio of digital-asset products. Binance offerings range from trading and finance to education, research, payments, institutional services, Web3 features, and more. We leverage the power of digital assets and blockchain to build an inclusive financial ecosystem to advance the freedom of money and improve financial access for people around the world.\n\n\nWe’re looking for a Senior Site Reliability Engineer Engineer to take ownership of building and evolving our internal monitoring and alerting systems that keep our high-load, real-time production systems running smoothly. If you thrive on solving complex challenges at scale and have experience in DevOps/SRE practices and monitoring performance-critical applications, this role could be a great fit.\n\nIn this position, you will design, build, and continuously improve our internal monitoring and alerting tools. Test and validate solutions in real production environments. Collaborate closely with Development, QA, and DevOps teams to ensure system reliability and performance. \n\nThis is a full-time remote role, with a preference for candidates based in European time zones.\n\nResponsibilities：\n• Design, develop, and maintain robust monitoring and alerting tools for mission-critical systems\n• Automate production testing to ensure reliability and scalability\n• Proactively identify, troubleshoot, and resolve performance and software issues\n• Track, update, and drive resolution of technical problems across teams\n• Suggest and implement architectural enhancements and process improvements\n• Research, evaluate, and recommend new technologies and vendor solutions\n• Safeguard critical systems by applying best-in-class security practices and solutions\n\nRequirements：\n• At least 7+ years of experience as a Node.js / JavaScript developer, ideally with a background in monitoring and supporting large-scale production systems\n• Strong knowledge of REST API design and WebSockets\n• Hands-on experience with cloud platforms such as AWS or GCP\n• Solid understanding of distributed systems at scale\n• Proficiency working in a Linux environment\n• Excellent communication skills in English, with the ability to explain complex concepts clearly and logically\n\nOptional：\n• Familiarity with tools such as Docker, Nginx, Prometheus, Grafana, etc.\n• Experience working with time-series databases\n• Understanding of low-level programming languages (e.g., C, C++, Rust)\n• Previous contributions to open-source projects\n\nWhy Binance\n• Shape the future with the world’s leading blockchain ecosystem\n• Collaborate with world-class talent in a user-centric global organization with a flat structure\n• Tackle unique, fast-paced projects with autonomy in an innovative environment\n• Thrive in a results-driven workplace with opportunities for career growth and continuous learning\n• Competitive salary and company benefits\n• Work-from-home arrangement (the arrangement may vary depending on the work nature of the business team)\n\nBinance is committed to being an equal opportunity employer. We believe that having a diverse workforce is fundamental to our success.\nBy submitting a job application, you confirm that you have read and agree to our Candidate Privacy Notice."
    },
    {
      "company": "Coinbase",
      "category": "exchange",
      "position": "Staff Site Reliability Engineer - Platform",
      "level": "senior",
      "location": "Remote - USA / 印度",
      "region": [
        "remote",
        "us"
      ],
      "salary": "约 $200K–$280K + bonus + equity",
      "salaryNum": 240000,
      "requirements": "7+ 年；高吞吐低延迟系统设计；Datadog/Kibana 等可观测性；SRE 教练，赋能业务工程团队。",
      "link": "https://www.coinbase.com/careers/positions/6237252",
      "lastSeen": "2026-05-26",
      "func": "ops",
      "keywords": [
        "可观测性"
      ],
      "duties": [
        "架构设计",
        "稳定性保障",
        "性能/容量"
      ]
    },
    {
      "company": "Coinbase",
      "category": "exchange",
      "position": "Staff SRE, Core AI Infrastructure",
      "level": "senior",
      "location": "Remote - USA",
      "region": [
        "remote",
        "us"
      ],
      "salary": "约 $210K–$290K + equity",
      "salaryNum": 250000,
      "requirements": "AI/ML 基础设施稳定性；GPU 集群；Kubernetes；模型服务 SLO。",
      "link": "https://www.crypto-careers.com/jobs/525570987-staff-site-reliability-engineer-core-ai-infrastructure-at-coinbase",
      "lastSeen": "2026-05-26",
      "func": "ops",
      "keywords": [
        "Kubernetes",
        "SLO/SLA",
        "Machine Learning",
        "AI"
      ],
      "duties": [
        "稳定性保障"
      ]
    },
    {
      "company": "Coinbase",
      "category": "exchange",
      "position": "Senior SRE, Identity Platform",
      "level": "senior",
      "location": "Remote - USA",
      "region": [
        "remote",
        "us"
      ],
      "salary": "约 $180K–$240K",
      "salaryNum": 210000,
      "requirements": "身份认证 / 风控系统稳定性；高可用；可观测性。",
      "link": "https://www.coinbase.com/careers/positions/7516971",
      "lastSeen": "2026-05-26",
      "func": "ops",
      "keywords": [
        "可观测性"
      ],
      "duties": [
        "稳定性保障",
        "合规风控"
      ]
    },
    {
      "company": "Coinbase",
      "category": "exchange",
      "position": "Site Reliability Engineer, IT Infrastructure",
      "level": "mid",
      "location": "Remote - USA",
      "region": [
        "remote",
        "us"
      ],
      "salary": "约 $140K–$190K",
      "salaryNum": 165000,
      "requirements": "企业 IT 基础设施 / 网络 / 端点；K8s；混合云。",
      "link": "https://www.coinbase.com/careers/positions/7559168",
      "lastSeen": "2026-05-26",
      "func": "ops",
      "keywords": [
        "Kubernetes"
      ],
      "duties": [
        "稳定性保障"
      ]
    },
    {
      "company": "OKX",
      "category": "exchange",
      "position": "SRE 工程师 (CEX 业务方向)",
      "level": "mid",
      "location": "香港 (Base)",
      "region": [
        "hk",
        "cn"
      ],
      "salary": "60K–100K HKD / 月 (约 92K–155K USD/年)",
      "salaryNum": 120000,
      "requirements": "K8s / 容器；高并发交易系统；AWS；线上故障处置；香港 Base 不接受远程。",
      "link": "https://www.okx.com/en-us/join-us",
      "lastSeen": "2026-05-26",
      "func": "ops",
      "keywords": [
        "Kubernetes",
        "AWS"
      ],
      "duties": [
        "故障/值班"
      ]
    },
    {
      "company": "OKX",
      "category": "exchange",
      "position": "数据平台运维 / 大数据 SRE",
      "level": "senior",
      "location": "香港 / 新加坡",
      "region": [
        "hk",
        "sg",
        "cn"
      ],
      "salary": "面议 (Senior 级)",
      "salaryNum": 150000,
      "requirements": "OLAP / 大数据集群运维；ClickHouse/Doris/Flink；监控告警体系；P0 故障响应。",
      "link": "https://www.okx.com/en-us/join-us",
      "lastSeen": "2026-05-26",
      "func": "ops",
      "keywords": [
        "Flink",
        "ClickHouse"
      ],
      "duties": [
        "故障/值班",
        "监控告警"
      ]
    },
    {
      "company": "Bybit",
      "category": "exchange",
      "position": "Senior SRE / Infrastructure Engineer",
      "level": "senior",
      "location": "新加坡 / 迪拜 (Global HQ)",
      "region": [
        "sg",
        "dubai",
        "asia"
      ],
      "salary": "约 $130K–$200K (基于 NodeFlair / Glassdoor SG)",
      "salaryNum": 165000,
      "requirements": "高频交易撮合系统稳定性；多活；金融级 SLA；K8s；可观测性。",
      "link": "https://www.bybit.com/en/promo/global/careers",
      "lastSeen": "2026-05-26",
      "func": "ops",
      "keywords": [
        "Kubernetes",
        "可观测性",
        "SLO/SLA"
      ],
      "duties": [
        "稳定性保障"
      ]
    },
    {
      "company": "Bybit",
      "category": "exchange",
      "position": "DevOps / Platform Engineer",
      "level": "mid",
      "location": "新加坡",
      "region": [
        "sg",
        "asia"
      ],
      "salary": "约 SGD 8K–14K/月",
      "salaryNum": 110000,
      "requirements": "CI/CD；K8s；Terraform；公有云；故障值班。",
      "link": "https://nodeflair.com/companies/bybit",
      "lastSeen": "2026-05-26",
      "func": "ops",
      "keywords": [
        "Kubernetes",
        "Terraform",
        "CI/CD"
      ],
      "duties": [
        "故障/值班",
        "部署发布"
      ]
    },
    {
      "company": "Kraken",
      "category": "exchange",
      "position": "SRE / DevOps Engineer (Developer Experience)",
      "level": "mid",
      "location": "全球远程 (70+ 国家)",
      "region": [
        "remote"
      ],
      "salary": "$96K–$192K + equity + bonus",
      "salaryNum": 144000,
      "requirements": "3+ 年 DevOps；Rust 系系统语言；Docker/Terraform；Prometheus/Grafana；Bash/Python。",
      "link": "https://jobs.ashbyhq.com/kraken.com/0e512814-a14c-4ea7-8391-7d1c3e540bb9",
      "lastSeen": "2026-05-26",
      "func": "ops",
      "keywords": [
        "Rust",
        "Python",
        "Docker",
        "Terraform",
        "Prometheus",
        "Grafana"
      ],
      "duties": []
    },
    {
      "company": "Kraken",
      "category": "exchange",
      "position": "Data Center Operations Engineer",
      "level": "mid",
      "location": "Remote - USA",
      "region": [
        "remote",
        "us"
      ],
      "salary": "约 $100K–$160K",
      "salaryNum": 130000,
      "requirements": "物理机房 / 裸金属 / 硬件运维；网络；冷备灾备。",
      "link": "https://www.kraken.com/careers",
      "lastSeen": "2026-05-26",
      "func": "ops",
      "keywords": [],
      "duties": []
    },
    {
      "company": "Crypto.com",
      "category": "exchange",
      "position": "Senior Cloud Infrastructure Engineer",
      "level": "senior",
      "location": "新加坡 / 香港 / 远程",
      "region": [
        "sg",
        "hk",
        "asia",
        "remote"
      ],
      "salary": "$177K–$247K (公开聚合)",
      "salaryNum": 210000,
      "requirements": "AWS/GCP；K8s；Terraform；多 region；合规与安全；交易所核心系统 SLA。",
      "link": "https://crypto.com/careers",
      "lastSeen": "2026-05-26",
      "func": "ops",
      "keywords": [
        "Kubernetes",
        "Terraform",
        "AWS",
        "GCP",
        "SLO/SLA",
        "合规"
      ],
      "duties": [
        "稳定性保障",
        "安全/审计",
        "合规风控"
      ]
    },
    {
      "company": "Bitget",
      "category": "exchange",
      "position": "SRE / 业务运维负责人",
      "level": "head",
      "location": "新加坡 / 香港",
      "region": [
        "sg",
        "hk",
        "asia",
        "cn"
      ],
      "salary": "面议",
      "salaryNum": 180000,
      "requirements": "带团队；交易所核心业务运维；故障复盘；SLO 体系；50+ 国家全球布局。",
      "link": "https://www.bitget.com/promotion/hire",
      "lastSeen": "2026-05-26",
      "func": "ops",
      "keywords": [
        "SLO/SLA"
      ],
      "duties": [
        "团队管理",
        "稳定性保障",
        "故障/值班"
      ]
    },
    {
      "company": "Gate.io",
      "category": "exchange",
      "position": "SRE / DevOps 工程师",
      "level": "mid",
      "location": "远程 / 全球",
      "region": [
        "remote"
      ],
      "salary": "面议 (Web3.career 显示 28 个公开岗位)",
      "salaryNum": 120000,
      "requirements": "交易系统运维；监控告警；K8s；中英文工作环境。",
      "link": "https://beincrypto.com/jobs/company/gate-io/",
      "lastSeen": "2026-05-26",
      "func": "ops",
      "keywords": [
        "Kubernetes"
      ],
      "duties": [
        "监控告警"
      ]
    },
    {
      "company": "KuCoin",
      "category": "exchange",
      "position": "Infrastructure / Cloud Engineer",
      "level": "mid",
      "location": "新加坡 / 远程",
      "region": [
        "sg",
        "asia",
        "remote"
      ],
      "salary": "面议",
      "salaryNum": 110000,
      "requirements": "公有云；K8s；CI/CD；高并发；合规要求。",
      "link": "https://www.kucoin.com/careers",
      "lastSeen": "2026-05-26",
      "func": "ops",
      "keywords": [
        "Kubernetes",
        "CI/CD",
        "合规"
      ],
      "duties": [
        "部署发布",
        "合规风控"
      ]
    },
    {
      "company": "Ethereum Foundation",
      "category": "chain",
      "position": "Infrastructure / DevOps Engineer",
      "level": "senior",
      "location": "Berlin / 远程",
      "region": [
        "eu",
        "remote"
      ],
      "salary": "约 €110K–€180K (非营利机构基准)",
      "salaryNum": 160000,
      "requirements": "Go / Rust / Python；Linux；Docker；支撑 Ethereum 网络底层基础设施；偏研究型团队。",
      "link": "https://jobs.ashbyhq.com/ethereum-foundation",
      "lastSeen": "2026-05-26",
      "func": "ops",
      "keywords": [
        "Rust",
        "Go",
        "Python",
        "Ethereum",
        "Docker",
        "Linux"
      ],
      "duties": []
    },
    {
      "company": "Ethereum Foundation",
      "category": "chain",
      "position": "DevOps Intern (Summer 2026)",
      "level": "mid",
      "location": "Berlin / 远程",
      "region": [
        "eu",
        "remote"
      ],
      "salary": "实习薪资 (12 周)",
      "salaryNum": 60000,
      "requirements": "在校生；Go/Rust/Python；Linux；Docker；EF 基础设施团队。",
      "link": "https://simplify.jobs/p/dab03131-363c-47e6-bbc5-d70f315100a0/DevOps-Intern",
      "lastSeen": "2026-05-26",
      "func": "ops",
      "keywords": [
        "Rust",
        "Go",
        "Python",
        "Docker",
        "Linux"
      ],
      "duties": []
    },
    {
      "company": "Solana Foundation",
      "category": "chain",
      "position": "Infrastructure Engineer (Product)",
      "level": "senior",
      "location": "全球远程",
      "region": [
        "remote"
      ],
      "salary": "约 $150K–$230K (CryptoJobsList 估算)",
      "salaryNum": 190000,
      "requirements": "5+ 年 SRE/Infra；Terraform/Pulumi；AWS/GCP/Cloudflare；Prometheus/Grafana/Datadog；On-call；区块链 tooling 经验。",
      "link": "https://jobs.solana.com/companies/solana-foundation-2",
      "lastSeen": "2026-05-26",
      "func": "ops",
      "keywords": [
        "Terraform",
        "AWS",
        "GCP",
        "Prometheus",
        "Grafana",
        "On-call"
      ],
      "duties": [
        "故障/值班"
      ]
    },
    {
      "company": "Aptos Labs",
      "category": "chain",
      "position": "Senior Infrastructure / SRE Engineer",
      "level": "senior",
      "location": "Palo Alto / NYC / 远程",
      "region": [
        "us",
        "remote"
      ],
      "salary": "约 $180K–$260K + token",
      "salaryNum": 220000,
      "requirements": "L1 节点运维；validator 网络稳定性；K8s；监控；分布式系统。",
      "link": "https://job-boards.greenhouse.io/aptoslabs",
      "lastSeen": "2026-05-26",
      "func": "ops",
      "keywords": [
        "Validator/节点",
        "Kubernetes"
      ],
      "duties": [
        "稳定性保障",
        "监控告警",
        "节点运维"
      ]
    },
    {
      "company": "Sui Foundation / Mysten Labs",
      "category": "chain",
      "position": "Network Reliability / Infrastructure Engineer",
      "level": "senior",
      "location": "100% 远程",
      "region": [
        "remote"
      ],
      "salary": "约 $170K–$240K",
      "salaryNum": 200000,
      "requirements": "Validator / 节点运维；Rust 周边工具；多链网络稳定性。",
      "link": "https://web3.career/web3-companies/suifoundation",
      "lastSeen": "2026-05-26",
      "func": "ops",
      "keywords": [
        "Rust",
        "Validator/节点"
      ],
      "duties": [
        "稳定性保障",
        "节点运维",
        "多链/跨链"
      ]
    },
    {
      "company": "Offchain Labs (Arbitrum)",
      "category": "chain",
      "position": "Senior Quality / SRE Engineer, Platform",
      "level": "senior",
      "location": "Remote / NYC",
      "region": [
        "us",
        "remote"
      ],
      "salary": "约 $180K–$250K + token",
      "salaryNum": 215000,
      "requirements": "L2 协议测试与稳定性；Sequencer / RPC 高可用；自动化测试管道；与 SRE 协作排障。",
      "link": "https://jobs.lever.co/offchainlabs/ecb0944a-fd48-43c6-95d1-1d4b228c86b9",
      "lastSeen": "2026-05-26",
      "func": "ops",
      "keywords": [
        "L2/Rollup",
        "RPC"
      ],
      "duties": [
        "稳定性保障",
        "故障/值班",
        "自动化",
        "节点运维",
        "协议/合约开发"
      ]
    },
    {
      "company": "Polygon Labs",
      "category": "chain",
      "position": "Site Reliability Engineer",
      "level": "senior",
      "location": "远程 (EU/Asia)",
      "region": [
        "remote",
        "eu",
        "asia"
      ],
      "salary": "约 $150K–$220K",
      "salaryNum": 185000,
      "requirements": "PoS 网络 / zkEVM 节点稳定性；K8s；多链 RPC SLA；可观测性。",
      "link": "https://polygon.technology/careers",
      "lastSeen": "2026-05-26",
      "func": "ops",
      "keywords": [
        "L2/Rollup",
        "Validator/节点",
        "RPC",
        "Kubernetes",
        "可观测性",
        "SLO/SLA"
      ],
      "duties": [
        "稳定性保障",
        "节点运维",
        "多链/跨链"
      ]
    },
    {
      "company": "Phantom",
      "category": "defi",
      "position": "Staff SRE Engineer",
      "level": "senior",
      "location": "全球远程",
      "region": [
        "remote"
      ],
      "salary": "$200K–$260K (公开 JD 范围)",
      "salaryNum": 230000,
      "requirements": "K8s 集群运维；多链节点；自动化；性能优化；钱包后端稳定性；on-call。",
      "link": "https://jobs.ashbyhq.com/phantom",
      "lastSeen": "2026-05-26",
      "func": "ops",
      "keywords": [
        "Validator/节点",
        "Wallet",
        "Kubernetes",
        "On-call"
      ],
      "duties": [
        "稳定性保障",
        "故障/值班",
        "性能/容量",
        "自动化",
        "节点运维",
        "多链/跨链"
      ],
      "description": "Phantom https://phantom.com is the modern money app used by tens of millions around the world. Our product combines everything people need to manage, spend, and grow their money in one simple, intuitive experience. Phantom brings all the control and flexibility of crypto-powered finance, without unnecessary complexity, into mainstream consumer finance.\n\nBy combining industry-leading security with thoughtfully designed tools, Phantom makes powerful financial tools feel approachable and easy to use. This focus on speed, control, and user experience has fueled rapid growth, with a community of 20M+ people, reaching #1 in the Google Play Store finance category, and consistently ranking as a Top 50 app across all categories, alongside some of the most recognizable consumer technology platforms in the world.\n\n\nRESPONSIBILITIES\n\n - Feature development: You will be owning features on our web platforms – currently the Phantom Extension https://phantom.app/download and our website.\n\n - New initiatives and products: You will be leading initiatives to add support for other blockchains to Phantom, and to launch new complementary products or infrastructure.\n\n - Interfacing with users: You will be interfacing directly with end-users and developers building on Phantom – supporting them and collecting feedback to inform the direction of the product.\n\n - Team building: You will be working with the team to create and foster a culture of raising the bar with each new hire.\n\n\nQUALIFICATIONS\n\n - Bachelors degree in Computer Science or related technical field or equivalent practical experience\n\n - 5+ years full-time software engineering experience with some of the following technologies:\n   \n   - React / Typescript / React-Query\n   \n   - Solana web3.js / ethers.js\n\n - Demonstrated interest in open and community-driven platforms\n\n - English language proficiency\n\n - Nice-To-Have: experience in a blockchain based project\n\n\nBENEFITS\n\n - Competitive salary and equity\n\n - Comprehensive insurance (medical/dental/vision) — 100% covered\n\n - Stipend for your ideal remote / WFH set-up: laptop, headphones, and any other work gear you may need\n\n - Flexible hours and a long-standing, supportive remote environment\n\n - Unlimited vacation: Take time when you need it (and we really mean it!)\n\n - 401(k) retirement plan\n\n - Wellness benefit\n\n - Daily lunch benefit\n\nThe target base salary for this role will range between $180,000 to $220,000 with the addition of equity and benefits. This is determined by a few factors including your skillset, prior relevant experience, quality of interviews and market factors (such as location) at the point in time of offer.\n\n#LI-DNP\n\nWe strongly encourage candidates of all backgrounds to apply. We believe that our work is stronger with a variety of perspectives, and we’re eager to further diversify our company. If you have a background that you feel would make an impact at Phantom, please consider applying. We’re committed to building an inclusive, supportive place for you to do the best work of your career.\n\nBy submitting your resume and application materials, you acknowledge and agree that Phantom Technologies, Inc. (\"Phantom\") collects and processes your personal information (including application materials, interview records, and related data) to evaluate your candidacy. Phantom may use AI-powered tools and third-party service providers for transcription, note-taking, scheduling, and other administrative tasks. Phantom does not sell your information and your materials will be handled securely and in accordance with applicable data protection laws. To learn more or for any questions, contact privacy@phantom.app."
    },
    {
      "company": "Consensys (MetaMask)",
      "category": "defi",
      "position": "Senior Staff DevOps Engineer - MetaMask",
      "level": "head",
      "location": "全球远程",
      "region": [
        "remote"
      ],
      "salary": "$190K–$263K",
      "salaryNum": 225000,
      "requirements": "MetaMask 后端 DevOps 资深；带方向，与 SRE/Dev 协同；多区域部署；CI/CD；安全合规。",
      "link": "https://weworkremotely.com/remote-jobs/consensys-senior-staff-devops-engineer-metamask",
      "lastSeen": "2026-05-26",
      "func": "ops",
      "keywords": [
        "CI/CD",
        "合规"
      ],
      "duties": [
        "部署发布",
        "安全/审计",
        "合规风控"
      ]
    },
    {
      "company": "Uniswap Labs",
      "category": "defi",
      "position": "Infrastructure Engineer",
      "level": "senior",
      "location": "NYC / Remote",
      "region": [
        "us",
        "remote"
      ],
      "salary": "约 $180K–$240K + equity",
      "salaryNum": 210000,
      "requirements": "微服务架构；DeFi 协议后端 (Aave/Uniswap 类) 知识；indexer / 数据；高 QPS。",
      "link": "https://jobs.ashbyhq.com/uniswap",
      "lastSeen": "2026-05-26",
      "func": "ops",
      "keywords": [
        "DeFi"
      ],
      "duties": [
        "架构设计",
        "协议/合约开发"
      ],
      "description": "Uniswap Labs is a core contributor to the Uniswap Protocol, the world’s largest DEX, with over $4 trillion in volume across 17 chains. It builds products that help millions access the protocol, including the Uniswap Web App, Wallet, and Trading API. Uniswap Labs is also the primary technical provider for Unichain, a DeFi-native Ethereum Layer 2 built to be the home for liquidity across chains.\n\nWhen you join Uniswap, you become part of a team that's reshaping the way value flows on the internet.\n\nAs a Staff Backend Engineer, you will play a pivotal role in shaping the architecture and strategy of our systems. This is a unique opportunity to lead technical initiatives, drive innovation, and ensure Uniswap remains at the forefront of crypto.\n\nWhat You'll Do\n\n - Drive end to end execution of technical projects, from ideation and design to deployment.\n\n - Design and build resilient, large-scale systems from the ground up with a focus on reliability, scalability, and performance.\n\n - Write high quality and well tested code, and review code from other team members.\n\n - Provide thought leadership and guide peers in navigating complex architectural and coding decisions.\n\n - Champion best practices and technical excellence across the engineering organization.\n\n - Spearhead strategic technical initiatives that impact multiple engineering pods and deliver organization-wide improvements.\n\nWhat You'll Bring\n\n - 10+ years of hands-on experience building and maintaining large-scale, production-level systems.\n\n - Experience as a Technical Lead or in a similar leadership capacity.\n\n - Exceptional coding skills, with expertise in cloud architecture, distributed systems, and algorithms.\n\n - Proven ability to independently lead projects, including requirement gathering, system design, implementation, testing, and deployment.\n\n - A track record of mentoring and guiding engineers to achieve their potential.\n\n - A 0→1 mindset with the ability to build systems and processes from scratch.\n\n - Deep interest in modern development practices and a passion for shaping the future of crypto technology.\n\nNice to Have\n\n - Prior work with time-series based monitoring and observability systems.\n\n - Knowledge of TypeScript, Go, GraphQL, and AWS\n\n - A degree in Computer Science or a related field.\n\n - A love for unicorns\n\nMinimum full-time salary of $207,000-$259,000. Disclosure in accordance with New York City's Pay Transparency Law. Full Time employees at Uniswap Labs are also eligible for other compensation elements, including tokens, and benefits, dependent on the position type.\n\nUniswap Labs' Full-Time employee benefits include company-paid medical, dental, & vision for you and your dependents, wellness offerings including a partnership with Equinox Fitness Clubs, 401(k) with 4% employer contribution, annual $1,500 education stipend, unlimited and encouraged time off, up to 16 weeks paid parental leave, home office setup stipend for remote employees and daily lunches at NY headquarters (all benefits are subject to applicable taxes and based on eligibility).\n\nUniswap Labs is committed to diversity in our workforce and is proud to be an Equal Opportunity Employer (EEO). We provide employment opportunities without regard to age, race, color, ancestry, national origin, religion, disability (including gender dysphoria and similar gender-related conditions), sex, gender identity or expression, sexual orientation (including actual or perceived heterosexuality, homosexuality, bisexuality, and asexuality), veteran status, military status, domestic violence victim status, reproductive health decision making or any other protected category. In addition, Uniswap Labs participates in E-Verify. You can view the E-Verify poster here https://www.e-verify.gov/sites/default/files/everify/posters/EVerifyParticipationPoster.pdf and the Right to Work poster here https://www.justice.gov/crt/case-document/file/1133936/dl."
    },
    {
      "company": "DeBank / Rabby",
      "category": "defi",
      "position": "SRE / 后端 (中文区)",
      "level": "mid",
      "location": "新加坡 / 远程",
      "region": [
        "sg",
        "cn",
        "remote",
        "asia"
      ],
      "salary": "$5K–$13K USD/月 (折合 60K–155K USD/年)",
      "salaryNum": 100000,
      "requirements": "多链数据接入；indexer；K8s；钱包后端；DeFi 资产引擎稳定性。",
      "link": "https://www.v2ex.com/t/950597",
      "lastSeen": "2026-05-26",
      "func": "ops",
      "keywords": [
        "DeFi",
        "Wallet",
        "Kubernetes"
      ],
      "duties": [
        "稳定性保障",
        "多链/跨链"
      ]
    },
    {
      "company": "Pharos (区块链初创)",
      "category": "defi",
      "position": "DevOps / SRE (C++ 区块链)",
      "level": "senior",
      "location": "纽约 / 湾区 / 香港 / 新加坡 / 远程",
      "region": [
        "us",
        "hk",
        "sg",
        "cn",
        "remote",
        "asia"
      ],
      "salary": "$80K–$200K (按经验)",
      "salaryNum": 140000,
      "requirements": "C++ 区块链节点；高并发；Linux；性能调优；远程友好；中英文。",
      "link": "https://www.v2ex.com/t/1084148",
      "lastSeen": "2026-05-26",
      "func": "ops",
      "contact": "gochendong (V2EX)",
      "contactInfo": "gochendong@gmail.com",
      "keywords": [
        "C++",
        "Validator/节点",
        "Linux"
      ],
      "duties": [
        "性能/容量",
        "节点运维"
      ]
    },
    {
      "company": "AWS 区块链节点服务 (中文招聘)",
      "category": "infra",
      "position": "区块链节点运维工程师 (DevOps/SRE)",
      "level": "mid",
      "location": "全远程 (中文)",
      "region": [
        "remote",
        "cn"
      ],
      "salary": "面议 (按经验)",
      "salaryNum": 90000,
      "requirements": "多链节点部署、监控、优化；线上故障独立处置；性能优化；对 Web3 Infra 持续兴趣。",
      "link": "https://www.v2ex.com/t/1210793",
      "lastSeen": "2026-05-26",
      "func": "ops",
      "contact": "bobbychen (V2EX)",
      "contactInfo": "bobbychen1992@protonmail.com",
      "keywords": [
        "Validator/节点"
      ],
      "duties": [
        "故障/值班",
        "监控告警",
        "性能/容量",
        "部署发布",
        "节点运维",
        "多链/跨链"
      ]
    },
    {
      "company": "Alchemy",
      "category": "infra",
      "position": "Director of Engineering, Infrastructure & Platform",
      "level": "head",
      "location": "NYC / SF / 远程",
      "region": [
        "us",
        "remote"
      ],
      "salary": "约 $280K–$420K + equity (Director 级)",
      "salaryNum": 350000,
      "requirements": "拥有基础设施 / 平台战略与执行；带 SRE/Platform 团队；高吞吐分布式区块链系统；公司级稳定性。",
      "link": "https://www.alchemy.com/careers",
      "lastSeen": "2026-05-26",
      "func": "ops",
      "keywords": [],
      "duties": [
        "团队管理",
        "稳定性保障"
      ]
    },
    {
      "company": "Alchemy",
      "category": "infra",
      "position": "Senior Infrastructure / SRE Engineer",
      "level": "senior",
      "location": "Remote",
      "region": [
        "us",
        "remote"
      ],
      "salary": "$190K–$270K",
      "salaryNum": 230000,
      "requirements": "5+ 年；SLO/error budget 框架；OpenTelemetry/Prometheus/Grafana；AWS/GCP；K8s；多 region；Terraform/Helm/ArgoCD。",
      "link": "https://www.alchemy.com/careers",
      "lastSeen": "2026-05-26",
      "func": "ops",
      "keywords": [
        "Kubernetes",
        "Terraform",
        "AWS",
        "GCP",
        "Prometheus",
        "Grafana",
        "SLO/SLA"
      ],
      "duties": [
        "稳定性保障"
      ]
    },
    {
      "company": "QuickNode",
      "category": "infra",
      "position": "Senior Infrastructure Engineer",
      "level": "senior",
      "location": "全球远程 (HQ 迈阿密)",
      "region": [
        "remote",
        "us"
      ],
      "salary": "$117K–$249K",
      "salaryNum": 180000,
      "requirements": "区块链 RPC 高性能服务；多链节点；性能与延迟优化；SOC 2 / ISO 27001 合规栈。",
      "link": "https://jobs.ashbyhq.com/quicknode",
      "lastSeen": "2026-05-26",
      "func": "ops",
      "keywords": [
        "Validator/节点",
        "RPC",
        "合规"
      ],
      "duties": [
        "性能/容量",
        "节点运维",
        "多链/跨链",
        "合规风控"
      ]
    },
    {
      "company": "Chainstack",
      "category": "infra",
      "position": "Infrastructure Engineer (EU / LATAM 时区)",
      "level": "mid",
      "location": "全球远程",
      "region": [
        "remote",
        "eu"
      ],
      "salary": "USD 计薪 + stock options",
      "salaryNum": 130000,
      "requirements": "Incident management；K8s；多云；RPC / 节点服务；客户级 SLA；前沿区块链 stack。",
      "link": "https://web3.career/web3-companies/chainstack",
      "lastSeen": "2026-05-26",
      "func": "ops",
      "keywords": [
        "Validator/节点",
        "RPC",
        "Kubernetes",
        "SLO/SLA"
      ],
      "duties": [
        "稳定性保障",
        "故障/值班",
        "节点运维",
        "客户/机构对接"
      ]
    },
    {
      "company": "Blockdaemon",
      "category": "infra",
      "position": "Senior SRE / Platform Engineer",
      "level": "senior",
      "location": "全球远程 / 都柏林 / NYC",
      "region": [
        "remote",
        "us",
        "eu"
      ],
      "salary": "$130K–$250K (Web3.career 区间)",
      "salaryNum": 190000,
      "requirements": "30+ 链节点托管 / staking；K8s 大规模；合规与机构客户 SLA；DevOps Security。",
      "link": "https://www.blockdaemon.com/careers",
      "lastSeen": "2026-05-26",
      "func": "ops",
      "keywords": [
        "Validator/节点",
        "Staking",
        "Kubernetes",
        "SLO/SLA",
        "合规"
      ],
      "duties": [
        "稳定性保障",
        "节点运维",
        "安全/审计",
        "合规风控",
        "客户/机构对接"
      ]
    },
    {
      "company": "Ankr",
      "category": "infra",
      "position": "Infrastructure / SRE Engineer",
      "level": "mid",
      "location": "远程",
      "region": [
        "remote"
      ],
      "salary": "$65K–$95K (公开聚合，岗位较少)",
      "salaryNum": 80000,
      "requirements": "多链 RPC；Validator；容器化；监控；岗位放出节奏不稳定。",
      "link": "https://cryptojobslist.com/companies/ankr",
      "lastSeen": "2026-05-26",
      "func": "ops",
      "keywords": [
        "Validator/节点",
        "RPC"
      ],
      "duties": [
        "监控告警",
        "节点运维",
        "多链/跨链"
      ]
    },
    {
      "company": "Chainalysis",
      "category": "other",
      "position": "Senior Infrastructure Engineer (Investigations / Gov)",
      "level": "senior",
      "location": "US / EU / 远程",
      "region": [
        "us",
        "eu",
        "remote"
      ],
      "salary": "$160K–$260K",
      "salaryNum": 215000,
      "requirements": "Kubernetes 生产级；Terraform 专家级；带方向 / 架构；政府客户系统；高可靠数据管道。",
      "link": "https://www.chainalysis.com/careers/job-openings/",
      "lastSeen": "2026-05-26",
      "func": "ops",
      "keywords": [
        "Kubernetes",
        "Terraform"
      ],
      "duties": [
        "架构设计",
        "客户/机构对接"
      ]
    },
    {
      "company": "Fireblocks",
      "category": "other",
      "position": "Site Reliability Engineer (SRE)",
      "level": "mid",
      "location": "TLV / NYC / 远程",
      "region": [
        "us",
        "eu",
        "remote"
      ],
      "salary": "$150K–$175K (基准)",
      "salaryNum": 165000,
      "requirements": "3+ 年 SRE / Infra Backend (SaaS)；数字资产托管核心稳定性；高合规要求；事件响应。",
      "link": "https://boards.greenhouse.io/fireblocks/jobs/4656035006",
      "lastSeen": "2026-05-26",
      "func": "ops",
      "keywords": [
        "合规"
      ],
      "duties": [
        "稳定性保障",
        "故障/值班",
        "合规风控"
      ],
      "description": "<div class=\"content-intro\"><p>The world of digital assets is accelerating in speed, magnitude, and complexity, opening the door to new ways for leveraging the blockchain. Fireblocks’ platform and network provide the simplest and most secure way for companies to work with digital assets and it trusted by some of the largest financial institutions, banks, globally-recognized brands, and Web3 companies in the world, including BNY Mellon, BNP Paribas, ANZ Bank, Revolut, and thousands more. </p></div><p><strong>About the team</strong></p>\n<p>Join a newly established, mission-critical SRE team at the forefront of financial infrastructure reliability. As part of Fireblocks Trust’s commitment to operational excellence, our Site Reliability Engineering team serves as the backbone of production systems, ensuring world-class uptime and performance for our digital asset custody and settlement platform.</p>\n<p><strong>What You'll Do</strong></p>\n<p>As part of your role, you would improve and establish new monitoring, alerting and observability of services using a wide range of tools. Additionally you would handle critical alerts and incidents and work directly with R&amp;D to improve and optimize availability.</p>\n<ul>\n<li>Research Fireblocks blockchain workflows, identify optimization opportunities, issues and improve monitoring.</li>\n<li>Help Identify root causes for incidents and prevent them from happening again. Solve and orchestrate outages by working with multiple teams.</li>\n<li>Improve and establish alerting for our infrastructure, services and business logic</li>\n<li>Work closely with the R&amp;D and Support: offering education and guidance on integration, support, and monitoring across the toolset</li>\n<li>Communicate and escalate issues to senior management in R&amp;D and support, write RCA’s, define next steps.</li>\n<li>Document actions in runbooks and then into automation using Python, Lamda, shell scripts, ArgoCD, Ansible.</li>\n<li>Focus on the system's observability, availability, reliability, performance/latency, monitoring</li>\n<li>Conduct periodic on-call duties and emergency response</li>\n</ul>\n<p><strong>What You’ll Bring:</strong></p>\n<p>To thrive in this role, you should bring the following qualifications and experience:</p>\n<ul>\n<li>At least 3+ years of experience as SRE, Infra Backend in a SaaS environment.</li>\n<li>You are curious, self-motivated, easy to work with, responsible and production aware. Fast learner and able to take a project from POC to production, while handling decision making and communication.</li>\n<li>Experience with Coding languages - Python/JavaScript/Bash (Must)</li>\n<li>At least 3+ years of experience with Alerting &amp; Monitoring systems such as <strong>DataDog</strong> Coralogix / Splunk / New Relic / Prometheus</li>\n<li>Experience working with Linux systems from kernel to shell and beyond</li>\n<li>Cloud systems such as <strong>AWS</strong> / Google cloud / Azure</li>\n<li>Configuration management such as <strong>Ansible</strong>/Chef/Puppet/ArgoCD</li>\n<li>Experience with Docker, Kubernetes and Helm</li>\n<li>SCM - Git/bitbucket/<strong>gitlab</strong>/Phabricator/gerrit</li>\n<li>High Analytical &amp; Troubleshooting skills - ability to solve complex problems</li>\n<li>Strong verbal and written communication skills and a collaborative mindset</li>\n</ul>\n<p><strong>Want to stand out of the crowd?</strong></p>\n<ul>\n<li>Previous experience in cryptocurrencies \\ blockchains - big advantage</li>\n<li>In Depth knowledge in: Linux optimization, nginx, ArgoCD, DataDog, MySql</li>\n<li>Participated in Kubernetes migration projects</li>\n<li>Previous experience as C++ or Node developer</li>\n<li>BSC in Computer Science or related technical certifications</li>\n</ul>\n<div>\n<p>For employees hired to work remotely from New York, or from our NYC HQ, Fireblocks is required by law to include a reasonable estimate of the compensation range for this role. This range is specific to New York City and takes into con"
    },
    {
      "company": "Ripple",
      "category": "other",
      "position": "Infrastructure / Reliability Engineer",
      "level": "senior",
      "location": "SF / NYC / Singapore",
      "region": [
        "us",
        "sg",
        "asia"
      ],
      "salary": "$180K–$260K (公开聚合)",
      "salaryNum": 215000,
      "requirements": "支付/托管底层基础设施；XRPL 节点；机构级合规；Palisade 集成。",
      "link": "https://ripple.com/careers",
      "lastSeen": "2026-05-26",
      "func": "ops",
      "keywords": [
        "Validator/节点",
        "合规"
      ],
      "duties": [
        "稳定性保障",
        "节点运维",
        "合规风控",
        "客户/机构对接"
      ]
    }
  ],
  "companies": {
    "Aave Labs": {
      "intro": "头部 DeFi 借贷协议 Aave 的开发公司。"
    },
    "Sei Labs": {
      "intro": "面向交易场景的高性能 L1 公链 Sei 的开发团队。"
    },
    "ZetaChain": {
      "intro": "主打全链互操作的 L1 公链。"
    },
    "Binance": {
      "intro": "全球交易量最大的加密货币交易所，提供现货、合约、理财与 Web3 钱包等全栈产品。"
    },
    "Gate.io": {
      "intro": "老牌加密货币交易所，上币种类丰富。"
    },
    "LayerZero Labs": {
      "intro": "全链互操作消息协议 LayerZero 的开发公司。"
    },
    "Ethereum Foundation": {
      "intro": "以太坊基金会，支持以太坊协议研究与生态发展的非营利机构。"
    },
    "Triton One": {
      "intro": "运营全球最大 Solana RPC 集群的基础设施团队。"
    },
    "Space and Time Labs": {
      "intro": "可验证计算与链下数据仓库（ZK proof）基础设施。"
    },
    "Crypto.com": {
      "intro": "提供交易、支付卡与 App 的综合加密平台，总部新加坡。"
    },
    "OKX": {
      "intro": "头部加密货币交易所与 Web3 钱包服务商，业务覆盖交易、衍生品与链上生态。"
    },
    "Phantom": {
      "intro": "主流多链自托管钱包（Solana / 以太坊等）。"
    },
    "Immunefi": {
      "intro": "最大的 Web3 漏洞赏金与安全平台。"
    },
    "CertiK": {
      "intro": "区块链安全审计与链上监测公司。"
    },
    "Jump Crypto": {
      "intro": "Jump Trading 旗下的加密交易与基础设施部门。"
    },
    "Blockchain.com": {
      "intro": "老牌加密钱包与交易平台，注册用户量大。"
    },
    "Token Metrics": {
      "intro": "加密投研与 AI 分析平台。"
    },
    "Celo Foundation": {
      "intro": "移动优先、EVM 兼容公链 Celo 的基金会。"
    },
    "Gateway.fm": {
      "intro": "Web3 基础设施与 rollup（L2）部署服务商。"
    },
    "Circle": {
      "intro": "USDC 稳定币发行方，受监管的支付与稳定币基础设施公司。"
    },
    "Galaxy Digital": {
      "intro": "加密金融服务与投资机构，纳斯达克上市。"
    },
    "Offchain Labs": {
      "intro": "以太坊 L2 Arbitrum 的核心开发公司。"
    },
    "OP Labs (Optimism)": {
      "intro": "以太坊 L2 Optimism 与 OP Stack 的核心开发公司。"
    },
    "Aave": {
      "intro": "头部去中心化借贷协议。"
    },
    "Uniswap Labs": {
      "intro": "最大去中心化交易所 Uniswap 协议的开发公司。"
    },
    "Halliday": {
      "intro": "Web3 支付与自动化（workflow）基础设施初创。"
    },
    "Symbiotic": {
      "intro": "模块化 restaking（再质押）协议。"
    },
    "OP Labs PBC": {
      "intro": "以太坊 L2 Optimism 与 OP Stack 的核心开发公司（公益公司）。"
    },
    "Kraken": {
      "intro": "老牌美国加密货币交易所，以安全合规著称，团队全球远程。"
    },
    "MoonPay": {
      "intro": "法币与加密的出入金（on/off-ramp）支付基础设施。"
    },
    "Figure": {
      "intro": "区块链金融科技公司，主打借贷与资产上链。"
    },
    "Alchemy": {
      "intro": "领先的 Web3 开发平台与节点 / RPC 基础设施服务商。"
    },
    "Squads": {
      "intro": "Solana 上的多签与智能账户基础设施。"
    },
    "Chainalysis": {
      "intro": "区块链数据分析与合规调查公司，服务政府与机构。"
    },
    "Trail of Bits": {
      "intro": "顶级安全审计与研究公司，覆盖智能合约与系统安全。"
    },
    "Nethermind": {
      "intro": "以太坊客户端开发与智能合约审计公司。"
    },
    "Veridise": {
      "intro": "专注形式化验证的区块链安全公司。"
    },
    "Mercuryo": {
      "intro": "加密支付与法币出入金服务商。"
    },
    "Bitget": {
      "intro": "主打跟单交易的全球加密货币交易所。"
    },
    "Anchorage Digital": {
      "intro": "美国合规数字资产银行与机构托管平台。"
    },
    "Paxos": {
      "intro": "受监管的稳定币与数字资产基础设施公司（PYUSD、USDP）。"
    },
    "Flashbots": {
      "intro": "研究与缓解 MEV、构建以太坊区块空间基础设施的组织。"
    },
    "Stellar Development Foundation": {
      "intro": "支持 Stellar 支付公链的非营利基金会。"
    },
    "Kiln": {
      "intro": "企业级质押（staking）基础设施服务商。"
    },
    "P2P.org": {
      "intro": "全球性质押（staking）服务与节点基础设施商。"
    },
    "Copper.co": {
      "intro": "机构级数字资产托管与交易基础设施（英国）。"
    },
    "Bloxstaking (ssv.network)": {
      "intro": "以太坊分布式验证者（DVT）质押基础设施。"
    },
    "Bitpanda": {
      "intro": "欧洲（奥地利）合规投资与加密交易平台。"
    },
    "Auros": {
      "intro": "加密做市与量化交易机构。"
    },
    "Reown (WalletConnect)": {
      "intro": "钱包连接协议 WalletConnect 的母公司，提供 onchain UX 工具。"
    },
    "Coinbase": {
      "intro": "美国合规加密货币交易所，纳斯达克上市，主打合规与机构服务。"
    },
    "Bybit": {
      "intro": "全球性加密衍生品与现货交易所，总部位于迪拜。"
    },
    "KuCoin": {
      "intro": "全球化加密货币交易所，被称为「人民的交易所」。"
    },
    "Solana Foundation": {
      "intro": "Solana 基金会，推动高性能公链 Solana 的生态与基础设施。"
    },
    "Aptos Labs": {
      "intro": "高性能 L1 公链 Aptos 的核心开发公司，使用 Move 语言。"
    },
    "Sui Foundation / Mysten Labs": {
      "intro": "Sui 公链背后的研发与基金会，主打 Move 语言与对象模型。"
    },
    "Offchain Labs (Arbitrum)": {
      "intro": "以太坊 L2 Arbitrum 的核心开发公司。"
    },
    "Polygon Labs": {
      "intro": "以太坊扩容方案 Polygon（PoS / zkEVM）的开发公司。"
    },
    "Consensys (MetaMask)": {
      "intro": "以太坊基础设施巨头，旗下有 MetaMask、Infura、Linea。"
    },
    "DeBank / Rabby": {
      "intro": "Web3 资产门户与社交平台，旗下钱包 Rabby。"
    },
    "Pharos (区块链初创)": {
      "intro": "区块链初创公司（C++ 高性能链方向）。"
    },
    "AWS 区块链节点服务 (中文招聘)": {
      "intro": "云厂商区块链节点托管方向的中文区招聘。"
    },
    "QuickNode": {
      "intro": "高性能区块链 RPC 节点基础设施服务商。"
    },
    "Chainstack": {
      "intro": "多云区块链节点与 RPC 基础设施服务商。"
    },
    "Blockdaemon": {
      "intro": "机构级区块链节点托管与质押基础设施。"
    },
    "Ankr": {
      "intro": "去中心化 RPC 与多链基础设施服务商。"
    },
    "Fireblocks": {
      "intro": "机构级数字资产托管与转账安全平台。"
    },
    "Ripple": {
      "intro": "跨境支付与 XRPL 生态公司，面向机构。"
    },
    "Immutable": {
      "intro": ""
    },
    "1inch": {
      "intro": ""
    },
    "Limit Break": {
      "intro": ""
    },
    "MyShell": {
      "intro": ""
    },
    "Fuel Labs": {
      "intro": ""
    },
    "Story Protocol": {
      "intro": ""
    },
    "Arbitrum Foundation": {
      "intro": ""
    },
    "Coins.ph": {
      "intro": ""
    },
    "Chainlink Labs": {
      "intro": ""
    },
    "CoW DAO": {
      "intro": ""
    },
    "Monad Foundation": {
      "intro": ""
    },
    "pod network": {
      "intro": ""
    },
    "Trust Wallet": {
      "intro": ""
    },
    "Saga": {
      "intro": ""
    },
    "Vac (Status / Logos)": {
      "intro": ""
    },
    "Animoca Brands": {
      "intro": ""
    },
    "Risk Labs (UMA / Across)": {
      "intro": ""
    },
    "CoinMarketCap": {
      "intro": ""
    },
    "Zora": {
      "intro": ""
    },
    "Linera": {
      "intro": ""
    },
    "0G Labs": {
      "intro": ""
    },
    "0x": {
      "intro": ""
    },
    "Sky Mavis": {
      "intro": ""
    },
    "Wormhole Foundation": {
      "intro": ""
    },
    "Bitfinex": {
      "intro": ""
    },
    "MEXC": {
      "intro": ""
    },
    "HTX": {
      "intro": ""
    },
    "Bitstamp by Robinhood": {
      "intro": ""
    },
    "BingX": {
      "intro": ""
    },
    "Upbit (Dunamu)": {
      "intro": ""
    },
    "Bithumb": {
      "intro": ""
    },
    "BitMart": {
      "intro": ""
    },
    "LBank": {
      "intro": ""
    },
    "XT.COM": {
      "intro": ""
    },
    "Gemini": {
      "intro": ""
    },
    "WOO X": {
      "intro": ""
    },
    "Backpack Exchange": {
      "intro": ""
    },
    "Binance.US": {
      "intro": ""
    },
    "bitFlyer": {
      "intro": ""
    },
    "Pionex": {
      "intro": ""
    },
    "CoinEx": {
      "intro": ""
    },
    "Bitvavo": {
      "intro": ""
    },
    "BitMEX": {
      "intro": ""
    },
    "Bitso": {
      "intro": ""
    },
    "Luno": {
      "intro": ""
    },
    "Bitkub": {
      "intro": ""
    },
    "Coincheck": {
      "intro": ""
    },
    "AscendEX": {
      "intro": ""
    },
    "Poloniex": {
      "intro": ""
    },
    "Bullish": {
      "intro": ""
    },
    "Flipster": {
      "intro": ""
    },
    "BTSE": {
      "intro": ""
    },
    "Bitrue": {
      "intro": ""
    },
    "BloFin": {
      "intro": ""
    },
    "CoinDCX": {
      "intro": ""
    },
    "Independent Reserve": {
      "intro": ""
    },
    "Toobit": {
      "intro": ""
    },
    "Deepcoin": {
      "intro": ""
    },
    "Hotcoin Global": {
      "intro": ""
    },
    "Aztec": {
      "intro": ""
    },
    "Caldera": {
      "intro": ""
    },
    "Zokyo": {
      "intro": ""
    },
    "Horizen Labs": {
      "intro": ""
    },
    "Paradex": {
      "intro": ""
    },
    "Mellow Protocol": {
      "intro": ""
    },
    "StarkWare Industries": {
      "intro": ""
    },
    "dYdX": {
      "intro": ""
    },
    "Hyperliquid Labs": {
      "intro": ""
    },
    "Nibiru Chain": {
      "intro": ""
    },
    "Shardeum Foundation": {
      "intro": ""
    },
    "Eigen Labs": {
      "intro": ""
    },
    "TRM Labs": {
      "intro": ""
    },
    "HashKey Group": {
      "intro": ""
    },
    "Jito Labs": {
      "intro": ""
    },
    "Ondo Finance": {
      "intro": ""
    },
    "Deribit": {
      "intro": ""
    },
    "CEX.IO": {
      "intro": ""
    },
    "Biconomy": {
      "intro": ""
    },
    "THORChain": {
      "intro": ""
    },
    "Eight Forces": {
      "intro": ""
    },
    "Analog": {
      "intro": ""
    },
    "Cere Network": {
      "intro": ""
    },
    "Google Cloud": {
      "intro": ""
    },
    "NodeReal": {
      "intro": ""
    },
    "Jupiter": {
      "intro": ""
    },
    "Certora": {
      "intro": ""
    }
  },
  "lastUpdatedAt": "2026-05-27T15:25:14.829Z"
};
