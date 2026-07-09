import { Tractor, FileCheck2, Users } from "lucide-react"
import Reveal from "./Reveal"
import ComprovanteCard from "./ComprovanteCard"

const points = [
  {
    icon: Tractor,
    title: "O produtor recebe o serviço",
    desc: "Terraplanagem, patrolamento de acesso, açudes — o atendimento que o município presta na propriedade.",
  },
  {
    icon: FileCheck2,
    title: "Cada atendimento vira registro",
    desc: "Produtor, propriedade, serviço, horas, km e custo. Comprovante em PDF na hora.",
  },
  {
    icon: Users,
    title: "O município comprova",
    desc: "Histórico completo do programa: quanto custou, quem foi atendido e onde — prestação de contas pronta.",
  },
]

export default function Patrulha() {
  return (
    <section
      id="patrulha"
      className="relative py-24 lg:py-32 border-y border-[rgb(var(--border))] bg-[rgb(var(--brand))]/[0.05]"
    >
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <Reveal>
            <div className="chip mb-5">
              <span className="w-1 h-1 rounded-full bg-[rgb(var(--brand))]" />
              A ponte com o produtor · B2G2B
            </div>
            <h2 className="heading text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight">
              O produtor recebe o serviço.
              <br />
              <span className="text-[rgb(var(--brand))]">O município comprova.</span>
            </h2>
            <p className="mt-5 text-muted text-lg leading-relaxed max-w-xl">
              As Patrulhas Agrícolas atendem centenas de produtores por ano. Com a FrotaTech,
              cada atendimento vira um registro: produtor, propriedade, serviço, horas e custo.
              O produtor tem o comprovante; a prefeitura, a prestação de contas.
            </p>

            <div className="mt-8 space-y-4">
              {points.map((p) => (
                <div key={p.title} className="flex items-start gap-4">
                  <div className="shrink-0 w-10 h-10 rounded-lg bg-[rgb(var(--brand))]/10 border border-[rgb(var(--brand))]/30 flex items-center justify-center text-[rgb(var(--brand))]">
                    <p.icon className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="font-semibold text-[rgb(var(--text))]">{p.title}</div>
                    <p className="text-sm text-muted leading-relaxed">{p.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={120}>
            <ComprovanteCard />
          </Reveal>
        </div>
      </div>
    </section>
  )
}
