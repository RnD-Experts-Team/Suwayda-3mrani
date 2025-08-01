import { Card, CardContent } from "@/components/ui/card";
import React from "react";
export default function FeaturedArticleSection(): React.ReactElement {
  return (
    <div className="flex flex-col items-start p-4 w-full">
      {" "}
      <Card className="flex w-full overflow-hidden bg-neutral-800 rounded-xl shadow-sm">
        {" "}
        <CardContent className="flex flex-row items-start justify-between p-4 w-full gap-4">
          {" "}
          <div className="flex flex-col items-start gap-1">
            {" "}
            <p className="text-sm text-[#adadad] font-normal [font-family:'Newsreader-Regular',Helvetica] leading-[21px]">
              {" "}
              March 22, 2019{" "}
            </p>{" "}
            <h3 className="text-base text-white font-bold [font-family:'Newsreader-Bold',Helvetica] leading-5">
              {" "}
              United Nations Extends Mandate of Special Rapporteur on Myanmar{" "}
            </h3>{" "}
            <p className="text-sm text-[#adadad] font-normal [font-family:'Newsreader-Regular',Helvetica] leading-[21px]">
              {" "}
              The United Nations Human Rights Council has extended the mandate
              of the Special Rapporteur on the situation of human rights in
              Myanmar. The Special Rapporteur will continue to monitor and
              report on human rights developments in the country.{" "}
            </p>{" "}
          </div>{" "}
          <div className="flex-1 h-[165px] rounded-xl bg-[url(/depth-6-frame-1-7.png)] bg-cover bg-center" />{" "}
        </CardContent>{" "}
      </Card>{" "}
    </div>
  );
}
