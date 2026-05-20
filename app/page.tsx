import { Hero } from "@/components/sections/hero"
import { Solutions } from "@/components/sections/solutions"
import { WhyUs } from "@/components/sections/why-us"
import { Examples } from "@/components/sections/examples"
import { Process } from "@/components/sections/process"
import { Contact } from "@/components/sections/contact"

export default function Home() {
  return (
    <>
      <Hero />
      <Solutions />
      <Process />
      <WhyUs />
      <Examples />
      <Contact />
    </>
  )
}
