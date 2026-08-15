import Image from "next/image";
import { Section } from "../ui";
import { stack } from "../../data";
import styles from "./Stack.module.css";

export function Stack() {
  return (
    <Section id="stack" title="Stack">
      <div className={styles.row}>
        {stack.map((item) => (
          <Image key={item.src} src={item.src} alt={item.alt} width={40} height={40} />
        ))}
      </div>
    </Section>
  );
}
