"use client";

import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMuted, setIsMuted] = useState(true);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mq.matches);
    const handler = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <section className="relative h-screen min-h-[600px] max-h-[1200px] overflow-hidden flex items-center justify-center">
      {/* Video background */}
      {!prefersReducedMotion && (
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          onLoadedData={() => setVideoLoaded(true)}
          poster="/images/hero-poster.jpg"
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
            videoLoaded ? "opacity-40" : "opacity-0"
          }`}
        >
          <source src="/videos/reel.mp4" type="video/mp4" />
        </video>
      )}

      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-eden-black/70 via-eden-black/40 to-eden-black" />
      <div className="absolute inset-0 bg-gradient-to-r from-eden-black/60 via-transparent to-eden-black/60" />

      {/* Fallback cinematic gradient when no video */}
      {(!videoLoaded || prefersReducedMotion) && (
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-eden-charcoal via-eden-black to-eden-dark" />
          <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-eden-gold/5 blur-[120px]" />
          <div className="absolute bottom-1/4 right-1/3 w-80 h-80 rounded-full bg-eden-gold/3 blur-[100px]" />
        </div>
      )}

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-6xl px-6 md:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: [0.25, 0.4, 0.25, 1] }}
        >
          <span className="inline-block text-xs uppercase tracking-[0.35em] text-eden-gold mb-6 font-medium">
            Producer &middot; Composer &middot; Artist &middot; Creator
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: [0.25, 0.4, 0.25, 1] }}
          className="font-serif text-5xl md:text-7xl lg:text-8xl text-eden-cream leading-[0.95] mb-6"
        >
          Eden Lang
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7, ease: [0.25, 0.4, 0.25, 1] }}
          className="text-base md:text-lg text-eden-cream/70 max-w-xl mx-auto mb-10 leading-relaxed"
        >
          Crafting emotionally rich music for film, television, brands, and
          artists — from Harare to the world.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9, ease: [0.25, 0.4, 0.25, 1] }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Button href="/work" variant="primary" size="lg">
            Explore Work
          </Button>
          <Button href="/contact" variant="outline" size="lg">
            Get in Touch
          </Button>
        </motion.div>
      </div>

      {/* Sound toggle */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        onClick={toggleMute}
        className="absolute bottom-8 right-6 md:right-8 z-10 flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-eden-cream/50 hover:text-eden-gold transition-colors duration-300"
        aria-label={isMuted ? "Enable sound" : "Mute sound"}
      >
        <span className="hidden sm:inline">{isMuted ? "Enable sound" : "Mute"}</span>
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
          {isMuted ? (
            <>
              <line x1="23" y1="9" x2="17" y2="15" />
              <line x1="17" y1="9" x2="23" y2="15" />
            </>
          ) : (
            <>
              <path d="M19.07 4.93a10 10 0 0 1 0 14.14" />
              <path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
            </>
          )}
        </svg>
      </motion.button>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-px h-12 bg-gradient-to-b from-eden-cream/0 via-eden-cream/30 to-eden-cream/0"
        />
      </motion.div>
    </section>
  );
}
