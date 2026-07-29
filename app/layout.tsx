import type React from "react"
import type { Metadata } from "next"
import { Poppins } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { ThemeProvider } from "@/components/theme-provider"
import "./globals.css"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
})

const SITE_URL = "https://x-house-immobilier.com"
const SITE_NAME = "X-HOUSE IMMOBILIER"
const SITE_DESCRIPTION =
  "X-HOUSE IMMOBILIER est votre plateforme immobilière digitale : recherchez, publiez et gérez vos biens en Côte d'Ivoire. Achat, location, terrain, villa et appartement à Abidjan."

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} — Votre plateforme immobilière digitale`,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  keywords: [
    "immobilier Côte d'Ivoire",
    "location Abidjan",
    "achat maison",
    "plateforme immobilière",
    "location appartement",
    "terrain",
    "villa",
    "immobilier digital",
  ],
  generator: "X-HOUSE IMMOBILIER",
  applicationName: SITE_NAME,
  authors: [{ name: SITE_NAME }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: `${SITE_NAME} — Votre plateforme immobilière digitale`,
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
    title: `${SITE_NAME} — Votre plateforme immobilière digitale`,
    description: SITE_DESCRIPTION,
    images: ["/assets/images/logo.png"],
  },
  icons: {
    icon: [
      {
        url: "/assets/images/logo.png",
        type: "image/png",
      },
    ],
    shortcut: "/assets/images/logo.png",
    apple: "/assets/images/logo.png",
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
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false} disableTransitionOnChange>
          {children}
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
