"use client";

import Image from "next/image";
import { AnimatedSection } from "@/components/ui/animated-section";
import { Button } from "@/components/ui/button";
import { SITE, IMAGES } from "@/lib/constants";

export function AlbumContent() {
  return (
    <section className="relative py-20 md:py-28 bg-eden-charcoal grain overflow-hidden">
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-eden-gold/3 blur-[150px] pointer-events-none" />
      <div className="relative z-10 mx-auto max-w-6xl px-6 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16 items-center">
          <AnimatedSection className="md:col-span-5" direction="left">
            <div className="relative aspect-square max-w-[400px] mx-auto md:mx-0 overflow-hidden border border-white/[0.04] bg-eden-dark">
              <Image src={IMAGES.hero} alt="Worship project" fill className="object-cover" sizes="(max-width: 768px) 90vw, 400px" priority />
              <div className="absolute inset-0 bg-gradient-to-t from-eden-black/40 via-transparent to-transparent" />
            </div>
          </AnimatedSection>
          <div className="md:col-span-7">
            <AnimatedSection>
              <p className="text-eden-cream text-sm md:text-base leading-relaxed mb-5">
                The worship side of the work began as a response to a life redirected by grace. The music is offered freely — songs of testimony, redemption, and praise.
              </p>
            </AnimatedSection>
            <AnimatedSection delay={0.1}>
              <p className="text-eden-muted/80 text-sm leading-relaxed mb-5">
                The project has its own dedicated site where you can listen to the latest release, watch performances, and explore the wider catalogue. Everything is freely available.
              </p>
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <p className="text-eden-muted/50 text-xs leading-relaxed mb-8">
                Giving is entirely voluntary — not a purchase or an exchange for perks.
              </p>
            </AnimatedSection>
            <AnimatedSection delay={0.3}>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button href={SITE.albumSiteUrl} variant="primary" size="md" external>Visit alltheglory.co.za</Button>
                <Button href="/contact" variant="ghost" size="md">Get in touch</Button>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  );
}
