"use client"

import { useEffect, useRef, useState } from "react"
import { cn } from "@/lib/utils"

const steps = [
  {
    number: "01",
    title: "Nos conocemos",
    description: "Cuéntanos sobre tu negocio y qué necesitas. Te asesoramos sin compromisos.",
  },
  {
    number: "02",
    title: "Primer diseño gratuito",
    description: "Construimos un boceto de tu futura web para que veas la estructura y el estilo antes de tomar una decisión.",
  },
  {
    number: "03",
    title: "Desarrollo a medida",
    description: "Aplicamos tu imagen, optimizamos los textos para vender y configuramos todo para que sea rapidísima.",
  },
  {
    number: "04",
    title: "Revisión conjunta",
    description: "Repasamos cada detalle contigo. Hacemos todos los ajustes necesarios hasta que el resultado te parezca perfecto.",
  },
  {
    number: "05",
    title: "¡Lanzamiento y a vender!",
    description: "Publicamos tu web en internet. Ya está lista para recibir visitas, captar contactos y generar resultados reales.",
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
            Tu web lista en 5 sencillos pasos
          </h2>
          <p className={cn(
            "text-lg text-muted-foreground transition-all duration-700 delay-100",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}>
            Sin tecnicismos ni dolores de cabeza. Tú te enfocas en tu negocio y nosotros en hacer el trabajo por ti.
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
