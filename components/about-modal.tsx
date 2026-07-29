"use client"

import { useState } from "react"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { Drawer, DrawerContent } from "@/components/ui/drawer"
import { useMediaQuery } from "@/hooks/use-mobile"
import Image from "next/image"

const PLATFORM_URL = "https://x-house-immobilier.base44.app"

const SERVICES = [
  "Recherche intelligente de biens",
  "Publication de biens immobiliers",
  "Visites virtuelles",
  "Signature électronique",
  "Mise en relation propriétaires et clients",
  "Tableau de bord personnalisé",
  "Gestion des demandes",
  "Suivi des dossiers",
  "Recherche par commune",
  "Assistance digitale",
]

export const AboutModal = () => {
  const [open, setOpen] = useState(false)
  const isDesktop = useMediaQuery("(min-width: 768px)")

  const AboutContent = () => (
    <div className="flex flex-col gap-6 p-8 md:p-10 bg-card">
      <div className="w-12 h-12 flex items-center justify-start">
        <Image src="/assets/images/logo.png" alt="X-HOUSE IMMOBILIER" width={48} height={48} className="w-auto h-12" />
      </div>

      {/* Headline */}
      <h2 className="text-[28px] md:text-[32px] leading-[36px] md:leading-[40px] font-medium text-foreground tracking-[-0.02em] text-balance">
        Nos services X-HOUSE IMMOBILIER.
      </h2>

      {/* Body Paragraphs */}
      <ul className="flex flex-col gap-3 text-[15px] leading-[22px] text-foreground/90 tracking-[-0.01em] list-none">
        {SERVICES.map((service) => (
          <li key={service} className="flex items-start gap-3">
            <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#C59800] shrink-0" />
            <span>{service}</span>
          </li>
        ))}
      </ul>

      <a
        href={PLATFORM_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-2 inline-flex items-center justify-center px-6 py-3 bg-[#C59800] text-[#08101A] rounded-full font-medium text-sm hover:bg-[#e0ac00] transition-colors w-full sm:w-auto"
      >
        Accéder à la plateforme
      </a>
    </div>
  )

  if (isDesktop) {
    return (
      <>
        <button
          onClick={() => setOpen(true)}
          className="w-full sm:w-auto px-6 py-3.5 border border-[#C59800] text-foreground hover:bg-[#C59800] hover:text-[#08101A] transition-all cursor-pointer"
          style={{
            borderRadius: "42px",
          }}
        >
          <span className="text-lg tracking-[-0.6px] font-medium font-display">Découvrir nos services</span>
        </button>

        <Dialog open={open} onOpenChange={setOpen}>
          <DialogContent className="max-w-[520px] p-0 bg-card rounded-[24px] border-0">
            <AboutContent />
          </DialogContent>
        </Dialog>
      </>
    )
  }

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="w-full sm:w-auto px-6 py-3.5 border border-[#C59800] text-foreground hover:bg-[#C59800] hover:text-[#08101A] transition-all cursor-pointer"
        style={{
          borderRadius: "42px",
        }}
      >
        <span className="text-lg tracking-[-0.6px] font-medium font-display">Découvrir nos services</span>
      </button>

      <Drawer open={open} onOpenChange={setOpen}>
        <DrawerContent className="bg-card rounded-t-[24px] border-0">
          <AboutContent />
        </DrawerContent>
      </Drawer>
    </>
  )
}
