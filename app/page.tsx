"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
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
import { HeroVariantB } from "@/components/hero-variants";
// Dostępne warianty: HeroVariantA, HeroVariantB, HeroVariantC
// import { HeroVariantA, HeroVariantB, HeroVariantC } from "@/components/hero-variants"

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
    <Link href={`/uslugi/${service.slug}`} className="group relative block">
      <div className="relative bg-card border border-border/50 p-5 sm:p-6 md:p-8 hover-lift overflow-hidden min-h-[280px] sm:min-h-[300px] md:min-h-[320px] flex flex-col">
        {/* Number */}
        <span className="absolute top-4 right-4 sm:top-6 sm:right-6 text-5xl sm:text-6xl md:text-7xl font-serif text-muted/50 font-bold leading-none">
          {String(index + 1).padStart(2, "0")}
        </span>

        {/* Content */}
        <div className="relative flex flex-col flex-1">
          <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary/10 flex items-center justify-center mb-4 sm:mb-6 group-hover:bg-accent/20 transition-colors flex-shrink-0">
            <Icon className="h-5 w-5 sm:h-6 sm:w-6 text-primary group-hover:text-accent transition-colors" />
          </div>

          <h3 className="font-serif text-lg sm:text-xl md:text-2xl text-foreground mb-2 sm:mb-3 group-hover:text-primary transition-colors leading-tight">
            {service.title}
          </h3>

          <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed mb-4 sm:mb-6 line-clamp-3 flex-1">
            {service.shortDescription}
          </p>

          <div className="flex items-center gap-2 text-xs sm:text-sm font-medium text-primary group-hover:text-accent transition-colors mt-auto">
            <span>Dowiedz sie wiecej</span>
            <ArrowUpRight className="h-3 w-3 sm:h-4 sm:w-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform flex-shrink-0" />
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

      {/* Hero Section - zmień na HeroVariantA, HeroVariantB lub HeroVariantC */}
      <HeroVariantB mounted={mounted} />

      {/* Services Section */}
      <section
        id="uslugi"
        className="py-24 md:py-32 bg-muted/30 relative overflow-hidden"
      >
        {/* Decorative leaves */}
        <Leaf className="absolute top-12 left-[5%] h-16 w-16 text-primary/10 rotate-45 hidden lg:block" />
        <Leaf className="absolute top-32 right-[8%] h-12 w-12 text-accent/10 -rotate-12 hidden lg:block" />
        <Leaf className="absolute bottom-24 left-[10%] h-10 w-10 text-primary/10 rotate-[160deg] hidden md:block" />
        <Leaf className="absolute bottom-16 right-[15%] h-14 w-14 text-primary/5 rotate-[200deg] hidden lg:block" />

        <div className="px-6 md:px-10 lg:px-16 relative">
          <div className="max-w-7xl mx-auto">
            {/* Section Header */}
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
              <div className="relative">
                <Leaf className="absolute -left-8 top-0 h-6 w-6 text-primary/30 rotate-[135deg] hidden md:block" />
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
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
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
      <section className="py-24 md:py-32 bg-primary overflow-hidden relative">
        {/* Decorative leaves - light on dark background */}
        <Leaf className="absolute top-8 left-[8%] h-12 w-12 text-primary-foreground/10 rotate-45 hidden md:block" />
        <Leaf className="absolute top-16 right-[12%] h-10 w-10 text-primary-foreground/5 -rotate-30 hidden lg:block" />
        <Leaf className="absolute bottom-12 left-[20%] h-14 w-14 text-primary-foreground/10 rotate-[170deg] hidden lg:block" />
        <Leaf className="absolute bottom-8 right-[5%] h-8 w-8 text-primary-foreground/5 rotate-[200deg] hidden md:block" />

        <div className="px-6 md:px-10 lg:px-16 relative">
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

        {/* Decorative leaves */}
        <Leaf className="absolute top-20 left-[3%] h-20 w-20 text-primary/5 rotate-[30deg] hidden lg:block" />
        <Leaf className="absolute top-1/3 right-[3%] h-10 w-10 text-accent/10 -rotate-45 hidden md:block" />
        <Leaf className="absolute bottom-32 left-[15%] h-8 w-8 text-primary/10 rotate-[145deg] hidden md:block" />

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
                <div className="aspect-[3/4] bg-muted relative overflow-hidden">
                  <Image
                    src="/images/magdalena-portrait.jpg"
                    alt="Magdalena Batruch-Skoczypiec - fizjoterapeutka"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    priority
                  />
                  {/* Decorative frame */}
                  <div className="absolute inset-6 border border-background/20 pointer-events-none" />

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

        {/* Decorative leaves - light on dark */}
        <Leaf className="absolute top-16 left-[10%] h-16 w-16 text-background/5 rotate-[60deg] hidden lg:block" />
        <Leaf className="absolute top-1/2 right-[5%] h-12 w-12 text-background/5 -rotate-30 hidden md:block" />
        <Leaf className="absolute bottom-20 left-[25%] h-10 w-10 text-accent/10 rotate-[180deg] hidden lg:block" />
        <Leaf className="absolute bottom-12 right-[20%] h-14 w-14 text-background/5 rotate-[210deg] hidden md:block" />

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
