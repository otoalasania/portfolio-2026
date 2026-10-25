"use client";

import {
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
  type ComponentType,
  type CSSProperties,
  type ReactNode,
  type RefObject,
} from "react";
import {
  animate,
  motion,
  useReducedMotion,
  type AnimationOptions,
  type DOMKeyframesDefinition,
} from "motion/react";
import styles from "./Stack.module.css";

export type StackEffectProps = {
  logo: RefObject<HTMLSpanElement | null>;
  run: number;
  onDone: () => void;
};

type Hop = { keyframes: DOMKeyframesDefinition; options: AnimationOptions };

function useEffectRun(
  logo: RefObject<HTMLSpanElement | null>,
  onDone: () => void,
  duration: number,
  hop?: Hop,
) {
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const done = setTimeout(onDone, duration * 1000);
    const el = logo.current;
    const controls = !reduceMotion && hop && el ? animate(el, hop.keyframes, hop.options) : undefined;
    return () => {
      clearTimeout(done);
      controls?.stop();
    };
  }, [logo, onDone, duration, hop, reduceMotion]);

  return reduceMotion;
}

function useTicker(ms: number) {
  const [tick, setTick] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setTick((t) => t + 1), ms);
    return () => clearInterval(id);
  }, [ms]);

  return tick;
}

function usePhase(steps: number[]) {
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    const timers = steps.map((at, i) => setTimeout(() => setPhase(i + 1), at * 1000));
    return () => timers.forEach(clearTimeout);
  }, [steps]);

  return phase;
}

function centered(width: number, height = width) {
  return { width, height, marginLeft: -width / 2, marginTop: -height / 2 };
}

type PillPlacement = { left: number; caret: number; above: boolean };

function usePillPlacement(anchor: RefObject<HTMLSpanElement | null>, pill: RefObject<HTMLSpanElement | null>) {
  const [placement, setPlacement] = useState<PillPlacement | null>(null);

  useLayoutEffect(() => {
    const item = anchor.current?.parentElement;
    const row = item?.parentElement;
    const tip = pill.current;
    if (!item || !row || !tip) return;

    const place = () => {
      const itemBox = item.getBoundingClientRect();
      const rowBox = row.getBoundingClientRect();
      const center = itemBox.left + itemBox.width / 2 - rowBox.left;
      const width = tip.offsetWidth;
      const start = Math.min(Math.max(center - width / 2, 0), Math.max(rowBox.width - width, 0));
      const above = Array.from(row.children).some((el) => el.getBoundingClientRect().top >= itemBox.bottom);
      setPlacement({ left: start - (itemBox.left - rowBox.left), caret: center - start, above });
    };

    place();
    const observer = new ResizeObserver(place);
    observer.observe(tip);
    observer.observe(row);
    return () => observer.disconnect();
  }, [anchor, pill]);

  return placement;
}

function Pill({ duration, className, children }: { duration: number; className?: string; children: ReactNode }) {
  const anchorRef = useRef<HTMLSpanElement>(null);
  const pillRef = useRef<HTMLSpanElement>(null);
  const placement = usePillPlacement(anchorRef, pillRef);
  const lift = placement?.above ? 4 : -4;

  return (
    <span
      ref={anchorRef}
      className={styles.effectTipAnchor}
      data-above={placement?.above || undefined}
      style={
        placement
          ? ({ left: placement.left, "--tip-caret": `${placement.caret}px` } as CSSProperties)
          : { visibility: "hidden" }
      }
      aria-hidden="true"
    >
      <motion.span
        ref={pillRef}
        className={`${styles.effectTip} ${className ?? ""}`}
        initial={{ opacity: 0, y: lift, scale: 0.96 }}
        animate={{ opacity: [0, 1, 1, 0], y: [lift, 0, 0, -lift / 2], scale: [0.96, 1, 1, 1] }}
        transition={{ duration, times: [0, 0.1, 0.85, 1] }}
      >
        {children}
      </motion.span>
    </span>
  );
}

const SUCCESS = "#3FB950";
const ERROR = "#F14C4C";

