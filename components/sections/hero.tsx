"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function Hero() {
  const handleScrollToContact = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    const element = document.querySelector("#contacto")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="hero" className="relative min-h-[90vh] overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0d7377]/10 via-transparent to-[#14b8a6]/10 animate-gradient" />
        <div className="absolute inset-0">
          {/* Floating particles */}
          <div className="absolute left-[10%] top-[20%] h-2 w-2 rounded-full bg-[#0d7377]/30 animate-float" />
          <div className="absolute left-[20%] top-[60%] h-3 w-3 rounded-full bg-[#14b8a6]/20 animate-float stagger-2" />
          <div className="absolute left-[70%] top-[30%] h-2 w-2 rounded-full bg-[#0d7377]/25 animate-float stagger-3" />
          <div className="absolute left-[80%] top-[70%] h-4 w-4 rounded-full bg-[#14b8a6]/15 animate-float stagger-4" />
          <div className="absolute left-[50%] top-[80%] h-2 w-2 rounded-full bg-[#0d7377]/20 animate-float stagger-5" />
          <div className="absolute left-[30%] top-[40%] h-3 w-3 rounded-full bg-[#14b8a6]/25 animate-float stagger-1" />
        </div>
      </div>

      <div className="mx-auto flex max-w-7xl flex-col items-center justify-center px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="mx-auto max-w-3xl text-center">
          {/* Badge */}
          <div className="mb-6 inline-flex items-center rounded-full border border-border/60 bg-muted/50 px-4 py-1.5 text-sm opacity-0 animate-fade-in-up">
            <span className="mr-2 h-2 w-2 rounded-full bg-gradient-to-r from-[#0d7377] to-[#14b8a6]" />
            <span className="text-muted-foreground">Diseño web para negocios y profesionales.</span>
          </div>

          {/* H1 */}
          <h1 className="mb-6 text-4xl font-bold tracking-tight text-balance opacity-0 animate-fade-in-up stagger-1 sm:text-5xl lg:text-6xl">
            Atrae más clientes con una web que{" "}
            <span className="bg-gradient-to-r from-[#0d7377] to-[#14b8a6] bg-clip-text text-transparent">
              vende por ti
            </span>
          </h1>

          {/* Subtitle */}
          <p className="mb-10 text-lg leading-relaxed text-muted-foreground text-balance opacity-0 animate-fade-in-up stagger-2 sm:text-lg lg:text-xl">
            Para cualquier tipo de negocio, creamos páginas rápidas, claras y optimizadas para multiplicar tus conversiones y hacer crecer tu negocio.
          </p>

          {/* CTAs */}
          <div className="flex flex-col items-center justify-center gap-4 opacity-0 animate-fade-in-up stagger-3 sm:flex-row">
            <a href="#contacto" onClick={handleScrollToContact}>
              <Button 
                size="lg" 
                className="group bg-gradient-to-r from-[#0d7377] to-[#14b8a6] text-white hover:opacity-90 hover:shadow-lg hover:shadow-[#14b8a6]/20 transition-all px-8 text-base font-semibold"
              >
                Solicitar mi diseño de prueba gratis
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </a>
            <a href="#servicios" onClick={(e) => {
              e.preventDefault()
              document.querySelector("#servicios")?.scrollIntoView({ behavior: "smooth" })
            }}>
              <Button variant="outline" size="lg" className="px-8 text-base font-semibold">
                Ver todo lo que ofrecemos
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
