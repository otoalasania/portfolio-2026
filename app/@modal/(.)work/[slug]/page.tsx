import { notFound } from "next/navigation";
import { ProjectDetail } from "../../../components/ProjectDetail/ProjectDetail";
import { findProject } from "../../../data";
import type { WorkParams } from "../../../lib/workRoute";

export { generateStaticParams, generateMetadata } from "../../../lib/workRoute";
export const dynamicParams = false;

export default async function InterceptedWorkPage({ params }: WorkParams) {
  const { slug } = await params;
  if (!findProject(slug)) notFound();
  // keyed so per-project state (active screenshot) resets on Prev/Next
  return <ProjectDetail key={slug} slug={slug} />;
}
