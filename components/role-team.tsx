import { Card } from "@/components/ui/card"
import { Users } from "lucide-react"

export function RoleTeam() {
  return (
    <section className="py-24 px-4 bg-muted/20">
      <div className="max-w-5xl mx-auto">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-balance">Meet the Team</h2>
        </div>

        <Card className="glass p-8 md:p-12 space-y-8">
          <div className="flex items-start gap-6">
            <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
              <Users className="w-7 h-7 text-primary" />
            </div>
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold">Team 64 Squares</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {
                  "Built by a collaborative team of six developers: Steve, Vamsi, Pavan, Harninder, Aparna, Ethili, and Prince. Together, we architected and implemented a full-stack AI-native chess platform, handling frontend design, backend API development, database schema implementation, PGN tooling, and end-to-end system integration through Agile sprints."
                }
              </p>
              <div className="flex flex-wrap gap-2 pt-2">
                <span className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full">Steve</span>
                <span className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full">Vamsi</span>
                <span className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full">Pavan</span>
                <span className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full">Harninder</span>
                <span className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full">Ethili</span>
                <span className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full">Prince</span>
                <span className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full">Aparna</span>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  )
}
