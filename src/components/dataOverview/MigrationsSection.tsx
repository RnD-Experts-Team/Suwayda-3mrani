import { Card, CardContent } from "@/components/ui/card";
import React from "react";
export default function MigrationsSection(): React.ReactElement {
  const caseData = {
    id: 5,
    location: "Village E",
    date: "2023-09-01",
    description: "House burnt to the ground",
    imageUrl: "/depth-5-frame-0-4.png",
  };
  return (
    <Card className="border-0 rounded-none bg-[#191919] shadow-none">
      {" "}
      <CardContent className="flex items-start gap-4 p-3">
        {" "}
        <div
          className="w-[70px] h-[70px] rounded-lg bg-cover bg-center shrink-0"
          style={{ backgroundImage: `url(${caseData.imageUrl})` }}
          aria-label="Case image"
          role="img"
        />{" "}
        <div className="flex flex-col justify-center h-[70px] w-full">
          {" "}
          <h3 className="[font-family:'Newsreader-Medium',Helvetica] font-medium text-white text-base leading-6">
            {" "}
            Case {caseData.id}{" "}
          </h3>{" "}
          <p className="[font-family:'Newsreader-Regular',Helvetica] font-normal text-[#adadad] text-sm leading-[21px]">
            {" "}
            Location: {caseData.location}, Date: {caseData.date}{" "}
          </p>{" "}
          <p className="[font-family:'Newsreader-Regular',Helvetica] font-normal text-[#adadad] text-sm leading-[21px]">
            {" "}
            {caseData.description}{" "}
          </p>{" "}
        </div>{" "}
      </CardContent>{" "}
    </Card>
  );
}
