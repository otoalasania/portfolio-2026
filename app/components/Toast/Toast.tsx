"use client";

import { AnimatePresence, motion } from "motion/react";
import styles from "./Toast.module.css";

export function ToastRegion({ children }: { children: React.ReactNode }) {
  return (
    <div className={styles.region} role="status" aria-live="polite">
      {children}
    </div>
  );
}

export function Toast({ id, icon, children }: { id: number; icon?: React.ReactNode; children: React.ReactNode }) {
  return (
    <AnimatePresence>
      {id > 0 && (
        <motion.p
          key={id}
          layout="position"
          className={styles.toast}
          initial={{ opacity: 0, y: -8, filter: "blur(4px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          exit={{ opacity: 0, y: -8, filter: "blur(4px)" }}
          transition={{ type: "spring", stiffness: 300, damping: 24 }}
        >
          {icon}
          {children}
        </motion.p>
      )}
    </AnimatePresence>
  );
}
