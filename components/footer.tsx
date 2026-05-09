import Link from "next/link";
import { Phone, Mail, ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { services } from "@/lib/services-data";

function SocialIcon({ type }: { type: "instagram" | "facebook" }) {
  if (type === "instagram") {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        className="w-5 h-5"
      >
        <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
      </svg>
    );
  }
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      className="w-5 h-5"
    >
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

export function Footer() {
  return (
    <footer className="bg-foreground text-background">
      {/* Main Footer */}
      <div className="px-6 md:px-10 lg:px-16 py-16 md:py-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-8">
            {/* Brand Column */}
            <div className="lg:col-span-4">
              <Link href="/" className="inline-flex items-center gap-3 mb-6">
                <Image
                  src="/images/logo/logo.png"
                  alt="Fizjo z Natury logo"
                  width={30}
                  height={30}
                  className="object-contain"
                />
                <span className="font-serif text-xl text-background">
                  Fizjo z Natury
                </span>
              </Link>

              <p className="text-background/60 leading-relaxed mb-6 max-w-sm">
                Profesjonalna fizjoterapia w domu pacjenta. Holistyczne
                podejście do zdrowia i naturalnych metod leczenia.
              </p>

              <div className="flex gap-3">
                <a
                  href="https://www.instagram.com/fiznat7?utm_source=qr&igsh=MWt4MzY3end6anNqbg%3D%3D"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 border border-background/20 flex items-center justify-center text-background/60 hover:text-accent hover:border-accent transition-colors"
                  aria-label="Instagram"
                >
                  <SocialIcon type="instagram" />
                </a>
                <a
                  href="https://www.facebook.com/people/Fizjo-ZNatury/pfbid0242VwR8qn12oyD8mYBxMuu5UFGSYV3twzd63PtA4CVXETdu4vWBRbewgyftNJB4D9l/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 border border-background/20 flex items-center justify-center text-background/60 hover:text-accent hover:border-accent transition-colors"
                  aria-label="Facebook"
                >
                  <SocialIcon type="facebook" />
                </a>
              </div>
            </div>

            {/* Services Column */}
            <div className="lg:col-span-3">
              <h3 className="text-xs tracking-[0.2em] text-background/40 uppercase mb-6">
                Usługi
              </h3>
              <ul className="space-y-3">
                {services.slice(0, 5).map((service) => (
                  <li key={service.slug}>
                    <Link
                      href={`/uslugi/${service.slug}`}
                      className="group inline-flex items-center gap-2 text-background/70 hover:text-accent transition-colors"
                    >
                      <span>{service.title}</span>
                      <ArrowUpRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* More Services Column */}
            <div className="lg:col-span-2">
              <h3 className="text-xs tracking-[0.2em] text-background/40 uppercase mb-6">
                Więcej
              </h3>
              <ul className="space-y-3">
                {services.slice(5).map((service) => (
                  <li key={service.slug}>
                    <Link
                      href={`/uslugi/${service.slug}`}
                      className="group inline-flex items-center gap-2 text-background/70 hover:text-accent transition-colors"
                    >
                      <span>{service.title}</span>
                      <ArrowUpRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                    </Link>
                  </li>
                ))}
                <li>
                  <Link
                    href="/o-mnie"
                    className="group inline-flex items-center gap-2 text-background/70 hover:text-accent transition-colors"
                  >
                    <span>O mnie</span>
                    <ArrowUpRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact Column */}
            <div className="lg:col-span-3">
              <h3 className="text-xs tracking-[0.2em] text-background/40 uppercase mb-6">
                Kontakt
              </h3>
              <ul className="space-y-4">
                <li>
                  <a
                    href="tel:660222440"
                    className="flex items-center gap-3 text-background/70 hover:text-accent transition-colors"
                  >
                    <Phone className="w-4 h-4" />
                    <span className="font-serif text-lg">660 222 440</span>
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:kontakt@fizjoznatury.pl"
                    className="flex items-center gap-3 text-background/70 hover:text-accent transition-colors"
                  >
                    <Mail className="w-4 h-4" />
                    <span>kontakt@fizjoznatury.pl</span>
                  </a>
                </li>
                <li className="pt-4">
                  <a
                    href="https://fizjoznatury.pl"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-accent-foreground hover:bg-accent/90 transition-colors text-sm font-medium"
                  >
                    <span>fizjoznatury.pl</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-background/10">
        <div className="px-6 md:px-10 lg:px-16 py-6">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-background/40">
              {new Date().getFullYear()} Fizjo z Natury - Magdalena
              Batruch-Skoczypiec
            </p>
            <p className="text-sm text-background/40">
              Wszelkie prawa zastrzeżone
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
