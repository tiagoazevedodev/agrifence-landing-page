import { Cpu, Cloud, Monitor, MessageCircle } from "lucide-react"
import Reveal from "./Reveal"

const steps = [
  {
    n: "01",
    icon: Cpu,
    title: "Agribox coleta",
    desc:
      "Hardware embarcado em cada máquina captura GPS, velocidade, RFID do operador e status do implemento — ponto a ponto, a cada segundo.",
    meta: "Computador embarcado",
  },
  {
    n: "02",
    icon: Cloud,
    title: "Nuvem processa",
    desc:
      "A telemetria é validada, classificada (correto × incorreto × deslocamento) e agrupada em Trabalhos e Logísticas — recortada pelos talhões da fazenda.",
    meta: "Algoritmos avançados",
  },
  {
    n: "03",
    icon: Monitor,
    title: "Agri-Vision entrega",
    desc:
      "Painéis interativos no navegador: dashboard geral, análise de trabalhos, logística, telemetria ao vivo. Filtros que respondem na hora.",
    meta: "Mapas interativos e insights operacionais",
  },
  {
    n: "04",
    icon: MessageCircle,
    title: "WhatsApp resume",
    desc:
      "Resumo diário das operações enviado pelo WhatsApp pra quem precisa decidir — sem precisar abrir o sistema.",
    meta: "Notificações macros e automatizadas",
  },
]

export default function HowItWorks() {
  return (
    <section
      id="como-funciona"
      className="relative py-24 lg:py-32 border-y border-[rgb(var(--border))] bg-[rgb(var(--bg-elev))]/40"
    >
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <Reveal className="max-w-3xl">
          <div className="chip mb-5">
            <span className="w-1 h-1 rounded-full bg-[rgb(var(--info))]" />
            Como funciona
          </div>
          <h2 className="heading text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight">
            Do trator pra decisão.
            <br />
            <span className="text-muted">Em quatro passos.</span>
          </h2>
        </Reveal>

        <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {steps.map((s, i) => (
            <Reveal key={s.n} delay={i * 80}>
              <div className="surface h-full p-6 lg:p-7 relative overflow-hidden">
                <div className="text-[5rem] leading-none font-semibold text-[rgb(var(--border-strong))]/60 absolute -top-2 -right-1 select-none">
                  {s.n}
                </div>
                <div className="relative">
                  <div className="w-11 h-11 rounded-lg bg-[rgb(var(--brand))]/10 border border-[rgb(var(--brand))]/30 flex items-center justify-center text-[rgb(var(--brand-bright))]">
                    <s.icon className="w-5 h-5" />
                  </div>
                  <h3 className="mt-5 text-lg font-semibold text-white">{s.title}</h3>
                  <p className="mt-2 text-sm text-muted leading-relaxed">{s.desc}</p>
                  <div className="mt-5 pt-4 border-t border-[rgb(var(--border))] text-[11px] text-dim font-mono uppercase tracking-wider">
                    {s.meta}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
