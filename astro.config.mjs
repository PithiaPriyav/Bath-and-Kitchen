// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Production site URL — drives canonical, OG and sitemap generation.
export default defineConfig({
  site: 'https://bath-kitchenstudio.com',
  output: 'static',
  integrations: [sitemap()],
  build: {
    format: 'directory',
  },
});
