"use client";

import { useId, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, type Variants } from "motion/react";
import { Section } from "../ui";
import { ArrowUpRight, ChevronIcon } from "../icons";
import { moreProjects, type Project, type ProjectSlug } from "../../data";
import { useLocale } from "../../i18n/LocaleContext";
import { staggerContainer, staggerItem } from "../../lib/motion";
import styles from "./ProjectIndex.module.css";

const INITIAL_COUNT = 5;

const MotionLink = motion.create(Link);

const spring = { type: "spring", stiffness: 300, damping: 20 } as const;

const arrowVariants: Variants = {
  rest: { x: 0, y: 0 },
  nudge: { x: 2, y: -2, transition: spring },
};

type Preview = { slug: ProjectSlug; rowY: number; visible: boolean; jump: boolean };

export function ProjectIndex() {
  const { t } = useLocale();
  const id = useId();
  const listId = `${id}-list`;
  const listRef = useRef<HTMLUListElement>(null);
  const [showAll, setShowAll] = useState(false);
  const [openSlug, setOpenSlug] = useState<ProjectSlug | null>(null);
  const [preview, setPreview] = useState<Preview | null>(null);

  if (moreProjects.length === 0) return null;

  const visibleProjects = showAll ? moreProjects : moreProjects.slice(0, INITIAL_COUNT);

  function showPreview(project: Project, row: HTMLElement) {
    const rowY = row.offsetTop + row.offsetHeight / 2;
    setPreview((prev) => ({ slug: project.slug, rowY, visible: true, jump: !prev?.visible }));
  }

  function hidePreview() {
    setPreview((prev) => prev && { ...prev, visible: false });
  }

  function onRowBlur(e: React.FocusEvent) {
    if (!listRef.current?.contains(e.relatedTarget as Node | null)) hidePreview();
  }

  const previewProject = preview && moreProjects.find((p) => p.slug === preview.slug);
  const previewShown = Boolean(preview?.visible && previewProject?.images[0]);

  return (
    <Section id="work-more" title={t.work.moreLabel} meta={moreProjects.length}>
      <motion.ul
        ref={listRef}
        id={listId}
        className={styles.list}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={staggerContainer}
        onPointerLeave={hidePreview}
      >
        {visibleProjects.map((project, index) => {
          const text = t.work.items[project.slug];
          const open = openSlug === project.slug;
          const triggerId = `${id}-${project.slug}-trigger`;
          const panelId = `${id}-${project.slug}-panel`;

          const rowContent = (
            <>
              <span className={styles.year}>{project.year}</span>
              <span className={styles.text}>
                <span className={styles.title}>{project.title}</span>
                <span className={styles.summary}>{text.tagline}</span>
              </span>
              <span className={styles.stackName}>{project.stack[0]}</span>
              <motion.span className={styles.arrow} variants={arrowVariants}>
                <ArrowUpRight size={16} strokeWidth={1.75} />
              </motion.span>
            </>
          );

          const rowProps = {
            className: styles.row,
            initial: "rest",
            animate: "rest",
            whileHover: "nudge",
            whileFocus: "nudge",
            onPointerEnter: (e: React.PointerEvent<HTMLElement>) => showPreview(project, e.currentTarget),
            onFocus: (e: React.FocusEvent<HTMLElement>) => showPreview(project, e.currentTarget),
            onBlur: onRowBlur,
          } as const;

          return (
            <motion.li
              key={project.slug}
              className={styles.item}
              variants={staggerItem}
              {...(index >= INITIAL_COUNT && { initial: "hidden", animate: "visible" })}
            >
              <MotionLink
                {...rowProps}
                href={`/work/${project.slug}`}
                scroll={false}
                data-project-card={project.slug}
              >
                {rowContent}
              </MotionLink>

              <div className={styles.touch}>
                <button
                  type="button"
                  id={triggerId}
                  className={styles.trigger}
                  aria-expanded={open}
                  aria-controls={panelId}
                  onClick={() => setOpenSlug(open ? null : project.slug)}
                >
                  <span className={styles.triggerTop}>
                    <span className={styles.title}>{project.title}</span>
                    <span className={styles.year}>{project.year}</span>
                  </span>
                  <span className={styles.touchSummary}>{text.tagline}</span>
                  <span className={styles.chevron} data-open={open}>
                    <ChevronIcon />
                  </span>
                </button>

                <div id={panelId} className={styles.panel} data-open={open} inert={!open}>
                  <div className={styles.panelInner}>
                    <div className={styles.panelContent}>
                      {project.images[0] && (
                        <div className={`${styles.polaroid} ${styles.panelPolaroid}`}>
                          <span className={styles.polaroidImage}>
                            <Image
                              src={project.images[0]}
                              alt=""
                              fill
                              sizes="200px"
                              className={styles.polaroidImageEl}
                            />
                          </span>
                        </div>
                      )}
                      <p className={styles.stackLine}>{project.stack.join(" · ")}</p>
                      <Link
                        href={`/work/${project.slug}`}
                        scroll={false}
                        className={styles.viewLink}
                        data-project-card={project.slug}
                      >
                        {t.work.viewProject}
                        <ArrowUpRight size={16} strokeWidth={1.75} />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </motion.li>
          );
        })}

        <li
          className={styles.previewAnchor}
          aria-hidden="true"
          data-jump={preview?.jump ?? true}
          style={{ "--row-y": `${preview?.rowY ?? 0}px` } as React.CSSProperties}
        >
          <motion.div
            className={styles.polaroid}
            initial={false}
            animate={previewShown ? { opacity: 1, scale: 1, rotate: -4 } : { opacity: 0, scale: 0.92, rotate: -4 }}
            transition={{ opacity: { duration: 0.2 }, scale: spring }}
          >
            <span className={styles.polaroidImage}>
              {moreProjects.map(
                (project) =>
                  project.images[0] && (
                    <Image
                      key={project.slug}
                      src={project.images[0]}
                      alt=""
                      fill
                      sizes="176px"
                      className={styles.polaroidImageEl}
                      data-active={project.slug === preview?.slug}
                    />
                  )
              )}
            </span>
          </motion.div>
        </li>
      </motion.ul>

      {moreProjects.length > INITIAL_COUNT && (
        <button
          type="button"
          className={styles.toggle}
          aria-expanded={showAll}
          aria-controls={listId}
          onClick={() => {
            hidePreview();
            setShowAll((v) => !v);
          }}
        >
          {showAll ? `− ${t.work.showLess}` : `+ ${t.work.showAll} ${moreProjects.length}`}
        </button>
      )}
    </Section>
  );
}
