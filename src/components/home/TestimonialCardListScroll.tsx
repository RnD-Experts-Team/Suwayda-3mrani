import React from "react";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import TestimonialCardScroll from "./TestimonialCardScroll";
import { useLanguage } from "@/LanguageContext";

interface TestimonialData {
  id: string;
  content: {
    en: {
      category: string;
      title: string;
      description: string;
      imageUrl: string;
    };
    ar: {
      category: string;
      title: string;
      description: string;
      imageUrl: string;
    };
  };
  url: string;
  survivor_name: string;
  survivor_age: number;
  survivor_location: string;
  date_of_incident: string;
}

interface TitleData {
  en: string;
  ar: string;
}

interface TestimonialCardListScrollProps {
  testimonialDataArray: TestimonialData[];
  title?: TitleData;
}

export default function TestimonialCardListScroll({ 
  testimonialDataArray, 
  title 
}: TestimonialCardListScrollProps): React.ReactElement {
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
            className="flex items-stretch gap-1 pb-4"
          >
            {testimonialDataArray.map((testimonialData) => (
              <div 
                key={testimonialData.id}
                className="flex-shrink-0 p-2"
              >
                <TestimonialCardScroll testimonialData={testimonialData} />
              </div>
            ))}
          </div>
          <ScrollBar orientation="horizontal" className="m-2" />
        </ScrollArea>
      </div>
    </section>
  );
}
