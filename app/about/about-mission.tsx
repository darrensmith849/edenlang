"use client";

import { AnimatedSection } from "@/components/ui/animated-section";
import { Button } from "@/components/ui/button";

export function AboutMission() {
  return (
    <section className="relative py-20 md:py-28 bg-eden-black overflow-hidden">
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] rounded-full bg-eden-gold/3 blur-[120px] pointer-events-none" />
      <div className="relative z-10 mx-auto max-w-2xl px-6 md:px-8 text-center">
        <AnimatedSection>
          <h2 className="font-serif text-2xl md:text-3xl text-eden-cream leading-snug mb-5">Substance over noise.</h2>
          <p className="text-eden-muted text-sm leading-relaxed mb-8 max-w-md mx-auto">
            Every collaboration is approached with the same conviction — music should serve something real. The craft is serious. The heart behind it is worship, gratitude, and honest work.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Button href="/contact" variant="primary" size="md">Enquire</Button>
            <Button href="/services" variant="ghost" size="md">Services</Button>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
