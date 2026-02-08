import Link from 'next/link';

export default function Home() {
  const combinedMetrics = [
    { metric: "$50M+", label: "Capital Deployed" },
    { metric: "100+", label: "Deals Closed" },
    { metric: "25 Years", label: "Experience" },
    { metric: "7-Day", label: "Avg Close" },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section - Dual Track Entry */}
      <section className="relative text-white overflow-hidden" style={{ backgroundColor: '#0A2540' }}>
        {/* Subtle background pattern */}
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }}></div>
        
        <div className="container-custom relative z-10 py-20 sm:py-32">
          <div className="max-w-5xl mx-auto">
            {/* Main Headline */}
            <div className="text-center mb-16">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6 text-white">
                BuildUp Capital
              </h1>
              
              <p className="text-xl sm:text-2xl text-gray-300 max-w-3xl mx-auto">
                Private credit for businesses that need capital and investors seeking income.
              </p>
            </div>

            {/* Dual Path Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              {/* Borrower Card */}
              <Link href="/apply" className="group">
                <div className="bg-white rounded-xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border-4 border-transparent group-hover:border-brand-gold">
                  <div className="text-center">
                    <div className="text-6xl mb-6">🏗️</div>
                    <h2 className="text-3xl font-bold mb-4" style={{ color: '#0A2540' }}>
                      I Need Capital
                    </h2>
                    <p className="text-gray-600 mb-6 leading-relaxed text-lg">
                      The deal closes in 14 days. Your bank needs 60. We'll fund it in 7.
                    </p>
                    <div className="inline-flex items-center font-bold text-lg" style={{ color: '#F59E0B' }}>
                      See If You Qualify (2 min)
                      <svg className="w-6 h-6 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </div>
                  </div>
                </div>
              </Link>

              {/* Investor Card */}
              <Link href="/invest" className="group">
                <div className="bg-white rounded-xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border-4 border-transparent group-hover:border-brand-gold">
                  <div className="text-center">
                    <div className="text-6xl mb-6">💰</div>
                    <h2 className="text-3xl font-bold mb-4" style={{ color: '#0A2540' }}>
                      I Have Capital
                    </h2>
                    <p className="text-gray-600 mb-6 leading-relaxed text-lg">
                      Income without tenants, toilets, or market whiplash.
                    </p>
                    <div className="inline-flex items-center font-bold text-lg" style={{ color: '#F59E0B' }}>
                      Download Free Guide
                      <svg className="w-6 h-6 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </div>
                  </div>
                </div>
              </Link>
            </div>

            {/* Combined Trust Metrics */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-3xl mx-auto">
              {combinedMetrics.map((item, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl sm:text-3xl font-bold mb-1" style={{ color: '#F59E0B' }}>
                    {item.metric}
                  </div>
                  <div className="text-xs sm:text-sm uppercase tracking-wide text-gray-300">
                    {item.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-8 bg-gray-50 border-y border-gray-200">
        <div className="container-custom">
          <div className="flex flex-wrap items-center justify-center gap-8 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <span className="text-green-600 text-xl">✓</span>
              <span>Licensed Lender</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-green-600 text-xl">✓</span>
              <span>Asset-Backed Only</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-green-600 text-xl">✓</span>
              <span>First Lien Priority</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-green-600 text-xl">✓</span>
              <span>25 Years Experience</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-green-600 text-xl">✓</span>
              <span>Bank-Level Security</span>
            </div>
          </div>
        </div>
      </section>

      {/* Why BuildUp - Simplified */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4" style={{ color: '#0A2540' }}>
              Built on Experience, Focused on Outcomes
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Whether you're growing a business or growing wealth, we care about how this ends.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-5xl mb-4">🛡️</div>
              <h3 className="text-xl font-bold mb-3" style={{ color: '#0A2540' }}>
                Collateral Discipline
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Asset-backed lending with clear LTV guidelines and first lien priority. We protect all parties.
              </p>
            </div>

            <div className="text-center">
              <div className="text-5xl mb-4">📊</div>
              <h3 className="text-xl font-bold mb-3" style={{ color: '#0A2540' }}>
                Radical Transparency
              </h3>
              <p className="text-gray-600 leading-relaxed">
                No surprises is more valuable than perfect numbers. We communicate honestly, especially during stress.
              </p>
            </div>

            <div className="text-center">
              <div className="text-5xl mb-4">🎯</div>
              <h3 className="text-xl font-bold mb-3" style={{ color: '#0A2540' }}>
                Exit-First Mindset
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Every deal needs a clear exit path. We underwrite the way out before we fund the way in.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="section-padding text-white" style={{ backgroundColor: '#0A2540' }}>
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Whether you need capital or have capital to deploy, we're here to help.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Borrowers */}
            <div className="text-center md:text-left p-8 rounded-lg border border-white/20 bg-white/5">
              <div className="text-4xl mb-4">📋</div>
              <h3 className="text-2xl font-bold mb-3">For Borrowers</h3>
              <p className="text-gray-300 mb-6">
                See if your deal qualifies. No commitment. No credit pull.
              </p>
              <Link href="/apply" className="btn-primary inline-block">
                Get Your Answer in 24 Hours
              </Link>
            </div>

            {/* Investors */}
            <div className="text-center md:text-left p-8 rounded-lg border border-white/20 bg-white/5">
              <div className="text-4xl mb-4">💼</div>
              <h3 className="text-2xl font-bold mb-3">For Investors</h3>
              <p className="text-gray-300 mb-6">
                Learn about asset-backed private credit strategies.
              </p>
              <Link href="/invest" className="btn-secondary-white inline-block">
                Download "Beyond Rentals" Guide
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
