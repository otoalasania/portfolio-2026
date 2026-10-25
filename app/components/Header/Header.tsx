"use client";

import { useEffect, useRef, useState } from "react";
import { ClockIcon, GlobeIcon } from "../icons";
import { useLocale } from "../../i18n/LocaleContext";
import styles from "./Header.module.css";

export function Header() {
  const [now, setNow] = useState("");
  const { locale, setLocale } = useLocale();
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function tick() {
      const d = new Date();
      const time = d.toLocaleTimeString("en-GB", { hour12: false });
      const offset = -d.getTimezoneOffset() / 60;
      const gmt = `GMT${offset >= 0 ? "+" : ""}${offset}`;
      setNow(`${time} ${gmt}`);
    }
    let id: ReturnType<typeof setInterval> | undefined;
    const observer = new IntersectionObserver(([entry]) => {
      clearInterval(id);
      if (!entry?.isIntersecting) return;
      tick();
      id = setInterval(tick, 1000);
    });
    observer.observe(barRef.current!);
    return () => {
      observer.disconnect();
      clearInterval(id);
    };
  }, []);

  return (
    <div id="top" ref={barRef} className={styles.bar}>
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
