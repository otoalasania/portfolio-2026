import { notFound } from "next/navigation";
import { ProjectDetail } from "../../components/ProjectDetail/ProjectDetail";
import { findProject } from "../../data";
import type { WorkParams } from "../../lib/workRoute";
import homeStyles from "../../components/PortfolioHome/PortfolioHome.module.css";

export { generateStaticParams, generateMetadata } from "../../lib/workRoute";
export const dynamicParams = false;

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
