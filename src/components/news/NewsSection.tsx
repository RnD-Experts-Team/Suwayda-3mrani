import { Card, CardContent } from "@/components/ui/card";
import React from "react";
export default function NewsSection (): React.ReactElement  {
  return (
    <section className="flex flex-col items-start p-4 w-full">
      {" "}
      <Card className="flex overflow-hidden w-full bg-neutral-800 rounded-xl shadow-sm">
        {" "}
        <CardContent className="flex p-4 w-full gap-4">
          {" "}
          <div className="flex flex-col gap-1">
            {" "}
            <time className="font-['Newsreader-Regular',Helvetica] text-sm text-[#adadad] leading-[21px]">
              {" "}
              October 20, 2017{" "}
            </time>{" "}
            <h3 className="font-['Newsreader-Bold',Helvetica] font-bold text-white text-base leading-5">
              {" "}
              Satellite Images Reveal Destruction of Rohingya Villages{" "}
            </h3>{" "}
            <p className="font-['Newsreader-Regular',Helvetica] text-sm text-[#adadad] leading-[21px]">
              {" "}
              Satellite images have revealed the widespread destruction of
              Rohingya villages in Rakhine State, Myanmar. The images show
              evidence of arson and bulldozing, indicating a systematic effort
              to erase the Rohingya's presence.{" "}
            </p>{" "}
          </div>{" "}
          <div className="flex-1 min-w-[200px] rounded-xl bg-[url(/depth-6-frame-1-4.png)] bg-cover bg-center h-[165px]" />{" "}
        </CardContent>{" "}
      </Card>{" "}
    </section>
  );
};
