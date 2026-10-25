"use client";

import { useEffect, useRef, useState } from "react";
import { dock, HIDDEN_SECTIONS } from "../../data";
import { useLocale } from "../../i18n/LocaleContext";
import { ChevronIcon } from "../icons";
import styles from "./Dock.module.css";

type DockItem = (typeof dock)[number];

const items = dock.filter((item) => !HIDDEN_SECTIONS.has(item.id));
const PHONE_ROW_MAX = 6;
const collapsible = items.length > PHONE_ROW_MAX;
const primary = collapsible ? items.slice(0, PHONE_ROW_MAX - 1) : items;
const rest = collapsible ? items.slice(PHONE_ROW_MAX - 1) : [];

export function Dock() {
  const { t } = useLocale();
  const [hidden, setHidden] = useState(false);
  const [expanded, setExpanded] = useState(false);
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

  function renderButton(item: DockItem) {
    const label = t.nav[item.id as keyof typeof t.nav];
    const ItemIcon = item.icon;
    return (
      <span key={item.id} className={styles.itemWrap}>
        <button type="button" aria-label={label} onClick={() => scrollTo(item.id)} className={styles.item}>
          <ItemIcon />
        </button>
        <span className={styles.tooltip}>{label}</span>
      </span>
    );
  }

  return (
    <nav className={styles.nav} data-hidden={hidden}>
      <div className={styles.fullRow}>{items.map(renderButton)}</div>

      <div className={styles.phoneStack}>
        {collapsible && (
          <div className={styles.secondRow} data-expanded={expanded}>
            {rest.map(renderButton)}
          </div>
        )}
        <div className={styles.primaryRow}>
          {primary.map(renderButton)}
          {collapsible && (
            <button
              type="button"
              aria-label={expanded ? t.nav.less : t.nav.more}
              aria-expanded={expanded}
              onClick={() => setExpanded((e) => !e)}
              className={`${styles.item} ${styles.expandItem}`}
            >
              <span className={expanded ? styles.chevronFlipped : ""}>
                <ChevronIcon />
              </span>
            </button>
          )}
        </div>
      </div>
    </nav>
  );
}
