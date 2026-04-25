import Nav from "./components/Nav"
import Hero from "./components/Hero"
import ProducerQuestions from "./components/ProducerQuestions"
import WorkVsLogistics from "./components/WorkVsLogistics"
import ReportsGallery from "./components/ReportsGallery"
import HowItWorks from "./components/HowItWorks"
import Agribox from "./components/Agribox"
import Stats from "./components/Stats"
import Personas from "./components/Personas"
import FAQ from "./components/FAQ"
import FinalCTA from "./components/FinalCTA"
import Footer from "./components/Footer"

export default function Home() {
  return (
    <>
      <Nav />
      <main className="relative">
        <Hero />
        <ProducerQuestions />
        <WorkVsLogistics />
        <ReportsGallery />
        <HowItWorks />
        <Agribox />
        <Stats />
        <Personas />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </>
  )
}
