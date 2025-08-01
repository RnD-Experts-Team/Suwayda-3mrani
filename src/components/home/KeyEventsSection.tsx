import { Card, CardContent } from "@/components/ui/card";
import React from "react";

export default function KeyEventsSection(): React.ReactElement {
  return (
    <Card className="bg-transparent border-none shadow-none">
      <CardContent className="flex flex-col items-start p-4 w-full">
        <div className="flex items-start justify-between w-full rounded-xl gap-4">
          <div className="flex flex-col items-start gap-1 flex-1">
            <span className="text-sm text-[#adadad] [font-family:'Newsreader-Regular',Helvetica] leading-[21px]">
              Update
            </span>

            <h3 className="text-base text-white font-bold [font-family:'Newsreader-Bold',Helvetica] leading-5">
              Aid Efforts Intensify
            </h3>

            <p className="text-sm text-[#adadad] [font-family:'Newsreader-Regular',Helvetica] leading-[21px]">
              International organizations are ramping up aid efforts to provide
              essential supplies and support to affected communities in Suwayda.
            </p>
          </div>

          <div
            className="flex-1 h-[171px] rounded-xl bg-cover bg-center"
            style={{ backgroundImage: "url(/depth-6-frame-1-3.png)" }}
          />
        </div>
      </CardContent>
    </Card>
  );
}
