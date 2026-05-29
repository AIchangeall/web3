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
  "lastUpdated": "2026-05-29",
  "lastUpdatedAt": "2026-05-29T20:14:33.862Z",
  "snapshotNote": "覆盖 web3/crypto 行业全职能公开招聘（工程研发 / 运维SRE / 产品 / 设计 / 数据AI / 安全 / 市场增长 / BD / 合规HR）。数据来自公司官网 / Lever / Ashby / Greenhouse / Web3.career / CryptoJobsList / CryptocurrencyJobs / V2EX / 登链社区。薪资为公开 JD 或聚合估算，仅供参考。",
  "changelog": [
    {
      "date": "2026-05-29",
      "added": 78,
      "removed": 0,
      "note": "当日累计新增 78 个岗位；本次刷新 14 个。"
    },
    {
      "date": "2026-05-28",
      "added": 152,
      "removed": 0,
      "note": "当日累计新增 152 个岗位；本次刷新 24 个。"
    },
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
    },
    "Celestia Labs": {
      "intro": ""
    },
    "Hyperlane": {
      "intro": ""
    },
    "OpenSea": {
      "intro": ""
    },
    "Drift Protocol": {
      "intro": ""
    },
    "Magic Eden": {
      "intro": ""
    },
    "Slingshot": {
      "intro": ""
    },
    "Pendle Finance": {
      "intro": ""
    },
    "DigiFinex": {
      "intro": ""
    },
    "dYdX Foundation": {
      "intro": ""
    },
    "Ethena Labs": {
      "intro": ""
    },
    "Rain": {
      "intro": ""
    },
    "Improbable": {
      "intro": ""
    },
    "Turnkey": {
      "intro": ""
    },
    "Optimum": {
      "intro": ""
    },
    "Indodax": {
      "intro": ""
    },
    "Blockworks": {
      "intro": ""
    },
    "Sui Foundation": {
      "intro": ""
    },
    "InfStones": {
      "intro": ""
    },
    "Douro Labs (Pyth)": {
      "intro": ""
    },
    "FalconX": {
      "intro": ""
    },
    "LiFi": {
      "intro": ""
    },
    "BitGo": {
      "intro": ""
    },
    "Ava Labs (Avalanche)": {
      "intro": ""
    },
    "Ramp Network": {
      "intro": ""
    },
    "Eclipse": {
      "intro": ""
    },
    "Helius": {
      "intro": ""
    },
    "Ledger": {
      "intro": ""
    },
    "Dune Analytics": {
      "intro": ""
    },
    "Safe (Gnosis Safe)": {
      "intro": ""
    },
    "Morpho": {
      "intro": ""
    },
    "NEAR Foundation": {
      "intro": ""
    },
    "Filecoin Foundation": {
      "intro": ""
    },
    "Figment": {
      "intro": ""
    },
    "Celestia": {
      "intro": ""
    },
    "Aragon": {
      "intro": ""
    },
    "Xsolla": {
      "intro": ""
    },
    "CoinTracker": {
      "intro": ""
    },
    "WhiteBIT": {
      "intro": ""
    },
    "Consensys": {
      "intro": ""
    },
    "Messari": {
      "intro": ""
    },
    "Trust Machines": {
      "intro": ""
    },
    "Okcoin": {
      "intro": ""
    },
    "Matter Labs": {
      "intro": ""
    },
    "Allium": {
      "intro": ""
    },
    "Anagram": {
      "intro": ""
    },
    "Clearmatics": {
      "intro": ""
    },
    "Succinct": {
      "intro": ""
    },
    "Blum": {
      "intro": ""
    },
    "CoinGecko": {
      "intro": ""
    },
    "Trilitech": {
      "intro": ""
    },
    "SwissBorg": {
      "intro": ""
    },
    "Crypto Banter": {
      "intro": ""
    },
    "MetaWealth": {
      "intro": ""
    },
    "N1": {
      "intro": ""
    },
    "Wealthsimple": {
      "intro": ""
    },
    "Sei Foundation": {
      "intro": ""
    },
    "Ether.fi": {
      "intro": ""
    },
    "VALR": {
      "intro": ""
    },
    "Manta Network": {
      "intro": ""
    },
    "asymmetric.re": {
      "intro": ""
    },
    "Windranger Labs": {
      "intro": ""
    },
    "Unit 410": {
      "intro": ""
    },
    "Sei Development Foundation": {
      "intro": ""
    },
    "Aptos Foundation": {
      "intro": ""
    },
    "Hyphen Connect": {
      "intro": ""
    },
    "Pyth Data Association": {
      "intro": ""
    },
    "Arbitrum OpCo": {
      "intro": ""
    },
    "MachineFi Lab": {
      "intro": ""
    },
    "Berachain": {
      "intro": ""
    },
    "Gauntlet": {
      "intro": ""
    }
  },
  "totalJobs": 2551,
  "chunks": [
    "data-jobs-1.json",
    "data-jobs-2.json",
    "data-jobs-3.json",
    "data-jobs-4.json",
    "data-jobs-5.json",
    "data-jobs-6.json"
  ]
};
