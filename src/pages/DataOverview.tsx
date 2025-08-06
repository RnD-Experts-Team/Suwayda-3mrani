import React, { useState, useEffect } from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import DataCardList from "../components/dataOverview/DataCardList";
import { useLanguage } from "@/LanguageContext";
import { dataOverviewApi } from "@/services/dataOverviewApi";
import type { DataOverviewData, DataCase } from "@/types/dataOverview";

// Fallback data overview data
const fallbackDataOverviewData: DataOverviewData = {
  pageTitle: {
    en: "Data Overview",
    ar: "نظرة عامة على البيانات",
  },
  tabItems: [
    
    {
      id: "houses",
      category: "houses",
      label: {
        en: "Houses",
        ar: "منازل",
      },
    },
    {
      id: "migrations",
      category: "migrations",
      label: {
        en: "Migrations",
        ar: "هجرات",
      },
    },
    {
      id: "deaths",
      category: "deaths",
      label: {
        en: "Deaths",
        ar: "وفيات",
      },
    },
    {
      id: "thefts",
      category: "thefts",
      label: {
        en: "Thefts",
        ar: "سرقات",
      },
    },
  ],
  dataRegistry: {
    deaths: [
      {
        id: 1,
        title: {
          en: "Death Case 1",
          ar: "حالة وفاة 1",
        },
        imagePath: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=500&h=300&fit=crop",
        url: "https://example.com/death1",
        details: [
          {
            key: {
              en: "Location",
              ar: "الموقع",
            },
            value: {
              en: "Village C",
              ar: "القرية ج",
            },
            sort_order: 0,
          },
          {
            key: {
              en: "Date",
              ar: "التاريخ",
            },
            value: {
              en: "2023-07-10",
              ar: "2023-07-10",
            },
            sort_order: 1,
          },
          {
            key: {
              en: "Cause",
              ar: "السبب",
            },
            value: {
              en: "Conflict related",
              ar: "متعلق بالنزاع",
            },
            sort_order: 2,
          },
        ],
      },
    ],
    houses: [
      {
        id: 1,
        title: {
          en: "House Case 1",
          ar: "حالة منزل 1",
        },
        imagePath: "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=500&h=300&fit=crop",
        url: "https://example.com/house1",
        details: [
          {
            key: {
              en: "Location",
              ar: "الموقع",
            },
            value: {
              en: "Village A",
              ar: "القرية أ",
            },
            sort_order: 0,
          },
          {
            key: {
              en: "Date",
              ar: "التاريخ",
            },
            value: {
              en: "2023-05-15",
              ar: "2023-05-15",
            },
            sort_order: 1,
          },
          {
            key: {
              en: "Description",
              ar: "الوصف",
            },
            value: {
              en: "House destroyed by fire",
              ar: "منزل دمر بالنار",
            },
            sort_order: 2,
          },
        ],
      },
      {
        id: 2,
        title: {
          en: "House Case 2",
          ar: "حالة منزل 2",
        },
        imagePath: "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=500&h=300&fit=crop",
        url: "https://example.com/house1",
        details: [
          {
            key: {
              en: "Location",
              ar: "الموقع",
            },
            value: {
              en: "Village A",
              ar: "القرية أ",
            },
            sort_order: 0,
          },
          {
            key: {
              en: "Date",
              ar: "التاريخ",
            },
            value: {
              en: "2023-05-15",
              ar: "2023-05-15",
            },
            sort_order: 1,
          },
          {
            key: {
              en: "Description",
              ar: "الوصف",
            },
            value: {
              en: "House destroyed by fire",
              ar: "منزل دمر بالنار",
            },
            sort_order: 2,
          },
        ],
      },
    ],
    migrations: [
      {
        id: 1,
        title: {
          en: "Migration Case 1",
          ar: "حالة هجرة 1",
        },
        imagePath: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=500&h=300&fit=crop",
        url: "https://example.com/migration1",
        details: [
          {
            key: {
              en: "Origin",
              ar: "المنشأ",
            },
            value: {
              en: "Village A",
              ar: "القرية أ",
            },
            sort_order: 0,
          },
          {
            key: {
              en: "Destination",
              ar: "الوجهة",
            },
            value: {
              en: "City B",
              ar: "المدينة ب",
            },
            sort_order: 1,
          },
          {
            key: {
              en: "Date",
              ar: "التاريخ",
            },
            value: {
              en: "2023-06-20",
              ar: "2023-06-20",
            },
            sort_order: 2,
          },
        ],
      },
    ],
    thefts: [
      {
        id: 1,
        title: {
          en: "Theft Case 1",
          ar: "حالة سرقة 1",
        },
        imagePath: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=500&h=300&fit=crop",
        url: "https://example.com/theft1",
        details: [
          {
            key: {
              en: "Location",
              ar: "الموقع",
            },
            value: {
              en: "Village D",
              ar: "القرية د",
            },
            sort_order: 0,
          },
          {
            key: {
              en: "Date",
              ar: "التاريخ",
            },
            value: {
              en: "2023-08-05",
              ar: "2023-08-05",
            },
            sort_order: 1,
          },
          {
            key: {
              en: "Items Stolen",
              ar: "الأشياء المسروقة",
            },
            value: {
              en: "Household items",
              ar: "أدوات منزلية",
            },
            sort_order: 2,
          },
        ],
      },
    ],
  },
};

export default function DataOverview(): React.ReactElement {
  const { currentLanguage } = useLanguage();
  
  const [dataOverviewData, setDataOverviewData] = useState<DataOverviewData>(fallbackDataOverviewData);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<string>("");

  // Fetch data overview data from API
  useEffect(() => {
    const fetchDataOverviewData = async () => {
      try {
        setLoading(true);
        setError(null);
        const data = await dataOverviewApi.getDataOverviewData();
        setDataOverviewData(data);
        // Set default active tab to first available tab
        if (data.tabItems.length > 0) {
          setActiveTab(data.tabItems[0].id);
        }
      } catch (err) {
        console.error('Failed to fetch data overview data:', err);
        setError('Failed to load data overview. Using fallback content.');
        // Keep using fallback data on error
        setDataOverviewData(fallbackDataOverviewData);
        setActiveTab(fallbackDataOverviewData.tabItems[0]?.id || "deaths");
      } finally {
        setLoading(false);
      }
    };

    fetchDataOverviewData();
  }, []);

  // Function to get data array for a specific tab
  const getDataArray = (tabId: string): DataCase[] => {
    const tab = dataOverviewData.tabItems.find((item) => item.id === tabId);
    if (!tab) return [];
    
    const category = tab.category as keyof typeof dataOverviewData.dataRegistry;
    return dataOverviewData.dataRegistry[category] || [];
  };

  // Loading state
  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[400px] bg-background">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
        <p className="mt-4 text-foreground">Loading data overview...</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col w-full bg-background">
      {/* Error message */}
      {error && (
        <div className="w-full px-4 py-2 bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700">
          <p className="text-sm">{error}</p>
        </div>
      )}

      <div className="flex flex-col w-full bg-card">
        <div className="flex justify-center px-2 md:px-4 lg:px-8 py-3 md:py-5 w-full">
          <div className="flex flex-col w-full max-w-7xl">
            {/* Data Overview Title */}
            <div className="flex flex-wrap items-start justify-around gap-3 sm:gap-[12px] p-2 sm:p-4 w-full">
              <div className="flex flex-col w-full sm:w-72">
                <h2 className="[font-family:'Newsreader-Bold',Helvetica] font-bold text-foreground text-2xl sm:text-[32px] leading-8 sm:leading-10">
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
