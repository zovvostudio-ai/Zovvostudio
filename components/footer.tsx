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

          <div className="grid grid-cols-1 gap-10 md:grid-cols-4">

            {/* COL 1 — LOGO */}
            <div className="flex flex-col items-center md:items-start">
              <span className="text-lg font-semibold text-[#0d7377]">
                Zovvo Studio
              </span>
              <p className="text-sm text-muted-foreground">
                Diseñamos páginas que venden.
              </p>
            </div>

            {/* COL 2 — SECCIONES */}
            <div className="flex flex-col text-center md:text-left space-y-2">
              <h4 className="font-semibold mb-2">Secciones</h4>

              <a href="#hero" className="text-muted-foreground hover:text-foreground transition-colors">
                Inicio
              </a>
              <a href="#servicios" className="text-muted-foreground hover:text-foreground transition-colors">
                Servicios
              </a>
              <a href="#proceso" className="text-muted-foreground hover:text-foreground transition-colors">
                Proceso
              </a>
              <a href="#contacto" className="text-muted-foreground hover:text-foreground transition-colors">
                Contacto
              </a>
            </div>

            {/* COL 3 — LEGAL */}
            <div className="flex flex-col text-center md:text-left space-y-2">
              <h4 className="font-semibold mb-2">Legal</h4>

              <button
                onClick={() => openModal("privacidad")}
                className="text-muted-foreground hover:text-foreground transition-colors text-left"
              >
                Política de Privacidad
              </button>

              <button
                onClick={() => openModal("aviso")}
                className="text-muted-foreground hover:text-foreground transition-colors text-left"
              >
                Aviso Legal
              </button>
            </div>

            {/* COL 4 — SÍGUENOS */}
            <div className="flex flex-col text-center md:text-left space-y-2">
              <h4 className="font-semibold mb-2">Síguenos</h4>

              <a
                href="mailto:zovvostudio@gmail.com"
                className="flex items-center justify-center md:justify-start gap-2 text-muted-foreground hover:text-foreground transition-colors"
              >
                <Mail className="h-5 w-5" />
                Email
              </a>

              <a
                href="https://instagram.com/zovvostudio"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center md:justify-start gap-2 text-muted-foreground hover:text-foreground transition-colors"
              >
                <Instagram className="h-5 w-5" />
                Instagram
              </a>
            </div>

          </div>

          <div className="mt-10 border-t border-border/40 pt-8 text-center">
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
