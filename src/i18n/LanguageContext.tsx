import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from "react";
import type { Language, Localized } from "./types";
import { translations } from "./translations";

const STORAGE_KEY = "skitowers-language";

type Vars = Record<string, string | number>;

interface LanguageContextValue {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (key: string, vars?: Vars) => string;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

function readStoredLanguage(): Language {
  if (typeof window === "undefined") return "en";
  const stored = window.localStorage.getItem(STORAGE_KEY);
  return stored === "en" || stored === "ta" || stored === "hi" ? stored : "en";
}

function resolve(key: string, language: Language): string | undefined {
  const path = key.split(".");
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let node: any = translations[language];
  for (const segment of path) {
    node = node?.[segment];
    if (node === undefined) return undefined;
  }
  return typeof node === "string" ? node : undefined;
}

function interpolate(text: string, vars?: Vars): string {
  if (!vars) return text;
  return text.replace(/\{(\w+)\}/g, (match, name) => {
    const value = vars[name];
    return value === undefined ? match : String(value);
  });
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>(readStoredLanguage);

  useEffect(() => {
    document.documentElement.lang = language;
    try {
      window.localStorage.setItem(STORAGE_KEY, language);
    } catch {
      // localStorage unavailable (private mode etc.) — language choice just won't persist.
    }
  }, [language]);

  const t = useMemo(() => {
    return (key: string, vars?: Vars) => {
      const text = resolve(key, language) ?? resolve(key, "en") ?? key;
      return interpolate(text, vars);
    };
  }, [language]);

  const value = useMemo(() => ({ language, setLanguage, t }), [language, t]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage(): LanguageContextValue {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within a LanguageProvider");
  return ctx;
}

/** Resolves a Localized (per-language) data string, e.g. a room name from data/rooms.ts. */
export function useLocalized(text: Localized): string {
  const { language } = useLanguage();
  return text[language] ?? text.en;
}
