// Language-specific content types
export interface LanguageContent {
  en: string;
  ar: string;
}

// Featured story structure (includes description)
export interface FeaturedStory {
  id: number;
  title: LanguageContent;
  description: LanguageContent;
  imageUrl: string;
  url: string;
}

// All story structure (no description, simpler)
export interface AllStory {
  id: number;
  title: LanguageContent;
  imageUrl: string | null;
  url: string;
}

// Pagination structure
export interface Pagination {
  current_page: number;
  last_page: number;
  per_page: number;
  total: number;
  has_more: boolean;
}

// Main API response structure
export interface StoriesData {
  pageTitle: LanguageContent;
  pageDescription: LanguageContent;
  featuredSectionTitle: LanguageContent;
  allStoriesTitle: LanguageContent;
  featuredStories: FeaturedStory[];
  allStories: AllStory[];
  pagination: Pagination;
}
