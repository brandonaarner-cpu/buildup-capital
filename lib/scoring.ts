/**
 * Lead Scoring Algorithm
 * Calculates lead quality scores for prioritization
 */

/**
 * Calculate Collection Kings lead score
 */
export function scoreCKLead({
  monthlyRevenue,
  hasChallenge,
  hasBusinessName,
}: {
  monthlyRevenue?: number;
  hasChallenge: boolean;
  hasBusinessName: boolean;
}): number {
  let score = 0;

  // Has monthly revenue
  if (monthlyRevenue) {
    score += 30;
    
    // High revenue
    if (monthlyRevenue > 50000) {
      score += 20;
    }
  }

  // Specific challenge mentioned (shows engagement)
  if (hasChallenge) {
    score += 20;
  }

  // Business name provided (more serious)
  if (hasBusinessName) {
    score += 10;
  }

  return score;
}

/**
 * Calculate BuildUp Capital lead score
 */
export function scoreBCLead({
  loanAmount,
  realEstateValue,
  timeline,
  hasPhone,
}: {
  loanAmount?: number;
  realEstateValue?: number;
  timeline?: string;
  hasPhone: boolean;
}): number {
  let score = 0;

  // Loan amount
  if (loanAmount) {
    if (loanAmount > 100000) {
      score += 30; // High-value deal
    } else if (loanAmount > 50000) {
      score += 20;
    } else {
      score += 10;
    }
  }

  // Real estate backing
  if (realEstateValue && loanAmount && realEstateValue > loanAmount) {
    score += 20; // Good collateral
  }

  // Timeline
  if (timeline) {
    if (timeline === 'ASAP') {
      score += 30; // Ready to move
    } else if (timeline === '1-3 months') {
      score += 20;
    } else if (timeline === '3-6 months') {
      score += 10;
    }
  }

  // Phone provided (higher intent)
  if (hasPhone) {
    score += 10;
  }

  return score;
}

/**
 * Check if lead is high-value (triggers SMS)
 */
export function isHighValueLead(loanAmount?: number): boolean {
  return (loanAmount || 0) > 100000;
}

/**
 * Check if lead is qualified (worth immediate attention)
 */
export function isQualifiedLead(score: number, business: 'ck' | 'bc'): boolean {
  if (business === 'ck') {
    return score >= 60; // Collection Kings threshold
  } else {
    return score >= 70; // BuildUp Capital threshold
  }
}
