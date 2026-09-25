# share.easyaistudy.cn

Public static pages at **https://share.easyaistudy.cn/**

## How it works

- Cloudflare Worker `share-web` serves files from `dist/`
- Custom domain: `share.easyaistudy.cn` (auto HTTPS)
- Source repo: this repository (`DreamFox/share`)

> Note: Cloudflare Pages project `share` also exists as a backup experiment (`*.pages.dev`), but the **live custom domain is bound to the Worker** because the API token can create Worker domains without Dashboard DNS access.

## Publish a new page

1. Add a folder under `dist/` (ASCII names recommended), e.g. `dist/ai-venture/index.html`
2. Keep links **relative** inside each mini-site
3. Deploy:

```bash
export CLOUDFLARE_API_TOKEN=$(grep -oE "cfut_SCqNeL4p[A-Za-z0-9_-]+" ~/.cloudflaretoken | head -1)
cd /Users/dreamfox/Documents/share-site
npx -y wrangler@latest deploy
```

4. Open `https://share.easyaistudy.cn/<folder>/`

## Portal

Root `dist/index.html` is the landing page listing / explaining shared sites.
