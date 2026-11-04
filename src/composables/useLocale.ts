import { applyDocumentLocale, LOCALE_STORAGE_KEY, selectedLocale, SUPPORTED_LOCALES } from '@/i18n';
import type { LocalizedText, SupportedLocale } from '@/types/content';

function setLocale(next: SupportedLocale): void {
  selectedLocale.value = next;
  applyDocumentLocale(next);
  if (typeof window !== 'undefined') {
    window.localStorage.setItem(LOCALE_STORAGE_KEY, next);
  }
}

function toggleLocale(): void {
  const currentIndex = SUPPORTED_LOCALES.indexOf(selectedLocale.value);
  const nextLocale = SUPPORTED_LOCALES[(currentIndex + 1) % SUPPORTED_LOCALES.length];
  setLocale(nextLocale);
}

function localize(text: LocalizedText): string {
  return text[selectedLocale.value];
}

export function useLocale() {
  return {
    currentLocale: selectedLocale,
    setLocale,
    toggleLocale,
    localize,
    availableLocales: SUPPORTED_LOCALES,
  };
}
