import { Card, CardContent } from "@/components/ui/card";
import { BookOpen, Building, Users } from "lucide-react";
import React from "react";
export default function StoriesOfHopeSection(): React.ReactElement {
  const initiatives = [
    {
      icon: <Users className="w-6 h-6 text-white" />,
      title: "Community Support Network",
      description:
        "A network of local volunteers providing direct assistance to affected families.",
    },
    {
      icon: <BookOpen className="w-6 h-6 text-white" />,
      title: "Hope for Tomorrow",
      description:
        "Focuses on rebuilding lives and communities through education and empowerment programs.",
    },
    {
      icon: <Building className="w-6 h-6 text-white" />,
      title: "Resilience Builders",
      description:
        "Works on the ground to foster resilience and recovery in the aftermath of the crisis.",
    },
  ];
  return (
    <section className="flex flex-col items-start gap-3 p-4 w-full">
      {" "}
      <div className="flex flex-wrap items-start gap-3 w-full">
        {" "}
        {initiatives.map((initiative, index) => (
          <Card
            key={index}
            className="flex-1 min-w-[301px] bg-neutral-800 border-[#4c4c4c] text-white"
          >
            {" "}
            <CardContent className="flex flex-col items-start gap-3 p-4">
              {" "}
              <div className="w-6 h-6">{initiative.icon}</div>{" "}
              <div className="flex flex-col items-start gap-1 w-full">
                {" "}
                <h3 className="w-full [font-family:'Newsreader-Bold',Helvetica] font-bold text-white text-base leading-5">
                  {" "}
                  {initiative.title}{" "}
                </h3>{" "}
                <p className="w-full [font-family:'Newsreader-Regular',Helvetica] font-normal text-[#adadad] text-sm leading-[21px]">
                  {" "}
                  {initiative.description}{" "}
                </p>{" "}
              </div>{" "}
            </CardContent>{" "}
          </Card>
        ))}{" "}
      </div>{" "}
    </section>
  );
}
