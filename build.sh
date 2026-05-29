#!/usr/bin/env bash
# ============================================================================
#  build.sh — 生成对外发布目录 dist/
#  仅包含网站运行所需的静态文件；排除数据流水线脚本与项目文档，
#  使它们不会出现在公开网址路径下（仓库本身保持私有）。
#  Cloudflare Pages 配置：Build command = bash build.sh ；Output dir = dist
# ============================================================================
set -e
cd "$(dirname "$0")"

rm -rf dist
mkdir -p dist/assets

# 网站对外需要的文件
cp index.html stats.html companies.html headhunter.html about.html heatmap.html \
   i18n.js flags.js widgets.js mobile.css data.js \
   robots.txt sitemap.xml \
   dist/
[ -f feed.xml ] && cp feed.xml dist/ || true
[ -f news.json ] && cp news.json dist/ || true
# 分页岗位数据块（浏览器并行 fetch 拼成完整列表，描述存 descriptions.json 不发布）
for f in data-jobs-*.json; do [ -e "$f" ] && cp "$f" dist/; done

# 每岗位静态页（供 Google for Jobs / 社交分享落地）
[ -d jobs ] && cp -r jobs dist/ || true

# 图片资源（若存在）：二维码 / OG 分享封面 / favicon
[ -f assets/wechat-qr.png ] && cp assets/wechat-qr.png dist/assets/ || true
[ -f assets/wxskm.jpg ] && cp assets/wxskm.jpg dist/assets/ || true
[ -f assets/og-cover.png ] && cp assets/og-cover.png dist/assets/ || true
[ -f assets/favicon.svg ] && cp assets/favicon.svg dist/assets/ || true

# 缓存/安全响应头：HTML 与每日更新的 data.js / i18n.js 走 no-cache（仍由 ETag 快速校验），保证更新即时可见
cat > dist/_headers <<'EOF'
/*
  X-Content-Type-Options: nosniff
  Referrer-Policy: strict-origin-when-cross-origin
/*.html
  Cache-Control: no-cache
/data.js
  Cache-Control: no-cache
/data-jobs-*.json
  Cache-Control: no-cache
/news.json
  Cache-Control: no-cache
/i18n.js
  Cache-Control: no-cache
/widgets.js
  Cache-Control: no-cache
EOF

echo "✅ dist/ 构建完成（不含 apply_update.mjs / keywords.mjs / *.md 等）："
ls -1 dist
