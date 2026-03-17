"use client";

import { motion } from "framer-motion";

export function ContactHero() {
  return (
    <section className="relative pt-40 pb-16 md:pt-48 md:pb-20 bg-eden-black overflow-hidden">
      <div className="absolute top-20 left-1/2 w-[400px] h-[400px] rounded-full bg-eden-gold/5 blur-[120px] pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-4xl px-6 md:px-8">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="block text-xs uppercase tracking-[0.3em] text-eden-gold mb-6 font-medium"
        >
          Contact
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-serif text-4xl md:text-5xl lg:text-6xl text-eden-cream leading-tight mb-8"
        >
          Let&apos;s create something
          <br />
          <span className="text-eden-gold">together</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-eden-muted text-base md:text-lg leading-relaxed max-w-xl"
        >
          Whether you&apos;re a brand, a music supervisor, an artist, or someone
          with a story that needs a soundtrack — I&apos;d love to hear from you.
        </motion.p>
      </div>
    </section>
  );
}
