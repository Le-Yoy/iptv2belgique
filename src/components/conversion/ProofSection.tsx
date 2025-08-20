// src/components/conversion/ProofSection.tsx
'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

interface ProofSectionProps {
  language: 'fr-BE' | 'nl-BE' | 'en';
}

const content = {
  'fr-BE': {
    title: 'Les Preuves Que Vous Demandez',
    subtitle: 'Données réelles. Résultats réels. Membres réels.',
    tabs: [
      { id: 'quality', label: 'Qualité Streaming' },
      { id: 'content', label: 'Contenu Disponible' },
      { id: 'savings', label: 'Économies Réelles' },
      { id: 'reliability', label: 'Fiabilité' },
    ],
    sections: {
      quality: {
        title: 'Qualité Sans Compromis',
        items: [
          { label: 'Résolution maximale', value: '8K Ultra HD (7680×4320)' },
          { label: 'Bitrate moyen', value: '50 Mbps constant' },
          { label: 'Latence moyenne', value: '<100ms (live sports)' },
          { label: 'Technologies', value: 'H.265/HEVC, HDR10, Dolby Vision' },
          { label: 'Audio', value: 'Dolby Atmos 7.1 surround' },
        ],
        proof:
          'Test en conditions réelles: Real Madrid vs Barcelona, 3.2 millions de viewers simultanés, 0% de perte de qualité.',
      },
      content: {
        title: 'Tout Est Vraiment Inclus',
        items: [
          { label: 'Chaînes totales', value: '5,247 chaînes HD/4K' },
          {
            label: 'Sports premium',
            value: 'BeIN 1-10, RMC Sport 1-8, Canal+ Sport',
          },
          {
            label: 'Ligues incluses',
            value:
              'Champions League, Premier League, La Liga, Serie A, Ligue 1',
          },
          { label: 'PPV 2024', value: '127 événements (valeur 6,350€)' },
          { label: 'VOD', value: '50,000+ films et séries' },
        ],
        proof:
          'Accès vérifié quotidiennement. Aucun contenu géo-bloqué. Aucune restriction.',
      },
      savings: {
        title: 'Vos Économies Calculées',
        items: [
          { label: 'Coût traditionnel/mois', value: '145€' },
          { label: 'Notre prix/mois', value: '9.90€' },
          { label: 'Économie mensuelle', value: '135.10€' },
          { label: 'Économie annuelle', value: '1,621.20€' },
          { label: 'Économie sur 3 ans', value: '4,863.60€' },
        ],
        proof:
          'Basé sur les tarifs officiels 2024. Sans compter les PPV additionnels.',
      },
      reliability: {
        title: 'Infrastructure de Confiance',
        items: [
          { label: 'Uptime 2024', value: '99.97% (26 min downtime/an)' },
          { label: 'Serveurs actifs', value: '127 serveurs CDN mondiaux' },
          { label: 'Capacité', value: '500,000 connexions simultanées' },
          { label: 'Backup', value: 'Triple redondance automatique' },
          { label: 'Support', value: 'Réponse moyenne 3 minutes' },
        ],
        proof: 'Monitoring 24/7 par StatusCake. Rapports publics disponibles.',
      },
    },
  },
  'nl-BE': {
    title: 'Het Bewijs Dat U Vraagt',
    subtitle: 'Echte data. Echte resultaten. Echte leden.',
    tabs: [
      { id: 'quality', label: 'Streaming Kwaliteit' },
      { id: 'content', label: 'Beschikbare Inhoud' },
      { id: 'savings', label: 'Echte Besparingen' },
      { id: 'reliability', label: 'Betrouwbaarheid' },
    ],
    sections: {
      quality: {
        title: 'Kwaliteit Zonder Compromis',
        items: [
          { label: 'Maximale resolutie', value: '8K Ultra HD (7680×4320)' },
          { label: 'Gemiddelde bitrate', value: '50 Mbps constant' },
          { label: 'Gemiddelde latentie', value: '<100ms (live sport)' },
          { label: 'Technologieën', value: 'H.265/HEVC, HDR10, Dolby Vision' },
          { label: 'Audio', value: 'Dolby Atmos 7.1 surround' },
        ],
        proof:
          'Test in echte omstandigheden: Real Madrid vs Barcelona, 3.2 miljoen gelijktijdige kijkers, 0% kwaliteitsverlies.',
      },
      content: {
        title: 'Alles Is Echt Inbegrepen',
        items: [
          { label: 'Totale kanalen', value: '5,247 HD/4K kanalen' },
          {
            label: 'Premium sport',
            value: 'BeIN 1-10, RMC Sport 1-8, Canal+ Sport',
          },
          {
            label: 'Inbegrepen leagues',
            value:
              'Champions League, Premier League, La Liga, Serie A, Ligue 1',
          },
          { label: 'PPV 2024', value: '127 evenementen (waarde 6,350€)' },
          { label: 'VOD', value: '50,000+ films en series' },
        ],
        proof:
          'Dagelijks geverifieerde toegang. Geen geo-geblokkeerde inhoud. Geen beperkingen.',
      },
      savings: {
        title: 'Uw Berekende Besparingen',
        items: [
          { label: 'Traditionele kosten/maand', value: '145€' },
          { label: 'Onze prijs/maand', value: '9.90€' },
          { label: 'Maandelijkse besparing', value: '135.10€' },
          { label: 'Jaarlijkse besparing', value: '1,621.20€' },
          { label: 'Besparing over 3 jaar', value: '4,863.60€' },
        ],
        proof: 'Gebaseerd op officiële tarieven 2024. Exclusief extra PPV.',
      },
      reliability: {
        title: 'Betrouwbare Infrastructuur',
        items: [
          { label: 'Uptime 2024', value: '99.97% (26 min downtime/jaar)' },
          { label: 'Actieve servers', value: '127 wereldwijde CDN servers' },
          { label: 'Capaciteit', value: '500,000 gelijktijdige verbindingen' },
          { label: 'Backup', value: 'Drievoudige automatische redundantie' },
          { label: 'Support', value: 'Gemiddelde responstijd 3 minuten' },
        ],
        proof:
          '24/7 monitoring door StatusCake. Publieke rapporten beschikbaar.',
      },
    },
  },
  en: {
    title: 'The Proof You Asked For',
    subtitle: 'Real data. Real results. Real members.',
    tabs: [
      { id: 'quality', label: 'Streaming Quality' },
      { id: 'content', label: 'Available Content' },
      { id: 'savings', label: 'Real Savings' },
      { id: 'reliability', label: 'Reliability' },
    ],
    sections: {
      quality: {
        title: 'Quality Without Compromise',
        items: [
          { label: 'Maximum resolution', value: '8K Ultra HD (7680×4320)' },
          { label: 'Average bitrate', value: '50 Mbps constant' },
          { label: 'Average latency', value: '<100ms (live sports)' },
          { label: 'Technologies', value: 'H.265/HEVC, HDR10, Dolby Vision' },
          { label: 'Audio', value: 'Dolby Atmos 7.1 surround' },
        ],
        proof:
          'Real-world test: Real Madrid vs Barcelona, 3.2 million simultaneous viewers, 0% quality loss.',
      },
      content: {
        title: 'Everything Really Is Included',
        items: [
          { label: 'Total channels', value: '5,247 HD/4K channels' },
          {
            label: 'Premium sports',
            value: 'BeIN 1-10, RMC Sport 1-8, Canal+ Sport',
          },
          {
            label: 'Included leagues',
            value:
              'Champions League, Premier League, La Liga, Serie A, Ligue 1',
          },
          { label: 'PPV 2024', value: '127 events (value 6,350€)' },
          { label: 'VOD', value: '50,000+ movies and series' },
        ],
        proof:
          'Daily verified access. No geo-blocked content. No restrictions.',
      },
      savings: {
        title: 'Your Calculated Savings',
        items: [
          { label: 'Traditional cost/month', value: '145€' },
          { label: 'Our price/month', value: '9.90€' },
          { label: 'Monthly savings', value: '135.10€' },
          { label: 'Annual savings', value: '1,621.20€' },
          { label: '3-year savings', value: '4,863.60€' },
        ],
        proof: 'Based on official 2024 rates. Not including additional PPVs.',
      },
      reliability: {
        title: 'Trusted Infrastructure',
        items: [
          { label: 'Uptime 2024', value: '99.97% (26 min downtime/year)' },
          { label: 'Active servers', value: '127 global CDN servers' },
          { label: 'Capacity', value: '500,000 simultaneous connections' },
          { label: 'Backup', value: 'Triple automatic redundancy' },
          { label: 'Support', value: 'Average response 3 minutes' },
        ],
        proof: '24/7 monitoring by StatusCake. Public reports available.',
      },
    },
  },
};

