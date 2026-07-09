import type { Metadata } from "next"
import "./frotatech-theme.css"
import Nav from "./components/Nav"
import Hero from "./components/Hero"
import TrustBar from "./components/TrustBar"
import Pain from "./components/Pain"
import Comparison from "./components/Comparison"
import HowItWorks from "./components/HowItWorks"
import Patrulha from "./components/Patrulha"
import Personas from "./components/Personas"
import FinalCTA from "./components/FinalCTA"
import Footer from "./components/Footer"

export const metadata: Metadata = {
  title: "FrotaTech — Telemetria e comprovação de serviço para frotas municipais",
  description:
    "FrotaTech é o monitoramento inteligente de frotas públicas: cada hora de máquina registrada por bairro, com custo real e comprovante de serviço — do caminhão de lixo à Patrulha Agrícola. Não é rastreador; é comprovação do serviço prestado.",
  alternates: {
    canonical: "/frotatech",
  },
}

export default function FrotaTechPage() {
  return (
    <div className="frotatech-theme">
      <Nav />
      <main className="relative">
        <Hero />
        <TrustBar />
        <Pain />
        <Comparison />
        <HowItWorks />
        <Patrulha />
        <Personas />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  )
}
