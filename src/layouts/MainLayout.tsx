import React, { useState, useRef, useEffect } from "react";
import { Outlet, Link, useLocation, useNavigate } from "react-router-dom";
import { useTheme } from "../ThemeContext";
import { useLanguage } from "../LanguageContext";
import { Button } from "@/components/ui/button";
import { Sun, Moon, Menu, X, ChevronDown, Languages } from "lucide-react";
import { layoutApi } from "@/services/layoutApi";
import type { LayoutData } from "@/types/layout";
import roadImage from "../assets/road.png";

// Fallback translations data
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
      dataOverview: "Data Overview"
    },
    buttons: {
      seeStories: "See Stories",
      takeAction: "Take Action"
    },
    footer: {
      copyright: "© 2024 Sweda 3mrani. All rights reserved.",
      privacyPolicy: "Privacy Policy",
      termsOfService: "Terms of Service",
      contact: "Contact"
    },
    ariaLabels: {
      switchToLight: "Switch to light mode",
      switchToDark: "Switch to dark mode",
      toggleMenu: "Toggle menu",
      switchLanguage: "Switch language"
    }
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
      dataOverview: "نظرة عامة على البيانات"
    },
    buttons: {
      seeStories: "اطلع على القصص",
      takeAction: "اتخذ إجراءً"
    },
    footer: {
      copyright: "© 2024 سويدا عمراني. جميع الحقوق محفوظة.",
      privacyPolicy: "سياسة الخصوصية",
      termsOfService: "شروط الخدمة",
      contact: "اتصل بنا"
    },
    ariaLabels: {
      switchToLight: "التبديل إلى الوضع الفاتح",
      switchToDark: "التبديل إلى الوضع الداكن",
      toggleMenu: "تبديل القائمة",
      switchLanguage: "تغيير اللغة"
    }
  },
  logo: roadImage,
};

/**
 * MainLayout component serves as the primary layout structure for the application.
 * It includes:
 * - A header with navigation links and title
 * - A main content area
 * - A footer
 * - Dark/light theme support
 * - Language support (Arabic/English) with localStorage persistence
 * - Responsive design with mobile menu
 */
