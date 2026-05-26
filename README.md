# Web3 运维 / SRE / 稳定性岗位招聘看板

一个聚焦 **web3 / crypto 行业运维方向**（运维、SRE、稳定性、DevOps、基础设施、运维负责人）公开招聘信息的网站，
覆盖头部交易所、公链/L2、钱包/DeFi、节点 RPC 基础设施、合规托管等，**每日更新职位**。

## 文件结构

| 文件 | 作用 |
|------|------|
| `index.html` | 网站主页面。筛选 / 搜索 / 排序、统计卡片、"今日已更新"徽标、NEW 新增标记、更新日志。 |
| `data.js` | 岗位数据源（JSON 风格）。由每日更新程序自动维护，前端 `<script>` 加载。 |
| `apply_update.mjs` | 确定性更新引擎：把当日抓取的 `new_jobs.json` 合并进 `data.js`（去重 / 标记新增 / 写日志）。 |
| `UPDATE_RUNBOOK.md` | 每日更新操作手册 + 现成的自动化 Agent 提示词。 |
| `web3-sre-hiring.html` | 历史静态版本（已停止维护，仅留作备份）。 |

## 打开网站

直接用浏览器打开 `index.html` 即可（双击或拖入浏览器）。若浏览器拦截本地脚本，启动一个本地静态服务：

```bash
cd 项目目录
python3 -m http.server 4173
# 浏览器访问 http://localhost:4173/
```

## 每日更新怎么跑

见 [`UPDATE_RUNBOOK.md`](UPDATE_RUNBOOK.md)。核心三步：联网检索新岗位 → 写 `new_jobs.json` → `node apply_update.mjs new_jobs.json`。

更新引擎特性：按"公司+职位"去重、自动给新岗位标 `firstSeen`（前端显示 NEW 并置顶）、当天重复运行幂等、不会误删旧岗位。

## 数据说明

数据来自公开渠道（公司官网 / Lever / Ashby / Greenhouse / LinkedIn / V2EX / Web3.career / CryptoJobsList / 登链社区）。
薪资为公开 JD 标注或聚合估算，仅供参考，具体以面试谈薪为准。
