import type { MetadataRoute } from "next"
import { PROJECTS } from "@/lib/project-data"

const SITE_URL = "https://x-house-immobilier.com"

export default function sitemap(): MetadataRoute.Sitemap {
  const services = PROJECTS.map((project) => ({
    url: `${SITE_URL}/work/${project.id}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }))

  return [
    {
      url: SITE_URL,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    ...services,
  ]
}
