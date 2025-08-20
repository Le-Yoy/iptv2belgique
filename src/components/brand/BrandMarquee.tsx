'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import type { BrandLogo } from '@/lib/types';

const brandLogos: BrandLogo[] = [
  { name: 'Netflix', icon: '📺', path: '/logos/netflix.png' },
  { name: 'Disney+', icon: '🏰', path: '/logos/disney.png' },
  { name: 'HBO Max', icon: '🎭', path: '/logos/hbo.png' },
  { name: 'Prime Video', icon: '🎪', path: '/logos/prime-video.png' },
  { name: 'Premier League', icon: '⚽', path: '/logos/premier-league.png' },
  { name: 'CNN', icon: '🌍', path: '/logos/cnn.png' },
  { name: 'Eurosport', icon: '🏅', path: '/logos/eurosport.png' },
  {
    name: 'National Geographic',
    icon: '🌎',
    path: '/logos/national-geographic.png',
  },
  { name: 'UFC', icon: '🥊', path: '/logos/ufc.png' },
  { name: 'BeIN Sports', icon: '🏆', path: '/logos/bein-sports.png' },
];

export default function BrandMarquee() {
  // Split logos for two rows on mobile
  const firstRow = brandLogos.slice(0, 6);
  const secondRow = brandLogos.slice(6);

  // Duplicate for seamless infinite scroll
  const duplicatedFirstRow = [...firstRow, ...firstRow];
  const duplicatedSecondRow = [...secondRow, ...secondRow];
  const duplicatedAll = [...brandLogos, ...brandLogos];

  return (
    <section className="py-16 bg-slate-900/50 border-y border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-lg font-semibold text-slate-400 uppercase tracking-wider mb-2">
            All Your Favorite Channels In One Place
          </h2>
          <p className="text-slate-500">
            Premium content from the world's leading providers
          </p>
        </motion.div>

        {/* Desktop: Single Row */}
        <div className="hidden md:block relative">
          {/* Gradient overlays for smooth fade effect */}
          <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-slate-900 to-transparent z-10" />
          <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-slate-900 to-transparent z-10" />

          <div className="flex gap-8 animate-marquee">
            {duplicatedAll.map((logo, index) => (
              <motion.div
                key={`${logo.name}-${index}`}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{
                  delay: (index % brandLogos.length) * 0.1,
                  duration: 0.5,
                }}
                viewport={{ once: true }}
                className="flex-shrink-0 group cursor-pointer"
              >
                <div className="relative w-48 h-24 flex items-center justify-center bg-[#1E293B] backdrop-blur-sm rounded-xl border border-white/20 hover:border-indigo-400/60 transition-all duration-300 group-hover:bg-gradient-to-br group-hover:from-indigo-500/20 group-hover:via-purple-500/10 group-hover:to-teal-500/5 group-hover:scale-105 group-hover:shadow-lg group-hover:shadow-indigo-500/25">
                  <Image
                    src={logo.path}
                    alt={`${logo.name} logo`}
                    width={120}
                    height={60}
                    className="w-full h-full object-contain p-3 transition-all duration-300 group-hover:scale-110"
                    style={{
                      filter: 'brightness(1.2) contrast(1.1)',
                    }}
                    priority={index < 6}
                  />

                  {/* Hover glow effect */}
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-indigo-500/0 via-purple-500/0 to-teal-500/0 group-hover:from-indigo-500/20 group-hover:via-purple-500/20 group-hover:to-teal-500/20 transition-all duration-500" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mobile: Two Rows - All Logos Visible */}
        <div className="md:hidden space-y-6">
          {/* First Row - All Logos Forward */}
          <div className="relative">
            <div className="absolute left-0 top-0 w-16 h-full bg-gradient-to-r from-slate-900 to-transparent z-10" />
            <div className="absolute right-0 top-0 w-16 h-full bg-gradient-to-l from-slate-900 to-transparent z-10" />

            <div className="flex gap-6 animate-marquee-mobile-smooth">
              {/* Triple the logos for seamless infinite scroll */}
              {[...brandLogos, ...brandLogos, ...brandLogos].map(
                (logo, index) => (
                  <div
                    key={`mobile-row1-${logo.name}-${index}`}
                    className="flex-shrink-0"
                  >
                    <div className="w-32 h-16 flex items-center justify-center bg-[#1E293B] backdrop-blur-sm rounded-lg border border-white/20">
                      <Image
                        src={logo.path}
                        alt={`${logo.name} logo`}
                        width={120}
                        height={60}
                        className="w-full h-full object-contain p-2"
                        style={{
                          filter: 'brightness(1.2) contrast(1.1)',
                        }}
                      />
                    </div>
                  </div>
                )
              )}
            </div>
          </div>

          {/* Second Row - All Logos Reverse with Offset */}
          <div className="relative">
            <div className="absolute left-0 top-0 w-16 h-full bg-gradient-to-r from-slate-900 to-transparent z-10" />
            <div className="absolute right-0 top-0 w-16 h-full bg-gradient-to-l from-slate-900 to-transparent z-10" />

            <div className="flex gap-6 animate-marquee-mobile-reverse">
              {/* Start with offset + triple logos */}
              {[
                ...brandLogos.slice(5),
                ...brandLogos,
                ...brandLogos,
                ...brandLogos.slice(0, 5),
              ].map((logo, index) => (
                <div
                  key={`mobile-row2-${logo.name}-${index}`}
                  className="flex-shrink-0"
                >
                  <div className="w-32 h-16 flex items-center justify-center bg-[#1E293B] backdrop-blur-sm rounded-lg border border-white/20">
                    <Image
                      src={logo.path}
                      alt={`${logo.name} logo`}
                      width={120}
                      height={60}
                      className="w-full h-full object-contain p-2"
                      style={{
                        filter: 'brightness(1.2) contrast(1.1)',
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Statistics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16"
        >
          {[
            { number: '5000+', label: 'Live Channels' },
            { number: '2000+', label: 'VOD Content' },
            { number: '4K/8K', label: 'Quality' },
            { number: '24/7', label: 'Support' },
          ].map((stat, index) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl md:text-3xl font-black bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent mb-1">
                {stat.number}
              </div>
              <div className="text-sm text-slate-400 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
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

        @keyframes marquee-reverse {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0);
          }
        }

        .animate-marquee {
          animation: marquee 40s linear infinite;
        }

        .animate-marquee-fast {
          animation: marquee 6s linear infinite;
        }

        .animate-marquee-reverse-fast {
          animation: marquee-reverse 5s linear infinite;
        }

        .animate-marquee-mobile-smooth {
          animation: marquee 5s linear infinite;
        }

        .animate-marquee-mobile-reverse {
          animation: marquee-reverse 6s linear infinite;
        }

        .animate-marquee:hover,
        .animate-marquee-fast:hover,
        .animate-marquee-reverse-fast:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}
