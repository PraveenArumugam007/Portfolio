import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://praveena.github.io',
  base: '/Portfolio/',
  markdown: {
    syntaxHighlight: 'shiki',
  },
});
