import { Card, CardContent } from "@/components/ui/card";
import React from "react";
export const SidebarSection = (): React.ReactElement => {
  return (
    <div className="flex flex-col items-start p-4 relative w-full">
      {" "}
      <Card className="flex items-start justify-between p-0 w-full bg-neutral-800 rounded-xl overflow-hidden shadow-[0px_0px_4px_#0000001a] border-none">
        {" "}
        <CardContent className="flex flex-row w-full p-4 gap-4">
          {" "}
          <div className="flex flex-col items-start gap-1">
            {" "}
            <p className="text-sm text-[#adadad] [font-family:'Newsreader-Regular',Helvetica] leading-[21px]">
              {" "}
              December 11, 2019{" "}
            </p>{" "}
            <h3 className="text-base text-white [font-family:'Newsreader-Bold',Helvetica] font-bold leading-5">
              {" "}
              Clara Bennett Defends Myanmar Against Genocide Accusations at ICJ{" "}
            </h3>{" "}
            <p className="text-sm text-[#adadad] [font-family:'Newsreader-Regular',Helvetica] leading-[21px]">
              {" "}
              Clara Bennett, then State Counsellor of Myanmar, defended her
              country against accusations of genocide at the International Court
              of Justice. She argued that the military's actions were a response
              to attacks by Rohingya insurgents.{" "}
            </p>{" "}
          </div>{" "}
          <div className="flex-shrink-0 rounded-xl bg-[url(/depth-6-frame-1-2.png)] bg-cover bg-[50%_50%] h-[165px] w-[165px]" />{" "}
        </CardContent>{" "}
      </Card>{" "}
    </div>
  );
};
export default SidebarSection;
