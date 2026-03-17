"use client";

import { AnimatedSection } from "@/components/ui/animated-section";
import { BRAND_PARTNERS } from "@/lib/constants";

export function TrustStrip() {
  const marqueeA = [...BRAND_PARTNERS, ...BRAND_PARTNERS, ...BRAND_PARTNERS];
  const marqueeB = [...BRAND_PARTNERS].reverse();

  return (
    <section className="relative py-20 md:py-24 bg-eden-black border-y border-white/5 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(196,149,106,0.22),transparent_45%),radial-gradient(circle_at_80%_70%,rgba(255,255,255,0.08),transparent_45%)]" />
      <div className="mx-auto max-w-6xl px-6 md:px-8">
        <AnimatedSection>
          <p className="text-center text-xs uppercase tracking-[0.3em] text-eden-muted/60 mb-4">
            Selected collaborations &amp; publicly visible credits include
          </p>
          <h3 className="text-center font-serif text-3xl md:text-5xl text-eden-cream mb-10">
            Trusted By Brands Building Culture
          </h3>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <div className="space-y-4">
            <div className="relative overflow-hidden rounded-2xl border border-eden-gold/25 bg-eden-dark/80 p-2 carousel-fade-mask">
              <div className="flex min-w-max animate-brand-row-left gap-3">
                {marqueeA.map((partner, idx) => (
                  <div
                    key={`${partner}-a-${idx}`}
                    className="brand-chip group inline-flex items-center justify-center min-w-[170px] px-5 py-4 border border-white/10 bg-eden-black/70"
                  >
                    <span className="font-serif text-xl tracking-wide text-eden-cream/90 group-hover:text-eden-gold transition-colors duration-300">
                      {partner}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-eden-charcoal/70 p-2 carousel-fade-mask">
              <div className="flex min-w-max animate-brand-row-right gap-3">
                {[...marqueeB, ...marqueeB, ...marqueeB].map((partner, idx) => (
                  <div
                    key={`${partner}-b-${idx}`}
                    className="brand-chip group inline-flex items-center justify-center min-w-[170px] px-5 py-3 border border-white/10 bg-eden-black/55"
                  >
                    <span className="text-sm uppercase tracking-[0.2em] text-eden-cream/75 group-hover:text-eden-gold transition-colors duration-300">
                      {partner}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <p className="text-center text-xs uppercase tracking-[0.22em] text-eden-gold/80 pt-4">
              Brand storytelling, composition, content, and cross-platform campaigns
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
