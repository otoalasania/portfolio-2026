import { Section } from "../ui";
import { ClockIcon } from "../icons";
import { writing } from "../../data";
import styles from "./Writing.module.css";

export function Writing() {
  return (
    <Section id="writing" title="Writing">
      <div className={styles.list}>
        {writing.map((w) => (
          <div key={w.title} className={styles.row}>
            <span className={styles.date}>{w.date}</span>
            <span className={styles.title}>{w.title}</span>
            <span className={styles.duration}>
              <ClockIcon />
              {w.minutes} m
            </span>
          </div>
        ))}
      </div>
    </Section>
  );
}
