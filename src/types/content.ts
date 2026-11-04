export interface LocalizedText {
  en: string;
  de: string;
}

export type SupportedLocale = keyof LocalizedText;

export interface ExperienceCompany {
  name: string;
  link?: string;
}

export interface ExperienceEntry {
  id: string;
  period: LocalizedText;
  role: LocalizedText;
  subText?: LocalizedText;
  focusPoints: LocalizedFocusPoint[];
  stack: string[];
  company?: ExperienceCompany;
}

export interface LocalizedFocusPoint {
  label: LocalizedText;
  detail?: LocalizedText;
}

export interface ProjectEntry {
  id: string;
  name: LocalizedText;
  type: LocalizedText;
  stack: string[];
  highlights: LocalizedText[];
  link?: string;
}

export interface ProfileData {
  name: string;
  role: LocalizedText;
  motto: LocalizedText;
  location: LocalizedText;
  email: string;
  websiteUrl: string;
  githubUrl: string;
  linkedinUrl: string;
}

export interface CertificateCategory {
  id: string;
  label: LocalizedText;
  items: Certificate[];
}

export interface Certificate {
  id: string;
  label: LocalizedText;
  subLabel?: LocalizedText;
  description?: LocalizedText;
  verificationLink?: string;
  validFrom?: string;
  validTill?: string;
  upcoming?: boolean;
}
