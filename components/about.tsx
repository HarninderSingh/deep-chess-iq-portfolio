export function About() {
  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-slide-in-left">
            <h2 className="text-4xl md:text-5xl font-bold text-balance">
              ABOUT DEEPCHESSIQ
            </h2>
            <h3 className="text-2xl md:text-3xl font-semibold text-primary">
              Introducing DeepChessIQ: Elevating Chess Intelligence
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Welcome to DeepChessIQ, where we specialize in cutting-edge chess intelligence tools. 
              Our platform focuses on AI-powered game analysis, opponent simulation, and real-time 
              commentary to provide players, coaches, and analysts with unparalleled insights. 
              Join us to transform your chess performance with precise data-driven strategies and 
              elevate your game to new heights.
            </p>
          </div>
          <div className="relative h-96 w-full rounded-lg overflow-hidden bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center animate-slide-in-right transform transition-all duration-500 hover:scale-105">
            <div className="text-center space-y-4">
              <div className="text-6xl animate-bounce [animation-duration:2s]">♟️</div>
              <p className="text-muted-foreground font-medium">Chess Intelligence</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
