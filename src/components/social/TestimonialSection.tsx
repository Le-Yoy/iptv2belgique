// src/components/social/TestimonialSection.tsx
'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

interface TestimonialSectionProps {
  language: 'fr-BE' | 'nl-BE' | 'en';
}

interface Testimonial {
  id: number;
  name: string;
  location: string;
  country: string;
  avatar: string;
  plan: string;
  message: {
    'fr-BE': string;
    'nl-BE': string;
    en: string;
  };
  timestamp: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Michel',
    location: 'Lyon',
    country: '🇫🇷',
    avatar: '/avatars/michel-avatar.jpeg',
    plan: '12 Mois',
    message: {
      'fr-BE':
        'Incroyable! Je regarde tous les matchs du PSG en 4K. Ma famille adore Disney+ inclus. Installation en 5 minutes! Meilleur que mon ancien abonnement Canal+. 👏',
      'nl-BE':
        'Ongelooflijk! Ik kijk alle PSG wedstrijden in 4K. Mijn familie houdt van Disney+ inbegrepen. Installatie in 5 minuten! Beter dan mijn oude Canal+ abonnement. 👏',
      en: 'Incredible! I watch all PSG matches in 4K. My family loves Disney+ included. Setup in 5 minutes! Better than my old Canal+ subscription. 👏',
    },
    timestamp: '14:32',
    rating: 5,
  },
  {
    id: 2,
    name: 'Sophie',
    location: 'Brussels',
    country: '🇧🇪',
    avatar: '/avatars/sophie-avatar.jpeg',
    plan: '6 Mois',
    message: {
      'fr-BE':
        "Parfait pour la Premier League! Fonctionne sur tous mes appareils - TV, iPad, téléphone. Le support a répondu en 5 minutes quand j'avais une question. Meilleur service IPTV que j'ai essayé! 🎯",
      'nl-BE':
        'Perfect voor Premier League! Werkt op al mijn apparaten - TV, iPad, telefoon. Ondersteuning antwoordde in 5 minuten toen ik een vraag had. Beste IPTV-service die ik heb geprobeerd! 🎯',
      en: "Perfect for Premier League! Works on all my devices - TV, iPad, phone. Support answered in 5 minutes when I had a question. Best IPTV service I've tried! 🎯",
    },
    timestamp: '09:45',
    rating: 5,
  },
  {
    id: 3,
    name: 'Hans',
    location: 'Munich',
    country: '🇩🇪',
    avatar: '/avatars/hans-avatar.jpeg',
    plan: '12 Mois',
    message: {
      'fr-BE':
        'Bundesliga + Champions League en qualité supérieure! Très fiable, aucune interruption. Le prix est imbattable pour cette qualité. Je le recommande à tous! 💪',
      'nl-BE':
        'Bundesliga + Champions League in topkwaliteit! Zeer betrouwbaar, geen onderbrekingen. De prijs is onverslaanbaar voor deze kwaliteit. Raad het iedereen aan! 💪',
      en: 'Bundesliga + Champions League in top quality! Very reliable, no interruptions. The price is unbeatable for this quality. Recommend it to everyone! 💪',
    },
    timestamp: '20:15',
    rating: 5,
  },
  {
    id: 4,
    name: 'Emma',
    location: 'Amsterdam',
    country: '🇳🇱',
    avatar: '/avatars/emma-avatar.jpeg',
    plan: '12 Mois',
    message: {
      'fr-BE':
        "Toutes les chaînes néerlandaises + Netflix/Disney en un! Toute ma famille l'utilise. Installation super facile. Bien mieux que Ziggo! 🚀",
      'nl-BE':
        'Alle Nederlandse zenders + Netflix/Disney in één! Mijn hele familie gebruikt het. Super makkelijke installatie. Veel beter dan Ziggo! 🚀',
      en: 'All Dutch channels + Netflix/Disney in one! My whole family uses it. Super easy installation. Much better than Ziggo! 🚀',
    },
    timestamp: '17:20',
    rating: 5,
  },
  {
    id: 5,
    name: 'Thomas',
    location: 'Geneva',
    country: '🇨🇭',
    avatar: '/avatars/thomas-avatar.jpeg',
    plan: '6 Mois',
    message: {
      'fr-BE':
        "UFC, Boxe, F1 - tous les sports en 4K! Plus d'abonnements coûteux. Installation en 8 minutes. Client #5234 et fier! Ça vaut chaque centime! 🥊",
      'nl-BE':
        'UFC, Boksen, F1 - alle sporten in 4K! Geen dure abonnementen meer. Installatie duurde 8 minuten. Klant #5234 en trots! Elke cent waard! 🥊',
      en: 'UFC, Boxing, F1 - all sports in 4K! No more expensive subscriptions. Setup took 8 minutes. Customer #5234 and proud! Worth every cent! 🥊',
    },
    timestamp: '22:48',
    rating: 5,
  },
  {
    id: 6,
    name: 'Lisa',
    location: 'Antwerp',
    country: '🇧🇪',
    avatar: '/avatars/lisa-avatar.jpeg',
    plan: '3 Mois',
    message: {
      'fr-BE':
        "3 générations l'utilisent! Grand-père regarde les nouvelles, les enfants adorent Disney, moi je profite de Netflix. Un abonnement pour tous. Valeur incroyable! Le support parle aussi néerlandais! 🎉",
      'nl-BE':
        '3 generaties gebruiken het! Opa kijkt nieuws, kinderen houden van Disney, ik geniet van Netflix. Één abonnement voor iedereen. Geweldige waarde! Ondersteuning spreekt ook Nederlands! 🎉',
      en: '3 generations using it! Grandpa watches news, kids love Disney, I enjoy Netflix. One subscription for everyone. Amazing value! Support speaks Dutch too! 🎉',
    },
    timestamp: '11:30',
    rating: 5,
  },
];

