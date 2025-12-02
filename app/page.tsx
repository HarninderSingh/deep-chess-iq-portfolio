import { Navigation } from "@/components/navigation"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Services } from "@/components/services"
import { Team } from "@/components/team"
import { PortfolioShowcase } from "@/components/portfolio-showcase"
import { Testimonials } from "@/components/testimonials"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"

export default function Page() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <About />
      <Team />
      <Services />
      <PortfolioShowcase />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  )
}
