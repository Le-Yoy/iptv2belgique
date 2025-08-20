// src/components/faq/FAQSection.tsx
'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

interface FAQSectionProps {
  language: 'fr-BE' | 'nl-BE' | 'en';
}

const faqData = {
  'fr-BE': {
    title: 'Questions Fréquemment Posées',
    subtitle: 'Tout ce que vous devez savoir sur IPTV2Belgique',
    items: [
      {
        id: 1,
        question: "Qu'est-ce que l'IPTV et comment ça fonctionne?",
        answer:
          "L'IPTV (Internet Protocol Television) diffuse le contenu TV via internet au lieu des câbles traditionnels. Avec IPTV2Belgique, vous obtenez un accès instantané à 5000+ chaînes en direct et contenu à la demande via n'importe quelle connexion internet. Installez simplement notre app, entrez vos identifiants, et commencez à regarder en quelques minutes!",
      },
      {
        id: 2,
        question: 'Quels appareils sont compatibles?',
        answer:
          'IPTV2Belgique fonctionne sur TOUS les appareils: Smart TVs (Samsung, LG, Sony), boîtiers Android TV, Amazon Fire Stick, Apple TV, iPhone/iPad, téléphones/tablettes Android, ordinateurs Windows/Mac, boîtiers MAG, et plus. Si ça se connecte à internet, ça fonctionne!',
      },
      {
        id: 3,
        question: 'Y a-t-il un essai gratuit disponible?',
        answer:
          "Nous offrons une garantie de remboursement de 24 heures au lieu d'un essai gratuit. Cela garantit des utilisateurs sérieux seulement et maintient notre qualité de service premium. Si vous n'êtes pas 100% satisfait dans les premières 24 heures, nous rembourserons votre paiement immédiatement!",
      },
      {
        id: 4,
        question: 'Quelles chaînes et contenu offrez-vous?',
        answer:
          '5000+ chaînes en direct incluant tout le contenu premium: Netflix, Disney+, HBO Max, Amazon Prime, toutes les ligues sportives (Premier League, Champions League, NBA, NFL, UFC), chaînes locales pour la France, Belgique, Pays-Bas, Allemagne, actualités internationales (BBC, CNN), chaînes enfants, et des milliers de films/séries à la demande. Mis à jour quotidiennement!',
      },
      {
        id: 5,
        question: 'Quelle vitesse internet ai-je besoin?',
        answer:
          'Minimum 10 Mbps pour le contenu HD, 25 Mbps pour le streaming 4K. La plupart des foyers européens ont une vitesse suffisante. Notre technologie de streaming adaptatif ajuste automatiquement la qualité selon votre connexion pour assurer une lecture fluide sans mise en mémoire tampon.',
      },
    ],
    contactTitle: 'Encore des Questions?',
    contactSubtitle: 'Notre équipe support est disponible 24/7 pour vous aider',
    whatsappButton: 'Support WhatsApp',
    liveChatButton: 'Chat en Direct',
  },
  'nl-BE': {
    title: 'Veelgestelde Vragen',
    subtitle: 'Alles wat u moet weten over IPTV2Belgique',
    items: [
      {
        id: 1,
        question: 'Wat is IPTV en hoe werkt het?',
        answer:
          'IPTV (Internet Protocol Television) levert TV-inhoud via internet in plaats van traditionele kabels. Met IPTV2Belgique krijgt u directe toegang tot 5000+ live kanalen en on-demand inhoud via elke internetverbinding. Installeer gewoon onze app, voer uw inloggegevens in, en begin binnen enkele minuten te kijken!',
      },
      {
        id: 2,
        question: 'Welke apparaten zijn compatibel?',
        answer:
          'IPTV2Belgique werkt op ALLE apparaten: Smart TVs (Samsung, LG, Sony), Android TV boxes, Amazon Fire Stick, Apple TV, iPhone/iPad, Android telefoons/tablets, Windows/Mac computers, MAG boxes, en meer. Als het verbinding kan maken met internet, werkt het!',
      },
      {
        id: 3,
        question: 'Is er een gratis proefperiode beschikbaar?',
        answer:
          'We bieden een 24-uurs geld-terug-garantie in plaats van een gratis proefperiode. Dit zorgt voor alleen serieuze gebruikers en behoudt onze premium servicekwaliteit. Als u niet 100% tevreden bent binnen de eerste 24 uur, betalen we uw betaling onmiddellijk terug!',
      },
      {
        id: 4,
        question: 'Welke kanalen en inhoud biedt u aan?',
        answer:
          '5000+ live kanalen inclusief alle premium inhoud: Netflix, Disney+, HBO Max, Amazon Prime, alle sportcompetities (Premier League, Champions League, NBA, NFL, UFC), lokale kanalen voor Frankrijk, België, Nederland, Duitsland, internationaal nieuws (BBC, CNN), kinderkanalen, en duizenden films/series on-demand. Dagelijks bijgewerkt!',
      },
      {
        id: 5,
        question: 'Hoe snel moet mijn internet zijn?',
        answer:
          'Minimum 10 Mbps voor HD-inhoud, 25 Mbps voor 4K streaming. De meeste Europese huishoudens hebben voldoende snelheid. Onze adaptieve streaming technologie past automatisch de kwaliteit aan op basis van uw verbinding om soepele weergave zonder buffering te garanderen.',
      },
    ],
    contactTitle: 'Nog Vragen?',
    contactSubtitle: 'Ons supportteam is 24/7 beschikbaar om u te helpen',
    whatsappButton: 'WhatsApp Ondersteuning',
    liveChatButton: 'Live Chat',
  },
  en: {
    title: 'Frequently Asked Questions',
    subtitle: 'Everything you need to know about IPTV2Belgique',
    items: [
      {
        id: 1,
        question: 'What is IPTV and how does it work?',
        answer:
          'IPTV (Internet Protocol Television) delivers TV content over the internet instead of traditional cables. With IPTV2Belgique, you get instant access to 5000+ live channels and on-demand content through any internet connection. Simply install our app on your device, enter your credentials, and start watching in minutes!',
      },
      {
        id: 2,
        question: 'Which devices are compatible?',
        answer:
          'IPTV2Belgique works on ALL devices: Smart TVs (Samsung, LG, Sony), Android TV boxes, Amazon Fire Stick, Apple TV, iPhone/iPad, Android phones/tablets, Windows/Mac computers, MAG boxes, and more. If it connects to the internet, it works!',
      },
      {
        id: 3,
        question: 'Is there a free trial available?',
        answer:
          "We offer a 24-hour money-back guarantee instead of a free trial. This ensures serious users only and maintains our premium service quality. If you're not 100% satisfied within the first 24 hours, we'll refund your payment immediately - no questions asked!",
      },
      {
        id: 4,
        question: 'What channels and content do you offer?',
        answer:
          '5000+ live channels including all premium content: Netflix, Disney+, HBO Max, Amazon Prime, all sports leagues (Premier League, Champions League, NBA, NFL, UFC), local channels for France, Belgium, Netherlands, Germany, international news (BBC, CNN), kids channels, and thousands of movies/series on demand. Updated daily!',
      },
      {
        id: 5,
        question: 'How fast does my internet need to be?',
        answer:
          'Minimum 10 Mbps for HD content, 25 Mbps for 4K streaming. Most European households have sufficient speed. Our adaptive streaming technology automatically adjusts quality based on your connection to ensure smooth playback without buffering.',
      },
    ],
    contactTitle: 'Still Have Questions?',
    contactSubtitle:
      'Our support team is available 24/7 to help you get started',
    whatsappButton: 'WhatsApp Support',
    liveChatButton: 'Live Chat',
  },
};

