// src/components/pricing/DynamicPricing.tsx
'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import EmailCaptureModal from '../modals/EmailCaptureModal';

interface PricingProps {
  language: 'fr-BE' | 'nl-BE' | 'en';
}

const pricingData = {
  '1-device': [
    {
      id: '1month-1d',
      duration: { 'fr-BE': '1 Mois', 'nl-BE': '1 Maand', en: '1 Month' },
      price: 15,
      monthly: 15,
      badge: null,
      savings: null,
      popular: false,
    },
    {
      id: '3month-1d',
      duration: { 'fr-BE': '3 Mois', 'nl-BE': '3 Maanden', en: '3 Months' },
      price: 39,
      monthly: 13,
      badge: null,
      savings: '13%',
      popular: false,
    },
    {
      id: '6month-1d',
      duration: { 'fr-BE': '6 Mois', 'nl-BE': '6 Maanden', en: '6 Months' },
      price: 69,
      monthly: 11.5,
      badge: null,
      savings: '23%',
      popular: false,
    },
    {
      id: '12month-1d',
      duration: { 'fr-BE': '12 Mois', 'nl-BE': '12 Maanden', en: '12 Months' },
      price: 119,
      monthly: 9.9,
      badge: {
        'fr-BE': 'MEILLEURE OFFRE',
        'nl-BE': 'BESTE DEAL',
        en: 'BEST VALUE',
      },
      savings: '34%',
      popular: true,
    },
  ],
  '2-devices': [
    {
      id: '1month-2d',
      duration: { 'fr-BE': '1 Mois', 'nl-BE': '1 Maand', en: '1 Month' },
      price: 22,
      monthly: 22,
      badge: { 'fr-BE': 'FAMILLE', 'nl-BE': 'FAMILIE', en: 'FAMILY' },
      savings: null,
      popular: false,
    },
    {
      id: '3month-2d',
      duration: { 'fr-BE': '3 Mois', 'nl-BE': '3 Maanden', en: '3 Months' },
      price: 57,
      monthly: 19,
      badge: null,
      savings: '14%',
      popular: false,
    },
    {
      id: '6month-2d',
      duration: { 'fr-BE': '6 Mois', 'nl-BE': '6 Maanden', en: '6 Months' },
      price: 99,
      monthly: 16.5,
      badge: null,
      savings: '25%',
      popular: false,
    },
    {
      id: '12month-2d',
      duration: { 'fr-BE': '12 Mois', 'nl-BE': '12 Maanden', en: '12 Months' },
      price: 169,
      monthly: 14,
      badge: {
        'fr-BE': 'PLUS POPULAIRE',
        'nl-BE': 'MEEST POPULAIR',
        en: 'MOST POPULAR',
      },
      savings: '36%',
      popular: true,
    },
  ],
};

const features = {
  'fr-BE': {
    included: [
      '5000+ chaînes HD/4K',
      'Netflix, Disney+, HBO inclus',
      'Tous les sports belges',
      'Installation en 10 minutes',
      'Support WhatsApp 24/7',
      'Sans contrat - Annulez quand vous voulez',
      'Garantie remboursement 7 jours',
    ],
  },
  'nl-BE': {
    included: [
      '5000+ kanalen HD/4K',
      'Netflix, Disney+, HBO inbegrepen',
      'Alle Belgische sporten',
      '10 minuten installatie',
      'WhatsApp ondersteuning 24/7',
      'Zonder contract - Stop wanneer u wilt',
      '7 dagen geld-terug-garantie',
    ],
  },
  en: {
    included: [
      '5000+ channels HD/4K',
      'Netflix, Disney+, HBO included',
      'All Belgian sports',
      '10 minute installation',
      'WhatsApp support 24/7',
      'No contract - Cancel anytime',
      '7-day money-back guarantee',
    ],
  },
};

