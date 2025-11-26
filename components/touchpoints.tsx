import { Card } from "@/components/ui/card"
import { Monitor, Smartphone, Database } from "lucide-react"

const touchpoints = [
  {
    icon: Monitor,
    label: "Web App",
    desc: "Full-featured React application with real-time analysis and interactive board",
  },
  {
    icon: Smartphone,
    label: "Mobile App",
    desc: "Responsive mobile experience optimized for on-the-go chess insights",
  },
  { icon: Database, label: "Bulk Export", desc: "Comprehensive data analysis tooling with PGN export capabilities" },
]

export function Touchpoints() {
  return (
    <section className="py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-balance">Touchpoints & Integrations</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            {"Multi-platform accessibility with deep integrations to Chess.com and Lichess via OAuth"}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {touchpoints.map((touchpoint, i) => (
            <Card
              key={i}
              className="glass p-8 space-y-4 hover:border-primary/50 transition-all hover:scale-105 text-center group"
            >
              <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mx-auto group-hover:bg-primary/20 transition-colors">
                <touchpoint.icon className="w-8 h-8 text-primary" />
              </div>
              <div className="space-y-2">
                <h3 className="font-semibold text-lg">{touchpoint.label}</h3>
                <p className="text-sm text-muted-foreground text-pretty">{touchpoint.desc}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
