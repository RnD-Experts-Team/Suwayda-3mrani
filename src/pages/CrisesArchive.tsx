import React, { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { useLanguage } from "@/LanguageContext";
import { crisesArchiveApi } from "@/services/crisesArchiveApi";
import type { CrisesArchiveData } from "@/types/crisesArchive";

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
        Unable to Load Archive
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
    <p className="text-foreground">Loading archive...</p>
  </div>
);

export default function CrisesArchive(): React.ReactElement {
  const { currentLanguage } = useLanguage();

  const [archiveData, setArchiveData] = useState<CrisesArchiveData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);

  /* Fetch from API once on mount */
  const fetchData = async () => {
    try {
      setLoading(true);
      setError(false);
      const data = await crisesArchiveApi.getArchiveData();
      setArchiveData(data);
    } catch (err) {
      console.error("Failed to fetch archive data:", err);
      setError(true);
      setArchiveData(null);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  // Handle retry
  const handleRetry = () => {
    fetchData();
  };

  /* Show loading state */
  if (loading) {
    return <LoadingState />;
  }

  /* Show error state */
  if (error || !archiveData) {
    return <ErrorState onRetry={handleRetry} />;
  }

  return (
    <div className="flex flex-col items-start relative bg-background">
      <div className="flex flex-col min-h-[800px] items-start w-full bg-card">
        <main className="flex-1 flex justify-center px-2 md:px-4 lg:px-8 py-5 w-full">
          <div className="flex flex-col w-full max-w-7xl ">
            {/* ===== ABOUT ===== */}
            <section className="p-4">
              <h2
                className="text-2xl sm:text-[32px] font-bold text-foreground break-words sm:whitespace-nowrap"
                dangerouslySetInnerHTML={{
                  __html: archiveData.aboutSection.title[currentLanguage],
                }}
              />
            </section>

            <section className="px-4 pb-3">
              <p
                className="text-sm sm:text-base leading-5 sm:leading-6 text-foreground"
                dangerouslySetInnerHTML={{
                  __html: archiveData.aboutSection.description[currentLanguage],
                }}
              />
            </section>

            <Separator className="my-6" />

            {/* ===== HISTORICAL CONTEXT ===== */}
            <section className="px-4 pt-5 pb-3">
              <h3
                className="text-lg sm:text-[22px] font-bold text-foreground"
                dangerouslySetInnerHTML={{
                  __html: archiveData.historicalContext.title[currentLanguage],
                }}
              />
            </section>

            <section className="px-4 pb-3">
              <p
                className="text-sm sm:text-base leading-5 sm:leading-6 text-foreground"
                dangerouslySetInnerHTML={{
                  __html:
                    archiveData.historicalContext.description[currentLanguage],
                }}
              />
            </section>

            <Separator className="my-6" />

            {/* ===== AFFECTED COMMUNITY ===== */}
            <section className="px-4 pt-5 pb-3">
              <h3
                className="text-lg sm:text-[22px] font-bold text-foreground"
                dangerouslySetInnerHTML={{
                  __html: archiveData.affectedCommunity.title[currentLanguage],
                }}
              />
            </section>

            <section className="px-4 pb-3">
              <p
                className="text-sm sm:text-base leading-5 sm:leading-6 text-foreground"
                dangerouslySetInnerHTML={{
                  __html:
                    archiveData.affectedCommunity.description[currentLanguage],
                }}
              />
            </section>

            <Separator className="my-6" />

            {/* ===== ARCHIVE PURPOSE ===== */}
            <section className="px-4 pt-5 pb-3">
              <h3
                className="text-lg sm:text-[22px] font-bold text-foreground"
                dangerouslySetInnerHTML={{
                  __html: archiveData.archivePurpose.title[currentLanguage],
                }}
              />
            </section>

            <section className="px-4 pb-6">
              <div
                className="text-sm sm:text-base leading-6 sm:leading-7 text-foreground text-justify space-y-6"
                dir={currentLanguage === "ar" ? "rtl" : "ltr"}
                dangerouslySetInnerHTML={{
                  __html:
                    archiveData.archivePurpose.description[currentLanguage],
                }}
              />

              <div
                className="space-y-4 mt-6"
                dir={currentLanguage === "ar" ? "rtl" : "ltr"}
              >
                {archiveData.archivePurpose.items.map((item) => (
                  <div
                    key={item.number}
                    className={`flex items-start gap-3 p-4 bg-muted/30 rounded-lg transition-colors ${
                      currentLanguage === "ar" ? "border-r-4" : "border-l-4"
                    } border-primary/20 hover:border-primary/40`}
                  >
                    <div className="w-6 h-6 flex-shrink-0 bg-primary/10 rounded-full flex items-center justify-center mt-0.5">
                      <span className="text-primary font-semibold text-sm">
                        {item.number}
                      </span>
                    </div>
                    <div className="flex-1 space-y-1">
                      <h4
                        className="font-bold text-sm sm:text-base leading-5 sm:leading-6 text-foreground"
                        dangerouslySetInnerHTML={{
                          __html: item.title[currentLanguage],
                        }}
                      />
                      <p
                        className="text-muted-foreground text-sm leading-5 sm:leading-6"
                        dangerouslySetInnerHTML={{
                          __html: item.description[currentLanguage],
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <Separator className="my-6" />

            {/* ===== KEY FACTS ===== */}
            <section className="px-4 pt-5 pb-3">
              <h3
                className="text-lg sm:text-[22px] font-bold text-foreground"
                dangerouslySetInnerHTML={{
                  __html: archiveData.keyFacts.title[currentLanguage],
                }}
              />
            </section>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-4">
              {archiveData.keyFacts.facts.map((fact, idx) => (
                <Card
                  key={idx}
                  className="p-4 bg-card border-border hover:shadow-md"
                >
                  <CardContent className="p-0 space-y-3">
                    <div className="space-y-2">
                      <div
                        className="text-xs sm:text-sm font-medium text-muted-foreground"
                        dangerouslySetInnerHTML={{
                          __html: fact.label[currentLanguage],
                        }}
                      />
                      <div
                        className="text-sm sm:text-base font-semibold text-foreground"
                        dangerouslySetInnerHTML={{
                          __html: fact.value[currentLanguage],
                        }}
                      />
                    </div>

                    {fact.secondLabel[currentLanguage] && (
                      <div className="space-y-2 pt-2 border-t border-border">
                        <div
                          className="text-xs sm:text-sm font-medium text-muted-foreground"
                          dangerouslySetInnerHTML={{
                            __html: fact.secondLabel[currentLanguage],
                          }}
                        />
                        <div
                          className="text-sm sm:text-base font-semibold text-foreground"
                          dangerouslySetInnerHTML={{
                            __html: fact.secondValue[currentLanguage],
                          }}
                        />
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>

            <Separator className="my-6" />

            {/* ===== MISSION STATEMENT ===== */}
            <section className="px-4 pt-5 pb-3">
              <h3
                className="text-lg sm:text-[22px] font-bold text-foreground"
                dangerouslySetInnerHTML={{
                  __html: archiveData.missionStatement.title[currentLanguage],
                }}
              />
            </section>

            <section className="px-4 pb-3">
              <p
                className="text-sm sm:text-base leading-5 sm:leading-6 text-foreground"
                dangerouslySetInnerHTML={{
                  __html:
                    archiveData.missionStatement.description[currentLanguage],
                }}
              />
            </section>
          </div>
        </main>
      </div>
    </div>
  );
}
