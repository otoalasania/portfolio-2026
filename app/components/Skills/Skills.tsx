"use client";

import { Section } from "../ui";
import { useLocale } from "../../i18n/LocaleContext";
import styles from "./Skills.module.css";

export function Skills() {
  const { t } = useLocale();

  return (
    <Section id="skills" title={t.skills.title} subtitle={t.skills.subtitle}>
      <div className={styles.list}>
        {t.skills.groups.map((group) => (
          <div key={group.category} className={styles.row}>
            <span className={styles.label}>{group.category}</span>
            <p className={styles.items}>{group.items.join(", ")}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
