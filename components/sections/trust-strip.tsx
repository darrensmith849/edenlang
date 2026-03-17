"use client";

import { AnimatedSection } from "@/components/ui/animated-section";
import { BRAND_PARTNERS } from "@/lib/constants";

export function TrustStrip() {
  return (
    <section className="relative py-16 md:py-20 bg-eden-black border-y border-white/5">
      <div className="mx-auto max-w-6xl px-6 md:px-8">
        <AnimatedSection>
          <p className="text-center text-xs uppercase tracking-[0.3em] text-eden-muted/50 mb-10">
            Selected collaborations &amp; publicly visible credits include
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <div className="flex flex-wrap items-center justify-center gap-x-12 md:gap-x-16 gap-y-6">
            {BRAND_PARTNERS.map((partner) => (
              <span
                key={partner}
                className="text-lg md:text-xl font-serif text-eden-cream/25 hover:text-eden-cream/50 transition-colors duration-500"
              >
                {partner}
              </span>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
