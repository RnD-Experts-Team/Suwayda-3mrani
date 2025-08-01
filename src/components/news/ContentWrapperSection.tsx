import { Card, CardContent } from "@/components/ui/card";
import React from "react";
export default function ContentWrapperSection(): React.ReactElement {
  return (
    <section className="p-4 w-full">
      {" "}
      <Card className="flex overflow-hidden bg-neutral-800 shadow-sm border-0">
        {" "}
        <CardContent className="flex flex-col md:flex-row p-0 w-full">
          {" "}
          <div className="flex flex-col gap-1 p-4 flex-1">
            {" "}
            <p className="text-sm text-[#adadad] [font-family:'Newsreader-Regular',Helvetica] leading-[21px]">
              {" "}
              January 23, 2020{" "}
            </p>{" "}
            <h2 className="text-base text-white [font-family:'Newsreader-Bold',Helvetica] font-bold leading-5">
              {" "}
              International Court of Justice Orders Myanmar to Prevent Genocide{" "}
            </h2>{" "}
            <p className="text-sm text-[#adadad] [font-family:'Newsreader-Regular',Helvetica] leading-[21px]">
              {" "}
              The International Court of Justice (ICJ) has ordered Myanmar to
              take all measures within its power to prevent genocide against the
              Rohingya Muslim minority. The ruling comes in response to a case
              filed by The Gambia on behalf of the Organization of Islamic
              Cooperation (OIC).{" "}
            </p>{" "}
          </div>{" "}
          <div
            className="flex-1 min-h-[165px] bg-cover bg-center rounded-r-xl"
            style={{ backgroundImage: "url(/depth-6-frame-1.png)" }}
          />{" "}
        </CardContent>{" "}
      </Card>{" "}
    </section>
  );
}
