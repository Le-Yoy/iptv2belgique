// src/components/content/SportsSection.tsx
'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

interface SportsSectionProps {
  language: 'fr-BE' | 'nl-BE' | 'en';
}

const sportsContent = [
  {
    id: 'jupiler-league',
    image:
      '/assets/sports/football/belgium/standard de liège players on the pitch.png',
    title: {
      'fr-BE': 'Jupiler Pro League',
      'nl-BE': 'Jupiler Pro League',
      en: 'Jupiler Pro League',
    },
    description: {
      'fr-BE': 'Tous les matchs en direct et en 4K',
      'nl-BE': 'Alle wedstrijden live en in 4K',
      en: 'All matches live and in 4K',
    },
    teams: ['Club Brugge', 'Anderlecht', 'Standard', 'Genk', 'Antwerp'],
  },
  {
    id: 'champions-league',
    image: '/assets/sports/football/belgium/club brugge - champions league.png',
    title: {
      'fr-BE': 'Champions League',
      'nl-BE': 'Champions League',
      en: 'Champions League',
    },
    description: {
      'fr-BE': 'Chaque match, chaque but',
      'nl-BE': 'Elke wedstrijd, elk doelpunt',
      en: 'Every match, every goal',
    },
  },
  {
    id: 'cycling',
    image: '/assets/sports/cycling/cycling - belgium .png',
    title: {
      'fr-BE': 'Cyclisme Pro',
      'nl-BE': 'Wielrennen',
      en: 'Pro Cycling',
    },
    description: {
      'fr-BE': 'Tour de France, Ronde van Vlaanderen',
      'nl-BE': 'Tour de France, Ronde van Vlaanderen',
      en: 'Tour de France, Tour of Flanders',
    },
  },
  {
    id: 'formula1',
    image: '/assets/sports/formula/Formula 1 - grand prix.png',
    title: {
      'fr-BE': 'Formula 1',
      'nl-BE': 'Formule 1',
      en: 'Formula 1',
    },
    description: {
      'fr-BE': 'Chaque Grand Prix en direct',
      'nl-BE': 'Elke Grand Prix live',
      en: 'Every Grand Prix live',
    },
  },
  {
    id: 'ufc',
    image: '/assets/sports/mma/mma - ufc hero section ring .png',
    title: {
      'fr-BE': 'UFC & MMA',
      'nl-BE': 'UFC & MMA',
      en: 'UFC & MMA',
    },
    description: {
      'fr-BE': 'Pay-Per-View inclus',
      'nl-BE': 'Pay-Per-View inbegrepen',
      en: 'Pay-Per-View included',
    },
  },
  {
    id: 'tennis',
    image: '/assets/sports/tennis/tennis - dark hero section image.png',
    title: {
      'fr-BE': 'Tennis ATP/WTA',
      'nl-BE': 'Tennis ATP/WTA',
      en: 'Tennis ATP/WTA',
    },
    description: {
      'fr-BE': 'Tous les tournois du Grand Chelem',
      'nl-BE': 'Alle Grand Slam toernooien',
      en: 'All Grand Slam tournaments',
    },
  },
];

export default function SportsSection({ language }: SportsSectionProps) {
  return (
    <section id="sports" className="py-20 px-4 sm:px-6 lg:px-8 bg-black">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-4">
            {language === 'fr-BE'
              ? 'Le Paradis du Sport'
              : language === 'nl-BE'
                ? 'Sport Paradijs'
                : 'Sports Paradise'}
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            {language === 'fr-BE'
              ? 'Regardez chaque match, chaque course, chaque combat en qualité Ultra HD'
              : language === 'nl-BE'
                ? 'Bekijk elke wedstrijd, elke race, elk gevecht in Ultra HD kwaliteit'
                : 'Watch every match, every race, every fight in Ultra HD quality'}
          </p>
        </motion.div>

        {/* Sports Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sportsContent.map((sport, index) => (
            <motion.div
              key={sport.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.03 }}
              className="group cursor-pointer"
            >
              <div className="relative h-64 rounded-2xl overflow-hidden">
                <Image
                  src={sport.image}
                  alt={sport.title[language]}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />

                {/* Content Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {sport.title[language]}
                  </h3>
                  <p className="text-gray-300 mb-3">
                    {sport.description[language]}
                  </p>

                  {sport.teams && (
                    <div className="flex flex-wrap gap-2">
                      {sport.teams.slice(0, 3).map((team) => (
                        <span
                          key={team}
                          className="text-xs bg-white/20 backdrop-blur-sm px-2 py-1 rounded-full text-white/90"
                        >
                          {team}
                        </span>
                      ))}
                      {sport.teams.length > 3 && (
                        <span className="text-xs bg-yellow-500/20 backdrop-blur-sm px-2 py-1 rounded-full text-yellow-400">
                          +{sport.teams.length - 3}
                        </span>
                      )}
                    </div>
                  )}
                </div>

                {/* Hover Effect */}
                <div className="absolute inset-0 bg-yellow-500/0 group-hover:bg-yellow-500/10 transition-colors duration-300" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-gray-400 mb-6">
            {language === 'fr-BE'
              ? 'Plus de 500 chaînes sportives disponibles'
              : language === 'nl-BE'
                ? 'Meer dan 500 sportkanalen beschikbaar'
                : 'Over 500 sports channels available'}
          </p>
          <button
            onClick={() =>
              document
                .getElementById('pricing')
                ?.scrollIntoView({ behavior: 'smooth' })
            }
            className="btn-premium"
          >
            {language === 'fr-BE'
              ? 'Accéder à Tous les Sports →'
              : language === 'nl-BE'
                ? 'Toegang tot Alle Sporten →'
                : 'Access All Sports →'}
          </button>
        </motion.div>
      </div>
    </section>
  );
}
