import Link from "next/link"
import { ArrowUpRight, ArrowRight, LogIn, Building2 } from "lucide-react"
import { APP_LABEL, APP_URL, WHATSAPP_URL } from "@/lib/contact"
import Reveal from "./Reveal"

export default function FinalCTA() {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-radial-brand opacity-80 pointer-events-none" />
      <div className="absolute inset-0 bg-grid bg-grid-fade opacity-40 pointer-events-none" />

      <div className="relative max-w-4xl mx-auto px-5 lg:px-8 text-center">
        <Reveal>
          <h2 className="heading text-4xl sm:text-5xl lg:text-6xl font-semibold leading-[1.05] text-gradient">
            Quanto custou cada hectare
            <br />
            da sua safra?
          </h2>
          <p className="mt-6 text-muted text-lg lg:text-xl max-w-2xl mx-auto leading-relaxed">
            Comece a transformar o movimento das suas máquinas em decisão econômica.
            Fala com a gente: em 15 minutos você entende se o Agrifence faz sentido pra
            sua fazenda.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener"
              className="btn btn-primary text-base !py-3.5 !px-7"
            >
              Falar com a gente no WhatsApp
              <ArrowUpRight className="w-5 h-5" />
            </Link>
            <Link
              href={APP_URL}
              target="_blank"
              rel="noopener"
              className="btn btn-ghost text-base !py-3.5 !px-7"
            >
              <LogIn className="w-5 h-5" />
              {APP_LABEL}
            </Link>
          </div>

          <div className="mt-6 text-xs text-dim font-mono uppercase tracking-wider">
            Resposta direta com o fundador · sem formulário
          </div>

          <Link
            href="/fleetfence#demonstracao"
            className="fleetfence-theme group mt-12 mx-auto max-w-xl flex items-center gap-4 rounded-2xl border border-[rgb(var(--border))] bg-[rgb(var(--bg))] p-4 sm:p-5 text-left text-[rgb(var(--text))] hover:border-[rgb(var(--brand))]/50 transition-colors"
          >
            <div className="w-11 h-11 rounded-lg bg-[rgb(var(--brand))]/10 border border-[rgb(var(--brand))]/30 flex items-center justify-center text-[rgb(var(--brand))] shrink-0">
              <Building2 className="w-5 h-5" />
            </div>
            <div className="flex-1">
              <div className="font-semibold">É de prefeitura?</div>
              <div className="text-sm text-muted leading-snug">
                Conheça a Fleetfence: monitoramento de frotas públicas com prova de serviço.
              </div>
            </div>
            <ArrowRight className="w-5 h-5 text-[rgb(var(--brand))] shrink-0 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </Reveal>
      </div>
    </section>
  )
}
