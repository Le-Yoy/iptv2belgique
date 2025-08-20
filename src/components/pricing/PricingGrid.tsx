'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import PricingModal from './PricingModal';
import type { SubscriptionPlan } from '@/lib/types';

const plans: SubscriptionPlan[] = [
  {
    id: '1month',
    name: 'Starter',
    duration: '1 Month',
    price: '€15',
    monthlyEquivalent: '€15/month',
    originalPrice: '€15',
    popular: false,
    features: [
      '5000+ Live Channels',
      '4K/8K Quality',
      'All Sports & Movies',
      '24/7 Support',
      'Basic Setup Guide',
    ],
    limitations: ['Single device only', 'No priority support'],
    deviceLimit: 1,
    trialDays: 1,
    whatsappMessage:
      'Hi! I want the 1-month Starter plan (€15). Can you send me payment details?',
  },
  {
    id: '3month',
    name: 'Popular',
    duration: '3 Months',
    price: '€27',
    monthlyEquivalent: '€9/month',
    originalPrice: '€45',
    savings: 'Save 40%',
    popular: false,
    features: [
      '5000+ Live Channels',
      '4K/8K Quality',
      'All Sports & Movies',
      '24/7 Support',
      'Quick Setup Guide',
      'Mobile App Access',
    ],
    deviceLimit: 2,
    trialDays: 3,
    whatsappMessage:
      'Hi! I want the 3-month Popular plan (€27 total). Great value! Please send payment options.',
  },
  {
    id: '6month',
    name: 'Premium',
    duration: '6 Months',
    price: '€42',
    monthlyEquivalent: '€7/month',
    originalPrice: '€90',
    savings: 'Save 53%',
    popular: false,
    features: [
      '5000+ Live Channels',
      '4K/8K Quality',
      'All Sports & Movies',
      'Priority Support',
      'Advanced Setup Guide',
      'Multi-device sync',
      'VPN Included',
    ],
    deviceLimit: 3,
    trialDays: 7,
    whatsappMessage:
      "Hello! I'd like the 6-month Premium plan (€42 total) with 4K quality. Please send payment info.",
  },
  {
    id: '12month',
    name: 'Ultimate',
    duration: '12 Months',
    price: '€69',
    monthlyEquivalent: '€6/month',
    originalPrice: '€180',
    savings: 'Save 60%',
    popular: true,
    features: [
      '5000+ Live Channels',
      '4K/8K Quality',
      'All Sports & Movies',
      'VIP Support',
      'Premium Setup Service',
      'Multi-device sync',
      'VPN & Security Suite',
      'Early access to new channels',
      'Dedicated account manager',
    ],
    deviceLimit: 5,
    trialDays: 14,
    whatsappMessage:
      'Hi! I want the Ultimate 12-month plan (€69 total) - incredible deal! Please send all payment options.',
  },
];

// Reorder plans for mobile: Ultimate first, then others
const mobileOrderPlans = [
  plans.find((p) => p.id === '12month')!, // Ultimate first
  ...plans.filter((p) => p.id !== '12month'), // Rest in original order
];

