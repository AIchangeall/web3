// ============================================================================
//  Web3 行业全职能岗位数据源（机器可维护，JSON 风格）
//  本文件由每日更新程序自动维护；前端 index.html 通过 <script src> 加载。
//  结构: { lastUpdated, snapshotNote, changelog[], jobs[] }
//  每个 job: id?/company/category/func/position/level/location/region[]/salary/
//            salaryNum/requirements/link/firstSeen/lastSeen
//  func(职能): eng工程研发 | ops运维SRE基础设施 | product产品 | design设计 |
//              data数据AI | security安全 | growth市场增长运营 | bd商务销售 | ga合规法务财务HR
//  category(公司类型): exchange交易所 | chain公链L2 | defi钱包DeFi | infra节点RPC | other合规托管其他
//  约定: 新岗位 firstSeen=当日(即被标 NEW); 每次扫描把仍在招岗位的 lastSeen 改为当日。
// ============================================================================
window.WEB3_JOBS_DATA = {
  "lastUpdated": "2026-05-26",
  "snapshotNote": "覆盖 web3/crypto 行业全职能公开招聘（工程研发 / 运维SRE / 产品 / 设计 / 数据AI / 安全 / 市场增长 / BD / 合规HR）。数据来自公司官网 / Lever / Ashby / Greenhouse / Web3.career / CryptoJobsList / CryptocurrencyJobs / V2EX / 登链社区。薪资为公开 JD 或聚合估算，仅供参考。",
  "changelog": [
    {
      "date": "2026-05-26",
      "added": 32,
      "removed": 0,
      "note": "每日更新 2026-05-26：新增工程/运维/产品/设计/数据AI/安全/市场增长/BD/合规HR 共 33 个岗位（来源：Lever/Greenhouse/CryptoJobsList）"
    },
    {
      "date": "2026-05-27",
      "added": 26,
      "removed": 0,
      "note": "扩展岗位范围至全职能：新增工程/产品/设计/数据AI/安全/市场增长/BD/合规HR 共 26 个岗位，并上线「职能」分类筛选。"
    }
  ],
  "jobs": [
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
      "id": "aave-labs||staff-smart-contract-engineer"
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
      "id": "sei-labs||solidity-smart-contracts-engineer"
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
      "id": "zetachain||frontend-engineer-web3-consumer-apps"
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
      "id": "binance||senior-frontend-engineer-web3-wallet"
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
      "id": "gate-io||web3-backend-engineer"
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
      "id": "layerzero-labs||backend-engineer"
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
      "id": "ethereum-foundation||developer-account-abstraction-interop"
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
      "id": "triton-one||site-reliability-engineer-solana-infrastructure"
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
      "id": "binance||product-manager-web3-defi"
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
      "id": "space-and-time-labs||product-manager-defi"
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
      "id": "crypto-com||product-manager-onchain"
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
      "id": "okx||senior-product-designer-web3-defi"
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
      "id": "phantom||brand-designer"
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
      "id": "immunefi||senior-ux-product-designer"
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
      "id": "binance||data-scientist-ai-agent-engineering-infrastructure"
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
      "id": "binance||data-scientist-computer-vision-risk-management"
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
      "id": "certik||senior-blockchain-security-engineer-solidity-rust-golang"
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
      "id": "binance||smart-contract-auditor"
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
      "id": "okx||web3-security-researcher-smart-contract"
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
      "id": "jump-crypto||blockchain-security-engineer"
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
      "id": "okx||web3-ecosystem-marketing-manager"
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
      "id": "crypto-com||growth-manager"
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
      "id": "blockchain-com||community-manager-web3"
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
      "id": "token-metrics||head-of-marketing-and-communications"
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
      "id": "okx||business-development-manager-web3-community"
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
      "id": "crypto-com||business-development-manager-vip-partnerships"
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
      "id": "celo-foundation||head-of-business-development-and-partnerships"
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
      "id": "gateway-fm||business-development-manager-web3"
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
      "id": "crypto-com||regulatory-legal-counsel"
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
      "id": "circle||web3-blockchain-researcher-compliance"
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
      "id": "galaxy-digital||head-of-legal-retail"
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
      "id": "offchain-labs||technical-recruiter-crypto"
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
      "id": "op-labs-optimism-protocol-engineer-go-rust"
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
      "id": "aave-senior-smart-contract-engineer-solidity"
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
      "id": "uniswap-labs-senior-frontend-engineer-react-ts"
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
      "id": "halliday-backend-engineer"
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
      "id": "symbiotic-protocol-engineer-restaking"
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
      "id": "op-labs-pbc-senior-product-manager"
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
      "id": "kraken-product-manager-onchain"
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
      "id": "moonpay-product-manager-on-off-ramp"
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
      "id": "figure-principal-product-designer"
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
      "id": "alchemy-senior-associate-brand-design"
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
      "id": "squads-brand-designer"
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
      "id": "binance-data-scientist-on-chain"
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
      "id": "okx-machine-learning-engineer"
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
      "id": "chainalysis-data-analyst-investigations"
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
      "id": "trail-of-bits-smart-contract-security-auditor"
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
      "id": "nethermind-smart-contract-auditor"
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
      "id": "veridise-security-researcher"
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
      "id": "binance-growth-operations-binance-academy"
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
      "id": "moonpay-product-marketing-manager"
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
      "id": "mercuryo-community-manager"
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
      "id": "bitget-institutional-bd-manager"
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
      "id": "anchorage-digital-regional-institutional-manager"
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
      "id": "paxos-sales-business-development"
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
      "id": "crypto-com-legal-counsel-crypto"
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
      "id": "binance-compliance-officer-aml-kyc"
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
      "id": "anchorage-digital-crypto-technical-recruiter"
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
      "func": "ops"
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
      "func": "ops"
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
      "func": "ops"
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
      "func": "ops"
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
      "func": "ops"
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
      "func": "ops"
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
      "func": "ops"
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
      "func": "ops"
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
      "func": "ops"
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
      "func": "ops"
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
      "func": "ops"
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
      "func": "ops"
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
      "func": "ops"
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
      "func": "ops"
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
      "func": "ops"
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
      "func": "ops"
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
      "func": "ops"
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
      "func": "ops"
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
      "func": "ops"
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
      "func": "ops"
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
      "func": "ops"
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
      "func": "ops"
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
      "func": "ops"
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
      "func": "ops"
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
      "func": "ops"
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
      "func": "ops"
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
      "func": "ops"
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
      "func": "ops"
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
      "func": "ops"
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
      "func": "ops"
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
      "func": "ops"
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
      "func": "ops"
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
      "func": "ops"
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
      "func": "ops"
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
      "func": "ops"
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
      "func": "ops"
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
      "func": "ops"
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
      "func": "ops"
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
      "func": "ops"
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
      "func": "ops"
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
      "func": "ops"
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
      "func": "ops"
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
      "func": "ops"
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
      "func": "ops"
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
      "func": "ops"
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
      "func": "ops"
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
      "func": "ops"
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
      "func": "ops"
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
      "func": "ops"
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
      "func": "ops"
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
      "func": "ops"
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
      "func": "ops"
    }
  ]
};
