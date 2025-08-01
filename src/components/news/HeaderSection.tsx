import { Card, CardContent } from "@/components/ui/card";
import React from "react";
export default function HeaderSection (): React.ReactElement {
  return (
    <section className="p-4 w-full">
      {" "}
      <Card className="flex overflow-hidden bg-neutral-800 rounded-xl shadow-[0px_0px_4px_#0000001a] p-0">
        {" "}
        <CardContent className="flex flex-row items-start justify-between p-4 w-full gap-4">
          {" "}
          <div className="flex flex-col gap-1">
            {" "}
            <p className="text-sm text-[#adadad] [font-family:'Newsreader-Regular',Helvetica] leading-[21px]">
              {" "}
              September 15, 2017{" "}
            </p>{" "}
            <h2 className="text-base text-white [font-family:'Newsreader-Bold',Helvetica] font-bold leading-5">
              {" "}
              Rohingya Refugees Face Dire Conditions in Bangladesh Camps{" "}
            </h2>{" "}
            <p className="text-sm text-[#adadad] [font-family:'Newsreader-Regular',Helvetica] leading-[21px]">
              {" "}
              Hundreds of thousands of Rohingya refugees who fled violence in
              Myanmar are living in overcrowded and unsanitary camps in
              Bangladesh. Humanitarian organizations are struggling to provide
              adequate food, shelter, and medical care.{" "}
            </p>{" "}
          </div>{" "}
          <div className="flex-1 min-w-[200px] h-[165px] rounded-xl bg-[url(/depth-6-frame-1-3.png)] bg-cover bg-[50%_50%]" />{" "}
        </CardContent>{" "}
      </Card>{" "}
    </section>
  );
}
