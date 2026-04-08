"use client"

import * as React from "react"
import { X, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface ModalLegalProps {
  isOpen: boolean
  onClose: () => void
  type: "privacidad" | "aviso"
}

const legalContent = {
  privacidad: {
    title: "Política de Privacidad",
    url: "/politica-privacidad",
    content: `
      <p class="text-muted-foreground leading-relaxed mb-4">
        El responsable del tratamiento de los datos personales recogidos a través de este sitio web es 
        Zovvo Studio.
      </p>
      <p class="text-muted-foreground leading-relaxed mb-4">
        <strong>Email de contacto:</strong> zovvostudio@gmail.com
      </p>

      <h3 class="text-lg font-semibold mt-6 mb-3">Datos que recopilamos</h3>
      <p class="text-muted-foreground leading-relaxed mb-4">
        A través de nuestro formulario de contacto, recopilamos: nombre, dirección de correo electrónico, 
        número de teléfono (opcional) y mensaje con información sobre tu proyecto.
      </p>

      <h3 class="text-lg font-semibold mt-6 mb-3">Finalidad del tratamiento</h3>
      <p class="text-muted-foreground leading-relaxed mb-4">
        Utilizamos tus datos para responder a tus consultas, enviarte información sobre nuestros servicios 
        si nos lo solicitas, y gestionar la relación comercial en caso de establecerse.
      </p>

      <h3 class="text-lg font-semibold mt-6 mb-3">Derechos del usuario</h3>
      <p class="text-muted-foreground leading-relaxed mb-4">
        Tienes derecho a acceder, rectificar, suprimir, oponerte al tratamiento, limitar el tratamiento 
        y solicitar la portabilidad de tus datos. Para ejercer estos derechos, contacta en zovvostudio@gmail.com
      </p>

      <h3 class="text-lg font-semibold mt-6 mb-3">Seguridad</h3>
      <p class="text-muted-foreground leading-relaxed mb-4">
        Implementamos medidas de seguridad técnicas y organizativas apropiadas para proteger tus datos 
        personales contra el acceso no autorizado, alteración, divulgación o destrucción.
      </p>
    `
  },
  aviso: {
    title: "Aviso Legal",
    url: "/aviso-legal",
    content: `
      <h3 class="text-lg font-semibold mb-3">Datos identificativos</h3>
      <ul class="list-none pl-0 text-muted-foreground space-y-1 mb-4">
        <li><strong>Nombre comercial:</strong> Zovvo Studio</li>
        <li><strong>Email:</strong> zovvostudio@gmail.com</li>
        <li><strong>Actividad:</strong> Diseño y desarrollo web</li>
      </ul>

      <h3 class="text-lg font-semibold mt-6 mb-3">Objeto</h3>
      <p class="text-muted-foreground leading-relaxed mb-4">
        El presente sitio web tiene por objeto facilitar información sobre los servicios de diseño 
        y desarrollo web ofrecidos por Zovvo Studio.
      </p>

      <h3 class="text-lg font-semibold mt-6 mb-3">Condiciones de uso</h3>
      <p class="text-muted-foreground leading-relaxed mb-4">
        El acceso a este sitio web es gratuito y no requiere suscripción. El usuario se compromete 
        a hacer un uso adecuado de los contenidos y servicios, no realizar actividades ilícitas y 
        no introducir virus informáticos.
      </p>

      <h3 class="text-lg font-semibold mt-6 mb-3">Propiedad intelectual</h3>
      <p class="text-muted-foreground leading-relaxed mb-4">
        Todos los contenidos del sitio web constituyen una obra cuya propiedad pertenece a Zovvo Studio. 
        Queda prohibida su reproducción sin autorización previa.
      </p>

      <h3 class="text-lg font-semibold mt-6 mb-3">Legislación aplicable</h3>
      <p class="text-muted-foreground leading-relaxed mb-4">
        Para la resolución de cualquier controversia será de aplicación la legislación española.
      </p>
    `
  }
}

export function ModalLegal({ isOpen, onClose, type }: ModalLegalProps) {
  const modalRef = React.useRef<HTMLDivElement>(null)
  const closeButtonRef = React.useRef<HTMLButtonElement>(null)
  const content = legalContent[type]

  // Focus trap and ESC handler
  React.useEffect(() => {
    if (!isOpen) return

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose()
      }

      // Focus trap
      if (e.key === "Tab" && modalRef.current) {
        const focusableElements = modalRef.current.querySelectorAll(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        )
        const firstElement = focusableElements[0] as HTMLElement
        const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement

        if (e.shiftKey && document.activeElement === firstElement) {
          e.preventDefault()
          lastElement?.focus()
        } else if (!e.shiftKey && document.activeElement === lastElement) {
          e.preventDefault()
          firstElement?.focus()
        }
      }
    }

    // Focus close button on open
    closeButtonRef.current?.focus()

    // Prevent body scroll
    document.body.style.overflow = "hidden"

    document.addEventListener("keydown", handleKeyDown)
    return () => {
      document.removeEventListener("keydown", handleKeyDown)
      document.body.style.overflow = ""
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      aria-describedby="modal-description"
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-background/80 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal */}
      <div
        ref={modalRef}
        className={cn(
          "relative w-full max-w-2xl rounded-xl border border-border bg-card shadow-2xl",
          "animate-in fade-in-0 zoom-in-95 duration-200"
        )}
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b border-border px-6 py-4">
          <h2 id="modal-title" className="text-xl font-semibold">
            {content.title}
          </h2>
          <Button
            ref={closeButtonRef}
            variant="ghost"
            size="icon"
            onClick={onClose}
            aria-label="Cerrar modal"
            className="rounded-full"
          >
            <X className="h-5 w-5" />
          </Button>
        </div>

        {/* Content */}
        <div
          id="modal-description"
          className="max-h-[60vh] overflow-y-auto px-6 py-6"
          dangerouslySetInnerHTML={{ __html: content.content }}
        />

        {/* Footer */}
        <div className="flex items-center justify-between border-t border-border px-6 py-4">
          <a
            href={content.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            Abrir en nueva pestaña
            <ExternalLink className="h-4 w-4" />
          </a>
          <Button onClick={onClose}>
            Entendido
          </Button>
        </div>
      </div>
    </div>
  )
}
