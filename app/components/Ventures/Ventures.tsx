"use client";

import { Section } from "../ui";
import { ArrowUpRight } from "../icons";
import { ventures } from "../../data";
import { useLocale } from "../../i18n/LocaleContext";
import styles from "./Ventures.module.css";

export function Ventures() {
  const { t } = useLocale();

  return (
    <Section id="ventures" title={t.ventures.title}>
      <div className={styles.list}>
        {ventures.map((v, i) => (
          <a key={v.name} href={v.href} className={styles.row}>
            <div className={styles.left}>
              <span className={styles.icon} style={{ backgroundColor: v.color }}>
                <v.icon />
              </span>
              <div>
                <p className={styles.name}>{v.name}</p>
                <p className={styles.desc}>{t.ventures.items[i]!.desc}</p>
              </div>
            </div>
            <ArrowUpRight />
          </a>
        ))}
      </div>
    </Section>
  );
}
