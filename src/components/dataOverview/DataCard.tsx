import { Card, CardContent } from "@/components/ui/card";
import React from "react";
import { useLanguage } from "@/LanguageContext";
import { useNavigate } from "react-router-dom";


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


interface DataCardProps {
  caseData: CaseData;
}


export default function DataCard({ caseData }: DataCardProps): React.ReactElement {
  const { currentLanguage } = useLanguage();
  const navigate = useNavigate();


  const handleCardClick = () => {
    navigate(`/case/${caseData.id}`);
  };


  return (
    <Card 
      className="w-full border border-border bg-card shadow-md rounded-xl hover:shadow-xl hover:scale-[1.02] transition-all duration-300 cursor-pointer group overflow-hidden"
      onClick={handleCardClick}
    >
      <CardContent className="p-4">
        <div className="flex flex-col sm:flex-row items-center gap-6">
          <div
            className="w-48 h-48 rounded-xl bg-cover bg-center shrink-0 border border-border shadow-sm group-hover:shadow-md transition-all duration-300"
            style={{ 
              backgroundImage: caseData.imagePath ? `url(${caseData.imagePath})` : 'none',
              backgroundColor: caseData.imagePath ? 'transparent' : '#f8f9fa'
            }}
            aria-label="Case image"
          />
          <div className="flex flex-col justify-start space-y-4 w-full min-w-0">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
              <h3 className="font-bold text-foreground text-xl leading-7 group-hover:text-primary transition-colors duration-300 line-clamp-2 break-words overflow-hidden">
                {caseData.title[currentLanguage]}
              </h3>
            </div>
            <div className="space-y-3">
              {caseData.details
                .sort((a, b) => a.sort_order - b.sort_order)
                .map((detail, index) => (
                <div
                  key={index}
                  className="text-muted-foreground text-sm leading-relaxed"
                >
                  {detail.key.en === "Description" ? (
                    <p className="line-clamp-3 break-words overflow-hidden text-foreground">
                      {detail.value[currentLanguage]}
                    </p>
                  ) : detail.key[currentLanguage] ? (
                    <div className="flex flex-col sm:flex-row sm:items-start gap-1">
                      <span className="font-semibold text-foreground min-w-fit">
                        {detail.key[currentLanguage]}:
                      </span>
                      <span className="text-muted-foreground break-words">
                        {detail.value[currentLanguage]}
                      </span>
                    </div>
                  ) : (
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
                      {detail.value[currentLanguage]}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
