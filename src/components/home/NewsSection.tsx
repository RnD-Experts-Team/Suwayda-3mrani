import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import React from "react";

export default function NewsSection(): React.ReactElement {
  return (
    <section className="p-4 w-full">
      <Card className="bg-[#191919] border-[#4c4c4c] rounded-xl">
        <CardContent className="flex items-center justify-between p-5">
          <div className="flex flex-col gap-1">
            <h3 className="font-bold text-white text-base leading-5 [font-family:'Newsreader-Bold',Helvetica]">
              Volunteer
            </h3>
            <p className="text-[#adadad] text-base leading-6 [font-family:'Newsreader-Regular',Helvetica]">
              Join our team of volunteers to support our efforts in providing
              aid and raising awareness.
            </p>
          </div>

          <Button
            variant="default"
            className="h-8 px-4 py-0 bg-black rounded-2xl min-w-[84px] max-w-[480px]"
          >
            <span className="text-white text-sm text-center leading-[21px] [font-family:'Newsreader-Medium',Helvetica] font-medium overflow-hidden text-ellipsis whitespace-nowrap">
              Volunteer
            </span>
          </Button>
        </CardContent>
      </Card>
    </section>
  );
}
