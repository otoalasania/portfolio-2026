"use client";

import { Section } from "../ui";
import { ClockIcon } from "../icons";
import { writing } from "../../data";
import { useLocale } from "../../i18n/LocaleContext";
import styles from "./Writing.module.css";

export function Writing() {
  const { t, locale } = useLocale();
  const dateFormatter = new Intl.DateTimeFormat(locale === "es" ? "es-ES" : "en-GB", {
    dateStyle: "short",
  });

  return (
    <Section id="writing" title={t.writing.title}>
      <div className={styles.list}>
        {writing.map((w, i) => (
          <a key={w.date} href="#" className={styles.row}>
            <span className={styles.date}>{dateFormatter.format(new Date(w.date))}</span>
            <span className={styles.title}>{t.writing.items[i]!.title}</span>
            <span className={styles.duration}>
              <ClockIcon strokeWidth={1.75} />
              {w.minutes}
              {t.writing.minutesSuffix}
            </span>
          </a>
        ))}
      </div>
    </Section>
  );
}
