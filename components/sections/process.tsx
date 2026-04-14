"use client"

import { useEffect, useRef, useState } from "react"
import { cn } from "@/lib/utils"

const steps = [
  {
    number: "01",
    title: "Diagnóstico gratuito",
    description: "Cuéntanos tu proyecto y tus objetivos. Analizamos tu caso sin compromiso.",
  },
  {
    number: "02",
    title: "Versión inicial de prueba",
    description: "Comprueba la estructura y el tono antes de tomar una decisión.",
  },
  {
    number: "03",
    title: "Desarrollo y personalización",
    description: "Ajustes, pruebas y refinamiento hasta que esté perfecta.",
  },
  {
    number: "04",
    title: "Revisión y validación final",
    description: "Te mostramos la versión completa para que revises diseño, contenido y funcionalidad. Ajustamos lo necesario hasta que la web refleje exactamente lo que buscas.",
  },
  {
    number: "05",
    title: "Publicación y entrega",
    description: "Tu web lista para recibir clientes y generar resultados.",
  },
]

export function Process() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="proceso" ref={sectionRef} className="py-24 bg-muted/30 scroll-mt-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Título */}
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className={cn(
            "text-3xl font-bold tracking-tight mb-4 sm:text-4xl transition-all duration-700",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}>
            Cómo trabajamos
          </h2>
          <p className={cn(
            "text-lg text-muted-foreground transition-all duration-700 delay-100",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}>
            Un proceso simple y transparente para que tengas el control en todo momento.
          </p>
        </div>

        {/* GRID 1-2 / 3-4 / 5 */}
        <div className="grid gap-12 md:grid-cols-2">
          {steps.map((step, index) => (
            <div
              key={step.number}
              className={cn(
                "relative text-center transition-all duration-500",
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
                index === 4 ? "md:col-span-2" : "" // ⭐ Paso 5 ocupa toda la fila
              )}
              style={{ transitionDelay: isVisible ? `${(index + 2) * 150}ms` : "0ms" }}
            >
              {/* Número */}
              <div className="relative mx-auto mb-6">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border-2 border-[#0d7377]/30 bg-card text-2xl font-bold text-[#0d7377] dark:text-[#14b8a6] dark:border-[#14b8a6]/30">
                  {step.number}
                </div>
              </div>

              <h3 className="mb-2 text-lg font-semibold">{step.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
