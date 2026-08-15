import Image from "next/image";
import { Tile } from "../ui";
import { profile } from "../../data";
import styles from "./Profile.module.css";

export function Profile() {
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
          alt="Verified"
          width={16}
          height={16}
        />
      </div>
      <p className={styles.role}>{profile.role}</p>

      <p className={styles.bio}>
        {profile.bioBefore}{" "}
        <span className={styles.company}>
          {profile.company.name}
          <Tile color={profile.company.color}>{profile.company.name[0]}</Tile>
        </span>{" "}
        {profile.bioAfter}
      </p>
    </div>
  );
}
