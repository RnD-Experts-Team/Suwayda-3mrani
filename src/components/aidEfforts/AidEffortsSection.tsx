import { Card, CardContent } from "@/components/ui/card";
import React from "react";
export default function AidEffortsSection(): React.ReactElement {
  const aidEfforts = [
    {
      title: "Community Rebuilds",
      description:
        "A community comes together to rebuild their homes and lives after the crisis.",
      imagePath: "/depth-7-frame-0-3.png",
    },
    {
      title: "Children's Education Program",
      description:
        "An education program helps children recover and learn in a safe environment.",
      imagePath: "/depth-7-frame-0-4.png",
    },
    {
      title: "Volunteer Spotlight",
      description:
        "Meet a volunteer who has dedicated their time to helping those affected by the crisis.",
      imagePath: "/depth-7-frame-0-5.png",
    },
  ];
  return (
    <section className="w-full">
      {" "}
      <div className="gap-3 p-4 flex flex-wrap">
        {" "}
        {aidEfforts.map((effort, index) => (
          <Card
            key={index}
            className="flex-col min-w-60 flex-1 rounded-lg bg-transparent border-none"
          >
            {" "}
            <div
              className="w-full h-[169px] rounded-xl bg-cover bg-center"
              style={{ backgroundImage: `url(${effort.imagePath})` }}
            />{" "}
            <CardContent className="flex flex-col items-start p-0 pt-4 gap-1">
              {" "}
              <h3 className="w-full [font-family:'Newsreader-Medium',Helvetica] font-medium text-white text-base leading-6">
                {" "}
                {effort.title}{" "}
              </h3>{" "}
              <p className="w-full [font-family:'Newsreader-Regular',Helvetica] font-normal text-[#adadad] text-sm leading-[21px]">
                {" "}
                {effort.description}{" "}
              </p>{" "}
            </CardContent>{" "}
          </Card>
        ))}{" "}
      </div>{" "}
    </section>
  );
}
