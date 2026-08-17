"use client";

import { useState } from "react";
import { Section } from "../ui";
import { ArrowUpRight } from "../icons";
import { EMAIL, socials } from "../../data";
import { useLocale } from "../../i18n/LocaleContext";
import styles from "./Contact.module.css";

export function Contact() {
  const { t } = useLocale();
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  function sendMessage() {
    const m = t.contact.mailto;
    const subject = encodeURIComponent(`${m.subjectPrefix} ${form.name || m.someone}`);
    const body = encodeURIComponent(
      `${form.message}\n\n— ${form.name || m.unknown} (${form.email || m.noEmailGiven})`
    );
    window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;
  }

  return (
    <Section id="contact" title={t.contact.title} subtitle={t.contact.subtitle}>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          sendMessage();
        }}
        className={styles.form}
      >
        <div className={styles.fieldGrid}>
          <input
            value={form.name}
            onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
            placeholder={t.contact.namePlaceholder}
            className={styles.input}
          />
          <input
            value={form.email}
            onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
            placeholder={t.contact.emailPlaceholder}
            type="email"
            className={styles.input}
          />
        </div>
        <textarea
          value={form.message}
          onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
          onKeyDown={(e) => {
            if (e.key === "Enter" && !e.shiftKey) {
              e.preventDefault();
              sendMessage();
            }
          }}
          placeholder={t.contact.messagePlaceholder}
          rows={5}
          className={styles.textarea}
        />
        <div className={styles.formFooter}>
          <button type="submit" className={styles.submit}>
            {t.contact.send}
          </button>
          <span className={styles.hint}>
            {t.contact.orPrefix} <kbd className={styles.hintKbd}>⏎</kbd> {t.contact.orEnterToSend}
          </span>
        </div>
      </form>

      <div className={styles.socials}>
        {socials.map((s) => (
          <a key={s.label} href={s.href} className={styles.socialRow}>
            <span className={styles.socialLabel}>
              <s.icon size={20} />
              {t.contact.socialLabels[s.label] ?? s.label}
            </span>
            <span className={styles.socialValue}>
              {s.value}
              <ArrowUpRight />
            </span>
          </a>
        ))}
      </div>
    </Section>
  );
}
