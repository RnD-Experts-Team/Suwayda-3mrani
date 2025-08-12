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

interface DataCardScrollProps {
  caseData: CaseData;
}

export default function DataCardScroll({ caseData }: DataCardScrollProps): React.ReactElement {
  const { currentLanguage } = useLanguage();
  const navigate = useNavigate();

  // Function to get limited details (max 3 items)
  const getLimitedDetails = () => {
    // Sort details by sort_order first
    const sortedDetails = [...caseData.details].sort((a, b) => a.sort_order - b.sort_order);
    
    // Then take the first 3 items
    return sortedDetails.slice(0, 3);
  };

  const handleCardClick = () => {
    navigate(`/case/${caseData.id}`);
  };

  return (
    <Card 
      className="w-[300px] h-[500px] border border-border bg-transparent shadow-lg rounded-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-300 cursor-pointer group flex flex-col"
      onClick={handleCardClick}
    >
      <CardContent className="p-4 flex flex-col h-full">
        <div className="flex flex-col items-center gap-4 h-full">
          <div
            className="w-full aspect-square rounded-xl bg-cover bg-center shrink-0 border border-border shadow-sm group-hover:shadow-md transition-shadow duration-300"
            style={{ 
              backgroundImage: caseData.imagePath ? `url(${caseData.imagePath})` : 'none',
              backgroundColor: caseData.imagePath ? 'transparent' : '#f0f0f0'
            }}
            aria-label="Case image"
          />
          <div className="flex flex-col justify-start space-y-3 w-full flex-grow">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
              <h3 className="font-semibold text-foreground text-base leading-6 group-hover:text-primary transition-colors duration-300 line-clamp-2 text-wrap break-words overflow-hidden">
                {caseData.title[currentLanguage]}
              </h3>
            </div>
            <div className="text-sm space-y-2 overflow-y-auto flex-grow">
              {getLimitedDetails().map((detail, index) => (
                <div
                  key={index}
                  className="text-muted-foreground text-sm leading-relaxed"
                >
                  {detail.key.en === "Description" ? (
                    <p className="line-clamp-3 break-words overflow-hidden">
                      {detail.value[currentLanguage]}
                    </p>
                  ) : (
                    <p className="text-sm break-words overflow-hidden">
                      <span className="font-medium line-clamp-1 inline-block w-full truncate">
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
