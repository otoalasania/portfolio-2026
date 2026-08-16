"use client";

import { motion } from "motion/react";
import styles from "./ui.module.css";

export function SectionLabel({ children }: { children: React.ReactNode }) {
  return <p className={styles.sectionLabel}>{children}</p>;
}

export function Section({
  id,
  title,
  subtitle,
  style,
  children,
}: {
  id: string;
  title: string;
  subtitle?: React.ReactNode;
  style?: React.CSSProperties;
  children?: React.ReactNode;
}) {
  return (
    <motion.section
      id={id}
      className={styles.section}
      style={style}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15, margin: "0px 0px -10% 0px" }}
      transition={{ type: "spring", stiffness: 120, damping: 18, mass: 0.6 }}
    >
      <SectionLabel>{title}</SectionLabel>
      {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
      {children}
    </motion.section>
  );
}

export function MockCard({
  rotate,
  dark,
  className = "",
}: {
  rotate: number;
  dark: boolean;
  className?: string;
}) {
  return (
    <div
      style={{ transform: `rotate(${rotate}deg)` }}
      className={`${styles.mockCard} ${dark ? styles.mockCardDark : styles.mockCardLight} ${className}`}
    >
      <div className={`${styles.mockCardInner} ${dark ? styles.mockCardInnerDark : styles.mockCardInnerLight}`}>
        <div className={`${styles.bar} ${styles.barTitle} ${dark ? styles.barTitleDark : styles.barTitleLight}`} />
        <div className={`${styles.bar} ${styles.barLine1} ${dark ? styles.barDark : styles.barLight}`} />
        <div className={`${styles.bar} ${styles.barLine2} ${dark ? styles.barDark : styles.barLight}`} />
        <div className={`${styles.bar} ${styles.barGhost} ${dark ? styles.barGhostDark : styles.barGhostLight}`} />
      </div>
    </div>
  );
}

export function Tile({ color, children }: { color: string; children: React.ReactNode }) {
  return (
    <span className={styles.tile} style={{ backgroundColor: color }}>
      {children}
    </span>
  );
}
