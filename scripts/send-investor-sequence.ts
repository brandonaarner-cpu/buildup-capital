#!/usr/bin/env ts-node

/**
 * Investor Nurture Sequence Automation
 * 
 * Checks Notion for new investor leads and sends appropriate email
 * based on days since download.
 * 
 * Schedule: Run daily via cron (e.g., 9 AM MT)
 * 
 * Usage:
 *   npx ts-node scripts/send-investor-sequence.ts
 */

import { Client } from '@notionhq/client';
import { Resend } from 'resend';

const notion = new Client({ auth: process.env.NOTION_API_KEY });
const resend = new Resend(process.env.RESEND_API_KEY);

// Email sequence (Day 1 sent via API, Days 3-21 sent here)
const investorEmails = [
  {
    day: 3,
    subject: 'The Real Cost of Management Fatigue (And How to Fix It)',
    content: (name: string) => `
      <p>Hi ${name},</p>
      
      <p>Three days ago, you downloaded our "Beyond Rentals" guide. Today, I want to share something most investors don't realize until it's too late:</p>
      
      <p><strong>Management fatigue has a dollar value.</strong></p>
      
      <p>Let's do the math:</p>
      
      <h3>Scenario: 5 Airbnb properties</h3>
      <ul>
        <li>Weekly time investment: 10-15 hours (guest issues, pricing, coordination)</li>
        <li>Your hourly value: $200 (conservative for successful investors)</li>
        <li>Annual time cost: <strong>$104K-$156K</strong></li>
      </ul>
      
      <p>That's the <strong>opportunity cost</strong> of your time spent managing properties.</p>
      
      <h3>But wait, it gets worse:</h3>
      <ul>
        <li>Regulatory risk (2 cities ban STRs → 40% of portfolio at risk)</li>
        <li>Vacancy volatility (recession hits → occupancy drops 30%)</li>
        <li>Maintenance surprises (HVAC dies → $15K unplanned expense)</li>
        <li>Exit complexity (takes 6 months to sell → capital locked during opportunity)</li>
      </ul>
      
      <h3>Meanwhile, private credit offers:</h3>
      <ul>
        <li>✅ Zero management (underwrite once, monitor quarterly)</li>
        <li>✅ Contractual monthly income (not dependent on occupancy)</li>
        <li>✅ Shorter duration (12-24 months vs. multi-year holds)</li>
        <li>✅ First lien protection (get paid before everyone else)</li>
      </ul>
      
      <p><strong>This isn't theory. It's what we do.</strong></p>
      
      <p>We transitioned from active real estate to private lending because we hit the same wall you're hitting: <strong>great income, exhausting execution.</strong></p>
      
      <h3>What's your time worth?</h3>
      
      <p>If you're spending 10+ hours/week on property management and you're making $200+/hour in your business, you're losing $100K+/year in opportunity cost.</p>
      
      <p><strong>Want to see how the math works for your specific situation?</strong></p>
      
      <p><a href="https://buildup.capital/contact" style="color: #F59E0B; font-weight: bold;">Schedule a 30-minute consultation</a></p>
      
      <p>We'll do a quick portfolio analysis and show you:</p>
      <ul>
        <li>Your current time investment (hours/week)</li>
        <li>Opportunity cost calculation (your hourly rate × hours)</li>
        <li>Potential reallocation strategy (what % to keep vs. transition)</li>
        <li>Expected income change (conservative projections)</li>
      </ul>
      
      <p><strong>No pressure. No sales pitch. Just math.</strong></p>
      
      <p>To your success,<br><strong>The BuildUp Capital Team</strong></p>
      
      <p style="font-size: 12px; color: #6b7280;">P.S. Reply to this email if you have questions. We read every message personally.</p>
    `
  },
  {
    day: 7,
    subject: 'Real Deal Example: $500K Loan at 12% (Step-by-Step)',
    content: (name: string) => `
      <p>Hi ${name},</p>
      
      <p>Most private credit explanations are theoretical. Today, I'm showing you a <strong>real deal</strong> (numbers changed for confidentiality).</p>
      
      <h2>The Opportunity:</h2>
      
      <p><strong>Borrower:</strong> Commercial contractor expanding into new market<br>
      <strong>Need:</strong> $500K bridge capital for equipment + working capital<br>
      <strong>Timeline:</strong> 18 months (refinance or asset sale at maturity)<br>
      <strong>Collateral:</strong> $850K in equipment (excavators, trucks, tools)</p>
      
      <h2>Our Underwriting:</h2>
      
      <h3>1. Collateral Quality Check</h3>
      <ul>
        <li>Third-party appraisal: $850K</li>
        <li>Equipment type: Heavy machinery (liquid secondary market)</li>
        <li>Condition: Well-maintained, service records verified</li>
        <li>✅ <strong>Pass:</strong> Real, tangible, resellable assets</li>
      </ul>
      
      <h3>2. Loan-to-Value (LTV)</h3>
      <ul>
        <li>Loan amount: $500K</li>
        <li>Collateral value: $850K</li>
        <li>LTV: <strong>58.8%</strong></li>
        <li>Equity cushion: <strong>41.2%</strong> ($350K)</li>
        <li>✅ <strong>Pass:</strong> LTV < 70% (our max)</li>
      </ul>
      
      <h3>3. Borrower Quality</h3>
      <ul>
        <li>Track record: 12 years in business</li>
        <li>Credit score: 720+</li>
        <li>References: 3 prior lenders (all positive)</li>
        <li>Personal guarantee: Yes (principals have $2M+ net worth)</li>
        <li>✅ <strong>Pass:</strong> Experienced, creditworthy, skin in game</li>
      </ul>
      
      <h3>4. Deal Economics</h3>
      <ul>
        <li>Interest rate: <strong>12% annual</strong></li>
        <li>Monthly payment: $5,000 (interest-only)</li>
        <li>Origination fee: 2% ($10K)</li>
        <li>Total return: <strong>14.2% annualized</strong> (interest + fees)</li>
        <li>✅ <strong>Pass:</strong> Compensates for risk + illiquidity</li>
      </ul>
      
      <h3>5. Legal Structure</h3>
      <ul>
        <li>Promissory note: Attorney-drafted, enforceable</li>
        <li>UCC-1 filing: First lien priority on all equipment</li>
        <li>Personal guarantees: From both principals</li>
        <li>Insurance: Borrower carries $1M+ liability + property coverage</li>
        <li>✅ <strong>Pass:</strong> Legally protected, collateral perfected</li>
      </ul>
      
      <h2>The Decision: FUNDED</h2>
      
      <p><strong>What Happened:</strong></p>
      <ul>
        <li>Funded: June 2023</li>
        <li>Performance: Paid on time every month (18 months)</li>
        <li>Maturity: December 2024</li>
        <li>Outcome: Refinanced with traditional bank, full repayment</li>
        <li>Our return: 14.2% annualized</li>
      </ul>
      
      <h2>Why This Worked:</h2>
      
      <ol>
        <li><strong>Conservative LTV:</strong> Even if equipment value dropped 30%, we'd still be protected</li>
        <li><strong>Monthly income:</strong> $5K/month = predictable cash flow</li>
        <li><strong>Clear exit:</strong> Borrower had refinance path with bank (we bridged the gap)</li>
        <li><strong>No surprises:</strong> Borrower performed, we got paid</li>
      </ol>
      
      <p><strong>This is what private credit looks like in practice.</strong></p>
      
      <p>Not every deal is this clean. But this is our <strong>minimum standard.</strong></p>
      
      <p><strong>Want to see more examples?</strong></p>
      
      <p><a href="https://buildup.capital/contact" style="color: #F59E0B; font-weight: bold;">Schedule a consultation</a> and we'll walk you through:</p>
      <ul>
        <li>3 more real deals (different asset classes)</li>
        <li>How we evaluate collateral</li>
        <li>What we look for in borrowers</li>
        <li>How we structure protection</li>
      </ul>
      
      <p><strong>No obligation. Just education.</strong></p>
      
      <p>To your success,<br><strong>The BuildUp Capital Team</strong></p>
      
      <p style="font-size: 12px; color: #6b7280;">P.S. If you're wondering "Can I invest in deals like this?"—that's exactly what we help accredited investors do. Reply if you want details.</p>
    `
  },
  {
    day: 10,
    subject: 'The 3 Mistakes That Lose Investors Money (And How to Avoid Them)',
    content: (name: string) => `
      <p>Hi ${name},</p>
      
      <p>After 25 years in lending and seeing hundreds of deals (good and bad), we've identified the <strong>3 most expensive mistakes</strong> private credit investors make.</p>
      
      <p>Each one has cost investors we know 6-7 figures.</p>
      
      <p><strong>Here's how to avoid them:</strong></p>
      
      <h2>Mistake #1: Chasing Yield</h2>
      
      <p><strong>The Trap:</strong><br>"This deal pays 20% interest—way better than your 12% deals!"</p>
      
      <p><strong>Why It's Dangerous:</strong><br>High yield = high risk. Always.</p>
      
      <p>If someone's offering 20%, ask: <strong>"Why is no one else willing to lend to them at 15%?"</strong></p>
      
      <p>Usually, the answer is:</p>
      <ul>
        <li>Poor credit</li>
        <li>Weak collateral</li>
        <li>Risky business model</li>
        <li>Desperate situation</li>
      </ul>
      
      <p><strong>The Fix:</strong><br>Accept market rates (10-15% for asset-backed lending). If it sounds too good to be true, walk away.</p>
      
      <p><strong>Real Example:</strong><br>Investor we know chased a 22% return on a spec development deal. Developer went bankrupt, property sat half-finished, foreclosure took 18 months, recovered 40 cents on the dollar.</p>
      
      <p><strong>Loss:</strong> $360K on a $600K loan.</p>
      
      <p><strong>Lesson:</strong> Boring is beautiful. Predictable beats exciting.</p>
      
      <h2>Mistake #2: Ignoring LTV</h2>
      
      <p><strong>The Trap:</strong><br>"The borrower is great and the asset is solid, so 85% LTV is fine."</p>
      
      <p><strong>Why It's Dangerous:</strong><br>No margin of safety. If the asset drops 15% in value, you're underwater.</p>
      
      <p><strong>The Fix:</strong><br>Max LTV = 70%. Period. No exceptions.</p>
      
      <p>This gives you a 30% equity cushion. Even if things go wrong (and they will occasionally), you're protected.</p>
      
      <p><strong>Real Example:</strong><br>Investor funded an 80% LTV loan on commercial property. Market softened 20%, borrower defaulted, foreclosure + sale netted 65% of original value.</p>
      
      <p><strong>Loss:</strong> 15% of principal ($150K on a $1M loan).</p>
      
      <p><strong>Lesson:</strong> LTV discipline is your first line of defense. Don't negotiate it away.</p>
      
      <h2>Mistake #3: Skipping Legal Review</h2>
      
      <p><strong>The Trap:</strong><br>"We trust the borrower. We don't need expensive lawyers."</p>
      
      <p><strong>Why It's Dangerous:</strong><br>Trust doesn't hold up in court. Contracts do (or don't, if they're poorly drafted).</p>
      
      <p><strong>The Fix:</strong><br>Always use attorney-reviewed documents. Always. Worth the $2-5K upfront.</p>
      
      <p>Specifically, you need:</p>
      <ul>
        <li>Promissory note (enforceable payment terms)</li>
        <li>Security agreement (perfected lien on collateral)</li>
        <li>Personal guarantees (from principals with assets)</li>
        <li>Title insurance (for real estate) or UCC-1 filing (for equipment)</li>
      </ul>
      
      <p><strong>Real Example:</strong><br>Investor lent $400K with a handshake deal (borrower was a "friend"). Borrower defaulted, investor discovered lien wasn't properly filed, another lender had priority.</p>
      
      <p><strong>Loss:</strong> $400K (total write-off).</p>
      
      <p><strong>Lesson:</strong> Legal structure protects you when relationships fail. Don't skip it.</p>
      
      <h2>How We Avoid These Mistakes:</h2>
      
      <p>At BuildUp Capital, we have <strong>hard rules</strong>:</p>
      
      <ol>
        <li>Max yield expectations: 10-15% (we don't chase)</li>
        <li>Max LTV: 70% (no exceptions)</li>
        <li>Attorney-reviewed docs: Every single deal</li>
        <li>Reserve requirements: 15% minimum liquidity</li>
      </ol>
      
      <p><strong>This is boring. And that's the point.</strong></p>
      
      <p>We'd rather make 12% safely than chase 20% and risk losing principal.</p>
      
      <p><strong>Want to see how we apply these rules to real deals?</strong></p>
      
      <p><a href="https://buildup.capital/contact" style="color: #F59E0B; font-weight: bold;">Schedule a consultation</a> and we'll show you:</p>
      <ul>
        <li>Our underwriting checklist (the exact criteria we use)</li>
        <li>Red flags we walk away from (no matter how good the deal looks)</li>
        <li>How we structure protection (legal + collateral)</li>
      </ul>
      
      <p><strong>Free. No pressure. Just transparency.</strong></p>
      
      <p>To your success,<br><strong>The BuildUp Capital Team</strong></p>
      
      <p style="font-size: 12px; color: #6b7280;">P.S. If you've already made one of these mistakes, don't worry—most investors have (including us, earlier in our careers). The key is learning from them.</p>
    `
  },
  {
    day: 14,
    subject: '"When should I keep my rentals vs. transition to private credit?"',
    content: (name: string) => `
      <p>Hi ${name},</p>
      
      <p>The #1 question we get from successful real estate investors:</p>
      
      <p><strong>"Should I sell my rentals and go all-in on private credit?"</strong></p>
      
      <p><strong>Short answer: No.</strong></p>
      
      <p><strong>Better answer: It depends on your portfolio, goals, and opportunity cost.</strong></p>
      
      <p>Here's the framework we use:</p>
      
      <h2>The "Keep vs. Transition" Framework</h2>
      
      <h3>Keep your rental properties if:</h3>
      
      <ul>
        <li>✅ They're <strong>truly passive</strong> (great PM, low maintenance, stable tenants)</li>
        <li>✅ They're in <strong>stable markets</strong> (no regulatory risk, strong fundamentals)</li>
        <li>✅ Cash-on-cash return > <strong>10% after ALL expenses</strong></li>
        <li>✅ You have <strong>emotional attachment</strong> (first property, sentimental value)</li>
        <li>✅ You're still <strong>building wealth</strong> (want appreciation + cash flow)</li>
      </ul>
      
      <h3>Consider transitioning if:</h3>
      
      <ul>
        <li>⚠️ Management is <strong>eating your time</strong> (even with PM, you're still coordinating)</li>
        <li>⚠️ Regulatory risk is <strong>real</strong> (STR bans, zoning changes, new taxes)</li>
        <li>⚠️ Cash-on-cash < <strong>8% after expenses</strong> (opportunity cost too high)</li>
        <li>⚠️ Capital is <strong>locked up</strong> (and you have better uses for it)</li>
        <li>⚠️ You're in <strong>wealth preservation mode</strong> (prioritize income over appreciation)</li>
      </ul>
      
      <h2>Real Example: Sarah's Hybrid Strategy</h2>
      
      <p>(From your guide—here's the full story)</p>
      
      <p><strong>Sarah's Original Portfolio:</strong></p>
      <ul>
        <li>8 Airbnb properties across 3 markets</li>
        <li>$450K gross revenue | $180K net (40% margin)</li>
        <li>10-15 hours/week management time</li>
        <li>High stress, regulatory uncertainty</li>
      </ul>
      
      <p><strong>Sarah's Decision:</strong></p>
      <ul>
        <li><strong>Keep:</strong> 4 best-performing Airbnbs (stable markets, lowest maintenance)</li>
        <li><strong>Sell:</strong> 4 underperforming properties ($1.2M proceeds)</li>
        <li><strong>Deploy:</strong> $1.2M into private credit (12-15% returns)</li>
      </ul>
      
      <p><strong>Results After 12 Months:</strong></p>
      
      <table border="1" cellpadding="10" style="border-collapse: collapse; width: 100%;">
        <tr>
          <th>Metric</th>
          <th>Before</th>
          <th>After</th>
          <th>Change</th>
        </tr>
        <tr>
          <td>Gross Income</td>
          <td>$450K</td>
          <td>$420K</td>
          <td>-7%</td>
        </tr>
        <tr>
          <td>Net Income</td>
          <td>$180K</td>
          <td>$240K</td>
          <td>+33%</td>
        </tr>
        <tr>
          <td>Time/Week</td>
          <td>10-15 hrs</td>
          <td>3-5 hrs</td>
          <td>-70%</td>
        </tr>
        <tr>
          <td>Stress Level</td>
          <td>High</td>
          <td>Medium</td>
          <td>⬇️</td>
        </tr>
        <tr>
          <td>Liquidity</td>
          <td>Low</td>
          <td>Medium</td>
          <td>⬆️</td>
        </tr>
      </table>
      
      <p><strong>Sarah's takeaway:</strong><br>"I make more money, work less, and sleep better. Why didn't I do this sooner?"</p>
      
      <h2>Your Portfolio Analysis</h2>
      
      <p>Want to see what this looks like for <strong>your specific situation</strong>?</p>
      
      <p><a href="https://buildup.capital/contact" style="color: #F59E0B; font-weight: bold;">Schedule a free consultation</a> and we'll do a 30-minute portfolio review:</p>
      
      <p><strong>We'll calculate:</strong></p>
      <ul>
        <li>Your current time investment (hours/week)</li>
        <li>Opportunity cost (your hourly rate × time)</li>
        <li>Cash-on-cash return (after ALL expenses)</li>
        <li>Potential reallocation strategy (what to keep vs. transition)</li>
        <li>Projected income change (conservative estimates)</li>
      </ul>
      
      <p><strong>We'll tell you honestly:</strong></p>
      <ul>
        <li>Which properties you should keep</li>
        <li>Which properties you should consider selling</li>
        <li>How much to allocate to private credit (if any)</li>
        <li>Whether this strategy even makes sense for you</li>
      </ul>
      
      <p><strong>No sales pitch. Just math.</strong></p>
      
      <p>Some investors leave the call and decide to keep 100% of their rentals. That's fine. The goal is clarity, not conversion.</p>
      
      <p>To your success,<br><strong>The BuildUp Capital Team</strong></p>
      
      <p style="font-size: 12px; color: #6b7280;">P.S. We're not anti-rental. We still own rentals ourselves. But we also know when it makes sense to diversify. Let's figure out what makes sense for you.</p>
    `
  },
  {
    day: 17,
    subject: 'How We Think About Risk (And Why "No Surprises" > "Perfect Numbers")',
    content: (name: string) => `
      <p>Hi ${name},</p>
      
      <p>Most lenders sell you on <strong>perfect track records</strong> and <strong>maximum returns</strong>.</p>
      
      <p>We don't.</p>
      
      <p>Here's why:</p>
      
      <p><strong>Perfect track records lie. Real track records teach.</strong></p>
      
      <p>At BuildUp Capital, we've funded 100+ deals over 25 years.</p>
      
      <ul>
        <li>95% performed exactly as expected</li>
        <li>3% had minor issues (late payments, renegotiated terms)</li>
        <li>2% defaulted (we recovered 85-100% of principal via collateral sales)</li>
      </ul>
      
      <p><strong>We share all of this. Especially the 2%.</strong></p>
      
      <p>Because <strong>how we handled the defaults</strong> tells you more about our underwriting than the 95% that went smoothly.</p>
      
      <h2>Our 3 Investment Principles</h2>
      
      <h3>1. Downside-First Thinking</h3>
      
      <p>We underwrite <strong>the way out before we fund the way in.</strong></p>
      
      <p>Every deal must answer:</p>
      <ul>
        <li>If this goes wrong, how do we get repaid?</li>
        <li>What's our margin of safety? (LTV, DSCR, equity cushion)</li>
        <li>What's the worst-case scenario? (default + foreclosure + distressed sale)</li>
      </ul>
      
      <p>If we can't recover 100% of principal in a worst-case scenario, <strong>we don't fund.</strong></p>
      
      <p><strong>This is boring. And safe.</strong></p>
      
      <h3>2. Radical Transparency</h3>
      
      <p>We don't hide stressed deals.</p>
      
      <p>When a borrower misses a payment, we:</p>
      <ul>
        <li>Notify investors immediately</li>
        <li>Share the plan (forbearance vs. foreclosure)</li>
        <li>Provide weekly updates until resolved</li>
      </ul>
      
      <p><strong>"No surprises" is more valuable than "perfect numbers."</strong></p>
      
      <p>Investors who work with us know:</p>
      <ul>
        <li>Default ≠ loss (we have collateral)</li>
        <li>Stress ≠ panic (we have processes)</li>
        <li>Problems ≠ secrets (we communicate openly)</li>
      </ul>
      
      <p><strong>This builds trust. And referrals.</strong></p>
      
      <h3>3. Partnership Over Extraction</h3>
      
      <p>We see borrowers as partners, not transactions.</p>
      
      <p>Most lenders:</p>
      <ul>
        <li>Extract maximum interest</li>
        <li>Push borrowers toward banks at refinance</li>
        <li>View defaults as adversarial</li>
      </ul>
      
      <p>We:</p>
      <ul>
        <li>Charge fair rates (10-15%, not 18-22%)</li>
        <li>Help borrowers graduate to traditional financing</li>
        <li>Work through problems collaboratively</li>
      </ul>
      
      <p><strong>90% of our borrowers become repeat clients.</strong></p>
      
      <p>Why? Because we care about <strong>how this ends</strong>, not just how much we make.</p>
      
      <h2>What This Means for Investors</h2>
      
      <p>When you invest with us, you're betting on:</p>
      
      <ol>
        <li><strong>Conservative underwriting</strong> (not maximum returns)</li>
        <li><strong>Transparent communication</strong> (especially during stress)</li>
        <li><strong>Long-term relationships</strong> (not one-off deals)</li>
      </ol>
      
      <p><strong>If you want 20% returns, we're not your partner.</strong></p>
      
      <p><strong>If you want 12-15% returns with downside protection and honest communication, let's talk.</strong></p>
      
      <p><a href="https://buildup.capital/contact" style="color: #F59E0B; font-weight: bold;">Schedule a consultation</a></p>
      
      <p>To your success,<br><strong>The BuildUp Capital Team</strong></p>
      
      <p style="font-size: 12px; color: #6b7280;">P.S. Our 2% default rate is higher than some lenders advertise (0%). We're honest about it. Because we'd rather you know the truth than believe a perfect track record that doesn't exist.</p>
    `
  },
  {
    day: 21,
    subject: 'Final Question: What\'s Next for You?',
    content: (name: string) => `
      <p>Hi ${name},</p>
      
      <p>Three weeks ago, you downloaded "Beyond Rentals."</p>
      
      <p>You've received:</p>
      <ul>
        <li>Real deal examples</li>
        <li>Mistake frameworks</li>
        <li>Portfolio analysis tools</li>
        <li>Our investment philosophy</li>
      </ul>
      
      <p><strong>Now it's decision time.</strong></p>
      
      <h2>Option 1: Stay in Rentals</h2>
      
      <p>If you're happy with your current portfolio, that's great.</p>
      
      <p>Rentals can be an excellent wealth-building tool. If they're working for you, stick with them.</p>
      
      <p><strong>This email series has served its purpose:</strong> You now know private credit exists as an alternative when/if you need it.</p>
      
      <h2>Option 2: Explore Further</h2>
      
      <p>If you're intrigued but not ready to act, that's fine too.</p>
      
      <p><strong>Here's what we recommend:</strong></p>
      <ul>
        <li>Save this email thread (for future reference)</li>
        <li>Subscribe to our quarterly investment memos (we'll send deal examples, market updates, lessons learned)</li>
        <li>Reach out when your situation changes</li>
      </ul>
      
      <p><strong>No pressure. No expiration date.</strong></p>
      
      <h2>Option 3: Let's Talk</h2>
      
      <p>If you're seriously considering private credit, let's have a conversation.</p>
      
      <p><strong>Here's what we'll do on a 30-minute consultation:</strong></p>
      
      <ol>
        <li><strong>Review your portfolio:</strong>
          <ul>
            <li>Current time investment</li>
            <li>Cash-on-cash returns</li>
            <li>Opportunity costs</li>
            <li>Risk concentration</li>
          </ul>
        </li>
        
        <li><strong>Show you real opportunities:</strong>
          <ul>
            <li>Current deals we're underwriting</li>
            <li>LTV, DSCR, terms, expected returns</li>
            <li>How we structure protection</li>
          </ul>
        </li>
        
        <li><strong>Answer your questions:</strong>
          <ul>
            <li>How do I get started?</li>
            <li>What's the minimum investment?</li>
            <li>How liquid is this?</li>
            <li>What if something goes wrong?</li>
          </ul>
        </li>
        
        <li><strong>Give you an honest assessment:</strong>
          <ul>
            <li>Is private credit right for you?</li>
            <li>Should you keep 100% in rentals?</li>
            <li>What's a reasonable allocation?</li>
            <li>What are the next steps?</li>
          </ul>
        </li>
      </ol>
      
      <p><strong>No sales pitch. No commitment.</strong></p>
      
      <p>If we think rentals are better for you, we'll tell you. We'd rather be honest than close a deal that's not in your best interest.</p>
      
      <p><a href="https://buildup.capital/contact" style="color: #F59E0B; font-weight: bold;">Schedule your consultation here</a></p>
      
      <h2>Thank You</h2>
      
      <p>Whether you stay in rentals, explore private credit, or decide this isn't for you, thank you for reading.</p>
      
      <p>We built BuildUp Capital because we were once where you are: successful in real estate, but exhausted by management.</p>
      
      <p>Private credit gave us <strong>income without the burden</strong>. And we wanted to share that option with others.</p>
      
      <p><strong>If this resonates, let's talk.</strong></p>
      
      <p><strong>If not, best of luck with your investments.</strong></p>
      
      <p>To your success,<br><strong>The BuildUp Capital Team</strong></p>
      
      <hr style="margin: 30px 0; border: none; border-top: 1px solid #e5e7eb;">
      
      <p style="font-size: 12px; color: #6b7280;">P.S. This is the last email in the sequence. If you ever want to reconnect, just reply to any email—we read them all personally.</p>
    `
  }
];

