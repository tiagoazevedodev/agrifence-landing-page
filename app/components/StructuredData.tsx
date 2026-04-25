import { faqs } from "./faqData"

const SITE_URL = "https://agrifence.com.br"

export default function StructuredData() {
  const organization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Agrifence",
    url: SITE_URL,
    logo: `${SITE_URL}/agrifence-logo.png`,
    description:
      "Plataforma brasileira de inteligência operacional agrícola. Transforma telemetria de máquinas (Agribox) em decisão econômica via Agri-Vision: custo por hectare, separação Trabalho × Logística, rastros por velocidade.",
    sameAs: [
      "https://www.instagram.com/agrifencebrasil/",
      "https://www.linkedin.com/company/agrifence-solutions/",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "sales",
      areaServed: "BR",
      availableLanguage: "Portuguese",
      url: "https://wa.me/555399641056",
    },
  }

  const software = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Agrifence — Agribox + Agri-Vision",
    applicationCategory: "BusinessApplication",
    applicationSubCategory: "Agriculture Management",
    operatingSystem: "Web",
    url: SITE_URL,
    description:
      "Telemetria agrícola por segundo + plataforma de gestão. Custo por hectare, separação automática Trabalho × Logística, rastros coloridos por velocidade, cobertura real de talhão em m², telemetria ao vivo da frota.",
    featureList: [
      "Custo por hectare, talhão, máquina e operador",
      "Separação automática Trabalho produtivo × Logística",
      "Rastros de máquina coloridos por velocidade com histograma",
      "Cobertura real do talhão medida em m² (buffer da trajetória)",
      "Telemetria ao vivo da frota inteira",
      "Multi-fazenda, multi-safra e multi-cultura",
      "RFID de operador e implemento na cabine",
      "Funcionamento offline com sincronização incremental",
    ],
    offers: {
      "@type": "Offer",
      availability: "https://schema.org/InStock",
      priceCurrency: "BRL",
      url: "https://wa.me/555399641056",
    },
    provider: {
      "@type": "Organization",
      name: "Agrifence",
      url: SITE_URL,
    },
  }

  const faqPage = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organization) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(software) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPage) }}
      />
    </>
  )
}
