"use client"

import type React from "react"
import { useState } from "react"
import { Clock } from "lucide-react"
import { motion } from "framer-motion"
import { SERVICES_OPTIONS, BUDGET_OPTIONS } from "@/lib/project-data"

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.6, ease: "easeOut" },
} as const

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "",
    message: "",
    budget: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    alert("Merci pour votre message ! Notre équipe X-HOUSE IMMOBILIER vous recontactera rapidement.")
  }

  return (
    <motion.div className="border-t border-foreground/10 pt-16" {...fadeInUp}>
      <div className="mb-8">
        <h2 className="text-2xl font-semibold text-foreground mb-2">Contactez-nous</h2>
        <p className="text-sm text-foreground/70">
          Une question sur X-HOUSE IMMOBILIER ? Écrivez-nous, notre équipe vous accompagne.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="flex flex-col gap-2">
            <label className="text-[13px] font-normal text-foreground">Nom</label>
            <input
              type="text"
              placeholder="Jean Kouassi"
              className="w-full h-10 px-4 bg-foreground/10 text-foreground placeholder:text-foreground/40 rounded-full border-none text-sm focus:outline-none focus:ring-1 focus:ring-[#C59800] transition-shadow"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-[13px] font-normal text-foreground">Email</label>
            <input
              type="email"
              placeholder="jean@exemple.com"
              className="w-full h-10 px-4 bg-foreground/10 text-foreground placeholder:text-foreground/40 rounded-full border-none text-sm focus:outline-none focus:ring-1 focus:ring-[#C59800] transition-shadow"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              required
            />
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-[13px] font-normal text-foreground">Type de bien recherché</label>
          <div className="relative">
            <select
              className="w-full h-10 px-4 pr-10 bg-foreground/10 text-foreground rounded-full border-none text-sm appearance-none focus:outline-none"
              value={formData.service}
              onChange={(e) => setFormData({ ...formData, service: e.target.value })}
              required
            >
              <option value="" disabled>
                Sélectionner...
              </option>
              {SERVICES_OPTIONS.map((opt) => (
                <option key={opt} value={opt} className="text-black">
                  {opt}
                </option>
              ))}
            </select>
            <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                stroke="#C59800"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M3.5 6L 8 10.5L 12.5 6" />
              </svg>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-[13px] font-normal text-foreground">Décrivez votre projet</label>
          <textarea
            placeholder="Parlez-nous de votre projet immobilier..."
            className="w-full h-24 px-4 py-3 bg-foreground/10 text-foreground placeholder:text-foreground/40 rounded-2xl border-none text-sm resize-none focus:outline-none focus:ring-1 focus:ring-[#C59800] transition-shadow"
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            required
          />
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-[13px] font-normal text-foreground">Quel est votre budget ?</label>
          <div className="relative">
            <select
              className="w-full h-10 px-4 pr-10 bg-foreground/10 text-foreground rounded-full border-none text-sm appearance-none focus:outline-none"
              value={formData.budget}
              onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
              required
            >
              <option value="" disabled>
                Sélectionner...
              </option>
              {BUDGET_OPTIONS.map((opt) => (
                <option key={opt} value={opt} className="text-black">
                  {opt}
                </option>
              ))}
            </select>
            <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                stroke="#C59800"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M3.5 6L 8 10.5L 12.5 6" />
              </svg>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-5 mt-8">
          <div className="flex items-center gap-2.5">
            <Clock className="w-5 h-5 text-[#C59800]" />
            <span className="text-sm text-foreground/70">Réponse sous 12 heures en moyenne</span>
          </div>
          <button
            type="submit"
            className="w-full md:w-[240px] h-10 bg-[#C59800] text-[#08101A] rounded-full font-semibold text-sm hover:bg-[#e0ac00] transition-colors cursor-pointer"
          >
            Envoyer
          </button>
        </div>
      </form>
    </motion.div>
  )
}
