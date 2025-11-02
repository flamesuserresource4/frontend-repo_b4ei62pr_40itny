import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Scene = ({ progress, title, subtitle, bg, accent }) => {
  const opacity = useTransform(progress, [0.05, 0.2, 0.6, 0.9], [0, 1, 1, 0]);
  const y = useTransform(progress, [0, 0.5, 1], [50, 0, -50]);
  const scale = useTransform(progress, [0, 0.5, 1], [0.9, 1, 1.05]);

  return (
    <motion.div
      style={{ opacity }}
      className="absolute inset-0 flex items-center justify-center"
    >
      <motion.div
        style={{ scale, y }}
        className="mx-auto max-w-4xl rounded-3xl p-8 sm:p-12"
      >
        <div className={`absolute inset-0 -z-10 rounded-3xl ${bg}`} />
        <div className="pointer-events-none absolute inset-0 -z-10 rounded-3xl bg-gradient-to-b from-black/20 to-black/60" />
        <h2 className="text-center text-4xl font-black tracking-tight text-white sm:text-6xl">
          {title}
        </h2>
        <p className="mt-4 text-center text-white/85 sm:text-lg">{subtitle}</p>
        <div className="mt-8 flex justify-center">
          <div className={`h-2 w-40 rounded-full ${accent}`} />
        </div>
      </motion.div>
    </motion.div>
  );
};

const ScrollScenes = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end end'] });

  // Split the scroll progress into 4 segments
  const p1 = useTransform(scrollYProgress, [0, 0.25, 0.25, 1], [0, 1, 1, 1]);
  const p2 = useTransform(scrollYProgress, [0.25, 0.5, 0.5, 1], [0, 1, 1, 1]);
  const p3 = useTransform(scrollYProgress, [0.5, 0.75, 0.75, 1], [0, 1, 1, 1]);
  const p4 = useTransform(scrollYProgress, [0.75, 1, 1, 1], [0, 1, 1, 1]);

  return (
    <section ref={ref} className="relative h-[420vh] w-full bg-black">
      {/* Sticky viewport */}
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        <div className="absolute inset-0">
          {/* Ambient grid mimicking a pitch vibe */}
          <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'linear-gradient(#1f2937 1px, transparent 1px), linear-gradient(90deg, #1f2937 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/40 to-black" />
        </div>

        {/* Scenes */}
        <Scene
          progress={p1}
          title="Kickoff"
          subtitle="It starts with a touch. A community built on passes, chants, and pure instinct."
          bg="bg-gradient-to-br from-emerald-600 to-teal-700"
          accent="bg-emerald-300"
        />
        <Scene
          progress={p2}
          title="Build the Squad"
          subtitle="From local pitches to global friendships — every member has a role to play."
          bg="bg-gradient-to-br from-indigo-600 to-purple-700"
          accent="bg-indigo-300"
        />
        <Scene
          progress={p3}
          title="Matchday Energy"
          subtitle="Flags up, drums out. The timeline heats up with stories in motion."
          bg="bg-gradient-to-br from-rose-600 to-orange-600"
          accent="bg-rose-300"
        />
        <Scene
          progress={p4}
          title="WeFootballin"
          subtitle="We aren't just fans — we're the ninety minutes and everything after."
          bg="bg-gradient-to-br from-sky-600 to-cyan-600"
          accent="bg-sky-300"
        />

        {/* Progress bar */}
        <motion.div
          className="absolute bottom-6 left-1/2 h-1 w-64 -translate-x-1/2 overflow-hidden rounded-full bg-white/10"
        >
          <motion.div
            style={{ scaleX: scrollYProgress, transformOrigin: '0% 50%' }}
            className="h-full w-full bg-white/70"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default ScrollScenes;
