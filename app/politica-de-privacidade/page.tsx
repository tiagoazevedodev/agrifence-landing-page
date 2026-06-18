import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Download } from "lucide-react"
import Footer from "../components/Footer"

export const metadata: Metadata = {
  title: "Política de Privacidade",
  description:
    "Política de Privacidade da I. Melito Ltda. (Agrifence), em conformidade com a Lei nº 13.709/2018 (LGPD): dados coletados, finalidades, bases legais, compartilhamento, armazenamento e direitos dos titulares.",
  alternates: {
    canonical: "/politica-de-privacidade",
  },
}

type Section = {
  number: string
  title: string
  paragraphs: string[]
}

const sections: Section[] = [
  {
    number: "1",
    title: "Disposições Gerais",
    paragraphs: [
      "A I. Melito Ltda. (“Empresa”) respeita a privacidade e está comprometida com a proteção dos dados pessoais tratados no exercício de suas atividades, em conformidade com a Lei nº 13.709/2018 (Lei Geral de Proteção de Dados – LGPD).",
    ],
  },
  {
    number: "2",
    title: "Atividades da Empresa",
    paragraphs: [
      "A Empresa atua no Brasil fornecendo sistema de monitoramento de maquinário agrícola por meio de sites institucionais, plataforma web e equipamentos com sensores e telemetria instalados nas máquinas.",
    ],
  },
  {
    number: "3",
    title: "Público Atendido",
    paragraphs: [
      "Os serviços são destinados a produtores rurais, tanto pessoas físicas quanto pessoas jurídicas.",
    ],
  },
  {
    number: "4",
    title: "Dados Coletados",
    paragraphs: [
      "A Empresa poderá coletar dados de cadastro, como nome, CPF ou CNPJ, RG, inscrição estadual, endereço, telefone, e-mail e dados bancários. Também são coletados logs de acesso à plataforma, incluindo registros de data, horário e ações realizadas no sistema. Por meio dos equipamentos e da plataforma, são coletados dados operacionais das máquinas, como localização, horas de uso, desempenho e produção.",
    ],
  },
  {
    number: "5",
    title: "Dados Relacionados a Operadores",
    paragraphs: [
      "A plataforma pode conter campos preenchidos pelos próprios clientes com identificações de operadores de máquinas. Essas informações são inseridas sob responsabilidade exclusiva do cliente e podem ou não identificar uma pessoa natural, conforme o conteúdo informado.",
      "Quando tais dados se referirem a terceiros vinculados ao cliente, a Empresa poderá atuar como operadora de dados, tratando as informações de acordo com as instruções do cliente e nos limites da legislação aplicável.",
    ],
  },
  {
    number: "6",
    title: "Finalidades do Tratamento",
    paragraphs: [
      "Os dados são utilizados para a execução dos contratos e funcionamento do sistema, monitoramento das máquinas, geração de relatórios, prestação de suporte técnico, cumprimento de obrigações legais e fiscais, emissão de notas fiscais, segurança da plataforma, prevenção a fraudes, melhoria contínua dos serviços, bem como para o envio de comunicações informativas e ações de marketing, quando permitido pela legislação.",
    ],
  },
  {
    number: "7",
    title: "Bases Legais",
    paragraphs: [
      "O tratamento de dados pessoais é realizado com fundamento na execução de contrato, no cumprimento de obrigações legais, no legítimo interesse da Empresa e, quando aplicável, no consentimento do titular.",
    ],
  },
  {
    number: "8",
    title: "Compartilhamento de Dados",
    paragraphs: [
      "Os dados operacionais (logs de acesso à plataforma, incluindo registros de data, horário e ações realizadas no sistema por meio dos equipamentos e da plataforma, são coletados dados operacionais das máquinas, como localização, horas de uso, desempenho e produção) poderão ser compartilhados com o contador da Empresa e com parceiros comerciais relacionados à prestação dos serviços, sempre que necessário ao desempenho das atividades e em conformidade com a legislação vigente.",
    ],
  },
  {
    number: "9",
    title: "Armazenamento",
    paragraphs: [
      "Os dados coletados serão mantidos durante a vigência da relação contratual e pelo período de 02 (dois) anos necessários ao cumprimento de obrigações legais e regulatórias, bem como para o exercício regular de direitos da Empresa, após esse período os dados pessoais serão eliminados conforme prevê a LGPD e os dados operacionais serão anonimizados.",
    ],
  },
  {
    number: "10",
    title: "Segurança da Informação",
    paragraphs: [
      "A Empresa adota medidas técnicas e administrativas aptas a proteger os dados pessoais contra acessos não autorizados e situações acidentais ou ilícitas de destruição, perda, alteração, comunicação ou difusão. Tais medidas incluem controle de acesso mediante login e senha, definição de níveis de permissão de usuários, realização de backups, uso de criptografia, utilização de serviços de hospedagens do mercado e treinamento da equipe quanto à proteção de dados.",
    ],
  },
  {
    number: "11",
    title: "Direitos dos Titulares",
    paragraphs: [
      "Nos termos da LGPD, o titular dos dados pessoais poderá solicitar a confirmação da existência de tratamento, acesso aos dados, correção de dados incompletos ou desatualizados, anonimização, bloqueio ou eliminação de dados desnecessários ou tratados em desconformidade, portabilidade, bem como a revogação do consentimento quando essa for a base legal do tratamento.",
      "Informações quanto a LGPD e os dados coletados, poderão ser solicitados pelo e-mail: contato@agrifence.com.br.",
    ],
  },
  {
    number: "12",
    title: "Atualizações desta Política",
    paragraphs: [
      "Esta Política poderá ser atualizada a qualquer momento para refletir melhorias nos serviços ou alterações legais, sendo a versão vigente sempre disponibilizada nos canais oficiais da Empresa.",
    ],
  },
]

