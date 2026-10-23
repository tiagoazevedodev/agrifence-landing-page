import { Cpu, Map, FileCheck2 } from "lucide-react"
import Reveal from "./Reveal"

const steps = [
  {
    n: "01",
    icon: Cpu,
    title: "Instala",
    desc:
      "O Agribox vai em caminhões, motoniveladoras, retroescavadeiras, pás carregadeiras e tratores, de qualquer marca e idade, sem usar a rede CAN/ISOBUS. Liga e desliga sozinho com a máquina. Tag preta identifica o operador; tag vermelha, o implemento.",
    meta: "Grava sem sinal e envia depois",
  },
  {
    n: "02",
    icon: Map,
    title: "Cruza",
    desc:
      "Cada ponto é cruzado com o território (distrito, bairro e rua), o expediente do serviço e o custo-hora de máquina, implemento e operador. Contorno oficial do IBGE pronto para qualquer um dos 5.570 municípios. A prefeitura não desenha mapa nenhum.",
    meta: "Onboarding em dias, não meses",
  },
  {
    n: "03",
    icon: FileCheck2,
    title: "Comprova",
    desc:
      "O gestor acompanha ao vivo, recebe alertas e relatórios diários no WhatsApp e no e-mail e comprova cada serviço com trajeto, horário, operador e custo, pronto para o TCU/TCE e para a Câmara.",
    meta: "Ao vivo · Alertas · PDF · WhatsApp",
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
            <span className="w-1 h-1 rounded-full bg-[rgb(var(--brand))]" />
            Como funciona
          </div>
          <h2 className="heading text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight">
            Da máquina à comprovação.
            <br />
            <span className="text-muted">Em três passos.</span>
          </h2>
        </Reveal>

        <div className="mt-14 grid md:grid-cols-3 gap-4">
          {steps.map((s, i) => (
            <Reveal key={s.n} delay={i * 80}>
              <div className="surface h-full p-6 lg:p-7 relative overflow-hidden">
                <div className="text-[5rem] leading-none font-semibold text-[rgb(var(--border-strong))]/50 absolute -top-2 -right-1 select-none">
                  {s.n}
                </div>
                <div className="relative">
                  <div className="w-11 h-11 rounded-lg bg-[rgb(var(--brand))]/10 border border-[rgb(var(--brand))]/30 flex items-center justify-center text-[rgb(var(--brand))]">
                    <s.icon className="w-5 h-5" />
                  </div>
                  <h3 className="mt-5 text-lg font-semibold text-[rgb(var(--text))]">{s.title}</h3>
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
