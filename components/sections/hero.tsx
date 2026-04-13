"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const YT_VIDEO_ID = "do9D6ra6QT8";

/* eslint-disable @typescript-eslint/no-explicit-any */
interface YTPlayer {
  playVideo(): void;
  pauseVideo(): void;
  mute(): void;
  unMute(): void;
  setVolume(vol: number): void;
  seekTo(seconds: number, allowSeekAhead: boolean): void;
  destroy(): void;
}

interface YTPlayerEvent {
  data: number;
}

export function Hero() {
  const playerRef = useRef<YTPlayer | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMuted, setIsMuted] = useState(true);
  const [isPlaying, setIsPlaying] = useState(true);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  const initPlayer = useCallback(() => {
    const yt = (window as any).YT;
    if (!yt?.Player) return;
    playerRef.current = new yt.Player("yt-hero-player", {
      videoId: YT_VIDEO_ID,
      playerVars: {
        autoplay: 1,
        mute: 1,
        controls: 0,
        showinfo: 0,
        rel: 0,
        loop: 1,
        playlist: YT_VIDEO_ID,
        modestbranding: 1,
        playsinline: 1,
        disablekb: 1,
        fs: 0,
        iv_load_policy: 3,
        origin: typeof window !== "undefined" ? window.location.origin : "",
      },
      events: {
        onReady: () => {
          setVideoLoaded(true);
          setIsPlaying(true);
        },
        onStateChange: (e: YTPlayerEvent) => {
          const states = yt.PlayerState;
          if (e.data === states.PLAYING) setIsPlaying(true);
          if (e.data === states.PAUSED) setIsPlaying(false);
          if (e.data === states.ENDED) {
            playerRef.current?.seekTo(0, true);
            playerRef.current?.playVideo();
          }
        },
      },
    });
  }, []);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mq.matches);
    const handler = (e: MediaQueryListEvent) =>
      setPrefersReducedMotion(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  useEffect(() => {
    if (prefersReducedMotion) return;

    // If API is already loaded, init directly
    if ((window as any).YT?.Player) {
      initPlayer();
      return;
    }

    // Load the YouTube IFrame API
    const tag = document.createElement("script");
    tag.src = "https://www.youtube.com/iframe_api";
    document.head.appendChild(tag);

    (window as any).onYouTubeIframeAPIReady = initPlayer;

    return () => {
      playerRef.current?.destroy();
      playerRef.current = null;
    };
  }, [prefersReducedMotion, initPlayer]);

  const toggleMute = () => {
    if (!playerRef.current) return;
    if (isMuted) {
      playerRef.current.unMute();
      playerRef.current.setVolume(100);
    } else {
      playerRef.current.mute();
    }
    setIsMuted(!isMuted);
  };

  const togglePlay = () => {
    if (!playerRef.current) return;
    if (isPlaying) {
      playerRef.current.pauseVideo();
    } else {
      playerRef.current.playVideo();
    }
  };

  return (
    <section className="relative h-screen min-h-[600px] max-h-[1200px] overflow-hidden flex items-end pb-20 md:pb-28">
      {/* YouTube video background */}
      {!prefersReducedMotion && (
        <div
          ref={containerRef}
          className={`absolute inset-0 overflow-hidden pointer-events-none transition-opacity duration-1000 ${
            videoLoaded ? "opacity-35" : "opacity-0"
          }`}
        >
          {/* Scale iframe to cover the container like object-fit: cover */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300%] h-[300%] min-w-[177.78vh] min-h-[56.25vw]">
            <div id="yt-hero-player" className="w-full h-full" />
          </div>
        </div>
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
