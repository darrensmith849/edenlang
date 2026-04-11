"use client";

import { AnimatedSection } from "@/components/ui/animated-section";
import { Button } from "@/components/ui/button";

export function ServicesCTA() {
  return (
    <section className="relative py-20 md:py-28 bg-eden-black overflow-hidden">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[400px] h-[250px] rounded-full bg-eden-gold/3 blur-[120px] pointer-events-none" />
      <div className="relative z-10 mx-auto max-w-2xl px-6 md:px-8 text-center">
        <AnimatedSection>
          <h2 className="font-serif text-2xl md:text-3xl text-eden-cream mb-4">Have a project in mind?</h2>
          <p className="text-eden-muted text-sm leading-relaxed mb-8 max-w-md mx-auto">Reach out and let&apos;s talk about what you need.</p>
          <Button href="/contact" variant="primary" size="md">Enquire</Button>
        </AnimatedSection>
      </div>
    </section>
  );
}
