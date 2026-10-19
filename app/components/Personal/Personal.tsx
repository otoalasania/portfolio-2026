"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { motion, useInView, type Variants } from "motion/react";
import { Section } from "../ui";
import SpotifyLogo from "@assets/svgs/logos/spotify.svg";
import { PauseIcon, PlayIcon } from "../icons";
import { personal } from "../../data";
import { useLocale } from "../../i18n/LocaleContext";
import { staggerContainer, fadeItem } from "../../lib/motion";
import styles from "./Personal.module.css";

const { track, belt } = personal;
const clipLength = track.end - track.start;

function formatTime(seconds: number) {
  const s = Math.max(0, Math.floor(seconds));
  return `${Math.floor(s / 60)}:${String(s % 60).padStart(2, "0")}`;
}

const beltUnroll: Variants = {
  hidden: { clipPath: "inset(-4px 100% -8px 0)" },
  visible: { clipPath: "inset(-4px -4px -8px 0)", transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

const beltPop: Variants = {
  rest: { scale: 1, rotate: 0 },
  hover: { scale: 1.15, rotate: -8, transition: { type: "spring", stiffness: 400, damping: 12 } },
};

const stripeContainer: Variants = {
  hidden: {},
  visible: { transition: { delayChildren: 0.45, staggerChildren: 0.16 } },
};

const stripeVariants: Variants = {
  hidden: { scaleY: 0 },
  visible: { scaleY: 1, transition: { type: "spring", stiffness: 500, damping: 22 } },
};

function BeltTag() {
  const { t } = useLocale();
  const ref = useRef<HTMLButtonElement>(null);
  const inView = useInView(ref, { once: true, amount: 1 });
  const [run, setRun] = useState(0);

  return (
    <motion.button
      ref={ref}
      type="button"
      className={styles.beltTag}
      onClick={() => setRun((r) => r + 1)}
      aria-label={`${t.personal.blurbTag}, ${t.personal.beltAlt}`}
      initial="rest"
      animate="rest"
      whileHover="hover"
      whileFocus="hover"
    >
      {t.personal.blurbTag}
      <motion.span className={styles.beltPop} variants={beltPop}>
        <motion.span
          className={styles.belt}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={beltUnroll}
        >
          <motion.span
            key={run}
            className={styles.rankBar}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={stripeContainer}
          >
            {Array.from({ length: belt.stripes }, (_, i) => (
              <motion.span key={i} className={styles.stripe} variants={stripeVariants} />
            ))}
          </motion.span>
        </motion.span>
      </motion.span>
    </motion.button>
  );
}

function MusicPlayer() {
  const { t } = useLocale();
  const audioRef = useRef<HTMLAudioElement>(null);
  const [playing, setPlaying] = useState(false);
  const [elapsed, setElapsed] = useState(0);

  const reset = () => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.pause();
    audio.currentTime = track.start;
    setElapsed(0);
  };

  const toggle = () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (!audio.paused) {
      audio.pause();
      return;
    }
    if (audio.currentTime < track.start || audio.currentTime >= track.end) {
      audio.currentTime = track.start;
    }
    audio.play().catch(() => setPlaying(false));
  };

  const onTimeUpdate = () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (audio.currentTime >= track.end) {
      reset();
      return;
    }
    setElapsed(audio.currentTime - track.start);
  };

  return (
    <div className={styles.player}>
      <audio
        ref={audioRef}
        src={`${track.audio}#t=${track.start},${track.end}`}
        preload="none"
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
        onEnded={reset}
        onTimeUpdate={onTimeUpdate}
      />

      <div className={styles.playerRow}>
        <Image src={track.cover} alt="" width={48} height={48} className={styles.cover} />
        <div className={styles.trackText}>
          <p className={styles.trackTitle}>{track.title}</p>
          <p className={styles.trackArtist}>{track.artist}</p>
        </div>
        <motion.button
          type="button"
          className={styles.playButton}
          onClick={toggle}
          aria-label={playing ? t.personal.pause : t.personal.play}
          aria-pressed={playing}
          whileTap={{ scale: 0.92 }}
          transition={{ type: "spring", stiffness: 400, damping: 20 }}
        >
          {playing ? <PauseIcon /> : <PlayIcon />}
        </motion.button>
        <span className={styles.progress} aria-hidden="true">
          <span className={styles.progressFill} style={{ transform: `scaleX(${elapsed / clipLength})` }} />
        </span>
      </div>

      <div className={styles.playerMeta}>
        <span className={styles.time}>
          {formatTime(elapsed)} / {formatTime(clipLength)}
        </span>
        <a className={styles.spotifyLink} href={track.spotifyUrl} target="_blank" rel="noopener noreferrer">
          {t.personal.listenOn}
          <SpotifyLogo width={16} height={16} aria-hidden="true" />
        </a>
      </div>
    </div>
  );
}

export function Personal() {
  const { t } = useLocale();

  return (
    <Section id="personal" title={t.personal.title}>
      <p className={styles.blurb}>
        {t.personal.blurbBefore} <BeltTag />
        {t.personal.blurbAfter}
      </p>

      <MusicPlayer />

      {personal.showPhotos && (
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
      )}
    </Section>
  );
}
