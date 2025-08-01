import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { Globe, Search } from "lucide-react";
import React from "react";
const organizations = [
  { name: "Humanity First", logoUrl: "/depth-7-frame-0.png", isActive: true },
  { name: "Global Relief Network", logoUrl: "/image.png" },
  { name: "Aid for All", logoUrl: "/depth-7-frame-0-2.png" },
  { name: "Hope Without Borders", logoUrl: "/depth-7-frame-0-3.png" },
  { name: "United Assistance", logoUrl: "/depth-7-frame-0-4.png" },
  { name: "Compassion in Action", logoUrl: "/depth-7-frame-0-5.png" },
];
const navItems = ["Home", "Events", "Organizations", "About"];
const Organizations = (): React.ReactElement => {
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
            <div className="flex flex-col max-w-[960px] items-start relative flex-1 grow mb-[-1.00px]">
              {" "}
              {/* Organizations Title */}{" "}
              <div className="flex flex-wrap items-start justify-around gap-[12px_12px] p-4 relative self-stretch w-full flex-[0_0_auto]">
                {" "}
                <div className="flex flex-col w-72 items-start relative">
                  {" "}
                  <h2 className="relative self-stretch mt-[-1.00px] [font-family:'Newsreader-Bold',Helvetica] font-bold text-white text-[32px] tracking-[0] leading-10">
                    {" "}
                    Organizations{" "}
                  </h2>{" "}
                </div>{" "}
              </div>{" "}
              {/* Organization Cards */}{" "}
              <div className="flex flex-col items-start gap-3 p-4 relative self-stretch w-full flex-[0_0_auto]">
                {" "}
                <div className="flex items-start gap-3 relative self-stretch w-full flex-[0_0_auto]">
                  {" "}
                  {organizations.slice(0, 5).map((org, index) => (
                    <Card
                      key={index}
                      className={`flex h-[94px] items-center gap-3 p-4 relative flex-1 grow bg-neutral-800 rounded-lg border border-solid border-[#4c4c4c] ${
                        org.isActive ? "ring-2 ring-primary" : ""
                      }`}
                    >
                      {" "}
                      <CardContent className="flex items-center gap-3 p-0">
                        {" "}
                        <div
                          className="relative w-10 h-10 rounded-lg bg-cover bg-[50%_50%]"
                          style={{ backgroundImage: `url(${org.logoUrl})` }}
                        />{" "}
                        <div className="flex flex-col w-[90px] items-start relative">
                          {" "}
                          <h3 className="relative self-stretch mt-[-1.00px] [font-family:'Newsreader-Bold',Helvetica] font-bold text-white text-base tracking-[0] leading-5">
                            {" "}
                            {org.name}{" "}
                          </h3>{" "}
                        </div>{" "}
                      </CardContent>{" "}
                    </Card>
                  ))}{" "}
                </div>{" "}
                <div className="flex items-start gap-3 relative self-stretch w-full flex-[0_0_auto]">
                  {" "}
                  <Card className="w-44 flex items-center gap-3 p-4 relative bg-neutral-800 rounded-lg border border-solid border-[#4c4c4c]">
                    {" "}
                    <CardContent className="flex items-center gap-3 p-0">
                      {" "}
                      <div
                        className="relative w-10 h-10 rounded-lg bg-cover bg-[50%_50%]"
                        style={{
                          backgroundImage: `url(${organizations[5].logoUrl})`,
                        }}
                      />{" "}
                      <div className="flex flex-col w-[90px] items-start relative">
                        {" "}
                        <h3 className="relative self-stretch mt-[-1.00px] [font-family:'Newsreader-Bold',Helvetica] font-bold text-white text-base tracking-[0] leading-5">
                          {" "}
                          {organizations[5].name}{" "}
                        </h3>{" "}
                      </div>{" "}
                    </CardContent>{" "}
                  </Card>{" "}
                </div>{" "}
              </div>{" "}
              {/* Organization Details Section */}{" "}
              <div className="flex flex-col items-start pt-5 pb-3 px-4 relative self-stretch w-full flex-[0_0_auto]">
                {" "}
                <h2 className="relative self-stretch mt-[-1.00px] [font-family:'Newsreader-Bold',Helvetica] font-bold text-white text-[22px] tracking-[0] leading-7">
                  {" "}
                  Humanity First{" "}
                </h2>{" "}
              </div>{" "}
              {/* Organization Image */}{" "}
              <div className="flex items-start p-4 relative self-stretch w-full flex-[0_0_auto] bg-[#191919]">
                {" "}
                <Card className="gap-2 bg-[#191919] rounded-xl overflow-hidden flex items-start relative flex-1 grow border-0">
                  {" "}
                  <CardContent
                    className="p-0 relative flex-1 grow h-[619px] bg-cover bg-[50%_50%]"
                    style={{ backgroundImage: "url(/depth-6-frame-0.png)" }}
                  />{" "}
                </Card>{" "}
              </div>{" "}
              {/* Organization Description */}{" "}
              <div className="flex flex-col items-start pt-1 pb-3 px-4 relative self-stretch w-full flex-[0_0_auto]">
                {" "}
                <p className="relative self-stretch mt-[-1.00px] [font-family:'Newsreader-Regular',Helvetica] font-normal text-white text-base tracking-[0] leading-6">
                  {" "}
                  Humanity First is a global humanitarian organization dedicated
                  to providing aid and support to communities affected by
                  genocide and mass atrocities. Our mission is to alleviate
                  suffering, promote human dignity, and foster resilience in the
                  face of crisis. We work tirelessly to deliver essential
                  services, advocate for human rights, and empower individuals
                  to rebuild their lives.{" "}
                </p>{" "}
              </div>{" "}
              {/* Action Buttons */}{" "}
              <div className="flex items-start justify-around relative self-stretch w-full flex-[0_0_auto]">
                {" "}
                <div className="flex-wrap gap-[12px_12px] px-4 py-3 flex items-start relative flex-1 grow">
                  {" "}
                  <Button className="inline-flex min-w-[84px] max-w-[480px] h-10 items-center justify-center px-4 py-0 relative flex-[0_0_auto] bg-black rounded-[20px] overflow-hidden [font-family:'Newsreader-Bold',Helvetica] font-bold text-white text-sm text-center tracking-[0] leading-[21px] whitespace-nowrap overflow-hidden text-ellipsis [display:-webkit-box] [-webkit-line-clamp:1] [-webkit-box-orient:vertical]">
                    {" "}
                    Contact{" "}
                  </Button>{" "}
                  <Button
                    variant="secondary"
                    className="inline-flex min-w-[84px] max-w-[480px] h-10 items-center justify-center px-4 py-0 relative flex-[0_0_auto] bg-[#353535] rounded-[20px] overflow-hidden ml-3 [font-family:'Newsreader-Bold',Helvetica] font-bold text-white text-sm text-center tracking-[0] leading-[21px] whitespace-nowrap overflow-hidden text-ellipsis [display:-webkit-box] [-webkit-line-clamp:1] [-webkit-box-orient:vertical]"
                  >
                    {" "}
                    Visit Website{" "}
                  </Button>{" "}
                </div>{" "}
              </div>{" "}
            </div>{" "}
          </main>{" "}
        </div>{" "}
      </div>{" "}
    </div>
  );
};
export default Organizations;
