import Image from "next/image"
import { Satellite, Wifi, Radio, Cpu } from "lucide-react"
import Reveal from "./Reveal"

const specs = [
  {
    icon: Satellite,
    title: "GPS de alta frequência",
    desc: "Coordenadas validadas a cada segundo, com qualidade de sinal monitorada (satélites, latência, último ponto válido).",
  },
  {
    icon: Radio,
    title: "RFID na cabine",
    desc: "Identifica automaticamente operador e implemento ao iniciar a operação. Sem digitar nada, sem erro humano.",
  },
  {
    icon: Wifi,
    title: "Sincronização inteligente",
    desc: "Funciona offline e sincroniza quando há rede. Nunca perde dados por causa de sinal fraco ou offline.",
  },
  {
    icon: Cpu,
    title: "Composição confiável",
    desc: "Arquitetura embarcada robusta, com saúde monitorada (storage, rede, servidor) e ordens de manutenção rastreadas.",
  },
]

export default function AgriboxSection() {
  return (
    <section id="agribox" className="relative py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <Reveal>
            <div className="relative">
              <div className="absolute -inset-8 bg-[rgb(var(--brand))]/10 blur-3xl rounded-full pointer-events-none" />
              <div className="relative surface-elev rounded-2xl p-8 lg:p-12 flex flex-col items-center gap-6">
                <Image
                  src="/agribox.png"
                  alt="Agribox — dispositivo embarcado do Agrifence instalado nas máquinas"
                  width={1200}
                  height={1200}
                  className="w-full h-auto object-contain"
                />
                <div className="chip chip-brand">
                  <span className="w-1.5 h-1.5 rounded-full bg-[rgb(var(--brand-bright))] animate-pulse" />
                  Hardware proprietário
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={80}>
            <div className="chip mb-5">
              <span className="w-1 h-1 rounded-full bg-[rgb(var(--brand-bright))]" />
              Agribox
            </div>
            <h2 className="heading text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight">
              O dispositivo que enxerga
              <br />
              <span className="text-muted">cada metro da sua máquina.</span>
            </h2>
            <p className="mt-5 text-muted text-lg leading-relaxed">
              Instalado direto na máquina, o Agribox é o ponto de partida da plataforma:
              acompanha GPS, velocidade, operador e implemento a cada segundo, mesmo
              offline, e envia tudo pra nuvem assim que pega sinal. É o que garante que
              cada metro percorrido vire dado confiável de gestão.
            </p>

            <div className="mt-8 grid sm:grid-cols-2 gap-3">
              {specs.map((s) => (
                <div key={s.title} className="surface p-5">
                  <div className="w-9 h-9 rounded-lg bg-[rgb(var(--brand))]/10 border border-[rgb(var(--brand))]/30 flex items-center justify-center text-[rgb(var(--brand-bright))]">
                    <s.icon className="w-4 h-4" />
                  </div>
                  <h3 className="mt-4 text-sm font-semibold text-white">{s.title}</h3>
                  <p className="mt-1.5 text-xs text-muted leading-relaxed">{s.desc}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
