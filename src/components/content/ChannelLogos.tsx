// src/components/content/ChannelLogos.tsx
'use client';

import { motion } from 'framer-motion';

interface ChannelLogosProps {
  language: 'fr-BE' | 'nl-BE' | 'en';
}

const channels = [
  // Belgian Channels
  { name: 'VRT', category: 'belgian' },
  { name: 'VTM', category: 'belgian' },
  { name: 'RTL-TVI', category: 'belgian' },
  { name: 'La Une', category: 'belgian' },
  { name: 'Club RTL', category: 'belgian' },
  // Streaming Services
  { name: 'Netflix', category: 'streaming' },
  { name: 'Disney+', category: 'streaming' },
  { name: 'HBO Max', category: 'streaming' },
  { name: 'Prime Video', category: 'streaming' },
  { name: 'Apple TV+', category: 'streaming' },
  // Sports
  { name: 'Eleven Sports', category: 'sports' },
  { name: 'Eurosport', category: 'sports' },
  { name: 'BeIN Sports', category: 'sports' },
  { name: 'Sky Sports', category: 'sports' },
  // News
  { name: 'CNN', category: 'news' },
  { name: 'BBC', category: 'news' },
  { name: 'Euronews', category: 'news' },
  // Entertainment
  { name: 'Discovery', category: 'entertainment' },
  { name: 'National Geographic', category: 'entertainment' },
  { name: 'Comedy Central', category: 'entertainment' },
];

export default function ChannelLogos({ language }: ChannelLogosProps) {
  // Duplicate for continuous scroll
  const duplicatedChannels = [...channels, ...channels];

  return (
    <section className="py-12 bg-gradient-to-b from-black to-gray-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold text-white mb-2">
            {language === 'fr-BE'
              ? '5000+ Chaînes Premium'
              : language === 'nl-BE'
                ? '5000+ Premium Kanalen'
                : '5000+ Premium Channels'}
          </h2>
          <p className="text-gray-400">
            {language === 'fr-BE'
              ? 'Toutes vos chaînes préférées en un seul endroit'
              : language === 'nl-BE'
                ? 'Al uw favoriete kanalen op één plek'
                : 'All your favorite channels in one place'}
          </p>
        </motion.div>
      </div>

      <div className="relative">
        {/* Gradient overlays */}
        <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-gray-900 to-transparent z-10" />
        <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-gray-900 to-transparent z-10" />

        {/* Scrolling marquee */}
        <div className="flex animate-marquee">
          {duplicatedChannels.map((channel, index) => (
            <div
              key={`${channel.name}-${index}`}
              className="flex-shrink-0 mx-4 px-6 py-3 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:border-yellow-500/50 transition-all duration-300 group cursor-pointer"
            >
              <span className="text-white/80 group-hover:text-yellow-400 transition-colors font-medium whitespace-nowrap">
                {channel.name}
              </span>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}
