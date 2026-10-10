import { ProjectSheet } from "../../components/ProjectSheet/ProjectSheet";

// Shell lives in the layout so Prev/Next (a new [slug] page) doesn't replay the slide-up
export default function Layout({ children }: { children: React.ReactNode }) {
  return <ProjectSheet>{children}</ProjectSheet>;
}
