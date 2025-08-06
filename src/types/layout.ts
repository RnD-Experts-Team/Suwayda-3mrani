// Navigation structure
export interface Navigation {
  home?: string;
  crisesArchive?: string;
  gallery?: string;
  aidEfforts?: string;
  organizations?: string;
  information?: string;
  stories?: string;
  timeline?: string;
  dataOverview?: string;
}

// Buttons structure
export interface Buttons {
  seeStories?: string;
  takeAction?: string;
}

// Footer structure
export interface Footer {
  copyright?: string;
  privacyPolicy?: string;
  termsOfService?: string;
  contact?: string;
}

// Aria labels structure
export interface AriaLabels {
  switchToLight?: string;
  switchToDark?: string;
  toggleMenu?: string;
  switchLanguage?: string;
}

// Language-specific layout content
export interface LayoutLanguageContent {
  title?: string;
  navigation?: Navigation;
  buttons?: Buttons;
  footer?: Footer;
  ariaLabels?: AriaLabels;
}

// Main API response structure
export interface LayoutData {
  en: LayoutLanguageContent;
  ar: LayoutLanguageContent;
  logo: string;
}
