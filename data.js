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
      "added": 189,
      "removed": 0,
      "note": "当日累计新增 189 个岗位。"
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
      "company": "Bitget",
      "func": "bd",
      "category": "exchange",
      "position": "BD Manager, CIS",
      "level": "mid",
      "location": "远程",
      "region": [
        "remote"
      ],
      "salary": "面议",
      "salaryNum": 0,
      "requirements": "About us",
      "link": "https://hire-r1.mokahr.com/social-recruitment/bitget/100000079#/job/4a82e63f-7837-4692-a8b6-394a6fa00151",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "bitget||bd-manager-cis",
      "keywords": [
        "营销/增长"
      ],
      "duties": [
        "性能/容量",
        "增长营销",
        "商务拓展",
        "招聘/HR"
      ]
    },
    {
      "company": "Bitget",
      "func": "data",
      "category": "exchange",
      "position": "Business Analyst",
      "level": "mid",
      "location": "远程",
      "region": [
        "remote"
      ],
      "salary": "面议",
      "salaryNum": 0,
      "requirements": "About us",
      "link": "https://hire-r1.mokahr.com/social-recruitment/bitget/100000079#/job/19c44bd5-c1f5-4af8-9237-8ea44235557e",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "bitget||business-analyst",
      "keywords": [
        "营销/增长"
      ],
      "duties": [
        "监控告警",
        "数据分析",
        "增长营销",
        "招聘/HR"
      ]
    },
    {
      "company": "Bitget",
      "func": "eng",
      "category": "exchange",
      "position": "BGW Swap Aggregator Backend Engineer 聚合器后端技术工程师",
      "level": "mid",
      "location": "远程",
      "region": [
        "remote"
      ],
      "salary": "面议",
      "salaryNum": 0,
      "requirements": "About us",
      "link": "https://hire-r1.mokahr.com/social-recruitment/bitget/100000079#/job/2a159508-dfc1-4483-85b4-fafa9e56a783",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "bitget||bgw-swap-aggregator-backend-engineer-聚合器后端技术工程师",
      "keywords": [
        "Solidity",
        "Rust",
        "Go",
        "Smart Contract",
        "Staking",
        "Wallet",
        "Ethereum",
        "Solana"
      ],
      "duties": [
        "架构设计",
        "稳定性保障",
        "性能/容量",
        "节点运维",
        "协议/合约开发",
        "多链/跨链"
      ]
    },
    {
      "company": "Bitget",
      "func": "growth",
      "category": "exchange",
      "position": "Operations Manager 运营经理",
      "level": "mid",
      "location": "远程",
      "region": [
        "remote"
      ],
      "salary": "面议",
      "salaryNum": 0,
      "requirements": "About us",
      "link": "https://hire-r1.mokahr.com/social-recruitment/bitget/100000079#/job/81966259-9c82-4ba4-91d4-04a9e4063fa8",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "bitget||operations-manager-运营经理",
      "keywords": [
        "Validator/节点",
        "社区",
        "营销/增长"
      ],
      "duties": [
        "节点运维",
        "增长营销",
        "社区运营",
        "商务拓展",
        "招聘/HR"
      ]
    },
    {
      "company": "Bitget",
      "func": "eng",
      "category": "exchange",
      "position": "Web3 Junior Engineer 技术研发工程师 (Fresh Graduate is Welcome)",
      "level": "mid",
      "location": "远程",
      "region": [
        "remote"
      ],
      "salary": "面议",
      "salaryNum": 0,
      "requirements": "About us",
      "link": "https://hire-r1.mokahr.com/social-recruitment/bitget/100000079#/job/8911cfcc-376d-4bda-af51-06136fb1900d",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "bitget||web3-junior-engineer-技术研发工程师-fresh-graduate-is-welcome",
      "keywords": [
        "Solidity",
        "Rust",
        "Go",
        "Node.js",
        "React",
        "Smart Contract",
        "EVM",
        "DeFi"
      ],
      "duties": [
        "架构设计",
        "性能/容量",
        "部署发布",
        "节点运维",
        "协议/合约开发",
        "多链/跨链"
      ]
    },
    {
      "company": "Bitget",
      "func": "eng",
      "category": "exchange",
      "position": "BGW Backend Architecture Engineer 架构组后端研发工程师 ",
      "level": "mid",
      "location": "远程",
      "region": [
        "remote"
      ],
      "salary": "面议",
      "salaryNum": 0,
      "requirements": "About us",
      "link": "https://hire-r1.mokahr.com/social-recruitment/bitget/100000079#/job/4be88b0b-25bd-4a67-bdf9-da37291ee1ef",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "bitget||bgw-backend-architecture-engineer-架构组后端研发工程师",
      "keywords": [
        "Go",
        "Node.js",
        "DeFi",
        "Validator/节点",
        "Staking",
        "Wallet",
        "社区"
      ],
      "duties": [
        "架构设计",
        "稳定性保障",
        "性能/容量",
        "节点运维",
        "多链/跨链",
        "安全/审计"
      ]
    },
    {
      "company": "Bitget",
      "func": "bd",
      "category": "exchange",
      "position": "Business Development Manager, DACH",
      "level": "mid",
      "location": "远程",
      "region": [
        "remote"
      ],
      "salary": "面议",
      "salaryNum": 0,
      "requirements": "About us",
      "link": "https://hire-r1.mokahr.com/social-recruitment/bitget/100000079#/job/538303d0-06f1-4a32-94ad-501e50c0ea9f",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "bitget||business-development-manager-dach",
      "keywords": [
        "营销/增长"
      ],
      "duties": [
        "性能/容量",
        "增长营销",
        "商务拓展",
        "招聘/HR"
      ]
    },
    {
      "company": "Bitget",
      "func": "eng",
      "category": "exchange",
      "position": "BGW Backend DEX Engineer 资深后端DEX工程师",
      "level": "senior",
      "location": "远程",
      "region": [
        "remote"
      ],
      "salary": "面议",
      "salaryNum": 0,
      "requirements": "About us",
      "link": "https://hire-r1.mokahr.com/social-recruitment/bitget/100000079#/job/58bc5796-8287-4091-b274-43c9ea752a58",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "bitget||bgw-backend-dex-engineer-资深后端dex工程师",
      "keywords": [
        "Go",
        "TypeScript",
        "Node.js",
        "Smart Contract",
        "EVM",
        "Validator/节点",
        "Staking",
        "MEV"
      ],
      "duties": [
        "架构设计",
        "稳定性保障",
        "监控告警",
        "性能/容量",
        "部署发布",
        "节点运维"
      ]
    },
    {
      "company": "Bitget",
      "func": "bd",
      "category": "exchange",
      "position": "Institutional Business Development Manager , Asia",
      "level": "mid",
      "location": "远程",
      "region": [
        "remote"
      ],
      "salary": "面议",
      "salaryNum": 0,
      "requirements": "About us",
      "link": "https://hire-r1.mokahr.com/social-recruitment/bitget/100000079#/job/0c065287-6853-47f2-84ea-aa5ca9d10c61",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "bitget||institutional-business-development-manager-asia",
      "keywords": [
        "营销/增长"
      ],
      "duties": [
        "团队管理",
        "性能/容量",
        "增长营销",
        "商务拓展",
        "招聘/HR",
        "客户/机构对接"
      ]
    },
    {
      "company": "Bitget",
      "func": "bd",
      "category": "exchange",
      "position": "Business Development Manager, Latam",
      "level": "mid",
      "location": "远程",
      "region": [
        "remote"
      ],
      "salary": "面议",
      "salaryNum": 0,
      "requirements": "About us",
      "link": "https://hire-r1.mokahr.com/social-recruitment/bitget/100000079#/job/e05e6a44-523c-4c85-bb3c-9ca616ab2eb0",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "bitget||business-development-manager-latam",
      "keywords": [
        "营销/增长"
      ],
      "duties": [
        "合规风控",
        "增长营销",
        "商务拓展",
        "招聘/HR"
      ]
    },
    {
      "company": "Bitget",
      "func": "bd",
      "category": "exchange",
      "position": "Business Development Manager, EU",
      "level": "mid",
      "location": "远程",
      "region": [
        "remote"
      ],
      "salary": "面议",
      "salaryNum": 0,
      "requirements": "About us",
      "link": "https://hire-r1.mokahr.com/social-recruitment/bitget/100000079#/job/a69be733-4321-44cf-9d54-977a8ead356e",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "bitget||business-development-manager-eu",
      "keywords": [
        "营销/增长"
      ],
      "duties": [
        "性能/容量",
        "增长营销",
        "商务拓展",
        "招聘/HR"
      ]
    },
    {
      "company": "Bitget",
      "func": "bd",
      "category": "exchange",
      "position": "Polish Business Development Manager",
      "level": "mid",
      "location": "远程",
      "region": [
        "remote"
      ],
      "salary": "面议",
      "salaryNum": 0,
      "requirements": "About us",
      "link": "https://hire-r1.mokahr.com/social-recruitment/bitget/100000079#/job/8da73aac-27c3-480f-91c7-23728b851eca",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "bitget||polish-business-development-manager",
      "keywords": [
        "营销/增长"
      ],
      "duties": [
        "性能/容量",
        "增长营销",
        "商务拓展",
        "招聘/HR"
      ]
    },
    {
      "company": "Bitget",
      "func": "growth",
      "category": "exchange",
      "position": "Product Marketing Manager",
      "level": "mid",
      "location": "远程",
      "region": [
        "remote"
      ],
      "salary": "面议",
      "salaryNum": 0,
      "requirements": "About us",
      "link": "https://hire-r1.mokahr.com/social-recruitment/bitget/100000079#/job/42f1ea94-0fc6-4621-9efa-cd2afb8c8fb1",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "bitget||product-marketing-manager",
      "keywords": [
        "Go",
        "营销/增长"
      ],
      "duties": [
        "性能/容量",
        "增长营销",
        "商务拓展",
        "招聘/HR",
        "客户/机构对接"
      ]
    },
    {
      "company": "Bitget",
      "func": "product",
      "category": "exchange",
      "position": "Product Manager (Wallet Infra) 产品经理（钱包基础架构）",
      "level": "mid",
      "location": "远程",
      "region": [
        "remote"
      ],
      "salary": "面议",
      "salaryNum": 0,
      "requirements": "About us",
      "link": "https://hire-r1.mokahr.com/social-recruitment/bitget/100000079#/job/f28a3935-4e61-41f8-ae93-ee3f2ec5fbe2",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "bitget||product-manager-wallet-infra-产品经理-钱包基础架构",
      "keywords": [
        "Smart Contract",
        "DeFi",
        "Staking",
        "Wallet",
        "Solana",
        "营销/增长"
      ],
      "duties": [
        "架构设计",
        "稳定性保障",
        "监控告警",
        "性能/容量",
        "节点运维",
        "协议/合约开发"
      ]
    },
    {
      "company": "Bitget",
      "func": "growth",
      "category": "exchange",
      "position": "Marketing Manager",
      "level": "mid",
      "location": "远程",
      "region": [
        "remote"
      ],
      "salary": "面议",
      "salaryNum": 0,
      "requirements": "About us",
      "link": "https://hire-r1.mokahr.com/social-recruitment/bitget/100000079#/job/8e6ce13a-0246-41bb-b0fd-2bfb2619c9ad",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "bitget||marketing-manager",
      "keywords": [
        "营销/增长"
      ],
      "duties": [
        "部署发布",
        "数据分析",
        "设计/品牌",
        "增长营销",
        "招聘/HR"
      ]
    },
    {
      "company": "Bitget",
      "func": "eng",
      "category": "exchange",
      "position": "BGW Senior Test Engineer 高级测试工程师",
      "level": "senior",
      "location": "远程",
      "region": [
        "remote"
      ],
      "salary": "面议",
      "salaryNum": 0,
      "requirements": "About us",
      "link": "https://hire-r1.mokahr.com/social-recruitment/bitget/100000079#/job/6852b8d2-31ee-4470-a2d6-08bde9f57bff",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "bitget||bgw-senior-test-engineer-高级测试工程师",
      "keywords": [
        "Solidity",
        "Go",
        "Python",
        "JavaScript",
        "Smart Contract",
        "DeFi",
        "Staking",
        "Wallet"
      ],
      "duties": [
        "自动化",
        "节点运维",
        "协议/合约开发",
        "多链/跨链",
        "安全/审计"
      ]
    },
    {
      "company": "Bitget",
      "func": "eng",
      "category": "exchange",
      "position": "Video Production Manager",
      "level": "mid",
      "location": "远程",
      "region": [
        "remote"
      ],
      "salary": "面议",
      "salaryNum": 0,
      "requirements": "About us",
      "link": "https://hire-r1.mokahr.com/social-recruitment/bitget/100000079#/job/9518b9a3-bce5-4b16-9163-16b7e88173ed",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "bitget||video-production-manager",
      "keywords": [
        "AI",
        "营销/增长"
      ],
      "duties": [
        "团队管理",
        "性能/容量",
        "部署发布",
        "设计/品牌",
        "增长营销",
        "招聘/HR"
      ]
    },
    {
      "company": "Bitget",
      "func": "bd",
      "category": "exchange",
      "position": "KOC/KOL BD Manager (part-time)",
      "level": "mid",
      "location": "远程",
      "region": [
        "remote"
      ],
      "salary": "面议",
      "salaryNum": 0,
      "requirements": "About us",
      "link": "https://hire-r1.mokahr.com/social-recruitment/bitget/100000079#/job/1e00ebfd-0ba8-45b7-89b3-5576268bde01",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "bitget||koc-kol-bd-manager-part-time",
      "keywords": [
        "营销/增长"
      ],
      "duties": [
        "性能/容量",
        "增长营销",
        "商务拓展",
        "招聘/HR"
      ]
    },
    {
      "company": "Bitget",
      "func": "data",
      "category": "exchange",
      "position": "Compliance Operations Analyst  (AML – KYC & Transaction Monitoring)",
      "level": "mid",
      "location": "远程",
      "region": [
        "remote"
      ],
      "salary": "面议",
      "salaryNum": 0,
      "requirements": "About us",
      "link": "https://hire-r1.mokahr.com/social-recruitment/bitget/100000079#/job/e28d3e20-d72a-46b8-adeb-ca64cddb2529",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "bitget||compliance-operations-analyst-aml-kyc-transaction-monitoring",
      "keywords": [
        "AML/KYC",
        "合规",
        "营销/增长"
      ],
      "duties": [
        "监控告警",
        "协议/合约开发",
        "合规风控",
        "数据分析",
        "增长营销",
        "客户/机构对接"
      ]
    },
    {
      "company": "Bitget",
      "func": "growth",
      "category": "exchange",
      "position": "CIS Community Manager",
      "level": "mid",
      "location": "远程",
      "region": [
        "remote"
      ],
      "salary": "面议",
      "salaryNum": 0,
      "requirements": "About us",
      "link": "https://hire-r1.mokahr.com/social-recruitment/bitget/100000079#/job/9a34e539-cd63-4fa6-bb73-a462fba34230",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "bitget||cis-community-manager",
      "keywords": [
        "社区",
        "营销/增长"
      ],
      "duties": [
        "监控告警",
        "性能/容量",
        "增长营销",
        "社区运营",
        "招聘/HR"
      ]
    },
    {
      "company": "Bitget",
      "func": "eng",
      "category": "exchange",
      "position": "Test Engineer  测试工程师",
      "level": "mid",
      "location": "远程",
      "region": [
        "remote"
      ],
      "salary": "面议",
      "salaryNum": 0,
      "requirements": "About us",
      "link": "https://hire-r1.mokahr.com/social-recruitment/bitget/100000079#/job/02372c13-327b-4f66-900f-20867db1129d",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "bitget||test-engineer-测试工程师",
      "keywords": [
        "Smart Contract",
        "营销/增长"
      ],
      "duties": [
        "协议/合约开发",
        "产品规划",
        "增长营销",
        "招聘/HR"
      ]
    },
    {
      "company": "Bitget",
      "func": "growth",
      "category": "exchange",
      "position": "Platform Growth Operations 平台增长运营",
      "level": "mid",
      "location": "远程",
      "region": [
        "remote"
      ],
      "salary": "面议",
      "salaryNum": 0,
      "requirements": "About us",
      "link": "https://hire-r1.mokahr.com/social-recruitment/bitget/100000079#/job/f653894d-85c7-4b11-bbef-3f13ca1022e4",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "bitget||platform-growth-operations-平台增长运营",
      "keywords": [
        "营销/增长"
      ],
      "duties": [
        "性能/容量",
        "数据分析",
        "增长营销",
        "社区运营",
        "招聘/HR"
      ]
    },
    {
      "company": "Bitget",
      "func": "eng",
      "category": "exchange",
      "position": "Future Operation Trading Product Operation",
      "level": "mid",
      "location": "远程",
      "region": [
        "remote"
      ],
      "salary": "面议",
      "salaryNum": 0,
      "requirements": "About us",
      "link": "https://hire-r1.mokahr.com/social-recruitment/bitget/100000079#/job/7b39622d-c44d-4723-91a3-ec549ac2350c",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "bitget||future-operation-trading-product-operation",
      "keywords": [
        "营销/增长"
      ],
      "duties": [
        "性能/容量",
        "增长营销",
        "招聘/HR"
      ]
    },
    {
      "company": "Bitget",
      "func": "growth",
      "category": "exchange",
      "position": "Spot Asset Listing Operations 现货上币运营",
      "level": "mid",
      "location": "远程",
      "region": [
        "remote"
      ],
      "salary": "面议",
      "salaryNum": 0,
      "requirements": "About us",
      "link": "https://hire-r1.mokahr.com/social-recruitment/bitget/100000079#/job/6a6524cf-299a-4a8d-a467-202933592df3",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "bitget||spot-asset-listing-operations-现货上币运营",
      "keywords": [
        "营销/增长"
      ],
      "duties": [
        "部署发布",
        "数据分析",
        "增长营销",
        "社区运营",
        "招聘/HR"
      ]
    },
    {
      "company": "Bitget",
      "func": "design",
      "category": "exchange",
      "position": "Visual Design Specialist",
      "level": "mid",
      "location": "远程",
      "region": [
        "remote"
      ],
      "salary": "面议",
      "salaryNum": 0,
      "requirements": "About us",
      "link": "https://hire-r1.mokahr.com/social-recruitment/bitget/100000079#/job/ab1f4a56-f324-4963-83ab-64d1b85d1b05",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "bitget||visual-design-specialist",
      "keywords": [
        "Staking",
        "Wallet",
        "营销/增长"
      ],
      "duties": [
        "团队管理",
        "节点运维",
        "多链/跨链",
        "安全/审计",
        "设计/品牌",
        "增长营销"
      ]
    },
    {
      "company": "Bitget",
      "func": "design",
      "category": "exchange",
      "position": "Graphic Designer 平面设计师",
      "level": "mid",
      "location": "远程",
      "region": [
        "remote"
      ],
      "salary": "面议",
      "salaryNum": 0,
      "requirements": "About us",
      "link": "https://hire-r1.mokahr.com/social-recruitment/bitget/100000079#/job/19c4f72b-32d0-4d05-8926-2db6599e2fb8",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "bitget||graphic-designer-平面设计师",
      "keywords": [
        "Staking",
        "Wallet",
        "营销/增长"
      ],
      "duties": [
        "性能/容量",
        "节点运维",
        "多链/跨链",
        "安全/审计",
        "设计/品牌",
        "增长营销"
      ]
    },
    {
      "company": "Bitget",
      "func": "design",
      "category": "exchange",
      "position": "Graphic Motion Designer 动效设计师",
      "level": "mid",
      "location": "远程",
      "region": [
        "remote"
      ],
      "salary": "面议",
      "salaryNum": 0,
      "requirements": "About us",
      "link": "https://hire-r1.mokahr.com/social-recruitment/bitget/100000079#/job/bb3ec712-1219-401a-9eed-2dc905f38d27",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "bitget||graphic-motion-designer-动效设计师",
      "keywords": [
        "Staking",
        "Wallet"
      ],
      "duties": [
        "性能/容量",
        "节点运维",
        "多链/跨链",
        "安全/审计",
        "设计/品牌"
      ]
    },
    {
      "company": "Bitget",
      "func": "design",
      "category": "exchange",
      "position": "UI Designer UI 设计师",
      "level": "mid",
      "location": "远程",
      "region": [
        "remote"
      ],
      "salary": "面议",
      "salaryNum": 0,
      "requirements": "About us",
      "link": "https://hire-r1.mokahr.com/social-recruitment/bitget/100000079#/job/4acf5c39-eb6a-4b76-8b2e-661424cf96bb",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "bitget||ui-designer-ui-设计师",
      "keywords": [
        "Staking",
        "Wallet"
      ],
      "duties": [
        "稳定性保障",
        "节点运维",
        "多链/跨链",
        "安全/审计",
        "产品规划",
        "设计/品牌"
      ]
    },
    {
      "company": "Bitget",
      "func": "eng",
      "category": "exchange",
      "position": "Head of Custody (RI), Dubai",
      "level": "head",
      "location": "远程",
      "region": [
        "remote"
      ],
      "salary": "面议",
      "salaryNum": 0,
      "requirements": "About us",
      "link": "https://hire-r1.mokahr.com/social-recruitment/bitget/100000079#/job/c0786fe8-ec9a-47fb-8c57-458d8ae24317",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "bitget||head-of-custody-ri-dubai",
      "keywords": [
        "Wallet",
        "合规",
        "营销/增长"
      ],
      "duties": [
        "团队管理",
        "故障/值班",
        "安全/审计",
        "合规风控",
        "增长营销",
        "招聘/HR"
      ]
    },
    {
      "company": "Bitget",
      "func": "data",
      "category": "exchange",
      "position": "AI Product manager AI产品经理（专家）",
      "level": "mid",
      "location": "远程",
      "region": [
        "remote"
      ],
      "salary": "面议",
      "salaryNum": 0,
      "requirements": "About us",
      "link": "https://hire-r1.mokahr.com/social-recruitment/bitget/100000079#/job/271746ed-50cc-41a0-b9e0-f88219f49990",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "bitget||ai-product-manager-ai产品经理-专家",
      "keywords": [
        "Machine Learning",
        "AI",
        "营销/增长"
      ],
      "duties": [
        "性能/容量",
        "部署发布",
        "合规风控",
        "数据分析",
        "产品规划",
        "增长营销"
      ]
    },
    {
      "company": "Bitget",
      "func": "eng",
      "category": "exchange",
      "position": "(Regulatory) Accounting Manager（SG）",
      "level": "mid",
      "location": "远程",
      "region": [
        "remote"
      ],
      "salary": "面议",
      "salaryNum": 0,
      "requirements": "About us",
      "link": "https://hire-r1.mokahr.com/social-recruitment/bitget/100000079#/job/e27ecea6-1ac9-401a-946d-2f2be3c38c69",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "bitget||regulatory-accounting-manager-sg",
      "keywords": [
        "安全审计",
        "营销/增长"
      ],
      "duties": [
        "安全/审计",
        "合规风控",
        "增长营销",
        "招聘/HR"
      ]
    },
    {
      "company": "Bitget",
      "func": "eng",
      "category": "exchange",
      "position": "Market Information System Engineer 行情系统工程师",
      "level": "mid",
      "location": "远程",
      "region": [
        "remote"
      ],
      "salary": "面议",
      "salaryNum": 0,
      "requirements": "About us",
      "link": "https://hire-r1.mokahr.com/social-recruitment/bitget/100000079#/job/6ded5df1-6b67-4099-bf95-facb43266011",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "bitget||market-information-system-engineer-行情系统工程师",
      "keywords": [
        "Linux",
        "Kafka",
        "营销/增长"
      ],
      "duties": [
        "架构设计",
        "稳定性保障",
        "监控告警",
        "性能/容量",
        "合规风控",
        "增长营销"
      ]
    },
    {
      "company": "Bitget",
      "func": "eng",
      "category": "exchange",
      "position": "Event Manager",
      "level": "mid",
      "location": "远程",
      "region": [
        "remote"
      ],
      "salary": "面议",
      "salaryNum": 0,
      "requirements": "About us",
      "link": "https://hire-r1.mokahr.com/social-recruitment/bitget/100000079#/job/51f3d474-3d28-4a85-93d1-757c08df6e73",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "bitget||event-manager",
      "keywords": [
        "社区",
        "营销/增长"
      ],
      "duties": [
        "性能/容量",
        "设计/品牌",
        "增长营销",
        "社区运营",
        "商务拓展",
        "招聘/HR"
      ]
    },
    {
      "company": "Bitget",
      "func": "eng",
      "category": "exchange",
      "position": "PR Manager",
      "level": "mid",
      "location": "远程",
      "region": [
        "remote"
      ],
      "salary": "面议",
      "salaryNum": 0,
      "requirements": "About us",
      "link": "https://hire-r1.mokahr.com/social-recruitment/bitget/100000079#/job/d8748ce2-c44d-4c19-a9bc-1a88cfcda532",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "bitget||pr-manager",
      "keywords": [
        "营销/增长"
      ],
      "duties": [
        "部署发布",
        "增长营销",
        "商务拓展",
        "招聘/HR"
      ]
    },
    {
      "company": "Bitget",
      "func": "bd",
      "category": "exchange",
      "position": "Institutional Business Development Manager (Japanese speaker)",
      "level": "mid",
      "location": "远程",
      "region": [
        "remote"
      ],
      "salary": "面议",
      "salaryNum": 0,
      "requirements": "About Us",
      "link": "https://hire-r1.mokahr.com/social-recruitment/bitget/100000079#/job/0614802e-2a35-4b2d-88a3-c2ce91464240",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "bitget||institutional-business-development-manager-japanese-speaker",
      "keywords": [
        "营销/增长"
      ],
      "duties": [
        "监控告警",
        "性能/容量",
        "增长营销",
        "商务拓展",
        "客户/机构对接"
      ]
    },
    {
      "company": "Bitget",
      "func": "bd",
      "category": "exchange",
      "position": "KOL Business Development (Europe)",
      "level": "mid",
      "location": "远程",
      "region": [
        "remote"
      ],
      "salary": "面议",
      "salaryNum": 0,
      "requirements": "What You’ll Do:",
      "link": "https://hire-r1.mokahr.com/social-recruitment/bitget/100000079#/job/9e5a4879-34f1-4c38-b635-3e6e0fec52b5",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "bitget||kol-business-development-europe",
      "keywords": [
        "社区",
        "营销/增长"
      ],
      "duties": [
        "性能/容量",
        "增长营销",
        "社区运营",
        "商务拓展"
      ]
    },
    {
      "company": "Bitget",
      "func": "eng",
      "category": "exchange",
      "position": "Broker Operations Manager",
      "level": "mid",
      "location": "远程",
      "region": [
        "remote"
      ],
      "salary": "面议",
      "salaryNum": 0,
      "requirements": "About us",
      "link": "https://hire-r1.mokahr.com/social-recruitment/bitget/100000079#/job/d1fbaffb-6c3e-47b6-a573-13c5c1636d4f",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "bitget||broker-operations-manager",
      "keywords": [
        "营销/增长"
      ],
      "duties": [
        "监控告警",
        "性能/容量",
        "增长营销",
        "商务拓展",
        "招聘/HR"
      ]
    },
    {
      "company": "Bitget",
      "func": "data",
      "category": "exchange",
      "position": "Compliance Analyst",
      "level": "mid",
      "location": "Hongkong",
      "region": [
        "remote"
      ],
      "salary": "面议",
      "salaryNum": 0,
      "requirements": "About us",
      "link": "https://hire-r1.mokahr.com/social-recruitment/bitget/100000079#/job/568b873e-7c9f-4680-a704-e2958203bc32",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "bitget||compliance-analyst",
      "keywords": [
        "AML/KYC",
        "合规",
        "营销/增长"
      ],
      "duties": [
        "监控告警",
        "合规风控",
        "数据分析",
        "增长营销",
        "招聘/HR"
      ]
    },
    {
      "company": "Bitget",
      "func": "eng",
      "category": "exchange",
      "position": "CS Specialist (Japanese)",
      "level": "mid",
      "location": "远程",
      "region": [
        "remote"
      ],
      "salary": "面议",
      "salaryNum": 0,
      "requirements": "About us",
      "link": "https://hire-r1.mokahr.com/social-recruitment/bitget/100000079#/job/a05c03eb-1b59-490b-990c-4552ca24ae50",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "bitget||cs-specialist-japanese",
      "keywords": [
        "营销/增长"
      ],
      "duties": [
        "增长营销",
        "招聘/HR",
        "客户/机构对接"
      ]
    },
    {
      "company": "Bitget",
      "func": "bd",
      "category": "exchange",
      "position": "CFD Business Development Manager, Malaysia ",
      "level": "mid",
      "location": "远程",
      "region": [
        "remote"
      ],
      "salary": "面议",
      "salaryNum": 0,
      "requirements": "About us",
      "link": "https://hire-r1.mokahr.com/social-recruitment/bitget/100000079#/job/93cfd68d-172a-46ed-b4c9-257c3ac2ece1",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "bitget||cfd-business-development-manager-malaysia",
      "keywords": [
        "营销/增长"
      ],
      "duties": [
        "性能/容量",
        "增长营销",
        "商务拓展",
        "招聘/HR",
        "客户/机构对接"
      ]
    },
    {
      "company": "Bitget",
      "func": "bd",
      "category": "exchange",
      "position": "CFD BD (CN)",
      "level": "mid",
      "location": "远程",
      "region": [
        "remote"
      ],
      "salary": "面议",
      "salaryNum": 0,
      "requirements": "About us",
      "link": "https://hire-r1.mokahr.com/social-recruitment/bitget/100000079#/job/5c77cd10-6e71-46e6-9e5b-b8d475774dcc",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "bitget||cfd-bd-cn",
      "keywords": [
        "营销/增长"
      ],
      "duties": [
        "性能/容量",
        "增长营销",
        "社区运营",
        "商务拓展",
        "招聘/HR",
        "客户/机构对接"
      ]
    },
    {
      "company": "Bitget",
      "func": "bd",
      "category": "exchange",
      "position": "CFD Business Development Manager, LATAM ",
      "level": "mid",
      "location": "远程",
      "region": [
        "remote"
      ],
      "salary": "面议",
      "salaryNum": 0,
      "requirements": "About us",
      "link": "https://hire-r1.mokahr.com/social-recruitment/bitget/100000079#/job/ff060ea8-2933-43f2-b7b2-50bb2e080b2f",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "bitget||cfd-business-development-manager-latam",
      "keywords": [
        "营销/增长"
      ],
      "duties": [
        "性能/容量",
        "增长营销",
        "商务拓展",
        "招聘/HR",
        "客户/机构对接"
      ]
    },
    {
      "company": "Bitget",
      "func": "eng",
      "category": "exchange",
      "position": "CS Specialist (German)",
      "level": "mid",
      "location": "远程",
      "region": [
        "remote"
      ],
      "salary": "面议",
      "salaryNum": 0,
      "requirements": "About us",
      "link": "https://hire-r1.mokahr.com/social-recruitment/bitget/100000079#/job/cbc65673-2b89-429c-99a6-e688d668d0c7",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "bitget||cs-specialist-german",
      "keywords": [
        "AML/KYC",
        "合规",
        "营销/增长"
      ],
      "duties": [
        "合规风控",
        "增长营销",
        "招聘/HR",
        "客户/机构对接"
      ]
    },
    {
      "company": "Bitget",
      "func": "ga",
      "category": "exchange",
      "position": "Compliance Operations Lead (Transaction Monitoring, Noon Shift)",
      "level": "head",
      "location": "远程",
      "region": [
        "remote"
      ],
      "salary": "面议",
      "salaryNum": 0,
      "requirements": "Job Responsibilities",
      "link": "https://hire-r1.mokahr.com/social-recruitment/bitget/100000079#/job/1aac209f-7800-4464-9111-fa872eda5e9e",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "bitget||compliance-operations-lead-transaction-monitoring-noon-shift",
      "keywords": [
        "合规"
      ],
      "duties": [
        "监控告警",
        "合规风控"
      ]
    },
    {
      "company": "Bitget",
      "func": "ga",
      "category": "exchange",
      "position": "Corporate Counsel",
      "level": "mid",
      "location": "远程",
      "region": [
        "remote"
      ],
      "salary": "面议",
      "salaryNum": 0,
      "requirements": "About us",
      "link": "https://hire-r1.mokahr.com/social-recruitment/bitget/100000079#/job/7b9d2064-1549-40a8-a5b2-eaf2ccb01bdc",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "bitget||corporate-counsel",
      "keywords": [
        "合规",
        "营销/增长"
      ],
      "duties": [
        "团队管理",
        "监控告警",
        "合规风控",
        "增长营销",
        "招聘/HR"
      ]
    },
    {
      "company": "Bitget",
      "func": "data",
      "category": "exchange",
      "position": "AI Agent Developer 开发工程师",
      "level": "mid",
      "location": "远程",
      "region": [
        "remote"
      ],
      "salary": "面议",
      "salaryNum": 0,
      "requirements": "About us",
      "link": "https://hire-r1.mokahr.com/social-recruitment/bitget/100000079#/job/e42ff479-bec5-4e46-87dd-2279dc63c616",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "bitget||ai-agent-developer-开发工程师",
      "keywords": [
        "Solidity",
        "Rust",
        "Go",
        "Python",
        "Node.js",
        "Smart Contract",
        "EVM",
        "DeFi"
      ],
      "duties": [
        "架构设计",
        "性能/容量",
        "部署发布",
        "节点运维",
        "协议/合约开发",
        "多链/跨链"
      ]
    },
    {
      "company": "Bitget",
      "func": "eng",
      "category": "exchange",
      "position": "Customer Service PMO",
      "level": "mid",
      "location": "远程",
      "region": [
        "remote"
      ],
      "salary": "面议",
      "salaryNum": 0,
      "requirements": "About us",
      "link": "https://hire-r1.mokahr.com/social-recruitment/bitget/100000079#/job/810e36a1-eb1e-494e-bcb7-b9c2df12e958",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "bitget||customer-service-pmo",
      "keywords": [
        "SQL",
        "合规",
        "营销/增长"
      ],
      "duties": [
        "合规风控",
        "产品规划",
        "增长营销",
        "招聘/HR",
        "客户/机构对接"
      ]
    },
    {
      "company": "Bitget",
      "func": "bd",
      "category": "exchange",
      "position": "Business Development Manager, CIS (Forex/Brokerage/CFD) ",
      "level": "mid",
      "location": "远程",
      "region": [
        "remote"
      ],
      "salary": "面议",
      "salaryNum": 0,
      "requirements": "About us",
      "link": "https://hire-r1.mokahr.com/social-recruitment/bitget/100000079#/job/ecc78ff0-8e02-4bd1-a733-66ded75c6e5a",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "bitget||business-development-manager-cis-forex-brokerage-cfd",
      "keywords": [
        "营销/增长"
      ],
      "duties": [
        "性能/容量",
        "增长营销",
        "商务拓展",
        "招聘/HR",
        "客户/机构对接"
      ]
    },
    {
      "company": "Bitget",
      "func": "growth",
      "category": "exchange",
      "position": "Senior Growth Manager, Argentina ",
      "level": "senior",
      "location": "远程",
      "region": [
        "remote"
      ],
      "salary": "面议",
      "salaryNum": 0,
      "requirements": "About us",
      "link": "https://hire-r1.mokahr.com/social-recruitment/bitget/100000079#/job/04ff6611-c3f0-4ead-997b-ac23c35c7acd",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "bitget||senior-growth-manager-argentina",
      "keywords": [
        "合规",
        "社区",
        "营销/增长"
      ],
      "duties": [
        "团队管理",
        "监控告警",
        "合规风控",
        "设计/品牌",
        "增长营销",
        "社区运营"
      ]
    },
    {
      "company": "Bitget",
      "func": "design",
      "category": "exchange",
      "position": "AIGC Designer",
      "level": "mid",
      "location": "远程",
      "region": [
        "remote"
      ],
      "salary": "面议",
      "salaryNum": 0,
      "requirements": "About us",
      "link": "https://hire-r1.mokahr.com/social-recruitment/bitget/100000079#/job/1ddfd31c-3b83-47e5-8823-e78982aa9f55",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "bitget||aigc-designer",
      "keywords": [
        "Staking",
        "Wallet",
        "AI"
      ],
      "duties": [
        "性能/容量",
        "节点运维",
        "多链/跨链",
        "安全/审计",
        "设计/品牌",
        "招聘/HR"
      ]
    },
    {
      "company": "Bitget",
      "func": "bd",
      "category": "exchange",
      "position": "Business Development Specialist (UK)",
      "level": "mid",
      "location": "远程",
      "region": [
        "remote"
      ],
      "salary": "面议",
      "salaryNum": 0,
      "requirements": "Responsibilities:",
      "link": "https://hire-r1.mokahr.com/social-recruitment/bitget/100000079#/job/7f163da5-98ea-4ecf-9835-ef2a8e51a424",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "bitget||business-development-specialist-uk",
      "keywords": [
        "营销/增长"
      ],
      "duties": [
        "增长营销",
        "商务拓展"
      ]
    },
    {
      "company": "Bitget",
      "func": "growth",
      "category": "exchange",
      "position": "Marketing Manager- Poland",
      "level": "mid",
      "location": "远程",
      "region": [
        "remote"
      ],
      "salary": "面议",
      "salaryNum": 0,
      "requirements": "About us",
      "link": "https://hire-r1.mokahr.com/social-recruitment/bitget/100000079#/job/6c33199b-fb04-4009-b2a1-b5b940c471cf",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "bitget||marketing-manager-poland",
      "keywords": [
        "社区",
        "营销/增长"
      ],
      "duties": [
        "团队管理",
        "性能/容量",
        "合规风控",
        "设计/品牌",
        "增长营销",
        "社区运营"
      ]
    },
    {
      "company": "Bitget",
      "func": "data",
      "category": "exchange",
      "position": "AI Product Manager AI产品经理",
      "level": "mid",
      "location": "远程",
      "region": [
        "remote"
      ],
      "salary": "面议",
      "salaryNum": 0,
      "requirements": "About us",
      "link": "https://hire-r1.mokahr.com/social-recruitment/bitget/100000079#/job/2f2aae33-70a2-4f5d-94fa-7f3a2aec65d4",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "bitget||ai-product-manager-ai产品经理",
      "keywords": [
        "AI",
        "营销/增长"
      ],
      "duties": [
        "协议/合约开发",
        "产品规划",
        "增长营销",
        "招聘/HR"
      ]
    },
    {
      "company": "Bitget",
      "func": "data",
      "category": "exchange",
      "position": "Senior Data Scientist",
      "level": "senior",
      "location": "远程",
      "region": [
        "remote"
      ],
      "salary": "面议",
      "salaryNum": 0,
      "requirements": "About us",
      "link": "https://hire-r1.mokahr.com/social-recruitment/bitget/100000079#/job/2bde4be2-fdb2-4dea-aabf-9dbdbb5c618d",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "bitget||senior-data-scientist",
      "keywords": [
        "AI",
        "合规",
        "营销/增长"
      ],
      "duties": [
        "监控告警",
        "性能/容量",
        "部署发布",
        "自动化",
        "合规风控",
        "数据分析"
      ]
    },
    {
      "company": "Bitget",
      "func": "eng",
      "category": "exchange",
      "position": "Senior Treasury Specialist / Treasury Specialist（SG）",
      "level": "senior",
      "location": "远程",
      "region": [
        "remote"
      ],
      "salary": "面议",
      "salaryNum": 0,
      "requirements": "About us",
      "link": "https://hire-r1.mokahr.com/social-recruitment/bitget/100000079#/job/e4b2b831-a9e3-4b88-b799-eae6557bfb5d",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "bitget||senior-treasury-specialist-treasury-specialist-sg",
      "keywords": [
        "AML/KYC",
        "合规",
        "营销/增长"
      ],
      "duties": [
        "监控告警",
        "合规风控",
        "增长营销",
        "招聘/HR"
      ]
    },
    {
      "company": "Bitget",
      "func": "eng",
      "category": "exchange",
      "position": "Translator - Russian",
      "level": "mid",
      "location": "远程",
      "region": [
        "remote"
      ],
      "salary": "面议",
      "salaryNum": 0,
      "requirements": "About us",
      "link": "https://hire-r1.mokahr.com/social-recruitment/bitget/100000079#/job/8406ded7-dd98-4118-8cef-64d9ec8123ec",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "bitget||translator-russian",
      "keywords": [
        "AI",
        "营销/增长"
      ],
      "duties": [
        "增长营销",
        "招聘/HR"
      ]
    },
    {
      "company": "Bitget",
      "func": "bd",
      "category": "exchange",
      "position": "Business Development Manager, Malaysia ",
      "level": "mid",
      "location": "远程",
      "region": [
        "remote"
      ],
      "salary": "面议",
      "salaryNum": 0,
      "requirements": "About us",
      "link": "https://hire-r1.mokahr.com/social-recruitment/bitget/100000079#/job/f320d1b9-43a2-4814-ad3b-b41ce28e0aba",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "bitget||business-development-manager-malaysia",
      "keywords": [
        "AML/KYC",
        "合规",
        "社区",
        "营销/增长"
      ],
      "duties": [
        "监控告警",
        "性能/容量",
        "合规风控",
        "增长营销",
        "社区运营",
        "商务拓展"
      ]
    },
    {
      "company": "Bitget",
      "func": "eng",
      "category": "exchange",
      "position": "Head of Technical Accounting",
      "level": "head",
      "location": "远程",
      "region": [
        "remote"
      ],
      "salary": "面议",
      "salaryNum": 0,
      "requirements": "About us",
      "link": "https://hire-r1.mokahr.com/social-recruitment/bitget/100000079#/job/9d107601-fa59-4c90-89e1-7cf6f4e04364",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "bitget||head-of-technical-accounting",
      "keywords": [
        "营销/增长"
      ],
      "duties": [
        "团队管理",
        "增长营销",
        "招聘/HR"
      ]
    },
    {
      "company": "Bitget",
      "func": "ga",
      "category": "exchange",
      "position": "Finance Manager  (Group Consolidation & Reporting team)",
      "level": "mid",
      "location": "远程",
      "region": [
        "remote"
      ],
      "salary": "面议",
      "salaryNum": 0,
      "requirements": "About us",
      "link": "https://hire-r1.mokahr.com/social-recruitment/bitget/100000079#/job/7c8da57e-d6f4-4ecc-b660-717c45caa4e0",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "bitget||finance-manager-group-consolidation-reporting-team",
      "keywords": [
        "安全审计",
        "合规",
        "营销/增长"
      ],
      "duties": [
        "自动化",
        "安全/审计",
        "合规风控",
        "增长营销",
        "招聘/HR"
      ]
    },
    {
      "company": "Bitget",
      "func": "eng",
      "category": "exchange",
      "position": "Head of Group Consolidation and Reporting",
      "level": "head",
      "location": "远程",
      "region": [
        "remote"
      ],
      "salary": "面议",
      "salaryNum": 0,
      "requirements": "About us",
      "link": "https://hire-r1.mokahr.com/social-recruitment/bitget/100000079#/job/35dabd5f-c9d6-4fce-9842-a8d5fb31da2f",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "bitget||head-of-group-consolidation-and-reporting",
      "keywords": [
        "Wallet",
        "安全审计",
        "合规",
        "营销/增长"
      ],
      "duties": [
        "团队管理",
        "安全/审计",
        "合规风控",
        "增长营销",
        "招聘/HR"
      ]
    },
    {
      "company": "Bitget",
      "func": "product",
      "category": "exchange",
      "position": "Web3 Product Manager Web3 产品经理",
      "level": "mid",
      "location": "远程",
      "region": [
        "remote"
      ],
      "salary": "面议",
      "salaryNum": 0,
      "requirements": "About us",
      "link": "https://hire-r1.mokahr.com/social-recruitment/bitget/100000079#/job/9f2bc863-ac4b-4e62-b35e-b425e4bbbbc7",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "bitget||web3-product-manager-web3-产品经理",
      "keywords": [
        "DeFi",
        "Staking",
        "Wallet",
        "营销/增长"
      ],
      "duties": [
        "故障/值班",
        "监控告警",
        "性能/容量",
        "部署发布",
        "节点运维",
        "协议/合约开发"
      ]
    },
    {
      "company": "Bitget",
      "func": "eng",
      "category": "exchange",
      "position": "VIP Operations Specialist（CN)",
      "level": "mid",
      "location": "远程",
      "region": [
        "remote"
      ],
      "salary": "面议",
      "salaryNum": 0,
      "requirements": "About us",
      "link": "https://hire-r1.mokahr.com/social-recruitment/bitget/100000079#/job/7f4cdcec-0e06-4a61-80b7-de086e8e7f86",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "bitget||vip-operations-specialist-cn",
      "keywords": [
        "Smart Contract",
        "社区",
        "营销/增长"
      ],
      "duties": [
        "监控告警",
        "性能/容量",
        "协议/合约开发",
        "增长营销",
        "社区运营",
        "招聘/HR"
      ]
    },
    {
      "company": "Bitget",
      "func": "growth",
      "category": "exchange",
      "position": "Marketing Manager- UK",
      "level": "mid",
      "location": "远程",
      "region": [
        "remote"
      ],
      "salary": "面议",
      "salaryNum": 0,
      "requirements": "About us",
      "link": "https://hire-r1.mokahr.com/social-recruitment/bitget/100000079#/job/df0e1df2-d211-4fd6-9428-fd2ded2647f4",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "bitget||marketing-manager-uk",
      "keywords": [
        "社区",
        "营销/增长"
      ],
      "duties": [
        "团队管理",
        "性能/容量",
        "合规风控",
        "设计/品牌",
        "增长营销",
        "社区运营"
      ]
    },
    {
      "company": "Bitget",
      "func": "eng",
      "category": "exchange",
      "position": "Sanctions, Policy Management & Training Manager",
      "level": "mid",
      "location": "远程",
      "region": [
        "remote"
      ],
      "salary": "面议",
      "salaryNum": 0,
      "requirements": "About us",
      "link": "https://hire-r1.mokahr.com/social-recruitment/bitget/100000079#/job/c8c493b2-fe62-4972-95a7-3aa536b6b60c",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "bitget||sanctions-policy-management-training-manager",
      "keywords": [
        "AML/KYC",
        "合规",
        "营销/增长"
      ],
      "duties": [
        "监控告警",
        "合规风控",
        "增长营销",
        "招聘/HR"
      ]
    },
    {
      "company": "Bitget",
      "func": "eng",
      "category": "exchange",
      "position": "Country Manager , Brazil ",
      "level": "mid",
      "location": "远程",
      "region": [
        "remote"
      ],
      "salary": "面议",
      "salaryNum": 0,
      "requirements": "About us",
      "link": "https://hire-r1.mokahr.com/social-recruitment/bitget/100000079#/job/136a4ca2-b211-49ce-b767-10188a93ada1",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "bitget||country-manager-brazil",
      "keywords": [
        "Go",
        "营销/增长"
      ],
      "duties": [
        "团队管理",
        "监控告警",
        "性能/容量",
        "合规风控",
        "增长营销",
        "商务拓展"
      ]
    },
    {
      "company": "Bitget",
      "func": "eng",
      "category": "exchange",
      "position": "Channel Operations Manager-EU",
      "level": "mid",
      "location": "远程",
      "region": [
        "remote"
      ],
      "salary": "面议",
      "salaryNum": 0,
      "requirements": "About us",
      "link": "https://hire-r1.mokahr.com/social-recruitment/bitget/100000079#/job/1c58c64e-9ef8-4e04-af96-99d107e0be59",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "bitget||channel-operations-manager-eu",
      "keywords": [
        "社区",
        "营销/增长"
      ],
      "duties": [
        "性能/容量",
        "增长营销",
        "社区运营",
        "招聘/HR"
      ]
    },
    {
      "company": "Bitget",
      "func": "product",
      "category": "exchange",
      "position": "Senior Financial Product Manager 资深理财产品经理（owner）",
      "level": "senior",
      "location": "远程",
      "region": [
        "remote"
      ],
      "salary": "面议",
      "salaryNum": 0,
      "requirements": "About us",
      "link": "https://hire-r1.mokahr.com/social-recruitment/bitget/100000079#/job/35e2b2c4-3c55-4756-b6bf-02ef4d18ae59",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "bitget||senior-financial-product-manager-资深理财产品经理-owner",
      "keywords": [
        "营销/增长"
      ],
      "duties": [
        "性能/容量",
        "部署发布",
        "数据分析",
        "产品规划",
        "增长营销",
        "社区运营"
      ]
    },
    {
      "company": "Bitget",
      "func": "ga",
      "category": "exchange",
      "position": "Employment Counsel",
      "level": "mid",
      "location": "远程",
      "region": [
        "remote"
      ],
      "salary": "面议",
      "salaryNum": 0,
      "requirements": "About us",
      "link": "https://hire-r1.mokahr.com/social-recruitment/bitget/100000079#/job/e57afde5-db82-435d-870e-863cb338fa5d",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "bitget||employment-counsel",
      "keywords": [
        "合规",
        "营销/增长"
      ],
      "duties": [
        "团队管理",
        "合规风控",
        "增长营销",
        "招聘/HR"
      ]
    },
    {
      "company": "Bitget",
      "func": "bd",
      "category": "exchange",
      "position": "社群外拓谈判BD兼职",
      "level": "mid",
      "location": "远程",
      "region": [
        "remote"
      ],
      "salary": "面议",
      "salaryNum": 0,
      "requirements": "About us",
      "link": "https://hire-r1.mokahr.com/social-recruitment/bitget/100000079#/job/7e3e375e-219a-4502-b572-8baa74b35533",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "bitget||社群外拓谈判bd兼职",
      "keywords": [
        "社区",
        "营销/增长"
      ],
      "duties": [
        "增长营销",
        "社区运营",
        "商务拓展",
        "招聘/HR"
      ]
    },
    {
      "company": "Bitget",
      "func": "security",
      "category": "exchange",
      "position": "MT5 Risk Control Strategy Operation MT5 风控策略运营",
      "level": "mid",
      "location": "远程",
      "region": [
        "remote"
      ],
      "salary": "面议",
      "salaryNum": 0,
      "requirements": "About us",
      "link": "https://hire-r1.mokahr.com/social-recruitment/bitget/100000079#/job/07bafa8d-7fee-4367-a136-cc7b370b623b",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "bitget||mt5-risk-control-strategy-operation-mt5-风控策略运营",
      "keywords": [
        "SQL",
        "营销/增长"
      ],
      "duties": [
        "监控告警",
        "性能/容量",
        "部署发布",
        "合规风控",
        "数据分析",
        "增长营销"
      ]
    },
    {
      "company": "Bitget",
      "func": "eng",
      "category": "exchange",
      "position": "Senior Broker Manager",
      "level": "senior",
      "location": "远程",
      "region": [
        "remote"
      ],
      "salary": "面议",
      "salaryNum": 0,
      "requirements": "About us",
      "link": "https://hire-r1.mokahr.com/social-recruitment/bitget/100000079#/job/ccee7886-9845-4c4c-97e2-578ebc4ddef8",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "bitget||senior-broker-manager",
      "keywords": [
        "合规",
        "营销/增长"
      ],
      "duties": [
        "监控告警",
        "性能/容量",
        "合规风控",
        "设计/品牌",
        "增长营销",
        "商务拓展"
      ]
    },
    {
      "company": "Bitget",
      "func": "ga",
      "category": "exchange",
      "position": "Talent Acquisition Manager/Leader（SG）",
      "level": "head",
      "location": "远程",
      "region": [
        "remote"
      ],
      "salary": "面议",
      "salaryNum": 0,
      "requirements": "About us",
      "link": "https://hire-r1.mokahr.com/social-recruitment/bitget/100000079#/job/9a48d5e3-9259-40a5-a226-09b3cf79055a",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "bitget||talent-acquisition-manager-leader-sg",
      "keywords": [
        "营销/增长"
      ],
      "duties": [
        "团队管理",
        "监控告警",
        "性能/容量",
        "部署发布",
        "增长营销",
        "招聘/HR"
      ]
    },
    {
      "company": "Bitget",
      "func": "eng",
      "category": "exchange",
      "position": "Senior KYT Specialist (EU)",
      "level": "senior",
      "location": "远程",
      "region": [
        "remote"
      ],
      "salary": "面议",
      "salaryNum": 0,
      "requirements": "About us",
      "link": "https://hire-r1.mokahr.com/social-recruitment/bitget/100000079#/job/542004cf-93e1-4d77-808c-1f377ae87dde",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "bitget||senior-kyt-specialist-eu",
      "keywords": [
        "DeFi",
        "Wallet",
        "SLO/SLA",
        "安全审计",
        "AML/KYC",
        "合规",
        "营销/增长"
      ],
      "duties": [
        "稳定性保障",
        "监控告警",
        "性能/容量",
        "部署发布",
        "多链/跨链",
        "安全/审计"
      ]
    },
    {
      "company": "Bitget",
      "func": "ga",
      "category": "exchange",
      "position": "Senior KYC/KYB Specialist (EU)",
      "level": "senior",
      "location": "远程",
      "region": [
        "remote"
      ],
      "salary": "面议",
      "salaryNum": 0,
      "requirements": "About us",
      "link": "https://hire-r1.mokahr.com/social-recruitment/bitget/100000079#/job/d8007a82-02c3-40d7-9e66-c25335e4f4a0",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "bitget||senior-kyc-kyb-specialist-eu",
      "keywords": [
        "安全审计",
        "AML/KYC",
        "合规",
        "营销/增长"
      ],
      "duties": [
        "监控告警",
        "安全/审计",
        "合规风控",
        "增长营销",
        "客户/机构对接"
      ]
    },
    {
      "company": "Bitget",
      "func": "data",
      "category": "exchange",
      "position": "Screening Analyst ",
      "level": "mid",
      "location": "远程",
      "region": [
        "remote"
      ],
      "salary": "面议",
      "salaryNum": 0,
      "requirements": "About us",
      "link": "https://hire-r1.mokahr.com/social-recruitment/bitget/100000079#/job/35c13dbd-c305-404d-b79e-5c3bd3623bef",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "bitget||screening-analyst",
      "keywords": [
        "Staking",
        "Wallet"
      ],
      "duties": [
        "节点运维",
        "多链/跨链",
        "安全/审计",
        "数据分析"
      ]
    },
    {
      "company": "Bitget",
      "func": "bd",
      "category": "exchange",
      "position": "Business Development Manager- UK",
      "level": "mid",
      "location": "远程",
      "region": [
        "remote"
      ],
      "salary": "面议",
      "salaryNum": 0,
      "requirements": "Business Development Manager- UK",
      "link": "https://hire-r1.mokahr.com/social-recruitment/bitget/100000079#/job/3562da8a-0161-420d-acda-2697878624b1",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "bitget||business-development-manager-uk",
      "keywords": [],
      "duties": [
        "商务拓展"
      ]
    },
    {
      "company": "Bitget",
      "func": "product",
      "category": "exchange",
      "position": "游戏化交易产品增长运营",
      "level": "mid",
      "location": "远程",
      "region": [
        "remote"
      ],
      "salary": "面议",
      "salaryNum": 0,
      "requirements": "About us",
      "link": "https://hire-r1.mokahr.com/social-recruitment/bitget/100000079#/job/3b8a070f-d436-431f-ad47-4d2cb48bb04b",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "bitget||游戏化交易产品增长运营",
      "keywords": [
        "营销/增长"
      ],
      "duties": [
        "架构设计",
        "安全/审计",
        "合规风控",
        "数据分析",
        "增长营销",
        "社区运营"
      ]
    },
    {
      "company": "Bitget",
      "func": "eng",
      "category": "exchange",
      "position": "Senior Social Media Manager",
      "level": "senior",
      "location": "远程",
      "region": [
        "remote"
      ],
      "salary": "面议",
      "salaryNum": 0,
      "requirements": "About us",
      "link": "https://hire-r1.mokahr.com/social-recruitment/bitget/100000079#/job/dd3fe42c-00ef-4ba8-add6-526c2d27245a",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "bitget||senior-social-media-manager",
      "keywords": [
        "营销/增长"
      ],
      "duties": [
        "监控告警",
        "性能/容量",
        "数据分析",
        "设计/品牌",
        "增长营销",
        "招聘/HR"
      ]
    },
    {
      "company": "Bitget",
      "func": "product",
      "category": "exchange",
      "position": "VIP Product Operation Manager/Senior Product Operation Manager VIP 产品运营经理",
      "level": "senior",
      "location": "远程",
      "region": [
        "remote"
      ],
      "salary": "面议",
      "salaryNum": 0,
      "requirements": "About us",
      "link": "https://hire-r1.mokahr.com/social-recruitment/bitget/100000079#/job/2c20174b-627a-41c9-a94c-8e9c2a1efc99",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "bitget||vip-product-operation-manager-senior-product-operation-manager-vip-产品运营经理",
      "keywords": [
        "Smart Contract",
        "营销/增长"
      ],
      "duties": [
        "监控告警",
        "性能/容量",
        "协议/合约开发",
        "数据分析",
        "增长营销",
        "社区运营"
      ]
    },
    {
      "company": "Bitget",
      "func": "bd",
      "category": "exchange",
      "position": "CFD Business Development Manager, LATAM (Part Time)",
      "level": "mid",
      "location": "远程",
      "region": [
        "remote"
      ],
      "salary": "面议",
      "salaryNum": 0,
      "requirements": "About us",
      "link": "https://hire-r1.mokahr.com/social-recruitment/bitget/100000079#/job/2422f5e8-0350-4065-bd20-12fe2923ef4a",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "bitget||cfd-business-development-manager-latam-part-time",
      "keywords": [
        "营销/增长"
      ],
      "duties": [
        "性能/容量",
        "增长营销",
        "商务拓展",
        "招聘/HR",
        "客户/机构对接"
      ]
    },
    {
      "company": "Bitget",
      "func": "eng",
      "category": "exchange",
      "position": "CFD Liquidity Management Expert CFD流动性管理专家",
      "level": "mid",
      "location": "远程",
      "region": [
        "remote"
      ],
      "salary": "面议",
      "salaryNum": 0,
      "requirements": "About us",
      "link": "https://hire-r1.mokahr.com/social-recruitment/bitget/100000079#/job/5ce43373-37b9-4cc0-856a-90b27c9f524b",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "bitget||cfd-liquidity-management-expert-cfd流动性管理专家",
      "keywords": [
        "Python",
        "Validator/节点",
        "SQL",
        "营销/增长"
      ],
      "duties": [
        "架构设计",
        "监控告警",
        "性能/容量",
        "部署发布",
        "节点运维",
        "协议/合约开发"
      ]
    },
    {
      "company": "Bitget",
      "func": "bd",
      "category": "exchange",
      "position": "CFD Business Development Manager , SEA (Part Time) ",
      "level": "mid",
      "location": "远程",
      "region": [
        "remote"
      ],
      "salary": "面议",
      "salaryNum": 0,
      "requirements": "About us",
      "link": "https://hire-r1.mokahr.com/social-recruitment/bitget/100000079#/job/aeff259b-7607-4071-9728-b3245a5f2766",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "bitget||cfd-business-development-manager-sea-part-time",
      "keywords": [
        "营销/增长"
      ],
      "duties": [
        "性能/容量",
        "增长营销",
        "商务拓展",
        "招聘/HR",
        "客户/机构对接"
      ]
    },
    {
      "company": "Bitget",
      "func": "eng",
      "category": "exchange",
      "position": "VIP Operations Manager-EU",
      "level": "mid",
      "location": "远程",
      "region": [
        "remote"
      ],
      "salary": "面议",
      "salaryNum": 0,
      "requirements": "About us",
      "link": "https://hire-r1.mokahr.com/social-recruitment/bitget/100000079#/job/648b5d2e-1272-4c3b-8bf1-470c200b0966",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "bitget||vip-operations-manager-eu",
      "keywords": [
        "合规",
        "营销/增长"
      ],
      "duties": [
        "合规风控",
        "增长营销",
        "商务拓展",
        "招聘/HR",
        "客户/机构对接"
      ]
    },
    {
      "company": "Bitget",
      "func": "eng",
      "category": "exchange",
      "position": "Head of Group Treasury Investment",
      "level": "head",
      "location": "远程",
      "region": [
        "remote"
      ],
      "salary": "面议",
      "salaryNum": 0,
      "requirements": "About us",
      "link": "https://hire-r1.mokahr.com/social-recruitment/bitget/100000079#/job/3a17b9be-b496-488f-9305-606a33ac46f0",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "bitget||head-of-group-treasury-investment",
      "keywords": [
        "营销/增长"
      ],
      "duties": [
        "团队管理",
        "增长营销",
        "商务拓展",
        "招聘/HR",
        "客户/机构对接"
      ]
    },
    {
      "company": "Bitget",
      "func": "ga",
      "category": "exchange",
      "position": "Senior Finance Manager / Finance Manager (Finance Control) ",
      "level": "senior",
      "location": "远程",
      "region": [
        "remote"
      ],
      "salary": "面议",
      "salaryNum": 0,
      "requirements": "About us",
      "link": "https://hire-r1.mokahr.com/social-recruitment/bitget/100000079#/job/d23f709c-94b5-4305-a9dc-198427664f7b",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "bitget||senior-finance-manager-finance-manager-finance-control",
      "keywords": [
        "Wallet",
        "AWS",
        "GCP",
        "安全审计",
        "合规",
        "营销/增长"
      ],
      "duties": [
        "架构设计",
        "自动化",
        "安全/审计",
        "合规风控",
        "增长营销"
      ]
    },
    {
      "company": "Bitget",
      "func": "eng",
      "category": "exchange",
      "position": "Head of Global Tax",
      "level": "head",
      "location": "远程",
      "region": [
        "remote"
      ],
      "salary": "面议",
      "salaryNum": 0,
      "requirements": "About us",
      "link": "https://hire-r1.mokahr.com/social-recruitment/bitget/100000079#/job/af4eac3b-168d-4444-8643-37d0bf418017",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "bitget||head-of-global-tax",
      "keywords": [
        "营销/增长"
      ],
      "duties": [
        "团队管理",
        "增长营销",
        "招聘/HR"
      ]
    },
    {
      "company": "Bitget",
      "func": "ga",
      "category": "exchange",
      "position": "Head of Finance COE and Transformation",
      "level": "head",
      "location": "远程",
      "region": [
        "remote"
      ],
      "salary": "面议",
      "salaryNum": 0,
      "requirements": "About us",
      "link": "https://hire-r1.mokahr.com/social-recruitment/bitget/100000079#/job/a5221d4a-64ab-4908-8f21-b3bfed0118d1",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "bitget||head-of-finance-coe-and-transformation",
      "keywords": [
        "Wallet",
        "SQL",
        "安全审计",
        "营销/增长"
      ],
      "duties": [
        "团队管理",
        "架构设计",
        "部署发布",
        "自动化",
        "安全/审计",
        "数据分析"
      ]
    },
    {
      "company": "Bitget",
      "func": "ga",
      "category": "exchange",
      "position": "Head of Finance Control",
      "level": "head",
      "location": "远程",
      "region": [
        "remote"
      ],
      "salary": "面议",
      "salaryNum": 0,
      "requirements": "About us",
      "link": "https://hire-r1.mokahr.com/social-recruitment/bitget/100000079#/job/593a7234-60b5-4a98-bc3a-f3e120c5bf49",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "bitget||head-of-finance-control",
      "keywords": [
        "安全审计",
        "合规",
        "营销/增长"
      ],
      "duties": [
        "团队管理",
        "自动化",
        "协议/合约开发",
        "安全/审计",
        "合规风控",
        "产品规划"
      ]
    },
    {
      "company": "Bitget",
      "func": "ga",
      "category": "exchange",
      "position": "Senior Finance Manager / Finance Manager (Capital Markets and Financial Planning)",
      "level": "senior",
      "location": "远程",
      "region": [
        "remote"
      ],
      "salary": "面议",
      "salaryNum": 0,
      "requirements": "About us",
      "link": "https://hire-r1.mokahr.com/social-recruitment/bitget/100000079#/job/3723b92f-c75c-4137-ad63-f48489c0cd55",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "bitget||senior-finance-manager-finance-manager-capital-markets-and-financial-planning",
      "keywords": [
        "营销/增长"
      ],
      "duties": [
        "合规风控",
        "增长营销",
        "招聘/HR",
        "客户/机构对接"
      ]
    },
    {
      "company": "Bitget",
      "func": "bd",
      "category": "exchange",
      "position": "CFD Business Development Manager, Turkish ",
      "level": "mid",
      "location": "远程",
      "region": [
        "remote"
      ],
      "salary": "面议",
      "salaryNum": 0,
      "requirements": "About us",
      "link": "https://hire-r1.mokahr.com/social-recruitment/bitget/100000079#/job/e32d7be2-f01b-4256-80f5-e135d3ea5010",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "bitget||cfd-business-development-manager-turkish",
      "keywords": [
        "营销/增长"
      ],
      "duties": [
        "性能/容量",
        "增长营销",
        "商务拓展",
        "招聘/HR",
        "客户/机构对接"
      ]
    },
    {
      "company": "Bitget",
      "func": "bd",
      "category": "exchange",
      "position": "CFD Business Development Manager, South Asia ",
      "level": "mid",
      "location": "远程",
      "region": [
        "remote"
      ],
      "salary": "面议",
      "salaryNum": 0,
      "requirements": "About us",
      "link": "https://hire-r1.mokahr.com/social-recruitment/bitget/100000079#/job/f41cfc46-0884-46f6-8bf3-abbc6f1607aa",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "bitget||cfd-business-development-manager-south-asia",
      "keywords": [
        "营销/增长"
      ],
      "duties": [
        "监控告警",
        "性能/容量",
        "增长营销",
        "商务拓展",
        "招聘/HR"
      ]
    },
    {
      "company": "Bitget",
      "func": "security",
      "category": "exchange",
      "position": "Perp DEX & On-chain Risk Control Strategy Analyst Perp DEX&链上风控策略分析师",
      "level": "mid",
      "location": "远程",
      "region": [
        "remote"
      ],
      "salary": "面议",
      "salaryNum": 0,
      "requirements": "About us",
      "link": "https://hire-r1.mokahr.com/social-recruitment/bitget/100000079#/job/32d1eac3-ef05-4750-b8fc-e8ee9d2e0ec6",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "bitget||perp-dex-on-chain-risk-control-strategy-analyst-perp-dex-链上风控策略分析师",
      "keywords": [
        "Python",
        "DeFi",
        "MEV",
        "SQL",
        "AI",
        "营销/增长"
      ],
      "duties": [
        "故障/值班",
        "监控告警",
        "协议/合约开发",
        "合规风控",
        "数据分析",
        "增长营销"
      ]
    },
    {
      "company": "Bitget",
      "func": "data",
      "category": "exchange",
      "position": "Data Analyst",
      "level": "mid",
      "location": "远程",
      "region": [
        "remote"
      ],
      "salary": "面议",
      "salaryNum": 0,
      "requirements": "About us",
      "link": "https://hire-r1.mokahr.com/social-recruitment/bitget/100000079#/job/81148143-f9cc-47a3-bbe0-400a8296a005",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "bitget||data-analyst",
      "keywords": [
        "Staking",
        "Wallet",
        "SQL",
        "营销/增长"
      ],
      "duties": [
        "监控告警",
        "性能/容量",
        "节点运维",
        "协议/合约开发",
        "多链/跨链",
        "安全/审计"
      ]
    },
    {
      "company": "Bitget",
      "func": "bd",
      "category": "exchange",
      "position": "CFD Business Development Manager , SEA ",
      "level": "mid",
      "location": "远程",
      "region": [
        "remote"
      ],
      "salary": "面议",
      "salaryNum": 0,
      "requirements": "About us",
      "link": "https://hire-r1.mokahr.com/social-recruitment/bitget/100000079#/job/bb6da96e-c3b5-4063-9b54-780d23d9ebca",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "bitget||cfd-business-development-manager-sea",
      "keywords": [
        "营销/增长"
      ],
      "duties": [
        "性能/容量",
        "增长营销",
        "商务拓展",
        "招聘/HR",
        "客户/机构对接"
      ]
    },
    {
      "company": "Bitget",
      "func": "eng",
      "category": "exchange",
      "position": "Head of Technology (EU)",
      "level": "head",
      "location": "远程",
      "region": [
        "remote"
      ],
      "salary": "面议",
      "salaryNum": 0,
      "requirements": "About us",
      "link": "https://hire-r1.mokahr.com/social-recruitment/bitget/100000079#/job/4f49673b-d77e-42ec-ae84-be60fa4df8c6",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "bitget||head-of-technology-eu",
      "keywords": [
        "Wallet",
        "营销/增长"
      ],
      "duties": [
        "团队管理",
        "稳定性保障",
        "性能/容量",
        "部署发布",
        "合规风控",
        "产品规划"
      ]
    },
    {
      "company": "Bitget",
      "func": "ga",
      "category": "exchange",
      "position": "Compliance Officer, El Salvador",
      "level": "mid",
      "location": "远程",
      "region": [
        "remote"
      ],
      "salary": "面议",
      "salaryNum": 0,
      "requirements": "About us",
      "link": "https://hire-r1.mokahr.com/social-recruitment/bitget/100000079#/job/706669ab-c219-42b1-83e8-74a343f0a0c8",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "bitget||compliance-officer-el-salvador",
      "keywords": [
        "AML/KYC",
        "合规",
        "营销/增长"
      ],
      "duties": [
        "监控告警",
        "合规风控",
        "增长营销",
        "客户/机构对接"
      ]
    },
    {
      "company": "Bitget",
      "func": "data",
      "category": "exchange",
      "position": "AI Architecture AI架构师",
      "level": "mid",
      "location": "远程",
      "region": [
        "remote"
      ],
      "salary": "面议",
      "salaryNum": 0,
      "requirements": "About us",
      "link": "https://hire-r1.mokahr.com/social-recruitment/bitget/100000079#/job/67304d4c-885f-4ec5-88ed-45f8389d4244",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "bitget||ai-architecture-ai架构师",
      "keywords": [
        "Go",
        "Staking",
        "Wallet",
        "On-call",
        "AI"
      ],
      "duties": [
        "架构设计",
        "稳定性保障",
        "故障/值班",
        "监控告警",
        "性能/容量",
        "节点运维"
      ]
    },
    {
      "company": "Bitget",
      "func": "ga",
      "category": "exchange",
      "position": "Talent Acquisition Manager/Leader（HK）",
      "level": "head",
      "location": "远程",
      "region": [
        "remote"
      ],
      "salary": "面议",
      "salaryNum": 0,
      "requirements": "About us",
      "link": "https://hire-r1.mokahr.com/social-recruitment/bitget/100000079#/job/11eaee1a-1f76-4e46-adad-a07ac3fe0586",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "bitget||talent-acquisition-manager-leader-hk",
      "keywords": [
        "营销/增长"
      ],
      "duties": [
        "团队管理",
        "监控告警",
        "性能/容量",
        "部署发布",
        "增长营销",
        "招聘/HR"
      ]
    },
    {
      "company": "Bitget",
      "func": "growth",
      "category": "exchange",
      "position": "Growth Manager - North America",
      "level": "mid",
      "location": "远程",
      "region": [
        "remote"
      ],
      "salary": "面议",
      "salaryNum": 0,
      "requirements": "About us",
      "link": "https://hire-r1.mokahr.com/social-recruitment/bitget/100000079#/job/a5de9849-2054-4123-88f5-8667c93b3d0d",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "bitget||growth-manager-north-america",
      "keywords": [
        "DeFi",
        "Staking",
        "Wallet",
        "社区",
        "营销/增长"
      ],
      "duties": [
        "性能/容量",
        "节点运维",
        "多链/跨链",
        "安全/审计",
        "增长营销",
        "社区运营"
      ]
    },
    {
      "company": "Bitget",
      "func": "ga",
      "category": "exchange",
      "position": "Talent Acquisition Manager/Leader（UK）",
      "level": "head",
      "location": "远程",
      "region": [
        "remote"
      ],
      "salary": "面议",
      "salaryNum": 0,
      "requirements": "About us",
      "link": "https://hire-r1.mokahr.com/social-recruitment/bitget/100000079#/job/0999229d-2f30-4263-9eb2-445cc17dd035",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "bitget||talent-acquisition-manager-leader-uk",
      "keywords": [
        "营销/增长"
      ],
      "duties": [
        "团队管理",
        "监控告警",
        "性能/容量",
        "部署发布",
        "增长营销",
        "招聘/HR"
      ]
    },
    {
      "company": "Bitget",
      "func": "growth",
      "category": "exchange",
      "position": "Product Marketing Specialist (Intern)",
      "level": "mid",
      "location": "远程",
      "region": [
        "remote"
      ],
      "salary": "面议",
      "salaryNum": 0,
      "requirements": "About us",
      "link": "https://hire-r1.mokahr.com/social-recruitment/bitget/100000079#/job/7db4e5a9-6a66-41b8-96f4-9be016047dd5",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "bitget||product-marketing-specialist-intern",
      "keywords": [
        "社区",
        "营销/增长"
      ],
      "duties": [
        "性能/容量",
        "增长营销",
        "社区运营",
        "商务拓展",
        "招聘/HR"
      ]
    },
    {
      "company": "Bitget",
      "func": "bd",
      "category": "exchange",
      "position": "P2P Business Development Manager (CIS)",
      "level": "mid",
      "location": "远程",
      "region": [
        "remote"
      ],
      "salary": "面议",
      "salaryNum": 0,
      "requirements": "About us",
      "link": "https://hire-r1.mokahr.com/social-recruitment/bitget/100000079#/job/dac45642-fb29-4a25-8730-e7747e9c6f25",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "bitget||p2p-business-development-manager-cis",
      "keywords": [
        "社区",
        "营销/增长"
      ],
      "duties": [
        "合规风控",
        "增长营销",
        "社区运营",
        "商务拓展",
        "招聘/HR",
        "客户/机构对接"
      ]
    },
    {
      "company": "Bitget",
      "func": "eng",
      "category": "exchange",
      "position": "Key Account Manager ",
      "level": "mid",
      "location": "远程",
      "region": [
        "remote"
      ],
      "salary": "面议",
      "salaryNum": 0,
      "requirements": "About us",
      "link": "https://hire-r1.mokahr.com/social-recruitment/bitget/100000079#/job/e8c66bb9-d79a-4eb3-a388-7bcf9a2f1c27",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "bitget||key-account-manager",
      "keywords": [
        "营销/增长"
      ],
      "duties": [
        "增长营销",
        "商务拓展",
        "招聘/HR",
        "客户/机构对接"
      ]
    },
    {
      "company": "Bitget",
      "func": "growth",
      "category": "exchange",
      "position": "现货增长运营  Spot Growth Operations",
      "level": "mid",
      "location": "远程",
      "region": [
        "remote"
      ],
      "salary": "面议",
      "salaryNum": 0,
      "requirements": "About us",
      "link": "https://hire-r1.mokahr.com/social-recruitment/bitget/100000079#/job/1f1797b1-72de-4ca8-96a0-74c03c6961d4",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "bitget||现货增长运营-spot-growth-operations",
      "keywords": [
        "DeFi",
        "社区",
        "营销/增长"
      ],
      "duties": [
        "增长营销",
        "社区运营",
        "客户/机构对接"
      ]
    },
    {
      "company": "Bitget",
      "func": "data",
      "category": "exchange",
      "position": "Compliance Operations Analyst (KYC/KYB/EDD）Noon shift",
      "level": "mid",
      "location": "远程",
      "region": [
        "remote"
      ],
      "salary": "面议",
      "salaryNum": 0,
      "requirements": "About us",
      "link": "https://hire-r1.mokahr.com/social-recruitment/bitget/100000079#/job/5d040e69-7ebc-418b-be54-75ce6cb3cb30",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "bitget||compliance-operations-analyst-kyc-kyb-edd-noon-shift",
      "keywords": [
        "AML/KYC",
        "合规",
        "营销/增长"
      ],
      "duties": [
        "监控告警",
        "协议/合约开发",
        "合规风控",
        "数据分析",
        "增长营销",
        "客户/机构对接"
      ]
    },
    {
      "company": "Bitget",
      "func": "ga",
      "category": "exchange",
      "position": "Talent Acquisition Manager / Lead",
      "level": "head",
      "location": "远程",
      "region": [
        "remote"
      ],
      "salary": "面议",
      "salaryNum": 0,
      "requirements": "About us",
      "link": "https://hire-r1.mokahr.com/social-recruitment/bitget/100000079#/job/dec4e5ba-e7d4-4341-ab96-4d461c6fd705",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "bitget||talent-acquisition-manager-lead",
      "keywords": [
        "Staking",
        "Wallet",
        "营销/增长"
      ],
      "duties": [
        "团队管理",
        "性能/容量",
        "部署发布",
        "节点运维",
        "多链/跨链",
        "安全/审计"
      ]
    },
    {
      "company": "Bitget",
      "func": "eng",
      "category": "exchange",
      "position": "Morph Product Operations Manager",
      "level": "mid",
      "location": "远程",
      "region": [
        "remote"
      ],
      "salary": "面议",
      "salaryNum": 0,
      "requirements": "Morph Product Operations Manager",
      "link": "https://hire-r1.mokahr.com/social-recruitment/bitget/100000079#/job/1253d412-eecf-4d7a-b1da-08c446ea149a",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "bitget||morph-product-operations-manager",
      "keywords": [
        "Go",
        "DeFi",
        "Staking",
        "Wallet",
        "营销/增长"
      ],
      "duties": [
        "监控告警",
        "性能/容量",
        "节点运维",
        "协议/合约开发",
        "多链/跨链",
        "合规风控"
      ]
    },
    {
      "company": "Bitget",
      "func": "data",
      "category": "exchange",
      "position": "Compliance Operations Analyst (KYC/KYB/EDD）Night Shift",
      "level": "mid",
      "location": "远程",
      "region": [
        "remote"
      ],
      "salary": "面议",
      "salaryNum": 0,
      "requirements": "About us",
      "link": "https://hire-r1.mokahr.com/social-recruitment/bitget/100000079#/job/96507436-14a5-4168-9fe0-db1d7cb56ea7",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "bitget||compliance-operations-analyst-kyc-kyb-edd-night-shift",
      "keywords": [
        "AML/KYC",
        "合规",
        "营销/增长"
      ],
      "duties": [
        "监控告警",
        "协议/合约开发",
        "合规风控",
        "数据分析",
        "增长营销",
        "客户/机构对接"
      ]
    },
    {
      "company": "Bitget",
      "func": "bd",
      "category": "exchange",
      "position": "BD Manager, CN",
      "level": "mid",
      "location": "远程",
      "region": [
        "remote"
      ],
      "salary": "面议",
      "salaryNum": 0,
      "requirements": "About us",
      "link": "https://hire-r1.mokahr.com/social-recruitment/bitget/100000079#/job/52787223-a5f7-4433-a2d2-d4e5859e2b7e",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "bitget||bd-manager-cn",
      "keywords": [
        "营销/增长"
      ],
      "duties": [
        "性能/容量",
        "数据分析",
        "增长营销",
        "商务拓展",
        "招聘/HR",
        "客户/机构对接"
      ]
    },
    {
      "company": "Bitget",
      "func": "bd",
      "category": "exchange",
      "position": "CFD Business Development Manager- Brazil",
      "level": "mid",
      "location": "远程",
      "region": [
        "remote"
      ],
      "salary": "面议",
      "salaryNum": 0,
      "requirements": "About us",
      "link": "https://hire-r1.mokahr.com/social-recruitment/bitget/100000079#/job/67c23074-658d-4f64-bb57-f23dd3e3342d",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "bitget||cfd-business-development-manager-brazil",
      "keywords": [
        "营销/增长"
      ],
      "duties": [
        "性能/容量",
        "增长营销",
        "商务拓展",
        "招聘/HR",
        "客户/机构对接"
      ]
    },
    {
      "company": "Bitget",
      "func": "bd",
      "category": "exchange",
      "position": "CFD Business Development Manager- Iberia",
      "level": "mid",
      "location": "远程",
      "region": [
        "remote"
      ],
      "salary": "面议",
      "salaryNum": 0,
      "requirements": "About us",
      "link": "https://hire-r1.mokahr.com/social-recruitment/bitget/100000079#/job/61cbad6b-d995-4b25-a3e9-53682fd84783",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "bitget||cfd-business-development-manager-iberia",
      "keywords": [
        "营销/增长"
      ],
      "duties": [
        "性能/容量",
        "增长营销",
        "商务拓展",
        "招聘/HR",
        "客户/机构对接"
      ]
    },
    {
      "company": "Bitget",
      "func": "bd",
      "category": "exchange",
      "position": "German & English  Business Development Manager",
      "level": "mid",
      "location": "远程",
      "region": [
        "remote"
      ],
      "salary": "面议",
      "salaryNum": 0,
      "requirements": "About us",
      "link": "https://hire-r1.mokahr.com/social-recruitment/bitget/100000079#/job/5e3d6408-8851-441f-b8ef-af550c1a1754",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "bitget||german-english-business-development-manager",
      "keywords": [
        "营销/增长"
      ],
      "duties": [
        "增长营销",
        "商务拓展",
        "招聘/HR"
      ]
    },
    {
      "company": "Bitget",
      "func": "eng",
      "category": "exchange",
      "position": "User Research Specislist （part time)",
      "level": "mid",
      "location": "远程",
      "region": [
        "remote"
      ],
      "salary": "面议",
      "salaryNum": 0,
      "requirements": "About us",
      "link": "https://hire-r1.mokahr.com/social-recruitment/bitget/100000079#/job/6d1e5e68-c444-46ed-a805-3e00b3d4db1c",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "bitget||user-research-specislist-part-time",
      "keywords": [
        "营销/增长"
      ],
      "duties": [
        "增长营销",
        "招聘/HR"
      ]
    },
    {
      "company": "Bitget",
      "func": "bd",
      "category": "exchange",
      "position": "EU BD Manager",
      "level": "mid",
      "location": "远程",
      "region": [
        "remote"
      ],
      "salary": "面议",
      "salaryNum": 0,
      "requirements": "About us",
      "link": "https://hire-r1.mokahr.com/social-recruitment/bitget/100000079#/job/dc8c61aa-b989-4510-8ee1-dfcbeaaed445",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "bitget||eu-bd-manager",
      "keywords": [
        "社区",
        "营销/增长"
      ],
      "duties": [
        "合规风控",
        "增长营销",
        "社区运营",
        "商务拓展",
        "招聘/HR"
      ]
    },
    {
      "company": "Bitget",
      "func": "data",
      "category": "exchange",
      "position": "CIS CFD Business Analyst",
      "level": "mid",
      "location": "远程",
      "region": [
        "remote"
      ],
      "salary": "面议",
      "salaryNum": 0,
      "requirements": "About us",
      "link": "https://hire-r1.mokahr.com/social-recruitment/bitget/100000079#/job/0af6297e-e8a4-4b18-931d-e2becbeeb15a",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "bitget||cis-cfd-business-analyst",
      "keywords": [
        "营销/增长"
      ],
      "duties": [
        "性能/容量",
        "数据分析",
        "增长营销",
        "商务拓展",
        "招聘/HR",
        "客户/机构对接"
      ]
    },
    {
      "company": "Bitget",
      "func": "eng",
      "category": "exchange",
      "position": "CFD Trade Operations - Institutional",
      "level": "mid",
      "location": "远程",
      "region": [
        "remote"
      ],
      "salary": "面议",
      "salaryNum": 0,
      "requirements": "About us",
      "link": "https://hire-r1.mokahr.com/social-recruitment/bitget/100000079#/job/23115593-63fd-45d1-b4f6-a475bdf21bca",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "bitget||cfd-trade-operations-institutional",
      "keywords": [
        "安全审计",
        "合规",
        "营销/增长"
      ],
      "duties": [
        "故障/值班",
        "监控告警",
        "性能/容量",
        "安全/审计",
        "合规风控",
        "增长营销"
      ]
    },
    {
      "company": "Bitget",
      "func": "bd",
      "category": "exchange",
      "position": "CIS KOL Business Development Manager",
      "level": "mid",
      "location": "远程",
      "region": [
        "remote"
      ],
      "salary": "面议",
      "salaryNum": 0,
      "requirements": "About us",
      "link": "https://hire-r1.mokahr.com/social-recruitment/bitget/100000079#/job/ec5a5e00-9e8d-4272-911d-c2dd5aceb7c4",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "bitget||cis-kol-business-development-manager",
      "keywords": [
        "营销/增长"
      ],
      "duties": [
        "性能/容量",
        "增长营销",
        "商务拓展",
        "招聘/HR"
      ]
    },
    {
      "company": "Bitget",
      "func": "ga",
      "category": "exchange",
      "position": "Talent Acquisition (Part-time)",
      "level": "mid",
      "location": "远程",
      "region": [
        "remote"
      ],
      "salary": "面议",
      "salaryNum": 0,
      "requirements": "About us",
      "link": "https://hire-r1.mokahr.com/social-recruitment/bitget/100000079#/job/43b695f9-858a-44d6-a703-6667aaa4238e",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "bitget||talent-acquisition-part-time",
      "keywords": [
        "Staking",
        "Wallet",
        "社区",
        "营销/增长"
      ],
      "duties": [
        "部署发布",
        "节点运维",
        "多链/跨链",
        "安全/审计",
        "增长营销",
        "社区运营"
      ]
    },
    {
      "company": "Bitget",
      "func": "bd",
      "category": "exchange",
      "position": "KOL Business Development Manager-Brazil",
      "level": "mid",
      "location": "远程",
      "region": [
        "remote"
      ],
      "salary": "面议",
      "salaryNum": 0,
      "requirements": "About us",
      "link": "https://hire-r1.mokahr.com/social-recruitment/bitget/100000079#/job/d5cd5d7f-32d9-4696-88fa-b6748f1293d5",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "bitget||kol-business-development-manager-brazil",
      "keywords": [
        "营销/增长"
      ],
      "duties": [
        "性能/容量",
        "增长营销",
        "商务拓展",
        "招聘/HR"
      ]
    },
    {
      "company": "Bitget",
      "func": "bd",
      "category": "exchange",
      "position": "KOL BD Manager -Turkey",
      "level": "mid",
      "location": "远程",
      "region": [
        "remote"
      ],
      "salary": "面议",
      "salaryNum": 0,
      "requirements": "About us",
      "link": "https://hire-r1.mokahr.com/social-recruitment/bitget/100000079#/job/ad8c1d1e-fe34-407d-aafc-17974d1f34b5",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "bitget||kol-bd-manager-turkey",
      "keywords": [
        "AML/KYC",
        "合规",
        "社区",
        "营销/增长"
      ],
      "duties": [
        "监控告警",
        "性能/容量",
        "合规风控",
        "增长营销",
        "社区运营",
        "商务拓展"
      ]
    },
    {
      "company": "Bitget",
      "func": "bd",
      "category": "exchange",
      "position": "KOL BD Manager LATAM",
      "level": "mid",
      "location": "远程",
      "region": [
        "remote"
      ],
      "salary": "面议",
      "salaryNum": 0,
      "requirements": "About us",
      "link": "https://hire-r1.mokahr.com/social-recruitment/bitget/100000079#/job/22817a44-2d62-42ef-b2c6-29979514a3d3",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "bitget||kol-bd-manager-latam",
      "keywords": [
        "营销/增长"
      ],
      "duties": [
        "性能/容量",
        "增长营销",
        "商务拓展",
        "招聘/HR"
      ]
    },
    {
      "company": "Bitget",
      "func": "ga",
      "category": "exchange",
      "position": "Paralegal",
      "level": "mid",
      "location": "远程",
      "region": [
        "remote"
      ],
      "salary": "面议",
      "salaryNum": 0,
      "requirements": "About us",
      "link": "https://hire-r1.mokahr.com/social-recruitment/bitget/100000079#/job/5bac5717-7c89-4505-98e3-959c2d7ed253",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "bitget||paralegal",
      "keywords": [
        "AML/KYC",
        "合规",
        "营销/增长"
      ],
      "duties": [
        "监控告警",
        "合规风控",
        "增长营销",
        "招聘/HR"
      ]
    },
    {
      "company": "Bitget",
      "func": "eng",
      "category": "exchange",
      "position": "GRC Officer, Brazil",
      "level": "mid",
      "location": "远程",
      "region": [
        "remote"
      ],
      "salary": "面议",
      "salaryNum": 0,
      "requirements": "About us",
      "link": "https://hire-r1.mokahr.com/social-recruitment/bitget/100000079#/job/30bdacae-2ef8-4f75-b8ef-e26019da8850",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "bitget||grc-officer-brazil",
      "keywords": [
        "AML/KYC",
        "合规",
        "营销/增长"
      ],
      "duties": [
        "团队管理",
        "架构设计",
        "安全/审计",
        "合规风控",
        "增长营销",
        "招聘/HR"
      ]
    },
    {
      "company": "Bitget",
      "func": "data",
      "category": "exchange",
      "position": "AI Application Testing Engineer (Agent Direction) AI应用测试工程师（Agent方向）",
      "level": "mid",
      "location": "远程",
      "region": [
        "remote"
      ],
      "salary": "面议",
      "salaryNum": 0,
      "requirements": "About us",
      "link": "https://hire-r1.mokahr.com/social-recruitment/bitget/100000079#/job/acddd0d8-295b-43eb-b06a-529d8192a7dc",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "bitget||ai-application-testing-engineer-agent-direction-ai应用测试工程师-agent方向",
      "keywords": [
        "Python",
        "TypeScript",
        "CI/CD",
        "Linux",
        "AI",
        "合规",
        "营销/增长"
      ],
      "duties": [
        "架构设计",
        "稳定性保障",
        "性能/容量",
        "部署发布",
        "自动化",
        "协议/合约开发"
      ]
    },
    {
      "company": "Bitget",
      "func": "eng",
      "category": "exchange",
      "position": "English localization specialist",
      "level": "mid",
      "location": "远程",
      "region": [
        "remote"
      ],
      "salary": "面议",
      "salaryNum": 0,
      "requirements": "About us",
      "link": "https://hire-r1.mokahr.com/social-recruitment/bitget/100000079#/job/b5392d98-394f-45e7-8fae-ac764dacaf6b",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "bitget||english-localization-specialist",
      "keywords": [
        "AI",
        "合规",
        "营销/增长"
      ],
      "duties": [
        "监控告警",
        "合规风控",
        "设计/品牌",
        "增长营销",
        "招聘/HR"
      ]
    },
    {
      "company": "Bitget",
      "func": "eng",
      "category": "exchange",
      "position": "English Copy Editor",
      "level": "mid",
      "location": "远程",
      "region": [
        "remote"
      ],
      "salary": "面议",
      "salaryNum": 0,
      "requirements": "About us",
      "link": "https://hire-r1.mokahr.com/social-recruitment/bitget/100000079#/job/22afb098-087f-459d-837f-9f6e550a6cd6",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "bitget||english-copy-editor",
      "keywords": [
        "AI",
        "合规",
        "营销/增长"
      ],
      "duties": [
        "监控告警",
        "合规风控",
        "设计/品牌",
        "增长营销",
        "招聘/HR"
      ]
    },
    {
      "company": "Bitget",
      "func": "eng",
      "category": "exchange",
      "position": "Localization Project Manager 本地化翻译项目经理(PMO)",
      "level": "mid",
      "location": "远程",
      "region": [
        "remote"
      ],
      "salary": "面议",
      "salaryNum": 0,
      "requirements": "About us",
      "link": "https://hire-r1.mokahr.com/social-recruitment/bitget/100000079#/job/3f3720f8-9da4-4efd-a1a2-8bbc19f985c0",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "bitget||localization-project-manager-本地化翻译项目经理-pmo",
      "keywords": [
        "AI",
        "营销/增长"
      ],
      "duties": [
        "团队管理",
        "故障/值班",
        "性能/容量",
        "部署发布",
        "数据分析",
        "增长营销"
      ]
    },
    {
      "company": "Bitget",
      "func": "growth",
      "category": "exchange",
      "position": "Head of growth-CIS",
      "level": "head",
      "location": "远程",
      "region": [
        "remote"
      ],
      "salary": "面议",
      "salaryNum": 0,
      "requirements": "About us",
      "link": "https://hire-r1.mokahr.com/social-recruitment/bitget/100000079#/job/33de47b9-a397-44dc-940f-cf0a538ed567",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "bitget||head-of-growth-cis",
      "keywords": [
        "Go",
        "营销/增长"
      ],
      "duties": [
        "团队管理",
        "监控告警",
        "性能/容量",
        "合规风控",
        "增长营销",
        "商务拓展"
      ]
    },
    {
      "company": "Bitget",
      "func": "data",
      "category": "exchange",
      "position": "AIOps Engineer / AI Platform Engineer (Ops)",
      "level": "mid",
      "location": "远程",
      "region": [
        "remote"
      ],
      "salary": "面议",
      "salaryNum": 0,
      "requirements": "About us",
      "link": "https://hire-r1.mokahr.com/social-recruitment/bitget/100000079#/job/e5cdf33d-3104-4ac0-aa25-c61880d2c9c1",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "bitget||aiops-engineer-ai-platform-engineer-ops",
      "keywords": [
        "Go",
        "Python",
        "AWS",
        "CI/CD",
        "Linux",
        "AI",
        "安全审计",
        "合规"
      ],
      "duties": [
        "架构设计",
        "稳定性保障",
        "故障/值班",
        "监控告警",
        "性能/容量",
        "部署发布"
      ]
    },
    {
      "company": "Bitget",
      "func": "ga",
      "category": "exchange",
      "position": "Senior Legal Counsel, Regulatory & Licensing (US)",
      "level": "senior",
      "location": "远程",
      "region": [
        "remote"
      ],
      "salary": "面议",
      "salaryNum": 0,
      "requirements": "About us",
      "link": "https://hire-r1.mokahr.com/social-recruitment/bitget/100000079#/job/39fa3ad5-3dd2-4a14-b5f7-fe7247ea96ae",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "bitget||senior-legal-counsel-regulatory-licensing-us",
      "keywords": [
        "Staking",
        "AML/KYC",
        "合规",
        "营销/增长"
      ],
      "duties": [
        "节点运维",
        "安全/审计",
        "合规风控",
        "产品规划",
        "增长营销",
        "商务拓展"
      ]
    },
    {
      "company": "Bitget",
      "func": "eng",
      "category": "exchange",
      "position": "Technical Accounting Manager",
      "level": "mid",
      "location": "远程",
      "region": [
        "remote"
      ],
      "salary": "面议",
      "salaryNum": 0,
      "requirements": "About us",
      "link": "https://hire-r1.mokahr.com/social-recruitment/bitget/100000079#/job/164b1ae8-9527-498e-97f0-d824dc3b6611",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "bitget||technical-accounting-manager",
      "keywords": [
        "安全审计",
        "营销/增长"
      ],
      "duties": [
        "监控告警",
        "安全/审计",
        "合规风控",
        "增长营销",
        "招聘/HR"
      ]
    },
    {
      "company": "Bitget",
      "func": "bd",
      "category": "exchange",
      "position": "KOL BD Manager- Germany",
      "level": "mid",
      "location": "远程",
      "region": [
        "remote"
      ],
      "salary": "面议",
      "salaryNum": 0,
      "requirements": "About us",
      "link": "https://hire-r1.mokahr.com/social-recruitment/bitget/100000079#/job/b87ab46b-4c4d-4823-b988-336e40eed2d2",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "bitget||kol-bd-manager-germany",
      "keywords": [
        "营销/增长"
      ],
      "duties": [
        "增长营销",
        "商务拓展",
        "招聘/HR"
      ]
    },
    {
      "company": "Bitget",
      "func": "eng",
      "category": "exchange",
      "position": "Managing Director (MiFID, EU)",
      "level": "head",
      "location": "远程",
      "region": [
        "remote"
      ],
      "salary": "面议",
      "salaryNum": 0,
      "requirements": "About us",
      "link": "https://hire-r1.mokahr.com/social-recruitment/bitget/100000079#/job/18604ebd-aecf-4563-9e62-5e970ee4f420",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "bitget||managing-director-mifid-eu",
      "keywords": [
        "合规",
        "营销/增长"
      ],
      "duties": [
        "团队管理",
        "合规风控",
        "增长营销",
        "商务拓展",
        "招聘/HR",
        "客户/机构对接"
      ]
    },
    {
      "company": "Bitget",
      "func": "security",
      "category": "exchange",
      "position": "CFD量化风控专家（HK/MY）",
      "level": "mid",
      "location": "远程",
      "region": [
        "remote"
      ],
      "salary": "面议",
      "salaryNum": 0,
      "requirements": "About us",
      "link": "https://hire-r1.mokahr.com/social-recruitment/bitget/100000079#/job/29b3fd5d-7cb6-41b4-99b2-d88b25aabc2d",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "bitget||cfd量化风控专家-hk-my",
      "keywords": [
        "Python",
        "SQL",
        "Machine Learning",
        "营销/增长"
      ],
      "duties": [
        "监控告警",
        "性能/容量",
        "自动化",
        "合规风控",
        "数据分析",
        "增长营销"
      ]
    },
    {
      "company": "Bitget",
      "func": "eng",
      "category": "exchange",
      "position": "Branding Director",
      "level": "head",
      "location": "远程",
      "region": [
        "remote"
      ],
      "salary": "面议",
      "salaryNum": 0,
      "requirements": "About us",
      "link": "https://hire-r1.mokahr.com/social-recruitment/bitget/100000079#/job/ba295b32-0334-433a-a9d0-9a642786c50a",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "bitget||branding-director",
      "keywords": [
        "Go",
        "DeFi",
        "营销/增长"
      ],
      "duties": [
        "团队管理",
        "数据分析",
        "设计/品牌",
        "增长营销",
        "商务拓展",
        "招聘/HR"
      ]
    },
    {
      "company": "Bitget",
      "func": "data",
      "category": "exchange",
      "position": "量化研究员（高频分析建模） Quantitative Researcher（High-frequency trading modeling）",
      "level": "mid",
      "location": "远程",
      "region": [
        "remote"
      ],
      "salary": "面议",
      "salaryNum": 0,
      "requirements": "About us",
      "link": "https://hire-r1.mokahr.com/social-recruitment/bitget/100000079#/job/d15a7d34-9e50-4c54-9f9f-740fa6b1d87e",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "bitget||量化研究员-高频分析建模-quantitative-researcher-high-frequency-trading-modeling",
      "keywords": [
        "Python",
        "Machine Learning",
        "营销/增长"
      ],
      "duties": [
        "性能/容量",
        "数据分析",
        "增长营销"
      ]
    },
    {
      "company": "Bitget",
      "func": "bd",
      "category": "exchange",
      "position": "Key Account Business Manager 大客户商务经理 ",
      "level": "mid",
      "location": "远程",
      "region": [
        "remote"
      ],
      "salary": "面议",
      "salaryNum": 0,
      "requirements": "About us",
      "link": "https://hire-r1.mokahr.com/social-recruitment/bitget/100000079#/job/54f3e78d-8a17-4e0d-95dc-e2796b3fb0c2",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "bitget||key-account-business-manager-大客户商务经理",
      "keywords": [
        "营销/增长"
      ],
      "duties": [
        "性能/容量",
        "增长营销",
        "商务拓展",
        "客户/机构对接"
      ]
    },
    {
      "company": "Bitget",
      "func": "eng",
      "category": "exchange",
      "position": "Website Operations Specialist",
      "level": "mid",
      "location": "远程",
      "region": [
        "remote"
      ],
      "salary": "面议",
      "salaryNum": 0,
      "requirements": "About us",
      "link": "https://hire-r1.mokahr.com/social-recruitment/bitget/100000079#/job/df7ffade-93b7-4a14-98a5-0f06c4cee632",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "bitget||website-operations-specialist",
      "keywords": [
        "营销/增长"
      ],
      "duties": [
        "监控告警",
        "增长营销",
        "招聘/HR"
      ]
    },
    {
      "company": "Bitget",
      "func": "bd",
      "category": "exchange",
      "position": "Institutional Business Development Manager",
      "level": "mid",
      "location": "远程",
      "region": [
        "remote"
      ],
      "salary": "面议",
      "salaryNum": 0,
      "requirements": "About us",
      "link": "https://hire-r1.mokahr.com/social-recruitment/bitget/100000079#/job/72a59117-5b91-4de2-8bf8-892cea8744df",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "bitget||institutional-business-development-manager",
      "keywords": [
        "营销/增长"
      ],
      "duties": [
        "团队管理",
        "性能/容量",
        "增长营销",
        "商务拓展",
        "招聘/HR",
        "客户/机构对接"
      ]
    },
    {
      "company": "Bitget",
      "func": "product",
      "category": "exchange",
      "position": "Localization Product Manager | Translation Platform Direction",
      "level": "mid",
      "location": "远程",
      "region": [
        "remote"
      ],
      "salary": "面议",
      "salaryNum": 0,
      "requirements": "About us",
      "link": "https://hire-r1.mokahr.com/social-recruitment/bitget/100000079#/job/b9fe66aa-4853-49ca-bf3a-1b6b5b6d8550",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "bitget||localization-product-manager-translation-platform-direction",
      "keywords": [
        "AI",
        "营销/增长"
      ],
      "duties": [
        "产品规划",
        "增长营销",
        "招聘/HR"
      ]
    },
    {
      "company": "Bitget",
      "func": "ga",
      "category": "exchange",
      "position": "Legal Intern - Commercial (3-6 months, Full Time)",
      "level": "mid",
      "location": "远程",
      "region": [
        "remote"
      ],
      "salary": "面议",
      "salaryNum": 0,
      "requirements": "About us",
      "link": "https://hire-r1.mokahr.com/social-recruitment/bitget/100000079#/job/3d1918e4-0282-44df-a270-ab8792514ab8",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "bitget||legal-intern-commercial-3-6-months-full-time",
      "keywords": [
        "营销/增长"
      ],
      "duties": [
        "自动化",
        "合规风控",
        "增长营销",
        "招聘/HR"
      ]
    },
    {
      "company": "Bitget",
      "func": "product",
      "category": "exchange",
      "position": "Swap Product Manager",
      "level": "mid",
      "location": "远程",
      "region": [
        "remote"
      ],
      "salary": "面议",
      "salaryNum": 0,
      "requirements": "About us",
      "link": "https://hire-r1.mokahr.com/social-recruitment/bitget/100000079#/job/8b81d030-92e2-412b-a968-dbf148f6cad0",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "bitget||swap-product-manager",
      "keywords": [
        "Smart Contract",
        "DeFi",
        "Staking",
        "Wallet",
        "合规"
      ],
      "duties": [
        "监控告警",
        "性能/容量",
        "部署发布",
        "节点运维",
        "协议/合约开发",
        "多链/跨链"
      ]
    },
    {
      "company": "Bitget",
      "func": "eng",
      "category": "exchange",
      "position": "Smart Contract Engineer 智能合约工程师",
      "level": "mid",
      "location": "远程",
      "region": [
        "remote"
      ],
      "salary": "面议",
      "salaryNum": 0,
      "requirements": "About us",
      "link": "https://hire-r1.mokahr.com/social-recruitment/bitget/100000079#/job/6797e8c2-a557-4681-aa6f-a51c9949a8ab",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "bitget||smart-contract-engineer-智能合约工程师",
      "keywords": [
        "Solidity",
        "Rust",
        "Smart Contract",
        "EVM",
        "DeFi",
        "Staking",
        "Wallet",
        "Ethereum"
      ],
      "duties": [
        "稳定性保障",
        "故障/值班",
        "部署发布",
        "节点运维",
        "协议/合约开发",
        "多链/跨链"
      ]
    },
    {
      "company": "Bitget",
      "func": "eng",
      "category": "exchange",
      "position": "BGW Flutter Engineer 客户端Flutter开发",
      "level": "mid",
      "location": "远程",
      "region": [
        "remote"
      ],
      "salary": "面议",
      "salaryNum": 0,
      "requirements": "About us",
      "link": "https://hire-r1.mokahr.com/social-recruitment/bitget/100000079#/job/96b2ef94-4c25-4d67-b182-9af3ec5576e9",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "bitget||bgw-flutter-engineer-客户端flutter开发",
      "keywords": [
        "Staking",
        "Wallet",
        "CI/CD"
      ],
      "duties": [
        "监控告警",
        "性能/容量",
        "部署发布",
        "节点运维",
        "多链/跨链",
        "安全/审计"
      ]
    },
    {
      "company": "Bitget",
      "func": "bd",
      "category": "exchange",
      "position": "Institutional Business Development Manager（Europe)",
      "level": "mid",
      "location": "远程",
      "region": [
        "remote"
      ],
      "salary": "面议",
      "salaryNum": 0,
      "requirements": "About us",
      "link": "https://hire-r1.mokahr.com/social-recruitment/bitget/100000079#/job/a64c18da-9710-4296-8795-3c401a0a51eb",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "bitget||institutional-business-development-manager-europe",
      "keywords": [
        "营销/增长"
      ],
      "duties": [
        "团队管理",
        "性能/容量",
        "增长营销",
        "商务拓展",
        "客户/机构对接"
      ]
    },
    {
      "company": "Bitget",
      "func": "eng",
      "category": "exchange",
      "position": "VIP Relationship Manager (Korean speaker)",
      "level": "mid",
      "location": "远程",
      "region": [
        "remote"
      ],
      "salary": "面议",
      "salaryNum": 0,
      "requirements": "About us",
      "link": "https://hire-r1.mokahr.com/social-recruitment/bitget/100000079#/job/961fb69e-8351-45a6-8b12-df2e6c8b6f2d",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "bitget||vip-relationship-manager-korean-speaker",
      "keywords": [
        "营销/增长"
      ],
      "duties": [
        "监控告警",
        "增长营销",
        "招聘/HR",
        "客户/机构对接"
      ]
    },
    {
      "company": "Bitget",
      "func": "bd",
      "category": "exchange",
      "position": "KOL Business Development(Poland)",
      "level": "mid",
      "location": "远程",
      "region": [
        "remote"
      ],
      "salary": "面议",
      "salaryNum": 0,
      "requirements": "What You’ll Do:",
      "link": "https://hire-r1.mokahr.com/social-recruitment/bitget/100000079#/job/647258ca-5ad0-42ec-ac05-eaaf6808e597",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "bitget||kol-business-development-poland",
      "keywords": [
        "社区",
        "营销/增长"
      ],
      "duties": [
        "性能/容量",
        "增长营销",
        "社区运营",
        "商务拓展"
      ]
    },
    {
      "company": "Bitget",
      "func": "eng",
      "category": "exchange",
      "position": "VIP Relationship Manager-Germany",
      "level": "mid",
      "location": "远程",
      "region": [
        "remote"
      ],
      "salary": "面议",
      "salaryNum": 0,
      "requirements": "About us",
      "link": "https://hire-r1.mokahr.com/social-recruitment/bitget/100000079#/job/db57ccba-88d6-4737-a9a1-0ab8e31ecf2f",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "bitget||vip-relationship-manager-germany",
      "keywords": [
        "营销/增长"
      ],
      "duties": [
        "性能/容量",
        "增长营销",
        "招聘/HR",
        "客户/机构对接"
      ]
    },
    {
      "company": "Bitget",
      "func": "eng",
      "category": "exchange",
      "position": "Operations Manager ",
      "level": "mid",
      "location": "远程",
      "region": [
        "remote"
      ],
      "salary": "面议",
      "salaryNum": 0,
      "requirements": "About us",
      "link": "https://hire-r1.mokahr.com/social-recruitment/bitget/100000079#/job/4c5b88f3-a38c-4812-b41f-5c960026ca08",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "bitget||operations-manager",
      "keywords": [
        "营销/增长"
      ],
      "duties": [
        "监控告警",
        "性能/容量",
        "增长营销",
        "招聘/HR"
      ]
    },
    {
      "company": "Bitget",
      "func": "bd",
      "category": "exchange",
      "position": "Business Development Manager (Korean speaker)",
      "level": "mid",
      "location": "远程",
      "region": [
        "remote"
      ],
      "salary": "面议",
      "salaryNum": 0,
      "requirements": "About us",
      "link": "https://hire-r1.mokahr.com/social-recruitment/bitget/100000079#/job/782e6aa0-7ded-4082-91e0-456bf55eef58",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "bitget||business-development-manager-korean-speaker",
      "keywords": [
        "AML/KYC",
        "合规",
        "社区",
        "营销/增长"
      ],
      "duties": [
        "监控告警",
        "性能/容量",
        "合规风控",
        "增长营销",
        "社区运营",
        "商务拓展"
      ]
    },
    {
      "company": "Bitget",
      "func": "data",
      "category": "exchange",
      "position": "Agent Innovative Application Algorithm Engineer Agent创新应用算法工程师",
      "level": "mid",
      "location": "远程",
      "region": [
        "remote"
      ],
      "salary": "面议",
      "salaryNum": 0,
      "requirements": "About us",
      "link": "https://hire-r1.mokahr.com/social-recruitment/bitget/100000079#/job/cfb9dcfa-5b11-498e-aecf-2f380d075c69",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "bitget||agent-innovative-application-algorithm-engineer-agent创新应用算法工程师",
      "keywords": [
        "DeFi",
        "AI",
        "营销/增长"
      ],
      "duties": [
        "架构设计",
        "稳定性保障",
        "监控告警",
        "性能/容量",
        "协议/合约开发",
        "多链/跨链"
      ]
    },
    {
      "company": "Bitget",
      "func": "data",
      "category": "exchange",
      "position": "Senior AI Application Development Engineer/Agent Architect 高级 AI 应用开发工程师/Agent 架构师",
      "level": "senior",
      "location": "远程",
      "region": [
        "remote"
      ],
      "salary": "面议",
      "salaryNum": 0,
      "requirements": "About us",
      "link": "https://hire-r1.mokahr.com/social-recruitment/bitget/100000079#/job/51833464-96eb-40b8-956e-698061987c60",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "bitget||senior-ai-application-development-engineer-agent-architect-高级-ai-应用开发工程师-agent-架构师",
      "keywords": [
        "Python",
        "TypeScript",
        "On-call",
        "AI",
        "营销/增长"
      ],
      "duties": [
        "架构设计",
        "稳定性保障",
        "故障/值班",
        "性能/容量",
        "自动化",
        "增长营销"
      ]
    },
    {
      "company": "Bitget",
      "func": "product",
      "category": "exchange",
      "position": "Institutional Product Manager 机构产品经理",
      "level": "mid",
      "location": "远程",
      "region": [
        "remote"
      ],
      "salary": "面议",
      "salaryNum": 0,
      "requirements": "About us",
      "link": "https://hire-r1.mokahr.com/social-recruitment/bitget/100000079#/job/1004a662-93f5-4723-9649-e243d1a3dd01",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "bitget||institutional-product-manager-机构产品经理",
      "keywords": [
        "合规",
        "营销/增长"
      ],
      "duties": [
        "团队管理",
        "监控告警",
        "性能/容量",
        "协议/合约开发",
        "安全/审计",
        "合规风控"
      ]
    },
    {
      "company": "Bitget",
      "func": "bd",
      "category": "exchange",
      "position": "DEX Business Development Manager",
      "level": "mid",
      "location": "远程",
      "region": [
        "remote"
      ],
      "salary": "面议",
      "salaryNum": 0,
      "requirements": "About us",
      "link": "https://hire-r1.mokahr.com/social-recruitment/bitget/100000079#/job/d87a9aaa-db99-4a80-b36e-7379d8cc4e57",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "bitget||dex-business-development-manager",
      "keywords": [
        "合规",
        "社区",
        "营销/增长"
      ],
      "duties": [
        "性能/容量",
        "合规风控",
        "设计/品牌",
        "增长营销",
        "社区运营",
        "商务拓展"
      ]
    },
    {
      "company": "Bitget",
      "func": "bd",
      "category": "exchange",
      "position": "CFD Sales & Channel Operations",
      "level": "mid",
      "location": "远程",
      "region": [
        "remote"
      ],
      "salary": "面议",
      "salaryNum": 0,
      "requirements": "About us",
      "link": "https://hire-r1.mokahr.com/social-recruitment/bitget/100000079#/job/2ec669ac-59b4-4e18-97d6-4f4a044411a3",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "bitget||cfd-sales-channel-operations",
      "keywords": [
        "Python",
        "SQL",
        "安全审计",
        "合规",
        "营销/增长"
      ],
      "duties": [
        "性能/容量",
        "安全/审计",
        "合规风控",
        "增长营销",
        "商务拓展",
        "招聘/HR"
      ]
    },
    {
      "company": "Bitget",
      "func": "eng",
      "category": "exchange",
      "position": "Pakistan Country CEO/MD",
      "level": "mid",
      "location": "远程",
      "region": [
        "remote"
      ],
      "salary": "面议",
      "salaryNum": 0,
      "requirements": "About us",
      "link": "https://hire-r1.mokahr.com/social-recruitment/bitget/100000079#/job/61bcb5ca-b9a6-4413-af5e-a4964125d5bc",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "bitget||pakistan-country-ceo-md",
      "keywords": [
        "AML/KYC",
        "合规",
        "营销/增长"
      ],
      "duties": [
        "团队管理",
        "性能/容量",
        "安全/审计",
        "合规风控",
        "增长营销",
        "客户/机构对接"
      ]
    },
    {
      "company": "Bitget",
      "func": "product",
      "category": "exchange",
      "position": "Payfi Product Manager Payfi 产品经理",
      "level": "mid",
      "location": "远程",
      "region": [
        "remote"
      ],
      "salary": "面议",
      "salaryNum": 0,
      "requirements": "About us",
      "link": "https://hire-r1.mokahr.com/social-recruitment/bitget/100000079#/job/4ccf629c-7739-4121-8fd7-47af114397e1",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "bitget||payfi-product-manager-payfi-产品经理",
      "keywords": [
        "Staking",
        "Wallet",
        "AML/KYC",
        "合规",
        "营销/增长"
      ],
      "duties": [
        "性能/容量",
        "节点运维",
        "协议/合约开发",
        "多链/跨链",
        "安全/审计",
        "合规风控"
      ]
    },
    {
      "company": "Bitget",
      "func": "security",
      "category": "exchange",
      "position": "US Equity Risk Control Operations 美股风控运营",
      "level": "mid",
      "location": "远程",
      "region": [
        "remote"
      ],
      "salary": "面议",
      "salaryNum": 0,
      "requirements": "About us",
      "link": "https://hire-r1.mokahr.com/social-recruitment/bitget/100000079#/job/45c493ac-a98b-47bc-bd31-f1a7da28bd42",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "bitget||us-equity-risk-control-operations-美股风控运营",
      "keywords": [
        "合规",
        "营销/增长"
      ],
      "duties": [
        "监控告警",
        "性能/容量",
        "合规风控",
        "增长营销",
        "社区运营",
        "招聘/HR"
      ]
    },
    {
      "company": "Bitget",
      "func": "growth",
      "category": "exchange",
      "position": "Stock Market Event Planning 股票活动策划",
      "level": "mid",
      "location": "远程",
      "region": [
        "remote"
      ],
      "salary": "面议",
      "salaryNum": 0,
      "requirements": "About us",
      "link": "https://hire-r1.mokahr.com/social-recruitment/bitget/100000079#/job/cd2c5772-630f-4b6b-aee3-8781991cf461",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "bitget||stock-market-event-planning-股票活动策划",
      "keywords": [
        "营销/增长"
      ],
      "duties": [
        "性能/容量",
        "数据分析",
        "产品规划",
        "增长营销",
        "社区运营",
        "招聘/HR"
      ]
    },
    {
      "company": "Bitget",
      "func": "security",
      "category": "exchange",
      "position": "资金风控产品经理",
      "level": "mid",
      "location": "远程",
      "region": [
        "remote"
      ],
      "salary": "面议",
      "salaryNum": 0,
      "requirements": "About us",
      "link": "https://hire-r1.mokahr.com/social-recruitment/bitget/100000079#/job/2bff6542-3ff2-4cac-b049-e85600d5b185",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "bitget||资金风控产品经理",
      "keywords": [
        "AML/KYC",
        "合规",
        "营销/增长",
        "出入金"
      ],
      "duties": [
        "架构设计",
        "监控告警",
        "性能/容量",
        "部署发布",
        "安全/审计",
        "合规风控"
      ]
    },
    {
      "company": "Bitget",
      "func": "growth",
      "category": "exchange",
      "position": "US Equity Clearing and Settlement Operations 美股清结算运营",
      "level": "mid",
      "location": "远程",
      "region": [
        "remote"
      ],
      "salary": "面议",
      "salaryNum": 0,
      "requirements": "About us",
      "link": "https://hire-r1.mokahr.com/social-recruitment/bitget/100000079#/job/4c06c042-2672-4fe5-99a3-882c530a5469",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "bitget||us-equity-clearing-and-settlement-operations-美股清结算运营",
      "keywords": [
        "安全审计",
        "合规",
        "营销/增长"
      ],
      "duties": [
        "监控告警",
        "性能/容量",
        "自动化",
        "安全/审计",
        "合规风控",
        "增长营销"
      ]
    },
    {
      "company": "Bitget",
      "func": "data",
      "category": "exchange",
      "position": "Senior Equity Analyst 资深股票分析师",
      "level": "senior",
      "location": "远程",
      "region": [
        "remote"
      ],
      "salary": "面议",
      "salaryNum": 0,
      "requirements": "About us",
      "link": "https://hire-r1.mokahr.com/social-recruitment/bitget/100000079#/job/708022d6-89e8-4aee-ad0f-d69ff4f31a34",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "bitget||senior-equity-analyst-资深股票分析师",
      "keywords": [
        "AI",
        "营销/增长"
      ],
      "duties": [
        "监控告警",
        "数据分析",
        "增长营销",
        "招聘/HR"
      ]
    },
    {
      "company": "ENS Labs",
      "func": "eng",
      "category": "chain",
      "position": "Smart Contract Engineer",
      "level": "senior",
      "location": "远程",
      "region": [
        "remote"
      ],
      "salary": "面议",
      "salaryNum": 160000,
      "requirements": "深度 Solidity 与 EVM 开发经验；ENS 协议扩展与升级；安全审计意识；参与过主网合约开发。",
      "link": "https://jobs.ashbyhq.com/ens-labs/429c9a0d-67b0-4ea0-b88f-0adffa090241",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "ens-labs||smart-contract-engineer",
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
      "company": "ENS Labs",
      "func": "eng",
      "category": "chain",
      "position": "Integrations Engineer (Web3)",
      "level": "mid",
      "location": "远程",
      "region": [
        "remote"
      ],
      "salary": "面议",
      "salaryNum": 130000,
      "requirements": "Web3 集成经验；熟悉 ENS/域名解析协议；能与第三方协议（钱包、dApp）对接；JavaScript/TypeScript。",
      "link": "https://jobs.ashbyhq.com/ens-labs/9c93564c-4e3a-4635-be6c-f9dc6cd70b26",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "ens-labs||integrations-engineer-web3",
      "keywords": [
        "TypeScript",
        "JavaScript",
        "Wallet"
      ],
      "duties": [
        "协议/合约开发"
      ]
    },
    {
      "company": "ENS Labs",
      "func": "product",
      "category": "chain",
      "position": "Product Manager (APAC Time Zones)",
      "level": "mid",
      "location": "远程（亚太时区）",
      "region": [
        "remote",
        "asia",
        "sg",
        "hk"
      ],
      "salary": "面议",
      "salaryNum": 130000,
      "requirements": "3年以上 Web3/区块链产品经验；APAC 时区；能独立驱动产品路线图；熟悉 DNS/命名协议加分。",
      "link": "https://jobs.ashbyhq.com/ens-labs/dd7200c9-c29c-44b4-81d3-165bdda73414",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "ens-labs||product-manager-apac-time-zones",
      "keywords": [],
      "duties": [
        "协议/合约开发",
        "产品规划"
      ]
    },
    {
      "company": "ENS Labs",
      "func": "design",
      "category": "chain",
      "position": "Designer",
      "level": "mid",
      "location": "远程",
      "region": [
        "remote"
      ],
      "salary": "面议",
      "salaryNum": 110000,
      "requirements": "产品设计/UI/UX；具备 Web3/DeFi 产品设计经验；Figma 熟练；理解区块链用户心理模型。",
      "link": "https://jobs.ashbyhq.com/ens-labs/30da0143-cff0-4e77-97b4-754b0a82ea25",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "ens-labs||designer",
      "keywords": [
        "DeFi"
      ],
      "duties": [
        "设计/品牌"
      ]
    },
    {
      "company": "ENS Labs",
      "func": "ops",
      "category": "chain",
      "position": "DevOps Engineer",
      "level": "mid",
      "location": "远程",
      "region": [
        "remote"
      ],
      "salary": "面议",
      "salaryNum": 130000,
      "requirements": "Kubernetes / Terraform / AWS；链上节点运维；CI/CD 自动化；区块链基础设施高可用维护。",
      "link": "https://jobs.ashbyhq.com/ens-labs/833215e7-8f5a-432d-9229-45c85c7f1fc2",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "ens-labs||devops-engineer",
      "keywords": [
        "Validator/节点",
        "Kubernetes",
        "Terraform",
        "AWS",
        "CI/CD"
      ],
      "duties": [
        "部署发布",
        "自动化",
        "节点运维",
        "协议/合约开发"
      ]
    },
    {
      "company": "Lightspark",
      "func": "eng",
      "category": "infra",
      "position": "Staff Backend Engineer, Spark",
      "level": "senior",
      "location": "美国 / 远程",
      "region": [
        "us",
        "remote"
      ],
      "salary": "面议",
      "salaryNum": 210000,
      "requirements": "Staff 级后端研发；分布式支付系统；Lightning Network / Bitcoin 协议；高吞吐量低延迟架构。",
      "link": "https://jobs.ashbyhq.com/lightspark/a97c84ff-80f0-4006-8bc8-a4a21139c382",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "lightspark||staff-backend-engineer-spark",
      "keywords": [
        "Bitcoin",
        "Spark"
      ],
      "duties": [
        "架构设计",
        "性能/容量",
        "协议/合约开发"
      ]
    },
    {
      "company": "Lightspark",
      "func": "eng",
      "category": "infra",
      "position": "Senior Fullstack Engineer, Connect",
      "level": "senior",
      "location": "美国 / 远程",
      "region": [
        "us",
        "remote"
      ],
      "salary": "面议",
      "salaryNum": 185000,
      "requirements": "全栈（React + 后端服务）；Bitcoin/Lightning 支付集成；API 平台构建；5年以上工程经验。",
      "link": "https://jobs.ashbyhq.com/lightspark/290b0276-47a4-4277-b349-22fb1225b42b",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "lightspark||senior-fullstack-engineer-connect",
      "keywords": [
        "React",
        "Bitcoin"
      ],
      "duties": []
    },
    {
      "company": "Lightspark",
      "func": "security",
      "category": "infra",
      "position": "Senior Crypto Security Engineer",
      "level": "senior",
      "location": "美国 / 远程",
      "region": [
        "us",
        "remote"
      ],
      "salary": "面议",
      "salaryNum": 210000,
      "requirements": "区块链协议安全+基础设施安全+应用安全三向覆盖；Lightning Network 密钥管理；渗透测试；密码学。",
      "link": "https://jobs.ashbyhq.com/lightspark/fb02d6c1-aa2a-4aa7-bee5-2ef0d49ead9f",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "lightspark||senior-crypto-security-engineer",
      "keywords": [],
      "duties": [
        "协议/合约开发",
        "安全/审计"
      ]
    },
    {
      "company": "Lightspark",
      "func": "security",
      "category": "infra",
      "position": "Senior Security Engineer",
      "level": "senior",
      "location": "美国 / 远程",
      "region": [
        "us",
        "remote"
      ],
      "salary": "面议",
      "salaryNum": 185000,
      "requirements": "安全架构与框架建设；安全审计与事件响应；检测与防御体系；5年以上安全工程经验。",
      "link": "https://jobs.ashbyhq.com/lightspark/fdc6f89b-d970-466b-a106-7c2253d77388",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "lightspark||senior-security-engineer",
      "keywords": [
        "安全审计"
      ],
      "duties": [
        "架构设计",
        "故障/值班",
        "安全/审计"
      ]
    },
    {
      "company": "Polymarket",
      "func": "eng",
      "category": "defi",
      "position": "Senior Product Engineer",
      "level": "senior",
      "location": "纽约 / 远程",
      "region": [
        "us",
        "remote"
      ],
      "salary": "面议",
      "salaryNum": 200000,
      "requirements": "产品导向型全栈工程师；React + TypeScript + 后端服务；链上预测市场产品开发；5年以上经验。",
      "link": "https://jobs.ashbyhq.com/polymarket/84d100c2-bb38-470a-bb7e-400730f11214",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "polymarket||senior-product-engineer",
      "keywords": [
        "TypeScript",
        "React"
      ],
      "duties": [
        "协议/合约开发"
      ]
    },
    {
      "company": "Polymarket",
      "func": "eng",
      "category": "defi",
      "position": "Software Engineer, Markets",
      "level": "mid",
      "location": "纽约 / 远程",
      "region": [
        "us",
        "remote"
      ],
      "salary": "面议",
      "salaryNum": 175000,
      "requirements": "全栈工程师；DeFi/链上市场合约开发；Polygon / EVM；与智能合约团队紧密协作。",
      "link": "https://jobs.ashbyhq.com/polymarket/e353d1bc-9b67-476f-846c-961e1db8c49b",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "polymarket||software-engineer-markets",
      "keywords": [
        "Smart Contract",
        "EVM",
        "DeFi"
      ],
      "duties": [
        "协议/合约开发"
      ]
    },
    {
      "company": "Polymarket",
      "func": "design",
      "category": "defi",
      "position": "Design Engineer",
      "level": "mid",
      "location": "纽约 / 远程",
      "region": [
        "us",
        "remote"
      ],
      "salary": "面议",
      "salaryNum": 155000,
      "requirements": "前端 + 设计双修；React / CSS-in-JS；极致用户体验；对 DeFi 产品有强烈审美直觉。",
      "link": "https://jobs.ashbyhq.com/polymarket/05c897c8-dc57-4332-a730-cf6f4b911b8f",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "polymarket||design-engineer",
      "keywords": [
        "React",
        "DeFi"
      ],
      "duties": []
    },
    {
      "company": "Ellipsis Labs",
      "func": "eng",
      "category": "defi",
      "position": "Senior Smart Contract Engineer (EVM)",
      "level": "senior",
      "location": "远程",
      "region": [
        "remote",
        "us"
      ],
      "salary": "面议",
      "salaryNum": 200000,
      "requirements": "Solidity 高级开发；EVM 低级优化；Solana 经验加分；构建链上 DEX/AMM 的丰富实战。",
      "link": "https://jobs.ashbyhq.com/ellipsislabs/f5200c58-cada-4e8b-b398-67175ec4bd6b",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "ellipsis-labs||senior-smart-contract-engineer-evm",
      "keywords": [
        "Solidity",
        "Smart Contract",
        "EVM",
        "Solana"
      ],
      "duties": [
        "性能/容量",
        "协议/合约开发"
      ]
    },
    {
      "company": "Robinhood",
      "func": "ops",
      "category": "exchange",
      "position": "Senior Software Engineer, Reliability",
      "level": "senior",
      "location": "美国（门洛帕克/纽约）",
      "region": [
        "us"
      ],
      "salary": "面议",
      "salaryNum": 200000,
      "requirements": "SRE / 可靠性工程；大规模分布式系统；加密资产与经纪业务系统高可用；Go/Python；Kubernetes。",
      "link": "https://boards.greenhouse.io/robinhood/jobs/6567560",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "robinhood||senior-software-engineer-reliability",
      "keywords": [
        "Go",
        "Python",
        "Kubernetes"
      ],
      "duties": [
        "稳定性保障"
      ]
    },
    {
      "company": "Gate.io",
      "func": "growth",
      "category": "exchange",
      "position": "Growth Operations Manager, Gate Web3 Wallet",
      "level": "mid",
      "location": "远程 / 亚太",
      "region": [
        "remote",
        "asia",
        "hk",
        "sg"
      ],
      "salary": "面议",
      "salaryNum": 100000,
      "requirements": "Web3 Wallet 用户增长策略；DeFi/NFT 生态整合；3年以上增长运营经验；熟悉链上数据分析。",
      "link": "https://jobs.lever.co/gate/1abdec93-a15f-4878-b5f7-3c49a62d5f8e",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "gate-io||growth-operations-manager-gate-web3-wallet",
      "keywords": [
        "DeFi",
        "Wallet",
        "营销/增长"
      ],
      "duties": [
        "协议/合约开发",
        "数据分析",
        "增长营销",
        "社区运营"
      ]
    },
    {
      "company": "OKX",
      "func": "ga",
      "category": "exchange",
      "position": "Legal Counsel, DeFi/Web3",
      "level": "mid",
      "location": "新加坡 / 香港",
      "region": [
        "sg",
        "hk"
      ],
      "salary": "面议",
      "salaryNum": 150000,
      "requirements": "4年以上加密/金融法律经验；DeFi 协议法律尽职调查；监管合规咨询；英语流利；律师执照。",
      "link": "https://boards.greenhouse.io/okx/jobs/5817816003",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "okx||legal-counsel-defi-web3",
      "keywords": [
        "DeFi",
        "合规"
      ],
      "duties": [
        "协议/合约开发",
        "合规风控"
      ]
    },
    {
      "company": "Trust Wallet",
      "func": "growth",
      "category": "defi",
      "position": "Growth Marketing Specialist (Bilingual: Chinese & English)",
      "level": "mid",
      "location": "远程",
      "region": [
        "remote",
        "asia",
        "cn"
      ],
      "salary": "面议",
      "salaryNum": 90000,
      "requirements": "中英双语；Web3 钱包/DeFi 用户增长；社区营销；KOL 合作；数据驱动增长实验；2年以上经验。",
      "link": "https://jobs.ashbyhq.com/trust-wallet/09610212-5f29-4cea-b136-db102be0f516",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "trust-wallet||growth-marketing-specialist-bilingual-chinese-english",
      "keywords": [
        "DeFi",
        "Wallet",
        "社区",
        "营销/增长"
      ],
      "duties": [
        "增长营销",
        "社区运营"
      ]
    },
    {
      "company": "Trust Wallet",
      "func": "data",
      "category": "defi",
      "position": "Senior Data Analyst (Web3)",
      "level": "senior",
      "location": "远程",
      "region": [
        "remote"
      ],
      "salary": "面议",
      "salaryNum": 130000,
      "requirements": "链上数据分析；Dune Analytics / Nansen；SQL / Python；钱包用户行为建模；DeFi 数据洞察。",
      "link": "https://jobs.ashbyhq.com/trust-wallet/04239652-62bb-43d7-87ea-844b0cdfc844",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "trust-wallet||senior-data-analyst-web3",
      "keywords": [
        "Python",
        "DeFi",
        "Wallet",
        "SQL"
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
      "position": "Data Scientist, LLM & AI Agent Engineer (Applied AI)",
      "level": "mid",
      "location": "远程",
      "region": [
        "remote"
      ],
      "salary": "面议",
      "salaryNum": 150000,
      "requirements": "AI 风控团队；LLM/AI Agent 构建；非结构化数据处理；Python + PyTorch；金融安全场景优化经验。",
      "link": "https://jobs.lever.co/binance/0531f274-7479-46f5-9d24-db078bc9515a",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "binance||data-scientist-llm-ai-agent-engineer-applied-ai",
      "keywords": [
        "Python",
        "AI"
      ],
      "duties": [
        "性能/容量",
        "安全/审计",
        "合规风控",
        "数据分析"
      ]
    },
    {
      "company": "Serotonin",
      "func": "growth",
      "category": "other",
      "position": "Web3 Social Media Manager",
      "level": "mid",
      "location": "欧洲（远程）",
      "region": [
        "eu",
        "remote"
      ],
      "salary": "面议",
      "salaryNum": 75000,
      "requirements": "Web3 社交媒体策略；Twitter/X、Farcaster、Lens 生态运营；内容创作；3年以上加密行业品牌经验。",
      "link": "https://jobs.lever.co/serotonin/72fb42cf-a9ef-45e2-8374-ec67e92ab324",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "serotonin||web3-social-media-manager",
      "keywords": [],
      "duties": [
        "社区运营"
      ]
    },
    {
      "company": "Crypto.com",
      "func": "ga",
      "category": "exchange",
      "position": "Legal Counsel - Capital Markets - European Union",
      "level": "mid",
      "location": "欧洲（远程/混合）",
      "region": [
        "eu",
        "remote"
      ],
      "salary": "面议",
      "salaryNum": 140000,
      "requirements": "欧盟金融监管（MiFID II/MiCA）；资本市场法律；加密资产发行合规；英语+欧盟语言；律师资格。",
      "link": "https://jobs.lever.co/crypto/26710fb2-e787-45fc-b38a-98b363177cbb",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "crypto-com||legal-counsel-capital-markets-european-union",
      "keywords": [
        "合规"
      ],
      "duties": [
        "合规风控"
      ]
    },
    {
      "company": "Offchain Labs",
      "func": "data",
      "category": "chain",
      "position": "Research Scientist/Engineer",
      "level": "senior",
      "location": "美国 / 远程",
      "region": [
        "us",
        "remote"
      ],
      "salary": "面议",
      "salaryNum": 190000,
      "requirements": "L2/Rollup 协议研究；密码学/博弈论/经济学背景；Arbitrum 生态研究；发表过同行评审论文优先。",
      "link": "https://jobs.lever.co/offchainlabs/ec604e46-11b5-4528-b21b-c1ce9bd8ccc0",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "offchain-labs||research-scientist-engineer",
      "keywords": [
        "L2/Rollup"
      ],
      "duties": [
        "协议/合约开发"
      ]
    },
    {
      "company": "Coins.ph",
      "func": "ga",
      "category": "exchange",
      "position": "AML Compliance Officer",
      "level": "mid",
      "location": "Taguig City, Metro Manila, Philippines",
      "region": [
        "asia"
      ],
      "salary": "面议",
      "salaryNum": 0,
      "requirements": "Join the Pioneer Crypto Brand in the Philippines!",
      "link": "https://jobs.lever.co/coins/8f1dcac0-0b88-429e-a5d8-2583083c59f3",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "coins-ph||aml-compliance-officer",
      "keywords": [
        "安全审计",
        "AML/KYC",
        "合规",
        "营销/增长"
      ],
      "duties": [
        "团队管理",
        "监控告警",
        "安全/审计",
        "合规风控",
        "设计/品牌",
        "增长营销"
      ]
    },
    {
      "company": "Coins.ph",
      "func": "data",
      "category": "exchange",
      "position": "AI Product Manager",
      "level": "mid",
      "location": "Any",
      "region": [
        "remote"
      ],
      "salary": "面议",
      "salaryNum": 0,
      "requirements": "Responsibilities：",
      "link": "https://jobs.lever.co/coins/be0cf3c8-7d98-4546-b849-5e7a80bef0fe",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "coins-ph||ai-product-manager",
      "keywords": [
        "Machine Learning",
        "AI",
        "合规"
      ],
      "duties": [
        "监控告警",
        "性能/容量",
        "自动化",
        "合规风控",
        "数据分析",
        "产品规划"
      ]
    },
    {
      "company": "Coins.ph",
      "func": "ga",
      "category": "exchange",
      "position": "Administrative Assistant / Executive Assistant (HR)",
      "level": "mid",
      "location": "Hong Kong",
      "region": [
        "hk"
      ],
      "salary": "面议",
      "salaryNum": 0,
      "requirements": "We’re looking for a motivated Administrative Assistant / Executive Assistant to support our HK office and assist with da",
      "link": "https://jobs.lever.co/coins/b8e47a96-89dc-4d44-8345-acafc5bf93e8",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "coins-ph||administrative-assistant-executive-assistant-hr",
      "keywords": [
        "营销/增长"
      ],
      "duties": [
        "团队管理",
        "增长营销",
        "招聘/HR"
      ]
    },
    {
      "company": "Coins.ph",
      "func": "eng",
      "category": "exchange",
      "position": "Administrative Assistant / Executive Assistant",
      "level": "mid",
      "location": "Hong Kong",
      "region": [
        "hk"
      ],
      "salary": "面议",
      "salaryNum": 0,
      "requirements": "We’re looking for a motivated Administrative Assistant / Executive Assistant to support our HK office and assist with da",
      "link": "https://jobs.lever.co/coins/6a09a4eb-3745-4a7f-9f72-a9905ad8450e",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "coins-ph||administrative-assistant-executive-assistant",
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
      "company": "Coins.ph",
      "func": "eng",
      "category": "exchange",
      "position": "Accounts Payable Specialist",
      "level": "mid",
      "location": "Taguig City, Metro Manila, Philippines",
      "region": [
        "asia"
      ],
      "salary": "面议",
      "salaryNum": 0,
      "requirements": "Join the Pioneer Crypto Brand in the Philippines!",
      "link": "https://jobs.lever.co/coins/088e3250-6d7a-410c-bbd5-7b8cf5cba7a3",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "coins-ph||accounts-payable-specialist",
      "keywords": [
        "营销/增长"
      ],
      "duties": [
        "监控告警",
        "合规风控",
        "设计/品牌",
        "增长营销",
        "客户/机构对接"
      ]
    },
    {
      "company": "Coins.ph",
      "func": "eng",
      "category": "exchange",
      "position": "Accounting Manager",
      "level": "mid",
      "location": "Taguig City, Metro Manila, Philippines",
      "region": [
        "asia"
      ],
      "salary": "面议",
      "salaryNum": 0,
      "requirements": "Join the Pioneer Crypto Brand in the Philippines!",
      "link": "https://jobs.lever.co/coins/0c30e33f-1ee4-4661-b538-8630ad8e0caa",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "coins-ph||accounting-manager",
      "keywords": [
        "安全审计",
        "合规"
      ],
      "duties": [
        "自动化",
        "安全/审计",
        "合规风控",
        "设计/品牌"
      ]
    },
    {
      "company": "Coins.ph",
      "func": "ga",
      "category": "exchange",
      "position": "Accountant",
      "level": "mid",
      "location": "Taguig City, Metro Manila, Philippines",
      "region": [
        "asia"
      ],
      "salary": "面议",
      "salaryNum": 0,
      "requirements": "Join the Pioneer Crypto Brand in the Philippines!",
      "link": "https://jobs.lever.co/coins/1b13a787-35e7-473d-a989-d84dbcf9068f",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "coins-ph||accountant",
      "keywords": [
        "营销/增长"
      ],
      "duties": [
        "安全/审计",
        "合规风控",
        "设计/品牌",
        "增长营销",
        "客户/机构对接"
      ]
    },
    {
      "company": "Coins.ph",
      "func": "eng",
      "category": "exchange",
      "position": "Account Manager - Local Payments",
      "level": "mid",
      "location": "Taguig City, Metro Manila, Philippines",
      "region": [
        "asia"
      ],
      "salary": "面议",
      "salaryNum": 0,
      "requirements": "Join the Pioneer Crypto Brand in the Philippines!",
      "link": "https://jobs.lever.co/coins/37b5b17f-4c22-4a83-8aa4-462d8c52438b",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "coins-ph||account-manager-local-payments",
      "keywords": [
        "Wallet",
        "营销/增长"
      ],
      "duties": [
        "监控告警",
        "性能/容量",
        "合规风控",
        "设计/品牌",
        "增长营销",
        "商务拓展"
      ]
    },
    {
      "company": "Coins.ph",
      "func": "eng",
      "category": "exchange",
      "position": "Account Manager - International Remittance",
      "level": "mid",
      "location": "Taguig City, Metro Manila, Philippines",
      "region": [
        "asia"
      ],
      "salary": "面议",
      "salaryNum": 0,
      "requirements": "Join the Pioneer Crypto Brand in the Philippines!",
      "link": "https://jobs.lever.co/coins/85990921-0758-4d21-9f2f-41f8da4663e5",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "coins-ph||account-manager-international-remittance",
      "keywords": [
        "Wallet",
        "营销/增长"
      ],
      "duties": [
        "监控告警",
        "性能/容量",
        "合规风控",
        "设计/品牌",
        "增长营销",
        "商务拓展"
      ]
    },
    {
      "company": "Coins.ph",
      "func": "eng",
      "category": "exchange",
      "position": "Account Management and Crypto Associate",
      "level": "mid",
      "location": "Taguig City, Metro Manila, Philippines",
      "region": [
        "asia"
      ],
      "salary": "面议",
      "salaryNum": 0,
      "requirements": "Join the Pioneer Crypto Brand in the Philippines!",
      "link": "https://jobs.lever.co/coins/62c1f217-d558-4422-b93f-42ec241144e5",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "coins-ph||account-management-and-crypto-associate",
      "keywords": [
        "合规",
        "营销/增长"
      ],
      "duties": [
        "监控告警",
        "性能/容量",
        "合规风控",
        "设计/品牌",
        "增长营销",
        "客户/机构对接"
      ]
    },
    {
      "company": "Gate.io",
      "func": "data",
      "category": "exchange",
      "position": "Machine Learning Architect",
      "level": "mid",
      "location": "APAC-C1",
      "region": [
        "remote"
      ],
      "salary": "面议",
      "salaryNum": 0,
      "requirements": "我们的愿景",
      "link": "https://jobs.lever.co/gate/41d21fd6-597f-41d1-a428-fb535a393ce7",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "gate-io||machine-learning-architect",
      "keywords": [
        "Go",
        "Python",
        "Flink",
        "Spark",
        "ClickHouse",
        "Machine Learning",
        "AI",
        "营销/增长"
      ],
      "duties": [
        "团队管理",
        "架构设计",
        "稳定性保障",
        "监控告警",
        "性能/容量",
        "部署发布"
      ]
    },
    {
      "company": "Gate.io",
      "func": "eng",
      "category": "exchange",
      "position": "Junior Event Specialist",
      "level": "mid",
      "location": "APAC-T1",
      "region": [
        "remote"
      ],
      "salary": "面议",
      "salaryNum": 0,
      "requirements": "Our Vision",
      "link": "https://jobs.lever.co/gate/1b007203-2e97-4f9f-a1eb-9e3a7a71a26a",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "gate-io||junior-event-specialist",
      "keywords": [
        "L2/Rollup",
        "Solana",
        "营销/增长"
      ],
      "duties": [
        "安全/审计",
        "增长营销",
        "客户/机构对接"
      ]
    },
    {
      "company": "Gate.io",
      "func": "eng",
      "category": "exchange",
      "position": "Investment Associate",
      "level": "mid",
      "location": "远程",
      "region": [
        "remote"
      ],
      "salary": "面议",
      "salaryNum": 0,
      "requirements": "Our Vision",
      "link": "https://jobs.lever.co/gate/3e948b41-310d-4859-9ec7-0b799deb3f1b",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "gate-io||investment-associate",
      "keywords": [],
      "duties": [
        "安全/审计",
        "客户/机构对接"
      ]
    },
    {
      "company": "Gate.io",
      "func": "design",
      "category": "exchange",
      "position": "Executive Brand Operations",
      "level": "mid",
      "location": "APAC-C1",
      "region": [
        "remote"
      ],
      "salary": "面议",
      "salaryNum": 0,
      "requirements": "Our Vision",
      "link": "https://jobs.lever.co/gate/c05cc7a6-715d-4c99-80fe-57ee841c875e",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "gate-io||executive-brand-operations",
      "keywords": [
        "DeFi"
      ],
      "duties": [
        "监控告警",
        "协议/合约开发",
        "安全/审计",
        "设计/品牌",
        "客户/机构对接"
      ]
    },
    {
      "company": "Gate.io",
      "func": "eng",
      "category": "exchange",
      "position": "Ecosystem Operation Manager (Superlink)",
      "level": "mid",
      "location": "APAC-T1",
      "region": [
        "remote"
      ],
      "salary": "面议",
      "salaryNum": 0,
      "requirements": "About Us:",
      "link": "https://jobs.lever.co/gate/7e2ff8bf-11aa-4216-9f51-5a2f7259d0b7",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "gate-io||ecosystem-operation-manager-superlink",
      "keywords": [
        "Staking",
        "营销/增长"
      ],
      "duties": [
        "监控告警",
        "性能/容量",
        "节点运维",
        "增长营销",
        "商务拓展",
        "客户/机构对接"
      ]
    },
    {
      "company": "Gate.io",
      "func": "eng",
      "category": "exchange",
      "position": "Development Engineer - Java",
      "level": "mid",
      "location": "APAC-C1",
      "region": [
        "remote"
      ],
      "salary": "面议",
      "salaryNum": 0,
      "requirements": "我们的愿景",
      "link": "https://jobs.lever.co/gate/820e49e8-1410-470e-a693-b7a826114ab8",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "gate-io||development-engineer-java",
      "keywords": [
        "Go",
        "Smart Contract",
        "RPC",
        "Kubernetes",
        "Docker",
        "Kafka",
        "SQL",
        "合规"
      ],
      "duties": [
        "架构设计",
        "性能/容量",
        "部署发布",
        "节点运维",
        "协议/合约开发",
        "安全/审计"
      ]
    },
    {
      "company": "Gate.io",
      "func": "bd",
      "category": "exchange",
      "position": "Business Development Manager",
      "level": "mid",
      "location": "Global-NAJ",
      "region": [
        "remote"
      ],
      "salary": "面议",
      "salaryNum": 0,
      "requirements": "Our Vision",
      "link": "https://jobs.lever.co/gate/432e213a-7f09-4a16-9dc0-7bcdf0ffc362",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "gate-io||business-development-manager",
      "keywords": [
        "DeFi",
        "合规",
        "社区",
        "营销/增长"
      ],
      "duties": [
        "性能/容量",
        "协议/合约开发",
        "安全/审计",
        "合规风控",
        "设计/品牌",
        "增长营销"
      ]
    },
    {
      "company": "Gate.io",
      "func": "eng",
      "category": "exchange",
      "position": "Backend Architect",
      "level": "mid",
      "location": "APAC-C1",
      "region": [
        "remote"
      ],
      "salary": "面议",
      "salaryNum": 0,
      "requirements": "我们的愿景",
      "link": "https://jobs.lever.co/gate/4e69c348-8acc-4a57-86f9-6f8d9a4b6791",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "gate-io||backend-architect",
      "keywords": [
        "Go",
        "Kafka"
      ],
      "duties": [
        "团队管理",
        "架构设计",
        "性能/容量",
        "部署发布",
        "安全/审计",
        "客户/机构对接"
      ]
    },
    {
      "company": "Gate.io",
      "func": "data",
      "category": "exchange",
      "position": "AI算法工程师",
      "level": "mid",
      "location": "APAC-C1",
      "region": [
        "remote"
      ],
      "salary": "面议",
      "salaryNum": 0,
      "requirements": "我们的愿景",
      "link": "https://jobs.lever.co/gate/fea62735-7a50-4b0c-88b6-ce840c1eb8bc",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "gate-io||ai算法工程师",
      "keywords": [
        "Machine Learning",
        "AI"
      ],
      "duties": [
        "稳定性保障",
        "性能/容量",
        "部署发布",
        "安全/审计",
        "数据分析",
        "客户/机构对接"
      ]
    },
    {
      "company": "Gate.io",
      "func": "data",
      "category": "exchange",
      "position": "AI研发工程师",
      "level": "mid",
      "location": "APAC-C1",
      "region": [
        "remote"
      ],
      "salary": "面议",
      "salaryNum": 0,
      "requirements": "About Gate：",
      "link": "https://jobs.lever.co/gate/26d78072-0282-4e71-bccc-5ecb79282269",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "gate-io||ai研发工程师",
      "keywords": [
        "Go",
        "Python",
        "AI"
      ],
      "duties": [
        "架构设计",
        "故障/值班",
        "性能/容量",
        "产品规划"
      ]
    },
    {
      "company": "BTSE",
      "func": "eng",
      "category": "exchange",
      "position": "[Fintech] Operations Specialist (Mandarin-speaking, KL based)",
      "level": "mid",
      "location": "Malaysia",
      "region": [
        "remote"
      ],
      "salary": "面议",
      "salaryNum": 0,
      "requirements": "About BTSE:",
      "link": "https://jobs.lever.co/BTSE/c218f0e2-1b6e-43a0-bf7c-644083163386",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "btse||fintech-operations-specialist-mandarin-speaking-kl-based",
      "keywords": [
        "Wallet",
        "AML/KYC",
        "营销/增长"
      ],
      "duties": [
        "团队管理",
        "监控告警",
        "合规风控",
        "增长营销",
        "招聘/HR",
        "客户/机构对接"
      ]
    },
    {
      "company": "BTSE",
      "func": "eng",
      "category": "exchange",
      "position": "[Fintech] Business Operations Associate",
      "level": "mid",
      "location": "Taipei",
      "region": [
        "asia"
      ],
      "salary": "面议",
      "salaryNum": 0,
      "requirements": "About BTSE:",
      "link": "https://jobs.lever.co/BTSE/3f257771-710a-4d23-8e27-19b1e5a94f73",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "btse||fintech-business-operations-associate",
      "keywords": [
        "合规",
        "营销/增长"
      ],
      "duties": [
        "监控告警",
        "性能/容量",
        "安全/审计",
        "合规风控",
        "数据分析",
        "增长营销"
      ]
    },
    {
      "company": "BTSE",
      "func": "bd",
      "category": "exchange",
      "position": "[Fintech] Account Sales Lead (Payment)",
      "level": "senior",
      "location": "Taipei",
      "region": [
        "asia"
      ],
      "salary": "面议",
      "salaryNum": 0,
      "requirements": "About BTSE:",
      "link": "https://jobs.lever.co/BTSE/9d119d8d-34a5-40b0-bbef-3df7bebe4771",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "btse||fintech-account-sales-lead-payment",
      "keywords": [
        "营销/增长",
        "出入金"
      ],
      "duties": [
        "团队管理",
        "性能/容量",
        "部署发布",
        "安全/审计",
        "增长营销",
        "商务拓展"
      ]
    },
    {
      "company": "BTSE",
      "func": "eng",
      "category": "exchange",
      "position": "(Sr.) Quant Developer - Core Trading Systems",
      "level": "senior",
      "location": "Hong Kong",
      "region": [
        "hk"
      ],
      "salary": "面议",
      "salaryNum": 0,
      "requirements": "About BTSE:",
      "link": "https://jobs.lever.co/BTSE/34088667-0cdd-49b5-92db-ecc8fcffbd33",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "btse||sr-quant-developer-core-trading-systems",
      "keywords": [
        "C++",
        "Wallet",
        "Linux",
        "可观测性",
        "营销/增长"
      ],
      "duties": [
        "团队管理",
        "架构设计",
        "性能/容量",
        "部署发布",
        "协议/合约开发",
        "增长营销"
      ]
    },
    {
      "company": "BTSE",
      "func": "eng",
      "category": "exchange",
      "position": "(Sr.) QA Engineer",
      "level": "senior",
      "location": "Taipei",
      "region": [
        "asia"
      ],
      "salary": "面议",
      "salaryNum": 0,
      "requirements": "About BTSE:",
      "link": "https://jobs.lever.co/BTSE/30c3debe-a409-4bc4-8641-ff580b25493d",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "btse||sr-qa-engineer",
      "keywords": [
        "Python",
        "JavaScript",
        "营销/增长"
      ],
      "duties": [
        "架构设计",
        "性能/容量",
        "部署发布",
        "自动化",
        "安全/审计",
        "产品规划"
      ]
    },
    {
      "company": "BTSE",
      "func": "eng",
      "category": "exchange",
      "position": "(Sr.) Java Engineer, Engine Team",
      "level": "senior",
      "location": "Taipei",
      "region": [
        "asia"
      ],
      "salary": "面议",
      "salaryNum": 0,
      "requirements": "About BTSE:",
      "link": "https://jobs.lever.co/BTSE/68e90de1-52bf-4ce6-aa06-f163b483ff44",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "btse||sr-java-engineer-engine-team",
      "keywords": [
        "Go",
        "Python",
        "JavaScript",
        "SQL"
      ],
      "duties": [
        "性能/容量",
        "安全/审计",
        "招聘/HR",
        "客户/机构对接"
      ]
    },
    {
      "company": "BTSE",
      "func": "eng",
      "category": "exchange",
      "position": "(Sr.) Java Engineer - (Admin & Payment)",
      "level": "senior",
      "location": "Taipei",
      "region": [
        "asia"
      ],
      "salary": "面议",
      "salaryNum": 0,
      "requirements": "About BTSE:",
      "link": "https://jobs.lever.co/BTSE/944f70fc-99de-4f07-8e20-25d3ccfcf273",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "btse||sr-java-engineer-admin-payment",
      "keywords": [
        "Python",
        "JavaScript",
        "Kafka",
        "SQL"
      ],
      "duties": [
        "架构设计",
        "性能/容量",
        "安全/审计",
        "招聘/HR",
        "客户/机构对接"
      ]
    },
    {
      "company": "BTSE",
      "func": "eng",
      "category": "exchange",
      "position": "(Sr.) Frontend Developer (web3/blockchain experience preferred)- Mandarin Speaker",
      "level": "senior",
      "location": "Taipei",
      "region": [
        "asia"
      ],
      "salary": "面议",
      "salaryNum": 0,
      "requirements": "About BTSE:",
      "link": "https://jobs.lever.co/BTSE/1878e640-0eff-467b-984c-cf9278317721",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "btse||sr-frontend-developer-web3-blockchain-experience-preferred-mandarin-speaker",
      "keywords": [
        "React"
      ],
      "duties": [
        "架构设计",
        "故障/值班",
        "监控告警",
        "性能/容量",
        "部署发布",
        "安全/审计"
      ]
    },
    {
      "company": "BTSE",
      "func": "data",
      "category": "exchange",
      "position": "(Sr.) Data Scientist",
      "level": "senior",
      "location": "Taipei",
      "region": [
        "asia"
      ],
      "salary": "面议",
      "salaryNum": 0,
      "requirements": "About BTSE:",
      "link": "https://jobs.lever.co/BTSE/e6bd2e85-ce39-44ce-9914-c768a5852522",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "btse||sr-data-scientist",
      "keywords": [
        "Python",
        "Spark",
        "SQL"
      ],
      "duties": [
        "架构设计",
        "性能/容量",
        "安全/审计",
        "数据分析",
        "客户/机构对接"
      ]
    },
    {
      "company": "BTSE",
      "func": "ga",
      "category": "exchange",
      "position": "(Senior) Talent Acquisition Associate",
      "level": "senior",
      "location": "Taipei",
      "region": [
        "asia"
      ],
      "salary": "面议",
      "salaryNum": 0,
      "requirements": "About BTSE:",
      "link": "https://jobs.lever.co/BTSE/abd82faf-77c2-435c-8a4f-620f7c4c02ba",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "btse||senior-talent-acquisition-associate",
      "keywords": [
        "社区",
        "营销/增长"
      ],
      "duties": [
        "性能/容量",
        "安全/审计",
        "增长营销",
        "社区运营",
        "招聘/HR",
        "客户/机构对接"
      ]
    },
    {
      "company": "Arbitrum Foundation",
      "func": "eng",
      "category": "chain",
      "position": "Head of Foundation",
      "level": "head",
      "location": "Europe",
      "region": [
        "eu"
      ],
      "salary": "面议",
      "salaryNum": 0,
      "requirements": "About Arbitrum Foundation",
      "link": "https://jobs.lever.co/arbitrumfoundation/327855d4-3e0d-4495-8edf-8ee39336dda5",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "arbitrum-foundation||head-of-foundation",
      "keywords": [
        "L2/Rollup",
        "Ethereum",
        "社区",
        "营销/增长"
      ],
      "duties": [
        "团队管理",
        "性能/容量",
        "安全/审计",
        "设计/品牌",
        "增长营销",
        "社区运营"
      ]
    },
    {
      "company": "Arbitrum Foundation",
      "func": "growth",
      "category": "chain",
      "position": "Head of Ecosystem Growth",
      "level": "head",
      "location": "Europe",
      "region": [
        "eu"
      ],
      "salary": "面议",
      "salaryNum": 0,
      "requirements": "About Arbitrum Foundation",
      "link": "https://jobs.lever.co/arbitrumfoundation/5c02b8eb-58c4-47e5-ab5f-34ac1820d4a9",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "arbitrum-foundation||head-of-ecosystem-growth",
      "keywords": [
        "DeFi",
        "L2/Rollup",
        "Ethereum",
        "AI",
        "社区",
        "营销/增长"
      ],
      "duties": [
        "团队管理",
        "性能/容量",
        "安全/审计",
        "增长营销",
        "社区运营",
        "商务拓展"
      ]
    },
    {
      "company": "Arbitrum Foundation",
      "func": "eng",
      "category": "chain",
      "position": "Don't see the right role for you? Apply here!",
      "level": "mid",
      "location": "Cayman Islands",
      "region": [
        "remote"
      ],
      "salary": "面议",
      "salaryNum": 0,
      "requirements": "The Arbitrum Foundation is an organisation based in the Cayman Islands that is tasked with developing and nurturing the ",
      "link": "https://jobs.lever.co/arbitrumfoundation/2df96bea-02f9-4882-89a0-c9101256aced",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "arbitrum-foundation||don-t-see-the-right-role-for-you-apply-here",
      "keywords": [
        "L2/Rollup",
        "Ethereum"
      ],
      "duties": [
        "性能/容量",
        "安全/审计"
      ]
    },
    {
      "company": "Binance",
      "func": "data",
      "category": "exchange",
      "position": "AI Chatbot Product Manager",
      "level": "mid",
      "location": "Asia",
      "region": [
        "asia"
      ],
      "salary": "面议",
      "salaryNum": 0,
      "requirements": "Binance is a leading global blockchain ecosystem behind the world’s largest cryptocurrency exchange by trading volume an",
      "link": "https://jobs.lever.co/binance/4e1e4873-f239-4996-a42b-9b79596cfa6d",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "binance||ai-chatbot-product-manager",
      "keywords": [
        "AI",
        "营销/增长"
      ],
      "duties": [
        "安全/审计",
        "产品规划",
        "设计/品牌",
        "增长营销",
        "招聘/HR",
        "客户/机构对接"
      ]
    },
    {
      "company": "Binance",
      "func": "ops",
      "category": "exchange",
      "position": "AI Agent Platform Engineer (Openclaw)",
      "level": "mid",
      "location": "Asia",
      "region": [
        "asia"
      ],
      "salary": "面议",
      "salaryNum": 0,
      "requirements": "Binance is a leading global blockchain ecosystem behind the world’s largest cryptocurrency exchange by trading volume an",
      "link": "https://jobs.lever.co/binance/7deee48b-bc3a-454b-9224-953d3f65c244",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "binance||ai-agent-platform-engineer-openclaw",
      "keywords": [
        "Python",
        "TypeScript",
        "SQL",
        "AI",
        "合规",
        "社区",
        "营销/增长"
      ],
      "duties": [
        "性能/容量",
        "部署发布",
        "自动化",
        "安全/审计",
        "合规风控",
        "数据分析"
      ]
    },
    {
      "company": "Binance",
      "func": "eng",
      "category": "exchange",
      "position": "Affiliate Relationship Manager (APAC)",
      "level": "mid",
      "location": "Asia",
      "region": [
        "asia"
      ],
      "salary": "面议",
      "salaryNum": 0,
      "requirements": "Binance is a leading global blockchain ecosystem behind the world’s largest cryptocurrency exchange by trading volume an",
      "link": "https://jobs.lever.co/binance/87033fe9-9dfd-4df4-97b5-d767d86c1634",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "binance||affiliate-relationship-manager-apac",
      "keywords": [
        "合规",
        "营销/增长"
      ],
      "duties": [
        "监控告警",
        "性能/容量",
        "安全/审计",
        "合规风控",
        "增长营销",
        "商务拓展"
      ]
    },
    {
      "company": "Binance",
      "func": "eng",
      "category": "exchange",
      "position": "Affiliate Relationship Manager - LATAM",
      "level": "mid",
      "location": "Brazil, Sao Paulo",
      "region": [
        "remote"
      ],
      "salary": "面议",
      "salaryNum": 0,
      "requirements": "About the Role",
      "link": "https://jobs.lever.co/binance/79b09d1e-d935-4415-8545-19b99e8454e2",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "binance||affiliate-relationship-manager-latam",
      "keywords": [
        "合规",
        "营销/增长"
      ],
      "duties": [
        "监控告警",
        "性能/容量",
        "合规风控",
        "增长营销",
        "商务拓展"
      ]
    },
    {
      "company": "Binance",
      "func": "eng",
      "category": "exchange",
      "position": "Affiliate Relationship Manager - EU",
      "level": "mid",
      "location": "Spain, Madrid",
      "region": [
        "remote"
      ],
      "salary": "面议",
      "salaryNum": 0,
      "requirements": "About the Role",
      "link": "https://jobs.lever.co/binance/28cdc601-1043-43ec-847a-0d3e59cc60b1",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "binance||affiliate-relationship-manager-eu",
      "keywords": [
        "合规",
        "营销/增长"
      ],
      "duties": [
        "监控告警",
        "性能/容量",
        "合规风控",
        "增长营销",
        "商务拓展"
      ]
    },
    {
      "company": "Binance",
      "func": "eng",
      "category": "exchange",
      "position": "Affiliate Relationship Manager - CIS",
      "level": "mid",
      "location": "CIS Region",
      "region": [
        "remote"
      ],
      "salary": "面议",
      "salaryNum": 0,
      "requirements": "About the Role",
      "link": "https://jobs.lever.co/binance/602a72eb-cd07-4eb8-b007-989048261104",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "binance||affiliate-relationship-manager-cis",
      "keywords": [
        "合规",
        "营销/增长"
      ],
      "duties": [
        "监控告警",
        "性能/容量",
        "合规风控",
        "增长营销",
        "商务拓展"
      ]
    },
    {
      "company": "Binance",
      "func": "eng",
      "category": "exchange",
      "position": "Affiliate Relationship Manager",
      "level": "mid",
      "location": "South East Asia",
      "region": [
        "asia"
      ],
      "salary": "面议",
      "salaryNum": 0,
      "requirements": "Binance is a leading global blockchain ecosystem behind the world’s largest cryptocurrency exchange by trading volume an",
      "link": "https://jobs.lever.co/binance/a4afbf8d-7c5a-4146-b639-480e7d284df9",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "binance||affiliate-relationship-manager",
      "keywords": [
        "合规",
        "营销/增长"
      ],
      "duties": [
        "监控告警",
        "性能/容量",
        "安全/审计",
        "合规风控",
        "增长营销",
        "商务拓展"
      ]
    },
    {
      "company": "Binance",
      "func": "bd",
      "category": "exchange",
      "position": "Affiliate BD - Taiwan",
      "level": "mid",
      "location": "Taiwan, Taipei",
      "region": [
        "asia"
      ],
      "salary": "面议",
      "salaryNum": 0,
      "requirements": "Binance is a leading global blockchain ecosystem behind the world’s largest cryptocurrency exchange by trading volume an",
      "link": "https://jobs.lever.co/binance/c5485dc7-b92f-46ac-8d74-958a415fa652",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "binance||affiliate-bd-taiwan",
      "keywords": [
        "营销/增长"
      ],
      "duties": [
        "性能/容量",
        "安全/审计",
        "增长营销",
        "社区运营",
        "商务拓展",
        "招聘/HR"
      ]
    },
    {
      "company": "Binance",
      "func": "bd",
      "category": "exchange",
      "position": "Affiliate BD - Greater China",
      "level": "mid",
      "location": "Asia",
      "region": [
        "asia"
      ],
      "salary": "面议",
      "salaryNum": 0,
      "requirements": "Binance is a leading global blockchain ecosystem behind the world’s largest cryptocurrency exchange by trading volume an",
      "link": "https://jobs.lever.co/binance/0cb402ad-7715-4127-ad25-14ab4b142983",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "binance||affiliate-bd-greater-china",
      "keywords": [
        "营销/增长"
      ],
      "duties": [
        "性能/容量",
        "安全/审计",
        "增长营销",
        "社区运营",
        "商务拓展",
        "招聘/HR"
      ]
    },
    {
      "company": "Binance",
      "func": "ga",
      "category": "exchange",
      "position": "Accounts Payable Accountant (6-12 months)",
      "level": "mid",
      "location": "Asia",
      "region": [
        "asia"
      ],
      "salary": "面议",
      "salaryNum": 0,
      "requirements": "Binance is a leading global blockchain ecosystem behind the world’s largest cryptocurrency exchange by trading volume an",
      "link": "https://jobs.lever.co/binance/e13b4cbd-9c5a-49ea-bb41-4628ff81a981",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "binance||accounts-payable-accountant-6-12-months",
      "keywords": [
        "安全审计",
        "合规",
        "营销/增长"
      ],
      "duties": [
        "安全/审计",
        "合规风控",
        "增长营销",
        "招聘/HR",
        "客户/机构对接"
      ]
    },
    {
      "company": "MoonPay",
      "func": "security",
      "category": "other",
      "position": "Product Security Manager",
      "level": "mid",
      "location": "United States (East Coast Time Zone) - Remote",
      "region": [
        "remote",
        "us"
      ],
      "salary": "面议",
      "salaryNum": 0,
      "requirements": "About MoonPay",
      "link": "https://jobs.lever.co/moonpay/28a287e0-1e9f-4002-9ae7-7d0e61e87669",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "moonpay||product-security-manager",
      "keywords": [
        "CI/CD",
        "合规"
      ],
      "duties": [
        "团队管理",
        "故障/值班",
        "性能/容量",
        "部署发布",
        "自动化",
        "安全/审计"
      ]
    },
    {
      "company": "MoonPay",
      "func": "eng",
      "category": "other",
      "position": "Payroll Operations & Automations Manager (12 month FTC)",
      "level": "mid",
      "location": "Portugal - Remote",
      "region": [
        "remote"
      ],
      "salary": "面议",
      "salaryNum": 0,
      "requirements": "About MoonPay",
      "link": "https://jobs.lever.co/moonpay/8a3875d9-aa79-4f97-9ee3-7000fe0e910f",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "moonpay||payroll-operations-automations-manager-12-month-ftc",
      "keywords": [
        "安全审计",
        "合规"
      ],
      "duties": [
        "性能/容量",
        "自动化",
        "安全/审计",
        "合规风控",
        "客户/机构对接"
      ]
    },
    {
      "company": "MoonPay",
      "func": "data",
      "category": "other",
      "position": "KYC Operations Analyst",
      "level": "mid",
      "location": "Bengaluru, Karnataka",
      "region": [
        "remote"
      ],
      "salary": "面议",
      "salaryNum": 0,
      "requirements": "About MoonPay",
      "link": "https://jobs.lever.co/moonpay/6a6565a0-1abc-4e32-952b-1e3110ddd989",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "moonpay||kyc-operations-analyst",
      "keywords": [
        "AML/KYC",
        "合规"
      ],
      "duties": [
        "性能/容量",
        "合规风控",
        "数据分析",
        "客户/机构对接"
      ]
    },
    {
      "company": "MoonPay",
      "func": "ga",
      "category": "other",
      "position": "Join MoonPay's Talent Pool",
      "level": "mid",
      "location": "United Kingdom - Remote",
      "region": [
        "remote"
      ],
      "salary": "面议",
      "salaryNum": 0,
      "requirements": "Don’t see an open role that matches your experience right now? We’d still love to hear from you.",
      "link": "https://jobs.lever.co/moonpay/74d3186f-687a-4777-b77a-e006ff8217e1",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "moonpay||join-moonpay-s-talent-pool",
      "keywords": [],
      "duties": [
        "招聘/HR"
      ]
    },
    {
      "company": "MoonPay",
      "func": "data",
      "category": "other",
      "position": "Fraud Analyst, Fraud Investigations",
      "level": "mid",
      "location": "Mexico - Remote",
      "region": [
        "remote"
      ],
      "salary": "面议",
      "salaryNum": 0,
      "requirements": "About MoonPay",
      "link": "https://jobs.lever.co/moonpay/0a46a9e3-0581-4421-beb0-e8147f921293",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "moonpay||fraud-analyst-fraud-investigations",
      "keywords": [
        "SLO/SLA",
        "Machine Learning",
        "AI",
        "合规",
        "营销/增长"
      ],
      "duties": [
        "稳定性保障",
        "故障/值班",
        "性能/容量",
        "合规风控",
        "数据分析",
        "增长营销"
      ]
    },
    {
      "company": "MoonPay",
      "func": "eng",
      "category": "other",
      "position": "Director / Sr. Director, Trust & Safety",
      "level": "head",
      "location": "New York",
      "region": [
        "us"
      ],
      "salary": "面议",
      "salaryNum": 0,
      "requirements": "About MoonPay",
      "link": "https://jobs.lever.co/moonpay/9d92f0f4-5ec3-4134-8c69-078b5357ec91",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "moonpay||director-sr-director-trust-safety",
      "keywords": [
        "AI",
        "合规"
      ],
      "duties": [
        "团队管理",
        "性能/容量",
        "部署发布",
        "合规风控",
        "设计/品牌",
        "客户/机构对接"
      ]
    },
    {
      "company": "MoonPay",
      "func": "eng",
      "category": "other",
      "position": "Communications Manager",
      "level": "mid",
      "location": "United States (East Coast Time Zone) - Remote",
      "region": [
        "remote",
        "us"
      ],
      "salary": "面议",
      "salaryNum": 0,
      "requirements": "About MoonPay",
      "link": "https://jobs.lever.co/moonpay/ddeab868-7452-43b6-8f18-6e0718370ba4",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "moonpay||communications-manager",
      "keywords": [
        "Go",
        "合规"
      ],
      "duties": [
        "团队管理",
        "性能/容量",
        "部署发布",
        "合规风控",
        "设计/品牌",
        "商务拓展"
      ]
    },
    {
      "company": "MoonPay",
      "func": "security",
      "category": "other",
      "position": "Cloud Security Engineer",
      "level": "mid",
      "location": "United States - Hybrid",
      "region": [
        "us"
      ],
      "salary": "面议",
      "salaryNum": 0,
      "requirements": "About MoonPay",
      "link": "https://jobs.lever.co/moonpay/bc09255a-8975-492e-93e4-ecf2f16e8e45",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "moonpay||cloud-security-engineer",
      "keywords": [
        "Kubernetes",
        "Terraform",
        "AWS",
        "GCP",
        "合规"
      ],
      "duties": [
        "架构设计",
        "故障/值班",
        "监控告警",
        "性能/容量",
        "部署发布",
        "自动化"
      ]
    },
    {
      "company": "MoonPay",
      "func": "security",
      "category": "other",
      "position": "Chief Auditor",
      "level": "head",
      "location": "New York",
      "region": [
        "us"
      ],
      "salary": "面议",
      "salaryNum": 0,
      "requirements": "About MoonPay",
      "link": "https://jobs.lever.co/moonpay/cf5f8963-d2f2-4a1d-9f82-acbcdbd19a92",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "moonpay||chief-auditor",
      "keywords": [
        "安全审计",
        "AML/KYC",
        "合规"
      ],
      "duties": [
        "团队管理",
        "性能/容量",
        "安全/审计",
        "合规风控",
        "客户/机构对接"
      ]
    },
    {
      "company": "MoonPay",
      "func": "data",
      "category": "other",
      "position": "Analytics Engineer - Crypto and Payments",
      "level": "mid",
      "location": "London",
      "region": [
        "eu"
      ],
      "salary": "面议",
      "salaryNum": 0,
      "requirements": "About MoonPay",
      "link": "https://jobs.lever.co/moonpay/41efc4cd-56dc-4dbe-8164-1a5eac3b8b95",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "moonpay||analytics-engineer-crypto-and-payments",
      "keywords": [
        "合规"
      ],
      "duties": [
        "性能/容量",
        "合规风控",
        "数据分析",
        "客户/机构对接"
      ]
    },
    {
      "company": "CoinMarketCap",
      "func": "eng",
      "category": "other",
      "position": "Senior Java Engineer",
      "level": "senior",
      "location": "Global",
      "region": [
        "remote"
      ],
      "salary": "面议",
      "salaryNum": 0,
      "requirements": "Company Description",
      "link": "https://jobs.lever.co/coinmarketcap/1414e7a6-d95c-49b9-8126-ab353043c99a",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "coinmarketcap||senior-java-engineer",
      "keywords": [
        "Kubernetes",
        "Prometheus",
        "Kafka"
      ],
      "duties": [
        "架构设计",
        "故障/值班",
        "性能/容量",
        "安全/审计"
      ]
    },
    {
      "company": "CoinMarketCap",
      "func": "eng",
      "category": "other",
      "position": "Public Relations Manager",
      "level": "mid",
      "location": "Global",
      "region": [
        "remote"
      ],
      "salary": "面议",
      "salaryNum": 0,
      "requirements": "As a Public Relations Manager at CoinMarketCap, you will play a pivotal role in shaping and communicating our brand’s na",
      "link": "https://jobs.lever.co/coinmarketcap/fb6f3c5b-1a2e-40b8-a0e9-45bd84798e7c",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "coinmarketcap||public-relations-manager",
      "keywords": [
        "DeFi",
        "社区"
      ],
      "duties": [
        "监控告警",
        "协议/合约开发",
        "设计/品牌",
        "社区运营"
      ]
    },
    {
      "company": "CoinMarketCap",
      "func": "growth",
      "category": "other",
      "position": "Head of Marketing & Growth, Atlas Oracle",
      "level": "head",
      "location": "Global",
      "region": [
        "remote"
      ],
      "salary": "面议",
      "salaryNum": 0,
      "requirements": "Company Overview",
      "link": "https://jobs.lever.co/coinmarketcap/9e26d79f-acc6-4798-90a3-3eba6f28a36e",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "coinmarketcap||head-of-marketing-growth-atlas-oracle",
      "keywords": [
        "Go",
        "Smart Contract",
        "DeFi",
        "L2/Rollup",
        "营销/增长"
      ],
      "duties": [
        "团队管理",
        "架构设计",
        "故障/值班",
        "监控告警",
        "协议/合约开发",
        "安全/审计"
      ]
    },
    {
      "company": "CoinMarketCap",
      "func": "growth",
      "category": "other",
      "position": "Global VP Marketing/CMO",
      "level": "head",
      "location": "Global",
      "region": [
        "remote"
      ],
      "salary": "面议",
      "salaryNum": 0,
      "requirements": "Responsibilities:",
      "link": "https://jobs.lever.co/coinmarketcap/3badc309-fe0c-41f6-8e78-5236dc331b8c",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "coinmarketcap||global-vp-marketing-cmo",
      "keywords": [
        "社区",
        "营销/增长"
      ],
      "duties": [
        "团队管理",
        "性能/容量",
        "设计/品牌",
        "增长营销",
        "社区运营",
        "商务拓展"
      ]
    },
    {
      "company": "CoinMarketCap",
      "func": "ops",
      "category": "other",
      "position": "DevOps Engineer - Contractor",
      "level": "mid",
      "location": "Global",
      "region": [
        "remote"
      ],
      "salary": "面议",
      "salaryNum": 0,
      "requirements": "Responsibilities:",
      "link": "https://jobs.lever.co/coinmarketcap/901558ef-445f-4fdf-8fba-b2c0c5a505e3",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "coinmarketcap||devops-engineer-contractor",
      "keywords": [
        "Go",
        "Python",
        "Kubernetes",
        "Docker",
        "Terraform",
        "AWS",
        "CI/CD",
        "Prometheus"
      ],
      "duties": [
        "架构设计",
        "稳定性保障",
        "故障/值班",
        "监控告警",
        "性能/容量",
        "部署发布"
      ]
    },
    {
      "company": "CoinMarketCap",
      "func": "data",
      "category": "other",
      "position": "Developer Engineer - AI",
      "level": "mid",
      "location": "Global",
      "region": [
        "remote"
      ],
      "salary": "面议",
      "salaryNum": 0,
      "requirements": "Key Responsibilities",
      "link": "https://jobs.lever.co/coinmarketcap/27d52a7f-0dc2-46cf-8cb5-7c8cb63e3a58",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "coinmarketcap||developer-engineer-ai",
      "keywords": [
        "Solidity",
        "DeFi",
        "On-call",
        "AI",
        "社区"
      ],
      "duties": [
        "稳定性保障",
        "故障/值班",
        "性能/容量",
        "协议/合约开发",
        "社区运营"
      ]
    },
    {
      "company": "CoinMarketCap",
      "func": "bd",
      "category": "other",
      "position": "Business Development Operations(Contractor)",
      "level": "mid",
      "location": "Global",
      "region": [
        "remote"
      ],
      "salary": "面议",
      "salaryNum": 0,
      "requirements": "CoinMarketCap is the world's most-visited crypto data platform. We're looking for a sharp, organized BD Operations Contr",
      "link": "https://jobs.lever.co/coinmarketcap/bec5022e-9d06-429f-823b-2a8732072170",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "coinmarketcap||business-development-operations-contractor",
      "keywords": [],
      "duties": [
        "性能/容量",
        "商务拓展",
        "客户/机构对接"
      ]
    },
    {
      "company": "CoinMarketCap",
      "func": "bd",
      "category": "other",
      "position": "Business Development Manager, Atlas Oracle",
      "level": "mid",
      "location": "Global",
      "region": [
        "remote"
      ],
      "salary": "面议",
      "salaryNum": 0,
      "requirements": "Company Overview",
      "link": "https://jobs.lever.co/coinmarketcap/e93c4213-8df7-4f4a-a1f2-2e76b3812e4f",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "coinmarketcap||business-development-manager-atlas-oracle",
      "keywords": [
        "Smart Contract",
        "DeFi",
        "社区",
        "营销/增长"
      ],
      "duties": [
        "团队管理",
        "协议/合约开发",
        "多链/跨链",
        "安全/审计",
        "产品规划",
        "设计/品牌"
      ]
    },
    {
      "company": "CoinMarketCap",
      "func": "bd",
      "category": "other",
      "position": "Business Development Manager (Ads)",
      "level": "mid",
      "location": "Global",
      "region": [
        "remote"
      ],
      "salary": "面议",
      "salaryNum": 0,
      "requirements": "About CoinMarketCap",
      "link": "https://jobs.lever.co/coinmarketcap/08554d0e-0032-4da7-9c2f-4b39aaf5bc62",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "coinmarketcap||business-development-manager-ads",
      "keywords": [
        "Wallet",
        "营销/增长"
      ],
      "duties": [
        "监控告警",
        "性能/容量",
        "部署发布",
        "增长营销",
        "商务拓展",
        "客户/机构对接"
      ]
    },
    {
      "company": "CoinMarketCap",
      "func": "eng",
      "category": "other",
      "position": "Automation QA Engineer",
      "level": "mid",
      "location": "Global",
      "region": [
        "remote"
      ],
      "salary": "面议",
      "salaryNum": 0,
      "requirements": "Job Responsibilities",
      "link": "https://jobs.lever.co/coinmarketcap/6e8482b9-8b4f-4f81-9a4f-78d6e3c9d747",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "coinmarketcap||automation-qa-engineer",
      "keywords": [
        "Go",
        "Python",
        "Kubernetes",
        "Docker",
        "CI/CD",
        "AI"
      ],
      "duties": [
        "团队管理",
        "架构设计",
        "性能/容量",
        "部署发布",
        "自动化",
        "安全/审计"
      ]
    },
    {
      "company": "Saga",
      "func": "ops",
      "category": "chain",
      "position": "Senior Platform Engineer",
      "level": "senior",
      "location": "Los Altos",
      "region": [
        "remote"
      ],
      "salary": "面议",
      "salaryNum": 0,
      "requirements": "Saga is building a suite of products across the crypto ecosystem — from consumer fintech apps to DeFi protocols and the ",
      "link": "https://jobs.lever.co/saga-xyz/012a47ad-c15a-47c3-a459-1f14058939dd",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "saga||senior-platform-engineer",
      "keywords": [
        "Go",
        "DeFi",
        "Wallet",
        "Kubernetes",
        "Terraform",
        "AWS",
        "GCP",
        "CI/CD"
      ],
      "duties": [
        "架构设计",
        "稳定性保障",
        "故障/值班",
        "监控告警",
        "性能/容量",
        "部署发布"
      ]
    },
    {
      "company": "Saga",
      "func": "data",
      "category": "chain",
      "position": "Senior AI Engineer",
      "level": "senior",
      "location": "Los Altos",
      "region": [
        "remote"
      ],
      "salary": "面议",
      "salaryNum": 0,
      "requirements": "Saga is building the infrastructure and products for the next generation of AI agents. Our AI Character Agent Network al",
      "link": "https://jobs.lever.co/saga-xyz/6f4e2b80-c18f-4f62-b61b-da67d257b828",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "saga||senior-ai-engineer",
      "keywords": [
        "Go",
        "Python",
        "Machine Learning",
        "AI",
        "营销/增长"
      ],
      "duties": [
        "架构设计",
        "稳定性保障",
        "监控告警",
        "性能/容量",
        "部署发布",
        "协议/合约开发"
      ]
    },
    {
      "company": "Saga",
      "func": "data",
      "category": "chain",
      "position": "Head of Product – AI Agent Commerce Platform",
      "level": "head",
      "location": "Los Altos",
      "region": [
        "remote"
      ],
      "salary": "面议",
      "salaryNum": 0,
      "requirements": "About Saga AI Labs",
      "link": "https://jobs.lever.co/saga-xyz/2ba92c2a-8cbd-4d81-9995-8734d4536cd0",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "saga||head-of-product-ai-agent-commerce-platform",
      "keywords": [
        "AI",
        "合规",
        "社区",
        "营销/增长"
      ],
      "duties": [
        "团队管理",
        "架构设计",
        "性能/容量",
        "部署发布",
        "合规风控",
        "产品规划"
      ]
    },
    {
      "company": "Offchain Labs (Arbitrum)",
      "func": "security",
      "category": "chain",
      "position": "Senior Security Engineer (Offensive)",
      "level": "senior",
      "location": "Remote",
      "region": [
        "remote"
      ],
      "salary": "面议",
      "salaryNum": 0,
      "requirements": "At Offchain, we aren’t just building products: we’re leading a movement.",
      "link": "https://jobs.lever.co/offchainlabs/5dc0b755-8c1f-43c8-b268-df4b372a31d1",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "offchain-labs-arbitrum||senior-security-engineer-offensive",
      "keywords": [
        "Ethereum",
        "AWS",
        "合规",
        "社区",
        "营销/增长"
      ],
      "duties": [
        "故障/值班",
        "性能/容量",
        "自动化",
        "安全/审计",
        "合规风控",
        "增长营销"
      ]
    },
    {
      "company": "Offchain Labs (Arbitrum)",
      "func": "eng",
      "category": "chain",
      "position": "Senior PR & Communications Manager",
      "level": "senior",
      "location": "Remote",
      "region": [
        "remote"
      ],
      "salary": "面议",
      "salaryNum": 0,
      "requirements": "At Offchain, we aren’t just building products: we’re leading a movement.",
      "link": "https://jobs.lever.co/offchainlabs/ba06452d-31d5-4ed0-8330-415a0904f4eb",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "offchain-labs-arbitrum||senior-pr-communications-manager",
      "keywords": [
        "L2/Rollup",
        "Ethereum",
        "营销/增长"
      ],
      "duties": [
        "团队管理",
        "架构设计",
        "监控告警",
        "性能/容量",
        "部署发布",
        "安全/审计"
      ]
    },
    {
      "company": "Offchain Labs (Arbitrum)",
      "func": "eng",
      "category": "chain",
      "position": "Senior Backend Engineer",
      "level": "senior",
      "location": "Remote",
      "region": [
        "remote"
      ],
      "salary": "面议",
      "salaryNum": 0,
      "requirements": "At Offchain, we aren’t just building products: we’re leading a movement.",
      "link": "https://jobs.lever.co/offchainlabs/82c41afd-b4be-40d2-8bc2-3f299ced3c4a",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "offchain-labs-arbitrum||senior-backend-engineer",
      "keywords": [
        "Rust",
        "Go",
        "C++",
        "Ethereum",
        "营销/增长"
      ],
      "duties": [
        "架构设计",
        "性能/容量",
        "安全/审计",
        "增长营销"
      ]
    },
    {
      "company": "Offchain Labs (Arbitrum)",
      "func": "security",
      "category": "chain",
      "position": "Security Engineer",
      "level": "mid",
      "location": "Remote",
      "region": [
        "remote"
      ],
      "salary": "面议",
      "salaryNum": 0,
      "requirements": "At Offchain, we aren’t just building products: we’re leading a movement.",
      "link": "https://jobs.lever.co/offchainlabs/d7724d91-fc91-4697-baf3-008de0ee5e37",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "offchain-labs-arbitrum||security-engineer",
      "keywords": [
        "Ethereum",
        "Kubernetes",
        "AWS",
        "CI/CD",
        "合规",
        "营销/增长"
      ],
      "duties": [
        "架构设计",
        "性能/容量",
        "部署发布",
        "自动化",
        "安全/审计",
        "合规风控"
      ]
    },
    {
      "company": "Offchain Labs (Arbitrum)",
      "func": "eng",
      "category": "chain",
      "position": "Head of Social",
      "level": "head",
      "location": "Remote",
      "region": [
        "remote"
      ],
      "salary": "面议",
      "salaryNum": 0,
      "requirements": "At Offchain, we aren’t just building products: we’re leading a movement.",
      "link": "https://jobs.lever.co/offchainlabs/48c6703e-59e9-4178-98b0-e439de596379",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "offchain-labs-arbitrum||head-of-social",
      "keywords": [
        "Ethereum",
        "AI",
        "营销/增长"
      ],
      "duties": [
        "团队管理",
        "性能/容量",
        "自动化",
        "协议/合约开发",
        "安全/审计",
        "设计/品牌"
      ]
    },
    {
      "company": "Offchain Labs (Arbitrum)",
      "func": "ga",
      "category": "chain",
      "position": "Head of Finance",
      "level": "head",
      "location": "Remote",
      "region": [
        "remote"
      ],
      "salary": "面议",
      "salaryNum": 0,
      "requirements": "At Offchain, we aren’t just building products: we’re leading a movement.",
      "link": "https://jobs.lever.co/offchainlabs/c2e07d80-1db8-446d-9d00-2a424f5798fa",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "offchain-labs-arbitrum||head-of-finance",
      "keywords": [
        "Ethereum",
        "安全审计",
        "合规",
        "营销/增长"
      ],
      "duties": [
        "团队管理",
        "架构设计",
        "性能/容量",
        "自动化",
        "安全/审计",
        "合规风控"
      ]
    },
    {
      "company": "Offchain Labs (Arbitrum)",
      "func": "eng",
      "category": "chain",
      "position": "Head of Enterprise",
      "level": "head",
      "location": "Remote",
      "region": [
        "remote"
      ],
      "salary": "面议",
      "salaryNum": 0,
      "requirements": "At Offchain, we aren’t just building products: we’re leading a movement.",
      "link": "https://jobs.lever.co/offchainlabs/4a9df0ee-1296-4366-b2b9-6a1d1f3da7fd",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "offchain-labs-arbitrum||head-of-enterprise",
      "keywords": [
        "Go",
        "Ethereum",
        "合规",
        "营销/增长"
      ],
      "duties": [
        "团队管理",
        "性能/容量",
        "协议/合约开发",
        "安全/审计",
        "合规风控",
        "增长营销"
      ]
    },
    {
      "company": "Offchain Labs (Arbitrum)",
      "func": "eng",
      "category": "chain",
      "position": "Executive Assistant",
      "level": "mid",
      "location": "Remote",
      "region": [
        "remote"
      ],
      "salary": "面议",
      "salaryNum": 0,
      "requirements": "At Offchain, we aren’t just building products: we’re leading a movement.",
      "link": "https://jobs.lever.co/offchainlabs/09521387-2a0a-423d-b9fb-6ae3bea40a3b",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "offchain-labs-arbitrum||executive-assistant",
      "keywords": [
        "Ethereum",
        "营销/增长"
      ],
      "duties": [
        "性能/容量",
        "安全/审计",
        "增长营销"
      ]
    },
    {
      "company": "Offchain Labs (Arbitrum)",
      "func": "data",
      "category": "chain",
      "position": "Data Center Engineer (Nashville)",
      "level": "mid",
      "location": "Nashville, TN",
      "region": [
        "remote"
      ],
      "salary": "面议",
      "salaryNum": 0,
      "requirements": "At Offchain, we aren’t just building products: we’re leading a movement.",
      "link": "https://jobs.lever.co/offchainlabs/a72ff596-d3f5-4ca7-9c36-e66fd65120f5",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "offchain-labs-arbitrum||data-center-engineer-nashville",
      "keywords": [
        "Ethereum",
        "营销/增长"
      ],
      "duties": [
        "架构设计",
        "故障/值班",
        "监控告警",
        "性能/容量",
        "部署发布",
        "安全/审计"
      ]
    },
    {
      "company": "Offchain Labs (Arbitrum)",
      "func": "eng",
      "category": "chain",
      "position": "Accounting Manager",
      "level": "mid",
      "location": "Remote",
      "region": [
        "remote"
      ],
      "salary": "面议",
      "salaryNum": 0,
      "requirements": "At Offchain, we aren’t just building products: we’re leading a movement.",
      "link": "https://jobs.lever.co/offchainlabs/af4b9a90-3d59-4aae-8c89-c6c0fdad534a",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "offchain-labs-arbitrum||accounting-manager",
      "keywords": [
        "Ethereum",
        "安全审计",
        "合规",
        "营销/增长"
      ],
      "duties": [
        "团队管理",
        "性能/容量",
        "自动化",
        "安全/审计",
        "合规风控",
        "增长营销"
      ]
    },
    {
      "company": "Crypto.com",
      "func": "eng",
      "category": "exchange",
      "position": "Assistant Manager, Global Accounts Payable",
      "level": "mid",
      "location": "Hong Kong, Hong Kong SAR",
      "region": [
        "hk"
      ],
      "salary": "面议",
      "salaryNum": 0,
      "requirements": "We are seeking a tech-savvy, process-driven Accountant to lead our Accounts Payable operations and drive system efficien",
      "link": "https://jobs.lever.co/crypto/89172d08-8eba-43bd-afd6-ed4dfe48acf3",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "crypto-com||assistant-manager-global-accounts-payable",
      "keywords": [
        "Wallet",
        "安全审计",
        "合规",
        "营销/增长"
      ],
      "duties": [
        "自动化",
        "安全/审计",
        "合规风控",
        "增长营销",
        "招聘/HR",
        "客户/机构对接"
      ]
    },
    {
      "company": "Crypto.com",
      "func": "eng",
      "category": "exchange",
      "position": "Assistant Manager, Global Account Payable (AP)",
      "level": "mid",
      "location": "Hong Kong, Hong Kong SAR",
      "region": [
        "hk"
      ],
      "salary": "面议",
      "salaryNum": 0,
      "requirements": "The ideal candidate thrives on maintaining day-to-day operational excellence while actively collaborating with cross-fun",
      "link": "https://jobs.lever.co/crypto/84eef95b-6cb0-4692-8bd0-155ce8cc6497",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "crypto-com||assistant-manager-global-account-payable-ap",
      "keywords": [
        "Wallet",
        "安全审计",
        "合规",
        "营销/增长"
      ],
      "duties": [
        "自动化",
        "安全/审计",
        "合规风控",
        "增长营销",
        "招聘/HR",
        "客户/机构对接"
      ]
    },
    {
      "company": "Crypto.com",
      "func": "eng",
      "category": "exchange",
      "position": "Application Support Engineer, UK, OEX",
      "level": "mid",
      "location": "London, United Kingdom",
      "region": [
        "eu"
      ],
      "salary": "面议",
      "salaryNum": 0,
      "requirements": "Exchange Support team is responsible for maintaining global system for the firm’s cryptocurrency trading business which ",
      "link": "https://jobs.lever.co/crypto/8e514377-95f7-4c81-af1b-8161a77abad3",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "crypto-com||application-support-engineer-uk-oex",
      "keywords": [
        "Python",
        "L2/Rollup",
        "Prometheus",
        "Grafana",
        "Linux",
        "SLO/SLA",
        "安全审计"
      ],
      "duties": [
        "稳定性保障",
        "故障/值班",
        "监控告警",
        "部署发布",
        "自动化",
        "协议/合约开发"
      ]
    },
    {
      "company": "Crypto.com",
      "func": "eng",
      "category": "exchange",
      "position": "Application Support Engineer, Singapore, OEX",
      "level": "mid",
      "location": "Singapore, Singapore",
      "region": [
        "sg"
      ],
      "salary": "面议",
      "salaryNum": 0,
      "requirements": "Exchange Support team is responsible for maintaining global system for the firm’s cryptocurrency trading business which ",
      "link": "https://jobs.lever.co/crypto/b724eeb2-5202-40db-b633-c5a6be535c2d",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "crypto-com||application-support-engineer-singapore-oex",
      "keywords": [
        "Python",
        "L2/Rollup",
        "Prometheus",
        "Grafana",
        "Linux",
        "SLO/SLA",
        "安全审计"
      ],
      "duties": [
        "稳定性保障",
        "故障/值班",
        "监控告警",
        "部署发布",
        "自动化",
        "协议/合约开发"
      ]
    },
    {
      "company": "Crypto.com",
      "func": "eng",
      "category": "exchange",
      "position": "Application Support Engineer, India, OEX",
      "level": "mid",
      "location": "Bangalore, India",
      "region": [
        "remote"
      ],
      "salary": "面议",
      "salaryNum": 0,
      "requirements": "Exchange Support team is responsible for maintaining global system for the firm’s cryptocurrency trading business which ",
      "link": "https://jobs.lever.co/crypto/1edb4f86-713f-44a9-8e9c-489c662d810c",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "crypto-com||application-support-engineer-india-oex",
      "keywords": [
        "Python",
        "L2/Rollup",
        "Prometheus",
        "Grafana",
        "Linux",
        "SLO/SLA",
        "安全审计"
      ],
      "duties": [
        "稳定性保障",
        "故障/值班",
        "监控告警",
        "部署发布",
        "自动化",
        "协议/合约开发"
      ]
    },
    {
      "company": "Crypto.com",
      "func": "eng",
      "category": "exchange",
      "position": "Application Support Engineer, Hong Kong, OEX",
      "level": "mid",
      "location": "Hong Kong, Hong Kong SAR",
      "region": [
        "hk"
      ],
      "salary": "面议",
      "salaryNum": 0,
      "requirements": "Exchange Support team is responsible for maintaining global system for the firm’s cryptocurrency trading business which ",
      "link": "https://jobs.lever.co/crypto/2508a2c1-e231-4a42-b0f5-d6e199a56325",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "crypto-com||application-support-engineer-hong-kong-oex",
      "keywords": [
        "Python",
        "L2/Rollup",
        "Prometheus",
        "Grafana",
        "Linux",
        "SLO/SLA",
        "安全审计"
      ],
      "duties": [
        "稳定性保障",
        "故障/值班",
        "监控告警",
        "部署发布",
        "自动化",
        "协议/合约开发"
      ]
    },
    {
      "company": "Crypto.com",
      "func": "eng",
      "category": "exchange",
      "position": "Application Support Engineer, Canada, OEX",
      "level": "mid",
      "location": "Canada",
      "region": [
        "remote"
      ],
      "salary": "面议",
      "salaryNum": 0,
      "requirements": "Exchange Support team is responsible for maintaining global system for the firm’s cryptocurrency trading business which ",
      "link": "https://jobs.lever.co/crypto/e8ea9700-b49c-457a-bcdf-a928b42f25df",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "crypto-com||application-support-engineer-canada-oex",
      "keywords": [
        "Python",
        "L2/Rollup",
        "Prometheus",
        "Grafana",
        "Linux",
        "SLO/SLA",
        "安全审计"
      ],
      "duties": [
        "稳定性保障",
        "故障/值班",
        "监控告警",
        "部署发布",
        "自动化",
        "协议/合约开发"
      ]
    },
    {
      "company": "Crypto.com",
      "func": "security",
      "category": "exchange",
      "position": "Application Support Engineer — Blockchain Security & AI Automation",
      "level": "mid",
      "location": "Warsaw, Poland",
      "region": [
        "remote"
      ],
      "salary": "面议",
      "salaryNum": 0,
      "requirements": "At Crypto.com, our dedication to user security is led by our highly experienced Security Team. Comprising an internation",
      "link": "https://jobs.lever.co/crypto/dcd2835c-6a75-476e-9b4f-6c09609ac72c",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "crypto-com||application-support-engineer-blockchain-security-ai-automation",
      "keywords": [
        "Rust",
        "Go",
        "Python",
        "Node.js",
        "Smart Contract",
        "EVM",
        "Validator/节点",
        "Staking"
      ],
      "duties": [
        "团队管理",
        "架构设计",
        "稳定性保障",
        "故障/值班",
        "监控告警",
        "部署发布"
      ]
    },
    {
      "company": "Crypto.com",
      "func": "security",
      "category": "exchange",
      "position": "AI Security Engineer",
      "level": "mid",
      "location": "Hong Kong, Hong Kong SAR",
      "region": [
        "hk"
      ],
      "salary": "面议",
      "salaryNum": 0,
      "requirements": "About the Role",
      "link": "https://jobs.lever.co/crypto/e912aef9-5639-4e3d-accb-92d330860421",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "crypto-com||ai-security-engineer",
      "keywords": [
        "AWS",
        "GCP",
        "AI",
        "合规",
        "营销/增长"
      ],
      "duties": [
        "故障/值班",
        "性能/容量",
        "自动化",
        "安全/审计",
        "合规风控",
        "增长营销"
      ]
    },
    {
      "company": "Crypto.com",
      "func": "ops",
      "category": "exchange",
      "position": "(Senior) Cloud Infrastructure Engineer / System & Cloud Engineer",
      "level": "senior",
      "location": "Singapore, Singapore",
      "region": [
        "sg"
      ],
      "salary": "面议",
      "salaryNum": 0,
      "requirements": "At Crypto.com, our dedication to user security is led by our highly experienced Security Team. Comprising an internation",
      "link": "https://jobs.lever.co/crypto/4c8eb143-aff6-45cd-9f1e-46e298016270",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "crypto-com||senior-cloud-infrastructure-engineer-system-cloud-engineer",
      "keywords": [
        "Wallet",
        "AWS",
        "Linux",
        "合规",
        "营销/增长"
      ],
      "duties": [
        "团队管理",
        "架构设计",
        "稳定性保障",
        "故障/值班",
        "监控告警",
        "性能/容量"
      ]
    },
    {
      "company": "Jito Labs",
      "func": "eng",
      "category": "infra",
      "position": "Staff Systems Engineer – Low Latency & Networking",
      "level": "senior",
      "location": "USA",
      "region": [
        "us"
      ],
      "salary": "面议",
      "salaryNum": 0,
      "requirements": "Jito Labs is architecting the future of high-performance distributed systems on Solana. We’re the team behind Jito-Solan",
      "link": "https://jobs.lever.co/jito.wtf/5e32cade-5ebc-4c0c-b99a-f1d71cd7a953",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "jito-labs||staff-systems-engineer-low-latency-networking",
      "keywords": [
        "Rust",
        "C++",
        "Validator/节点",
        "MEV",
        "Solana",
        "Linux",
        "可观测性",
        "On-call"
      ],
      "duties": [
        "架构设计",
        "稳定性保障",
        "故障/值班",
        "性能/容量",
        "节点运维",
        "协议/合约开发"
      ]
    },
    {
      "company": "Jito Labs",
      "func": "ga",
      "category": "infra",
      "position": "Sr. Technical Recruiter",
      "level": "senior",
      "location": "USA",
      "region": [
        "us"
      ],
      "salary": "面议",
      "salaryNum": 0,
      "requirements": "The Opportunity",
      "link": "https://jobs.lever.co/jito.wtf/aa8d1612-6c36-4968-bd39-b16cbc6c8264",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "jito-labs||sr-technical-recruiter",
      "keywords": [
        "Rust",
        "C++",
        "营销/增长"
      ],
      "duties": [
        "性能/容量",
        "部署发布",
        "协议/合约开发",
        "增长营销",
        "商务拓展",
        "招聘/HR"
      ]
    },
    {
      "company": "Jito Labs",
      "func": "eng",
      "category": "infra",
      "position": "Senior Software Engineer - JTX",
      "level": "senior",
      "location": "USA",
      "region": [
        "us"
      ],
      "salary": "面议",
      "salaryNum": 0,
      "requirements": "Jito builds the Market Layer of Solana, the infrastructure that powers real markets on-chain. We started by building fou",
      "link": "https://jobs.lever.co/jito.wtf/86939232-2bd9-41c4-b7a4-5ed629758f22",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "jito-labs||senior-software-engineer-jtx",
      "keywords": [
        "Rust",
        "Go",
        "C++",
        "DeFi",
        "MEV",
        "Solana",
        "营销/增长"
      ],
      "duties": [
        "架构设计",
        "稳定性保障",
        "性能/容量",
        "部署发布",
        "协议/合约开发",
        "安全/审计"
      ]
    },
    {
      "company": "Jito Labs",
      "func": "eng",
      "category": "infra",
      "position": "Release Engineer",
      "level": "mid",
      "location": "USA",
      "region": [
        "us"
      ],
      "salary": "面议",
      "salaryNum": 0,
      "requirements": "About Jito",
      "link": "https://jobs.lever.co/jito.wtf/ce477a0e-0b1d-4c64-b7d6-eb5eadaec530",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "jito-labs||release-engineer",
      "keywords": [
        "Rust",
        "Validator/节点",
        "RPC",
        "Staking",
        "Solana",
        "Terraform",
        "CI/CD",
        "Prometheus"
      ],
      "duties": [
        "稳定性保障",
        "故障/值班",
        "监控告警",
        "性能/容量",
        "部署发布",
        "自动化"
      ]
    },
    {
      "company": "Jito Labs",
      "func": "eng",
      "category": "infra",
      "position": "Propose Your Dream Job",
      "level": "mid",
      "location": "USA",
      "region": [
        "us"
      ],
      "salary": "面议",
      "salaryNum": 0,
      "requirements": "Jito Labs is architecting the future of high-performance distributed systems on Solana. We're the team behind Jito-Solan",
      "link": "https://jobs.lever.co/jito.wtf/356e22a2-f491-4909-8c1b-61753aa247af",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "jito-labs||propose-your-dream-job",
      "keywords": [
        "Validator/节点",
        "MEV",
        "Solana",
        "营销/增长"
      ],
      "duties": [
        "架构设计",
        "性能/容量",
        "节点运维",
        "增长营销",
        "客户/机构对接"
      ]
    },
    {
      "company": "Jito Labs",
      "func": "ops",
      "category": "infra",
      "position": "Infrastructure Engineer",
      "level": "mid",
      "location": "USA",
      "region": [
        "us"
      ],
      "salary": "面议",
      "salaryNum": 0,
      "requirements": "DevSecOps needed. SRE? Platform Engineer? Whatever you call it, we need you.",
      "link": "https://jobs.lever.co/jito.wtf/ebb4a84c-7624-4eb3-aa0f-03823492860d",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "jito-labs||infrastructure-engineer",
      "keywords": [
        "Rust",
        "Validator/节点",
        "Wallet",
        "Solana",
        "Terraform",
        "CI/CD",
        "Prometheus",
        "Grafana"
      ],
      "duties": [
        "团队管理",
        "稳定性保障",
        "故障/值班",
        "监控告警",
        "性能/容量",
        "部署发布"
      ]
    },
    {
      "company": "Jito Labs",
      "func": "eng",
      "category": "infra",
      "position": "Head of Product",
      "level": "head",
      "location": "USA",
      "region": [
        "us"
      ],
      "salary": "面议",
      "salaryNum": 0,
      "requirements": "About Jito Labs",
      "link": "https://jobs.lever.co/jito.wtf/3749c376-da9a-48a6-a017-ca3517da4518",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "jito-labs||head-of-product",
      "keywords": [
        "Go",
        "DeFi",
        "Solana",
        "营销/增长"
      ],
      "duties": [
        "团队管理",
        "性能/容量",
        "产品规划",
        "增长营销",
        "招聘/HR"
      ]
    },
    {
      "company": "OKX",
      "func": "bd",
      "category": "exchange",
      "position": "Deputy General Counsel, Strategic Partnerships",
      "level": "mid",
      "location": "New York, United States",
      "region": [
        "us"
      ],
      "salary": "面议",
      "salaryNum": 0,
      "requirements": "<div data-page-id=\"V5D7drQZXoeL7ax46Atl1TzOgug\" data-lark-html-role=\"root\" data-docx-has-block-data=\"false\">",
      "link": "https://job-boards.greenhouse.io/okx/jobs/7684101003",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "okx||deputy-general-counsel-strategic-partnerships",
      "keywords": [
        "Wallet",
        "合规",
        "营销/增长"
      ],
      "duties": [
        "团队管理",
        "架构设计",
        "性能/容量",
        "部署发布",
        "合规风控",
        "设计/品牌"
      ]
    },
    {
      "company": "OKX",
      "func": "ga",
      "category": "exchange",
      "position": "Deputy General Counsel, Regulatory (APAC)",
      "level": "mid",
      "location": "Hong Kong, Hong Kong SAR",
      "region": [
        "hk"
      ],
      "salary": "面议",
      "salaryNum": 0,
      "requirements": "<div class=\"ace-line ace-line old-record-id-doxuseysYUio6Qia64JLLAwE7dh\">",
      "link": "https://job-boards.greenhouse.io/okx/jobs/7731626003",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "okx||deputy-general-counsel-regulatory-apac",
      "keywords": [
        "Wallet"
      ],
      "duties": [
        "合规风控",
        "设计/品牌"
      ]
    },
    {
      "company": "OKX",
      "func": "ga",
      "category": "exchange",
      "position": "Deputy General Counsel ",
      "level": "mid",
      "location": "Dubai, United Arab Emirates",
      "region": [
        "dubai"
      ],
      "salary": "面议",
      "salaryNum": 0,
      "requirements": "<div class=\"ace-line ace-line old-record-id-doxuseysYUio6Qia64JLLAwE7dh\">",
      "link": "https://job-boards.greenhouse.io/okx/jobs/7731884003",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "okx||deputy-general-counsel",
      "keywords": [
        "Wallet",
        "营销/增长"
      ],
      "duties": [
        "设计/品牌",
        "增长营销"
      ]
    },
    {
      "company": "OKX",
      "func": "data",
      "category": "exchange",
      "position": "Data Engineering Director ",
      "level": "head",
      "location": "APAC",
      "region": [
        "remote"
      ],
      "salary": "面议",
      "salaryNum": 0,
      "requirements": "<div class=\"job__header\">",
      "link": "https://job-boards.greenhouse.io/okx/jobs/7693151003",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "okx||data-engineering-director",
      "keywords": [
        "Wallet",
        "SQL",
        "AI"
      ],
      "duties": [
        "团队管理",
        "架构设计",
        "性能/容量",
        "部署发布",
        "自动化",
        "数据分析"
      ]
    },
    {
      "company": "OKX",
      "func": "eng",
      "category": "exchange",
      "position": "Country Manager - MENA",
      "level": "mid",
      "location": "Remote Roles - EMEA",
      "region": [
        "remote"
      ],
      "salary": "面议",
      "salaryNum": 0,
      "requirements": "<div data-page-id=\"IsFtdvBOmodeW9xzSIRlSjCeguh\" data-lark-html-role=\"root\" data-docx-has-block-data=\"false\">",
      "link": "https://job-boards.greenhouse.io/okx/jobs/7655366003",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "okx||country-manager-mena",
      "keywords": [
        "Wallet",
        "社区",
        "营销/增长"
      ],
      "duties": [
        "监控告警",
        "合规风控",
        "设计/品牌",
        "增长营销",
        "社区运营",
        "商务拓展"
      ]
    },
    {
      "company": "OKX",
      "func": "eng",
      "category": "exchange",
      "position": "Business Engineer, Trading",
      "level": "mid",
      "location": "San Jose, California, United States; United States (US)",
      "region": [
        "us"
      ],
      "salary": "面议",
      "salaryNum": 0,
      "requirements": "<div class=\"ace-line ace-line old-record-id-doxuseysYUio6Qia64JLLAwE7dh\">",
      "link": "https://job-boards.greenhouse.io/okx/jobs/7724268003",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "okx||business-engineer-trading",
      "keywords": [
        "Wallet"
      ],
      "duties": [
        "架构设计",
        "性能/容量",
        "设计/品牌"
      ]
    },
    {
      "company": "OKX",
      "func": "eng",
      "category": "exchange",
      "position": "Business Engineer",
      "level": "mid",
      "location": "Singapore, Singapore",
      "region": [
        "sg"
      ],
      "salary": "面议",
      "salaryNum": 0,
      "requirements": "<div class=\"ace-line ace-line old-record-id-doxuseysYUio6Qia64JLLAwE7dh\">",
      "link": "https://job-boards.greenhouse.io/okx/jobs/7722895003",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "okx||business-engineer",
      "keywords": [
        "Wallet"
      ],
      "duties": [
        "设计/品牌"
      ]
    },
    {
      "company": "OKX",
      "func": "bd",
      "category": "exchange",
      "position": "Business Development Manager, Affiliate (Vietnam)",
      "level": "mid",
      "location": "Vietnam (Remote)",
      "region": [
        "remote"
      ],
      "salary": "面议",
      "salaryNum": 0,
      "requirements": "<div class=\"ace-line ace-line old-record-id-doxuseysYUio6Qia64JLLAwE7dh\">",
      "link": "https://job-boards.greenhouse.io/okx/jobs/7725691003",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "okx||business-development-manager-affiliate-vietnam",
      "keywords": [
        "Wallet",
        "营销/增长"
      ],
      "duties": [
        "性能/容量",
        "设计/品牌",
        "增长营销",
        "商务拓展"
      ]
    },
    {
      "company": "OKX",
      "func": "bd",
      "category": "exchange",
      "position": "Business Development Manager, Affiliate (Southeast Asia)",
      "level": "mid",
      "location": "Southeast Asia (Remote)",
      "region": [
        "remote",
        "asia"
      ],
      "salary": "面议",
      "salaryNum": 0,
      "requirements": "<div class=\"ace-line ace-line old-record-id-doxuseysYUio6Qia64JLLAwE7dh\">",
      "link": "https://job-boards.greenhouse.io/okx/jobs/7711707003",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "okx||business-development-manager-affiliate-southeast-asia",
      "keywords": [
        "Wallet",
        "营销/增长"
      ],
      "duties": [
        "性能/容量",
        "数据分析",
        "设计/品牌",
        "增长营销",
        "商务拓展",
        "客户/机构对接"
      ]
    },
    {
      "company": "OKX",
      "func": "eng",
      "category": "exchange",
      "position": "Business Assistant 业务助理",
      "level": "mid",
      "location": "Singapore, Singapore",
      "region": [
        "sg"
      ],
      "salary": "面议",
      "salaryNum": 0,
      "requirements": "<div data-page-id=\"VHPAdeTykomT4rxsttylIEOOg1e\" data-lark-html-role=\"root\" data-docx-has-block-data=\"false\">",
      "link": "https://job-boards.greenhouse.io/okx/jobs/7648699003",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "okx||business-assistant-业务助理",
      "keywords": [
        "Wallet",
        "营销/增长"
      ],
      "duties": [
        "监控告警",
        "设计/品牌",
        "增长营销",
        "商务拓展"
      ]
    },
    {
      "company": "Anchorage Digital",
      "func": "ops",
      "category": "other",
      "position": "Engineering Manager, Financial Infrastructure",
      "level": "mid",
      "location": "United States",
      "region": [
        "us"
      ],
      "salary": "面议",
      "salaryNum": 0,
      "requirements": "At Anchorage Digital, we are building the world’s most advanced digital asset platform for institutions to participate i",
      "link": "https://jobs.lever.co/anchorage/0a59cb2a-0ce1-49c4-b3ba-1c9b77987ca8",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "anchorage-digital||engineering-manager-financial-infrastructure",
      "keywords": [
        "Staking",
        "营销/增长"
      ],
      "duties": [
        "团队管理",
        "架构设计",
        "性能/容量",
        "节点运维",
        "安全/审计",
        "合规风控"
      ]
    },
    {
      "company": "Anchorage Digital",
      "func": "eng",
      "category": "other",
      "position": "Engineering Manager, Blockchain",
      "level": "mid",
      "location": "Portugal",
      "region": [
        "remote"
      ],
      "salary": "面议",
      "salaryNum": 0,
      "requirements": "At Anchorage Digital, we are building the world’s most advanced digital asset platform for institutions to participate i",
      "link": "https://jobs.lever.co/anchorage/d0d4ab6c-a235-4670-b278-9c79a72732dc",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "anchorage-digital||engineering-manager-blockchain",
      "keywords": [
        "Staking",
        "营销/增长"
      ],
      "duties": [
        "团队管理",
        "性能/容量",
        "节点运维",
        "安全/审计",
        "产品规划",
        "增长营销"
      ]
    },
    {
      "company": "Anchorage Digital",
      "func": "security",
      "category": "other",
      "position": "Engineering Lead, Security Operations",
      "level": "senior",
      "location": "United States",
      "region": [
        "us"
      ],
      "salary": "面议",
      "salaryNum": 0,
      "requirements": "At Anchorage Digital, we are building the world’s most advanced digital asset platform for institutions to participate i",
      "link": "https://jobs.lever.co/anchorage/b5dfd585-f708-41c9-b9bf-94adde925067",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "anchorage-digital||engineering-lead-security-operations",
      "keywords": [
        "Staking",
        "营销/增长"
      ],
      "duties": [
        "团队管理",
        "故障/值班",
        "监控告警",
        "性能/容量",
        "自动化",
        "节点运维"
      ]
    },
    {
      "company": "Anchorage Digital",
      "func": "eng",
      "category": "other",
      "position": "Director of Government Solutions GTM & Operations",
      "level": "head",
      "location": "United States",
      "region": [
        "us"
      ],
      "salary": "面议",
      "salaryNum": 0,
      "requirements": "At Anchorage Digital, we are building the world’s most advanced digital asset platform for institutions to participate i",
      "link": "https://jobs.lever.co/anchorage/91f7231c-f99c-4f0d-b9fa-bafe137b5aad",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "anchorage-digital||director-of-government-solutions-gtm-operations",
      "keywords": [
        "Staking",
        "合规",
        "营销/增长"
      ],
      "duties": [
        "团队管理",
        "性能/容量",
        "部署发布",
        "节点运维",
        "安全/审计",
        "合规风控"
      ]
    },
    {
      "company": "Anchorage Digital",
      "func": "eng",
      "category": "other",
      "position": "Derivatives Trader",
      "level": "mid",
      "location": "Portugal",
      "region": [
        "remote"
      ],
      "salary": "面议",
      "salaryNum": 0,
      "requirements": "At Anchorage Digital, we are building the world’s most advanced digital asset platform for institutions to participate i",
      "link": "https://jobs.lever.co/anchorage/9f6d4223-389c-44e3-99b1-50f46c4855da",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "anchorage-digital||derivatives-trader",
      "keywords": [
        "Python",
        "Staking",
        "营销/增长"
      ],
      "duties": [
        "性能/容量",
        "节点运维",
        "安全/审计",
        "增长营销",
        "客户/机构对接"
      ]
    },
    {
      "company": "Anchorage Digital",
      "func": "data",
      "category": "other",
      "position": "Data Governance and Management Lead",
      "level": "senior",
      "location": "United States",
      "region": [
        "us"
      ],
      "salary": "面议",
      "salaryNum": 0,
      "requirements": "At Anchorage Digital, we are building the world’s most advanced digital asset platform for institutions to participate i",
      "link": "https://jobs.lever.co/anchorage/5bfbd64c-933e-418c-9c07-5aea50212c0d",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "anchorage-digital||data-governance-and-management-lead",
      "keywords": [
        "Python",
        "Staking",
        "SQL",
        "营销/增长"
      ],
      "duties": [
        "监控告警",
        "部署发布",
        "节点运维",
        "安全/审计",
        "数据分析",
        "增长营销"
      ]
    },
    {
      "company": "Anchorage Digital",
      "func": "bd",
      "category": "other",
      "position": "Client Experience Team Lead, Strategic Partnerships and Integrations",
      "level": "senior",
      "location": "United States",
      "region": [
        "us"
      ],
      "salary": "面议",
      "salaryNum": 0,
      "requirements": "At Anchorage Digital, we are building the world’s most advanced digital asset platform for institutions to participate i",
      "link": "https://jobs.lever.co/anchorage/d5bd892a-c7ae-4df6-a0e8-2edcb29f14e6",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "anchorage-digital||client-experience-team-lead-strategic-partnerships-and-integrations",
      "keywords": [
        "DeFi",
        "Staking"
      ],
      "duties": [
        "架构设计",
        "故障/值班",
        "监控告警",
        "节点运维",
        "安全/审计",
        "合规风控"
      ]
    },
    {
      "company": "Anchorage Digital",
      "func": "data",
      "category": "other",
      "position": "Capital and Risk Analytics Lead",
      "level": "senior",
      "location": "United States",
      "region": [
        "us"
      ],
      "salary": "面议",
      "salaryNum": 0,
      "requirements": "At Anchorage Digital, we are building the world’s most advanced digital asset platform for institutions to participate i",
      "link": "https://jobs.lever.co/anchorage/e955e590-6b00-4170-a287-66a4c5ebec32",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "anchorage-digital||capital-and-risk-analytics-lead",
      "keywords": [
        "Python",
        "Staking",
        "营销/增长"
      ],
      "duties": [
        "团队管理",
        "架构设计",
        "节点运维",
        "安全/审计",
        "合规风控",
        "数据分析"
      ]
    },
    {
      "company": "Anchorage Digital",
      "func": "bd",
      "category": "other",
      "position": "Business Development, Stablecoins",
      "level": "mid",
      "location": "Miami, Florida",
      "region": [
        "remote"
      ],
      "salary": "面议",
      "salaryNum": 0,
      "requirements": "At Anchorage Digital, we are building the world’s most advanced digital asset platform for institutions to participate i",
      "link": "https://jobs.lever.co/anchorage/5275f2de-8e68-401d-83a8-8e8b444b6d14",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "anchorage-digital||business-development-stablecoins",
      "keywords": [
        "Go",
        "Staking",
        "合规",
        "营销/增长"
      ],
      "duties": [
        "性能/容量",
        "部署发布",
        "节点运维",
        "安全/审计",
        "合规风控",
        "数据分析"
      ]
    },
    {
      "company": "Anchorage Digital",
      "func": "bd",
      "category": "other",
      "position": "Business Development Representative",
      "level": "mid",
      "location": "United States",
      "region": [
        "us"
      ],
      "salary": "面议",
      "salaryNum": 0,
      "requirements": "At Anchorage Digital, we are building the world’s most advanced digital asset platform for institutions to participate i",
      "link": "https://jobs.lever.co/anchorage/fce3ba80-1fc0-43d8-a0f9-659839bc7624",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "anchorage-digital||business-development-representative",
      "keywords": [
        "Staking",
        "营销/增长"
      ],
      "duties": [
        "部署发布",
        "节点运维",
        "安全/审计",
        "增长营销",
        "商务拓展",
        "客户/机构对接"
      ]
    },
    {
      "company": "Animoca Brands",
      "func": "eng",
      "category": "other",
      "position": "Manager / Senior Manager, Group Reporting",
      "level": "senior",
      "location": "Hong Kong",
      "region": [
        "hk"
      ],
      "salary": "面议",
      "salaryNum": 0,
      "requirements": "Animoca Brands Corporation Limited (ACN: 122 921 813) is a Web3 leader that leverages tokenization and blockchain to del",
      "link": "https://jobs.lever.co/animocabrands/dfd7cdfb-f792-47c9-8c81-15886ead7e3d",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "animoca-brands||manager-senior-manager-group-reporting",
      "keywords": [
        "安全审计",
        "合规",
        "营销/增长"
      ],
      "duties": [
        "团队管理",
        "安全/审计",
        "合规风控",
        "增长营销",
        "商务拓展",
        "客户/机构对接"
      ]
    },
    {
      "company": "Animoca Brands",
      "func": "data",
      "category": "other",
      "position": "Junior AI Project Manager / Associate Tech PM (Fresh Graduates Welcome)",
      "level": "mid",
      "location": "Hong Kong",
      "region": [
        "hk"
      ],
      "salary": "面议",
      "salaryNum": 0,
      "requirements": "Animoca Brands Corporation Limited (ACN: 122 921 813) is a Web3 leader that leverages tokenization and blockchain to del",
      "link": "https://jobs.lever.co/animocabrands/c7cd4219-13ba-4716-8106-beb66785b2ae",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "animoca-brands||junior-ai-project-manager-associate-tech-pm-fresh-graduates-welcome",
      "keywords": [
        "Machine Learning",
        "AI",
        "营销/增长"
      ],
      "duties": [
        "团队管理",
        "架构设计",
        "监控告警",
        "性能/容量",
        "部署发布",
        "合规风控"
      ]
    },
    {
      "company": "Animoca Brands",
      "func": "eng",
      "category": "other",
      "position": "IAP Internship (Full time preferred)",
      "level": "mid",
      "location": "Hong Kong",
      "region": [
        "hk"
      ],
      "salary": "面议",
      "salaryNum": 0,
      "requirements": "Animoca Brands (ACN: 122 921 813), a Deloitte Tech Fast winner, a Fortune Crypto 40 company, one of the Top 50 Blockchai",
      "link": "https://jobs.lever.co/animocabrands/a451e86e-b1bf-4317-bf3c-f56f84444ad6",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "animoca-brands||iap-internship-full-time-preferred",
      "keywords": [
        "DeFi",
        "营销/增长"
      ],
      "duties": [
        "团队管理",
        "监控告警",
        "性能/容量",
        "部署发布",
        "设计/品牌",
        "增长营销"
      ]
    },
    {
      "company": "Animoca Brands",
      "func": "eng",
      "category": "other",
      "position": "Financial Reporting",
      "level": "mid",
      "location": "Hong Kong",
      "region": [
        "hk"
      ],
      "salary": "面议",
      "salaryNum": 0,
      "requirements": "Animoca Brands Corporation Limited (ACN: 122 921 813) is a Web3 leader that leverages tokenization and blockchain to del",
      "link": "https://jobs.lever.co/animocabrands/e17b2efc-0765-48f2-9f95-7f9ed9b13d88",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "animoca-brands||financial-reporting",
      "keywords": [
        "安全审计",
        "合规",
        "营销/增长"
      ],
      "duties": [
        "团队管理",
        "安全/审计",
        "合规风控",
        "增长营销",
        "商务拓展",
        "客户/机构对接"
      ]
    },
    {
      "company": "Animoca Brands",
      "func": "bd",
      "category": "other",
      "position": "Business Development Associate (Fresh Graduates Welcome)",
      "level": "mid",
      "location": "Hong Kong",
      "region": [
        "hk"
      ],
      "salary": "面议",
      "salaryNum": 0,
      "requirements": "Animoca Brands Corporation Limited (ACN: 122 921 813) is a Web3 leader that leverages tokenization and blockchain to del",
      "link": "https://jobs.lever.co/animocabrands/10e8ab2c-3ea8-4b11-8dd6-e4f9062f11d1",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "animoca-brands||business-development-associate-fresh-graduates-welcome",
      "keywords": [
        "AI",
        "营销/增长"
      ],
      "duties": [
        "团队管理",
        "监控告警",
        "性能/容量",
        "合规风控",
        "增长营销",
        "商务拓展"
      ]
    },
    {
      "company": "Immutable",
      "func": "bd",
      "category": "chain",
      "position": "Senior Business Development Manager, Americas",
      "level": "senior",
      "location": "AMER",
      "region": [
        "remote"
      ],
      "salary": "面议",
      "salaryNum": 0,
      "requirements": "About Us 🚀",
      "link": "https://jobs.lever.co/immutable/873e93e2-86e0-4695-94bc-9f800a930bce",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "immutable||senior-business-development-manager-americas",
      "keywords": [
        "Go",
        "AI",
        "营销/增长"
      ],
      "duties": [
        "团队管理",
        "性能/容量",
        "部署发布",
        "数据分析",
        "产品规划",
        "增长营销"
      ]
    },
    {
      "company": "Limit Break",
      "func": "eng",
      "category": "other",
      "position": "Senior Unity Engineer",
      "level": "senior",
      "location": "Tokyo",
      "region": [
        "asia"
      ],
      "salary": "面议",
      "salaryNum": 0,
      "requirements": "Senior Unity Engineer",
      "link": "https://jobs.lever.co/limitbreak/3825d9eb-5c8f-4709-bed8-2f53ea14a435",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "limit-break||senior-unity-engineer",
      "keywords": [
        "Go",
        "Docker",
        "CI/CD",
        "SQL"
      ],
      "duties": [
        "架构设计",
        "性能/容量",
        "部署发布",
        "商务拓展",
        "客户/机构对接"
      ]
    },
    {
      "company": "Limit Break",
      "func": "ops",
      "category": "other",
      "position": "Senior DevOps/Site Reliability Engineer",
      "level": "senior",
      "location": "Tokyo",
      "region": [
        "asia"
      ],
      "salary": "面议",
      "salaryNum": 0,
      "requirements": "About us:",
      "link": "https://jobs.lever.co/limitbreak/dfb51a74-b6c5-4ad0-9ad4-f34f6e5a46be",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "limit-break||senior-devops-site-reliability-engineer",
      "keywords": [
        "Go",
        "Node.js",
        "Validator/节点",
        "Docker",
        "AWS"
      ],
      "duties": [
        "团队管理",
        "架构设计",
        "稳定性保障",
        "故障/值班",
        "性能/容量",
        "部署发布"
      ]
    },
    {
      "company": "Limit Break",
      "func": "data",
      "category": "other",
      "position": "Senior Data Scientist シニア・データサイエンティスト (Japan)",
      "level": "senior",
      "location": "Tokyo",
      "region": [
        "asia"
      ],
      "salary": "面议",
      "salaryNum": 0,
      "requirements": "Senior Data Scientist",
      "link": "https://jobs.lever.co/limitbreak/df1b16c2-2f3c-4b03-ae6e-5315e1fc6668",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "limit-break||senior-data-scientist-japan",
      "keywords": [
        "Python",
        "CI/CD",
        "Kafka",
        "Spark",
        "SQL",
        "Machine Learning",
        "营销/增长"
      ],
      "duties": [
        "性能/容量",
        "部署发布",
        "数据分析",
        "增长营销",
        "商务拓展"
      ]
    },
    {
      "company": "Limit Break",
      "func": "eng",
      "category": "other",
      "position": "Senior Backend Engineer, Core Services (Game)",
      "level": "senior",
      "location": "Tokyo",
      "region": [
        "asia"
      ],
      "salary": "面议",
      "salaryNum": 0,
      "requirements": "Senior Backend Engineer, Core Services (Game)",
      "link": "https://jobs.lever.co/limitbreak/e1f8a0f2-4114-436d-bafa-0a812ec91058",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "limit-break||senior-backend-engineer-core-services-game",
      "keywords": [
        "Go",
        "Node.js",
        "Validator/节点",
        "Docker",
        "AWS"
      ],
      "duties": [
        "团队管理",
        "架构设计",
        "故障/值班",
        "性能/容量",
        "部署发布",
        "节点运维"
      ]
    },
    {
      "company": "Limit Break",
      "func": "design",
      "category": "other",
      "position": "Mobile Game UI/UX アーティストMobile Game UI/UX Artist (Japan)",
      "level": "mid",
      "location": "Tokyo",
      "region": [
        "asia"
      ],
      "salary": "面议",
      "salaryNum": 0,
      "requirements": "Mobile Game UI/UX アーティスト",
      "link": "https://jobs.lever.co/limitbreak/c2f9d4f0-30ca-427b-a873-417fd94a9f93",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "limit-break||mobile-game-ui-ux-mobile-game-ui-ux-artist-japan",
      "keywords": [
        "AI"
      ],
      "duties": [
        "性能/容量",
        "部署发布",
        "产品规划",
        "设计/品牌",
        "商务拓展"
      ]
    },
    {
      "company": "Limit Break",
      "func": "growth",
      "category": "other",
      "position": "Marketing User Acquisition Manager - Media Buyer",
      "level": "mid",
      "location": "Tokyo",
      "region": [
        "asia"
      ],
      "salary": "面议",
      "salaryNum": 0,
      "requirements": "Marketing User Acquisition Manager- Media Buyer",
      "link": "https://jobs.lever.co/limitbreak/afb8428e-2cfe-449a-877e-06e849ae5783",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "limit-break||marketing-user-acquisition-manager-media-buyer",
      "keywords": [
        "Python",
        "SQL",
        "营销/增长"
      ],
      "duties": [
        "团队管理",
        "监控告警",
        "性能/容量",
        "数据分析",
        "增长营销",
        "商务拓展"
      ]
    },
    {
      "company": "Limit Break",
      "func": "growth",
      "category": "other",
      "position": "Marketing User Acquisition - Creative Producer",
      "level": "mid",
      "location": "Tokyo",
      "region": [
        "asia"
      ],
      "salary": "面议",
      "salaryNum": 0,
      "requirements": "Marketing User Acquisition - Creative Producer",
      "link": "https://jobs.lever.co/limitbreak/112ad2ce-ba75-4cbf-8487-fdd197e78d50",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "limit-break||marketing-user-acquisition-creative-producer",
      "keywords": [
        "营销/增长"
      ],
      "duties": [
        "性能/容量",
        "部署发布",
        "增长营销",
        "商务拓展"
      ]
    },
    {
      "company": "Limit Break",
      "func": "eng",
      "category": "other",
      "position": "Executive Producer エグゼクティブプロデューサー（モバイルゲーム）(Japan)",
      "level": "mid",
      "location": "Tokyo",
      "region": [
        "asia"
      ],
      "salary": "面议",
      "salaryNum": 0,
      "requirements": "Executive Producer- Mobile Game",
      "link": "https://jobs.lever.co/limitbreak/a764c36b-29bb-4abd-957e-3c488cef5f1c",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "limit-break||executive-producer-japan",
      "keywords": [],
      "duties": [
        "商务拓展"
      ]
    },
    {
      "company": "Limit Break",
      "func": "eng",
      "category": "other",
      "position": "Director Live Ops and Monetization ライブオペレーション＆マネタイズ担当ディレクター (Japan)",
      "level": "head",
      "location": "Tokyo",
      "region": [
        "asia"
      ],
      "salary": "面议",
      "salaryNum": 0,
      "requirements": "Director Live Ops and Monetization",
      "link": "https://jobs.lever.co/limitbreak/0100d092-868b-4ecd-b969-5c1fa6aa2ae4",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "limit-break||director-live-ops-and-monetization-担当-japan",
      "keywords": [
        "社区",
        "营销/增长"
      ],
      "duties": [
        "团队管理",
        "监控告警",
        "性能/容量",
        "安全/审计",
        "数据分析",
        "增长营销"
      ]
    },
    {
      "company": "Limit Break",
      "func": "data",
      "category": "other",
      "position": "AIエンジニア AI Engineer (Japan)",
      "level": "mid",
      "location": "Tokyo",
      "region": [
        "asia"
      ],
      "salary": "面议",
      "salaryNum": 0,
      "requirements": "AIエンジニア",
      "link": "https://jobs.lever.co/limitbreak/0cc4d59a-3e12-4d5c-b6fc-4f92df4b3a15",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "limit-break||ai-ai-engineer-japan",
      "keywords": [
        "Validator/节点",
        "AWS",
        "GCP",
        "AI"
      ],
      "duties": [
        "部署发布",
        "节点运维",
        "设计/品牌",
        "商务拓展"
      ]
    },
    {
      "company": "OKX",
      "func": "eng",
      "category": "exchange",
      "position": "Arabic Language Manager - MENA Remote",
      "level": "mid",
      "location": "Dubai, United Arab Emirates",
      "region": [
        "dubai"
      ],
      "salary": "面议",
      "salaryNum": 0,
      "requirements": "<div class=\"ace-line ace-line old-record-id-doxuseysYUio6Qia64JLLAwE7dh\">",
      "link": "https://job-boards.greenhouse.io/okx/jobs/7737030003",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "okx||arabic-language-manager-mena-remote",
      "keywords": [
        "Wallet",
        "AI"
      ],
      "duties": [
        "性能/容量",
        "设计/品牌"
      ]
    },
    {
      "company": "OKX",
      "func": "eng",
      "category": "exchange",
      "position": "Android Developer ",
      "level": "mid",
      "location": "Singapore, Singapore",
      "region": [
        "sg"
      ],
      "salary": "面议",
      "salaryNum": 0,
      "requirements": "<p><span style=\"text-decoration: underline;\"><strong>About OKX:</strong></span></p>",
      "link": "https://job-boards.greenhouse.io/okx/jobs/5578341003",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "okx||android-developer",
      "keywords": [
        "JavaScript",
        "Wallet"
      ],
      "duties": [
        "架构设计",
        "性能/容量",
        "设计/品牌",
        "客户/机构对接"
      ]
    },
    {
      "company": "OKX",
      "func": "data",
      "category": "exchange",
      "position": "AI Native Platform Architect ",
      "level": "mid",
      "location": "Hong Kong, Hong Kong SAR",
      "region": [
        "hk"
      ],
      "salary": "面议",
      "salaryNum": 0,
      "requirements": "<div class=\"ace-line ace-line old-record-id-doxuseysYUio6Qia64JLLAwE7dh\">",
      "link": "https://job-boards.greenhouse.io/okx/jobs/7702525003",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "okx||ai-native-platform-architect",
      "keywords": [
        "Wallet",
        "AI"
      ],
      "duties": [
        "架构设计",
        "自动化",
        "设计/品牌"
      ]
    },
    {
      "company": "OKX",
      "func": "security",
      "category": "exchange",
      "position": "AI Agent Security Research Engineer",
      "level": "mid",
      "location": "APAC; Hong Kong, Hong Kong SAR; Singapore, Singapore",
      "region": [
        "sg",
        "hk"
      ],
      "salary": "面议",
      "salaryNum": 0,
      "requirements": "<div data-page-id=\"Y7HSd59lcoI1BGxLy8jlqxZKgTg\" data-lark-html-role=\"root\" data-docx-has-block-data=\"false\">",
      "link": "https://job-boards.greenhouse.io/okx/jobs/7650023003",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "okx||ai-agent-security-research-engineer",
      "keywords": [
        "Wallet",
        "CI/CD",
        "可观测性",
        "AI",
        "安全审计",
        "合规"
      ],
      "duties": [
        "监控告警",
        "部署发布",
        "自动化",
        "安全/审计",
        "合规风控",
        "设计/品牌"
      ]
    },
    {
      "company": "OKX",
      "func": "data",
      "category": "exchange",
      "position": "AI Agent Product Expert (Middleware) ",
      "level": "mid",
      "location": "Hong Kong, Hong Kong SAR",
      "region": [
        "hk"
      ],
      "salary": "面议",
      "salaryNum": 0,
      "requirements": "<div class=\"ace-line ace-line old-record-id-doxuseysYUio6Qia64JLLAwE7dh\">",
      "link": "https://job-boards.greenhouse.io/okx/jobs/7731745003",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "okx||ai-agent-product-expert-middleware",
      "keywords": [
        "Wallet",
        "AI"
      ],
      "duties": [
        "设计/品牌"
      ]
    },
    {
      "company": "OKX",
      "func": "bd",
      "category": "exchange",
      "position": "Affiliate Business Development Manager - MENA",
      "level": "mid",
      "location": "Remote Roles - EMEA",
      "region": [
        "remote"
      ],
      "salary": "面议",
      "salaryNum": 0,
      "requirements": "<div data-page-id=\"AEW3d0Y2noLuIcxROuFubTLpsZd\" data-docx-has-block-data=\"false\">",
      "link": "https://job-boards.greenhouse.io/okx/jobs/7736833003",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "okx||affiliate-business-development-manager-mena",
      "keywords": [
        "营销/增长"
      ],
      "duties": [
        "增长营销",
        "商务拓展"
      ]
    },
    {
      "company": "OKX",
      "func": "bd",
      "category": "exchange",
      "position": "Affiliate BD Manager (Taiwan)",
      "level": "mid",
      "location": "Taiwan (Remote)",
      "region": [
        "remote"
      ],
      "salary": "面议",
      "salaryNum": 0,
      "requirements": "<div class=\"ace-line ace-line old-record-id-doxuseysYUio6Qia64JLLAwE7dh\">",
      "link": "https://job-boards.greenhouse.io/okx/jobs/7621585003",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "okx||affiliate-bd-manager-taiwan",
      "keywords": [
        "Wallet"
      ],
      "duties": [
        "性能/容量",
        "设计/品牌",
        "商务拓展"
      ]
    },
    {
      "company": "OKX",
      "func": "eng",
      "category": "exchange",
      "position": "Administrative Manager, Travel Management",
      "level": "mid",
      "location": "Hong Kong, Hong Kong SAR",
      "region": [
        "hk"
      ],
      "salary": "面议",
      "salaryNum": 0,
      "requirements": "<div data-page-id=\"PNNZdiw4Yo1ZOmx8btbucw8qsLG\" data-lark-html-role=\"root\" data-docx-has-block-data=\"false\">",
      "link": "https://job-boards.greenhouse.io/okx/jobs/7585932003",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "okx||administrative-manager-travel-management",
      "keywords": [
        "Wallet",
        "合规"
      ],
      "duties": [
        "自动化",
        "合规风控",
        "设计/品牌"
      ]
    },
    {
      "company": "OKX",
      "func": "eng",
      "category": "exchange",
      "position": "Administration Expert, Global Strategic & Digitalization COE",
      "level": "mid",
      "location": "Hong Kong, Hong Kong SAR",
      "region": [
        "hk"
      ],
      "salary": "面议",
      "salaryNum": 0,
      "requirements": "<div class=\"ace-line ace-line old-record-id-doxuseysYUio6Qia64JLLAwE7dh\">",
      "link": "https://job-boards.greenhouse.io/okx/jobs/5949501003",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "okx||administration-expert-global-strategic-digitalization-coe",
      "keywords": [
        "Wallet"
      ],
      "duties": [
        "设计/品牌"
      ]
    },
    {
      "company": "OKX",
      "func": "eng",
      "category": "exchange",
      "position": "Accounting Manager",
      "level": "mid",
      "location": "San Jose, California, United States",
      "region": [
        "us"
      ],
      "salary": "面议",
      "salaryNum": 0,
      "requirements": "<div class=\"ace-line ace-line old-record-id-doxuseysYUio6Qia64JLLAwE7dh\">",
      "link": "https://job-boards.greenhouse.io/okx/jobs/7649279003",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "okx||accounting-manager",
      "keywords": [
        "Wallet",
        "合规"
      ],
      "duties": [
        "自动化",
        "安全/审计",
        "合规风控",
        "数据分析",
        "设计/品牌"
      ]
    },
    {
      "company": "CertiK",
      "func": "eng",
      "category": "other",
      "position": "IT Operations Specialist",
      "level": "mid",
      "location": "New York, New York / Remote",
      "region": [
        "remote",
        "us"
      ],
      "salary": "面议",
      "salaryNum": 0,
      "requirements": "About the Company",
      "link": "https://jobs.lever.co/certik/5191720e-c026-4f53-b58a-094e0ec049f6",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "certik||it-operations-specialist",
      "keywords": [
        "Smart Contract",
        "AI",
        "形式化验证",
        "合规"
      ],
      "duties": [
        "故障/值班",
        "监控告警",
        "协议/合约开发",
        "安全/审计",
        "合规风控",
        "商务拓展"
      ]
    },
    {
      "company": "CertiK",
      "func": "growth",
      "category": "other",
      "position": "Community Manager, Korea",
      "level": "mid",
      "location": "South Korea",
      "region": [
        "remote"
      ],
      "salary": "面议",
      "salaryNum": 0,
      "requirements": "About You",
      "link": "https://jobs.lever.co/certik/e2bc15c9-6b20-4abc-85a3-6c04ee2b10c1",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "certik||community-manager-korea",
      "keywords": [
        "Smart Contract",
        "形式化验证",
        "社区",
        "营销/增长"
      ],
      "duties": [
        "自动化",
        "协议/合约开发",
        "安全/审计",
        "设计/品牌",
        "增长营销",
        "社区运营"
      ]
    },
    {
      "company": "CertiK",
      "func": "bd",
      "category": "other",
      "position": "Business Development Intern / CertiK Ambassador",
      "level": "mid",
      "location": "New York, New York",
      "region": [
        "us"
      ],
      "salary": "面议",
      "salaryNum": 0,
      "requirements": "About the Company",
      "link": "https://jobs.lever.co/certik/f78c7502-51a9-4c9e-b367-9871411b15df",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "certik||business-development-intern-certik-ambassador",
      "keywords": [
        "DeFi",
        "合规",
        "社区"
      ],
      "duties": [
        "性能/容量",
        "部署发布",
        "安全/审计",
        "合规风控",
        "社区运营",
        "商务拓展"
      ]
    },
    {
      "company": "CertiK",
      "func": "security",
      "category": "other",
      "position": "Blockchain Security Expert Intern - AI Track",
      "level": "mid",
      "location": "New York, New York / Remote",
      "region": [
        "remote",
        "us"
      ],
      "salary": "面议",
      "salaryNum": 0,
      "requirements": "About the Company",
      "link": "https://jobs.lever.co/certik/1f446b66-1fae-4c31-9352-cde86e254754",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "certik||blockchain-security-expert-intern-ai-track",
      "keywords": [
        "Solidity",
        "Python",
        "Smart Contract",
        "Ethereum",
        "Machine Learning",
        "AI",
        "安全审计"
      ],
      "duties": [
        "团队管理",
        "架构设计",
        "监控告警",
        "自动化",
        "协议/合约开发",
        "安全/审计"
      ]
    },
    {
      "company": "CertiK",
      "func": "security",
      "category": "other",
      "position": "Blockchain Security Expert - Security Audit Track",
      "level": "mid",
      "location": "US / Remote",
      "region": [
        "remote",
        "us"
      ],
      "salary": "面议",
      "salaryNum": 0,
      "requirements": "About You",
      "link": "https://jobs.lever.co/certik/d3b215da-1367-4a98-9fcf-4a63249125da",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "certik||blockchain-security-expert-security-audit-track",
      "keywords": [
        "Solidity",
        "Rust",
        "Go",
        "Smart Contract",
        "L2/Rollup",
        "安全审计",
        "形式化验证",
        "合规"
      ],
      "duties": [
        "部署发布",
        "协议/合约开发",
        "安全/审计",
        "合规风控",
        "商务拓展"
      ]
    },
    {
      "company": "CertiK",
      "func": "security",
      "category": "other",
      "position": "Blockchain Security Expert - Chain Security Evaluation Track",
      "level": "mid",
      "location": "US / Remote",
      "region": [
        "remote",
        "us"
      ],
      "salary": "面议",
      "salaryNum": 0,
      "requirements": "About You",
      "link": "https://jobs.lever.co/certik/13f095de-5cff-4ed7-a0b2-7ea0f81e485d",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "certik||blockchain-security-expert-chain-security-evaluation-track",
      "keywords": [
        "Go",
        "Python",
        "Smart Contract",
        "L2/Rollup",
        "Validator/节点",
        "Ethereum",
        "Docker",
        "形式化验证"
      ],
      "duties": [
        "架构设计",
        "自动化",
        "节点运维",
        "协议/合约开发",
        "安全/审计",
        "合规风控"
      ]
    },
    {
      "company": "CertiK",
      "func": "security",
      "category": "other",
      "position": "Blockchain Security Expert - Anti Defect Track",
      "level": "mid",
      "location": "US / Remote",
      "region": [
        "remote",
        "us"
      ],
      "salary": "面议",
      "salaryNum": 0,
      "requirements": "About the Company",
      "link": "https://jobs.lever.co/certik/c4ddca58-1476-438a-8eb3-8d3e05eae19a",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "certik||blockchain-security-expert-anti-defect-track",
      "keywords": [
        "Solidity",
        "Rust",
        "Go",
        "Python",
        "Node.js",
        "C++",
        "Smart Contract",
        "Validator/节点"
      ],
      "duties": [
        "团队管理",
        "监控告警",
        "部署发布",
        "节点运维",
        "协议/合约开发",
        "安全/审计"
      ]
    },
    {
      "company": "CertiK",
      "func": "security",
      "category": "other",
      "position": "Blockchain Security Expert - AI Track",
      "level": "mid",
      "location": "US / Remote",
      "region": [
        "remote",
        "us"
      ],
      "salary": "面议",
      "salaryNum": 0,
      "requirements": "About the Company",
      "link": "https://jobs.lever.co/certik/2c4b70d2-43da-44fc-8018-060f1640041e",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "certik||blockchain-security-expert-ai-track",
      "keywords": [
        "Smart Contract",
        "AI",
        "安全审计",
        "合规"
      ],
      "duties": [
        "架构设计",
        "性能/容量",
        "自动化",
        "协议/合约开发",
        "安全/审计",
        "合规风控"
      ]
    },
    {
      "company": "CertiK",
      "func": "security",
      "category": "other",
      "position": "Blockchain Security Engineer - Senior Level (Solidity / Rust / Golang )",
      "level": "senior",
      "location": "US / Remote",
      "region": [
        "remote",
        "us"
      ],
      "salary": "面议",
      "salaryNum": 0,
      "requirements": "About the Role:",
      "link": "https://jobs.lever.co/certik/e15a5a75-137f-4e37-a402-85079dd12b94",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "certik||blockchain-security-engineer-senior-level-solidity-rust-golang",
      "keywords": [
        "Solidity",
        "Rust",
        "Go",
        "Python",
        "Smart Contract",
        "EVM",
        "DeFi",
        "Solana"
      ],
      "duties": [
        "性能/容量",
        "协议/合约开发",
        "安全/审计",
        "商务拓展",
        "客户/机构对接"
      ]
    },
    {
      "company": "CertiK",
      "func": "eng",
      "category": "other",
      "position": "Background Investigator",
      "level": "mid",
      "location": "Europe / Remote",
      "region": [
        "remote",
        "eu"
      ],
      "salary": "面议",
      "salaryNum": 0,
      "requirements": "About the Company",
      "link": "https://jobs.lever.co/certik/cea4ec5a-c373-4517-a211-5f1dfbaf9489",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "certik||background-investigator",
      "keywords": [
        "Smart Contract",
        "AI",
        "AML/KYC",
        "合规"
      ],
      "duties": [
        "团队管理",
        "监控告警",
        "协议/合约开发",
        "安全/审计",
        "合规风控",
        "数据分析"
      ]
    },
    {
      "company": "Nibiru Chain",
      "func": "eng",
      "category": "chain",
      "position": "Motion Graphics (Freelance)",
      "level": "mid",
      "location": "Remote - Anywhere",
      "region": [
        "remote"
      ],
      "salary": "面议",
      "salaryNum": 0,
      "requirements": "Nibiru Chain is a breakthrough L1 blockchain and smart contract ecosystem sporting superior throughput and unparalleled ",
      "link": "https://jobs.lever.co/nibiru/bb18d08d-885b-4669-80b2-bfd5c93f2500",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "nibiru-chain||motion-graphics-freelance",
      "keywords": [
        "Smart Contract",
        "社区",
        "营销/增长"
      ],
      "duties": [
        "协议/合约开发",
        "安全/审计",
        "设计/品牌",
        "增长营销",
        "社区运营"
      ]
    },
    {
      "company": "Nibiru Chain",
      "func": "growth",
      "category": "chain",
      "position": "Memecoin & NFT Community Leader",
      "level": "mid",
      "location": "Remote - Anywhere",
      "region": [
        "remote"
      ],
      "salary": "面议",
      "salaryNum": 0,
      "requirements": "Nibiru is seeking a passionate and creative Memecoin & NFT Community Leader to independently run your own memecoin, NFT ",
      "link": "https://jobs.lever.co/nibiru/94530f79-e315-4d9a-8852-34c5ebdb5ffa",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "nibiru-chain||memecoin-nft-community-leader",
      "keywords": [
        "AI",
        "社区",
        "营销/增长"
      ],
      "duties": [
        "团队管理",
        "增长营销",
        "社区运营"
      ]
    },
    {
      "company": "Nibiru Chain",
      "func": "eng",
      "category": "chain",
      "position": "Intern",
      "level": "mid",
      "location": "Remote - Anywhere",
      "region": [
        "remote"
      ],
      "salary": "面议",
      "salaryNum": 0,
      "requirements": "Do frens identify you as autist? Lost monies in rugpulls? TikTok?",
      "link": "https://jobs.lever.co/nibiru/12bb5677-caf8-4831-8bfb-33abc508d2e6",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "nibiru-chain||intern",
      "keywords": [],
      "duties": [
        "协议/合约开发"
      ]
    },
    {
      "company": "Nibiru Chain",
      "func": "data",
      "category": "chain",
      "position": "Growth Analyst / Associate",
      "level": "mid",
      "location": "Remote - Anywhere",
      "region": [
        "remote"
      ],
      "salary": "面议",
      "salaryNum": 0,
      "requirements": "Nibiru Chain is a breakthrough L1 blockchain and smart contract ecosystem sporting superior throughput and unparalleled ",
      "link": "https://jobs.lever.co/nibiru/2d218b3b-6715-4d70-8456-4cb26e2e02ca",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "nibiru-chain||growth-analyst-associate",
      "keywords": [
        "Smart Contract",
        "DeFi",
        "社区",
        "营销/增长"
      ],
      "duties": [
        "协议/合约开发",
        "安全/审计",
        "数据分析",
        "设计/品牌",
        "增长营销",
        "社区运营"
      ]
    },
    {
      "company": "Nibiru Chain",
      "func": "eng",
      "category": "chain",
      "position": "Euclid Protocol | Head of Trading",
      "level": "head",
      "location": "Remote - Anywhere",
      "region": [
        "remote"
      ],
      "salary": "面议",
      "salaryNum": 0,
      "requirements": "Euclid is a protocol that sits within the Nibiru ecosystem. This posting is not for Nibiru, but for Euclid.",
      "link": "https://jobs.lever.co/nibiru/31349601-baef-4ebe-98fc-1ac2e7ef392d",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "nibiru-chain||euclid-protocol-head-of-trading",
      "keywords": [
        "Python",
        "TypeScript",
        "Smart Contract",
        "DeFi"
      ],
      "duties": [
        "团队管理",
        "架构设计",
        "监控告警",
        "性能/容量",
        "部署发布",
        "协议/合约开发"
      ]
    },
    {
      "company": "Nibiru Chain",
      "func": "eng",
      "category": "chain",
      "position": "Developer Relations",
      "level": "mid",
      "location": "Remote - North America",
      "region": [
        "remote"
      ],
      "salary": "面议",
      "salaryNum": 0,
      "requirements": "Nibiru Chain is a breakthrough L1 blockchain and smart contract ecosystem sporting superior throughput and unparalleled ",
      "link": "https://jobs.lever.co/nibiru/189b8ceb-5552-4735-8e07-062e48ed1599",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "nibiru-chain||developer-relations",
      "keywords": [
        "Rust",
        "Go",
        "TypeScript",
        "Smart Contract",
        "社区",
        "营销/增长"
      ],
      "duties": [
        "架构设计",
        "性能/容量",
        "协议/合约开发",
        "安全/审计",
        "增长营销",
        "社区运营"
      ]
    },
    {
      "company": "Nibiru Chain",
      "func": "growth",
      "category": "chain",
      "position": "Community Lead",
      "level": "senior",
      "location": "Remote - Anywhere",
      "region": [
        "remote"
      ],
      "salary": "面议",
      "salaryNum": 0,
      "requirements": "Nibiru Chain is a breakthrough L1 blockchain and smart contract ecosystem sporting superior throughput and unparalleled ",
      "link": "https://jobs.lever.co/nibiru/388b4a9c-708a-443c-889c-a8ce8d7e93a3",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "nibiru-chain||community-lead",
      "keywords": [
        "Smart Contract",
        "DeFi",
        "社区",
        "营销/增长"
      ],
      "duties": [
        "团队管理",
        "协议/合约开发",
        "安全/审计",
        "增长营销",
        "社区运营"
      ]
    },
    {
      "company": "Nibiru Chain",
      "func": "data",
      "category": "chain",
      "position": "AI Agent Launchpad Builder",
      "level": "mid",
      "location": "Remote - Anywhere",
      "region": [
        "remote"
      ],
      "salary": "面议",
      "salaryNum": 0,
      "requirements": "Nibiru is seeking a skilled AI Agent Launchpad Builder to develop a robust launchpad platform capable of integrating the",
      "link": "https://jobs.lever.co/nibiru/46e4e0ee-eb49-47ae-9b09-b773fbe7d376",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "nibiru-chain||ai-agent-launchpad-builder",
      "keywords": [
        "Solidity",
        "Rust",
        "DeFi",
        "AI",
        "社区"
      ],
      "duties": [
        "社区运营"
      ]
    },
    {
      "company": "Fireblocks",
      "func": "eng",
      "category": "other",
      "position": "General Manager, Licensed Payments Services",
      "level": "mid",
      "location": "London; United Kingdom",
      "region": [
        "eu"
      ],
      "salary": "面议",
      "salaryNum": 0,
      "requirements": "<div class=\"content-intro\"><p>The world of digital assets is accelerating in speed, magnitude, and complexity, opening t",
      "link": "https://www.fireblocks.com/careers/position/4674062006?gh_jid=4674062006",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "fireblocks||general-manager-licensed-payments-services",
      "keywords": [
        "Go",
        "AML/KYC",
        "合规",
        "出入金"
      ],
      "duties": [
        "团队管理",
        "架构设计",
        "性能/容量",
        "合规风控",
        "产品规划",
        "商务拓展"
      ]
    },
    {
      "company": "Fireblocks",
      "func": "eng",
      "category": "other",
      "position": "Full Stack Engineer, Blockchain",
      "level": "mid",
      "location": "Belgrade, Belgrade, Serbia; Praha, Prague, Czech Republic; Tel Aviv-Yafo, Tel Aviv District, Israel; Warszawa, Masovian Voivodeship, Poland",
      "region": [
        "remote"
      ],
      "salary": "面议",
      "salaryNum": 0,
      "requirements": "<div class=\"content-intro\"><p>The world of digital assets is accelerating in speed, magnitude, and complexity, opening t",
      "link": "https://www.fireblocks.com/careers/position/4671646006?gh_jid=4671646006",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "fireblocks||full-stack-engineer-blockchain",
      "keywords": [
        "Go",
        "Python",
        "TypeScript",
        "JavaScript",
        "Smart Contract",
        "Wallet",
        "Kubernetes",
        "Docker"
      ],
      "duties": [
        "架构设计",
        "稳定性保障",
        "故障/值班",
        "性能/容量",
        "协议/合约开发",
        "安全/审计"
      ]
    },
    {
      "company": "Fireblocks",
      "func": "eng",
      "category": "other",
      "position": "Full Stack Blockchain Engineer",
      "level": "mid",
      "location": "New York",
      "region": [
        "us"
      ],
      "salary": "面议",
      "salaryNum": 0,
      "requirements": "<div class=\"content-intro\"><p>The world of digital assets is accelerating in speed, magnitude, and complexity, opening t",
      "link": "https://www.fireblocks.com/careers/position/4601513006?gh_jid=4601513006",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "fireblocks||full-stack-blockchain-engineer",
      "keywords": [
        "Go",
        "Python",
        "TypeScript",
        "Smart Contract",
        "DeFi",
        "L2/Rollup",
        "Staking",
        "Wallet"
      ],
      "duties": [
        "架构设计",
        "性能/容量",
        "节点运维",
        "协议/合约开发",
        "多链/跨链",
        "安全/审计"
      ]
    },
    {
      "company": "Fireblocks",
      "func": "growth",
      "category": "other",
      "position": "Director of Marketing Operations",
      "level": "head",
      "location": "New York",
      "region": [
        "us"
      ],
      "salary": "面议",
      "salaryNum": 0,
      "requirements": "<div class=\"content-intro\"><p>The world of digital assets is accelerating in speed, magnitude, and complexity, opening t",
      "link": "https://www.fireblocks.com/careers/position/4678058006?gh_jid=4678058006",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "fireblocks||director-of-marketing-operations",
      "keywords": [
        "Go",
        "营销/增长"
      ],
      "duties": [
        "团队管理",
        "架构设计",
        "性能/容量",
        "部署发布",
        "自动化",
        "数据分析"
      ]
    },
    {
      "company": "Fireblocks",
      "func": "eng",
      "category": "other",
      "position": "Director of Engineering, Dynamic Platform",
      "level": "head",
      "location": "Miami, Florida, United States; New York; United States",
      "region": [
        "us"
      ],
      "salary": "面议",
      "salaryNum": 0,
      "requirements": "<div class=\"content-intro\"><p>The world of digital assets is accelerating in speed, magnitude, and complexity, opening t",
      "link": "https://www.fireblocks.com/careers/position/4662147006?gh_jid=4662147006",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "fireblocks||director-of-engineering-dynamic-platform",
      "keywords": [
        "Wallet",
        "营销/增长"
      ],
      "duties": [
        "团队管理",
        "架构设计",
        "性能/容量",
        "安全/审计",
        "产品规划",
        "增长营销"
      ]
    },
    {
      "company": "Fireblocks",
      "func": "eng",
      "category": "other",
      "position": "Custody Operations Associate",
      "level": "mid",
      "location": "New York",
      "region": [
        "us"
      ],
      "salary": "面议",
      "salaryNum": 0,
      "requirements": "<div class=\"content-intro\"><p>The world of digital assets is accelerating in speed, magnitude, and complexity, opening t",
      "link": "https://www.fireblocks.com/careers/position/4683657006?gh_jid=4683657006",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "fireblocks||custody-operations-associate",
      "keywords": [
        "Wallet",
        "合规"
      ],
      "duties": [
        "故障/值班",
        "性能/容量",
        "协议/合约开发",
        "安全/审计",
        "合规风控",
        "客户/机构对接"
      ]
    },
    {
      "company": "Fireblocks",
      "func": "ga",
      "category": "other",
      "position": "Compliance Lead, Payments",
      "level": "senior",
      "location": "New York",
      "region": [
        "us"
      ],
      "salary": "面议",
      "salaryNum": 0,
      "requirements": "<div class=\"content-intro\"><p>The world of digital assets is accelerating in speed, magnitude, and complexity, opening t",
      "link": "https://www.fireblocks.com/careers/position/4646867006?gh_jid=4646867006",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "fireblocks||compliance-lead-payments",
      "keywords": [
        "Wallet",
        "AML/KYC",
        "合规"
      ],
      "duties": [
        "团队管理",
        "监控告警",
        "性能/容量",
        "部署发布",
        "合规风控",
        "客户/机构对接"
      ]
    },
    {
      "company": "Fireblocks",
      "func": "bd",
      "category": "other",
      "position": "Business Development Manager, Blockchain and DeFi Ecosystem",
      "level": "mid",
      "location": "London",
      "region": [
        "eu"
      ],
      "salary": "面议",
      "salaryNum": 0,
      "requirements": "<div class=\"content-intro\"><p>The world of digital assets is accelerating in speed, magnitude, and complexity, opening t",
      "link": "https://www.fireblocks.com/careers/position/4657524006?gh_jid=4657524006",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "fireblocks||business-development-manager-blockchain-and-defi-ecosystem",
      "keywords": [
        "DeFi",
        "Wallet",
        "营销/增长"
      ],
      "duties": [
        "性能/容量",
        "协议/合约开发",
        "增长营销",
        "商务拓展",
        "招聘/HR",
        "客户/机构对接"
      ]
    },
    {
      "company": "Fireblocks",
      "func": "ga",
      "category": "other",
      "position": "Associate General Counsel, Crypto Services",
      "level": "mid",
      "location": "New York; Washington, District of Columbia, United States",
      "region": [
        "us"
      ],
      "salary": "面议",
      "salaryNum": 0,
      "requirements": "<div class=\"content-intro\"><p>The world of digital assets is accelerating in speed, magnitude, and complexity, opening t",
      "link": "https://www.fireblocks.com/careers/position/4658959006?gh_jid=4658959006",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "fireblocks||associate-general-counsel-crypto-services",
      "keywords": [
        "Go",
        "合规",
        "营销/增长"
      ],
      "duties": [
        "团队管理",
        "监控告警",
        "性能/容量",
        "合规风控",
        "增长营销",
        "客户/机构对接"
      ]
    },
    {
      "company": "Fireblocks",
      "func": "data",
      "category": "other",
      "position": "AI Secops Tech-lead",
      "level": "senior",
      "location": "Tel Aviv-Yafo, Tel Aviv District, Israel",
      "region": [
        "remote"
      ],
      "salary": "面议",
      "salaryNum": 0,
      "requirements": "<div class=\"content-intro\"><p>The world of digital assets is accelerating in speed, magnitude, and complexity, opening t",
      "link": "https://www.fireblocks.com/careers/position/4655907006?gh_jid=4655907006",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "fireblocks||ai-secops-tech-lead",
      "keywords": [
        "Python",
        "Wallet",
        "Linux",
        "AI",
        "营销/增长"
      ],
      "duties": [
        "团队管理",
        "故障/值班",
        "监控告警",
        "性能/容量",
        "自动化",
        "安全/审计"
      ]
    },
    {
      "company": "Blockchain.com",
      "func": "bd",
      "category": "exchange",
      "position": "Front-End Engineer, Institutional",
      "level": "mid",
      "location": "London",
      "region": [
        "eu"
      ],
      "salary": "面议",
      "salaryNum": 0,
      "requirements": "<div class=\"content-intro\"><p><strong>Blockchain</strong> is connecting the world to the future of finance. As the most ",
      "link": "https://job-boards.greenhouse.io/blockchain/jobs/7821146",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "blockchain-com||front-end-engineer-institutional",
      "keywords": [
        "TypeScript",
        "JavaScript",
        "React",
        "Wallet",
        "AI",
        "营销/增长"
      ],
      "duties": [
        "架构设计",
        "性能/容量",
        "设计/品牌",
        "增长营销",
        "客户/机构对接"
      ]
    },
    {
      "company": "Blockchain.com",
      "func": "eng",
      "category": "exchange",
      "position": "FIU Associate",
      "level": "mid",
      "location": "Buenos Aires",
      "region": [
        "remote"
      ],
      "salary": "面议",
      "salaryNum": 0,
      "requirements": "<div class=\"content-intro\"><p><strong>Blockchain</strong> is connecting the world to the future of finance. As the most ",
      "link": "https://job-boards.greenhouse.io/blockchain/jobs/7792516",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "blockchain-com||fiu-associate",
      "keywords": [
        "Wallet",
        "AML/KYC",
        "合规"
      ],
      "duties": [
        "监控告警",
        "部署发布",
        "合规风控",
        "招聘/HR"
      ]
    },
    {
      "company": "Blockchain.com",
      "func": "bd",
      "category": "exchange",
      "position": "Engineering Manager, Institutional Trading",
      "level": "mid",
      "location": "London",
      "region": [
        "eu"
      ],
      "salary": "面议",
      "salaryNum": 0,
      "requirements": "<div class=\"content-intro\"><p><strong>Blockchain</strong> is connecting the world to the future of finance. As the most ",
      "link": "https://job-boards.greenhouse.io/blockchain/jobs/7918673",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "blockchain-com||engineering-manager-institutional-trading",
      "keywords": [
        "Rust",
        "Python",
        "C++",
        "Wallet",
        "Kubernetes",
        "Docker",
        "AWS",
        "可观测性"
      ],
      "duties": [
        "团队管理",
        "架构设计",
        "稳定性保障",
        "故障/值班",
        "性能/容量",
        "部署发布"
      ]
    },
    {
      "company": "Blockchain.com",
      "func": "eng",
      "category": "exchange",
      "position": "Deputy BSA & Sanctions Officer",
      "level": "mid",
      "location": "Dallas",
      "region": [
        "remote"
      ],
      "salary": "面议",
      "salaryNum": 0,
      "requirements": "<div class=\"content-intro\"><p><strong>Blockchain</strong> is connecting the world to the future of finance. As the most ",
      "link": "https://job-boards.greenhouse.io/blockchain/jobs/6443528",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "blockchain-com||deputy-bsa-sanctions-officer",
      "keywords": [
        "Wallet",
        "安全审计",
        "AML/KYC",
        "合规",
        "营销/增长"
      ],
      "duties": [
        "团队管理",
        "监控告警",
        "性能/容量",
        "安全/审计",
        "合规风控",
        "增长营销"
      ]
    },
    {
      "company": "Blockchain.com",
      "func": "eng",
      "category": "exchange",
      "position": "Corporate Treasurer",
      "level": "mid",
      "location": "London",
      "region": [
        "eu"
      ],
      "salary": "面议",
      "salaryNum": 0,
      "requirements": "<div class=\"content-intro\"><p><strong>Blockchain</strong> is connecting the world to the future of finance. As the most ",
      "link": "https://job-boards.greenhouse.io/blockchain/jobs/7894319",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "blockchain-com||corporate-treasurer",
      "keywords": [
        "Wallet",
        "合规",
        "营销/增长"
      ],
      "duties": [
        "团队管理",
        "监控告警",
        "性能/容量",
        "部署发布",
        "自动化",
        "合规风控"
      ]
    },
    {
      "company": "Blockchain.com",
      "func": "data",
      "category": "exchange",
      "position": "Consumer Operations Data Analyst Intern",
      "level": "mid",
      "location": "Paris",
      "region": [
        "eu"
      ],
      "salary": "面议",
      "salaryNum": 0,
      "requirements": "<div class=\"content-intro\"><p><strong>Blockchain</strong> is connecting the world to the future of finance. As the most ",
      "link": "https://job-boards.greenhouse.io/blockchain/jobs/7871140",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "blockchain-com||consumer-operations-data-analyst-intern",
      "keywords": [
        "Python",
        "Wallet",
        "SQL"
      ],
      "duties": [
        "稳定性保障",
        "故障/值班",
        "监控告警",
        "性能/容量",
        "部署发布",
        "自动化"
      ]
    },
    {
      "company": "Blockchain.com",
      "func": "ga",
      "category": "exchange",
      "position": "Compliance Associate, Assurance, Governance & Testing",
      "level": "mid",
      "location": "Buenos Aires",
      "region": [
        "remote"
      ],
      "salary": "面议",
      "salaryNum": 0,
      "requirements": "<div class=\"content-intro\"><p><strong>Blockchain</strong> is connecting the world to the future of finance. As the most ",
      "link": "https://job-boards.greenhouse.io/blockchain/jobs/7851666",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "blockchain-com||compliance-associate-assurance-governance-testing",
      "keywords": [
        "Wallet",
        "安全审计",
        "AML/KYC",
        "合规"
      ],
      "duties": [
        "团队管理",
        "监控告警",
        "性能/容量",
        "安全/审计",
        "合规风控",
        "招聘/HR"
      ]
    },
    {
      "company": "Blockchain.com",
      "func": "ga",
      "category": "exchange",
      "position": "BSA Compliance Associate",
      "level": "mid",
      "location": "Buenos Aires",
      "region": [
        "remote"
      ],
      "salary": "面议",
      "salaryNum": 0,
      "requirements": "<div class=\"content-intro\"><p><strong>Blockchain</strong> is connecting the world to the future of finance. As the most ",
      "link": "https://job-boards.greenhouse.io/blockchain/jobs/7851546",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "blockchain-com||bsa-compliance-associate",
      "keywords": [
        "Wallet",
        "安全审计",
        "AML/KYC",
        "合规"
      ],
      "duties": [
        "监控告警",
        "安全/审计",
        "合规风控",
        "客户/机构对接"
      ]
    },
    {
      "company": "Blockchain.com",
      "func": "design",
      "category": "exchange",
      "position": "Brand Design Lead",
      "level": "senior",
      "location": "London",
      "region": [
        "eu"
      ],
      "salary": "面议",
      "salaryNum": 0,
      "requirements": "<div class=\"content-intro\"><p><strong>Blockchain</strong> is connecting the world to the future of finance. As the most ",
      "link": "https://job-boards.greenhouse.io/blockchain/jobs/7408756",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "blockchain-com||brand-design-lead",
      "keywords": [
        "Wallet",
        "营销/增长"
      ],
      "duties": [
        "团队管理",
        "架构设计",
        "性能/容量",
        "设计/品牌",
        "增长营销",
        "招聘/HR"
      ]
    },
    {
      "company": "Blockchain.com",
      "func": "eng",
      "category": "exchange",
      "position": "Android Engineer",
      "level": "mid",
      "location": "Buenos Aires",
      "region": [
        "remote"
      ],
      "salary": "面议",
      "salaryNum": 0,
      "requirements": "<div class=\"content-intro\"><p><strong>Blockchain</strong> is connecting the world to the future of finance. As the most ",
      "link": "https://job-boards.greenhouse.io/blockchain/jobs/7700625",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "blockchain-com||android-engineer",
      "keywords": [
        "Wallet",
        "Bitcoin",
        "CI/CD",
        "营销/增长"
      ],
      "duties": [
        "架构设计",
        "性能/容量",
        "部署发布",
        "自动化",
        "安全/审计",
        "产品规划"
      ]
    },
    {
      "company": "1inch",
      "func": "product",
      "category": "defi",
      "position": "Senior Technical Product Manager, Swap",
      "level": "senior",
      "location": "UAE - Dubai",
      "region": [
        "dubai"
      ],
      "salary": "面议",
      "salaryNum": 0,
      "requirements": "1inch is the DeFi ecosystem building financial freedom for everyone. 1inch products help users and builders trade, hold ",
      "link": "https://jobs.lever.co/1inch/34d86c62-439d-47db-81e3-11786d70525e",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "1inch||senior-technical-product-manager-swap",
      "keywords": [
        "Go",
        "DeFi",
        "营销/增长"
      ],
      "duties": [
        "团队管理",
        "架构设计",
        "稳定性保障",
        "监控告警",
        "性能/容量",
        "协议/合约开发"
      ]
    },
    {
      "company": "1inch",
      "func": "eng",
      "category": "defi",
      "position": "Head of IT",
      "level": "head",
      "location": "Germany - Stuttgart",
      "region": [
        "remote"
      ],
      "salary": "面议",
      "salaryNum": 0,
      "requirements": "1inch is the DeFi ecosystem building financial freedom for everyone. 1inch products help users and builders trade, hold ",
      "link": "https://jobs.lever.co/1inch/79a3855e-5675-46a9-b23c-99ea7bbcb9eb",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "1inch||head-of-it",
      "keywords": [
        "DeFi",
        "SLO/SLA",
        "AI"
      ],
      "duties": [
        "团队管理",
        "稳定性保障",
        "故障/值班",
        "监控告警",
        "性能/容量",
        "自动化"
      ]
    },
    {
      "company": "1inch",
      "func": "ops",
      "category": "defi",
      "position": "Head of DevOps",
      "level": "head",
      "location": "Germany",
      "region": [
        "remote"
      ],
      "salary": "面议",
      "salaryNum": 0,
      "requirements": "1inch is the DeFi ecosystem building financial freedom for everyone. 1inch products help users and builders trade, hold ",
      "link": "https://jobs.lever.co/1inch/7bf88a06-2c35-4373-91c3-78fb4bb22bb7",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "1inch||head-of-devops",
      "keywords": [
        "DeFi",
        "Kubernetes",
        "Terraform",
        "AWS",
        "GCP",
        "CI/CD",
        "可观测性",
        "Kafka"
      ],
      "duties": [
        "团队管理",
        "架构设计",
        "稳定性保障",
        "故障/值班",
        "监控告警",
        "性能/容量"
      ]
    },
    {
      "company": "Fuel Labs",
      "func": "ga",
      "category": "chain",
      "position": "Join Our Talent Network !",
      "level": "mid",
      "location": "Portugal",
      "region": [
        "remote"
      ],
      "salary": "面议",
      "salaryNum": 0,
      "requirements": "Don’t see a role that fits? No worries!",
      "link": "https://jobs.lever.co/fuellabs/17b28ec2-97ee-4912-876d-0c42c85e90c2",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "fuel-labs||join-our-talent-network",
      "keywords": [],
      "duties": [
        "招聘/HR"
      ]
    },
    {
      "company": "Aptos Labs",
      "func": "eng",
      "category": "chain",
      "position": "Staff Software Engineer, Product",
      "level": "senior",
      "location": "Palo Alto, California ",
      "region": [
        "remote"
      ],
      "salary": "面议",
      "salaryNum": 0,
      "requirements": "<div class=\"content-intro\"><p><span style=\"font-weight: 400;\">Aptos is a people-first blockchain on a mission to help bi",
      "link": "https://job-boards.greenhouse.io/aptoslabs/jobs/4525877005",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "aptos-labs||staff-software-engineer-product",
      "keywords": [
        "TypeScript",
        "JavaScript",
        "React",
        "DeFi",
        "Wallet"
      ],
      "duties": [
        "架构设计",
        "协议/合约开发",
        "设计/品牌",
        "招聘/HR"
      ]
    },
    {
      "company": "Aptos Labs",
      "func": "security",
      "category": "chain",
      "position": "Information Security Engineer, Product  ",
      "level": "mid",
      "location": "Remote Global (US, EU)",
      "region": [
        "remote",
        "us"
      ],
      "salary": "面议",
      "salaryNum": 0,
      "requirements": "<div class=\"content-intro\"><p><span style=\"font-weight: 400;\">Aptos is a people-first blockchain on a mission to help bi",
      "link": "https://job-boards.greenhouse.io/aptoslabs/jobs/4650606005",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "aptos-labs||information-security-engineer-product",
      "keywords": [
        "Rust",
        "Smart Contract",
        "EVM",
        "形式化验证",
        "社区"
      ],
      "duties": [
        "自动化",
        "协议/合约开发",
        "安全/审计",
        "社区运营"
      ]
    },
    {
      "company": "Aptos Labs",
      "func": "eng",
      "category": "chain",
      "position": "Head of Enterprise GTM – Shelby Platform",
      "level": "head",
      "location": "US/Global (Remote)",
      "region": [
        "remote",
        "us"
      ],
      "salary": "面议",
      "salaryNum": 0,
      "requirements": "<div class=\"content-intro\"><p><span style=\"font-weight: 400;\">Aptos is a people-first blockchain on a mission to help bi",
      "link": "https://job-boards.greenhouse.io/aptoslabs/jobs/4645494005",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "aptos-labs||head-of-enterprise-gtm-shelby-platform",
      "keywords": [
        "Go",
        "AI"
      ],
      "duties": [
        "团队管理",
        "架构设计",
        "性能/容量",
        "部署发布",
        "商务拓展",
        "招聘/HR"
      ]
    },
    {
      "company": "Aptos Labs",
      "func": "growth",
      "category": "chain",
      "position": "Community Manager (Korea)",
      "level": "mid",
      "location": "Korea",
      "region": [
        "remote"
      ],
      "salary": "面议",
      "salaryNum": 0,
      "requirements": "<div class=\"content-intro\"><p><span style=\"font-weight: 400;\">Aptos is a people-first blockchain on a mission to help bi",
      "link": "https://job-boards.greenhouse.io/aptoslabs/jobs/4686651005",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "aptos-labs||community-manager-korea",
      "keywords": [
        "社区",
        "营销/增长"
      ],
      "duties": [
        "协议/合约开发",
        "增长营销",
        "社区运营"
      ]
    },
    {
      "company": "Sky Mavis",
      "func": "ga",
      "category": "other",
      "position": "Vietnam Corporate Paralegal",
      "level": "mid",
      "location": "Vietnam",
      "region": [
        "remote"
      ],
      "salary": "面议",
      "salaryNum": 0,
      "requirements": "ABOUT SKY MAVIS",
      "link": "https://jobs.ashbyhq.com/skymavis/8fbc3d9e-46a1-40e0-bc09-657efb21cbb2",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "sky-mavis||vietnam-corporate-paralegal",
      "keywords": [
        "Ethereum",
        "Solana",
        "Bitcoin",
        "AML/KYC"
      ],
      "duties": [
        "性能/容量",
        "合规风控"
      ]
    },
    {
      "company": "Sky Mavis",
      "func": "eng",
      "category": "other",
      "position": "Office Administrator (8-Month Contract)",
      "level": "mid",
      "location": "Vietnam",
      "region": [
        "remote"
      ],
      "salary": "面议",
      "salaryNum": 0,
      "requirements": "ABOUT SKY MAVIS",
      "link": "https://jobs.ashbyhq.com/skymavis/b8905760-47d0-4200-b07a-13ecc1f3b4a4",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "sky-mavis||office-administrator-8-month-contract",
      "keywords": [],
      "duties": [
        "招聘/HR"
      ]
    },
    {
      "company": "Sky Mavis",
      "func": "bd",
      "category": "other",
      "position": "Business Development Specialist",
      "level": "mid",
      "location": "Vietnam",
      "region": [
        "remote"
      ],
      "salary": "面议",
      "salaryNum": 0,
      "requirements": "ABOUT SKY MAVIS",
      "link": "https://jobs.ashbyhq.com/skymavis/8cb8af35-fbbd-4f78-85c0-7764c3b7f965",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "sky-mavis||business-development-specialist",
      "keywords": [
        "Ethereum",
        "Solana",
        "Bitcoin",
        "营销/增长"
      ],
      "duties": [
        "性能/容量",
        "增长营销",
        "商务拓展"
      ]
    },
    {
      "company": "Sky Mavis",
      "func": "bd",
      "category": "other",
      "position": "Business Development Specialist, Fintech",
      "level": "mid",
      "location": "Vietnam",
      "region": [
        "remote"
      ],
      "salary": "面议",
      "salaryNum": 0,
      "requirements": "ABOUT SKY MAVIS",
      "link": "https://jobs.ashbyhq.com/skymavis/34468990-9f49-4648-aab8-6383d5051a1d",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "sky-mavis||business-development-specialist-fintech",
      "keywords": [
        "Ethereum",
        "Solana",
        "Bitcoin",
        "营销/增长"
      ],
      "duties": [
        "性能/容量",
        "增长营销",
        "商务拓展"
      ]
    },
    {
      "company": "Sky Mavis",
      "func": "security",
      "category": "other",
      "position": "Cloud Security Engineer",
      "level": "mid",
      "location": "Vietnam",
      "region": [
        "remote"
      ],
      "salary": "面议",
      "salaryNum": 0,
      "requirements": "ABOUT SKY MAVIS",
      "link": "https://jobs.ashbyhq.com/skymavis/8d8328c3-b02d-44df-a29b-ddce85c1ca0d",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "sky-mavis||cloud-security-engineer",
      "keywords": [
        "Python",
        "Wallet",
        "Ethereum",
        "Solana",
        "Bitcoin",
        "Terraform",
        "AI",
        "营销/增长"
      ],
      "duties": [
        "故障/值班",
        "监控告警",
        "性能/容量",
        "部署发布",
        "自动化",
        "安全/审计"
      ]
    },
    {
      "company": "Galaxy Digital",
      "func": "eng",
      "category": "other",
      "position": "Don't see the right job for you?",
      "level": "mid",
      "location": "Bahamas, Chicago, Hong Kong, London, New York",
      "region": [
        "hk",
        "us",
        "eu"
      ],
      "salary": "面议",
      "salaryNum": 0,
      "requirements": "<div class=\"content-intro\"><p><strong>Who We Are:<br></strong>Galaxy is a global leader in digital assets and data cente",
      "link": "https://job-boards.greenhouse.io/galaxydigitalservices/jobs/4514986004",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "galaxy-digital||don-t-see-the-right-job-for-you",
      "keywords": [
        "Staking",
        "AI"
      ],
      "duties": [
        "团队管理",
        "性能/容量",
        "节点运维",
        "商务拓展",
        "客户/机构对接"
      ]
    },
    {
      "company": "Galaxy Digital",
      "func": "eng",
      "category": "other",
      "position": "Director of Corporate Accounting & Public Reporting",
      "level": "head",
      "location": "New York, NY",
      "region": [
        "us"
      ],
      "salary": "面议",
      "salaryNum": 0,
      "requirements": "<div class=\"content-intro\"><p><strong>Who We Are:<br></strong>Galaxy is a global leader in digital assets and data cente",
      "link": "https://job-boards.greenhouse.io/galaxydigitalservices/jobs/5840698004",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "galaxy-digital||director-of-corporate-accounting-public-reporting",
      "keywords": [
        "Staking",
        "AI",
        "安全审计",
        "合规"
      ],
      "duties": [
        "团队管理",
        "性能/容量",
        "部署发布",
        "节点运维",
        "安全/审计",
        "合规风控"
      ]
    },
    {
      "company": "Galaxy Digital",
      "func": "eng",
      "category": "other",
      "position": "Derivatives Engineer",
      "level": "mid",
      "location": "New York, NY",
      "region": [
        "us"
      ],
      "salary": "面议",
      "salaryNum": 0,
      "requirements": "<div class=\"content-intro\"><p><strong>Who We Are:<br></strong>Galaxy is a global leader in digital assets and data cente",
      "link": "https://job-boards.greenhouse.io/galaxydigitalservices/jobs/5990908004",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "galaxy-digital||derivatives-engineer",
      "keywords": [
        "Go",
        "Python",
        "Staking",
        "Kubernetes",
        "Docker",
        "AWS",
        "CI/CD",
        "Kafka"
      ],
      "duties": [
        "团队管理",
        "性能/容量",
        "部署发布",
        "自动化",
        "节点运维",
        "客户/机构对接"
      ]
    },
    {
      "company": "Galaxy Digital",
      "func": "data",
      "category": "other",
      "position": "Data Engineering Manager",
      "level": "mid",
      "location": "Mumbai",
      "region": [
        "remote"
      ],
      "salary": "面议",
      "salaryNum": 0,
      "requirements": "<div class=\"content-intro\"><p><strong>Who We Are:<br></strong>Galaxy is a global leader in digital assets and data cente",
      "link": "https://job-boards.greenhouse.io/galaxydigitalservices/jobs/5978441004",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "galaxy-digital||data-engineering-manager",
      "keywords": [
        "Staking",
        "AI"
      ],
      "duties": [
        "团队管理",
        "性能/容量",
        "节点运维",
        "客户/机构对接"
      ]
    },
    {
      "company": "Galaxy Digital",
      "func": "data",
      "category": "other",
      "position": "Data Engineer",
      "level": "mid",
      "location": "Hong Kong",
      "region": [
        "hk"
      ],
      "salary": "面议",
      "salaryNum": 0,
      "requirements": "<div class=\"content-intro\"><p><strong>Who We Are:<br></strong>Galaxy is a global leader in digital assets and data cente",
      "link": "https://job-boards.greenhouse.io/galaxydigitalservices/jobs/5991231004",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "galaxy-digital||data-engineer",
      "keywords": [
        "Python",
        "Staking",
        "Kubernetes",
        "Terraform",
        "AWS",
        "Kafka",
        "Spark",
        "AI"
      ],
      "duties": [
        "团队管理",
        "稳定性保障",
        "监控告警",
        "性能/容量",
        "部署发布",
        "节点运维"
      ]
    },
    {
      "company": "Galaxy Digital",
      "func": "data",
      "category": "other",
      "position": "Data Center Senior QA/QC-Construction Project Manager",
      "level": "senior",
      "location": "Afton, Texas",
      "region": [
        "remote"
      ],
      "salary": "面议",
      "salaryNum": 0,
      "requirements": "<div class=\"content-intro\"><p><strong>Who We Are:<br></strong>Galaxy is a global leader in digital assets and data cente",
      "link": "https://job-boards.greenhouse.io/galaxydigitalservices/jobs/5837236004",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "galaxy-digital||data-center-senior-qa-qc-construction-project-manager",
      "keywords": [
        "Staking",
        "AI"
      ],
      "duties": [
        "团队管理",
        "故障/值班",
        "监控告警",
        "性能/容量",
        "节点运维",
        "协议/合约开发"
      ]
    },
    {
      "company": "Galaxy Digital",
      "func": "ops",
      "category": "other",
      "position": "Construction & Infrastructure Corporate Counsel",
      "level": "mid",
      "location": "Dallas, Texas",
      "region": [
        "remote"
      ],
      "salary": "面议",
      "salaryNum": 0,
      "requirements": "<div class=\"content-intro\"><p><strong>Who We Are:<br></strong>Galaxy is a global leader in digital assets and data cente",
      "link": "https://job-boards.greenhouse.io/galaxydigitalservices/jobs/5476472004",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "galaxy-digital||construction-infrastructure-corporate-counsel",
      "keywords": [
        "Staking",
        "AI",
        "合规"
      ],
      "duties": [
        "团队管理",
        "性能/容量",
        "节点运维",
        "合规风控",
        "客户/机构对接"
      ]
    },
    {
      "company": "Galaxy Digital",
      "func": "eng",
      "category": "other",
      "position": "Associate, US Policy",
      "level": "mid",
      "location": "Washington, DC",
      "region": [
        "remote"
      ],
      "salary": "面议",
      "salaryNum": 0,
      "requirements": "<div class=\"content-intro\"><p><strong>Who We Are:<br></strong>Galaxy is a global leader in digital assets and data cente",
      "link": "https://job-boards.greenhouse.io/galaxydigitalservices/jobs/5833111004",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "galaxy-digital||associate-us-policy",
      "keywords": [
        "Staking",
        "AI"
      ],
      "duties": [
        "团队管理",
        "监控告警",
        "性能/容量",
        "自动化",
        "节点运维",
        "合规风控"
      ]
    },
    {
      "company": "Galaxy Digital",
      "func": "eng",
      "category": "other",
      "position": "Associate, Production Support Engineer",
      "level": "mid",
      "location": "London",
      "region": [
        "eu"
      ],
      "salary": "面议",
      "salaryNum": 0,
      "requirements": "<div class=\"content-intro\"><p><strong>Who We Are:<br></strong>Galaxy is a global leader in digital assets and data cente",
      "link": "https://job-boards.greenhouse.io/galaxydigitalservices/jobs/5802598004",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "galaxy-digital||associate-production-support-engineer",
      "keywords": [
        "Python",
        "Staking",
        "AI"
      ],
      "duties": [
        "团队管理",
        "稳定性保障",
        "故障/值班",
        "监控告警",
        "性能/容量",
        "自动化"
      ]
    },
    {
      "company": "Galaxy Digital",
      "func": "data",
      "category": "other",
      "position": "Analyst, Sales & Trading (US Equities/Options Broker-Dealer)",
      "level": "mid",
      "location": "New York, NY",
      "region": [
        "us"
      ],
      "salary": "面议",
      "salaryNum": 0,
      "requirements": "<div class=\"content-intro\"><p><strong>Who We Are:<br></strong>Galaxy is a global leader in digital assets and data cente",
      "link": "https://job-boards.greenhouse.io/galaxydigitalservices/jobs/5973845004",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "galaxy-digital||analyst-sales-trading-us-equities-options-broker-dealer",
      "keywords": [
        "Staking",
        "AI",
        "合规"
      ],
      "duties": [
        "团队管理",
        "性能/容量",
        "节点运维",
        "合规风控",
        "数据分析",
        "商务拓展"
      ]
    },
    {
      "company": "Eigen Labs",
      "func": "data",
      "category": "infra",
      "position": "Senior Agentic AI Engineer",
      "level": "senior",
      "location": "Remote",
      "region": [
        "remote"
      ],
      "salary": "面议",
      "salaryNum": 0,
      "requirements": "Eigen Labs is building the coordination engine for a world run by humans and AI agents alike.",
      "link": "https://jobs.ashbyhq.com/eigen-labs/c02fa001-23c9-4d68-8c0a-e27a742d76a4",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "eigen-labs||senior-agentic-ai-engineer",
      "keywords": [
        "Rust",
        "Go",
        "Python",
        "TypeScript",
        "Staking",
        "可观测性",
        "AI"
      ],
      "duties": [
        "架构设计",
        "稳定性保障",
        "性能/容量",
        "部署发布",
        "自动化",
        "节点运维"
      ]
    },
    {
      "company": "Eigen Labs",
      "func": "eng",
      "category": "infra",
      "position": "Future Builders – General Interest",
      "level": "mid",
      "location": "Remote",
      "region": [
        "remote"
      ],
      "salary": "面议",
      "salaryNum": 0,
      "requirements": "Eigen Labs is building the infrastructure for a more trustworthy internet.",
      "link": "https://jobs.ashbyhq.com/eigen-labs/2f08d719-09b3-493e-ae9e-f3eba2ade188",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "eigen-labs||future-builders-general-interest",
      "keywords": [
        "Smart Contract",
        "AI"
      ],
      "duties": [
        "协议/合约开发",
        "安全/审计",
        "招聘/HR"
      ]
    },
    {
      "company": "TRM Labs",
      "func": "security",
      "category": "other",
      "position": "Senior Cloud Security Engineer",
      "level": "senior",
      "location": "North America",
      "region": [
        "remote"
      ],
      "salary": "面议",
      "salaryNum": 0,
      "requirements": "BUILD A SAFER WORLD.",
      "link": "https://jobs.ashbyhq.com/trm-labs/d7ca4439-43ab-42aa-a907-ef1a288c5759",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "trm-labs||senior-cloud-security-engineer",
      "keywords": [
        "Terraform",
        "GCP",
        "AI",
        "安全审计",
        "合规"
      ],
      "duties": [
        "团队管理",
        "架构设计",
        "性能/容量",
        "自动化",
        "安全/审计",
        "合规风控"
      ]
    },
    {
      "company": "TRM Labs",
      "func": "data",
      "category": "other",
      "position": "Blockchain Intelligence Analyst",
      "level": "mid",
      "location": "United States",
      "region": [
        "us"
      ],
      "salary": "面议",
      "salaryNum": 0,
      "requirements": "BUILD A SAFER WORLD.",
      "link": "https://jobs.ashbyhq.com/trm-labs/3f3248cb-9b8d-4b4e-ae46-8ad5a28998fc",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "trm-labs||blockchain-intelligence-analyst",
      "keywords": [
        "AI",
        "合规",
        "营销/增长"
      ],
      "duties": [
        "团队管理",
        "性能/容量",
        "自动化",
        "安全/审计",
        "合规风控",
        "数据分析"
      ]
    },
    {
      "company": "TRM Labs",
      "func": "data",
      "category": "other",
      "position": "Senior Data Scientist, Product Analytics",
      "level": "senior",
      "location": "North America",
      "region": [
        "remote"
      ],
      "salary": "面议",
      "salaryNum": 0,
      "requirements": "BUILD A SAFER WORLD.",
      "link": "https://jobs.ashbyhq.com/trm-labs/0789ab71-b07d-4c6f-84e3-6c1b63716298",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "trm-labs||senior-data-scientist-product-analytics",
      "keywords": [
        "SQL",
        "AI",
        "合规",
        "营销/增长"
      ],
      "duties": [
        "团队管理",
        "监控告警",
        "性能/容量",
        "部署发布",
        "自动化",
        "安全/审计"
      ]
    },
    {
      "company": "TRM Labs",
      "func": "growth",
      "category": "other",
      "position": "Senior Product Marketing Manager",
      "level": "senior",
      "location": "North America",
      "region": [
        "remote"
      ],
      "salary": "面议",
      "salaryNum": 0,
      "requirements": "BUILD A SAFER WORLD.",
      "link": "https://jobs.ashbyhq.com/trm-labs/e26723cd-a11e-4e1b-ac79-a55a41ef86e2",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "trm-labs||senior-product-marketing-manager",
      "keywords": [
        "Go",
        "AI",
        "合规",
        "营销/增长"
      ],
      "duties": [
        "团队管理",
        "部署发布",
        "自动化",
        "安全/审计",
        "合规风控",
        "增长营销"
      ]
    },
    {
      "company": "TRM Labs",
      "func": "data",
      "category": "other",
      "position": "Senior Data Scientist, Full Stack",
      "level": "senior",
      "location": "North America",
      "region": [
        "remote"
      ],
      "salary": "面议",
      "salaryNum": 0,
      "requirements": "BUILD A SAFER WORLD.",
      "link": "https://jobs.ashbyhq.com/trm-labs/23df8728-7b04-4340-a767-07e8ce3c23dc",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "trm-labs||senior-data-scientist-full-stack",
      "keywords": [
        "Python",
        "On-call",
        "Spark",
        "SQL",
        "Machine Learning",
        "AI",
        "合规"
      ],
      "duties": [
        "团队管理",
        "架构设计",
        "故障/值班",
        "部署发布",
        "自动化",
        "协议/合约开发"
      ]
    },
    {
      "company": "TRM Labs",
      "func": "ga",
      "category": "other",
      "position": "Compliance Advisor",
      "level": "mid",
      "location": "APAC",
      "region": [
        "remote"
      ],
      "salary": "面议",
      "salaryNum": 0,
      "requirements": "BUILD A SAFER WORLD.",
      "link": "https://jobs.ashbyhq.com/trm-labs/0a0406b2-a031-4406-8753-914dc8172bd1",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "trm-labs||compliance-advisor",
      "keywords": [
        "Go",
        "AI",
        "AML/KYC",
        "合规",
        "营销/增长"
      ],
      "duties": [
        "团队管理",
        "监控告警",
        "性能/容量",
        "部署发布",
        "自动化",
        "安全/审计"
      ]
    },
    {
      "company": "TRM Labs",
      "func": "eng",
      "category": "other",
      "position": "Account Director - DACH (Public Sector)",
      "level": "head",
      "location": "EMEA",
      "region": [
        "remote"
      ],
      "salary": "面议",
      "salaryNum": 0,
      "requirements": "BUILD A SAFER WORLD.",
      "link": "https://jobs.ashbyhq.com/trm-labs/695bb715-230d-4394-aacd-b717d2973f12",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "trm-labs||account-director-dach-public-sector",
      "keywords": [
        "Go",
        "React",
        "AI",
        "合规",
        "营销/增长"
      ],
      "duties": [
        "团队管理",
        "部署发布",
        "自动化",
        "安全/审计",
        "合规风控",
        "增长营销"
      ]
    },
    {
      "company": "TRM Labs",
      "func": "bd",
      "category": "other",
      "position": "Senior Solutions Architect - TS/SCI (Pre-Sales)",
      "level": "senior",
      "location": "North America",
      "region": [
        "remote"
      ],
      "salary": "面议",
      "salaryNum": 0,
      "requirements": "BUILD A SAFER WORLD.",
      "link": "https://jobs.ashbyhq.com/trm-labs/d5c9b448-2e1d-4e90-80df-79d49c533849",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "trm-labs||senior-solutions-architect-ts-sci-pre-sales",
      "keywords": [
        "Go",
        "Python",
        "TypeScript",
        "JavaScript",
        "AI",
        "合规"
      ],
      "duties": [
        "团队管理",
        "架构设计",
        "故障/值班",
        "性能/容量",
        "自动化",
        "安全/审计"
      ]
    },
    {
      "company": "TRM Labs",
      "func": "security",
      "category": "other",
      "position": "Account Director , Canada (National Security) ",
      "level": "head",
      "location": "Canada",
      "region": [
        "remote"
      ],
      "salary": "面议",
      "salaryNum": 0,
      "requirements": "BUILD A SAFER WORLD.",
      "link": "https://jobs.ashbyhq.com/trm-labs/deae2da1-6f6a-40ed-b64e-6596775a5473",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "trm-labs||account-director-canada-national-security",
      "keywords": [
        "Go",
        "AI",
        "AML/KYC",
        "合规",
        "营销/增长"
      ],
      "duties": [
        "团队管理",
        "部署发布",
        "自动化",
        "安全/审计",
        "合规风控",
        "增长营销"
      ]
    },
    {
      "company": "TRM Labs",
      "func": "bd",
      "category": "other",
      "position": "Senior Solutions Architect (Pre-sales)",
      "level": "senior",
      "location": "North America",
      "region": [
        "remote"
      ],
      "salary": "面议",
      "salaryNum": 0,
      "requirements": "BUILD A SAFER WORLD.",
      "link": "https://jobs.ashbyhq.com/trm-labs/7073d845-8c97-4947-9e71-25b3ba067427",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "trm-labs||senior-solutions-architect-pre-sales",
      "keywords": [
        "Go",
        "Python",
        "TypeScript",
        "JavaScript",
        "AI",
        "合规"
      ],
      "duties": [
        "团队管理",
        "架构设计",
        "故障/值班",
        "性能/容量",
        "自动化",
        "安全/审计"
      ]
    },
    {
      "company": "Kraken",
      "func": "security",
      "category": "exchange",
      "position": "Senior Analyst, Security Compliance",
      "level": "senior",
      "location": "United States",
      "region": [
        "us"
      ],
      "salary": "面议",
      "salaryNum": 0,
      "requirements": "BUILDING THE FUTURE OF CRYPTO",
      "link": "https://jobs.ashbyhq.com/kraken.com/13b78c74-0e27-46c6-be6c-174c4f19bec5",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "kraken||senior-analyst-security-compliance",
      "keywords": [
        "Wallet",
        "安全审计",
        "合规",
        "营销/增长"
      ],
      "duties": [
        "团队管理",
        "架构设计",
        "监控告警",
        "性能/容量",
        "自动化",
        "安全/审计"
      ]
    },
    {
      "company": "Kraken",
      "func": "ga",
      "category": "exchange",
      "position": "Compliance Manager, Jersey and Financial Crime",
      "level": "mid",
      "location": "United Kingdom",
      "region": [
        "remote"
      ],
      "salary": "面议",
      "salaryNum": 0,
      "requirements": "BUILDING THE FUTURE OF CRYPTO",
      "link": "https://jobs.ashbyhq.com/kraken.com/2ac20e66-5d77-47d1-a217-b0c372b87f37",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "kraken||compliance-manager-jersey-and-financial-crime",
      "keywords": [
        "Wallet",
        "AML/KYC",
        "合规"
      ],
      "duties": [
        "团队管理",
        "监控告警",
        "部署发布",
        "安全/审计",
        "合规风控",
        "招聘/HR"
      ]
    },
    {
      "company": "Kraken",
      "func": "ga",
      "category": "exchange",
      "position": "Compliance Officer & MLRO, Brazil",
      "level": "mid",
      "location": "Brazil",
      "region": [
        "remote"
      ],
      "salary": "面议",
      "salaryNum": 0,
      "requirements": "BUILDING THE FUTURE OF CRYPTO",
      "link": "https://jobs.ashbyhq.com/kraken.com/239b2027-8a79-4da4-9d3d-fca419d54def",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "kraken||compliance-officer-mlro-brazil",
      "keywords": [
        "Go",
        "Wallet",
        "AML/KYC",
        "合规"
      ],
      "duties": [
        "故障/值班",
        "监控告警",
        "性能/容量",
        "安全/审计",
        "合规风控",
        "招聘/HR"
      ]
    },
    {
      "company": "Kraken",
      "func": "design",
      "category": "exchange",
      "position": "Staff Product Designer - Consumer",
      "level": "senior",
      "location": "United States",
      "region": [
        "us"
      ],
      "salary": "面议",
      "salaryNum": 0,
      "requirements": "BUILDING THE FUTURE OF CRYPTO",
      "link": "https://jobs.ashbyhq.com/kraken.com/2bb8285f-d45a-441b-8628-983a101006ce",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "kraken||staff-product-designer-consumer",
      "keywords": [
        "Wallet",
        "营销/增长"
      ],
      "duties": [
        "团队管理",
        "架构设计",
        "性能/容量",
        "安全/审计",
        "产品规划",
        "设计/品牌"
      ]
    },
    {
      "company": "Kraken",
      "func": "eng",
      "category": "exchange",
      "position": "Sr. QA Automation Engineer - Pro",
      "level": "senior",
      "location": "United Kingdom",
      "region": [
        "remote"
      ],
      "salary": "面议",
      "salaryNum": 0,
      "requirements": "BUILDING THE FUTURE OF CRYPTO",
      "link": "https://jobs.ashbyhq.com/kraken.com/355a8c6d-97da-464f-bcf4-91f01aaf7b40",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "kraken||sr-qa-automation-engineer-pro",
      "keywords": [
        "Rust",
        "Python",
        "Wallet",
        "CI/CD"
      ],
      "duties": [
        "性能/容量",
        "部署发布",
        "自动化",
        "安全/审计",
        "产品规划",
        "招聘/HR"
      ]
    },
    {
      "company": "Kraken",
      "func": "eng",
      "category": "exchange",
      "position": "Senior Software Engineer - React Native - Payments",
      "level": "senior",
      "location": "Brazil",
      "region": [
        "remote"
      ],
      "salary": "面议",
      "salaryNum": 0,
      "requirements": "BUILDING THE FUTURE OF CRYPTO",
      "link": "https://jobs.ashbyhq.com/kraken.com/548d0ca7-c563-45ca-92c9-29da56d262c3",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "kraken||senior-software-engineer-react-native-payments",
      "keywords": [
        "TypeScript",
        "JavaScript",
        "React",
        "Wallet",
        "合规"
      ],
      "duties": [
        "稳定性保障",
        "性能/容量",
        "部署发布",
        "安全/审计",
        "合规风控",
        "设计/品牌"
      ]
    },
    {
      "company": "Kraken",
      "func": "design",
      "category": "exchange",
      "position": "Staff Product Designer - Pro",
      "level": "senior",
      "location": "Europe",
      "region": [
        "eu"
      ],
      "salary": "面议",
      "salaryNum": 0,
      "requirements": "BUILDING THE FUTURE OF CRYPTO",
      "link": "https://jobs.ashbyhq.com/kraken.com/b6c30f27-d3b4-40b3-8d65-2c34a0a3caa3",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "kraken||staff-product-designer-pro",
      "keywords": [
        "DeFi",
        "Wallet"
      ],
      "duties": [
        "安全/审计",
        "设计/品牌",
        "招聘/HR",
        "客户/机构对接"
      ]
    },
    {
      "company": "Kraken",
      "func": "bd",
      "category": "exchange",
      "position": "Senior Sales Trader, EMEA",
      "level": "senior",
      "location": "Europe",
      "region": [
        "eu"
      ],
      "salary": "面议",
      "salaryNum": 0,
      "requirements": "BUILDING THE FUTURE OF CRYPTO",
      "link": "https://jobs.ashbyhq.com/kraken.com/083afacb-edf7-4920-8428-e6c6fb7aecc9",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "kraken||senior-sales-trader-emea",
      "keywords": [
        "Wallet",
        "合规",
        "营销/增长"
      ],
      "duties": [
        "团队管理",
        "监控告警",
        "安全/审计",
        "合规风控",
        "增长营销",
        "商务拓展"
      ]
    },
    {
      "company": "Kraken",
      "func": "eng",
      "category": "exchange",
      "position": "Senior Software Engineer - Frontend - Pro",
      "level": "senior",
      "location": "Brazil",
      "region": [
        "remote"
      ],
      "salary": "面议",
      "salaryNum": 0,
      "requirements": "BUILDING THE FUTURE OF CRYPTO",
      "link": "https://jobs.ashbyhq.com/kraken.com/aa04e385-a718-4630-ba2a-815ff2483ac8",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "kraken||senior-software-engineer-frontend-pro",
      "keywords": [
        "TypeScript",
        "JavaScript",
        "React",
        "Wallet",
        "营销/增长"
      ],
      "duties": [
        "团队管理",
        "架构设计",
        "性能/容量",
        "部署发布",
        "安全/审计",
        "设计/品牌"
      ]
    },
    {
      "company": "Kraken",
      "func": "security",
      "category": "exchange",
      "position": "Senior SOX Auditor – Business Process Controls",
      "level": "senior",
      "location": "Canada",
      "region": [
        "remote"
      ],
      "salary": "面议",
      "salaryNum": 0,
      "requirements": "BUILDING THE FUTURE OF CRYPTO",
      "link": "https://jobs.ashbyhq.com/kraken.com/36826495-d999-4aa8-b009-0777f6ed574d",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "kraken||senior-sox-auditor-business-process-controls",
      "keywords": [
        "Staking",
        "Wallet",
        "AI",
        "安全审计",
        "合规"
      ],
      "duties": [
        "团队管理",
        "稳定性保障",
        "性能/容量",
        "节点运维",
        "安全/审计",
        "合规风控"
      ]
    },
    {
      "company": "ZetaChain",
      "func": "ops",
      "category": "chain",
      "position": "Senior Platform Engineer",
      "level": "senior",
      "location": "San Francisco (Hybrid)",
      "region": [
        "us"
      ],
      "salary": "面议",
      "salaryNum": 0,
      "requirements": "<div class=\"content-intro\"><h2 class=\"text-text-100 mt-3 -mb-1 text-[1.125rem] font-bold\">About ZetaChain</h2>",
      "link": "https://job-boards.greenhouse.io/zetachain/jobs/5080695008",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "zetachain||senior-platform-engineer",
      "keywords": [
        "Go",
        "Python",
        "Validator/节点",
        "RPC",
        "Kubernetes",
        "Linux",
        "AI"
      ],
      "duties": [
        "架构设计",
        "稳定性保障",
        "故障/值班",
        "监控告警",
        "性能/容量",
        "部署发布"
      ]
    },
    {
      "company": "LayerZero Labs",
      "func": "eng",
      "category": "infra",
      "position": "Frontend Engineer",
      "level": "mid",
      "location": "Vancouver, BC",
      "region": [
        "remote"
      ],
      "salary": "面议",
      "salaryNum": 0,
      "requirements": "<h1><strong>LayerZero</strong></h1>",
      "link": "https://job-boards.greenhouse.io/layerzerolabs/jobs/5135897004",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "layerzero-labs||frontend-engineer",
      "keywords": [
        "社区"
      ],
      "duties": [
        "架构设计",
        "部署发布",
        "协议/合约开发",
        "多链/跨链",
        "产品规划",
        "设计/品牌"
      ]
    },
    {
      "company": "LayerZero Labs",
      "func": "data",
      "category": "infra",
      "position": "Data Analyst",
      "level": "mid",
      "location": "Vancouver, BC",
      "region": [
        "remote"
      ],
      "salary": "面议",
      "salaryNum": 0,
      "requirements": "<h1><strong>LayerZero</strong></h1>",
      "link": "https://job-boards.greenhouse.io/layerzerolabs/jobs/5787956004",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "layerzero-labs||data-analyst",
      "keywords": [
        "Go",
        "Python",
        "Smart Contract",
        "Wallet",
        "SQL",
        "社区"
      ],
      "duties": [
        "性能/容量",
        "部署发布",
        "协议/合约开发",
        "多链/跨链",
        "数据分析",
        "社区运营"
      ]
    },
    {
      "company": "LayerZero Labs",
      "func": "eng",
      "category": "infra",
      "position": "Customer Success Manager",
      "level": "mid",
      "location": "VANCOUVER, BC OR NEW YORK CITY",
      "region": [
        "us"
      ],
      "salary": "面议",
      "salaryNum": 0,
      "requirements": "<h1><strong>LayerZero</strong></h1>",
      "link": "https://job-boards.greenhouse.io/layerzerolabs/jobs/5554637004",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "layerzero-labs||customer-success-manager",
      "keywords": [
        "社区",
        "营销/增长"
      ],
      "duties": [
        "监控告警",
        "协议/合约开发",
        "多链/跨链",
        "增长营销",
        "社区运营",
        "商务拓展"
      ]
    },
    {
      "company": "LayerZero Labs",
      "func": "eng",
      "category": "infra",
      "position": "Cryptographer",
      "level": "mid",
      "location": "Vancouver, BC",
      "region": [
        "remote"
      ],
      "salary": "面议",
      "salaryNum": 0,
      "requirements": "<h1><strong>LayerZero</strong></h1>",
      "link": "https://job-boards.greenhouse.io/layerzerolabs/jobs/5837487004",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "layerzero-labs||cryptographer",
      "keywords": [
        "Rust",
        "C++",
        "ZK",
        "社区"
      ],
      "duties": [
        "性能/容量",
        "协议/合约开发",
        "多链/跨链",
        "安全/审计",
        "社区运营"
      ]
    },
    {
      "company": "LayerZero Labs",
      "func": "bd",
      "category": "infra",
      "position": "Crypto Business Development Intern",
      "level": "mid",
      "location": "New York City",
      "region": [
        "us"
      ],
      "salary": "面议",
      "salaryNum": 0,
      "requirements": "<h1><strong>LayerZero</strong></h1>",
      "link": "https://job-boards.greenhouse.io/layerzerolabs/jobs/5825404004",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "layerzero-labs||crypto-business-development-intern",
      "keywords": [
        "DeFi",
        "社区",
        "营销/增长"
      ],
      "duties": [
        "团队管理",
        "协议/合约开发",
        "多链/跨链",
        "设计/品牌",
        "增长营销",
        "社区运营"
      ]
    },
    {
      "company": "LayerZero Labs",
      "func": "eng",
      "category": "infra",
      "position": "Controller",
      "level": "mid",
      "location": "Vancouver, BC or New York City",
      "region": [
        "us"
      ],
      "salary": "面议",
      "salaryNum": 0,
      "requirements": "<h1><strong>Controller</strong></h1>",
      "link": "https://job-boards.greenhouse.io/layerzerolabs/jobs/5969934004",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "layerzero-labs||controller",
      "keywords": [
        "安全审计",
        "合规",
        "社区",
        "营销/增长"
      ],
      "duties": [
        "团队管理",
        "性能/容量",
        "自动化",
        "协议/合约开发",
        "多链/跨链",
        "安全/审计"
      ]
    },
    {
      "company": "LayerZero Labs",
      "func": "eng",
      "category": "infra",
      "position": "Business Operations Lead",
      "level": "senior",
      "location": "New York City",
      "region": [
        "us"
      ],
      "salary": "面议",
      "salaryNum": 0,
      "requirements": "<h1><strong>LayerZero</strong></h1>",
      "link": "https://job-boards.greenhouse.io/layerzerolabs/jobs/5835087004",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "layerzero-labs||business-operations-lead",
      "keywords": [
        "Go",
        "社区",
        "营销/增长"
      ],
      "duties": [
        "性能/容量",
        "部署发布",
        "自动化",
        "协议/合约开发",
        "多链/跨链",
        "增长营销"
      ]
    },
    {
      "company": "LayerZero Labs",
      "func": "bd",
      "category": "infra",
      "position": "Business Development Lead - Japan",
      "level": "senior",
      "location": "APAC",
      "region": [
        "remote"
      ],
      "salary": "面议",
      "salaryNum": 0,
      "requirements": "<h1><strong>LayerZero</strong></h1>",
      "link": "https://job-boards.greenhouse.io/layerzerolabs/jobs/5649953004",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "layerzero-labs||business-development-lead-japan",
      "keywords": [
        "社区",
        "营销/增长"
      ],
      "duties": [
        "团队管理",
        "部署发布",
        "协议/合约开发",
        "多链/跨链",
        "合规风控",
        "设计/品牌"
      ]
    },
    {
      "company": "LayerZero Labs",
      "func": "bd",
      "category": "infra",
      "position": "Business Development Lead - Hong Kong",
      "level": "senior",
      "location": "APAC",
      "region": [
        "remote"
      ],
      "salary": "面议",
      "salaryNum": 0,
      "requirements": "<h1><strong>LayerZero</strong></h1>",
      "link": "https://job-boards.greenhouse.io/layerzerolabs/jobs/5649952004",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "layerzero-labs||business-development-lead-hong-kong",
      "keywords": [
        "社区",
        "营销/增长"
      ],
      "duties": [
        "团队管理",
        "部署发布",
        "协议/合约开发",
        "多链/跨链",
        "合规风控",
        "设计/品牌"
      ]
    },
    {
      "company": "LayerZero Labs",
      "func": "eng",
      "category": "infra",
      "position": "Assistant Controller ",
      "level": "mid",
      "location": "Vancouver, BC or New York City",
      "region": [
        "us"
      ],
      "salary": "面议",
      "salaryNum": 0,
      "requirements": "<h1><strong>Assistant Controller</strong></h1>",
      "link": "https://job-boards.greenhouse.io/layerzerolabs/jobs/5970048004",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "layerzero-labs||assistant-controller",
      "keywords": [
        "安全审计",
        "合规",
        "社区"
      ],
      "duties": [
        "团队管理",
        "性能/容量",
        "协议/合约开发",
        "多链/跨链",
        "安全/审计",
        "合规风控"
      ]
    },
    {
      "company": "Jump Crypto",
      "func": "eng",
      "category": "other",
      "position": "Trader | Crypto ",
      "level": "mid",
      "location": "Singapore",
      "region": [
        "sg"
      ],
      "salary": "面议",
      "salaryNum": 0,
      "requirements": "<p>Jump Crypto is committed to building and standing up critical infrastructure needed to catalyze the growth of the cry",
      "link": "https://job-boards.greenhouse.io/jumpcrypto/jobs/4862961",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "jump-crypto||trader-crypto",
      "keywords": [
        "Python",
        "Linux",
        "社区",
        "营销/增长"
      ],
      "duties": [
        "稳定性保障",
        "故障/值班",
        "监控告警",
        "部署发布",
        "增长营销",
        "社区运营"
      ]
    },
    {
      "company": "Jump Crypto",
      "func": "eng",
      "category": "other",
      "position": "C++ Software Engineer | Crypto",
      "level": "mid",
      "location": "London",
      "region": [
        "eu"
      ],
      "salary": "面议",
      "salaryNum": 0,
      "requirements": "<p>Jump Crypto is committed to building and standing up critical infrastructure needed to catalyze the growth of the cry",
      "link": "https://job-boards.greenhouse.io/jumpcrypto/jobs/5524078",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "jump-crypto||c-software-engineer-crypto",
      "keywords": [
        "Python",
        "C++",
        "AWS",
        "Linux",
        "社区",
        "营销/增长"
      ],
      "duties": [
        "稳定性保障",
        "性能/容量",
        "协议/合约开发",
        "增长营销",
        "社区运营",
        "招聘/HR"
      ]
    },
    {
      "company": "Jump Crypto",
      "func": "eng",
      "category": "other",
      "position": "Crypto Production Engineer",
      "level": "mid",
      "location": "Sydney, Australia",
      "region": [
        "remote"
      ],
      "salary": "面议",
      "salaryNum": 0,
      "requirements": "<p data-renderer-start-pos=\"1448\">Jump Trading Group is committed to world class research. We empower exceptional talent",
      "link": "https://job-boards.greenhouse.io/jumpcrypto/jobs/6472539",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "jump-crypto||crypto-production-engineer",
      "keywords": [
        "Validator/节点",
        "RPC"
      ],
      "duties": [
        "监控告警",
        "部署发布",
        "节点运维",
        "招聘/HR"
      ]
    },
    {
      "company": "Jump Crypto",
      "func": "eng",
      "category": "other",
      "position": "Campus Intern Crypto Researcher 2026 LDN",
      "level": "mid",
      "location": "London",
      "region": [
        "eu"
      ],
      "salary": "面议",
      "salaryNum": 0,
      "requirements": "<p><strong>About Jump and Jump Crypto</strong></p>",
      "link": "https://job-boards.greenhouse.io/jumpcrypto/jobs/7374010",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "jump-crypto||campus-intern-crypto-researcher-2026-ldn",
      "keywords": [
        "MEV",
        "社区",
        "营销/增长"
      ],
      "duties": [
        "架构设计",
        "监控告警",
        "部署发布",
        "增长营销",
        "社区运营",
        "商务拓展"
      ]
    },
    {
      "company": "Jump Crypto",
      "func": "eng",
      "category": "other",
      "position": "Campus Intern Crypto Researcher 2026 CHI",
      "level": "mid",
      "location": "Chicago",
      "region": [
        "remote"
      ],
      "salary": "面议",
      "salaryNum": 0,
      "requirements": "<p><strong>About Jump and Jump Crypto</strong></p>",
      "link": "https://job-boards.greenhouse.io/jumpcrypto/jobs/7374009",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "jump-crypto||campus-intern-crypto-researcher-2026-chi",
      "keywords": [
        "MEV",
        "社区",
        "营销/增长"
      ],
      "duties": [
        "架构设计",
        "监控告警",
        "部署发布",
        "增长营销",
        "社区运营",
        "商务拓展"
      ]
    },
    {
      "company": "Jump Crypto",
      "func": "eng",
      "category": "other",
      "position": "Campus Full-Time Crypto Researcher 2026 LDN",
      "level": "mid",
      "location": "London",
      "region": [
        "eu"
      ],
      "salary": "面议",
      "salaryNum": 0,
      "requirements": "<p><strong>About Jump and Jump Crypto</strong></p>",
      "link": "https://job-boards.greenhouse.io/jumpcrypto/jobs/7374012",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "jump-crypto||campus-full-time-crypto-researcher-2026-ldn",
      "keywords": [
        "MEV",
        "社区",
        "营销/增长"
      ],
      "duties": [
        "架构设计",
        "监控告警",
        "部署发布",
        "增长营销",
        "社区运营",
        "商务拓展"
      ]
    },
    {
      "company": "Jump Crypto",
      "func": "eng",
      "category": "other",
      "position": "Campus Full-Time Crypto Researcher 2026 CHI",
      "level": "mid",
      "location": "Chicago",
      "region": [
        "remote"
      ],
      "salary": "面议",
      "salaryNum": 0,
      "requirements": "<p><strong>About Jump and Jump Crypto</strong></p>",
      "link": "https://job-boards.greenhouse.io/jumpcrypto/jobs/7374017",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "jump-crypto||campus-full-time-crypto-researcher-2026-chi",
      "keywords": [
        "MEV",
        "社区",
        "营销/增长"
      ],
      "duties": [
        "架构设计",
        "监控告警",
        "部署发布",
        "增长营销",
        "社区运营",
        "商务拓展"
      ]
    },
    {
      "company": "MyShell",
      "func": "growth",
      "category": "other",
      "position": "Social Media Specialist",
      "level": "mid",
      "location": "Remote (APAC)",
      "region": [
        "remote"
      ],
      "salary": "面议",
      "salaryNum": 0,
      "requirements": "<div class=\"content-intro\"><p><strong><u>About MyShell</u></strong></p>",
      "link": "https://job-boards.greenhouse.io/myshell/jobs/5055970008",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "myshell||social-media-specialist",
      "keywords": [
        "Validator/节点",
        "AI",
        "社区",
        "营销/增长"
      ],
      "duties": [
        "监控告警",
        "节点运维",
        "设计/品牌",
        "增长营销",
        "社区运营",
        "招聘/HR"
      ]
    },
    {
      "company": "MyShell",
      "func": "growth",
      "category": "other",
      "position": "Product Marketing",
      "level": "mid",
      "location": "Remote (APAC)",
      "region": [
        "remote"
      ],
      "salary": "面议",
      "salaryNum": 0,
      "requirements": "<div class=\"content-intro\"><p><strong><u>About MyShell</u></strong></p>",
      "link": "https://job-boards.greenhouse.io/myshell/jobs/4756298008",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "myshell||product-marketing",
      "keywords": [
        "AI",
        "社区",
        "营销/增长"
      ],
      "duties": [
        "数据分析",
        "增长营销",
        "社区运营",
        "招聘/HR"
      ]
    },
    {
      "company": "MyShell",
      "func": "eng",
      "category": "other",
      "position": "Frontend Engineer",
      "level": "mid",
      "location": "Remote（APAC）",
      "region": [
        "remote"
      ],
      "salary": "面议",
      "salaryNum": 0,
      "requirements": "<div class=\"content-intro\"><p><strong><u>About MyShell</u></strong></p>",
      "link": "https://job-boards.greenhouse.io/myshell/jobs/4500414008",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "myshell||frontend-engineer",
      "keywords": [
        "React",
        "CI/CD",
        "AI",
        "社区"
      ],
      "duties": [
        "架构设计",
        "性能/容量",
        "部署发布",
        "产品规划",
        "设计/品牌",
        "社区运营"
      ]
    },
    {
      "company": "MyShell",
      "func": "data",
      "category": "other",
      "position": "Data Scientist",
      "level": "mid",
      "location": "Remote (APAC)",
      "region": [
        "remote"
      ],
      "salary": "面议",
      "salaryNum": 0,
      "requirements": "<div class=\"content-intro\"><p><strong><u>About MyShell</u></strong></p>",
      "link": "https://job-boards.greenhouse.io/myshell/jobs/5013962008",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "myshell||data-scientist",
      "keywords": [
        "AI",
        "社区",
        "营销/增长"
      ],
      "duties": [
        "架构设计",
        "部署发布",
        "数据分析",
        "增长营销",
        "社区运营",
        "商务拓展"
      ]
    },
    {
      "company": "MyShell",
      "func": "eng",
      "category": "other",
      "position": "Algorithm Engineer-Mandarin Speaker",
      "level": "mid",
      "location": "Remote (APAC)",
      "region": [
        "remote"
      ],
      "salary": "面议",
      "salaryNum": 0,
      "requirements": "<div class=\"content-intro\"><p><strong><u>About MyShell</u></strong></p>",
      "link": "https://job-boards.greenhouse.io/myshell/jobs/4492569008",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "myshell||algorithm-engineer-mandarin-speaker",
      "keywords": [
        "Python",
        "AI",
        "社区",
        "营销/增长"
      ],
      "duties": [
        "性能/容量",
        "增长营销",
        "社区运营",
        "招聘/HR"
      ]
    },
    {
      "company": "MyShell",
      "func": "data",
      "category": "other",
      "position": "AI Backend Engineer",
      "level": "mid",
      "location": "Remote (APAC)",
      "region": [
        "remote"
      ],
      "salary": "面议",
      "salaryNum": 0,
      "requirements": "<div class=\"content-intro\"><p><strong><u>About MyShell</u></strong></p>",
      "link": "https://job-boards.greenhouse.io/myshell/jobs/4527964008",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "myshell||ai-backend-engineer",
      "keywords": [
        "Go",
        "Python",
        "AWS",
        "GCP",
        "Machine Learning",
        "AI",
        "社区",
        "营销/增长"
      ],
      "duties": [
        "稳定性保障",
        "性能/容量",
        "协议/合约开发",
        "安全/审计",
        "数据分析",
        "增长营销"
      ]
    },
    {
      "company": "Phantom",
      "func": "eng",
      "category": "defi",
      "position": "Software Engineer, Frontend / Full Stack (Trading)",
      "level": "mid",
      "location": "Remote",
      "region": [
        "remote"
      ],
      "salary": "面议",
      "salaryNum": 0,
      "requirements": "Phantom https://phantom.com is the modern money app used by tens of millions around the world. Our product combines ever",
      "link": "https://jobs.ashbyhq.com/phantom/e213be58-ba98-486d-93bc-a7716f33003e",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "phantom||software-engineer-frontend-full-stack-trading",
      "keywords": [
        "TypeScript",
        "React",
        "Wallet",
        "Ethereum",
        "Solana",
        "Bitcoin",
        "AI",
        "社区"
      ],
      "duties": [
        "性能/容量",
        "多链/跨链",
        "安全/审计",
        "增长营销",
        "社区运营"
      ]
    },
    {
      "company": "Phantom",
      "func": "eng",
      "category": "defi",
      "position": "Senior Software Engineer, Frontend (Money Movement)",
      "level": "senior",
      "location": "Remote",
      "region": [
        "remote"
      ],
      "salary": "面议",
      "salaryNum": 0,
      "requirements": "Phantom https://phantom.com is the modern money app used by tens of millions around the world. Our product combines ever",
      "link": "https://jobs.ashbyhq.com/phantom/02c68924-988c-4195-a367-3bfce929df3a",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "phantom||senior-software-engineer-frontend-money-movement",
      "keywords": [
        "TypeScript",
        "React",
        "Wallet",
        "Ethereum",
        "Solana",
        "Bitcoin",
        "AI",
        "社区"
      ],
      "duties": [
        "稳定性保障",
        "监控告警",
        "性能/容量",
        "自动化",
        "多链/跨链",
        "安全/审计"
      ]
    },
    {
      "company": "Phantom",
      "func": "eng",
      "category": "defi",
      "position": "Senior Software Engineer, Backend (Money Movement)",
      "level": "senior",
      "location": "Remote",
      "region": [
        "remote"
      ],
      "salary": "面议",
      "salaryNum": 0,
      "requirements": "Phantom https://phantom.com is the modern money app used by tens of millions around the world. Our product combines ever",
      "link": "https://jobs.ashbyhq.com/phantom/01acfd54-49c2-4913-a968-fc70fcf61e12",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "phantom||senior-software-engineer-backend-money-movement",
      "keywords": [
        "Node.js",
        "EVM",
        "Validator/节点",
        "Wallet",
        "Ethereum",
        "Solana",
        "Bitcoin",
        "Kubernetes"
      ],
      "duties": [
        "架构设计",
        "稳定性保障",
        "故障/值班",
        "性能/容量",
        "部署发布",
        "节点运维"
      ]
    },
    {
      "company": "Phantom",
      "func": "eng",
      "category": "defi",
      "position": "Software Engineer, Backend (Trading)",
      "level": "mid",
      "location": "Remote",
      "region": [
        "remote"
      ],
      "salary": "面议",
      "salaryNum": 0,
      "requirements": "Phantom https://phantom.com is the modern money app used by tens of millions around the world. Our product combines ever",
      "link": "https://jobs.ashbyhq.com/phantom/d8ee7f59-0f80-437f-908e-bfe603cb078a",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "phantom||software-engineer-backend-trading",
      "keywords": [
        "Wallet",
        "Ethereum",
        "Solana",
        "Bitcoin",
        "AI",
        "社区",
        "营销/增长"
      ],
      "duties": [
        "部署发布",
        "协议/合约开发",
        "多链/跨链",
        "安全/审计",
        "增长营销",
        "社区运营"
      ]
    },
    {
      "company": "Phantom",
      "func": "eng",
      "category": "defi",
      "position": "Software Engineer, Frontend / Full Stack (Identity Platform)",
      "level": "mid",
      "location": "Remote",
      "region": [
        "remote"
      ],
      "salary": "面议",
      "salaryNum": 0,
      "requirements": "Phantom https://phantom.com is the modern money app used by tens of millions around the world. Our product combines ever",
      "link": "https://jobs.ashbyhq.com/phantom/be5a838e-a6f4-4d99-be08-e6419a857289",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "phantom||software-engineer-frontend-full-stack-identity-platform",
      "keywords": [
        "Rust",
        "TypeScript",
        "Node.js",
        "Validator/节点",
        "Wallet",
        "Ethereum",
        "Solana",
        "Bitcoin"
      ],
      "duties": [
        "稳定性保障",
        "监控告警",
        "部署发布",
        "节点运维",
        "多链/跨链",
        "安全/审计"
      ]
    },
    {
      "company": "Phantom",
      "func": "ops",
      "category": "defi",
      "position": "Staff Software Engineer (SRE)",
      "level": "senior",
      "location": "Remote",
      "region": [
        "remote"
      ],
      "salary": "面议",
      "salaryNum": 0,
      "requirements": "Phantom https://phantom.com is the modern money app used by tens of millions around the world. Our product combines ever",
      "link": "https://jobs.ashbyhq.com/phantom/d480082b-a446-40fb-be24-f364c07ef8a9",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "phantom||staff-software-engineer-sre",
      "keywords": [
        "Wallet",
        "Ethereum",
        "Solana",
        "Bitcoin",
        "Kubernetes",
        "Docker",
        "Terraform",
        "AWS"
      ],
      "duties": [
        "稳定性保障",
        "监控告警",
        "性能/容量",
        "自动化",
        "多链/跨链",
        "安全/审计"
      ]
    },
    {
      "company": "Phantom",
      "func": "eng",
      "category": "defi",
      "position": "Staff Engineer, Full Stack (Agentic Trading)",
      "level": "senior",
      "location": "Remote-US",
      "region": [
        "remote",
        "us"
      ],
      "salary": "面议",
      "salaryNum": 0,
      "requirements": "Phantom https://phantom.com is the modern money app used by tens of millions around the world. Our product combines ever",
      "link": "https://jobs.ashbyhq.com/phantom/0af91b03-eb71-400c-b496-356f1fb147d3",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "phantom||staff-engineer-full-stack-agentic-trading",
      "keywords": [
        "Wallet",
        "Ethereum",
        "Solana",
        "Bitcoin",
        "AI",
        "社区",
        "营销/增长"
      ],
      "duties": [
        "部署发布",
        "多链/跨链",
        "安全/审计",
        "增长营销",
        "社区运营",
        "客户/机构对接"
      ]
    },
    {
      "company": "Phantom",
      "func": "design",
      "category": "defi",
      "position": "Staff Product Designer",
      "level": "senior",
      "location": "Remote-US",
      "region": [
        "remote",
        "us"
      ],
      "salary": "面议",
      "salaryNum": 0,
      "requirements": "Phantom https://phantom.com is the modern money app used by tens of millions around the world. Our product combines ever",
      "link": "https://jobs.ashbyhq.com/phantom/0844373f-aecc-4290-bd1e-159d15b29ae2",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "phantom||staff-product-designer",
      "keywords": [
        "Wallet",
        "Ethereum",
        "Solana",
        "Bitcoin",
        "AI",
        "社区",
        "营销/增长"
      ],
      "duties": [
        "团队管理",
        "架构设计",
        "性能/容量",
        "多链/跨链",
        "安全/审计",
        "产品规划"
      ]
    },
    {
      "company": "Phantom",
      "func": "data",
      "category": "defi",
      "position": "Senior Data Scientist",
      "level": "senior",
      "location": "Remote",
      "region": [
        "remote"
      ],
      "salary": "面议",
      "salaryNum": 0,
      "requirements": "Phantom https://phantom.com is the modern money app used by tens of millions around the world. Our product combines ever",
      "link": "https://jobs.ashbyhq.com/phantom/560634d5-2234-4dbc-9143-d8416c4efbdc",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "phantom||senior-data-scientist",
      "keywords": [
        "Python",
        "DeFi",
        "Wallet",
        "Ethereum",
        "Solana",
        "Bitcoin",
        "SQL",
        "AI"
      ],
      "duties": [
        "多链/跨链",
        "安全/审计",
        "数据分析",
        "产品规划",
        "增长营销",
        "社区运营"
      ]
    },
    {
      "company": "Phantom",
      "func": "eng",
      "category": "defi",
      "position": "Senior Software Engineer, Frontend",
      "level": "senior",
      "location": "Remote",
      "region": [
        "remote"
      ],
      "salary": "面议",
      "salaryNum": 0,
      "requirements": "Phantom https://phantom.com is the modern money app used by tens of millions around the world. Our product combines ever",
      "link": "https://jobs.ashbyhq.com/phantom/e7b83c02-55c2-4037-9209-93deb3b7492c",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "phantom||senior-software-engineer-frontend",
      "keywords": [
        "TypeScript",
        "React",
        "Solana",
        "AI",
        "社区",
        "营销/增长"
      ],
      "duties": [
        "安全/审计",
        "增长营销",
        "社区运营"
      ]
    },
    {
      "company": "Immunefi",
      "func": "growth",
      "category": "other",
      "position": "Marketing Lead",
      "level": "senior",
      "location": "Remote",
      "region": [
        "remote"
      ],
      "salary": "面议",
      "salaryNum": 0,
      "requirements": "<div class=\"content-intro\"><p style=\"line-height: 1.5;\"><span style=\"font-family: verdana, geneva, sans-serif; font-size",
      "link": "https://job-boards.greenhouse.io/immunefi/jobs/5833616004",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "immunefi||marketing-lead",
      "keywords": [
        "Go",
        "AI",
        "社区",
        "营销/增长"
      ],
      "duties": [
        "团队管理",
        "架构设计",
        "性能/容量",
        "部署发布",
        "自动化",
        "协议/合约开发"
      ]
    },
    {
      "company": "Immunefi",
      "func": "bd",
      "category": "other",
      "position": "Head of Sales",
      "level": "head",
      "location": "Remote",
      "region": [
        "remote"
      ],
      "salary": "面议",
      "salaryNum": 0,
      "requirements": "<div class=\"content-intro\"><p style=\"line-height: 1.5;\"><span style=\"font-family: verdana, geneva, sans-serif; font-size",
      "link": "https://job-boards.greenhouse.io/immunefi/jobs/5822428004",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "immunefi||head-of-sales",
      "keywords": [
        "AI"
      ],
      "duties": [
        "团队管理",
        "架构设计",
        "性能/容量",
        "部署发布",
        "自动化",
        "协议/合约开发"
      ]
    },
    {
      "company": "Immunefi",
      "func": "growth",
      "category": "other",
      "position": "Community Manager",
      "level": "mid",
      "location": "Remote",
      "region": [
        "remote"
      ],
      "salary": "面议",
      "salaryNum": 0,
      "requirements": "<div class=\"content-intro\"><p style=\"line-height: 1.5;\"><span style=\"font-family: verdana, geneva, sans-serif; font-size",
      "link": "https://job-boards.greenhouse.io/immunefi/jobs/5985495004",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "immunefi||community-manager",
      "keywords": [
        "AI",
        "社区"
      ],
      "duties": [
        "性能/容量",
        "自动化",
        "协议/合约开发",
        "安全/审计",
        "社区运营"
      ]
    },
    {
      "company": "Shardeum Foundation",
      "func": "eng",
      "category": "chain",
      "position": "Senior Software Engineer - Testing Tools & Strategy",
      "level": "senior",
      "location": "100% Remote",
      "region": [
        "remote"
      ],
      "salary": "面议",
      "salaryNum": 0,
      "requirements": "<div class=\"content-intro\"><p><strong>About the Company</strong>: </p>",
      "link": "https://job-boards.greenhouse.io/shardeumfoundation/jobs/4559143005",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "shardeum-foundation||senior-software-engineer-testing-tools-strategy",
      "keywords": [
        "Smart Contract",
        "EVM",
        "Validator/节点",
        "CI/CD",
        "AI"
      ],
      "duties": [
        "稳定性保障",
        "故障/值班",
        "性能/容量",
        "部署发布",
        "自动化",
        "节点运维"
      ]
    },
    {
      "company": "Shardeum Foundation",
      "func": "eng",
      "category": "chain",
      "position": "General Application",
      "level": "mid",
      "location": "Remote",
      "region": [
        "remote"
      ],
      "salary": "面议",
      "salaryNum": 0,
      "requirements": "<div class=\"content-intro\"><p><strong>About the Company</strong>: </p>",
      "link": "https://job-boards.greenhouse.io/shardeumfoundation/jobs/4129394005",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "shardeum-foundation||general-application",
      "keywords": [
        "Smart Contract",
        "EVM",
        "Validator/节点"
      ],
      "duties": [
        "节点运维",
        "协议/合约开发",
        "安全/审计",
        "招聘/HR"
      ]
    },
    {
      "company": "Linera",
      "func": "eng",
      "category": "chain",
      "position": "Software Engineer (Rust)",
      "level": "mid",
      "location": "Remote",
      "region": [
        "remote"
      ],
      "salary": "面议",
      "salaryNum": 0,
      "requirements": "ABOUT LINERA",
      "link": "https://jobs.ashbyhq.com/linera.io/c35236e3-bc43-4100-9bbb-584b59f6cd66",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "linera||software-engineer-rust",
      "keywords": [
        "Rust"
      ],
      "duties": [
        "架构设计",
        "性能/容量",
        "自动化",
        "协议/合约开发",
        "多链/跨链"
      ]
    },
    {
      "company": "Monad Foundation",
      "func": "eng",
      "category": "chain",
      "position": "Quantitative Researcher",
      "level": "mid",
      "location": "Remote",
      "region": [
        "remote"
      ],
      "salary": "面议",
      "salaryNum": 0,
      "requirements": "The Monad Foundation is a team of dedicated ecosystem and community builders who are on a mission to massively grow the ",
      "link": "https://jobs.ashbyhq.com/monad.foundation/9b6bdf21-f522-4ac6-a1e9-6b1c34a2ef0d",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "monad-foundation||quantitative-researcher",
      "keywords": [
        "EVM",
        "Ethereum",
        "社区"
      ],
      "duties": [
        "性能/容量",
        "协议/合约开发",
        "社区运营"
      ]
    },
    {
      "company": "Monad Foundation",
      "func": "ops",
      "category": "chain",
      "position": "Senior DevOps Engineer",
      "level": "senior",
      "location": "Remote",
      "region": [
        "remote"
      ],
      "salary": "面议",
      "salaryNum": 0,
      "requirements": "The Monad Foundation is a team of dedicated ecosystem and community builders who are on a mission to massively grow the ",
      "link": "https://jobs.ashbyhq.com/monad.foundation/21992f55-28a5-406c-a3dc-0769c14aa2de",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "monad-foundation||senior-devops-engineer",
      "keywords": [
        "Go",
        "Python",
        "EVM",
        "Validator/节点",
        "RPC",
        "Ethereum",
        "Kubernetes",
        "Docker"
      ],
      "duties": [
        "故障/值班",
        "监控告警",
        "性能/容量",
        "部署发布",
        "自动化",
        "节点运维"
      ]
    },
    {
      "company": "Monad Foundation",
      "func": "eng",
      "category": "chain",
      "position": "Head of DeFi",
      "level": "head",
      "location": "Remote",
      "region": [
        "remote"
      ],
      "salary": "面议",
      "salaryNum": 0,
      "requirements": "The Monad Foundation is a team of dedicated ecosystem and community builders who are on a mission to massively grow the ",
      "link": "https://jobs.ashbyhq.com/monad.foundation/1dd61a59-3592-47f7-af0a-2d3197e659ef",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "monad-foundation||head-of-defi",
      "keywords": [
        "Solidity",
        "Smart Contract",
        "EVM",
        "DeFi",
        "Ethereum",
        "社区",
        "营销/增长"
      ],
      "duties": [
        "团队管理",
        "性能/容量",
        "部署发布",
        "协议/合约开发",
        "产品规划",
        "增长营销"
      ]
    },
    {
      "company": "Monad Foundation",
      "func": "eng",
      "category": "chain",
      "position": "DeFi Success Lead",
      "level": "senior",
      "location": "Remote",
      "region": [
        "remote"
      ],
      "salary": "面议",
      "salaryNum": 0,
      "requirements": "The Monad Foundation is a team of dedicated ecosystem and community builders who are on a mission to massively grow the ",
      "link": "https://jobs.ashbyhq.com/monad.foundation/c62f41a9-6164-4bf1-be68-646172c1733f",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "monad-foundation||defi-success-lead",
      "keywords": [
        "EVM",
        "DeFi",
        "L2/Rollup",
        "Ethereum",
        "社区",
        "营销/增长"
      ],
      "duties": [
        "团队管理",
        "性能/容量",
        "部署发布",
        "协议/合约开发",
        "增长营销",
        "社区运营"
      ]
    },
    {
      "company": "Monad Foundation",
      "func": "eng",
      "category": "chain",
      "position": "Workplace Operations Associate",
      "level": "mid",
      "location": "New York City",
      "region": [
        "us"
      ],
      "salary": "面议",
      "salaryNum": 0,
      "requirements": "The Monad Foundation is a team of dedicated ecosystem and community builders who are on a mission to massively grow the ",
      "link": "https://jobs.ashbyhq.com/monad.foundation/f047dfbe-9ef4-4132-9939-e0f3e9faa154",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "monad-foundation||workplace-operations-associate",
      "keywords": [
        "EVM",
        "Ethereum",
        "社区"
      ],
      "duties": [
        "团队管理",
        "性能/容量",
        "社区运营",
        "招聘/HR"
      ]
    },
    {
      "company": "Monad Foundation",
      "func": "growth",
      "category": "chain",
      "position": "Institutional Marketing Lead",
      "level": "senior",
      "location": "Remote",
      "region": [
        "remote"
      ],
      "salary": "面议",
      "salaryNum": 0,
      "requirements": "The Monad Foundation is a team of dedicated ecosystem and community builders who are on a mission to massively grow the ",
      "link": "https://jobs.ashbyhq.com/monad.foundation/ab1c0cc2-399d-44a1-a5c7-c60e50e4efd9",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "monad-foundation||institutional-marketing-lead",
      "keywords": [
        "Go",
        "EVM",
        "Ethereum",
        "AI",
        "社区",
        "营销/增长"
      ],
      "duties": [
        "架构设计",
        "性能/容量",
        "部署发布",
        "自动化",
        "增长营销",
        "社区运营"
      ]
    },
    {
      "company": "Monad Foundation",
      "func": "eng",
      "category": "chain",
      "position": "Head of Korea",
      "level": "head",
      "location": "South Korea",
      "region": [
        "remote"
      ],
      "salary": "面议",
      "salaryNum": 0,
      "requirements": "The Monad Foundation is a team of dedicated ecosystem and community builders who are on a mission to massively grow the ",
      "link": "https://jobs.ashbyhq.com/monad.foundation/d5c22aae-9697-4077-bc4c-fa082863104f",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "monad-foundation||head-of-korea",
      "keywords": [
        "Go",
        "EVM",
        "Ethereum",
        "社区",
        "营销/增长"
      ],
      "duties": [
        "团队管理",
        "性能/容量",
        "合规风控",
        "增长营销",
        "社区运营",
        "商务拓展"
      ]
    },
    {
      "company": "Monad Foundation",
      "func": "design",
      "category": "chain",
      "position": "Motion Designer [Contract-to-Perm]",
      "level": "mid",
      "location": "Remote",
      "region": [
        "remote"
      ],
      "salary": "面议",
      "salaryNum": 0,
      "requirements": "The Monad Foundation is a team of dedicated ecosystem and community builders who are on a mission to massively grow the ",
      "link": "https://jobs.ashbyhq.com/monad.foundation/73534b84-588b-4239-9d0d-ba218aaac365",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "monad-foundation||motion-designer-contract-to-perm",
      "keywords": [
        "Python",
        "JavaScript",
        "EVM",
        "Ethereum",
        "AI",
        "社区",
        "营销/增长"
      ],
      "duties": [
        "架构设计",
        "性能/容量",
        "部署发布",
        "设计/品牌",
        "增长营销",
        "社区运营"
      ]
    },
    {
      "company": "Monad Foundation",
      "func": "eng",
      "category": "chain",
      "position": "Tokenization Lead",
      "level": "senior",
      "location": "Remote",
      "region": [
        "remote"
      ],
      "salary": "面议",
      "salaryNum": 0,
      "requirements": "The Monad Foundation is a team of dedicated ecosystem and community builders who are on a mission to massively grow the ",
      "link": "https://jobs.ashbyhq.com/monad.foundation/1c0abfd1-bea2-47a5-b459-dfa7c3261687",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "monad-foundation||tokenization-lead",
      "keywords": [
        "EVM",
        "DeFi",
        "Wallet",
        "Ethereum",
        "社区"
      ],
      "duties": [
        "团队管理",
        "性能/容量",
        "部署发布",
        "协议/合约开发",
        "合规风控",
        "社区运营"
      ]
    },
    {
      "company": "Monad Foundation",
      "func": "bd",
      "category": "chain",
      "position": "Business Development Lead, Financial Institutions",
      "level": "senior",
      "location": "New York City",
      "region": [
        "us"
      ],
      "salary": "面议",
      "salaryNum": 0,
      "requirements": "The Monad Foundation is a team of dedicated ecosystem and community builders who are on a mission to massively grow the ",
      "link": "https://jobs.ashbyhq.com/monad.foundation/796fb90b-83c2-480f-820f-8ac9532ef80e",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "monad-foundation||business-development-lead-financial-institutions",
      "keywords": [
        "EVM",
        "Ethereum",
        "社区"
      ],
      "duties": [
        "监控告警",
        "性能/容量",
        "部署发布",
        "多链/跨链",
        "社区运营",
        "商务拓展"
      ]
    },
    {
      "company": "Trust Wallet",
      "func": "eng",
      "category": "defi",
      "position": "Creative Director",
      "level": "head",
      "location": "Remote - Global",
      "region": [
        "remote"
      ],
      "salary": "面议",
      "salaryNum": 0,
      "requirements": "About the company",
      "link": "https://jobs.ashbyhq.com/trust-wallet/fb56b546-acb4-40c4-8cfe-78ab85e176b4",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "trust-wallet||creative-director",
      "keywords": [
        "Go",
        "Wallet",
        "AI",
        "社区",
        "营销/增长"
      ],
      "duties": [
        "团队管理",
        "多链/跨链",
        "设计/品牌",
        "增长营销",
        "社区运营",
        "招聘/HR"
      ]
    },
    {
      "company": "Trust Wallet",
      "func": "eng",
      "category": "defi",
      "position": "Product Director (Payments & Regulatory) ",
      "level": "head",
      "location": "Remote - Global",
      "region": [
        "remote"
      ],
      "salary": "面议",
      "salaryNum": 0,
      "requirements": "About the company",
      "link": "https://jobs.ashbyhq.com/trust-wallet/6c95424c-f0da-41f5-9ec5-bbb2c9289efe",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "trust-wallet||product-director-payments-regulatory",
      "keywords": [
        "Go",
        "Wallet",
        "AI",
        "合规",
        "社区",
        "营销/增长",
        "出入金"
      ],
      "duties": [
        "团队管理",
        "性能/容量",
        "多链/跨链",
        "合规风控",
        "产品规划",
        "设计/品牌"
      ]
    },
    {
      "company": "Trust Wallet",
      "func": "eng",
      "category": "defi",
      "position": "Senior Frontend Engineer (Web3 - Trading) ",
      "level": "senior",
      "location": "Remote - Global",
      "region": [
        "remote"
      ],
      "salary": "面议",
      "salaryNum": 0,
      "requirements": "About the company",
      "link": "https://jobs.ashbyhq.com/trust-wallet/c40c4c46-4855-476e-b479-b0b18599049f",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "trust-wallet||senior-frontend-engineer-web3-trading",
      "keywords": [
        "TypeScript",
        "React",
        "Smart Contract",
        "Wallet",
        "AI",
        "社区",
        "营销/增长"
      ],
      "duties": [
        "架构设计",
        "性能/容量",
        "协议/合约开发",
        "多链/跨链",
        "增长营销",
        "社区运营"
      ]
    },
    {
      "company": "Trust Wallet",
      "func": "eng",
      "category": "defi",
      "position": "Senior Android / Kotlin Engineer (Web3 - Trading) ",
      "level": "senior",
      "location": "Remote - Global",
      "region": [
        "remote"
      ],
      "salary": "面议",
      "salaryNum": 0,
      "requirements": "About the company",
      "link": "https://jobs.ashbyhq.com/trust-wallet/c2342971-a7bb-414a-88dc-1c850b2aa455",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "trust-wallet||senior-android-kotlin-engineer-web3-trading",
      "keywords": [
        "Wallet",
        "CI/CD",
        "AI",
        "社区",
        "营销/增长"
      ],
      "duties": [
        "架构设计",
        "稳定性保障",
        "性能/容量",
        "部署发布",
        "自动化",
        "多链/跨链"
      ]
    },
    {
      "company": "Trust Wallet",
      "func": "bd",
      "category": "defi",
      "position": "Business Development Director ",
      "level": "head",
      "location": "Remote - Global",
      "region": [
        "remote"
      ],
      "salary": "面议",
      "salaryNum": 0,
      "requirements": "About the company",
      "link": "https://jobs.ashbyhq.com/trust-wallet/74105af8-da2c-4a4c-a8a6-8ea8a04381fc",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "trust-wallet||business-development-director",
      "keywords": [
        "Wallet",
        "AI",
        "社区",
        "营销/增长"
      ],
      "duties": [
        "团队管理",
        "性能/容量",
        "协议/合约开发",
        "多链/跨链",
        "合规风控",
        "增长营销"
      ]
    },
    {
      "company": "Trust Wallet",
      "func": "eng",
      "category": "defi",
      "position": "Product Director (DeFi)",
      "level": "head",
      "location": "Remote - Global",
      "region": [
        "remote"
      ],
      "salary": "面议",
      "salaryNum": 0,
      "requirements": "About the company",
      "link": "https://jobs.ashbyhq.com/trust-wallet/e7a289e0-73a4-4f4c-bb50-dc0bd8eb5c0d",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "trust-wallet||product-director-defi",
      "keywords": [
        "DeFi",
        "Wallet",
        "AI",
        "合规",
        "社区",
        "营销/增长"
      ],
      "duties": [
        "团队管理",
        "性能/容量",
        "多链/跨链",
        "安全/审计",
        "合规风控",
        "产品规划"
      ]
    },
    {
      "company": "Trust Wallet",
      "func": "ga",
      "category": "defi",
      "position": "Talent Acquisition Specialist - Contractor",
      "level": "mid",
      "location": "China",
      "region": [
        "cn"
      ],
      "salary": "面议",
      "salaryNum": 0,
      "requirements": "About the company",
      "link": "https://jobs.ashbyhq.com/trust-wallet/c9a4bd13-a291-41b6-976b-53f0c92cc224",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "trust-wallet||talent-acquisition-specialist-contractor",
      "keywords": [
        "Wallet",
        "AI",
        "社区",
        "营销/增长"
      ],
      "duties": [
        "多链/跨链",
        "增长营销",
        "社区运营",
        "招聘/HR"
      ]
    },
    {
      "company": "Trust Wallet",
      "func": "eng",
      "category": "defi",
      "position": "Senior QA Engineer (Contractor)",
      "level": "senior",
      "location": "Remote - Global",
      "region": [
        "remote"
      ],
      "salary": "面议",
      "salaryNum": 0,
      "requirements": "About the company",
      "link": "https://jobs.ashbyhq.com/trust-wallet/7891e33d-fd9b-4caf-8bb2-442dd4fc4466",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "trust-wallet||senior-qa-engineer-contractor",
      "keywords": [
        "Go",
        "TypeScript",
        "Wallet",
        "CI/CD",
        "可观测性",
        "AI",
        "社区",
        "营销/增长"
      ],
      "duties": [
        "架构设计",
        "稳定性保障",
        "性能/容量",
        "部署发布",
        "自动化",
        "多链/跨链"
      ]
    },
    {
      "company": "Trust Wallet",
      "func": "eng",
      "category": "defi",
      "position": "Senior Backend Engineer (Go)",
      "level": "senior",
      "location": "Remote - Global",
      "region": [
        "remote"
      ],
      "salary": "面议",
      "salaryNum": 0,
      "requirements": "About the company",
      "link": "https://jobs.ashbyhq.com/trust-wallet/f368ed72-a108-47dd-9599-916e20f603d4",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "trust-wallet||senior-backend-engineer-go",
      "keywords": [
        "Go",
        "Wallet",
        "Kubernetes",
        "Docker",
        "AWS",
        "GCP",
        "SQL",
        "AI"
      ],
      "duties": [
        "架构设计",
        "监控告警",
        "性能/容量",
        "部署发布",
        "多链/跨链",
        "增长营销"
      ]
    },
    {
      "company": "Trust Wallet",
      "func": "eng",
      "category": "defi",
      "position": "Senior Engineering Manager",
      "level": "senior",
      "location": "Remote - Global",
      "region": [
        "remote"
      ],
      "salary": "面议",
      "salaryNum": 0,
      "requirements": "About the company",
      "link": "https://jobs.ashbyhq.com/trust-wallet/ddbeb186-0d04-4a01-8472-7d0c892399d6",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "trust-wallet||senior-engineering-manager",
      "keywords": [
        "Wallet",
        "AI",
        "社区",
        "营销/增长"
      ],
      "duties": [
        "团队管理",
        "架构设计",
        "性能/容量",
        "多链/跨链",
        "产品规划",
        "增长营销"
      ]
    },
    {
      "company": "CoW DAO",
      "func": "eng",
      "category": "defi",
      "position": "Integration Engineer ",
      "level": "mid",
      "location": "Remote",
      "region": [
        "remote"
      ],
      "salary": "面议",
      "salaryNum": 0,
      "requirements": "ABOUT COW DAO",
      "link": "https://jobs.ashbyhq.com/cow-dao/ed7940c2-cd61-4d70-9d30-a02c8615444b",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "cow-dao||integration-engineer",
      "keywords": [
        "Solidity",
        "Rust",
        "Python",
        "TypeScript",
        "JavaScript",
        "EVM",
        "DeFi",
        "MEV"
      ],
      "duties": [
        "架构设计",
        "故障/值班",
        "监控告警",
        "性能/容量",
        "协议/合约开发",
        "安全/审计"
      ]
    },
    {
      "company": "CoW DAO",
      "func": "design",
      "category": "defi",
      "position": "Lead Visual&Brand Designer",
      "level": "senior",
      "location": "Remote",
      "region": [
        "remote"
      ],
      "salary": "面议",
      "salaryNum": 0,
      "requirements": "ABOUT COW DAO",
      "link": "https://jobs.ashbyhq.com/cow-dao/3d755b1d-19ba-4ba6-86a8-8f126f0767ef",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "cow-dao||lead-visual-brand-designer",
      "keywords": [
        "DeFi",
        "MEV",
        "Ethereum",
        "社区",
        "营销/增长"
      ],
      "duties": [
        "性能/容量",
        "协议/合约开发",
        "安全/审计",
        "数据分析",
        "产品规划",
        "设计/品牌"
      ]
    },
    {
      "company": "CoW DAO",
      "func": "eng",
      "category": "defi",
      "position": "Senior Backend Engineer (Rust)",
      "level": "senior",
      "location": "Remote",
      "region": [
        "remote"
      ],
      "salary": "面议",
      "salaryNum": 0,
      "requirements": "ABOUT COW DAO",
      "link": "https://jobs.ashbyhq.com/cow-dao/1f12edab-81c8-4cbc-b377-8dfbe71998a5",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "cow-dao||senior-backend-engineer-rust",
      "keywords": [
        "Solidity",
        "Rust",
        "Python",
        "TypeScript",
        "Smart Contract",
        "DeFi",
        "MEV",
        "Ethereum"
      ],
      "duties": [
        "架构设计",
        "稳定性保障",
        "故障/值班",
        "监控告警",
        "性能/容量",
        "协议/合约开发"
      ]
    },
    {
      "company": "Uniswap Labs",
      "func": "design",
      "category": "defi",
      "position": "Senior Brand Designer",
      "level": "senior",
      "location": "New York",
      "region": [
        "us"
      ],
      "salary": "面议",
      "salaryNum": 0,
      "requirements": "Uniswap Labs is a core contributor to the Uniswap Protocol, the world’s largest DEX, with over $4 trillion in volume acr",
      "link": "https://jobs.ashbyhq.com/uniswap/a676396a-9cfe-4c88-8bf3-7a9a09e9e4a5",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "uniswap-labs||senior-brand-designer",
      "keywords": [
        "DeFi",
        "L2/Rollup",
        "Wallet",
        "Ethereum",
        "AI",
        "营销/增长"
      ],
      "duties": [
        "协议/合约开发",
        "多链/跨链",
        "设计/品牌",
        "增长营销",
        "商务拓展",
        "招聘/HR"
      ]
    },
    {
      "company": "Uniswap Labs",
      "func": "growth",
      "category": "defi",
      "position": "Growth Manager- Enterprise Partnerships",
      "level": "mid",
      "location": "New York",
      "region": [
        "us"
      ],
      "salary": "面议",
      "salaryNum": 0,
      "requirements": "Senior Growth Lead, API & Institutional Partnerships",
      "link": "https://jobs.ashbyhq.com/uniswap/3d25a6ac-30b7-424c-a93c-54ccf2e538b6",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "uniswap-labs||growth-manager-enterprise-partnerships",
      "keywords": [
        "Go",
        "DeFi",
        "L2/Rollup",
        "Wallet",
        "Ethereum",
        "营销/增长"
      ],
      "duties": [
        "团队管理",
        "协议/合约开发",
        "多链/跨链",
        "设计/品牌",
        "增长营销",
        "商务拓展"
      ]
    },
    {
      "company": "Uniswap Labs",
      "func": "design",
      "category": "defi",
      "position": "Senior Product Designer",
      "level": "senior",
      "location": "New York",
      "region": [
        "us"
      ],
      "salary": "面议",
      "salaryNum": 0,
      "requirements": "Uniswap Labs is a core contributor to the Uniswap Protocol, the world’s largest DEX, with over $4 trillion in volume acr",
      "link": "https://jobs.ashbyhq.com/uniswap/23d99cc0-8451-4466-bd25-3779570d396b",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "uniswap-labs||senior-product-designer",
      "keywords": [
        "DeFi",
        "L2/Rollup",
        "Wallet",
        "Ethereum",
        "AI",
        "社区"
      ],
      "duties": [
        "架构设计",
        "协议/合约开发",
        "多链/跨链",
        "产品规划",
        "设计/品牌",
        "社区运营"
      ]
    },
    {
      "company": "Uniswap Labs",
      "func": "ops",
      "category": "defi",
      "position": "Senior Frontend Infrastructure Engineer",
      "level": "senior",
      "location": "New York",
      "region": [
        "us"
      ],
      "salary": "面议",
      "salaryNum": 0,
      "requirements": "Uniswap Labs builds products that help millions of people access DeFi simply and securely — from the Uniswap Web App and",
      "link": "https://jobs.ashbyhq.com/uniswap/c9fe612e-7c29-47a4-b2a3-2a9d1185f5ef",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "uniswap-labs||senior-frontend-infrastructure-engineer",
      "keywords": [
        "React",
        "DeFi",
        "Wallet",
        "Ethereum",
        "CI/CD",
        "AI"
      ],
      "duties": [
        "架构设计",
        "稳定性保障",
        "性能/容量",
        "部署发布",
        "自动化",
        "协议/合约开发"
      ]
    },
    {
      "company": "Uniswap Labs",
      "func": "eng",
      "category": "defi",
      "position": "PhD Research Fellow",
      "level": "mid",
      "location": "New York",
      "region": [
        "us"
      ],
      "salary": "面议",
      "salaryNum": 0,
      "requirements": "Uniswap Labs is a core contributor to the Uniswap Protocol, the world’s largest DEX, with over $4 trillion in volume acr",
      "link": "https://jobs.ashbyhq.com/uniswap/3ff9b84d-4d26-4a24-b2e1-d1244e0f9d02",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "uniswap-labs||phd-research-fellow",
      "keywords": [
        "DeFi",
        "L2/Rollup",
        "Wallet",
        "Ethereum"
      ],
      "duties": [
        "协议/合约开发",
        "多链/跨链"
      ]
    },
    {
      "company": "Uniswap Labs",
      "func": "eng",
      "category": "defi",
      "position": "Senior Smart Contract Engineer",
      "level": "senior",
      "location": "New York",
      "region": [
        "us"
      ],
      "salary": "面议",
      "salaryNum": 0,
      "requirements": "Uniswap Labs is a core contributor to the Uniswap Protocol, the world’s largest DEX, with over $4 trillion in volume acr",
      "link": "https://jobs.ashbyhq.com/uniswap/9a047e27-54dd-44df-9c0c-4ca6bc2d57bf",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "uniswap-labs||senior-smart-contract-engineer",
      "keywords": [
        "Solidity",
        "Smart Contract",
        "DeFi",
        "L2/Rollup",
        "Wallet",
        "Ethereum"
      ],
      "duties": [
        "部署发布",
        "协议/合约开发",
        "多链/跨链",
        "商务拓展"
      ]
    },
    {
      "company": "Uniswap Labs",
      "func": "eng",
      "category": "defi",
      "position": "Senior Frontend Engineer",
      "level": "senior",
      "location": "New York",
      "region": [
        "us"
      ],
      "salary": "面议",
      "salaryNum": 0,
      "requirements": "Uniswap Labs is a core contributor to the Uniswap Protocol, the world’s largest DEX, with over $4 trillion in volume acr",
      "link": "https://jobs.ashbyhq.com/uniswap/5a3eea2d-92c6-453d-9ff4-3e1393978232",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "uniswap-labs||senior-frontend-engineer",
      "keywords": [
        "React",
        "DeFi",
        "L2/Rollup",
        "Wallet",
        "Ethereum"
      ],
      "duties": [
        "架构设计",
        "性能/容量",
        "协议/合约开发",
        "多链/跨链",
        "数据分析",
        "设计/品牌"
      ]
    },
    {
      "company": "Uniswap Labs",
      "func": "eng",
      "category": "defi",
      "position": "Senior Backend Engineer, Platform ",
      "level": "senior",
      "location": "New York",
      "region": [
        "us"
      ],
      "salary": "面议",
      "salaryNum": 0,
      "requirements": "Uniswap Labs is a core contributor to the Uniswap Protocol, the world’s largest DEX, with over $4 trillion in volume acr",
      "link": "https://jobs.ashbyhq.com/uniswap/f475ea4a-b8be-442a-b8e2-9a6003d1a51a",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "uniswap-labs||senior-backend-engineer-platform",
      "keywords": [
        "Rust",
        "Go",
        "TypeScript",
        "DeFi",
        "L2/Rollup",
        "Wallet",
        "Ethereum",
        "AWS"
      ],
      "duties": [
        "团队管理",
        "架构设计",
        "稳定性保障",
        "性能/容量",
        "自动化",
        "协议/合约开发"
      ]
    },
    {
      "company": "Uniswap Labs",
      "func": "eng",
      "category": "defi",
      "position": "Senior Backend Engineer",
      "level": "senior",
      "location": "New York",
      "region": [
        "us"
      ],
      "salary": "面议",
      "salaryNum": 0,
      "requirements": "Uniswap Labs is a core contributor to the Uniswap Protocol, the world’s largest DEX, with over $4 trillion in volume acr",
      "link": "https://jobs.ashbyhq.com/uniswap/cfd492ff-dd07-432a-84b8-8aef0e8984ec",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "uniswap-labs||senior-backend-engineer",
      "keywords": [
        "TypeScript",
        "DeFi",
        "L2/Rollup",
        "Wallet",
        "Ethereum",
        "AWS",
        "可观测性"
      ],
      "duties": [
        "团队管理",
        "架构设计",
        "稳定性保障",
        "监控告警",
        "性能/容量",
        "部署发布"
      ]
    },
    {
      "company": "Uniswap Labs",
      "func": "eng",
      "category": "defi",
      "position": "Staff Backend Engineer",
      "level": "senior",
      "location": "New York",
      "region": [
        "us"
      ],
      "salary": "面议",
      "salaryNum": 0,
      "requirements": "Uniswap Labs is a core contributor to the Uniswap Protocol, the world’s largest DEX, with over $4 trillion in volume acr",
      "link": "https://jobs.ashbyhq.com/uniswap/f1dab839-ecb6-4061-b475-b5d8cf264adb",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "uniswap-labs||staff-backend-engineer",
      "keywords": [
        "Go",
        "TypeScript",
        "DeFi",
        "L2/Rollup",
        "Wallet",
        "Ethereum",
        "AWS",
        "可观测性"
      ],
      "duties": [
        "团队管理",
        "架构设计",
        "稳定性保障",
        "监控告警",
        "性能/容量",
        "部署发布"
      ]
    },
    {
      "company": "0G Labs",
      "func": "data",
      "category": "chain",
      "position": "Product Designer - AI Application",
      "level": "mid",
      "location": "Remote",
      "region": [
        "remote"
      ],
      "salary": "面议",
      "salaryNum": 0,
      "requirements": "About the Role / About You",
      "link": "https://jobs.ashbyhq.com/0g/626ad7f2-2823-4cb3-8995-7bb51057c689",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "0g-labs||product-designer-ai-application",
      "keywords": [
        "AI",
        "营销/增长"
      ],
      "duties": [
        "架构设计",
        "产品规划",
        "设计/品牌",
        "增长营销"
      ]
    },
    {
      "company": "0G Labs",
      "func": "ga",
      "category": "chain",
      "position": "Finance Intern - Remote (Singapore)",
      "level": "mid",
      "location": "Singapore",
      "region": [
        "sg"
      ],
      "salary": "面议",
      "salaryNum": 0,
      "requirements": "ABOUT THE ROLE",
      "link": "https://jobs.ashbyhq.com/0g/1bcee212-d385-4a4b-9552-5dc51bbc8a71",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "0g-labs||finance-intern-remote-singapore",
      "keywords": [
        "AI",
        "营销/增长"
      ],
      "duties": [
        "增长营销"
      ]
    },
    {
      "company": "0G Labs",
      "func": "ops",
      "category": "chain",
      "position": " AI Platform Engineer",
      "level": "mid",
      "location": "Remote",
      "region": [
        "remote"
      ],
      "salary": "面议",
      "salaryNum": 0,
      "requirements": "Key Responsibilities:",
      "link": "https://jobs.ashbyhq.com/0g/1554138f-15dc-4225-93cc-44b64f2540ed",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "0g-labs||ai-platform-engineer",
      "keywords": [
        "Solidity",
        "Python",
        "Smart Contract",
        "AWS",
        "GCP",
        "CI/CD",
        "Machine Learning",
        "AI"
      ],
      "duties": [
        "性能/容量",
        "部署发布",
        "协议/合约开发",
        "安全/审计",
        "增长营销"
      ]
    },
    {
      "company": "pod network",
      "func": "eng",
      "category": "infra",
      "position": "Backend Engineer",
      "level": "mid",
      "location": "EU, UK or North America (Remote)",
      "region": [
        "remote"
      ],
      "salary": "面议",
      "salaryNum": 0,
      "requirements": "About the Role:",
      "link": "https://jobs.ashbyhq.com/pod-network/058b635a-3b2d-46c7-99c6-58451062d10d",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "pod-network||backend-engineer",
      "keywords": [
        "Rust",
        "营销/增长"
      ],
      "duties": [
        "架构设计",
        "性能/容量",
        "增长营销",
        "招聘/HR"
      ]
    },
    {
      "company": "pod network",
      "func": "eng",
      "category": "infra",
      "position": "Backend Engineer (HFT / Low-Latency Systems)",
      "level": "mid",
      "location": "EU, UK or North America (Remote)",
      "region": [
        "remote"
      ],
      "salary": "面议",
      "salaryNum": 0,
      "requirements": "Pod Network is rethinking blockchain performance from first principles. If you’ve pushed systems to nanosecond-level det",
      "link": "https://jobs.ashbyhq.com/pod-network/c99d6e68-3142-437c-836d-8f15fcb65789",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "pod-network||backend-engineer-hft-low-latency-systems",
      "keywords": [
        "Rust",
        "Go",
        "C++",
        "Validator/节点",
        "社区"
      ],
      "duties": [
        "团队管理",
        "架构设计",
        "性能/容量",
        "部署发布",
        "节点运维",
        "协议/合约开发"
      ]
    },
    {
      "company": "pod network",
      "func": "growth",
      "category": "infra",
      "position": "Content & Growth Strategist",
      "level": "mid",
      "location": "EU, UK or North America (Remote)",
      "region": [
        "remote"
      ],
      "salary": "面议",
      "salaryNum": 0,
      "requirements": "ABOUT THE ROLE",
      "link": "https://jobs.ashbyhq.com/pod-network/dd5f6388-e6df-46f2-a878-746f7f94e584",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "pod-network||content-growth-strategist",
      "keywords": [
        "Go",
        "社区",
        "营销/增长"
      ],
      "duties": [
        "团队管理",
        "性能/容量",
        "协议/合约开发",
        "产品规划",
        "增长营销",
        "社区运营"
      ]
    },
    {
      "company": "pod network",
      "func": "bd",
      "category": "infra",
      "position": "Business Development Lead",
      "level": "senior",
      "location": "EU, UK or North America (Remote)",
      "region": [
        "remote"
      ],
      "salary": "面议",
      "salaryNum": 0,
      "requirements": "ABOUT THE ROLE",
      "link": "https://jobs.ashbyhq.com/pod-network/b90dd5f1-29c1-4dfa-9db4-235280f75c9c",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "pod-network||business-development-lead",
      "keywords": [
        "Go",
        "社区",
        "营销/增长"
      ],
      "duties": [
        "团队管理",
        "架构设计",
        "部署发布",
        "协议/合约开发",
        "增长营销",
        "社区运营"
      ]
    },
    {
      "company": "pod network",
      "func": "eng",
      "category": "infra",
      "position": "Apply with us",
      "level": "mid",
      "location": "EU, UK or North America (Remote)",
      "region": [
        "remote"
      ],
      "salary": "面议",
      "salaryNum": 0,
      "requirements": "At Pod Network, we’re always looking for passionate, creative, and purpose-driven people who want to help shape the futu",
      "link": "https://jobs.ashbyhq.com/pod-network/cf234484-2e8a-4a75-a045-150e08f144bf",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "pod-network||apply-with-us",
      "keywords": [
        "社区",
        "营销/增长"
      ],
      "duties": [
        "增长营销",
        "社区运营",
        "商务拓展"
      ]
    },
    {
      "company": "0x",
      "func": "bd",
      "category": "defi",
      "position": "Institutional Sales Lead",
      "level": "senior",
      "location": "Remote — North America (Aligned with U.S. Time Zones)",
      "region": [
        "remote",
        "us"
      ],
      "salary": "面议",
      "salaryNum": 0,
      "requirements": "COMPANY",
      "link": "https://jobs.ashbyhq.com/0x/c3f622bb-1cae-4a17-a4ca-26e94cd0a283",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "0x||institutional-sales-lead",
      "keywords": [
        "DeFi",
        "Wallet",
        "营销/增长"
      ],
      "duties": [
        "团队管理",
        "性能/容量",
        "部署发布",
        "协议/合约开发",
        "设计/品牌",
        "增长营销"
      ]
    },
    {
      "company": "Paxos",
      "func": "eng",
      "category": "other",
      "position": "Fullstack Product Engineer",
      "level": "mid",
      "location": "In-Person NYC",
      "region": [
        "remote"
      ],
      "salary": "面议",
      "salaryNum": 0,
      "requirements": "WHO WE ARE",
      "link": "https://jobs.ashbyhq.com/PaxosLabs/5caa6fbf-3f7c-4b67-88cf-653db51fdf2b",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "paxos||fullstack-product-engineer",
      "keywords": [
        "Solidity",
        "TypeScript",
        "React",
        "Smart Contract",
        "EVM",
        "DeFi",
        "Wallet",
        "Ethereum"
      ],
      "duties": [
        "稳定性保障",
        "性能/容量",
        "部署发布",
        "协议/合约开发",
        "多链/跨链",
        "安全/审计"
      ]
    },
    {
      "company": "Paxos",
      "func": "eng",
      "category": "other",
      "position": "DeFi Researcher",
      "level": "mid",
      "location": "In-Person or Remote | NYC Preferred ",
      "region": [
        "remote"
      ],
      "salary": "面议",
      "salaryNum": 0,
      "requirements": "WHO WE ARE",
      "link": "https://jobs.ashbyhq.com/PaxosLabs/affdb43c-5a07-4964-ba97-049eb7bfcdd5",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "paxos||defi-researcher",
      "keywords": [
        "DeFi",
        "Staking",
        "营销/增长"
      ],
      "duties": [
        "监控告警",
        "性能/容量",
        "部署发布",
        "节点运维",
        "协议/合约开发",
        "增长营销"
      ]
    },
    {
      "company": "Paxos",
      "func": "eng",
      "category": "other",
      "position": "Smart Contract Engineer",
      "level": "mid",
      "location": "In-Person or Remote | NYC Preferred ",
      "region": [
        "remote"
      ],
      "salary": "面议",
      "salaryNum": 0,
      "requirements": "WHO WE ARE",
      "link": "https://jobs.ashbyhq.com/PaxosLabs/c898bc47-a0c7-49c4-9d89-5953b88e16e2",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "paxos||smart-contract-engineer",
      "keywords": [
        "Solidity",
        "Rust",
        "Smart Contract",
        "DeFi",
        "L2/Rollup",
        "ZK",
        "Validator/节点",
        "Foundry"
      ],
      "duties": [
        "架构设计",
        "性能/容量",
        "部署发布",
        "节点运维",
        "协议/合约开发",
        "安全/审计"
      ]
    },
    {
      "company": "Paxos",
      "func": "design",
      "category": "other",
      "position": "3D Motion & Marketing Designer",
      "level": "mid",
      "location": "United States - Remote",
      "region": [
        "remote",
        "us"
      ],
      "salary": "面议",
      "salaryNum": 0,
      "requirements": "WHO WE ARE",
      "link": "https://jobs.ashbyhq.com/PaxosLabs/3b8a5eb3-597d-4ba4-a3db-a6805741c924",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "paxos||3d-motion-marketing-designer",
      "keywords": [
        "Go",
        "DeFi",
        "营销/增长"
      ],
      "duties": [
        "团队管理",
        "架构设计",
        "协议/合约开发",
        "设计/品牌",
        "增长营销",
        "商务拓展"
      ]
    },
    {
      "company": "Paxos",
      "func": "growth",
      "category": "other",
      "position": "Content & Social Manager",
      "level": "mid",
      "location": "SF Bay Area",
      "region": [
        "remote"
      ],
      "salary": "面议",
      "salaryNum": 0,
      "requirements": "WHO WE ARE",
      "link": "https://jobs.ashbyhq.com/PaxosLabs/409a0ba3-f6f1-42fc-afbc-f80efe0a4fb2",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "paxos||content-social-manager",
      "keywords": [
        "DeFi",
        "AI",
        "营销/增长"
      ],
      "duties": [
        "团队管理",
        "协议/合约开发",
        "数据分析",
        "设计/品牌",
        "增长营销",
        "商务拓展"
      ]
    },
    {
      "company": "Flashbots",
      "func": "eng",
      "category": "infra",
      "position": "Sandbox Engineer",
      "level": "mid",
      "location": "Remote",
      "region": [
        "remote"
      ],
      "salary": "面议",
      "salaryNum": 0,
      "requirements": "ABOUT US",
      "link": "https://jobs.ashbyhq.com/flashbots.net/192a6c66-6586-48e2-baeb-4853a7110478",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "flashbots||sandbox-engineer",
      "keywords": [
        "L2/Rollup",
        "MEV",
        "Docker",
        "Linux",
        "On-call",
        "安全审计"
      ],
      "duties": [
        "稳定性保障",
        "故障/值班",
        "监控告警",
        "性能/容量",
        "部署发布",
        "自动化"
      ]
    },
    {
      "company": "Flashbots",
      "func": "eng",
      "category": "infra",
      "position": "Senior Backend Engineer",
      "level": "senior",
      "location": "Remote",
      "region": [
        "remote"
      ],
      "salary": "面议",
      "salaryNum": 0,
      "requirements": "ABOUT US",
      "link": "https://jobs.ashbyhq.com/flashbots.net/649fc903-8345-4ddc-9535-ddce374fe23b",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "flashbots||senior-backend-engineer",
      "keywords": [
        "Rust",
        "Go",
        "DeFi",
        "L2/Rollup",
        "Validator/节点",
        "MEV",
        "Ethereum",
        "CI/CD"
      ],
      "duties": [
        "团队管理",
        "稳定性保障",
        "性能/容量",
        "部署发布",
        "自动化",
        "节点运维"
      ]
    },
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
      ]
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
      ]
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
      "duties": []
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
      ]
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
      ]
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
      ]
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
      "link": "https://jobs.ashbyhq.com/trm-labs/3a658a20-8030-4c40-8182-04634af7c9a8",
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
      ]
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
      "link": "https://jobs.ashbyhq.com/trm-labs/5f814d06-0151-4390-94de-9f3e56a59923",
      "firstSeen": "2026-05-27",
      "lastSeen": "2026-05-27",
      "id": "trm-labs||senior-software-engineer-graph-analytics",
      "keywords": [],
      "duties": [
        "协议/合约开发",
        "数据分析"
      ]
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
      "link": "https://jobs.lever.co/jito.wtf/7b1056f6-dc25-4d91-ab76-c7b1fbe2aff4",
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
      "link": "https://jobs.lever.co/BTSE/70086ce5-b8af-4408-84cb-0cd440408e47",
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
      "link": "https://jobs.lever.co/BTSE/63b4b6a9-3975-4fce-af85-448a45b1afd5",
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
      ]
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
      ]
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
      ]
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
      "duties": []
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
      ]
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
      ]
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
      ]
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
      "duties": []
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
      "lastSeen": "2026-05-27",
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
      ]
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
      "lastSeen": "2026-05-27",
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
      ]
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
      "lastSeen": "2026-05-27",
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
      ]
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
      "lastSeen": "2026-05-27",
      "id": "binance||senior-frontend-engineer-web3-wallet",
      "keywords": [
        "Wallet"
      ],
      "duties": [
        "架构设计",
        "稳定性保障",
        "性能/容量",
        "安全/审计"
      ]
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
      "link": "https://job-boards.greenhouse.io/layerzerolabs/jobs/5554606004",
      "firstSeen": "2026-05-26",
      "lastSeen": "2026-05-27",
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
      "lastSeen": "2026-05-27",
      "id": "binance||product-manager-web3-defi",
      "keywords": [
        "DeFi",
        "Wallet"
      ],
      "duties": [
        "协议/合约开发",
        "多链/跨链",
        "产品规划"
      ]
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
      ]
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
      ]
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
      "lastSeen": "2026-05-27",
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
      ]
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
      "lastSeen": "2026-05-27",
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
      ]
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
      "link": "https://jobs.lever.co/binance/014f8ea5-bdba-491d-91bb-df4d6f1aad0a",
      "firstSeen": "2026-05-26",
      "lastSeen": "2026-05-27",
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
      ]
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
      ]
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
      ]
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
      ]
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
    },
    "ENS Labs": {
      "intro": ""
    },
    "Lightspark": {
      "intro": ""
    },
    "Polymarket": {
      "intro": ""
    },
    "Ellipsis Labs": {
      "intro": ""
    },
    "Robinhood": {
      "intro": ""
    },
    "Serotonin": {
      "intro": ""
    }
  },
  "lastUpdatedAt": "2026-05-27T20:13:57.609Z"
};
