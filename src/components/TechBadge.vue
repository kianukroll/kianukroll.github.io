<template>
  <span
    class="tech-badge border-hairline bg-navy-800 text-accent-300 rounded border px-2.5 py-1 font-mono text-xs"
  >
    {{ label }}
  </span>
</template>

<script setup lang="ts">
defineProps<{
  label: string;
}>();
</script>
