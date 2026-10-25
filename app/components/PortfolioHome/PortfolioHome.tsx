import { Header } from "../Header/Header";
import { Profile } from "../Profile/Profile";
import { Work } from "../Work/Work";
import { ProjectIndex } from "../ProjectIndex/ProjectIndex";
import { Experience } from "../Experience/Experience";
import { Stack } from "../Stack/Stack";
import { Personal } from "../Personal/Personal";
import { Contact } from "../Contact/Contact";
import { Footer } from "../Footer/Footer";
import { Dock } from "../Dock/Dock";
import { ToastRegion } from "../Toast/Toast";
import { NeurosisToast } from "../NeurosisToast/NeurosisToast";
import { CvToast } from "../CvToast/CvToast";
import styles from "./PortfolioHome.module.css";

export default function PortfolioHome() {
  return (
    <div className={styles.page} data-neurosis-beat>
      <div className={styles.content}>
        <Header />
        <Profile />
        <Work />
        <ProjectIndex />
        <Experience />
        <Stack />
        <Personal />
        <Contact />
        <Footer />
      </div>

      <Dock />
      <ToastRegion>
        <NeurosisToast />
        <CvToast />
      </ToastRegion>
    </div>
  );
}
