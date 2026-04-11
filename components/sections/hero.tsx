"use client";

import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { SITE, IMAGES } from "@/lib/constants";

export function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMuted, setIsMuted] = useState(true);
  const [isPlaying, setIsPlaying] = useState(true);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mq.matches);
    const handler = (e: MediaQueryListEvent) =>
      setPrefersReducedMotion(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  const toggleMute = async () => {
    if (!videoRef.current) return;
    const next = !videoRef.current.muted;
    videoRef.current.muted = next;
    if (!next) {
      videoRef.current.volume = 1;
      await videoRef.current.play().catch(() => {});
    }
    setIsMuted(next);
  };

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  return (
    <section className="relative h-screen min-h-[600px] max-h-[1200px] overflow-hidden flex items-end pb-20 md:pb-28">
      {/* Video background */}
      {!prefersReducedMotion && (
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          onPlay={() => setIsPlaying(true)}
          onPause={() => setIsPlaying(false)}
          onLoadedData={() => setVideoLoaded(true)}
          poster={IMAGES.hero}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
            videoLoaded ? "opacity-35" : "opacity-0"
          }`}
        >
          <source src={SITE.media.heroVideoUrl} type="video/mp4" />
        </video>
      )}

      <div className="absolute inset-0 bg-gradient-to-b from-eden-black/60 via-eden-black/30 to-eden-black" />
      <div className="absolute inset-0 bg-gradient-to-r from-eden-black/50 via-transparent to-eden-black/50" />

      {(!videoLoaded || prefersReducedMotion) && (
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-eden-charcoal via-eden-black to-eden-dark" />
          <div className="absolute top-1/3 left-1/4 w-96 h-96 rounded-full bg-eden-gold/4 blur-[120px]" />
        </div>
      )}

      <div className="relative z-10 mx-auto max-w-6xl px-6 md:px-8 w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <span className="text-[11px] uppercase tracking-[0.3em] text-eden-gold font-medium">
            Guitarist &middot; Producer &middot; Songwriter
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-eden-cream leading-[0.95] mt-4 mb-5"
        >
          Daniel Jenkins
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="text-sm md:text-base text-eden-cream/60 max-w-md mb-8 leading-relaxed"
        >
          Custom songs. Recorded guitar for brands and campaigns.
          Production. Songwriting. Select worship bookings.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="flex flex-wrap items-center gap-3"
        >
          <Button href="/contact" variant="primary" size="md">
            Enquire
          </Button>
          <Button href="/services" variant="outline" size="md">
            Services
          </Button>
        </motion.div>
      </div>

      {/* Video controls */}
      <div className="absolute bottom-6 right-6 z-10 flex items-center gap-4">
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          onClick={togglePlay}
          className="text-[10px] uppercase tracking-[0.2em] text-eden-cream/40 hover:text-eden-gold transition-colors"
          aria-label={isPlaying ? "Pause" : "Play"}
        >
          {isPlaying ? "Pause" : "Play"}
        </motion.button>
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6 }}
          onClick={toggleMute}
          className="text-[10px] uppercase tracking-[0.2em] text-eden-cream/40 hover:text-eden-gold transition-colors"
          aria-label={isMuted ? "Unmute" : "Mute"}
        >
          {isMuted ? "Sound" : "Mute"}
        </motion.button>
      </div>
    </section>
  );
}
