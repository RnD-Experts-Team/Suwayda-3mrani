import React from "react";
import AidEffortsSection from "../components/aidEfforts/AidEffortsSection";
import CommunitySupportSection from "../components/aidEfforts/CommunitySupportSection";
import GetInvolvedSection from "../components/aidEfforts/GetInvolvedSection";
import InternationalOrganizationsSection from "../components/aidEfforts/InternationalOrganizationsSection";
import LocalGroupsSection from "../components/aidEfforts/LocalGroupsSection";
import StoriesOfHopeSection from "../components/aidEfforts/StoriesOfHopeSection";
export default function AidEfforts(): React.ReactElement {
  return (
    <div className="flex flex-col w-full bg-white">
      {" "}
      <div className="flex flex-col w-full bg-[#191919]">
        {" "}
        <div className="flex flex-col w-full">
          {" "}
          {/* <InternationalOrganizationsSection />{" "} */}
          <div className="px-40 py-5 flex justify-center w-full">
            {" "}
            <div className="flex flex-col max-w-[960px] w-full">
              {" "}
              <div className="flex flex-col pt-5 pb-3 px-4 w-full">
                {" "}
                <h2 className="[font-family:'Newsreader-Bold',Helvetica] font-bold text-white text-[22px] leading-7">
                  {" "}
                  International Organizations{" "}
                </h2>{" "}
              </div>{" "}
              <LocalGroupsSection />{" "}
              <div className="flex flex-col pt-5 pb-3 px-4 w-full">
                {" "}
                <h2 className="[font-family:'Newsreader-Bold',Helvetica] font-bold text-white text-[22px] leading-7">
                  {" "}
                  Local Groups{" "}
                </h2>{" "}
              </div>{" "}
              <CommunitySupportSection />{" "}
              <div className="flex flex-col pt-5 pb-3 px-4 w-full">
                {" "}
                <h2 className="[font-family:'Newsreader-Bold',Helvetica] font-bold text-white text-[22px] leading-7">
                  {" "}
                  Community Support{" "}
                </h2>{" "}
              </div>{" "}
              <StoriesOfHopeSection />{" "}
              <div className="flex flex-col pt-5 pb-3 px-4 w-full">
                {" "}
                <h2 className="[font-family:'Newsreader-Bold',Helvetica] font-bold text-white text-[22px] leading-7">
                  {" "}
                  Stories of Hope{" "}
                </h2>{" "}
              </div>{" "}
              <AidEffortsSection />{" "}
              <div className="flex flex-col pt-5 pb-3 px-4 w-full">
                {" "}
                <h2 className="[font-family:'Newsreader-Bold',Helvetica] font-bold text-white text-[22px] leading-7">
                  {" "}
                  Aid Efforts{" "}
                </h2>{" "}
              </div>{" "}
              <GetInvolvedSection />{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
    </div>
  );
}
