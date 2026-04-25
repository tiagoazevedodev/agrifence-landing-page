import type { MetadataRoute } from "next"

const BASE = "https://agrifence.com.br"

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()
  return [
    { url: BASE, lastModified: now, changeFrequency: "monthly", priority: 1 },
    { url: `${BASE}/#produto`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/#paineis`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE}/#agribox`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/#como-funciona`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/#faq`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
  ]
}
