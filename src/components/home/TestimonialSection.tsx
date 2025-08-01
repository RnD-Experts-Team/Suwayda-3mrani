import { Card, CardContent } from "@/components/ui/card";
import React from "react";

export default function TestimonialSection(): React.ReactElement {
  return (
    <section className="w-full p-4">
      <Card className="bg-transparent border-0 overflow-hidden">
        <CardContent className="p-0 flex flex-row items-start justify-between gap-4 rounded-xl">
          <div className="flex flex-col items-start gap-1 max-w-[608px]">
            <p className="text-sm text-[#adadad] font-['Newsreader-Regular',Helvetica] leading-[21px]">
              Survivor Story
            </p>
            <h3 className="text-base text-white font-['Newsreader-Bold',Helvetica] font-bold leading-5">
              Omar&#39;s Account
            </h3>
            <p className="text-sm text-[#adadad] font-['Newsreader-Regular',Helvetica] leading-[21px]">
              Omar shares his experience of witnessing atrocities and his
              efforts to document the events to ensure accountability.
            </p>
          </div>

          <div
            className="flex-1 h-[171px] rounded-xl bg-cover bg-center"
            style={{ backgroundImage: "url(/image.png)" }}
          />
        </CardContent>
      </Card>
    </section>
  );
}
