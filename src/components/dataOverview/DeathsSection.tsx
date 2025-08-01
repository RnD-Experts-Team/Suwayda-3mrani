import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { Globe, Search } from "lucide-react";
import React from "react";
export default function DeathsSection(): React.ReactElement {
  const navItems = [
    { label: "Overview", href: "#" },
    { label: "Cases", href: "#" },
    { label: "Reports", href: "#" },
    { label: "About", href: "#" },
  ];
  return (
    <header className="flex items-center justify-between px-10 py-3 border-b border-[#e5e8ea] w-full bg-black">
      {" "}
      {/* Logo and Brand */}{" "}
      <div className="flex items-center gap-4">
        {" "}
        <div className="flex-shrink-0">
          {" "}
          {/* Placeholder for the logo icon */}{" "}
          <Search className="h-5 w-5 text-white" />{" "}
        </div>{" "}
        <div className="flex flex-col items-start">
          {" "}
          <h1 className="[font-family:'Newsreader-Bold',Helvetica] font-bold text-white text-lg leading-[23px]">
            {" "}
            Crisis Archive{" "}
          </h1>{" "}
        </div>{" "}
      </div>{" "}
      {/* Navigation and User Profile */}{" "}
      <div className="flex items-center gap-8">
        {" "}
        {/* Navigation Links */}{" "}
        <NavigationMenu className="hidden md:flex">
          {" "}
          <NavigationMenuList className="flex gap-9">
            {" "}
            {navItems.map((item, index) => (
              <NavigationMenuItem key={index}>
                {" "}
                <NavigationMenuLink
                  className="[font-family:'Newsreader-Medium',Helvetica] font-medium text-white text-sm leading-[21px] hover:text-gray-300 transition-colors"
                  href={item.href}
                >
                  {" "}
                  {item.label}{" "}
                </NavigationMenuLink>{" "}
              </NavigationMenuItem>
            ))}{" "}
          </NavigationMenuList>{" "}
        </NavigationMenu>{" "}
        {/* Search Button */}{" "}
        <Button variant="ghost" size="icon" className="text-white">
          {" "}
          <Search className="h-5 w-5" />{" "}
        </Button>{" "}
        {/* Language/Globe Button */}{" "}
        <Button variant="ghost" size="icon" className="text-white">
          {" "}
          <Globe className="h-5 w-5" />{" "}
        </Button>{" "}
        {/* User Avatar */}{" "}
        <Avatar className="h-10 w-10">
          {" "}
          <AvatarImage src="/depth-4-frame-2.png" alt="User profile" />{" "}
          <AvatarFallback>UN</AvatarFallback>{" "}
        </Avatar>{" "}
      </div>{" "}
    </header>
  );
}
