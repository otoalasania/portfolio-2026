import { Header } from "../Header/Header";
import { Profile } from "../Profile/Profile";
import { Work } from "../Work/Work";
import { ProjectIndex } from "../ProjectIndex/ProjectIndex";
import { Experience } from "../Experience/Experience";
import { Skills } from "../Skills/Skills";
import { Stack } from "../Stack/Stack";
import { Ventures } from "../Ventures/Ventures";
import { Writing } from "../Writing/Writing";
import { Personal } from "../Personal/Personal";
import { Contact } from "../Contact/Contact";
import { Footer } from "../Footer/Footer";
import { Dock } from "../Dock/Dock";
import { HIDDEN_SECTIONS } from "../../data";
import styles from "./PortfolioHome.module.css";

const shown = (id: string) => !HIDDEN_SECTIONS.has(id);

export default function PortfolioHome() {
  return (
    <div className={styles.page}>
      <div className={styles.content}>
        <Header />
        <Profile />
        <Work />
        <ProjectIndex />
        <Experience />
        {shown("skills") && <Skills />}
        <Stack />
        {shown("ventures") && <Ventures />}
        {shown("writing") && <Writing />}
        <Personal />
        <Contact />
        <Footer />
      </div>

      <Dock />
    </div>
  );
}
