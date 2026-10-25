"use client";

import { useEffect, useState } from "react";
import { useCvDownloads } from "../../lib/cv";
import { useLocale } from "../../i18n/LocaleContext";
import { ArrowDownIcon } from "../icons";
import { Toast } from "../Toast/Toast";

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
    <Toast id={shown} icon={<ArrowDownIcon size={12} />}>
      {t.cv.toast}
    </Toast>
  );
}
