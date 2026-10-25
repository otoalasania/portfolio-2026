"use client";

import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import { useNeurosisPhase } from "../lib/neurosis";
import styles from "./ui.module.css";

const GLYPHS = "!<>-_\\/[]{}=+*^?#%&@01";
const SCRAMBLE_PHASES = new Set(["drop", "peak", "glitch"]);

function useScramble(text: string) {
  const phase = useNeurosisPhase();
  const reduce = useReducedMotion();
  const [scrambled, setScrambled] = useState<string | null>(null);

  useEffect(() => {
    if (reduce || !SCRAMBLE_PHASES.has(phase)) return;
    let frame = 0;
    const id = setInterval(() => {
      frame += 1;
      const settled = Math.floor(frame / 2);
      if (settled >= text.length) {
        clearInterval(id);
        setScrambled(null);
        return;
      }
      setScrambled(
        Array.from(text, (c, i) =>
          c === " " || i < settled ? c : GLYPHS[Math.floor(Math.random() * GLYPHS.length)],
        ).join(""),
      );
    }, 40);
    return () => {
      clearInterval(id);
      setScrambled(null);
    };
  }, [phase, text, reduce]);

  return scrambled ?? text;
}

function ScrambleText({ text }: { text: string }) {
  return <>{useScramble(text)}</>;
}

export function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className={styles.sectionLabel}>
      {typeof children === "string" ? <ScrambleText text={children} /> : children}
    </p>
  );
}

export function Section({
  id,
  title,
  subtitle,
  meta,
  style,
  className = "",
  children,
}: {
  id: string;
  title: string;
  subtitle?: React.ReactNode;
  meta?: React.ReactNode;
  style?: React.CSSProperties;
  className?: string;
  children?: React.ReactNode;
}) {
  return (
    <motion.section
      id={id}
      className={`${styles.section} ${className}`}
      style={style}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15, margin: "0px 0px -10% 0px" }}
      transition={{ type: "spring", stiffness: 120, damping: 18, mass: 0.6 }}
    >
      {meta !== undefined ? (
        <div className={styles.labelRow}>
          <SectionLabel>{title}</SectionLabel>
          <p className={styles.sectionLabel}>{meta}</p>
        </div>
      ) : (
        <SectionLabel>{title}</SectionLabel>
      )}
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
