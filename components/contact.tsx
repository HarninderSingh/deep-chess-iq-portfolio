import { Mail, MapPin } from "lucide-react"

export function Contact() {
  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center space-y-6 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-balance">
            Get in Touch
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
            Have a question or want to learn more about our chess intelligence platform? 
            Contact us today and start a conversation with one of our chess AI specialists.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Mail className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Email Us</h3>
                <p className="text-muted-foreground">
                  <a 
                    href="mailto:usernotfound51199@gmail.com" 
                    className="text-primary hover:underline font-medium"
                  >
                    usernotfound51199@gmail.com
                  </a>
                </p>
                <p className="text-sm text-muted-foreground mt-1">
                  We'll respond within 24 hours
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                <MapPin className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Visit Us</h3>
                <p className="text-muted-foreground">
                  4000 Victoria Park Avenue<br />
                  Toronto, Ontario, Canada
                </p>
                <p className="text-sm text-muted-foreground mt-1">
                  Capstone Project 2025
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