const CLAUDE_ORANGE = "#D97757";
const SPINNER = ["·", "✢", "✳", "✶", "✻", "✽", "✻", "✶", "✳", "✢"];
const VERBS = ["Clauding", "Pondering", "Noodling", "Percolating", "Vibing", "Conjuring", "Tinkering", "Brewing"];
const CLAUDE_HOP: Hop = {
  keyframes: {
    y: [0, 2, -14, 0, -4, 0],
    scaleX: [1, 1.15, 0.9, 1.1, 0.97, 1],
    scaleY: [1, 0.85, 1.12, 0.9, 1.03, 1],
  },
  options: { duration: 0.7, ease: "easeOut" },
};

function ClaudeCodeEffect({ logo, onDone }: StackEffectProps) {
  const reduceMotion = useEffectRun(logo, onDone, 1.8, CLAUDE_HOP);
  const frame = useTicker(110);
  const [verb] = useState(() => VERBS[Math.floor(Math.random() * VERBS.length)]);
  const [pixels] = useState(() =>
    Array.from({ length: 12 }, (_, i) => {
      const angle = (i / 12) * Math.PI * 2 + Math.random() * 0.4;
      const distance = 28 + Math.random() * 22;
      return {
        size: Math.random() > 0.5 ? 6 : 4,
        x: Math.cos(angle) * distance,
        y: Math.sin(angle) * distance * 0.6 - 16,
        delay: Math.random() * 0.08,
      };
    }),
  );

  return (
    <>
      {!reduceMotion &&
        pixels.map((p, i) => (
          <motion.span
            key={i}
            className={styles.particle}
            style={{ ...centered(p.size), background: CLAUDE_ORANGE, borderRadius: 1 }}
            initial={{ x: 0, y: 0, opacity: 1, scale: 1 }}
            animate={{ x: p.x, y: [0, p.y, p.y + 18], opacity: [1, 1, 0], scale: [1, 1, 0.5] }}
            transition={{ duration: 0.9, delay: 0.12 + p.delay, ease: "easeOut", times: [0, 0.55, 1] }}
          />
        ))}
      <Pill duration={1.8}>
        <span className={styles.spinner} style={{ color: CLAUDE_ORANGE }}>
          {SPINNER[frame % SPINNER.length]}
        </span>
        {verb}…
      </Pill>
    </>
  );
}

const VSCODE_SNIPPET = [
  { text: "const ", color: "#569CD6" },
  { text: "stack", color: "#9CDCFE" },
  { text: " = ", color: "#D4D4D4" },
  { text: '"fun"', color: "#CE9178" },
  { text: ";", color: "#D4D4D4" },
].map((token, i, all) => ({ ...token, start: all.slice(0, i).reduce((n, t) => n + t.text.length, 0) }));
const VSCODE_HOP: Hop = {
  keyframes: { rotateY: [0, 360] },
  options: { duration: 0.6, ease: "easeInOut" },
};

function VsCodeEffect({ logo, onDone }: StackEffectProps) {
  useEffectRun(logo, onDone, 2.2, VSCODE_HOP);
  const typed = useTicker(55);

  return (
    <Pill duration={2.2} className={`${styles.mono} ${styles.tight}`}>
      {VSCODE_SNIPPET.map(
        (token) =>
          typed > token.start && (
            <span key={token.start} style={{ color: token.color }}>
              {token.text.slice(0, typed - token.start)}
            </span>
          ),
      )}
      <span className={styles.caret} />
    </Pill>
  );
}

const REACT_BLUE = "#61DAFB";
const ORBIT_STEPS = 24;
const ORBITS = [0, 60, 120].map((deg) => {
  const tilt = (deg * Math.PI) / 180;
  const points = Array.from({ length: ORBIT_STEPS + 1 }, (_, i) => {
    const t = (i / ORBIT_STEPS) * Math.PI * 2;
    const ex = Math.cos(t) * 26;
    const ey = Math.sin(t) * 9;
    return { x: ex * Math.cos(tilt) - ey * Math.sin(tilt), y: ex * Math.sin(tilt) + ey * Math.cos(tilt) };
  });
  return { x: points.map((p) => p.x), y: points.map((p) => p.y) };
});
const REACT_HOP: Hop = {
  keyframes: { rotate: [0, 720] },
  options: { duration: 1, ease: [0.16, 1, 0.3, 1] },
};

