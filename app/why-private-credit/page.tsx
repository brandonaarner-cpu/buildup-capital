import Link from 'next/link';

export default function WhyPrivateCreditPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative text-white overflow-hidden" style={{ backgroundColor: '#0A2540' }}>
        <div className="container-custom relative z-10 py-20">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl font-extrabold mb-6">
              Why Private Credit? (And Why Now)
            </h1>
            <p className="text-xl text-gray-300">
              A simple explanation for real estate investors exploring diversification.
            </p>
          </div>
        </div>
      </section>

      {/* What Is Private Credit */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6" style={{ color: '#0A2540' }}>
              What Is Private Credit?
            </h2>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 leading-relaxed mb-4">
                <strong>Private credit</strong> is lending outside the traditional banking system.
              </p>
              
              <p className="text-gray-700 leading-relaxed mb-4">
                Instead of a bank making loans with depositor money, <strong>private lenders</strong> (like us) use investor capital to fund loans that banks can't or won't make.
              </p>
              
              <p className="text-gray-700 leading-relaxed mb-4">
                These are typically <strong>asset-backed</strong> (secured by real estate or business assets), <strong>shorter-term</strong> (12-36 months), and generate <strong>monthly contractual income</strong>.
              </p>

              <div className="bg-gray-100 p-6 rounded-lg my-8">
                <p className="text-lg font-semibold mb-2" style={{ color: '#0A2540' }}>
                  Think of it this way:
                </p>
                <p className="text-gray-700">
                  <strong>You</strong> are the bank. <strong>We</strong> are the underwriters and asset managers. <strong>Borrowers</strong> make monthly payments. <strong>Collateral</strong> protects the downside.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Differs */}
      <section className="section-padding" style={{ backgroundColor: '#F8FAFC' }}>
        <div className="container-custom">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center" style={{ color: '#0A2540' }}>
              How Private Credit Differs From...
            </h2>

            <div className="space-y-8">
              {/* vs Real Estate */}
              <div className="bg-white rounded-lg p-8 shadow-sm">
                <h3 className="text-2xl font-bold mb-4" style={{ color: '#0A2540' }}>
                  Private Credit vs. Real Estate
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-bold mb-2 text-gray-700">Real Estate</h4>
                    <ul className="space-y-2 text-gray-600">
                      <li>• Income depends on occupancy/appreciation</li>
                      <li>• High concentration risk (one asset)</li>
                      <li>• Management required (or PM fees)</li>
                      <li>• Illiquid (months to exit)</li>
                      <li>• Cap rate compression risk</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold mb-2" style={{ color: '#F59E0B' }}>Private Credit</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li>• Contractual monthly payments</li>
                      <li>• Diversified across multiple loans</li>
                      <li>• Zero management (we handle it)</li>
                      <li>• Shorter duration (12-36 mo)</li>
                      <li>• Asset-backed protection</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* vs Stocks */}
              <div className="bg-white rounded-lg p-8 shadow-sm">
                <h3 className="text-2xl font-bold mb-4" style={{ color: '#0A2540' }}>
                  Private Credit vs. Stocks
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-bold mb-2 text-gray-700">Stocks</h4>
                    <ul className="space-y-2 text-gray-600">
                      <li>• Dividends are optional</li>
                      <li>• Market volatility (daily swings)</li>
                      <li>• Correlated to equity markets</li>
                      <li>• No collateral backing</li>
                      <li>• Return depends on appreciation</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold mb-2" style={{ color: '#F59E0B' }}>Private Credit</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li>• Payments are contractual</li>
                      <li>• Stable monthly income</li>
                      <li>• Uncorrelated to public markets</li>
                      <li>• Asset-backed security</li>
                      <li>• Return from yield, not appreciation</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* vs Hard Money */}
              <div className="bg-white rounded-lg p-8 shadow-sm">
                <h3 className="text-2xl font-bold mb-4" style={{ color: '#0A2540' }}>
                  Private Credit vs. Hard Money
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-bold mb-2 text-gray-700">Hard Money</h4>
                    <ul className="space-y-2 text-gray-600">
                      <li>• Often transactional, not relational</li>
                      <li>• High rates, high fees</li>
                      <li>• Short-term focus only</li>
                      <li>• Limited borrower support</li>
                      <li>• May not plan exit paths</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold mb-2" style={{ color: '#F59E0B' }}>Private Credit (Our Approach)</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li>• Long-term partnerships</li>
                      <li>• Fair, transparent pricing</li>
                      <li>• Bridge to permanent capital</li>
                      <li>• Borrower graduation path</li>
                      <li>• Exit-first underwriting</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Now */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6" style={{ color: '#0A2540' }}>
              Why Accredited Investors Are Allocating Now
            </h2>
            
            <div className="space-y-6">
              <div className="flex gap-4 items-start">
                <div className="text-3xl">📉</div>
                <div>
                  <h3 className="text-xl font-bold mb-2" style={{ color: '#0A2540' }}>Volatility in Equities</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Public markets have been on a roller coaster. Investors are seeking uncorrelated income streams.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="text-3xl">🏛️</div>
                <div>
                  <h3 className="text-xl font-bold mb-2" style={{ color: '#0A2540' }}>STR Regulatory Risk</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Cities cracking down on Airbnb. Investors who built wealth in STRs are looking for income without regulatory headaches.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="text-3xl">📊</div>
                <div>
                  <h3 className="text-xl font-bold mb-2" style={{ color: '#0A2540' }}>Cap Rate Compression</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Real estate valuations are stretched in many markets. Private credit offers yield without buying at peak cap rates.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="text-3xl">💰</div>
                <div>
                  <h3 className="text-xl font-bold mb-2" style={{ color: '#0A2540' }}>Search for Yield Without Effort</h3>
                  <p className="text-gray-600 leading-relaxed">
                    After managing properties for years, investors want income that doesn't require nightly pricing, tenant turnover, or maintenance calls.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Risk & Defaults */}
      <section className="section-padding" style={{ backgroundColor: '#F8FAFC' }}>
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6" style={{ color: '#0A2540' }}>
              Risk & Defaults: What Actually Happens
            </h2>
            
            <div className="bg-white rounded-lg p-8 shadow-sm mb-8">
              <h3 className="text-2xl font-bold mb-4" style={{ color: '#0A2540' }}>
                All investing has risk.
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                The difference is whether risk is <strong>visible</strong>, <strong>managed</strong>, and <strong>collateralized</strong>.
              </p>
              <p className="text-gray-700 leading-relaxed">
                We don't pretend defaults never happen. We plan for them. Here's how:
              </p>
            </div>

            <div className="space-y-6">
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h4 className="font-bold mb-2" style={{ color: '#F59E0B' }}>1. Conservative Underwriting</h4>
                <p className="text-gray-600">
                  We underwrite to worst-case scenarios. Clear LTV limits. First lien priority. Asset verification.
                </p>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h4 className="font-bold mb-2" style={{ color: '#F59E0B' }}>2. Early Warning Systems</h4>
                <p className="text-gray-600">
                  We monitor payments, borrower communication, and market conditions. Early detection allows early intervention.
                </p>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h4 className="font-bold mb-2" style={{ color: '#F59E0B' }}>3. Resolution Experience</h4>
                <p className="text-gray-600">
                  25 years managing through 2008, COVID, and rate spikes. We've resolved stressed deals and recovered principal.
                </p>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h4 className="font-bold mb-2" style={{ color: '#F59E0B' }}>4. Collateral Protection</h4>
                <p className="text-gray-600">
                  Every loan is asset-backed. If a borrower can't pay, we have a clear path to recover through collateral.
                </p>
              </div>
            </div>

            <div className="bg-yellow-50 border-2 border-yellow-200 rounded-lg p-6 mt-8">
              <p className="text-lg font-semibold mb-2" style={{ color: '#0A2540' }}>
                Transparency builds trust.
              </p>
              <p className="text-gray-700">
                Our monthly reports show what's performing <em>and</em> what's stressed. We believe no surprises is more valuable than perfect numbers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding text-white" style={{ backgroundColor: '#0A2540' }}>
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">
              Want to Learn More?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Download our free guide or schedule a no-pressure conversation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/invest" className="btn-primary">
                Download Guide
              </Link>
              <Link href="/contact" className="btn-secondary-white">
                Book a Call
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
