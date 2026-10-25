"use client";

import { useEffect, useRef, useState } from "react";
import { ClockIcon, GlobeIcon } from "../icons";
import { profile } from "../../data";
import { useLocale } from "../../i18n/LocaleContext";
import styles from "./Header.module.css";

const clock = new Intl.DateTimeFormat("en-GB", {
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit",
  hourCycle: "h23",
  timeZone: profile.timeZone,
  timeZoneName: "shortOffset",
});

export function Header() {
  const [now, setNow] = useState("");
  const { t, locale, setLocale } = useLocale();
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function tick() {
      setNow(clock.format(new Date()));
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
        aria-label={t.header.switchLanguage}
      >
        <GlobeIcon />
        {locale.toUpperCase()}
      </button>
      <span className={styles.clock} title={t.header.clockLabel}>
        <ClockIcon />
        {now || " "}
      </span>
    </div>
  );
}
