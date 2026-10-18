"use client";

import Image from "next/image";
import { motion, type Variants } from "motion/react";
import { profile } from "../../data";
import styles from "./CompanyTag.module.css";

const logoPop: Variants = {
  rest: { scale: 1, rotate: 0 },
  hover: { scale: 1.15, rotate: -8, transition: { type: "spring", stiffness: 400, damping: 12 } },
};

export function CompanyTag({ className }: { className?: string }) {
  const { company } = profile;

  return (
    <motion.a
      href={company.url}
      target="_blank"
      rel="noopener noreferrer"
      className={`${styles.tag} ${className ?? ""}`}
      initial="rest"
      animate="rest"
      whileHover="hover"
      whileFocus="hover"
    >
      <motion.span className={styles.logo} variants={logoPop}>
        <Image src={company.logo} alt="" width={14} height={14} style={{ objectFit: "contain" }} />
      </motion.span>
      {company.name}
    </motion.a>
  );
}
