"use client";

import * as React from "react";
import { translations, Language } from "@/lib/i18n/translations";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
  t: (key: string) => string;
}

const LanguageContext = React.createContext<LanguageContextType | undefined>(undefined);

const STORAGE_KEY = "bhumisync_lang";

export const LanguageProvider = ({ children }: { children: React.ReactNode }) => {
  const [language, setLanguageState] = React.useState<Language>("en");
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    try {
      const savedLang = localStorage.getItem(STORAGE_KEY) as Language | null;
      if (savedLang === "en" || savedLang === "bn") {
        setLanguageState(savedLang);
      }
    } catch {
      // Ignore localStorage errors in SSR or restricted environments
    }
    setMounted(true);
  }, []);

  // Synchronize <html> lang attribute whenever language changes
  React.useEffect(() => {
    if (typeof document !== "undefined") {
      document.documentElement.lang = language;
    }
  }, [language]);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch {
      // Ignore localStorage write failure
    }
  };

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "bn" : "en");
  };

  const t = (key: string): string => {
    const langDict = translations[language] || translations.en;
    if (key in langDict) {
      return (langDict as Record<string, string>)[key];
    }
    // Fallback to English
    return (translations.en as Record<string, string>)[key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = React.useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
