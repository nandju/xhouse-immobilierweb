import type React from "react"
import type { Metadata } from "next"
import { Poppins } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { ThemeProvider } from "@/components/theme-provider"
import { StructuredData } from "@/components/structured-data"
import "./globals.css"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
})

const SITE_URL = "https://x-house-immobilier.com"
const SITE_NAME = "X-HOUSE IMMOBILIER"
const SITE_TITLE = "X-HOUSE IMMOBILIER | Plateforme Immobilière Digitale en Côte d'Ivoire"
const SITE_DESCRIPTION =
  "X-HOUSE IMMOBILIER est une plateforme immobilière digitale qui facilite la recherche, la location, l'achat, la vente et la publication de biens immobiliers en Côte d'Ivoire. Découvrez des villas, appartements, terrains, bureaux et locaux commerciaux en quelques clics."

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_TITLE,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  keywords: [
    "immobilier Côte d'Ivoire",
    "immobilier Abidjan",
    "achat maison",
    "location appartement",
    "villa Abidjan",
    "terrain à vendre",
    "maison Côte d'Ivoire",
    "plateforme immobilière",
    "annonces immobilières",
    "investissement immobilier",
    "agence immobilière digitale",
    "X-HOUSE IMMOBILIER",
  ],
  generator: "X-HOUSE IMMOBILIER",
  applicationName: SITE_NAME,
  authors: [{ name: SITE_NAME }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  verification: {
    google: "fPo-hoViLao4WH5hoLF1LcYWHrb8qFJC3wO5OMnxqRI",
  },
  alternates: {
    canonical: SITE_URL,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: [
      {
        url: "/assets/images/logo.png",
        width: 1200,
        height: 630,
        alt: SITE_NAME,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: ["/assets/images/logo.png"],
  },
  icons: {
    icon: [
      { url: "/assets/images/logo.png", sizes: "16x16", type: "image/png" },
      { url: "/assets/images/logo.png", sizes: "32x32", type: "image/png" },
      { url: "/assets/images/logo.png", sizes: "192x192", type: "image/png" },
      { url: "/assets/images/logo.png", sizes: "512x512", type: "image/png" },
    ],
    shortcut: "/assets/images/logo.png",
    apple: [{ url: "/assets/images/logo.png", sizes: "180x180", type: "image/png" }],
  },
  formatDetection: {
    telephone: false,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body className={`${poppins.variable} font-sans antialiased`}>
        <StructuredData />
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false} disableTransitionOnChange>
          {children}
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
