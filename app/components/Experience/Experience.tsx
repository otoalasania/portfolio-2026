import { Section, Tile } from "../ui";
import { experience } from "../../data";
import styles from "./Experience.module.css";

export function Experience() {
  return (
    <Section
      id="experience"
      title="Experience"
      subtitle="Throughout my career, I’ve worked on various projects, from building scalable systems to designing user-friendly interfaces. Here’s a brief overview."
      style={{ marginTop: 80 }}
    >
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
    </Section>
  );
}
