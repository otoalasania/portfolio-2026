"use client";

import { useRef } from "react";
import dynamic from "next/dynamic";
import { useInView } from "motion/react";
import styles from "./Footer.module.css";

const SignatureInk = dynamic(() => import("./SignatureInk"), { ssr: false });

export function Signature() {
  const ref = useRef<HTMLDivElement>(null);
  const near = useInView(ref, { once: true, margin: "0px 0px 400px 0px" });
  const visible = useInView(ref, { once: true, amount: 0.6 });

  return (
    <div ref={ref} className={styles.signature} role="img" aria-label="Otar Alasania">
      {near && <SignatureInk playing={visible} className={styles.signatureInk} />}
    </div>
  );
}
