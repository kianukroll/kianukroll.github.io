import { fileURLToPath, URL } from 'node:url';
import { mergeConfig } from 'vite';
import { defineConfig as defineVitestConfig } from 'vitest/config';
import viteConfig from './vite.config';

export default mergeConfig(
  viteConfig,
  defineVitestConfig({
    test: {
      environment: 'jsdom',
      globals: true,
      css: true,
      include: ['src/**/*.spec.ts'],
      coverage: {
        provider: 'v8',
        reporter: ['text', 'html'],
      },
    },
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
      },
    },
  }),
);
