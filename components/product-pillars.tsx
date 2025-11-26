import { Card } from "@/components/ui/card"
import { Gamepad2, Brain, Cpu } from "lucide-react"

const pillars = [
  {
    icon: Gamepad2,
    title: "Immersive Gameplay Workspace",
    description:
      "React TypeScript UI with chess.js integration, PGN import/export, game library, and responsive design. Complete gameplay experience with real-time analysis.",
    deliverables: ["Interactive chessboard", "PGN modals & parsing", "Game filters & search", "Move validation"],
  },
  {
    icon: Brain,
    title: "Coach & Commentator Intelligence Hub",
    description:
      "Automated statistics generation, LLM-powered commentary, coach dashboards for cohort management, and QuickPack analytics for broadcasters.",
    deliverables: ["Coach portal & invites", "Assignment tracking", "Commentator QuickPack", "OBS overlay support"],
  },
  {
    icon: Cpu,
    title: "AI-Ready Infrastructure",
    description:
      "Node/Express REST APIs, MSSQL 7-table schema, JWT security, SMTP verification, telemetry hooks, and dual-engine architecture (cloud + minimax).",
    deliverables: ["11+ secured endpoints", "Database migrations", "Authentication layer", "Engine integration"],
  },
]

export function ProductPillars() {
  return (
    <section className="py-24 px-4 bg-muted/20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-balance">Product Pillars</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            Three foundational systems working together to deliver comprehensive chess intelligence
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {pillars.map((pillar, i) => (
            <Card key={i} className="glass p-8 space-y-6 hover:border-primary/50 transition-colors group">
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <pillar.icon className="w-7 h-7 text-primary" />
              </div>

              <div className="space-y-3">
                <h3 className="text-2xl font-semibold">{pillar.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{pillar.description}</p>
              </div>

              <div className="space-y-2 pt-4 border-t border-border">
                <p className="text-sm font-medium text-muted-foreground">Key Deliverables:</p>
                <ul className="space-y-1">
                  {pillar.deliverables.map((item, j) => (
                    <li key={j} className="text-sm flex items-start gap-2">
                      <span className="text-secondary mt-0.5">→</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
