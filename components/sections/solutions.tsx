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
    title: "Webs para Captar Clientes",
    description: "Páginas optimizadas estratégicamente para que quien te visite, te contacte o te compre sin dudarlo.",
  },
  {
    icon: CalendarCheck,
    title: "Sistemas de Reservas",
    description: "Ideal para clínicas, peluquerías o asesores. Tus clientes podrán reservar citas directamente 24/7.",
  },
  {
    icon: ShoppingCart,
    title: "Tiendas Online (E-commerce)",
    description: "Vende tus productos a cualquier hora con una tienda segura, intuitiva y muy fácil de gestionar por ti mismo.",
  },
  {
    icon: Building2,
    title: "Web Corporativa",
    description: "Transmite profesionalidad absoluta. La carta de presentación perfecta para tu empresa local o franquicia.",
  },
  {
    icon: User,
    title: "Portfolio y Marca Personal",
    description: "Destaca como profesional independiente. Muestra tu valor y facilita que te contraten por tus servicios.",
  },
  {
    icon: Wrench,
    title: "Mantenimiento y SEO",
    description: "Nos encargamos de que tu web siempre funcione, cargue súper rápido y aparezca en Google cuando te busquen.",
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
            Soluciones adaptadas a tu sector
          </h2>
          <p className={cn(
            "text-lg text-muted-foreground transition-all duration-700 delay-100",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}>
            No importa si tienes una cafetería, un taller o eres freelance. Entendemos tu negocio y te damos la herramienta perfecta para escalar.
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
