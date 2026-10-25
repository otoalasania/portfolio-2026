"use client";

import Image from "next/image";
import Link from "next/link";
import { Section } from "../ui";
import { heroCards } from "../../data";
import { useLocale } from "../../i18n/LocaleContext";
import { openProjectAt } from "../../lib/projectScreen";
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
          {heroCards.map((card) => (
            <div key={card.src} className={styles.cardSlot}>
              <Link
                href={`/work/${card.slug}`}
                scroll={false}
                className={styles.card}
                aria-label={card.title}
                data-project-card={card.slug}
                onClick={() => openProjectAt(card.image)}
              >
                <span className={styles.cardImage}>
                  <Image
                    src={card.src}
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
