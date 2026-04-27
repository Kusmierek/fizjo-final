"use client";

import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Phone, Leaf } from "lucide-react";

interface HeroProps {
  mounted: boolean;
}

// WARIANT A - Logo obok tytułu (obecny)
export function HeroVariantA({ mounted }: HeroProps) {
  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/grass-bg.jpg')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-background/80 via-background/50 to-background/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent" />
      </div>

      <div className="relative px-6 md:px-10 lg:px-16 py-32">
        <div className="max-w-7xl mx-auto">
          {/* Tagline */}
          <div
            className={`flex items-center gap-3 mb-8 ${mounted ? "animate-fade-up" : "opacity-0"}`}
          >
            <div className="w-12 h-px bg-accent" />
            <span className="text-sm tracking-[0.2em] text-foreground font-medium uppercase">
              Fizjoterapia w domu pacjenta
            </span>
          </div>

          {/* Main Heading with Logo */}
          <div className="relative mb-12">
            <div
              className={`flex items-start gap-4 md:gap-6 lg:gap-8 ${mounted ? "animate-fade-up animation-delay-200" : "opacity-0"}`}
              style={{ opacity: mounted ? undefined : 0 }}
            >
              <img
                src="/images/logo.png"
                alt="Fizjo z Natury logo"
                className="h-24 sm:h-32 md:h-44 lg:h-56 xl:h-72 w-auto mt-2 md:mt-4"
              />
              <h1 className="font-serif text-5xl sm:text-7xl md:text-8xl lg:text-[8rem] xl:text-[10rem] font-medium leading-[0.85] tracking-tight">
                <span className="text-foreground">Fizjo</span>
                <br />
                <span className="text-primary">z Natury</span>
              </h1>
            </div>

            {/* Floating badge */}
            <div
              className={`absolute -right-4 top-1/2 -translate-y-1/2 hidden xl:block ${mounted ? "animate-scale-in animation-delay-400" : "opacity-0"}`}
              style={{ opacity: mounted ? undefined : 0 }}
            >
              <div className="bg-accent text-accent-foreground px-6 py-4 rotate-12 shadow-xl">
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
              className={`text-lg md:text-xl text-foreground/80 leading-relaxed max-w-xl ${mounted ? "animate-fade-up animation-delay-400" : "opacity-0"}`}
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
                className="bg-accent text-accent-foreground hover:bg-accent/90 px-8 py-6 text-base group shadow-xl"
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
                className="border-foreground/20 text-foreground hover:bg-foreground/10 px-8 py-6 text-base bg-background/60 backdrop-blur-sm"
              >
                <Link href="#uslugi">Poznaj usługi</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="text-xs text-foreground/70 uppercase tracking-wider">
          Przewiń
        </span>
        <div className="w-px h-12 bg-foreground/30 relative overflow-hidden">
          <div
            className="absolute top-0 left-0 w-full h-1/2 bg-accent animate-marquee"
            style={{ animationDuration: "2s" }}
          />
        </div>
      </div>
    </section>
  );
}

