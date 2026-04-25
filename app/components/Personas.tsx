import { Briefcase, Sprout, Wrench } from "lucide-react"
import Reveal from "./Reveal"

const personas = [
  {
    icon: Briefcase,
    title: "Produtor / Gestor",
    summary: "Decide a margem da safra com dado, não com média.",
    bullets: [
      "Custo real por hectare, talhão e safra",
      "Comparação entre máquinas, operadores e implementos",
      "Provas de execução pra banco, parceiro e fechamento contábil",
    ],
  },
  {
    icon: Sprout,
    title: "Agrônomo / Gerente operacional",
    summary: "Vê a qualidade da execução em vez de inferir.",
    bullets: [
      "Velocidade fora da faixa identificada por trecho",
      "Cobertura real do talhão (% e mapa)",
      "Tempo correto × incorreto × deslocamento por trabalho",
    ],
  },
  {
    icon: Wrench,
    title: "Operador",
    summary: "Demonstra a qualidade de sua operação",
    bullets: [
      "Mapa com rastro colorido por velocidade",
      "Cobertura real do talhão e sobreposições (% e visualização)",
      "Tempo correto × incorreto × deslocamento por trabalho",
    ],
  },
]

export default function Personas() {
  return (
    <section className="relative py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <Reveal className="max-w-3xl">
          <div className="chip mb-5">
            <span className="w-1 h-1 rounded-full bg-[rgb(var(--brand-bright))]" />
            Para quem é
          </div>
          <h2 className="heading text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight">
            Três visões.
            <br />
            <span className="text-muted">Uma única fonte de verdade.</span>
          </h2>
        </Reveal>

        <div className="mt-14 grid md:grid-cols-3 gap-4">
          {personas.map((p, i) => (
            <Reveal key={p.title} delay={i * 80}>
              <div className="surface p-7 h-full">
                <div className="w-11 h-11 rounded-lg bg-[rgb(var(--brand))]/10 border border-[rgb(var(--brand))]/30 flex items-center justify-center text-[rgb(var(--brand-bright))]">
                  <p.icon className="w-5 h-5" />
                </div>
                <h3 className="mt-5 text-xl font-semibold text-[rgb(var(--text))]">{p.title}</h3>
                <p className="mt-2 text-muted leading-relaxed">{p.summary}</p>
                <ul className="mt-5 space-y-2.5">
                  {p.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-2.5 text-sm text-muted">
                      <span className="mt-2 w-1 h-1 rounded-full bg-[rgb(var(--brand-bright))] shrink-0" />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
