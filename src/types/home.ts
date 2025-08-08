// Language-specific content types
export interface LanguageContent {
  en: string;
  ar: string;
}

// Hero Section Types
export interface HeroContent {
  id: string;
  type: "hero";
  content: {
    en: {
      title: string;
      description: string;
      image: string;
    };
    ar: {
      title: string;
      description: string;
      image: string;
    };
  };
}

// Media Gallery Types
export interface MediaItem {
  id: string;
  url: string;
  title: LanguageContent;
  description: LanguageContent;
  sourceUrl: string;
  type: "image" | "video";
}

export interface MediaGalleryContent {
  id: string;
  type: "media_gallery";
  content: {
    title: LanguageContent;
    mediaItems: MediaItem[];
  };
}

// Aid Organizations Types
export interface AidOrganization {
  id: string;
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

export interface AidOrganizationsContent {
  id: string;
  type: "aid_organizations";
  title: LanguageContent;
  content: AidOrganization[];
}

// Suggestions Types
export interface Suggestion {
  id: string;
  key: string;
  en: {
    title: string;
    description: string;
    buttonText: string;
    buttonVariant: "outline" | "default";
  };
  ar: {
    title: string;
    description: string;
    buttonText: string;
    buttonVariant: "outline" | "default";
  };
}

export interface SuggestionsContent {
  id: string;
  type: "suggestions";
  content: Suggestion[];
}

// Component Node Types
export interface ComponentNodeContent {
  id: string;
  type: "component_node" | "testimonial" | "key_events";
  content: {
    en: {
      category: string;
      title: string;
      description: string;
      imageUrl: string;
    };
    ar: {
      category: string;
      title: string;
      description: string;
      imageUrl: string;
    };
    url: string;
  };
}

// Section Group Types
export interface SectionGroupContent {
  id: string;
  type: "section_group";
  content: {
    title: LanguageContent;
    sections: string[]; // Array of IDs referencing other content items
  };
}

// Union type for all content types
export type HomeContentItem = 
  | HeroContent 
  | MediaGalleryContent 
  | AidOrganizationsContent 
  | SuggestionsContent 
  | ComponentNodeContent 
  | SectionGroupContent;

// Main data structure
export interface HomeData {
  data: HomeContentItem[];
}

// Helper types for extracted data
export interface ExtractedHeroData {
  en: { title: string; description: string; image: string; };
  ar: { title: string; description: string; image: string; };
}

export interface ExtractedMediaGalleryData {
  title: LanguageContent;
  mediaItems: MediaItem[];
}

export interface ExtractedAidData {
  title: LanguageContent;
  organizations: AidOrganization[];
}

export interface ExtractedSuggestionsData {
  suggestions: Suggestion[];
}

export interface ExtractedSectionGroupData {
  title: LanguageContent;
  sections: ComponentNodeContent['content'][];
}
