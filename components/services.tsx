"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Bot, Brain, Users } from "lucide-react"

export function Services() {
  const services = [
    {
      icon: <Bot className="w-8 h-8 text-primary" />,
      title: "GAME ANALYSIS",
      description: "Comprehensive game analysis with AI-powered insights, pattern recognition, and strategic recommendations to help you understand your games better and identify areas for improvement."
    },
    {
      icon: <Brain className="w-8 h-8 text-primary" />,
      title: "OPPONENT SIMULATION",
      description: "Realistic opponent simulations using reinforcement learning to help you prepare for specific playing styles and tournament scenarios, giving you a competitive edge."
    },
    {
      icon: <Users className="w-8 h-8 text-primary" />,
      title: "AI COMMENTARY",
      description: "AI-powered commentary system that provides real-time analysis and insights for chess broadcasts and tournaments, making complex positions accessible to all viewers."
    }
  ]

  return (
    <section id="services" className="py-20 px-4 bg-muted/5">
      <div className="max-w-7xl mx-auto">
        <div className="text-center space-y-4 mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-balance">
            Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-4xl mx-auto text-pretty leading-relaxed">
            Comprehensive features like game analysis, opponent simulation, and AI commentary are provided by the chess 
            intelligence platform. Game analysis improves player understanding and saves coaches time by automatically 
            producing comprehensive insights for significant positions and strategic patterns. Opponent simulation follows 
            the playing styles and patterns of different opponents, giving players and coaches information about preparation 
            strategies and tactical approaches. AI commentary precisely explains complex positions in real-time by using 
            sophisticated analysis engines to provide accessible explanations for all skill levels. When combined, these 
            services offer a potent instrument for thorough game analysis and performance assessment.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={service.title} 
              className="glass border-primary/20 hover:border-primary/40 transition-all duration-300 hover:scale-105 hover:shadow-lg opacity-0 animate-fade-in-up"
              style={{ animationDelay: `${(index + 1) * 100}ms` }}
            >
              <CardContent className="p-8 text-center space-y-4">
                <div className="flex justify-center mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-balance">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-pretty leading-relaxed">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

      </div>
    </section>
  )
}
