"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { AnimatePresence, motion } from "motion/react";
import { SectionLabel } from "../ui";
import { ArrowUpRight, CloseIcon } from "../icons";
import { PROJECT_TITLE_ID, useSheet } from "../ProjectSheet/ProjectSheet";
import { findProject } from "../../data";
import { useLocale } from "../../i18n/LocaleContext";
import { fadeItem } from "../../lib/motion";
import styles from "./ProjectDetail.module.css";

const pad = (n: number) => String(n).padStart(2, "0");

export function ProjectDetail({ slug }: { slug: string }) {
  const { t } = useLocale();
  const router = useRouter();
  const sheet = useSheet();
  const [activeScreen, setActiveScreen] = useState(0);

  const found = findProject(slug);
  const title = found ? t.work.items[found.project.slug].title : null;

  useEffect(() => {
    if (sheet && title) document.title = `${title} — Otar Alasania`;
  }, [sheet, title]);

  if (!found) return null;
  const { project, index, group } = found;
  const text = t.work.items[project.slug];
  const total = group.length;
  const prev = group[(index - 1 + total) % total]!;
  const next = group[(index + 1) % total]!;
  const mainImage = project.images[activeScreen];

  const closeContent = (
    <>
      <span className={styles.escHint}>ESC</span>
      <CloseIcon />
    </>
  );

  function navLink(target: typeof prev, label: React.ReactNode, aria: string) {
    const href = `/work/${target.slug}`;
    return sheet ? (
      <button
        type="button"
        className={styles.navButton}
        aria-label={aria}
        onClick={() => router.replace(href, { scroll: false })}
      >
        {label}
      </button>
    ) : (
      <a href={href} className={styles.navButton} aria-label={aria}>
        {label}
      </a>
    );
  }

  return (
    <article className={styles.detail}>
      <div className={styles.topBar}>
        <SectionLabel>
          {pad(index + 1)} / {pad(total)}
        </SectionLabel>
        {sheet ? (
          <button type="button" className={styles.close} onClick={sheet.close} aria-label={t.work.closeLabel}>
            {closeContent}
          </button>
        ) : (
          <Link href="/" className={styles.close} aria-label={t.work.closeLabel}>
            <CloseIcon />
          </Link>
        )}
      </div>

      <motion.div className={styles.body} initial="hidden" animate="visible" variants={fadeItem}>
        <header className={styles.heading}>
          <h2 id={PROJECT_TITLE_ID} className={styles.title}>
            {text.title}
          </h2>
          <p className={styles.summary}>{text.summary}</p>
        </header>

        <dl className={styles.meta}>
          <div className={styles.metaCell}>
            <dt className={styles.label}>{t.work.yearLabel}</dt>
            <dd className={styles.metaValue}>{project.year}</dd>
          </div>
          {project.role && (
            <div className={styles.metaCell}>
              <dt className={styles.label}>{t.work.roleLabel}</dt>
              <dd className={styles.metaValue}>{t.work.roles[project.role]}</dd>
            </div>
          )}
          {project.status && (
            <div className={styles.metaCell}>
              <dt className={styles.label}>{t.work.statusLabel}</dt>
              <dd className={styles.metaValue}>{t.work.statuses[project.status]}</dd>
            </div>
          )}
          <div className={styles.metaCell}>
            <dt className={styles.label}>{t.work.stackLabel}</dt>
            <dd className={styles.pills}>
              {project.stack.map((name) => (
                <span key={name} className={styles.pill}>
                  {name}
                </span>
              ))}
            </dd>
          </div>
        </dl>

        {mainImage && (
          <div className={styles.mainPolaroid}>
            <span className={styles.polaroidImage}>
              <AnimatePresence initial={false}>
                <motion.span
                  key={mainImage}
                  className={styles.polaroidLayer}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                >
                  <Image
                    src={mainImage}
                    alt={`${text.title} — ${t.work.screenLabel} ${activeScreen + 1}`}
                    fill
                    sizes="(min-width: 640px) 560px, 100vw"
                    className={styles.polaroidImageEl}
                    priority={activeScreen === 0}
                  />
                </motion.span>
              </AnimatePresence>
            </span>
          </div>
        )}

        <section className={styles.block}>
          <SectionLabel>{t.work.aboutLabel}</SectionLabel>
          <p className={styles.paragraph}>{text.about}</p>
        </section>

        <section className={styles.block}>
          <SectionLabel>{t.work.builtLabel}</SectionLabel>
          <ol className={styles.builtList}>
            {text.built.map((item, i) => (
              <li key={item} className={styles.builtItem}>
                <span className={styles.builtNumber}>{pad(i + 1)}</span>
                <span>{item}</span>
              </li>
            ))}
          </ol>
        </section>

        {project.images.length > 1 && (
          <section className={styles.block}>
            <SectionLabel>{t.work.screensLabel}</SectionLabel>
            <div className={styles.thumbs}>
              {project.images.map((image, i) => (
                <button
                  key={image}
                  type="button"
                  className={styles.thumb}
                  aria-pressed={i === activeScreen}
                  aria-label={`${t.work.screenLabel} ${i + 1}`}
                  onClick={() => setActiveScreen(i)}
                >
                  <span className={styles.polaroidImage}>
                    <Image src={image} alt="" fill sizes="96px" className={styles.polaroidImageEl} />
                  </span>
                </button>
              ))}
            </div>
          </section>
        )}
      </motion.div>

      <footer className={styles.footer}>
        {project.href ? (
          <a href={project.href} target="_blank" rel="noopener noreferrer" className={styles.visit}>
            {t.work.visitSite}
            <ArrowUpRight size={16} strokeWidth={1.75} />
          </a>
        ) : (
          <span className={styles.walkthrough}>{t.work.walkthrough}</span>
        )}
        <nav className={styles.nav}>
          {navLink(prev, `← ${t.work.prevProject}`, `${t.work.prevProject}: ${t.work.items[prev.slug].title}`)}
          {navLink(next, `${t.work.nextProject} →`, `${t.work.nextProject}: ${t.work.items[next.slug].title}`)}
        </nav>
      </footer>
    </article>
  );
}
