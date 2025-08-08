import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AidAndResponseSection from "../components/home/AidAndResponseSection";
import SuggestionList from "../components/home/SuggestionList";
import ComponentNodeSectionGroup from "../components/home/ComponentNodeSectionGroup";
import HeroSection from "../components/home/HeroSection";
import MediaGallery from "@/components/home/MediaGallery";
import { homeApi } from "@/services/homeApi";
import type { 
  HomeData, 
  HomeContentItem, 
  ExtractedHeroData,
  ExtractedMediaGalleryData,
  ExtractedAidData,
  ExtractedSuggestionsData,
  ExtractedSectionGroupData,
  ComponentNodeContent
} from "@/types/home";

// Error component for when API fails
const ErrorState = ({ onRetry }: { onRetry: () => void }) => (
  <div className="flex flex-col items-center justify-center min-h-[60vh] bg-background px-4">
    <div className="text-center max-w-md">
      <div className="mb-6">
        <svg 
          className="mx-auto h-16 w-16 text-muted-foreground" 
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={1} 
            d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z" 
          />
        </svg>
      </div>
      <h2 className="text-2xl font-bold text-foreground mb-4">
        Unable to Load Content
      </h2>
      <p className="text-muted-foreground mb-8">
        We're having trouble connecting to our servers. Please check your internet connection and try again.
      </p>
      <button
        onClick={onRetry}
        className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-primary-foreground bg-primary hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-ring transition-colors"
      >
        <svg 
          className="mr-2 h-4 w-4" 
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" 
          />
        </svg>
        Refresh Page
      </button>
    </div>
  </div>
);

// Loading component
const LoadingState = () => (
  <div className="flex flex-col items-center justify-center min-h-[60vh] bg-background">
    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mb-4"></div>
    <p className="text-foreground">Loading content...</p>
  </div>
);

const Home = (): React.ReactElement => {
  const navigate = useNavigate();
  const [homeData, setHomeData] = useState<HomeData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);

  // Fetch home data from API
  const fetchHomeData = async () => {
    try {
      setLoading(true);
      setError(false);
      const data = await homeApi.getHomeData();
      setHomeData(data);
    } catch (err) {
      console.error('Failed to fetch home data:', err);
      setError(true);
      setHomeData(null);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchHomeData();
  }, []);

  // Handle retry
  const handleRetry = () => {
    fetchHomeData();
  };

  // Helper functions to extract data from the unified structure
  const getDataByType = (type: string): HomeContentItem | undefined => {
    return homeData?.data.find((item) => item.type === type);
  };

  const getDataById = (id: string): HomeContentItem | undefined => {
    return homeData?.data.find((item) => item.id === id);
  };

  // Get all testimonials
  const getAllTestimonials = (): HomeContentItem[] => {
    return homeData?.data.filter((item) => item.type === "testimonial") || [];
  };

  // Handle organization clicks
  const handleOrganizationClick = (organizationId: string) => {
    navigate(`/organization/${organizationId}`);
  };

  // Extract specific data for components
  const extractHeroData = (): ExtractedHeroData | null => {
    const heroItem = getDataByType("hero");
    if (heroItem && heroItem.type === "hero") {
      return heroItem.content;
    }
    return null;
  };

  const extractMediaGalleryData = (): ExtractedMediaGalleryData | null => {
    const galleryItem = getDataByType("media_gallery");
    if (galleryItem && galleryItem.type === "media_gallery") {
      return galleryItem.content;
    }
    return null;
  };

  const extractAidData = (): ExtractedAidData | null => {
    const aidItem = getDataByType("aid_organizations");
    if (aidItem && aidItem.type === "aid_organizations") {
      return {
        title: aidItem.title,
        organizations: aidItem.content,
      };
    }
    return null;
  };

  const extractSuggestionsData = (): ExtractedSuggestionsData | null => {
    const suggestionsItem = getDataByType("suggestions");
    if (suggestionsItem && suggestionsItem.type === "suggestions") {
      return { suggestions: suggestionsItem.content };
    }
    return null;
  };

  // Extract testimonials data for the first section group
  const extractTestimonialsData = (): ExtractedSectionGroupData | null => {
    const testimonials = getAllTestimonials();
    if (testimonials.length === 0) return null;

    const sections = testimonials
      .filter((item): item is ComponentNodeContent => 
        item.type === "testimonial"
      )
      .map(item => item.content);

    return {
      title: { en: "Testimonials", ar: "الشهادات" }, // Default title, you can customize this
      sections,
    };
  };

  const extractSectionGroupData = (groupId: string): ExtractedSectionGroupData | null => {
    const groupItem = getDataById(groupId);
    if (groupItem && groupItem.type === "section_group") {
      const sections = groupItem.content.sections
        .map(sectionId => getDataById(sectionId))
        .filter((item): item is ComponentNodeContent => 
          item !== undefined && 
          (item.type === "component_node" || item.type === "testimonial" || item.type === "key_events")
        )
        .map(item => item.content);

      return {
        title: groupItem.content.title,
        sections,
      };
    }
    return null;
  };

  // Show loading state
  if (loading) {
    return <LoadingState />;
  }

  // Show error state
  if (error || !homeData) {
    return <ErrorState onRetry={handleRetry} />;
  }

  // Extract data
  const heroContent = extractHeroData();
  const galleryData = extractMediaGalleryData();
  const aidData = extractAidData();
  const suggestionsData = extractSuggestionsData();
  const testimonialsData = extractTestimonialsData(); // Use testimonials for first section
  const sectionGroup2Data = extractSectionGroupData("section-group-2"); // Keep second section as is

  return (
    <div className="flex flex-col w-full bg-background">
      <div className="flex flex-col w-full bg-card">
        <div className="flex justify-center px-2 md:px-4 lg:px-8 py-5 w-full">
          <div className="flex flex-col max-w-7xl w-full">
            {/* Hero Section */}
            {heroContent && <HeroSection content={heroContent} />}

            {/* Media Gallery */}
            {galleryData && <MediaGallery data={galleryData} />}

            {/* Section Group 1 (Testimonials) */}
            {testimonialsData && (
              <ComponentNodeSectionGroup
                title={testimonialsData.title}
                sections={testimonialsData.sections}
              />
            )}

            

            {/* Aid and Response Section */}
            {aidData && (
              <AidAndResponseSection
                organizations={aidData.organizations}
                title={aidData.title}
                onOrganizationClick={handleOrganizationClick}
              />
            )}

            {/* Suggestions */}
            {suggestionsData && (
              <SuggestionList suggestions={suggestionsData.suggestions} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
