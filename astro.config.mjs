import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import vercel from '@astrojs/vercel/serverless';


// https://astro.build/config
export default defineConfig({
  site: 'https://example.com',
  output: 'server',
  adapter: vercel(),
  integrations: [sitemap(), tailwind()]
});