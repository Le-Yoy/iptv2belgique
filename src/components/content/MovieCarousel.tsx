// src/components/content/MovieCarousel.tsx
'use client';

import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

interface MovieCarouselProps {
  language: 'fr-BE' | 'nl-BE' | 'en';
}

const movieSections = [
  {
    id: 'belgian-content',
    title: {
      'fr-BE': 'Cinéma Belge',
      'nl-BE': 'Belgische Cinema',
      en: 'Belgian Cinema',
    },
    movies: [
      '/assets/movie_posters/countries/belgium/Cargo- belgium.png',
      '/assets/movie_posters/countries/belgium/The shift- belgium.png',
      '/assets/movie_posters/countries/belgium/torpedo berlin- belgium.png',
      '/assets/movie_posters/countries/belgie/DETWAALF belgie.png',
      '/assets/movie_posters/countries/france/montecristo - france.png',
      '/assets/movie_posters/countries/france/trois mousquetaires - france.png',
    ],
  },
  {
    id: 'netflix-originals',
    title: {
      'fr-BE': 'Netflix Originals',
      'nl-BE': 'Netflix Originals',
      en: 'Netflix Originals',
    },
    movies: [
      '/assets/movie_posters/general/netflix/squid game netflix.png',
      '/assets/movie_posters/general/netflix/money heist netflix.png',
      '/assets/movie_posters/general/netflix/the crown netflix.png',
      '/assets/movie_posters/general/netflix/emily in paris netflix.png',
      '/assets/movie_posters/general/hbo/house of dragons hbo.png',
      '/assets/movie_posters/general/hbo/last of us hbo.png',
    ],
  },
  {
    id: 'disney-plus',
    title: {
      'fr-BE': 'Disney+ & Marvel',
      'nl-BE': 'Disney+ & Marvel',
      en: 'Disney+ & Marvel',
    },
    movies: [
      '/assets/movie_posters/general/disney/mandalorian disney.png',
      '/assets/movie_posters/general/disney/loki disney.png',
      '/assets/movie_posters/general/disney/ahsoka disney.png',
      '/assets/movie_posters/general/disney/for perc jackson disney.png',
      '/assets/movie_posters/general/movies/x men general.png',
      '/assets/movie_posters/general/movies/blade movie.png',
    ],
  },
  {
    id: 'prime-video',
    title: {
      'fr-BE': 'Prime Video',
      'nl-BE': 'Prime Video',
      en: 'Prime Video',
    },
    movies: [
      '/assets/movie_posters/general/amazon/the boys prime video.png',
      '/assets/movie_posters/general/amazon/fallout prime video.png',
      '/assets/movie_posters/general/amazon/lord of the rings prime video.png',
      '/assets/movie_posters/general/amazon/reacher prime video.png',
      '/assets/movie_posters/general/apple/ted lasso appletv.png',
      '/assets/movie_posters/general/apple/severance apple.png',
    ],
  },
];

export default function MovieCarousel({ language }: MovieCarouselProps) {
  const scrollRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});

  const scrollLeft = (sectionId: string) => {
    const container = scrollRefs.current[sectionId];
    if (container) {
      container.scrollBy({ left: -300, behavior: 'smooth' });
    }
  };

  const scrollRight = (sectionId: string) => {
    const container = scrollRefs.current[sectionId];
    if (container) {
      container.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-black">
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
              ? 'Dernières Sorties & Classiques'
              : language === 'nl-BE'
                ? 'Laatste Releases & Klassiekers'
                : 'Latest Releases & Classics'}
          </h2>
          <p className="text-xl text-gray-400">
            {language === 'fr-BE'
              ? 'Des milliers de films et séries à portée de main'
              : language === 'nl-BE'
                ? 'Duizenden films en series binnen handbereik'
                : 'Thousands of movies and series at your fingertips'}
          </p>
        </motion.div>

        {/* Movie Sections */}
        <div className="space-y-12">
          {movieSections.map((section, sectionIndex) => (
            <motion.div
              key={section.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: sectionIndex * 0.1 }}
              viewport={{ once: true }}
            >
              {/* Section Title */}
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold text-white">
                  {section.title[language]}
                </h3>

                {/* Desktop Navigation */}
                <div className="hidden md:flex space-x-2">
                  <button
                    onClick={() => scrollLeft(section.id)}
                    className="p-2 bg-white/10 hover:bg-white/20 rounded-lg transition-colors"
                    aria-label="Scroll left"
                  >
                    <svg
                      className="w-5 h-5 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 19l-7-7 7-7"
                      />
                    </svg>
                  </button>
                  <button
                    onClick={() => scrollRight(section.id)}
                    className="p-2 bg-white/10 hover:bg-white/20 rounded-lg transition-colors"
                    aria-label="Scroll right"
                  >
                    <svg
                      className="w-5 h-5 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Movie Carousel */}
              <div className="relative group">
                <div
                  ref={(el) => {
                    scrollRefs.current[section.id] = el;
                  }}
                  className="flex space-x-4 overflow-x-auto scroll-smooth-touch no-scrollbar pb-4"
                >
                  {section.movies.map((movie, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.05 }}
                      viewport={{ once: true, amount: 0.3 }}
                      whileHover={{ scale: 1.05, y: -10 }}
                      className="flex-shrink-0 cursor-pointer"
                    >
                      <div className="relative w-[150px] sm:w-[180px] lg:w-[200px] aspect-[2/3] rounded-lg overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-yellow-500/20 transition-all duration-300">
                        <Image
                          src={movie}
                          alt="Movie poster"
                          fill
                          className="object-cover"
                          sizes="(max-width: 640px) 150px, (max-width: 1024px) 180px, 200px"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                          <button className="w-full py-2 bg-yellow-500 text-black font-semibold rounded-lg hover:bg-yellow-400 transition-colors">
                            {language === 'fr-BE'
                              ? 'Regarder'
                              : language === 'nl-BE'
                                ? 'Bekijken'
                                : 'Watch'}
                          </button>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="text-gray-400 mb-6">
            {language === 'fr-BE'
              ? 'Plus de 10,000 films et séries disponibles'
              : language === 'nl-BE'
                ? 'Meer dan 10.000 films en series beschikbaar'
                : 'Over 10,000 movies and series available'}
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
              ? 'Accès Illimité Maintenant'
              : language === 'nl-BE'
                ? 'Onbeperkte Toegang Nu'
                : 'Unlimited Access Now'}
          </button>
        </motion.div>
      </div>
    </section>
  );
}
