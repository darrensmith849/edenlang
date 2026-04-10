"use client";

import { AnimatedSection } from "@/components/ui/animated-section";
import { PARTNERS } from "@/lib/constants";

export function WorkPartners() {
  return (
    <section className="relative py-16 md:py-20 bg-eden-black border-y border-white/5">
      <div className="mx-auto max-w-6xl px-6 md:px-8 text-center">
        <AnimatedSection>
          <p className="text-xs uppercase tracking-[0.3em] text-eden-muted/50 mb-10">
            Selected partners &amp; collaborations
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <div className="flex flex-wrap items-center justify-center gap-x-12 md:gap-x-16 gap-y-6">
            {PARTNERS.map((partner) => (
              <span
                key={partner.name}
                className="text-xl md:text-2xl font-serif text-eden-cream/25 hover:text-eden-cream/50 transition-colors duration-500"
              >
                {partner.name}
              </span>
            ))}
          </div>
          <p className="mt-8 text-[11px] text-eden-muted/40 uppercase tracking-[0.15em]">
            Partner logos placeholder — supply assets to complete
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
}
