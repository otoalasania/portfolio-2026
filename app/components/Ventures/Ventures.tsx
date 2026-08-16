"use client";

import { motion } from "motion/react";
import { Section } from "../ui";
import { ArrowUpRight } from "../icons";
import { ventures } from "../../data";
import { useLocale } from "../../i18n/LocaleContext";
import { staggerContainer, staggerItem } from "../../lib/motion";
import styles from "./Ventures.module.css";

export function Ventures() {
  const { t } = useLocale();

  return (
    <Section id="ventures" title={t.ventures.title}>
      <motion.div
        className={styles.list}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={staggerContainer}
      >
        {ventures.map((v, i) => (
          <motion.a key={v.name} href={v.href} className={styles.row} variants={staggerItem}>
            <div className={styles.left}>
              <span className={styles.icon} style={{ backgroundColor: v.color }}>
                <v.icon />
              </span>
              <div>
                <p className={styles.name}>{v.name}</p>
                <p className={styles.desc}>{t.ventures.items[i]!.desc}</p>
              </div>
            </div>
            <motion.span className={styles.arrow} whileHover={{ x: 2, y: -2 }} transition={{ type: "spring", stiffness: 300, damping: 15 }}>
              <ArrowUpRight size={24} strokeWidth={1.75} />
            </motion.span>
          </motion.a>
        ))}
      </motion.div>
    </Section>
  );
}
