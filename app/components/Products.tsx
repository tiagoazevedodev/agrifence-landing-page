import Link from "next/link"
import {
  ArrowRight,
  Check,
  Sprout,
  Building2,
  Cpu,
  Tag,
  WifiOff,
  Calculator,
  BadgeCheck,
} from "lucide-react"
import Reveal from "./Reveal"
import BrowserFrame from "./BrowserFrame"

const products = [
  {
    name: "Agrifence",
    audience: "Para fazendas",
    icon: Sprout,
    theme: "bg-[rgb(var(--bg-card))]",
    headline: "Quanto custou cada hectare da sua safra?",
    desc: "Tratores, colhedoras e pulverizadores viram custo por operação, por talhão e por hectare. Durante a safra, não no fechamento.",
    bullets: [
      "Custo por hectare, talhão e safra",
      "Trabalho × Logística separados automaticamente",
      "Rastros por velocidade e cobertura real do talhão",
    ],
    frame: {
      src: "/screens/dashboard-geral.png",
      alt: "Dashboard Geral da plataforma Agrifence: mapa da fazenda com os talhões e painel com custo total da safra, duração, velocidade e eficiência",
      label: "agrifence · dashboard geral",
      width: 2940,
      height: 1604,
    },
    cta: { href: "#como-funciona", label: "Ver como funciona" },
  },
  {
    name: "Fleetfence",
    audience: "Para prefeituras",
    icon: Building2,
    theme: "fleetfence-theme bg-[rgb(var(--bg))]",
    headline: "Sua frota trabalha. A Fleetfence comprova.",
    desc: "Caminhões de coleta, motoniveladoras e retroescavadeiras viram prova de serviço, com o custo de cada bairro, distrito e rua.",
    bullets: [
      "Custo por bairro, distrito e rua",
      "Prova de serviço para TCU/TCE e Câmara",
      "Alertas no WhatsApp e no e-mail",
    ],
    frame: {
      src: "/fleetfence/dashboard-bairros.png",
      alt: "Painel Frota & Custo por Bairro da Fleetfence: mapa do município com bairros em polígonos, frota em operação e custo real investido por bairro",
      label: "fleetfence · custo por bairro",
      width: 1600,
      height: 927,
    },
    cta: { href: "/fleetfence", label: "Conhecer a Fleetfence" },
  },
]

const base = [
  { icon: Cpu, label: "Módulo embarcado que liga sozinho, sem usar a rede CAN/ISOBUS" },
  { icon: Tag, label: "Tag RFID de operador e de implemento" },
  { icon: WifiOff, label: "Grava sem sinal e envia depois" },
  { icon: Calculator, label: "Custo-hora de máquina, implemento e operador" },
  { icon: BadgeCheck, label: "INPI: 3 patentes e 9 registros de software" },
]

export default function Products() {
  return (
    <section
      id="produtos"
      className="relative py-24 lg:py-32 border-y border-[rgb(var(--border))] bg-[rgb(var(--bg-elev))]/40"
    >
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <Reveal className="max-w-3xl">
          <div className="chip mb-5">
            <span className="w-1 h-1 rounded-full bg-[rgb(var(--brand))]" />
            Nossos produtos
          </div>
          <h2 className="heading text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight">
            Dois produtos.
            <br />
            <span className="text-muted">Uma tecnologia.</span>
          </h2>
          <p className="mt-5 text-muted text-lg max-w-2xl">
            O mesmo módulo embarcado, a mesma identificação de operador e implemento e a mesma
            nuvem, aplicados a dois mundos: a fazenda e a prefeitura.
          </p>
        </Reveal>

        <div className="mt-14 grid lg:grid-cols-2 gap-5">
          {products.map((p, i) => (
            <Reveal key={p.name} delay={i * 80}>
              <div
                className={`${p.theme} h-full flex flex-col rounded-2xl border border-[rgb(var(--border))] p-5 sm:p-7 text-[rgb(var(--text))]`}
              >
                <BrowserFrame {...p.frame} />

                <div className="mt-7 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-[rgb(var(--brand))]/10 border border-[rgb(var(--brand))]/30 flex items-center justify-center text-[rgb(var(--brand))]">
                    <p.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="heading text-lg font-semibold leading-none">{p.name}</div>
                    <div className="mt-1 text-[11px] text-dim font-mono uppercase tracking-wider">
                      {p.audience}
                    </div>
                  </div>
                </div>

                <h3 className="mt-5 heading text-2xl lg:text-3xl font-semibold leading-tight">
                  {p.headline}
                </h3>
                <p className="mt-3 text-muted leading-relaxed">{p.desc}</p>

                <ul className="mt-5 space-y-2.5">
                  {p.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-2.5 text-sm">
                      <Check className="w-4 h-4 text-[rgb(var(--brand))] shrink-0 mt-0.5" />
                      {b}
                    </li>
                  ))}
                </ul>

                <div className="mt-auto pt-8">
                  <Link href={p.cta.href} className="btn btn-primary">
                    {p.cta.label}
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="mt-5 surface p-5 lg:p-6">
            <div className="text-[11px] text-dim font-mono uppercase tracking-wider">
              Base comum aos dois produtos
            </div>
            <div className="mt-4 grid sm:grid-cols-2 lg:grid-cols-5 gap-x-6 gap-y-4">
              {base.map((b) => (
                <div key={b.label} className="flex items-start gap-2.5">
                  <b.icon className="w-4 h-4 text-[rgb(var(--brand-bright))] shrink-0 mt-0.5" />
                  <span className="text-sm text-muted leading-snug">{b.label}</span>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
