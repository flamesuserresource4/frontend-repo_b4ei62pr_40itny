import React from 'react';
import { motion } from 'framer-motion';

const FooterCTA = () => {
  return (
    <footer className="relative w-full overflow-hidden bg-black py-24 text-white">
      <div className="absolute inset-0 bg-gradient-to-t from-emerald-600/10 via-transparent to-transparent" />
      <div className="mx-auto max-w-5xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7 }}
          className="rounded-3xl border border-white/10 bg-white/5 p-10 text-center backdrop-blur"
        >
          <h3 className="text-3xl font-extrabold sm:text-4xl">Ready to join the story?</h3>
          <p className="mt-3 text-white/80">
            Be part of WeFootballin — share highlights, craft tifos, and shape the timeline.
          </p>
          <div className="mt-8">
            <a
              href="#"
              className="inline-flex items-center justify-center rounded-xl bg-emerald-500 px-6 py-3 font-semibold text-black shadow-emerald-500/40 transition hover:scale-[1.02] hover:bg-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-400"
            >
              Join the Community
            </a>
          </div>
        </motion.div>
        <div className="mt-10 text-center text-sm text-white/60">© {new Date().getFullYear()} WeFootballin</div>
      </div>
    </footer>
  );
};

export default FooterCTA;
