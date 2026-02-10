/**
 * A/B Test Statistics Calculator
 * Determines statistical significance and winners
 */

export interface VariantStats {
  variant: string;
  visitors: number;
  conversions: number;
  conversionRate: number;
  confidenceInterval?: [number, number];
}

export interface TestResult {
  testName: string;
  variants: VariantStats[];
  winner?: string;
  significant: boolean;
  confidence: number;
  lift?: number;
  recommendation: string;
}

/**
 * Calculate Z-score for two proportions
 */
function calculateZScore(
  conversions1: number,
  visitors1: number,
  conversions2: number,
  visitors2: number
): number {
  const p1 = conversions1 / visitors1;
  const p2 = conversions2 / visitors2;
  const pPool = (conversions1 + conversions2) / (visitors1 + visitors2);
  
  const se = Math.sqrt(pPool * (1 - pPool) * (1 / visitors1 + 1 / visitors2));
  
  if (se === 0) return 0;
  
  return (p1 - p2) / se;
}

/**
 * Calculate p-value from Z-score
 */
function zScoreToPValue(zScore: number): number {
  // Approximation using error function
  const z = Math.abs(zScore);
  const t = 1 / (1 + 0.2316419 * z);
  const d = 0.3989423 * Math.exp(-z * z / 2);
  const p = d * t * (0.3193815 + t * (-0.3565638 + t * (1.781478 + t * (-1.821256 + t * 1.330274))));
  
  return 2 * p; // Two-tailed test
}

/**
 * Calculate confidence interval for conversion rate
 */
function confidenceInterval(conversions: number, visitors: number, confidence: number = 0.95): [number, number] {
  if (visitors === 0) return [0, 0];
  
  const p = conversions / visitors;
  const zScore = confidence === 0.95 ? 1.96 : confidence === 0.99 ? 2.58 : 1.64;
  const se = Math.sqrt((p * (1 - p)) / visitors);
  
  const lower = Math.max(0, p - zScore * se);
  const upper = Math.min(1, p + zScore * se);
  
  return [lower, upper];
}

/**
 * Analyze A/B test results
 */
export function analyzeTest(
  testName: string,
  variantData: Array<{ variant: string; visitors: number; conversions: number }>,
  options: {
    minSampleSize?: number;
    confidenceLevel?: number;
    minimumLift?: number;
  } = {}
): TestResult {
  const {
    minSampleSize = 100,
    confidenceLevel = 0.95,
    minimumLift = 0.10
  } = options;
  
  // Calculate stats for each variant
  const variants: VariantStats[] = variantData.map(v => ({
    variant: v.variant,
    visitors: v.visitors,
    conversions: v.conversions,
    conversionRate: v.visitors > 0 ? v.conversions / v.visitors : 0,
    confidenceInterval: confidenceInterval(v.conversions, v.visitors, confidenceLevel)
  }));
  
  // Check if we have enough data
  const hasEnoughData = variants.every(v => v.visitors >= minSampleSize);
  
  if (!hasEnoughData) {
    return {
      testName,
      variants,
      significant: false,
      confidence: 0,
      recommendation: `Need more data. Current sample sizes: ${variants.map(v => `${v.variant}: ${v.visitors}`).join(', ')}. Target: ${minSampleSize} each.`
    };
  }
  
  // Find control (first variant) and compare others
  const control = variants[0];
  let bestVariant = control;
  let bestZScore = 0;
  let bestLift = 0;
  
  for (let i = 1; i < variants.length; i++) {
    const variant = variants[i];
    const zScore = calculateZScore(
      variant.conversions,
      variant.visitors,
      control.conversions,
      control.visitors
    );
    const pValue = zScoreToPValue(zScore);
    const lift = (variant.conversionRate - control.conversionRate) / control.conversionRate;
    
    // Check if this variant is better than control AND current best
    if (pValue < (1 - confidenceLevel) && lift > minimumLift && lift > bestLift) {
      bestVariant = variant;
      bestZScore = zScore;
      bestLift = lift;
    }
  }
  
  const isSignificant = bestVariant !== control && Math.abs(bestLift) >= minimumLift;
  
  // Generate recommendation
  let recommendation: string;
  if (isSignificant) {
    const liftPercent = (bestLift * 100).toFixed(1);
    recommendation = `🎉 Winner: ${bestVariant.variant} (${liftPercent}% lift, ${(confidenceLevel * 100).toFixed(0)}% confidence). Deploy immediately.`;
  } else if (hasEnoughData) {
    recommendation = `No significant difference detected. Continue with control or run test longer.`;
  } else {
    recommendation = `Continue test. Need ${minSampleSize - Math.min(...variants.map(v => v.visitors))} more visitors.`;
  }
  
  return {
    testName,
    variants,
    winner: isSignificant ? bestVariant.variant : undefined,
    significant: isSignificant,
    confidence: confidenceLevel,
    lift: isSignificant ? bestLift : undefined,
    recommendation
  };
}

/**
 * Format test results for reporting
 */
export function formatTestResults(result: TestResult): string {
  let output = `📊 **${result.testName}**\n\n`;
  
  // Variant stats
  result.variants.forEach(v => {
    const rate = (v.conversionRate * 100).toFixed(2);
    const ci = v.confidenceInterval
      ? `[${(v.confidenceInterval[0] * 100).toFixed(1)}% - ${(v.confidenceInterval[1] * 100).toFixed(1)}%]`
      : '';
    
    output += `${v.variant === result.winner ? '🏆 ' : ''}**${v.variant}**\n`;
    output += `  Visitors: ${v.visitors}\n`;
    output += `  Conversions: ${v.conversions}\n`;
    output += `  Rate: ${rate}% ${ci}\n\n`;
  });
  
  // Recommendation
  output += `**Recommendation:** ${result.recommendation}\n`;
  
  // Lift
  if (result.lift) {
    output += `**Lift:** +${(result.lift * 100).toFixed(1)}%\n`;
  }
  
  return output;
}
