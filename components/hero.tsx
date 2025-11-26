"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ChevronDown } from "lucide-react"

export function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById('contact')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 py-20 pt-32">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-[120px] animate-pulse [animation-delay:1s]" />
      </div>

      {/* Chess knight illustration placeholder */}
      <div className="absolute right-0 top-0 w-1/2 h-full opacity-10">
        <svg viewBox="0 0 200 200" className="w-full h-full">
          <path
            d="M60,180 L60,120 L80,100 L90,80 L95,60 L90,40 L80,30 L70,25 L65,30 L70,40 L75,50 L80,70 L85,90 L95,110 L105,120 L110,140 L110,180 Z"
            fill="currentColor"
            className="text-primary"
          />
        </svg>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto text-center space-y-8">
        <h1 className="text-6xl md:text-8xl font-bold tracking-tight text-balance mb-6">
          Welcome to DeepChessIQ
        </h1>

        <p className="text-2xl md:text-4xl text-primary font-light text-balance mb-8">
          A New Era of Chess Intelligence
        </p>

        <Button 
          size="lg" 
          className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8 py-4 mb-12"
          onClick={scrollToContact}
        >
          Let's Chat
        </Button>

        <div className="space-y-6 max-w-4xl mx-auto">
          <p className="text-xl md:text-2xl text-muted-foreground font-light text-balance">
            Adaptive Chess Intelligence for Play, Prep, and Broadcasts
          </p>

          <p className="text-lg text-muted-foreground text-pretty leading-relaxed">
            Transforming raw chess data + engines + LLMs + telemetry into actionable coaching, 
            realistic opponent simulations, and commentator support
          </p>

          <p className="text-base text-primary font-medium">
            Built by Steve, Vamsi, Pavan, Harninder, Aparna, Ethili & Prince
          </p>
        </div>

        {/* Stats badges */}
        <div className="flex flex-wrap items-center justify-center gap-3 pt-8">
          <Badge variant="secondary" className="glass px-4 py-2 text-sm">
            11+ Secured REST APIs
          </Badge>
          <Badge variant="secondary" className="glass px-4 py-2 text-sm">
            10+ React/TS Pages
          </Badge>
          <Badge variant="secondary" className="glass px-4 py-2 text-sm">
            7-Table SQL Schema
          </Badge>
          <Badge variant="secondary" className="glass px-4 py-2 text-sm">
            2 Chess Engines
          </Badge>
          <Badge variant="secondary" className="glass px-4 py-2 text-sm">
            Multi-Phase AI Roadmap
          </Badge>
        </div>

        {/* Scroll indicator */}
        <div className="pt-12 animate-bounce">
          <ChevronDown className="w-6 h-6 mx-auto text-muted-foreground" />
        </div>
      </div>
    </section>
  )
}
