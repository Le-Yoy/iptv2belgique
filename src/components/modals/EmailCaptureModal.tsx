// src/components/modals/EmailCaptureModal.tsx
'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface EmailCaptureModalProps {
  isOpen: boolean;
  onClose: () => void;
  plan?: any;
  language: 'fr-BE' | 'nl-BE' | 'en';
}

export default function EmailCaptureModal({
  isOpen,
  onClose,
  plan,
  language,
}: EmailCaptureModalProps) {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [customerNumber] = useState(
    () => Math.floor(Math.random() * 1000) + 5847
  );

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || isSubmitting) return;

    setIsSubmitting(true);

    try {
      const response = await fetch('/api/capture-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          plan: plan?.id || '12month-1d',
          source: 'pricing_modal',
          language,
        }),
      });

      const data = await response.json();

      if (data.success) {
        setIsSuccess(true);
        console.log('Email sent to:', email);

        setTimeout(() => {
          onClose();
        }, 3000);
      }
    } catch (error) {
      console.error('Email capture failed:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const openWhatsApp = () => {
    const message =
      language === 'fr-BE'
        ? `Bonjour! Je viens de m'inscrire (Client #${customerNumber}). J'ai choisi le plan ${plan?.duration?.['fr-BE'] || '12 Mois'} à €${plan?.price || '119'}. Je souhaite procéder au paiement.`
        : language === 'nl-BE'
          ? `Hallo! Ik heb me net aangemeld (Klant #${customerNumber}). Ik heb het ${plan?.duration?.['nl-BE'] || '12 Maanden'} plan gekozen voor €${plan?.price || '119'}. Ik wil graag betalen.`
          : `Hello! I just signed up (Customer #${customerNumber}). I chose the ${plan?.duration?.['en'] || '12 Months'} plan for €${plan?.price || '119'}. I'd like to proceed with payment.`;

    const whatsappUrl = `https://wa.me/32470123456?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const texts = {
    'fr-BE': {
      title: isSuccess ? 'Vérifiez Votre Email!' : 'Finaliser Votre Commande',
      subtitle: isSuccess
        ? 'Instructions de paiement envoyées'
        : `Plan sélectionné: ${plan?.duration?.['fr-BE'] || '12 Mois'} - €${plan?.price || '119'}`,
      emailPlaceholder: 'Votre adresse email',
      submitButton: 'Recevoir les Instructions',
      processing: 'Envoi en cours...',
      successMessage: 'Email envoyé avec succès!',
      checkEmail: 'Vérifier ma boîte mail',
      whatsappButton: 'Contacter sur WhatsApp',
      customerInfo: `Client #${customerNumber}`,
      paymentInfo: 'Paiement sécurisé par virement SEPA',
      setupTime: 'Configuration en 10 minutes après paiement',
    },
    'nl-BE': {
      title: isSuccess ? 'Controleer Uw Email!' : 'Voltooi Uw Bestelling',
      subtitle: isSuccess
        ? 'Betalingsinstructies verzonden'
        : `Geselecteerd plan: ${plan?.duration?.['nl-BE'] || '12 Maanden'} - €${plan?.price || '119'}`,
      emailPlaceholder: 'Uw e-mailadres',
      submitButton: 'Ontvang Instructies',
      processing: 'Verzenden...',
      successMessage: 'E-mail succesvol verzonden!',
      checkEmail: 'Controleer mijn inbox',
      whatsappButton: 'Contact via WhatsApp',
      customerInfo: `Klant #${customerNumber}`,
      paymentInfo: 'Veilige betaling via SEPA-overschrijving',
      setupTime: 'Configuratie in 10 minuten na betaling',
    },
    en: {
      title: isSuccess ? 'Check Your Email!' : 'Complete Your Order',
      subtitle: isSuccess
        ? 'Payment instructions sent'
        : `Selected plan: ${plan?.duration?.['en'] || '12 Months'} - €${plan?.price || '119'}`,
      emailPlaceholder: 'Your email address',
      submitButton: 'Get Instructions',
      processing: 'Sending...',
      successMessage: 'Email sent successfully!',
      checkEmail: 'Check my inbox',
      whatsappButton: 'Contact on WhatsApp',
      customerInfo: `Customer #${customerNumber}`,
      paymentInfo: 'Secure payment via SEPA transfer',
      setupTime: 'Setup in 10 minutes after payment',
    },
  };

  const t = texts[language];

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            onClick={onClose}
          />

          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="relative bg-gradient-to-br from-gray-900 to-black border border-white/10 rounded-3xl p-8 w-full max-w-md z-10"
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
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
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            {!isSuccess ? (
              <>
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {t.title}
                  </h3>
                  <p className="text-gray-400">{t.subtitle}</p>
                  <div className="mt-2 inline-block px-3 py-1 bg-yellow-500/20 border border-yellow-500/30 rounded-full">
                    <span className="text-yellow-400 text-sm font-semibold">
                      {t.customerInfo}
                    </span>
                  </div>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder={t.emailPlaceholder}
                      required
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-yellow-400 transition-colors"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting || !email}
                    className="w-full btn-premium disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? t.processing : t.submitButton}
                  </button>
                </form>

                <div className="mt-6 space-y-3">
                  <div className="flex items-center space-x-2 text-sm text-gray-400">
                    <svg
                      className="w-4 h-4 text-green-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>{t.paymentInfo}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-gray-400">
                    <svg
                      className="w-4 h-4 text-green-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>{t.setupTime}</span>
                  </div>
                </div>
              </>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-8"
              >
                <div className="text-6xl mb-4">✉️</div>
                <h3 className="text-2xl font-bold text-white mb-2">
                  {t.title}
                </h3>
                <p className="text-gray-400 mb-6">{t.successMessage}</p>

                <div className="space-y-3">
                  <button
                    onClick={() =>
                      window.open('https://mail.google.com', '_blank')
                    }
                    className="w-full btn-premium"
                  >
                    {t.checkEmail}
                  </button>

                  <button
                    onClick={openWhatsApp}
                    className="w-full px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-xl transition-colors"
                  >
                    {t.whatsappButton}
                  </button>
                </div>
              </motion.div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
