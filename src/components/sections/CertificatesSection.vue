<template>
  <section id="certificates" class="border-hairline border-t py-20 lg:py-28">
    <h2 class="text-cream-100 font-serif text-3xl font-bold sm:text-4xl">
      {{ localize(sectionTitle) }}
    </h2>
    <div class="mt-12 grid gap-8 sm:grid-cols-2">
      <article
        v-for="category in certificates"
        :key="category.id"
        class="border-hairline bg-navy-800/60 hover:border-accent-500 rounded-lg border p-6 transition-colors"
      >
        <h3 class="text-accent-400 font-mono text-xs tracking-wide uppercase">
          {{ localize(category.label) }}
        </h3>
        <ul class="divide-hairline mt-4 divide-y">
          <li v-for="item in category.items" :key="item.id" class="py-3 first:pt-0 last:pb-0">
            <div class="flex items-baseline justify-between gap-4">
              <p class="text-cream-100 flex flex-wrap items-center gap-2 text-sm font-medium">
                {{ localize(item.label) }}
                <span
                  v-if="item.upcoming"
                  class="border-accent-500/40 bg-accent-500/10 text-accent-300 rounded-full border px-2 py-0.5 font-mono text-[0.65rem] tracking-wide uppercase"
                >
                  {{ localize(certificateLabels.upcoming) }}
                </span>
                <a
                  v-if="item.verificationLink"
                  :href="item.verificationLink"
                  target="_blank"
                  rel="noreferrer noopener"
                  class="text-accent-400 hover:text-accent-300 ml-1"
                  :aria-label="localize(certificateLabels.verify)"
                >
                  <span aria-hidden="true">&#8599;</span>
                </a>
              </p>
              <p v-if="item.validFrom" class="text-cream-500 shrink-0 font-mono text-xs">
                {{ localize(certificateLabels.since) }} {{ item.validFrom }}
              </p>
            </div>
            <p v-if="item.subLabel" class="text-cream-500 mt-1 text-xs italic">
              {{ localize(item.subLabel) }}
            </p>
          </li>
        </ul>
      </article>
    </div>
  </section>
</template>

<script setup lang="ts">
import { certificates } from '@/data/certificates';
import { useLocale } from '@/composables/useLocale';

const { localize } = useLocale();
const sectionTitle = { en: 'Certificates', de: 'Zertifikate' };
const certificateLabels = {
  upcoming: { en: 'Upcoming · 01/2027', de: 'Bevorstehend · 01/2027' },
  verify: { en: 'Verify', de: 'Verifizieren' },
  since: { en: 'Since', de: 'Seit' },
};
</script>
