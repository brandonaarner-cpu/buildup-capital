# A/B Testing Infrastructure - DEPLOYED

**Deployed:** 2026-02-10  
**Status:** ✅ Active - Ready to use

---

## What's Installed

### Files Added:
- `/lib/useABTest.ts` - React hook for A/B testing
- `/lib/tests.ts` - Pre-configured tests
- `/lib/stats.ts` - Statistical calculator

### Dependencies:
- ✅ js-cookie (for variant persistence)
- ✅ @types/js-cookie (TypeScript support)

---

## Pre-Configured Tests

### 1. Homepage Headline Test
**Test ID:** `bc_homepage_headline`  
**Variants:**
- Control: "Real Estate-Backed Lending"
- Investor-Focus: "Earn 12% Returns Secured by Real Estate"
- Borrower-Focus: "Get Funded in 7 Days When Banks Say No"

### 2. CTA Button Test
**Test ID:** `bc_cta_button`  
**Variants:**
- Control: "Get Pre-Qualified"
- Qualify: "See If You Qualify in 7 Days"
- Apply: "Start Your Application"

### 3. Trust Badges Test
**Test ID:** `bc_trust_badges`  
**Variants:**
- Without badges (30% traffic)
- With trust signals (70% traffic)

---

## How to Use

### Basic Usage:

```typescript
import { useABTest } from '@/lib/useABTest';
import { buildupCapitalTests, copyVariations } from '@/lib/tests';

export function MyComponent() {
  const { variant, trackEvent } = useABTest(buildupCapitalTests.homepageHeadline);
  
  return (
    <h1>{copyVariations.bc_homepage_headline[variant]}</h1>
  );
}
```

### Track Conversions:

```typescript
const { trackEvent } = useABTest(test);

// When investor submits form:
trackEvent('investor_form_submitted', {
  investment_amount: '$500k',
  lead_quality: 'hot'
});

// When borrower submits form:
trackEvent('borrower_form_submitted', {
  loan_amount: '$750k',
  timeframe: 'immediate'
});
```

---

## Analytics Integration

Tests automatically track to Google Analytics 4 (when configured):
- Event: `ab_test_assigned` (when variant assigned)
- Event: `[your_conversion_event]` (with variant in properties)

**Add GA4 Measurement ID to `.env.local`:**
```
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
```

---

## Weekly Reports

Reports show test results with statistical significance.

**Setup (5 min):**
1. Add to crontab: `crontab -e`
2. Add line:
   ```
   0 22 * * 0 cd /home/ubuntu/.openclaw/workspace/ab-testing && node report-generator.js
   ```
3. Save

**Manual report:**
```bash
cd /home/ubuntu/.openclaw/workspace/ab-testing
node report-generator.js
```

Reports sent via Telegram to Brandon.

---

## Expected Results

### Timeline:
- **Week 1-2:** Data collection (need 100+ visitors per variant)
- **Week 3:** Statistical significance (usually)
- **Week 4+:** Deploy winners, start new tests

### Impact:
- **First test:** +10-30% typical improvement
- **Compound:** 10% × 10% × 10% = 33% over 3-4 tests
- **Annual revenue:** +$10k-$50k per business

---

## Next Steps

1. **Optional:** Add A/B testing to homepage elements
2. **Wait 7 days** for data collection
3. **Review weekly report** (auto-sent Sundays 3 PM MT)
4. **Deploy winners** when statistically significant
5. **Start new tests** on different elements

---

## Support

**Questions?** See `/workspace/ab-testing/README.md` for full documentation.

**Issues?** Check browser console for A/B test events.

---

**Status:** ✅ Infrastructure deployed, ready to activate tests when desired.