// WARIANT B - Logo wycentrowane nad tekstem
export function HeroVariantB({ mounted }: HeroProps) {
  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-bottom bg-no-repeat"
        style={{ backgroundImage: "url('/images/background/grass-bg.jpg')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/60 to-background/40" />
      </div>

      {/* Decorative leaves */}
      <Leaf className="absolute top-32 left-[8%] h-16 w-16 text-primary/20 rotate-45 hidden lg:block" />
      <Leaf className="absolute top-48 right-[10%] h-12 w-12 text-accent/15 -rotate-30 hidden lg:block" />
      <Leaf className="absolute bottom-32 left-[15%] h-10 w-10 text-primary/15 rotate-[150deg] hidden md:block" />
      <Leaf className="absolute bottom-40 right-[12%] h-14 w-14 text-primary/10 rotate-[200deg] hidden lg:block" />

      <div className="relative px-6 md:px-10 lg:px-16 py-24">
        <div className="max-w-5xl mx-auto text-center">
          {/* Logo centered */}
          <div className={`mb-8 ${mounted ? "animate-fade-up" : "opacity-0"}`}>
            <img
              src="/images/logo/logo.png"
              alt="Fizjo z Natury logo"
              className="h-32 sm:h-40 md:h-48 lg:h-56 w-auto mx-auto"
            />
          </div>

          {/* Main Heading */}
          <h1
            className={`font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-medium leading-[0.9] tracking-tight mb-6 ${mounted ? "animate-fade-up animation-delay-200" : "opacity-0"}`}
            style={{ opacity: mounted ? undefined : 0 }}
          >
            <span className="text-primary">Fizjo z Natury</span>
          </h1>

          {/* Subtitle */}
          <p
            className={`font-serif text-xl md:text-2xl lg:text-3xl text-foreground/70 italic mb-4 ${mounted ? "animate-fade-up animation-delay-300" : "opacity-0"}`}
            style={{ opacity: mounted ? undefined : 0 }}
          >
            Magdalena Batruch-Skoczypiec
          </p>

          {/* Tagline */}
          <div
            className={`flex items-center justify-center gap-3 mb-10 ${mounted ? "animate-fade-up animation-delay-400" : "opacity-0"}`}
            style={{ opacity: mounted ? undefined : 0 }}
          >
            <div className="w-8 h-px bg-accent" />
            <span className="text-sm tracking-[0.2em] text-foreground/60 uppercase">
              Fizjoterapia w domu pacjenta
            </span>
            <div className="w-8 h-px bg-accent" />
          </div>

          {/* Description */}
          <p
            className={`text-lg md:text-xl text-foreground/70 leading-relaxed max-w-2xl mx-auto mb-12 ${mounted ? "animate-fade-up animation-delay-500" : "opacity-0"}`}
            style={{ opacity: mounted ? undefined : 0 }}
          >
            Holistyczne podejście do zdrowia, gdzie traktuję człowieka jako
            całość. Profesjonalna fizjoterapia w komforcie Twojego domu.
          </p>

          {/* CTA Buttons */}
          <div
            className={`flex flex-col sm:flex-row gap-4 justify-center ${mounted ? "animate-fade-up animation-delay-600" : "opacity-0"}`}
            style={{ opacity: mounted ? undefined : 0 }}
          >
            <Button
              asChild
              size="lg"
              className="bg-accent text-accent-foreground hover:bg-accent/90 px-10 py-7 text-lg group shadow-xl"
            >
              <a href="tel:660222440" className="flex items-center gap-3">
                <Phone className="h-5 w-5" />
                <span>Umów wizytę</span>
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-foreground/20 text-foreground hover:bg-foreground/10 px-10 py-7 text-lg bg-background/50 backdrop-blur-sm"
            >
              <Link href="#uslugi">Poznaj usługi</Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="text-xs text-foreground/60 uppercase tracking-wider">
          Przewiń
        </span>
        <div className="w-px h-12 bg-foreground/30 relative overflow-hidden">
          <div
            className="absolute top-0 left-0 w-full h-1/2 bg-accent animate-marquee"
            style={{ animationDuration: "2s" }}
          />
        </div>
      </div>
    </section>
  );
}

// WARIANT C - Split screen z logo po lewej
export function HeroVariantC({ mounted }: HeroProps) {
  return (
    <section className="relative min-h-screen flex flex-col lg:flex-row overflow-hidden">
      {/* Left side - Content */}
      <div className="relative lg:w-1/2 flex flex-col justify-center px-6 md:px-10 lg:px-16 py-24 lg:py-32 bg-background">
        {/* Decorative leaves */}
        <Leaf className="absolute top-24 right-8 h-10 w-10 text-primary/15 rotate-45 hidden lg:block" />
        <Leaf className="absolute bottom-32 left-8 h-8 w-8 text-accent/10 -rotate-30 hidden lg:block" />

        <div className="max-w-xl">
          {/* Logo */}
          <div className={`mb-8 ${mounted ? "animate-fade-up" : "opacity-0"}`}>
            <img
              src="/images/logo.png"
              alt="Fizjo z Natury logo"
              className="h-24 md:h-32 lg:h-40 w-auto"
            />
          </div>

          {/* Main Heading */}
          <h1
            className={`font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium leading-[0.9] tracking-tight mb-6 ${mounted ? "animate-fade-up animation-delay-200" : "opacity-0"}`}
            style={{ opacity: mounted ? undefined : 0 }}
          >
            <span className="text-foreground">Fizjo</span>
            <br />
            <span className="text-primary">z Natury</span>
          </h1>

          {/* Subtitle with line */}
          <div
            className={`flex items-center gap-4 mb-8 ${mounted ? "animate-fade-up animation-delay-300" : "opacity-0"}`}
            style={{ opacity: mounted ? undefined : 0 }}
          >
            <div className="w-12 h-px bg-accent" />
            <p className="font-serif text-lg text-foreground/70 italic">
              Magdalena Batruch-Skoczypiec
            </p>
          </div>

          {/* Description */}
          <p
            className={`text-lg text-muted-foreground leading-relaxed mb-10 ${mounted ? "animate-fade-up animation-delay-400" : "opacity-0"}`}
            style={{ opacity: mounted ? undefined : 0 }}
          >
            Holistyczne podejście do zdrowia, gdzie traktuję człowieka jako
            całość. Profesjonalna fizjoterapia w komforcie Twojego domu.
          </p>

          {/* CTA */}
          <div
            className={`flex flex-col sm:flex-row gap-4 ${mounted ? "animate-fade-up animation-delay-500" : "opacity-0"}`}
            style={{ opacity: mounted ? undefined : 0 }}
          >
            <Button
              asChild
              size="lg"
              className="bg-accent text-accent-foreground hover:bg-accent/90 px-8 py-6 text-base group shadow-lg"
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
              className="border-border text-foreground hover:bg-muted px-8 py-6 text-base bg-transparent"
            >
              <Link href="#uslugi">Poznaj usługi</Link>
            </Button>
          </div>

          {/* Stats row */}
          <div
            className={`flex gap-8 mt-12 pt-8 border-t border-border ${mounted ? "animate-fade-up animation-delay-600" : "opacity-0"}`}
            style={{ opacity: mounted ? undefined : 0 }}
          >
            <div>
              <p className="font-serif text-3xl text-primary">10+</p>
              <p className="text-xs text-muted-foreground uppercase tracking-wider">
                Lat doświadczenia
              </p>
            </div>
            <div>
              <p className="font-serif text-3xl text-primary">1000+</p>
              <p className="text-xs text-muted-foreground uppercase tracking-wider">
                Pacjentów
              </p>
            </div>
            <div>
              <p className="font-serif text-3xl text-primary">7</p>
              <p className="text-xs text-muted-foreground uppercase tracking-wider">
                Specjalizacji
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Right side - Image */}
      <div className="relative lg:w-1/2 min-h-[50vh] lg:min-h-screen">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/images/grass-bg.jpg')" }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/20 to-transparent lg:block hidden" />
          <div className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent lg:hidden" />
        </div>

        {/* Floating tagline on image */}
        <div className="absolute bottom-8 right-8 bg-background/90 backdrop-blur-sm px-6 py-4 hidden lg:block">
          <p className="text-xs uppercase tracking-[0.2em] text-foreground/60">
            Fizjoterapia
          </p>
          <p className="text-xs uppercase tracking-[0.2em] text-accent">
            w domu pacjenta
          </p>
        </div>
      </div>
    </section>
  );
}
