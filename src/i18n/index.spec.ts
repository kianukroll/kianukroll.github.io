import { describe, expect, it } from 'vitest';
import { DEFAULT_LOCALE, getInitialLocale, isSupportedLocale, LOCALE_STORAGE_KEY } from '@/i18n';
import { useLocale } from '@/composables/useLocale';

describe('i18n locale helpers', () => {
  it('recognizes supported locales only', () => {
    expect(isSupportedLocale('en')).toBe(true);
    expect(isSupportedLocale('de')).toBe(true);
    expect(isSupportedLocale('fr')).toBe(false);
    expect(isSupportedLocale(null)).toBe(false);
  });

  it('falls back to English without a stored preference', () => {
    localStorage.removeItem(LOCALE_STORAGE_KEY);
    expect(getInitialLocale()).toBe(DEFAULT_LOCALE);
  });

  it('restores a supported locale from local storage', () => {
    localStorage.setItem(LOCALE_STORAGE_KEY, 'de');
    expect(getInitialLocale()).toBe('de');
  });

  it('ignores unsupported stored locales', () => {
    localStorage.setItem(LOCALE_STORAGE_KEY, 'fr');
    expect(getInitialLocale()).toBe(DEFAULT_LOCALE);
  });

  it('stores selected locales in local storage', () => {
    useLocale().setLocale('de');
    expect(localStorage.getItem(LOCALE_STORAGE_KEY)).toBe('de');
  });
});
