import { Card, CardContent } from "@/components/ui/card";
import React from "react";
export default function RelatedArticlesSection(): React.ReactElement {
  return (
    <section className="flex flex-col items-start p-4 w-full">
      {" "}
      <Card className="flex items-start justify-between p-0 w-full bg-neutral-800 rounded-xl overflow-hidden shadow-[0px_0px_4px_#0000001a] border-none">
        {" "}
        <CardContent className="flex flex-row w-full p-4 gap-4">
          {" "}
          <div className="flex flex-col items-start gap-1 flex-1">
            {" "}
            <p className="text-sm text-[#adadad] [font-family:'Newsreader-Regular',Helvetica] leading-[21px] w-full">
              {" "}
              September 21, 2017{" "}
            </p>{" "}
            <h3 className="text-base text-white [font-family:'Newsreader-Bold',Helvetica] font-bold leading-5 w-full">
              {" "}
              Amnesty International Accuses Myanmar Military of Atrocities
              Against Rohingya{" "}
            </h3>{" "}
            <p className="text-sm text-[#adadad] [font-family:'Newsreader-Regular',Helvetica] leading-[21px] w-full">
              {" "}
              Amnesty International has accused the Myanmar military of
              committing atrocities against the Rohingya, including murder,
              rape, and torture. The organization's report is based on
              interviews with survivors and analysis of satellite imagery.{" "}
            </p>{" "}
          </div>{" "}
          <div className="rounded-xl bg-[url(/depth-6-frame-1-8.png)] bg-cover bg-[50%_50%] h-[165px] w-[300px]" />{" "}
        </CardContent>{" "}
      </Card>{" "}
    </section>
  );
}
