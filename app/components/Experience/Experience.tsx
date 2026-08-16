"use client";

import { Section, Tile } from "../ui";
import { experience } from "../../data";
import { useLocale } from "../../i18n/LocaleContext";
import styles from "./Experience.module.css";

export function Experience() {
  const { t } = useLocale();

  return (
    <Section
      id="experience"
      title={t.experience.title}
      subtitle={t.experience.subtitle}
      style={{ marginTop: 80 }}
    >
      <div className={styles.list}>
        {experience.map((e, i) => {
          const text = t.experience.items[i]!;
          return (
            <div key={`${e.company.name}-${e.range}`} className={styles.row}>
              <span className={styles.range}>{e.range}</span>
              <div>
                <div className={styles.roleRow}>
                  <h3 className={styles.role}>
                    {text.role} {t.experience.at}
                  </h3>
                  <span className={styles.companyGroup}>
                    <Tile color={e.company.color}>{e.company.name[0]}</Tile>
                    {e.company.name}
                  </span>
                </div>
                {text.desc && <p className={styles.desc}>{text.desc}</p>}
              </div>
            </div>
          );
        })}
      </div>
    </Section>
  );
}
