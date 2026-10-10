"use client";

import Image from "next/image";
import Link from "next/link";
import { Section } from "../ui";
import { featuredProjects } from "../../data";
import { useLocale } from "../../i18n/LocaleContext";
import styles from "./Work.module.css";

export function Work() {
  const { t } = useLocale();

  return (
    <Section id="work" title={t.work.title} subtitle={t.work.subtitle} style={{ marginTop: 40 }}>
      <div
        className={styles.stage}
        style={{
          backgroundImage:
            "radial-gradient(rgba(255,255,255,0.12) 1px, transparent 1px)",
          backgroundSize: "18px 18px",
        }}
      >
        <div className={styles.canvas}>
          {featuredProjects.map((project) => (
            <div key={project.slug} className={styles.cardSlot}>
              <Link
                href={`/work/${project.slug}`}
                scroll={false}
                className={styles.card}
                aria-label={t.work.items[project.slug].title}
                data-project-card={project.slug}
              >
                <span className={styles.cardImage}>
                  <Image
                    src={project.images[0]!}
                    alt=""
                    fill
                    sizes="(min-width: 640px) 340px, 340px"
                    className={styles.cardImageEl}
                  />
                </span>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
