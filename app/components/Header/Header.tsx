"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import { GlobeIcon, MoonIcon, SunIcon } from "../icons";
import { useLocale } from "../../i18n/LocaleContext";
import { currentTheme, toggleTheme } from "../../lib/theme";
import styles from "./Header.module.css";

const WAKE_UP_SRC = "/wake-up.webp";

function preloadWakeUp() {
  new window.Image().src = WAKE_UP_SRC;
}

export function Header() {
  const { t, locale, setLocale } = useLocale();
  const reduce = useReducedMotion();
  const [wakeUp, setWakeUp] = useState(0);

  useEffect(() => {
    if (currentTheme() === "dark") preloadWakeUp();
  }, []);

  function switchTheme() {
    if (toggleTheme() === "dark") preloadWakeUp();
    else if (!reduce) setWakeUp((n) => n + 1);
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
      {wakeUp > 0 &&
        createPortal(
          <motion.div
            key={wakeUp}
            className={styles.wakeUp}
            aria-hidden="true"
            animate={{
              opacity: [0, 0.42, 0.42, 0],
              scale: [0.97, 1, 1.01, 1.06],
              filter: ["blur(14px)", "blur(0px)", "blur(0px)", "blur(18px)"],
            }}
            transition={{ duration: 1.5, times: [0, 0.18, 0.4, 1], ease: "easeInOut" }}
            onAnimationComplete={() => setWakeUp(0)}
          >
            <Image src={WAKE_UP_SRC} alt="" width={600} height={595} unoptimized className={styles.wakeUpImage} />
          </motion.div>,
          document.body
        )}
    </div>
  );
}
