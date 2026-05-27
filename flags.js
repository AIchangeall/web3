// ============================================================================
//  flags.js — 合规提示（中性、仅供参考）
//  对个别在部分司法辖区面临监管限制 / 制裁 / 下架争议的实体，给出一条【中性】提示，
//  提醒用户在投递或合作前自行核实所在地区的合规与可用性情况。
//  · 按公司名精确匹配（key 与 data.js 中 company 字段一致）。
//  · 措辞保持中性事实陈述，避免任何指控性表述。
//  · 各页（职位卡片 / 详情 / 企业库 / 招聘线索 / 岗位静态页）共用本表。
//  · gen_job_pages.mjs 内置同一份精简表（用于生成静态页）。
// ============================================================================
window.CNH_FLAGS = {
  "HTX": {
    zh: "HTX（原火币）在部分国家 / 地区面临监管限制或下架。投递或合作前请自行了解所在地的合规与可用性情况。",
    en: "HTX (formerly Huobi) faces regulatory restrictions or delisting in some jurisdictions. Please check local compliance and availability before applying or engaging."
  }
};
