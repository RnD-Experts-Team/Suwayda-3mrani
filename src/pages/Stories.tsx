import React, { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { useLanguage } from "@/LanguageContext";
import { useNavigate } from "react-router-dom";
import { storiesApi } from "@/services/storiesApi";
import type { StoriesData } from "@/types/stories";

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
        Unable to Load Stories
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
    <p className="text-foreground">Loading stories...</p>
  </div>
);

export default function Stories(): React.ReactElement {
  const { currentLanguage } = useLanguage();
  const navigate = useNavigate();
  
  const [storiesData, setStoriesData] = useState<StoriesData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);

  // Fetch data from API
  const fetchStoriesData = async () => {
    try {
      setLoading(true);
      setError(false);
      const data = await storiesApi.getStoriesData();
      setStoriesData(data);
    } catch (err) {
      console.error('Failed to fetch stories data:', err);
      setError(true);
      setStoriesData(null);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchStoriesData();
  }, []);

  // Handle retry
  const handleRetry = () => {
    fetchStoriesData();
  };

  // Helper function to extract story ID from URL
  const extractStoryId = (url: string): string => {
    // Extract the last part of the URL after the last "/"
    const parts = url.split('/');
    return parts[parts.length - 1];
  };

  // Show loading state
  if (loading) {
    return <LoadingState />;
  }

  // Show error state
  if (error || !storiesData) {
    return <ErrorState onRetry={handleRetry} />;
  }

  return (
    <div className="flex flex-col items-start relative bg-background">
      <div className="flex flex-col min-h-[800px] items-start relative self-stretch w-full flex-[0_0_auto] bg-card">
        <main className="items-start justify-center px-2 md:px-4 lg:px-8 py-5 flex-1 grow flex relative self-stretch w-full">
          <div className="flex flex-col w-full max-w-7xl items-start relative flex-1 grow mb-[-1.00px]">
            {/* Page Header */}
            <section className="flex flex-wrap items-start justify-around gap-[12px_12px] p-4 relative self-stretch w-full flex-[0_0_auto]">
              <div className="inline-flex align-center flex-col w-full items-center gap-3 relative flex-[0_0_auto]">
                <div className="w-full max-w-[658px] flex-[0_0_auto] flex flex-col items-start relative">
                  <h2 className="relative text-center self-stretch mt-[-1.00px] [font-family:'Newsreader-Bold',Helvetica] font-bold text-foreground text-2xl sm:text-3xl lg:text-[32px] tracking-[0] leading-8 sm:leading-10">
                    {storiesData.pageTitle[currentLanguage]}
                  </h2>
                </div>

                <div className="inline-flex flex-col text-wrap items-start relative flex-[0_0_auto]">
                  <p className="relative text-wrap self-stretch mt-[-1.00px] [font-family:'Newsreader-Regular',Helvetica] font-normal text-muted-foreground text-sm ">
                    {storiesData.pageDescription[currentLanguage]}
                  </p>
                </div>
              </div>
            </section>

            {/* Featured Stories Section */}
            <section className="flex flex-col items-start pt-4 pb-2 px-4 relative self-stretch w-full flex-[0_0_auto]">
              <h3 className="relative self-stretch mt-[-1.00px] [font-family:'Newsreader-Bold',Helvetica] font-bold text-foreground text-lg tracking-[0] leading-[23px]">
                {storiesData.featuredSectionTitle[currentLanguage]}
              </h3>
            </section>

            <div className="flex items-start relative self-stretch w-full flex-[0_0_auto]">
              <div className="flex flex-col sm:flex-row items-start gap-3 p-4 relative flex-1 grow">
                {storiesData.featuredStories.map((story) => (
                  <Card
                    key={story.id}
                    className="flex flex-col w-full sm:min-w-60 items-start gap-4 relative flex-1 self-stretch grow rounded-lg bg-card border border-border cursor-pointer transition-all duration-300 hover:shadow-lg hover:scale-105 hover:border-primary/50"
                    onClick={() => navigate(`/testmonials/${extractStoryId(story.url)}`)}
                  >
                    <div
                      className="relative self-stretch w-full h-[169px] rounded-xl bg-cover bg-no-repeat bg-center transition-transform duration-300 hover:scale-102"
                      style={{ backgroundImage: `url(${story.imageUrl})` }}
                    />
                    <CardContent className="flex flex-col items-start p-4 relative self-stretch w-full">
                      <h4 className="relative self-stretch mt-[-1.00px] [font-family:'Newsreader-Medium',Helvetica] font-medium text-card-foreground text-base tracking-[0] leading-6 transition-colors duration-300 hover:text-primary">
                        {story.title[currentLanguage]}
                      </h4>
                      <p className="relative self-stretch mt-[-1.00px] [font-family:'Newsreader-Regular',Helvetica] font-normal text-muted-foreground text-sm tracking-[0] leading-[21px]">
                        {story.description[currentLanguage]}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* All Stories Section */}
            <section className="flex flex-col items-start pt-4 pb-2 px-4 relative self-stretch w-full flex-[0_0_auto]">
              <h3 className="relative self-stretch mt-[-1.00px] [font-family:'Newsreader-Bold',Helvetica] font-bold text-foreground text-lg tracking-[0] leading-[23px]">
                {storiesData.allStoriesTitle[currentLanguage]}
              </h3>
            </section>

            <div className="flex flex-col items-start gap-3 p-4 relative self-stretch w-full flex-[0_0_auto]">
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 relative w-full">
                {storiesData.allStories.map((story) => (
                  <Card
                    key={story.id}
                    className="gap-3 pt-0 pb-3 px-0 self-stretch flex flex-col items-start relative bg-card border border-border cursor-pointer transition-all duration-300 hover:shadow-lg hover:scale-105 hover:border-primary/50"
                    onClick={() => navigate(`/testmonials/${extractStoryId(story.url)}`)}
                  >
                    <div
                      className="relative self-stretch w-full h-[99px] rounded-xl bg-cover bg-no-repeat bg-center transition-transform duration-300 hover:scale-102"
                      style={{ 
                        backgroundImage: story.imageUrl 
                          ? `url(${story.imageUrl})` 
                          : 'url(https://images.unsplash.com/photo-1557804506-669a67965ba0?w=500&h=300&fit=crop)',
                        backgroundColor: story.imageUrl ? 'transparent' : '#f0f0f0'
                      }}
                    />
                    <CardContent className="flex flex-col items-start p-2 relative self-stretch w-full">
                      <h4 className="relative text-center self-stretch mt-[-1.00px] [font-family:'Newsreader-Medium',Helvetica] font-medium text-card-foreground text-sm sm:text-base tracking-[0] leading-5 sm:leading-6 transition-colors duration-300 hover:text-primary">
                        {story.title[currentLanguage]}
                      </h4>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
