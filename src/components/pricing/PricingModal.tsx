'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import EmailCapture from '../hero/EmailCapture';
import type { SubscriptionPlan, EmailCaptureData } from '@/lib/types';

interface PricingModalProps {
  plan: SubscriptionPlan;
  isOpen: boolean;
  onClose: () => void;
}

export default function PricingModal({
  plan,
  isOpen,
  onClose,
}: PricingModalProps) {
  const [step, setStep] = useState<'email' | 'payment'>('email');
  const [capturedEmail, setCapturedEmail] = useState<string>('');
  const [customerNumber, setCustomerNumber] = useState<number>(0);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const handleEmailSuccess = (data: EmailCaptureData) => {
    setCapturedEmail(data.email);
    setCustomerNumber(data.customerNumber);
    setStep('payment');
  };

  const openWhatsApp = () => {
    const message = `${plan.whatsappMessage}\n\nEmail: ${capturedEmail}\nCustomer #${customerNumber}`;
    const whatsappUrl = `https://wa.me/33773436514?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    onClose();
  };

  const openChatbot = () => {
    // This would integrate with Voiceflow
    console.log('Opening chatbot with:', {
      plan: plan.name,
      email: capturedEmail,
      customerNumber,
      price: plan.price,
    });

    // Simulate chatbot opening
    const chatbotUrl = `https://voiceflow.com/embed/your-chatbot-id?email=${encodeURIComponent(capturedEmail)}&plan=${plan.id}&customer=${customerNumber}`;
    window.open(chatbotUrl, '_blank', 'width=400,height=600');
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/80 backdrop-blur-md"
            onClick={onClose}
          />

          {/* Modal Content - Centered with 20% margins */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className="relative bg-slate-900/95 backdrop-blur-xl border-2 border-indigo-500/30 rounded-3xl p-8 w-full max-w-md z-10 mt-[10vh] mb-[10vh] max-h-[80vh] overflow-y-auto"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 hover:bg-white/10 rounded-full transition-colors"
            >
              <X className="w-6 h-6 text-slate-400 hover:text-white" />
            </button>

            {step === 'email' ? (
              <div>
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold mb-2 bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                    Complete Your Order
                  </h3>
                  <p className="text-slate-300">
                    You selected:{' '}
                    <span className="font-semibold text-indigo-300">
                      {plan.name}
                    </span>{' '}
                    for{' '}
                    <span className="font-semibold text-indigo-300">
                      {plan.price}
                    </span>
                  </p>
                </div>

                {/* Plan Summary */}
                <div className="bg-white/5 rounded-2xl p-4 mb-6 border border-white/10">
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-slate-300">{plan.duration} Plan</span>
                    <span className="text-xl font-bold text-indigo-400">
                      {plan.price}
                    </span>
                  </div>
                  <div className="text-sm text-slate-400 mb-3">
                    {plan.monthlyEquivalent}
                  </div>
                  {plan.savings && (
                    <div className="bg-emerald-500/20 text-emerald-300 px-3 py-1 rounded-full text-sm font-semibold inline-block">
                      {plan.savings}
                    </div>
                  )}
                </div>

                <EmailCapture source="modal" onSuccess={handleEmailSuccess} />
              </div>
            ) : (
              <div>
                <div className="text-center mb-6">
                  <div className="text-4xl mb-4">✅</div>
                  <h3 className="text-2xl font-bold mb-2 bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
                    Email Confirmed!
                  </h3>
                  <p className="text-slate-300">
                    Choose your payment method for{' '}
                    <span className="font-semibold text-indigo-300">
                      {plan.name}
                    </span>
                  </p>
                  <div className="bg-indigo-500/10 border border-indigo-500/30 rounded-xl p-3 mt-4">
                    <div className="text-indigo-300 font-semibold">
                      Total: {plan.price} • Customer #{customerNumber}
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  {/* WhatsApp Payment */}
                  <button
                    onClick={openWhatsApp}
                    className="w-full flex items-center gap-4 p-4 bg-emerald-600 hover:bg-emerald-700 rounded-2xl transition-all duration-300 transform hover:scale-105 group"
                  >
                    <div className="text-3xl">📱</div>
                    <div className="text-left flex-1">
                      <div className="font-bold text-white">
                        Pay via WhatsApp
                      </div>
                      <div className="text-sm text-emerald-100">
                        Get credentials in 5 minutes
                      </div>
                    </div>
                    <div className="text-white group-hover:translate-x-1 transition-transform">
                      →
                    </div>
                  </button>

                  {/* Chatbot Payment */}
                  <button
                    onClick={openChatbot}
                    className="w-full flex items-center gap-4 p-4 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 rounded-2xl transition-all duration-300 transform hover:scale-105 group"
                  >
                    <div className="text-3xl">🤖</div>
                    <div className="text-left flex-1">
                      <div className="font-bold text-white">AI Assistant</div>
                      <div className="text-sm text-indigo-100">
                        Instant automated setup
                      </div>
                    </div>
                    <div className="text-white group-hover:translate-x-1 transition-transform">
                      →
                    </div>
                  </button>
                </div>

                {/* Credentials Promise */}
                <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-xl p-4 mt-6 text-center">
                  <div className="text-emerald-300 font-semibold mb-1">
                    ⚡ Instant Activation
                  </div>
                  <div className="text-sm text-slate-300">
                    You'll receive your IPTV credentials within minutes after
                    payment confirmation
                  </div>
                </div>

                {/* Back Button */}
                <button
                  onClick={() => setStep('email')}
                  className="w-full mt-4 py-2 text-slate-400 hover:text-white transition-colors text-sm"
                >
                  ← Change email address
                </button>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
