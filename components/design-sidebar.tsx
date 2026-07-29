"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowRightCircle } from "lucide-react"
import { AboutModal } from "./about-modal"
import { ThemeToggle } from "./theme-toggle"
import Image from "next/image"

const PLATFORM_URL = "https://x-house-immobilier.base44.app"

// Partner logos (from /public/assets)
const TRUSTED_COMPANIES = [
  { name: "Partenaire 1", src: "/assets/images/illustrations/page-accueil/logo1.png" },
  { name: "Partenaire 2", src: "/assets/images/illustrations/page-accueil/logo2.png" },
  { name: "Partenaire 3", src: "/assets/images/illustrations/page-accueil/logo3.png" },
  { name: "Partenaire 4", src: "/assets/images/illustrations/page-accueil/logo4.png" },
  { name: "Partenaire 5", src: "/assets/images/illustrations/page-accueil/logo5.png" },
  { name: "Partenaire 6", src: "/assets/images/illustrations/page-accueil/logo6.png" },
  { name: "Partenaire 7", src: "/assets/images/illustrations/page-accueil/logo7.png" },
]

const TESTIMONIALS = [
  {
    quote:
      "Grâce à X-HOUSE IMMOBILIER, j'ai publié mon appartement en quelques minutes et trouvé un locataire sérieux en moins d'une semaine.",
    author: "Awa K.",
    role: "Propriétaire à Cocody",
  },
  {
    quote:
      "La visite virtuelle m'a permis de choisir ma villa depuis l'étranger, sans me déplacer. Une vraie plateforme immobilière digitale.",
    author: "Yves T.",
    role: "Client acquéreur",
  },
  {
    quote:
      "Le tableau de bord et le suivi des dossiers rendent la gestion de mes biens simple, rapide et transparente.",
    author: "Fatou D.",
    role: "Agent immobilier partenaire",
  },
]

// Helper for ticker items (partner logos)
const TickerItem = ({ item }: { item: (typeof TRUSTED_COMPANIES)[0] }) => (
  <div className="flex items-center justify-center h-10 px-6 whitespace-nowrap grayscale hover:grayscale-0 opacity-70 hover:opacity-100 hover:scale-110 transition-all duration-300">
    <Image src={item.src} alt={item.name} width={72} height={32} loading="lazy" className="h-8 w-auto object-contain" />
  </div>
)

export const DesignSidebar = () => {
  const [testimonialIndex, setTestimonialIndex] = useState(0)

  // Auto-rotate testimonials
  useEffect(() => {
    const timer = setInterval(() => {
      setTestimonialIndex((prev) => (prev + 1) % TESTIMONIALS.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <nav className="flex flex-col justify-between w-full h-full bg-background p-6 md:p-10 lg:p-12 pr-6 md:pr-10 lg:pr-14 overflow-y-auto overflow-x-hidden font-sans select-none">
      {/* Top Content */}
      <div className="flex flex-col gap-8 w-full">
        <div className="flex items-center justify-between w-full">
          <div className="w-10 h-10 flex items-center justify-start cursor-pointer hover:scale-105 transition-transform">
            <Image
              src="/assets/images/logo.png"
              alt="X-HOUSE IMMOBILIER"
              width={40}
              height={40}
              priority
              className="w-auto h-10"
            />
          </div>
          <ThemeToggle />
        </div>

        {/* Text + Button Section */}
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-3">
            <span className="text-[#C59800] text-xs font-semibold tracking-[0.2em] uppercase">
              Plateforme immobilière digitale
            </span>
            <h1 className="text-[28px] sm:text-[32px] md:text-[36px] lg:text-[38px] leading-[36px] sm:leading-[40px] md:leading-[42px] lg:leading-[44px] text-foreground text-balance font-semibold tracking-[-0.04em]">
              X-HOUSE IMMOBILIER, votre plateforme immobilière digitale.
            </h1>
            <p className="text-[14px] sm:text-[15px] md:text-[16px] leading-[20px] sm:leading-[21px] md:leading-[22.4px] text-foreground opacity-80 font-normal tracking-[-0.4px] text-balance">
              Recherchez, publiez et gérez vos biens en toute simplicité : achat, location, terrain, villa ou
              appartement en Côte d'Ivoire. X-HOUSE connecte propriétaires, agents et clients sur une seule
              plateforme.
            </p>
          </div>

          <div className="flex flex-col items-stretch sm:items-start gap-3">
            <a
              href={PLATFORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3.5 bg-[#C59800] text-[#08101A] shadow-[inset_0_4px_16px_1px_rgba(255,255,255,0.22),0_2px_12px_0_rgba(0,0,0,0.25)] hover:bg-[#e0ac00] transition-all cursor-pointer group"
              style={{
                borderRadius: "42px",
              }}
            >
              <span className="text-lg tracking-[-0.6px] font-medium font-display whitespace-nowrap">
                Accéder à la plateforme
              </span>
              <ArrowRightCircle aria-hidden="true" size={20} className="transition-transform duration-300 group-hover:-rotate-45" />
            </a>
            <AboutModal />
          </div>
        </div>
      </div>

      {/* Bottom Content */}
      <div className="flex flex-col gap-8 w-full mt-auto pt-8">
        {/* Ticker Section */}
        <div className="flex flex-col gap-3">
          <h3 className="text-[20px] sm:text-[22px] md:text-[24px] leading-[26px] sm:leading-[27px] md:leading-[28.8px] font-normal text-foreground tracking-[-0.01em]">
            Nos partenaires de confiance.
          </h3>

          <div className="relative h-10 w-full overflow-hidden mt-2">
            <motion.div
              className="flex absolute left-0 top-0 h-full"
              animate={{ x: ["0%", "-50%"] }}
              transition={{
                duration: 20,
                ease: "linear",
                repeat: Number.POSITIVE_INFINITY,
              }}
            >
              {[...TRUSTED_COMPANIES, ...TRUSTED_COMPANIES].map((company, idx) => (
                <TickerItem key={`${company.name}-${idx}`} item={company} />
              ))}
            </motion.div>
            {/* Gradient Fades for Ticker */}
            <div className="absolute inset-y-0 left-0 w-8 bg-gradient-to-r from-background to-transparent z-10" />
            <div className="absolute inset-y-0 right-0 w-8 bg-gradient-to-l from-background to-transparent z-10" />
          </div>
        </div>

        {/* Testimonial Section */}
        <div className="h-auto w-full max-w-[320px] relative overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={testimonialIndex}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="flex flex-col gap-2"
            >
              <p className="text-[13px] leading-[16.8px] text-foreground font-normal tracking-[-0.2px] text-balance italic">
                {TESTIMONIALS[testimonialIndex].quote}
              </p>
              <p className="text-[13px] leading-[16.8px] text-[#C59800] font-normal tracking-[-0.2px]">
                {TESTIMONIALS[testimonialIndex].author} — {TESTIMONIALS[testimonialIndex].role}
              </p>
            </motion.div>
          </AnimatePresence>

          {/* Pagination dots */}
          <div className="flex gap-1 mt-4">
            {TESTIMONIALS.map((_, i) => (
              <button
                key={i}
                onClick={() => setTestimonialIndex(i)}
                className={`w-1.5 h-1.5 rounded-full transition-all ${
                  i === testimonialIndex ? "bg-[#C59800] w-3" : "bg-neutral-600"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </nav>
  )
}
