"use client";

import { Section } from "../ui";
import { SpotifyIcon, InstagramIcon, LeicaWordmark } from "../icons";
import { personal } from "../../data";
import { useLocale } from "../../i18n/LocaleContext";
import styles from "./Personal.module.css";

export function Personal() {
  const { t } = useLocale();

  return (
    <Section id="personal" title={t.personal.title}>
      <p className={styles.blurb}>{t.personal.blurb}</p>

      <div className={styles.musicCard}>
        <div className={styles.musicTop}>
          <span className={styles.albumArt} style={{ backgroundColor: personal.music.color }} />
          <div>
            <p className={styles.musicTitle}>{personal.music.title}</p>
            <p className={styles.musicArtist}>{personal.music.artist}</p>
          </div>
        </div>
        <div className={styles.musicBottom}>
          <span>{t.personal.mostReplayed}</span>
          <span className={styles.listenLink}>
            {t.personal.listenOnSpotify}
            <SpotifyIcon />
          </span>
        </div>
      </div>

      <div className={styles.photoStrip}>
        {personal.photos.map((p, i) => (
          <div
            key={i}
            style={{ transform: `rotate(${p.rotate}deg)`, backgroundColor: p.color }}
            className={`${styles.photo} ${i > 0 ? styles.photoOverlap : ""}`}
          />
        ))}
      </div>

      <div className={styles.captionRow}>
        <span>
          {t.personal.shotWith} <LeicaWordmark />
        </span>
        <span className={styles.igLink}>
          {t.personal.seeMoreIG}
          <InstagramIcon />
        </span>
      </div>
    </Section>
  );
}
