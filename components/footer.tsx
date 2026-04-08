"use client"

import * as React from "react"
import { Instagram, Mail } from "lucide-react"
import { ModalLegal } from "@/components/modal-legal"

export function Footer() {
  const [modalOpen, setModalOpen] = React.useState(false)
  const [modalType, setModalType] = React.useState<"privacidad" | "aviso">("privacidad")

  const openModal = (type: "privacidad" | "aviso") => {
    setModalType(type)
    setModalOpen(true)
  }

  return (
    <>
      <footer className="border-t border-border/40 bg-muted/30">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
            {/* Logo and tagline */}
            <div className="flex flex-col items-center gap-2 md:items-start">
              <span className="text-lg font-semibold">Zovvo Studio</span>
              <p className="text-sm text-muted-foreground">
                Diseñamos páginas que venden.
              </p>
            </div>

            {/* Links */}
            <nav className="flex flex-wrap justify-center gap-6 text-sm">
              <button
                onClick={() => openModal("privacidad")}
                className="text-muted-foreground transition-colors hover:text-foreground"
              >
                Política de Privacidad
              </button>
              <button
                onClick={() => openModal("aviso")}
                className="text-muted-foreground transition-colors hover:text-foreground"
              >
                Aviso Legal
              </button>
              <a
                href="#contacto"
                className="text-muted-foreground transition-colors hover:text-foreground"
              >
                Contacto
              </a>
            </nav>

            {/* Social and contact */}
            <div className="flex items-center gap-4">
              <a
                href="mailto:zovvostudio@gmail.com"
                className="text-muted-foreground transition-colors hover:text-foreground"
                aria-label="Enviar email a zovvostudio@gmail.com"
              >
                <Mail className="h-5 w-5" />
              </a>
              <a
                href="https://instagram.com/zovvostudio"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground transition-colors hover:text-foreground"
                aria-label="Seguir en Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div className="mt-8 border-t border-border/40 pt-8 text-center">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Zovvo Studio. Todos los derechos reservados.
            </p>
            <p className="mt-2 text-xs text-muted-foreground">
              Web diseñada siguiendo las pautas de accesibilidad WCAG 2.1
            </p>
          </div>
        </div>
      </footer>

      <ModalLegal 
        isOpen={modalOpen} 
        onClose={() => setModalOpen(false)} 
        type={modalType} 
      />
    </>
  )
}
