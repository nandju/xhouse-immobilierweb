const SITE_URL = "https://x-house-immobilier.com"
const SITE_NAME = "X-HOUSE IMMOBILIER"
const LOGO_URL = `${SITE_URL}/assets/images/logo.png`

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${SITE_URL}/#organization`,
  name: SITE_NAME,
  legalName: SITE_NAME,
  description: "Plateforme immobilière digitale en Côte d'Ivoire.",
  url: SITE_URL,
  logo: LOGO_URL,
  image: LOGO_URL,
  sameAs: [],
}

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  name: SITE_NAME,
  url: SITE_URL,
  publisher: { "@id": `${SITE_URL}/#organization` },
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: `${SITE_URL}/?q={search_term_string}`,
    },
    "query-input": "required name=search_term_string",
  },
}

const realEstateAgentSchema = {
  "@context": "https://schema.org",
  "@type": "RealEstateAgent",
  "@id": `${SITE_URL}/#realestateagent`,
  name: SITE_NAME,
  description:
    "X-HOUSE IMMOBILIER est une plateforme immobilière digitale qui facilite la recherche, la location, l'achat, la vente et la publication de biens immobiliers en Côte d'Ivoire.",
  url: SITE_URL,
  logo: LOGO_URL,
  image: LOGO_URL,
  areaServed: {
    "@type": "Country",
    name: "Côte d'Ivoire",
  },
  address: {
    "@type": "PostalAddress",
    addressCountry: "CI",
    addressLocality: "Abidjan",
  },
}

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${SITE_URL}/#localbusiness`,
  name: SITE_NAME,
  description: "Plateforme immobilière digitale en Côte d'Ivoire.",
  url: SITE_URL,
  image: LOGO_URL,
  address: {
    "@type": "PostalAddress",
    addressCountry: "CI",
    addressLocality: "Abidjan",
  },
}

export function StructuredData() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(realEstateAgentSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
    </>
  )
}