export default function FAQSection({ language }: FAQSectionProps) {
  const [openItems, setOpenItems] = useState<number[]>([]);
  const content = faqData[language];

  const toggleItem = (id: number) => {
    setOpenItems((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-black mb-6 bg-gradient-to-r from-white via-indigo-200 to-purple-200 bg-clip-text text-transparent">
            {content.title}
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            {content.subtitle}
          </p>
        </motion.div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {content.items.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden hover:border-indigo-500/30 transition-all duration-300">
                <button
                  onClick={() => toggleItem(item.id)}
                  className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 hover:bg-white/5 transition-colors duration-300"
                >
                  <h3 className="text-lg font-semibold text-white pr-4">
                    {item.question}
                  </h3>
                  <ChevronDown
                    className={`w-5 h-5 text-indigo-400 flex-shrink-0 transition-transform duration-300 ${
                      openItems.includes(item.id) ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                <AnimatePresence>
                  {openItems.includes(item.id) && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                    >
                      <div className="px-6 pb-5">
                        <div className="pt-2 border-t border-white/5">
                          <p className="text-slate-300 leading-relaxed pt-4">
                            {item.answer}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-indigo-500/10 to-purple-500/10 backdrop-blur-xl border border-indigo-500/30 rounded-3xl p-8">
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
              {content.contactTitle}
            </h3>
            <p className="text-slate-300 mb-6">{content.contactSubtitle}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/33773436514"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105"
              >
                <span className="text-xl">📱</span>
                {content.whatsappButton}
              </a>
              <button className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 border border-white/20">
                <span className="text-xl">💬</span>
                {content.liveChatButton}
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
