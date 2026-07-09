import { HardHat, Sprout, Landmark } from "lucide-react"
import Reveal from "./Reveal"

const personas = [
  {
    icon: HardHat,
    title: "Secretaria de Obras",
    summary: "Patrolamento, terraplanagem e frota pesada sob controle.",
    bullets: [
      "Km de via mantida e passadas por trecho",
      "Custo real por serviço e por localidade",
      "Comprovante de rota de coleta concluída",
    ],
  },
  {
    icon: Sprout,
    title: "Secretaria de Agricultura",
    summary: "A Patrulha Agrícola documentada, atendimento a atendimento.",
    bullets: [
      "Registro por produtor, propriedade e serviço",
      "Horas, km e custo de cada atendimento",
      "Histórico do programa pronto para prestação de contas",
    ],
  },
  {
    icon: Landmark,
    title: "Gestão e Gabinete",
    summary: "Equidade e transparência para responder à Câmara.",
    bullets: [
      "Investimento por bairro e por comunidade",
      "Resposta ao TCU/TCE e ao portal da transparência",
      "Dado pronto para o requerimento do vereador",
    ],
  },
]

export default function Personas() {
  return (
    <section className="relative py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <Reveal className="max-w-3xl">
          <div className="chip mb-5">
            <span className="w-1 h-1 rounded-full bg-[rgb(var(--brand))]" />
            Para quem é
          </div>
          <h2 className="heading text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight">
            Três secretarias.
            <br />
            <span className="text-muted">Uma única comprovação.</span>
          </h2>
        </Reveal>

        <div className="mt-14 grid md:grid-cols-3 gap-4">
          {personas.map((p, i) => (
            <Reveal key={p.title} delay={i * 80}>
              <div className="surface p-7 h-full">
                <div className="w-11 h-11 rounded-lg bg-[rgb(var(--brand))]/10 border border-[rgb(var(--brand))]/30 flex items-center justify-center text-[rgb(var(--brand))]">
                  <p.icon className="w-5 h-5" />
                </div>
                <h3 className="mt-5 text-xl font-semibold text-[rgb(var(--text))]">{p.title}</h3>
                <p className="mt-2 text-muted leading-relaxed">{p.summary}</p>
                <ul className="mt-5 space-y-2.5">
                  {p.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-2.5 text-sm text-muted">
                      <span className="mt-2 w-1 h-1 rounded-full bg-[rgb(var(--brand))] shrink-0" />
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
