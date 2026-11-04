<template>
  <footer class="border-hairline mt-10 border-t py-10 text-center">
    <p class="text-cream-500 font-mono text-xs">
      {{ localize(footer.text).replace('{name}', profile.name) }}
    </p>
    <a
      href="#about"
      class="text-accent-300 hover:text-accent-100 mt-4 inline-block font-mono text-xs transition-colors"
    >
      {{ localize(footer.backToTop) }}
    </a>
    <nav
      class="mt-4 flex justify-center gap-4 font-mono text-xs"
      :aria-label="localize(footer.legalNavigation)"
    >
      <a href="/imprint" class="text-cream-500 hover:text-accent-300 transition-colors">
        {{ localize(footer.imprint) }}
      </a>
      <a href="/privacy" class="text-cream-500 hover:text-accent-300 transition-colors">
        {{ localize(footer.privacy) }}
      </a>
    </nav>
  </footer>
</template>

<script setup lang="ts">
import { profile } from '@/data/profile';
import { useLocale } from '@/composables/useLocale';

const { localize } = useLocale();
const footer = {
  text: {
    en: 'Built with Vue 3, TypeScript & Tailwind CSS. Deployed via GitHub Actions.',
    de: 'Gebaut mit Vue 3, TypeScript & Tailwind CSS. Deployt über GitHub Actions.',
  },
  backToTop: { en: 'Back to top', de: 'Nach oben' },
  legalNavigation: { en: 'Legal information', de: 'Rechtliche Informationen' },
  imprint: { en: 'Imprint', de: 'Impressum' },
  privacy: { en: 'Privacy', de: 'Datenschutz' },
};
</script>
