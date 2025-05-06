import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { DiscoverContact } from "./DiscoverContact"

export default function CTASection() {
  return (
    <section className="py-20 bg-primary relative overflow-hidden">
      <div className="container mx-auto px-4 text-center relative z-10">
        <h2 className="text-4xl font-bold mb-6">Pronto para Revolucionar sua Produção?</h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Junte-se à revolução agrícola digital. Agende uma demonstração gratuita e descubra como a AgriFence pode
          transformar seu negócio.
        </p>
        <Link
          href="#contact"
          className="inline-flex items-center text-primary px-8 py-4 rounded-full font-semibold text-lg hover:bg-opacity-90 transition duration-300"
        >
          <DiscoverContact />
        </Link>
      </div>
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-secondary transform -skew-y-6"></div>
      </div>
    </section>
  )
}

