import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import React from "react";
import { useLanguage } from "@/LanguageContext";
import { useNavigate } from "react-router-dom"; // Add this import

interface SuggestionData {
  title: string;
  description: string;
  buttonText: string;
  buttonVariant?: "default" | "outline";
  action_link?: string; // Add this line
}

interface UpdateSectionProps {
  en: SuggestionData;
  ar: SuggestionData;
}

export default function UpdateSection({ en, ar }: UpdateSectionProps): React.ReactElement {
  const { currentLanguage } = useLanguage();
  const navigate = useNavigate(); // Add this line
  const currentData = currentLanguage === 'en' ? en : ar;

  // Add this function to handle button clicks
  const handleButtonClick = () => {
    if (currentData.action_link) {
      navigate(currentData.action_link);
    }
  };

  return (
    <section className="flex flex-col items-start p-4 w-full">
      <Card className="w-full bg-card border-border rounded-xl">
        <CardContent className="flex items-center justify-between p-5">
          <div className="flex flex-col items-start gap-1">
            <div className="flex flex-col items-start w-full">
              <h3 className="font-bold text-card-foreground text-base leading-5 [font-family:'Newsreader-Bold',Helvetica]">
                {currentData.title}
              </h3>
            </div>
            <div className="flex flex-col items-start">
              <p className="text-muted-foreground text-base leading-6 [font-family:'Newsreader-Regular',Helvetica]">
                {currentData.description}
              </p>
            </div>
          </div>

          <Button
            variant={currentData.buttonVariant || "outline"}
            className="h-8 px-4 py-0 bg-primary text-primary-foreground rounded-2xl border-none min-w-[84px] max-w-[480px]"
            onClick={handleButtonClick} // Add this line
          >
            <span className="text-sm text-center leading-[21px] [font-family:'Newsreader-Medium',Helvetica] font-medium truncate">
              {currentData.buttonText}
            </span>
          </Button>
        </CardContent>
      </Card>
    </section>
  );
}
