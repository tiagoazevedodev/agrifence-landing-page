import type { Metadata } from "next"
import SiteNav from "../components/SiteNav"
import Hero from "./components/Hero"
import TrustBar from "./components/TrustBar"
import Pain from "./components/Pain"
import Comparison from "./components/Comparison"
import HowItWorks from "./components/HowItWorks"
import Features from "./components/Features"
import Patrulha from "./components/Patrulha"
import Payback from "./components/Payback"
import Personas from "./components/Personas"
import FinalCTA from "./components/FinalCTA"
import Footer from "./components/Footer"
import StructuredData from "./components/StructuredData"

const TITLE = "Fleetfence | Monitoramento de frotas municipais com prova de serviço"
const DESCRIPTION =
  "Fleetfence é o monitoramento de frotas e equipamentos públicos: cada hora de máquina registrada por bairro, distrito e rua, com custo real, alertas no WhatsApp e prova do serviço prestado, do caminhão de coleta à Patrulha Agrícola."

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  applicationName: "Fleetfence",
  keywords: [
    "Fleetfence",
    "monitoramento de frota municipal",
    "gestão de frota pública",
    "prova de serviço",
    "prestação de contas TCU/TCE",
    "custo por bairro",
    "Patrulha Agrícola",
    "telemetria para prefeituras",
    "rastreamento de máquinas da prefeitura",
    "coleta de lixo",
    "motoniveladora",
  ],
  alternates: {
    canonical: "/fleetfence",
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "/fleetfence",
    siteName: "Fleetfence · Agrifence",
    title: "Sua frota trabalha. A Fleetfence comprova.",
    description:
      "Monitoramento de frotas públicas com prova de serviço: custo por bairro, alertas no WhatsApp e comprovação para TCU/TCE e Câmara.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sua frota trabalha. A Fleetfence comprova.",
    description:
      "Rastreador mostra o ponto no mapa. A Fleetfence comprova o serviço prestado: custo por bairro, alertas e Patrulha Agrícola.",
  },
}

export default function FleetfencePage() {
  return (
    <div className="fleetfence-theme">
      <StructuredData />
      <SiteNav product="fleetfence" />
      <main className="relative">
        <Hero />
        <TrustBar />
        <Pain />
        <Comparison />
        <HowItWorks />
        <Features />
        <Patrulha />
        <Personas />
        <Payback />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  )
}
