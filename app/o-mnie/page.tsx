import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Phone,
  Award,
  GraduationCap,
  Heart,
  Users,
  ArrowRight,
  Leaf,
} from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "O mnie | Fizjo z Natury - Magdalena Batruch-Skoczypiec",
  description:
    "Poznaj Magdalenę Batruch-Skoczypiec - certyfikowanego fizjoterapeutę z wieloletnim doświadczeniem w terapii manualnej i naturalnych metodach leczenia.",
};

const qualifications = [
  "Dyplom magistra fizjoterapii",
  "Certyfikat terapii manualnej",
  "Certyfikat terapii czaszkowo-krzyżowej",
  "Certyfikat masażu Breussa",
  "Certyfikat funkcjonalnej terapii trzewi",
  "Certyfikat hirudoterapii medycznej",
];

const values = [
  {
    icon: Heart,
    title: "Holistyczne podejście",
    description:
      "Traktuję każdego pacjenta jako całość - ciało, umysł i duszę.",
  },
  {
    icon: Users,
    title: "Indywidualna opieka",
    description: "Plan terapii dostosowany do potrzeb i możliwości pacjenta.",
  },
  {
    icon: Award,
    title: "Profesjonalizm",
    description: "Ciągłe doskonalenie umiejętności poprzez kursy i szkolenia.",
  },
  {
    icon: Leaf,
    title: "Naturalne metody",
    description: "Sprawdzone metody wspierające organizm w samoleczeniu.",
  },
];

