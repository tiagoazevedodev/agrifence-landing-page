import Image from "next/image"
import { Radio, Wallet, MessageCircle, FileCheck2, Map } from "lucide-react"
import Reveal from "./Reveal"
import WhatsAppPhone from "./WhatsAppPhone"
import ComprovanteCard from "./ComprovanteCard"

function BrowserFrame({
  src,
  alt,
  label,
}: {
  src: string
  alt: string
  label: string
}) {
  return (
    <div className="surface-elev rounded-2xl overflow-hidden shadow-xl shadow-black/10">
      <div className="flex items-center gap-2 px-4 py-3 border-b border-[rgb(var(--border))] bg-[rgb(var(--bg-elev))]">
        <span className="w-2.5 h-2.5 rounded-full bg-[rgb(var(--border-strong))]" />
        <span className="w-2.5 h-2.5 rounded-full bg-[rgb(var(--border-strong))]" />
        <span className="w-2.5 h-2.5 rounded-full bg-[rgb(var(--border-strong))]" />
        <span className="ml-3 text-xs text-dim font-mono">{label}</span>
      </div>
      <Image
        src={src}
        alt={alt}
        width={1600}
        height={928}
        loading="lazy"
        className="w-full h-auto"
      />
    </div>
  )
}

const features = [
  {
    icon: Radio,
    title: "Frota ao vivo",
    desc:
      "Mapa em tempo real com a posição de cada máquina, status (em serviço, deslocamento ou parada), operador identificado e velocidade atual. Alertas de máquina parada além do tolerado ou fora da área de serviço.",
    visual: (
      <BrowserFrame
        src="/frotatech/frota-ao-vivo.png"
        alt="Central ao Vivo da FrotaTech com 33 máquinas no mapa do município, popup de uma retroescavadeira mostrando status em operação, serviço, setor, velocidade e eficiência"
        label="frotatech · central ao vivo"
      />
    ),
  },
  {
    icon: Wallet,
    title: "Investimento por bairro",
    desc:
      "Horas de serviço produtivo e custo real (R$) por bairro e localidade — excluindo deslocamento e ociosidade. O dado que a prefeitura hoje não tem, com exportação em PDF para prestação de contas.",
    visual: (
      <BrowserFrame
        src="/frotatech/dashboard-bairros.png"
        alt="Dashboard de frota e custo por bairro de São Lourenço do Sul: polígonos coloridos das localidades, frota em operação, custo por bairro e distribuição de custo por tipo de serviço"
        label="frotatech · custo por bairro"
      />
    ),
  },
  {
    icon: MessageCircle,
    title: "Relatório no WhatsApp",
    desc:
      "O resumo do dia direto no celular do secretário, sem abrir o sistema: frota ativa, horas produtivas × deslocamento × ocioso, localidades atendidas e custo do dia. Mais o balanço semanal de investimento por localidade.",
    visual: <WhatsAppPhone />,
  },
  {
    icon: FileCheck2,
    title: "Comprovação da Patrulha Agrícola",
    desc:
      "Cada atendimento vira um registro: produtor, propriedade, serviço, horas, km patrolados e custo. Comprovante em PDF por atendimento — o produtor tem o recibo, a prefeitura tem a prestação de contas.",
    visual: <ComprovanteCard />,
  },
  {
    icon: Map,
    title: "Território e rodovias via IBGE",
    desc:
      "Polígonos oficiais de bairros, setores e localidades gerados automaticamente a partir das malhas do IBGE — e a identificação da malha viária do município, com a quilometragem por tipo de via (rodovia, via urbana, estrada rural). A prefeitura não desenha mapa nenhum, e os relatórios falam a mesma língua do censo, do TCU/TCE e do planejamento municipal.",
    visual: (
      <BrowserFrame
        src="/frotatech/poligonos-ibge.png"
        alt="Geração automática de polígonos de bairro e distrito a partir das malhas oficiais do IBGE 2022, com opções de bairros, distritos e setores censitários e exportação em GeoJSON"
        label="frotatech · polígonos IBGE"
      />
    ),
  },
]

export default function Features() {
  return (
    <section id="funcionalidades" className="relative py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <Reveal className="max-w-3xl">
          <div className="chip mb-5">
            <span className="w-1 h-1 rounded-full bg-[rgb(var(--brand))]" />
            Funcionalidades
          </div>
          <h2 className="heading text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight">
            Da tela ao WhatsApp,
            <br />
            <span className="text-muted">tudo vira comprovante.</span>
          </h2>
        </Reveal>

        <div className="mt-16 lg:mt-20 flex flex-col gap-20 lg:gap-28">
          {features.map((f, i) => (
            <Reveal key={f.title}>
              <div
                className={`grid lg:grid-cols-2 gap-10 lg:gap-16 items-center ${
                  i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
                }`}
              >
                <div>{f.visual}</div>
                <div>
                  <div className="w-11 h-11 rounded-lg bg-[rgb(var(--brand))]/10 border border-[rgb(var(--brand))]/30 flex items-center justify-center text-[rgb(var(--brand))]">
                    <f.icon className="w-5 h-5" />
                  </div>
                  <h3 className="mt-5 heading text-2xl lg:text-3xl font-semibold text-[rgb(var(--text))]">
                    {f.title}
                  </h3>
                  <p className="mt-4 text-muted text-lg leading-relaxed max-w-xl">{f.desc}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
