"use client";

import { AnimatedSection } from "@/components/ui/animated-section";
import { Button } from "@/components/ui/button";

export function ClosingCTA() {
  return (
    <section className="relative py-24 md:py-32 bg-eden-charcoal grain overflow-hidden">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] rounded-full bg-eden-gold/4 blur-[150px] pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-2xl px-6 md:px-8 text-center">
        <AnimatedSection>
          <span className="text-[10px] uppercase tracking-[0.3em] text-eden-gold mb-4 block font-medium">
            Get in Touch
          </span>
          <h2 className="font-serif text-3xl md:text-4xl text-eden-cream leading-snug mb-5">
            Have a project in mind?
          </h2>
          <p className="text-eden-muted text-sm leading-relaxed mb-8 max-w-md mx-auto">
            Custom songs, guitar for campaigns, production, worship bookings
            — reach out and let&apos;s talk.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Button href="/contact" variant="primary" size="md">
              Enquire
            </Button>
            <Button href="/services" variant="ghost" size="md">
              Services
            </Button>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
