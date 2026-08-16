"use client";

import { Section, MockCard } from "../ui";
import { useLocale } from "../../i18n/LocaleContext";
import styles from "./Work.module.css";

const cards = [
  { dark: true },
  { dark: false },
  { dark: true },
  { dark: false },
];

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
        <div className={styles.canvas}>
          {cards.map((c, i) => (
            <div key={i} className={styles.cardSlot}>
              <MockCard rotate={0} dark={c.dark} />
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
