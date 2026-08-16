"use client";

import { Section } from "../ui";
import { ClockIcon } from "../icons";
import { writing } from "../../data";
import { useLocale } from "../../i18n/LocaleContext";
import styles from "./Writing.module.css";

export function Writing() {
  const { t } = useLocale();

  return (
    <Section id="writing" title={t.writing.title}>
      <div className={styles.list}>
        {writing.map((w, i) => (
          <div key={w.date} className={styles.row}>
            <span className={styles.date}>{w.date}</span>
            <span className={styles.title}>{t.writing.items[i]!.title}</span>
            <span className={styles.duration}>
              <ClockIcon />
              {w.minutes} {t.writing.minutesSuffix}
            </span>
          </div>
        ))}
      </div>
    </Section>
  );
}
