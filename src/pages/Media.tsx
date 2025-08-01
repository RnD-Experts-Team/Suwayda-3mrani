import { Card, CardContent } from "@/components/ui/card";

import React from "react";

const mediaItems = [
  { id: 1, src: "", alt: "Portrait photo 1" },
  { id: 2, src: "", alt: "Portrait photo 2" },
  { id: 3, src: "", alt: "Portrait photo 3" },
  { id: 4, src: "", alt: "Portrait photo 4" },
  { id: 5, src: "", alt: "Portrait photo 5" },
  { id: 6, src: "", alt: "Portrait photo 6" },
  { id: 7, src: "", alt: "Portrait photo 7" },
  { id: 8, src: "", alt: "Portrait photo 8" },
  { id: 9, src: "", alt: "Portrait photo 9" },
  { id: 10, src: "", alt: "Portrait photo 10" },
];

export default function Media(): React.ReactElement {
  return (
    <div className="flex flex-col items-start relative bg-white">
      <div className="flex flex-col min-h-[800px] items-start relative self-stretch w-full flex-[0_0_auto] bg-[#191919]">
        <main className="flex items-start justify-center px-40 py-5 flex-1 w-full">
          <div className="flex flex-col max-w-[960px] h-[695px] items-start flex-1">
            <div className="flex flex-wrap items-start justify-around gap-[12px_12px] p-4 w-full">
              <div className="flex flex-col w-72 items-start">
                <h2 className="[font-family:'Newsreader-Bold',Helvetica] font-bold text-white text-[32px] leading-10">
                  Media
                </h2>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4 w-full">
              {mediaItems.map((item) => (
                <Card
                  key={item.id}
                  className="bg-transparent border-0 overflow-hidden"
                >
                  <CardContent className="p-0">
                    <img
                      src={item.src}
                      alt={item.alt}
                      className="w-full h-auto rounded-md object-cover"
                    />
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
