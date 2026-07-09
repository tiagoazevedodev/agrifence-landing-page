export const WHATSAPP_PHONE = "555399641056"
export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_PHONE}`
export const WHATSAPP_LABEL = "Falar no WhatsApp"

// Monta um link de WhatsApp com mensagem pré-preenchida.
export function whatsappUrl(text?: string) {
  return text
    ? `${WHATSAPP_URL}?text=${encodeURIComponent(text)}`
    : WHATSAPP_URL
}

export const DEMO_MESSAGE =
  "Olá! Quero agendar uma demonstração da FrotaTech para o meu município."