function ReactEffect({ logo, run, onDone }: StackEffectProps) {
  const reduceMotion = useEffectRun(logo, onDone, 1.8, REACT_HOP);

  return (
    <>
      {!reduceMotion &&
        ORBITS.map((orbit, i) => (
          <motion.span
            key={i}
            className={styles.particle}
            style={{ ...centered(5), borderRadius: "50%", background: REACT_BLUE, boxShadow: `0 0 6px ${REACT_BLUE}` }}
            initial={{ opacity: 0 }}
            animate={{ x: orbit.x, y: orbit.y, opacity: [0, 1, 1, 0] }}
            transition={{
              x: { duration: 0.8, repeat: 1, ease: "linear", delay: i * 0.1 },
              y: { duration: 0.8, repeat: 1, ease: "linear", delay: i * 0.1 },
              opacity: { duration: 1.7, times: [0, 0.1, 0.8, 1] },
            }}
          />
        ))}
      <Pill duration={1.8}>
        <span style={{ color: REACT_BLUE }}>⚛</span>
        Re-rendered {run}×
      </Pill>
    </>
  );
}

const NEXT_HOP: Hop = {
  keyframes: { x: [0, 40, -40, 0], opacity: [1, 0, 0, 1] },
  options: { duration: 0.7, times: [0, 0.4, 0.41, 1], ease: ["easeIn", "linear", "easeOut"] },
};

function NextJsEffect({ logo, onDone }: StackEffectProps) {
  const reduceMotion = useEffectRun(logo, onDone, 1.6, NEXT_HOP);
  const [ms] = useState(() => 4 + Math.floor(Math.random() * 40));

  return (
    <>
      {!reduceMotion &&
        [-6, 0, 6].map((offset, i) => (
          <motion.span
            key={offset}
            className={`${styles.particle} ${styles.speedLine}`}
            style={{ ...centered(16, 2), top: `calc(50% + ${offset}px)` }}
            initial={{ x: 0, opacity: 0, scaleX: 0.3 }}
            animate={{ x: [0, 34], opacity: [0, 0.6, 0], scaleX: [0.3, 1, 0.3] }}
            transition={{ duration: 0.35, delay: 0.08 + i * 0.04, ease: "easeOut" }}
          />
        ))}
      <Pill duration={1.6} className={styles.mono}>
        <span style={{ color: SUCCESS }}>✓</span>
        Compiled in {ms}ms
      </Pill>
    </>
  );
}

const TS_PHASES = [1.1];
const TS_HOP: Hop = {
  keyframes: { x: [0, -4, 4, -3, 3, -1, 0] },
  options: { duration: 0.45 },
};

function TypeScriptEffect({ logo, onDone }: StackEffectProps) {
  useEffectRun(logo, onDone, 2.4, TS_HOP);
  const fixed = usePhase(TS_PHASES) > 0;

  return (
    <>
      <motion.svg
        className={styles.squiggle}
        viewBox="0 0 32 6"
        preserveAspectRatio="none"
        aria-hidden="true"
        initial={{ opacity: 1 }}
        animate={{ opacity: fixed ? 0 : 1 }}
        transition={{ duration: 0.3 }}
      >
        <motion.path
          d="M0 3 Q2 0 4 3 T8 3 T12 3 T16 3 T20 3 T24 3 T28 3 T32 3"
          fill="none"
          stroke={ERROR}
          strokeWidth="1.5"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
        />
      </motion.svg>
      <Pill duration={2.4} className={styles.mono}>
        {fixed ? (
          <>
            <span style={{ color: SUCCESS }}>✓</span>
            Found 0 errors
          </>
        ) : (
          <>
            <span style={{ color: ERROR }}>✕</span>
            &apos;fun&apos; is not assignable to &apos;work&apos;
          </>
        )}
      </Pill>
    </>
  );
}

const CSS_COLORS = ["#FF5FA2", "#A259FF", "#5FB3FF", "#3FD68F", "#FFC93C"];
const CSS_TINT = CSS_COLORS.concat(CSS_COLORS.slice(0, 1));
const CSS_PHASES = [0.6];
const CSS_HOP: Hop = {
  keyframes: { scale: [1, 1.12, 0.95, 1.05, 1], rotate: [0, -6, 6, -3, 0] },
  options: { duration: 0.6, ease: "easeOut" },
};

