// Language-specific content types
export interface LanguageContent {
  en: string;
  ar: string;
}

// Page content structure
export interface PageContent {
  heroTitle: LanguageContent;
  heroDescription: LanguageContent;
  sectionTitle: LanguageContent;
}

// Action button structure
export interface ActionButton {
  text: LanguageContent;
  url: string;
}

// Organization item (for international organizations and stories of hope)
export interface OrganizationItem {
  en: {
    name: string;
    description: string;
    backgroundImage: string;
    url: string;
  };
  ar: {
    name: string;
    description: string;
    backgroundImage: string;
    url: string;
  };
}

// Initiative item (for local groups)
export interface InitiativeItem {
  en: {
    title: string;
    description: string;
    url: string;
  };
  ar: {
    title: string;
    description: string;
    url: string;
  };
}

// Section structure
export interface Section {
  id: string;
  title: LanguageContent;
  type: "organizations" | "initiatives";
  items: OrganizationItem[] | InitiativeItem[];
}

// Main API response structure
export interface AidEffortsData {
  pageContent: PageContent;
  actionButtons: ActionButton[];
  sections: Section[];
}

// Helper types for type-safe section access
export interface OrganizationSection extends Omit<Section, 'items' | 'type'> {
  type: "organizations";
  items: OrganizationItem[];
}

export interface InitiativeSection extends Omit<Section, 'items' | 'type'> {
  type: "initiatives";
  items: InitiativeItem[];
}
