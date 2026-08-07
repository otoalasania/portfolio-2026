import { SectionLabel, MockCard } from "../ui";
import styles from "./Work.module.css";

export function Work() {
  return (
    <section id="work" className={styles.section}>
      <SectionLabel>Work</SectionLabel>
      <p className={styles.subtitle}>
        Below are some select projects, full walkthroughs on request
      </p>

      <div
        className={styles.stage}
        style={{
          backgroundImage:
            "radial-gradient(rgba(255,255,255,0.12) 1px, transparent 1px)",
          backgroundSize: "18px 18px",
        }}
      >
        <MockCard rotate={-8} dark className={styles.card} />
        <MockCard rotate={4} dark={false} className={styles.cardFront} />
        <MockCard rotate={-3} dark className={styles.card} />
        <MockCard rotate={7} dark={false} />
      </div>
    </section>
  );
}
