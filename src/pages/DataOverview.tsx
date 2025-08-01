import React from "react";
import CrisisArchiveSection from "../components/dataOverview/CrisisArchiveSection";
import DataOverviewSection from "../components/dataOverview/DataOverviewSection";
import DeathsSection from "../components/dataOverview/DeathsSection";
import HousesSection from "../components/dataOverview/HousesSection";
import MigrationsSection from "../components/dataOverview/MigrationsSection";
import OverviewSection from "../components/dataOverview/OverviewSection";
import ReportsSection from "../components/dataOverview/ReportsSection";
export default function DataOverview(): React.ReactElement {
  return (
    <div className="flex flex-col w-full bg-white">
      {" "}
      <div className="flex flex-col w-full bg-[#191919]">
        {" "}
        {/* <DeathsSection />{" "} */}
        <div className="flex justify-center px-40 py-5 w-full">
          {" "}
          <div className="flex flex-col max-w-[960px] w-full">
            {" "}
            {/* Data Overview Title */}{" "}
            <div className="flex flex-wrap items-start justify-around gap-[12px] p-4 w-full">
              {" "}
              <div className="flex flex-col w-72">
                {" "}
                <h2 className="[font-family:'Newsreader-Bold',Helvetica] font-bold text-white text-[32px] leading-10">
                  {" "}
                  Data Overview{" "}
                </h2>{" "}
              </div>{" "}
            </div>{" "}
            {/* Data Overview Section */} <DataOverviewSection />{" "}
            {/* Houses Title */}{" "}
            <div className="flex flex-col pt-4 pb-2 px-4 w-full">
              {" "}
              <h3 className="[font-family:'Newsreader-Bold',Helvetica] font-bold text-white text-lg leading-[23px]">
                {" "}
                Houses{" "}
              </h3>{" "}
            </div>{" "}
            {/* Main Content Sections */} <OverviewSection /> <ReportsSection />{" "}
            <CrisisArchiveSection /> <HousesSection /> <MigrationsSection />{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
    </div>
  );
}
