import React, { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import AidAndResponseSection from "../components/home/AidAndResponseSection";
import LocalGroupsSection from "../components/aidEfforts/LocalGroupsSection";
import { useLanguage } from "@/LanguageContext";
import { useNavigate } from "react-router-dom";
import { aidEffortsApi } from "@/services/aidEffortsApi";
import type {
  AidEffortsData,
  OrganizationSection,
  InitiativeSection,
} from "@/types/aidEfforts";

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
        Unable to Load Aid Efforts
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
    <p className="text-foreground">Loading aid efforts...</p>
  </div>
);

export default function AidEfforts(): React.ReactElement {
  const { currentLanguage } = useLanguage();
  const navigate = useNavigate();

  const [aidEffortsData, setAidEffortsData] = useState<AidEffortsData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);

  // Fetch data from API
  const fetchAidEffortsData = async () => {
    try {
      setLoading(true);
      setError(false);
      const data = await aidEffortsApi.getAidEffortsData();
      setAidEffortsData(data);
    } catch (err) {
      console.error("Failed to fetch aid efforts data:", err);
      setError(true);
      setAidEffortsData(null);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAidEffortsData();
  }, []);

  // Handle retry
  const handleRetry = () => {
    fetchAidEffortsData();
  };

  const handleOrganizationClick = (organizationId: string) => {
    navigate(`/organization/${organizationId}`);
  };

  // Helper function to handle initiative clicks
  const handleInitiativeClick = (initiativeId: string) => {
    navigate(`/organization/${initiativeId}`);
  };

  // Show loading state
  if (loading) {
    return <LoadingState />;
  }

  // Show error state
  if (error || !aidEffortsData) {
    return <ErrorState onRetry={handleRetry} />;
  }

  // Extract data for easier access
  const { pageContent, actionButtons, sections } = aidEffortsData;
  const internationalOrganizations = sections.find(
    (s) => s.id === "international-organizations"
  ) as OrganizationSection | undefined;
  const localGroups = sections.find((s) => s.id === "local-groups") as
    | InitiativeSection
    | undefined;
  const storiesOfHope = sections.find((s) => s.id === "stories-of-hope") as
    | OrganizationSection
    | undefined;

  return (
    <div className="flex flex-col w-full bg-background">
      <div className="flex flex-col w-full bg-card">
        <div className="flex flex-col w-full">
          <div className="px-2 md:px-4 lg:px-8 py-5 flex justify-center w-full">
            <div className="flex flex-col max-w-7xl w-full">
              {/* Hero Section */}
              <section className="flex flex-wrap items-start justify-around gap-3 p-4 w-full">
                <Card className="bg-transparent border-none shadow-none w-full">
                  <CardContent className="flex flex-col gap-3 p-0">
                    <h2 className="font-bold text-center text-foreground text-[32px] leading-10 [font-family:'Newsreader-Bold',Helvetica] mt-0">
                      {pageContent.heroTitle[currentLanguage]}
                    </h2>
                    <p className="text-sm text-muted-foreground leading-[21px] [font-family:'Newsreader-Regular',Helvetica] m-0">
                      {pageContent.heroDescription[currentLanguage]}
                    </p>
                  </CardContent>
                </Card>
              </section>

              {/* International Organizations Section */}
              {internationalOrganizations && (
                <AidAndResponseSection
                  organizations={internationalOrganizations.items}
                  title={internationalOrganizations.title}
                  onOrganizationClick={handleOrganizationClick}
                />
              )}

              {/* Local Groups Section */}
              {localGroups && (
                <LocalGroupsSection
                  initiatives={localGroups.items}
                  sectionTitle={localGroups.title}
                  onInitiativeClick={handleInitiativeClick}
                />
              )}

              {/* Stories of Hope Section */}
              {/* {storiesOfHope && (
                <AidAndResponseSection
                  organizations={storiesOfHope.items}
                  title={storiesOfHope.title}
                  onOrganizationClick={handleOrganizationClick}
                />
              )} */}

              {/* Section Title */}
              <div className="flex flex-col pt-5 pb-3 px-2 sm:px-4 w-full">
                <h2 className="font-bold text-foreground text-lg sm:text-xl md:text-[22px] leading-6 sm:leading-7">
                  {pageContent.sectionTitle[currentLanguage]}
                </h2>
              </div>

              {/* Action Buttons */}
              <section className="flex justify-center w-full py-3">
                <div className="flex flex-wrap justify-center gap-3 px-4 max-w-[480px] w-full">
                  {actionButtons.map((button, index) => (
                    <Button
                      key={index}
                      className="h-10 rounded-[20px] px-4"
                      variant="outline"
                      onClick={() => (window.location.href = button.url)}
                    >
                      <span className="font-bold [font-family:'Newsreader-Bold',Helvetica] text-sm leading-[21px] whitespace-nowrap overflow-hidden text-ellipsis">
                        {button.text[currentLanguage]}
                      </span>
                    </Button>
                  ))}
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
