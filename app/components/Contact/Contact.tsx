"use client";

import { useActionState, useEffect, useId, useRef, useState, useSyncExternalStore } from "react";
import { Section } from "../ui";
import { ArrowUpRight } from "../icons";
import { socials } from "../../data";
import { useLocale } from "../../i18n/LocaleContext";
import { sendMessage, type ContactField, type ContactState } from "../../actions/sendMessage";
import styles from "./Contact.module.css";

const EMPTY_FORM = { name: "", email: "", message: "" };

function subscribeNoop() {
  return () => {};
}

function isApplePlatform() {
  return /Mac|iPhone|iPad|iPod/.test(navigator.platform || navigator.userAgent);
}

export function Contact() {
  const { t } = useLocale();
  const id = useId();
  const formRef = useRef<HTMLFormElement>(null);
  const startedAt = useRef(0);
  const [form, setForm] = useState(EMPTY_FORM);
  const isApple = useSyncExternalStore(subscribeNoop, isApplePlatform, () => false);

  useEffect(() => {
    startedAt.current = Date.now();
  }, []);

  const [state, formAction, pending] = useActionState(async (prev: ContactState, formData: FormData) => {
    formData.set("startedAt", String(startedAt.current));
    const result = await sendMessage(prev, formData);
    if (result.status === "success") setForm(EMPTY_FORM);
    return result;
  }, { status: "idle" } as ContactState);

  const errors = state.status === "invalid" ? state.errors : {};

  function fieldProps(field: ContactField) {
    const error = errors[field];
    const errorId = `${id}-${field}-error`;
    return {
      id: `${id}-${field}`,
      name: field,
      value: form[field],
      onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
        setForm((f) => ({ ...f, [field]: e.target.value })),
      placeholder: t.contact[`${field}Placeholder`],
      "aria-invalid": error ? true : undefined,
      "aria-describedby": error ? errorId : undefined,
    };
  }

  function fieldError(field: ContactField) {
    const error = errors[field];
    if (!error) return null;
    const messages: Record<string, string> = t.contact.errors[field];
    return (
      <p id={`${id}-${field}-error`} className={styles.fieldError}>
        {messages[error]}
      </p>
    );
  }

  return (
    <Section id="contact" title={t.contact.title} subtitle={t.contact.subtitle}>
      <form
        ref={formRef}
        action={formAction}
        noValidate
        onKeyDown={(e) => {
          if (e.key === "Enter" && (e.metaKey || e.ctrlKey)) {
            e.preventDefault();
            if (!pending) formRef.current?.requestSubmit();
          }
        }}
        className={styles.form}
      >
        <div className={styles.fieldGrid}>
          <div className={styles.field}>
            <label htmlFor={`${id}-name`} className={styles.visuallyHidden}>
              {t.contact.nameLabel}
            </label>
            <input {...fieldProps("name")} autoComplete="name" maxLength={100} className={styles.input} />
            {fieldError("name")}
          </div>
          <div className={styles.field}>
            <label htmlFor={`${id}-email`} className={styles.visuallyHidden}>
              {t.contact.emailLabel}
            </label>
            <input
              {...fieldProps("email")}
              type="email"
              autoComplete="email"
              maxLength={200}
              className={styles.input}
            />
            {fieldError("email")}
          </div>
        </div>
        <div className={styles.field}>
          <label htmlFor={`${id}-message`} className={styles.visuallyHidden}>
            {t.contact.messageLabel}
          </label>
          <textarea {...fieldProps("message")} rows={5} maxLength={5000} className={styles.textarea} />
          {fieldError("message")}
        </div>

        <div className={styles.visuallyHidden} aria-hidden="true">
          <label htmlFor={`${id}-website`}>Website</label>
          <input id={`${id}-website`} name="website" type="text" tabIndex={-1} autoComplete="off" defaultValue="" />
        </div>

        <div className={styles.formFooter}>
          <button type="submit" className={styles.submit} disabled={pending}>
            {pending ? t.contact.sending : t.contact.send}
          </button>
          <span className={styles.hint}>
            {t.contact.orPrefix} <kbd className={styles.hintKbd}>{isApple ? "⌘ ↵" : "Ctrl ↵"}</kbd>{" "}
            {t.contact.orEnterToSend}
          </span>
        </div>

        <p className={styles.status} aria-live="polite">
          {!pending && state.status === "success" && t.contact.success}
          {!pending && state.status === "error" && t.contact.error}
        </p>
      </form>

      <div className={styles.socials}>
        {socials.map((s) => (
          <a
            key={s.label}
            href={s.href}
            className={styles.socialRow}
            {...(s.href.startsWith("http") && { target: "_blank", rel: "noopener noreferrer" })}
          >
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
