"use client";

import Image from "next/image";
import FlagSpain from "@assets/svgs/flags/flag-spain.svg";
import { profile } from "../../data";
import { useLocale } from "../../i18n/LocaleContext";
import styles from "./Profile.module.css";

export function Profile() {
  const { t } = useLocale();

  return (
    <div className={styles.wrapper}>
      <div className={styles.avatarBox}>
        <Image
          src="/knight-in-chair.webp"
          alt=""
          width={60}
          height={60}
          className={styles.avatarInner}
        />
        <span className={styles.statusDot} />
      </div>

      <div className={styles.nameRow}>
        <h1 className={styles.name}>{profile.name}</h1>
        <Image
          src="/Twitter_Verified_Badge.svg.webp"
          alt={t.profile.verified}
          width={20}
          height={20}
        />
      </div>
      <p className={styles.role}>{t.profile.role}</p>

      <p className={styles.bio}>
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
          <FlagSpain width={20} height={20} className={styles.flag} aria-hidden="true" />
        </span>{" "}
        {t.profile.bioAfter}
      </p>
      <p className={styles.bioShort}>{t.profile.bioShort}</p>
    </div>
  );
}
