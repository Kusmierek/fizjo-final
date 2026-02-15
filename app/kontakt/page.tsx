"use client"

import React, { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { 
  Phone, 
  Mail, 
  Clock,
  Send,
  CheckCircle2,
  ArrowUpRight
} from "lucide-react"

function SocialIcon({ type }: { type: "instagram" | "facebook" }) {
  if (type === "instagram") {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
        <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
      </svg>
    )
  }
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  )
}

const contactInfo = [
  {
    icon: Phone,
    title: "Telefon",
    content: "660 222 440",
    href: "tel:660222440",
  },
  {
    icon: Mail,
    title: "Email",
    content: "kontakt@fizjoznatury.pl",
    href: "mailto:kontakt@fizjoznatury.pl",
  },
  {
    icon: Clock,
    title: "Godziny",
    content: "Pon-Pt: 8:00-18:00",
    href: null,
  },
]

export default function ContactPage() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsLoading(true)
    await new Promise(resolve => setTimeout(resolve, 1000))
    setIsLoading(false)
    setIsSubmitted(true)
  }

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative py-32 md:py-40 overflow-hidden">
        {/* Background decorations */}
        <div className="absolute top-20 right-[10%] w-64 h-64 bg-primary/5 animate-blob" />
        <div className="absolute bottom-20 left-[5%] w-48 h-48 bg-accent/5 animate-blob animation-delay-400" />
        
        <div className="relative px-6 md:px-10 lg:px-16">
          <div className="max-w-7xl mx-auto">
            <div className="max-w-3xl">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-px bg-accent" />
                <span className="text-xs tracking-[0.3em] text-muted-foreground uppercase">
                  Skontaktuj się
                </span>
              </div>
              
              <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl text-foreground leading-tight mb-8">
                Porozmawiajmy<br />
                <span className="text-stroke text-primary">o Twoim zdrowiu</span>
              </h1>
              
              <p className="text-xl text-muted-foreground leading-relaxed max-w-xl">
                Masz pytania lub chcesz umówić wizytę? Skontaktuj się ze mną 
                telefonicznie, mailowo lub przez formularz kontaktowy.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24 md:py-32 bg-muted/30">
        <div className="px-6 md:px-10 lg:px-16">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16">
              {/* Contact Info */}
              <div>
                <div className="flex items-center gap-3 mb-8">
                  <span className="text-xs tracking-[0.3em] text-accent uppercase font-medium">Dane kontaktowe</span>
                  <div className="w-12 h-px bg-accent" />
                </div>
                
                <div className="space-y-6 mb-12">
                  {contactInfo.map((info, index) => {
                    const Icon = info.icon
                    return (
                      <div key={index} className="group">
                        {info.href ? (
                          <a 
                            href={info.href}
                            className="flex items-center gap-6 p-6 bg-card border border-border hover:border-primary/30 transition-colors"
                          >
                            <div className="w-14 h-14 bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary transition-colors">
                              <Icon className="h-6 w-6 text-primary group-hover:text-primary-foreground transition-colors" />
                            </div>
                            <div>
                              <p className="text-sm text-muted-foreground uppercase tracking-wider mb-1">{info.title}</p>
                              <p className="font-serif text-xl text-foreground group-hover:text-primary transition-colors">{info.content}</p>
                            </div>
                          </a>
                        ) : (
                          <div className="flex items-center gap-6 p-6 bg-card border border-border">
                            <div className="w-14 h-14 bg-primary/10 flex items-center justify-center flex-shrink-0">
                              <Icon className="h-6 w-6 text-primary" />
                            </div>
                            <div>
                              <p className="text-sm text-muted-foreground uppercase tracking-wider mb-1">{info.title}</p>
                              <p className="font-serif text-xl text-foreground">{info.content}</p>
                            </div>
                          </div>
                        )}
                      </div>
                    )
                  })}
                </div>

                {/* Social Media */}
                <div>
                  <p className="text-sm text-muted-foreground uppercase tracking-wider mb-4">Social media</p>
                  <div className="flex gap-3">
                    {(["instagram", "facebook"] as const).map((social) => (
                      <a
                        key={social}
                        href={`https://${social}.com`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group w-14 h-14 border border-border flex items-center justify-center text-muted-foreground hover:text-accent hover:border-accent transition-colors"
                        aria-label={social}
                      >
                        <SocialIcon type={social} />
                      </a>
                    ))}
                  </div>
                </div>

                {/* Website Link */}
                <div className="mt-8">
                  <a
                    href="https://fizjoznatury.pl"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-3 px-8 py-4 bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
                  >
                    <span className="font-medium">fizjoznatury.pl</span>
                    <ArrowUpRight className="h-5 w-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </a>
                </div>
              </div>

              {/* Contact Form */}
              <div className="bg-card border border-border p-8 md:p-12">
                <div className="flex items-center gap-3 mb-8">
                  <span className="text-xs tracking-[0.3em] text-accent uppercase font-medium">Formularz</span>
                  <div className="w-12 h-px bg-accent" />
                </div>
                
                {isSubmitted ? (
                  <div className="flex flex-col items-center justify-center py-16 text-center">
                    <div className="w-20 h-20 bg-primary/10 flex items-center justify-center mb-6">
                      <CheckCircle2 className="h-10 w-10 text-primary" />
                    </div>
                    <h3 className="font-serif text-2xl text-foreground mb-4">
                      Wiadomość wysłana!
                    </h3>
                    <p className="text-muted-foreground mb-8 max-w-sm">
                      Dziękuję za kontakt. Odpowiem najszybciej jak to możliwe.
                    </p>
                    <Button 
                      onClick={() => setIsSubmitted(false)} 
                      variant="outline" 
                      className="bg-transparent"
                    >
                      Wyślij kolejną wiadomość
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="name" className="text-sm uppercase tracking-wider">Imię i nazwisko</Label>
                        <Input 
                          id="name" 
                          name="name" 
                          placeholder="Jan Kowalski" 
                          required 
                          className="border-border bg-transparent py-6"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone" className="text-sm uppercase tracking-wider">Telefon</Label>
                        <Input 
                          id="phone" 
                          name="phone" 
                          type="tel" 
                          placeholder="123 456 789" 
                          required 
                          className="border-border bg-transparent py-6"
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-sm uppercase tracking-wider">Email</Label>
                      <Input 
                        id="email" 
                        name="email" 
                        type="email" 
                        placeholder="jan@example.com" 
                        required 
                        className="border-border bg-transparent py-6"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="subject" className="text-sm uppercase tracking-wider">Temat</Label>
                      <Input 
                        id="subject" 
                        name="subject" 
                        placeholder="Np. Umówienie wizyty - terapia manualna" 
                        required 
                        className="border-border bg-transparent py-6"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="message" className="text-sm uppercase tracking-wider">Wiadomość</Label>
                      <Textarea 
                        id="message" 
                        name="message" 
                        placeholder="Opisz swoje dolegliwości lub zadaj pytanie..." 
                        rows={5} 
                        required 
                        className="border-border bg-transparent resize-none"
                      />
                    </div>
                    
                    <Button 
                      type="submit" 
                      className="w-full bg-primary hover:bg-primary/90 py-6 text-base"
                      disabled={isLoading}
                    >
                      {isLoading ? (
                        "Wysyłanie..."
                      ) : (
                        <>
                          <Send className="mr-2 h-5 w-5" />
                          Wyślij wiadomość
                        </>
                      )}
                    </Button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 md:py-32 bg-accent">
        <div className="px-6 md:px-10 lg:px-16">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-accent-foreground mb-8 leading-tight">
              Preferujesz rozmowę<br />telefoniczną?
            </h2>
            
            <p className="text-xl text-accent-foreground/80 max-w-2xl mx-auto mb-12 leading-relaxed">
              Zadzwoń bezpośrednio - chętnie odpowiem na wszystkie pytania 
              i pomogę umówić wizytę w dogodnym terminie.
            </p>
            
            <a 
              href="tel:660222440" 
              className="inline-flex items-center gap-4 px-10 py-6 bg-accent-foreground text-accent hover:bg-accent-foreground/90 transition-colors text-lg font-medium group"
            >
              <Phone className="h-6 w-6" />
              <span className="font-serif text-2xl">660 222 440</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
