import { Card, CardContent } from "@/components/ui/card";
import React from "react";
export default function OverviewSection(): React.ReactElement {
  const caseData = {
    id: "Case 1",
    location: "Village A",
    date: "2023-05-15",
    description: "House destroyed by fire",
    imagePath: "/depth-5-frame-0.png",
  };
  return (
    <Card className="border-0 rounded-none bg-[#191919] shadow-none">
      {" "}
      <CardContent className="flex items-start gap-4 p-3">
        {" "}
        <div
          className="w-[70px] h-[70px] rounded-lg bg-cover bg-center flex-shrink-0"
          style={{ backgroundImage: `url(${caseData.imagePath})` }}
          role="img"
          aria-label="Case thumbnail"
        />{" "}
        <div className="flex flex-col justify-center h-[70px] w-full">
          {" "}
          <h3 className="font-medium text-white text-base leading-6 [font-family:'Newsreader-Medium',Helvetica]">
            {" "}
            {caseData.id}{" "}
          </h3>{" "}
          <p className="font-normal text-[#adadad] text-sm leading-[21px] [font-family:'Newsreader-Regular',Helvetica]">
            {" "}
            Location: {caseData.location}, Date: {caseData.date}{" "}
          </p>{" "}
          <p className="font-normal text-[#adadad] text-sm leading-[21px] [font-family:'Newsreader-Regular',Helvetica]">
            {" "}
            {caseData.description}{" "}
          </p>{" "}
        </div>{" "}
      </CardContent>{" "}
    </Card>
  );
}
