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
