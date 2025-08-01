import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { Archive, Globe, Search } from "lucide-react";
import React from "react";
const TimeLine = (): React.ReactElement => {
  const navItems = [
    { label: "Overview" },
    { label: "Timeline" },
    { label: "Documents" },
    { label: "Analysis" },
    { label: "About" },
  ];
  const timelineItems = [
    {
      title: "Early Tensions",
      period: "1980s - 1990",
      icon: <Archive className="h-6 w-6 text-white" />,
    },
    {
      title: "Escalation of Violence",
      period: "1991 - 1993",
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {" "}
          <path
            d="M12 9V21M12 9L7 14M12 9L17 14"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />{" "}
          <path
            d="M12 3L12 5"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
          />{" "}
        </svg>
      ),
    },
    {
      title: "Peak of Atrocities",
      period: "1994",
      icon: null,
      isHighlighted: true,
    },
    {
      title: "International Response",
      period: "1995 - 2000",
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {" "}
          <path
            d="M12 12C14.2091 12 16 10.2091 16 8C16 5.79086 14.2091 4 12 4C9.79086 4 8 5.79086 8 8C8 10.2091 9.79086 12 12 12Z"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />{" "}
          <path
            d="M18 18C18 15.7909 15.3137 14 12 14C8.68629 14 6 15.7909 6 18"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />{" "}
        </svg>
      ),
    },
    {
      title: "Post-Crisis Developments",
      period: "2001 - 2010",
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {" "}
          <path
            d="M3 9L12 2L21 9V20C21 20.5304 20.7893 21.0391 20.4142 21.4142C20.0391 21.7893 19.5304 22 19 22H5C4.46957 22 3.96086 21.7893 3.58579 21.4142C3.21071 21.0391 3 20.5304 3 20V9Z"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />{" "}
        </svg>
      ),
    },
    {
      title: "Ongoing Challenges",
      period: "2011 - Present",
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {" "}
          <path
            d="M12 8V12M12 16H12.01M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />{" "}
        </svg>
      ),
    },
  ];
  return (
    <div className="flex flex-col items-start relative bg-white">
      {" "}
      <div className="flex flex-col min-h-[800px] items-start relative self-stretch w-full flex-[0_0_auto] bg-[#191919]">
        {" "}
        <div className="flex flex-col items-start relative self-stretch w-full flex-[0_0_auto]">
          {" "}
          
          {/* Main Content */}{" "}
          <main className="items-start justify-center px-40 py-5 flex-1 grow flex relative self-stretch w-full">
            {" "}
            <div className="flex flex-col max-w-[960px] items-start relative flex-1 grow">
              {" "}
              {/* Timeline Header */}{" "}
              <div className="flex flex-wrap items-start justify-around gap-[12px_12px] p-4 relative self-stretch w-full flex-[0_0_auto]">
                {" "}
                <div className="inline-flex flex-col min-w-72 items-start relative flex-[0_0_auto]">
                  {" "}
                  <h2 className="relative self-stretch mt-[-1.00px] [font-family:'Newsreader-Bold',Helvetica] font-bold text-white text-[32px] tracking-[0] leading-10 whitespace-nowrap">
                    {" "}
                    Timeline of the Crisis{" "}
                  </h2>{" "}
                </div>{" "}
              </div>{" "}
              {/* Timeline Items */}{" "}
              <div className="flex flex-col items-start gap-2 px-4 py-0 relative self-stretch w-full flex-[0_0_auto]">
                {" "}
                {timelineItems.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-2 relative flex-1 self-stretch w-full grow"
                  >
                    {" "}
                    {/* Timeline Icon/Connector */}{" "}
                    <div className="w-10 mb-[-6.67px] relative self-stretch flex justify-center">
                      {" "}
                      {item.isHighlighted ? (
                        <div className="flex flex-col w-10 items-center gap-1 relative self-stretch">
                          {" "}
                          <div className="relative w-0.5 h-2 bg-[#4c4c4c]" />{" "}
                          <div className="relative w-6 h-6 rounded-xl" />{" "}
                          <div className="relative w-0.5 h-8 mb-[-6.67px] bg-[#4c4c4c]" />{" "}
                        </div>
                      ) : (
                        <div className="flex items-center justify-center h-full">
                          {" "}
                          {item.icon}{" "}
                        </div>
                      )}{" "}
                    </div>{" "}
                    {/* Timeline Content */}{" "}
                    <div className="flex flex-col items-start px-0 py-3 flex-1 grow relative self-stretch">
                      {" "}
                      <div className="flex flex-col items-start relative self-stretch w-full flex-[0_0_auto]">
                        {" "}
                        <h3 className="relative self-stretch mt-[-1.00px] [font-family:'Newsreader-Medium',Helvetica] font-medium text-white text-base tracking-[0] leading-6">
                          {" "}
                          {item.title}{" "}
                        </h3>{" "}
                      </div>{" "}
                      <div className="flex flex-col items-start relative self-stretch w-full flex-[0_0_auto] mb-[-6.67px]">
                        {" "}
                        <p className="relative self-stretch mt-[-1.00px] [font-family:'Newsreader-Regular',Helvetica] font-normal text-[#adadad] text-base tracking-[0] leading-6">
                          {" "}
                          {item.period}{" "}
                        </p>{" "}
                      </div>{" "}
                    </div>{" "}
                  </div>
                ))}{" "}
              </div>{" "}
              {/* Highlighted Event Card */}{" "}
              <div className="flex flex-col items-start p-4 relative self-stretch w-full flex-[0_0_auto]">
                {" "}
                <Card className="flex items-start relative self-stretch w-full flex-[0_0_auto] rounded-xl bg-transparent border-0">
                  {" "}
                  <CardContent className="flex p-0">
                    {" "}
                    <div className="relative flex-1 grow h-64 rounded-xl" />{" "}
                    <div className="flex flex-col min-w-72 items-start justify-center gap-1 p-4 relative flex-1 grow">
                      {" "}
                      <div className="flex flex-col items-start relative self-stretch w-full flex-[0_0_auto]">
                        {" "}
                        <h3 className="relative self-stretch mt-[-1.00px] [font-family:'Newsreader-Bold',Helvetica] font-bold text-white text-lg tracking-[0] leading-[23px]">
                          {" "}
                          Peak of Atrocities{" "}
                        </h3>{" "}
                      </div>{" "}
                      <div className="flex items-end justify-around gap-3 relative self-stretch w-full flex-[0_0_auto]">
                        {" "}
                        <div className="flex flex-col items-start relative flex-1 grow">
                          {" "}
                          <p className="relative self-stretch mt-[-1.00px] [font-family:'Newsreader-Regular',Helvetica] font-normal text-[#adadad] text-base tracking-[0] leading-6">
                            {" "}
                            In 1994, the crisis reached its zenith with
                            widespread violence and systematic atrocities. This
                            period marked the most intense phase of the
                            conflict, resulting in significant loss of life and
                            long-term consequences for the affected communities.{" "}
                          </p>{" "}
                        </div>{" "}
                      </div>{" "}
                    </div>{" "}
                  </CardContent>{" "}
                </Card>{" "}
              </div>{" "}
            </div>{" "}
          </main>{" "}
        </div>{" "}
      </div>{" "}
    </div>
  );
};
export default TimeLine;
