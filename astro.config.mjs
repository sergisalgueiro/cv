import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import { loadEnv } from 'vite';

// Load SITE_URL from .env if present, fallback to production domain
const { SITE_URL = 'https://sergisalgueiro.pages.dev' } = loadEnv(
  process.env.NODE_ENV ?? '',
  process.cwd(),
  ''
);

// https://astro.build/config
export default defineConfig({
  // Production URL for canonical links, sitemap, and robots.txt
  // Overridable via SITE_URL in .env
  site: process.env.SITE_URL || SITE_URL,
  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
    sitemap({
      i18n: {
        defaultLocale: 'en',
        locales: {
          en: 'en',
          ca: 'ca',
          es: 'es',
        },
      },
      changefreq: 'monthly',
      priority: 0.8,
      lastmod: new Date(),
    }),
  ],
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'ca', 'es'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
});

