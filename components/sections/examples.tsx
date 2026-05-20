"use client"

import { useEffect, useRef, useState } from "react"
import { 
  Activity, 
  Scissors, 
  ArrowRight, 
  ExternalLink, 
  CalendarCheck2, 
  Sparkles, 
  ShieldCheck, 
  CheckCircle,
  Smartphone,
  Gauge
} from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

const projects = [
  {
    id: "fisioterapia",
    title: "FisioVital",
    subtitle: "Clínica de Fisioterapia & Salud",
    description: "Una landing page diseñada específicamente para profesionales de la salud. Incluye una interfaz reconfortante y limpia, catálogo estructurado de tratamientos, blog especializado y un sistema integrado para agendar citas directamente.",
    link: "https://demo-fisioterapia.vercel.app/",
    colorTheme: "teal",
    icon: Activity,
    features: [
      { name: "Reservas Online", icon: CalendarCheck2 },
      { name: "100% Mobile First", icon: Smartphone },
      { name: "SEO Optimizado", icon: ShieldCheck },
      { name: "Lighthouse 100", icon: Gauge }
    ],
    mockup: {
      brand: "FisioVital",
      tagline: "Especialistas en Fisioterapia Avanzada",
      logoColor: "text-emerald-600 dark:text-emerald-400",
      bgGradient: "from-emerald-50 to-teal-50/50 dark:from-emerald-950/15 dark:to-teal-950/10",
      cardBg: "bg-white/80 dark:bg-slate-900/80 border border-emerald-100/50 dark:border-emerald-900/30",
      buttonColor: "bg-emerald-600 hover:bg-emerald-700 text-white dark:bg-teal-500 dark:hover:bg-teal-600 dark:text-slate-900",
      highlightText: "text-emerald-700 dark:text-emerald-400",
      services: ["Fisioterapia Deportiva", "Osteopatía", "Pilates Clínico"]
    }
  },
  {
    id: "peluqueria",
    title: "Studio Hair",
    subtitle: "Salón de Peluquería & Estética",
    description: "Una web prémium e interactiva pensada para centros de estética, peluquerías y barberías de alto standing. Destaca por su estética moderna y elegante, galería de trabajos, listado de tarifas interactivo y selector inteligente de servicios y citas.",
    link: "https://demo-peluqueria.vercel.app/",
    colorTheme: "amber",
    icon: Scissors,
    features: [
      { name: "Agenda Inteligente", icon: CalendarCheck2 },
      { name: "Diseño Inmersivo", icon: Sparkles },
      { name: "Catálogo de Tarifas", icon: ShieldCheck },
      { name: "Ultra Rápida", icon: Gauge }
    ],
    mockup: {
      brand: "Studio Hair",
      tagline: "El Arte del Estilo y Cuidado Personal",
      logoColor: "text-amber-500 dark:text-amber-400",
      bgGradient: "from-slate-950/90 to-zinc-900/90 dark:from-slate-950 dark:to-zinc-950",
      cardBg: "bg-zinc-900/80 border border-amber-500/20",
      buttonColor: "bg-amber-500 hover:bg-amber-600 text-zinc-950",
      highlightText: "text-amber-400",
      services: ["Corte & Estilo", "Coloración", "Tratamiento de Brillo"]
    }
  }
]

