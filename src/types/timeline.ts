// Timeline item structure
export interface TimelineItem {
  title: string;
  period: string;
  description: string;
  isHighlighted: boolean;
  mediaType: "image" | "video";
  mediaUrl: string;
}

// Language-specific timeline content
export interface TimelineLanguageContent {
  title: string;
  items: TimelineItem[];
}

// Main API response structure
export interface TimelineData {
  en: TimelineLanguageContent;
  ar: TimelineLanguageContent;
}
