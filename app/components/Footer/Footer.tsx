import { getWeather } from "../../lib/weather";
import { Signature } from "./Signature";
import { FooterMeta } from "./FooterMeta";
import styles from "./Footer.module.css";

// Server component: the weather is fetched (and cached for 30 min) at render time,
// so there's no client fetch, loading state or layout shift.
export async function Footer() {
  const weather = await getWeather();

  return (
    <footer className={styles.footer}>
      <Signature />
      <p className={styles.copyright}>© {new Date().getFullYear()}</p>
      <FooterMeta weather={weather} />
    </footer>
  );
}
