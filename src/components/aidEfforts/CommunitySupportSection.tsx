import { Card, CardContent } from "@/components/ui/card";
import React from "react";
export default function CommunitySupportSection(): React.ReactElement {
  const organizations = [
    {
      id: 1,
      name: "Global Relief Coalition",
      description:
        "GRC provides emergency relief and long-term support to communities affected by conflict and disaster.",
      imageUrl: "/depth-7-frame-0.png",
    },
    {
      id: 2,
      name: "Humanity First Aid",
      description:
        "HFA delivers essential aid and medical assistance to those in need, focusing on vulnerable populations.",
      imageUrl: "/image.png",
    },
    {
      id: 3,
      name: "World Health Alliance",
      description:
        "WHA works to improve health outcomes in crisis-affected areas, providing medical care and resources.",
      imageUrl: "/depth-7-frame-0-2.png",
    },
  ];
  return (
    <section className="flex flex-col gap-3 p-4 w-full">
      {" "}
      <div className="flex flex-wrap gap-3 w-full">
        {" "}
        {organizations.map((org) => (
          <Card
            key={org.id}
            className="flex-1 min-w-[301px] bg-transparent border-none"
          >
            {" "}
            <div
              className="h-[301px] rounded-xl bg-cover bg-center w-full"
              style={{ backgroundImage: `url(${org.imageUrl})` }}
            />{" "}
            <CardContent className="flex flex-col items-start gap-1 p-0 pt-3">
              {" "}
              <h3 className="w-full font-medium text-white text-base leading-6 [font-family:'Newsreader-Medium',Helvetica]">
                {" "}
                {org.name}{" "}
              </h3>{" "}
              <p className="w-full font-normal text-[#adadad] text-sm leading-[21px] [font-family:'Newsreader-Regular',Helvetica]">
                {" "}
                {org.description}{" "}
              </p>{" "}
            </CardContent>{" "}
          </Card>
        ))}{" "}
      </div>{" "}
    </section>
  );
}
