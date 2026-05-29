/* ============================================================================
 * analytics.js — 统一接入第三方网站统计（异步加载，不阻塞渲染）
 *   - 百度统计（流量来源 / 关键词 / 页面停留 / 简单热力图）
 *   - Microsoft Clarity（点击地图 / 滚动深度 / 会话回放，等 ID 到位再启用）
 *
 * 仅在生产域名（gmjobs.github.io）上报，本地 / 预览不污染统计数据。
 * 浏览器禁用 JS 时各页所有内容仍正常显示；统计脚本失败不影响页面。
 * ========================================================================== */
(function () {
  // 仅生产域名上报
  var host = (location.hostname || "").toLowerCase();
  if (host !== "gmjobs.github.io") return;

  // ---------- 百度统计 ----------
  var BAIDU_ID = "60c7c79ec9b7c1b9d0354f3fe9384614";
  try {
    window._hmt = window._hmt || [];
    var hm = document.createElement("script");
    hm.async = true;
    hm.src = "https://hm.baidu.com/hm.js?" + BAIDU_ID;
    var s = document.getElementsByTagName("script")[0];
    (s && s.parentNode ? s.parentNode : document.head).insertBefore(hm, s || null);
  } catch (e) { /* 上报失败不影响页面 */ }

  // ---------- Microsoft Clarity（等 ID 后取消注释） ----------
  // var CLARITY_ID = "YOUR_CLARITY_ID";
  // (function(c,l,a,r,i,t,y){
  //   c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
  //   t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
  //   y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
  // })(window, document, "clarity", "script", CLARITY_ID);
})();
