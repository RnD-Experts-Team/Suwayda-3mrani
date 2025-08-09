import React, { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineOppositeContent,
} from "@mui/lab";
import { Typography, Box } from "@mui/material";
import { useLanguage } from "@/LanguageContext";
import { timelineApi } from "@/services/timelineApi";
import type { TimelineData } from "@/types/timeline";

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
        Unable to Load Timeline
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
    <p className="text-foreground">Loading timeline...</p>
  </div>
);

const TimeLine = (): React.ReactElement => {
  const { currentLanguage } = useLanguage();
  
  const [timelineData, setTimelineData] = useState<TimelineData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);
  const [selectedItem, setSelectedItem] = useState(0); // Default to first item

  // Fetch timeline data from API
  const fetchTimelineData = async () => {
    try {
      setLoading(true);
      setError(false);
      const data = await timelineApi.getTimelineData();
      setTimelineData(data);
    } catch (err) {
      console.error('Failed to fetch timeline data:', err);
      setError(true);
      setTimelineData(null);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTimelineData();
  }, []);

  // Handle retry
  const handleRetry = () => {
    setSelectedItem(0);
    fetchTimelineData();
  };

  // Handler for timeline dot clicks
  const handleTimelineClick = (index: number) => {
    setSelectedItem(index);
  };

  // Show loading state
  if (loading) {
    return <LoadingState />;
  }

  // Show error state
  if (error || !timelineData) {
    return <ErrorState onRetry={handleRetry} />;
  }

  const currentData = timelineData[currentLanguage];
  const timelineItems = currentData.items;

  return (
    <div className="flex flex-col items-start relative bg-background">
      <div className="flex flex-col min-h-auto items-start relative w-full flex-[0_0_auto] bg-background">
        <div className="flex flex-col items-start relative w-full flex-[0_0_auto]">
          {/* Main Content */}
          <main className="items-start justify-center px-2 md:px-4 lg:px-8 py-5 flex-1 grow flex relative self-stretch w-full">
            <div className="flex flex-col w-full max-w-8xl items-start relative flex-1 grow">
              {/* Timeline Header */}
              <div className="flex flex-wrap items-start justify-around gap-[12px_12px] p-4 relative self-stretch w-full flex-[0_0_auto]">
                <div className="inline-flex flex-col min-w-72 items-start relative flex-[0_0_auto]">
                  <h2 className="relative self-stretch mt-[-1.00px] [font-family:'Newsreader-Bold',Helvetica] font-bold text-foreground text-2xl sm:text-3xl lg:text-[32px] tracking-[0] leading-8 sm:leading-10">
                    {currentData.title}
                  </h2>
                </div>
              </div>

              {/* Responsive Layout Container */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
                {/* MUI Timeline - Left side on md/lg, top on small */}
                <div className="flex-1 md:flex-[0_0_60%]">
  <Box sx={{ width: "100%", padding: "16px" }}>
    <Timeline position={currentLanguage === 'ar' ? "left" : "right"}>
      {timelineItems.map((item, index) => (
        <TimelineItem key={index}>
          <TimelineOppositeContent
            sx={{
              m: "auto 0",
              color: selectedItem === index ? "var(--foreground)" : "var(--muted-foreground)",
              fontFamily: "Newsreader-Regular, Helvetica",
              fontSize: "16px",
              fontWeight: selectedItem === index ? "bold" : "normal",
              transition: "all 0.3s ease",
              textAlign: currentLanguage === 'ar' ? 'left' : 'right',
              direction: currentLanguage === 'ar' ? 'rtl' : 'ltr',
              minWidth: currentLanguage === 'ar' ? '120px' : 'auto',
            }}
            align={currentLanguage === 'ar' ? "left" : "right"}
            variant="body2"
          >
            {item.period}
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot
              onClick={() => handleTimelineClick(index)}
              sx={{
                backgroundColor: selectedItem === index
                  ? "var(--primary)"
                  : item.isHighlighted
                  ? "var(--primary)"
                  : "var(--muted)",
                border: selectedItem === index
                  ? "3px solid var(--primary)"
                  : item.isHighlighted
                  ? "2px solid var(--primary)"
                  : "2px solid var(--border)",
                width: selectedItem === index ? "20px" : "16px",
                height: selectedItem === index ? "20px" : "16px",
                cursor: "pointer",
                transition: "all 0.3s ease",
                boxShadow: selectedItem === index 
                  ? "0 0 10px color-mix(in srgb, var(--primary) 50%, transparent)" 
                  : "none",
                '&:hover': {
                  backgroundColor: "var(--primary)",
                  transform: "scale(1.2)",
                  boxShadow: "0 0 15px color-mix(in srgb, var(--primary) 70%, transparent)",
                },
              }}
            />
            {index < timelineItems.length - 1 && (
              <TimelineConnector
                sx={{ 
                  backgroundColor: selectedItem === index || selectedItem === index + 1 
                    ? "var(--primary)" 
                    : "var(--border)",
                  transition: "background-color 0.3s ease"
                }}
              />
            )}
          </TimelineSeparator>
          <TimelineContent sx={{ py: "12px", px: 2 }}>
            <Typography
              variant="h6"
              component="span"
              sx={{
                color: selectedItem === index ? "var(--foreground)" : "var(--muted-foreground)",
                fontFamily: "Newsreader-Medium, Helvetica",
                fontSize: "16px",
                fontWeight: selectedItem === index ? "bold" : "medium",
                cursor: "pointer",
                transition: "all 0.3s ease",
                textShadow: selectedItem === index 
                  ? "0 0 5px color-mix(in srgb, var(--foreground) 30%, transparent)" 
                  : "none",
                direction: currentLanguage === 'ar' ? 'rtl' : 'ltr',
                textAlign: currentLanguage === 'ar' ? 'right' : 'left',
                '&:hover': {
                  color: "var(--foreground)",
                  textShadow: "0 0 5px color-mix(in srgb, var(--foreground) 50%, transparent)",
                },
              }}
              onClick={() => handleTimelineClick(index)}
            >
              {item.title}
            </Typography>
          </TimelineContent>
        </TimelineItem>
      ))}
    </Timeline>
  </Box>
</div>


                {/* Dynamic Event Card - Right side on md/lg, bottom on small */}
                <div className="flex-1 md:flex-[0_0_40%] flex items-start">
                  <div className="flex flex-col items-start p-4 relative self-stretch w-full flex-[0_0_auto]">
                    <Card className="flex items-start relative self-stretch w-full flex-[0_0_auto] rounded-xl bg-card border border-border">
                      <CardContent className="flex flex-col p-0">
                        {/* Dynamic Image/Video - now first */}
                        <div className="relative w-full h-64 rounded-xl mb-4 overflow-hidden bg-muted">
                          {timelineItems[selectedItem].mediaType === "video" ? (
                            <video 
                              className="w-full h-full object-cover rounded-xl"
                              controls
                              src={timelineItems[selectedItem].mediaUrl}
                            >
                              {currentLanguage === 'ar' 
                                ? 'متصفحك لا يدعم عنصر الفيديو.' 
                                : 'Your browser does not support the video tag.'
                              }
                            </video>
                          ) : (
                            <img 
                              className="w-full h-full object-cover rounded-xl"
                              src={timelineItems[selectedItem].mediaUrl}
                              alt={timelineItems[selectedItem].title}
                              onError={(e) => {
                                const target = e.target as HTMLImageElement;
                                target.style.display = 'none';
                                target.parentElement!.innerHTML = `<div class="w-full h-full flex items-center justify-center bg-muted text-muted-foreground rounded-xl">${currentLanguage === 'ar' ? 'الصورة غير متوفرة' : 'Image not available'}</div>`;
                              }}
                            />
                          )}
                        </div>
                        
                        {/* Dynamic Title - now second */}
                        <div className="flex flex-col items-start px-4 relative self-stretch w-full flex-[0_0_auto]">
                          <h3 className="relative self-stretch mt-[-1.00px] [font-family:'Newsreader-Bold',Helvetica] font-bold text-foreground text-lg tracking-[0] leading-[23px]">
                            {timelineItems[selectedItem].title}
                          </h3>
                          <p className="relative self-stretch mt-2 [font-family:'Newsreader-Regular',Helvetica] font-normal text-muted-foreground text-sm tracking-[0] leading-5">
                            {timelineItems[selectedItem].period}
                          </p>
                        </div>
                        
                        {/* Dynamic Description - now third */}
                        <div className="flex items-end justify-around gap-3 px-4 pb-4 relative self-stretch w-full flex-[0_0_auto]">
                          <div className="flex flex-col items-start relative flex-1 grow">
                            <p className="relative self-stretch mt-[-1.00px] [font-family:'Newsreader-Regular',Helvetica] font-normal text-muted-foreground text-base tracking-[0] leading-6">
                              {timelineItems[selectedItem].description}
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default TimeLine;
