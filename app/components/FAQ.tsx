"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import Reveal from "./Reveal"
import Link from "next/link"
import { WHATSAPP_URL } from "@/lib/contact"
import { ArrowUpRight } from "lucide-react"

const faqs = [
  {
    q: "Como é a instalação do Agribox nas máquinas?",
    a: "O Agribox é instalado em cada trator, colhedora ou pulverizador. A equipe Agrifence faz o setup inicial, vincula RFID dos operadores e implementos e configura os talhões da fazenda no mapa.",
  },
  {
    q: "Funciona em fazendas sem internet boa no campo?",
    a: "Sim. O Agribox armazena tudo localmente e sincroniza incrementalmente quando há rede. A coleta nunca para por causa de sinal — você só vê os dados na nuvem com um pequeno atraso.",
  },
  {
    q: "Consigo gerenciar mais de uma fazenda na mesma conta?",
    a: "Sim. A plataforma é multi-fazenda e multi-empresa por padrão. Você cadastra fazendas, talhões, culturas e safras separadamente e pode comparar resultados entre elas.",
  },
  {
    q: "Dá pra comparar uma safra com a anterior?",
    a: "Sim. Custos de máquina, implemento e operador são versionados por safra, então você compara o mesmo talhão em anos diferentes sem perder a referência histórica.",
  },
  {
    q: "Tem integração com ERP ou outros sistemas?",
    a: "A plataforma é construída com API REST e foi pensada pra integração. A gente avalia caso a caso — me chama no WhatsApp e a gente conversa sobre o seu cenário.",
  },
]

export default function FAQ() {
  return (
    <section id="faq" className="relative py-24 lg:py-32 border-t border-[rgb(var(--border))]">
      <div className="max-w-4xl mx-auto px-5 lg:px-8">
        <Reveal className="text-center">
          <div className="chip mb-5 mx-auto">
            <span className="w-1 h-1 rounded-full bg-[rgb(var(--info))]" />
            Perguntas frequentes
          </div>
          <h2 className="heading text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight">
            Antes de a gente conversar.
          </h2>
        </Reveal>

        <Reveal>
          <Accordion type="single" collapsible className="mt-12 space-y-3">
            {faqs.map((f, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="surface !border-[rgb(var(--border))] px-5 lg:px-6 hover:border-[rgb(var(--border-strong))] transition-colors"
              >
                <AccordionTrigger className="text-left text-base lg:text-[1.05rem] font-medium text-[rgb(var(--text))] hover:no-underline py-5">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted leading-relaxed pb-5">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>

        <Reveal>
          <div className="mt-12 text-center">
            <p className="text-muted">Outra dúvida?</p>
            <Link
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener"
              className="btn btn-ghost mt-4"
            >
              Pergunta no WhatsApp
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
