import React, { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import ShareDialog from '@/components/ShareDialog';
import { useLanguage } from "@/LanguageContext";
import { useParams } from "react-router-dom";
import { testimonialsApi } from "@/services/testmonialsApi";
import type { TestimonialData } from "@/types/testmonials";

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
        Unable to Load Testimony
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
    <p className="text-foreground">Loading testimony...</p>
  </div>
);

const Testimonials = (): React.ReactElement => {
  const { currentLanguage } = useLanguage();
  const { storyId } = useParams<{ storyId?: string }>();
  
  const [testimonialData, setTestimonialData] = useState<TestimonialData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);

  // Fetch testimony data from API
  const fetchTestimonyData = async () => {
    try {
      setLoading(true);
      setError(false);
      const data = await testimonialsApi.getTestimonyData(storyId);
      setTestimonialData(data);
    } catch (err) {
      console.error("Failed to fetch testimony data:", err);
      setError(true);
      setTestimonialData(null);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTestimonyData();
  }, [storyId]);

  // Handle retry
  const handleRetry = () => {
    fetchTestimonyData();
  };

  // Function to check if URL is a video
  const isVideoUrl = (url: string) => {
    return (
      url.includes(".mp4") || url.includes(".webm") || url.includes(".ogg")
    );
  };

  // Helper function to extract only the intro part of the content (before first \n)
  const extractIntroContent = (content: string): string => {
    return content.split("\n")[0].trim();
  };

  // Show loading state
  if (loading) {
    return <LoadingState />;
  }

  // Show error state
  if (error || !testimonialData) {
    return <ErrorState onRetry={handleRetry} />;
  }

  // Get current language data
  const currentData =
    testimonialData[currentLanguage as keyof typeof testimonialData] ||
    testimonialData.en;

  return (
    <div className="flex flex-col items-start relative bg-background">
      <div className="flex flex-col min-h-[800px] items-start relative self-stretch w-full flex-[0_0_auto] bg-card">
        <header className="flex flex-col items-start relative self-stretch w-full flex-[0_0_auto]">
          {/* Main Content */}
          <main className="items-start justify-center px-2 md:px-4 lg:px-8 py-5 flex-1 grow flex relative self-stretch w-full">
            <div className="flex flex-col w-full max-w-7xl items-start relative flex-1 grow">
              {/* Article Title */}
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between items-start pt-5 pb-3 px-2 sm:px-4 relative self-stretch w-full flex-[0_0_auto]">
                <h2 className="relative mt-[-1.00px] [font-family:'Newsreader-Bold',Helvetica] font-bold text-foreground text-xl sm:text-2xl md:text-[28px] tracking-[0] leading-tight md:leading-[35px] flex-1">
                  {currentData.title}
                </h2>
                <ShareDialog
                  buttonText={currentData.buttonText}
                  title={currentData.title}
                />
              </div>

              {/* Survivor Information Card */}
              {/* <div className="flex flex-col items-start pt-1 pb-3 px-2 sm:px-4 relative self-stretch w-full flex-[0_0_auto]">
                <Card className="w-full bg-muted/50 border border-border">
                  <CardContent className="p-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
                      <div>
                        <span className="font-semibold text-foreground">
                          {currentLanguage === "ar"
                            ? "الناجي : "
                            : "Survivor : "}
                        </span>
                        <span className="ml-2 text-muted-foreground">
                          {currentData.survivorName}
                        </span>
                      </div>
                      <div>
                        <span className="font-semibold text-foreground">
                          {currentLanguage === "ar"
                            ? "العمر وقت الحادث : "
                            : "Age at incident : "}
                        </span>
                        <span className="ml-2 text-muted-foreground">
                          {currentLanguage === "ar"
                            ? currentData.survivorAge.toLocaleString("ar-EG")
                            : currentData.survivorAge}
                        </span>
                      </div>
                      <div>
                        <span className="font-semibold text-foreground">
                          {currentLanguage === "ar"
                            ? "تاريخ الحادث : "
                            : "Date of incident : "}
                        </span>
                        <span className="ml-2 text-muted-foreground">
                          {new Date(
                            currentData.dateOfIncident
                          ).toLocaleDateString(
                            currentLanguage === "ar" ? "ar-SA" : "en-US",
                            { year: "numeric", month: "long", day: "numeric" }
                          )}
                        </span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div> */}

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
                              {isVideoUrl(media) ? (
                                <video
                                  className="w-full h-auto object-cover rounded-lg"
                                  controls
                                  preload="metadata"
                                >
                                  <source src={media} type="video/mp4" />
                                  {currentLanguage === "ar"
                                    ? "متصفحك لا يدعم عنصر الفيديو."
                                    : "Your browser does not support the video tag."}
                                </video>
                              ) : (
                                <img
                                  className="w-full h-auto object-cover rounded-lg"
                                  alt={`Testimonial media ${index + 1}`}
                                  src={media}
                                />
                              )}
                            </CardContent>
                          </Card>
                        </CarouselItem>
                      ))}
                    </CarouselContent>
                    {/* Hide carousel buttons on small screens (sm and below) */}
                    <CarouselPrevious className="hidden md:flex" />
                    <CarouselNext className="hidden md:flex" />
                  </Carousel>
                </div>
              )}

              {/* Article Content - Updated to show only intro */}
              <div className="flex flex-col items-start pt-1 pb-3 px-2 sm:px-4 relative self-stretch w-full flex-[0_0_auto]">
                <div className="relative self-stretch mt-[-1.00px] [font-family:'Newsreader-Regular',Helvetica] font-normal text-foreground text-sm sm:text-base tracking-[0] leading-5 sm:leading-6 whitespace-pre-line">
                  {extractIntroContent(currentData.content)}
                </div>
              </div>
            </div>
          </main>
        </header>
      </div>
    </div>
  );
};

export default Testimonials;
