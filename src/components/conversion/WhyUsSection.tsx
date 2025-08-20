// src/components/conversion/WhyUsSection.tsx
'use client';

import { useState, useEffect, useRef } from 'react';
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
} from 'framer-motion';

interface WhyUsSectionProps {
  language: 'fr-BE' | 'nl-BE' | 'en';
}

const content = {
  'fr-BE': {
    headline: 'Ne Ratez Plus Jamais Un Match.',
    subheadline: 'Ne Payez Plus Jamais les Prix du Câble.',
    cta: 'Vous Voulez des Preuves? Voyez Comment →',
    miniCta: 'Voir les Preuves →',
    notification: 'vient de rejoindre',
    cards: [
      {
        id: 'premium-access',
        title: 'Accès Premium Total',
        subtitle: 'BeIN, Canal+, RMC Sport - Tout Inclus',
        description:
          'Exactement le même contenu que 5 abonnements séparés. Pas "similaire". Identique.',
        stat: '100%',
        statLabel: 'du contenu',
        icon: '👑',
        color: 'from-purple-500 to-pink-500',
      },
      {
        id: 'quality',
        title: 'Qualité 8K/4K Garantie',
        subtitle: 'Cristal Clair. Toujours.',
        description:
          'Aucun pixel. Aucun buffer. Même pendant Real Madrid vs Barcelona.',
        stat: '8K',
        statLabel: 'Ultra HD',
        icon: '🎬',
        color: 'from-blue-500 to-cyan-500',
      },
      {
        id: 'reliability',
        title: 'Promesse Champions League',
        subtitle: 'Quand les autres crashent, nous brillons',
        description:
          'Finales, derbys, classicos - nos serveurs anticipent et délivrent.',
        stat: '99.9%',
        statLabel: 'uptime',
        icon: '⚡',
        color: 'from-green-500 to-emerald-500',
      },
      {
        id: 'ppv',
        title: 'Tous les PPV Inclus',
        subtitle: 'UFC, Boxe, Events Spéciaux',
        description: 'Économisez 500€+ par an rien que sur les pay-per-view.',
        stat: '500€+',
        statLabel: "d'économies/an",
        icon: '🥊',
        color: 'from-red-500 to-orange-500',
      },
      {
        id: 'liberation',
        title: 'Libération TV Totale',
        subtitle: 'Votre dernière facture était LA dernière',
        description:
          'Plus de contrats. Plus de surprises. Plus de hausses de prix.',
        stat: '0€',
        statLabel: 'frais cachés',
        icon: '🔓',
        color: 'from-yellow-500 to-amber-500',
      },
      {
        id: 'infrastructure',
        title: 'Infrastructure Enterprise',
        subtitle: 'Serveurs qui anticipent la demande',
        description: '50,000+ utilisateurs simultanés sans ralentissement.',
        stat: '50K+',
        statLabel: 'fans actifs',
        icon: '🚀',
        color: 'from-indigo-500 to-purple-500',
      },
    ],
    comparison: {
      old: 'Avant: 150€/mois',
      new: 'Maintenant: 9.90€/mois',
      items: [
        'BeIN Sports: 15€',
        'Canal+: 35€',
        'RMC Sport: 25€',
        'Netflix Sports: 20€',
        'PPV moyens: 50€',
      ],
    },
    trust: {
      viewers: 'regardent maintenant',
      uptime: 'Uptime garanti',
      saved: 'économisés par nos membres',
    },
  },
  'nl-BE': {
    headline: 'Mis Nooit Meer Een Wedstrijd.',
    subheadline: 'Betaal Nooit Meer Kabelprijzen.',
    cta: 'Wilt U Bewijs? Zie Hoe →',
    miniCta: 'Zie Bewijs →',
    notification: 'is net lid geworden',
    cards: [
      {
        id: 'premium-access',
        title: 'Totale Premium Toegang',
        subtitle: 'BeIN, Canal+, RMC Sport - Alles Inbegrepen',
        description:
          'Exact dezelfde inhoud als 5 aparte abonnementen. Niet "vergelijkbaar". Identiek.',
        stat: '100%',
        statLabel: 'van inhoud',
        icon: '👑',
        color: 'from-purple-500 to-pink-500',
      },
      {
        id: 'quality',
        title: '8K/4K Kwaliteit Gegarandeerd',
        subtitle: 'Kristalhelder. Altijd.',
        description:
          'Geen pixels. Geen buffering. Zelfs tijdens Real Madrid vs Barcelona.',
        stat: '8K',
        statLabel: 'Ultra HD',
        icon: '🎬',
        color: 'from-blue-500 to-cyan-500',
      },
      {
        id: 'reliability',
        title: 'Champions League Belofte',
        subtitle: 'Als anderen crashen, schitteren wij',
        description:
          "Finales, derby's, clasico's - onze servers anticiperen en leveren.",
        stat: '99.9%',
        statLabel: 'uptime',
        icon: '⚡',
        color: 'from-green-500 to-emerald-500',
      },
      {
        id: 'ppv',
        title: 'Alle PPV Inbegrepen',
        subtitle: 'UFC, Boksen, Speciale Events',
        description: 'Bespaar 500€+ per jaar alleen al op pay-per-view.',
        stat: '500€+',
        statLabel: 'besparing/jaar',
        icon: '🥊',
        color: 'from-red-500 to-orange-500',
      },
      {
        id: 'liberation',
        title: 'Totale TV Bevrijding',
        subtitle: 'Uw laatste factuur was DE laatste',
        description:
          'Geen contracten meer. Geen verrassingen. Geen prijsverhogingen.',
        stat: '0€',
        statLabel: 'verborgen kosten',
        icon: '🔓',
        color: 'from-yellow-500 to-amber-500',
      },
      {
        id: 'infrastructure',
        title: 'Enterprise Infrastructuur',
        subtitle: 'Servers die vraag anticiperen',
        description: '50,000+ gelijktijdige gebruikers zonder vertraging.',
        stat: '50K+',
        statLabel: 'actieve fans',
        icon: '🚀',
        color: 'from-indigo-500 to-purple-500',
      },
    ],
    comparison: {
      old: 'Vroeger: 150€/maand',
      new: 'Nu: 9.90€/maand',
      items: [
        'BeIN Sports: 15€',
        'Canal+: 35€',
        'RMC Sport: 25€',
        'Netflix Sports: 20€',
        'PPV gemiddeld: 50€',
      ],
    },
    trust: {
      viewers: 'kijken nu',
      uptime: 'Uptime gegarandeerd',
      saved: 'bespaard door onze leden',
    },
  },
  en: {
    headline: 'Never Miss Another Match.',
    subheadline: 'Never Pay Cable Prices Again.',
    cta: 'Want Proof? See How →',
    miniCta: 'See Proof →',
    notification: 'just joined',
    cards: [
      {
        id: 'premium-access',
        title: 'Total Premium Access',
        subtitle: 'BeIN, Canal+, RMC Sport - All Included',
        description:
          'Exact same content as 5 separate subscriptions. Not "similar". Identical.',
        stat: '100%',
        statLabel: 'of content',
        icon: '👑',
        color: 'from-purple-500 to-pink-500',
      },
      {
        id: 'quality',
        title: '8K/4K Quality Guaranteed',
        subtitle: 'Crystal Clear. Always.',
        description:
          'No pixels. No buffering. Even during Real Madrid vs Barcelona.',
        stat: '8K',
        statLabel: 'Ultra HD',
        icon: '🎬',
        color: 'from-blue-500 to-cyan-500',
      },
      {
        id: 'reliability',
        title: 'Champions League Promise',
        subtitle: 'When others crash, we shine',
        description:
          'Finals, derbies, clasicos - our servers anticipate and deliver.',
        stat: '99.9%',
        statLabel: 'uptime',
        icon: '⚡',
        color: 'from-green-500 to-emerald-500',
      },
      {
        id: 'ppv',
        title: 'All PPV Included',
        subtitle: 'UFC, Boxing, Special Events',
        description: 'Save 500€+ per year just on pay-per-view events.',
        stat: '500€+',
        statLabel: 'savings/year',
        icon: '🥊',
        color: 'from-red-500 to-orange-500',
      },
      {
        id: 'liberation',
        title: 'Total TV Liberation',
        subtitle: 'Your last bill was THE last',
        description:
          'No more contracts. No more surprises. No more price hikes.',
        stat: '0€',
        statLabel: 'hidden fees',
        icon: '🔓',
        color: 'from-yellow-500 to-amber-500',
      },
      {
        id: 'infrastructure',
        title: 'Enterprise Infrastructure',
        subtitle: 'Servers that anticipate demand',
        description: '50,000+ simultaneous users without slowdown.',
        stat: '50K+',
        statLabel: 'active fans',
        icon: '🚀',
        color: 'from-indigo-500 to-purple-500',
      },
    ],
    comparison: {
      old: 'Before: 150€/month',
      new: 'Now: 9.90€/month',
      items: [
        'BeIN Sports: 15€',
        'Canal+: 35€',
        'RMC Sport: 25€',
        'Netflix Sports: 20€',
        'PPV average: 50€',
      ],
    },
    trust: {
      viewers: 'watching now',
      uptime: 'Guaranteed uptime',
      saved: 'saved by our members',
    },
  },
};

