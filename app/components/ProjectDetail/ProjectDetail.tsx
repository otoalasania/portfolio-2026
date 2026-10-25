"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { AnimatePresence, motion } from "motion/react";
import { SectionLabel } from "../ui";
import { ArrowUpRight, CloseIcon } from "../icons";
import { PROJECT_TITLE_ID, useSheet } from "../ProjectSheet/ProjectSheet";
import { findProject, pageTitle } from "../../data";
import { useLocale } from "../../i18n/LocaleContext";
import { fadeItem } from "../../lib/motion";
import { clearProjectScreen, pendingProjectScreen } from "../../lib/projectScreen";
import styles from "./ProjectDetail.module.css";

const pad = (n: number) => String(n).padStart(2, "0");

function showTitle(title: string) {
  document.title = pageTitle(title);
}

export function ProjectDetail({ slug }: { slug: string }) {
  const { t } = useLocale();
  const router = useRouter();
  const sheet = useSheet();
  const [activeScreen, setActiveScreen] = useState(pendingProjectScreen);

  const found = findProject(slug);
  const title = found?.project.title ?? null;

  useEffect(() => {
    clearProjectScreen();
  }, []);

  useEffect(() => {
    if (sheet && title) showTitle(title);
  }, [sheet, title]);

  if (!found) return null;
  const { project, index, group } = found;
  const text = t.work.items[project.slug];
  const total = group.length;
  const prev = group[(index - 1 + total) % total]!;
  const next = group[(index + 1) % total]!;
  const mainImage = project.images[activeScreen] ?? project.images[0];

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
            {project.title}
          </h2>
          <a
            href={project.href}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.visit}
            title={project.href}
          >
            {t.work.visitSite}
            <span className={styles.visitArrow}>
              <ArrowUpRight size={16} strokeWidth={1.75} />
            </span>
          </a>
          <p className={styles.summary}>{text.tagline}</p>
          {project.secondaryHref && (
            <a
              href={project.secondaryHref}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.secondaryLink}
            >
              {new URL(project.secondaryHref).hostname}
              <ArrowUpRight size={14} strokeWidth={1.75} />
            </a>
          )}
        </header>

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
                    alt={`${project.title} — ${t.work.screenLabel} ${activeScreen + 1}`}
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

        {project.images.length > 1 && (
          <div className={styles.thumbs} role="group" aria-label={t.work.screensLabel}>
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
                  <Image src={image} alt="" fill sizes="80px" className={styles.polaroidImageEl} />
                </span>
              </button>
            ))}
          </div>
        )}

        <dl className={styles.meta}>
          <div className={styles.metaCell}>
            <dt className={styles.label}>{t.work.yearLabel}</dt>
            <dd className={styles.metaValue}>{project.period}</dd>
          </div>
          <div className={styles.metaCell}>
            <dt className={styles.label}>{t.work.roleLabel}</dt>
            <dd className={styles.metaValue}>{t.work.roles[project.role]}</dd>
          </div>
          <div className={styles.metaCell}>
            <dt className={styles.label}>{t.work.statusLabel}</dt>
            <dd className={styles.metaValue}>{t.work.statuses[project.status]}</dd>
          </div>
          {project.languages && (
            <div className={styles.metaCell}>
              <dt className={styles.label}>{t.work.languagesLabel}</dt>
              <dd className={styles.metaValue}>{project.languages.join(" · ")}</dd>
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

        <section className={styles.block}>
          <SectionLabel>{t.work.aboutLabel}</SectionLabel>
          <p className={styles.paragraph}>{text.description}</p>
        </section>

        <section className={styles.block}>
          <SectionLabel>{t.work.highlightsLabel}</SectionLabel>
          <ol className={styles.builtList}>
            {text.highlights.map((item, i) => (
              <li key={item} className={styles.builtItem}>
                <span className={styles.builtNumber}>{pad(i + 1)}</span>
                <span>{item}</span>
              </li>
            ))}
          </ol>
        </section>
      </motion.div>

      <footer className={styles.footer}>
        <nav className={styles.nav}>
          {navLink(prev, `← ${t.work.prevProject}`, `${t.work.prevProject}: ${prev.title}`)}
          {navLink(next, `${t.work.nextProject} →`, `${t.work.nextProject}: ${next.title}`)}
        </nav>
      </footer>
    </article>
  );
}
