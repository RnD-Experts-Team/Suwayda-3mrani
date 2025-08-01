import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Menu, Search } from "lucide-react";
import React from "react";
export default function MainContentSection(): React.ReactElement {
  const navItems = [
    { label: "Overview", active: true },
    { label: "Events", active: false },
    { label: "People", active: false },
    { label: "Documents", active: false },
    { label: "News", active: false },
    { label: "Analysis", active: false },
  ];
  return (
    <header className="flex items-center justify-between px-10 py-3 border-b border-[#e5e8ea] w-full bg-black">
      {" "}
      {/* Logo and title */}{" "}
      <div className="flex items-center gap-4">
        {" "}
        <Button variant="ghost" className="p-0 h-auto">
          {" "}
          <Menu className="h-5 w-5 text-white" />{" "}
        </Button>{" "}
        <div className="flex flex-col items-start">
          {" "}
          <h1 className="[font-family:'Newsreader-Bold',Helvetica] font-bold text-white text-lg leading-[23px]">
            {" "}
            Crisis Archive{" "}
          </h1>{" "}
        </div>{" "}
      </div>{" "}
      {/* Navigation and user profile */}{" "}
      <div className="flex items-center justify-end gap-8 flex-1">
        {" "}
        {/* Navigation menu */}{" "}
        <nav className="flex items-center h-10 gap-9">
          {" "}
          {navItems.map((item, index) => (
            <Button key={index} variant="ghost" className="h-auto p-0">
              {" "}
              <span className="[font-family:'Newsreader-Medium',Helvetica] font-medium text-white text-sm leading-[21px]">
                {" "}
                {item.label}{" "}
              </span>{" "}
            </Button>
          ))}{" "}
        </nav>{" "}
        {/* Search button */}{" "}
        <Button variant="ghost" className="p-0 h-auto">
          {" "}
          <Search className="h-5 w-5 text-white" />{" "}
        </Button>{" "}
        {/* User avatar */}{" "}
        <Avatar className="w-10 h-10">
          {" "}
          <AvatarImage src="/depth-4-frame-2.png" alt="User profile" />{" "}
          <AvatarFallback>UN</AvatarFallback>{" "}
        </Avatar>{" "}
      </div>{" "}
    </header>
  );
}
