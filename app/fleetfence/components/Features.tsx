import { Radio, Wallet, Route, BellRing, Flame, MessageCircle, Map } from "lucide-react"
import Reveal from "./Reveal"
import BrowserFrame from "../../components/BrowserFrame"
import WhatsAppPhone from "./WhatsAppPhone"

const features = [
  {
    icon: Radio,
    title: "Frota ao vivo",
    desc:
      "Toda a frota no mapa em tempo real: em operação, offline ou desligada, com o rastro dos últimos minutos. O diagnóstico de cada módulo mostra o sinal de GPS e de rede, a velocidade atual e a última sincronização.",
    visual: (
      <BrowserFrame
        src="/fleetfence/frota-ao-vivo.png"
        alt="Central ao Vivo da Fleetfence com 33 máquinas no mapa do município, popup de uma retroescavadeira mostrando status em operação, serviço, setor, velocidade e eficiência"
        label="fleetfence · central ao vivo"
        height={1081}
      />
    ),
  },
  {
    icon: Wallet,
    title: "Custo por bairro, distrito e rua",
    desc:
      "Quanto custou cada bairro, distrito e rua, e de onde vem o custo: máquina, implemento ou operador. Custo por hora e por km rodado, tempo parado, horas fora do expediente e equidade entre bairros, por ano de exercício.",
    visual: (
      <BrowserFrame
        src="/fleetfence/custo-por-bairro.png"
        alt="Dashboard Geral da Fleetfence com o bairro Centro selecionado no mapa: custo por tipo de serviço, custo total, horas trabalhadas, custo por hora, custo por km e a divisão do custo entre máquina e operador"
        label="fleetfence · custo por bairro"
        width={2048}
        height={1116}
      />
    ),
  },
  {
    icon: Route,
    title: "Itinerários e prova de serviço",
    desc:
      "Cada dia de trabalho de cada máquina vira um itinerário: por onde passou (distrito, bairro e rua, com a distância em cada um), trajeto colorido por velocidade, replay e tempo em movimento × parado. Busque por bairro, serviço, operador ou ano e responda ao TCU/TCE e à Câmara com trajeto, horário e operador.",
    visual: (
      <BrowserFrame
        src="/fleetfence/itinerario.png"
        alt="Itinerário de um caminhão de coleta no mapa, com o trajeto colorido por velocidade, replay da operação, bairros percorridos, selo de tempo fora do expediente e histograma de velocidades"
        label="fleetfence · itinerário"
        width={2048}
        height={1117}
      />
    ),
  },
  {
    icon: BellRing,
    title: "Central de alertas",
    desc:
      "Uma fila de triagem por gravidade, com quem reconheceu e quando. Dispara quando a máquina sai ou volta ao município, trabalha fora do expediente ou quando o rastreador perde o sinal ou é desligado. E a prefeitura cria as próprias regras (excesso de velocidade, trabalho longo demais, muito tempo parado, custo alto) por máquina, por tipo ou para a frota toda.",
    visual: (
      <BrowserFrame
        src="/fleetfence/alertas.png"
        alt="Central de Alertas da Fleetfence: resumo com dispositivos sem sinal, veículos fora do expediente e fora do município, fila de triagem por gravidade e linha do tempo da frota"
        label="fleetfence · central de alertas"
        width={2048}
        height={1117}
      />
    ),
  },
  {
    icon: Flame,
    title: "Mapa de calor",
    desc:
      "Onde a frota realmente trabalhou, em hexágonos sobre o município: número de passagens, tempo na região, tempo parado e itinerários. O bairro que ficou sem atendimento aparece na hora.",
    visual: (
      <BrowserFrame
        src="/fleetfence/mapa-de-calor.png"
        alt="Mapa de calor de 14 itinerários sobre a cidade, com os bairros em polígonos e as regiões mais trabalhadas em vermelho, ao lado de velocidade, eficiência e histograma de velocidades"
        label="fleetfence · mapa de calor"
        width={2048}
        height={1119}
      />
    ),
  },
  {
    icon: MessageCircle,
    title: "Relatórios e alertas no WhatsApp",
    desc:
      "O resumo do dia direto no celular do secretário, sem abrir o sistema: frota ativa, horas produtivas × deslocamento × ocioso, localidades atendidas e custo do dia. Relatórios e alertas chegam por WhatsApp e e-mail, para os destinatários que a própria prefeitura define.",
    visual: <WhatsAppPhone />,
  },
  {
    icon: Map,
    title: "Território pronto, direto do IBGE",
    desc:
      "Contorno oficial do IBGE para qualquer um dos 5.570 municípios, bairros gerados a partir dos setores censitários (2022) e ruas e estradas já cadastradas: urbanas, rurais e rodovias. Se a prefeitura já tem o mapa, importa GeoJSON, KML/KMZ, Shapefile, GeoPackage ou TopoJSON. No editor, mover um vértice ajusta os dois bairros vizinhos.",
    visual: (
      <BrowserFrame
        src="/fleetfence/poligonos-ibge.png"
        alt="Geração automática de polígonos de bairro e distrito a partir das malhas oficiais do IBGE 2022, com opções de bairros, distritos e setores censitários e exportação em GeoJSON"
        label="fleetfence · polígonos IBGE"
        width={2372}
        height={1606}
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
