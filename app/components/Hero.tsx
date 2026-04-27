"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight, Activity, MapPin, DollarSign, Gauge } from "lucide-react"
import { WHATSAPP_URL } from "@/lib/contact"

const stats = [
  { icon: Activity, label: "Monitoramento", value: "Saiba onde cada máquina está e o que está fazendo" },
  { icon: MapPin, label: "Área e sobreposições", value: "Calculamos a sua área e sobreposições de operações" },
  { icon: DollarSign, label: "Custo", value: "Analise de custo total por operação, por talhão e por hectare" },
  { icon: Gauge, label: "Velocidade", value: "Rastreie trabalhos análise por velocidade" },
]

export default function Hero() {
  return (
    <section id="top" className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
      <div className="absolute inset-0 bg-radial-brand pointer-events-none" />
      <div className="absolute inset-0 bg-grid bg-grid-fade opacity-60 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-5 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="chip chip-brand mb-7">
            <span className="w-1.5 h-1.5 rounded-full bg-[rgb(var(--brand-bright))] animate-pulse" />
            Plataforma de inteligência operacional agrícola
          </div>

          <h1 className="heading text-[2.5rem] sm:text-5xl lg:text-[4.25rem] leading-[1.05] font-semibold text-gradient">
            Pare de descobrir o custo
            <br />
            da safra no fechamento.
          </h1>

          <p className="mt-6 text-lg lg:text-xl text-muted max-w-2xl mx-auto leading-relaxed">
            O Agrifence conecta seus tratores, colhedoras e qualquer outro equipamento automotriz a uma camada digital
            que registra, em tempo real, <span className="text-[rgb(var(--text))]">tudo que acontece dentro da porteira</span> —
            e transforma esse movimento em decisão econômica.
          </p>

          <div className="mt-9 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link href={WHATSAPP_URL} target="_blank" rel="noopener" className="btn btn-primary">
              Falar com a gente
              <ArrowUpRight className="w-4 h-4" />
            </Link>
            <Link href="#como-funciona" className="btn btn-ghost">
              Entenda o funcionamento
            </Link>
          </div>
        </div>

        {/* Hero screenshot */}
        <div className="relative mt-16 lg:mt-20">
          <div className="absolute -inset-x-12 -top-8 h-72 bg-[rgb(var(--brand))]/10 blur-[120px] rounded-full pointer-events-none" />
          <div className="relative surface-elev surface-glow rounded-2xl overflow-hidden shadow-2xl shadow-black/60">
            <div className="flex items-center gap-2 px-4 py-3 border-b border-[rgb(var(--border))] bg-[rgb(var(--bg-elev))]">
              <span className="w-2.5 h-2.5 rounded-full bg-[rgb(var(--border-strong))]" />
              <span className="w-2.5 h-2.5 rounded-full bg-[rgb(var(--border-strong))]" />
              <span className="w-2.5 h-2.5 rounded-full bg-[rgb(var(--border-strong))]" />
              <span className="ml-3 text-xs text-dim font-mono">agri-vision · máquinas, implementos e operadores</span>
            </div>
            <Image
              src="/screens/dashboard-maquinas.png"
              alt="Painel de máquinas, implementos e operadores do Agri-Vision: cada trator, colhedora e pulverizador da frota lado a lado, com horas trabalhadas, horas em deslocamento, custo, área coberta e participação por tipo de operação"
              width={2400}
              height={1500}
              priority
              className="w-full h-auto"
            />
          </div>
        </div>

        {/* Stat chips */}
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {stats.map((s, i) => (
            <div
              key={i}
              className="surface p-5 flex flex-col gap-3 hover:border-[rgb(var(--brand))]/40 transition-colors"
            >
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-[rgb(var(--brand))]/10 border border-[rgb(var(--brand))]/30 flex items-center justify-center text-[rgb(var(--brand-bright))] shrink-0">
                  <s.icon className="w-4 h-4" />
                </div>
                <div className="text-xs text-dim uppercase tracking-wider">{s.label}</div>
              </div>
              <p className="text-sm text-[rgb(var(--text))] leading-snug">{s.value}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
