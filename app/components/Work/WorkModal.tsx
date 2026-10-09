"use client";

import { useEffect, useRef, useState, useSyncExternalStore } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";
import { CloseIcon, ArrowUpRight, ChevronIcon } from "../icons";
import { useLocale } from "../../i18n/LocaleContext";
import { stackLogo, type Project } from "../../data";
import styles from "./WorkModal.module.css";

export function WorkModal({
  project,
  title,
  description,
  highlights,
  onClose,
}: {
  project: Project | null;
  title?: string;
  description?: string;
  highlights?: string[];
  onClose: () => void;
}) {
  const { t } = useLocale();
  const panelRef = useRef<HTMLDivElement>(null);
  const previouslyFocused = useRef<HTMLElement | null>(null);
  const [imageIndex, setImageIndex] = useState(0);
  const [prevProjectId, setPrevProjectId] = useState(project?.slug);
  const imageCount = project?.images.length ?? 0;
  const mounted = useSyncExternalStore(
    () => () => {},
    () => true,
    () => false
  );

  if (project?.slug !== prevProjectId) {
    setPrevProjectId(project?.slug);
    setImageIndex(0);
  }

  useEffect(() => {
    if (!project) return;

    previouslyFocused.current = document.activeElement as HTMLElement;
    panelRef.current?.focus();

    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") {
        onClose();
        return;
      }
      if (e.key === "ArrowLeft" && imageCount > 1) {
        setImageIndex((i) => (i - 1 + imageCount) % imageCount);
        return;
      }
      if (e.key === "ArrowRight" && imageCount > 1) {
        setImageIndex((i) => (i + 1) % imageCount);
        return;
      }
      if (e.key !== "Tab") return;
      const focusables = panelRef.current?.querySelectorAll<HTMLElement>(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );
      if (!focusables || focusables.length === 0) return;
      const first = focusables[0]!;
      const last = focusables[focusables.length - 1]!;
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    }
    document.addEventListener("keydown", onKeyDown);

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previousOverflow;
      previouslyFocused.current?.focus();
    };
  }, [project, onClose, imageCount]);

  if (!mounted) return null;

  return createPortal(
    <AnimatePresence>
      {project && (
        <motion.div
          className={styles.backdrop}
          onClick={onClose}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          <motion.div
            ref={panelRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby="work-modal-title"
            tabIndex={-1}
            className={styles.panel}
            onClick={(e) => e.stopPropagation()}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 16 }}
            transition={{ type: "spring", stiffness: 120, damping: 18, mass: 0.6 }}
          >
            <div className={styles.header}>
              <button type="button" className={styles.closeButton} onClick={onClose} aria-label={t.work.closeLabel}>
                <CloseIcon />
              </button>
            </div>

            <div className={styles.hero}>
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={imageIndex}
                  className={styles.heroImageWrap}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.25 }}
                >
                  <Image
                    src={project.images[imageIndex]!}
                    alt=""
                    fill
                    sizes="(min-width: 640px) 480px, 100vw"
                    className={styles.heroImageEl}
                  />
                </motion.div>
              </AnimatePresence>

              {imageCount > 1 && (
                <>
                  <button
                    type="button"
                    className={`${styles.heroNav} ${styles.heroNavPrev}`}
                    onClick={() => setImageIndex((i) => (i - 1 + imageCount) % imageCount)}
                    aria-label={t.work.prevImage}
                  >
                    <span className={styles.chevronLeft}>
                      <ChevronIcon />
                    </span>
                  </button>
                  <button
                    type="button"
                    className={`${styles.heroNav} ${styles.heroNavNext}`}
                    onClick={() => setImageIndex((i) => (i + 1) % imageCount)}
                    aria-label={t.work.nextImage}
                  >
                    <span className={styles.chevronRight}>
                      <ChevronIcon />
                    </span>
                  </button>
                  <div className={styles.heroDots}>
                    {project.images.map((image, i) => (
                      <button
                        key={image}
                        type="button"
                        className={styles.heroDot}
                        data-active={i === imageIndex}
                        onClick={() => setImageIndex(i)}
                        aria-label={`${i + 1} / ${imageCount}`}
                      />
                    ))}
                  </div>
                </>
              )}
            </div>

            <h3 id="work-modal-title" className={styles.title}>
              {title}
            </h3>
            <p className={styles.description}>{description}</p>

            {highlights && highlights.length > 0 && (
              <ul className={styles.highlights}>
                {highlights.map((item) => (
                  <li key={item} className={styles.highlightItem}>
                    <span className={styles.highlightDot} />
                    {item}
                  </li>
                ))}
              </ul>
            )}

            {project.stack.length > 0 && (
              <div className={styles.stackRow}>
                {project.stack.map((name) => {
                  const logo = stackLogo(name);
                  return logo && <logo.Icon key={name} className={styles.stackIcon} role="img" aria-label={name} />;
                })}
              </div>
            )}

            {project.href && (
              <a href={project.href} target="_blank" rel="noopener noreferrer" className={styles.viewSite}>
                {t.work.viewSite}
                <ArrowUpRight size={16} strokeWidth={1.75} />
              </a>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  );
}
