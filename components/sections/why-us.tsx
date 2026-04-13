"use client"

import { useEffect, useRef, useState } from "react"
import { CheckCircle2, Zap, Shield } from "lucide-react"
import { cn } from "@/lib/utils"

const benefits = [
  {
    icon: Zap,
    title: "Rápido y sin compromiso",
    description: "Recibe una versión inicial de prueba para comprobar que es lo que buscas antes de comprometerte.",
  },
  {
    icon: CheckCircle2,
    title: "Orientado a resultados",
    description: "Diseñamos cada elemento pensando en convertir visitantes en clientes reales para tu negocio.",
  },
  {
    icon: Shield,
    title: "Soporte continuo",
    description: "En todo momento tendrás acceso a nuestro equipo para resolver dudas, hacer ajustes y garantizar tu satisfacción total.",
  },
]

export function WhyUs() {
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
    <section id="por-que" ref={sectionRef} className="py-24 scroll-mt-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className={cn(
            "text-3xl font-bold tracking-tight mb-4 sm:text-4xl transition-all duration-700",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}>
            Por qué elegirnos
          </h2>
          <p className={cn(
            "text-lg text-muted-foreground transition-all duration-700 delay-100",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}>
            Nos diferenciamos por nuestra cercanía y enfoque en resultados reales.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {benefits.map((benefit, index) => (
            <div
              key={benefit.title}
              className={cn(
                "relative text-center transition-all duration-500",
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              )}
              style={{ transitionDelay: isVisible ? `${(index + 2) * 100}ms` : "0ms" }}
            >
              <div className="mx-auto mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-[#0d7377] to-[#14b8a6]">
                <benefit.icon className="h-8 w-8 text-white" />
              </div>
              <h3 className="mb-3 text-xl font-semibold">{benefit.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
