"use client";

import Image from "next/image";
import { motion } from "motion/react";
import FlagSpain from "@assets/svgs/flags/flag-spain.svg";
import { profile } from "../../data";
import { useLocale } from "../../i18n/LocaleContext";
import { staggerContainer, staggerItem } from "../../lib/motion";
import styles from "./Profile.module.css";

export function Profile() {
  const { t } = useLocale();

  return (
    <motion.div className={styles.wrapper} initial="hidden" animate="visible" variants={staggerContainer}>
      <motion.div
        className={styles.avatarBox}
        variants={staggerItem}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.97 }}
        transition={{ type: "spring", stiffness: 260, damping: 18 }}
      >
        <Image
          src="/knight-in-chair.webp"
          alt=""
          width={60}
          height={60}
          className={styles.avatarInner}
        />
        <span className={styles.statusDot} />
      </motion.div>

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
