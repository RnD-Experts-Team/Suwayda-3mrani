import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import React, { useState, useEffect } from "react";
import { useLanguage } from "@/LanguageContext";
import { useParams } from "react-router-dom";
import { caseApi } from "@/services/caseApi";
import type { CaseData } from "@/types/case";

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
        Unable to Load Case
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
    <p className="text-foreground">Loading case...</p>
  </div>
);

export default function Case(): React.ReactElement {
  const { currentLanguage } = useLanguage();
  const { caseId } = useParams<{ caseId?: string }>();
  
  const [caseData, setCaseData] = useState<CaseData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);

  // Fetch case data from API
  const fetchCaseData = async () => {
    try {
      setLoading(true);
      setError(false);
      const data = await caseApi.getCaseData(caseId);
      setCaseData(data);
    } catch (err) {
      console.error('Failed to fetch case data:', err);
      setError(true);
      setCaseData(null);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCaseData();
  }, [caseId]);

  // Handle retry
  const handleRetry = () => {
    fetchCaseData();
  };

  // Helper function to detect if URL is a video
  const isVideoUrl = (url: string): boolean => {
    const videoExtensions = ['.mp4', '.webm', '.ogg', '.avi', '.mov', '.wmv', '.flv', '.mkv'];
    return videoExtensions.some(ext => url.toLowerCase().includes(ext));
  };

  // Helper function to extract only the intro part of the content (before first \n)
  const extractIntroContent = (content: string): string => {
    return content.split('\n')[0].trim();
  };

  // Show loading state
  if (loading) {
    return <LoadingState />;
  }

  // Show error state
  if (error || !caseData) {
    return <ErrorState onRetry={handleRetry} />;
  }

  const currentData = caseData[currentLanguage];

  return (
    <div className="flex flex-col items-start relative bg-background">
      <div className="flex flex-col min-h-[600px] md:min-h-[800px] items-start relative self-stretch w-full flex-[0_0_auto] bg-card">
        <div className="flex flex-col items-start relative self-stretch w-full flex-[0_0_auto]">
          <div className="flex items-start justify-center px-2 md:px-4 lg:px-8 py-5 relative flex-1 self-stretch w-full grow">
            <div className="flex flex-col max-w-7xl w-full items-start px-0 py-5 relative">
              {/* Image/Video Carousel */}
              {currentData.images && currentData.images.length > 0 && (
                <div className="relative self-stretch w-full flex-[0_0_auto] mb-4">
                  <Carousel
                    className="w-full"
                    opts={{
                      direction: currentLanguage === "ar" ? "rtl" : "ltr",
                    }}
                  >
                    <CarouselContent>
                      {currentData.images.map((media, index) => (
                        <CarouselItem key={index}>
                          <Card className="relative self-stretch w-full flex-[0_0_auto] bg-transparent border-0">
                            <CardContent className="p-0">
                              <AspectRatio ratio={16 / 9}>
                                {isVideoUrl(media) ? (
                                  <video
                                    className="w-full h-full object-cover rounded-lg"
                                    controls
                                    preload="metadata"
                                  >
                                    <source src={media} type="video/mp4" />
                                    {currentLanguage === 'ar' 
                                      ? 'متصفحك لا يدعم عنصر الفيديو.' 
                                      : 'Your browser does not support the video tag.'
                                    }
                                  </video>
                                ) : (
                                  <img
                                    className="w-full h-full object-cover rounded-lg"
                                    alt={`Case media ${index + 1}`}
                                    src={media}
                                  />
                                )}
                              </AspectRatio>
                            </CardContent>
                          </Card>
                        </CarouselItem>
                      ))}
                    </CarouselContent>
                    {/* Hide carousel buttons on small screens */}
                    <CarouselPrevious className="hidden md:flex" />
                    <CarouselNext className="hidden md:flex" />
                  </Carousel>
                </div>
              )}
              
              {/* Content heading */}
              <div className="flex flex-col items-start pt-5 pb-3 px-2 sm:px-4 relative self-stretch w-full flex-[0_0_auto]">
                <h2 className="relative self-stretch mt-[-1.00px] font-bold text-foreground text-lg sm:text-xl md:text-[22px] tracking-[0] leading-6 sm:leading-7 font-['Newsreader-Bold',Helvetica]">
                  {currentData.title}
                </h2>
              </div>

              {/* Case metadata */}
              {/* {caseData.metadata && (
                <div className="flex flex-col items-start pt-1 pb-3 px-2 sm:px-4 relative self-stretch w-full flex-[0_0_auto]">
                  <Card className="w-full bg-muted/50 border border-border">
                    <CardContent className="p-4">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
                        <div>
                          <span className="font-semibold text-foreground">
                            {currentLanguage === 'ar' ? 'نوع القضية : ' : 'Case Type:'} 
                          </span>
                          <span className="ml-2 text-muted-foreground capitalize">{caseData.metadata.type}</span>
                        </div>
                        <div>
                          <span className="font-semibold text-foreground">
                            {currentLanguage === 'ar' ? 'تاريخ الحادث : ' : 'Incident Date:'} 
                          </span>
                          <span className="ml-2 text-muted-foreground">
                            {new Date(caseData.metadata.incident_date).toLocaleDateString(
                              currentLanguage === 'ar' ? 'ar-SA' : 'en-US',
                              { year: 'numeric', month: 'long', day: 'numeric' }
                            )}
                          </span>
                        </div>
                        <div className="sm:col-span-2">
                          <span className="font-semibold text-foreground">
                            {currentLanguage === 'ar' ? 'الموقع : ' : 'Location:'} 
                          </span>
                          <span className="ml-2 text-muted-foreground">{caseData.metadata.location}</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              )} */}

              {/* Content description - Updated to show only intro */}
              <div className="flex flex-col items-start pt-1 pb-3 px-2 sm:px-4 relative self-stretch w-full flex-[0_0_auto]">
                <div 
                  className="relative self-stretch mt-[-1.00px] font-normal text-foreground text-sm sm:text-base tracking-[0] leading-5 sm:leading-6 font-['Newsreader-Regular',Helvetica] whitespace-pre-line"
                >
                  {extractIntroContent(currentData.content)}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
