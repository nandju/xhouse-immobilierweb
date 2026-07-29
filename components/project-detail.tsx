"use client"
import { ArrowLeft } from "lucide-react"
import { motion } from "framer-motion"
import { ArrowRight, Home } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { getNextProject } from "@/lib/project-data"
import { ContactForm } from "./contact-form"

interface ProjectData {
  id: string
  title: string
  year: string
  services: string[]
  linkText: string
  linkUrl: string
  overview: { title: string; content: string }
  direction: { title: string; content: string }
  outcome: { title: string; content: string }
  heroImage: string
  galleryImages: string[]
  nextProject: string
}

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.6, ease: "easeOut" },
} as const

export function ProjectDetail({ project }: { project: ProjectData }) {
  const nextProject = getNextProject(project.id)

  return (
    <div className="bg-background overflow-x-hidden">
      <div className="max-w-[800px] mx-auto px-6 py-12">
        <Link
          href="/"
          className="inline-flex items-center gap-2 mb-8 text-sm text-foreground/70 hover:text-[#C59800] transition-colors"
        >
          <ArrowLeft aria-hidden="true" className="w-4 h-4" />
          Retour à l'accueil
        </Link>

        {/* Back Link */}
        <Link
          href="/"
          className="fixed bottom-6 right-6 z-50 w-12 h-12 bg-[#C59800] text-[#08101A] rounded-full flex items-center justify-center shadow-lg hover:bg-[#e0ac00] transition-colors"
          aria-label="Retour à l'accueil"
        >
          <Home aria-hidden="true" className="w-5 h-5" />
        </Link>

        {/* Header Section */}
        <motion.header className="mb-12" {...fadeInUp}>
          <h1 className="text-[32px] font-semibold text-foreground mb-6">{project.title}</h1>

          <div className="flex flex-wrap gap-x-12 gap-y-4 text-sm">
            <div>
              <span className="text-foreground/50 block mb-1">Catégorie</span>
              <span className="text-foreground">{project.year}</span>
            </div>

            <div>
              <span className="text-foreground/50 block mb-1">Fonctionnalités</span>
              <div className="flex gap-2">
                {project.services.map((service) => (
                  <span key={service} className="text-foreground">
                    {service}
                  </span>
                ))}
              </div>
            </div>

            <div className="ml-auto">
              <span className="text-foreground/50 block mb-1">Plateforme</span>
              <a href={project.linkUrl} target="_blank" rel="noopener noreferrer" className="text-[#C59800] hover:underline">
                {project.linkText}
              </a>
            </div>
          </div>
        </motion.header>

        {/* Hero Image */}
        <motion.div className="relative mb-12 rounded-2xl overflow-hidden aspect-[4/3]" {...fadeInUp}>
          <Image
            src={project.heroImage || "/placeholder.svg"}
            alt={`${project.title} – X-HOUSE IMMOBILIER`}
            fill
            priority
            sizes="(max-width: 800px) 100vw, 800px"
            className="object-cover"
          />
        </motion.div>

        {/* Overview Text */}
        <motion.section className="mb-12 max-w-[500px]" {...fadeInUp}>
          <h2 className="text-lg font-semibold text-foreground mb-3">{project.overview.title}</h2>
          <p className="text-sm text-foreground/70 leading-relaxed">{project.overview.content}</p>
        </motion.section>

        {/* Gallery Images */}
        <div className="space-y-6 mb-12">
          {project.galleryImages.map((src, index) => (
            <motion.div key={index} className="relative rounded-2xl overflow-hidden aspect-[4/3]" {...fadeInUp}>
              <Image
                src={src || "/placeholder.svg"}
                alt={`${project.title} – illustration ${index + 1}`}
                fill
                loading="lazy"
                sizes="(max-width: 800px) 100vw, 800px"
                className="object-cover"
              />
            </motion.div>
          ))}
        </div>

        {/* Direction Text */}
        <motion.section className="mb-12 max-w-[500px]" {...fadeInUp}>
          <h2 className="text-lg font-semibold text-foreground mb-3">{project.direction.title}</h2>
          <p className="text-sm text-foreground/70 leading-relaxed">{project.direction.content}</p>
        </motion.section>

        {/* Outcome Text */}
        <motion.section className="mb-16 max-w-[500px]" {...fadeInUp}>
          <h2 className="text-lg font-semibold text-foreground mb-3">{project.outcome.title}</h2>
          <p className="text-sm text-foreground/70 leading-relaxed">{project.outcome.content}</p>
        </motion.section>

        {/* Navigation Section */}
        <motion.div className="flex justify-center mb-24" {...fadeInUp}>
          <Link
            href={`/work/${nextProject.id}`}
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#C59800] text-[#08101A] rounded-full text-sm font-medium hover:bg-[#e0ac00] transition-colors"
          >
            {nextProject.title}
            <ArrowRight aria-hidden="true" className="w-4 h-4" />
          </Link>
        </motion.div>

        {/* Contact Section */}
        <ContactForm />

        {/* Footer Logo Section */}
        <motion.div
          className="w-full pt-24 pb-12 flex justify-center items-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.1 }}
          transition={{ duration: 1 }}
        >
          <div className="text-[80px] md:text-[120px] font-bold text-[#C59800] tracking-tighter select-none">
            X-HOUSE
          </div>
        </motion.div>
      </div>
    </div>
  )
}
