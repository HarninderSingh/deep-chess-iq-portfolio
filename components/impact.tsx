import { Card } from "@/components/ui/card"

const outcomes = [
  "Complete 7-table MSSQL database schema with migrations",
  "11+ secured REST API endpoints with JWT authentication",
  "10+ React TypeScript pages with responsive design",
  "PGN ETL scripts processing 10,000+ game dataset",
  "LLM-powered commentary generation experiments",
  "Comprehensive API testing suite with 95%+ coverage",
  "Docker containerization for consistent deployment",
  "Automated SMTP invitation system for coaches",
]

export function Impact() {
  return (
    <section className="py-24 px-4 bg-muted/20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-balance">Impact & Outcomes</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            Measurable deliverables demonstrating full-stack capabilities and AI integration
          </p>
        </div>

        <Card className="glass p-8 md:p-12 space-y-8">
          <ul className="grid md:grid-cols-2 gap-6">
            {outcomes.map((outcome, i) => (
              <li key={i} className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-primary text-sm font-bold">{i + 1}</span>
                </div>
                <span className="text-lg leading-relaxed">{outcome}</span>
              </li>
            ))}
          </ul>

          <div className="pt-8 border-t border-border">
            <blockquote className="text-2xl font-light text-center italic text-muted-foreground text-balance">
              {'"Players get targeted training, coaches orchestrate cohorts, broadcasters get instant storylines."'}
            </blockquote>
          </div>
        </Card>
      </div>
    </section>
  )
}
