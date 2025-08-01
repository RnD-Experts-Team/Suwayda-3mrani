import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import React from "react";
export default function DataOverviewSection(): React.ReactElement {
  const tabItems = [
    { id: "houses", label: "Houses", isActive: true },
    { id: "migrations", label: "Migrations", isActive: false },
    { id: "deaths", label: "Deaths", isActive: false },
    { id: "thefts", label: "Thefts", isActive: false },
  ];
  return (
    <div className="flex flex-col w-full border-b border-[#4c4c4c]">
      {" "}
      <Tabs defaultValue="houses" className="w-full">
        {" "}
        <TabsList className="flex h-auto bg-transparent gap-8 px-4 border-0">
          {" "}
          {tabItems.map((tab) => (
            <TabsTrigger
              key={tab.id}
              value={tab.id}
              className={`h-auto px-0 py-4 pb-[13px] border-b-[3px] data-[state=active]:border-[#e5e8ea] data-[state=inactive]:border-transparent rounded-none [font-family:'Newsreader-Bold',Helvetica] font-bold text-sm leading-[21px] data-[state=active]:text-white data-[state=inactive]:text-[#adadad] data-[state=active]:shadow-none focus:ring-0`}
            >
              {" "}
              {tab.label}{" "}
            </TabsTrigger>
          ))}{" "}
        </TabsList>{" "}
      </Tabs>{" "}
    </div>
  );
}
