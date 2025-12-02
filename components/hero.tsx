"use client"

import { Button } from "@/components/ui/button"
import { ChevronDown } from "lucide-react"

export function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById('contact')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 py-20 pt-32 bg-gradient-to-b from-background to-muted/30">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[120px] animate-pulse [animation-delay:1s]" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto text-center space-y-8">
        <h1 className="text-6xl md:text-8xl font-bold tracking-tight text-balance mb-6 animate-fade-in-up">
          Maximize Your Chess Potential.
        </h1>

        <p className="text-xl md:text-2xl text-muted-foreground font-light text-balance mb-8 max-w-3xl mx-auto animate-fade-in-up animate-delay-200">
          Elevate your chess game with DeepChessIQ's AI-powered analysis tool. Try it now and improve your skills!
        </p>

        <div className="animate-fade-in-up animate-delay-300">
          <Button 
            size="lg" 
            className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8 py-4 mb-12 uppercase tracking-wide transform transition-all duration-300 hover:scale-105 hover:shadow-lg"
            onClick={scrollToContact}
          >
            Analyze Now!!
          </Button>
        </div>

        {/* Scroll indicator */}
        <div className="pt-8 animate-fade-in animate-delay-500">
          <p className="text-sm text-muted-foreground uppercase tracking-wider mb-2">Scroll</p>
          <div className="animate-bounce">
            <ChevronDown className="w-6 h-6 mx-auto text-muted-foreground" />
          </div>
        </div>
      </div>
    </section>
  )
}
