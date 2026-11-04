<template>
  <section id="projects" class="border-hairline border-t py-20 lg:py-28">
    <h2 class="text-cream-100 font-serif text-3xl font-bold sm:text-4xl">
      {{ localize(sectionTitle) }}
    </h2>
    <div class="mt-12 grid gap-8 sm:grid-cols-2">
      <article
        v-for="project in projects"
        :key="project.id"
        class="border-hairline bg-navy-800/60 hover:border-accent-500 rounded-lg border p-6 transition-colors"
      >
        <p class="text-accent-400 font-mono text-xs tracking-wide uppercase">
          {{ localize(project.type) }}
        </p>
        <h3 class="text-cream-100 mt-2 font-serif text-xl font-semibold">
          <a
            v-if="project.link"
            :href="project.link"
            target="_blank"
            rel="noreferrer noopener"
            class="hover:text-accent-300 underline-offset-4 transition-colors hover:underline"
          >
            {{ localize(project.name) }} <span aria-hidden="true">&#8599;</span>
          </a>
          <template v-else>{{ localize(project.name) }}</template>
        </h3>
        <ul class="text-cream-500 mt-4 space-y-2 text-sm leading-relaxed">
          <li v-for="(highlight, index) in project.highlights" :key="index" class="flex gap-2">
            <span aria-hidden="true" class="text-accent-400">–</span>{{ localize(highlight) }}
          </li>
        </ul>
        <ul class="mt-5 flex flex-wrap gap-2">
          <li v-for="tech in project.stack" :key="tech">
            <TechBadge :label="tech" />
          </li>
        </ul>
      </article>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useLocale } from '@/composables/useLocale';
import { projects } from '@/data/projects';
import TechBadge from '@/components/TechBadge.vue';

const { localize } = useLocale();
const sectionTitle = { en: 'Projects', de: 'Projekte' };
</script>
