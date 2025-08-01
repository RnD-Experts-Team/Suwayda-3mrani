import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import React from "react";

export const DepthFrameSubsection = (): React.ReactElement => {
  // Navigation menu items data
  const navItems = [
    { label: "Home", href: "#" },
    { label: "About", href: "#" },
    { label: "Stories", href: "#" },
    { label: "Media", href: "#" },
    { label: "News", href: "#" },
    { label: "Aid Efforts", href: "#" },
  ];

  return (
    <header className="flex items-center justify-between px-10 py-3 border-b border-[#e5e8ea] w-full bg-black">
      {/* Logo and Site Name */}
      <div className="flex items-center gap-4">
        <img className="h-8 w-auto" alt="Suwayda Archive Logo" src="" />
        <h1 className="[font-family:'Newsreader-Bold',Helvetica] font-bold text-white text-lg leading-[23px]">
          Suwayda Archive
        </h1>
      </div>

      {/* Navigation and CTA Buttons */}
      <div className="flex items-center justify-end gap-8 flex-1">
        {/* Navigation Menu */}
        <NavigationMenu className="max-w-none">
          <NavigationMenuList className="flex gap-9">
            {navItems.map((item, index) => (
              <NavigationMenuItem key={index}>
                <NavigationMenuLink
                  href={item.href}
                  className="[font-family:'Newsreader-Medium',Helvetica] font-medium text-white text-sm leading-[21px] px-0 py-0 hover:text-gray-300 transition-colors"
                >
                  {item.label}
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        {/* CTA Buttons */}
        <div className="flex items-center gap-2">
          <Button className="min-w-[84px] h-10 rounded-[20px] bg-black border border-white [font-family:'Newsreader-Bold',Helvetica] font-bold text-sm">
            See Stories
          </Button>
          <Button className="min-w-[84px] h-10 rounded-[20px] bg-[#353535] [font-family:'Newsreader-Bold',Helvetica] font-bold text-sm">
            Take Action
          </Button>
        </div>
      </div>
    </header>
  );
};

export default DepthFrameSubsection;
