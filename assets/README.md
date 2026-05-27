# assets

放置站点静态资源。

## wechat-qr.png（合作沟通二维码）

「合作沟通」弹窗会显示本目录下的 `wechat-qr.png`（微信二维码）。

**请把你的微信二维码图片保存为 `assets/wechat-qr.png`** 并提交：

```bash
# 将二维码图片放到此处后
git add assets/wechat-qr.png && git commit -m "添加合作沟通微信二维码" && git push
```

未放置时，弹窗会显示一条占位提示（不会报错），放入图片后自动显示。
建议尺寸 ≥ 240×240 的方形 PNG。

## wxskm.jpg（微信赞赏码）

访客累计浏览满 2 分钟后，会温和弹出一次「自愿赞赏」弹窗，显示本目录下的 `wxskm.jpg`（微信收款码）。

**请把你的微信收款码图片保存为 `assets/wxskm.jpg`** 并提交：

```bash
git add assets/wxskm.jpg && git commit -m "添加微信赞赏码" && git push
```

同样地，缺图时弹窗显示占位提示、不报错；这是**纯自愿赞赏**，不限制浏览、不收费、关闭后不再打扰。

## og-cover.png（社交分享封面 1200×630）

各页 `<head>` 的 `og:image` / `twitter:image` 引用本图。分享到微信 / X / 即刻 / LinkedIn 等平台时显示的大图卡片就是它。
由 ImageMagick 生成（品牌渐变 + 中英文标语），如需改版可重跑生成命令或直接替换同名文件，尺寸保持 1200×630。

## favicon.svg（站点图标）

各页 `<link rel="icon">` 引用，浏览器标签页 / 收藏夹显示的小图标（紫色渐变方块 + “链”字）。

