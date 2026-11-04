import { ref } from 'vue';
import type { SupportedLocale } from '@/types/content';

export const SUPPORTED_LOCALES: SupportedLocale[] = ['en', 'de'];
export const DEFAULT_LOCALE: SupportedLocale = 'en';
export const LOCALE_STORAGE_KEY = 'preferred-locale';
export const selectedLocale = ref<SupportedLocale>(DEFAULT_LOCALE);

export function isSupportedLocale(value: string | null): value is SupportedLocale {
  return value !== null && (SUPPORTED_LOCALES as string[]).includes(value);
}

export function getInitialLocale(): SupportedLocale {
  if (typeof window !== 'undefined') {
    const storedLocale = window.localStorage.getItem(LOCALE_STORAGE_KEY);
    if (isSupportedLocale(storedLocale)) return storedLocale;
  }
  return DEFAULT_LOCALE;
}

export function applyDocumentLocale(locale: SupportedLocale): void {
  if (typeof document === 'undefined') return;
  document.documentElement.lang = locale;
}

selectedLocale.value = getInitialLocale();
