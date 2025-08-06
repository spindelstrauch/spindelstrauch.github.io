// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import relativeLinks from 'astro-relative-links';

// https://astro.build/config
export default defineConfig({
  output: 'static',
  // site: 'https://spindelstrauch.github.io',
  // base: '/profile-site/',
  integrations: [relativeLinks()],
  compressHTML: false,
  scopedStyleStrategy: 'attribute',
  build: {
    inlineStylesheets: 'never',
    format: 'preserve',
  },
  vite: {
    plugins: [tailwindcss()],
    build: {
      cssMinify: false,
      cssCodeSplit: false,
      rollupOptions: {
        output: {
          assetFileNames: (assetInfo) => {
            const fileName = assetInfo?.names;
            if (fileName && Array.isArray(fileName)) {
              const extType = fileName[0].split('.').at(-1);
              if (extType === 'css') {
                return 'css/[name][extname]';
              }
            }
            return `assets/[name][extname]`;
          },
        },
      },
    },
  },
});
