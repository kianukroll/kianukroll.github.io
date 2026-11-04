<template>
  <article class="cv-page bg-navy-900 text-cream-300 min-h-screen font-sans">
    <div
      class="mx-auto max-w-4xl px-6 py-10 sm:px-10 lg:px-16 print:max-w-none print:px-0 print:py-0"
    >
      <a
        href="/"
        class="text-accent-300 hover:text-accent-100 mb-8 inline-block font-mono text-sm transition-colors print:hidden"
      >
        ← {{ localize(cvLabels.back) }}
      </a>
      <header class="border-hairline border-b-2 pb-6">
        <h1 class="text-cream-100 font-serif text-4xl font-bold tracking-tight">
          {{ profile.name }}
        </h1>
        <p class="text-cream-300 mt-2 font-serif text-xl">{{ localize(selectedVariant.title) }}</p>
        <address class="text-cream-500 mt-4 flex flex-wrap gap-x-4 gap-y-1 text-sm not-italic">
          <span>{{ localize(profile.location) }}</span>
          <a :href="profile.websiteUrl" class="inline-flex items-center gap-1">
            <IconGlyph name="website" class="size-4" />
            kianukroll.com
          </a>
          <a :href="`mailto:${profile.email}`" class="inline-flex items-center gap-1">
            <IconGlyph name="email" class="size-4" />
            {{ profile.email }}
          </a>
          <a
            :href="profile.linkedinUrl"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex items-center gap-1"
          >
            <IconGlyph name="linkedin" class="size-4" />
            {{ profile.linkedinUrl }}
          </a>
          <a
            :href="profile.githubUrl"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex items-center gap-1"
          >
            <IconGlyph name="github" class="size-4" />
            {{ profile.githubUrl }}
          </a>
        </address>
      </header>

      <section class="cv-section" aria-labelledby="summary-heading">
        <h2 id="summary-heading" class="cv-heading">
          <IconGlyph name="summary" class="text-accent-400 size-4" />
          {{ localize(cvLabels.summary) }}
        </h2>
        <p class="text-cream-300 max-w-3xl leading-relaxed">
          {{ localize(selectedVariant.summary) }}
        </p>
      </section>

      <section class="cv-section" aria-labelledby="experience-heading">
        <h2 id="experience-heading" class="cv-heading">
          <IconGlyph name="experience" class="text-accent-400 size-4" />
          {{ localize(cvLabels.experience) }}
        </h2>
        <div class="space-y-7">
          <article v-for="entry in experience" :key="entry.id">
            <div class="flex flex-col justify-between gap-1 sm:flex-row sm:gap-6">
              <div>
                <h3 class="text-cream-100 font-serif text-lg font-semibold">
                  {{ localize(entry.role) }}
                  <span
                    v-if="entry.company"
                    class="text-cream-300 font-serif text-base font-normal"
                  >
                    <span class="text-cream-500">@</span>
                    <a
                      v-if="entry.company.link"
                      :href="entry.company.link"
                      target="_blank"
                      rel="noopener noreferrer"
                      class="decoration-cream-500/60 underline decoration-1 underline-offset-4"
                    >
                      {{ entry.company.name }}
                    </a>
                    <span v-else>{{ entry.company.name }}</span>
                  </span>
                </h3>
                <p
                  v-if="entry.subText"
                  class="text-cream-300 font-serif text-sm leading-tight sm:text-base"
                >
                  {{ localize(entry.subText) }}
                </p>
              </div>
              <p class="text-cream-500 shrink-0 font-mono text-sm">
                {{ localize(entry.period) }}
              </p>
            </div>
            <ul class="text-cream-300 mt-3 list-disc space-y-1 pl-5 text-sm leading-relaxed">
              <li v-for="point in entry.focusPoints" :key="localize(point.label)">
                {{ localize(point.detail ?? point.label) }}
              </li>
            </ul>
          </article>
        </div>
      </section>

      <section class="cv-section" aria-labelledby="projects-heading">
        <h2 id="projects-heading" class="cv-heading">
          <IconGlyph name="projects" class="text-accent-400 size-4" />
          {{ localize(cvLabels.projects) }}
        </h2>
        <div class="space-y-5">
          <article v-for="project in selectedProjects" :key="project.id">
            <h3 class="text-cream-100 font-serif text-lg font-semibold">
              <a
                v-if="project.link"
                :href="project.link"
                target="_blank"
                rel="noopener noreferrer"
                class="underline-offset-4 hover:underline"
              >
                {{ localize(project.name) }} <span aria-hidden="true">&#8599;</span>
              </a>
              <span v-else>{{ localize(project.name) }}</span>
            </h3>
            <p class="text-cream-500 text-sm">{{ localize(project.type) }}</p>
            <ul class="text-cream-300 mt-2 list-disc space-y-1 pl-5 text-sm leading-relaxed">
              <li v-for="highlight in project.highlights" :key="localize(highlight)">
                {{ localize(highlight) }}
              </li>
            </ul>
          </article>
        </div>
      </section>

      <section class="cv-section" aria-labelledby="education-heading">
        <h2 id="education-heading" class="cv-heading">
          <IconGlyph name="education" class="text-accent-400 size-4" />
          {{ localize(cvLabels.education) }}
        </h2>
        <article v-for="category in certificates" :key="category.id">
          <h3 class="text-cream-100 font-serif text-lg font-semibold">
            {{ localize(category.label) }}
          </h3>
          <div v-for="item in category.items" :key="item.id" class="mt-2">
            <p class="font-medium">{{ localize(item.label) }}</p>
            <p v-if="item.subLabel" class="text-cream-300 text-sm">
              {{ localize(item.subLabel) }}
            </p>
            <p v-if="item.validFrom || item.validTill" class="text-cream-500 text-sm">
              {{ item.validFrom }}<span v-if="item.validFrom && item.validTill"> — </span
              >{{ item.validTill }}
            </p>
            <p v-if="item.description" class="text-cream-300 mt-1 text-sm leading-relaxed">
              {{ localize(item.description) }}
            </p>
          </div>
        </article>
      </section>

      <section class="cv-section" aria-labelledby="skills-heading">
        <h2 id="skills-heading" class="cv-heading">
          <IconGlyph name="skills" class="text-accent-400 size-4" />
          {{ localize(cvLabels.skills) }}
        </h2>
        <ul class="flex flex-wrap gap-2">
          <li v-for="skill in skills" :key="skill">
            <TechBadge :label="skill" />
          </li>
        </ul>
      </section>
    </div>
  </article>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import IconGlyph from '@/components/IconGlyph.vue';
