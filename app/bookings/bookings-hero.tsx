"use client";

import { motion } from "framer-motion";

export function BookingsHero() {
  return (
    <section className="relative pt-40 pb-24 md:pt-48 md:pb-32 bg-eden-black overflow-hidden">
      <div className="absolute top-20 right-1/4 w-[400px] h-[400px] rounded-full bg-eden-gold/5 blur-[120px] pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-4xl px-6 md:px-8">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="block text-xs uppercase tracking-[0.3em] text-eden-gold mb-6 font-medium"
        >
          Bookings &amp; Enquiries
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-serif text-4xl md:text-5xl lg:text-6xl text-eden-cream leading-tight mb-8"
        >
          Bookings, collaborations
          <br />
          <span className="text-eden-gold">&amp; enquiries</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-eden-muted text-base md:text-lg leading-relaxed max-w-2xl"
        >
          All the Glory is available for worship events, ministry invitations,
          live performances, meaningful collaborations, and select creative
          partnerships. Every opportunity is approached with care, sincerity,
          and spiritual intentionality.
        </motion.p>
      </div>
    </section>
  );
}
