import { PinIcon, CloudIcon } from "../icons";
import { profile, footerMeta } from "../../data";
import styles from "./Footer.module.css";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <p className={styles.signature} style={{ fontFamily: "cursive" }}>
        {profile.name}
      </p>
      <p className={styles.copyright}>
        © {new Date().getFullYear()} {profile.name}
      </p>

      <div className={styles.meta}>
        <span className={styles.metaItem}>
          <PinIcon />
          {footerMeta.location}
        </span>
        <span className={styles.metaItem}>
          <CloudIcon />
          {footerMeta.weatherC}°C
        </span>
      </div>
    </footer>
  );
}
