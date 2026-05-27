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
cp index.html stats.html companies.html headhunter.html \
   i18n.js widgets.js mobile.css data.js \
   dist/

# 二维码图片（若存在）
[ -f assets/wechat-qr.png ] && cp assets/wechat-qr.png dist/assets/ || true

# 缓存/安全响应头：HTML 与每日更新的 data.js / i18n.js 走 no-cache（仍由 ETag 快速校验），保证更新即时可见
cat > dist/_headers <<'EOF'
/*
  X-Content-Type-Options: nosniff
  Referrer-Policy: strict-origin-when-cross-origin
/*.html
  Cache-Control: no-cache
/data.js
  Cache-Control: no-cache
/i18n.js
  Cache-Control: no-cache
/widgets.js
  Cache-Control: no-cache
EOF

echo "✅ dist/ 构建完成（不含 apply_update.mjs / keywords.mjs / *.md 等）："
ls -1 dist
