import React from "react";
import DataCard from "./DataCard";


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


interface DataCardListProps {
  caseDataArray: CaseData[];
}


export default function DataCardList({ caseDataArray }: DataCardListProps): React.ReactElement {
  if (caseDataArray.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-16 px-4">
        <div className="text-center max-w-md">
          <div className="mb-6">
            <svg 
              className="mx-auto h-16 w-16 text-muted-foreground/50" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={1} 
                d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" 
              />
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-muted-foreground mb-2">
            No Data Available
          </h3>
          <p className="text-muted-foreground">
            There are currently no cases available in this category.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 pb-8"> 
      {caseDataArray.map((caseData) => (
        <DataCard key={caseData.id} caseData={caseData} />
      ))}
    </div>
  );
}
