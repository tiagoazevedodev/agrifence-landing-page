import Reveal from "./Reveal"

const levers = [
  {
    value: "−10%",
    title: "Uso indevido",
    desc: "Perdas por ociosidade chegam a 15–25% (ASABE, corroborado pela Embrapa).",
  },
  {
    value: "−5%",
    title: "Combustível",
    desc: "Controle de frota reduz o consumo em 5–15% (U.S. Department of Energy, SAE, Embrapa).",
  },
  {
    value: "−10%",
    title: "Manutenção corretiva",
    desc: "Reduções médias de até 15% no custo de manutenção (McKinsey & Company, Deloitte Insights).",
  },
]

export default function Payback() {
  return (
    <section className="relative py-24 lg:py-32 border-y border-[rgb(var(--border))] bg-[rgb(var(--bg-elev))]/40">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <Reveal className="max-w-3xl">
          <div className="chip mb-5">
            <span className="w-1 h-1 rounded-full bg-[rgb(var(--amber))]" />
            Retorno sobre o investimento
          </div>
          <h2 className="heading text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight">
            Se paga em semanas.
            <br />
            <span className="text-muted">Não em anos.</span>
          </h2>
          <p className="mt-5 text-muted text-lg max-w-2xl">
            Uma conta conservadora, com três alavancas que a própria prefeitura passa a enxergar
            quando cada hora de máquina fica registrada.
          </p>
        </Reveal>

        <div className="mt-12 grid sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {levers.map((l, i) => (
            <Reveal key={l.title} delay={i * 80}>
              <div className="surface p-6 lg:p-7 h-full">
                <div className="heading text-4xl font-semibold text-[rgb(var(--brand))]">{l.value}</div>
                <h3 className="mt-4 text-lg font-semibold text-[rgb(var(--text))]">{l.title}</h3>
                <p className="mt-2 text-sm text-muted leading-relaxed">{l.desc}</p>
              </div>
            </Reveal>
          ))}

          <Reveal delay={240} className="sm:col-span-3 lg:col-span-1">
            <div className="rounded-[var(--radius)] border border-[rgb(var(--brand))]/40 bg-[rgb(var(--brand))]/[0.08] p-6 lg:p-7 h-full flex flex-col justify-between gap-6">
              <div>
                <div className="text-[11px] text-dim font-mono uppercase tracking-wider">Payback estimado</div>
                <div className="mt-2 heading text-6xl font-semibold text-[rgb(var(--text))]">34 dias</div>
              </div>
              <div className="pt-5 border-t border-[rgb(var(--border))]">
                <div className="text-[11px] text-dim font-mono uppercase tracking-wider">ROI estimado</div>
                <div className="mt-1 heading text-3xl font-semibold text-[rgb(var(--brand))]">992%</div>
              </div>
            </div>
          </Reveal>
        </div>

        <p className="mt-6 text-xs text-dim leading-relaxed max-w-4xl">
          Estimativa por máquina, com a Fleetfence online: 1.500 h/ano de trabalho, consumo de
          22 L/h de diesel S500 e R$ 153,00/h de manutenção e depreciação. Considera redução de 10%
          no uso indevido, 5% no consumo de combustível e 10% no custo de manutenção.
        </p>
      </div>
    </section>
  )
}
