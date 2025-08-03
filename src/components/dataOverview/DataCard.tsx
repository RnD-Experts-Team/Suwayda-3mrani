import { Card, CardContent } from "@/components/ui/card";
import React from "react";
import { useLanguage } from "@/LanguageContext";

interface CaseData {
  id: number;
  title: {
    en: string;
    ar: string;
  };
  imagePath: string;
  url: string; // Added URL property
  details: Array<{
    key: {
      en: string;
      ar: string;
    };
    value: {
      en: string;
      ar: string;
    };
  }>;
}

interface HousesSectionProps {
  caseData: CaseData;
}

export default function HousesSection({ caseData }: HousesSectionProps): React.ReactElement {
  const { currentLanguage } = useLanguage();

  const handleCardClick = () => {
    if (caseData.url) {
      window.open(caseData.url, '_blank');
    }
  };

  return (
    <Card 
      className="w-full border border-border bg-transparent shadow-lg rounded-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-300 cursor-pointer group"
      onClick={handleCardClick}
    >
      <CardContent className="p-6">
        <div className="flex flex-col sm:flex-row items-center gap-6">
          <div
            className="w-24 h-24 rounded-xl bg-cover bg-center shrink-0 border border-border shadow-sm group-hover:shadow-md transition-shadow duration-300"
            style={{ backgroundImage: `url(${caseData.imagePath})` }}
            aria-label="Case image"
          />
          <div className="flex flex-col justify-start space-y-3 w-full">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
              <h3 className="font-semibold text-foreground text-lg leading-6 group-hover:text-primary transition-colors duration-300">
                {caseData.title[currentLanguage]}
              </h3>
            </div>
            <div className="space-y-2">
              {caseData.details.map((detail, index) => (
                <p
                  key={index}
                  className="text-muted-foreground text-sm leading-relaxed"
                >
                  {detail.key.en === "Description" ? (
                    detail.value[currentLanguage]
                  ) : (
                    <>
                      <span className="font-medium">
                        {detail.key[currentLanguage]}:
                      </span>{" "}
                      <span className="text-foreground">
                        {detail.value[currentLanguage]}
                      </span>
                    </>
                  )}
                </p>
              ))}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
