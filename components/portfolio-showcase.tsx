"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, ExternalLink, Github } from "lucide-react"

export function PortfolioShowcase() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const portfolioItems = [
    {
      title: "Chess Engine Integration",
      description: "Advanced chess engine integration with Stockfish and custom evaluation algorithms",
      image: "/placeholder.jpg",
      technologies: ["Stockfish", "C++", "WebAssembly", "Node.js"],
      type: "Core Engine"
    },
    {
      title: "AI Coach Dashboard",
      description: "Intelligent coaching interface with personalized recommendations and progress tracking",
      image: "/placeholder.jpg",
      technologies: ["React", "TypeScript", "TensorFlow.js", "D3.js"],
      type: "Frontend"
    },
    {
      title: "Game Analysis API",
      description: "RESTful API for real-time chess game analysis and position evaluation",
      image: "/placeholder.jpg",
      technologies: ["Express.js", "PostgreSQL", "Redis", "Docker"],
      type: "Backend"
    },
    {
      title: "Player Simulation System",
      description: "ML-powered opponent simulation based on playing style analysis",
      image: "/placeholder.jpg",
      technologies: ["Python", "PyTorch", "Reinforcement Learning", "FastAPI"],
      type: "AI/ML"
    },
    {
      title: "Broadcast Commentary",
      description: "Real-time commentary generation for chess broadcasts and tournaments",
      image: "/placeholder.jpg",
      technologies: ["OpenAI GPT", "WebSocket", "React", "Node.js"],
      type: "NLP"
    },
    {
      title: "Mobile Chess App",
      description: "Cross-platform mobile application for on-the-go chess training",
      image: "/placeholder.jpg",
      technologies: ["React Native", "Expo", "AsyncStorage", "Push Notifications"],
      type: "Mobile"
    }
  ]

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % portfolioItems.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + portfolioItems.length) % portfolioItems.length)
  }

  const currentItem = portfolioItems[currentIndex]

  return (
    <section id="portfolio" className="py-20 px-4 bg-muted/5">
      <div className="max-w-7xl mx-auto">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-balance">
            Portfolio Showcase
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Explore our comprehensive chess intelligence platform through key components and features
          </p>
        </div>

        {/* Main showcase card */}
        <div className="relative max-w-4xl mx-auto mb-12">
          <Card className="glass border-primary/20 overflow-hidden">
            <div className="relative h-64 md:h-80 bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center">
              <div className="text-center space-y-4">
                <Badge variant="secondary" className="glass">
                  {currentItem.type}
                </Badge>
                <h3 className="text-2xl md:text-3xl font-bold text-balance px-4">
                  {currentItem.title}
                </h3>
                <p className="text-muted-foreground max-w-md mx-auto px-4">
                  {currentItem.description}
                </p>
              </div>
            </div>
            <CardContent className="p-6">
              <div className="flex flex-wrap gap-2 mb-4">
                {currentItem.technologies.map((tech, index) => (
                  <Badge key={index} variant="outline" className="text-xs">
                    {tech}
                  </Badge>
                ))}
              </div>
              <div className="flex gap-3">
                <Button size="sm" variant="outline" className="glass">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  View Demo
                </Button>
                <Button size="sm" variant="outline" className="glass">
                  <Github className="w-4 h-4 mr-2" />
                  Source Code
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Navigation arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-background/80 backdrop-blur border border-border hover:bg-background/90 flex items-center justify-center transition-colors"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-background/80 backdrop-blur border border-border hover:bg-background/90 flex items-center justify-center transition-colors"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Thumbnail navigation */}
        <div className="flex justify-center gap-4 overflow-x-auto pb-4">
          {portfolioItems.map((item, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`flex-shrink-0 p-3 rounded-lg border transition-all ${
                index === currentIndex
                  ? 'border-primary bg-primary/10'
                  : 'border-border bg-card/50 hover:border-primary/50'
              }`}
            >
              <div className="text-center space-y-1">
                <p className="text-xs font-medium">{item.type}</p>
                <p className="text-xs text-muted-foreground truncate max-w-20">
                  {item.title}
                </p>
              </div>
            </button>
          ))}
        </div>

        {/* Progress indicator */}
        <div className="text-center mt-8">
          <p className="text-sm text-muted-foreground">
            {currentIndex + 1} / {portfolioItems.length}
          </p>
        </div>
      </div>
    </section>
  )
}