const sectionTexts = {
  'fr-BE': {
    title: 'Ce Que Disent Nos Clients',
    subtitle:
      "Vraies conversations d'utilisateurs heureux d'IPTV2Belgique à travers l'Europe",
    trustBadges: {
      encryption: 'Chiffrement 256-bit',
      guarantee: 'Garantie Remboursement',
      activation: 'Activation Instantanée',
      servers: 'Serveurs EU',
    },
  },
  'nl-BE': {
    title: 'Wat Onze Klanten Zeggen',
    subtitle:
      'Echte gesprekken van tevreden IPTV2Belgique gebruikers door heel Europa',
    trustBadges: {
      encryption: '256-bit Versleuteling',
      guarantee: 'Geld-Terug-Garantie',
      activation: 'Directe Activering',
      servers: 'EU Servers',
    },
  },
  en: {
    title: 'What Our Customers Say',
    subtitle: 'Real conversations from happy IPTV2Belgique users across Europe',
    trustBadges: {
      encryption: '256-bit Encryption',
      guarantee: 'Money-Back Guarantee',
      activation: 'Instant Activation',
      servers: 'EU Servers',
    },
  },
};

export default function TestimonialSection({
  language,
}: TestimonialSectionProps) {
  const texts = sectionTexts[language];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/50">
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
            {texts.title}
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            {texts.subtitle}
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden hover:border-indigo-500/30 transition-all duration-300 group"
            >
              {/* WhatsApp Style Header */}
              <div className="bg-gradient-to-r from-emerald-700 to-emerald-600 p-4 flex items-center gap-3">
                <div className="relative">
                  {/* Fallback colored circle */}
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-indigo-400 to-purple-400 flex items-center justify-center text-white font-bold">
                    {testimonial.name[0]}
                  </div>
                  {/* Real customer photo */}
                  <Image
                    src={testimonial.avatar}
                    alt={`${testimonial.name} avatar`}
                    width={48}
                    height={48}
                    className="absolute inset-0 w-12 h-12 rounded-full object-cover"
                    priority={index < 3}
                  />
                  <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-emerald-400 rounded-full border-2 border-emerald-600" />
                </div>
                <div className="flex-1">
                  <div className="font-semibold text-white flex items-center gap-2">
                    {testimonial.name} - {testimonial.location}{' '}
                    {testimonial.country}
                  </div>
                  <div className="text-emerald-100 text-sm">Online</div>
                </div>
              </div>

              {/* Message Content */}
              <div className="p-6">
                {/* Chat Bubble */}
                <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-2xl rounded-tl-none p-4 mb-4 relative">
                  <p className="text-slate-200 leading-relaxed">
                    {testimonial.message[language]}
                  </p>
                  <div className="text-right mt-2 text-xs text-slate-400 flex items-center justify-end gap-1">
                    {testimonial.timestamp}
                    <span className="text-emerald-400">✓✓</span>
                  </div>
                </div>

                {/* Rating and Plan */}
                <div className="flex items-center justify-between">
                  <div className="flex gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <span key={i} className="text-yellow-400 text-lg">
                        ⭐
                      </span>
                    ))}
                  </div>
                  <div className="text-sm text-slate-400 bg-white/5 px-3 py-1 rounded-full">
                    {testimonial.plan} Plan
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust Badges */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-8 flex-wrap justify-center">
            <div className="flex items-center gap-2 text-slate-400">
              <span className="text-2xl">🔒</span>
              <span>{texts.trustBadges.encryption}</span>
            </div>
            <div className="flex items-center gap-2 text-slate-400">
              <span className="text-2xl">💯</span>
              <span>{texts.trustBadges.guarantee}</span>
            </div>
            <div className="flex items-center gap-2 text-slate-400">
              <span className="text-2xl">⚡</span>
              <span>{texts.trustBadges.activation}</span>
            </div>
            <div className="flex items-center gap-2 text-slate-400">
              <span className="text-2xl">🌍</span>
              <span>{texts.trustBadges.servers}</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