const MainLayout = () => {
  // Theme context to manage dark/light mode
  const { isDarkMode, toggleTheme } = useTheme();
  
  // Language context to manage language with localStorage persistence
  const { currentLanguage, toggleLanguage } = useLanguage();

  // Router location and navigation
  const location = useLocation();
  const navigate = useNavigate();
  
  // Layout data state
  const [layoutData, setLayoutData] = useState<LayoutData>(fallbackTranslations);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  
  // Mobile menu state
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  // Information dropdown state
  const [isInfoDropdownOpen, setIsInfoDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Fetch layout data from API
  useEffect(() => {
    const fetchLayoutData = async () => {
      try {
        setLoading(true);
        setError(null);
        const data = await layoutApi.getLayoutData();
        
        // Merge API data with fallback to ensure all required fields exist
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
        console.error('Failed to fetch layout data:', err);
        setError('Failed to load layout data. Using fallback content.');
        // Keep using fallback data on error
        setLayoutData(fallbackTranslations);
      } finally {
        setLoading(false);
      }
    };

    fetchLayoutData();
  }, []);

  // Get current translations
  const t = layoutData[currentLanguage];

  // Primary navigation links (always visible on desktop)
  const primaryNavLinks = [
    { label: t.navigation?.home || "Home", path: "/" },
    { label: t.navigation?.crisesArchive || "Crises Archive", path: "/crises_archive" },
    { label: t.navigation?.gallery || "Gallery", path: "/gallery" },
    { label: t.navigation?.aidEfforts || "Aid Efforts", path: "/aid-efforts" },
    { label: t.navigation?.organizations || "Organizations", path: "/organizations" },
  ];

  // Information dropdown links
  const informationLinks = [
    { label: t.navigation?.stories || "Stories", path: "/stories" },
    { label: t.navigation?.timeline || "Timeline", path: "/timeline" },
    { label: t.navigation?.dataOverview || "Data Overview", path: "/data-overview" },
  ];

  // All navigation links for mobile menu
  const allNavLinks = [...primaryNavLinks, ...informationLinks];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleInfoDropdown = () => {
    setIsInfoDropdownOpen(!isInfoDropdownOpen);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsInfoDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Show loading state only briefly, then show content
  if (loading) {
    return (
      <div dir={currentLanguage === 'ar' ? 'rtl' : 'ltr'} className="min-h-screen font-['Montserrat',sans-serif]">
        <div className="flex items-center justify-center min-h-screen bg-background">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
        </div>
      </div>
    );
  }

  return (
    <div dir={currentLanguage === 'ar' ? 'rtl' : 'ltr'} className="min-h-screen font-['Montserrat',sans-serif]">
      {/* Error message */}
      {error && (
        <div className="w-full px-4 py-2 bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 text-sm">
          <p>{error}</p>
        </div>
      )}

      {/* Header */}
      <header className="flex items-center justify-between px-2 md:px-4 sticky bg-card top-0 z-50 h-16 md:h-20 shadow-lg border-b border-border">
        {/* Left side - Logo and Title */}
        <div className="flex items-center space-x-2 text-base md:text-lg lg:text-xl font-bold text-card-foreground">
          <img 
            src={layoutData.logo} 
            alt="Logo" 
            className="h-8 w-8 md:h-10 md:w-10"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.src = roadImage; // Fallback to local image
            }}
          />
          {t.title || "Suwayda Archive"}
        </div>

        {/* Desktop Navigation - Hidden on mobile */}
        <div className="hidden lg:flex items-center space-x-4">
          <div className="flex items-center space-x-4">
            {/* Primary navigation links */}
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
            
            {/* Information dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={toggleInfoDropdown}
                className={`flex items-center text-sm font-medium text-foreground hover:text-primary transition-colors duration-200 p-2 rounded-md ${
                  informationLinks.some(link => location.pathname === link.path)
                    ? "text-primary bg-accent"
                    : "hover:bg-accent/50"
                }`}
              >
                {t.navigation?.information || "Information"}
                <ChevronDown
                  className={`ml-1 h-3 w-3 transition-transform duration-200 ${
                    isInfoDropdownOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
              
              {/* Dropdown content */}
              {isInfoDropdownOpen && (
                <div className="absolute top-full left-0 mt-1 w-48 bg-popover border border-border rounded-md shadow-lg z-50">
                  <div className="py-1">
                    {informationLinks.map((link) => (
                      <Link
                        key={link.path}
                        to={link.path}
                        onClick={() => setIsInfoDropdownOpen(false)}
                        className={`block p-2 text-sm text-popover-foreground hover:bg-accent hover:text-accent-foreground transition-colors ${
                          location.pathname === link.path
                            ? "bg-accent text-accent-foreground"
                            : ""
                        }`}
                      >
                        {link.label}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Action buttons */}
          <Button
            onClick={() => navigate("/stories")}
            className="bg-chart-1 hover:bg-chart-1/90 text-primary-foreground font-medium text-sm"
            size="sm"
          >
            {t.buttons?.seeStories || "See Stories"}
          </Button>

          <Button
            onClick={() => navigate("/aid-efforts")}
            className="bg-chart-2 hover:bg-chart-2/90 text-primary-foreground font-medium text-sm"
            size="sm"
          >
            {t.buttons?.takeAction || "Take Action"}
          </Button>

          {/* Language toggle button */}
          <Button
            onClick={toggleLanguage}
            variant="ghost"
            size="icon"
            className="text-foreground hover:bg-accent"
            aria-label={t.ariaLabels?.switchLanguage || "Switch language"}
          >
            <Languages className="h-4 w-4" />
          </Button>

          {/* Theme toggle button */}
          <Button
            onClick={toggleTheme}
            variant="ghost"
            size="icon"
            className="text-foreground hover:bg-accent"
            aria-label={isDarkMode ? (t.ariaLabels?.switchToLight || "Switch to light mode") : (t.ariaLabels?.switchToDark || "Switch to dark mode")}
          >
            {isDarkMode ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </Button>
        </div>

        {/* Mobile Navigation - Visible on mobile */}
        <div className="flex lg:hidden items-center space-x-2">
          {/* Language toggle button for mobile */}
          <Button
            onClick={toggleLanguage}
            variant="ghost"
            size="icon"
            className="text-foreground hover:bg-accent"
            aria-label={t.ariaLabels?.switchLanguage || "Switch language"}
          >
            <Languages className="h-4 w-4" />
          </Button>
          
          {/* Theme toggle button for mobile */}
          <Button
            onClick={toggleTheme}
            variant="ghost"
            size="icon"
            className="text-foreground hover:bg-accent"
            aria-label={isDarkMode ? (t.ariaLabels?.switchToLight || "Switch to light mode") : (t.ariaLabels?.switchToDark || "Switch to dark mode")}
          >
            {isDarkMode ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </Button>
          
          {/* Mobile menu toggle */}
          <Button
            onClick={toggleMobileMenu}
            variant="ghost"
            size="icon"
            className="text-foreground hover:bg-accent"
            aria-label={t.ariaLabels?.toggleMenu || "Toggle menu"}
          >
            {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
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
            
            {/* Mobile action buttons */}
            <div className="pt-4 space-y-2">
              <Button
                onClick={() => {
                  navigate("/stories");
                  setIsMobileMenuOpen(false);
                }}
                className="w-full bg-chart-1 hover:bg-chart-1/90 text-primary-foreground font-medium"
              >
                {t.buttons?.seeStories || "See Stories"}
              </Button>
              
              <Button
                onClick={() => {
                  navigate("/aid-efforts");
                  setIsMobileMenuOpen(false);
                }}
                className="w-full bg-chart-2 hover:bg-chart-2/90 text-primary-foreground font-medium"
              >
                {t.buttons?.takeAction || "Take Action"}
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* Main content area */}
      <main className="flex-1 p-4 md:p-8 bg-background">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="text-center py-6 bg-card text-card-foreground border-t border-border">
        <div className="max-w-6xl mx-auto px-2 md:px-4">
          <p className="text-xs md:text-sm text-muted-foreground">
            {t.footer?.copyright || "© 2024 Sweda 3mrani. All rights reserved."}
          </p>
          <div className="text-xs md:text-sm flex flex-wrap justify-center gap-4 md:gap-6 mt-2">
            <Link
              to="/privacy"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              {t.footer?.privacyPolicy || "Privacy Policy"}
            </Link>
            <Link
              to="/terms"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              {t.footer?.termsOfService || "Terms of Service"}
            </Link>
            <Link
              to="/contact"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              {t.footer?.contact || "Contact"}
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default MainLayout;
