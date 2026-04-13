"use client";

import Image from "next/image";
import { AnimatedSection } from "@/components/ui/animated-section";
import { IMAGES } from "@/lib/constants";

export function Positioning() {
  return (
    <section className="relative py-24 md:py-32 bg-eden-black">
      <div className="mx-auto max-w-6xl px-6 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16 items-center">
          <AnimatedSection className="md:col-span-6" direction="left">
            <div className="relative aspect-[3/2] overflow-hidden border border-white/[0.04] bg-eden-dark">
              <Image
                src={IMAGES.rooftop}
                alt="Daniel Jenkins playing guitar on rooftop"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-eden-black/40 via-transparent to-transparent" />
            </div>
          </AnimatedSection>

          <div className="md:col-span-6">
            <AnimatedSection>
              <span className="text-[10px] uppercase tracking-[0.3em] text-eden-gold mb-4 block font-medium">
                Zimbabwe &middot; 10+ years &middot; International
              </span>
              <h2 className="font-serif text-3xl md:text-4xl text-eden-cream leading-snug mb-6">
                Music built on craft, not trends.
              </h2>
              <p className="text-eden-muted text-sm md:text-base leading-relaxed mb-4">
                Over a decade of songwriting, production, and performance.
                Guitar at the centre. A professional background that spans
                studio recording, live stages, and creative collaboration
                across borders.
              </p>
              <p className="text-eden-muted/60 text-sm leading-relaxed">
                Every project is approached the same way — with patience,
                precision, and zero shortcuts.
              </p>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  );
}
