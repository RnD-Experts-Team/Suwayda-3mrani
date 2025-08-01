import { Button } from "@/components/ui/button";
import React from "react";
export default function GetInvolvedSection(): React.ReactElement {
  const buttons = [
    {
      text: "Donate",
      className: "bg-black text-white hover:bg-black/90 w-[209px]",
    },
    {
      text: "Volunteer",
      className: "bg-[#353535] text-white hover:bg-[#353535]/90 w-[227px]",
    },
  ];
  return (
    <section className="flex justify-center w-full py-3">
      {" "}
      <div className="flex flex-wrap justify-center gap-3 px-4 max-w-[480px] w-full">
        {" "}
        {buttons.map((button, index) => (
          <Button
            key={index}
            className={`h-10 rounded-[20px] px-4 ${button.className}`}
            variant="ghost"
          >
            {" "}
            <span className="font-bold [font-family:'Newsreader-Bold',Helvetica] text-sm leading-[21px] whitespace-nowrap overflow-hidden text-ellipsis">
              {" "}
              {button.text}{" "}
            </span>{" "}
          </Button>
        ))}{" "}
      </div>{" "}
    </section>
  );
}
