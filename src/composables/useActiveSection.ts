import { onBeforeUnmount, onMounted, ref, type Ref } from 'vue';

/**
 * Tracks which of the given section element ids is currently most visible
 * in the viewport, using IntersectionObserver (no scroll-handler layout reads).
 */
export function useActiveSection(sectionIds: string[]): Ref<string | null> {
  const activeId = ref<string | null>(null);
  let observer: IntersectionObserver | null = null;

  onMounted(() => {
    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    if (elements.length === 0) return;

    observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .toSorted((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible[0]) {
          activeId.value = visible[0].target.id;
        }
      },
      {
        rootMargin: '-15% 0px -60% 0px',
        threshold: [0, 0.25, 0.5, 0.75, 1],
      },
    );

    elements.forEach((el) => observer?.observe(el));
  });

  onBeforeUnmount(() => {
    observer?.disconnect();
  });

  return activeId;
}
