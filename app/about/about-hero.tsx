"use client";

import { motion } from "framer-motion";

export function AboutHero() {
  return (
    <section className="relative pt-36 pb-20 md:pt-44 md:pb-28 bg-eden-black overflow-hidden">
      <div className="absolute top-20 left-1/4 w-[400px] h-[400px] rounded-full bg-eden-gold/3 blur-[120px] pointer-events-none" />
      <div className="relative z-10 mx-auto max-w-4xl px-6 md:px-8">
        <motion.span initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="block text-[10px] uppercase tracking-[0.3em] text-eden-gold mb-5 font-medium">
          About
        </motion.span>
        <motion.h1 initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.1 }} className="font-serif text-[2.25rem] md:text-5xl lg:text-6xl text-eden-cream leading-tight mb-6">
          Daniel Jenkins.
        </motion.h1>
        <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="text-eden-muted text-sm md:text-base leading-relaxed max-w-lg">
          Zimbabwean guitarist, producer, singer, and songwriter. Over a decade of professional musical experience across studio, stage, and creative collaboration.
        </motion.p>
      </div>
    </section>
  );
}
