"use client";

import { AnimatedSection, AnimatedText } from "@/components/ui/animated-section";
import { Button } from "@/components/ui/button";

export function ClosingCTA() {
  return (
    <section className="relative py-24 md:py-32 lg:py-40 bg-eden-black overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] rounded-full bg-eden-gold/5 blur-[150px] pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-3xl px-6 md:px-8 text-center">
        <AnimatedText>
          <span className="block text-xs uppercase tracking-[0.3em] text-eden-gold mb-8 font-medium">
            Get in Touch
          </span>
        </AnimatedText>

        <AnimatedSection delay={0.1}>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-eden-cream leading-snug mb-6">
            For bookings, collaborations, or enquiries
          </h2>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <p className="text-eden-muted text-base md:text-lg leading-relaxed max-w-xl mx-auto mb-10">
            Whether it&apos;s a worship event, a ministry invitation, a creative
            collaboration, or a general enquiry — reach out below.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.3}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button href="/contact" variant="primary" size="lg">
              Get in Touch
            </Button>
            <Button href="/bookings" variant="ghost" size="lg">
              View Bookings
            </Button>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
