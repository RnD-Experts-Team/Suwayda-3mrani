import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AidAndResponseSection from "../components/home/AidAndResponseSection";
import SuggestionList from "../components/home/SuggestionList";
import HeroSection from "../components/home/HeroSection";
import MediaGallery from "@/components/home/MediaGallery";
import { homeApi } from "@/services/homeApi";
import DataCardListScroll from "@/components/home/DataCardListScroll";
import TestimonialCardListScroll from "@/components/home/TestimonialCardListScroll";

import type {
  HomeData,
  HomeContentItem,
  ExtractedHeroData,
  ExtractedMediaGalleryData,
  ExtractedAidData,
  TestimonialContent,
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
        We're having trouble connecting to our servers. Please check your
        internet connection and try again.
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
      console.error("Failed to fetch home data:", err);
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

  // Get all suggestions from the API data
  const getAllSuggestions = (): any[] => {
    return homeData?.data.filter((item) => item.type === "suggestion") || [];
  };

  // Get all testimonials with proper type casting
  const getAllTestimonials = (): TestimonialContent[] => {
    return homeData?.data.filter((item): item is TestimonialContent => item.type === "testimonial") || [];
  };

  // Handle organization clicks
  const handleOrganizationClick = (organizationId: string) => {
    navigate(`/organization/${organizationId}`);
  };

  // Extract featured cases data
  const extractFeaturedCasesData = (): { title: any; cases: any[] } | null => {
    const featuredCasesItem = getDataByType("featured_cases");
    if (featuredCasesItem?.content && featuredCasesItem.type === "featured_cases") {
      // Transform the API data to match the CaseData interface expected by DataCard
      const transformedCases = Array.isArray(featuredCasesItem.content) ? featuredCasesItem.content.map(
        (caseItem: any) => ({
          id: caseItem.id,
          title: caseItem.title,
          imagePath: caseItem.imagePath,
          url: `/case/${caseItem.id}`, // Construct the URL using the case ID
          details: caseItem.details,
        })
      ) : [];  

      return {
        title: featuredCasesItem.title,
        cases: transformedCases,
      };
    }
    return null;
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

  // Extract suggestions data - modified to include action_link
  const extractSuggestionsData = (): any[] => {
    const suggestions = getAllSuggestions();
    return suggestions.map((item) => ({
      en: {
        title: item.content.en.title,
        description: item.content.en.description,
        buttonText: item.content.en.buttonText,
        buttonVariant: item.content.en.buttonVariant || "outline",
        action_link: item.content.en.action_link,
      },
      ar: {
        title: item.content.ar.title,
        description: item.content.ar.description,
        buttonText: item.content.ar.buttonText,
        buttonVariant: item.content.ar.buttonVariant || "outline",
        action_link: item.content.ar.action_link,
      },
    }));
  };

  // Extract testimonials data with proper type handling
  const extractTestimonialsData = (): { title: { en: string; ar: string }; testimonials: any[] } | null => {
    const testimonials = getAllTestimonials();
    if (testimonials.length === 0) return null;

    const transformedTestimonials = testimonials.map((item) => ({
      id: item.id,
      content: item.content,
      url: item.content.url,
      survivor_name: item.content.survivor_name,
      survivor_age: item.content.survivor_age,
      survivor_location: item.content.survivor_location,
      date_of_incident: item.content.date_of_incident,
    }));

    return {
      title: { en: "Testimonials", ar: "الشهادات" },
      testimonials: transformedTestimonials,
    };
  };

  const featuredCasesData = extractFeaturedCasesData();

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
  const testimonialsData = extractTestimonialsData();

  return (
    <div className="flex flex-col w-full bg-background">
      <div className="flex flex-col w-full bg-card">
        <div className="flex justify-center px-2 md:px-4 lg:px-8 py-5 w-full">
          <div className="flex flex-col max-w-7xl w-full">
            {/* Hero Section */}
            {heroContent && <HeroSection content={heroContent} />}

            {/* Media Gallery */}
            {galleryData && <MediaGallery data={galleryData} />}

            {/* Featured Cases */}
            {featuredCasesData && (
              <DataCardListScroll
                caseDataArray={featuredCasesData.cases}
                title={featuredCasesData.title}
              />
            )}

            {/* Testimonials */}
            {testimonialsData && (
              <TestimonialCardListScroll
                testimonialDataArray={testimonialsData.testimonials}
                title={testimonialsData.title}
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
            {suggestionsData.length > 0 && (
              <SuggestionList suggestions={suggestionsData} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
