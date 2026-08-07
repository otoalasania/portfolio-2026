"use client";

import { useEffect, useState } from "react";
import { CheckBadge } from "../icons";
import { Tile } from "../ui";
import { EMAIL, profile } from "../../data";
import styles from "./Profile.module.css";

export function Profile() {
  const [copied, setCopied] = useState(false);

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      // clipboard API unavailable — ignore
    }
  }

  useEffect(() => {
    function handleKey(e: KeyboardEvent) {
      const tag = (document.activeElement?.tagName || "").toLowerCase();
      if (tag === "input" || tag === "textarea") return;
      if (e.key.toLowerCase() === "c") copyEmail();
    }
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  return (
    <div className={styles.wrapper}>
      <div className={styles.avatarBox}>
        <div className={styles.avatarInner}>JV</div>
        <span className={styles.statusDot} />
      </div>

      <div className={styles.nameRow}>
        <h1 className={styles.name}>{profile.name}</h1>
        <CheckBadge />
      </div>
      <p className={styles.role}>{profile.role}</p>

      <p className={styles.bio}>
        {profile.bioBefore}{" "}
        <span className={styles.company}>
          {profile.company.name}
          <Tile color={profile.company.color}>{profile.company.name[0]}</Tile>
        </span>{" "}
        {profile.bioAfter}
      </p>

      <button type="button" onClick={copyEmail} className={styles.copyButton}>
        {copied ? (
          "Copied!"
        ) : (
          <>
            Press <kbd className={styles.kbd}>C</kbd> to copy my email
          </>
        )}
      </button>
    </div>
  );
}
