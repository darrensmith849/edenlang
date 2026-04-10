"use client";

import Image from "next/image";
import { AnimatedSection } from "@/components/ui/animated-section";
import { SERVICES, IMAGES } from "@/lib/constants";

const serviceImages: Record<number, string> = {
  0: IMAGES.creativeSession,
  2: IMAGES.livePerformance,
  4: IMAGES.altPortrait,
};

export function ServicesList() {
  return (
    <section className="relative py-24 md:py-32 bg-eden-charcoal grain">
      <div className="relative z-10 mx-auto max-w-6xl px-6 md:px-8">
        <div className="space-y-16 md:space-y-24">
          {SERVICES.map((service, i) => {
            const imageUrl = serviceImages[i];
            const isReversed = i % 2 !== 0;

            return (
              <AnimatedSection key={service.title} delay={0.05}>
                <div
                  className={`grid grid-cols-1 ${
                    imageUrl ? "md:grid-cols-12 gap-10 md:gap-16" : "gap-0"
                  } items-center`}
                >
                  {/* Image column */}
                  {imageUrl && (
                    <div
                      className={`md:col-span-5 ${
                        isReversed ? "md:order-2" : ""
                      }`}
                    >
                      <div className="relative aspect-[4/3] overflow-hidden border border-white/[0.04] bg-eden-dark">
                        <Image
                          src={imageUrl}
                          alt={`${service.title} — All the Glory`}
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 100vw, 40vw"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-eden-black/40 via-transparent to-transparent" />
                      </div>
                    </div>
                  )}

                  {/* Content column */}
                  <div
                    className={
                      imageUrl
                        ? `md:col-span-7 ${isReversed ? "md:order-1" : ""}`
                        : "max-w-2xl"
                    }
                  >
                    <span className="block text-xs uppercase tracking-[0.2em] text-eden-gold mb-4 font-medium">
                      {service.icon}
                    </span>
                    <h2 className="font-serif text-2xl md:text-3xl text-eden-cream mb-5">
                      {service.title}
                    </h2>
                    <p className="text-eden-muted text-base leading-relaxed max-w-lg">
                      {service.description}
                    </p>
                  </div>
                </div>

                {/* Subtle separator between services */}
                {i < SERVICES.length - 1 && (
                  <div className="mt-16 md:mt-24 border-b border-white/[0.03]" />
                )}
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
}
