"use client";

import { useRef, useSyncExternalStore } from "react";
import Image from "next/image";
import { motion, useInView } from "motion/react";
import { Section } from "../ui";
import { personal } from "../../data";
import { useLocale } from "../../i18n/LocaleContext";
import { staggerContainer, fadeItem } from "../../lib/motion";
import styles from "./Personal.module.css";

const DARK_QUERY = "(prefers-color-scheme: dark)";

function subscribeToScheme(onChange: () => void) {
  const query = window.matchMedia(DARK_QUERY);
  query.addEventListener("change", onChange);
  return () => query.removeEventListener("change", onChange);
}

function spotifyEmbedUrl(trackUrl: string, dark: boolean) {
  const id = trackUrl.match(/\/track\/([A-Za-z0-9]+)/)?.[1];
  return id ? `https://open.spotify.com/embed/track/${id}?utm_source=generator${dark ? "&theme=0" : ""}` : null;
}

export function Personal() {
  const { t } = useLocale();
  const dark = useSyncExternalStore(
    subscribeToScheme,
    () => window.matchMedia(DARK_QUERY).matches,
    () => null
  );
  const slotRef = useRef<HTMLDivElement>(null);
  const near = useInView(slotRef, { once: true, margin: "0px 0px 600px 0px" });
  const embedUrl = dark === null || !near ? null : spotifyEmbedUrl(personal.spotifyTrackUrl, dark);

  return (
    <Section id="personal" title={t.personal.title}>
      <p className={styles.blurb}>{t.personal.blurb}</p>

      <div ref={slotRef} className={styles.playerSlot}>
        {embedUrl && (
          <iframe
            className={styles.player}
            src={embedUrl}
            title={t.personal.playerTitle}
            height={80}
            loading="lazy"
            allow="encrypted-media"
          />
        )}
      </div>

      <motion.div
        className={styles.photoStrip}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={staggerContainer}
      >
        {personal.photos.map((photo, i) => (
          <motion.div
            key={photo.src}
            style={{ "--rotate": `${photo.rotate}deg` } as React.CSSProperties}
            className={`${styles.photo} ${i > 0 ? styles.photoOverlap : ""}`}
            variants={fadeItem}
          >
            <Image
              src={photo.src}
              alt={t.personal.photoAlts[i] ?? ""}
              fill
              sizes="(min-width: 640px) 184px, 50vw"
              className={styles.photoImage}
            />
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
}
