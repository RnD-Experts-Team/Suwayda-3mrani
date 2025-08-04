// Single language testimonial content
export interface TestimonialLanguageContent {
  title: string;
  buttonText: string;
  content: string;
  images: string[];
  survivorName: string;
  survivorAge: number;
  survivorLocation: string;
  dateOfIncident: string;
  testimonyId: string;
}

// Main API response structure
export interface TestimonialData {
  en: TestimonialLanguageContent;
  ar: TestimonialLanguageContent;
}

// For URL parameters (testimony ID)
export interface TestimonialParams {
  id: string;
}
