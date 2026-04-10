"use client";

import { AnimatedSection } from "@/components/ui/animated-section";
import Image from "next/image";
import { IMAGES } from "@/lib/constants";

export function AboutStory() {
  return (
    <section className="relative py-20 md:py-28 bg-eden-charcoal grain">
      <div className="relative z-10 mx-auto max-w-4xl px-6 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16">
          <AnimatedSection className="md:col-span-5" direction="left">
            <div className="relative aspect-[3/4] overflow-hidden border border-white/10 bg-eden-dark">
              <Image
                src={IMAGES.aboutPortrait}
                alt="Daniel Jenkins — All the Glory"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 40vw"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-eden-black/70 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <span className="text-xs uppercase tracking-[0.25em] text-eden-cream/60">
                  Daniel Jenkins
                </span>
              </div>
            </div>
          </AnimatedSection>

          <div className="md:col-span-7 flex flex-col justify-center">
            <AnimatedSection>
              <p className="text-eden-cream text-base md:text-lg leading-relaxed mb-6">
                With over a decade of professional musical experience spanning
                songwriting, production, live performance, and creative
                collaboration, Daniel brings a rare combination of technical
                craft and emotional sincerity to every project. Guitar sits at
                the centre of the creative identity — it is the primary
                instrument and the anchor of the sound.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.1}>
              <p className="text-eden-muted text-base leading-relaxed mb-6">
                Worship remains at the core. The music and the creative work
                are shaped by a deep spiritual grounding — a story of
                redemption that informs the sincerity, the patience, and the
                intention behind each piece. This is not about persona. It is
                about meaningful work rather than hype.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <p className="text-eden-muted text-base leading-relaxed">
                Whether creating a custom song for a personal story, providing
                guitar for a creative campaign, collaborating on a production,
                or leading worship at an event — the approach is always the
                same: serious craft, genuine care, and a commitment to
                something that lasts beyond the moment.
              </p>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  );
}
