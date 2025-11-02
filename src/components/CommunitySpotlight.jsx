import React from 'react';
import { motion } from 'framer-motion';
import { Star, Users, Trophy } from 'lucide-react';

const Card = ({ name, role, stat, icon: Icon, color }) => (
  <motion.div
    initial={{ y: 24, opacity: 0 }}
    whileInView={{ y: 0, opacity: 1 }}
    viewport={{ once: true, amount: 0.3 }}
    transition={{ duration: 0.6, ease: 'easeOut' }}
    className="relative overflow-hidden rounded-2xl bg-white/5 p-6 ring-1 ring-white/10 backdrop-blur"
  >
    <div className={`absolute inset-0 pointer-events-none bg-gradient-to-br ${color} opacity-10`} />
    <div className="flex items-center gap-4">
      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/10">
        <Icon className="h-6 w-6 text-white" />
      </div>
      <div>
        <p className="text-sm uppercase tracking-wider text-white/60">{role}</p>
        <h3 className="text-xl font-semibold text-white">{name}</h3>
      </div>
      <div className="ml-auto text-right">
        <p className="text-xs text-white/60">Impact</p>
        <p className="text-2xl font-bold text-white">{stat}</p>
      </div>
    </div>
  </motion.div>
);

const CommunitySpotlight = () => {
  return (
    <section className="relative w-full bg-black py-24 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-4xl font-black tracking-tight sm:text-5xl">Community Spotlight</h2>
          <p className="mt-4 text-white/80">
            Built by players, creators, and supporters who turn every moment into a story worth reliving.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <Card
            name="Tifo Crew"
            role="Choreography"
            stat="12 epic banners"
            icon={Star}
            color="from-rose-500 to-orange-400"
          />
          <Card
            name="WeFootballin FC"
            role="Local 7v7"
            stat="42 weekly matches"
            icon={Users}
            color="from-emerald-500 to-teal-400"
          />
          <Card
            name="Cup Run"
            role="Community League"
            stat="3x champions"
            icon={Trophy}
            color="from-indigo-500 to-purple-400"
          />
        </div>
      </div>
    </section>
  );
};

export default CommunitySpotlight;