export default function AboutPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center overflow-hidden">
        {/* Background decorations */}
        <div className="absolute top-20 right-[10%] w-64 h-64 bg-primary/5 animate-blob" />
        <div className="absolute bottom-20 left-[5%] w-48 h-48 bg-accent/5 animate-blob animation-delay-400" />

        <div className="relative px-6 md:px-10 lg:px-16 py-32 w-full">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-12 h-px bg-accent" />
                  <span className="text-xs tracking-[0.3em] text-muted-foreground uppercase">
                    Poznaj mnie
                  </span>
                </div>

                <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl text-foreground leading-tight mb-8">
                  Magdalena
                  <br />
                  <span className="text-stroke text-primary">
                    Batruch-Skoczypiec
                  </span>
                </h1>

                <p className="text-xl text-muted-foreground leading-relaxed mb-8 max-w-xl">
                  Jestem magistrem fizjoterapii oraz naturopatą. W swojej pracy
                  łączę wiedzę medyczną z holistycznym podejściem do człowieka,
                  dzięki czemu mogę kompleksowo wspierać pacjentów w powrocie do
                  zdrowia. Wierzę, że skuteczna terapia to nie tylko praca z
                  ciałem, ale także z emocjami i ogólnym dobrostanem organizmu.
                </p>

                <Button
                  asChild
                  size="lg"
                  className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-6 text-base group"
                >
                  <a href="tel:660222440" className="flex items-center gap-3">
                    <Phone className="h-5 w-5" />
                    <span>Umów konsultację</span>
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                </Button>
              </div>

              <div className="relative">
                <div className="aspect-[4/5] bg-muted relative">
                  {/* Decorative frame */}
                  <div className="absolute inset-6 border border-primary/20" />

                  {/* Content */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center px-8">
                      <div className="w-32 h-32 bg-primary/10 mx-auto mb-6 flex items-center justify-center">
                        <span className="font-serif text-4xl font-bold text-primary">
                          MBS
                        </span>
                      </div>
                      <p className="font-serif text-xl text-foreground mb-2">
                        Fizjoterapeuta
                      </p>
                      <p className="text-muted-foreground">
                        Terapeuta manualny
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

      {/* Story Section */}
      <section className="py-24 md:py-32 bg-muted/30">
        <div className="px-6 md:px-10 lg:px-16">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <span className="text-xs tracking-[0.3em] text-accent uppercase font-medium">
                Moja historia
              </span>
              <div className="w-12 h-px bg-accent" />
            </div>

            <div className="space-y-8 text-lg text-muted-foreground leading-relaxed">
              <p className="text-2xl md:text-3xl font-serif text-foreground leading-snug">
                „Człowiek to nie tylko zbiór mięśni, kości, organów i całej
                reszty tkanek. Człowiek to wielowymiarowa istota. Ciało nadające
                kształt, psychika z wieloma odcieniami emocji oraz energia,
                która wprawia to wszystko w ruch”.
              </p>
              <p>
                Przez wiele lat pracowałam jako fizjoterapeutka w hospicjum
                domowym, odwiedzając pacjentów w ich własnych domach.
                Najczęściej opiekowałam się dziećmi z MPD oraz innymi chorobami
                neurologicznymi, a także osobami dorosłymi wymagającymi
                specjalistycznego wsparcia.
              </p>
              <p>
                To doświadczenie ugruntowało moje przekonanie, że empatia,
                uważność i indywidualne podejście są fundamentem skutecznej
                terapii. Praca w hospicjum nauczyła mnie pokory, wrażliwości i
                spojrzenia na człowieka jako całość. Z czasem naturalnym krokiem
                stało się rozpoczęcie działalności na własną rękę, aby móc
                jeszcze szerzej i swobodniej pomagać pacjentom, dopasowując
                metody pracy do ich indywidualnych potrzeb.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 md:py-32">
        <div className="px-6 md:px-10 lg:px-16">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center gap-3 mb-12">
              <span className="text-xs tracking-[0.3em] text-accent uppercase font-medium">
                Wartości
              </span>
              <div className="w-12 h-px bg-accent" />
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => {
                const Icon = value.icon;
                return (
                  <div key={index} className="group">
                    <div className="mb-6">
                      <div className="w-16 h-16 bg-primary/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                        <Icon className="h-8 w-8 text-primary group-hover:text-accent transition-colors" />
                      </div>
                    </div>
                    <h3 className="font-serif text-xl text-foreground mb-3">
                      {value.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Qualifications Section */}
      <section className="py-24 md:py-32 bg-primary">
        <div className="px-6 md:px-10 lg:px-16">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <div className="flex items-center gap-3 mb-8">
                  <span className="text-xs tracking-[0.3em] text-accent uppercase font-medium">
                    Kwalifikacje
                  </span>
                  <div className="w-12 h-px bg-accent" />
                </div>

                <h2 className="font-serif text-4xl md:text-5xl text-primary-foreground mb-8 leading-tight">
                  Certyfikaty
                  <br />i wykształcenie
                </h2>

                <p className="text-primary-foreground/70 text-lg leading-relaxed">
                  Nieustanny rozwój pozwala mi dobierać skuteczne i
                  indywidualnie dopasowane metody terapii, odpowiadające na
                  realne potrzeby pacjentów.
                </p>
              </div>

              <div className="space-y-4">
                {qualifications.map((qual, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-4 py-4 border-b border-primary-foreground/20 group"
                  >
                    <div className="w-10 h-10 bg-primary-foreground/10 flex items-center justify-center flex-shrink-0 group-hover:bg-accent transition-colors">
                      <GraduationCap className="h-5 w-5 text-primary-foreground group-hover:text-accent-foreground transition-colors" />
                    </div>
                    <span className="text-primary-foreground">{qual}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 md:py-32">
        <div className="px-6 md:px-10 lg:px-16">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-16">
              {[
                { number: "10+", label: "Lat doświadczenia" },
                { number: "6+", label: "Certyfikatów" },
                { number: "1000+", label: "Pacjentów" },
                { number: "7", label: "Specjalizacji" },
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <p className="font-serif text-5xl md:text-6xl lg:text-7xl text-primary mb-2">
                    {stat.number}
                  </p>
                  <p className="text-sm text-muted-foreground uppercase tracking-wider">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 md:py-32 bg-foreground">
        <div className="px-6 md:px-10 lg:px-16">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-background mb-8 leading-tight">
              Chcesz dowiedzieć
              <br />
              <span className="text-accent">się więcej?</span>
            </h2>

            <p className="text-xl text-background/70 max-w-2xl mx-auto mb-12 leading-relaxed">
              Skontaktuj się ze mną, aby omówić swoje potrzeby i umówić się na
              pierwszą wizytę.
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
                <Link href="/kontakt" className="flex items-center gap-3">
                  <span>Formularz kontaktowy</span>
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
