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

  const teamEmails = [
    "stephen@deepchessiq.com",
    "vamsi@deepchessiq.com",
    "pavan@deepchessiq.com",
    "harninder@deepchessiq.com",
    "aparna@deepchessiq.com",
    "ethili@deepchessiq.com",
    "prince@deepchessiq.com"
  ]

  return (
    <section id="team" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center space-y-4 mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-balance">
            Team DeepChessIQ
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground font-medium">
            Dedication. Expertise. Passion.
          </p>
          <p className="text-lg text-muted-foreground max-w-4xl mx-auto text-pretty leading-relaxed mt-6">
            Welcome to our chess intelligence team, a dedicated group of professionals committed to 
            revolutionizing the way chess games are analyzed and understood. Our team is composed of 
            experts in AI, machine learning, and chess analytics, all united by a passion for chess and technology.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mb-12">
          {teamMembers.map((member, index) => (
            <Card 
              key={member.name} 
              className="glass border-primary/20 hover:border-primary/40 transition-all duration-300 hover:scale-105 hover:shadow-lg opacity-0 animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-6 text-center space-y-4">
                <div className="w-32 h-32 mx-auto rounded-lg bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center mb-4 overflow-hidden">
                  <span className="text-4xl font-bold text-primary">
                    {member.name.split(' ').map(n => n[0]).join('').slice(0, 2)}
                  </span>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-balance mb-2 uppercase">
                    {member.name.toUpperCase()}
                  </h3>
                  <a 
                    href={`mailto:${teamEmails[index]}`}
                    className="text-sm text-primary hover:underline block mb-3"
                  >
                    {teamEmails[index]}
                  </a>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
