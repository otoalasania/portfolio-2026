"use client";

import { useEffect, useState } from "react";
import { ClockIcon, GlobeIcon } from "../icons";
import { useLocale } from "../../i18n/LocaleContext";
import styles from "./Header.module.css";

export function Header() {
  const [now, setNow] = useState("");
  const { locale, setLocale } = useLocale();

  useEffect(() => {
    function tick() {
      const d = new Date();
      const time = d.toLocaleTimeString("en-GB", { hour12: false });
      const offset = -d.getTimezoneOffset() / 60;
      const gmt = `GMT${offset >= 0 ? "+" : ""}${offset}`;
      setNow(`${time} ${gmt}`);
    }
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <div id="top" className={styles.bar}>
      <button
        type="button"
        onClick={() => setLocale(locale === "en" ? "es" : "en")}
        className={styles.langSwitcher}
        aria-label="Toggle language"
      >
        <GlobeIcon />
        {locale.toUpperCase()}
      </button>
      <span className={styles.clock}>
        <ClockIcon />
        {now || " "}
      </span>
    </div>
  );
}
