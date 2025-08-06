// Language-specific case content
export interface CaseLanguageContent {
  title: string;
  content: string;
  images: string[];
}

// Case metadata
export interface CaseMetadata {
  case_id: string;
  type: string;
  incident_date: string;
  location: string;
  url_slug: string;
}

// Main API response structure
export interface CaseData {
  en: CaseLanguageContent;
  ar: CaseLanguageContent;
  metadata: CaseMetadata;
}

// For URL parameters (case ID)
export interface CaseParams {
  caseId: string;
}
