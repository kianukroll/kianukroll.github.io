<template>
  <div
    class="border-hairline inline-flex items-center gap-1 rounded-full border p-0.5 font-mono text-xs"
    role="group"
    :aria-label="localize(ui.languageToggleLabel)"
  >
    <button
      v-for="loc in availableLocales"
      :key="loc"
      type="button"
      class="rounded-full px-2.5 py-1 transition-colors"
      :class="
        currentLocale === loc
          ? 'bg-accent-600 text-cream-100'
          : 'text-cream-500 hover:text-cream-100'
      "
      :aria-pressed="currentLocale === loc"
      @click="setLocale(loc)"
    >
      {{ localize(ui.language[loc]) }}
    </button>
  </div>
</template>

<script setup lang="ts">
import { useLocale } from '@/composables/useLocale';

const { currentLocale, setLocale, availableLocales, localize } = useLocale();
const ui = {
  languageToggleLabel: { en: 'Switch language', de: 'Sprache wechseln' },
  language: {
    en: { en: 'EN', de: 'EN' },
    de: { en: 'DE', de: 'DE' },
  },
};
</script>
