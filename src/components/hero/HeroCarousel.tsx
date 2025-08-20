'use client';

import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import EmailCapture from './EmailCapture';
import type { CarouselSlide } from '@/lib/types';

const slides: CarouselSlide[] = [
  {
    id: 1,
    title: 'Every Match. Every League. In 4K.',
    subtitle:
      'Premier League, Champions League, Bundesliga, Ligue 1, and 500+ sports channels. Never miss a goal with our ultra-HD streaming quality.',
    badge: '⚽ SPORTS PARADISE',
    duration: 5000,
    channels: [
      { icon: '⚽', name: 'Premier League' },
      { icon: '🏆', name: 'Champions' },
      { icon: '🥊', name: 'UFC/Boxing' },
      { icon: '🏀', name: 'NBA' },
      { icon: '🎾', name: 'Tennis' },
      { icon: '🏁', name: 'Formula 1' },
    ],
  },
  {
    id: 2,
    title: 'Netflix, Disney+, HBO & More. One Price.',
    subtitle:
      'Access all premium streaming services with one subscription. Latest movies, exclusive series, and thousands of on-demand titles.',
    badge: '🎬 ENTERTAINMENT HUB',
    duration: 5000,
    channels: [
      { icon: '📺', name: 'Netflix' },
      { icon: '🏰', name: 'Disney+' },
      { icon: '🎭', name: 'HBO Max' },
      { icon: '🎪', name: 'Prime Video' },
      { icon: '🍿', name: 'Hulu' },
      { icon: '🎬', name: 'Paramount+' },
    ],
  },
  {
    id: 3,
    title: 'Safe Content for Every Family Member',
    subtitle:
      'Kids channels, educational content, family movies, and parental controls. Entertainment the whole family can enjoy together.',
    badge: '👨‍👩‍👧‍👦 FAMILY PACKAGE',
    duration: 5000,
    channels: [
      { icon: '🦁', name: 'Disney Jr' },
      { icon: '🎨', name: 'Cartoon Network' },
      { icon: '🦖', name: 'Discovery' },
      { icon: '🌍', name: 'Nat Geo' },
      { icon: '🎓', name: 'Educational' },
      { icon: '🎭', name: 'Kids Movies' },
    ],
  },
  {
    id: 4,
    title: 'Your Local Channels + World News',
    subtitle:
      'French, Dutch, German, Belgian channels plus BBC, CNN, and international news. Stay connected to home and the world.',
    badge: '🌍 GLOBAL CONTENT',
    duration: 5000,
    channels: [
      { icon: '🇫🇷', name: 'TF1' },
      { icon: '🇬🇧', name: 'BBC' },
      { icon: '🇺🇸', name: 'CNN' },
      { icon: '🇩🇪', name: 'ZDF' },
      { icon: '🇳🇱', name: 'NPO' },
      { icon: '🇧🇪', name: 'VRT' },
    ],
  },
];

