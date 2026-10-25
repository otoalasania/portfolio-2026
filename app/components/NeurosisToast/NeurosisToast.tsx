"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { useNeurosisEndings } from "../../lib/neurosis";
import { useLocale } from "../../i18n/LocaleContext";
import styles from "./NeurosisToast.module.css";

export function NeurosisToast() {
  const { t } = useLocale();
  const endings = useNeurosisEndings();
  const [shown, setShown] = useState(0);

  useEffect(() => {
    if (endings === 0) return;
    const show = setTimeout(() => setShown(endings), 500);
    const hide = setTimeout(() => setShown(0), 3000);
    return () => {
      clearTimeout(show);
      clearTimeout(hide);
    };
  }, [endings]);

  return (
    <div className={styles.anchor} role="status" aria-live="polite">
      <AnimatePresence>
        {shown > 0 && (
          <motion.p
            key={shown}
            className={styles.toast}
            initial={{ opacity: 0, y: -8, filter: "blur(4px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            exit={{ opacity: 0, y: -8, filter: "blur(4px)" }}
            transition={{ type: "spring", stiffness: 300, damping: 24 }}
          >
            {t.personal.backToWork}
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  );
}
