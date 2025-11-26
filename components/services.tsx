"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Bot, Brain, BarChart3, Users, Zap, Target } from "lucide-react"

export function Services() {
  const services = [
    {
      icon: <Bot className="w-8 h-8 text-primary" />,
      title: "AI Chess Coaching",
      description: "Personalized coaching powered by advanced chess engines and machine learning algorithms that adapt to your playing style and skill level."
    },
    {
      icon: <Brain className="w-8 h-8 text-primary" />,
      title: "Opponent Simulation",
      description: "Realistic opponent simulations using reinforcement learning to help you prepare for specific playing styles and tournament scenarios."
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-primary" />,
      title: "Game Analysis & Insights",
      description: "Deep analysis of your games with actionable insights, pattern recognition, and strategic recommendations for improvement."
    },
    {
      icon: <Users className="w-8 h-8 text-primary" />,
      title: "Broadcast Commentary",
      description: "AI-powered commentary system that provides real-time analysis and insights for chess broadcasts and tournaments."
    },
    {
      icon: <Zap className="w-8 h-8 text-primary" />,
      title: "Real-time Processing",
      description: "Lightning-fast game analysis and move suggestions powered by optimized chess engines and cloud infrastructure."
    },
    {
      icon: <Target className="w-8 h-8 text-primary" />,
      title: "Strategic Planning",
      description: "Advanced strategic planning tools that help players understand positional concepts and long-term planning."
    }
  ]

  return (
    <section id="services" className="py-20 px-4 bg-muted/5">
      <div className="max-w-7xl mx-auto">
        <div className="text-center space-y-4 mb-16">
          <Badge variant="outline" className="text-sm px-4 py-2 bg-card/50 backdrop-blur border-primary/30">
            SERVICES
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-balance">
            OUR SERVICES
          </h2>
          <p className="text-lg text-muted-foreground max-w-4xl mx-auto text-pretty leading-relaxed">
            At DeepChessIQ, we offer personalized chess intelligence solutions tailored to your unique needs and aspirations. 
            Our dedicated team of experts and AI systems work together to guide you every step of the way on your chess journey. 
            Reach out to us today and discover how we can empower you to achieve your chess goals with confidence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="glass border-primary/20 hover:border-primary/40 transition-all duration-300 hover:scale-105">
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

        <div className="text-center mt-16">
          <p className="text-lg text-muted-foreground mb-6">
            Ready to elevate your chess game with AI-powered insights?
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Badge variant="secondary" className="glass px-6 py-3 text-base">
              11+ Secured REST APIs
            </Badge>
            <Badge variant="secondary" className="glass px-6 py-3 text-base">
              Multi-Engine Architecture
            </Badge>
            <Badge variant="secondary" className="glass px-6 py-3 text-base">
              Real-time Analysis
            </Badge>
          </div>
        </div>
      </div>
    </section>
  )
}
