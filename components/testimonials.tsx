import { Card, CardContent } from "@/components/ui/card"
import { Quote } from "lucide-react"

export function Testimonials() {
  const testimonials = [
    {
      name: "Grandmaster Alex Chen",
      role: "Professional Chess Player",
      quote: "As a chess professional, DeepChessIQ has been a game changer for me. The AI analysis tools have allowed me to break down and analyze positions like never before, giving me a huge advantage in my preparation. Highly recommend!",
      image: "/placeholder-user.jpg"
    }
  ]

  return (
    <section id="testimonials" className="py-20 px-4 bg-muted/5">
      <div className="max-w-7xl mx-auto">
        <div className="text-center space-y-4 mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-balance">
            OUR CLIENTS
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={testimonial.name} 
              className="glass border-primary/20 hover:shadow-lg transition-all duration-300 hover:scale-105 opacity-0 animate-scale-in"
              style={{ animationDelay: `${(index + 1) * 200}ms` }}
            >
              <CardContent className="p-8">
                <Quote className="w-8 h-8 text-primary mb-4" />
                <p className="text-muted-foreground leading-relaxed mb-6 italic">
                  "{testimonial.quote}"
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                    <span className="text-lg font-bold text-primary">
                      {testimonial.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
