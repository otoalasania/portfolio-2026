import styles from "./ui.module.css";

export function SectionLabel({ children }: { children: React.ReactNode }) {
  return <p className={styles.sectionLabel}>{children}</p>;
}

export function Section({
  id,
  title,
  subtitle,
  style,
  children,
}: {
  id: string;
  title: string;
  subtitle?: React.ReactNode;
  style?: React.CSSProperties;
  children?: React.ReactNode;
}) {
  return (
    <section id={id} className={styles.section} style={style}>
      <SectionLabel>{title}</SectionLabel>
      {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
      {children}
    </section>
  );
}

export function MockCard({
  rotate,
  dark,
  className = "",
}: {
  rotate: number;
  dark: boolean;
  className?: string;
}) {
  return (
    <div
      style={{ transform: `rotate(${rotate}deg)` }}
      className={`${styles.mockCard} ${dark ? styles.mockCardDark : styles.mockCardLight} ${className}`}
    >
      <div className={`${styles.mockCardInner} ${dark ? styles.mockCardInnerDark : styles.mockCardInnerLight}`}>
        <div className={`${styles.bar} ${styles.barTitle} ${dark ? styles.barTitleDark : styles.barTitleLight}`} />
        <div className={`${styles.bar} ${styles.barLine1} ${dark ? styles.barDark : styles.barLight}`} />
        <div className={`${styles.bar} ${styles.barLine2} ${dark ? styles.barDark : styles.barLight}`} />
        <div className={`${styles.bar} ${styles.barGhost} ${dark ? styles.barGhostDark : styles.barGhostLight}`} />
      </div>
    </div>
  );
}

export function Tile({ color, children }: { color: string; children: React.ReactNode }) {
  return (
    <span className={styles.tile} style={{ backgroundColor: color }}>
      {children}
    </span>
  );
}
