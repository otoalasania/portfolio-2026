"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { Section } from "../ui";
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
          return (
            <motion.div key={`${e.company.name}-${e.range}`} className={styles.row} variants={staggerItem}>
              <span className={styles.range}>{e.range}</span>
              <div>
                <div className={styles.roleRow}>
                  <h3 className={styles.role}>
                    {text.role} {t.experience.at}
                  </h3>
                  <span className={styles.companyGroup}>
                    <span className={styles.companyLogo}>
                      <Image src={e.company.logo} alt="" width={20} height={20} style={{ objectFit: "contain" }} />
                    </span>
                    {e.company.name}
                  </span>
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
