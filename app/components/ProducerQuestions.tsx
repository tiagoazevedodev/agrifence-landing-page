import { DollarSign, Trophy, Flame, Gauge, Layers } from "lucide-react"
import Reveal from "./Reveal"

const questions = [
  {
    icon: DollarSign,
    q: "Quanto custou essa safra?",
    a: "Analise de custo total por operação, por talhão e por hectare — não apenas a média da fazenda.",
    tag: "Dashboard Geral",
  },
  {
    icon: Trophy,
    q: "Qual máquina e qual operador renderam mais?",
    a: "Comparativo lado a lado de horas, eficiência, área e custo gerado por equipamento e por pessoa.",
    tag: "Máquinas · Operadores · Implementos",
  },
  {
    icon: Flame,
    q: "Onde foi perdido tempo, combustível ou cobertura?",
    a: "O Agrifence separa Trabalho produtivo de Logística e mostra exatamente onde o dinheiro vaza fora do talhão.",
    tag: "Logística",
  },
  {
    icon: Gauge,
    q: "A aplicação foi feita na velocidade certa, no lugar certo?",
    a: "Rastro da máquina colorido pela velocidade, com histograma e filtro por faixa. Um olhar e você vê os trechos fora do padrão.",
    tag: "Análise de Trabalhos",
  },
  {
    icon: Layers,
    q: "Quanto da operação é trabalho produtivo e quanto é deslocamento?",
    a: "A separação Trabalho × Logística é automática e está em todo painel — você passa a discutir margem, não atividade.",
    tag: "Toda a plataforma",
  },
]

export default function ProducerQuestions() {
  return (
    <section id="produto" className="relative py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <Reveal className="max-w-3xl">
          <div className="chip mb-5">
            <span className="w-1 h-1 rounded-full bg-[rgb(var(--brand-bright))]" />
            As perguntas que o produtor faz
          </div>
          <h2 className="heading text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight">
            Perguntas simples,
            <br />
            <span className="text-muted">respostas caras.</span>
          </h2>
          <p className="mt-5 text-muted text-lg max-w-2xl">
            Cada pergunta abaixo tem um painel dedicado dentro do Agri-Vision. O Agrifence
            existe pra responder a elas com dados.
          </p>
        </Reveal>

        <div className="mt-14 grid md:grid-cols-2 gap-4">
          {questions.map((item, i) => (
            <Reveal key={i} delay={i * 60}>
              <div className="surface p-6 lg:p-7 h-full hover:border-[rgb(var(--brand))]/40 transition-colors group">
                <div className="flex items-start gap-4">
                  <div className="shrink-0 w-10 h-10 rounded-lg bg-[rgb(var(--brand))]/10 border border-[rgb(var(--brand))]/30 flex items-center justify-center text-[rgb(var(--brand-bright))]">
                    <item.icon className="w-4 h-4" />
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-lg lg:text-xl font-semibold text-[rgb(var(--text))] leading-snug">
                      {item.q}
                    </h3>
                    <p className="mt-2 text-muted leading-relaxed">{item.a}</p>
                    <div className="mt-4 inline-flex items-center gap-2 text-xs text-dim font-mono uppercase tracking-wider">
                      <span className="w-3 h-px bg-[rgb(var(--border-strong))]" />
                      {item.tag}
                    </div>
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
