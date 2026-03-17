"use client";

import { AnimatedSection } from "@/components/ui/animated-section";
import { BRAND_PARTNERS } from "@/lib/constants";

export function WorkPartners() {
  return (
    <section className="relative py-16 md:py-20 bg-eden-charcoal grain border-y border-white/5">
      <div className="relative z-10 mx-auto max-w-6xl px-6 md:px-8 text-center">
        <AnimatedSection>
          <p className="text-xs uppercase tracking-[0.3em] text-eden-muted/50 mb-10">
            Content created around tools and brands including
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <div className="flex flex-wrap items-center justify-center gap-x-12 md:gap-x-16 gap-y-6">
            {BRAND_PARTNERS.map((partner) => (
              <span
                key={partner}
                className="text-xl md:text-2xl font-serif text-eden-cream/20 hover:text-eden-cream/40 transition-colors duration-500"
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
