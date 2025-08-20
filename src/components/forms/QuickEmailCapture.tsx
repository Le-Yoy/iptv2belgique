// src/components/forms/QuickEmailCapture.tsx
'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import EmailCaptureModal from '../modals/EmailCaptureModal';

interface QuickEmailCaptureProps {
  language: 'fr-BE' | 'nl-BE' | 'en';
}

export function QuickEmailCapture({ language }: QuickEmailCaptureProps) {
  const [email, setEmail] = useState('');
  const [showModal, setShowModal] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setShowModal(true);
    }
  };

  const texts = {
    'fr-BE': {
      title: 'Prêt à Transformer Votre Expérience TV?',
      subtitle: 'Rejoignez des milliers de Belges qui ont déjà fait le switch',
      placeholder: 'Entrez votre email pour commencer',
      button: "Obtenir l'Accès Instantané",
      guarantee: '✓ Installation 10 min • ✓ Garantie 7 jours • ✓ Support 24/7',
    },
    'nl-BE': {
      title: 'Klaar om Uw TV-Ervaring te Transformeren?',
      subtitle: 'Sluit u aan bij duizenden Belgen die al zijn overgestapt',
      placeholder: 'Voer uw e-mail in om te beginnen',
      button: 'Krijg Directe Toegang',
      guarantee:
        '✓ 10 min installatie • ✓ 7 dagen garantie • ✓ 24/7 ondersteuning',
    },
    en: {
      title: 'Ready to Transform Your TV Experience?',
      subtitle: 'Join thousands of Belgians who already made the switch',
      placeholder: 'Enter your email to get started',
      button: 'Get Instant Access',
      guarantee: '✓ 10 min setup • ✓ 7-day guarantee • ✓ 24/7 support',
    },
  };

  const t = texts[language];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-900 via-black to-gray-900">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-4">
            {t.title}
          </h2>
          <p className="text-xl text-gray-400 mb-8">{t.subtitle}</p>

          <form onSubmit={handleSubmit} className="max-w-md mx-auto mb-6">
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={t.placeholder}
                required
                className="flex-1 px-6 py-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-yellow-400 transition-colors"
              />
              <button type="submit" className="btn-premium whitespace-nowrap">
                {t.button}
              </button>
            </div>
          </form>

          <p className="text-sm text-gray-500">{t.guarantee}</p>
        </motion.div>
      </div>

      {showModal && (
        <EmailCaptureModal
          isOpen={showModal}
          onClose={() => setShowModal(false)}
          language={language}
        />
      )}
    </section>
  );
}

// src/components/layout/Footer.tsx
export function Footer({ language }: { language: 'fr-BE' | 'nl-BE' | 'en' }) {
  const texts = {
    'fr-BE': {
      about: 'À Propos',
      aboutText:
        'IPTV2Belgique est le service IPTV premium #1 en Belgique, offrant plus de 5000 chaînes en qualité HD/4K.',
      quickLinks: 'Liens Rapides',
      links: {
        pricing: 'Tarifs',
        channels: 'Chaînes',
        support: 'Support',
        setup: 'Installation',
      },
      legal: 'Légal',
      legalLinks: {
        privacy: 'Confidentialité',
        terms: 'Conditions',
        refund: 'Remboursement',
      },
      contact: 'Contact',
      contactInfo: {
        whatsapp: 'WhatsApp Support',
        email: 'support@iptv2belgique.be',
        hours: '24/7 Disponible',
      },
      copyright: '© 2025 IPTV2Belgique. Tous droits réservés.',
      disclaimer:
        "Service de connexion IPTV. L'utilisation est soumise aux lois locales.",
    },
    'nl-BE': {
      about: 'Over Ons',
      aboutText:
        'IPTV2Belgique is de #1 premium IPTV-service in België, met meer dan 5000 kanalen in HD/4K kwaliteit.',
      quickLinks: 'Snelle Links',
      links: {
        pricing: 'Prijzen',
        channels: 'Kanalen',
        support: 'Ondersteuning',
        setup: 'Installatie',
      },
      legal: 'Juridisch',
      legalLinks: {
        privacy: 'Privacy',
        terms: 'Voorwaarden',
        refund: 'Terugbetaling',
      },
      contact: 'Contact',
      contactInfo: {
        whatsapp: 'WhatsApp Ondersteuning',
        email: 'support@iptv2belgique.be',
        hours: '24/7 Beschikbaar',
      },
      copyright: '© 2025 IPTV2Belgique. Alle rechten voorbehouden.',
      disclaimer:
        'IPTV-verbindingsservice. Gebruik is onderworpen aan lokale wetten.',
    },
    en: {
      about: 'About',
      aboutText:
        "IPTV2Belgique is Belgium's #1 premium IPTV service, offering 5000+ channels in HD/4K quality.",
      quickLinks: 'Quick Links',
      links: {
        pricing: 'Pricing',
        channels: 'Channels',
        support: 'Support',
        setup: 'Setup',
      },
      legal: 'Legal',
      legalLinks: {
        privacy: 'Privacy',
        terms: 'Terms',
        refund: 'Refund',
      },
      contact: 'Contact',
      contactInfo: {
        whatsapp: 'WhatsApp Support',
        email: 'support@iptv2belgique.be',
        hours: '24/7 Available',
      },
      copyright: '© 2025 IPTV2Belgique. All rights reserved.',
      disclaimer: 'IPTV connection service. Usage subject to local laws.',
    },
  };

  const t = texts[language];

  return (
    <footer className="bg-black border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <div className="flex items-baseline mb-4">
              <span className="text-2xl font-black text-white">IPTV</span>
              <span className="text-2xl font-black gradient-text">2</span>
              <span className="text-sm font-light text-white tracking-wider ml-1">
                BELGIQUE
              </span>
            </div>
            <p className="text-gray-400 text-sm">{t.aboutText}</p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">{t.quickLinks}</h3>
            <ul className="space-y-2">
              {Object.entries(t.links).map(([key, value]) => (
                <li key={key}>
                  <a
                    href={`#${key}`}
                    className="text-gray-400 hover:text-yellow-400 transition-colors text-sm"
                  >
                    {value}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-white font-semibold mb-4">{t.legal}</h3>
            <ul className="space-y-2">
              {Object.entries(t.legalLinks).map(([key, value]) => (
                <li key={key}>
                  <a
                    href={`/${key}`}
                    className="text-gray-400 hover:text-yellow-400 transition-colors text-sm"
                  >
                    {value}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4">{t.contact}</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://wa.me/32470123456"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-green-400 transition-colors text-sm"
                >
                  {t.contactInfo.whatsapp}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${t.contactInfo.email}`}
                  className="text-gray-400 hover:text-yellow-400 transition-colors text-sm"
                >
                  {t.contactInfo.email}
                </a>
              </li>
              <li className="text-gray-400 text-sm">{t.contactInfo.hours}</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm text-center md:text-left">
              {t.copyright}
            </p>
            <p className="text-gray-600 text-xs text-center md:text-right">
              {t.disclaimer}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default QuickEmailCapture;
