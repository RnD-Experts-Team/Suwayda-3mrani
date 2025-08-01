import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import React from "react";

interface UpdateSectionProps {
  title: string;
  description: string;
  buttonText: string;
  buttonVariant?: "default" | "outline";
}

export default function UpdateSection({
  title,
  description,
  buttonText,
  buttonVariant = "outline"
}: UpdateSectionProps): React.ReactElement {
  return (
    <section className="flex flex-col items-start p-4 w-full">
      <Card className="w-full bg-card border-border rounded-xl">
        <CardContent className="flex items-center justify-between p-5">
          <div className="flex flex-col items-start gap-1">
            <div className="flex flex-col items-start w-full">
              <h3 className="font-bold text-card-foreground text-base leading-5 [font-family:'Newsreader-Bold',Helvetica]">
                {title}
              </h3>
            </div>
            <div className="flex flex-col items-start">
              <p className="text-muted-foreground text-base leading-6 [font-family:'Newsreader-Regular',Helvetica]">
                {description}
              </p>
            </div>
          </div>

          <Button
            variant={buttonVariant}
            className="h-8 px-4 py-0 bg-primary text-primary-foreground rounded-2xl border-none min-w-[84px] max-w-[480px]"
          >
            <span className="text-sm text-center leading-[21px] [font-family:'Newsreader-Medium',Helvetica] font-medium truncate">
              {buttonText}
            </span>
          </Button>
        </CardContent>
      </Card>
    </section>
  );
}
