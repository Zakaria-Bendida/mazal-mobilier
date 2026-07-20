"use client";

import { createContext, useContext, useState, useEffect, useCallback, type ReactNode } from "react";
import { translations } from "./translations";

interface LangContextType {
  lang: string;
  toggleLang: () => void;
  t: (key: string) => string;
}

const LangContext = createContext<LangContextType>({
  lang: "fr",
  toggleLang: () => {},
  t: (key) => key,
});

export function useLang() {
  return useContext(LangContext);
}

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState("fr");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("grain-lang") || "fr";
    setLang(saved);
    document.documentElement.lang = saved;
    setMounted(true);
  }, []);

  const toggleLang = useCallback(() => {
    setLang((prev) => {
      const next = prev === "fr" ? "en" : "fr";
      localStorage.setItem("grain-lang", next);
      document.documentElement.lang = next;
      return next;
    });
  }, []);

  const t = useCallback(
    (key: string): string => {
      return translations[lang]?.[key] ?? key;
    },
    [lang]
  );

  if (!mounted) {
    return <>{children}</>;
  }

  return (
    <LangContext.Provider value={{ lang, toggleLang, t }}>
      {children}
    </LangContext.Provider>
  );
}
