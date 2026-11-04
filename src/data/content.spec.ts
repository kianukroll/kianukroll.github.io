import { describe, expect, it } from 'vitest';
import { certificates } from '@/data/certificates';
import { projects } from '@/data/projects';
import type { LocalizedText } from '@/types/content';

function isNonEmptyLocalizedText(value: LocalizedText): boolean {
  return value.en.trim().length > 0 && value.de.trim().length > 0;
}

describe('content data integrity', () => {
  it('every project has non-empty EN/DE name, type, and highlights', () => {
    for (const project of projects) {
      expect(isNonEmptyLocalizedText(project.name)).toBe(true);
      expect(isNonEmptyLocalizedText(project.type)).toBe(true);
      expect(project.highlights.length).toBeGreaterThan(0);
      for (const highlight of project.highlights) {
        expect(isNonEmptyLocalizedText(highlight)).toBe(true);
      }
    }
  });

  it('every certificate has localized labels', () => {
    for (const category of certificates) {
      expect(isNonEmptyLocalizedText(category.label)).toBe(true);
      for (const item of category.items) {
        expect(isNonEmptyLocalizedText(item.label)).toBe(true);
        expect(item.subLabel ? isNonEmptyLocalizedText(item.subLabel) : true).toBe(true);
      }
    }
  });

  it('has unique ids across each content collection', () => {
    const projectIds = projects.map((entry) => entry.id);
    const certificateIds = certificates.flatMap((category) =>
      category.items.map((item) => item.id),
    );

    expect(new Set(projectIds).size).toBe(projectIds.length);
    expect(new Set(certificateIds).size).toBe(certificateIds.length);
  });
});
