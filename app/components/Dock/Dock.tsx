"use client";

import { dock } from "../../data";
import styles from "./Dock.module.css";

export function Dock() {
  function scrollTo(id: string) {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  return (
    <nav className={styles.nav}>
      {dock.map(({ id, icon: ItemIcon, label }) => (
        <button
          key={id}
          type="button"
          aria-label={label}
          onClick={() => scrollTo(id)}
          className={styles.item}
        >
          <ItemIcon />
        </button>
      ))}
    </nav>
  );
}
