// Language-specific content types
export interface LanguageContent {
  en: string;
  ar: string;
}

// Detail item structure
export interface DetailItem {
  key: LanguageContent;
  value: LanguageContent;
  sort_order: number;
}

// Data case structure
export interface DataCase {
  id: string; // Change from number to string to match API
  title: LanguageContent;
  imagePath: string | null; // Allow null values
  url: string;
  details: DetailItem[];
}

// Tab item structure
export interface TabItem {
  id: string;
  category: string;
  label: LanguageContent;
}

// Data registry structure
export interface DataRegistry {
  deaths: DataCase[];
  houses: DataCase[];
  migrations: DataCase[];
  thefts: DataCase[];
}

// Main API response structure
export interface DataOverviewData {
  pageTitle: LanguageContent;
  tabItems: TabItem[];
  dataRegistry: DataRegistry;
}
