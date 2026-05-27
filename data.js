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
      "added": 98,
      "removed": 0,
      "note": "扩展交易所数据范围至 CoinMarketCap 前 100：补种 Gemini / WOO X / Backpack / Binance.US / bitFlyer / Pionex / CoinEx / Bitvavo / BitMEX / Bitso / Luno / Bitkub / Coincheck / AscendEX / Poloniex 等知名交易所岗位"
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
    }
  },
  "lastUpdatedAt": "2026-05-27T09:10:22.250Z"
};
