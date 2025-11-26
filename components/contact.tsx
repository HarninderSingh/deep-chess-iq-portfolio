"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Mail, MessageCircle, Phone, MapPin } from "lucide-react"

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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Email Us</h3>
                  <p className="text-muted-foreground">
                    deepchessiq@loyalistcollege.com
                  </p>
                  <p className="text-sm text-muted-foreground">
                    We'll respond within 24 hours
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <MessageCircle className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Live Chat</h3>
                  <p className="text-muted-foreground">
                    Chat with our team in real-time
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Available Mon-Fri, 9AM-5PM EST
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
                    Loyalist College<br />
                    Belleville, Ontario, Canada
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Capstone Project 2025
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-6">
              <h3 className="text-lg font-semibold mb-4">What can we help you with?</h3>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary" className="glass">
                  Demo Request
                </Badge>
                <Badge variant="secondary" className="glass">
                  Technical Questions
                </Badge>
                <Badge variant="secondary" className="glass">
                  Partnership Opportunities
                </Badge>
                <Badge variant="secondary" className="glass">
                  Academic Collaboration
                </Badge>
              </div>
            </div>
          </div>

          {/* Contact Form Card */}
          <Card className="glass border-primary/20">
            <CardContent className="p-8">
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-bold mb-2">Let's Start a Conversation</h3>
                  <p className="text-muted-foreground">
                    Ready to explore the future of chess intelligence? We'd love to hear from you.
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium text-muted-foreground">First Name</label>
                      <input 
                        type="text" 
                        className="w-full mt-1 px-3 py-2 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
                        placeholder="Your first name"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-muted-foreground">Last Name</label>
                      <input 
                        type="text" 
                        className="w-full mt-1 px-3 py-2 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
                        placeholder="Your last name"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-sm font-medium text-muted-foreground">Email</label>
                    <input 
                      type="email" 
                      className="w-full mt-1 px-3 py-2 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
                      placeholder="your.email@example.com"
                    />
                  </div>

                  <div>
                    <label className="text-sm font-medium text-muted-foreground">Subject</label>
                    <select className="w-full mt-1 px-3 py-2 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50">
                      <option>General Inquiry</option>
                      <option>Demo Request</option>
                      <option>Technical Support</option>
                      <option>Partnership</option>
                      <option>Academic Collaboration</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-sm font-medium text-muted-foreground">Message</label>
                    <textarea 
                      rows={4}
                      className="w-full mt-1 px-3 py-2 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 resize-none"
                      placeholder="Tell us about your chess intelligence needs..."
                    />
                  </div>

                  <Button size="lg" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                    Send Message
                  </Button>
                </div>

                <div className="text-center pt-4">
                  <p className="text-xs text-muted-foreground">
                    By submitting this form, you agree to our privacy policy and terms of service.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
