import type { MetadataRoute } from "next";
import { SITE_URL, allProjects } from "./data";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return [
    { url: SITE_URL, lastModified, changeFrequency: "monthly", priority: 1 },
    ...allProjects.map((project) => ({
      url: `${SITE_URL}/work/${project.slug}`,
      lastModified,
      changeFrequency: "yearly" as const,
      priority: 0.7,
    })),
  ];
}
