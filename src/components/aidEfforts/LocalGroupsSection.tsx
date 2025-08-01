import { Card, CardContent } from "@/components/ui/card";
import React from "react";
export default function LocalGroupsSection(): React.ReactElement {
  return (
    <section className="flex flex-wrap items-start justify-around gap-3 p-4 w-full">
      {" "}
      <Card className="bg-transparent border-none shadow-none w-full">
        {" "}
        <CardContent className="flex flex-col gap-3 p-0">
          {" "}
          <h2 className="font-bold text-white text-[32px] leading-10 [font-family:'Newsreader-Bold',Helvetica] mt-0">
            {" "}
            Aid Efforts{" "}
          </h2>{" "}
          <p className="text-sm text-[#adadad] leading-[21px] [font-family:'Newsreader-Regular',Helvetica] m-0">
            {" "}
            Explore the organizations and initiatives dedicated to providing aid
            and support to those affected by the crisis. Learn about their work,
            impact, and how you can contribute.{" "}
          </p>{" "}
        </CardContent>{" "}
      </Card>{" "}
    </section>
  );
}
