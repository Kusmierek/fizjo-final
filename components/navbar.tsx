"use client";

import * as React from "react";
import Link from "next/link";
import { Phone, ArrowUpRight, Leaf } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import { services } from "@/lib/services-data";

export function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [servicesOpen, setServicesOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "glass border-b border-border/50" : ""
      }`}
    >
      {/* Decorative grass/leaf elements */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      {/* Left side leaves */}
      <div className="absolute -bottom-2 left-[8%] opacity-40 hidden sm:block">
        <Leaf className="h-5 w-5 text-primary rotate-[160deg]" />
      </div>
      <div className="absolute -bottom-1 left-[12%] opacity-25 hidden sm:block">
        <Leaf className="h-3 w-3 text-primary rotate-[190deg]" />
      </div>
      <div className="absolute -bottom-3 left-[18%] opacity-35 hidden md:block">
        <Leaf className="h-4 w-4 text-accent rotate-[170deg]" />
      </div>

      {/* Center leaves */}
      <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 opacity-20 hidden lg:block">
        <Leaf className="h-4 w-4 text-primary rotate-180" />
      </div>

      {/* Right side leaves */}
      <div className="absolute -bottom-2 right-[20%] opacity-30 hidden md:block">
        <Leaf className="h-4 w-4 text-primary rotate-[200deg]" />
      </div>
      <div className="absolute -bottom-1 right-[15%] opacity-40 hidden sm:block">
        <Leaf className="h-3 w-3 text-accent rotate-[175deg]" />
      </div>
      <div className="absolute -bottom-3 right-[10%] opacity-25 hidden sm:block">
        <Leaf className="h-5 w-5 text-primary rotate-[185deg]" />
      </div>

      {/* Top decorative leaves (subtle) */}
      <div className="absolute top-2 left-[5%] opacity-10 hidden lg:block">
        <Leaf className="h-6 w-6 text-primary rotate-45" />
      </div>
      <div className="absolute top-3 right-[8%] opacity-10 hidden lg:block">
        <Leaf className="h-5 w-5 text-primary -rotate-30" />
      </div>

      <div className="flex items-center justify-between px-6 py-5 md:px-10 lg:px-16">
        {/* Logo with Nature Elements */}
        <Link href="/" className="group flex items-center gap-3">
          <div className="relative">
            <img
              src="/images/logo/logo.png"
              alt="Fizjo z Natury logo"
              className="h-12 w-auto group-hover:scale-105 transition-transform duration-300"
            />
            {/* Decorative leaves around logo */}
            <Leaf className="absolute -top-1 -right-2 h-3 w-3 text-primary/50 rotate-45 group-hover:rotate-[60deg] transition-transform duration-300" />
            <Leaf className="absolute -bottom-1 -left-2 h-3 w-3 text-accent/50 -rotate-45 group-hover:-rotate-[60deg] transition-transform duration-300" />
          </div>
          <div className="hidden sm:flex flex-col">
            <span className="font-serif text-lg text-foreground leading-tight">
              Fizjo z Natury
            </span>
            <span className="text-[10px] text-muted-foreground tracking-wider">
              Fizjoterapia domowa
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1">
          {[
            { href: "/", label: "Start" },
            { href: "/#uslugi", label: "Usługi" },
            { href: "/o-mnie", label: "O mnie" },
            { href: "/kontakt", label: "Kontakt" },
          ].map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="relative px-5 py-2 text-sm font-medium text-foreground/80 hover:text-foreground transition-colors group"
            >
              {item.label}
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-accent group-hover:w-3/4 transition-all duration-300" />
            </Link>
          ))}
        </nav>

        {/* CTA & Mobile Menu */}
        <div className="flex items-center gap-4">
          <a
            href="tel:660222440"
            className="hidden md:flex items-center gap-2 px-5 py-2.5 bg-primary text-primary-foreground text-sm font-medium hover:bg-primary/90 transition-colors"
          >
            <Phone className="h-4 w-4" />
            <span>Umów wizytę</span>
          </a>

          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <button
                className="flex flex-col gap-1.5 p-2 group"
                aria-label="Menu"
              >
                <span
                  className={`w-6 h-0.5 bg-foreground transition-all duration-300 ${isOpen ? "rotate-45 translate-y-2" : ""}`}
                />
                <span
                  className={`w-6 h-0.5 bg-foreground transition-all duration-300 ${isOpen ? "opacity-0" : ""}`}
                />
                <span
                  className={`w-6 h-0.5 bg-foreground transition-all duration-300 ${isOpen ? "-rotate-45 -translate-y-2" : ""}`}
                />
              </button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-full sm:w-[480px] bg-primary border-none p-0 overflow-y-auto"
            >
              <div className="flex flex-col min-h-full p-8 md:p-12">
                <div className="flex justify-between items-center mb-12">
                  <span className="text-primary-foreground/50 text-xs tracking-[0.3em] uppercase">
                    Menu
                  </span>
                </div>

                <nav className="flex-1 flex flex-col gap-2">
                  {[
                    { href: "/", label: "Strona główna", num: "01" },
                    { href: "/o-mnie", label: "O mnie", num: "02" },
                    { href: "/kontakt", label: "Kontakt", num: "03" },
                  ].map((item, i) => (
                    <SheetClose asChild key={item.href}>
                      <Link
                        href={item.href}
                        className="group flex items-center justify-between py-4 border-b border-primary-foreground/10 hover:border-accent transition-colors"
                        style={{ animationDelay: `${i * 100}ms` }}
                      >
                        <div className="flex items-center gap-6">
                          <span className="text-xs text-primary-foreground/40 font-mono">
                            {item.num}
                          </span>
                          <span className="font-serif text-3xl md:text-4xl text-primary-foreground group-hover:text-accent transition-colors">
                            {item.label}
                          </span>
                        </div>
                        <ArrowUpRight className="h-5 w-5 text-primary-foreground/30 group-hover:text-accent group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                      </Link>
                    </SheetClose>
                  ))}

                  {/* Services Accordion */}
                  <div className="py-4 border-b border-primary-foreground/10">
                    <button
                      onClick={() => setServicesOpen(!servicesOpen)}
                      className="group flex items-center justify-between w-full"
                    >
                      <div className="flex items-center gap-6">
                        <span className="text-xs text-primary-foreground/40 font-mono">
                          04
                        </span>
                        <span className="font-serif text-3xl md:text-4xl text-primary-foreground group-hover:text-accent transition-colors">
                          Usługi
                        </span>
                      </div>
                      <span
                        className={`text-xl text-primary-foreground/50 transition-transform duration-300 ${servicesOpen ? "rotate-45" : ""}`}
                      >
                        +
                      </span>
                    </button>

                    <div
                      className={`overflow-hidden transition-all duration-500 ${servicesOpen ? "max-h-[500px] mt-4" : "max-h-0"}`}
                    >
                      <div className="pl-12 flex flex-col gap-2">
                        {services.map((service, idx) => (
                          <SheetClose asChild key={service.slug}>
                            <Link
                              href={`/uslugi/${service.slug}`}
                              className="group flex items-center gap-3 py-2 text-primary-foreground/60 hover:text-accent transition-colors"
                            >
                              <span className="text-xs font-mono text-primary-foreground/30">
                                0{idx + 1}
                              </span>
                              <span className="text-base">{service.title}</span>
                            </Link>
                          </SheetClose>
                        ))}
                      </div>
                    </div>
                  </div>
                </nav>

                {/* Footer */}
                <div className="pt-8 mt-auto">
                  <div className="flex items-center justify-between">
                    <a
                      href="tel:660222440"
                      className="text-2xl font-serif text-primary-foreground hover:text-accent transition-colors"
                    >
                      660 222 440
                    </a>
                    <div className="flex gap-4">
                      {["Instagram", "Facebook"].map((social) => (
                        <a
                          key={social}
                          href={`https://${social.toLowerCase()}.com`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-xs uppercase tracking-wider text-primary-foreground/50 hover:text-accent transition-colors"
                        >
                          {social}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
