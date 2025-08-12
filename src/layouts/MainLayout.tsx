// MainLayout.tsx
import { useState, useEffect } from "react";
import { Outlet, Link, useLocation } from "react-router-dom";
import { useTheme } from "../ThemeContext";
import { useLanguage } from "../LanguageContext";
import { Button } from "@/components/ui/button";
import { Sun, Moon, Menu, X, ChevronDown, Languages, Facebook, Instagram } from "lucide-react";
import { layoutApi } from "@/services/layoutApi";
import type { LayoutData } from "@/types/layout";
import roadImage from "../assets/road.png";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";


const fallbackTranslations: LayoutData = {
  en: {
    title: "Suwayda Archive",
    home: "Home",
    crisesArchive: "Crises Archive",
    media: "Gallery",
    aidEfforts: "Aid Efforts",
    organizations: "Organizations",
    information: "Information",
    stories: "Stories",
    timeline: "Timeline",
    dataOverview: "Data Overview",
    seeStories: "See Stories",
    takeAction: "Take Action",
    copyright: "© 2024 Sweda 3mrani. All rights reserved.",
    privacyPolicy: "Privacy Policy",
    termsOfService: "Terms of Service",
    contact: "Contact",
    switchToLight: "Switch to light mode",
    switchToDark: "Switch to dark mode",
    toggleMenu: "Toggle menu",
    switchLanguage: "Switch language",
  },
  ar: {
    title: "أرشيف السويداء",
    home: "الرئيسية",
    crisesArchive: "أرشيف الأزمات",
    media: "الإعلام",
    aidEfforts: "جهود المساعدة",
    organizations: "المنظمات",
    information: "المعلومات",
    stories: "القصص",
    timeline: "الجدول الزمني",
    dataOverview: "نظرة عامة على البيانات",
    seeStories: "اطلع على القصص",
    takeAction: "اتخذ إجراءً",
    copyright: "© 2024 سويدا عمراني. جميع الحقوق محفوظة.",
    privacyPolicy: "سياسة الخصوصية",
    termsOfService: "شروط الخدمة",
    contact: "اتصل بنا",
    switchToLight: "التبديل إلى الوضع الفاتح",
    switchToDark: "التبديل إلى الوضع الداكن",
    toggleMenu: "تبديل القائمة",
    switchLanguage: "تغيير اللغة",
  },
  logo: roadImage,
};

// Static social media data - completely independent from API and fallback
const staticSocialData = {
  followUs: {
    en: "Follow Us",
    ar: "تابعونا"
  },
  links: [
    {
      name: "Facebook",
      url: "https://www.facebook.com/share/15hbZnPLKo/",
      icon: Facebook,
      label: {
        en: "Follow us on Facebook",
        ar: "تابعونا على فيسبوك"
      },
      hoverColor: "hover:text-blue-600 dark:hover:text-blue-400",
      bgHover: "hover:bg-blue-50 dark:hover:bg-blue-900/20"
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/swaid_aamrani?igsh=MTAyMjlscGp6ZjBwZw==",
      icon: Instagram,
      label: {
        en: "Follow us on Instagram",
        ar: "تابعونا على إنستغرام"
      },
      hoverColor: "hover:text-pink-600 dark:hover:text-pink-400",
      bgHover: "hover:bg-pink-50 dark:hover:bg-pink-900/20"
    }
  ]
};


