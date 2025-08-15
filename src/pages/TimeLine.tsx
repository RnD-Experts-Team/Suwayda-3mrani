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

/* ────────────────  UI states  ──────────────── */
const ErrorState = ({ onRetry }: { onRetry: () => void }) => (
  <div className="flex flex-col items-center justify-center min-h-[60vh] bg-background px-4">
    <div className="text-center max-w-md">
      <svg
        className="mx-auto h-16 w-16 text-muted-foreground mb-6"
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
      <h2 className="text-2xl font-bold text-foreground mb-4">Unable to Load Timeline</h2>
      <p className="text-muted-foreground mb-8">
        We're having trouble connecting to our servers. Please check your internet connection and
        try again.
      </p>
      <button
        onClick={onRetry}
        className="inline-flex items-center px-6 py-3 rounded-md bg-primary text-primary-foreground hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-ring transition-colors"
      >
        Refresh Page
      </button>
    </div>
  </div>
);

const LoadingState = () => (
  <div className="flex flex-col items-center justify-center min-h-[60vh] bg-background">
    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mb-4" />
    <p className="text-foreground">Loading timeline...</p>
  </div>
);

/* ──────────────────────  Component  ───────────────────── */
const TimeLine = (): React.ReactElement => {
  const { currentLanguage } = useLanguage();

  const [timelineData, setTimelineData] = useState<TimelineData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [selectedItem, setSelectedItem] = useState(0); // default to first item

  /*──────────  data fetch  ─────────*/
  const fetchTimelineData = async () => {
    try {
      setLoading(true);
      setError(false);
      const data = await timelineApi.getTimelineData();
      setTimelineData(data);
    } catch (err) {
      console.error("Failed to fetch timeline data:", err);
      setError(true);
      setTimelineData(null);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTimelineData();
  }, []);

  /*──────────  event handlers  ─────────*/
  const handleRetry = () => {
    setSelectedItem(0);
    fetchTimelineData();
  };

  const handleTimelineClick = (index: number) => setSelectedItem(index);

  /*──────────  UI states  ─────────*/
  if (loading) return <LoadingState />;
  if (error || !timelineData) return <ErrorState onRetry={handleRetry} />;

  const currentData = timelineData[currentLanguage];
  const timelineItems = currentData.items;

  return (
    <div className="flex flex-col items-start bg-background">
      <div className="flex flex-col w-full bg-background">
        <main className="flex flex-col w-full max-w-8xl mx-auto px-2 md:px-4 lg:px-8 py-5">
          {/* Header */}
          <h2 className="mb-6 [font-family:'Newsreader-Bold',Helvetica] font-bold text-foreground text-2xl sm:text-3xl lg:text-[32px] leading-8 sm:leading-10">
            {currentData.title}
          </h2>

          {/* Grid layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Timeline (left / top) */}
            <Box sx={{ width: "100%", p: 2 }}>
              <Timeline position={currentLanguage === "ar" ? "left" : "right"}>
                {timelineItems.map((item, idx) => (
                  <TimelineItem key={idx}>
                    <TimelineOppositeContent
                      sx={{
                        m: "auto 0",
                        color:
                          selectedItem === idx ? "var(--foreground)" : "var(--muted-foreground)",
                        fontFamily: "Newsreader-Regular, Helvetica",
                        fontSize: "16px",
                        fontWeight: selectedItem === idx ? "bold" : "normal",
                        textAlign: currentLanguage === "ar" ? "left" : "right",
                        direction: currentLanguage === "ar" ? "rtl" : "ltr",
                        transition: "all 0.3s ease",
                      }}
                    >
                      {item.period}
                    </TimelineOppositeContent>

                    <TimelineSeparator>
                      <TimelineDot
                        onClick={() => handleTimelineClick(idx)}
                        sx={{
                          backgroundColor:
                            selectedItem === idx || item.isHighlighted
                              ? "var(--primary)"
                              : "var(--muted)",
                          border: selectedItem === idx ? "3px solid var(--primary)" : "2px solid var(--border)",
                          width: selectedItem === idx ? 20 : 16,
                          height: selectedItem === idx ? 20 : 16,
                          cursor: "pointer",
                          transition: "all 0.3s ease",
                          "&:hover": {
                            backgroundColor: "var(--primary)",
                            transform: "scale(1.2)",
                          },
                        }}
                      />
                      {idx < timelineItems.length - 1 && (
                        <TimelineConnector
                          sx={{
                            backgroundColor:
                              selectedItem === idx || selectedItem === idx + 1
                                ? "var(--primary)"
                                : "var(--border)",
                            transition: "background-color 0.3s ease",
                          }}
                        />
                      )}
                    </TimelineSeparator>

                    <TimelineContent sx={{ py: "12px", px: 2 }}>
                      <Typography
                        component="span"
                        sx={{
                          color:
                            selectedItem === idx ? "var(--foreground)" : "var(--muted-foreground)",
                          fontFamily: "Newsreader-Medium, Helvetica",
                          fontSize: "16px",
                          fontWeight: selectedItem === idx ? "bold" : "medium",
                          cursor: "pointer",
                          transition: "all 0.3s ease",
                          direction: currentLanguage === "ar" ? "rtl" : "ltr",
                          "&:hover": { color: "var(--foreground)" },
                        }}
                        onClick={() => handleTimelineClick(idx)}
                      >
                        {item.title}
                      </Typography>
                    </TimelineContent>
                  </TimelineItem>
                ))}
              </Timeline>
            </Box>

            {/* Event Card (right / bottom) */}
            <div className="flex self-center justify-self-center  justify-center md:justify-start">
              <Card className="max-w-[425px] w-full bg-card border border-border rounded-xl">
                <CardContent className="p-0">
                  {/* Media */}
                  <div className="relative w-full h-64 rounded-t-xl overflow-hidden bg-muted">
                    {timelineItems[selectedItem].mediaType === "video" ? (
                      <iframe
                        src={timelineItems[selectedItem].mediaUrl}
                        title={timelineItems[selectedItem].title}
                        className="w-full h-full border-none"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                        loading="lazy"
                      />
                    ) : (
                      <img
                        src={timelineItems[selectedItem].mediaUrl}
                        alt={timelineItems[selectedItem].title}
                        className="w-full h-full object-cover rounded-t-xl"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.style.display = "none";
                          target.parentElement!.innerHTML = `<div class="w-full h-full flex items-center justify-center bg-muted text-muted-foreground rounded-t-xl">${
                            currentLanguage === "ar" ? "الصورة غير متوفرة" : "Image not available"
                          }</div>`;
                        }}
                      />
                    )}
                  </div>

                  {/* Title & period */}
                  <div className="px-4 pt-4">
                    <h3 className="[font-family:'Newsreader-Bold',Helvetica] font-bold text-foreground text-lg">
                      {timelineItems[selectedItem].title}
                    </h3>
                    <p className="mt-2 [font-family:'Newsreader-Regular',Helvetica] text-muted-foreground text-sm">
                      {timelineItems[selectedItem].period}
                    </p>
                  </div>

                  {/* Description */}
                  <div className="px-4 pb-4 pt-2">
                    <p className="[font-family:'Newsreader-Regular',Helvetica] text-muted-foreground text-base leading-6">
                      {timelineItems[selectedItem].description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default TimeLine;
