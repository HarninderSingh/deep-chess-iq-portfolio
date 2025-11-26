"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail } from "lucide-react"

export function Team() {
  const teamMembers = [
    {
      name: "Steve",
      role: "Lead Developer & AI Architect",
      description: "Specializes in machine learning algorithms and chess engine optimization. Leads the development of our core AI systems.",
      image: "/placeholder-user.jpg"
    },
    {
      name: "Vamsi",
      role: "Backend Engineer & Database Architect",
      description: "Expert in scalable backend systems and database design. Responsible for our robust data infrastructure.",
      image: "/placeholder-user.jpg"
    },
    {
      name: "Pavan",
      role: "Frontend Developer & UX Designer",
      description: "Creates intuitive user interfaces and seamless user experiences for our chess intelligence platform.",
      image: "/placeholder-user.jpg"
    },
    {
      name: "Harninder",
      role: "Chess Engine Specialist",
      description: "Deep expertise in chess algorithms and engine optimization. Ensures our chess analysis is world-class.",
      image: "/placeholder-user.jpg"
    },
    {
      name: "Aparna",
      role: "Data Scientist & Analytics",
      description: "Transforms chess data into actionable insights using advanced statistical methods and machine learning.",
      image: "/placeholder-user.jpg"
    },
    {
      name: "Ethili",
      role: "Quality Assurance & Testing",
      description: "Ensures our platform meets the highest standards of reliability and performance for chess players.",
      image: "/placeholder-user.jpg"
    },
    {
      name: "Prince",
      role: "DevOps & Infrastructure",
      description: "Manages our cloud infrastructure and deployment pipelines to ensure seamless user experiences.",
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
                <div className="flex justify-center gap-2 pt-4">
                  <button className="w-8 h-8 rounded-lg bg-primary/10 hover:bg-primary/20 flex items-center justify-center transition-colors">
                    <Github className="w-4 h-4 text-primary" />
                  </button>
                  <button className="w-8 h-8 rounded-lg bg-primary/10 hover:bg-primary/20 flex items-center justify-center transition-colors">
                    <Linkedin className="w-4 h-4 text-primary" />
                  </button>
                  <button className="w-8 h-8 rounded-lg bg-primary/10 hover:bg-primary/20 flex items-center justify-center transition-colors">
                    <Mail className="w-4 h-4 text-primary" />
                  </button>
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
