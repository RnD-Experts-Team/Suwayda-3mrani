import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import React, { useState, useEffect } from "react";
import { useLanguage } from "@/LanguageContext";
import { useParams, useNavigate } from "react-router-dom";
import { organizationsApi } from "@/services/organizationsApi";
import type { OrganizationsData } from "@/types/organizations";

// Updated interfaces to match API response
interface RelatedOrganization {
  name: string;
  logoUrl: string;
  id: number;
  organizationId: string;
  type: "organizations" | "initiatives";
}

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
        Unable to Load Organization
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
    <p className="text-foreground">Loading organization...</p>
  </div>
);

const Organizations = (): React.ReactElement => {
  const { currentLanguage } = useLanguage();
  const { organizationId } = useParams<{ organizationId: string }>();
  const navigate = useNavigate();
  
  const [organizationsData, setOrganizationsData] = useState<OrganizationsData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);

  // Fetch organizations data from API
  const fetchOrganizationsData = async () => {
    try {
      setLoading(true);
      setError(false);
      const id = organizationId ?? 'org-fallback-default';
      const data = await organizationsApi.getOrganizationsData(id);
      setOrganizationsData(data);
    } catch (err) {
      console.error('Failed to fetch organizations data:', err);
      setError(true);
      setOrganizationsData(null);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchOrganizationsData();
  }, [organizationId]);

  // Handle retry
  const handleRetry = () => {
    fetchOrganizationsData();
  };

  // Click handler for related organizations
  const handleRelatedOrgClick = (org: RelatedOrganization) => {
    navigate(`/organization/${org.organizationId}`);
  };

  const handleButtonClick = (url: string) => {
    if (url.startsWith("mailto:")) {
      window.location.href = url;
    } else {
      window.open(url, "_blank", "noopener,noreferrer");
    }
  };

  // Show loading state
  if (loading) {
    return <LoadingState />;
  }

  // Show error state
  if (error || !organizationsData) {
    return <ErrorState onRetry={handleRetry} />;
  }

  // Get current language data
  const currentData = organizationsData[currentLanguage];
  const {
    relatedOrganizations,
    currentOrganization,
    actionButtons,
    pageTitle,
  } = currentData;

  return (
    <div className="flex flex-col items-start relative bg-background">
      <div className="flex flex-col min-h-[800px] items-start relative self-stretch w-full flex-[0_0_auto] bg-background">
        <div className="flex flex-col items-start relative self-stretch w-full flex-[0_0_auto]">
          {/* Main Content */}
          <main className="items-start justify-center px-2 md:px-4 lg:px-8 py-5 flex-1 grow flex relative self-stretch w-full">
            <div className="flex flex-col w-full max-w-7xl items-start relative flex-1 grow mb-[-1.00px]">
              {/* Organizations Title */}
              <div className="flex flex-wrap items-start justify-around gap-[12px_12px] p-4 relative self-stretch w-full flex-[0_0_auto]">
                <div className="flex flex-col w-full sm:w-72 items-start relative">
                  <h2 className="text-center relative self-stretch mt-[-1.00px] [font-family:'Newsreader-Bold',Helvetica] font-bold text-foreground text-2xl sm:text-[32px] tracking-[0] leading-8 sm:leading-10">
                    {pageTitle}
                  </h2>
                </div>
              </div>

              {/* Organization Cards */}
              <div className="flex flex-col items-start gap-3 p-4 relative self-stretch w-full flex-[0_0_auto]">
                {relatedOrganizations.length === 0 ? (
                  <></>
                ) : (
                  <>
                    {/* Vertical ScrollArea for small screens */}
                    <ScrollArea dir={currentLanguage === 'ar' ? 'rtl' : 'ltr'} className="h-[300px] w-full rounded-md border p-4 block md:hidden">
                      <div className="flex flex-col gap-3 pr-4">
                        {relatedOrganizations.map((org) => (
                          <Card
                            key={org.organizationId}
                            className="flex h-[94px] w-full items-center gap-3 p-4 relative bg-card rounded-lg border border-border cursor-pointer transition-all duration-300 hover:shadow-lg hover:scale-105 hover:border-primary/50 hover:bg-accent/50 group"
                            onClick={() => handleRelatedOrgClick(org)}
                          >
                            <CardContent className="flex items-center gap-3 p-0">
                              <div
                                className="relative w-20 h-20 rounded-lg bg-cover bg-center flex-shrink-0 transition-transform duration-300 group-hover:scale-110"
                                style={{
                                  backgroundImage: org.logoUrl ? `url(${org.logoUrl})` : 'none',
                                  backgroundColor: org.logoUrl ? 'transparent' : '#f0f0f0'
                                }}
                              />
                              <div className="flex flex-col min-w-0 flex-1 items-start relative">
                                <h3 className="relative text-wrap self-stretch mt-[-1.00px] [font-family:'Newsreader-Bold',Helvetica] font-bold text-card-foreground text-sm sm:text-base tracking-[0] leading-4 sm:leading-5 transition-colors duration-300 group-hover:text-primary">
                                  {org.name}
                                </h3>
                                <span className="text-xs text-muted-foreground capitalize mt-1">
                                  {org.type === "organizations" ? (currentLanguage === 'ar' ? 'منظمة' : 'Organization') : (currentLanguage === 'ar' ? 'مبادرة' : 'Initiative')}
                                </span>
                              </div>
                            </CardContent>
                          </Card>
                        ))}
                      </div>
                    </ScrollArea>

                    {/* Horizontal ScrollArea for medium and large screens */}
                    <ScrollArea dir={currentLanguage === 'ar' ? 'rtl' : 'ltr'} className="w-full rounded-md border p-4 hidden md:block">
                      <div className="flex gap-3 pb-4">
                        {relatedOrganizations.map((org) => (
                          <Card
                            key={org.organizationId}
                            className="flex h-[94px] w-auto items-center gap-3 p-4 relative bg-card rounded-lg border border-border cursor-pointer transition-all duration-300 hover:shadow-lg hover:scale-105 hover:border-primary/50 hover:bg-accent/50 flex-shrink-0 group"
                            onClick={() => handleRelatedOrgClick(org)}
                          >
                            <CardContent className="flex items-center gap-3 p-0">
                              <div
                                className="relative w-10 h-10 rounded-lg bg-cover bg-center flex-shrink-0 transition-transform duration-300 group-hover:scale-110"
                                style={{
                                  backgroundImage: org.logoUrl ? `url(${org.logoUrl})` : 'none',
                                  backgroundColor: org.logoUrl ? 'transparent' : '#f0f0f0'
                                }}
                              />
                              <div className="flex flex-col min-w-0 flex-1 items-start relative">
                                <h3 className="relative text-wrap self-stretch mt-[-1.00px] [font-family:'Newsreader-Bold',Helvetica] font-bold text-card-foreground text-sm sm:text-base tracking-[0] leading-4 sm:leading-5 transition-colors duration-300 group-hover:text-primary">
                                  {org.name}
                                </h3>
                                <span className="text-xs text-muted-foreground capitalize">
                                  {org.type === "organizations" ? (currentLanguage === 'ar' ? 'منظمة' : 'Org') : (currentLanguage === 'ar' ? 'مبادرة' : 'Init')}
                                </span>
                              </div>
                            </CardContent>
                          </Card>
                        ))}
                      </div>
                      <ScrollBar orientation="horizontal" className="mt-2" />
                    </ScrollArea>
                  </>
                )}
              </div>

              {/* Organization Details Section */}
              <div className="flex flex-col items-start pt-5 pb-3 px-4 relative self-stretch w-full flex-[0_0_auto]">
                <h2 className="relative self-stretch mt-[-1.00px] [font-family:'Newsreader-Bold',Helvetica] font-bold text-foreground text-xl sm:text-[22px] tracking-[0] leading-6 sm:leading-7">
                  {currentOrganization.name}
                </h2>
              </div>

              {/* Organization Image */}
              <div className="flex items-start p-4 relative self-stretch w-full flex-[0_0_auto] bg-background">
                <Card className="gap-2 bg-background rounded-xl overflow-hidden flex items-start relative flex-1 grow border-0">
                  <CardContent
                    className="p-0 relative flex-1 grow h-[200px] sm:h-[280px] lg:h-[400px] bg-contain bg-no-repeat bg-center"
                    style={{
                      backgroundImage: `url(${currentOrganization.imageUrl})`,
                    }}
                  />
                </Card>
              </div>

              {/* Organization Description */}
              <div className="flex flex-col items-start pt-1 pb-3 px-4 relative self-stretch w-full flex-[0_0_auto]">
                <p className="relative self-stretch mt-[-1.00px] [font-family:'Newsreader-Regular',Helvetica] font-normal text-foreground text-sm sm:text-base tracking-[0] leading-5 sm:leading-6">
                  {currentOrganization.description}
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex items-start justify-around relative self-stretch w-full flex-[0_0_auto]">
                <div className="flex flex-row gap-3 sm:gap-[12px] px-4 py-3 items-start relative flex-1 grow">
                  {actionButtons.map((button, index) => (
                    <Button
                      key={index}
                      variant="outline"
                      className="h-8 px-4 py-0 bg-primary text-primary-foreground rounded-2xl border-none min-w-[84px] max-w-[480px]"
                      onClick={() => handleButtonClick(button.url)}
                    >
                      {button.text}
                    </Button>
                  ))}
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Organizations;
