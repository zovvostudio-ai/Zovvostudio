"use client"

import { useEffect, useRef, useState } from "react"
import { ContactForm } from "@/components/contact-form"
import { Mail, Instagram } from "lucide-react"
import { cn } from "@/lib/utils"

export function Contact() {
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
    <section id="contacto" ref={sectionRef} className="py-24 scroll-mt-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className={cn(
            "text-3xl font-bold tracking-tight mb-4 sm:text-4xl transition-all duration-700",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}>
            Hablemos de tu proyecto
          </h2>
          <p className={cn(
            "text-lg text-muted-foreground transition-all duration-700 delay-100",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}>
            Cuéntanos tu idea y recibe una versión inicial de prueba sin compromiso.
          </p>
        </div>

        <div className="grid gap-12 lg:grid-cols-2">
          {/* Contact info */}
          <div className={cn(
            "transition-all duration-700 delay-200",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}>
            <h3 className="text-xl font-semibold mb-6">Información de contacto</h3>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-[#0d7377]/10 to-[#14b8a6]/10">
                  <Mail className="h-5 w-5 text-[#0d7377] dark:text-[#14b8a6]" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <a 
                    href="mailto:zovvostudio@gmail.com" 
                    className="font-medium hover:text-[#0d7377] dark:hover:text-[#14b8a6] transition-colors"
                  >
                    zovvostudio@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-[#0d7377]/10 to-[#14b8a6]/10">
                  <Instagram className="h-5 w-5 text-[#0d7377] dark:text-[#14b8a6]" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Instagram</p>
                  <a 
                    href="https://instagram.com/zovvostudio"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium hover:text-[#0d7377] dark:hover:text-[#14b8a6] transition-colors"
                  >
                    @zovvostudio
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact form */}
          <div className={cn(
            "rounded-xl border border-border/60 bg-card p-6 sm:p-8 transition-all duration-700 delay-300",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  )
}
