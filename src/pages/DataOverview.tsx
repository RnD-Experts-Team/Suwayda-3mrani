import React, { useState } from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import DataCardList from "../components/dataOverview/DataCardList";
import { useLanguage } from "@/LanguageContext";
import road from "@/assets/road.png";

export default function DataOverview(): React.ReactElement {
  const { currentLanguage } = useLanguage();

  // Static array for tab labels with multilingual support
  const DataOverview = {
    pageTitle: {
      en: "Data Overview",
      ar: "نظرة عامة على البيانات",
    },
    tabItems: [
      {
        id: "cases",
        category: "cases",
        label: {
          en: "Cases",
          ar: "حالات",
        },
      },
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
      cases: [
        {
          id: 1,
          title: {
            en: "Case 1",
            ar: "الحالة 1",
          },
          imagePath: road,
          url: "https://example.com/case1",
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
            },
            {
              key: {
                en: "Description",
                ar: "الوصف",
              },
              value: {
                en: "General case documentation",
                ar: "توثيق حالة عامة",
              },
            },
          ],
        },
        {
          id: 2,
          title: {
            en: "Case 2",
            ar: "الحالة 2",
          },
          imagePath: road,
          url: "https://example.com/case2", // Added URL
          details: [
            {
              key: {
                en: "Location",
                ar: "الموقع",
              },
              value: {
                en: "Village B",
                ar: "القرية ب",
              },
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
            },
            {
              key: {
                en: "Description",
                ar: "الوصف",
              },
              value: {
                en: "House completely demolished",
                ar: "منزل مدمر بالكامل",
              },
            },
          ],
        },
        {
          id: 3,
          title: {
            en: "Case 3",
            ar: "الحالة 3",
          },
          imagePath: road,
          url: "https://example.com/case3", // Added URL
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
            },
            {
              key: {
                en: "Description",
                ar: "الوصف",
              },
              value: {
                en: "House partially damaged",
                ar: "منزل متضرر جزئياً",
              },
            },
          ],
        },
        {
          id: 4,
          title: {
            en: "Case 4",
            ar: "الحالة 4",
          },
          imagePath: road,
          url: "https://example.com/case4", // Added URL
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
            },
            {
              key: {
                en: "Description",
                ar: "الوصف",
              },
              value: {
                en: "House looted and vandalized",
                ar: "منزل تم نهبه وتخريبه",
              },
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
          imagePath: road,
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
            },
          ],
        },
        {
          id: 2,
          title: {
            en: "Case 2",
            ar: "الحالة 2",
          },
          imagePath: road,
          url: "https://example.com/case2", // Added URL
          details: [
            {
              key: {
                en: "Location",
                ar: "الموقع",
              },
              value: {
                en: "Village B",
                ar: "القرية ب",
              },
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
            },
            {
              key: {
                en: "Description",
                ar: "الوصف",
              },
              value: {
                en: "House completely demolished",
                ar: "منزل مدمر بالكامل",
              },
            },
          ],
        },
        {
          id: 3,
          title: {
            en: "Case 3",
            ar: "الحالة 3",
          },
          imagePath: road,
          url: "https://example.com/case3", // Added URL
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
            },
            {
              key: {
                en: "Description",
                ar: "الوصف",
              },
              value: {
                en: "House partially damaged",
                ar: "منزل متضرر جزئياً",
              },
            },
          ],
        },
        {
          id: 4,
          title: {
            en: "Case 4",
            ar: "الحالة 4",
          },
          imagePath: road,
          url: "https://example.com/case4", // Added URL
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
            },
            {
              key: {
                en: "Description",
                ar: "الوصف",
              },
              value: {
                en: "House looted and vandalized",
                ar: "منزل تم نهبه وتخريبه",
              },
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
          imagePath: road,
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
            },
          ],
        },
      ],
      deaths: [
        {
          id: 1,
          title: {
            en: "Death Case 1",
            ar: "حالة وفاة 1",
          },
          imagePath: road,
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
          imagePath: road,
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
            },
            {
              key: {
                en: "asdf",
                ar: "غفتفغ",
              },
              value: {
                en: "fdhgdh",
                ar: "شسيبلا",
              },
            },
            {
              key: {
                en: "fhdfasf",
                ar: "شسيبلثق",
              },
              value: {
                en: "retrey",
                ar: "شسيب",
              },
            },
          ],
        },
      ],
    },
  };

  const getDataArray = (tabId: string) => {
    const tab = DataOverview.tabItems.find((item) => item.id === tabId);
    return tab
      ? DataOverview.dataRegistry[
          tab.category as keyof typeof DataOverview.dataRegistry
        ] || []
      : [];
  };

  const [activeTab, setActiveTab] = useState("cases");

  return (
    <div className="flex flex-col w-full bg-background">
      <div className="flex flex-col w-full bg-card">
        <div className="flex justify-center px-2 sm:px-4 py-3 sm:py-5 w-full">
          <div className="flex flex-col w-full max-w-7xl">
            {/* Data Overview Title */}
            <div className="flex flex-wrap items-start justify-around gap-3 sm:gap-[12px] p-2 sm:p-4 w-full">
              <div className="flex flex-col w-full sm:w-72">
                <h2 className="[font-family:'Newsreader-Bold',Helvetica] font-bold text-foreground text-2xl sm:text-[32px] leading-8 sm:leading-10">
                  {DataOverview.pageTitle[currentLanguage]}
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
                  {DataOverview.tabItems.map((tab) => (
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
                  DataOverview.tabItems.find((tab) => tab.id === activeTab)
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
