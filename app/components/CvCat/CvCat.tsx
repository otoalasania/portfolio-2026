"use client";

import { useEffect, useRef, useState, useSyncExternalStore } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import { animate, motion, useReducedMotion } from "motion/react";
import { useLocale } from "../../i18n/LocaleContext";
import { downloadCv } from "../../lib/cv";
import { DocumentDownIcon } from "../icons";
import styles from "./CvCat.module.css";

const ARM_SRC = "/cv-cat/arm.webp";
const HAND_SRC = "/cv-cat/hand.webp";
const HAND_RATIO = 341 / 292;
const FROM_RIGHT_QUERY = "(max-width: 639px)";
const subscribeNothing = () => () => {};

type Phase = "idle" | "busy" | "grabbed";

export function CvCat({ label, children }: { label: string; children: React.ReactNode }) {
  const { t } = useLocale();
  const mounted = useSyncExternalStore(subscribeNothing, () => true, () => false);
  const reduce = useReducedMotion();
  const [phase, setPhase] = useState<Phase>("idle");
  const slotRef = useRef<HTMLDivElement>(null);
  const carryRef = useRef<HTMLDivElement>(null);
  const armRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    for (const src of [ARM_SRC, HAND_SRC]) new window.Image().src = src;
  }, []);

  function placeArm() {
    const slot = slotRef.current!.getBoundingClientRect();
    const arm = armRef.current!;
    const height = slot.height * 1.5;
    const handWidth = height * HAND_RATIO;
    const fromRight = window.matchMedia(FROM_RIGHT_QUERY).matches;
    const viewport = document.documentElement.clientWidth;
    const tip = slot.left + slot.width * (fromRight ? 0.25 : 0.75);
    const reach = fromRight ? viewport - tip : tip;
    const width = Math.max(reach, handWidth) + 24;
    arm.dataset.side = fromRight ? "right" : "left";
    Object.assign(arm.style, {
      top: `${slot.top + slot.height / 2 - height / 2}px`,
      left: `${fromRight ? tip : tip - width}px`,
      width: `${width}px`,
      height: `${height}px`,
      visibility: "visible",
    });
    const sign = fromRight ? 1 : -1;
    return {
      hidden: sign * (reach + 24),
      away: fromRight ? viewport - slot.left + 32 : -(slot.right + 32),
    };
  }

  const time = (s: number) => (reduce ? 0 : s);
  const pause = (ms: number) => new Promise((r) => setTimeout(r, reduce ? 0 : ms));

  async function grab() {
    if (phase !== "idle") return;
    setPhase("busy");
    const arm = armRef.current!;
    const carry = carryRef.current!;
    const { hidden, away } = placeArm();
    await animate(arm, { x: [hidden, hidden / 2] }, { duration: time(1.1), ease: [0.33, 0, 0.2, 1] });
    await pause(180);
    await animate(arm, { x: 0 }, { duration: time(0.14), ease: [0.2, 0.9, 0.3, 1] });
    await animate(carry, { scale: 0.92 }, { duration: time(0.06) });
    await Promise.all([
      animate(arm, { x: away }, { duration: time(0.3), ease: [0.55, 0, 0.75, 0.2] }),
      animate(carry, { x: away }, { duration: time(0.3), ease: [0.55, 0, 0.75, 0.2] }),
    ]);
    arm.style.visibility = "hidden";
    setPhase("grabbed");
  }

  async function giveBack() {
    if (phase !== "grabbed") return;
    downloadCv();
    setPhase("busy");
    const arm = armRef.current!;
    const carry = carryRef.current!;
    const { hidden, away } = placeArm();
    const setDown = { duration: time(0.9), ease: [0.25, 0.1, 0.2, 1] } as const;
    await Promise.all([
      animate(arm, { x: [away, 0] }, setDown),
      animate(carry, { x: [away, 0] }, setDown),
    ]);
    await animate(carry, { scale: 1 }, { duration: time(0.14) });
    await pause(220);
    await animate(arm, { x: hidden }, { duration: time(0.22), ease: [0.55, 0, 0.75, 0.2] });
    arm.style.visibility = "hidden";
    setPhase("idle");
  }

  return (
    <div ref={slotRef} className={styles.slot}>
      <button
        type="button"
        className={styles.cv}
        onClick={giveBack}
        aria-label={t.cv.takeCv}
        tabIndex={phase === "grabbed" ? 0 : -1}
        aria-hidden={phase !== "grabbed"}
      >
        <DocumentDownIcon />
        <span className={styles.cvTitle}>CV</span>
      </button>
      <span className={styles.cvTooltip} aria-hidden="true">
        {t.cv.takeCv}
      </span>

      <div ref={carryRef} className={styles.carry} data-phase={phase}>
        <motion.button
          type="button"
          onClick={grab}
          className={styles.avatar}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          transition={{ type: "spring", stiffness: 260, damping: 18 }}
          aria-label={label}
        >
          {children}
        </motion.button>
      </div>

      {mounted &&
        createPortal(
          <div ref={armRef} className={styles.arm} aria-hidden="true">
            <Image src={ARM_SRC} alt="" width={472} height={292} unoptimized className={styles.armFur} />
            <Image src={HAND_SRC} alt="" width={341} height={292} unoptimized className={styles.hand} />
          </div>,
          document.body
        )}
    </div>
  );
}
