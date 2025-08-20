// src/components/ui/LiveCounter.tsx
'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Users, TrendingUp, X } from 'lucide-react';

export default function LiveCounter() {
  const [viewerCount, setViewerCount] = useState(2847);
  const [isVisible, setIsVisible] = useState(true);
  const [showNotification, setShowNotification] = useState(false);
  const [recentSignup, setRecentSignup] = useState<string | null>(null);

  // Simulate live viewer count updates
  useEffect(() => {
    const interval = setInterval(() => {
      setViewerCount((prev) => {
        const change = Math.floor(Math.random() * 50) - 20;
        const newCount = prev + change;
        return Math.max(2800, Math.min(3200, newCount)); // Keep between 2800-3200
      });
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  // Simulate recent signups
  useEffect(() => {
    const locations = [
      'Paris, France',
      'Amsterdam, Netherlands',
      'Brussels, Belgium',
      'Berlin, Germany',
      'Lyon, France',
      'Munich, Germany',
      'Rotterdam, Netherlands',
      'Antwerp, Belgium',
    ];

    const showSignup = () => {
      const randomLocation =
        locations[Math.floor(Math.random() * locations.length)];
      setRecentSignup(randomLocation);
      setShowNotification(true);

      // Auto-close after 3 seconds
      setTimeout(() => {
        setShowNotification(false);
      }, 3000);
    };

    // Show first signup after 15 seconds
    const firstTimeout = setTimeout(showSignup, 15000);

    // Then show signups randomly every 30-60 seconds
    const interval = setInterval(() => {
      if (Math.random() > 0.5) {
        showSignup();
      }
    }, 45000);

    return () => {
      clearTimeout(firstTimeout);
      clearInterval(interval);
    };
  }, []);

  const closeNotification = () => {
    setShowNotification(false);
  };

  if (!isVisible) return null;

  return (
    <>
      {/* Live Counter Widget */}
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 2, duration: 0.5, type: 'spring' }}
        className="fixed bottom-6 left-6 z-40"
      >
        <div className="bg-slate-900/95 backdrop-blur-xl border border-indigo-500/30 rounded-2xl p-4 shadow-2xl">
          <button
            onClick={() => setIsVisible(false)}
            className="absolute -top-2 -right-2 bg-slate-800 hover:bg-slate-700 rounded-full p-1 transition-colors"
          >
            <X className="w-4 h-4 text-slate-400" />
          </button>

          <div className="flex items-center gap-3">
            <div className="relative">
              <div className="bg-emerald-500/20 rounded-full p-2">
                <Users className="w-5 h-5 text-emerald-400" />
              </div>
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-emerald-400 rounded-full animate-pulse" />
            </div>

            <div>
              <div className="text-xs text-slate-400 mb-1">Active Viewers</div>
              <div className="flex items-center gap-2">
                <span className="text-2xl font-bold text-white">
                  {viewerCount.toLocaleString()}
                </span>
                <TrendingUp className="w-4 h-4 text-emerald-400" />
              </div>
            </div>
          </div>

          <div className="mt-3 pt-3 border-t border-white/10">
            <div className="flex items-center justify-between text-xs">
              <span className="text-slate-400">Watching now</span>
              <span className="text-emerald-400 font-semibold">LIVE</span>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Recent Signup Notification */}
      <AnimatePresence>
        {showNotification && recentSignup && (
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -100, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className="fixed bottom-32 left-6 z-40"
          >
            <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-2xl p-4 shadow-2xl max-w-xs relative">
              {/* Close button */}
              <button
                onClick={closeNotification}
                className="absolute -top-2 -right-2 bg-white/20 hover:bg-white/30 rounded-full p-1 transition-colors"
              >
                <X className="w-4 h-4 text-white" />
              </button>

              <div className="flex items-start gap-3">
                <div className="text-2xl">🎉</div>
                <div>
                  <div className="font-semibold mb-1">New Customer!</div>
                  <div className="text-sm opacity-90">
                    Someone from{' '}
                    <span className="font-semibold">{recentSignup}</span> just
                    joined PandaStreamTV
                  </div>
                  <div className="text-xs opacity-75 mt-1">Just now</div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Version - Bottom Center */}
      <style jsx>{`
        @media (max-width: 640px) {
          .fixed.bottom-6.left-6 {
            left: 50%;
            transform: translateX(-50%);
            bottom: 1.5rem;
          }
          .fixed.bottom-32.left-6 {
            left: 50%;
            transform: translateX(-50%);
            bottom: 7rem;
            right: auto;
            max-width: calc(100vw - 2rem);
          }
        }
      `}</style>
    </>
  );
}
