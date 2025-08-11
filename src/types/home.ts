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
      buttonText: string;
      buttonVariant: string;
    };
    ar: {
      title: string;
      description: string;
      image: string;
      buttonText: string;
      buttonVariant: string;
    };
  };
}

// Media Gallery Types
export interface MediaItem {
  id: string;
  url: string;
  thumbnail: string;
  title: LanguageContent;
  description: LanguageContent;
  sourceUrl: string | null;
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

// Featured Cases Types
export interface FeaturedCase {
  id: string;
  title: LanguageContent;
  imagePath: string | null;
  url: string;
  details: Array<{
    key: LanguageContent;
    value: LanguageContent;
    sort_order: number;
  }>;
}

export interface FeaturedCasesContent {
  id: string;
  type: "featured_cases";
  title: LanguageContent;
  content: FeaturedCase[];
}

// Aid Organizations Types
export interface AidOrganization {
  id: string;
  type: string;
  website_url: string | null;
  contact_url: string | null;
  categories: string[];
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

// Individual Suggestion Types (matching API structure)
export interface SuggestionContent {
  id: string;
  type: "suggestion";
  content: {
    en: {
      title: string;
      description: string;
      buttonText: string;
      buttonVariant: "outline" | "default";
      action_link: string;
    };
    ar: {
      title: string;
      description: string;
      buttonText: string;
      buttonVariant: "outline" | "default";
      action_link: string;
    };
  };
}

// Suggestion List Item (for component props)
// export interface SuggestionItem {
//   en: {
//     title: string;
//     description: string;
//     buttonText: string;
//     buttonVariant?: "default" | "outline";
//   };
//   ar: {
//     title: string;
//     description: string;
//     buttonText: string;
//     buttonVariant?: "default" | "outline";
//   };
// }

// Suggestion List Item (for component props)
export interface SuggestionItem {
  en: {
    title: string;
    description: string;
    buttonText: string;
    buttonVariant?: "default" | "outline";
    action_link?: string; // Add this line
  };
  ar: {
    title: string;
    description: string;
    buttonText: string;
    buttonVariant?: "default" | "outline";
    action_link?: string; // Add this line
  };
}


// Testimonial/Component Node Types
export interface TestimonialContent {
  id: string;
  type: "testimonial";
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
    survivor_name: string;
    survivor_age: number;
    survivor_location: string;
    date_of_incident: string;
  };
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
  | SuggestionContent
  | TestimonialContent
  | ComponentNodeContent 
  | SectionGroupContent
  | FeaturedCasesContent;

// Main data structure
export interface HomeData {
  data: HomeContentItem[];
}

// Helper types for extracted data
export interface ExtractedHeroData {
  en: { 
    title: string; 
    description: string; 
    image: string; 
    buttonText: string;
    buttonVariant: string;
  };
  ar: { 
    title: string; 
    description: string; 
    image: string; 
    buttonText: string;
    buttonVariant: string;
  };
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
  suggestions: SuggestionItem[];
}

export interface ExtractedSectionGroupData {
  title: LanguageContent;
  sections: ComponentNodeContent['content'][];
}
