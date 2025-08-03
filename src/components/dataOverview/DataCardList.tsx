import React from "react";
import DataCard from "./DataCard";

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

interface DataCardListProps {
  caseDataArray: CaseData[];
}

export default function DataCardList({ caseDataArray }: DataCardListProps): React.ReactElement {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4"> 
      
      {caseDataArray.map((caseData) => (
        <DataCard key={caseData.id} caseData={caseData} />
      ))}
      
      
    </div>
  );
}