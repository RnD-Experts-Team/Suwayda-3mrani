import React from "react";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import DataCardScroll from "./DataCardScroll";
import { useLanguage } from "@/LanguageContext";

interface CaseData {
  id: string;
  title: {
    en: string;
    ar: string;
  };
  imagePath: string | null;
  url: string;
  details: Array<{
    key: {
      en: string;
      ar: string;
    };
    value: {
      en: string;
      ar: string;
    };
    sort_order: number;
  }>;
}

interface TitleData {
  en: string;
  ar: string;
}

interface DataCardListScrollProps {
  caseDataArray: CaseData[];
  title?: TitleData; // Optional title prop
}

// DataCardListScroll.tsx
export default function DataCardListScroll({ 
  caseDataArray, 
  title 
}: DataCardListScrollProps): React.ReactElement {
  const { currentLanguage } = useLanguage();

  return (
    <section className="flex flex-col items-start gap-2 w-full">
      {title && (
        <div className="pt-5 pb-3 px-2">
          <h2 className="[font-family:'Newsreader-Bold',Helvetica] font-bold text-foreground text-[22px] leading-7">
            {title[currentLanguage]}
          </h2>
        </div>
      )}
      
      <div className="w-full px-4">
        <ScrollArea className="w-full whitespace-nowrap">
          <div 
            dir={currentLanguage === 'ar' ? 'rtl' : 'ltr'} 
            className="flex items-stretch gap-1 pb-4" // Changed to items-stretch
          >
            {caseDataArray.map((caseData) => (
              <div 
                key={caseData.id}
                className="flex-shrink-0  p-2" // Fixed width but with h-full
              >
                <DataCardScroll caseData={caseData} />

              </div>
            ))}
          </div>
          <ScrollBar orientation="horizontal" className="m-2" />
        </ScrollArea>
      </div>
    </section>
  );
}