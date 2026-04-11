"use client";

import Image from "next/image";
import { AnimatedSection } from "@/components/ui/animated-section";
import { IMAGES, PROOF_POINTS } from "@/lib/constants";

const gallery = [
  { src: IMAGES.rooftop, alt: "Rooftop guitar session" },
  { src: IMAGES.street, alt: "Walking with guitar" },
  { src: IMAGES.studio, alt: "Studio session" },
  { src: IMAGES.hero, alt: "Guitar and doorway" },
];

export function WorkProof() {
  return (
    <section className="relative py-20 md:py-28 bg-eden-charcoal grain">
      <div className="relative z-10 mx-auto max-w-6xl px-6 md:px-8">
        <AnimatedSection>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-16 md:mb-24">
            {PROOF_POINTS.map((point) => (
              <div key={point.label} className="text-center py-7 px-4 border border-white/[0.04]">
                <span className="block font-serif text-3xl md:text-4xl text-eden-gold mb-2">{point.value}</span>
                <span className="text-[10px] uppercase tracking-[0.25em] text-eden-muted/60">{point.label}</span>
              </div>
            ))}
          </div>
        </AnimatedSection>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {gallery.map((item, i) => (
            <AnimatedSection key={item.alt} delay={i * 0.06}>
              <div className="relative aspect-[4/3] overflow-hidden border border-white/[0.04] bg-eden-dark group">
                <Image src={item.src} alt={item.alt} fill className="object-cover group-hover:scale-[1.02] transition-transform duration-700" sizes="(max-width: 640px) 100vw, 50vw" />
                <div className="absolute inset-0 bg-gradient-to-t from-eden-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
