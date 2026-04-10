"use client";

import Image from "next/image";
import { AnimatedSection } from "@/components/ui/animated-section";
import { IMAGES, PROOF_POINTS } from "@/lib/constants";

const gallery = [
  { src: IMAGES.heroPortrait, alt: "Studio session", span: "md:col-span-2 md:row-span-2" },
  { src: IMAGES.livePerformance, alt: "Live performance", span: "md:col-span-1" },
  { src: IMAGES.creativeSession, alt: "Creative session", span: "md:col-span-1" },
  { src: IMAGES.altPortrait, alt: "Guitar work", span: "md:col-span-1" },
  { src: IMAGES.aboutPortrait, alt: "Portrait", span: "md:col-span-1" },
];

export function WorkProof() {
  return (
    <section className="relative py-24 md:py-32 bg-eden-charcoal grain">
      <div className="relative z-10 mx-auto max-w-6xl px-6 md:px-8">
        {/* Proof points */}
        <AnimatedSection>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 mb-20 md:mb-28">
            {PROOF_POINTS.map((point) => (
              <div
                key={point.label}
                className="text-center p-6 border border-white/5"
              >
                <span className="block font-serif text-3xl md:text-4xl text-eden-gold mb-2">
                  {point.value}
                </span>
                <span className="text-xs uppercase tracking-[0.2em] text-eden-muted">
                  {point.label}
                </span>
              </div>
            ))}
          </div>
        </AnimatedSection>

        {/* Visual gallery */}
        <AnimatedSection delay={0.1}>
          <span className="block text-xs uppercase tracking-[0.3em] text-eden-gold mb-6 font-medium">
            Visual Proof
          </span>
          <h2 className="font-serif text-3xl md:text-4xl text-eden-cream leading-tight mb-12">
            Selected visuals
          </h2>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {gallery.map((item, i) => (
            <AnimatedSection
              key={item.alt}
              delay={i * 0.06}
              className={item.span}
            >
              <div className="relative aspect-[4/3] overflow-hidden border border-white/5 bg-eden-dark group">
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  className="object-cover group-hover:scale-[1.02] transition-transform duration-700"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-eden-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
