// src/components/hero/HeroSection.tsx
'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

interface HeroSectionProps {
  language: 'fr-BE' | 'nl-BE' | 'en';
  onEmailCapture?: (email: string) => void;
}

const heroSlides = [
  {
    id: 'champions-league',
    background:
      '/assets/sports/football/belgium/club brugge - champions league.png',
    content: {
      'fr-BE': {
        headline: 'Ne Ratez Plus Jamais Un Match de Champions League',
        subheadline: 'Club Brugge, Real Madrid, PSG - Tout en 4K Ultra HD',
        description: 'Regardez chaque but, chaque action en qualité cinéma',
        cta: 'Accès Immédiat aux Matchs →',
      },
      'nl-BE': {
        headline: 'Mis Nooit Meer Een Champions League Wedstrijd',
        subheadline: 'Club Brugge, Real Madrid, PSG - Alles in 4K Ultra HD',
        description: 'Bekijk elk doelpunt, elke actie in bioscoopkwaliteit',
        cta: 'Directe Toegang tot Wedstrijden →',
      },
      en: {
        headline: 'Never Miss a Champions League Match Again',
        subheadline: 'Club Brugge, Real Madrid, PSG - All in 4K Ultra HD',
        description: 'Watch every goal, every moment in cinema quality',
        cta: 'Instant Match Access →',
      },
    },
  },
  {
    id: 'netflix-premium',
    background: '/assets/hero section /netflix hero section .png',
    content: {
      'fr-BE': {
        headline: 'Netflix, Disney+, HBO Max - Un Seul Abonnement',
        subheadline: 'Économisez 80% vs abonnements séparés',
        description: 'Toutes vos plateformes préférées, un prix imbattable',
        cta: 'Commencer à Regarder →',
      },
      'nl-BE': {
        headline: 'Netflix, Disney+, HBO Max - Één Abonnement',
        subheadline: 'Bespaar 80% vs aparte abonnementen',
        description: 'Al uw favoriete platforms, één onverslaanbare prijs',
        cta: 'Start Met Kijken →',
      },
      en: {
        headline: 'Netflix, Disney+, HBO Max - One Subscription',
        subheadline: 'Save 80% vs separate subscriptions',
        description: 'All your favorite platforms, one unbeatable price',
        cta: 'Start Watching →',
      },
    },
  },
  {
    id: 'belgian-cycling',
    background: '/assets/sports/cycling/cycling - belgium .png',
    content: {
      'fr-BE': {
        headline: 'Tour de France, Ronde van Vlaanderen en Direct',
        subheadline: 'Suivez Remco Evenepoel et Wout van Aert',
        description: 'Chaque étape, chaque classique belge en HD',
        cta: 'Regarder le Cyclisme →',
      },
      'nl-BE': {
        headline: 'Tour de France, Ronde van Vlaanderen Live',
        subheadline: 'Volg Remco Evenepoel en Wout van Aert',
        description: 'Elke etappe, elke Belgische klassieker in HD',
        cta: 'Wielrennen Kijken →',
      },
      en: {
        headline: 'Tour de France, Tour of Flanders Live',
        subheadline: 'Follow Remco Evenepoel and Wout van Aert',
        description: 'Every stage, every Belgian classic in HD',
        cta: 'Watch Cycling →',
      },
    },
  },
  {
    id: 'mma-ufc',
    background: '/assets/sports/mma/mma - ufc hero section ring .png',
    content: {
      'fr-BE': {
        headline: 'UFC, Bellator, ONE Championship - Tous les Combats',
        subheadline: 'Pay-Per-View inclus sans frais supplémentaires',
        description: 'Chaque KO, chaque soumission en direct',
        cta: 'Accéder aux Combats →',
      },
      'nl-BE': {
        headline: 'UFC, Bellator, ONE Championship - Alle Gevechten',
        subheadline: 'Pay-Per-View inbegrepen zonder extra kosten',
        description: 'Elke KO, elke submission live',
        cta: 'Toegang tot Gevechten →',
      },
      en: {
        headline: 'UFC, Bellator, ONE Championship - All Fights',
        subheadline: 'Pay-Per-View included at no extra cost',
        description: 'Every KO, every submission live',
        cta: 'Access Fights →',
      },
    },
  },
  {
    id: 'family-cozy',
    background: '/assets/hero section /living cozy room.png',
    content: {
      'fr-BE': {
        headline: 'Votre Famille Mérite le Meilleur Divertissement',
        subheadline: '5000+ chaînes pour tous les goûts',
        description: 'Films, séries, sports, documentaires - tout est là',
        cta: 'Essayer Maintenant →',
      },
      'nl-BE': {
        headline: 'Uw Familie Verdient het Beste Entertainment',
        subheadline: '5000+ kanalen voor alle smaken',
        description: 'Films, series, sport, documentaires - alles is er',
        cta: 'Probeer Nu →',
      },
      en: {
        headline: 'Your Family Deserves the Best Entertainment',
        subheadline: '5000+ channels for every taste',
        description: 'Movies, series, sports, documentaries - all here',
        cta: 'Try Now →',
      },
    },
  },
  {
    id: 'jupiler-league',
    background:
      '/assets/sports/football/belgium/standard de liège players on the pitch.png',
    content: {
      'fr-BE': {
        headline: 'Jupiler Pro League - Chaque Match en Direct',
        subheadline: 'Standard, Anderlecht, Genk, Club Brugge',
        description: 'Votre équipe, votre passion, notre qualité 4K',
        cta: 'Voir le Football Belge →',
      },
      'nl-BE': {
        headline: 'Jupiler Pro League - Elke Wedstrijd Live',
        subheadline: 'Standard, Anderlecht, Genk, Club Brugge',
        description: 'Uw team, uw passie, onze 4K kwaliteit',
        cta: 'Bekijk Belgisch Voetbal →',
      },
      en: {
        headline: 'Jupiler Pro League - Every Match Live',
        subheadline: 'Standard, Anderlecht, Genk, Club Brugge',
        description: 'Your team, your passion, our 4K quality',
        cta: 'Watch Belgian Football →',
      },
    },
  },
];

