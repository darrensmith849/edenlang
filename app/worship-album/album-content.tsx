"use client";

import Image from "next/image";
import { AnimatedSection } from "@/components/ui/animated-section";
import { Button } from "@/components/ui/button";
import { SITE, IMAGES } from "@/lib/constants";

export function AlbumContent() {
  return (
    <section className="relative py-24 md:py-32 bg-eden-charcoal grain overflow-hidden">
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-eden-gold/5 blur-[150px] pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-6xl px-6 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16 items-center">
          {/* Album image */}
          <AnimatedSection className="md:col-span-5" direction="left">
            <div className="relative aspect-square max-w-[420px] mx-auto md:mx-0 overflow-hidden border border-white/10 bg-eden-dark">
              <Image
                src={IMAGES.albumCover}
                alt="All the Glory — worship project"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 90vw, 420px"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-eden-black/50 via-transparent to-transparent" />
            </div>
          </AnimatedSection>

          {/* Content */}
          <div className="md:col-span-7">
            <AnimatedSection>
              <p className="text-eden-cream text-base md:text-lg leading-relaxed mb-6">
                All the Glory began as a worship response to a life redirected
                by grace. The music is offered freely — songs of testimony,
                redemption, and praise that point everything back to God.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.1}>
              <p className="text-eden-muted text-base leading-relaxed mb-6">
                The worship project has its own dedicated home online, where
                you can listen to the latest release, watch performances and
                videos, and explore the wider music catalogue. Everything is
                freely available.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <p className="text-eden-muted/70 text-sm leading-relaxed mb-10">
                If the music has been meaningful to you and you feel led to
                support the work, you are welcome to do so on the worship site.
                Giving is entirely voluntary — it is not a purchase or an
                exchange for perks.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.3}>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  href={SITE.albumSiteUrl}
                  variant="primary"
                  size="lg"
                  external
                >
                  Visit All the Glory
                </Button>
                <Button href="/contact" variant="ghost" size="lg">
                  Get in touch
                </Button>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  );
}
