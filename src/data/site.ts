/**
 * Single source of truth for site-wide content and settings.
 * Change your business name, contact details, address, navigation and
 * social links here — every page reads from this file.
 */

export const site = {
  // Brand
  name: 'Acme',
  tagline: 'A modern, headless static site starter',
  description:
    'A multi-page static website built with Astro, searchable with Pagefind, and deployed to GitHub Pages — zero backend, fully headless.',

  // Deployed URL (used for canonical URLs, sitemap and social images).
  // Must match `site` in astro.config.mjs.
  url: 'https://example.com',

  // <html lang> value, e.g. 'en', 'zh-CN', 'de'.
  lang: 'en',

  // Primary navigation. `href` is root-relative; keep the trailing slash.
  nav: [
    { href: '/', label: 'Home' },
    { href: '/about/', label: 'About' },
    { href: '/products/', label: 'Products' },
    { href: '/blog/', label: 'Blog' },
    { href: '/faq/', label: 'FAQ' },
    { href: '/contact/', label: 'Contact' },
  ],

  // Contact information (replace with your own).
  contact: {
    email: 'hello@example.com',
    phone: '+1 (000) 000-0000',
    address: '123 Example Street, Suite 100, Anytown, XX 00000',
    hours: 'Mon–Fri, 9:00–17:00',
  },

  social: [
    { label: 'GitHub', href: 'https://github.com/' },
    { label: 'X / Twitter', href: 'https://x.com/' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/' },
  ],

  /**
   * Formspree endpoint for the contact form (zero-backend form handling).
   * 1. Create a free form at https://formspree.io
   * 2. Paste its endpoint here, e.g. 'https://formspree.io/f/abcdwxyz'
   * Leave it empty to disable the form and show a mailto fallback instead.
   */
  formEndpoint: '',
};

/** Prefix a root-relative path with Astro's `base` so links work on GitHub project pages. */
export function withBase(path: string): string {
  const base = import.meta.env.BASE_URL ?? '/';
  const trimmed = (path.startsWith('/') ? path : '/' + path);
  return base.replace(/\/$/, '') + trimmed;
}
