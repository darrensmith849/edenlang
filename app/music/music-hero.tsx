"use client";

import { motion } from "framer-motion";

export function MusicHero() {
  return (
    <section className="relative pt-40 pb-24 md:pt-48 md:pb-32 bg-eden-black overflow-hidden">
      <div className="absolute top-32 left-1/3 w-[400px] h-[400px] rounded-full bg-eden-gold/5 blur-[120px] pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-4xl px-6 md:px-8">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="block text-xs uppercase tracking-[0.3em] text-eden-gold mb-6 font-medium"
        >
          Music
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-serif text-4xl md:text-5xl lg:text-6xl text-eden-cream leading-tight mb-8"
        >
          Selected releases
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-eden-muted text-base md:text-lg leading-relaxed max-w-2xl"
        >
          Songs born from lived experience, imagination, and the quiet
          conviction that music should make you feel something real.
        </motion.p>
      </div>
    </section>
  );
}
