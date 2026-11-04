import { fileURLToPath, URL } from 'node:url';
import { copyFileSync, mkdirSync } from 'node:fs';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import tailwindcss from '@tailwindcss/vite';

// https://vite.dev/config/
export default defineConfig({
  base: '/',
  // Enable history fallback so /imprint/ and /privacy/ work in Vite development.
  // The production build creates matching static GitHub Pages entry points below.
  appType: 'spa',
  plugins: [
    vue(),
    tailwindcss(),
    {
      name: 'generate-github-pages-routes',
      closeBundle() {
        for (const route of ['cv', 'cv/devops', 'cv/software', 'imprint', 'privacy']) {
          const routeFile = fileURLToPath(new URL(`./dist/${route}.html`, import.meta.url));
          mkdirSync(
            fileURLToPath(new URL(`./dist/${route.includes('/') ? 'cv' : ''}`, import.meta.url)),
            {
              recursive: true,
            },
          );
          copyFileSync(fileURLToPath(new URL('./dist/index.html', import.meta.url)), routeFile);
        }
      },
    },
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
});
