"use client";

import { AnimatedSection, AnimatedText } from "@/components/ui/animated-section";
import { Button } from "@/components/ui/button";

export function GivingPreview() {
  return (
    <section className="relative py-20 md:py-28 bg-eden-black border-y border-white/5 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(196,149,106,0.12),transparent_45%),radial-gradient(circle_at_80%_70%,rgba(255,255,255,0.05),transparent_45%)]" />
      <div className="relative z-10 mx-auto max-w-3xl px-6 md:px-8 text-center">
        <AnimatedText>
          <span className="block text-xs uppercase tracking-[0.3em] text-eden-gold mb-6 font-medium">
            Giving
          </span>
        </AnimatedText>

        <AnimatedSection delay={0.1}>
          <h3 className="font-serif text-2xl md:text-3xl lg:text-4xl text-eden-cream mb-6 leading-snug">
            The music is freely available
          </h3>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <p className="text-eden-muted text-base md:text-lg leading-relaxed max-w-xl mx-auto mb-4">
            If you feel led to support the work, you are welcome to give.
            Giving here is entirely voluntary — it is not a purchase, a
            subscription, or an exchange for perks. The songs are shared freely.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.3}>
          <p className="text-eden-muted/60 text-sm leading-relaxed max-w-lg mx-auto mb-10">
            Your support helps the mission and future music continue.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.4}>
          <Button href="/giving" variant="outline" size="lg">
            Learn More About Giving
          </Button>
        </AnimatedSection>
      </div>
    </section>
  );
}
