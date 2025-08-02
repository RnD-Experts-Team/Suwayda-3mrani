import React from "react";
import { useLanguage } from "../../LanguageContext";
import ComponentNodeSection from "./ComponentNodeSection";

interface ComponentNodeSectionGroupProps {
  title: {
    en: string;
    ar: string;
  };
  sections: Array<{
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
    url?: string;
  }>;
}

export default function ComponentNodeSectionGroup({ 
  title, 
  sections 
}: ComponentNodeSectionGroupProps): React.ReactElement {
  const { currentLanguage } = useLanguage();
  const currentTitle = title[currentLanguage];
  
  return (
    <div className="w-full">
      <h1 className="w-full [font-family:'Newsreader-Bold',Helvetica] font-bold text-foreground text-2xl leading-7 mb-6 px-4">
        {currentTitle}
      </h1>
      <div className="flex flex-col gap-2">
        {sections.map((sectionData, index) => (
          <ComponentNodeSection 
            key={index} 
            data={sectionData}
            url={sectionData.url}
          />
        ))}
      </div>
    </div>
  );
}