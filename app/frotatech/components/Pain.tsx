import { FileWarning, MapPinOff, ClipboardX } from "lucide-react"
import Reveal from "./Reveal"

const pains = [
  {
    icon: FileWarning,
    title: "Sem comprovação",
    desc:
      "Chega o requerimento do vereador, a reclamação do munícipe, a exigência do TCU/TCE e do portal da transparência — e não há registro de que a rua foi patrolada ou o serviço foi feito.",
    tag: "TCU/TCE · transparência · munícipe",
  },
  {
    icon: MapPinOff,
    title: "Sem custo por localidade",
    desc:
      "O custo existe, mas não é medido. A prefeitura não sabe quanto investiu em cada bairro ou comunidade — nem consegue provar que houve equidade entre eles.",
    tag: "Erário sem visibilidade",
  },
  {
    icon: ClipboardX,
    title: "Sem registro da Patrulha",
    desc:
      "As máquinas atendem centenas de produtores por ano sem levantamento de custo nem registro de quem foi atendido, onde e por quanto tempo.",
    tag: "Patrulha Agrícola",
  },
]

export default function Pain() {
  return (
    <section id="produto" className="relative py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <Reveal className="max-w-3xl">
          <div className="chip mb-5">
            <span className="w-1 h-1 rounded-full bg-[rgb(var(--amber))]" />
            O problema que ninguém registra
          </div>
          <h2 className="heading text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight">
            Quanto custou a Patrulha Agrícola este ano?
            <br />
            <span className="text-muted">Em quais localidades?</span>
          </h2>
          <p className="mt-5 text-muted text-lg max-w-2xl">
            Hoje a maioria dos municípios não tem essa resposta. O serviço é prestado, mas
            não é registrado; o custo existe, mas não é medido; o vereador pergunta, e a
            secretaria não tem o dado.
          </p>
        </Reveal>

        <div className="mt-14 grid md:grid-cols-3 gap-4">
          {pains.map((p, i) => (
            <Reveal key={p.title} delay={i * 80}>
              <div className="surface p-7 h-full">
                <div className="w-11 h-11 rounded-lg bg-[rgb(var(--amber))]/12 border border-[rgb(var(--amber))]/30 flex items-center justify-center text-[rgb(var(--amber))]">
                  <p.icon className="w-5 h-5" />
                </div>
                <h3 className="mt-5 text-xl font-semibold text-[rgb(var(--text))]">{p.title}</h3>
                <p className="mt-2 text-muted leading-relaxed">{p.desc}</p>
                <div className="mt-5 pt-4 border-t border-[rgb(var(--border))] text-[11px] text-dim font-mono uppercase tracking-wider">
                  {p.tag}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
