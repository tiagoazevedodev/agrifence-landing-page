import Link from "next/link"
import { Radio, Wallet, Route, BellRing, Flame, Map, ArrowUpRight } from "lucide-react"
import Reveal from "./Reveal"

// Vitrine sem prints reais: diz o que a prefeitura ganha, não como o sistema faz.
// O detalhe fica para a demonstração.
const features = [
  {
    icon: Radio,
    title: "Frota ao vivo",
    desc: "Onde cada máquina está e o que está fazendo, agora.",
  },
  {
    icon: Wallet,
    title: "Custo por bairro",
    desc: "Quanto cada bairro, distrito e rua custou de verdade.",
  },
  {
    icon: Route,
    title: "Prova de serviço",
    desc: "Trajeto, horário e operador de cada serviço, prontos para o TCU/TCE e a Câmara.",
  },
  {
    icon: BellRing,
    title: "Alertas no WhatsApp",
    desc: "Aviso na hora em que algo sai do combinado.",
  },
  {
    icon: Flame,
    title: "Mapa de calor",
    desc: "Onde a frota realmente trabalhou, e onde ela não passou.",
  },
  {
    icon: Map,
    title: "Território pronto",
    desc: "O mapa do seu município já chega configurado.",
  },
]

export default function Features() {
  return (
    <section id="funcionalidades" className="relative py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <Reveal className="max-w-3xl">
          <div className="chip mb-5">
            <span className="w-1 h-1 rounded-full bg-[rgb(var(--brand))]" />
            Funcionalidades
          </div>
          <h2 className="heading text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight">
            Da tela ao WhatsApp,
            <br />
            <span className="text-muted">tudo vira comprovante.</span>
          </h2>
          <p className="mt-5 text-muted text-lg max-w-2xl">
            Seis respostas que a prefeitura passa a ter todos os dias. Como cada uma funciona,
            a gente mostra na demonstração, com o mapa da sua cidade.
          </p>
        </Reveal>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {features.map((f, i) => (
            <Reveal key={f.title} delay={i * 60}>
              <div className="surface p-6 lg:p-7 h-full">
                <div className="w-11 h-11 rounded-lg bg-[rgb(var(--brand))]/10 border border-[rgb(var(--brand))]/30 flex items-center justify-center text-[rgb(var(--brand))]">
                  <f.icon className="w-5 h-5" />
                </div>
                <h3 className="mt-5 heading text-xl font-semibold text-[rgb(var(--text))]">
                  {f.title}
                </h3>
                <p className="mt-2 text-muted leading-relaxed">{f.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="mt-4 rounded-[var(--radius)] border border-[rgb(var(--brand))]/30 bg-[rgb(var(--brand))]/[0.06] p-6 lg:p-7 flex flex-col sm:flex-row sm:items-center justify-between gap-5">
            <div>
              <div className="font-semibold text-[rgb(var(--text))]">E tem mais.</div>
              <p className="mt-1 text-muted">
                O resto a gente prefere mostrar ao vivo, com os dados do seu município.
              </p>
            </div>
            <Link href="#demonstracao" className="btn btn-primary shrink-0">
              Agendar demonstração
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
