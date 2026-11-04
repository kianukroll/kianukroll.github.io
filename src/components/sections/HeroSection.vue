<template>
  <header
    id="about"
    class="relative flex min-h-screen flex-col overflow-hidden px-6 py-6 sm:px-10 lg:px-16"
  >
    <span
      aria-hidden="true"
      class="bg-hairline pointer-events-none absolute bottom-10 left-6 hidden h-16 w-px sm:left-10 lg:left-16 lg:block"
    />
    <span
      aria-hidden="true"
      class="bg-hairline pointer-events-none absolute right-6 bottom-10 hidden h-16 w-px sm:right-10 lg:right-16 lg:block"
    />

    <nav
      class="flex items-center justify-between gap-4 py-2"
      :aria-label="localize(hero.primaryNavigation)"
    >
      <div class="hidden items-center gap-8 md:flex">
        <a
          v-for="(item, index) in navItems"
          :key="item.id"
          :href="item.href"
          class="text-cream-500 hover:text-accent-300 font-mono text-xs transition-colors"
        >
          <span class="text-accent-400">0{{ index + 1 }}.</span>
          {{ localize(item.label) }}
        </a>
      </div>
      <div class="flex items-center gap-4">
        <LanguageToggle />
      </div>
    </nav>

    <div class="flex flex-1 flex-col justify-center gap-5 py-16 sm:max-w-xl lg:max-w-2xl">
      <p class="text-accent-400 font-mono text-sm">{{ localize(hero.intro) }}</p>
      <h1 class="text-cream-100 font-serif text-4xl leading-tight font-bold sm:text-6xl">
        {{ localize(hero.headline) }}
      </h1>
      <p class="text-cream-300 font-serif text-2xl leading-tight sm:text-4xl">
        {{ localize(hero.subheadline) }}
      </p>
      <p class="text-cream-500 max-w-prose text-base leading-relaxed sm:text-lg">
        {{ localize(hero.text) }}
      </p>
      <SocialLinks class="pt-2" />
    </div>
  </header>
</template>

<script setup lang="ts">
import LanguageToggle from '@/components/LanguageToggle.vue';
import SocialLinks from '@/components/SocialLinks.vue';
import { useLocale } from '@/composables/useLocale';

const { localize } = useLocale();

const hero = {
  intro: { en: 'Hi, my name is', de: 'Hallo, ich bin' },
  headline: { en: 'Kianu - Thomé Kroll', de: 'Kianu - Thomé Kroll' },
  subheadline: {
    en: 'DevOps & Software Engineer',
    de: 'DevOps- & Softwareentwickler',
  },
  text: {
    en: 'with production experience, accelerated apprenticeship, and a self-hosted homelab. I design, build, test, ship and operate — end to end.',
    de: 'mit Praxiserfahrung, verkürzter Ausbildung und eigenem Homelab. Ich entwerfe, entwickle, teste, veröffentliche und betreibe Software und Infrastruktur — von Anfang bis Ende.',
  },
  primaryNavigation: { en: 'Primary', de: 'Hauptnavigation' },
};

const navItems = [
  { id: 'about', href: '#about', label: { en: 'About', de: 'Über mich' } },
  { id: 'cv', href: '#cv', label: { en: 'Curriculum Vitae', de: 'Curriculum Vitae' } },
  { id: 'projects', href: '#projects', label: { en: 'Projects', de: 'Projekte' } },
  { id: 'certificates', href: '#certificates', label: { en: 'Certificates', de: 'Zertifikate' } },
] as const;
</script>
