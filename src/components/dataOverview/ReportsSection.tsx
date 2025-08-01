import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Card, CardContent } from "@/components/ui/card";
import React from "react";
export default function ReportsSection(): React.ReactElement {
  const reportData = {
    id: 2,
    title: "Case 2",
    location: "Village B",
    date: "2023-06-20",
    description: "House completely demolished",
    imageUrl: "/image.png",
  };
  return (
    <Card className="flex items-start gap-4 p-3 bg-[#191919] border-none rounded-none">
      {" "}
      <div className="flex-shrink-0 w-[70px] h-[70px] overflow-hidden rounded-lg">
        {" "}
        <AspectRatio ratio={1} className="h-full">
          {" "}
          <div
            className="w-full h-full bg-cover bg-center rounded-lg"
            style={{ backgroundImage: `url(${reportData.imageUrl})` }}
            aria-label="Case image"
          />{" "}
        </AspectRatio>{" "}
      </div>{" "}
      <CardContent className="flex flex-col justify-center p-0 space-y-0.5">
        {" "}
        <h3 className="[font-family:'Newsreader-Medium',Helvetica] font-medium text-white text-base leading-6">
          {" "}
          {reportData.title}{" "}
        </h3>{" "}
        <p className="[font-family:'Newsreader-Regular',Helvetica] font-normal text-[#adadad] text-sm leading-[21px]">
          {" "}
          Location: {reportData.location}, Date: {reportData.date}{" "}
        </p>{" "}
        <p className="[font-family:'Newsreader-Regular',Helvetica] font-normal text-[#adadad] text-sm leading-[21px]">
          {" "}
          {reportData.description}{" "}
        </p>{" "}
      </CardContent>{" "}
    </Card>
  );
}
