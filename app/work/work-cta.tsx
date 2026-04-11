"use client";

import { AnimatedSection } from "@/components/ui/animated-section";
import { Button } from "@/components/ui/button";

export function WorkCTA() {
  return (
    <section className="relative py-20 md:py-28 bg-eden-black overflow-hidden">
      <div className="relative z-10 mx-auto max-w-2xl px-6 md:px-8 text-center">
        <AnimatedSection>
          <h2 className="font-serif text-2xl md:text-3xl text-eden-cream mb-4">Interested?</h2>
          <p className="text-eden-muted text-sm leading-relaxed mb-8 max-w-md mx-auto">For custom songs, creative projects, or bookings — get in touch.</p>
          <Button href="/contact" variant="primary" size="md">Enquire</Button>
        </AnimatedSection>
      </div>
    </section>
  );
}
