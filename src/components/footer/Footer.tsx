// src/components/footer/Footer.tsx
'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

interface FooterProps {
  language: 'fr-BE' | 'nl-BE' | 'en';
  onLanguageChange?: (lang: 'fr-BE' | 'nl-BE' | 'en') => void;
}

const footerTexts = {
  'fr-BE': {
    brand: {
      description:
        "Service IPTV premium d'Europe avec 5000+ chaînes en qualité 4K/8K. Sans contrats, installation instantanée, support 24/7.",
      customers: 'Clients Satisfaits',
      uptime: 'Disponibilité',
    },
    quickLinks: {
      title: 'Liens Rapides',
      pricing: 'Plans Tarifaires',
      channels: 'Liste des Chaînes',
      support: "Centre d'Aide",
      setup: "Guide d'Installation",
      devices: 'Appareils Compatibles',
    },
    legal: {
      title: 'Légal',
      privacy: 'Politique de Confidentialité',
      terms: "Conditions d'Utilisation",
      refund: 'Politique de Remboursement',
      gdpr: 'Droits RGPD',
      cookies: 'Politique des Cookies',
    },
    contact: {
      title: 'Nous Contacter',
      whatsapp: 'Support WhatsApp',
      liveChat: 'Chat en Direct',
      email: 'Support Email',
      available: '24/7 Disponible',
      paymentMethods: 'Méthodes de Paiement Sécurisées',
    },
    bottom: {
      copyright: 'Tous droits réservés. | Client #',
      counting: 'et ça continue!',
      language: 'Langue:',
      trustBadges: {
        ssl: 'SSL Sécurisé',
        gdpr: 'Conforme RGPD',
        uptime: '99.9% Disponibilité',
        ddos: 'Protection DDoS',
      },
    },
  },
  'nl-BE': {
    brand: {
      description:
        "Europa's premium IPTV-service met 5000+ kanalen in 4K/8K kwaliteit. Geen contracten, directe installatie, 24/7 ondersteuning.",
      customers: 'Tevreden Klanten',
      uptime: 'Uptime',
    },
    quickLinks: {
      title: 'Snelle Links',
      pricing: 'Prijsplannen',
      channels: 'Kanalenlijst',
      support: 'Ondersteuningscentrum',
      setup: 'Installatiegids',
      devices: 'Compatibele Apparaten',
    },
    legal: {
      title: 'Juridisch',
      privacy: 'Privacybeleid',
      terms: 'Gebruiksvoorwaarden',
      refund: 'Terugbetalingsbeleid',
      gdpr: 'AVG Rechten',
      cookies: 'Cookiebeleid',
    },
    contact: {
      title: 'Contact Opnemen',
      whatsapp: 'WhatsApp Ondersteuning',
      liveChat: 'Live Chat',
      email: 'Email Ondersteuning',
      available: '24/7 Beschikbaar',
      paymentMethods: 'Veilige Betaalmethoden',
    },
    bottom: {
      copyright: 'Alle rechten voorbehouden. | Klant #',
      counting: 'en nog steeds groeiend!',
      language: 'Taal:',
      trustBadges: {
        ssl: 'SSL Beveiligd',
        gdpr: 'AVG Conform',
        uptime: '99.9% Uptime',
        ddos: 'DDoS Beschermd',
      },
    },
  },
  en: {
    brand: {
      description:
        "Europe's premium IPTV service with 5000+ channels in 4K/8K quality. No contracts, instant setup, 24/7 support.",
      customers: 'Happy Customers',
      uptime: 'Uptime',
    },
    quickLinks: {
      title: 'Quick Links',
      pricing: 'Pricing Plans',
      channels: 'Channel List',
      support: 'Support Center',
      setup: 'Setup Guide',
      devices: 'Compatible Devices',
    },
    legal: {
      title: 'Legal',
      privacy: 'Privacy Policy',
      terms: 'Terms of Service',
      refund: 'Refund Policy',
      gdpr: 'GDPR Rights',
      cookies: 'Cookie Policy',
    },
    contact: {
      title: 'Contact Us',
      whatsapp: 'WhatsApp Support',
      liveChat: 'Live Chat',
      email: 'Email Support',
      available: '24/7 Available',
      paymentMethods: 'Secure Payment Methods',
    },
    bottom: {
      copyright: 'All rights reserved. | Customer #',
      counting: 'and counting!',
      language: 'Language:',
      trustBadges: {
        ssl: 'SSL Secured',
        gdpr: 'GDPR Compliant',
        uptime: '99.9% Uptime',
        ddos: 'DDoS Protected',
      },
    },
  },
};

