import { Card, CardContent } from "@/components/ui/card";
import React from "react";
import { useLanguage } from "@/LanguageContext";

interface HeroData {
  title: string;
  image: string;
}

interface HeroContent {
  en: HeroData;
  ar: HeroData;
}

interface HeroSectionProps {
  content: HeroContent;
}

export default function HeroSection({ content }: HeroSectionProps): React.ReactElement {
  const { currentLanguage } = useLanguage();
  const currentData = content[currentLanguage];

  return (
    <Card className="border-0 mb-6">
      <CardContent className="p-0">
        <div 
          className="relative w-full h-80 rounded-xl overflow-hidden bg-contain bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${currentData.image})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
          <div className="absolute inset-0 flex items-center justify-center">
            <h1 className="font-bold text-primary-foreground text-[28px] leading-[35px] [font-family:'Newsreader-Bold',Helvetica] text-center px-4">
              {currentData.title}
            </h1>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}