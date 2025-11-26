import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { Target, Users, Trophy, Tv, Video } from "lucide-react"

const personas = [
  { icon: Target, label: "Casual Competitor" },
  { icon: Users, label: "Coach/Academy" },
  { icon: Trophy, label: "Pro/Team" },
  { icon: Tv, label: "Commentator/Broadcaster" },
  { icon: Video, label: "Content Creator" },
]

const values = [
  "Personalized training paths",
  "Instant commentator packets",
  "Realistic simulations",
  "Shareable evidence & analytics",
  "Deep integrations (OBS, Chess.com, APIs)",
]

export function VisionPersonas() {
  return (
    <section className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-balance">Vision & Personas</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
            {
              "Building the future of chess intelligence — empowering players, coaches, and broadcasters with AI-driven insights and adaptive learning systems"
            }
          </p>
        </div>

        {/* Personas */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
          {personas.map((persona) => (
            <Badge key={persona.label} variant="outline" className="glass px-4 py-3 text-sm flex items-center gap-2">
              <persona.icon className="w-4 h-4" />
              {persona.label}
            </Badge>
          ))}
        </div>

        {/* Value props */}
        <Card className="glass p-8">
          <h3 className="text-2xl font-semibold mb-6 text-center">Core Value Propositions</h3>
          <ul className="grid md:grid-cols-2 gap-4">
            {values.map((value, i) => (
              <li key={i} className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                <span className="text-lg text-muted-foreground">{value}</span>
              </li>
            ))}
          </ul>
        </Card>
      </div>
    </section>
  )
}
