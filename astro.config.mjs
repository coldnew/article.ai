import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

export default defineConfig({
  site: 'https://coldnew.github.io/article.ai/',
  base: '/article.ai',
  integrations: [mdx()],
  output: 'static',
});
