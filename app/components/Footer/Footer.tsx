import { getWeather } from "../../lib/weather";
import { Signature } from "./Signature";
import { FooterMeta } from "./FooterMeta";
import styles from "./Footer.module.css";

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
