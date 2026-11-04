<template>
  <a href="#main-content" class="skip-link">{{ localize(ui.skipToContent) }}</a>

  <template v-if="currentPage === 'home'">
    <HeroSection />

    <div class="mx-auto flex max-w-350 flex-col gap-4 px-6 sm:px-10 lg:flex-row lg:gap-16 lg:px-16">
      <SidebarProfile />
      <main id="main-content" class="min-w-0 flex-1">
        <CvSection />
        <ProjectsSection />
        <CertificatesSection />
        <TheFooter />
      </main>
    </div>
  </template>

  <main v-else id="main-content">
    <div class="mx-auto flex max-w-3xl justify-end px-6 pt-6 sm:px-10 lg:px-16 print:hidden">
      <LanguageToggle />
    </div>
    <Imprint v-if="currentPage === 'imprint'" />
    <PrivacyPolicy v-else-if="currentPage === 'privacy'" />
    <CV v-else :variant-id="cvVariantId" />
    <div
      class="mx-auto max-w-3xl px-6 sm:px-10 lg:px-16"
      :class="{ 'cv-footer': currentPage === 'cv' }"
    >
      <TheFooter />
    </div>
  </main>
</template>

<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref } from 'vue';
import { useLocale } from '@/composables/useLocale';
import HeroSection from '@/components/sections/HeroSection.vue';
import SidebarProfile from '@/components/SidebarProfile.vue';
import ProjectsSection from '@/components/sections/ProjectsSection.vue';
import CertificatesSection from '@/components/sections/CertificatesSection.vue';
import CvSection from '@/components/sections/CvSection.vue';
import TheFooter from '@/components/TheFooter.vue';
import Imprint from '@/components/Imprint.vue';
import PrivacyPolicy from '@/components/PrivacyPolicy.vue';
import CV from '@/components/CV.vue';
import LanguageToggle from '@/components/LanguageToggle.vue';
import type { CvVariantId } from '@/data/cv';

const { currentLocale, setLocale, localize } = useLocale();
const ui = {
  skipToContent: { en: 'Skip to content', de: 'Zum Inhalt springen' },
};
const pathname = ref(typeof window === 'undefined' ? '/' : window.location.pathname);
const currentPage = computed<'home' | 'imprint' | 'privacy' | 'cv'>(() => {
  if (pathname.value === '/imprint') return 'imprint';
  if (pathname.value === '/privacy') return 'privacy';
  if (
    pathname.value === '/cv' ||
    pathname.value === '/cv/devops' ||
    pathname.value === '/cv/software'
  ) {
    return 'cv';
  }
  return 'home';
});
const cvVariantId = computed<CvVariantId>(() => {
  if (pathname.value === '/cv/devops') return 'devops';
  if (pathname.value === '/cv/software') return 'software';
  return 'general';
});

function updateRoute(): void {
  pathname.value = window.location.pathname;
  window.scrollTo({ top: 0, behavior: 'auto' });
}

onMounted(() => {
  // Sync <html lang> with the English initial locale.
  setLocale(currentLocale.value);
  window.addEventListener('popstate', updateRoute);
});

onBeforeUnmount(() => {
  window.removeEventListener('popstate', updateRoute);
});
</script>