import TechBadge from '@/components/TechBadge.vue';
import { useLocale } from '@/composables/useLocale';
import { certificates } from '@/data/certificates';
import { cvExperience, cvLabels, getCvVariant, type CvVariantId } from '@/data/cv';
import { profile } from '@/data/profile';
import { projects } from '@/data/projects';
import type { ExperienceEntry, ProjectEntry } from '@/types/content';

const props = withDefaults(defineProps<{ variantId?: CvVariantId }>(), {
  variantId: 'general',
});
const { localize } = useLocale();
const selectedVariant = computed(() => getCvVariant(props.variantId));
const experience = computed(() =>
  selectedVariant.value.experienceIds
    .map((id) => cvExperience.find((entry) => entry.id === id))
    .filter((entry): entry is ExperienceEntry => entry !== undefined),
);
const selectedProjects = computed(() =>
  selectedVariant.value.projectIds
    .map((id) => projects.find((project) => project.id === id))
    .filter((project): project is ProjectEntry => project !== undefined),
);

const skills = computed(() => {
  const allSkills = [
    ...experience.value.flatMap((entry) => entry.stack),
    ...selectedProjects.value.flatMap((project) => project.stack),
  ];
  const uniqueSkills = [...new Set(allSkills)];

  return [
    ...selectedVariant.value.skillPriority.filter((skill) => uniqueSkills.includes(skill)),
    ...uniqueSkills.filter((skill) => !selectedVariant.value.skillPriority.includes(skill)),
  ];
});
</script>

<style scoped>
@page {
  size: A4;
  margin: 0;
}

.cv-section {
  break-inside: avoid;
  margin-top: 2rem;
}

.cv-heading {
  align-items: center;
  border-bottom: 1px solid #cbd5e1;
  color: var(--color-cream-100);
  display: flex;
  gap: 0.5rem;
  font-size: 0.8rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  margin-bottom: 1rem;
  padding-bottom: 0.35rem;
  text-transform: uppercase;
}

@media print {
  .cv-page {
    background: var(--color-navy-900);
    color: var(--color-cream-300);
    font-size: 10.5pt;
    min-height: auto;
    print-color-adjust: exact;
    -webkit-print-color-adjust: exact;
  }

  .cv-page > div {
    padding: 1.25cm 1.5cm;
  }

  .cv-section {
    margin-top: 1.25rem;
  }

  .cv-heading {
    border-color: var(--color-hairline);
    color: var(--color-cream-100);
  }

  a {
    color: var(--color-cream-100);
    text-decoration: underline;
    text-decoration-thickness: 0.06em;
    text-underline-offset: 0.15em;
  }
}
</style>
