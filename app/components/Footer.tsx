import Image from "next/image"
import Link from "next/link"
import { Instagram, Linkedin } from "lucide-react"
import { WHATSAPP_URL } from "@/lib/contact"

export default function Footer() {
  return (
    <footer className="border-t border-[rgb(var(--border))] bg-[rgb(var(--bg-elev))]/40">
      <div className="max-w-7xl mx-auto px-5 lg:px-8 py-14">
        <div className="grid md:grid-cols-[1.4fr,1fr,1fr] gap-10">
          <div>
            <Link href="#top" className="inline-flex items-center gap-2.5">
              <Image src="/agrifence-logo.png" alt="Agrifence" width={32} height={32} className="rounded" />
              <span className="font-semibold tracking-tight text-lg">Agrifence</span>
            </Link>
            <p className="mt-4 text-sm text-muted max-w-sm leading-relaxed">
              Inteligência operacional agrícola. Monitoramento, geofencing e gestão
              de custo dentro da porteira.
            </p>
            <div className="mt-5 flex items-center gap-3">
              <a
                href="https://www.instagram.com/agrifencebrasil/"
                target="_blank"
                rel="noopener"
                aria-label="Instagram"
                className="w-9 h-9 rounded-lg surface flex items-center justify-center text-muted hover:text-[rgb(var(--brand-bright))] hover:border-[rgb(var(--brand))]/40 transition-colors"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://www.linkedin.com/company/agrifence-solutions/"
                target="_blank"
                rel="noopener"
                aria-label="LinkedIn"
                className="w-9 h-9 rounded-lg surface flex items-center justify-center text-muted hover:text-[rgb(var(--brand-bright))] hover:border-[rgb(var(--brand))]/40 transition-colors"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div>
            <div className="text-xs text-dim uppercase tracking-wider font-mono mb-4">
              Produto
            </div>
            <ul className="space-y-2.5 text-sm">
              <li><Link href="#produto" className="text-muted hover:text-[rgb(var(--text))] transition-colors">As perguntas</Link></li>
              <li><Link href="#como-funciona" className="text-muted hover:text-[rgb(var(--text))] transition-colors">Como funciona</Link></li>
            </ul>
          </div>

          <div>
            <div className="text-xs text-dim uppercase tracking-wider font-mono mb-4">
              Contato
            </div>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener"
                  className="text-muted hover:text-[rgb(var(--text))] transition-colors"
                >
                  WhatsApp
                </Link>
              </li>
              <li><Link href="#faq" className="text-muted hover:text-[rgb(var(--text))] transition-colors">FAQ</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-[rgb(var(--border))] flex flex-col md:flex-row gap-3 items-center justify-between text-xs text-dim">
          <p className="flex flex-wrap items-center justify-center gap-x-2 gap-y-1">
            <span>&copy; {new Date().getFullYear()} Agrifence. Todos os direitos reservados.</span>
            <span aria-hidden>·</span>
            <Link
              href="/politica-de-privacidade"
              className="hover:text-[rgb(var(--text))] transition-colors"
            >
              Política de Privacidade
            </Link>
          </p>
          <p className="font-mono">Coordenadas GPS · Decisão econômica</p>
        </div>
      </div>
    </footer>
  )
}
