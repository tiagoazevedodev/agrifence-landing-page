import { ImageResponse } from "next/og"

export const runtime = "edge"
export const alt =
  "Fleetfence: monitoramento de frotas e equipamentos públicos com prova de serviço"
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          background:
            "linear-gradient(135deg, #2d3339 0%, #31373d 50%, #1f2a26 100%)",
          color: "#f4f4f2",
          fontFamily: "Inter, sans-serif",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(800px circle at 80% 0%, rgba(61,165,118,0.28), transparent 60%)",
          }}
        />

        <div style={{ display: "flex", alignItems: "center", gap: 18, zIndex: 1 }}>
          <div style={{ display: "flex", fontSize: 34, fontWeight: 700, letterSpacing: -0.5 }}>
            Fleet<span style={{ color: "#3da576" }}>fence</span>
          </div>
          <div style={{ width: 1, height: 26, background: "rgba(244,244,242,0.3)" }} />
          <div style={{ fontSize: 20, color: "#bec4ca", fontFamily: "monospace", letterSpacing: 1 }}>
            POR AGRIFENCE
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 24, zIndex: 1 }}>
          <div
            style={{
              display: "flex",
              alignSelf: "flex-start",
              padding: "8px 16px",
              borderRadius: 999,
              border: "1px solid rgba(201,162,39,0.5)",
              background: "rgba(201,162,39,0.14)",
              color: "#e0c15a",
              fontSize: 22,
              fontWeight: 500,
            }}
          >
            Prova de serviço para frotas públicas
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              fontSize: 76,
              fontWeight: 700,
              lineHeight: 1.05,
              letterSpacing: -2,
              maxWidth: 1000,
            }}
          >
            <span>Sua frota trabalha.</span>
            <span>A Fleetfence comprova.</span>
          </div>
          <div
            style={{
              fontSize: 30,
              color: "#bec4ca",
              maxWidth: 980,
              lineHeight: 1.35,
            }}
          >
            Custo por bairro · Prova de serviço · Alertas no WhatsApp
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            zIndex: 1,
            color: "#8a939b",
            fontSize: 22,
            fontFamily: "monospace",
          }}
        >
          <div>Monitoramento de frotas municipais</div>
          <div>agrifence.com.br/fleetfence</div>
        </div>
      </div>
    ),
    { ...size }
  )
}
