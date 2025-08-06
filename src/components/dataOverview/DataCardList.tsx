import React from "react";
import DataCard from "./DataCard";

interface CaseData {
  id: string; // Change from number to string
  title: {
    en: string;
    ar: string;
  };
  imagePath: string | null; // Allow null values
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
    sort_order: number; // Add sort_order field
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