export function Examples() {
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
    <section id="ejemplos" ref={sectionRef} className="py-24 bg-muted/20 scroll-mt-20 border-t border-b border-border/20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Encabezado de Sección */}
        <div className="mx-auto max-w-3xl text-center mb-20">
          <h2 className={cn(
            "text-3xl font-bold tracking-tight mb-4 sm:text-4xl transition-all duration-700",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}>
            Proyectos de ejemplo
          </h2>
          <p className={cn(
            "text-lg text-muted-foreground transition-all duration-700 delay-100 max-w-2xl mx-auto",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}>
            Ponemos a tu disposición demostraciones funcionales de proyectos reales para que experimentes la fluidez, la velocidad y la calidad que caracterizan nuestros desarrollos.
          </p>
        </div>

        {/* Grid de Proyectos */}
        <div className="grid gap-12 lg:grid-cols-2">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={cn(
                "group flex flex-col justify-between rounded-2xl border border-border/60 bg-card p-6 shadow-md transition-all duration-500 hover:border-[#0d7377]/40 hover:shadow-xl hover:shadow-[#0d7377]/5 dark:hover:shadow-[#14b8a6]/5",
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              )}
              style={{ transitionDelay: isVisible ? `${(index + 1) * 150}ms` : "0ms" }}
            >
              <div>
                
                {/* Mockup de Ventana de Navegador */}
                <div className="relative rounded-xl border border-border/80 bg-muted/40 p-2 shadow-inner mb-6 transition-all duration-300 group-hover:scale-[1.01]">
                  
                  {/* Navegador Cabecera */}
                  <div className="flex items-center justify-between px-3 py-2 border-b border-border/40 bg-muted/80 dark:bg-card/50 rounded-t-lg">
                    {/* Botones de ventana estilo Mac */}
                    <div className="flex gap-1.5">
                      <span className="h-2.5 w-2.5 rounded-full bg-destructive/70" />
                      <span className="h-2.5 w-2.5 rounded-full bg-amber-500/70" />
                      <span className="h-2.5 w-2.5 rounded-full bg-emerald-500/70" />
                    </div>
                    {/* Barra de dirección URL */}
                    <div className="flex-1 mx-4 text-center text-[10px] font-mono py-0.5 rounded bg-background/50 border border-border/30 text-muted-foreground select-none truncate max-w-[280px]">
                      {project.link.replace("https://", "")}
                    </div>
                    {/* Espaciado para centrar */}
                    <div className="w-12" />
                  </div>

                  {/* Cuerpo del Navegador (Captura Real de la Web) */}
                  <div className="relative aspect-[16/10] w-full overflow-hidden rounded-b-lg bg-muted select-none">
                    <img 
                      src={project.id === "fisioterapia" ? "/images/fisioterapia-demo.png" : "/images/peluqueria-demo.png"} 
                      alt={`Captura de pantalla de ${project.title}`}
                      className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
                    />
                  </div>
                </div>

                {/* Info Text */}
                <div className="flex items-center gap-2 mb-3">
                  <div className={cn(
                    "flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br transition-all duration-300",
                    project.colorTheme === "teal"
                      ? "from-emerald-500/10 to-teal-500/10 text-emerald-600 dark:text-emerald-400 group-hover:from-emerald-500/20 group-hover:to-teal-500/20"
                      : "from-amber-500/10 to-orange-500/10 text-amber-500 group-hover:from-amber-500/20 group-hover:to-orange-500/20"
                  )}>
                    <project.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold tracking-tight text-foreground">{project.title}</h3>
                    <p className="text-xs text-muted-foreground font-medium">{project.subtitle}</p>
                  </div>
                </div>

                <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                  {project.description}
                </p>

                {/* Features Badges */}
                <div className="grid grid-cols-2 gap-3 mb-8">
                  {project.features.map((feature) => (
                    <div 
                      key={feature.name} 
                      className="flex items-center gap-2 px-3 py-2 rounded-lg border border-border/40 bg-muted/10 dark:bg-card/30"
                    >
                      <feature.icon className={cn(
                        "h-4 w-4 shrink-0",
                        project.colorTheme === "teal" ? "text-emerald-600 dark:text-emerald-400" : "text-amber-500"
                      )} />
                      <span className="text-xs font-medium text-foreground/80">{feature.name}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Botón CTA del Proyecto */}
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full"
              >
                <Button 
                  className={cn(
                    "w-full justify-between items-center transition-all duration-300 cursor-pointer shadow-md py-5 font-semibold text-sm",
                    project.colorTheme === "teal"
                      ? "bg-gradient-to-r from-emerald-600 to-teal-600 text-white hover:opacity-95 hover:shadow-lg hover:shadow-emerald-500/10 dark:from-teal-500 dark:to-emerald-500 dark:text-slate-900"
                      : "bg-gradient-to-r from-amber-500 to-orange-500 text-zinc-950 hover:opacity-95 hover:shadow-lg hover:shadow-amber-500/10"
                  )}
                >
                  <span className="flex items-center gap-1.5">
                    Explorar demo interactiva
                    <ExternalLink className="h-3.5 w-3.5 opacity-80" />
                  </span>
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </a>

            </div>
          ))}
        </div>

        {/* Footer persuasivo dentro de la sección */}
        <div className={cn(
          "mt-16 text-center transition-all duration-700 delay-300",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        )}>
          <p className="text-sm text-muted-foreground mb-4">
            ¿Quieres ver cómo luciría tu negocio con una web similar totalmente personalizada?
          </p>
          <a
            href="#contacto"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#0d7377] dark:text-[#14b8a6] hover:underline"
            onClick={(e) => {
              e.preventDefault()
              const element = document.querySelector("#contacto")
              if (element) element.scrollIntoView({ behavior: "smooth" })
            }}
          >
            Solicita tu propuesta y boceto inicial gratuito
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>

      </div>
    </section>
  )
}
