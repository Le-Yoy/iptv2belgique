// src/components/layout/Header.tsx
'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';

interface HeaderProps {
  currentLang: 'fr-BE' | 'nl-BE' | 'en';
  onLanguageChange: (lang: 'fr-BE' | 'nl-BE' | 'en') => void;
}

export default function Header({ currentLang, onLanguageChange }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const languages = [
    { code: 'fr-BE', label: 'FR', flag: '🇧🇪' },
    { code: 'nl-BE', label: 'NL', flag: '🇧🇪' },
    { code: 'en', label: 'EN', flag: '🇬🇧' },
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'glass-dark py-3' : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center space-x-2"
          >
            <div className="flex items-baseline">
              <span className="text-2xl sm:text-3xl font-black text-white">
                IPTV
              </span>
              <span className="text-2xl sm:text-3xl font-black gradient-text">
                2
              </span>
              <span className="text-base sm:text-lg font-light text-white tracking-wider ml-1">
                BELGIQUE
              </span>
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('pricing')}
              className="text-white/80 hover:text-white transition-colors font-medium belgian-accent"
            >
              {currentLang === 'fr-BE'
                ? 'Tarifs'
                : currentLang === 'nl-BE'
                  ? 'Prijzen'
                  : 'Pricing'}
            </button>
            <button
              onClick={() => scrollToSection('channels')}
              className="text-white/80 hover:text-white transition-colors font-medium belgian-accent"
            >
              {currentLang === 'fr-BE'
                ? 'Chaînes'
                : currentLang === 'nl-BE'
                  ? 'Kanalen'
                  : 'Channels'}
            </button>
            <button
              onClick={() => scrollToSection('sports')}
              className="text-white/80 hover:text-white transition-colors font-medium belgian-accent"
            >
              Sports
            </button>

            {/* Language Switcher */}
            <div className="flex items-center space-x-1 bg-white/10 rounded-lg p-1">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => onLanguageChange(lang.code as any)}
                  className={`px-3 py-1.5 rounded-md transition-all duration-200 flex items-center space-x-1 ${
                    currentLang === lang.code
                      ? 'bg-gradient-to-r from-yellow-400 to-yellow-600 text-black font-semibold'
                      : 'text-white/70 hover:text-white hover:bg-white/10'
                  }`}
                >
                  <span className="text-sm">{lang.flag}</span>
                  <span className="text-sm font-medium">{lang.label}</span>
                </button>
              ))}
            </div>

            {/* CTA Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection('pricing')}
              className="btn-premium text-sm"
            >
              {currentLang === 'fr-BE'
                ? 'Commencer'
                : currentLang === 'nl-BE'
                  ? 'Starten'
                  : 'Get Started'}
            </motion.button>
          </nav>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center space-x-4">
            {/* Mobile Language Toggle */}
            <select
              value={currentLang}
              onChange={(e) => onLanguageChange(e.target.value as any)}
              className="bg-white/10 text-white border border-white/20 rounded-lg px-3 py-1.5 text-sm focus:outline-none focus:border-yellow-400"
            >
              {languages.map((lang) => (
                <option
                  key={lang.code}
                  value={lang.code}
                  className="bg-gray-900"
                >
                  {lang.flag} {lang.label}
                </option>
              ))}
            </select>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-white p-2 touch-target"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMobileMenuOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="lg:hidden mt-4 pb-4 border-t border-white/10 pt-4"
          >
            <div className="flex flex-col space-y-4">
              <button
                onClick={() => {
                  scrollToSection('pricing');
                  setIsMobileMenuOpen(false);
                }}
                className="text-white/80 hover:text-white transition-colors font-medium text-left"
              >
                {currentLang === 'fr-BE'
                  ? 'Tarifs'
                  : currentLang === 'nl-BE'
                    ? 'Prijzen'
                    : 'Pricing'}
              </button>
              <button
                onClick={() => {
                  scrollToSection('channels');
                  setIsMobileMenuOpen(false);
                }}
                className="text-white/80 hover:text-white transition-colors font-medium text-left"
              >
                {currentLang === 'fr-BE'
                  ? 'Chaînes'
                  : currentLang === 'nl-BE'
                    ? 'Kanalen'
                    : 'Channels'}
              </button>
              <button
                onClick={() => {
                  scrollToSection('sports');
                  setIsMobileMenuOpen(false);
                }}
                className="text-white/80 hover:text-white transition-colors font-medium text-left"
              >
                Sports
              </button>
              <button
                onClick={() => {
                  scrollToSection('pricing');
                  setIsMobileMenuOpen(false);
                }}
                className="btn-premium w-full text-center"
              >
                {currentLang === 'fr-BE'
                  ? 'Commencer Maintenant'
                  : currentLang === 'nl-BE'
                    ? 'Nu Starten'
                    : 'Start Now'}
              </button>
            </div>
          </motion.div>
        )}
      </div>
    </header>
  );
}
