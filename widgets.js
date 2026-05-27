// ============================================================================
//  widgets.js — 全站共用挂件（在 i18n.js 之后引入）
//   1) 浏览量统计：本机 localStorage 计数（始终可用）+ 不蒜子(busuanzi) 全站 PV/UV
//      （网站公开托管且联网时显示全站真实数据，否则回退本机累计访问数）
//   2) 合作沟通：右下角悬浮按钮 → 微信二维码弹窗（图片 assets/wechat-qr.png）
//   3) 赞赏提示：累计浏览满 5 分钟后温和弹出一次「自愿赞赏」(支付宝赞赏码 assets/alipay-qr.png)，
//      可随手关闭、关闭后不再打扰(localStorage 记忆)。非付费墙/不限制浏览，纯自愿。
//  自动在每个页面注入，无需各页改动结构。文案随 I18N 语言切换。
// ============================================================================
(function () {
  function T(key) { return (window.I18N && I18N.t) ? I18N.t(key) : key; }

  // ---- 本机累计浏览量（每次加载 +1，跨本站页面共享同一计数）----
  var PV_KEY = "cnh_pv_local";
  var localPV = (parseInt(localStorage.getItem(PV_KEY) || "0", 10) || 0) + 1;
  try { localStorage.setItem(PV_KEY, String(localPV)); } catch (e) {}

  // ---- 样式 ----
  var css = `
  .cnh-viewbar{max-width:1180px;margin:0 auto 26px;padding:10px 24px;text-align:center;color:#9aa1b1;font-size:12px}
  .cnh-viewbar b{color:#6b7280;font-weight:700}
  .cnh-fab{position:fixed;right:20px;bottom:20px;z-index:40;display:flex;align-items:center;gap:7px;
    background:linear-gradient(135deg,#6d5efc,#a855f7);color:#fff;font-weight:700;font-size:13.5px;
    border:0;padding:11px 16px;border-radius:999px;cursor:pointer;box-shadow:0 8px 24px rgba(109,94,252,.4)}
  .cnh-fab:hover{filter:brightness(1.05)}
  .cnh-fab svg{width:17px;height:17px;fill:#fff}
  .cnh-mask{position:fixed;inset:0;z-index:50;background:rgba(15,23,41,.5);backdrop-filter:blur(2px);
    display:none;align-items:center;justify-content:center;padding:20px}
  .cnh-mask.show{display:flex}
  .cnh-modal{background:#fff;border-radius:18px;padding:26px;width:340px;max-width:100%;text-align:center;
    box-shadow:0 20px 60px rgba(15,23,41,.3);position:relative}
  .cnh-modal h3{margin:0 0 6px;font-size:18px;font-weight:800;color:#0f1729}
  .cnh-modal p{margin:0 0 16px;font-size:13px;color:#6b7280;line-height:1.5}
  .cnh-qr{width:240px;height:240px;max-width:100%;border-radius:12px;border:1px solid #e8eaf0;object-fit:contain;background:#fafafe}
  .cnh-qrhint{width:240px;max-width:100%;margin:0 auto;aspect-ratio:1;border:1px dashed #cbd0db;border-radius:12px;
    display:flex;align-items:center;justify-content:center;color:#9aa1b1;font-size:12px;padding:18px;text-align:center}
  .cnh-x{position:absolute;top:12px;right:14px;border:0;background:none;font-size:22px;line-height:1;color:#9aa1b1;cursor:pointer}
  .cnh-x:hover{color:#0f1729}
  .cnh-mark{margin-top:14px;font-size:12px;color:#16a34a;font-weight:600;display:flex;align-items:center;justify-content:center;gap:5px}
  @media(max-width:560px){.cnh-fab{right:14px;bottom:14px;padding:10px 14px}}
  /* 软性付费墙 */
  .cnh-pay-mask{position:fixed;inset:0;z-index:60;background:rgba(15,23,41,.55);backdrop-filter:blur(3px);display:none;align-items:center;justify-content:center;padding:20px}
  .cnh-pay-mask.show{display:flex}
  .cnh-pay{position:relative;background:#fff;border-radius:18px;padding:24px;width:340px;max-width:100%;text-align:center;box-shadow:0 20px 60px rgba(15,23,41,.35)}
  .cnh-pay .cnh-payx{position:absolute;top:12px;right:14px;border:0;background:none;font-size:22px;line-height:1;color:#9aa1b1;cursor:pointer}
  .cnh-pay .cnh-payx:hover{color:#0f1729}
  .cnh-pay .emoji{font-size:30px;line-height:1;margin-bottom:4px}
  .cnh-pay h3{margin:0 0 6px;font-size:18px;font-weight:800;color:#0f1729}
  .cnh-pay .psub{margin:0 0 14px;font-size:13px;color:#6b7280;line-height:1.6}
  .cnh-pay .pqr{width:210px;height:210px;max-width:100%;border-radius:12px;border:1px solid #e8eaf0;object-fit:contain;background:#fafafe}
  .cnh-pay .pqrhint{width:210px;max-width:100%;margin:0 auto;aspect-ratio:1;border:1px dashed #cbd0db;border-radius:12px;display:flex;align-items:center;justify-content:center;color:#9aa1b1;font-size:12px;padding:16px;text-align:center}
  .cnh-pay .pali{margin-top:10px;font-size:12.5px;color:#1677ff;font-weight:600}
  .cnh-pay .punlock{margin-top:16px;width:100%;border:0;background:#1677ff;color:#fff;font-weight:700;font-size:15px;padding:12px;border-radius:12px;cursor:pointer}
  .cnh-pay .punlock:hover{background:#0e5fd8}
  .cnh-pay .plater{margin-top:10px;background:none;border:0;color:#9aa1b1;font-size:12.5px;cursor:pointer}
  `;
  var st = document.createElement("style"); st.textContent = css; document.head.appendChild(st);

  // ---- 不蒜子脚本（全站 PV/UV；离线/本地静默失败，回退本机计数）----
  var bsz = document.createElement("script");
  bsz.async = true; bsz.src = "https://busuanzi.ibruce.info/busuanzi/2.0/busuanzi.pure.mini.js";
  document.head.appendChild(bsz);

  function buildDOM() {
    // 浏览量页脚（含 busuanzi 取值容器，预填本机计数）
    var bar = document.createElement("div");
    bar.className = "cnh-viewbar"; bar.id = "cnh-viewbar";
    document.body.appendChild(bar);

    // 悬浮按钮
    var fab = document.createElement("button");
    fab.className = "cnh-fab"; fab.id = "cnh-fab";
    fab.innerHTML = '<svg viewBox="0 0 24 24"><path d="M9.5 4C5.36 4 2 6.91 2 10.5c0 2.02 1.07 3.82 2.74 5.01L4 18.5l2.74-1.49c.86.24 1.78.37 2.76.37l.5-.01a5.6 5.6 0 0 1-.25-1.62c0-3.18 3.02-5.62 6.75-5.62.25 0 .49.01.73.04C16.46 6.36 13.32 4 9.5 4Zm-2.4 4.2a.95.95 0 1 1 0 1.9.95.95 0 0 1 0-1.9Zm4.8 0a.95.95 0 1 1 0 1.9.95.95 0 0 1 0-1.9ZM16.5 11c-3.04 0-5.5 1.97-5.5 4.4 0 2.42 2.46 4.4 5.5 4.4.7 0 1.37-.1 1.99-.29L20 20.5l-.55-1.66A4.27 4.27 0 0 0 22 15.4c0-2.43-2.46-4.4-5.5-4.4Zm-1.9 2.9a.8.8 0 1 1 0 1.6.8.8 0 0 1 0-1.6Zm3.8 0a.8.8 0 1 1 0 1.6.8.8 0 0 1 0-1.6Z"/></svg><span id="cnh-fab-t"></span>';
    document.body.appendChild(fab);

    // 弹窗
    var mask = document.createElement("div");
    mask.className = "cnh-mask"; mask.id = "cnh-mask";
    mask.innerHTML =
      '<div class="cnh-modal" role="dialog" aria-modal="true">' +
      '<button class="cnh-x" id="cnh-x" aria-label="close">&times;</button>' +
      '<h3 id="cnh-title"></h3><p id="cnh-sub"></p>' +
      '<img class="cnh-qr" id="cnh-qr" src="assets/wechat-qr.png" alt="WeChat QR" />' +
      '<div class="cnh-qrhint" id="cnh-qrhint" style="display:none"></div>' +
      '<div class="cnh-mark"><svg width="15" height="15" viewBox="0 0 24 24" fill="#16a34a"><path d="M9.5 4C5.36 4 2 6.91 2 10.5c0 2.02 1.07 3.82 2.74 5.01L4 18.5l2.74-1.49c.86.24 1.78.37 2.76.37l.5-.01a5.6 5.6 0 0 1-.25-1.62c0-3.18 3.02-5.62 6.75-5.62.25 0 .49.01.73.04C16.46 6.36 13.32 4 9.5 4Z"/></svg> WeChat</div>' +
      '</div>';
    document.body.appendChild(mask);

    // 缺图兜底
    var qr = document.getElementById("cnh-qr");
    qr.addEventListener("error", function () {
      qr.style.display = "none";
      var hint = document.getElementById("cnh-qrhint");
      hint.style.display = "flex"; hint.textContent = T("partner.hint");
    });

    // 交互
    function open() { mask.classList.add("show"); }
    function close() { mask.classList.remove("show"); }
    fab.addEventListener("click", open);
    document.getElementById("cnh-x").addEventListener("click", close);
    mask.addEventListener("click", function (e) { if (e.target === mask) close(); });
    document.addEventListener("keydown", function (e) { if (e.key === "Escape") close(); });

    // ---- 赞赏提示：累计浏览满 5 分钟，温和弹出一次「自愿赞赏」，可关闭且不再打扰 ----
    var pay = document.createElement("div");
    pay.className = "cnh-pay-mask"; pay.id = "cnh-pay-mask";
    pay.innerHTML =
      '<div class="cnh-pay" role="dialog" aria-modal="true">' +
      '<button class="cnh-payx" id="cnh-pay-x" aria-label="close">&times;</button>' +
      '<div class="emoji">☕</div>' +
      '<h3 id="cnh-pay-title"></h3>' +
      '<div class="psub" id="cnh-pay-sub"></div>' +
      '<img class="pqr" id="cnh-pay-qr" src="assets/alipay-qr.png" alt="赞赏码" />' +
      '<div class="pqrhint" id="cnh-pay-qrhint" style="display:none"></div>' +
      '<div class="pali" id="cnh-pay-ali"></div>' +
      '<button class="punlock" id="cnh-pay-ok"></button>' +
      '</div>';
    document.body.appendChild(pay);
    var payqr = document.getElementById("cnh-pay-qr");
    payqr.addEventListener("error", function () { payqr.style.display = "none"; var h = document.getElementById("cnh-pay-qrhint"); h.style.display = "flex"; h.textContent = T("pay.hint"); });

    var SEEN_KEY = "cnh_tip_seen", MS_KEY = "cnh_browse_ms", LIMIT_MS = 5 * 60 * 1000;
    var browsed = parseInt(localStorage.getItem(MS_KEY) || "0", 10) || 0;
    function seen() { return localStorage.getItem(SEEN_KEY) === "1"; }
    function dismiss() { try { localStorage.setItem(SEEN_KEY, "1"); } catch (e) {} pay.classList.remove("show"); }
    function showTip() { paint(); pay.classList.add("show"); }
    document.getElementById("cnh-pay-x").addEventListener("click", dismiss);
    document.getElementById("cnh-pay-ok").addEventListener("click", dismiss);
    pay.addEventListener("click", function (e) { if (e.target === pay) dismiss(); });
    document.addEventListener("keydown", function (e) { if (e.key === "Escape" && pay.classList.contains("show")) dismiss(); });
    if (!seen()) {
      var tipTmr = setInterval(function () {
        if (seen()) { clearInterval(tipTmr); pay.classList.remove("show"); return; }
        if (document.visibilityState && document.visibilityState !== "visible") return;
        browsed += 1000; try { localStorage.setItem(MS_KEY, String(browsed)); } catch (e) {}
        if (browsed >= LIMIT_MS) { showTip(); clearInterval(tipTmr); }
      }, 1000);
    }

    paint();
    window.addEventListener("langchange", paint);
    // busuanzi 异步回填后刷新一次浏览量显示
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
    // busuanzi 取值容器（隐藏），供其异步回填
    html += '<span style="display:none"><span id="busuanzi_value_site_pv"></span><span id="busuanzi_value_site_uv"></span></span>';
    bar.innerHTML = html;
  }
  function paint() {
    document.getElementById("cnh-fab-t").textContent = T("partner");
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
      document.getElementById("cnh-pay-ok").textContent = T("pay.ok");
      var ph = document.getElementById("cnh-pay-qrhint");
      if (ph && ph.style.display !== "none") ph.textContent = T("pay.hint");
    }
    paintViews();
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", buildDOM);
  else buildDOM();
})();
