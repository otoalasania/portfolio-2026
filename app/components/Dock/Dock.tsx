"use client";

import { useEffect, useRef, useState } from "react";
import { dock } from "../../data";
import { useLocale } from "../../i18n/LocaleContext";
import styles from "./Dock.module.css";

export function Dock() {
  const { t } = useLocale();
  const [hidden, setHidden] = useState(false);
  const hideTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    function onScroll() {
      setHidden(true);
      if (hideTimer.current) clearTimeout(hideTimer.current);
      hideTimer.current = setTimeout(() => setHidden(false), 400);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (hideTimer.current) clearTimeout(hideTimer.current);
    };
  }, []);

  function scrollTo(id: string) {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  return (
    <nav className={styles.nav} data-hidden={hidden} aria-label={t.nav.label}>
      <div className={styles.row}>
        {dock.map((item) => {
          const label = t.nav[item.id];
          const ItemIcon = item.icon;
          return (
            <span key={item.id} className={styles.itemWrap}>
              <button type="button" aria-label={label} onClick={() => scrollTo(item.id)} className={styles.item}>
                <ItemIcon />
              </button>
              <span className={styles.tooltip} aria-hidden="true">
                {label}
              </span>
            </span>
          );
        })}
      </div>
    </nav>
  );
}
