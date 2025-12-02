"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

export function Team() {
  const teamMembers = [
    {
      name: "Stephen David Chitilapalli Mathew",
      role: "Technical Lead & Cloud Architect",
      description:
        "Led technical architecture and deployed DeepChessIQ services to Microsoft Azure, ensuring reliable, scalable cloud infrastructure for the entire platform.",
      image: "/placeholder-user.jpg"
    },
    {
      name: "Vamsi Krishna Maradani",
      role: "Chess Engine & Stockfish Engineer",
      description:
        "Implemented and optimized the Stockfish-based analysis API, tuning performance and evaluation settings for fast, accurate chess insights.",
      image: "/placeholder-user.jpg"
    },
    {
      name: "Pavan Kumar Pilli",
      role: "Data Engineer",
      description: "Designs and implements data pipelines, ETL processes, and data infrastructure to support DeepChessIQ's analytics and machine learning workflows.",
      image: "/placeholder-user.jpg"
    },
    {
      name: "Harninder Singh",
      role: "Team Lead & Integration Engineer",
      description:
        "Led the team and owned end-to-end integration of services, wiring frontend, backend, and AI components together and deploying stable builds across environments.",
      image: "/placeholder-user.jpg"
    },
    {
      name: "Aparna Jayakumar Resmi",
      role: "AI Commentary Model Engineer",
      description:
        "Researched, trained, and refined the chess commentary model, focusing on natural, human-like explanations of engine lines and game plans.",
      image: "/placeholder-user.jpg"
    },
    {
      name: "Ethili Sundaravel",
      role: "Backend Engineer",
      description:
        "Built and hardened backend services, APIs, and data flows that power DeepChessIQ's core features and telemetry.",
      image: "/placeholder-user.jpg"
    },
    {
      name: "Prince Dilipkumar Patel",
      role: "Frontend Engineer",
      description:
        "Implemented the frontend experience, translating designs into responsive React/Next.js pages and polishing the UI for a smooth user journey.",
      image: "/placeholder-user.jpg"
    }
  ]

  return (
    <section id="team" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center space-y-4 mb-16">
          <Badge variant="outline" className="text-sm px-4 py-2 bg-card/50 backdrop-blur border-primary/30">
            TEAM
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-balance">
            OUR TEAM
          </h2>
          <p className="text-lg text-muted-foreground max-w-4xl mx-auto text-pretty leading-relaxed">
            Our team collaborates closely to craft personalized chess intelligence solutions tailored to your unique goals. 
            Explore our innovative approach with cutting-edge NLP techniques, machine learning algorithms, and chess expertise 
            to improve accessibility and streamline decision-making in chess. Join us for a transformative experience on your chess journey.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mb-12">
          {teamMembers.map((member, index) => (
            <Card key={index} className="glass border-primary/20 hover:border-primary/40 transition-all duration-300 hover:scale-105">
              <CardContent className="p-6 text-center space-y-4">
                <div className="w-24 h-24 mx-auto rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center mb-4">
                  <span className="text-2xl font-bold text-primary">
                    {member.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-balance mb-1">
                    {member.name}
                  </h3>
                  <p className="text-sm text-primary font-medium mb-3">
                    {member.role}
                  </p>
                  <p className="text-sm text-muted-foreground text-pretty leading-relaxed">
                    {member.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button size="lg" variant="outline" className="glass bg-transparent">
            Meet the Team
          </Button>
        </div>
      </div>
    </section>
  )
}
