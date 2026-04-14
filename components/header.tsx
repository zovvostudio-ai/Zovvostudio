"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { useTheme } from "next-themes"
import { Moon, Sun, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const navigation = [
  { name: "Inicio", href: "#hero" },
  { name: "Servicios", href: "#servicios" },
  { name: "Nuestro método", href: "#proceso" },
  { name: "Contacto", href: "#contacto" },
]

export function Header() {
  const { setTheme, resolvedTheme } = useTheme()
  const [mounted, setMounted] = React.useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false)

  // ⭐ Estado para saber qué sección está activa
  const [activeSection, setActiveSection] = React.useState("Inicio")

  React.useEffect(() => {
    setMounted(true)

    const sections = navigation.map((item) => document.querySelector(item.href))

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute("id")
            const navItem = navigation.find((n) => n.href === `#${id}`)
            if (navItem) setActiveSection(navItem.name)
          }
        })
      },
      { threshold: 0.5 }
    )

    sections.forEach((section) => {
      if (section) observer.observe(section)
    })

    return () => observer.disconnect()
  }, [])

  const toggleTheme = () => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark")
  }

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("#")) {
      e.preventDefault()
      const element = document.querySelector(href)
      if (element) {
        element.scrollIntoView({ behavior: "smooth" })
      }
      setMobileMenuOpen(false)
    }
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-lg">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          {mounted && (
            <Image
              src={resolvedTheme === "dark" ? "/images/logo-dark.png" : "/images/logo-light.png"}
              alt="Zovvo Studio"
              width={40}
              height={40}
              className="h-10 w-10"
            />
          )}
          <span className="text-xl font-semibold tracking-tight">Zovvo Studio</span>
        </Link>

        {/* Desktop navigation */}
        <div className="hidden md:flex md:items-center md:gap-8">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href)}
              className={cn(
                "text-sm font-medium transition-colors",
                activeSection === item.name
                  ? "text-[#0d7377]"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              {item.name}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-4">
          {/* Theme toggle */}
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
            className="rounded-full"
          >
            {mounted && (
              resolvedTheme === "dark" ? (
                <Sun className="h-5 w-5" />
              ) : (
                <Moon className="h-5 w-5" />
              )
            )}
          </Button>

          {/* CTA Button - Desktop */}
          <a
            href="#contacto"
            onClick={(e) => handleNavClick(e, "#contacto")}
            className="hidden md:block"
          >
            <Button className="bg-gradient-to-r from-[#0d7377] to-[#14b8a6] text-white hover:opacity-90 hover:shadow-lg hover:shadow-[#00ffd1]/20 transition-all">
              Solicitar diagnóstico gratuito
            </Button>
          </a>

          {/* Mobile menu button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </nav>

      {/* Mobile navigation */}
      <div className={cn("md:hidden", mobileMenuOpen ? "block" : "hidden")}>
        <div className="space-y-1 px-4 pb-4">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href)}
              className={cn(
                "block rounded-lg px-3 py-2 text-base font-medium transition-colors",
                activeSection === item.name
                  ? "text-[#0d7377] bg-muted"
                  : "text-muted-foreground hover:bg-muted hover:text-foreground"
              )}
            >
              {item.name}
            </a>
          ))}

          <a href="#contacto" onClick={(e) => handleNavClick(e, "#contacto")}>
            <Button className="mt-2 w-full bg-gradient-to-r from-[#0d7377] to-[#14b8a6] text-white hover:opacity-90">
              Solicitar versión de prueba
            </Button>
          </a>
        </div>
      </div>
    </header>
  )
}
