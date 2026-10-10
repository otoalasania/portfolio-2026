"use server";

import { Resend } from "resend";
import { EMAIL } from "../data";

export type ContactField = "name" | "email" | "message";
export type ContactFieldError = "required" | "tooLong" | "tooShort" | "invalid";

export type ContactState =
  | { status: "idle" }
  | { status: "success" }
  | { status: "invalid"; errors: Partial<Record<ContactField, ContactFieldError>> }
  | { status: "error" };

// TODO: switch to a verified domain address (e.g. hello@otoalasania.com) once the domain is set up in Resend.
const FROM = "Portfolio <onboarding@resend.dev>";
const MIN_FILL_MS = 3000;
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

function text(formData: FormData, key: string) {
  const value = formData.get(key);
  return typeof value === "string" ? value.trim() : "";
}

function singleLine(value: string) {
  return value.replace(/[\r\n\t\u0000-\u001f\u007f]+/g, " ");
}

function validate(name: string, email: string, message: string) {
  const errors: Partial<Record<ContactField, ContactFieldError>> = {};
  if (!name) errors.name = "required";
  else if (name.length > 100) errors.name = "tooLong";
  if (!email) errors.email = "required";
  else if (email.length > 200) errors.email = "tooLong";
  else if (!EMAIL_PATTERN.test(email)) errors.email = "invalid";
  if (!message) errors.message = "required";
  else if (message.length < 10) errors.message = "tooShort";
  else if (message.length > 5000) errors.message = "tooLong";
  return errors;
}

export async function sendMessage(_prev: ContactState, formData: FormData): Promise<ContactState> {
  // TODO: add Cloudflare Turnstile if spam gets past the honeypot and timing check.
  const honeypot = text(formData, "website");
  const startedAt = Number(text(formData, "startedAt"));
  if (honeypot || !Number.isFinite(startedAt) || Date.now() - startedAt < MIN_FILL_MS) {
    return { status: "success" };
  }

  const name = singleLine(text(formData, "name"));
  const email = singleLine(text(formData, "email"));
  const message = text(formData, "message");

  const errors = validate(name, email, message);
  if (Object.keys(errors).length > 0) return { status: "invalid", errors };

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("Contact form: RESEND_API_KEY is not set");
    return { status: "error" };
  }

  try {
    const { error } = await new Resend(apiKey).emails.send({
      from: FROM,
      to: EMAIL,
      replyTo: email,
      subject: `Portfolio message from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
    });
    if (error) {
      console.error(`Contact form: Resend rejected the email (${error.name}): ${error.message}`);
      return { status: "error" };
    }
    return { status: "success" };
  } catch (err) {
    console.error("Contact form: request to Resend failed", err instanceof Error ? err.message : err);
    return { status: "error" };
  }
}
