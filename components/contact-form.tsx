"use client"

import * as React from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Send, CheckCircle2, AlertCircle } from "lucide-react"
import { ModalLegal } from "@/components/modal-legal"

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = React.useState(false)
  const [status, setStatus] = React.useState<"idle" | "success" | "error">("idle")
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
    
    // Honeypot check
    if (honeypot) {
      return
    }

    if (!legalAccepted) {
      return
    }

    setIsSubmitting(true)
    setStatus("idle")

    const formData = new FormData(e.currentTarget)
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      message: formData.get("message"),
      legalAccepted: true,
    }

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })

      if (response.ok) {
        setStatus("success")
        e.currentTarget.reset()
        setLegalAccepted(false)
      } else {
        setStatus("error")
      }
    } catch {
      setStatus("error")
    } finally {
      setIsSubmitting(false)
    }
  }

  if (status === "success") {
    return (
      <div className="flex flex-col items-center justify-center py-12 text-center">
        <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[#14b8a6]/10">
          <CheckCircle2 className="h-8 w-8 text-[#14b8a6]" />
        </div>
        <h3 className="text-xl font-semibold mb-2">Mensaje enviado</h3>
        <p className="text-muted-foreground mb-6">
          Gracias, te respondemos en menos de 48 h.
        </p>
        <Button 
          variant="outline" 
          onClick={() => setStatus("idle")}
        >
          Enviar otro mensaje
        </Button>
      </div>
    )
  }

  return (
    <>
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Honeypot field - hidden from users */}
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

        <div className="space-y-2">
          <Label htmlFor="name">Nombre *</Label>
          <Input
            id="name"
            name="name"
            placeholder="Tu nombre"
            required
            className="bg-background"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="email">Email *</Label>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="tu@email.com"
            required
            className="bg-background"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="phone">Teléfono (opcional)</Label>
          <Input
            id="phone"
            name="phone"
            type="tel"
            placeholder="+34 600 000 000"
            className="bg-background"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="message">Mensaje *</Label>
          <Textarea
            id="message"
            name="message"
            placeholder="Cuéntanos sobre tu proyecto: qué tipo de negocio tienes, qué objetivos quieres alcanzar..."
            rows={5}
            required
            className="bg-background resize-none"
          />
        </div>

        {/* Legal checkbox */}
        <div className="flex items-start space-x-3">
          <Checkbox
            id="legal"
            checked={legalAccepted}
            onCheckedChange={(checked) => setLegalAccepted(checked === true)}
            className="mt-1"
          />
          <label htmlFor="legal" className="text-sm text-muted-foreground leading-relaxed">
            He leído y acepto la{" "}
            <button
              type="button"
              onClick={(e) => openModal(e, "privacidad")}
              className="text-[#0d7377] dark:text-[#14b8a6] underline hover:no-underline focus:outline-none focus:ring-2 focus:ring-[#14b8a6] focus:ring-offset-2 rounded"
            >
              Política de Privacidad
            </button>{" "}
            y el{" "}
            <button
              type="button"
              onClick={(e) => openModal(e, "aviso")}
              className="text-[#0d7377] dark:text-[#14b8a6] underline hover:no-underline focus:outline-none focus:ring-2 focus:ring-[#14b8a6] focus:ring-offset-2 rounded"
            >
              Aviso Legal
            </button>
            . *
          </label>
        </div>

        {status === "error" && (
          <div className="flex items-center gap-2 rounded-lg border border-destructive/20 bg-destructive/5 p-3 text-sm text-destructive">
            <AlertCircle className="h-4 w-4" />
            <span>Ha ocurrido un error. Por favor, inténtalo de nuevo.</span>
          </div>
        )}

        <Button 
          type="submit" 
          size="lg"
          disabled={isSubmitting || !legalAccepted}
          className="w-full bg-gradient-to-r from-[#0d7377] to-[#14b8a6] text-white hover:opacity-90 hover:shadow-lg hover:shadow-[#00ffd1]/20 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? (
            "Enviando..."
          ) : (
            <>
              Solicitar diagnóstico gratuito
              <Send className="ml-2 h-4 w-4" />
            </>
          )}
        </Button>

        <p className="text-xs text-muted-foreground text-center">
          Responderemos en menos de 48 horas laborables.
        </p>
      </form>

      <ModalLegal 
        isOpen={modalOpen} 
        onClose={() => setModalOpen(false)} 
        type={modalType} 
      />
    </>
  )
}
