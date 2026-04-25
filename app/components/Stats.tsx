import { X, Check } from "lucide-react"
import Reveal from "./Reveal"

const rows = [
  {
    before: "Custo da safra só fecha no fim do ano, com planilha do contador",
    after: "Custo por talhão e por hectare atualizado em tempo real",
  },
  {
    before: "Velocidade do operador no plantio é estimativa de quem está na cabine",
    after: "Rastro colorido por velocidade, trecho a trecho, com histograma",
  },
  {
    before: "Deslocamento e manobra somem dentro do total de horas da máquina",
    after: "Logística separada de Trabalho — você vê onde vaza margem",
  },
  {
    before: "Cobertura do talhão é estimada com a largura nominal do implemento",
    after: "Cobertura real medida em m², com falhas e sobreposições no mapa",
  },
  {
    before: "Saber qual operador rendeu mais depende de quem grita mais alto",
    after: "Ranking lado a lado de horas, eficiência e custo por operador",
  },
]

export default function Stats() {
  return (
    <section className="relative py-24 lg:py-32 border-y border-[rgb(var(--border))] bg-[rgb(var(--bg-elev))]/40">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <Reveal className="max-w-3xl">
          <div className="chip mb-5">
            <span className="w-1 h-1 rounded-full bg-[rgb(var(--alert))]" />
            O que muda na sua fazenda
          </div>
          <h2 className="heading text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight">
            De decisão por achismo
            <br />
            <span className="text-muted">pra decisão com dado.</span>
          </h2>
        </Reveal>

        <Reveal>
          <div className="mt-12 surface-elev rounded-2xl overflow-hidden">
            <div className="grid grid-cols-2 border-b border-[rgb(var(--border))] bg-[rgb(var(--bg))]/40">
              <div className="px-5 lg:px-8 py-4 border-r border-[rgb(var(--border))]">
                <div className="text-xs text-dim uppercase tracking-wider font-mono">Antes</div>
              </div>
              <div className="px-5 lg:px-8 py-4 flex items-center gap-2">
                <div className="text-xs uppercase tracking-wider font-mono text-[rgb(var(--brand-bright))]">
                  Com Agrifence
                </div>
              </div>
            </div>

            {rows.map((r, i) => (
              <div
                key={i}
                className={`grid grid-cols-1 md:grid-cols-2 ${
                  i < rows.length - 1 ? "border-b border-[rgb(var(--border))]" : ""
                }`}
              >
                <div className="px-5 lg:px-8 py-5 md:border-r border-[rgb(var(--border))] flex items-start gap-3">
                  <X className="w-4 h-4 text-[rgb(var(--alert))] shrink-0 mt-1" />
                  <p className="text-muted leading-relaxed text-[0.95rem]">{r.before}</p>
                </div>
                <div className="px-5 lg:px-8 py-5 flex items-start gap-3 bg-[rgb(var(--brand))]/[0.03]">
                  <Check className="w-4 h-4 text-[rgb(var(--brand-bright))] shrink-0 mt-1" />
                  <p className="text-white leading-relaxed text-[0.95rem]">{r.after}</p>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
