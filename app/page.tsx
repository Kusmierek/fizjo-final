"use client";

import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { services } from "@/lib/services-data";
import {
  ArrowRight,
  Phone,
  ArrowUpRight,
  Sparkles,
  Leaf,
  Heart,
  Instagram,
  Facebook,
} from "lucide-react";
import { cn } from "@/lib/utils";

function FloatingShapes() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute top-20 left-[10%] w-64 h-64 bg-primary/10 animate-blob animation-delay-200" />
      <div className="absolute top-40 right-[15%] w-48 h-48 bg-accent/10 animate-blob animation-delay-400" />
      <div className="absolute bottom-32 left-[20%] w-32 h-32 bg-primary/5 animate-blob animation-delay-600" />
    </div>
  );
}

function ServiceCard({
  service,
  index,
}: {
  service: (typeof services)[0];
  index: number;
}) {
  const icons = [Sparkles, Heart, Leaf, Sparkles, Heart, Leaf, Sparkles];
  const Icon = icons[index % icons.length];

  return (
    <Link
      href={`/uslugi/${service.slug}`}
      className={cn(
        "group relative block lg:col-span-3",
        index === 4 && "lg:col-start-2",
      )}
    >
      <div className="relative bg-card border border-border/50 p-8 hover-lift overflow-hidden h-80">
        {/* Number */}
        <span className="absolute top-6 right-6 text-7xl font-serif text-muted/50 font-bold leading-none">
          {String(index + 1).padStart(2, "0")}
        </span>

        {/* Content */}
        <div className="relative">
          <div className="w-12 h-12 bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors">
            <Icon className="h-6 w-6 text-primary group-hover:text-accent transition-colors" />
          </div>

          <h3 className="font-serif text-2xl text-foreground mb-3 group-hover:text-primary transition-colors">
            {service.title}
          </h3>

          <p className="text-muted-foreground text-sm leading-relaxed mb-6 line-clamp-3">
            {service.shortDescription}
          </p>

          <div className="flex items-center gap-2 text-sm font-medium text-primary group-hover:text-accent transition-colors">
            <span>Dowiedz się więcej</span>
            <ArrowUpRight className="h-4 w-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </div>
        </div>

        {/* Hover line */}
        <div className="absolute bottom-0 left-0 w-0 h-1 bg-accent group-hover:w-full transition-all duration-500" />
      </div>
    </Link>
  );
}

function StatBlock({
  number,
  label,
  delay,
}: {
  number: string;
  label: string;
  delay: string;
}) {
  return (
    <div
      className={`text-center animate-fade-up ${delay}`}
      style={{ opacity: 0 }}
    >
      <p className="font-serif text-6xl md:text-7xl lg:text-8xl text-primary-foreground mb-2">
        {number}
      </p>
      <p className="text-sm text-primary-foreground/70 uppercase tracking-wider">
        {label}
      </p>
    </div>
  );
}

