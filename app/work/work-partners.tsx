"use client";

import { AnimatedSection } from "@/components/ui/animated-section";
import { PARTNERS } from "@/lib/constants";

export function WorkPartners() {
  return (
    <section className="relative py-14 md:py-16 bg-eden-black border-y border-white/[0.03]">
      <div className="mx-auto max-w-6xl px-6 md:px-8 text-center">
        <AnimatedSection>
          <p className="text-[10px] uppercase tracking-[0.35em] text-eden-muted/40 mb-6">
            Selected partners &amp; collaborations
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-12 md:gap-x-16 gap-y-4">
            {PARTNERS.map((partner) => (
              <span
                key={partner.name}
                className="text-lg md:text-xl font-serif text-eden-cream/20 hover:text-eden-cream/45 transition-colors duration-500"
              >
                {partner.name}
              </span>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
