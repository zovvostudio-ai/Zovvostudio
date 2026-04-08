import { Metadata } from "next"
import Link from "next/link"
import { 
  Rocket, 
  CalendarCheck, 
  ShoppingCart, 
  Building2, 
  User, 
  Wrench,
  Check,
  ArrowRight
} from "lucide-react"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Servicios | Zovvo Studio",
  description: "Landings orientadas a ventas, webs con reservas, e-commerce, webs corporativas y más. Soluciones web a medida para tu negocio.",
}

const services = [
  {
    icon: Rocket,
    title: "Landings orientadas a ventas",
    description: "Páginas diseñadas específicamente para convertir visitantes en clientes. Optimizadas para captar leads y generar ventas.",
    features: [
      "Diseño orientado a conversión",
      "Copywriting persuasivo",
      "Formularios optimizados",
      "Integración con herramientas de marketing",
      "Análisis y seguimiento de resultados",
    ],
  },
  {
    icon: CalendarCheck,
    title: "Landings con reservas integradas",
    description: "Gestiona citas y reservas directamente desde tu página web. Perfecta para profesionales y negocios de servicios.",
    features: [
      "Sistema de reservas integrado",
      "Calendario sincronizado",
      "Confirmaciones automáticas",
      "Recordatorios por email",
      "Panel de gestión de citas",
    ],
  },
  {
    icon: ShoppingCart,
    title: "E-commerce",
    description: "Tiendas online completas, seguras y fáciles de gestionar. Vende tus productos 24/7 sin complicaciones.",
    features: [
      "Catálogo de productos",
      "Carrito de compras",
      "Pasarela de pago segura",
      "Gestión de inventario",
      "Panel de administración",
    ],
  },
  {
    icon: Building2,
    title: "Web corporativa",
    description: "Presencia institucional profesional que transmite confianza y solidez a tus clientes potenciales.",
    features: [
      "Diseño profesional y moderno",
      "Secciones personalizadas",
      "Formulario de contacto",
      "Integración con redes sociales",
      "Optimización SEO básica",
    ],
  },
  {
    icon: User,
    title: "Web personal para profesionales",
    description: "Portfolio y sistema de contacto para freelancers, consultores y profesionales independientes.",
    features: [
      "Portfolio de trabajos",
      "Biografía profesional",
      "Sistema de contacto",
      "Blog integrado (opcional)",
      "Descarga de CV",
    ],
  },
  {
    icon: Wrench,
    title: "Servicios adicionales",
    description: "Complementa tu web con servicios que la mantienen actualizada, visible y funcionando al máximo.",
    features: [
      "Mantenimiento mensual",
      "SEO básico y posicionamiento",
      "Analítica web",
      "Actualizaciones de contenido",
      "Soporte técnico continuo",
    ],
  },
]

export default function ServiciosPage() {
  return (
    <>
      {/* Hero */}
      <section className="py-20 bg-muted/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight mb-6 sm:text-5xl">
              Nuestros{" "}
              <span className="bg-gradient-to-r from-[#0d7377] to-[#14b8a6] bg-clip-text text-transparent">
                servicios
              </span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Soluciones web completas adaptadas a las necesidades de tu negocio. 
              Desde landings de alto impacto hasta tiendas online completas.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {services.map((service, index) => (
              <div 
                key={service.title}
                className={`flex flex-col gap-8 lg:flex-row lg:items-center ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* Icon and content */}
                <div className="flex-1">
                  <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-[#0d7377] to-[#14b8a6]">
                    <service.icon className="h-7 w-7 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold mb-4 sm:text-3xl">{service.title}</h2>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {service.description}
                  </p>
                </div>

                {/* Features */}
                <div className="flex-1">
                  <div className="rounded-xl border border-border/60 bg-card p-6">
                    <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-4">
                      Incluye
                    </h3>
                    <ul className="space-y-3">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-3">
                          <Check className="h-5 w-5 text-[#14b8a6] mt-0.5 shrink-0" />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-muted/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-[#0d7377] to-[#14b8a6] p-8 sm:p-12 lg:p-16">
            <div className="relative z-10 mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-bold tracking-tight text-white mb-4 sm:text-4xl">
                ¿Listo para empezar?
              </h2>
              <p className="text-lg text-white/90 mb-8">
                Solicita tu diagnóstico gratuito y recibe una versión de prueba sin compromiso.
              </p>
              <Link href="/#contacto">
                <Button size="lg" variant="secondary" className="group">
                  Solicitar versión de prueba
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
            <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
          </div>
        </div>
      </section>
    </>
  )
}
