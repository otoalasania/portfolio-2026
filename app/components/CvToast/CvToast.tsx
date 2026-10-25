"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { useCvDownloads } from "../../lib/cv";
import { useLocale } from "../../i18n/LocaleContext";
import { ArrowDownIcon } from "../icons";
import styles from "../NeurosisToast/NeurosisToast.module.css";

export function CvToast() {
  const { t } = useLocale();
  const downloads = useCvDownloads();
  const [dismissed, setDismissed] = useState(0);
  const shown = downloads > dismissed ? downloads : 0;

  useEffect(() => {
    if (downloads === 0) return;
    const hide = setTimeout(() => setDismissed(downloads), 2500);
    return () => clearTimeout(hide);
  }, [downloads]);

  return (
    <div className={styles.anchor} role="status" aria-live="polite">
      <AnimatePresence>
        {shown > 0 && (
          <motion.p
            key={shown}
            className={`${styles.toast} ${styles.withIcon}`}
            initial={{ opacity: 0, y: -8, filter: "blur(4px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            exit={{ opacity: 0, y: -8, filter: "blur(4px)" }}
            transition={{ type: "spring", stiffness: 300, damping: 24 }}
          >
            <ArrowDownIcon size={12} />
            {t.cv.toast}
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  );
}
