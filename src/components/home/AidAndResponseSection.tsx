import { Card, CardContent } from "@/components/ui/card";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import React from "react";
import { useLanguage } from "@/LanguageContext";

interface AidOrganizationData {
  name: string;
  description: string;
  backgroundImage: string;
}

interface AidOrganization {
  en: AidOrganizationData;
  ar: AidOrganizationData;
}

interface TitleData {
  en: string;
  ar: string;
}

interface AidAndResponseSectionProps {
  organizations: AidOrganization[];
  title: TitleData;
}

export default function AidAndResponseSection({ organizations, title }: AidAndResponseSectionProps): React.ReactElement {
  const { currentLanguage } = useLanguage();

  return (
    <section className="flex flex-col items-start gap-3 w-full">
      {/* Aid and Response Heading */}
      <div className="pt-5 pb-3 px-4">
        <h2 className="[font-family:'Newsreader-Bold',Helvetica] font-bold text-foreground text-[22px] leading-7">
          {title[currentLanguage]}
        </h2>
      </div>
      
      {/* Organizations Cards with ScrollArea */}
      <div  className="w-full px-4">
        <ScrollArea className="w-full whitespace-nowrap">
          <div dir={currentLanguage === 'ar' ? 'rtl' : 'ltr'} className="flex items-start gap-3 pb-4">
            {organizations.map((org, index) => {
              const currentData = org[currentLanguage];
              return (
                <Card
                  key={index}
                  className="flex-shrink-0 w-[223px] bg-transparent border-none shadow-none"
                >
                  <div
                    className="w-full h-[223px] rounded-xl bg-cover bg-center mb-3"
                    style={{ backgroundImage: `url(${currentData.backgroundImage})` }}
                  />
                  <CardContent className="p-0">
                    <div className="flex flex-col items-start w-full">
                      <h3 className="w-full mt-[-1.00px] [font-family:'Newsreader-Medium',Helvetica] font-medium text-foreground text-base leading-6">
                        {currentData.name}
                      </h3>
                      <p className="w-full mt-[-1.00px] [font-family:'Newsreader-Regular',Helvetica] font-normal text-wrap text-muted-foreground text-sm leading-[21px]">
                        {currentData.description}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
          <ScrollBar orientation="horizontal" className="mt-2" />
        </ScrollArea>
      </div>
    </section>
  );
}
