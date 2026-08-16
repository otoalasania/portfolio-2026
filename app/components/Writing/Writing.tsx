"use client";

import { motion } from "motion/react";
import { Section } from "../ui";
import { ClockIcon } from "../icons";
import { writing } from "../../data";
import { useLocale } from "../../i18n/LocaleContext";
import { staggerContainer, staggerItem } from "../../lib/motion";
import styles from "./Writing.module.css";

export function Writing() {
  const { t, locale } = useLocale();
  const dateFormatter = new Intl.DateTimeFormat(locale === "es" ? "es-ES" : "en-GB", {
    dateStyle: "short",
  });

  return (
    <Section id="writing" title={t.writing.title}>
      <motion.div
        className={styles.list}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={staggerContainer}
      >
        {writing.map((w, i) => (
          <motion.a key={w.date} href="#" className={styles.row} variants={staggerItem}>
            <span className={styles.date}>{dateFormatter.format(new Date(w.date))}</span>
            <span className={styles.title}>{t.writing.items[i]!.title}</span>
            <span className={styles.duration}>
              <ClockIcon strokeWidth={1.75} />
              {w.minutes}
              {t.writing.minutesSuffix}
            </span>
          </motion.a>
        ))}
      </motion.div>
    </Section>
  );
}