/**
 * Get new investor leads from Notion
 */
async function getInvestorLeads() {
  if (!process.env.NOTION_INVESTORS_DB_ID) {
    console.log('⚠️  NOTION_INVESTORS_DB_ID not set, skipping...');
    return [];
  }

  const response = await notion.databases.query({
    database_id: process.env.NOTION_INVESTORS_DB_ID,
    filter: {
      property: 'Source',
      select: {
        equals: 'Beyond Rentals Download',
      },
    },
  });

  return response.results;
}

/**
 * Send nurture email via Resend
 */
async function sendNurtureEmail(lead: any, emailData: any) {
  const name = lead.properties.Name?.title?.[0]?.plain_text || 'there';
  const email = lead.properties.Email?.email;

  if (!email) {
    console.log(`⚠️  No email for lead: ${name}`);
    return;
  }

  const htmlContent = emailData.content(name);

  const emailHtml = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <div style="background: linear-gradient(135deg, #0A2540 0%, #1e3a5f 100%); color: white; padding: 30px 20px; text-align: center;">
        <h1 style="margin: 0; font-size: 28px; font-weight: bold;">BUILDUP CAPITAL</h1>
        <p style="margin: 10px 0 0 0; font-size: 14px; opacity: 0.9;">Private Credit for Sophisticated Investors</p>
      </div>
      
      <div style="padding: 30px 20px; background: #ffffff; color: #1a1a1a; line-height: 1.6;">
        ${htmlContent}
      </div>
      
      <div style="background: #f9fafb; padding: 20px; text-align: center; border-top: 1px solid #e5e7eb;">
        <p style="margin: 0; color: #6b7280; font-size: 12px;">
          BuildUp Capital | Salt Lake City, Utah<br>
          <a href="mailto:info@buildup.capital" style="color: #F59E0B;">info@buildup.capital</a> | 
          <a href="https://buildup.capital" style="color: #F59E0B;">buildup.capital</a>
        </p>
        <p style="margin: 10px 0 0 0; color: #9ca3af; font-size: 11px;">
          You're receiving this because you downloaded our guide. 
          <a href="{{unsubscribe}}" style="color: #6b7280;">Unsubscribe</a>
        </p>
      </div>
    </div>
  `;

  try {
    const result = await resend.emails.send({
      from: 'BuildUp Capital <info@buildup.capital>',
      to: email,
      subject: emailData.subject,
      html: emailHtml,
    });

    console.log(`   ✓ Sent Day ${emailData.day} email to ${email}`);
    return result;
  } catch (error) {
    console.error(`   ✗ Failed to send to ${email}:`, error);
    throw error;
  }
}

/**
 * Main execution
 */
async function main() {
  console.log('📧 Investor Nurture Sequence Automation\n');

  if (!process.env.RESEND_API_KEY) {
    console.error('❌ RESEND_API_KEY not set');
    process.exit(1);
  }

  if (!process.env.NOTION_API_KEY) {
    console.error('❌ NOTION_API_KEY not set');
    process.exit(1);
  }

  console.log('Fetching leads from Notion...');
  const leads = await getInvestorLeads();
  console.log(`Found ${leads.length} investor leads\n`);

  const now = new Date();

  for (const lead of leads) {
    const name = lead.properties.Name?.title?.[0]?.plain_text || 'Unknown';
    const createdAt = new Date(lead.properties['Created At']?.date?.start || lead.created_time);
    const daysSince = Math.floor((now.getTime() - createdAt.getTime()) / (1000 * 60 * 60 * 24));

    console.log(`👤 ${name} (joined ${daysSince} days ago)`);

    // Find the appropriate email to send
    const emailToSend = investorEmails.find(email => email.day === daysSince);

    if (emailToSend) {
      console.log(`   📤 Sending Day ${emailToSend.day} email...`);
      await sendNurtureEmail(lead, emailToSend);
    } else {
      console.log(`   ⏭️  No email scheduled for day ${daysSince}`);
    }
  }

  console.log('\n✅ Done!');
}

// Run main function
if (require.main === module) {
  main().catch(error => {
    console.error('❌ Error:', error);
    process.exit(1);
  });
}

module.exports = { main };