export default function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showEmailCapture, setShowEmailCapture] = useState(false);
  const [autoPlay, setAutoPlay] = useState(true);
  const [engagementTime, setEngagementTime] = useState(0);

  // Auto-advance carousel
  useEffect(() => {
    if (!autoPlay || showEmailCapture) return;

    const timer = setTimeout(() => {
      if (currentSlide < slides.length - 1) {
        setCurrentSlide((prev) => prev + 1);
      } else {
        setShowEmailCapture(true);
        setAutoPlay(false);
      }
    }, slides[currentSlide]?.duration || 5000);

    return () => clearTimeout(timer);
  }, [currentSlide, autoPlay, showEmailCapture]);

  // Engagement tracking
  useEffect(() => {
    const timer = setInterval(() => {
      setEngagementTime((prev) => prev + 1);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // Auto-show email capture after 30 seconds
  useEffect(() => {
    if (engagementTime >= 30 && !showEmailCapture) {
      setShowEmailCapture(true);
      setAutoPlay(false);
    }
  }, [engagementTime, showEmailCapture]);

  // Exit intent detection
  useEffect(() => {
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0 && !showEmailCapture) {
        setShowEmailCapture(true);
        setAutoPlay(false);
      }
    };

    document.addEventListener('mouseleave', handleMouseLeave);
    return () => document.removeEventListener('mouseleave', handleMouseLeave);
  }, [showEmailCapture]);

  const goToSlide = useCallback((index: number) => {
    setAutoPlay(false); // Stop autoplay when user manually navigates

    if (index === slides.length) {
      setShowEmailCapture(true);
      setCurrentSlide(slides.length - 1);
    } else if (index >= 0 && index < slides.length) {
      setCurrentSlide(index);
      setShowEmailCapture(false);
    }
  }, []);

  const jumpToEmailCapture = useCallback(() => {
    setShowEmailCapture(true);
    setAutoPlay(false);
  }, []);

  const jumpToPricing = useCallback((e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    const pricingSection = document.getElementById('pricing-section');
    if (pricingSection) {
      pricingSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  }, []);

  const handleIndicatorClick = useCallback(
    (e: React.MouseEvent, index: number) => {
      e.preventDefault();
      e.stopPropagation();
      goToSlide(index);
    },
    [goToSlide]
  );

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 via-purple-500/5 to-teal-500/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.1),transparent)] animate-pulse" />
      </div>

      {/* Main Content */}
      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <AnimatePresence mode="wait">
          {!showEmailCapture ? (
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.8, ease: 'easeInOut' }}
              className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center"
            >
              {/* Text Content */}
              <div className="text-center lg:text-left order-2 lg:order-1">
                <motion.div
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                  className="inline-block bg-indigo-500/20 text-indigo-300 px-4 py-2 rounded-full text-sm font-semibold mb-6 border border-indigo-500/30"
                >
                  {slides[currentSlide]?.badge}
                </motion.div>

                <motion.h1
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                  className="text-4xl sm:text-5xl lg:text-6xl font-black leading-tight mb-6 bg-gradient-to-r from-white via-blue-100 to-indigo-200 bg-clip-text text-transparent"
                >
                  {slides[currentSlide]?.title}
                </motion.h1>

                <motion.p
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                  className="text-lg sm:text-xl text-slate-300 mb-8 leading-relaxed max-w-2xl lg:max-w-none"
                >
                  {slides[currentSlide]?.subtitle}
                </motion.p>

                <motion.button
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.5, duration: 0.6 }}
                  onClick={jumpToPricing}
                  type="button"
                  className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl shadow-lg cursor-pointer select-none focus:outline-none focus:ring-4 focus:ring-indigo-500/50"
                >
                  Start Watching Now →
                </motion.button>
              </div>

              {/* Visual Content */}
              <div className="order-1 lg:order-2">
                <motion.div
                  initial={{ y: 30, opacity: 0, scale: 0.9 }}
                  animate={{ y: 0, opacity: 1, scale: 1 }}
                  transition={{ delay: 0.4, duration: 0.8 }}
                  className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6 sm:p-8"
                >
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-6">
                    {slides[currentSlide]?.channels.map((channel, index) => (
                      <motion.div
                        key={channel.name}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6 + index * 0.1, duration: 0.4 }}
                        className="bg-white/5 backdrop-blur-md rounded-xl p-4 text-center hover:bg-white/10 transition-all duration-300 cursor-pointer group"
                      >
                        <div className="text-2xl sm:text-3xl mb-2 group-hover:scale-110 transition-transform duration-300">
                          {channel.icon}
                        </div>
                        <div className="text-xs sm:text-sm text-slate-300 font-medium">
                          {channel.name}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                  <div className="text-center text-slate-400 text-sm">
                    +{' '}
                    {currentSlide === 0
                      ? '500 more sports channels'
                      : currentSlide === 1
                        ? '2000 VOD channels & series'
                        : currentSlide === 2
                          ? 'Parental controls included'
                          : '1000 international channels'}{' '}
                    in 4K/8K
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="email-capture"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.6 }}
              className="relative z-10"
            >
              <EmailCapture />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Carousel Indicators */}
        <div
          className={`absolute left-1/2 transform -translate-x-1/2 flex gap-3 z-30 ${showEmailCapture ? 'bottom-4' : 'bottom-2 sm:bottom-4'}`}
        >
          {[...slides, { id: 5 }].map((_, index) => (
            <button
              key={index}
              onClick={(e) => handleIndicatorClick(e, index)}
              type="button"
              className={`h-2 rounded-full transition-all duration-300 cursor-pointer select-none focus:outline-none focus:ring-2 focus:ring-indigo-400/50 ${
                (index === currentSlide && !showEmailCapture) ||
                (index === slides.length && showEmailCapture)
                  ? 'w-12 bg-indigo-500 shadow-lg shadow-indigo-500/50'
                  : 'w-6 bg-white/30 hover:bg-white/50 hover:w-8'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Mobile Swipe Support */}
      <div className="absolute inset-0 touch-manipulation pointer-events-none" />
    </section>
  );
}
