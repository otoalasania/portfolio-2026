"use client";

import { useState } from "react";
import { Section } from "../ui";
import { ArrowUpRight } from "../icons";
import { EMAIL, socials } from "../../data";
import styles from "./Contact.module.css";

export function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  function sendMessage() {
    const subject = encodeURIComponent(`Portfolio contact from ${form.name || "someone"}`);
    const body = encodeURIComponent(
      `${form.message}\n\n— ${form.name || "unknown"} (${form.email || "no email given"})`
    );
    window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;
  }

  return (
    <Section
      id="contact"
      title="Contact"
      subtitle="You can contact me using the form or via the links below."
    >
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
            placeholder="Name"
            className={styles.input}
          />
          <input
            value={form.email}
            onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
            placeholder="Email"
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
          placeholder="Message"
          rows={5}
          className={styles.textarea}
        />
        <div className={styles.formFooter}>
          <button type="submit" className={styles.submit}>
            Send message
          </button>
          <span className={styles.hint}>
            or <kbd className={styles.hintKbd}>⏎</kbd> to send
          </span>
        </div>
      </form>

      <div className={styles.socials}>
        {socials.map((s) => (
          <a key={s.label} href={s.href} className={styles.socialRow}>
            <span className={styles.socialLabel}>
              <s.icon />
              {s.label}
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
