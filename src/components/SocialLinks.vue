<template>
  <ul class="flex items-center gap-4" :class="vertical ? 'flex-col' : 'flex-row'">
    <li v-for="link in links" :key="link.key">
      <a
        :href="link.href"
        :aria-label="localize(link.label)"
        target="_blank"
        rel="noreferrer noopener"
        class="text-cream-500 hover:text-accent-300 transition-colors"
      >
        <IconGlyph :name="link.key" />
      </a>
    </li>
  </ul>
</template>

<script setup lang="ts">
import IconGlyph from '@/components/IconGlyph.vue';
import { profile } from '@/data/profile';
import { useLocale } from '@/composables/useLocale';

withDefaults(defineProps<{ vertical?: boolean }>(), { vertical: false });

const { localize } = useLocale();

const links = [
  { key: 'linkedin', href: profile.linkedinUrl, label: { en: 'LinkedIn', de: 'LinkedIn' } },
  { key: 'github', href: profile.githubUrl, label: { en: 'GitHub', de: 'GitHub' } },
] as const;
</script>
