import { ProjectSheet } from "../../components/ProjectSheet/ProjectSheet";

export default function Layout({ children }: { children: React.ReactNode }) {
  return <ProjectSheet>{children}</ProjectSheet>;
}