const MainLayout = () => {
  const { isDarkMode, toggleTheme } = useTheme();
  const { currentLanguage, toggleLanguage } = useLanguage();
  const location = useLocation();


  const [layoutData, setLayoutData] = useState<LayoutData>(fallbackTranslations);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isComboboxOpen, setIsComboboxOpen] = useState(false);


  useEffect(() => {
    const fetchLayoutData = async () => {
      try {
        setLoading(true);
        const data = await layoutApi.getLayoutData();
        const mergedData: LayoutData = {
          en: {
            ...fallbackTranslations.en,
            ...data.en,
          },
          ar: {
            ...fallbackTranslations.ar,
            ...data.ar,
          },
          logo: data.logo || fallbackTranslations.logo,
        };


        setLayoutData(mergedData);
      } catch (err) {
        console.error("Failed to fetch layout data:", err);
        setError("Failed to load layout data. Using fallback content.");
        setLayoutData(fallbackTranslations);
      } finally {
        setLoading(false);
      }
    };


    fetchLayoutData();
  }, []);


  const t = layoutData[currentLanguage];


  const primaryNavLinks = [
    { label: t.home || "Home", path: "/" },
    { label: t.dataOverview || "Data Overview", path: "/data-overview" },
    { label: t.aidEfforts || "Aid Efforts", path: "/aid-efforts" },
    { label: t.media || "Gallery", path: "/gallery" },
    { label: t.stories || "Stories", path: "/stories" },
  ];


  const informationLinks = [
    { label: t.timeline || "Timeline", path: "/timeline" },
    { label: t.crisesArchive || "Crises Archive", path: "/crises_archive" },
  ];


  const allNavLinks = [...primaryNavLinks, ...informationLinks];


  if (loading) {
    return (
      <div
        dir={currentLanguage === "ar" ? "rtl" : "ltr"}
        className="min-h-screen font-['Montserrat',sans-serif]"
      >
        <div className="flex items-center justify-center min-h-screen bg-background">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
        </div>
      </div>
    );
  }


  return (
    <div
      dir={currentLanguage === "ar" ? "rtl" : "ltr"}
      className="min-h-screen font-['Montserrat',sans-serif]"
    >
      {error && (
        <div className="w-full px-4 py-2 bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 text-sm">
          <p>{error}</p>
        </div>
      )}


      <header className="flex items-center justify-between px-2 md:px-4 sticky bg-card top-0 z-50 h-16 md:h-20 shadow-lg border-b border-border">
        <div className="flex items-center space-x-2 text-base md:text-lg lg:text-xl font-bold text-card-foreground">
          <img
            src={layoutData.logo}
            alt="Logo"
            className="h-8 w-16 md:h-10 md:w-20"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.src = roadImage;
            }}
          />
          {t.title || "Suwayda Archive"}
        </div>


        <div className="hidden lg:flex items-center space-x-4">
          {primaryNavLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-sm font-medium text-foreground hover:text-primary transition-colors duration-200 p-2 rounded-md ${
                location.pathname === link.path
                  ? "text-primary bg-accent"
                  : "hover:bg-accent/20"
              }`}
            >
              {link.label}
            </Link>
          ))}


          {/* Simple Info Dropdown without search */}
          <Popover open={isComboboxOpen} onOpenChange={setIsComboboxOpen}>
            <PopoverTrigger asChild>
              <Button
                variant="ghost"
                size="sm"
                className={`flex items-center space-x-1 ${
                  informationLinks.some(
                    (link) => location.pathname === link.path
                  )
                    ? "text-primary bg-accent"
                    : ""
                }`}
              >
                <span>{t.information || "Information"}</span>
                <ChevronDown className="h-4 w-4" />
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-48 p-2">
              <div className="space-y-1">
                {informationLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={() => setIsComboboxOpen(false)}
                    className="block px-3 py-2 text-sm rounded-md hover:bg-accent hover:text-accent-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </PopoverContent>
          </Popover>


          <Button
            onClick={toggleLanguage}
            variant="ghost"
            size="icon"
            className="text-foreground hover:bg-accent"
            aria-label={t.switchLanguage || "Switch language"}
          >
            <Languages className="h-4 w-4" />
          </Button>


          <Button
            onClick={toggleTheme}
            variant="ghost"
            size="icon"
            className="text-foreground hover:bg-accent"
            aria-label={
              isDarkMode
                ? t.switchToLight || "Switch to light mode"
                : t.switchToDark || "Switch to dark mode"
            }
          >
            {isDarkMode ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </Button>
        </div>


        {/* Mobile Controls */}
        <div className="flex lg:hidden items-center space-x-2">
          <Button onClick={toggleLanguage} variant="ghost" size="icon">
            <Languages className="h-4 w-4" />
          </Button>
          <Button onClick={toggleTheme} variant="ghost" size="icon">
            {isDarkMode ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </Button>
          <Button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            variant="ghost"
            size="icon"
          >
            {isMobileMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </Button>
        </div>
      </header>


      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 top-16 z-40 bg-background/95 backdrop-blur-sm">
          <div className="bg-card border-b border-border p-4 space-y-2">
            {allNavLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`block p-2 text-sm font-medium rounded-md transition-colors ${
                  location.pathname === link.path
                    ? "bg-primary text-primary-foreground"
                    : "text-foreground hover:bg-accent hover:text-accent-foreground"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}


      <main className="flex-1 p-2 md:p-4 bg-background">
        <Outlet />
      </main>


      <footer className="text-center py-8 bg-card text-card-foreground border-t border-border">
        <div className="max-w-6xl mx-auto px-2 md:px-4">
          <p className="text-xs md:text-sm text-muted-foreground mb-4">
            {t.copyright}
          </p>
          
          {/* Static Social Media Links */}
          <div className="flex flex-col items-center space-y-4">
            
            <div className="flex items-center justify-center gap-4">
              <h3 className="text-sm inline md:text-base font-semibold text-foreground">
              {staticSocialData.followUs[currentLanguage]}
            </h3>
              {staticSocialData.links.map((social) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label[currentLanguage]}
                    className={`
                      group relative flex items-center justify-center p-3 rounded-full 
                      border-2 border-muted-foreground/30 text-muted-foreground
                      transition-all duration-300 ease-in-out
                      hover:border-current hover:scale-110 hover:shadow-lg
                      ${social.hoverColor} ${social.bgHover}
                      focus:outline-none focus:ring-2 focus:ring-primary/50 focus:ring-offset-2
                    `}
                  >
                    <IconComponent className="h-5 w-5 md:h-6 md:w-6 transition-transform duration-300 group-hover:scale-110" />
                    
                    {/* Tooltip */}
                    <span className="
                      absolute -top-12 left-1/2 transform -translate-x-1/2 
                      px-2 py-1 text-xs font-medium text-white bg-gray-900 rounded 
                      opacity-0 group-hover:opacity-100 transition-opacity duration-300
                      pointer-events-none whitespace-nowrap z-10
                      dark:bg-gray-700
                    ">
                      {social.label[currentLanguage]}
                      <span className="
                        absolute top-full left-1/2 transform -translate-x-1/2 
                        w-0 h-0 border-l-4 border-r-4 border-t-4 
                        border-transparent border-t-gray-900
                        dark:border-t-gray-700
                      "></span>
                    </span>
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};


export default MainLayout;
