"use client";

import Image from "next/image";
import { AnimatedSection } from "@/components/ui/animated-section";
import { Button } from "@/components/ui/button";
import { SITE, IMAGES } from "@/lib/constants";

export function AlbumTeaser() {
  return (
    <section className="relative py-24 md:py-32 bg-eden-black overflow-hidden">
      <div className="absolute top-0 left-1/4 w-[400px] h-[400px] rounded-full bg-eden-gold/5 blur-[150px] pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-6xl px-6 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16 items-center">
          {/* Image */}
          <AnimatedSection className="md:col-span-5" direction="left">
            <div className="relative aspect-square max-w-[400px] mx-auto md:mx-0 overflow-hidden border border-white/10 bg-eden-dark">
              <Image
                src={IMAGES.albumCover}
                alt="All the Glory — worship album"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 90vw, 400px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-eden-black/60 via-transparent to-transparent" />
            </div>
          </AnimatedSection>

          {/* Content */}
          <div className="md:col-span-7">
            <AnimatedSection>
              <span className="block text-xs uppercase tracking-[0.3em] text-eden-gold mb-4 font-medium">
                The Worship Project
              </span>
              <h2 className="font-serif text-3xl md:text-4xl text-eden-cream leading-tight mb-6">
                Music rooted in worship, testimony, and praise
              </h2>
              <p className="text-eden-muted text-base leading-relaxed mb-4 max-w-lg">
                The worship side of the work lives on its own dedicated site
                under All the Glory. Visit to explore the latest worship
                release, videos, and the wider music project.
              </p>
              <p className="text-eden-muted/60 text-sm leading-relaxed mb-8 max-w-lg">
                The music is freely available — offered in reverence, not as
                a product.
              </p>
              <Button
                href={SITE.albumSiteUrl}
                variant="outline"
                size="lg"
                external
              >
                Visit All the Glory &rarr;
              </Button>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  );
}
