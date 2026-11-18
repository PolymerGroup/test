---
title: Why we went headless
slug: why-we-went-headless
description: Static sites are faster, cheaper and more secure — here is why we moved.
pubDate: 2026-01-12
tags: ["architecture"]
draft: false
---

The idea behind a **headless** site is simple: separate the *content* from the
*front end*, and serve the result as static files.

## What "headless" actually means

- No application server to run or patch.
- No database to maintain or back up.
- Content stored as plain files (Markdown/JSON) in Git, or in a headless CMS.

## Why it matters

1. **Speed** — pages are pre-built HTML served from a CDN.
2. **Security** — there is no dynamic surface to attack.
3. **Cost** — static hosting (GitHub Pages, Cloudflare Pages, Netlify) is free or nearly so.

This starter uses Astro to generate the HTML at build time, Pagefind to add
search without a server, and Formspree for the one dynamic feature every site
needs — a contact form.
