"use client";

import { useEffect, useState } from "react";
import { ClockIcon } from "../icons";
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
      <div className={styles.langSwitcher} role="group" aria-label="Language">
        <button
          type="button"
          onClick={() => setLocale("en")}
          className={`${styles.langOption} ${locale === "en" ? styles.langOptionActive : ""}`}
        >
          EN
        </button>
        <span className={styles.langDivider}>·</span>
        <button
          type="button"
          onClick={() => setLocale("es")}
          className={`${styles.langOption} ${locale === "es" ? styles.langOptionActive : ""}`}
        >
          ES
        </button>
      </div>
      <span className={styles.clock}>
        <ClockIcon />
        {now || " "}
      </span>
    </div>
  );
}
