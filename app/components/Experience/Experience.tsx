import { SectionLabel, Tile } from "../ui";
import { experience } from "../../data";
import styles from "./Experience.module.css";

export function Experience() {
  return (
    <section id="experience" className={styles.section}>
      <SectionLabel>Experience</SectionLabel>
      <p className={styles.subtitle}>
        Throughout my career, I&rsquo;ve worked on various projects, from
        building scalable systems to designing user-friendly interfaces.
        Here&rsquo;s a brief overview.
      </p>

      <div className={styles.list}>
        {experience.map((e) => (
          <div key={`${e.company.name}-${e.range}`} className={styles.row}>
            <span className={styles.range}>{e.range}</span>
            <div>
              <div className={styles.roleRow}>
                <h3>{e.role} at</h3>
                <Tile color={e.company.color}>{e.company.name[0]}</Tile>
                <span>{e.company.name}</span>
              </div>
              {e.desc && <p className={styles.desc}>{e.desc}</p>}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
