"use client";

import { MotionConfig } from "motion/react";
import { LocaleProvider } from "../i18n/LocaleContext";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <MotionConfig reducedMotion="user">
      <LocaleProvider>{children}</LocaleProvider>
    </MotionConfig>
  );
}