export default function ProofSection({ language }: ProofSectionProps) {
  const [activeTab, setActiveTab] = useState('quality');
  const currentContent = content[language];
  const activeSection =
    currentContent.sections[activeTab as keyof typeof currentContent.sections];

  return (
    <section id="proof-section" className="py-16 md:py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-4">
            {currentContent.title}
          </h2>
          <p className="text-lg md:text-xl text-gray-400">
            {currentContent.subtitle}
          </p>
        </motion.div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {currentContent.tabs.map((tab) => (
            <motion.button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-4 py-2 md:px-6 md:py-3 rounded-xl font-semibold transition-all duration-300 ${
                activeTab === tab.id
                  ? 'bg-gradient-to-r from-yellow-400 to-orange-500 text-black'
                  : 'bg-white/10 text-white hover:bg-white/20'
              }`}
            >
              {tab.label}
            </motion.button>
          ))}
        </div>

        {/* Active Tab Content */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
          className="bg-gradient-to-br from-gray-900 to-black rounded-2xl p-6 md:p-8 border border-gray-800"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
            {activeSection.title}
          </h3>

          <div className="grid md:grid-cols-2 gap-4 mb-8">
            {activeSection.items.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                className="flex justify-between items-center bg-white/5 rounded-lg p-4"
              >
                <span className="text-gray-400 text-sm md:text-base">
                  {item.label}
                </span>
                <span className="text-white font-bold text-sm md:text-base text-right ml-4">
                  {item.value}
                </span>
              </motion.div>
            ))}
          </div>

          {/* Proof Statement */}
          <div className="bg-gradient-to-r from-yellow-500/20 to-orange-500/20 rounded-xl p-4 border border-yellow-500/30">
            <div className="flex items-start space-x-3">
              <div className="text-yellow-400 text-xl">✓</div>
              <p className="text-white/90 text-sm md:text-base">
                {activeSection.proof}
              </p>
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
          <button
            onClick={() => {
              const pricingSection = document.getElementById('pricing');
              if (pricingSection) {
                pricingSection.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="btn-premium text-base md:text-lg"
          >
            {language === 'fr-BE'
              ? 'Commencer Maintenant →'
              : language === 'nl-BE'
                ? 'Nu Beginnen →'
                : 'Start Now →'}
          </button>
        </motion.div>
      </div>
    </section>
  );
}
