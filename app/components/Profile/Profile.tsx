"use client";

import Image from "next/image";
import { motion, type Variants } from "motion/react";
import FlagSpain from "@assets/svgs/flags/flag-spain.svg";
import VerifiedBadge from "@assets/svgs/badges/verified.svg";
import { profile } from "../../data";
import { useLocale } from "../../i18n/LocaleContext";
import { staggerContainer, staggerItem } from "../../lib/motion";
import { scrollToSection } from "../../lib/scrollToSection";
import { CvCat } from "../CvCat/CvCat";
import { ArrowDownIcon } from "../icons";
import styles from "./Profile.module.css";

const arrowNudge: Variants = {
  rest: { y: 0 },
  hover: { y: 2, transition: { type: "spring", stiffness: 400, damping: 12 } },
};

function CurrentWork({ label }: { label: string }) {
  return (
    <motion.a
      href="#experience"
      className={styles.current}
      onClick={(e) => {
        e.preventDefault();
        scrollToSection("experience");
      }}
      initial="rest"
      animate="rest"
      whileHover="hover"
      whileFocus="hover"
    >
      {label}
      <motion.span className={styles.currentArrow} variants={arrowNudge}>
        <ArrowDownIcon />
      </motion.span>
    </motion.a>
  );
}

export function Profile() {
  const { t } = useLocale();

  return (
    <motion.div className={styles.wrapper} initial="hidden" animate="visible" variants={staggerContainer}>
      <motion.div variants={staggerItem}>
        <CvCat label={profile.name}>
          <Image
            src="/knight-in-chair.webp"
            alt=""
            width={60}
            height={60}
            className={styles.avatarInner}
          />
          <span className={styles.avatarGradient} />
          <span className={styles.statusDot} />
        </CvCat>
      </motion.div>

      <motion.div className={styles.nameRow} variants={staggerItem}>
        <h1 className={styles.name}>{profile.name}</h1>
        <VerifiedBadge width={20} height={20} role="img" aria-label={t.profile.verified} />
      </motion.div>
      <motion.p className={styles.role} variants={staggerItem}>
        {t.profile.role}
      </motion.p>

      <motion.p className={styles.bio} variants={staggerItem}>
        {t.profile.bioBefore}{" "}
        <span className={styles.location}>
          {t.profile.bioLocation}
          <FlagSpain className={styles.flag} aria-hidden="true" />
        </span>
        {t.profile.bioAfter} <CurrentWork label={t.profile.bioCurrent} />
      </motion.p>
      <motion.p className={styles.bioShort} variants={staggerItem}>
        {t.profile.bioShort} <CurrentWork label={t.profile.bioCurrent} />
      </motion.p>
      <motion.p className={styles.open} variants={staggerItem}>
        {t.profile.bioOpen}
      </motion.p>
    </motion.div>
  );
}