function CssModulesEffect({ logo, onDone }: StackEffectProps) {
  useEffectRun(logo, onDone, 2.2, CSS_HOP);
  const scoped = usePhase(CSS_PHASES) > 0;
  const [hash] = useState(() => Math.random().toString(36).slice(2, 7));

  useEffect(() => {
    const el = logo.current;
    if (!el) return;
    const tint = animate(el, { color: CSS_TINT }, { duration: 1.4, ease: "linear" });
    return () => {
      tint.stop();
      el.style.removeProperty("color");
    };
  }, [logo]);

  const reveal = { initial: { opacity: 0 }, animate: { opacity: 1 }, transition: { duration: 0.25 } };

  return (
    <Pill duration={2.2} className={`${styles.mono} ${styles.tight}`}>
      .{scoped && <motion.span {...reveal} style={{ color: "var(--white-60)" }}>Stack_</motion.span>}
      button
      {scoped && <motion.span {...reveal} style={{ color: CSS_COLORS[0] }}>__{hash}</motion.span>}
    </Pill>
  );
}

const FIGMA_PURPLE = "#A259FF";
const FIGMA_HANDLES = ["tl", "tr", "bl", "br"] as const;

function FigmaEffect({ logo, onDone }: StackEffectProps) {
  const reduceMotion = useEffectRun(logo, onDone, 2.2);
  const [size] = useState(() => (window.matchMedia("(min-width: 640px)").matches ? 32 : 28));

  return (
    <motion.span
      className={styles.selection}
      aria-hidden="true"
      initial={{ opacity: 0, scale: 1.2 }}
      animate={{ opacity: [0, 1, 1, 0], scale: [1.2, 1, 1, 1] }}
      transition={{ duration: 2.2, times: [0, 0.12, 0.88, 1] }}
    >
      {FIGMA_HANDLES.map((corner) => (
        <span key={corner} className={`${styles.handle} ${styles[corner]}`} />
      ))}
      <span className={styles.dimensions}>
        {size} × {size}
      </span>
      {!reduceMotion && (
        <motion.span
          className={styles.cursor}
          initial={{ x: 52, y: -44, opacity: 0, scale: 1 }}
          animate={{ x: 12, y: -20, opacity: 1, scale: [1, 0.8, 1] }}
          transition={{
            x: { duration: 0.5, ease: "easeOut" },
            y: { duration: 0.5, ease: "easeOut" },
            opacity: { duration: 0.2 },
            scale: { duration: 0.2, delay: 0.5 },
          }}
        >
          <svg width="11" height="16" viewBox="0 0 11 16">
            <path d="M1 1v12.5l3.2-3.1 2.3 5 2-.9-2.3-4.9H10.5Z" fill={FIGMA_PURPLE} stroke="#fff" strokeWidth="1" />
          </svg>
          <span className={styles.cursorTag} style={{ background: FIGMA_PURPLE }}>
            Otar
          </span>
        </motion.span>
      )}
    </motion.span>
  );
}

const GITHUB_GREENS = ["#0E4429", "#006D32", "#26A641", "#39D353"];
const GITHUB_ROWS = 3;
const GITHUB_HOP: Hop = {
  keyframes: { rotate: [0, -14, 12, -8, 4, 0] },
  options: { duration: 0.6 },
};

function GitHubEffect({ logo, onDone }: StackEffectProps) {
  useEffectRun(logo, onDone, 2.2, GITHUB_HOP);
  const [cells] = useState(() => {
    const levels = Array.from({ length: GITHUB_ROWS * 10 }, () =>
      Math.random() < 0.25 ? -1 : Math.floor(Math.random() * 3),
    );
    levels[levels.length - 1] = 3;
    return levels;
  });

  return (
    <Pill duration={2.2} className={styles.stacked}>
      <span className={styles.contribGrid}>
        {cells.map((level, i) => {
          const today = i === cells.length - 1;
          return (
            <motion.span
              key={i}
              className={styles.contribCell}
              style={{
                background: level < 0 ? "var(--white-10)" : GITHUB_GREENS[level],
                boxShadow: today ? `0 0 6px ${GITHUB_GREENS[3]}` : undefined,
              }}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{
                delay: today ? 0.8 : 0.1 + Math.floor(i / GITHUB_ROWS) * 0.04,
                type: "spring",
                stiffness: 500,
                damping: today ? 10 : 20,
              }}
            />
          );
        })}
      </span>
      <span>
        <span style={{ color: GITHUB_GREENS[3] }}>+1</span> contribution
      </span>
    </Pill>
  );
}

