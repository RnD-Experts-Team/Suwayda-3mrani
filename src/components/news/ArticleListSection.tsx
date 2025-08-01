import { Card, CardContent } from "@/components/ui/card";
import React from "react";
export default function ArticleListSection(): React.ReactElement {
  const articleData = {
    date: "November 14, 2019",
    title:
      "International Criminal Court Authorizes Investigation into Crimes Against Rohingya",
    summary:
      "The International Criminal Court (ICC) has authorized an investigation into crimes against the Rohingya people, including deportation, crimes against humanity, and persecution. The investigation will focus on events that occurred in Myanmar and Bangladesh.",
    imagePath: "/depth-6-frame-1-5.png",
  };
  return (
    <section className="flex flex-col items-start p-4 w-full">
      {" "}
      <Card className="flex items-start justify-between p-4 w-full bg-neutral-800 rounded-xl overflow-hidden shadow-[0px_0px_4px_#0000001a] border-none">
        {" "}
        <CardContent className="flex justify-between w-full p-0 gap-4">
          {" "}
          <div className="flex flex-col items-start gap-1 max-w-[587px]">
            {" "}
            <p className="w-full mt-[-1.00px] [font-family:'Newsreader-Regular',Helvetica] font-normal text-[#adadad] text-sm tracking-[0] leading-[21px]">
              {" "}
              {articleData.date}{" "}
            </p>{" "}
            <h3 className="w-full mt-[-1.00px] [font-family:'Newsreader-Bold',Helvetica] font-bold text-white text-base tracking-[0] leading-5">
              {" "}
              {articleData.title}{" "}
            </h3>{" "}
            <p className="w-full mt-[-1.00px] [font-family:'Newsreader-Regular',Helvetica] font-normal text-[#adadad] text-sm tracking-[0] leading-[21px]">
              {" "}
              {articleData.summary}{" "}
            </p>{" "}
          </div>{" "}
          <div
            className="flex-1 grow rounded-xl bg-cover bg-[50%_50%] h-[165px]"
            style={{ backgroundImage: `url(${articleData.imagePath})` }}
            role="img"
            aria-label="Article image about ICC investigation"
          />{" "}
        </CardContent>{" "}
      </Card>{" "}
    </section>
  );
}
