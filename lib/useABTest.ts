/**
 * A/B Testing Hook for Next.js
 * Simple cookie-based variant assignment with analytics tracking
 */

import { useState, useEffect } from 'react';
import Cookies from 'js-cookie';

export interface ABTest {
  name: string;
  variants: string[];
  weights?: number[]; // Optional weights (must sum to 1.0)
}

export interface ABTestResult {
  variant: string;
  isControl: boolean;
  trackEvent: (eventName: string, properties?: Record<string, string | number | boolean>) => void;
}

/**
 * Use A/B Test
 * 
 * @param test - Test configuration
 * @returns Current variant and tracking function
 * 
 * @example
 * const { variant, trackEvent } = useABTest({
 *   name: 'homepage-headline',
 *   variants: ['control', 'variant-a', 'variant-b']
 * });
 * 
 * // Use variant in your component
 * <h1>{variant === 'control' ? 'Original' : variant === 'variant-a' ? 'New A' : 'New B'}</h1>
 * 
 * // Track conversions
 * <button onClick={() => trackEvent('signup_clicked')}>Sign Up</button>
 */
export function useABTest(test: ABTest): ABTestResult {
  const [variant, setVariant] = useState<string>('control');
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    
    // Check if user already has a variant assigned
    const cookieName = `ab_${test.name}`;
    let assignedVariant = Cookies.get(cookieName);

    if (!assignedVariant) {
      // Assign new variant based on weights
      assignedVariant = assignVariant(test);
      
      // Store in cookie (30 days)
      Cookies.set(cookieName, assignedVariant, { expires: 30 });
      
      // Track assignment
      trackABEvent('ab_test_assigned', {
        test_name: test.name,
        variant: assignedVariant
      });
    }

    setVariant(assignedVariant);
  }, [test.name]);

  const trackEvent = (eventName: string, properties?: Record<string, string | number | boolean>) => {
    trackABEvent(eventName, {
      test_name: test.name,
      variant,
      ...properties
    });
  };

  return {
    variant,
    isControl: variant === 'control' || variant === test.variants[0],
    trackEvent
  };
}

/**
 * Assign variant based on weights
 */
function assignVariant(test: ABTest): string {
  const { variants, weights } = test;
  
  // Default to equal distribution if no weights provided
  const finalWeights = weights || variants.map(() => 1 / variants.length);
  
  // Generate random number
  const random = Math.random();
  
  // Find variant based on cumulative probability
  let cumulative = 0;
  for (let i = 0; i < variants.length; i++) {
    cumulative += finalWeights[i];
    if (random <= cumulative) {
      return variants[i];
    }
  }
  
  // Fallback to first variant (control)
  return variants[0];
}

/**
 * Track A/B test event (Google Analytics or custom)
 */
function trackABEvent(eventName: string, properties: Record<string, string | number | boolean>) {
  // Google Analytics 4
  if (typeof window !== 'undefined' && (window as unknown as { gtag?: unknown }).gtag) {
    (window as unknown as { gtag: (type: string, name: string, params: unknown) => void }).gtag('event', eventName, properties);
  }
  
  // Custom analytics endpoint (optional)
  if (typeof window !== 'undefined' && process.env.NEXT_PUBLIC_ANALYTICS_ENDPOINT) {
    fetch(process.env.NEXT_PUBLIC_ANALYTICS_ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        event: eventName,
        properties,
        timestamp: Date.now()
      })
    }).catch(err => console.error('Analytics error:', err));
  }
  
  // Console log in development
  if (process.env.NODE_ENV === 'development') {
    console.log('[A/B Test]', eventName, properties);
  }
}

/**
 * Get current variant (server-side safe)
 */
export function getABVariant(testName: string, defaultVariant: string = 'control'): string {
  if (typeof window === 'undefined') return defaultVariant;
  return Cookies.get(`ab_${testName}`) || defaultVariant;
}

/**
 * Force variant (for testing)
 */
export function forceABVariant(testName: string, variant: string) {
  Cookies.set(`ab_${testName}`, variant, { expires: 30 });
  window.location.reload();
}
