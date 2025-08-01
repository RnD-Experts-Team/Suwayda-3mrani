import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { Globe, Search } from "lucide-react";
import React from "react";
export const InternationalOrganizationsSection = (): React.ReactElement => {
  const navItems = [
    { label: "Overview", href: "#" },
    { label: "Timeline", href: "#" },
    { label: "People", href: "#" },
    { label: "Aid Efforts", href: "#" },
    { label: "Documents", href: "#" },
  ];
  return (
    <header className="flex items-center justify-between px-10 py-3 border-b border-[#e5e8ea] w-full bg-black">
      {" "}
      <div className="flex items-center gap-4">
        {" "}
        <div className="flex items-center justify-center w-6 h-6 bg-white rounded-full">
          {" "}
          <span className="text-black text-xs">📁</span>{" "}
        </div>{" "}
        <div>
          {" "}
          <h1 className="[font-family:'Newsreader-Bold',Helvetica] font-bold text-white text-lg leading-[23px]">
            {" "}
            Crisis Archive{" "}
          </h1>{" "}
        </div>{" "}
      </div>{" "}
      <div className="flex items-center justify-end gap-8 flex-1">
        {" "}
        <NavigationMenu>
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
        <div className="flex items-center gap-4">
          {" "}
          <button className="text-white" aria-label="Search">
            {" "}
            <Search size={20} />{" "}
          </button>{" "}
          <button className="text-white" aria-label="Language">
            {" "}
            <Globe size={20} />{" "}
          </button>{" "}
          <Avatar className="w-10 h-10">
            {" "}
            <AvatarImage src="/depth-4-frame-2.png" alt="User profile" />{" "}
            <AvatarFallback>UN</AvatarFallback>{" "}
          </Avatar>{" "}
        </div>{" "}
      </div>{" "}
    </header>
  );
};
export default InternationalOrganizationsSection;
