// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  // The final URL of your deployed site (used for the sitemap, canonical
  // links and Open Graph tags). Update this to your real domain.
  //
  //   GitHub *user/org* page:  https://<username>.github.io
  //   GitHub *project* page:   https://<username>.github.io/<repo>/
  site: 'https://example.com',

  // When you deploy to a GitHub *project* page (not a user/org page),
  // set this to '/<repo>/' so all asset and page URLs are prefixed.
  // For a user/org page leave it as '/'.
  base: '/',

  trailingSlash: 'ignore',
  build: { format: 'directory' },

  integrations: [sitemap()],
});
