"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowUpRight, MessageCircle } from "lucide-react"
import { whatsappUrl, DEMO_MESSAGE } from "../lib/contact"

export default function FinalCTA() {
  const [form, setForm] = useState({ nome: "", cargo: "", municipio: "", whatsapp: "" })

  const set = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement>) =>
    setForm((f) => ({ ...f, [k]: e.target.value }))

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const text =
      `Olá! Quero agendar uma demonstração da FrotaTech.\n\n` +
      `Nome: ${form.nome || "-"}\n` +
      `Cargo: ${form.cargo || "-"}\n` +
      `Município: ${form.municipio || "-"}\n` +
      `WhatsApp: ${form.whatsapp || "-"}`
    window.open(whatsappUrl(text), "_blank", "noopener")
  }

  const field =
    "w-full rounded-lg border border-[rgb(var(--border-strong))] bg-[rgb(var(--bg-card))] px-3.5 py-2.5 text-sm text-[rgb(var(--text))] placeholder:text-[rgb(var(--text-dim))] outline-none focus:border-[rgb(var(--brand-bright))] transition-colors"

  return (
    <section
      id="demonstracao"
      className="section-dark relative py-24 lg:py-32 overflow-hidden"
    >
      <div className="absolute inset-0 bg-radial-brand opacity-80 pointer-events-none" />
      <div className="absolute inset-0 bg-grid bg-grid-fade opacity-30 pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-5 lg:px-8 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <div>
          <h2 className="heading text-4xl sm:text-5xl font-semibold leading-[1.05] text-gradient">
            Veja o mapa da sua cidade dentro da FrotaTech.
          </h2>
          <p className="mt-6 text-muted text-lg leading-relaxed max-w-lg">
            Agende uma demonstração — em poucos dias os bairros do seu município já estão no
            sistema via IBGE, prontos para receber a frota.
          </p>
          <Link
            href={whatsappUrl(DEMO_MESSAGE)}
            target="_blank"
            rel="noopener"
            className="btn btn-ghost mt-8"
          >
            <MessageCircle className="w-4 h-4" />
            Prefiro falar direto no WhatsApp
          </Link>
        </div>

        <form onSubmit={onSubmit} className="surface-elev rounded-2xl p-6 lg:p-7">
          <div className="grid gap-3">
            <div className="grid sm:grid-cols-2 gap-3">
              <label className="block">
                <span className="text-xs text-dim uppercase tracking-wider">Nome</span>
                <input className={`mt-1.5 ${field}`} value={form.nome} onChange={set("nome")} placeholder="Seu nome" />
              </label>
              <label className="block">
                <span className="text-xs text-dim uppercase tracking-wider">Cargo</span>
                <input className={`mt-1.5 ${field}`} value={form.cargo} onChange={set("cargo")} placeholder="Secretário de Obras" />
              </label>
            </div>
            <label className="block">
              <span className="text-xs text-dim uppercase tracking-wider">Município</span>
              <input className={`mt-1.5 ${field}`} value={form.municipio} onChange={set("municipio")} placeholder="Cidade — UF" />
            </label>
            <label className="block">
              <span className="text-xs text-dim uppercase tracking-wider">WhatsApp</span>
              <input className={`mt-1.5 ${field}`} value={form.whatsapp} onChange={set("whatsapp")} placeholder="(53) 99999-9999" inputMode="tel" />
            </label>
            <button type="submit" className="btn btn-primary w-full justify-center mt-2">
              Agendar demonstração
              <ArrowUpRight className="w-4 h-4" />
            </button>
            <p className="text-[11px] text-dim text-center">
              Ao enviar, abrimos o WhatsApp com seus dados preenchidos. Sem cadastro.
            </p>
          </div>
        </form>
      </div>
    </section>
  )
}
