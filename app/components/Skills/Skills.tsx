"use client";

import { motion } from "motion/react";
import { Section } from "../ui";
import { useLocale } from "../../i18n/LocaleContext";
import { staggerContainer, staggerItem } from "../../lib/motion";
import styles from "./Skills.module.css";

export function Skills() {
  const { t } = useLocale();

  return (
    <Section id="skills" title={t.skills.title} subtitle={t.skills.subtitle}>
      <motion.div
        className={styles.list}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={staggerContainer}
      >
        {t.skills.groups.map((group) => (
          <motion.div key={group.category} className={styles.row} variants={staggerItem}>
            <span className={styles.label}>{group.category}</span>
            <p className={styles.items}>{group.items.join(", ")}</p>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
}
