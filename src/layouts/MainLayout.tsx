// MainLayout.tsx
// Remove these Command-related imports
import { useState, useEffect } from "react";
import { Outlet, Link, useLocation } from "react-router-dom";
import { useTheme } from "../ThemeContext";
import { useLanguage } from "../LanguageContext";
import { Button } from "@/components/ui/button";
import { Sun, Moon, Menu, X, ChevronDown, Languages } from "lucide-react";
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
    navigation: {
      home: "Home",
      crisesArchive: "Crises Archive",
      gallery: "Gallery",
      aidEfforts: "Aid Efforts",
      organizations: "Organizations",
      information: "Information",
      stories: "Stories",
      timeline: "Timeline",
      dataOverview: "Data Overview",
    },
    buttons: {
      seeStories: "See Stories",
      takeAction: "Take Action",
    },
    footer: {
      copyright: "© 2024 Sweda 3mrani. All rights reserved.",
      privacyPolicy: "Privacy Policy",
      termsOfService: "Terms of Service",
      contact: "Contact",
    },
    ariaLabels: {
      switchToLight: "Switch to light mode",
      switchToDark: "Switch to dark mode",
      toggleMenu: "Toggle menu",
      switchLanguage: "Switch language",
    },
  },
  ar: {
    title: "أرشيف السويداء",
    navigation: {
      home: "الرئيسية",
      crisesArchive: "أرشيف الأزمات",
      gallery: "الإعلام",
      aidEfforts: "جهود المساعدة",
      organizations: "المنظمات",
      information: "المعلومات",
      stories: "القصص",
      timeline: "الجدول الزمني",
      dataOverview: "نظرة عامة على البيانات",
    },
    buttons: {
      seeStories: "اطلع على القصص",
      takeAction: "اتخذ إجراءً",
    },
    footer: {
      copyright: "© 2024 سويدا عمراني. جميع الحقوق محفوظة.",
      privacyPolicy: "سياسة الخصوصية",
      termsOfService: "شروط الخدمة",
      contact: "اتصل بنا",
    },
    ariaLabels: {
      switchToLight: "التبديل إلى الوضع الفاتح",
      switchToDark: "التبديل إلى الوضع الداكن",
      toggleMenu: "تبديل القائمة",
      switchLanguage: "تغيير اللغة",
    },
  },
  logo: roadImage,
};

const MainLayout = () => {
  const { isDarkMode, toggleTheme } = useTheme();
  const { currentLanguage, toggleLanguage } = useLanguage();
  const location = useLocation();

  const [layoutData, setLayoutData] =
    useState<LayoutData>(fallbackTranslations);
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
            navigation: {
              ...fallbackTranslations.en.navigation,
              ...data.en.navigation,
            },
            buttons: {
              ...fallbackTranslations.en.buttons,
              ...data.en.buttons,
            },
            footer: {
              ...fallbackTranslations.en.footer,
              ...data.en.footer,
            },
            ariaLabels: {
              ...fallbackTranslations.en.ariaLabels,
              ...data.en.ariaLabels,
            },
          },
          ar: {
            ...fallbackTranslations.ar,
            ...data.ar,
            navigation: {
              ...fallbackTranslations.ar.navigation,
              ...data.ar.navigation,
            },
            buttons: {
              ...fallbackTranslations.ar.buttons,
              ...data.ar.buttons,
            },
            footer: {
              ...fallbackTranslations.ar.footer,
              ...data.ar.footer,
            },
            ariaLabels: {
              ...fallbackTranslations.ar.ariaLabels,
              ...data.ar.ariaLabels,
            },
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
    { label: t.navigation?.home || "Home", path: "/" },
    {
      label: t.navigation?.dataOverview || "Data Overview",
      path: "/data-overview",
    },
    { label: t.navigation?.aidEfforts || "Aid Efforts", path: "/aid-efforts" },
    { label: t.navigation?.gallery || "Gallery", path: "/gallery" },
    { label: t.navigation?.stories || "Stories", path: "/stories" },
  ];

  const informationLinks = [
    { label: t.navigation?.timeline || "Timeline", path: "/timeline" },
    {
      label: t.navigation?.crisesArchive || "Crises Archive",
      path: "/crises_archive",
    },
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
            className="h-8 w-8 md:h-10 md:w-10"
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
                <span>{t.navigation?.information || "Information"}</span>
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
            aria-label={t.ariaLabels?.switchLanguage || "Switch language"}
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
                ? t.ariaLabels?.switchToLight || "Switch to light mode"
                : t.ariaLabels?.switchToDark || "Switch to dark mode"
            }
          >
            {isDarkMode ? (
              <Sun className="h-4 w-4" />
            ) : (
              <Moon className="h-4 w-4" />
            )}
          </Button>
        </div>

        {/* Mobile Controls */}
        <div className="flex lg:hidden items-center space-x-2">
          <Button onClick={toggleLanguage} variant="ghost" size="icon">
            <Languages className="h-4 w-4" />
          </Button>
          <Button onClick={toggleTheme} variant="ghost" size="icon">
            {isDarkMode ? (
              <Sun className="h-4 w-4" />
            ) : (
              <Moon className="h-4 w-4" />
            )}
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

      <footer className="text-center py-6 bg-card text-card-foreground border-t border-border">
        <div className="max-w-6xl mx-auto px-2 md:px-4">
          <p className="text-xs md:text-sm text-muted-foreground">
            {t.footer?.copyright}
          </p>
          <div className="text-xs md:text-sm flex flex-wrap justify-center gap-4 md:gap-6 mt-2">
            <Link
              to="/privacy"
              className="text-muted-foreground hover:text-primary"
            >
              {t.footer?.privacyPolicy}
            </Link>
            <Link
              to="/terms"
              className="text-muted-foreground hover:text-primary"
            >
              {t.footer?.termsOfService}
            </Link>
            <Link
              to="/contact"
              className="text-muted-foreground hover:text-primary"
            >
              {t.footer?.contact}
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default MainLayout;
