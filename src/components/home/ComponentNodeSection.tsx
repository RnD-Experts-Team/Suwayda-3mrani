import { Card, CardContent } from "@/components/ui/card";
import React from "react";
import { useLanguage } from "../../LanguageContext";

interface ComponentNodeSectionProps {
  data: {
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
  };
  url?: string;
}

export default function ComponentNodeSection({ data, url }: ComponentNodeSectionProps): React.ReactElement {
  const { currentLanguage } = useLanguage();
  const content = data[currentLanguage];
  
  const handleClick = () => {
    if (url) {
      window.open(url, '_blank');
    }
  };
  
  return (
    <section className="flex flex-col items-start p-1 w-full">
      <Card 
        className={`flex items-start justify-between w-full rounded-xl bg-transparent border-2 border-border/20 shadow-sm hover:shadow-lg transition-all duration-300 ease-in-out transform ${
          url ? 'cursor-pointer hover:bg-muted/30 hover:border-border/60 hover:scale-[1.02]' : 'hover:border-border/40'
        }`}
        onClick={handleClick}
      >
        <CardContent className="flex p-6 gap-6 w-full">
          <div className="flex flex-col w-full md:w-3/5 items-start gap-2">
            <p className="w-full [font-family:'Newsreader-Regular',Helvetica] font-normal text-muted-foreground text-sm leading-[21px]">
              {content.category}
            </p>
            <h2 className="w-full [font-family:'Newsreader-Bold',Helvetica] font-bold text-foreground text-lg leading-6">
              {content.title}
            </h2>
            <p className="w-full [font-family:'Newsreader-Regular',Helvetica] font-normal text-muted-foreground text-sm leading-[21px]">
              {content.description}
            </p>
          </div>
          <div className="hidden md:block flex-1 h-[200px] rounded-xl overflow-hidden">
            <img 
              src={content.imageUrl} 
              alt={content.title}
              className="w-full h-full object-cover object-center transition-transform duration-300 ease-in-out hover:scale-105"
            />
          </div>
        </CardContent>
      </Card>
    </section>
  );
}
