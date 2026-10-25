"use client";

import Image from "next/image";
import { motion } from "motion/react";
import FlagSpain from "@assets/svgs/flags/flag-spain.svg";
import VerifiedBadge from "@assets/svgs/badges/verified.svg";
import { profile } from "../../data";
import { CompanyTag } from "../CompanyTag/CompanyTag";
import { useLocale } from "../../i18n/LocaleContext";
import { staggerContainer, staggerItem } from "../../lib/motion";
import { CvCat } from "../CvCat/CvCat";
import styles from "./Profile.module.css";

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
        <CompanyTag />
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
