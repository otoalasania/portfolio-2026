import { SectionLabel } from "../ui";
import { stack } from "../../data";
import styles from "./Stack.module.css";

export function Stack() {
  return (
    <section id="stack" className={styles.section}>
      <SectionLabel>Stack</SectionLabel>
      <div className={styles.row}>
        {stack.map((StackIcon, i) => (
          <StackIcon key={i} />
        ))}
      </div>
    </section>
  );
}
