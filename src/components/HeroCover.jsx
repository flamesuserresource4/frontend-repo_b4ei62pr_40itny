import React from 'react';
import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';
import { ArrowDown } from 'lucide-react';

const HeroCover = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-black text-white">
      {/* Spline 3D Scene as full-width cover */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/atN3lqky4IzF-KEP/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Overlays for readability and vibe */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/80" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-black/90 to-transparent" />

      {/* Content */}
      <div className="relative z-10 flex h-full w-full flex-col items-center justify-center text-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 backdrop-blur-md"
        >
          <span className="text-xs uppercase tracking-widest text-white/80">WeFootballin</span>
          <span className="h-1 w-1 rounded-full bg-white/60" />
          <span className="text-xs text-white/80">Football community stories</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.9 }}
          className="max-w-5xl text-5xl font-extrabold leading-[1.05] sm:text-6xl md:text-7xl"
        >
          Where every scroll is a kickoff
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.9 }}
          className="mt-6 max-w-2xl text-balance text-white/80"
        >
          Dive into the matchday energy of WeFootballin — a living, breathing story told like
          an animated film that advances with your scroll.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8, repeat: Infinity, repeatType: 'reverse' }}
          className="absolute bottom-8 flex items-center gap-2 text-white/70"
        >
          <ArrowDown className="h-5 w-5" />
          <span className="text-sm">Scroll to play</span>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroCover;
