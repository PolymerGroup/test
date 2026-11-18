# Astro Headless Site

一个「**现代前端 + 静态托管 + 零后端（Headless）**」的多页面网站模板。

- **框架**：[Astro](https://astro.build)（构建时生成纯静态 HTML/CSS/JS）
- **托管**：[GitHub Pages](https://pages.github.com)（免费，自动部署）
- **站内搜索**：[Pagefind](https://pagefind.app)（构建时索引，无需服务器）
- **联系表单**：[Formspree](https://formspree.io)（零后端表单，填一个 endpoint 即可）
- **内容**：全部是普通 Markdown 文件，改文件即改内容

> 说明：本模板里所有品牌名、联系方式、地址、商品和文章都是**占位示例**，请替换成你自己的合法内容。没有一处复用任何第三方站点的联系方式或地址。

---

## 目录结构

```
astro-headless-site/
├── .github/workflows/deploy.yml   # GitHub Pages 自动部署
├── astro.config.mjs               # 站点 URL、base 路径、集成
├── public/                        # 静态资源（favicon、og、robots）
└── src/
    ├── data/site.ts               # ★ 全站配置（品牌/导航/联系方式/表单）
    ├── styles/global.css          # ★ 设计系统（改 CSS 变量即可换肤）
    ├── layouts/BaseLayout.astro   # 页面外壳（head、头部、页脚）
    ├── components/                # Header、Footer、ProductCard、Search、ContactForm
    ├── pages/                     # 路由：首页 / 关于 / 商品 / 博客 / FAQ / 联系 / 404
    └── content/                   # ★ Markdown 内容（products/ 与 blog/）
```

## 页面清单

| 路径 | 说明 |
| --- | --- |
| `/` | 首页（Hero + 搜索 + 特性 + 精选商品 + 博客 + CTA） |
| `/about/` | 关于我们 |
| `/products/` | 商品列表（含搜索） |
| `/products/<slug>/` | 商品详情（由 Markdown 自动生成） |
| `/blog/` | 博客列表 |
| `/blog/<slug>/` | 文章详情（由 Markdown 自动生成） |
| `/faq/` | 常见问题 |
| `/contact/` | 联系方式 + 表单 |
| `/404` | 404 页面 |

---

## 本地运行

需要 Node.js 18.17+（推荐 20）和 pnpm。

```bash
cd astro-headless-site
pnpm install
pnpm dev        # 本地预览 http://localhost:4321
pnpm build      # 生成静态文件到 dist/，并运行 Pagefind 索引
pnpm preview    # 本地预览构建产物
```

---

## 改成你自己的内容

### 1. 品牌、导航、联系方式、地址

打开 [`src/data/site.ts`](src/data/site.ts)，改这一个文件即可：

```ts
export const site = {
  name: '你的品牌名',
  tagline: '一句话标语',
  description: '站点描述',
  url: 'https://你的域名',       // 与 astro.config.mjs 的 site 保持一致
  lang: 'zh-CN',
  nav: [ /* 导航 */ ],
  contact: {
    email: 'hi@你的域名',
    phone: '+86 …',
    address: '你的地址',
    hours: '营业时间',
  },
  social: [ /* 社交链接 */ ],
  formEndpoint: '',               // 见下方「表单」
};
```

### 2. 商品 / 文章

直接增删 [`src/content/products/`](src/content/products/) 与 [`src/content/blog/`](src/content/blog/) 里的 Markdown 文件。每个文件的 frontmatter 就是数据结构：

```yaml
---
title: 商品名
slug: product-slug        # 用于生成 URL，保持唯一
description: 一句话描述
price: "$24.00"
sku: ACM-001
tags: ["分类"]
icon: "☕"                 # 一个 emoji，作为占位图
featured: true            # 是否在首页展示
order: 1
specs:                    # 详情页规格表（可选）
  容量: 300 ml
---
正文（详情页的「Details」区块）
```

### 3. 换肤 / 改外观

打开 [`src/styles/global.css`](src/styles/global.css)，顶部 `:root` 里是全部颜色、圆角、阴影等设计变量，改几行就能整体换肤（已内置暗色模式，跟随系统）。

---

## 部署到 GitHub Pages

1. 在 GitHub 新建仓库，把本目录推上去：
   ```bash
   git init
   git add .
   git commit -m "init"
   git branch -M main
   git remote add origin https://github.com/<你>/<仓库>.git
   git push -u origin main
   ```
2. 打开仓库 **Settings → Pages**。
3. **Build and deployment** 的 **Source** 选 **GitHub Actions**。
4. 每次 push 到 `main`，工作流会自动 `pnpm build` 并部署。

### 用户主页 vs 项目主页

- **用户/组织主页**（`username.github.io`）：`astro.config.mjs` 里保持 `base: '/'`，`site` 填 `https://username.github.io`。
- **项目主页**（`username.github.io/仓库名`）：把 `base` 改为 `'/仓库名/'`，`site` 填 `https://username.github.io`（base 前缀会由 `withBase()` 自动加到所有链接上）。

---

## 两个「无头」能力怎么接

### 搜索（Pagefind，已内置）

`pnpm build` 后会自动对 `dist/` 建索引。构建产物里会多出 `dist/pagefind/`，前端已接好搜索框，**无需任何配置**。

### 表单（Formspree，填一个值）

1. 到 [formspree.io](https://formspree.io) 免费注册，新建一个表单。
2. 把得到的 endpoint（形如 `https://formspree.io/f/xxxx`）填进 `src/data/site.ts` 的 `formEndpoint`。
3. 提交的表单会直接发到你的邮箱，**无需后端**。留空则自动降级为 mailto 链接。

---

## 可选扩展

- **接入无头 CMS**：内容已是纯 Markdown，可再接 [Decap CMS](https://decapcms.org)（自带 `/admin/` 编辑界面，改动直接提交回 Git）或 TinaCMS。
- **购物车**：静态站想要购物车，可接 [Snipcart](https://snipcart.com) 等前端结算服务（仍是无头，无需自建后端）。
- **RSS / 站点地图**：已通过 `@astrojs/sitemap` 自动生成站点地图。
- **加页面**：在 `src/pages/` 下新建 `xxx.astro`，并在 `src/data/site.ts` 的 `nav` 里加一项即可。

## 技术栈说明（为什么是「零后端」）

构建时 Astro 把所有页面预渲染成静态 HTML；搜索用 Pagefind 在构建时生成索引；表单用 Formspree 的第三方服务。部署到 GitHub Pages 后，服务器上只有静态文件——没有运行中的后端进程、没有数据库，因而更快、更安全、几乎零维护。
