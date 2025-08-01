import React, { createContext, useContext, useState, useEffect } from 'react';
import type { ReactNode } from 'react';

// Language type
type Language = 'en' | 'ar';

// Language context type
interface LanguageContextType {
  currentLanguage: Language;
  setLanguage: (language: Language) => void;
  toggleLanguage: () => void;
}

// Create the context
const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Language provider component
export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [currentLanguage, setCurrentLanguage] = useState<Language>(() => {
    // Get language from localStorage or default to 'en'
    const savedLanguage = localStorage.getItem('language') as Language;
    return savedLanguage || 'en';
  });

  // Save language to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('language', currentLanguage);
  }, [currentLanguage]);

  const setLanguage = (language: Language) => {
    setCurrentLanguage(language);
  };

  const toggleLanguage = () => {
    setCurrentLanguage(prev => prev === 'en' ? 'ar' : 'en');
  };

  return (
    <LanguageContext.Provider value={{ currentLanguage, setLanguage, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

// Custom hook to use language context
export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};