import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle2, Circle, Clock } from "lucide-react"

const phases = [
  { phase: "Inception", status: "complete", desc: "Problem definition, personas, technical design" },
  { phase: "Architecture", status: "complete", desc: "Database schema, API design, frontend structure" },
  { phase: "Implementation", status: "complete", desc: "Full-stack development, PGN tools, authentication" },
  { phase: "Integration", status: "complete", desc: "Engine integration, LLM experiments, testing" },
  { phase: "QA & Documentation", status: "complete", desc: "Testing suite, API docs, deployment prep" },
  { phase: "Phase II: Adaptive Bots", status: "complete", desc: "RL-powered opponent simulation, NNUE models" },
  {
    phase: "Phase III: Marketplace",
    status: "complete",
    desc: "Player-sim marketplace, voice assistant, collaboration",
  },
]

export function Roadmap() {
  return (
    <section className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-balance">Roadmap Timeline</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            From inception to future phases — a structured approach to building intelligent chess systems
          </p>
        </div>

        <div className="space-y-4">
          {phases.map((phase, i) => (
            <Card
              key={i}
              className={`glass p-6 transition-colors ${phase.status === "complete" ? "border-primary/30" : "border-border"}`}
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 mt-1">
                  {phase.status === "complete" ? (
                    <CheckCircle2 className="w-6 h-6 text-primary" />
                  ) : phase.status === "planned" ? (
                    <Clock className="w-6 h-6 text-muted-foreground" />
                  ) : (
                    <Circle className="w-6 h-6 text-muted-foreground" />
                  )}
                </div>
                <div className="flex-1 space-y-2">
                  <div className="flex items-center gap-3 flex-wrap">
                    <h3 className="text-xl font-semibold">{phase.phase}</h3>
                    <Badge variant={phase.status === "complete" ? "default" : "secondary"} className="text-xs">
                      {phase.status === "complete" ? "Delivered" : "Planned"}
                    </Badge>
                  </div>
                  <p className="text-muted-foreground">{phase.desc}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
