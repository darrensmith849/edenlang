"use client";

import { AnimatedSection } from "@/components/ui/animated-section";
import { VIDEOS } from "@/lib/constants";

export function VideosGrid() {
  const hasVideos = VIDEOS.some((v) => v.youtubeId);

  return (
    <section className="relative py-24 md:py-32 bg-eden-charcoal grain">
      <div className="relative z-10 mx-auto max-w-6xl px-6 md:px-8">
        {hasVideos ? (
          <div className="space-y-16">
            {/* Featured video */}
            {VIDEOS.filter((v) => v.featured && v.youtubeId).map((video) => (
              <AnimatedSection key={video.title}>
                <div className="relative w-full aspect-video bg-eden-dark border border-white/5 overflow-hidden">
                  <iframe
                    src={`https://www.youtube.com/embed/${video.youtubeId}`}
                    title={video.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="absolute inset-0 w-full h-full"
                  />
                </div>
                <div className="mt-6">
                  <h2 className="font-serif text-2xl md:text-3xl text-eden-cream mb-2">
                    {video.title}
                  </h2>
                  <p className="text-sm text-eden-muted leading-relaxed">
                    {video.description}
                  </p>
                </div>
              </AnimatedSection>
            ))}

            {/* Supporting grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {VIDEOS.filter((v) => !v.featured && v.youtubeId).map(
                (video, i) => (
                  <AnimatedSection key={video.title} delay={i * 0.1}>
                    <div className="relative w-full aspect-video bg-eden-dark border border-white/5 overflow-hidden">
                      <iframe
                        src={`https://www.youtube.com/embed/${video.youtubeId}`}
                        title={video.title}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="absolute inset-0 w-full h-full"
                      />
                    </div>
                    <div className="mt-4">
                      <h3 className="font-serif text-xl text-eden-cream mb-1">
                        {video.title}
                      </h3>
                      <p className="text-sm text-eden-muted leading-relaxed">
                        {video.description}
                      </p>
                    </div>
                  </AnimatedSection>
                )
              )}
            </div>
          </div>
        ) : (
          /* Placeholder state when no YouTube IDs are set yet */
          <AnimatedSection>
            <div className="text-center py-16">
              <span className="block text-xs uppercase tracking-[0.3em] text-eden-gold mb-6 font-medium">
                Coming Soon
              </span>
              <h2 className="font-serif text-2xl md:text-3xl text-eden-cream mb-4">
                Videos are being prepared
              </h2>
              <p className="text-eden-muted text-base leading-relaxed max-w-lg mx-auto">
                Performances, music videos, and worship moments will be shared
                here. Check back soon.
              </p>
            </div>
          </AnimatedSection>
        )}
      </div>
    </section>
  );
}
