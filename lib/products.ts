import { Sprout, Building2, type LucideIcon } from "lucide-react"
import { APP_LABEL, APP_URL, WHATSAPP_URL } from "./contact"

/**
 * Fonte única dos produtos do site: nome, público, página, tema, menu e CTAs.
 * O menu (SiteNav) e o seletor de produto (ProductSwitcher) das duas páginas leem
 * daqui. Para renomear um produto, trocar um link ou um CTA, mude só este arquivo.
 */

export type ProductId = "agrifence" | "fleetfence"

type Link = { href: string; label: string; external?: boolean }

export type Product = {
  id: ProductId
  name: string
  /** Público curto, usado no seletor e no menu "Produtos" */
  audience: string
  /** Uma linha de descrição no menu "Produtos" */
  summary: string
  /** Página do produto */
  href: string
  icon: LucideIcon
  /** Classe que aplica a paleta do produto (definidas em globals.css e fleetfence-theme.css) */
  themeClass: string
  /** Links centrais do menu quando se está na página do produto */
  links: Link[]
  /** Botão secundário do menu (área do cliente), quando o produto tem */
  login?: Link
  /** Botão principal do menu */
  cta: Link
}

export const PRODUCTS: Record<ProductId, Product> = {
  agrifence: {
    id: "agrifence",
    name: "Agrifence",
    audience: "Fazendas",
    summary: "Custo por hectare, talhão e safra.",
    href: "/",
    icon: Sprout,
    themeClass: "agrifence-theme",
    links: [
      { href: "#como-funciona", label: "Como funciona" },
      { href: "#faq", label: "FAQ" },
    ],
    login: { href: APP_URL, label: APP_LABEL, external: true },
    cta: { href: WHATSAPP_URL, label: "Falar com a gente", external: true },
  },
  fleetfence: {
    id: "fleetfence",
    name: "Fleetfence",
    audience: "Prefeituras",
    summary: "Frota pública com prova de serviço.",
    href: "/fleetfence",
    icon: Building2,
    themeClass: "fleetfence-theme",
    links: [
      { href: "#como-funciona", label: "Como funciona" },
      { href: "#funcionalidades", label: "Funcionalidades" },
      { href: "#patrulha", label: "Patrulha Agrícola" },
    ],
    cta: { href: "#demonstracao", label: "Agendar demonstração" },
  },
}

/** Ordem em que os produtos aparecem no seletor e no menu */
export const PRODUCT_ORDER: ProductId[] = ["agrifence", "fleetfence"]
