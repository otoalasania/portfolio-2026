import { Section } from "../ui";
import { stack } from "../../data";
import styles from "./Stack.module.css";

export function Stack() {
  return (
    <Section id="stack" title="Stack">
      <div className={styles.row}>
        {stack.map((StackIcon, i) => (
          <StackIcon key={i} />
        ))}
      </div>
    </Section>
  );
}
