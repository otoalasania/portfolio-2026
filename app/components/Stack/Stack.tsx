"use client";

import { useCallback, useEffect, useRef, useState, type ComponentType, type SVGProps } from "react";
import { motion, useInView, useReducedMotion } from "motion/react";
import { Section } from "../ui";
import { stack } from "../../data";
import { useLocale } from "../../i18n/LocaleContext";
import { staggerContainer, fadeItem } from "../../lib/motion";
import { stackEffects } from "./effects";
import styles from "./Stack.module.css";

const DEMO_NAME = "Claude Code";
const DEMO_DELAY = 700;
const NUDGE_EVERY = 4500;

type Runs = Record<string, { run: number; active: boolean }>;

export function Stack() {
  const { t } = useLocale();
  const reduceMotion = useReducedMotion();
  const rowRef = useRef<HTMLUListElement>(null);
  const seen = useInView(rowRef, { once: true, amount: 0.6 });
  const visible = useInView(rowRef, { amount: 0.6 });
  const [runs, setRuns] = useState<Runs>({});
  const [touched, setTouched] = useState(false);
  const [nudge, setNudge] = useState<{ name: string; n: number } | null>(null);

  const play = useCallback((name: string) => {
    if (!stackEffects[name]) return;
    setRuns((r) => ({ ...r, [name]: { run: (r[name]?.run ?? 0) + 1, active: true } }));
  }, []);

  const finish = useCallback((name: string) => {
    setRuns((r) => ({ ...r, [name]: { run: r[name]?.run ?? 0, active: false } }));
  }, []);

  useEffect(() => {
    if (!seen || touched) return;
    const id = setTimeout(() => play(DEMO_NAME), DEMO_DELAY);
    return () => clearTimeout(id);
  }, [seen, touched, play]);

  useEffect(() => {
    if (!visible || touched || reduceMotion) return;
    const id = setInterval(() => {
      setNudge((prev) => {
        const pool = stack.map((s) => s.name).filter((n) => n !== prev?.name);
        const name = pool[Math.floor(Math.random() * pool.length)] ?? DEMO_NAME;
        return { name, n: (prev?.n ?? 0) + 1 };
      });
    }, NUDGE_EVERY);
    return () => clearInterval(id);
  }, [visible, touched, reduceMotion]);

  const trigger = (name: string) => {
    setTouched(true);
    play(name);
  };

  return (
    <Section id="stack" title={t.stack.title}>
      <motion.ul
        ref={rowRef}
        className={styles.row}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={staggerContainer}
      >
        {stack.map(({ Icon, name }) => (
          <StackItem
            key={name}
            Icon={Icon}
            name={name}
            run={runs[name]?.run ?? 0}
            active={runs[name]?.active ?? false}
            nudge={!touched && nudge?.name === name && !runs[name]?.active ? nudge.n : 0}
            onTrigger={trigger}
            onDone={finish}
          />
        ))}
      </motion.ul>
    </Section>
  );
}

type StackItemProps = {
  Icon: ComponentType<SVGProps<SVGSVGElement>>;
  name: string;
  run: number;
  active: boolean;
  nudge: number;
  onTrigger: (name: string) => void;
  onDone: (name: string) => void;
};

function StackItem({ Icon, name, run, active, nudge, onTrigger, onDone }: StackItemProps) {
  const Effect = stackEffects[name];
  const logoRef = useRef<HTMLSpanElement>(null);
  const finish = useCallback(() => onDone(name), [onDone, name]);

  return (
    <motion.li className={styles.item} variants={fadeItem} data-active={active || undefined}>
      <motion.span
        className={styles.logo}
        tabIndex={0}
        role={Effect ? "button" : "img"}
        aria-label={name}
        onClick={() => onTrigger(name)}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            onTrigger(name);
          }
        }}
        whileHover={{ scale: 1.15, y: -2 }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: "spring", stiffness: 300, damping: 15 }}
      >
        <span ref={logoRef} className={styles.hop}>
          <motion.span
            key={nudge}
            className={styles.hop}
            animate={nudge ? { rotate: [0, -12, 10, -6, 3, 0], y: [0, -3, 0, -1, 0, 0] } : undefined}
            transition={{ duration: 0.6, ease: "easeInOut" }}
          >
            <Icon className={styles.icon} aria-hidden="true" />
          </motion.span>
        </span>
      </motion.span>
      <span className={styles.tooltip} aria-hidden="true">
        {name}
      </span>
      {Effect && active && <Effect key={run} logo={logoRef} run={run} onDone={finish} />}
    </motion.li>
  );
}