const BITBUCKET_BLUE = "#2684FF";
const BITBUCKET_WATER = "#579DFF";
const BITBUCKET_HOP: Hop = {
  keyframes: { rotate: [0, 40, 40, 0] },
  options: { duration: 1.1, times: [0, 0.25, 0.7, 1], ease: "easeInOut" },
};

function BitbucketEffect({ logo, onDone }: StackEffectProps) {
  const reduceMotion = useEffectRun(logo, onDone, 2, BITBUCKET_HOP);
  const [drops] = useState(() =>
    Array.from({ length: 10 }, (_, i) => ({
      delay: 0.28 + i * 0.05,
      drift: 4 + Math.random() * 8,
      fall: 12 + Math.random() * 8,
      size: 4 + Math.random() * 2,
    })),
  );

  return (
    <>
      {!reduceMotion &&
        drops.map((d, i) => (
          <motion.span
            key={i}
            className={styles.particle}
            style={{ ...centered(d.size, d.size * 1.4), borderRadius: "50%", background: BITBUCKET_WATER }}
            initial={{ x: 28, y: 0, opacity: 0 }}
            animate={{ x: [28, 30 + d.drift], y: [0, d.fall], opacity: [0, 1, 1, 0] }}
            transition={{
              duration: 0.6,
              delay: d.delay,
              ease: [0.5, 0, 1, 1],
              opacity: { duration: 0.6, delay: d.delay, times: [0, 0.1, 0.8, 1] },
            }}
          />
        ))}
      <Pill duration={2}>
        <svg
          width="12"
          height="12"
          viewBox="0 0 16 16"
          fill="none"
          stroke={BITBUCKET_BLUE}
          strokeWidth="1.5"
          strokeLinecap="round"
        >
          <circle cx="4" cy="3" r="1.75" />
          <circle cx="4" cy="13" r="1.75" />
          <circle cx="12" cy="9" r="1.75" />
          <path d="M4 4.75v6.5M4.4 4.6c.4 2.6 2.6 4.4 5.85 4.4" />
        </svg>
        Merged into main
      </Pill>
    </>
  );
}

const JIRA_DONE = { label: "DONE", background: "#1F845A", color: "#FFFFFF" };
const JIRA_STATUSES = [
  { label: "TO DO", background: "var(--white-15)", color: "var(--white-90)" },
  { label: "IN PROGRESS", background: "#0C66E4", color: "#FFFFFF" },
  JIRA_DONE,
];
const JIRA_PHASES = [0.6, 1.2];
const JIRA_HOP: Hop = {
  keyframes: { y: [0, -10, 0, -3, 0], rotate: [0, -8, 0, 0, 0] },
  options: { duration: 0.6, delay: 1.2, ease: "easeOut" },
};

function JiraEffect({ logo, onDone }: StackEffectProps) {
  useEffectRun(logo, onDone, 2.4, JIRA_HOP);
  const status = JIRA_STATUSES[usePhase(JIRA_PHASES)] ?? JIRA_DONE;

  return (
    <Pill duration={2.4}>
      <span className={styles.mono} style={{ color: "var(--white-60)" }}>
        OTAR-42
      </span>
      <motion.span
        key={status.label}
        className={styles.lozenge}
        style={{ background: status.background, color: status.color }}
        initial={{ opacity: 0, y: 4 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.18 }}
      >
        {status.label}
      </motion.span>
    </Pill>
  );
}

export const stackEffects: Partial<Record<string, ComponentType<StackEffectProps>>> = {
  "VS Code": VsCodeEffect,
  "Claude Code": ClaudeCodeEffect,
  React: ReactEffect,
  "Next.js": NextJsEffect,
  TypeScript: TypeScriptEffect,
  "CSS Modules": CssModulesEffect,
  Figma: FigmaEffect,
  GitHub: GitHubEffect,
  Bitbucket: BitbucketEffect,
  Jira: JiraEffect,
};
