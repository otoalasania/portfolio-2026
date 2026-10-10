"use client";

import { MotionConfig } from "motion/react";
import { LocaleProvider } from "../i18n/LocaleContext";

// Lives in the root layout (not PortfolioHome) so the @modal slot and /work/[slug]
// share the same locale state as the home page across client navigations.
export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <MotionConfig reducedMotion="user">
      <LocaleProvider>{children}</LocaleProvider>
    </MotionConfig>
  );
}
