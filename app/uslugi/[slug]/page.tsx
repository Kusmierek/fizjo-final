import { notFound } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { services, getServiceBySlug } from "@/lib/services-data";
import { ServiceImageCarousel } from "@/components/service-image-carousel";
import {
  Phone,
  ArrowRight,
  ArrowLeft,
  ArrowUpRight,
  Check,
  Sparkles,
  ExternalLink,
} from "lucide-react";
import type { Metadata } from "next";

export async function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    return {
      title: "Usługa nie znaleziona | Fizjo z Natury",
    };
  }

  return {
    title: `${service.title} | Fizjo z Natury`,
    description: service.shortDescription,
  };
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  const currentIndex = services.findIndex((s) => s.slug === slug);
  const prevService = currentIndex > 0 ? services[currentIndex - 1] : null;
  const nextService =
    currentIndex < services.length - 1 ? services[currentIndex + 1] : null;
  const otherServices = services.filter((s) => s.slug !== slug).slice(0, 4);

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] lg:min-h-[70vh] flex items-end overflow-hidden bg-primary">
        {/* Background Number */}
        <div className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/4 font-serif text-[40rem] font-bold text-primary-foreground/5 leading-none pointer-events-none select-none hidden lg:block">
          {String(currentIndex + 1).padStart(2, "0")}
        </div>

        <div className="relative px-4 sm:px-6 md:px-10 lg:px-16 py-12 sm:py-16 md:py-24 w-full">
          <div className="max-w-7xl mx-auto">
            {/* Breadcrumb */}
            <Link
              href="/#uslugi"
              className="inline-flex items-center gap-2 text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors mb-6 sm:mb-12"
            >
              <ArrowLeft className="h-4 w-4" />
              <span>Wszystkie usługi</span>
            </Link>

            {/* Title */}
            <div className="flex flex-col lg:flex-row lg:items-center gap-8 lg:gap-12">
              {/* Text content */}
              <div className="flex-1 order-2 lg:order-1">
                <div className="flex items-center gap-3 mb-4 md:mb-6">
                  <span className="text-xs tracking-[0.3em] text-accent uppercase font-medium">
                    Usluga {String(currentIndex + 1).padStart(2, "0")}/
                    {String(services.length).padStart(2, "0")}
                  </span>
                  <div className="w-12 h-px bg-accent" />
                </div>

                <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-primary-foreground leading-tight mb-4 md:mb-6">
                  {service.title}
                </h1>

                <p className="text-base md:text-lg text-primary-foreground/70 leading-relaxed max-w-lg mb-6 md:mb-8">
                  {service.shortDescription}
                </p>

                <Button
                  asChild
                  size="lg"
                  className="bg-accent text-accent-foreground hover:bg-accent/90 px-6 md:px-8 py-5 md:py-6 text-sm md:text-base shadow-lg w-full sm:w-auto"
                >
                  <a href="tel:660222440" className="flex items-center justify-center gap-3">
                    <Phone className="h-5 w-5" />
                    <span>Umow wizyte</span>
                  </a>
                </Button>
              </div>

              {/* Image carousel */}
              <div className="w-full lg:w-2/5 order-1 lg:order-2 flex-shrink-0">
                <div className="w-full max-w-full sm:max-w-md md:max-w-lg lg:max-w-sm mx-auto lg:ml-auto lg:mr-0">
                  <ServiceImageCarousel
                    images={service.images}
                    title={service.title}
                    className="shadow-2xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 md:py-24 lg:py-32">
        <div className="px-4 sm:px-6 md:px-10 lg:px-16">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-12 gap-10 lg:gap-16">
              {/* Main Content */}
              <div className="lg:col-span-7">
                <div className="mb-16">
                  <div className="flex items-center gap-3 mb-6">
                    <span className="text-xs tracking-[0.3em] text-accent uppercase font-medium">
                      O terapii
                    </span>
                    <div className="w-12 h-px bg-accent" />
                  </div>

                  <p className="text-lg text-muted-foreground leading-relaxed whitespace-pre-line">
                    {service.fullDescription}
                  </p>
                </div>

                {/* Benefits */}
                <div className="mb-16">
                  <div className="flex items-center gap-3 mb-8">
                    <span className="text-xs tracking-[0.3em] text-accent uppercase font-medium">
                      Korzyści
                    </span>
                    <div className="w-12 h-px bg-accent" />
                  </div>

                  <div className="grid gap-3 sm:gap-4">
                    {service.benefits.map((benefit, index) => (
                      <div
                        key={index}
                        className="group flex items-start gap-3 sm:gap-4 p-4 sm:p-5 border border-border hover:border-primary/30 hover:bg-primary/5 transition-all"
                      >
                        <div className="w-7 h-7 sm:w-8 sm:h-8 bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                          <Check className="h-4 w-4 text-primary group-hover:text-primary-foreground" />
                        </div>
                        <span className="text-sm sm:text-base text-foreground">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Indications */}
                <div>
                  <div className="flex items-center gap-3 mb-8">
                    <span className="text-xs tracking-[0.3em] text-accent uppercase font-medium">
                      Wskazania
                    </span>
                    <div className="w-12 h-px bg-accent" />
                  </div>

                  <div className="bg-muted/30 p-5 sm:p-8">
                    <ul className="space-y-3 sm:space-y-4">
                      {service.indications.map((indication, index) => (
                        <li key={index} className="flex items-start gap-3 sm:gap-4">
                          <span className="text-xs font-mono text-primary/60 mt-0.5 sm:mt-1">
                            {String(index + 1).padStart(2, "0")}
                          </span>
                          <span className="text-sm sm:text-base text-muted-foreground">
                            {indication}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Articles */}
                {service.articles && service.articles.length > 0 && (
                  <div className="mt-16">
                    {service.articlesHeader ? (
                      <h3 className="text-2xl md:text-3xl font-bold text-accent mb-8">
                        {service.articlesHeader}
                      </h3>
                    ) : (
                      <div className="flex items-center gap-3 mb-8">
                        <span className="text-xs tracking-[0.3em] text-accent uppercase font-medium">
                          Ciekawe artykuly
                        </span>
                        <div className="w-12 h-px bg-accent" />
                      </div>
                    )}

                    <div className="space-y-3">
                      {service.articles.map((article, index) => (
                        <a
                          key={index}
                          href={article.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group flex items-center justify-between p-4 sm:p-5 border border-border hover:border-primary/30 hover:bg-primary/5 transition-all"
                        >
                          <span className="text-sm sm:text-base text-foreground group-hover:text-primary transition-colors pr-4">
                            {article.title}
                          </span>
                          <ExternalLink className="h-4 w-4 sm:h-5 sm:w-5 text-muted-foreground group-hover:text-primary flex-shrink-0 transition-colors" />
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Sidebar */}
              <div className="lg:col-span-5">
                <div className="lg:sticky lg:top-32 space-y-6 sm:space-y-8">
                  {/* CTA Card */}
                  <div className="bg-foreground text-background p-5 sm:p-8">
                    <Sparkles className="h-8 w-8 text-accent mb-6" />
                    <h3 className="font-serif text-2xl mb-4">
                      Umów wizytę domową
                    </h3>
                    <p className="text-background/70 mb-6 leading-relaxed">
                      Zadzwoń i umów się na wizytę w komforcie swojego domu.
                      Profesjonalna opieka bez wychodzenia z domu.
                    </p>
                    <a
                      href="tel:660222440"
                      className="flex items-center justify-between p-4 bg-accent text-accent-foreground hover:bg-accent/90 transition-colors group"
                    >
                      <div className="flex items-center gap-3">
                        <Phone className="h-5 w-5" />
                        <span className="font-serif text-xl">660 222 440</span>
                      </div>
                      <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    </a>
                  </div>

                  {/* Other Services */}
                  <div>
                    <h3 className="text-xs tracking-[0.2em] text-muted-foreground uppercase mb-6">
                      Inne usługi
                    </h3>
                    <div className="space-y-2">
                      {otherServices.map((s) => (
                        <Link
                          key={s.slug}
                          href={`/uslugi/${s.slug}`}
                          className="group flex items-center justify-between py-4 border-b border-border hover:border-primary/30 transition-colors"
                        >
                          <span className="text-foreground group-hover:text-primary transition-colors">
                            {s.title}
                          </span>
                          <ArrowUpRight className="h-4 w-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation */}
      <section className="border-t border-border">
        <div className="px-4 sm:px-6 md:px-10 lg:px-16">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2">
              {prevService ? (
                <Link
                  href={`/uslugi/${prevService.slug}`}
                  className="group py-5 sm:py-8 pr-3 sm:pr-8 border-r border-border hover:bg-muted/30 transition-colors"
                >
                  <span className="text-[10px] sm:text-xs text-muted-foreground uppercase tracking-wider mb-1 sm:mb-2 block">
                    Poprzednia
                  </span>
                  <div className="flex items-center gap-2 sm:gap-3">
                    <ArrowLeft className="h-4 w-4 sm:h-5 sm:w-5 text-muted-foreground group-hover:text-primary group-hover:-translate-x-1 transition-all flex-shrink-0" />
                    <span className="font-serif text-sm sm:text-lg lg:text-xl text-foreground group-hover:text-primary transition-colors line-clamp-2">
                      {prevService.title}
                    </span>
                  </div>
                </Link>
              ) : (
                <div className="py-5 sm:py-8 pr-3 sm:pr-8 border-r border-border" />
              )}

              {nextService ? (
                <Link
                  href={`/uslugi/${nextService.slug}`}
                  className="group py-5 sm:py-8 pl-3 sm:pl-8 text-right hover:bg-muted/30 transition-colors"
                >
                  <span className="text-[10px] sm:text-xs text-muted-foreground uppercase tracking-wider mb-1 sm:mb-2 block">
                    Nastepna
                  </span>
                  <div className="flex items-center justify-end gap-2 sm:gap-3">
                    <span className="font-serif text-sm sm:text-lg lg:text-xl text-foreground group-hover:text-primary transition-colors line-clamp-2">
                      {nextService.title}
                    </span>
                    <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all flex-shrink-0" />
                  </div>
                </Link>
              ) : (
                <div className="py-5 sm:py-8 pl-3 sm:pl-8" />
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
