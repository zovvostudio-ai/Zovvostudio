import { Hero } from "@/components/sections/hero"
import { Solutions } from "@/components/sections/solutions"
import { WhyUs } from "@/components/sections/why-us"
import { Process } from "@/components/sections/process"
import { Contact } from "@/components/sections/contact"

export default function Home() {
  return (
    <>
      <Hero />
      <Solutions />
      <Process />
      <WhyUs />
      <Contact />
    </>
  )
}
