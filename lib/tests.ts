/**
 * A/B Test Definitions
 * Configure all active tests here
 */

import { ABTest } from './useABTest';

// Collection Kings Tests
export const collectionKingsTests: Record<string, ABTest> = {
  homepageHeadline: {
    name: 'ck_homepage_headline',
    variants: ['control', 'relationship', 'results'],
    weights: [0.33, 0.33, 0.34]
  },
  ctaButton: {
    name: 'ck_cta_button',
    variants: ['control', 'specific', 'urgent'],
    weights: [0.33, 0.33, 0.34]
  },
  formStyle: {
    name: 'ck_form_style',
    variants: ['single-page', 'multi-step'],
    weights: [0.5, 0.5]
  },
  socialProof: {
    name: 'ck_social_proof',
    variants: ['without', 'with'],
    weights: [0.3, 0.7] // Favor showing social proof (we want to test if it helps)
  }
};

// BuildUp Capital Tests
export const buildupCapitalTests: Record<string, ABTest> = {
  homepageHeadline: {
    name: 'bc_homepage_headline',
    variants: ['control', 'investor-focus', 'borrower-focus'],
    weights: [0.33, 0.33, 0.34]
  },
  ctaButton: {
    name: 'bc_cta_button',
    variants: ['control', 'qualify', 'apply'],
    weights: [0.33, 0.33, 0.34]
  },
  trustBadges: {
    name: 'bc_trust_badges',
    variants: ['without', 'with'],
    weights: [0.3, 0.7]
  }
};

// Test Copy Variations
export const copyVariations = {
  // Collection Kings Headlines
  ck_homepage_headline: {
    control: 'Ethical Collections That Actually Work',
    relationship: 'Recover What You\'re Owed Without Damaging Relationships',
    results: 'Stop Chasing Payments. We\'ll Handle It.'
  },
  
  // Collection Kings CTAs
  ck_cta_button: {
    control: 'Get Started',
    specific: 'Get a Free Collections Assessment',
    urgent: 'Recover Your Money Now'
  },
  
  // BuildUp Capital Headlines
  bc_homepage_headline: {
    control: 'Real Estate-Backed Lending',
    'investor-focus': 'Earn 12% Returns Secured by Real Estate',
    'borrower-focus': 'Get Funded in 7 Days When Banks Say No'
  },
  
  // BuildUp Capital CTAs
  bc_cta_button: {
    control: 'Get Pre-Qualified',
    qualify: 'See If You Qualify in 7 Days',
    apply: 'Start Your Application'
  }
};

// Conversion Events (what counts as success)
export const conversionEvents = {
  // Collection Kings
  ck: [
    'form_submitted',
    'phone_clicked',
    'email_clicked',
    'resources_downloaded',
    'consultation_booked'
  ],
  
  // BuildUp Capital
  bc: [
    'investor_form_submitted',
    'borrower_form_submitted',
    'phone_clicked',
    'email_clicked',
    'lead_magnet_downloaded',
    'call_booked'
  ]
};

// Statistical Significance Thresholds
export const statsConfig = {
  minSampleSize: 100,        // Minimum visits per variant before declaring winner
  confidenceLevel: 0.95,      // 95% confidence
  minimumLift: 0.10,          // 10% minimum improvement to declare significant
  testDuration: 7             // Days to run test before declaring winner
};
