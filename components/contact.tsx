import { Mail, MapPin, Phone, Clock } from "lucide-react"

export function Contact() {
  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center space-y-6 mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-balance uppercase">
            contact us
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-8 animate-slide-in-left">
              <div className="flex items-start gap-4 transform transition-all duration-300 hover:scale-105">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-4">Hours of operation</h3>
                  <div className="space-y-2 text-muted-foreground">
                    <p>Mon-Thu: 9AM to 8PM</p>
                    <p>Friday: 9AM to 3PM</p>
                    <p>Sat-Sun: Closed</p>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-4 transform transition-all duration-300 hover:scale-105">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Address</h3>
                  <p className="text-muted-foreground">
                    123 Innovation Drive, Suite 500<br />
                    Toronto, Ontario, Canada M5H 2N2
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-8 animate-slide-in-right">
              <div className="flex items-start gap-4 transform transition-all duration-300 hover:scale-105">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Email</h3>
                  <p className="text-muted-foreground">
                    <a 
                      href="mailto:usernotfound51199@gmail.com" 
                      className="text-primary hover:underline font-medium transition-colors"
                    >
                      usernotfound51199@gmail.com
                    </a>
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 transform transition-all duration-300 hover:scale-105">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Phone</h3>
                  <p className="text-muted-foreground">
                    <a href="tel:+1-416-500-7750" className="text-primary hover:underline font-medium transition-colors">
                      416-500-7750
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
