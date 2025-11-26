import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { LucideGithub, FileText, Database, MessageSquare, Mail } from "lucide-react"

const resources = [
  { icon: LucideGithub, label: "GitHub Repository", desc: "Full source code" },
  { icon: FileText, label: "API Documentation", desc: "REST API reference" },
  { icon: Database, label: "Dataset & ETL", desc: "PGN processing notebooks" },
  { icon: MessageSquare, label: "LLM Commentary", desc: "Prompt engineering docs" },
  { icon: FileText, label: "Testing Summary", desc: "QA reports & coverage" },
]

export function Resources() {
  return (
    <section className="py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-balance">Resources & Links</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            Explore documentation, source code, and technical artifacts
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {resources.map((resource, i) => (
            <Card
              key={i}
              className="glass p-6 space-y-4 hover:border-primary/50 transition-colors cursor-pointer group"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <resource.icon className="w-6 h-6 text-primary" />
              </div>
              <div className="space-y-1">
                <h3 className="text-lg font-semibold">{resource.label}</h3>
                <p className="text-sm text-muted-foreground">{resource.desc}</p>
              </div>
            </Card>
          ))}
        </div>

        <Card className="glass p-8 md:p-12 text-center space-y-6">
          <Mail className="w-12 h-12 text-primary mx-auto" />
          <div className="space-y-2">
            <h3 className="text-2xl font-semibold">Request Full Inception Paper</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              {"Get the complete technical design document, architecture diagrams, and implementation strategy"}
            </p>
          </div>
          <Button size="lg" className="bg-primary hover:bg-primary/90">
            Request Documentation
          </Button>
        </Card>
      </div>
    </section>
  )
}
