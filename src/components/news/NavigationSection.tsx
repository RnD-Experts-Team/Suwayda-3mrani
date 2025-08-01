import { Card, CardContent } from "@/components/ui/card";
import React from "react";
export default function NavigationSection  (): React.ReactElement  {
  return (
    <section className="flex flex-col items-start p-4 w-full">
      {" "}
      <Card className="flex w-full overflow-hidden bg-neutral-800 shadow-sm">
        {" "}
        <CardContent className="flex flex-row p-4 w-full gap-4">
          {" "}
          <div className="flex flex-col gap-1">
            {" "}
            <time className="font-['Newsreader-Regular',Helvetica] text-sm text-[#adadad] leading-[21px]">
              {" "}
              August 27, 2018{" "}
            </time>{" "}
            <h2 className="font-['Newsreader-Bold',Helvetica] font-bold text-white text-base leading-5">
              {" "}
              UN Fact-Finding Mission Calls for Investigation of Myanmar
              Military Leaders{" "}
            </h2>{" "}
            <p className="font-['Newsreader-Regular',Helvetica] text-sm text-[#adadad] leading-[21px]">
              {" "}
              A UN fact-finding mission has called for the investigation and
              prosecution of Myanmar's top military leaders for genocide, crimes
              against humanity, and war crimes. The mission's report details
              widespread and systematic human rights violations against the
              Rohingya.{" "}
            </p>{" "}
          </div>{" "}
          <div className="flex-1 rounded-xl bg-[url(/image.png)] bg-cover bg-center min-h-[165px]" />{" "}
        </CardContent>{" "}
      </Card>{" "}
    </section>
  );
};
