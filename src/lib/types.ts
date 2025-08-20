// Global types for PandaStreamTV
export interface Language {
  code: 'en' | 'fr' | 'nl' | 'de';
  name: string;
  flag: string;
}

export interface SubscriptionPlan {
  id: string;
  name: string;
  duration: string;
  price: string;
  monthlyEquivalent: string;
  originalPrice: string;
  savings?: string;
  popular: boolean;
  features: string[];
  limitations?: string[];
  deviceLimit: number;
  trialDays: number;
  whatsappMessage: string;
}

export interface Customer {
  id: number;
  name: string;
  location: string;
  country: string;
  avatar: string;
  plan: string;
  message: string;
  timestamp: string;
  rating: number;
}

export interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

export interface EmailCaptureData {
  email: string;
  customerNumber: number;
  timestamp: string;
  source: 'hero' | 'modal' | 'exit_intent';
  selectedPlan?: string;
}

export interface CarouselSlide {
  id: number;
  title: string;
  subtitle: string;
  badge: string;
  duration: number;
  channels: Array<{
    icon: string;
    name: string;
  }>;
}

export interface BrandLogo {
  name: string;
  icon: string;
  path: string;
}

export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
}
