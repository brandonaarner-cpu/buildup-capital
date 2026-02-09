import Link from "next/link";
import LeadCaptureForm from "@/components/LeadCaptureForm";

export default function InvestorsPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Private Credit for Investors Who've Outgrown Rentals
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 mb-8">
              Asset-backed private credit strategies delivering monthly income without the headaches
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              The BuildUp Difference
            </h2>
            <p className="text-xl text-slate-600">
              Everything you loved about real estate, none of what you didn't
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-slate-50 p-8 rounded-xl">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-blue-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Monthly Income Without Tenants</h3>
              <p className="text-slate-600">
                Predictable distributions every month. No tenant calls, no maintenance, no vacancy risk. Just income.
              </p>
            </div>

            <div className="bg-slate-50 p-8 rounded-xl">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-blue-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">True Diversification</h3>
              <p className="text-slate-600">
                Low correlation to public markets. Real estate collateral without property management. Alternative income stream.
              </p>
            </div>

            <div className="bg-slate-50 p-8 rounded-xl">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-blue-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Predictable Returns</h3>
              <p className="text-slate-600">
                Income that doesn't depend on cap rates, tourism trends, or stock market sentiment. Credit-backed cash flow.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Comparison Table */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              How Private Credit Stacks Up
            </h2>
            <p className="text-xl text-slate-600">
              A side-by-side comparison of investment strategies
            </p>
          </div>

          <div className="overflow-x-auto bg-white rounded-xl shadow-xl">
            <table className="comparison-table w-full">
              <thead>
                <tr>
                  <th className="text-left">Criteria</th>
                  <th>Airbnb/VRBO</th>
                  <th>Traditional Rentals</th>
                  <th>Public Stocks</th>
                  <th className="bg-blue-900">Private Credit</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="font-semibold">Time Commitment</td>
                  <td>10-20 hrs/week</td>
                  <td>5-10 hrs/month</td>
                  <td>Minimal</td>
                  <td className="bg-green-50 font-semibold">Zero</td>
                </tr>
                <tr>
                  <td className="font-semibold">Management Required</td>
                  <td>Daily operations</td>
                  <td>Monthly tasks</td>
                  <td>Portfolio review</td>
                  <td className="bg-green-50 font-semibold">Fully managed</td>
                </tr>
                <tr>
                  <td className="font-semibold">Income Type</td>
                  <td>Seasonal/variable</td>
                  <td>Monthly rent</td>
                  <td>Dividends/gains</td>
                  <td className="bg-green-50 font-semibold">Monthly interest</td>
                </tr>
                <tr>
                  <td className="font-semibold">Market Sensitivity</td>
                  <td>Tourism cycles</td>
                  <td>Cap rate risk</td>
                  <td>High volatility</td>
                  <td className="bg-green-50 font-semibold">Low correlation</td>
                </tr>
                <tr>
                  <td className="font-semibold">Regulatory Risk</td>
                  <td>High (changing)</td>
                  <td>Medium</td>
                  <td>Medium</td>
                  <td className="bg-green-50 font-semibold">Low</td>
                </tr>
                <tr>
                  <td className="font-semibold">Collateral</td>
                  <td>Your property</td>
                  <td>Your property</td>
                  <td>None</td>
                  <td className="bg-green-50 font-semibold">Real estate</td>
                </tr>
                <tr>
                  <td className="font-semibold">Liquidity</td>
                  <td>Low (sell property)</td>
                  <td>Low (sell property)</td>
                  <td>High (daily)</td>
                  <td className="bg-green-50 font-semibold">Term-based</td>
                </tr>
                <tr>
                  <td className="font-semibold">Appreciation Potential</td>
                  <td>Yes</td>
                  <td>Yes</td>
                  <td>Yes</td>
                  <td className="bg-green-50 font-semibold">Income focus</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Investment Process */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              How to Invest
            </h2>
            <p className="text-xl text-slate-600">
              Simple, transparent, and designed for accredited investors
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-8">
            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-lg font-bold text-blue-900">
                  1
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-slate-900 mb-2">Verify Accreditation</h3>
                <p className="text-slate-600">
                  Confirm you meet SEC accredited investor requirements ($200k+ annual income or $1M+ net worth excluding primary residence).
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-lg font-bold text-blue-900">
                  2
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-slate-900 mb-2">Review Opportunities</h3>
                <p className="text-slate-600">
                  Access our current investment opportunities with full transparency on terms, collateral position, borrower profile, and risk factors.
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-lg font-bold text-blue-900">
                  3
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-slate-900 mb-2">Commit Capital</h3>
                <p className="text-slate-600">
                  Minimum investment varies by opportunity. Most offerings start at $50,000. Diversify across multiple deals or concentrate based on your strategy.
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-lg font-bold text-blue-900">
                  4
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-slate-900 mb-2">Receive Monthly Distributions</h3>
                <p className="text-slate-600">
                  Income distributions are sent monthly via ACH. Track performance and access detailed reporting through your investor portal.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-12 p-8 bg-slate-50 rounded-xl">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-slate-900 mb-2">$50K</div>
                <div className="text-slate-600">Typical Minimum Investment</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-slate-900 mb-2">12-36</div>
                <div className="text-slate-600">Months (typical term)</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-slate-900 mb-2">Monthly</div>
                <div className="text-slate-600">Income Timeline</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Lead Magnet Section */}
      <section className="py-20 bg-gradient-to-br from-slate-900 to-slate-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">
              Free Guide: Beyond Rentals
            </h2>
            <p className="text-xl text-slate-300 mb-2">
              How Accredited Investors Use Private Credit
            </p>
            <p className="text-slate-400">
              Learn the strategies sophisticated investors use to generate income without tenants
            </p>
          </div>

          <LeadCaptureForm 
            ctaText="Download Free Guide"
            context="investor-guide"
          />

          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 text-center text-sm text-slate-400">
            <div>✓ Asset allocation strategies</div>
            <div>✓ Risk management frameworks</div>
            <div>✓ Real case studies</div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">
            Ready to Explore Private Credit?
          </h2>
          <p className="text-xl text-slate-600 mb-8">
            Schedule a confidential conversation with our team
          </p>
          <Link href="/contact" className="btn-primary inline-block">
            Schedule a Call
          </Link>
        </div>
      </section>
    </>
  );
}
