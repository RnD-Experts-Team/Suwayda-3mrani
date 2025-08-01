import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import React from "react";

export default function MediaGallerySection(): React.ReactElement {
  return (
    <div className="flex flex-col items-start p-4 w-full">
      <Card className="w-full bg-[#191919] border-[#4c4c4c] rounded-xl">
        <CardContent className="flex items-center justify-between p-5">
          <div className="flex flex-col items-start gap-1">
            <div className="flex flex-col items-start w-full">
              <h3 className="text-white font-bold text-base leading-5 [font-family:'Newsreader-Bold',Helvetica]">
                Take Action
              </h3>
            </div>
            <div className="flex flex-col items-start">
              <p className="text-[#adadad] font-normal text-base leading-6 [font-family:'Newsreader-Regular',Helvetica]">
                Support the victims of the Suwayda crisis and help bring an end
                to the atrocities.
              </p>
            </div>
          </div>

          <Button className="h-8 px-4 py-0 bg-black hover:bg-black/90 rounded-2xl">
            <span className="[font-family:'Newsreader-Medium',Helvetica] font-medium text-sm leading-[21px] text-center overflow-hidden text-ellipsis whitespace-nowrap">
              Donate
            </span>
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
