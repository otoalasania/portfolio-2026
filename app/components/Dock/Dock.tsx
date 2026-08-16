"use client";

import { dock } from "../../data";
import { useLocale } from "../../i18n/LocaleContext";
import styles from "./Dock.module.css";

export function Dock() {
  const { t } = useLocale();

  function scrollTo(id: string) {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  return (
    <nav className={styles.nav}>
      {dock.map(({ id, icon: ItemIcon }) => (
        <button
          key={id}
          type="button"
          aria-label={t.nav[id as keyof typeof t.nav]}
          onClick={() => scrollTo(id)}
          className={styles.item}
        >
          <ItemIcon />
        </button>
      ))}
    </nav>
  );
}
