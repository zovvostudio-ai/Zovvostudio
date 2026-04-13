"use client"

import { useEffect, useRef, useState } from "react"
import { 
  Rocket, 
  CalendarCheck, 
  ShoppingCart, 
  Building2, 
  User, 
  Wrench 
} from "lucide-react"
import { cn } from "@/lib/utils"

const solutions = [
  {
    icon: Rocket,
    title: "Landings orientadas a ventas",
    description: "Páginas optimizadas para conversión que transforman visitantes en clientes.",
  },
  {
    icon: CalendarCheck,
    title: "Landings con reservas integradas",
    description: "Gestión de citas y reservas directamente desde tu landing page.",
  },
  {
    icon: ShoppingCart,
    title: "E-commerce",
    description: "Tiendas online seguras, rápidas y fáciles de gestionar.",
  },
  {
    icon: Building2,
    title: "Web corporativa",
    description: "Presencia institucional profesional que transmite confianza.",
  },
  {
    icon: User,
    title: "Web personal",
    description: "Portfolio y sistema de contacto para profesionales.",
  },
  {
    icon: Wrench,
    title: "Servicios extra",
    description: "Mantenimiento, SEO básico y analítica para tu web.",
  },
]

export function Solutions() {
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
    <section id="servicios" ref={sectionRef} className="py-24 bg-muted/30 scroll-mt-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className={cn(
            "text-3xl font-bold tracking-tight mb-4 sm:text-4xl transition-all duration-700",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}>
            Soluciones a tu medida
          </h2>
          <p className={cn(
            "text-lg text-muted-foreground transition-all duration-700 delay-100",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}>
            Cada proyecto es único. Transformamos tu idea en una web sólida, rápida y con propósito.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {solutions.map((solution, index) => (
            <div
              key={solution.title}
              className={cn(
                "group relative rounded-xl border border-border/60 bg-card p-6 transition-all duration-500 hover:border-[#0d7377]/40 hover:shadow-lg hover:shadow-[#0d7377]/5",
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              )}
              style={{ transitionDelay: isVisible ? `${(index + 2) * 100}ms` : "0ms" }}
            >
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-[#0d7377]/10 to-[#14b8a6]/10 transition-all group-hover:from-[#0d7377]/20 group-hover:to-[#14b8a6]/20">
                <solution.icon className="h-6 w-6 text-[#0d7377] dark:text-[#14b8a6]" />
              </div>
              <h3 className="mb-2 text-lg font-semibold">{solution.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {solution.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
