// Language-specific layout content (matching API structure)
export interface LayoutLanguageContent {
  title?: string;
  home?: string;
  crisesArchive?: string;
  media?: string; // or gallery
  aidEfforts?: string;
  organizations?: string;
  information?: string;
  stories?: string;
  news?: string;
  timeline?: string;
  dataOverview?: string;
  seeStories?: string;
  takeAction?: string;
  copyright?: string;
  privacyPolicy?: string;
  termsOfService?: string;
  contact?: string;
  switchToLight?: string;
  switchToDark?: string;
  toggleMenu?: string;
  switchLanguage?: string;
}

// Main API response structure
export interface LayoutData {
  en: LayoutLanguageContent;
  ar: LayoutLanguageContent;
  logo: string;
}
