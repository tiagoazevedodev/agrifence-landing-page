import { X, Check } from "lucide-react"
import Reveal from "./Reveal"

const rows = [
  {
    before: "Mostra o ponto da máquina no mapa",
    after: "Registra horas de serviço produtivo por bairro e localidade",
  },
  {
    before: "Soma km rodado, sem distinguir o que foi feito",
    after: "Separa serviço × deslocamento × manobra × ociosidade automaticamente",
  },
  {
    before: "Relatório genérico de posição e velocidade",
    after: "Custo real (R$) investido por localidade, pronto para prestação de contas",
  },
  {
    before: "Não sabe se a rua foi patrolada ou o serviço foi feito",
    after: "Comprovante de serviço em PDF — por rota, por trecho, por atendimento",
  },
  {
    before: "O gestor precisa abrir o sistema para ter qualquer dado",
    after: "Resumo do dia no WhatsApp do secretário, sem abrir sistema",
  },
]

export default function Comparison() {
  return (
    <section className="section-dark relative py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <Reveal className="max-w-3xl">
          <div className="chip mb-5">
            <span className="w-1 h-1 rounded-full bg-[rgb(var(--brand-bright))]" />
            A virada
          </div>
          <h2 className="heading text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight">
            Rastreador mostra onde a máquina está.
            <br />
            <span className="text-[rgb(var(--brand-bright))]">
              A FrotaTech comprova o que ela fez.
            </span>
          </h2>
        </Reveal>

        <Reveal>
          <div className="mt-12 surface-elev rounded-2xl overflow-hidden">
            <div className="grid grid-cols-2 border-b border-[rgb(var(--border))] bg-[rgb(var(--bg))]/40">
              <div className="px-5 lg:px-8 py-4 border-r border-[rgb(var(--border))]">
                <div className="text-xs text-dim uppercase tracking-wider font-mono">
                  Rastreador comum
                </div>
              </div>
              <div className="px-5 lg:px-8 py-4">
                <div className="text-xs uppercase tracking-wider font-mono text-[rgb(var(--brand-bright))]">
                  FrotaTech
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
                  <X className="w-4 h-4 text-[rgb(var(--text-dim))] shrink-0 mt-1" />
                  <p className="text-muted leading-relaxed text-[0.95rem]">{r.before}</p>
                </div>
                <div className="px-5 lg:px-8 py-5 flex items-start gap-3 bg-[rgb(var(--brand))]/[0.06]">
                  <Check className="w-4 h-4 text-[rgb(var(--brand-bright))] shrink-0 mt-1" />
                  <p className="text-[rgb(var(--text))] leading-relaxed text-[0.95rem]">{r.after}</p>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
