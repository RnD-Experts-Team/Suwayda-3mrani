import { Card, CardContent } from "@/components/ui/card";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Users } from "lucide-react";
import React from "react";
import { useLanguage } from "@/LanguageContext";

interface InitiativeData {
  title: string;
  description: string;
  url: string;
}

interface Initiative {
  en: InitiativeData;
  ar: InitiativeData;
}

interface SectionTitle {
  en: string;
  ar: string;
}

interface LocalGroupsSectionProps {
  initiatives: Initiative[];
  sectionTitle: SectionTitle;
}

export default function LocalGroupsSection({
  initiatives,
  sectionTitle,
}: LocalGroupsSectionProps): React.ReactElement {
  const { currentLanguage } = useLanguage();

  const handleCardClick = (url: string) => {
    // You can replace this with your routing logic (e.g., React Router)
    window.location.href = url;
  };

  return (
    <>
      <div className="flex flex-col pt-5 pb-3 px-2 sm:px-4 w-full">
        <h2 className="font-bold text-foreground text-lg sm:text-xl md:text-[22px] leading-6 sm:leading-7">
          {sectionTitle[currentLanguage]}
        </h2>
      </div>

      <section className="flex flex-col items-start gap-3 p-4 w-full">
        <ScrollArea
          dir={currentLanguage === "ar" ? "rtl" : "ltr"}
          className="w-full"
        >
          <div className="flex gap-4 pb-4 min-w-max">
            {initiatives.map((initiative, index) => {
              const currentData = initiative[currentLanguage];
              return (
                <Card
                  key={index}
                  onClick={() => handleCardClick(currentData.url)}
                  className="min-w-[280px] max-w-[320px] bg-card border-border text-card-foreground cursor-pointer transition-all duration-300 hover:shadow-lg hover:scale-105 hover:bg-accent"
                >
                  <CardContent className="flex flex-col items-start gap-3 p-4">
                    <div className="w-6 h-6">
                      <Users className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex flex-col items-start gap-1 w-full">
                      <h3 className="w-full font-bold text-card-foreground text-base leading-5">
                        {currentData.title}
                      </h3>
                      <p className="w-full font-normal text-muted-foreground text-sm leading-[21px]">
                        {currentData.description}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      </section>
    </>
  );
}
