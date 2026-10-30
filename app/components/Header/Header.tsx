"use client";

import { useRef } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import { useReducedMotion } from "motion/react";
import { GlobeIcon, MoonIcon, SunIcon } from "../icons";
import { useLocale } from "../../i18n/LocaleContext";
import { toggleTheme } from "../../lib/theme";
import { useClientValue } from "../../lib/useClientValue";
import styles from "./Header.module.css";

export function Header() {
  const { t, locale, setLocale } = useLocale();
  const mounted = useClientValue(() => true, false);
  const reduce = useReducedMotion();
  const wakeUpRef = useRef<HTMLDivElement>(null);

  function switchTheme() {
    const el = wakeUpRef.current;
    if (toggleTheme() === "dark" || reduce || !el) return;
    el.getAnimations().forEach((a) => a.cancel());
    el.animate(
      [
        { opacity: 0, easing: "cubic-bezier(0.37, 0, 0.63, 1)" },
        { opacity: 0.42, offset: 0.4, easing: "cubic-bezier(0.37, 0, 0.63, 1)" },
        { opacity: 0 },
      ],
      1200
    );
  }

  return (
    <div id="top" className={styles.bar}>
      <button
        type="button"
        onClick={() => setLocale(locale === "en" ? "es" : "en")}
        className={styles.switcher}
        aria-label={t.header.switchLanguage}
      >
        <GlobeIcon />
        {locale.toUpperCase()}
      </button>
      <button type="button" onClick={switchTheme} className={styles.switcher} aria-label={t.header.switchTheme}>
        <span className={styles.light}>
          <SunIcon />
          {t.header.themeLight}
        </span>
        <span className={styles.dark}>
          <MoonIcon />
          {t.header.themeDark}
        </span>
      </button>
      {mounted &&
        createPortal(
          <div ref={wakeUpRef} className={styles.wakeUp} aria-hidden="true">
            <Image
              src="/wake-up.webp"
              alt=""
              width={600}
              height={595}
              unoptimized
              loading="eager"
              fetchPriority="low"
              onLoad={(e) => e.currentTarget.decode().catch(() => {})}
              className={styles.wakeUpImage}
            />
          </div>,
          document.body
        )}
    </div>
  );
}
