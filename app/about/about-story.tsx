"use client";

import { AnimatedSection } from "@/components/ui/animated-section";
import Image from "next/image";

export function AboutStory() {
  return (
    <section className="relative py-20 md:py-28 bg-eden-charcoal grain">
      <div className="relative z-10 mx-auto max-w-4xl px-6 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16">
          <AnimatedSection className="md:col-span-5" direction="left">
            <div className="relative aspect-[3/4] overflow-hidden border border-white/10 bg-eden-dark">
              <Image
                src="/images/eden/about-portrait.webp"
                alt="Portrait of Eden Lang"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 40vw"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-eden-black/70 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <span className="text-xs uppercase tracking-[0.25em] text-eden-cream/60">
                  Eden Lang
                </span>
              </div>
            </div>
          </AnimatedSection>

          {/* Story */}
          <div className="md:col-span-7 flex flex-col justify-center">
            <AnimatedSection>
              <p className="text-eden-cream text-base md:text-lg leading-relaxed mb-6">
                Eden Lang grew up in a musical household in Harare, Zimbabwe.
                Her father — also a musician — put a guitar in her hands early.
                By the time she was eight or nine, she was writing songs and
                recording herself on her father&apos;s computer. By her teens, she
                was animating her own music videos.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.1}>
              <p className="text-eden-muted text-base leading-relaxed mb-6">
                She never went to music school. She never studied animation
                formally. She taught herself production, songwriting,
                arrangement, mixing, 2D and 3D animation — building each skill
                by doing the work, one song and one frame at a time. That
                self-directed creative hunger is the thread through everything
                she does.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <p className="text-eden-muted text-base leading-relaxed mb-6">
                Her music draws from deep wells — heartbreak, faith, social
                justice, the quiet complexity of becoming who you are. Critics
                have compared her storytelling instinct to artists like Lauryn
                Hill and Hozier. But her sound is hers: soulful vocals, dreamy
                guitars, pulsating drums, and a lyrical honesty that makes every
                song feel like a conversation you weren&apos;t supposed to overhear.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.3}>
              <p className="text-eden-muted text-base leading-relaxed">
                Today, Eden works across multiple creative disciplines — composing
                original music for film, television, and brands; producing for
                artists; creating content for music technology companies; and
                building towards a future where more women in Zimbabwe have access
                to the tools and knowledge to create.
              </p>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  );
}
