// ============================================================================
//  widgets.js — 全站共用挂件（在 i18n.js 之后引入）
//   1) 浏览量统计：本机 localStorage 计数 + 不蒜子(busuanzi) 全站 PV/UV
//   2) 「💬 联系」单浮按钮 → 弹层带 Tab：合作（微信二维码）/ 赞赏（微信收款码）
//      赞赏只在用户主动切到 Tab 时显示，不再 2 分钟自动弹。
//   3) 暴露 window.cnhShowTip() 供页内代码（如导出后软引导）直接打开赞赏 Tab。
// ============================================================================
(function () {
  function T(key) { return (window.I18N && I18N.t) ? I18N.t(key) : key; }

  // ---- 本机累计浏览量 ----
  var PV_KEY = "cnh_pv_local";
  var localPV = (parseInt(localStorage.getItem(PV_KEY) || "0", 10) || 0) + 1;
  try { localStorage.setItem(PV_KEY, String(localPV)); } catch (e) { }

  // ---- 样式 ----
  var css = `
  .cnh-viewbar{max-width:1180px;margin:0 auto 26px;padding:10px 24px;text-align:center;color:#9aa1b1;font-size:12px}
  .cnh-viewbar b{color:#6b7280;font-weight:700}
  .cnh-fab{position:fixed;right:20px;bottom:20px;z-index:40;display:flex;align-items:center;gap:7px;
    background:linear-gradient(135deg,#6d5efc,#a855f7);color:#fff;font-weight:700;font-size:13.5px;
    border:0;padding:11px 16px;border-radius:999px;cursor:pointer;box-shadow:0 8px 24px rgba(109,94,252,.35)}
  .cnh-fab:hover{filter:brightness(1.05)}
  .cnh-mask{position:fixed;inset:0;z-index:50;background:rgba(15,23,41,.5);backdrop-filter:blur(2px);
    display:none;align-items:center;justify-content:center;padding:20px}
  .cnh-mask.show{display:flex}
  .cnh-modal{background:#fff;border-radius:18px;padding:22px 26px 26px;width:340px;max-width:100%;text-align:center;
    box-shadow:0 20px 60px rgba(15,23,41,.3);position:relative}
  .cnh-modal h3{margin:0 0 6px;font-size:17px;font-weight:800;color:#0f1729}
  .cnh-modal p{margin:0 0 14px;font-size:13px;color:#6b7280;line-height:1.55}
  .cnh-tabs{display:flex;gap:6px;background:#f1f2f6;border-radius:10px;padding:4px;margin:6px 0 14px}
  .cnh-tab{flex:1;border:0;background:transparent;color:#64748b;font-weight:700;font-size:13px;padding:7px 0;border-radius:7px;cursor:pointer;transition:.15s}
  .cnh-tab.active{background:#fff;color:#0f1729;box-shadow:0 1px 2px rgba(15,23,41,.06)}
  .cnh-qr{width:230px;height:230px;max-width:100%;border-radius:12px;border:1px solid #e8eaf0;object-fit:contain;background:#fafafe}
  .cnh-qrhint{width:230px;max-width:100%;margin:0 auto;aspect-ratio:1;border:1px dashed #cbd0db;border-radius:12px;
    display:flex;align-items:center;justify-content:center;color:#9aa1b1;font-size:12px;padding:18px;text-align:center}
  .cnh-x{position:absolute;top:12px;right:14px;border:0;background:none;font-size:22px;line-height:1;color:#9aa1b1;cursor:pointer}
  .cnh-x:hover{color:#0f1729}
  .cnh-foot{margin-top:12px;font-size:12px;color:#16a34a;font-weight:600}
  @media(max-width:560px){.cnh-fab{right:14px;bottom:14px;padding:10px 14px}}
  `;
  var st = document.createElement("style"); st.textContent = css; document.head.appendChild(st);

  // ---- 不蒜子脚本（全站 PV/UV）----
  var bsz = document.createElement("script");
  bsz.async = true; bsz.src = "https://busuanzi.ibruce.info/busuanzi/2.0/busuanzi.pure.mini.js";
  document.head.appendChild(bsz);

  function buildDOM() {
    // 浏览量页脚
    var bar = document.createElement("div");
    bar.className = "cnh-viewbar"; bar.id = "cnh-viewbar";
    document.body.appendChild(bar);

    // 单浮按钮 「💬 联系」
    var fab = document.createElement("button");
    fab.className = "cnh-fab"; fab.id = "cnh-fab";
    fab.innerHTML = '<span id="cnh-fab-t"></span>';
    document.body.appendChild(fab);

    // 弹层：合作 / 赞赏 Tab
    var mask = document.createElement("div");
    mask.className = "cnh-mask"; mask.id = "cnh-mask";
    mask.innerHTML =
      '<div class="cnh-modal" role="dialog" aria-modal="true">' +
      '<button class="cnh-x" id="cnh-x" aria-label="close">&times;</button>' +
      '<div class="cnh-tabs">' +
      '<button class="cnh-tab active" data-tab="partner" id="cnh-tab-p"></button>' +
      '<button class="cnh-tab" data-tab="tip" id="cnh-tab-t"></button>' +
      '</div>' +
      '<div id="cnh-pane-partner">' +
      '<h3 id="cnh-title"></h3><p id="cnh-sub"></p>' +
      '<img class="cnh-qr" id="cnh-qr" src="assets/wechat-qr.png" alt="WeChat" />' +
      '<div class="cnh-qrhint" id="cnh-qrhint" style="display:none"></div>' +
      '</div>' +
      '<div id="cnh-pane-tip" style="display:none">' +
      '<h3 id="cnh-pay-title"></h3><p id="cnh-pay-sub"></p>' +
      '<img class="cnh-qr" id="cnh-pay-qr" src="assets/wxskm.jpg" alt="Tip" />' +
      '<div class="cnh-qrhint" id="cnh-pay-qrhint" style="display:none"></div>' +
      '<div class="cnh-foot" id="cnh-pay-ali"></div>' +
      '</div>' +
      '</div>';
    document.body.appendChild(mask);

    // 缺图兜底
    var qr = document.getElementById("cnh-qr");
    qr.addEventListener("error", function () { qr.style.display = "none"; var h = document.getElementById("cnh-qrhint"); h.style.display = "flex"; h.textContent = T("partner.hint"); });
    var payqr = document.getElementById("cnh-pay-qr");
    payqr.addEventListener("error", function () { payqr.style.display = "none"; var h = document.getElementById("cnh-pay-qrhint"); h.style.display = "flex"; h.textContent = T("pay.hint"); });

    // Tab 切换
    function switchTab(name) {
      document.querySelectorAll(".cnh-tab").forEach(function (t) { t.classList.toggle("active", t.dataset.tab === name); });
      document.getElementById("cnh-pane-partner").style.display = name === "partner" ? "" : "none";
      document.getElementById("cnh-pane-tip").style.display = name === "tip" ? "" : "none";
    }
    document.querySelectorAll(".cnh-tab").forEach(function (t) { t.addEventListener("click", function () { switchTab(t.dataset.tab); }); });

    // 开关
    function open(tab) { mask.classList.add("show"); switchTab(tab || "partner"); }
    function close() { mask.classList.remove("show"); }
    fab.addEventListener("click", function () { open("partner"); });
    document.getElementById("cnh-x").addEventListener("click", close);
    mask.addEventListener("click", function (e) { if (e.target === mask) close(); });
    document.addEventListener("keydown", function (e) { if (e.key === "Escape") close(); });

    // 暴露：页内（如猎头导出 toast）可直接打开赞赏 Tab
    window.cnhShowTip = function () { open("tip"); };
    // 兼容旧入口：原来的 cnh-fab2 按钮 id 已移除，但仍可走 cnhShowTip
    window.cnhOpenContact = function () { open("partner"); };

    paint();
    window.addEventListener("langchange", paint);
    setTimeout(paintViews, 1500); setTimeout(paintViews, 4000);
  }

  var cachePV = "", cacheUV = "";
  function paintViews() {
    var pvSpan = document.getElementById("busuanzi_value_site_pv");
    var uvSpan = document.getElementById("busuanzi_value_site_uv");
    if (pvSpan && /\d/.test(pvSpan.textContent || "")) cachePV = pvSpan.textContent.trim();
    if (uvSpan && /\d/.test(uvSpan.textContent || "")) cacheUV = uvSpan.textContent.trim();
    var bar = document.getElementById("cnh-viewbar");
    if (!bar) return;
    var pv = cachePV || String(localPV);
    var html = T("views") + ' <b>' + pv + '</b>';
    if (cacheUV) html += ' · ' + T("visitors") + ' <b>' + cacheUV + '</b>';
    html += '<span style="display:none"><span id="busuanzi_value_site_pv"></span><span id="busuanzi_value_site_uv"></span></span>';
    bar.innerHTML = html;
  }
  function paint() {
    var ft = document.getElementById("cnh-fab-t"); if (ft) ft.textContent = T("fab.contact");
    var tp = document.getElementById("cnh-tab-p"); if (tp) tp.textContent = T("fab.tab.partner");
    var tt = document.getElementById("cnh-tab-t"); if (tt) tt.textContent = T("fab.tab.tip");
    document.getElementById("cnh-title").textContent = T("partner.title");
    document.getElementById("cnh-sub").textContent = T("partner.sub");
    document.getElementById("cnh-x").title = T("partner.close");
    var hint = document.getElementById("cnh-qrhint");
    if (hint && hint.style.display !== "none") hint.textContent = T("partner.hint");
    var pt = document.getElementById("cnh-pay-title");
    if (pt) {
      pt.textContent = T("pay.title");
      document.getElementById("cnh-pay-sub").textContent = T("pay.sub");
      document.getElementById("cnh-pay-ali").textContent = T("pay.ali");
      var ph = document.getElementById("cnh-pay-qrhint");
      if (ph && ph.style.display !== "none") ph.textContent = T("pay.hint");
    }
    paintViews();
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", buildDOM);
  else buildDOM();
})();

// 导航下拉菜单 hover（CSS :hover 在部分页面不可靠，改用 JS class 切换）
(function(){
  function initNavDrop(){
    document.querySelectorAll('.nav-drop').forEach(function(d){
      d.addEventListener('mouseenter', function(){ d.classList.add('open'); });
      d.addEventListener('mouseleave', function(){ d.classList.remove('open'); });
    });
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', initNavDrop);
  else initNavDrop();
})();
