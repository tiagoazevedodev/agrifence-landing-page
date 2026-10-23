import SiteNav from "./components/SiteNav"
import Hero from "./components/Hero"
import Products from "./components/Products"
import ProducerQuestions from "./components/ProducerQuestions"
import WorkVsLogistics from "./components/WorkVsLogistics"
import HowItWorks from "./components/HowItWorks"
// import ReportsGallery from "./components/ReportsGallery"
// import Agribox from "./components/Agribox"
import Stats from "./components/Stats"
import Personas from "./components/Personas"
import FAQ from "./components/FAQ"
import FinalCTA from "./components/FinalCTA"
import Footer from "./components/Footer"
import StructuredData from "./components/StructuredData"

export default function Home() {
  return (
    <>
      <StructuredData />
      <SiteNav product="agrifence" />
      <main className="relative">
        <Hero />
        <Products />
        <ProducerQuestions />
        <WorkVsLogistics />
        {/* <ReportsGallery /> */}
        <HowItWorks />
        {/* <Agribox /> */}
        <Stats />
        <Personas />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </>
  )
}