export default function PoliticaDePrivacidade() {
  return (
    <>
      <header className="border-b border-[rgb(var(--border))] bg-[rgb(var(--bg))]">
        <div className="max-w-7xl mx-auto px-5 lg:px-8 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2.5">
            <Image src="/agrifence-logo.png" alt="Agrifence" width={32} height={32} className="rounded" />
            <span className="font-semibold tracking-tight text-[1.05rem]">Agrifence</span>
          </Link>
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-sm text-muted hover:text-[rgb(var(--text))] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Voltar ao site
          </Link>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-5 lg:px-8 py-16 md:py-20">
        <p className="text-xs text-dim uppercase tracking-wider font-mono mb-3">
          Legal
        </p>
        <h1 className="heading text-3xl md:text-4xl font-semibold">
          Política de Privacidade
        </h1>
        <div className="mt-4 text-sm text-muted leading-relaxed">
          <p>I. Melito Ltda.</p>
          <p>CNPJ: 52.171.703/0001-86</p>
        </div>

        <a
          href="/politica-de-privacidade.pdf"
          target="_blank"
          rel="noopener"
          download
          className="mt-6 inline-flex items-center gap-2 chip hover:border-[rgb(var(--brand))]/40 hover:text-[rgb(var(--brand-bright))] transition-colors"
        >
          <Download className="w-4 h-4" />
          Baixar PDF
        </a>

        <div className="mt-12 space-y-10">
          {sections.map((section) => (
            <section key={section.number}>
              <h2 className="heading text-lg md:text-xl font-semibold">
                <span className="text-[rgb(var(--brand-bright))] font-mono mr-2">
                  {section.number}.
                </span>
                {section.title}
              </h2>
              <div className="mt-3 space-y-3 text-[0.95rem] text-muted leading-relaxed">
                {section.paragraphs.map((paragraph, i) => (
                  <p key={i}>{paragraph}</p>
                ))}
              </div>
            </section>
          ))}
        </div>

        <div className="mt-14 pt-6 border-t border-[rgb(var(--border))] text-xs text-dim font-mono space-y-1">
          <p>Publicada: 18/06/2026</p>
          <p>Alterada: 18/06/2026</p>
        </div>
      </main>

      <Footer />
    </>
  )
}
