const PLATFORM_URL = "https://x-house-immobilier.base44.app"
const IMG = "/assets/images/illustrations"

export const PROJECTS = [
  {
    id: "recherche-intelligente",
    title: "Recherche intelligente de biens",
    year: "Plateforme",
    services: ["Achat", "Location"],
    linkText: "Accéder à la plateforme",
    linkUrl: PLATFORM_URL,
    overview: {
      title: "Aperçu",
      content:
        "Notre moteur de recherche intelligent filtre les biens par commune, budget, type et superficie pour vous présenter uniquement des annonces pertinentes, à Abidjan comme partout en Côte d'Ivoire.",
    },
    direction: {
      title: "Fonctionnement",
      content:
        "Des filtres avancés et des suggestions personnalisées s'ajustent à vos critères en temps réel, pour que chaque recherche vous rapproche du bien qui correspond réellement à votre projet.",
    },
    outcome: {
      title: "Bénéfice",
      content:
        "Gagnez du temps et trouvez plus vite la maison, la villa ou l'appartement qui vous correspond, directement depuis la plateforme X-HOUSE IMMOBILIER.",
    },
    heroImage: `${IMG}/page-accueil/property-1.webp`,
    galleryImages: [`${IMG}/page-accueil/property-2.jpg`, `${IMG}/page-accueil/villa1.png`],
    nextProject: "publication-biens",
  },
  {
    id: "publication-biens",
    title: "Publication de biens immobiliers",
    year: "Plateforme",
    services: ["Propriétaires", "Agents"],
    linkText: "Accéder à la plateforme",
    linkUrl: PLATFORM_URL,
    overview: {
      title: "Aperçu",
      content:
        "Publiez votre bien en quelques minutes : photos, description, localisation et prix. X-HOUSE IMMOBILIER met votre annonce en avant auprès des bons profils.",
    },
    direction: {
      title: "Fonctionnement",
      content:
        "Un formulaire guidé vous accompagne pas à pas pour créer une annonce complète et attractive, sans compétence technique requise.",
    },
    outcome: {
      title: "Bénéfice",
      content:
        "Plus de visibilité pour vos biens et une mise en relation plus rapide avec des clients sérieux.",
    },
    heroImage: `${IMG}/page-accueil/property-3.jpg`,
    galleryImages: [`${IMG}/page-accueil/property-4.jpg`, `${IMG}/service/vente.png`],
    nextProject: "visites-virtuelles",
  },
  {
    id: "visites-virtuelles",
    title: "Visites virtuelles",
    year: "Plateforme",
    services: ["Immersion", "Digital"],
    linkText: "Accéder à la plateforme",
    linkUrl: PLATFORM_URL,
    overview: {
      title: "Aperçu",
      content:
        "Explorez un bien à 360° depuis chez vous grâce à nos visites virtuelles, avant même de vous déplacer.",
    },
    direction: {
      title: "Fonctionnement",
      content:
        "Chaque annonce éligible propose une visite immersive qui vous permet de vous projeter dans chaque pièce, à votre rythme.",
    },
    outcome: {
      title: "Bénéfice",
      content:
        "Idéal pour la diaspora et les clients pressés : décidez en confiance sans perdre de temps en déplacements inutiles.",
    },
    heroImage: `${IMG}/service/hero.png`,
    galleryImages: [`${IMG}/programs/house-1.png`, `${IMG}/programs/house-2.png`],
    nextProject: "signature-electronique",
  },
  {
    id: "signature-electronique",
    title: "Signature électronique",
    year: "Plateforme",
    services: ["Sécurité", "Rapidité"],
    linkText: "Accéder à la plateforme",
    linkUrl: PLATFORM_URL,
    overview: {
      title: "Aperçu",
      content:
        "Signez vos contrats de location ou de vente directement en ligne, en toute sécurité, sans déplacement.",
    },
    direction: {
      title: "Fonctionnement",
      content:
        "Un processus de signature électronique certifié protège chaque transaction entre propriétaires et clients.",
    },
    outcome: {
      title: "Bénéfice",
      content: "Des démarches simplifiées et des dossiers finalisés plus rapidement, en toute confiance.",
    },
    heroImage: `${IMG}/page-accueil/service-1.png`,
    galleryImages: [`${IMG}/page-accueil/service-2.png`, `${IMG}/qui-sommes-nous/about1.png`],
    nextProject: "mise-en-relation",
  },
  {
    id: "mise-en-relation",
    title: "Mise en relation propriétaires et clients",
    year: "Plateforme",
    services: ["Propriétaires", "Clients"],
    linkText: "Accéder à la plateforme",
    linkUrl: PLATFORM_URL,
    overview: {
      title: "Aperçu",
      content:
        "X-HOUSE IMMOBILIER connecte directement propriétaires, agents et clients pour fluidifier chaque échange.",
    },
    direction: {
      title: "Fonctionnement",
      content:
        "Une messagerie et des notifications intégrées permettent d'échanger rapidement sur les disponibilités et les conditions.",
    },
    outcome: {
      title: "Bénéfice",
      content: "Des échanges plus directs, plus transparents, et des délais de réponse réduits.",
    },
    heroImage: `${IMG}/qui-sommes-nous/about2.png`,
    galleryImages: [`${IMG}/qui-sommes-nous/team1.png`, `${IMG}/qui-sommes-nous/team2.png`],
    nextProject: "tableau-de-bord",
  },
  {
    id: "tableau-de-bord",
    title: "Tableau de bord personnalisé",
    year: "Plateforme",
    services: ["Suivi", "Statistiques"],
    linkText: "Accéder à la plateforme",
    linkUrl: PLATFORM_URL,
    overview: {
      title: "Aperçu",
      content:
        "Chaque utilisateur dispose d'un tableau de bord personnel pour suivre ses annonces, ses demandes et ses favoris.",
    },
    direction: {
      title: "Fonctionnement",
      content:
        "Des indicateurs clairs et une navigation simple donnent une vue d'ensemble de toute votre activité sur la plateforme.",
    },
    outcome: {
      title: "Bénéfice",
      content: "Une gestion centralisée et un pilotage simplifié de tous vos projets immobiliers.",
    },
    heroImage: `${IMG}/page-accueil/Rectangle%2031.png`,
    galleryImages: [`${IMG}/page-accueil/Rectangle32.png`, `${IMG}/page-accueil/choose.png`],
    nextProject: "gestion-des-demandes",
  },
  {
    id: "gestion-des-demandes",
    title: "Gestion des demandes",
    year: "Plateforme",
    services: ["Organisation", "Suivi"],
    linkText: "Accéder à la plateforme",
    linkUrl: PLATFORM_URL,
    overview: {
      title: "Aperçu",
      content:
        "Centralisez et suivez toutes les demandes reçues sur vos annonces, sans rien laisser de côté.",
    },
    direction: {
      title: "Fonctionnement",
      content:
        "Chaque demande est classée par statut, ce qui permet de prioriser les réponses et de ne manquer aucune opportunité.",
    },
    outcome: {
      title: "Bénéfice",
      content: "Une meilleure organisation et un taux de réponse plus élevé pour chaque bien publié.",
    },
    heroImage: `${IMG}/page-accueil/property-5.jpg`,
    galleryImages: [`${IMG}/page-accueil/property-6.jpg`, `${IMG}/page-accueil/villa2.png`],
    nextProject: "suivi-des-dossiers",
  },
  {
    id: "suivi-des-dossiers",
    title: "Suivi des dossiers",
    year: "Plateforme",
    services: ["Transparence", "Sécurité"],
    linkText: "Accéder à la plateforme",
    linkUrl: PLATFORM_URL,
    overview: {
      title: "Aperçu",
      content:
        "Suivez l'avancement de chaque dossier, de la première visite jusqu'à la signature finale.",
    },
    direction: {
      title: "Fonctionnement",
      content:
        "Un statut clair est associé à chaque étape du dossier, visible à tout moment par les parties concernées.",
    },
    outcome: {
      title: "Bénéfice",
      content: "Plus de transparence et une tranquillité d'esprit pour propriétaires et clients.",
    },
    heroImage: `${IMG}/page-accueil/property-7.jpg`,
    galleryImages: [`${IMG}/page-accueil/property-8.jpg`, `${IMG}/qui-sommes-nous/about3.png`],
    nextProject: "recherche-par-commune",
  },
  {
    id: "recherche-par-commune",
    title: "Recherche par commune",
    year: "Plateforme",
    services: ["Localisation", "Abidjan"],
    linkText: "Accéder à la plateforme",
    linkUrl: PLATFORM_URL,
    overview: {
      title: "Aperçu",
      content:
        "Trouvez un bien dans la commune de votre choix : Cocody, Marcory, Yopougon, et bien d'autres à travers la Côte d'Ivoire.",
    },
    direction: {
      title: "Fonctionnement",
      content:
        "Une carte et des filtres par commune permettent d'affiner votre recherche selon vos zones préférées.",
    },
    outcome: {
      title: "Bénéfice",
      content: "Une recherche plus précise, adaptée à votre lieu de vie ou d'investissement.",
    },
    heroImage: `${IMG}/programs/cocody-danga.png`,
    galleryImages: [`${IMG}/programs/rivera-stella.png`, `${IMG}/programs/buildings.png`],
    nextProject: "assistance-digitale",
  },
  {
    id: "assistance-digitale",
    title: "Assistance digitale",
    year: "Plateforme",
    services: ["Support", "Accompagnement"],
    linkText: "Accéder à la plateforme",
    linkUrl: PLATFORM_URL,
    overview: {
      title: "Aperçu",
      content:
        "Une équipe et des outils digitaux vous accompagnent à chaque étape, de la recherche jusqu'à la signature.",
    },
    direction: {
      title: "Fonctionnement",
      content:
        "Chat, WhatsApp et centre d'aide sont disponibles pour répondre rapidement à toutes vos questions.",
    },
    outcome: {
      title: "Bénéfice",
      content: "Un accompagnement humain et digital pour avancer en toute confiance sur la plateforme.",
    },
    heroImage: `${IMG}/assistance/character-main.png`,
    galleryImages: [`${IMG}/assistance/monsieurlha.png`, `${IMG}/assistance/whatsapp-icon.png`],
    nextProject: "recherche-intelligente",
  },
]

export const SERVICES_OPTIONS = [
  "Achat",
  "Location",
  "Vente",
  "Publier un bien",
  "Visite virtuelle",
  "Autre",
]
export const BUDGET_OPTIONS = [
  "Moins de 20M FCFA",
  "20M - 50M FCFA",
  "50M - 100M FCFA",
  "100M - 300M FCFA",
  "Plus de 300M FCFA",
]

export function getProjectById(id: string) {
  return PROJECTS.find((p) => p.id === id)
}

export function getNextProject(currentId: string) {
  const current = getProjectById(currentId)
  if (!current) return PROJECTS[0]
  return getProjectById(current.nextProject) || PROJECTS[0]
}
