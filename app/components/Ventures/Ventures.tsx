import { SectionLabel } from "../ui";
import { ArrowUpRight } from "../icons";
import { ventures } from "../../data";
import styles from "./Ventures.module.css";

export function Ventures() {
  return (
    <section id="ventures" className={styles.section}>
      <SectionLabel>Ventures</SectionLabel>
      <div className={styles.list}>
        {ventures.map((v) => (
          <a key={v.name} href={v.href} className={styles.row}>
            <div className={styles.left}>
              <span className={styles.icon} style={{ backgroundColor: v.color }}>
                <v.icon />
              </span>
              <div>
                <p className={styles.name}>{v.name}</p>
                <p className={styles.desc}>{v.desc}</p>
              </div>
            </div>
            <ArrowUpRight />
          </a>
        ))}
      </div>
    </section>
  );
}
