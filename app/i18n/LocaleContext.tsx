"use client";

import { createContext, useContext, useEffect, useSyncExternalStore, type ReactNode } from "react";
import { translations, type Locale } from "./translations";

const STORAGE_KEY = "locale";
const DEFAULT_LOCALE: Locale = "en";

let current: Locale | null = null;
const listeners = new Set<() => void>();

function isLocale(value: unknown): value is Locale {
  return typeof value === "string" && Object.hasOwn(translations, value);
}

function detectLocale(): Locale {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (isLocale(saved)) return saved;
  } catch {}
  for (const tag of navigator.languages ?? [navigator.language]) {
    const base = tag.split("-")[0]?.toLowerCase();
    if (isLocale(base)) return base;
  }
  return DEFAULT_LOCALE;
}

function subscribe(listener: () => void) {
  listeners.add(listener);
  return () => listeners.delete(listener);
}

function getLocale() {
  current ??= detectLocale();
  return current;
}

function setLocale(locale: Locale) {
  current = locale;
  try {
    localStorage.setItem(STORAGE_KEY, locale);
  } catch {}
  listeners.forEach((l) => l());
}

const LocaleContext = createContext<{
  locale: Locale;
  t: (typeof translations)["en"];
  setLocale: (locale: Locale) => void;
} | null>(null);

export function LocaleProvider({ children }: { children: ReactNode }) {
  const locale = useSyncExternalStore(subscribe, getLocale, () => DEFAULT_LOCALE);

  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  return (
    <LocaleContext.Provider value={{ locale, t: translations[locale], setLocale }}>
      {children}
    </LocaleContext.Provider>
  );
}

export function useLocale() {
  const ctx = useContext(LocaleContext);
  if (!ctx) throw new Error("useLocale must be used within LocaleProvider");
  return ctx;
}
