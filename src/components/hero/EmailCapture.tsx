'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import type { EmailCaptureData } from '@/lib/types';

interface EmailCaptureProps {
  source?: 'hero' | 'modal' | 'exit_intent';
  onSuccess?: (data: EmailCaptureData) => void;
}

export default function EmailCapture({
  source = 'hero',
  onSuccess,
}: EmailCaptureProps) {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [customerNumber] = useState(
    () => Math.floor(Math.random() * 1000) + 5847
  );

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || isSubmitting) return;

    setIsSubmitting(true);

    try {
      // Simulate API call - replace with actual API endpoint
      await new Promise((resolve) => setTimeout(resolve, 1000));

      const captureData: EmailCaptureData = {
        email,
        customerNumber,
        timestamp: new Date().toISOString(),
        source,
      };

      // Store in local state/database
      console.log('Email captured:', captureData);

      setIsSuccess(true);
      onSuccess?.(captureData);

      // Show success notification
      showSuccessNotification(email, customerNumber);
    } catch (error) {
      console.error('Email capture failed:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const showSuccessNotification = (email: string, customerNumber: number) => {
    // Create and show success notification
    const notification = document.createElement('div');
    notification.className =
      'fixed top-24 right-4 bg-gradient-to-r from-emerald-500 to-teal-500 text-white p-4 rounded-2xl shadow-2xl z-50 max-w-sm';
    notification.innerHTML = `
      <div class="font-bold mb-1">✓ Success! Check your email!</div>
      <div class="text-sm opacity-90">Setup instructions sent to ${email}</div>
      <div class="text-sm opacity-90 mt-1">Customer #${customerNumber}</div>
    `;

    document.body.appendChild(notification);

    // Animate in
    notification.style.transform = 'translateX(100%)';
    notification.style.transition = 'transform 0.5s ease';
    setTimeout(() => {
      notification.style.transform = 'translateX(0)';
    }, 100);

    // Remove after 5 seconds
    setTimeout(() => {
      notification.style.transform = 'translateX(100%)';
      setTimeout(() => notification.remove(), 500);
    }, 5000);
  };

  const openWhatsApp = () => {
    const message = `Hi PandaStreamTV! I just signed up with email ${email} (Customer #${customerNumber}). I'm interested in your IPTV service and would like to discuss payment options and get started. Thank you!`;
    const whatsappUrl = `https://wa.me/19292439936?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  if (isSuccess) {
    return (
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="text-center max-w-2xl mx-auto"
      >
        <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{
              delay: 0.2,
              type: 'spring',
              stiffness: 200,
              damping: 10,
            }}
            className="text-6xl mb-6"
          >
            🎉
          </motion.div>

          <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
            Welcome to PandaStreamTV!
          </h2>

          <p className="text-slate-300 text-lg mb-6">
            Check your email for payment instructions and setup details.
          </p>

          <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-xl p-4 mb-8">
            <p className="text-emerald-300 font-semibold">
              Customer #{customerNumber} • Payment link sent to your inbox
            </p>
          </div>

          {/* Email and WhatsApp Actions */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="space-y-4"
          >
            {/* Go to Email Button */}
            <button
              onClick={() => window.open('https://gmail.com', '_blank')}
              className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl shadow-lg flex items-center justify-center gap-3 group"
            >
              <span className="text-2xl group-hover:scale-110 transition-transform duration-300">
                📧
              </span>
              Check Your Email Now
              <span className="text-indigo-200 group-hover:translate-x-1 transition-transform duration-300">
                →
              </span>
            </button>

            <div className="text-slate-500 text-sm">or</div>

            {/* WhatsApp Contact Button */}
            <button
              onClick={openWhatsApp}
              className="w-full bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 text-white px-8 py-3 rounded-2xl font-semibold text-base transition-all duration-300 transform hover:scale-105 hover:shadow-xl shadow-md flex items-center justify-center gap-3 group"
            >
              <span className="text-xl group-hover:scale-110 transition-transform duration-300">
                📱
              </span>
              Contact WhatsApp Support
            </button>

            <div className="flex flex-col sm:flex-row gap-3 text-xs text-slate-500 mt-6">
              <span className="flex items-center justify-center gap-1">
                💳 Secure SEPA Payment
              </span>
              <span className="flex items-center justify-center gap-1">
                ⚡ Instant Setup
              </span>
              <span className="flex items-center justify-center gap-1">
                🔒 EU Protected
              </span>
            </div>
          </motion.div>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="text-center max-w-2xl mx-auto"
    >
      <div className="bg-white/5 backdrop-blur-xl border-2 border-indigo-500/30 rounded-3xl p-8 relative overflow-hidden">
        {/* Animated background glow */}
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-teal-500/10 animate-pulse" />

        <div className="relative z-10">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mb-6"
          >
            <h2 className="text-3xl sm:text-4xl font-black mb-4 bg-gradient-to-r from-indigo-400 via-purple-400 to-teal-400 bg-clip-text text-transparent">
              🎁 Limited Time Offer!
            </h2>
            <p className="text-slate-300 text-lg">
              Join 5,847+ happy customers watching unlimited content
            </p>
          </motion.div>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="mb-8"
          >
            <div className="text-5xl font-black text-indigo-400 mb-2">
              €6/month
            </div>
            <div className="text-slate-400 line-through mb-4">
              Normal price: €15/month
            </div>
            <div className="bg-emerald-500/20 border border-emerald-500/30 rounded-xl p-3 mb-6">
              <span className="text-emerald-300 font-bold">✓ 60% OFF</span> -
              Annual plan special
            </div>
          </motion.div>

          <motion.form
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            onSubmit={handleSubmit}
            className="space-y-4"
          >
            <div className="relative">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                required
                className="w-full px-6 py-4 bg-white/10 border border-white/20 rounded-2xl text-white placeholder-slate-400 focus:outline-none focus:border-indigo-500 focus:bg-white/15 transition-all duration-300 text-lg"
              />
              {email && (
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-emerald-400"
                >
                  ✓
                </motion.div>
              )}
            </div>

            <button
              type="submit"
              disabled={isSubmitting || !email}
              className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 disabled:from-gray-600 disabled:to-gray-700 text-white px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-300 transform hover:scale-105 disabled:scale-100 hover:shadow-2xl disabled:cursor-not-allowed relative overflow-hidden"
            >
              {isSubmitting ? (
                <span className="flex items-center justify-center gap-2">
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  Processing...
                </span>
              ) : (
                'Get Instant Access →'
              )}

              {/* Shine effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
            </button>
          </motion.form>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="mt-6 flex flex-wrap justify-center gap-4 text-sm text-slate-400"
          >
            <span className="flex items-center gap-1">
              ✓ Setup in 10 minutes
            </span>
            <span className="flex items-center gap-1">✓ Cancel anytime</span>
            <span className="flex items-center gap-1">✓ 24/7 Support</span>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
