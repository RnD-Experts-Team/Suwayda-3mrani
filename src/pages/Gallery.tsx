import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Play } from "lucide-react";
import React from "react";
export default function Gallery(): React.ReactElement {
  const categories = [
    { id: "houses", title: "Houses", backgroundImage: "/depth-7-frame-0.png" },
    { id: "buildings", title: "Buildings", backgroundImage: "/image.png" },
    { id: "city", title: "City", backgroundImage: "/depth-7-frame-0-2.png" },
  ];
  return (
    <div className="flex flex-col items-start relative bg-white">
      {" "}
      <div className="flex flex-col min-h-[800px] items-start relative self-stretch w-full flex-[0_0_auto] bg-[#191919]">
        {" "}
        <div className="flex flex-col items-start relative self-stretch w-full flex-[0_0_auto]">
          {" "}
          <div className="flex items-start justify-center px-40 py-5 relative flex-1 self-stretch w-full grow">
            {" "}
            <div className="flex flex-col max-w-[960px] w-[960px] items-start px-0 py-5 relative">
              {" "}
              {/* Main image with play button */}{" "}
              <div className="relative self-stretch w-full flex-[0_0_auto] rounded-lg overflow-hidden">
                {" "}
                <AspectRatio ratio={16 / 9}>
                  {" "}
                  <img
                    className="w-full h-full object-cover"
                    alt="Damaged house from conflict"
                    src="/depth-4-frame-0.svg"
                  />{" "}
                  <div className="absolute inset-0 flex items-center justify-center">
                    {" "}
                    <div className="rounded-full bg-black/30 p-3">
                      {" "}
                      <Play className="h-8 w-8 text-white" />{" "}
                    </div>{" "}
                  </div>{" "}
                </AspectRatio>{" "}
              </div>{" "}
              {/* Category cards */}{" "}
              <div className="flex items-start relative self-stretch w-full flex-[0_0_auto]">
                {" "}
                <div className="flex items-start gap-3 p-4 relative flex-[0_0_auto] w-full">
                  {" "}
                  {categories.map((category) => (
                    <Card
                      key={category.id}
                      className="flex flex-col min-w-40 items-start gap-4 relative flex-1 self-stretch rounded-lg bg-transparent border-0"
                    >
                      {" "}
                      <CardContent className="p-0 w-full">
                        {" "}
                        <div
                          className="relative self-stretch w-full h-40 rounded-xl bg-cover bg-center"
                          style={{
                            backgroundImage: `url(${category.backgroundImage})`,
                          }}
                        />{" "}
                        <div className="flex flex-col items-start mt-4 relative self-stretch w-full">
                          {" "}
                          <div className="relative self-stretch mt-[-1.00px] font-medium text-white text-base tracking-[0] leading-6 font-['Newsreader-Medium',Helvetica]">
                            {" "}
                            {category.title}{" "}
                          </div>{" "}
                        </div>{" "}
                      </CardContent>{" "}
                    </Card>
                  ))}{" "}
                </div>{" "}
              </div>{" "}
              {/* Content heading */}{" "}
              <div className="flex flex-col items-start pt-5 pb-3 px-4 relative self-stretch w-full flex-[0_0_auto]">
                {" "}
                <h2 className="relative self-stretch mt-[-1.00px] font-bold text-white text-[22px] tracking-[0] leading-7 font-['Newsreader-Bold',Helvetica]">
                  {" "}
                  Houses{" "}
                </h2>{" "}
              </div>{" "}
              {/* Content description */}{" "}
              <div className="flex flex-col items-start pt-1 pb-3 px-4 relative self-stretch w-full flex-[0_0_auto]">
                {" "}
                <p className="relative self-stretch mt-[-1.00px] font-normal text-white text-base tracking-[0] leading-6 font-['Newsreader-Regular',Helvetica]">
                  {" "}
                  The destruction of homes and infrastructure during the
                  conflict left countless families displaced and without
                  shelter. This case documents the systematic targeting of
                  residential areas, highlighting the devastating impact on
                  civilian populations and their communities.{" "}
                </p>{" "}
              </div>{" "}
              {/* Close button */}{" "}
              <div className="flex items-start justify-end px-4 py-3 relative self-stretch w-full flex-[0_0_auto]">
                {" "}
                <Button
                  variant="secondary"
                  className="h-10 w-[84px] bg-[#353535] rounded-[20px] text-white hover:bg-[#454545]"
                >
                  {" "}
                  <span className="font-bold text-sm text-center tracking-[0] leading-[21px] whitespace-nowrap overflow-hidden text-ellipsis font-['Newsreader-Bold',Helvetica]">
                    {" "}
                    Close{" "}
                  </span>{" "}
                </Button>{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
    </div>
  );
}
