import { Navigation } from "@/components/navigation"
import { Hero } from "@/components/hero"
import { Services } from "@/components/services"
import { Team } from "@/components/team"
import { PortfolioShowcase } from "@/components/portfolio-showcase"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"

export default function Page() {
  return (
    <main className="min-h-screen chess-pattern">
      <Navigation />
      <Hero />
      <Services />
      <Team />
      <PortfolioShowcase />
      <Contact />
      <Footer />
    </main>
  )
}
