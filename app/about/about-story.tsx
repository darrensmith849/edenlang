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
                alt="All the Glory — portrait"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 40vw"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-eden-black/70 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <span className="text-xs uppercase tracking-[0.25em] text-eden-cream/60">
                  All the Glory
                </span>
              </div>
            </div>
          </AnimatedSection>

          {/* Story */}
          <div className="md:col-span-7 flex flex-col justify-center">
            <AnimatedSection>
              <p className="text-eden-cream text-base md:text-lg leading-relaxed mb-6">
                Life was radically redirected by Jesus. What could have been
                lost — truly lost — was redeemed. Drugs almost took everything.
                But grace intervened, and what followed was a complete
                rewriting of the story.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.1}>
              <p className="text-eden-muted text-base leading-relaxed mb-6">
                All the Glory exists because of that redemption. The songs are
                rooted in sincerity rather than performance. This is not about
                building a persona or a platform — it is about music that
                serves worship and points the glory back to God.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <p className="text-eden-muted text-base leading-relaxed mb-6">
                Behind the project is over a decade of musical experience — a
                Zimbabwean multi-instrumentalist, producer, and
                singer-songwriter with international performance background.
                Guitar sits at the centre of the creative identity, but the
                work spans production, songwriting, and worship leading.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.3}>
              <p className="text-eden-muted text-base leading-relaxed">
                Every note, every lyric, every moment of worship is offered
                freely — shaped by testimony, carried by grace, and given
                back to the One who deserves all the glory.
              </p>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  );
}
