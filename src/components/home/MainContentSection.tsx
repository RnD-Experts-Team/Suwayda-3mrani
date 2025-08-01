import { Card, CardContent } from "@/components/ui/card";
import React from "react";

export default function MainContentSection(): React.ReactElement {
  // Data for the cards to enable mapping
  const cardData = [
    {
      title: "Road Closures",
      description: "Blockades restrict movement and aid",
      image: "/depth-7-frame-0-5.png",
    },
    {
      title: "Water Poisoning",
      description: "Water sources poisoned, causing illness",
      image: "/depth-7-frame-0-6.png",
    },
    {
      title: "Displacement",
      description: "Thousands displaced, seeking safety",
      image: "/depth-7-frame-0-7.png",
    },
    {
      title: "Massacres",
      description: "Mass killings of civilians",
      image: "/depth-7-frame-0-8.png",
    },
    {
      title: "Resistance",
      description: "Local communities organize protests",
      image: "/depth-7-frame-0-9.png",
    },
  ];

  return (
    <div className="flex items-start w-full">
      <div className="flex items-start gap-3 p-4 flex-1">
        {cardData.map((card, index) => (
          <Card
            key={index}
            className="flex flex-col min-w-40 flex-1 bg-transparent border-none"
          >
            <CardContent className="flex flex-col items-start gap-4 p-0">
              {index === 0 ? (
                <img
                  className="w-full h-[99px] object-cover rounded-xl"
                  alt={card.title}
                  src={card.image}
                />
              ) : (
                <div
                  className="w-full h-[99px] rounded-xl bg-cover bg-center"
                  style={{ backgroundImage: `url(${card.image})` }}
                />
              )}
              <div className="flex flex-col items-start w-full">
                <div className="w-full">
                  <div className="mt-[-1.00px] [font-family:'Newsreader-Medium',Helvetica] font-medium text-white text-base leading-6">
                    {card.title}
                  </div>
                </div>
                <div className="w-full">
                  <div className="mt-[-1.00px] [font-family:'Newsreader-Regular',Helvetica] font-normal text-[#adadad] text-sm leading-[21px]">
                    {card.description}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
