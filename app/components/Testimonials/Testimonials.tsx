import { SectionLabel } from "../ui";
import { testimonials } from "../../data";
import styles from "./Testimonials.module.css";

export function Testimonials() {
  return (
    <section id="testimonials" className={styles.section}>
      <SectionLabel>Testimonials</SectionLabel>

      <div
        className={styles.row}
        style={{
          maskImage: "linear-gradient(to right, black 65%, transparent 100%)",
          WebkitMaskImage: "linear-gradient(to right, black 65%, transparent 100%)",
        }}
      >
        {testimonials.map((t, i) => (
          <div key={t.name} className={`${styles.card} ${i === 0 ? "" : styles.cardFaded}`}>
            <p className={styles.quote}>&ldquo;{t.quote}&rdquo;</p>
            <div className={styles.author}>
              <span className={styles.avatar} style={{ backgroundColor: t.avatarColor }} />
              <div>
                <p className={styles.name}>{t.name}</p>
                <p className={styles.role}>{t.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