const names = [
  'Pierre',
  'Marie',
  'Jean',
  'Sophie',
  'Lucas',
  'Emma',
  'Thomas',
  'Julie',
  'Alexandre',
  'Laura',
  'Nicolas',
  'Camille',
  'Maxime',
  'Charlotte',
  'Antoine',
];

const cities = [
  'Bruxelles',
  'Anvers',
  'Gand',
  'Liège',
  'Bruges',
  'Namur',
  'Charleroi',
  'Louvain',
  'Mons',
  'Ostende',
  'Tournai',
  'Courtrai',
  'Hasselt',
  'Malines',
];

export default function WhyUsSection({ language }: WhyUsSectionProps) {
  const [currentCard, setCurrentCard] = useState(0);
  const [viewerCount, setViewerCount] = useState(2847);
  const [totalSaved, setTotalSaved] = useState(1250000);
  const [showNotification, setShowNotification] = useState(false);
  const [notificationName, setNotificationName] = useState('');
  const [notificationCity, setNotificationCity] = useState('');
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const scale = useTransform(
    scrollYProgress,
    [0, 0.2, 0.8, 1],
    [0.95, 1, 1, 0.95]
  );

  const currentContent = content[language];

  // Animate viewer count
  useEffect(() => {
    const interval = setInterval(() => {
      setViewerCount((prev) => prev + Math.floor(Math.random() * 5) + 1);
      setTotalSaved((prev) => prev + Math.floor(Math.random() * 1000) + 500);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Show random notifications
  useEffect(() => {
    const showRandomNotification = () => {
      setNotificationName(names[Math.floor(Math.random() * names.length)]);
      setNotificationCity(cities[Math.floor(Math.random() * cities.length)]);
      setShowNotification(true);
      setTimeout(() => setShowNotification(false), 4000);
    };

    const interval = setInterval(showRandomNotification, 15000);
    setTimeout(showRandomNotification, 5000); // First notification after 5s

    return () => clearInterval(interval);
  }, []);

  const scrollToProof = () => {
    const proofSection = document.getElementById('proof-section');
    if (proofSection) {
      proofSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleCardScroll = () => {
    if (scrollContainerRef.current) {
      const scrollLeft = scrollContainerRef.current.scrollLeft;
      const cardWidth = scrollContainerRef.current.offsetWidth * 0.8;
      const newIndex = Math.round(scrollLeft / cardWidth);
      setCurrentCard(newIndex);
    }
  };

  return (
    <motion.section
      ref={sectionRef}
      style={{ opacity, scale }}
      className="relative py-16 md:py-24 bg-gradient-to-b from-black via-gray-900 to-black overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-yellow-900/10 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-orange-900/10 via-transparent to-transparent" />
      </div>

      {/* Social Proof Notification */}
      <AnimatePresence>
        {showNotification && (
          <motion.div
            initial={{ opacity: 0, y: -20, x: '-50%' }}
            animate={{ opacity: 1, y: 0, x: '-50%' }}
            exit={{ opacity: 0, y: -20, x: '-50%' }}
            className="fixed top-20 left-1/2 z-50 bg-white/10 backdrop-blur-md rounded-full px-4 py-2 flex items-center space-x-2 border border-white/20"
          >
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            <span className="text-sm text-white">
              {notificationName} ({notificationCity}){' '}
              {currentContent.notification}
            </span>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white mb-4 leading-tight">
            {currentContent.headline}
          </h2>
          <p className="text-xl sm:text-2xl md:text-3xl font-bold gradient-text mb-8">
            {currentContent.subheadline}
          </p>

          {/* Main CTA */}
          <motion.button
            onClick={scrollToProof}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-premium text-base sm:text-lg relative group"
          >
            <span className="relative z-10">{currentContent.cta}</span>
            <motion.div
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-xl blur-lg group-hover:blur-xl"
            />
          </motion.button>
        </motion.div>

        {/* Trust Indicators */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-white/5 backdrop-blur-sm rounded-xl p-4 text-center border border-white/10"
          >
            <div className="text-2xl font-bold text-yellow-400">
              {viewerCount.toLocaleString()}
            </div>
            <div className="text-sm text-white/70">
              {currentContent.trust.viewers}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-white/5 backdrop-blur-sm rounded-xl p-4 text-center border border-white/10"
          >
            <div className="text-2xl font-bold text-green-400">99.9%</div>
            <div className="text-sm text-white/70">
              {currentContent.trust.uptime}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-white/5 backdrop-blur-sm rounded-xl p-4 text-center border border-white/10"
          >
            <div className="text-2xl font-bold text-orange-400">
              €{(totalSaved / 1000).toFixed(0)}K+
            </div>
            <div className="text-sm text-white/70">
              {currentContent.trust.saved}
            </div>
          </motion.div>
        </div>

        {/* Mobile: Swipeable Cards / Desktop: Grid */}
        <div className="block md:hidden">
          {/* Mobile Swipeable Cards */}
          <div
            ref={scrollContainerRef}
            onScroll={handleCardScroll}
            className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide -mx-4 px-4 pb-4"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {currentContent.cards.map((card, index) => (
              <motion.div
                key={card.id}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="flex-shrink-0 w-[80%] snap-center mr-4"
              >
                <div
                  className={`relative h-full bg-gradient-to-br ${card.color} p-[1px] rounded-2xl`}
                >
                  <div className="bg-gray-900/95 backdrop-blur-sm rounded-2xl p-6 h-full">
                    <div className="text-4xl mb-4">{card.icon}</div>
                    <h3 className="text-xl font-bold text-white mb-2">
                      {card.title}
                    </h3>
                    <p className="text-sm text-yellow-400 mb-3">
                      {card.subtitle}
                    </p>
                    <p className="text-white/80 text-sm mb-4">
                      {card.description}
                    </p>
                    <div className="flex items-baseline space-x-2">
                      <span
                        className={`text-3xl font-black bg-gradient-to-r ${card.color} bg-clip-text text-transparent`}
                      >
                        {card.stat}
                      </span>
                      <span className="text-white/60 text-sm">
                        {card.statLabel}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Mobile Indicators */}
          <div className="flex justify-center space-x-2 mt-4">
            {currentContent.cards.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  if (scrollContainerRef.current) {
                    const cardWidth =
                      scrollContainerRef.current.offsetWidth * 0.8 + 16;
                    scrollContainerRef.current.scrollTo({
                      left: cardWidth * index,
                      behavior: 'smooth',
                    });
                  }
                }}
                className={`transition-all duration-300 rounded-full ${
                  index === currentCard
                    ? 'w-8 h-2 bg-yellow-400'
                    : 'w-2 h-2 bg-white/40 hover:bg-white/60'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Desktop Grid */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {currentContent.cards.map((card, index) => (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -10 }}
              className="group"
            >
              <div
                className={`relative h-full bg-gradient-to-br ${card.color} p-[1px] rounded-2xl`}
              >
                <div className="bg-gray-900/95 backdrop-blur-sm rounded-2xl p-6 h-full group-hover:bg-gray-900/80 transition-all duration-300">
                  <div className="text-4xl mb-4">{card.icon}</div>
                  <h3 className="text-xl font-bold text-white mb-2">
                    {card.title}
                  </h3>
                  <p className="text-sm text-yellow-400 mb-3">
                    {card.subtitle}
                  </p>
                  <p className="text-white/80 text-sm mb-4">
                    {card.description}
                  </p>
                  <div className="flex items-baseline space-x-2">
                    <span
                      className={`text-3xl font-black bg-gradient-to-r ${card.color} bg-clip-text text-transparent`}
                    >
                      {card.stat}
                    </span>
                    <span className="text-white/60 text-sm">
                      {card.statLabel}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Comparison Visual */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 bg-white/5 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-white/10"
        >
          <div className="grid md:grid-cols-2 gap-8">
            {/* Before */}
            <div className="relative">
              <div className="absolute inset-0 bg-red-500/20 rounded-xl blur-xl" />
              <div className="relative bg-gray-900/80 rounded-xl p-6 border-2 border-red-500/50">
                <h4 className="text-xl font-bold text-red-400 mb-4 line-through">
                  {currentContent.comparison.old}
                </h4>
                <ul className="space-y-2">
                  {currentContent.comparison.items.map((item, i) => (
                    <li key={i} className="text-white/60 text-sm">
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="mt-4 text-2xl font-bold text-red-400">
                  Total: 145€/mois
                </div>
              </div>
            </div>

            {/* After */}
            <div className="relative">
              <div className="absolute inset-0 bg-green-500/20 rounded-xl blur-xl" />
              <div className="relative bg-gray-900/80 rounded-xl p-6 border-2 border-green-500/50">
                <h4 className="text-xl font-bold text-green-400 mb-4">
                  {currentContent.comparison.new}
                </h4>
                <ul className="space-y-2">
                  <li className="text-white text-sm font-semibold">
                    ✓ Tout inclus
                  </li>
                  <li className="text-white text-sm font-semibold">
                    ✓ Qualité 8K/4K
                  </li>
                  <li className="text-white text-sm font-semibold">
                    ✓ Tous les PPV
                  </li>
                  <li className="text-white text-sm font-semibold">
                    ✓ Sans engagement
                  </li>
                  <li className="text-white text-sm font-semibold">
                    ✓ Support 24/7
                  </li>
                </ul>
                <div className="mt-4 text-3xl font-black text-green-400">
                  Total: 9.90€/mois
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <motion.button
            onClick={scrollToProof}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-premium text-sm sm:text-base"
          >
            {currentContent.miniCta}
          </motion.button>
        </motion.div>
      </div>
    </motion.section>
  );
}