export default function HeroSection({
  language,
  onEmailCapture,
}: HeroSectionProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const scrollToPricing = () => {
    const pricingSection = document.getElementById('pricing');
    if (pricingSection) {
      pricingSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleIndicatorClick = (index: number) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const currentContent = heroSlides[currentSlide].content[language];

  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Images */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
          className="absolute inset-0 z-0"
        >
          <Image
            src={heroSlides[currentSlide].background}
            alt={heroSlides[currentSlide].id}
            fill
            className="object-cover"
            priority={currentSlide === 0}
            quality={90}
          />
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/40" />
        </motion.div>
      </AnimatePresence>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20">
        <AnimatePresence mode="wait">
          <motion.div
            key={`content-${currentSlide}`}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.8 }}
            className="text-left md:text-center lg:text-left lg:max-w-3xl"
          >
            {/* Trust Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md rounded-full px-3 py-1.5 md:px-4 md:py-2 mb-4 md:mb-6"
            >
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <span className="text-xs md:text-sm text-white/90 font-medium">
                {language === 'fr-BE'
                  ? '2,847 regardent maintenant'
                  : language === 'nl-BE'
                    ? '2,847 kijken nu'
                    : '2,847 watching now'}
              </span>
            </motion.div>

            {/* Main Headline - Responsive sizing */}
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black text-white mb-3 md:mb-4 hero-text-shadow leading-tight">
              {currentContent.headline}
            </h1>

            {/* Subheadline - Responsive sizing */}
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-yellow-400 font-bold mb-3 md:mb-4 hero-text-shadow">
              {currentContent.subheadline}
            </p>

            {/* Description - Responsive sizing */}
            <p className="text-sm sm:text-base md:text-lg text-white/90 mb-6 md:mb-8 hero-text-shadow max-w-2xl">
              {currentContent.description}
            </p>

            {/* CTA Buttons - Mobile optimized */}
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-start md:justify-center lg:justify-start">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={scrollToPricing}
                className="btn-premium text-sm sm:text-base md:text-lg px-4 py-2.5 md:px-6 md:py-3"
              >
                {currentContent.cta}
              </motion.button>

              {/* Secondary CTA - Mobile optimized */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-4 py-2.5 md:px-6 md:py-3 bg-white/10 backdrop-blur-md text-white font-semibold rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300 text-sm sm:text-base"
              >
                {language === 'fr-BE'
                  ? '✓ Installation 10 minutes'
                  : language === 'nl-BE'
                    ? '✓ 10 minuten installatie'
                    : '✓ 10 minute setup'}
              </motion.button>
            </div>

            {/* Features - Mobile optimized */}
            <div className="mt-6 md:mt-8 flex flex-wrap gap-3 md:gap-4 justify-start md:justify-center lg:justify-start">
              <div className="flex items-center space-x-1.5 md:space-x-2 text-white/80">
                <svg
                  className="w-4 h-4 md:w-5 md:h-5 text-green-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-xs md:text-sm font-medium">
                  {language === 'fr-BE'
                    ? 'Sans contrat'
                    : language === 'nl-BE'
                      ? 'Zonder contract'
                      : 'No contract'}
                </span>
              </div>
              <div className="flex items-center space-x-1.5 md:space-x-2 text-white/80">
                <svg
                  className="w-4 h-4 md:w-5 md:h-5 text-green-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-xs md:text-sm font-medium">
                  {language === 'fr-BE'
                    ? 'Garantie 7 jours'
                    : language === 'nl-BE'
                      ? '7 dagen garantie'
                      : '7-day guarantee'}
                </span>
              </div>
              <div className="flex items-center space-x-1.5 md:space-x-2 text-white/80">
                <svg
                  className="w-4 h-4 md:w-5 md:h-5 text-green-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-xs md:text-sm font-medium">
                  5000+ HD/4K
                </span>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-6 md:bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
        {heroSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => handleIndicatorClick(index)}
            className={`h-1.5 md:h-2 transition-all duration-300 rounded-full ${
              index === currentSlide
                ? 'w-6 md:w-8 bg-yellow-400'
                : 'w-1.5 md:w-2 bg-white/40 hover:bg-white/60'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
