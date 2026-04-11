"use client";

import { AnimatedSection } from "@/components/ui/animated-section";
import { PARTNERS } from "@/lib/constants";

export function PartnerStrip() {
  return (
    <section className="relative py-12 md:py-14 bg-eden-black border-y border-white/[0.03]">
      <div className="mx-auto max-w-6xl px-6 md:px-8 text-center">
        <AnimatedSection>
          <p className="text-[10px] uppercase tracking-[0.35em] text-eden-muted/35 mb-5">
            Partners
          </p>
          <div className="flex items-center justify-center gap-x-12">
            {PARTNERS.map((p) => (
              <span
                key={p.name}
                className="text-lg font-serif text-eden-cream/20 hover:text-eden-cream/40 transition-colors duration-500"
              >
                {p.name}
              </span>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
