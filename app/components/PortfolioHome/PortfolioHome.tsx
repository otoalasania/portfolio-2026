import { LocaleProvider } from "../../i18n/LocaleContext";
import { Header } from "../Header/Header";
import { Profile } from "../Profile/Profile";
import { Work } from "../Work/Work";
import { Experience } from "../Experience/Experience";
import { Skills } from "../Skills/Skills";
import { Stack } from "../Stack/Stack";
import { Ventures } from "../Ventures/Ventures";
import { Writing } from "../Writing/Writing";
import { Personal } from "../Personal/Personal";
import { Contact } from "../Contact/Contact";
import { Footer } from "../Footer/Footer";
import { Dock } from "../Dock/Dock";
import styles from "./PortfolioHome.module.css";

export default function PortfolioHome() {
  return (
    <LocaleProvider>
      <div className={styles.page}>
        <div className={styles.content}>
          <Header />
          <Profile />
          <Work />
          <Experience />
          <Skills />
          <Stack />
          <Ventures />
          <Writing />
          <Personal />
          <Contact />
          <Footer />
        </div>

        <Dock />
      </div>
    </LocaleProvider>
  );
}