export default function PricingGrid() {
  const [selectedPlan, setSelectedPlan] = useState<SubscriptionPlan | null>(
    null
  );
  const [showModal, setShowModal] = useState(false);

  const handlePlanSelect = (plan: SubscriptionPlan) => {
    setSelectedPlan(plan);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedPlan(null);
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-black mb-6 bg-gradient-to-r from-white via-indigo-200 to-purple-200 bg-clip-text text-transparent">
            Choose Your Plan
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            No contracts. Cancel anytime. Setup in 10 minutes. All plans include
            our money-back guarantee.
          </p>
        </motion.div>

        {/* Desktop: Original Order */}
        <div className="hidden md:grid md:grid-cols-2 xl:grid-cols-4 gap-6 lg:gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ y: -8, scale: 1.02 }}
              className={`relative bg-white/5 backdrop-blur-xl border-2 rounded-3xl p-6 lg:p-8 transition-all duration-300 cursor-pointer group ${
                plan.popular
                  ? 'border-indigo-500 bg-gradient-to-br from-indigo-500/10 to-purple-500/10 scale-105 shadow-2xl shadow-indigo-500/25'
                  : 'border-white/10 hover:border-indigo-500/50 hover:bg-white/10'
              }`}
              onClick={() => handlePlanSelect(plan)}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg">
                    🏆 BEST VALUE
                  </div>
                </div>
              )}

              {/* Plan Header */}
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-2 text-white">
                  {plan.name}
                </h3>
                <div className="text-slate-400 mb-4">{plan.duration}</div>

                {plan.savings && (
                  <div className="inline-block bg-emerald-500/20 text-emerald-300 px-3 py-1 rounded-full text-sm font-semibold mb-4 border border-emerald-500/30">
                    {plan.savings}
                  </div>
                )}
              </div>

              {/* Pricing Display */}
              <div className="text-center mb-8">
                <div className="flex items-baseline justify-center gap-2 mb-2">
                  <span className="text-4xl lg:text-5xl font-black bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                    {plan.price}
                  </span>
                  <span className="text-slate-400">/total</span>
                </div>

                <div className="text-slate-300 font-medium mb-2">
                  {plan.monthlyEquivalent}
                </div>

                {plan.savings && (
                  <div className="text-slate-400 line-through text-sm">
                    Was {plan.originalPrice}
                  </div>
                )}
              </div>

              {/* Features List */}
              <div className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <div
                    key={featureIndex}
                    className="flex items-center gap-3 text-sm"
                  >
                    <div className="flex-shrink-0 w-5 h-5 bg-emerald-500/20 rounded-full flex items-center justify-center">
                      <span className="text-emerald-400 text-xs">✓</span>
                    </div>
                    <span className="text-slate-300">{feature}</span>
                  </div>
                ))}

                {plan.limitations?.map((limitation, limitIndex) => (
                  <div
                    key={limitIndex}
                    className="flex items-center gap-3 text-sm opacity-60"
                  >
                    <div className="flex-shrink-0 w-5 h-5 bg-amber-500/20 rounded-full flex items-center justify-center">
                      <span className="text-amber-400 text-xs">⚠</span>
                    </div>
                    <span className="text-slate-400">{limitation}</span>
                  </div>
                ))}
              </div>

              {/* Trial Info */}
              <div className="bg-white/5 rounded-xl p-3 mb-6 text-center">
                <div className="text-indigo-300 font-semibold text-sm">
                  {plan.trialDays}-Day Money Back Guarantee
                </div>
              </div>

              {/* CTA Button */}
              <button
                className={`w-full py-4 px-6 rounded-2xl font-bold text-lg transition-all duration-300 transform group-hover:scale-105 ${
                  plan.popular
                    ? 'bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white shadow-lg'
                    : 'bg-white/10 hover:bg-indigo-600 text-indigo-300 hover:text-white border-2 border-indigo-500/50 hover:border-indigo-500'
                }`}
              >
                Select {plan.name}
              </button>

              {/* Trust Signals */}
              <div className="text-center mt-4 text-xs text-slate-500">
                🔒 Secure • 💯 Guaranteed • ⚡ Instant Setup
              </div>

              {/* Hover glow effect */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-indigo-500/0 via-purple-500/0 to-teal-500/0 group-hover:from-indigo-500/5 group-hover:via-purple-500/5 group-hover:to-teal-500/5 transition-all duration-500 pointer-events-none" />
            </motion.div>
          ))}
        </div>

        {/* Mobile: Ultimate First Order */}
        <div className="md:hidden grid grid-cols-1 gap-6">
          {mobileOrderPlans.map((plan, index) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              className={`relative bg-white/5 backdrop-blur-xl border-2 rounded-3xl p-6 transition-all duration-300 cursor-pointer group ${
                plan.popular
                  ? 'border-indigo-500 bg-gradient-to-br from-indigo-500/10 to-purple-500/10 shadow-2xl shadow-indigo-500/25'
                  : 'border-white/10 hover:border-indigo-500/50 hover:bg-white/10'
              }`}
              onClick={() => handlePlanSelect(plan)}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg">
                    🏆 BEST VALUE
                  </div>
                </div>
              )}

              {/* Plan Header */}
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-2 text-white">
                  {plan.name}
                </h3>
                <div className="text-slate-400 mb-4">{plan.duration}</div>

                {plan.savings && (
                  <div className="inline-block bg-emerald-500/20 text-emerald-300 px-3 py-1 rounded-full text-sm font-semibold mb-4 border border-emerald-500/30">
                    {plan.savings}
                  </div>
                )}
              </div>

              {/* Pricing Display */}
              <div className="text-center mb-8">
                <div className="flex items-baseline justify-center gap-2 mb-2">
                  <span className="text-4xl font-black bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                    {plan.price}
                  </span>
                  <span className="text-slate-400">/total</span>
                </div>

                <div className="text-slate-300 font-medium mb-2">
                  {plan.monthlyEquivalent}
                </div>

                {plan.savings && (
                  <div className="text-slate-400 line-through text-sm">
                    Was {plan.originalPrice}
                  </div>
                )}
              </div>

              {/* Features List */}
              <div className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <div
                    key={featureIndex}
                    className="flex items-center gap-3 text-sm"
                  >
                    <div className="flex-shrink-0 w-5 h-5 bg-emerald-500/20 rounded-full flex items-center justify-center">
                      <span className="text-emerald-400 text-xs">✓</span>
                    </div>
                    <span className="text-slate-300">{feature}</span>
                  </div>
                ))}

                {plan.limitations?.map((limitation, limitIndex) => (
                  <div
                    key={limitIndex}
                    className="flex items-center gap-3 text-sm opacity-60"
                  >
                    <div className="flex-shrink-0 w-5 h-5 bg-amber-500/20 rounded-full flex items-center justify-center">
                      <span className="text-amber-400 text-xs">⚠</span>
                    </div>
                    <span className="text-slate-400">{limitation}</span>
                  </div>
                ))}
              </div>

              {/* Trial Info */}
              <div className="bg-white/5 rounded-xl p-3 mb-6 text-center">
                <div className="text-indigo-300 font-semibold text-sm">
                  {plan.trialDays}-Day Money Back Guarantee
                </div>
              </div>

              {/* CTA Button */}
              <button
                className={`w-full py-4 px-6 rounded-2xl font-bold text-lg transition-all duration-300 ${
                  plan.popular
                    ? 'bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white shadow-lg'
                    : 'bg-white/10 hover:bg-indigo-600 text-indigo-300 hover:text-white border-2 border-indigo-500/50 hover:border-indigo-500'
                }`}
              >
                Select {plan.name}
              </button>

              {/* Trust Signals */}
              <div className="text-center mt-4 text-xs text-slate-500">
                🔒 Secure • 💯 Guaranteed • ⚡ Instant Setup
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
              Why Choose PandaStreamTV?
            </h3>
            <div className="grid md:grid-cols-3 gap-6 text-sm">
              <div className="text-center">
                <div className="text-2xl mb-2">⚡</div>
                <div className="font-semibold text-white mb-1">
                  10-Minute Setup
                </div>
                <div className="text-slate-400">
                  Works on any device instantly
                </div>
              </div>
              <div className="text-center">
                <div className="text-2xl mb-2">💯</div>
                <div className="font-semibold text-white mb-1">
                  Money-Back Guarantee
                </div>
                <div className="text-slate-400">Risk-free trial period</div>
              </div>
              <div className="text-center">
                <div className="text-2xl mb-2">🔧</div>
                <div className="font-semibold text-white mb-1">
                  24/7 Support
                </div>
                <div className="text-slate-400">
                  Expert help whenever you need it
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Pricing Modal */}
      {showModal && selectedPlan && (
        <PricingModal
          plan={selectedPlan}
          isOpen={showModal}
          onClose={closeModal}
        />
      )}
    </section>
  );
}
