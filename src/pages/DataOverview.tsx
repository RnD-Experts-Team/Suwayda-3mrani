import React, { useState, useEffect } from "react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import DataCardList from "../components/dataOverview/DataCardList";
import { useLanguage } from "@/LanguageContext";
import { dataOverviewApi } from "@/services/dataOverviewApi";
import type { DataOverviewData, DataCase } from "@/types/dataOverview";

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
        Unable to Load Data Overview
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
    <p className="text-foreground">Loading data overview...</p>
  </div>
);

export default function DataOverview(): React.ReactElement {
  const { currentLanguage } = useLanguage();
  
  const [dataOverviewData, setDataOverviewData] = useState<DataOverviewData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);
  const [activeTab, setActiveTab] = useState<string>("");

  // Fetch data overview data from API
  const fetchDataOverviewData = async () => {
    try {
      setLoading(true);
      setError(false);
      const data = await dataOverviewApi.getDataOverviewData();
      setDataOverviewData(data);
      // Set default active tab to first available tab
      if (data.tabItems.length > 0) {
        setActiveTab(data.tabItems[0].id);
      }
    } catch (err) {
      console.error('Failed to fetch data overview data:', err);
      setError(true);
      setDataOverviewData(null);
      setActiveTab("");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDataOverviewData();
  }, []);

  // Handle retry
  const handleRetry = () => {
    fetchDataOverviewData();
  };

  // Function to get data array for a specific tab
  const getDataArray = (tabId: string): DataCase[] => {
    if (!dataOverviewData) return [];
    
    const tab = dataOverviewData.tabItems.find((item) => item.id === tabId);
    if (!tab) return [];
    
    const category = tab.category as keyof typeof dataOverviewData.dataRegistry;
    return dataOverviewData.dataRegistry[category] || [];
  };

  // Show loading state
  if (loading) {
    return <LoadingState />;
  }

  // Show error state
  if (error || !dataOverviewData) {
    return <ErrorState onRetry={handleRetry} />;
  }

  return (
    <div className="flex flex-col w-full bg-background">
      <div className="flex flex-col w-full bg-card">
        <div className="flex justify-center px-2 md:px-4 lg:px-8 py-3 md:py-5 w-full">
          <div className="flex flex-col w-full max-w-7xl">
            {/* Data Overview Title */}
            <div className="flex flex-wrap items-start justify-around gap-3 sm:gap-[12px] p-2 sm:p-4 w-full">
              <div className="flex flex-col w-full sm:w-72">
                <h2 className="[font-family:'Newsreader-Bold',Helvetica] font-bold text-foreground text-2xl w-full text-center sm:text-[32px] leading-8 sm:leading-10">
                  {dataOverviewData.pageTitle[currentLanguage]}
                </h2>
              </div>
            </div>

            {/* Data Overview Section */}
            <div className="flex flex-col w-full border-b border-border">
              <Tabs
                value={activeTab}
                onValueChange={setActiveTab}
                className="w-full"
              >
                <TabsList
                  dir={currentLanguage === "ar" ? "rtl" : "ltr"}
                  className="flex h-auto bg-transparent gap-4 sm:gap-8 px-2 sm:px-4 border-0 overflow-x-auto"
                >
                  {dataOverviewData.tabItems.map((tab) => (
                    <TabsTrigger
                      key={tab.id}
                      value={tab.id}
                      className={`h-auto px-0 py-3 sm:py-4 pb-[10px] sm:pb-[13px] border-b-[3px] data-[state=active]:border-primary data-[state=inactive]:border-transparent rounded-none [font-family:'Newsreader-Bold',Helvetica] font-bold text-xs sm:text-sm leading-[18px] sm:leading-[21px] data-[state=active]:text-foreground data-[state=inactive]:text-muted-foreground data-[state=active]:shadow-none focus:ring-0 whitespace-nowrap`}
                    >
                      {tab.label[currentLanguage]}
                    </TabsTrigger>
                  ))}
                </TabsList>
              </Tabs>
            </div>

            {/* Dynamic Title based on active tab */}
            <div className="flex flex-col pt-3 sm:pt-4 pb-2 px-2 sm:px-4 w-full">
              <h3 className="[font-family:'Newsreader-Bold',Helvetica] font-bold text-foreground text-base sm:text-lg leading-[20px] sm:leading-[23px]">
                {
                  dataOverviewData.tabItems.find((tab) => tab.id === activeTab)
                    ?.label[currentLanguage]
                }
              </h3>
            </div>

            {/* Main Content Sections */}
            <div className="px-2 sm:px-4">
              <DataCardList caseDataArray={getDataArray(activeTab)} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
