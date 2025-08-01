import { Card, CardContent } from "@/components/ui/card";
import React from "react";

export default function TestimonialWrapperSection(): React.ReactElement {
  return (
    <div className="flex flex-col items-start p-4 w-full">
      <Card className="flex w-full overflow-hidden rounded-xl border-none bg-transparent">
        <CardContent className="flex flex-row items-start justify-between p-0 w-full gap-4">
          <div className="flex flex-col items-start gap-1 flex-1">
            <span className="font-['Newsreader-Regular',Helvetica] text-sm text-[#adadad] leading-[21px] tracking-[0] w-full">
              Survivor Story
            </span>

            <h3 className="font-['Newsreader-Bold',Helvetica] font-bold text-white text-base tracking-[0] leading-5 w-full">
              Aisha&#39;s Journey
            </h3>

            <p className="font-['Newsreader-Regular',Helvetica] text-sm text-[#adadad] tracking-[0] leading-[21px] w-full">
              Aisha, a survivor from Suwayda, recounts her harrowing escape from
              the conflict zone and her struggle to rebuild her life.
            </p>
          </div>

          <div className="flex-1 h-[171px] rounded-xl bg-[url(/depth-6-frame-1.png)] bg-cover bg-[50%_50%]" />
        </CardContent>
      </Card>
    </div>
  );
}
