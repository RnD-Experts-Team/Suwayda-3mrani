import { Card, CardContent } from "@/components/ui/card";
import React from "react";
export default function CrisisArchiveSection(): React.ReactElement {
  return (
    <Card className="flex items-start gap-4 p-3 w-full bg-[#191919] border-none rounded-none">
      {" "}
      <div
        className="w-[70px] h-[70px] rounded-lg bg-cover bg-center shrink-0"
        style={{ backgroundImage: "url(/depth-5-frame-0-2.png)" }}
      />{" "}
      <CardContent className="flex flex-col justify-center p-0 space-y-0.5">
        {" "}
        <h3 className="[font-family:'Newsreader-Medium',Helvetica] font-medium text-white text-base leading-6">
          {" "}
          Case 3{" "}
        </h3>{" "}
        <p className="[font-family:'Newsreader-Regular',Helvetica] font-normal text-[#adadad] text-sm leading-[21px]">
          {" "}
          Location: Village C, Date: 2023-07-10{" "}
        </p>{" "}
        <p className="[font-family:'Newsreader-Regular',Helvetica] font-normal text-[#adadad] text-sm leading-[21px]">
          {" "}
          House partially damaged{" "}
        </p>{" "}
      </CardContent>{" "}
    </Card>
  );
}
