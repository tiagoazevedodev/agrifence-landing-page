"use client"

import { useState } from "react"
import Image from "next/image"
import { Map, Gauge, Truck, Tractor, Radio } from "lucide-react"
import Reveal from "./Reveal"

const panels = [
  {
    id: "dashboard",
    icon: Map,
    label: "Dashboard Geral",
    title: "O retrato gerencial da safra, num único mapa",
    desc:
      "Mapa da fazenda com todos os talhões, painel lateral com custo total, duração, velocidade e eficiência médias. Filtre por safra, cultura, fazenda ou clique direto no talhão. Composição de custo entre Máquina, Implemento e Operador, e fatia de Logística × Trabalho.",
    bullets: [
      "Filtros encadeados: safra → cultura → fazenda → talhão → operação",
      "Alterne entre R$ totais e horas totais pra análise",
      "Gráficos de donut por tipo de operação",
    ],
    src: "/screens/dashboard-geral.png",
  },
  {
    id: "trabalhos",
    icon: Gauge,
    label: "Análise de Trabalhos",
    title: "Cada trabalho, com o rastro colorido pela velocidade",
    desc:
      "A trajetória da máquina é desenhada no mapa com a cor de cada trecho refletindo a velocidade. Histograma de frequência ao lado mostra a distribuição. Você identifica em segundos onde o operador passou rápido demais, devagar demais — ou foi exatamente certo.",
    bullets: [
      "Modos de visualização: polyline ou hotline (heatmap)",
      "Filtro por faixa de velocidade e busca avançada de trabalhos",
      "Métricas por trabalho: duração, distância, custo, área coberta, eficiência e muito mais",
    ],
    src: "/screens/analise-trabalhos.png",
  },
  {
    id: "logistica",
    icon: Truck,
    label: "Logística",
    title: "Onde o dinheiro vaza fora do talhão",
    desc:
      "Painel dedicado a tudo que não é trabalho produtivo. Tempo de deslocamento, manobra, abastecimento e espera — com custo associado e mapa dos trajetos logísticos em destaque. Pela primeira vez, dá pra olhar o que custou sem produzir um único hectare.",
    bullets: [
      "Custo total e tempo total por máquina e por operador",
      "Mapa dos deslocamentos separados das frentes de trabalho",
      "Comparação direta com a fatia produtiva da operação",
    ],
    src: "/screens/logistica.png",
  },
  {
    id: "maquinas",
    icon: Tractor,
    label: "Máquinas, Implementos e Operadores",
    title: "Análise comparativa da frota e da equipe",
    desc:
      "Cada trator, colhedora, pulverizador e cada operador da equipe lado a lado. Horas trabalhadas, horas em deslocamento, custo, área coberta e participação por tipo de operação — com cards visuais que substituem aquela planilha que ninguém abre.",
    bullets: [
      "Custo/hora e custo total por máquina, implemento e operador",
      "Horas produtivas × horas em deslocamento, lado a lado",
      "Identificação de quem rende mais — com dado, não com achismo",
    ],
    src: "/screens/dashboard-maquinas.png",
  },
  {
    id: "live",
    icon: Radio,
    label: "Monitoramento Ao Vivo",
    title: "O que está acontecendo agora, no campo",
    desc:
      "Posição em tempo real de cada máquina, status, velocidade e operador atual. Decisões no mesmo dia em vez de descobrir no fechamento da safra.",
    bullets: [
      "Atualização ao vivo da frota inteira no mapa",
      "Visão de comando para o gerente operacional",
      "Velocidade, implemento e operador atual em tempo real",
    ],
    src: "/screens/live.png",
    live: true,
  },
] as const

export default function ReportsGallery() {
  const [active, setActive] = useState(panels[0].id)
  const current = panels.find((p) => p.id === active)!

  return (
    <section id="paineis" className="relative py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <Reveal className="max-w-3xl">
          <div className="chip mb-5">
            <span className="w-1 h-1 rounded-full bg-[rgb(var(--info))]" />
            Agri-Vision · os painéis em ação
          </div>
          <h2 className="heading text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight">
            A interface que fala
            <br />
            <span className="text-muted">a língua do produtor.</span>
          </h2>
          <p className="mt-5 text-muted text-lg max-w-2xl">
            Tudo no Agri-Vision é interativo: mapa clicável, filtros encadeados,
            comparações safra a safra. Veja cada painel:
          </p>
        </Reveal>

        <Reveal>
          <div className="mt-10 -mx-5 lg:mx-0 px-5 lg:px-0 overflow-x-auto scrollbar-none">
            <div className="flex gap-2 min-w-max lg:min-w-0 lg:flex-wrap">
              {panels.map((p) => {
                const isActive = p.id === active
                return (
                  <button
                    key={p.id}
                    onClick={() => setActive(p.id)}
                    className={`group inline-flex items-center gap-2 px-4 py-2.5 rounded-full border text-sm font-medium transition-all ${
                      isActive
                        ? "bg-[rgb(var(--brand))]/10 border-[rgb(var(--brand))]/40 text-[rgb(var(--brand-bright))]"
                        : "border-[rgb(var(--border-strong))] text-muted hover:text-[rgb(var(--text))] hover:border-[rgb(var(--border-strong))]"
                    }`}
                  >
                    <p.icon className="w-4 h-4" />
                    {p.label}
                    {"live" in p && p.live && <span className="pulse-dot ml-1" />}
                  </button>
                )
              })}
            </div>
          </div>
        </Reveal>

        <div className="mt-10 grid lg:grid-cols-[1fr,440px] gap-6 lg:gap-10 items-start">
          <Reveal key={current.id} className="order-2 lg:order-1">
            <div className="relative surface-elev surface-glow rounded-2xl overflow-hidden shadow-2xl shadow-black/50">
              <div className="flex items-center gap-2 px-4 py-3 border-b border-[rgb(var(--border))] bg-[rgb(var(--bg-elev))]">
                <span className="w-2.5 h-2.5 rounded-full bg-[rgb(var(--border-strong))]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[rgb(var(--border-strong))]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[rgb(var(--border-strong))]" />
                <span className="ml-3 text-xs text-dim font-mono">
                  agri-vision · {current.label.toLowerCase()}
                </span>
                {"live" in current && current.live && (
                  <span className="ml-auto inline-flex items-center gap-2 text-xs text-[rgb(var(--danger))]">
                    <span className="pulse-dot" /> ao vivo
                  </span>
                )}
              </div>
              <Image
                src={current.src}
                alt={`Painel ${current.label} do Agri-Vision · ${current.title}`}
                width={2400}
                height={1500}
                className="w-full h-auto"
              />
            </div>
          </Reveal>

          <Reveal key={`info-${current.id}`} delay={60} className="order-1 lg:order-2 lg:sticky lg:top-24">
            <div className="surface p-7">
              <div className="inline-flex items-center gap-2 chip-brand chip mb-4">
                <current.icon className="w-3.5 h-3.5" />
                {current.label}
              </div>
              <h3 className="heading text-2xl lg:text-[1.75rem] font-semibold text-[rgb(var(--text))] leading-tight">
                {current.title}
              </h3>
              <p className="mt-4 text-muted leading-relaxed">{current.desc}</p>
              <ul className="mt-6 space-y-3">
                {current.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-3 text-sm">
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[rgb(var(--brand-bright))] shrink-0" />
                    <span className="text-muted">{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
