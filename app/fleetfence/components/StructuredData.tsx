import { WHATSAPP_URL } from "../lib/contact"

const SITE_URL = "https://agrifence.com.br"
const PAGE_URL = `${SITE_URL}/fleetfence`

export default function StructuredData() {
  const software = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Fleetfence",
    applicationCategory: "BusinessApplication",
    applicationSubCategory: "Fleet Management",
    operatingSystem: "Web",
    url: PAGE_URL,
    description:
      "Monitoramento de frotas e equipamentos públicos com prova de serviço: cada hora de máquina registrada por bairro, distrito e rua, com custo real, alertas no WhatsApp e no e-mail e comprovação para TCU/TCE e Câmara de Vereadores.",
    audience: {
      "@type": "Audience",
      audienceType: "Prefeituras e secretarias municipais",
    },
    featureList: [
      "Monitoramento ao vivo da frota com diagnóstico de GPS e rede",
      "Custo por bairro, distrito e rua; por máquina, implemento e operador; por hora e por km",
      "Itinerários com trajeto, horário, operador e ruas percorridas",
      "Prova de serviço para TCU/TCE e Câmara de Vereadores",
      "Central de alertas: saída do município, fora do expediente, rastreador sem sinal ou desligado",
      "Regras de alerta criadas pela prefeitura",
      "Mapa de calor de passagens, tempo trabalhado e tempo parado",
      "Relatórios diários e alertas por WhatsApp e e-mail",
      "Território do IBGE pronto para os 5.570 municípios, com importação de GeoJSON, KML/KMZ e Shapefile",
      "Custo-hora por ano de exercício com recálculo automático",
      "Operador e implemento identificados por tag RFID",
    ],
    offers: {
      "@type": "Offer",
      availability: "https://schema.org/InStock",
      priceCurrency: "BRL",
      url: WHATSAPP_URL,
    },
    provider: {
      "@type": "Organization",
      name: "Agrifence",
      url: SITE_URL,
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(software) }}
    />
  )
}
