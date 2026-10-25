"use client";

import { motion } from "motion/react";
import { Section } from "../ui";
import { CompanyTag } from "../CompanyTag/CompanyTag";
import { experience } from "../../data";
import { useLocale } from "../../i18n/LocaleContext";
import { staggerContainer, staggerItem } from "../../lib/motion";
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
      <motion.div
        className={styles.list}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={staggerContainer}
      >
        {experience.map((e, i) => {
          const text = t.experience.items[i]!;
          const range = e.end === e.start ? `${e.start}` : `${e.start} — ${e.end ?? t.experience.present}`;
          return (
            <motion.div key={`${e.start}-${e.end ?? "now"}`} className={styles.row} variants={staggerItem}>
              <span className={styles.range}>{range}</span>
              <div>
                <div className={styles.roleRow}>
                  <h3 className={styles.role}>
                    {text.role} {t.experience.at}
                  </h3>
                  <CompanyTag className={styles.companyGroup} />
                </div>
                {text.desc && <p className={styles.desc}>{text.desc}</p>}
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </Section>
  );
}