export default function Footer({ language, onLanguageChange }: FooterProps) {
  const currentYear = new Date().getFullYear();
  const texts = footerTexts[language];

  const languages = [
    { code: 'en', label: 'EN', flag: '🇬🇧' },
    { code: 'fr-BE', label: 'FR', flag: '🇧🇪' },
    { code: 'nl-BE', label: 'NL', flag: '🇧🇪' },
  ];

  const handleLanguageClick = (langCode: string) => {
    if (onLanguageChange) {
      onLanguageChange(langCode as 'fr-BE' | 'nl-BE' | 'en');
    }
  };

  return (
    <footer className="bg-slate-950 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-baseline mb-4">
              <span className="text-2xl font-black text-white">IPTV</span>
              <span className="text-2xl font-black gradient-text">2</span>
              <span className="text-sm font-light text-white tracking-wider ml-1">
                BELGIQUE
              </span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              {texts.brand.description}
            </p>
            <div className="flex gap-4 mt-6">
              <div className="text-slate-400">
                <span className="block text-2xl font-bold text-indigo-400">
                  5847+
                </span>
                <span className="text-xs">{texts.brand.customers}</span>
              </div>
              <div className="text-slate-400">
                <span className="block text-2xl font-bold text-purple-400">
                  99.9%
                </span>
                <span className="text-xs">{texts.brand.uptime}</span>
              </div>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-white font-semibold mb-4">
              {texts.quickLinks.title}
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#pricing"
                  className="text-slate-400 hover:text-indigo-400 transition-colors text-sm"
                >
                  {texts.quickLinks.pricing}
                </a>
              </li>
              <li>
                <a
                  href="#channels"
                  className="text-slate-400 hover:text-indigo-400 transition-colors text-sm"
                >
                  {texts.quickLinks.channels}
                </a>
              </li>
              <li>
                <a
                  href="#support"
                  className="text-slate-400 hover:text-indigo-400 transition-colors text-sm"
                >
                  {texts.quickLinks.support}
                </a>
              </li>
              <li>
                <a
                  href="#setup"
                  className="text-slate-400 hover:text-indigo-400 transition-colors text-sm"
                >
                  {texts.quickLinks.setup}
                </a>
              </li>
              <li>
                <a
                  href="#devices"
                  className="text-slate-400 hover:text-indigo-400 transition-colors text-sm"
                >
                  {texts.quickLinks.devices}
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Legal */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-white font-semibold mb-4">
              {texts.legal.title}
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/privacy-policy"
                  className="text-slate-400 hover:text-indigo-400 transition-colors text-sm"
                >
                  {texts.legal.privacy}
                </Link>
              </li>
              <li>
                <Link
                  href="/terms-of-service"
                  className="text-slate-400 hover:text-indigo-400 transition-colors text-sm"
                >
                  {texts.legal.terms}
                </Link>
              </li>
              <li>
                <Link
                  href="/refund-policy"
                  className="text-slate-400 hover:text-indigo-400 transition-colors text-sm"
                >
                  {texts.legal.refund}
                </Link>
              </li>
              <li>
                <a
                  href="#gdpr"
                  className="text-slate-400 hover:text-indigo-400 transition-colors text-sm"
                >
                  {texts.legal.gdpr}
                </a>
              </li>
              <li>
                <a
                  href="#cookies"
                  className="text-slate-400 hover:text-indigo-400 transition-colors text-sm"
                >
                  {texts.legal.cookies}
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-white font-semibold mb-4">
              {texts.contact.title}
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="https://wa.me/33773436514"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-slate-400 hover:text-emerald-400 transition-colors text-sm"
                >
                  <span>📱</span> {texts.contact.whatsapp}
                </a>
              </li>
              <li>
                <button className="flex items-center gap-2 text-slate-400 hover:text-indigo-400 transition-colors text-sm">
                  <span>💬</span> {texts.contact.liveChat}
                </button>
              </li>
              <li>
                <a
                  href="mailto:support@iptv2belgique.be"
                  className="flex items-center gap-2 text-slate-400 hover:text-indigo-400 transition-colors text-sm"
                >
                  <span>📧</span> {texts.contact.email}
                </a>
              </li>
              <li className="flex items-center gap-2 text-slate-400 text-sm">
                <span>🕐</span> {texts.contact.available}
              </li>
            </ul>

            {/* Payment Methods */}
            <div className="mt-6">
              <p className="text-xs text-slate-500 mb-3">
                {texts.contact.paymentMethods}
              </p>
              <div className="flex gap-2 flex-wrap">
                <div className="bg-white/5 px-3 py-1 rounded text-xs text-slate-400">
                  Visa
                </div>
                <div className="bg-white/5 px-3 py-1 rounded text-xs text-slate-400">
                  Mastercard
                </div>
                <div className="bg-white/5 px-3 py-1 rounded text-xs text-slate-400">
                  PayPal
                </div>
                <div className="bg-white/5 px-3 py-1 rounded text-xs text-slate-400">
                  Crypto
                </div>
                <div className="bg-white/5 px-3 py-1 rounded text-xs text-slate-400">
                  Bank Transfer
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          viewport={{ once: true }}
          className="pt-8 border-t border-white/5"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-500 text-sm text-center md:text-left">
              © {currentYear} IPTV2Belgique. {texts.bottom.copyright}
              <span className="text-indigo-400 font-semibold">5847</span>{' '}
              {texts.bottom.counting}
            </p>

            {/* Language Selector */}
            <div className="flex items-center gap-2">
              <span className="text-slate-500 text-sm">
                {texts.bottom.language}
              </span>
              <div className="flex gap-1">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => handleLanguageClick(lang.code)}
                    className={`px-2 py-1 text-xs rounded transition-colors ${
                      language === lang.code
                        ? 'bg-indigo-500/20 text-indigo-300 border border-indigo-500/30'
                        : 'text-slate-500 hover:bg-white/5'
                    }`}
                  >
                    {lang.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Trust Badges */}
          <div className="flex flex-wrap justify-center gap-6 mt-6 text-xs text-slate-600">
            <span className="flex items-center gap-1">
              <span>🔒</span> {texts.bottom.trustBadges.ssl}
            </span>
            <span className="flex items-center gap-1">
              <span>🇪🇺</span> {texts.bottom.trustBadges.gdpr}
            </span>
            <span className="flex items-center gap-1">
              <span>⚡</span> {texts.bottom.trustBadges.uptime}
            </span>
            <span className="flex items-center gap-1">
              <span>🛡️</span> {texts.bottom.trustBadges.ddos}
            </span>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
