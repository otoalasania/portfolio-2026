"use client";

import { useState } from "react";
import Image from "next/image";
import { Section } from "../ui";
import { WorkModal } from "./WorkModal";
import { featuredProjects, type Project } from "../../data";
import { useLocale } from "../../i18n/LocaleContext";
import styles from "./Work.module.css";

export function Work() {
  const { t } = useLocale();
  const [selected, setSelected] = useState<Project | null>(null);
  const selectedText = selected ? t.work.items[selected.slug] : undefined;

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
              <button
                type="button"
                className={styles.card}
                onClick={() => setSelected(project)}
                aria-haspopup="dialog"
                aria-label={t.work.items[project.slug].title}
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
              </button>
            </div>
          ))}
        </div>
      </div>

      <WorkModal
        project={selected}
        title={selectedText?.title}
        description={selectedText?.description}
        highlights={selectedText?.highlights}
        onClose={() => setSelected(null)}
      />
    </Section>
  );
}
