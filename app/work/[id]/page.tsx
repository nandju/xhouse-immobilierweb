import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { ProjectDetail } from "@/components/project-detail"
import { MainLayout } from "@/components/main-layout"
import { PROJECTS, getProjectById } from "@/lib/project-data"

const SITE_URL = "https://x-house-immobilier.com"

export function generateStaticParams() {
  return PROJECTS.map((project) => ({
    id: project.id,
  }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>
}): Promise<Metadata> {
  const { id } = await params
  const project = getProjectById(id)

  if (!project) {
    return { title: "Service introuvable" }
  }

  const title = `${project.title} | X-HOUSE IMMOBILIER`
  const description = project.overview.content
  const url = `${SITE_URL}/work/${project.id}`

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      url,
      title,
      description,
      images: [{ url: project.heroImage, width: 1200, height: 900, alt: project.title }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [project.heroImage],
    },
  }
}

export default async function ProjectPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const project = getProjectById(id)

  if (!project) {
    notFound()
  }

  return (
    <MainLayout>
      <ProjectDetail project={project} />
    </MainLayout>
  )
}
