---
title: Shipping a static site to GitHub Pages
slug: shipping-a-static-site-to-github-pages
description: A step-by-step guide to deploying an Astro site to GitHub Pages for free.
pubDate: 2026-02-03
tags: ["deployment", "github"]
draft: false
---

GitHub Pages hosts static sites for free, straight from a repository. This
starter ships with a workflow that builds and deploys automatically.

## Steps

1. Push this project to a new GitHub repository.
2. In the repo, open **Settings → Pages**.
3. Under **Build and deployment**, set **Source** to **GitHub Actions**.
4. Push to `main` — the workflow runs `astro build` and deploys `dist/`.

## Project pages vs user pages

- **User/org page** (`username.github.io`): keep `base: '/'` in `astro.config.mjs`.
- **Project page** (`username.github.io/repo`): set `base: '/repo/'`.

The build output is plain HTML, CSS and JS — no server, no runtime, just files.
