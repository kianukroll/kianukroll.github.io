<template>
  <section id="cv" class="border-hairline border-t py-20 lg:py-28">
    <h2 class="text-cream-100 font-serif text-3xl font-bold sm:text-4xl">
      {{ localize(content.title) }}
    </h2>
    <a
      href="/cv"
      class="border-hairline bg-navy-800/60 hover:border-accent-500 mt-12 block rounded-lg border p-6 transition-colors"
    >
      <div class="flex flex-col justify-between gap-5 sm:flex-row sm:items-center">
        <div>
          <h3 class="text-cream-100 font-serif text-xl font-semibold">
            {{ localize(content.cardTitle) }}
          </h3>
          <p class="text-cream-500 mt-2 max-w-2xl text-sm leading-relaxed">
            {{ localize(content.description) }}
          </p>
        </div>
        <span class="text-accent-300 shrink-0 font-mono text-sm">
          {{ localize(content.action) }} <span aria-hidden="true">→</span>
        </span>
      </div>
    </a>
    <div class="mt-4 grid gap-4 md:grid-cols-2">
      <a
        v-for="variant in specializedVariants"
        :key="variant.id"
        :href="variant.path"
        class="border-hairline bg-navy-800/30 hover:border-accent-500 block rounded-lg border p-5 transition-colors"
      >
        <p class="text-accent-300 font-mono text-xs">
          {{ localize(derivedLabel) }}
        </p>
        <h3 class="text-cream-100 mt-2 font-serif text-lg font-semibold">
          {{ localize(variant.title) }}
        </h3>
        <p class="text-cream-500 mt-2 text-sm leading-relaxed">
          {{ localize(variant.description) }}
        </p>
        <span class="text-accent-300 mt-4 inline-block font-mono text-sm">
          {{ localize(content.action) }} <span aria-hidden="true">→</span>
        </span>
      </a>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useLocale } from '@/composables/useLocale';
import { cvVariants } from '@/data/cv';

const { localize } = useLocale();
const derivedLabel = { en: 'Derived CV', de: 'Abgeleiteter CV' };
const specializedVariants = cvVariants.filter((variant) => variant.id !== 'general');
const content = {
  title: { en: 'Curriculum Vitae', de: 'Curriculum Vitae' },
  cardTitle: { en: 'View full CV', de: 'Vollständigen CV ansehen' },
  description: {
    en: 'A focused, print-ready overview of professional experience, selected projects, education, and technical skills.',
    de: 'Eine fokussierte, druckfreundliche Übersicht über Berufserfahrung, ausgewählte Projekte, Ausbildung und technische Kenntnisse.',
  },
  action: { en: 'Open CV', de: 'CV öffnen' },
};
</script>
