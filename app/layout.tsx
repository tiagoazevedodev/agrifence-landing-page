import "./globals.css"
import "./fleetfence/fleetfence-theme.css"
import type { Metadata } from "next"
import { Inter, Montserrat } from "next/font/google"
import type React from "react"
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-montserrat",
})

const SITE_URL = "https://agrifence.com.br"

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Agrifence | Saiba quanto custou cada hectare da sua safra",
    template: "%s · Agrifence",
  },
  description:
    "Agrifence é a plataforma brasileira de inteligência operacional agrícola: o Agribox coleta dados das máquinas (GPS, RFID, velocidade) e a plataforma transforma em decisão: custo por hectare e por talhão, separação automática Trabalho × Logística, rastros por velocidade, cobertura real do talhão e monitoramento ao vivo.",
  applicationName: "Agrifence",
  authors: [{ name: "Agrifence", url: SITE_URL }],
  creator: "Agrifence",
  publisher: "Agrifence",
  category: "Technology",
  keywords: [
    "telemetria agrícola",
    "custo por hectare",
    "gestão de frota agrícola",
    "monitoramento de máquinas agrícolas",
    "agricultura de precisão",
    "Agribox",
    "plataforma de gestão agrícola",
    "Agrifence",
    "trabalho × logística agrícola",
    "rastreabilidade de operações agrícolas",
    "RFID agrícola",
    "GPS para tratores e colhedoras",
    "cobertura de talhão",
    "fechamento de safra",
    "ERP agrícola",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: SITE_URL,
    siteName: "Agrifence",
    title: "Agrifence | Uma solução de produtor para produtor",
    description:
      "Monitoramento das máquinas e custo real da operação, em um só app.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Agrifence | Uma solução de produtor para produtor",
    description:
      "Monitoramento das máquinas e custo real da operação, em um só app.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: "/icon.png",
    shortcut: "/favicon.ico",
    apple: "/icon.png",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(()=>{try{var t=localStorage.getItem('theme');if(t==='dark')document.documentElement.classList.add('dark');}catch(e){}})()`,
          }}
        />
      </head>
      <body className={`${inter.className} ${montserrat.variable}`}>
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
