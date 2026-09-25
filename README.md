# share.easyaistudy.cn

Cloudflare Pages 静态分享站点。

- 线上访问：**https://share.easyaistudy.cn/**
- 托管平台：**Cloudflare Pages**（项目名 `share`，自定义域 `share.easyaistudy.cn`）
- 源码仓库：**https://github.com/DreamFox/share**

## 目录结构规划

```text
share-site/
├── index.html                  # 门户主页（https://share.easyaistudy.cn/）
├── README.md
├── ai-venture/                 # 例如：北大《AI创业与投资》系列
│   ├── index.html
│   ├── 20260909-wangxiaochuan/
│   ├── 20260916-zhuxiaohu/
│   └── 20260923-liuyong/
└── <topic>/                    # 任何其他想公开分享的静态网页或专题
    └── index.html
```

## 本地��键发布命令

把新页面放入对应目录后，在 `share-site` 根目录执行：

```bash
export CLOUDFLARE_API_TOKEN=$(grep -oE "cfut_SCqNeL4p[A-Za-z0-9_-]+" ~/.cloudflaretoken | head -1)
export CLOUDFLARE_ACCOUNT_ID=c1689375f424f5fba0d3e8b580018895
cd /Users/dreamfox/Documents/share-site
npx -y wrangler@latest pages deploy . --project-name=share --branch=main --commit-dirty=true
```

同时推送到 GitHub 备份：

```bash
git add -A && git commit -m "Add new share page" && git push origin main
```
