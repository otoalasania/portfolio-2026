"use client";

import { Section, MockCard } from "../ui";
import { useLocale } from "../../i18n/LocaleContext";
import styles from "./Work.module.css";

export function Work() {
  const { t } = useLocale();

  return (
    <Section id="work" title={t.work.title} subtitle={t.work.subtitle} style={{ marginTop: 40 }}>
      <div
        className={styles.stage}
        style={{
          backgroundImage:
            "radial-gradient(rgba(255,255,255,0.12) 1px, transparent 1px)",
          backgroundSize: "18px 18px",
        }}
      >
        <MockCard rotate={-8} dark className={styles.card} />
        <MockCard rotate={4} dark={false} className={styles.cardFront} />
        <MockCard rotate={-3} dark className={styles.card} />
        <MockCard rotate={7} dark={false} />
      </div>
    </Section>
  );
}
