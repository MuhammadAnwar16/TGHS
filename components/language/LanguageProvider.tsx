"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { Language, translations, Translations } from "@/data/translations";

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  toggleLang: () => void;
  t: Translations;
  dir: "ltr" | "rtl";
  isUrdu: boolean;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Language>(() => {
    if (typeof window !== "undefined") {
      try {
        const saved = localStorage.getItem("tghs_lang") as Language;
        if (saved === "en" || saved === "ur") return saved;
      } catch {
        // ignore
      }
    }
    return "en";
  });

  const setLang = (newLang: Language) => {
    setLangState(newLang);
    try {
      localStorage.setItem("tghs_lang", newLang);
    } catch {
      // ignore
    }
  };

  const toggleLang = () => {
    setLang(lang === "en" ? "ur" : "en");
  };

  const dir = lang === "ur" ? "rtl" : "ltr";
  const isUrdu = lang === "ur";
  const t = translations[lang];

  useEffect(() => {
    if (typeof document !== "undefined") {
      document.documentElement.lang = lang;
      document.documentElement.dir = dir;
      if (lang === "ur") {
        document.body.classList.add("lang-ur");
      } else {
        document.body.classList.remove("lang-ur");
      }
    }
  }, [lang, dir]);

  return (
    <LanguageContext.Provider value={{ lang, setLang, toggleLang, t, dir, isUrdu }}>
      <div dir={dir} className={isUrdu ? "lang-ur font-urdu" : "font-sans"}>
        {children}
      </div>
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
