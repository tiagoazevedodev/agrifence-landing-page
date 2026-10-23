"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight, FileCheck2 } from "lucide-react"
import ProductSwitcher from "../../components/ProductSwitcher"

export default function Hero() {
  return (
    <section
      id="top"
      className="section-dark relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden"
    >
      <div className="absolute inset-0 bg-radial-brand pointer-events-none" />
      <div className="absolute inset-0 bg-grid bg-grid-fade opacity-40 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-5 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <ProductSwitcher current="fleetfence" />

          <div className="chip chip-brand mb-7">
            <FileCheck2 className="w-3.5 h-3.5" />
            Prova de serviço para frotas e equipamentos públicos
          </div>

          <h1 className="heading text-[2.5rem] sm:text-5xl lg:text-[4.25rem] leading-[1.05] font-semibold text-gradient">
            Sua frota trabalha.
            <br />
            A Fleetfence comprova.
          </h1>

          <p className="mt-6 text-lg lg:text-xl text-muted max-w-2xl mx-auto leading-relaxed">
            Monitoramento de frotas e equipamentos públicos: cada hora de máquina
            registrada por bairro, distrito e rua, com{" "}
            <span className="text-[rgb(var(--text))]">custo real e prova do serviço prestado</span>.{" "}
            Do caminhão de coleta à Patrulha Agrícola.
          </p>

          <div className="mt-9 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link href="#demonstracao" className="btn btn-primary">
              Agendar demonstração
              <ArrowUpRight className="w-4 h-4" />
            </Link>
            <Link href="#funcionalidades" className="btn btn-ghost">
              Ver funcionalidades
            </Link>
          </div>
        </div>

        {/* Hero screenshot: frota ao vivo */}
        <div className="relative mt-16 lg:mt-20">
          <div className="absolute -inset-x-12 -top-8 h-72 bg-[rgb(var(--brand))]/10 blur-[120px] rounded-full pointer-events-none" />
          <div className="relative surface-elev surface-glow rounded-2xl overflow-hidden shadow-2xl shadow-black/50">
            <div className="flex items-center gap-2 px-4 py-3 border-b border-[rgb(var(--border))] bg-[rgb(var(--bg-elev))]">
              <span className="w-2.5 h-2.5 rounded-full bg-[rgb(var(--border-strong))]" />
              <span className="w-2.5 h-2.5 rounded-full bg-[rgb(var(--border-strong))]" />
              <span className="w-2.5 h-2.5 rounded-full bg-[rgb(var(--border-strong))]" />
              <span className="ml-3 text-xs text-dim font-mono">
                fleetfence · frota &amp; custo por bairro
              </span>
            </div>
            <Image
              src="/fleetfence/dashboard-bairros.png"
              alt="Painel Frota & Custo por Bairro da Fleetfence: mapa do município com bairros e localidades em polígonos, frota em operação, custo real (R$) investido por bairro e distribuição de custo por tipo de serviço"
              width={1600}
              height={928}
              priority
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
