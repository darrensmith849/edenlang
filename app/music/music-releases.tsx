"use client";

import { AnimatedSection } from "@/components/ui/animated-section";
import { ReleaseArtwork } from "@/components/ui/release-artwork";
import { RELEASES } from "@/lib/constants";

export function MusicReleases() {
  return (
    <section className="relative py-24 md:py-32 bg-eden-charcoal grain">
      <div className="relative z-10 mx-auto max-w-6xl px-6 md:px-8">
        <div className="space-y-0">
          {RELEASES.map((release, i) => (
            <AnimatedSection key={release.title} delay={i * 0.05}>
              <div className="group grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 py-10 border-b border-white/5 last:border-b-0">
                <div className="md:col-span-3">
                  {release.primaryUrl && release.primaryUrl !== "#" ? (
                    <a
                      href={release.primaryUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Listen to ${release.title}`}
                    >
                      <ReleaseArtwork
                        release={release}
                        className="aspect-square max-w-[200px] md:max-w-none group-hover:border-eden-gold/45 transition-colors duration-500"
                      />
                    </a>
                  ) : (
                    <ReleaseArtwork
                      release={release}
                      className="aspect-square max-w-[200px] md:max-w-none group-hover:border-eden-gold/45 transition-colors duration-500"
                    />
                  )}
                </div>

                {/* Details */}
                <div className="md:col-span-9 flex flex-col justify-center">
                  <div className="flex flex-wrap items-center gap-3 mb-3">
                    <span className="text-xs uppercase tracking-[0.2em] text-eden-gold font-medium">
                      {release.type}
                    </span>
                    {release.year && (
                      <>
                        <span className="w-1 h-1 rounded-full bg-eden-muted/30" />
                        <span className="text-xs text-eden-muted">
                          {release.year}
                        </span>
                      </>
                    )}
                  </div>

                  <h3 className="font-serif text-2xl md:text-3xl text-eden-cream mb-4 group-hover:text-eden-gold transition-colors duration-300">
                    {release.title}
                  </h3>

                  <p className="text-sm text-eden-muted leading-relaxed mb-6 max-w-xl">
                    {release.description}
                  </p>

                  <div className="flex flex-wrap gap-4">
                    {release.primaryUrl && release.primaryUrl !== "#" && (
                      <a
                        href={release.primaryUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.15em] text-eden-gold hover:text-eden-gold-light transition-colors duration-300 border border-eden-gold/30 hover:border-eden-gold/60 px-4 py-2"
                      >
                        Listen Now
                      </a>
                    )}
                    {release.appleMusicUrl &&
                      release.appleMusicUrl !== "#" && (
                        <a
                          href={release.appleMusicUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.15em] text-eden-cream/50 hover:text-eden-gold transition-colors duration-300 border border-white/10 hover:border-eden-gold/30 px-4 py-2"
                        >
                          Apple Music
                        </a>
                      )}
                    {release.spotifyUrl && release.spotifyUrl !== "#" && (
                      <a
                        href={release.spotifyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.15em] text-eden-cream/50 hover:text-eden-gold transition-colors duration-300 border border-white/10 hover:border-eden-gold/30 px-4 py-2"
                      >
                        Spotify
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
