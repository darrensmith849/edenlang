"use client";

import { AnimatedSection } from "@/components/ui/animated-section";
import { Button } from "@/components/ui/button";

export function ServicesCTA() {
  return (
    <section className="relative py-24 md:py-32 bg-eden-black overflow-hidden">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] rounded-full bg-eden-gold/5 blur-[120px] pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-3xl px-6 md:px-8 text-center">
        <AnimatedSection>
          <h2 className="font-serif text-3xl md:text-4xl text-eden-cream leading-snug mb-6">
            Have a project in mind?
          </h2>
          <p className="text-eden-muted text-base leading-relaxed mb-10 max-w-xl mx-auto">
            Whether it&apos;s a custom song, guitar for a campaign, a
            production collaboration, or a worship booking — let&apos;s talk
            about what we can create together.
          </p>
          <Button href="/contact" variant="primary" size="lg">
            Enquire Now
          </Button>
        </AnimatedSection>
      </div>
    </section>
  );
}
