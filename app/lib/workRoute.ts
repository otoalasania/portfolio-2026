import type { Metadata } from "next";
import { allProjects, findProject } from "../data";
import { translations } from "../i18n/translations";
import { pageMetadata } from "./seo";

export type WorkParams = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return allProjects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: WorkParams): Promise<Metadata> {
  const found = findProject((await params).slug);
  if (!found) return {};
  const { slug, title } = found.project;
  return pageMetadata({ title, description: translations.en.work.items[slug].tagline, path: `/work/${slug}` });
}
