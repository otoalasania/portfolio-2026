"use client";

import { Section } from "../ui";
import { stack } from "../../data";
import { useLocale } from "../../i18n/LocaleContext";
import styles from "./Stack.module.css";

export function Stack() {
  const { t } = useLocale();

  return (
    <Section id="stack" title={t.stack.title}>
      <div className={styles.row}>
        {stack.map(({ Icon, alt }) => (
          <Icon key={alt} className={styles.icon} role="img" aria-label={alt} />
        ))}
      </div>
    </Section>
  );
}
