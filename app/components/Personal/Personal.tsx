import { Section } from "../ui";
import { SpotifyIcon, InstagramIcon, LeicaWordmark } from "../icons";
import { personal } from "../../data";
import styles from "./Personal.module.css";

export function Personal() {
  return (
    <Section id="personal" title="Personal">
      <p className={styles.blurb}>{personal.blurb}</p>

      <div className={styles.musicCard}>
        <div className={styles.musicTop}>
          <span className={styles.albumArt} style={{ backgroundColor: personal.music.color }} />
          <div>
            <p className={styles.musicTitle}>{personal.music.title}</p>
            <p className={styles.musicArtist}>{personal.music.artist}</p>
          </div>
        </div>
        <div className={styles.musicBottom}>
          <span>Most replayed this month</span>
          <span className={styles.listenLink}>
            Listen on Spotify
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
          Shot with Leica M6 <LeicaWordmark />
        </span>
        <span className={styles.igLink}>
          See more on IG
          <InstagramIcon />
        </span>
      </div>
    </Section>
  );
}
