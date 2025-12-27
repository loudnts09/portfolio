"use client";

import { createContext, useContext, useEffect, useState, ReactNode } from "react";
import { Language, translations, Translations } from "@/lib/translations";

interface LanguageContextType {
  language: Language;
  t: Translations;
  toggleLanguage: () => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("pt-BR");

  useEffect(() => {
    if (typeof window === "undefined") return;

    try {
      const savedLanguage = localStorage.getItem("language") as Language | null;
      const initialLanguage = savedLanguage || "pt-BR";
      
      if (initialLanguage !== language) {
        setLanguage(initialLanguage);
      }
    } catch (e) {
      console.error("Error loading language:", e);
    }
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;
    
    try {
      localStorage.setItem("language", language);
    } catch (e) {
      console.error("Error saving language:", e);
    }
  }, [language]);

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "pt-BR" ? "en-US" : "pt-BR"));
  };

  const t = translations[language];

  return (
    <LanguageContext.Provider value={{ language, t, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    return {
      language: "pt-BR" as Language,
      t: translations["pt-BR"],
      toggleLanguage: () => {},
    };
  }
  return context;
}
