"use client";

import { AnimatedSection } from "@/components/ui/animated-section";
import { Button } from "@/components/ui/button";

export function BookingsCTA() {
  return (
    <section className="relative py-24 md:py-32 bg-eden-black overflow-hidden">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] rounded-full bg-eden-gold/5 blur-[120px] pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-3xl px-6 md:px-8 text-center">
        <AnimatedSection>
          <h2 className="font-serif text-3xl md:text-4xl text-eden-cream leading-snug mb-6">
            Interested in working together?
          </h2>
          <p className="text-eden-muted text-base leading-relaxed mb-10 max-w-xl mx-auto">
            For bookings, collaborations, ministry invitations, or general
            enquiries, reach out through the contact form. Every enquiry is
            received with care.
          </p>
          <Button href="/contact" variant="primary" size="lg">
            Get in Touch
          </Button>
        </AnimatedSection>
      </div>
    </section>
  );
}
