<template>
  <aside
    class="border-hairline lg:border-hairline flex flex-col justify-between gap-10 border-b py-10 lg:sticky lg:top-0 lg:h-screen lg:w-72 lg:shrink-0 lg:border-r lg:border-b-0 lg:py-16 lg:pr-10 xl:w-80"
  >
    <div>
      <h2 class="text-cream-100 font-serif text-2xl font-bold">{{ profile.name }}</h2>
      <p class="text-cream-300 mt-1 font-serif text-base">{{ localize(profile.role) }}</p>
      <p class="text-cream-500 mt-4 max-w-xs text-sm leading-relaxed">
        {{ localize(profile.motto) }}
      </p>

      <nav class="mt-10 hidden lg:block" :aria-label="localize(sectionNavigation)">
        <ul class="space-y-4">
          <li v-for="item in navItems" :key="item.id">
            <a
              :href="`#${item.id}`"
              class="group flex items-center gap-3 font-mono text-xs tracking-widest uppercase transition-colors"
              :class="
                activeId === item.id ? 'text-cream-100' : 'text-cream-500 hover:text-cream-100'
              "
            >
              <span
                class="h-px transition-all"
                :class="
                  activeId === item.id
                    ? 'bg-accent-400 w-10'
                    : 'bg-hairline group-hover:bg-accent-400 w-5 group-hover:w-8'
                "
              />
              {{ localize(item.label) }}
            </a>
          </li>
        </ul>
      </nav>
    </div>

    <SocialLinks />
  </aside>
</template>

<script setup lang="ts">
import { useActiveSection } from '@/composables/useActiveSection';
import SocialLinks from '@/components/SocialLinks.vue';
import { profile } from '@/data/profile';
import { useLocale } from '@/composables/useLocale';

const { localize } = useLocale();
const sectionNavigation = { en: 'Section', de: 'Abschnitt' };
const navItems = [
  { id: 'about', label: { en: 'About', de: 'Über mich' } },
  { id: 'cv', label: { en: 'Curriculum Vitae', de: 'Curriculum Vitae' } },
  { id: 'projects', label: { en: 'Projects', de: 'Projekte' } },
  { id: 'certificates', label: { en: 'Certificates', de: 'Zertifikate' } },
] as const;

const activeId = useActiveSection(navItems.map((item) => item.id));
</script>
