import { Card, CardContent } from "@/components/ui/card";
import React from "react";
export default function ArticlePreviewSection(): React.ReactElement {
  return (
    <section className="flex flex-col items-start p-4 w-full">
      {" "}
      <Card className="flex w-full overflow-hidden bg-neutral-800 rounded-xl shadow-sm">
        {" "}
        <CardContent className="flex flex-row items-start justify-between p-4 w-full gap-4">
          {" "}
          <div className="flex flex-col items-start gap-1">
            {" "}
            <time className="text-sm text-[#adadad] font-['Newsreader-Regular',Helvetica] leading-[21px]">
              {" "}
              December 12, 2017{" "}
            </time>{" "}
            <h3 className="text-base text-white font-bold font-['Newsreader-Bold',Helvetica] leading-5">
              {" "}
              Human Rights Watch Releases Report on Sexual Violence Against
              Rohingya Women and Girls{" "}
            </h3>{" "}
            <p className="text-sm text-[#adadad] font-['Newsreader-Regular',Helvetica] leading-[21px]">
              {" "}
              Human Rights Watch has released a report documenting widespread
              sexual violence against Rohingya women and girls by Myanmar
              security forces. The report includes testimonies from survivors
              and calls for accountability for perpetrators.{" "}
            </p>{" "}
          </div>{" "}
          <div className="flex-1 min-w-[200px] h-[165px] rounded-xl bg-[url(/depth-6-frame-1-6.png)] bg-cover bg-center" />{" "}
        </CardContent>{" "}
      </Card>{" "}
    </section>
  );
}
