import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const frontend = ["React TypeScript", "Vite", "AuthContext", "chess.js", "PGN modals", "Responsive design"]

const backend = ["Node/Express", "MSSQL", "JWT/bcrypt", "Nodemailer", "Middleware", "REST APIs"]

const aiData = [
  "PGN ETL scripts",
  "LLM commentary notebooks",
  "Stockfish cloud engine",
  "2-ply minimax fallback",
  "Telemetry hooks",
  "RL-ready architecture",
]

const tooling = ["Docker", "PowerShell automation", "ESLint", "API testing suite"]

export function Architecture() {
  return (
    <section className="py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-balance">Architecture & Stack</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            Modern, scalable architecture built for AI integration and real-time chess intelligence
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <Card className="glass p-8 space-y-6">
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold">Frontend</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {frontend.map((tech) => (
                <Badge key={tech} variant="secondary" className="px-3 py-1">
                  {tech}
                </Badge>
              ))}
            </div>
          </Card>

          <Card className="glass p-8 space-y-6">
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center">
                <svg className="w-6 h-6 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold">Backend</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {backend.map((tech) => (
                <Badge key={tech} variant="secondary" className="px-3 py-1">
                  {tech}
                </Badge>
              ))}
            </div>
          </Card>

          <Card className="glass p-8 space-y-6">
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold">AI & Data Layer</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {aiData.map((tech) => (
                <Badge key={tech} variant="secondary" className="px-3 py-1">
                  {tech}
                </Badge>
              ))}
            </div>
          </Card>

          <Card className="glass p-8 space-y-6">
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center">
                <svg className="w-6 h-6 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold">Tooling</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {tooling.map((tech) => (
                <Badge key={tech} variant="secondary" className="px-3 py-1">
                  {tech}
                </Badge>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}
