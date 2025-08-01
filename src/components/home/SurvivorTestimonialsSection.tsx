import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import React from "react";

export default function SurvivorTestimonialsSection(): React.ReactElement {
  return (
    <section className="w-full p-4">
      <Card className="bg-[#191919] border-[#4c4c4c] rounded-xl">
        <CardContent className="flex items-center justify-between p-5">
          <div className="flex flex-col gap-1">
            <h3 className="font-bold text-white text-base leading-5 [font-family:'Newsreader-Bold',Helvetica]">
              Share Testimony
            </h3>
            <p className="text-[#adadad] text-base leading-6 [font-family:'Newsreader-Regular',Helvetica]">
              If you have witnessed or experienced the events in Suwayda, share
              your story to help raise awareness.
            </p>
          </div>

          <Button
            variant="default"
            className="h-8 px-4 py-0 bg-black rounded-2xl hover:bg-black/90"
          >
            <span className="text-white text-sm text-center leading-[21px] [font-family:'Newsreader-Medium',Helvetica] truncate">
              Share Testimony
            </span>
          </Button>
        </CardContent>
      </Card>
    </section>
  );
}
