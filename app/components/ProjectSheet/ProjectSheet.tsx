"use client";

import { createContext, useContext, useEffect, useRef, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { AnimatePresence, motion } from "motion/react";
import styles from "./ProjectSheet.module.css";

export const PROJECT_TITLE_ID = "project-detail-title";

const SheetContext = createContext<{ close: () => void } | null>(null);

export function useSheet() {
  return useContext(SheetContext);
}

const FOCUSABLE = 'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])';

export function ProjectSheet({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const { slug } = useParams<{ slug: string }>();
  const [open, setOpen] = useState(true);
  const panelRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const openedSlug = useRef(slug);
  const [titleBeforeOpen] = useState(() => (typeof document === "undefined" ? "" : document.title));

  function close() {
    setOpen(false);
  }

  useEffect(() => {
    const active = document.activeElement;
    const opener =
      active instanceof HTMLElement && active !== document.body
        ? active
        : [...document.querySelectorAll<HTMLElement>(`[data-project-card="${openedSlug.current}"]`)].find(
            (el) => el.offsetParent !== null
          );
    panelRef.current?.focus();

    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setOpen(false);
        return;
      }
      if (e.key !== "Tab") return;
      const focusables = panelRef.current?.querySelectorAll<HTMLElement>(FOCUSABLE);
      if (!focusables || focusables.length === 0) return;
      const first = focusables[0]!;
      const last = focusables[focusables.length - 1]!;
      const inside = panelRef.current?.contains(document.activeElement);
      if (e.shiftKey && (document.activeElement === first || !inside)) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && (document.activeElement === last || !inside)) {
        e.preventDefault();
        first.focus();
      }
    }
    document.addEventListener("keydown", onKeyDown);

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previousOverflow;
      if (titleBeforeOpen) document.title = titleBeforeOpen;
      opener?.focus({ preventScroll: true });
    };
  }, [titleBeforeOpen]);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: 0 });
    if (!panelRef.current?.contains(document.activeElement)) panelRef.current?.focus();
  }, [slug]);

  return (
    <SheetContext.Provider value={{ close }}>
      <AnimatePresence onExitComplete={() => router.back()}>
        {open && (
          <motion.div
            key="overlay"
            className={styles.overlay}
            onClick={close}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          />
        )}
        {open && (
          <motion.div
            key="sheet"
            ref={panelRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby={PROJECT_TITLE_ID}
            tabIndex={-1}
            className={styles.sheet}
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ type: "spring", stiffness: 260, damping: 32, mass: 0.8 }}
          >
            <div ref={scrollRef} className={styles.scroll}>
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </SheetContext.Provider>
  );
}
