"use client";

import Image from "next/image";
import { profile } from "../../data";
import { useLocale } from "../../i18n/LocaleContext";
import styles from "./Profile.module.css";

export function Profile() {
  const { t } = useLocale();

  return (
    <div className={styles.wrapper}>
      <div className={styles.avatarBox}>
        <Image
          src="/knight-avatar.png"
          alt=""
          width={56}
          height={56}
          className={styles.avatarInner}
        />
        <span className={styles.statusDot} />
      </div>

      <div className={styles.nameRow}>
        <h1 className={styles.name}>{profile.name}</h1>
        <Image
          src="/twitter-verified-badge.svg"
          alt={t.profile.verified}
          width={18}
          height={18}
        />
      </div>
      <p className={styles.role}>{t.profile.role}</p>

      <p className={styles.bio}>
        {t.profile.bioBefore}{" "}
        <span className={styles.company}>
          {profile.company.name}
          <span className={styles.companyLogo}>
            <Image src={profile.company.logo} alt="" width={20} height={20} style={{ objectFit: "contain" }} />
          </span>
        </span>{" "}
        {t.profile.bioAfter}
      </p>
    </div>
  );
}
