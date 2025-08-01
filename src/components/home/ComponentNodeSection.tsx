import { Card, CardContent } from "@/components/ui/card";
import React from "react";

export default function ComponentNodeSection(): React.ReactElement {
  return (
    <section className="flex flex-col items-start p-4 w-full">
      <Card className="flex items-start justify-between w-full rounded-xl bg-transparent border-0 shadow-none">
        <CardContent className="flex p-0 gap-4 w-full">
          <div className="flex flex-col w-full md:w-3/5 items-start gap-1">
            <p className="w-full [font-family:'Newsreader-Regular',Helvetica] font-normal text-[#adadad] text-sm leading-[21px]">
              Breaking News
            </p>
            <h2 className="w-full [font-family:'Newsreader-Bold',Helvetica] font-bold text-white text-base leading-5">
              Suwayda Crisis Escalates
            </h2>
            <p className="w-full [font-family:'Newsreader-Regular',Helvetica] font-normal text-[#adadad] text-sm leading-[21px]">
              Recent reports indicate a surge in violence and human rights
              violations in Suwayda, raising concerns about the safety of
              civilians.
            </p>
          </div>
          <div className="hidden md:block flex-1 h-[171px] rounded-xl bg-[url(/depth-6-frame-1-2.png)] bg-cover bg-center" />
        </CardContent>
      </Card>
    </section>
  );
}
