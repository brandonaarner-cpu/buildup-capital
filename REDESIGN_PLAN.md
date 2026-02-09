# BuildUp Capital Redesign Plan
**Started:** 2026-02-09 18:35 UTC  
**Goal:** Apply Collection Kings design system for professional, conversion-optimized site

---

## Design System (From Collection Kings)

### Colors (STRICT)
```
king-gold: #D4AF37
king-gold-light: #F4E4B8
king-gold-dark: #B8860B
king-orange: #F97316
king-orange-dark: #EA580C
slate-900: #0F172A
slate-700-50: Standard scale
white: #FFFFFF
```

### Typography
- Headings: `font-black uppercase tracking-tight`
- Body: `font-normal leading-relaxed`
- Font: Inter only
- Sizes: text-4xl (h2), text-xl (h3), text-base (body)

### Borders & Shapes
- **Sharp edges ONLY** (no rounded corners)
- Standard: border-2
- Emphasis: border-4
- Accent lines: w-24 h-1 bg-king-gold

### Buttons
- Primary: `px-10 py-4 bg-king-orange hover:bg-king-orange-dark text-white font-black uppercase`
- Secondary: `px-8 py-3 bg-king-gold hover:bg-king-gold-dark text-slate-900 font-black uppercase`

---

## Current State Analysis

### Homepage Issues
- Old color scheme (needs gold + slate)
- Rounded corners everywhere
- Generic CTAs
- No ROI calculator
- No trust badges
- No case studies
- Weak social proof

---

## Redesign Checklist

### 1. Homepage Hero
- [ ] Update to slate-900 background
- [ ] Add gold accent borders
- [ ] Sharp corners on all elements
- [ ] Specific value prop
- [ ] Stats bar (loans funded, years, success rate)

### 2. Color System
- [ ] Replace all old colors with king-gold + slate-900
- [ ] Remove rounded corners site-wide
- [ ] Apply Inter font
- [ ] Font-black headings, font-normal body

### 3. CTAs
- [ ] Update all buttons to new design system
- [ ] Specific value CTAs ("Get $50K-500K Funding" not "Apply Now")
- [ ] Add urgency ("Limited Capital Available This Month")

### 4. Components to Add
- [ ] ROI Calculator (for borrowers - loan calculator)
- [ ] Trust badges component
- [ ] Social proof bar (recent loans funded)
- [ ] Case studies section
- [ ] Stats section (animated counters)

### 5. Content Updates
- [ ] Specific numbers ($ amounts, years, success stories)
- [ ] Risk reversal copy (no upfront fees, fast approval)
- [ ] Multi-step qualification form (borrower intake)

### 6. Mobile Optimization
- [ ] Test all pages mobile
- [ ] Sticky CTA button
- [ ] Touch targets min 44px

---

## Time Estimate: 4-5 hours

### Breakdown
- Hero + color system: 1 hour
- CTAs + buttons: 30 min
- ROI calculator adaptation: 1 hour
- Trust badges + social proof: 30 min
- Case studies section: 1 hour
- Mobile testing: 30 min
- Polish + deploy: 30 min

---

## Starting Point
Current file: `app/page.tsx` (15KB)
Current components: 2 (components/Navigation.tsx, Footer likely in layout)

---

_Ready to execute._
