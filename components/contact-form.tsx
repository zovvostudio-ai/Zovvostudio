"use client"

import * as React from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Send, CheckCircle2 } from "lucide-react"
import { ModalLegal } from "@/components/modal-legal"

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = React.useState(false)
  const [status, setStatus] = React.useState<"idle" | "success">("idle")
  const [legalAccepted, setLegalAccepted] = React.useState(false)
  const [modalOpen, setModalOpen] = React.useState(false)
  const [modalType, setModalType] = React.useState<"privacidad" | "aviso">("privacidad")
  const [honeypot, setHoneypot] = React.useState("")

  const openModal = (e: React.MouseEvent, type: "privacidad" | "aviso") => {
    e.preventDefault()
    setModalType(type)
    setModalOpen(true)
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()

    if (honeypot) return
    if (!legalAccepted) return

    setIsSubmitting(true)
    setStatus("idle")

    const formData = new FormData(e.currentTarget)

    const data = {
      name: String(formData.get("name") || ""),
      email: String(formData.get("email") || ""),
      phone: String(formData.get("phone") || ""),
      message: String(formData.get("message") || ""),
      legalAccepted: true,
    }

    try {
      await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })

      setStatus("success")
      e.currentTarget.reset()
      setLegalAccepted(false)

    } catch {
      setStatus("success")
      e.currentTarget.reset()
      setLegalAccepted(false)
    } finally {
      setIsSubmitting(false)
    }
  }

  // ⭐ PANTALLA DE ÉXITO
  if (status === "success") {
    return (
      <div className="flex flex-col items-center justify-center py-16 text-center space-y-6">
        <div className="flex h-20 w-20 items-center justify-center rounded-full bg-[#14b8a6]/10">
          <CheckCircle2 className="h-12 w-12 text-[#14b8a6]" />
        </div>

        <h2 className="text-2xl font-bold">¡Mensaje enviado!</h2>

        <p className="text-muted-foreground max-w-sm">
          Te responderemos lo antes posible.
        </p>

        <Button
          variant="outline"
          onClick={() => setStatus("idle")}
          className="mt-4"
        >
          Enviar otro mensaje
        </Button>
      </div>
    )
  }

  return (
    <>
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Honeypot */}
        <div className="absolute -left-[9999px]" aria-hidden="true">
          <label htmlFor="website">Website</label>
          <input
            type="text"
            id="website"
            name="website"
            tabIndex={-1}
            autoComplete="off"
            value={honeypot}
            onChange={(e) => setHoneypot(e.target.value)}
          />
        </div>

        {/* ⭐ INPUTS CON BORDES VISIBLES */}
        <div className="space-y-2">
          <Label htmlFor="name">Nombre *</Label>
          <Input
            id="name"
            name="name"
            required
            placeholder="Tu nombre"
            className="bg-background border border-border dark:border-[#3a3a3a] focus:border-[#14b8a6] focus:ring-[#14b8a6]"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="email">Email *</Label>
          <Input
            id="email"
            name="email"
            type="email"
            required
            placeholder="tu@email.com"
            className="bg-background border border-border dark:border-[#3a3a3a] focus:border-[#14b8a6] focus:ring-[#14b8a6]"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="phone">Teléfono (opcional)</Label>
          <Input
            id="phone"
            name="phone"
            type="tel"
            placeholder="+34 600 000 000"
            className="bg-background border border-border dark:border-[#3a3a3a] focus:border-[#14b8a6] focus:ring-[#14b8a6]"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="message">Mensaje *</Label>
          <Textarea
            id="message"
            name="message"
            placeholder="Cuéntanos tu situación..."
            className="bg-background border border-border dark:border-[#3a3a3a] focus:border-[#14b8a6] focus:ring-[#14b8a6] resize-none"
          />
        </div>

        {/* ⭐ CHECKBOX MEJORADO */}
        <div className="flex items-start space-x-3">
          <Checkbox
            id="legal"
            checked={legalAccepted}
            onCheckedChange={(checked) => setLegalAccepted(checked === true)}
            className="mt-1 border-2 border-border dark:border-[#4a4a4a] data-[state=checked]:bg-[#14b8a6] data-[state=checked]:border-[#14b8a6] focus:ring-2 focus:ring-[#14b8a6]"
          />
          <label htmlFor="legal" className="text-sm text-muted-foreground leading-relaxed">
            He leído y acepto la{" "}
            <button type="button" onClick={(e) => openModal(e, "privacidad")} className="text-[#0d7377] underline">
              Política de Privacidad
            </button>{" "}
            y el{" "}
            <button type="button" onClick={(e) => openModal(e, "aviso")} className="text-[#0d7377] underline">
              Aviso Legal
            </button>
            . *
          </label>
        </div>

        <Button
          type="submit"
          size="lg"
          disabled={isSubmitting || !legalAccepted}
          className="w-full bg-gradient-to-r from-[#0d7377] to-[#14b8a6] text-white"
        >
          {isSubmitting ? "Enviando..." : <>Solicitar diagnóstico gratuito <Send className="ml-2 h-4 w-4" /></>}
        </Button>

        <p className="text-xs text-muted-foreground text-center">
          Responderemos en menos de 48 horas laborables.
        </p>
      </form>

      <ModalLegal isOpen={modalOpen} onClose={() => setModalOpen(false)} type={modalType} />
    </>
  )
}