export default function HomePage() {
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="flex flex-col">
      {/* Fixed Social Media Icons */}
      <div className="fixed left-6 top-1/2 -translate-y-1/2 z-50 hidden md:flex flex-col gap-4">
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="w-12 h-12 bg-card border border-border/50 flex items-center justify-center hover:bg-accent hover:text-accent-foreground hover:border-accent transition-all duration-300 group hover-lift"
          aria-label="Instagram"
        >
          <Instagram className="h-5 w-5 text-foreground group-hover:text-accent-foreground transition-colors" />
        </a>
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          className="w-12 h-12 bg-card border border-border/50 flex items-center justify-center hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300 group hover-lift"
          aria-label="Facebook"
        >
          <Facebook className="h-5 w-5 text-foreground group-hover:text-primary-foreground transition-colors" />
        </a>
      </div>

      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col justify-center overflow-hidden">
        <FloatingShapes />

        <div className="relative px-6 md:px-10 lg:px-16 py-32">
          <div className="max-w-7xl mx-auto">
            {/* Tagline */}
            <div
              className={`flex items-center gap-3 mb-8 ${mounted ? "animate-fade-up" : "opacity-0"}`}
            >
              <div className="w-12 h-px bg-accent" />
              <span className="text-xs tracking-[0.3em] text-muted-foreground uppercase">
                Fizjoterapia w domu pacjenta
              </span>
            </div>

            {/* Main Heading */}
            <div className="relative mb-12">
              <h1
                className={`font-serif text-5xl sm:text-7xl md:text-8xl lg:text-[9rem] xl:text-[11rem] font-medium leading-[0.85] tracking-tight ${mounted ? "animate-fade-up animation-delay-200" : "opacity-0"}`}
                style={{ opacity: mounted ? undefined : 0 }}
              >
                <span className="text-primary">Fizjo</span>
                <br />
                <span className="text-stroke text-foreground">z Natury</span>
              </h1>

              {/* Floating badge */}
              <div className="absolute -right-4 top-1/2 -translate-y-1/2 hidden xl:block animate-float">
                <div className="bg-accent text-accent-foreground px-6 py-4 rotate-12">
                  <p className="text-xs uppercase tracking-wider mb-1">
                    Magdalena
                  </p>
                  <p className="font-serif text-lg">Batruch-Skoczypiec</p>
                </div>
              </div>
            </div>

            {/* Description & CTA */}
            <div className="grid lg:grid-cols-2 gap-12 items-end">
              <p
                className={`text-lg md:text-xl text-muted-foreground leading-relaxed max-w-xl ${mounted ? "animate-fade-up animation-delay-400" : "opacity-0"}`}
                style={{ opacity: mounted ? undefined : 0 }}
              >
                Holistyczne podejście do zdrowia, gdzie traktuję człowieka jako
                całość. Profesjonalna fizjoterapia w komforcie Twojego domu.
              </p>

              <div
                className={`flex flex-col sm:flex-row gap-4 lg:justify-end ${mounted ? "animate-fade-up animation-delay-600" : "opacity-0"}`}
                style={{ opacity: mounted ? undefined : 0 }}
              >
                <Button
                  asChild
                  size="lg"
                  className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-6 text-base group"
                >
                  <a href="tel:660222440" className="flex items-center gap-3">
                    <Phone className="h-5 w-5" />
                    <span>Umów wizytę</span>
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-foreground/20 hover:bg-foreground/5 px-8 py-6 text-base bg-transparent"
                >
                  <Link href="#uslugi">Poznaj usługi</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
          <span className="text-xs text-muted-foreground uppercase tracking-wider">
            Przewiń
          </span>
          <div className="w-px h-12 bg-border relative overflow-hidden">
            <div
              className="absolute top-0 left-0 w-full h-1/2 bg-accent animate-marquee"
              style={{ animationDuration: "2s" }}
            />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="uslugi" className="py-24 md:py-32 bg-muted/30">
        <div className="px-6 md:px-10 lg:px-16">
          <div className="max-w-7xl mx-auto">
            {/* Section Header */}
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-xs tracking-[0.3em] text-accent uppercase font-medium">
                    Usługi
                  </span>
                  <div className="w-12 h-px bg-accent" />
                </div>
                <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground leading-tight">
                  Kompleksowa
                  <br />
                  <span className="text-primary">opieka zdrowotna</span>
                </h2>
              </div>
              <p className="text-muted-foreground max-w-md text-lg leading-relaxed">
                Oferuję szeroki zakres usług fizjoterapeutycznych łączących
                tradycyjne metody z nowoczesnym podejściem.
              </p>
            </div>

            {/* Services Grid */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-12 gap-6">
              {services.map((service, index) => (
                <ServiceCard
                  key={service.slug}
                  service={service}
                  index={index}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 md:py-32 bg-primary overflow-hidden">
        <div className="px-6 md:px-10 lg:px-16">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
              <StatBlock
                number="10+"
                label="Lat doświadczenia"
                delay="animation-delay-200"
              />
              <StatBlock
                number="7"
                label="Specjalizacji"
                delay="animation-delay-400"
              />
              <StatBlock
                number="1000+"
                label="Zadowolonych pacjentów"
                delay="animation-delay-600"
              />
              <StatBlock
                number="100%"
                label="Zaangażowania"
                delay="animation-delay-800"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-24 md:py-32 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-muted/30 hidden lg:block" />

        <div className="px-6 md:px-10 lg:px-16 relative">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-xs tracking-[0.3em] text-accent uppercase font-medium">
                    O mnie
                  </span>
                  <div className="w-12 h-px bg-accent" />
                </div>

                <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground mb-8 leading-tight">
                  Magdalena
                  <br />
                  <span className="text-stroke text-primary">
                    Batruch-Skoczypiec
                  </span>
                </h2>

                <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                  <p>
                    Jestem certyfikowanym fizjoterapeutą z wieloletnim
                    doświadczeniem. Moja filozofia opiera się na holistycznym
                    podejściu do zdrowia, gdzie traktuję człowieka jako całość.
                  </p>
                  <p>
                    Wierzę, że najskuteczniejsza terapia odbywa się w
                    komfortowych warunkach, dlatego oferuję wizyty domowe na
                    terenie całego regionu.
                  </p>
                </div>

                <Link
                  href="/o-mnie"
                  className="inline-flex items-center gap-3 mt-8 text-primary hover:text-accent transition-colors font-medium text-lg group"
                >
                  <span>Więcej o mnie</span>
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-2 transition-transform" />
                </Link>
              </div>

              <div className="relative">
                <div className="aspect-square bg-muted relative overflow-hidden">
                  {/* Decorative elements */}
                  <div className="absolute inset-8 border border-primary/20" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <Leaf className="h-24 w-24 text-primary/20 mx-auto mb-6" />
                      <p className="font-serif text-2xl text-foreground/60">
                        Zdrowie z natury
                      </p>
                    </div>
                  </div>

                  {/* Corner accent */}
                  <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-accent" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 md:py-32 bg-foreground text-background relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary rounded-full blur-3xl" />
        </div>

        <div className="px-6 md:px-10 lg:px-16 relative">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center gap-3 mb-8">
              <div className="w-12 h-px bg-background/30" />
              <span className="text-xs tracking-[0.3em] text-background/60 uppercase">
                Kontakt
              </span>
              <div className="w-12 h-px bg-background/30" />
            </div>

            <h2 className="font-serif text-4xl md:text-6xl lg:text-7xl text-background mb-8 leading-tight">
              Gotowy na
              <br />
              <span className="text-accent">pierwszą wizytę?</span>
            </h2>

            <p className="text-xl text-background/70 max-w-2xl mx-auto mb-12 leading-relaxed">
              Zadzwoń już dziś i umów się na wizytę domową. Razem zadbamy o
              Twoje zdrowie w komfortowych warunkach.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-accent text-accent-foreground hover:bg-accent/90 px-10 py-6 text-lg"
              >
                <a href="tel:660222440" className="flex items-center gap-3">
                  <Phone className="h-5 w-5" />
                  <span>660 222 440</span>
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-background/30 text-background hover:bg-background/10 px-10 py-6 text-lg bg-transparent"
              >
                <Link href="/kontakt">Formularz kontaktowy</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
