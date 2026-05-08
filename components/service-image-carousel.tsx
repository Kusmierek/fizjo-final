"use client";

import * as React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface ServiceImageCarouselProps {
  images: string[];
  title: string;
  className?: string;
}

export function ServiceImageCarousel({
  images,
  title,
  className,
}: ServiceImageCarouselProps) {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    if (!api) return;

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  const scrollPrev = React.useCallback(() => {
    api?.scrollPrev();
  }, [api]);

  const scrollNext = React.useCallback(() => {
    api?.scrollNext();
  }, [api]);

  if (!images || images.length === 0) {
    return null;
  }

  return (
    <div className={cn("relative group", className)}>
      <Carousel
        setApi={setApi}
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full"
      >
        <CarouselContent className="-ml-0">
          {images.map((image, index) => (
            <CarouselItem key={index} className="pl-0">
              <div className="relative aspect-[3/4] md:aspect-[4/5] w-full overflow-hidden rounded-2xl">
                <Image
                  src={image}
                  alt={`${title} - zdjecie ${index + 1}`}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 66vw, 800px"
                  priority
                  loading="eager"
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        {/* Navigation arrows */}
        {images.length > 1 && (
          <>
            <button
              onClick={scrollPrev}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center bg-background/90 backdrop-blur-sm rounded-full shadow-xl opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-background hover:scale-110"
              aria-label="Poprzednie zdjecie"
            >
              <ChevronLeft className="h-6 w-6 text-foreground" />
            </button>
            <button
              onClick={scrollNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center bg-background/90 backdrop-blur-sm rounded-full shadow-xl opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-background hover:scale-110"
              aria-label="Nastepne zdjecie"
            >
              <ChevronRight className="h-6 w-6 text-foreground" />
            </button>
          </>
        )}
      </Carousel>

      {/* Dots indicator */}
      {images.length > 1 && (
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-3">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => api?.scrollTo(index)}
              className={cn(
                "w-3 h-3 rounded-full transition-all duration-300 shadow-md",
                current === index + 1
                  ? "bg-accent w-8"
                  : "bg-background/70 hover:bg-background/90"
              )}
              aria-label={`Przejdz do zdjecia ${index + 1}`}
            />
          ))}
        </div>
      )}

      {/* Image counter */}
      {images.length > 1 && (
        <div className="absolute top-5 right-5 px-4 py-2 bg-background/90 backdrop-blur-sm rounded-full text-sm font-medium text-foreground shadow-lg">
          {current} / {count}
        </div>
      )}
    </div>
  );
}
