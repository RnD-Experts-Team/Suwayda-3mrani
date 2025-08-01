import { Card, CardContent } from "@/components/ui/card";
import React from "react";
import roadImage from "../../assets/road.png";

export default function AidAndResponseSection(): React.ReactElement {
  // Data for aid organizations to enable mapping
  const aidOrganizations = [
    {
      name: "Humanitarian Aid International",
      description:
        "Providing essential aid and support to affected communities.",
      backgroundImage: roadImage,
    },
    {
      name: "Doctors Without Borders",
      description: "Offering medical assistance and healthcare services.",
      backgroundImage: roadImage,
    },
    {
      name: "Red Crescent Society",
      description: "Delivering emergency relief and humanitarian aid.",
      backgroundImage: roadImage,
    },
    {
      name: "Global Relief Fund",
      description: "Supporting long-term recovery and development efforts.",
      backgroundImage: roadImage,
    },
  ];

  return (
    <section className="flex flex-col items-start gap-3 p-4 w-full">
      <div className="flex items-start gap-3 w-full overflow-x-auto">
        {aidOrganizations.map((org, index) => (
          <Card
            key={index}
            className="flex-shrink-0 w-[223px] bg-transparent border-none shadow-none"
          >
            <div
              className="w-full h-[223px] rounded-xl bg-cover bg-center mb-3"
              style={{ backgroundImage: `url(${org.backgroundImage})` }}
            />
            <CardContent className="p-0">
              <div className="flex flex-col items-start w-full">
                <h3 className="w-full mt-[-1.00px] [font-family:'Newsreader-Medium',Helvetica] font-medium text-white text-base leading-6">
                  {org.name}
                </h3>
                <p className="w-full mt-[-1.00px] [font-family:'Newsreader-Regular',Helvetica] font-normal text-[#adadad] text-sm leading-[21px]">
                  {org.description}
                </p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