export default function DynamicPricing({ language }: PricingProps) {
  const [deviceType, setDeviceType] = useState<'1-device' | '2-devices'>(
    '1-device'
  );
  const [selectedPlan, setSelectedPlan] = useState<any>(null);
  const [showEmailModal, setShowEmailModal] = useState(false);

  const currentPlans = pricingData[deviceType];
  const currentFeatures = features[language];

  const handlePlanSelect = (plan: any) => {
    setSelectedPlan(plan);
    setShowEmailModal(true);
  };

  const getComparisonText = (language: string) => {
    const texts = {
      'fr-BE': {
        vs: 'vs €180/an pour des abonnements séparés',
        save: 'Économisez',
        perMonth: '/mois',
      },
      'nl-BE': {
        vs: 'vs €180/jaar voor aparte abonnementen',
        save: 'Bespaar',
        perMonth: '/maand',
      },
      en: {
        vs: 'vs €180/year for separate subscriptions',
        save: 'Save',
        perMonth: '/month',
      },
    };
    return texts[language as keyof typeof texts];
  };

  const texts = getComparisonText(language);

  // Reorder plans for mobile (12 months first)
  const mobilePlans = [...currentPlans].reverse();
  const desktopPlans = currentPlans;

  return (
    <section
      id="pricing"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black to-gray-900"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-4">
            {language === 'fr-BE'
              ? 'Choisissez Votre Plan'
              : language === 'nl-BE'
                ? 'Kies Uw Plan'
                : 'Choose Your Plan'}
          </h2>
          <p className="text-xl text-gray-400 mb-8">{texts.vs}</p>

          {/* Device Toggle */}
          <div className="device-toggle inline-flex mx-auto">
            <button
              onClick={() => setDeviceType('1-device')}
              className={deviceType === '1-device' ? 'active' : ''}
            >
              {language === 'fr-BE'
                ? '1 Appareil'
                : language === 'nl-BE'
                  ? '1 Apparaat'
                  : '1 Device'}
            </button>
            <button
              onClick={() => setDeviceType('2-devices')}
              className={deviceType === '2-devices' ? 'active' : ''}
            >
              {language === 'fr-BE'
                ? '2 Appareils'
                : language === 'nl-BE'
                  ? '2 Apparaten'
                  : '2 Devices'}
            </button>
          </div>
        </motion.div>

        {/* Pricing Cards - Mobile */}
        <div className="lg:hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={deviceType}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="grid grid-cols-1 gap-6"
            >
              {mobilePlans.map((plan, index) => (
                <motion.div
                  key={plan.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className={`relative p-6 rounded-2xl backdrop-blur-md border transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-br from-yellow-900/20 to-orange-900/20 border-yellow-500/50 scale-[1.02]'
                      : 'bg-white/5 border-white/10 hover:border-white/20'
                  }`}
                >
                  {/* Badge */}
                  {plan.badge && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black text-xs font-bold px-4 py-1 rounded-full">
                        {plan.badge[language]}
                      </span>
                    </div>
                  )}

                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-white mb-1">
                        {plan.duration[language]}
                      </h3>
                      {plan.savings && (
                        <span className="text-green-400 text-sm font-semibold">
                          {texts.save} {plan.savings}
                        </span>
                      )}
                    </div>
                    <div className="text-right">
                      <div className="text-3xl font-black text-white">
                        €{plan.price}
                      </div>
                      <div className="text-sm text-gray-400">
                        €{plan.monthly.toFixed(2)}
                        {texts.perMonth}
                      </div>
                    </div>
                  </div>

                  <button
                    onClick={() => handlePlanSelect(plan)}
                    className={`w-full py-3 rounded-xl font-bold transition-all duration-300 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-yellow-400 to-orange-500 text-black hover:shadow-lg hover:shadow-yellow-500/30'
                        : 'bg-white/10 text-white hover:bg-white/20'
                    }`}
                  >
                    {language === 'fr-BE'
                      ? 'Choisir ce plan'
                      : language === 'nl-BE'
                        ? 'Kies dit plan'
                        : 'Choose this plan'}
                  </button>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Pricing Cards - Desktop */}
        <div className="hidden lg:block">
          <AnimatePresence mode="wait">
            <motion.div
              key={deviceType}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="grid grid-cols-4 gap-6"
            >
              {desktopPlans.map((plan, index) => (
                <motion.div
                  key={plan.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -10 }}
                  className={`relative p-8 rounded-2xl backdrop-blur-md border transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-br from-yellow-900/20 to-orange-900/20 border-yellow-500/50 scale-105'
                      : 'bg-white/5 border-white/10 hover:border-white/20'
                  }`}
                >
                  {/* Badge */}
                  {plan.badge && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black text-sm font-bold px-6 py-2 rounded-full whitespace-nowrap">
                        {plan.badge[language]}
                      </span>
                    </div>
                  )}

                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">
                      {plan.duration[language]}
                    </h3>
                    <div className="text-5xl font-black text-white mb-2">
                      €{plan.price}
                    </div>
                    <div className="text-gray-400">
                      €{plan.monthly.toFixed(2)}
                      {texts.perMonth}
                    </div>
                    {plan.savings && (
                      <div className="mt-2">
                        <span className="text-green-400 font-semibold">
                          {texts.save} {plan.savings}
                        </span>
                      </div>
                    )}
                  </div>

                  <button
                    onClick={() => handlePlanSelect(plan)}
                    className={`w-full py-4 rounded-xl font-bold text-lg transition-all duration-300 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-yellow-400 to-orange-500 text-black hover:shadow-lg hover:shadow-yellow-500/30 transform hover:scale-105'
                        : 'bg-white/10 text-white hover:bg-white/20'
                    }`}
                  >
                    {language === 'fr-BE'
                      ? 'Commencer'
                      : language === 'nl-BE'
                        ? 'Starten'
                        : 'Get Started'}
                  </button>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Features List */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl font-bold text-white mb-8">
            {language === 'fr-BE'
              ? 'Inclus dans tous les plans:'
              : language === 'nl-BE'
                ? 'Inbegrepen in alle plannen:'
                : 'Included in all plans:'}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {currentFeatures.included.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.05 }}
                viewport={{ once: true }}
                className="flex items-center space-x-3 text-left"
              >
                <svg
                  className="w-5 h-5 text-green-400 flex-shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-gray-300">{feature}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Trust Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <div className="inline-flex items-center space-x-8 flex-wrap justify-center gap-4">
            <div className="flex items-center space-x-2">
              <span className="text-2xl">🔒</span>
              <span className="text-gray-400">
                {language === 'fr-BE'
                  ? 'Paiement Sécurisé'
                  : language === 'nl-BE'
                    ? 'Veilige Betaling'
                    : 'Secure Payment'}
              </span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-2xl">🇧🇪</span>
              <span className="text-gray-400">
                {language === 'fr-BE'
                  ? 'Entreprise Belge'
                  : language === 'nl-BE'
                    ? 'Belgisch Bedrijf'
                    : 'Belgian Company'}
              </span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-2xl">💯</span>
              <span className="text-gray-400">
                {language === 'fr-BE'
                  ? 'Satisfaction Garantie'
                  : language === 'nl-BE'
                    ? 'Tevredenheid Gegarandeerd'
                    : 'Satisfaction Guaranteed'}
              </span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Email Capture Modal */}
      {showEmailModal && selectedPlan && (
        <EmailCaptureModal
          isOpen={showEmailModal}
          onClose={() => setShowEmailModal(false)}
          plan={selectedPlan}
          language={language}
        />
      )}
    </section>
  );
}
