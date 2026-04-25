import { Sprout, TruckIcon, Check, X } from "lucide-react"
import Reveal from "./Reveal"

export default function WorkVsLogistics() {
  return (
    <section className="relative py-24 lg:py-32 border-y border-[rgb(var(--border))] bg-[rgb(var(--bg-elev))]/40">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <Reveal className="max-w-3xl mx-auto text-center">
          <div className="chip mb-5 mx-auto">
            <span className="w-1 h-1 rounded-full bg-[rgb(var(--alert))]" />
            O conceito que está no coração do Agrifence
          </div>
          <h2 className="heading text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight">
            Trabalho produz hectares.
            <br />
            <span className="text-[rgb(var(--alert))]">Logística só consome R$.</span>
          </h2>
          <p className="mt-5 text-muted text-lg leading-relaxed">
            A plataforma separa automaticamente cada minuto de máquina em duas categorias.
            É essa distinção que revela onde a margem da fazenda está sendo queimada — e a
            maioria dos sistemas agrícolas simplesmente ignora.
          </p>
        </Reveal>

        <div className="mt-14 grid lg:grid-cols-2 gap-5">
          <Reveal>
            <div className="surface p-7 lg:p-9 h-full relative overflow-hidden">
              <div className="absolute -top-12 -right-12 w-48 h-48 rounded-full bg-[rgb(var(--brand))]/10 blur-3xl pointer-events-none" />
              <div className="relative">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-11 h-11 rounded-lg bg-[rgb(var(--brand))]/15 border border-[rgb(var(--brand))]/40 flex items-center justify-center text-[rgb(var(--brand-bright))]">
                    <Sprout className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-dim uppercase tracking-wider font-mono">Work</div>
                    <h3 className="text-2xl font-semibold text-white">Trabalho produtivo</h3>
                  </div>
                </div>
                <p className="text-muted leading-relaxed">
                  Operação dentro do talhão: plantio, pulverização, colheita, gradagem.
                  O Agrifence reconhece pelo geofencing + status do implemento.
                </p>
                <ul className="mt-6 space-y-2.5 text-sm">
                  {[
                    "Cobertura real medida em m² (buffer da trajetória pela largura do implemento)",
                    "Velocidade classificada como correta ou incorreta por operação",
                    "Custo atribuído por talhão, máquina, implemento e operador",
                  ].map((t) => (
                    <li key={t} className="flex items-start gap-2.5 text-muted">
                      <Check className="w-4 h-4 text-[rgb(var(--brand-bright))] shrink-0 mt-0.5" />
                      <span>{t}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>

          <Reveal delay={80}>
            <div className="surface p-7 lg:p-9 h-full relative overflow-hidden">
              <div className="absolute -top-12 -right-12 w-48 h-48 rounded-full bg-[rgb(var(--alert))]/10 blur-3xl pointer-events-none" />
              <div className="relative">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-11 h-11 rounded-lg bg-[rgb(var(--alert))]/15 border border-[rgb(var(--alert))]/40 flex items-center justify-center text-[rgb(var(--alert))]">
                    <TruckIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-dim uppercase tracking-wider font-mono">Logistics</div>
                    <h3 className="text-2xl font-semibold text-white">Logística</h3>
                  </div>
                </div>
                <p className="text-muted leading-relaxed">
                  Tudo que <span className="text-white">não é</span> trabalho produtivo:
                  deslocamento, manobra, abastecimento, espera. Custa caro e quase nunca
                  aparece nas planilhas — até agora.
                </p>
                <ul className="mt-6 space-y-2.5 text-sm">
                  {[
                    "Tempo e custo de deslocamento da frota, fora do talhão",
                    "Trajetos logísticos em destaque no mapa",
                    "Comparação direta: % do dia que virou margem × % que virou diesel",
                  ].map((t) => (
                    <li key={t} className="flex items-start gap-2.5 text-muted">
                      <X className="w-4 h-4 text-[rgb(var(--alert))] shrink-0 mt-0.5" />
                      <span>{t}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
