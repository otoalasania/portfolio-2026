import { notFound } from "next/navigation";
import { ProjectDetail } from "../../components/ProjectDetail/ProjectDetail";
import { findProject } from "../../data";
import type { WorkParams } from "../../lib/workRoute";
import homeStyles from "../../components/PortfolioHome/PortfolioHome.module.css";

export { generateStaticParams, generateMetadata } from "../../lib/workRoute";
export const dynamicParams = false;

// Direct visit / refresh: same content as the sheet, in the normal 640px content column
export default async function WorkPage({ params }: WorkParams) {
  const { slug } = await params;
  if (!findProject(slug)) notFound();
  return (
    <main className={homeStyles.page}>
      <div className={homeStyles.content}>
        <ProjectDetail slug={slug} />
      </div>
    </main>
  );
}
