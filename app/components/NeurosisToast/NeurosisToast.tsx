"use client";

import { useEffect, useState } from "react";
import { useNeurosisEndings } from "../../lib/neurosis";
import { useLocale } from "../../i18n/LocaleContext";
import { Toast } from "../Toast/Toast";

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

  return <Toast id={shown}>{t.personal.backToWork}</Toast>;
}
