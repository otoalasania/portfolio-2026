"use client";

import { motion } from "motion/react";
import { Section } from "../ui";
import { stack } from "../../data";
import { useLocale } from "../../i18n/LocaleContext";
import { staggerContainer, fadeItem } from "../../lib/motion";
import styles from "./Stack.module.css";

export function Stack() {
  const { t } = useLocale();

  return (
    <Section id="stack" title={t.stack.title}>
      <motion.div
        className={styles.row}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={staggerContainer}
      >
        {stack.map(({ Icon, alt }) => (
          <motion.span
            key={alt}
            variants={fadeItem}
            whileHover={{ scale: 1.15, y: -2 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300, damping: 15 }}
          >
            <Icon className={styles.icon} role="img" aria-label={alt} />
          </motion.span>
        ))}
      </motion.div>
    </Section>
  );
}
