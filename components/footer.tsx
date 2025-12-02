"use client"

import { Button } from "@/components/ui/button"

export function Footer() {
  const scrollToContact = () => {
    const element = document.getElementById('contact')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <footer className="py-16 px-4 border-t border-border bg-muted/10">
      <div className="max-w-7xl mx-auto">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand section */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">DeepChessIQ</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Adaptive Chess Intelligence for Play, Prep, and Broadcasts. 
              Transforming chess through AI innovation.
            </p>
            <p className="text-xs text-muted-foreground">
              © 2025 DeepChessIQ. All rights reserved.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <div className="space-y-2">
              <button 
                onClick={() => document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' })}
                className="block text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Home
              </button>
              <button 
                onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                className="block text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Services
              </button>
              <button 
                onClick={() => document.getElementById('team')?.scrollIntoView({ behavior: 'smooth' })}
                className="block text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Team
              </button>
              <button 
                onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
                className="block text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Portfolio
              </button>
            </div>
          </div>

          {/* Resources */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Resources</h4>
            <div className="space-y-2">
              <a href="#" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                Documentation
              </a>
              <a href="#" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                API Reference
              </a>
              <a 
                href="https://github.com/AIP-F25-1/DeepChessIQ" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                GitHub Repository
              </a>
              <a href="#" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                Research Papers
              </a>
            </div>
          </div>

          {/* Contact CTA */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Get in Touch</h4>
            <p className="text-sm text-muted-foreground">
              Ready to explore chess intelligence? Let's start a conversation.
            </p>
            <Button 
              onClick={scrollToContact}
              className="bg-primary hover:bg-primary/90 text-primary-foreground"
            >
              Contact Us
            </Button>
          </div>
        </div>

        {/* Copyright */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 pt-8 border-t border-border">
          <div className="text-center">
            <p className="text-sm text-muted-foreground">
              © 2025 by DeepChessIQ Team. Built with Next.js, React and RL Chess Engines.
            </p>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-8 pt-6 border-t border-border/50">
          <p className="text-xs text-muted-foreground text-center leading-relaxed">
            <strong>Disclaimer:</strong> The chess analysis and recommendations provided by this platform are for educational 
            and training purposes only. While our AI systems strive for accuracy, chess is a complex game and results may vary. 
            Users are encouraged to verify analysis with multiple sources and consult with chess professionals for competitive play.
          </p>
        </div>
      </div>
    </footer>
  )
}
