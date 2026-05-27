// ============================================================================
//  flags.js — 品牌元数据（合规提示 + 公司官方域名）
//  · 浏览器各页通过 <script src> 加载（window.CNH_FLAGS / window.CNH_DOMAINS）。
//  · gen_job_pages.mjs(Node) 读取本文件源码执行，复用同一份数据（不重复维护）。
// ============================================================================

// 合规提示（中性、仅供参考）——按公司名精确匹配，措辞保持中性事实，避免指控性表述。
window.CNH_FLAGS = {
  "HTX": {
    zh: "HTX（原火币）在部分国家 / 地区面临监管限制或下架。投递或合作前请自行了解所在地的合规与可用性情况。",
    en: "HTX (formerly Huobi) faces regulatory restrictions or delisting in some jurisdictions. Please check local compliance and availability before applying or engaging."
  }
};

// 公司 → 官方域名（用于取 logo/favicon，确保头像与公司匹配）。
// 仅收录可信度高的官方主域名；未收录的公司由「域名与公司名匹配」启发式兜底，
// 再不行则回退彩色字母头像（绝不展示不匹配的 logo）。key 与 data.js 的 company 字段一致。
window.CNH_DOMAINS = {
  // —— 交易所 ——
  "Binance": "binance.com", "Binance.US": "binance.us", "OKX": "okx.com", "Bybit": "bybit.com",
  "Coinbase": "coinbase.com", "Kraken": "kraken.com", "Bitget": "bitget.com", "KuCoin": "kucoin.com",
  "HTX": "htx.com", "MEXC": "mexc.com", "Gate.io": "gate.io", "Crypto.com": "crypto.com",
  "Bitfinex": "bitfinex.com", "Bitstamp by Robinhood": "bitstamp.net", "Gemini": "gemini.com",
  "BitMEX": "bitmex.com", "Deribit": "deribit.com", "Upbit (Dunamu)": "upbit.com", "Bithumb": "bithumb.com",
  "bitFlyer": "bitflyer.com", "Coincheck": "coincheck.com", "BingX": "bingx.com", "Bitkub": "bitkub.com",
  "Bitso": "bitso.com", "Bitpanda": "bitpanda.com", "Bitvavo": "bitvavo.com", "Bitrue": "bitrue.com",
  "BitMart": "bitmart.com", "AscendEX": "ascendex.com", "BTSE": "btse.com", "Backpack Exchange": "backpack.exchange",
  "Bullish": "bullish.com", "CEX.IO": "cex.io", "CoinDCX": "coindcx.com", "CoinEx": "coinex.com",
  "Deepcoin": "deepcoin.com", "BloFin": "blofin.com", "Flipster": "flipster.io", "LBank": "lbank.com",
  "Luno": "luno.com", "Pionex": "pionex.com", "Poloniex": "poloniex.com", "Toobit": "toobit.com",
  "WOO X": "woo.org", "XT.COM": "xt.com", "Hotcoin Global": "hotcoin.com", "Independent Reserve": "independentreserve.com",
  "HashKey Group": "hashkey.com", "Paradex": "paradex.trade", "Hyperliquid Labs": "hyperliquid.xyz",
  // —— 公链 / L2 / 协议 / 基础设施 ——
  "0G Labs": "0g.ai", "0x": "0x.org", "1inch": "1inch.io", "Aave": "aave.com", "Aave Labs": "aave.com",
  "Alchemy": "alchemy.com", "Analog": "analog.one", "Anchorage Digital": "anchorage.com",
  "Animoca Brands": "animocabrands.com", "Ankr": "ankr.com", "Aptos Labs": "aptoslabs.com",
  "Arbitrum Foundation": "arbitrum.foundation", "Aztec": "aztec.network", "Biconomy": "biconomy.io",
  "Blockchain.com": "blockchain.com", "Blockdaemon": "blockdaemon.com", "Bloxstaking (ssv.network)": "ssv.network",
  "Caldera": "caldera.xyz", "Celo Foundation": "celo.org", "Cere Network": "cere.network", "CertiK": "certik.com",
  "Certora": "certora.com", "Chainalysis": "chainalysis.com", "Chainlink Labs": "chain.link",
  "Chainstack": "chainstack.com", "Circle": "circle.com", "CoW DAO": "cow.fi", "CoinMarketCap": "coinmarketcap.com",
  "Consensys (MetaMask)": "consensys.io", "Copper.co": "copper.co", "DeBank / Rabby": "debank.com",
  "Eigen Labs": "eigenlabs.org", "Ethereum Foundation": "ethereum.org", "Figure": "figure.com",
  "Fireblocks": "fireblocks.com", "Flashbots": "flashbots.net", "Fuel Labs": "fuel.network",
  "Galaxy Digital": "galaxy.com", "Gateway.fm": "gateway.fm", "Google Cloud": "google.com",
  "Horizen Labs": "horizenlabs.io", "Immunefi": "immunefi.com", "Immutable": "immutable.com",
  "Jito Labs": "jito.network", "Jump Crypto": "jumpcrypto.com", "Jupiter": "jup.ag", "Kiln": "kiln.fi",
  "LayerZero Labs": "layerzero.network", "Limit Break": "limitbreak.com", "Linera": "linera.io",
  "Mellow Protocol": "mellow.finance", "Mercuryo": "mercuryo.io", "Monad Foundation": "monad.xyz",
  "MoonPay": "moonpay.com", "MyShell": "myshell.ai", "Nethermind": "nethermind.io", "Nibiru Chain": "nibiru.fi",
  "NodeReal": "nodereal.io", "OP Labs (Optimism)": "optimism.io", "OP Labs PBC": "optimism.io",
  "Offchain Labs": "offchainlabs.com", "Offchain Labs (Arbitrum)": "offchainlabs.com", "Ondo Finance": "ondo.finance",
  "P2P.org": "p2p.org", "Paxos": "paxos.com", "Phantom": "phantom.com", "Polygon Labs": "polygon.technology",
  "QuickNode": "quicknode.com", "Reown (WalletConnect)": "reown.com", "Ripple": "ripple.com",
  "Saga": "saga.xyz", "Sei Labs": "sei.io", "Shardeum Foundation": "shardeum.org", "Sky Mavis": "skymavis.com",
  "Solana Foundation": "solana.com", "Space and Time Labs": "spaceandtime.io", "Squads": "squads.so",
  "StarkWare Industries": "starkware.co", "Stellar Development Foundation": "stellar.org",
  "Sui Foundation / Mysten Labs": "sui.io", "Symbiotic": "symbiotic.fi", "THORChain": "thorchain.org",
  "TRM Labs": "trmlabs.com", "Token Metrics": "tokenmetrics.com", "Trail of Bits": "trailofbits.com",
  "Triton One": "triton.one", "Trust Wallet": "trustwallet.com", "Uniswap Labs": "uniswap.org",
  "Veridise": "veridise.com", "Wormhole Foundation": "wormhole.com", "ZetaChain": "zetachain.com",
  "Zokyo": "zokyo.io", "Zora": "zora.co", "dYdX": "dydx.exchange"
};
