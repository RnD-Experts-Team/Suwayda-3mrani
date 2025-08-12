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
      className="w-full border border-border bg-transparent shadow-lg rounded-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-300 cursor-pointer group"
      onClick={handleCardClick}
    >
      <CardContent className="p-2">
        <div className="flex flex-col sm:flex-row items-center gap-6">
          <div
            className="w-48 h-48 rounded-xl bg-cover bg-center shrink-0 border border-border shadow-sm group-hover:shadow-md transition-shadow duration-300"
            style={{ 
              backgroundImage: caseData.imagePath ? `url(${caseData.imagePath})` : 'none',
              backgroundColor: caseData.imagePath ? 'transparent' : '#f0f0f0'
            }}
            aria-label="Case image"
          />
          <div className="flex flex-col justify-start space-y-3 w-full min-w-0">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
              <h3 className="font-semibold text-foreground text-lg leading-6 group-hover:text-primary transition-colors duration-300 line-clamp-3 break-words overflow-hidden">
                {caseData.title[currentLanguage]}
              </h3>
            </div>
            <div className="space-y-2">
              {caseData.details.map((detail, index) => (
                <div
                  key={index}
                  className="text-muted-foreground text-sm leading-relaxed"
                >
                  {detail.key.en === "Description" ? (
                    <p className="line-clamp-4 break-words overflow-hidden">
                      {detail.value[currentLanguage]}
                    </p>
                  ) : (
                    <p className="break-words overflow-hidden">
                      <span className="font-medium inline-block truncate max-w-[200px]">
                        {detail.key[currentLanguage]}:
                      </span>{" "}
                      <span className="text-foreground line-clamp-2 break-words overflow-hidden">
                        {detail.value[currentLanguage]}
                      </span>
                    </p>
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
