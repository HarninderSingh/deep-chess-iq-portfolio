import { Card } from "@/components/ui/card"
import { Shield } from "lucide-react"

const features = [
  {
    category: "Gameplay & PGN Tools",
    items: [
      "Interactive chess interface",
      "PGN import/export",
      "Game library with filters",
      "Real-time move validation",
    ],
  },
  {
    category: "Profile & Settings",
    items: ["User authentication", "Personalized dashboards", "Preference management", "Progress tracking"],
  },
  {
    category: "Coach Dashboard",
    items: [
      "Student invitations via SMTP",
      "Assignment creation & tracking",
      "Cohort management",
      "Performance analytics",
    ],
  },
  {
    category: "Commentator QuickPack",
    items: ["Instant game summaries", "OBS overlay integration", "Key moment highlights", "Storyline generation"],
  },
  {
    category: "Pro-Match Simulator",
    items: [
      "Opponent style simulation",
      "Adaptive RL bots (Phase II)",
      "Batch analysis tools",
      "Player marketplace (Phase III)",
    ],
  },
]

export function FeatureDeepDive() {
  return (
    <section className="py-24 px-4 bg-muted/20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-balance">Feature Deep Dive</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            Comprehensive features spanning gameplay, coaching, commentary, and competitive analysis
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {features.map((feature, i) => (
            <Card key={i} className="glass p-6 space-y-4">
              <h3 className="text-xl font-semibold text-primary">{feature.category}</h3>
              <ul className="space-y-2">
                {feature.items.map((item, j) => (
                  <li key={j} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <span className="text-secondary mt-0.5">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>

        {/* Security callout */}
        <Card className="glass p-8 border-primary/30">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
              <Shield className="w-6 h-6 text-primary" />
            </div>
            <div className="space-y-2">
              <h3 className="text-2xl font-semibold">Security & Reliability</h3>
              <p className="text-muted-foreground leading-relaxed">
                {
                  "Enterprise-grade security with JWT authentication, bcrypt password hashing, middleware guards, comprehensive telemetry, and SMTP verification. Built for scale with Docker containerization and automated testing."
                }
              </p>
            </div>
          </div>
        </Card>
      </div>
    </section>
  )
}
