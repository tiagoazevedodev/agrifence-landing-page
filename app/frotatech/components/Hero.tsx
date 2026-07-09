"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight, FileCheck2 } from "lucide-react"

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
          <div className="chip chip-brand mb-7">
            <FileCheck2 className="w-3.5 h-3.5" />
            Comprovação de serviço para frotas municipais
          </div>

          <h1 className="heading text-[2.5rem] sm:text-5xl lg:text-[4.25rem] leading-[1.05] font-semibold text-gradient">
            Sua frota trabalha.
            <br />
            A FrotaTech comprova.
          </h1>

          <p className="mt-6 text-lg lg:text-xl text-muted max-w-2xl mx-auto leading-relaxed">
            Telemetria e inteligência operacional para frotas municipais: cada hora de
            máquina registrada por bairro, com{" "}
            <span className="text-[rgb(var(--text))]">custo real e comprovante de serviço</span>{" "}
            — do caminhão de lixo à Patrulha Agrícola.
          </p>

          <div className="mt-9 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link href="#demonstracao" className="btn btn-primary">
              Agendar demonstração
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* Hero screenshot — frota ao vivo */}
        <div className="relative mt-16 lg:mt-20">
          <div className="absolute -inset-x-12 -top-8 h-72 bg-[rgb(var(--brand))]/10 blur-[120px] rounded-full pointer-events-none" />
          <div className="relative surface-elev surface-glow rounded-2xl overflow-hidden shadow-2xl shadow-black/50">
            <div className="flex items-center gap-2 px-4 py-3 border-b border-[rgb(var(--border))] bg-[rgb(var(--bg-elev))]">
              <span className="w-2.5 h-2.5 rounded-full bg-[rgb(var(--border-strong))]" />
              <span className="w-2.5 h-2.5 rounded-full bg-[rgb(var(--border-strong))]" />
              <span className="w-2.5 h-2.5 rounded-full bg-[rgb(var(--border-strong))]" />
              <span className="ml-3 text-xs text-dim font-mono">
                frotatech · frota &amp; custo por bairro
              </span>
            </div>
            <Image
              src="/frotatech/dashboard-bairros.png"
              alt="Painel Frota & Custo por Bairro da FrotaTech: mapa do município com bairros e localidades em polígonos, frota em operação, custo real (R$) investido por bairro e distribuição de custo por tipo de serviço"
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
