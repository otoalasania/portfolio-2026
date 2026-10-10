"use client";

import { createContext, useContext, useEffect, useRef, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { AnimatePresence, motion } from "motion/react";
import styles from "./ProjectSheet.module.css";

export const PROJECT_TITLE_ID = "project-detail-title";

const SheetContext = createContext<{ close: () => void } | null>(null);

// null when ProjectDetail renders as the full /work/[slug] page instead of inside the sheet
export function useSheet() {
  return useContext(SheetContext);
}

const FOCUSABLE = 'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])';

/**
 * Bottom-sheet shell for the intercepted /work/[slug] route. Lives in the
 * @modal/(.)work layout, so Prev/Next (which swap the [slug] page beneath it)
 * only re-render the content — the overlay and slide-up don't replay.
 */
export function ProjectSheet({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const { slug } = useParams<{ slug: string }>();
  const [open, setOpen] = useState(true);
  const panelRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const openedSlug = useRef(slug);
  // Read during render: ProjectDetail's effect (a child, so it runs first) overwrites document.title
  const [titleBeforeOpen] = useState(() => (typeof document === "undefined" ? "" : document.title));

  function close() {
    setOpen(false);
  }

  // Mount: remember the hero card that opened us, lock scroll, trap focus, ESC to close.
  useEffect(() => {
    // Safari doesn't focus links on click, so fall back to the hero card for the opening slug
    const active = document.activeElement;
    const opener =
      active instanceof HTMLElement && active !== document.body
        ? active
        : // ProjectIndex renders a mouse row and a touch link per project — take the one that's displayed
          [...document.querySelectorAll<HTMLElement>(`[data-project-card="${openedSlug.current}"]`)].find(
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
      // generateMetadata doesn't apply on intercepted soft navigations — ProjectDetail sets the title
      if (titleBeforeOpen) document.title = titleBeforeOpen;
      // runs for both our close button and the browser Back button
      opener?.focus({ preventScroll: true });
    };
  }, [titleBeforeOpen]); // stable (useState initializer) — effect still runs once

  // Prev/Next: the content remounts, so start at the top and keep focus inside the dialog
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
