<template>
  <svg
    v-if="name === 'summary'"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="1.7"
    aria-hidden="true"
    class="size-5"
  >
    <circle cx="12" cy="8" r="3.25" />
    <path d="M5.5 20c.7-3.1 3.05-5 6.5-5s5.8 1.9 6.5 5" stroke-linecap="round" />
  </svg>
  <svg
    v-else-if="name === 'experience'"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="1.7"
    aria-hidden="true"
    class="size-5"
  >
    <rect x="3" y="7" width="18" height="13" rx="2" />
    <path d="M8 7V5.5A1.5 1.5 0 0 1 9.5 4h5A1.5 1.5 0 0 1 16 5.5V7M3 12h18M10 12v2h4v-2" />
  </svg>
  <svg
    v-else-if="name === 'projects'"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="1.7"
    aria-hidden="true"
    class="size-5"
  >
    <path d="m8 7-5 5 5 5M16 7l5 5-5 5M14 4l-4 16" stroke-linecap="round" stroke-linejoin="round" />
  </svg>
  <svg
    v-else-if="name === 'education'"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="1.7"
    aria-hidden="true"
    class="size-5"
  >
    <path d="m3 9 9-4 9 4-9 4-9-4Z" stroke-linejoin="round" />
    <path d="M7 11v5c2.8 2.2 7.2 2.2 10 0v-5M21 10v5" stroke-linecap="round" />
  </svg>
  <svg
    v-else-if="name === 'skills'"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="1.7"
    aria-hidden="true"
    class="size-5"
  >
    <path d="M4 6h16M4 12h16M4 18h16" stroke-linecap="round" />
    <circle cx="9" cy="6" r="2" fill="currentColor" stroke="none" />
    <circle cx="15" cy="12" r="2" fill="currentColor" stroke="none" />
    <circle cx="11" cy="18" r="2" fill="currentColor" stroke="none" />
  </svg>
  <svg
    v-else-if="name === 'github'"
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
    class="size-5"
  >
    <path
      d="M12 .5C5.73.5.75 5.48.75 11.75c0 5.02 3.26 9.28 7.78 10.78.57.1.78-.25.78-.55 0-.27-.01-1.16-.02-2.1-3.16.69-3.83-1.34-3.83-1.34-.52-1.31-1.26-1.66-1.26-1.66-1.03-.71.08-.69.08-.69 1.14.08 1.74 1.17 1.74 1.17 1.01 1.74 2.66 1.24 3.31.95.1-.73.4-1.24.72-1.53-2.52-.29-5.17-1.26-5.17-5.6 0-1.24.44-2.25 1.17-3.04-.12-.29-.51-1.45.11-3.02 0 0 .96-.31 3.14 1.16a10.9 10.9 0 0 1 5.72 0c2.18-1.47 3.14-1.16 3.14-1.16.62 1.57.23 2.73.11 3.02.73.79 1.17 1.8 1.17 3.04 0 4.35-2.65 5.31-5.18 5.59.41.35.77 1.04.77 2.1 0 1.52-.01 2.74-.01 3.11 0 .3.2.66.79.55 4.51-1.51 7.77-5.76 7.77-10.78C23.25 5.48 18.27.5 12 .5Z"
    />
  </svg>
  <svg
    v-else-if="name === 'linkedin'"
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
    class="size-5"
  >
    <path
      d="M20.45 20.45h-3.56v-5.58c0-1.33-.02-3.04-1.85-3.04-1.86 0-2.15 1.45-2.15 2.94v5.68H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.38-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14ZM7.12 20.45H3.56V9h3.56v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0Z"
    />
  </svg>
  <svg
    v-else
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="1.7"
    aria-hidden="true"
    class="size-5"
  >
    <rect x="2.5" y="4.5" width="19" height="15" rx="2" />
    <path d="m3.5 6 8.5 7 8.5-7" stroke-linecap="round" stroke-linejoin="round" />
  </svg>
</template>

<script setup lang="ts">
withDefaults(
  defineProps<{
    name:
      | 'summary'
      | 'experience'
      | 'projects'
      | 'education'
      | 'skills'
      | 'github'
      | 'linkedin'
      | 'email';
  }>(),
  {},
);
</script>
