import Image from "next/image"
import { DiscoverContact } from "./DiscoverContact"

export default function Header() {
  return (
    <header className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 blob bg-opacity-60"></div>
      <div className="relative z-10 text-center">
        <Image src="/agrifence-logo.png" alt="AgriFence" width={400} height={300} className="mx-auto" />
        <p className="text-xl md:text-2xl mb-6 max-w-2xl mx-auto">
          Revolucionando o agronegócio com monitoramento inteligente e autônomo
        </p>
        <DiscoverContact />
      </div>
    </header>
  )
}

