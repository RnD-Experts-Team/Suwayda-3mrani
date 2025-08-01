import { Avatar } from "@/components/ui/avatar";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { Globe, Quote, Search, Share } from "lucide-react";
import React from "react";
const Testmonials = (): React.ReactElement => {
  const navLinks = [
    { title: "Stories", href: "#" },
    { title: "About", href: "#" },
    { title: "Contact", href: "#" },
  ];
  const actionButtons = [
    { icon: <Share className="h-4 w-4" />, label: "Share" },
    { icon: <Quote className="h-4 w-4" />, label: "Cite" },
  ];
  return (
    <div className="flex flex-col items-start relative bg-white">
      {" "}
      <div className="flex flex-col min-h-[800px] items-start relative self-stretch w-full flex-[0_0_auto] bg-[#191919]">
        {" "}
        <header className="flex flex-col items-start relative self-stretch w-full flex-[0_0_auto]">
          {" "}
          {/* Navigation Bar */}{" "}
          
          {/* Main Content */}{" "}
          <main className="items-start justify-center px-40 py-5 flex-1 grow flex relative self-stretch w-full">
            {" "}
            <div className="flex flex-col max-w-[960px] items-start relative flex-1 grow">
              {" "}
              {/* Breadcrumb Navigation */}{" "}
              <Breadcrumb className="flex flex-wrap items-start gap-[8px_8px] p-4 relative self-stretch w-full flex-[0_0_auto]">
                {" "}
                <BreadcrumbList>
                  {" "}
                  <BreadcrumbItem>
                    {" "}
                    <BreadcrumbLink className="[font-family:'Newsreader-Medium',Helvetica] font-medium text-[#adadad] text-base tracking-[0] leading-6 whitespace-nowrap">
                      {" "}
                      Stories{" "}
                    </BreadcrumbLink>{" "}
                  </BreadcrumbItem>{" "}
                  <BreadcrumbSeparator className="[font-family:'Newsreader-Medium',Helvetica] font-medium text-[#adadad] text-base tracking-[0] leading-6 whitespace-nowrap" />{" "}
                  <BreadcrumbItem>
                    {" "}
                    <BreadcrumbLink className="[font-family:'Newsreader-Medium',Helvetica] font-medium text-white text-base tracking-[0] leading-6 whitespace-nowrap">
                      {" "}
                      Testimonial{" "}
                    </BreadcrumbLink>{" "}
                  </BreadcrumbItem>{" "}
                </BreadcrumbList>{" "}
              </Breadcrumb>{" "}
              {/* Article Title */}{" "}
              <div className="flex flex-col items-start pt-5 pb-3 px-4 relative self-stretch w-full flex-[0_0_auto]">
                {" "}
                <h2 className="relative self-stretch mt-[-1.00px] [font-family:'Newsreader-Bold',Helvetica] font-bold text-white text-[28px] tracking-[0] leading-[35px]">
                  {" "}
                  The Unseen Scars: A Survivor's Account{" "}
                </h2>{" "}
              </div>{" "}
              {/* Featured Image/Video */}{" "}
              <Card className="relative self-stretch w-full flex-[0_0_auto] bg-transparent border-0">
                {" "}
                <CardContent className="p-0">
                  {" "}
                  <img
                    className="w-full"
                    alt="Survivor testimonial video"
                    src=""
                  />{" "}
                </CardContent>{" "}
              </Card>{" "}
              {/* Article Content */}{" "}
              <div className="flex flex-col items-start pt-1 pb-3 px-4 relative self-stretch w-full flex-[0_0_auto]">
                {" "}
                <p className="relative self-stretch mt-[-1.00px] [font-family:'Newsreader-Regular',Helvetica] font-normal text-white text-base tracking-[0] leading-6">
                  {" "}
                  My name is Anya Petrova, and I am a survivor of the atrocities
                  that occurred in the region. I was just a young girl when the
                  violence erupted, and my life was forever changed. I witnessed
                  unspeakable acts of cruelty and lost many loved ones. The
                  memories haunt me to this day, but I am sharing my story in
                  the hope that it will help others understand the human cost of
                  such conflicts and prevent similar tragedies from happening
                  again. I remember the fear, the chaos, and the desperate
                  struggle for survival. It was a time of immense suffering, but
                  also of resilience and solidarity among those who endured
                  together. We supported each other, shared what little we had,
                  and held onto hope even in the darkest moments. This is my
                  story, a testament to the strength of the human spirit in the
                  face of adversity.{" "}
                </p>{" "}
              </div>{" "}
              {/* Action Buttons */}{" "}
              <div className="flex flex-col items-start relative self-stretch w-full flex-[0_0_auto]">
                {" "}
                <div className="flex flex-wrap items-start gap-[8px_8px] px-4 py-0 relative flex-1 self-stretch w-full grow">
                  {" "}
                  {actionButtons.map((button, index) => (
                    <div
                      key={index}
                      className="flex flex-col w-20 items-center gap-2 px-0 py-2.5 relative self-stretch bg-[#191919]"
                    >
                      {" "}
                      <Button
                        variant="ghost"
                        size="icon"
                        className="inline-flex flex-col items-center p-2.5 relative flex-[0_0_auto] bg-[#353535] rounded-[20px] hover:bg-[#454545]"
                      >
                        {" "}
                        {button.icon}{" "}
                      </Button>{" "}
                      <span className="relative self-stretch mt-[-1.00px] [font-family:'Newsreader-Medium',Helvetica] font-medium text-white text-sm text-center tracking-[0] leading-[21px] whitespace-nowrap">
                        {" "}
                        {button.label}{" "}
                      </span>{" "}
                    </div>
                  ))}{" "}
                </div>{" "}
              </div>{" "}
            </div>{" "}
          </main>{" "}
        </header>{" "}
      </div>{" "}
    </div>
  );
};
export default Testmonials;
