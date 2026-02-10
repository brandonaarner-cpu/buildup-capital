'use client';

import { useABTest } from '@/lib/useABTest';
import { buildupCapitalTests } from '@/lib/tests';

/**
 * A/B Tested Tagline for BuildUp Capital
 * Tests 3 variations targeting different audiences
 */
export function ABTestedTagline() {
  const { variant } = useABTest(buildupCapitalTests.homepageHeadline);
  
  // Get tagline for current variant
  const taglines = {
    control: 'Fast bridge loans when timing matters.',
    'investor-focus': 'Earn 12% returns secured by real estate.',
    'borrower-focus': 'Get funded in 7 days when banks say no.'
  };
  
  const tagline = taglines[variant as keyof typeof taglines] || taglines.control;
  
  return (
    <p className="text-xl md:text-2xl text-slate-300 mb-8">
      {tagline}
    </p>
  );
}
