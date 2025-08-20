// src/app/page.tsx
'use client';

import { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Header from '@/components/layout/Header';
import HeroSection from '@/components/hero/HeroSection';
import ChannelLogos from '@/components/content/ChannelLogos';
import MovieCarousel from '@/components/content/MovieCarousel';
import SportsSection from '@/components/content/SportsSection';
import TestimonialSection from '@/components/social/TestimonialSection';
import QuickEmailCapture from '@/components/forms/QuickEmailCapture';
import DynamicPricing from '@/components/pricing/DynamicPricing';
import FAQSection from '@/components/faq/FAQSection';
import Footer from '@/components/footer/Footer';

type Language = 'fr-BE' | 'nl-BE' | 'en';

// Loading component for better UX
function LoadingSpinner() {
  return (
    <div className="fixed inset-0 bg-slate-900 flex items-center justify-center z-50">
      <div className="flex items-center space-x-2">
        <div className="w-8 h-8 border-4 border-yellow-400 border-t-transparent rounded-full animate-spin"></div>
        <span className="text-white font-medium">Loading IPTV2Belgique...</span>
      </div>
    </div>
  );
}

// Main content component wrapped in Suspense
function HomeContent() {
  const [language, setLanguage] = useState<Language>('fr-BE');
  const [isLoading, setIsLoading] = useState(true);
  const searchParams = useSearchParams();

  useEffect(() => {
    // Enhanced language detection logic
    const detectLanguage = () => {
      const hostname = window.location.hostname;
      const urlLang = searchParams.get('lang');

      // Priority 1: URL parameter
      if (urlLang && ['fr-BE', 'nl-BE', 'en'].includes(urlLang)) {
        return urlLang as Language;
      }

      // Priority 2: Domain-based detection
      if (hostname.includes('belgique') || hostname.includes('fr.')) {
        return 'fr-BE';
      } else if (hostname.includes('belgie') || hostname.includes('nl.')) {
        return 'nl-BE';
      } else if (hostname.includes('belgium') || hostname.includes('en.')) {
        return 'en';
      }

      // Priority 3: Browser language detection
      const browserLang = navigator.language.toLowerCase();
      if (browserLang.startsWith('fr')) return 'fr-BE';
      if (browserLang.startsWith('nl')) return 'nl-BE';

      // Priority 4: Geographic detection via timezone
      const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
      if (timezone === 'Europe/Brussels') {
        // Default to French for Brussels (more common)
        return 'fr-BE';
      }

      // Default fallback
      return 'fr-BE';
    };

    const detectedLanguage = detectLanguage();
    setLanguage(detectedLanguage);

    // Simulate loading for smooth UX
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, [searchParams]);

  const handleLanguageChange = (newLang: Language) => {
    setLanguage(newLang);

    // Update URL without reload for better UX
    const url = new URL(window.location.href);
    url.searchParams.set('lang', newLang);
    window.history.pushState({}, '', url);

    // Track language changes for analytics
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'language_change', {
        event_category: 'engagement',
        event_label: newLang,
      });
    }
  };

  // Smooth scroll utility
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <div className="min-h-screen bg-slate-900">
      {/* Fixed Header with Language Switcher */}
      <Header currentLang={language} onLanguageChange={handleLanguageChange} />

      {/* Main Content */}
      <main>
        {/* Hero Section with Dynamic Backgrounds - Full viewport */}
        <section id="hero">
          <HeroSection language={language} />
        </section>

        {/* Channel Logos Marquee - Creates trust and shows content variety */}
        <section id="channels">
          <ChannelLogos language={language} />
        </section>

        {/* Movie & Series Carousel - Visual content showcase */}
        <section id="movies">
          <MovieCarousel language={language} />
        </section>

        {/* Sports Section - Major selling point for European market */}
        <section id="sports">
          <SportsSection language={language} />
        </section>

        {/* Social Proof - Customer testimonials for trust */}
        <section id="testimonials">
          <TestimonialSection language={language} />
        </section>

        {/* Email Capture - Lead generation before pricing */}
        <section id="email-capture">
          <QuickEmailCapture language={language} />
        </section>

        {/* Pricing Section - Main conversion point */}
        <section id="pricing">
          <DynamicPricing language={language} />
        </section>

        {/* FAQ Section - Address objections and concerns */}
        <section id="faq">
          <FAQSection language={language} />
        </section>
      </main>

      {/* Footer with language support */}
      <Footer language={language} onLanguageChange={handleLanguageChange} />

      {/* Scroll to top button for better UX */}
      <ScrollToTopButton />
    </div>
  );
}

// Scroll to top component
function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  if (!isVisible) return null;

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-8 right-8 z-40 p-3 bg-gradient-to-r from-yellow-400 to-orange-500 text-black rounded-full shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300"
      aria-label="Scroll to top"
    >
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M5 10l7-7m0 0l7 7m-7-7v18"
        />
      </svg>
    </button>
  );
}

// Main export with Suspense wrapper
export default function Home() {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <HomeContent />
    </Suspense>
  );
}
