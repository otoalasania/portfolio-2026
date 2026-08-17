"use client";

import { useState } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import { motion } from "motion/react";
import FlagSpain from "@assets/svgs/flags/flag-spain.svg";
import { profile } from "../../data";
import { useLocale } from "../../i18n/LocaleContext";
import { staggerContainer, staggerItem } from "../../lib/motion";
import styles from "./Profile.module.css";

export function Profile() {
  const { t } = useLocale();
  const [cowRunning, setCatRunning] = useState(false);

  return (
    <motion.div className={styles.wrapper} initial="hidden" animate="visible" variants={staggerContainer}>
      <motion.button
        type="button"
        onClick={() => setCatRunning(true)}
        disabled={cowRunning}
        className={styles.avatarBox}
        variants={staggerItem}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.97 }}
        transition={{ type: "spring", stiffness: 260, damping: 18 }}
        aria-label={profile.name}
      >
        <Image
          src="/knight-in-chair.webp"
          alt=""
          width={60}
          height={60}
          className={styles.avatarInner}
        />
        <span className={styles.avatarGradient} />
        <span className={styles.statusDot} />
      </motion.button>

      {cowRunning &&
        typeof document !== "undefined" &&
        createPortal(
          <motion.div
            className={styles.cowTrain}
            initial={{ x: "115vw" }}
            animate={{ x: "-45vw", y: [0, -16, 0, -16, 0, -16, 0] }}
            transition={{
              x: { duration: 1.8, ease: "linear" },
              y: { duration: 1.8, ease: "easeInOut" },
            }}
            onAnimationComplete={() => setCatRunning(false)}
          >
            🐈
          </motion.div>,
          document.body
        )}

      <motion.div className={styles.nameRow} variants={staggerItem}>
        <h1 className={styles.name}>{profile.name}</h1>
        <Image
          src="/Twitter_Verified_Badge.svg.webp"
          alt={t.profile.verified}
          width={20}
          height={20}
        />
      </motion.div>
      <motion.p className={styles.role} variants={staggerItem}>
        {t.profile.role}
      </motion.p>

      <motion.p className={styles.bio} variants={staggerItem}>
        {t.profile.bioBefore}{" "}
        <span className={styles.company}>
          {profile.company.name}
          <span className={styles.companyLogo}>
            <Image src={profile.company.logo} alt="" width={17} height={17} style={{ objectFit: "contain" }} />
          </span>
        </span>{" "}
        {t.profile.bioLocationPrefix}{" "}
        <span className={styles.location}>
          {t.profile.bioLocation}
          <FlagSpain className={styles.flag} aria-hidden="true" />
        </span>{" "}
        {t.profile.bioAfter}
      </motion.p>
      <motion.p className={styles.bioShort} variants={staggerItem}>
        {t.profile.bioShort}
      </motion.p>
    </motion.div>
  );
}
