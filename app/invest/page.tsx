import Link from 'next/link';

export default function InvestPage() {
  const assetComparison = [
    {
      asset: "Airbnb / STR",
      reality: "High income, high effort, regulatory risk",
      privateCredit: "✅ No management"
    },
    {
      asset: "Long-term rentals",
      reality: "Illiquid, cap-rate sensitive",
      privateCredit: "✅ Shorter duration"
    },
    {
      asset: "Stocks",
      reality: "Liquid but volatile, zero income control",
      privateCredit: "✅ Contractual income"
    },
    {
      asset: "Private Credit",
      reality: "Asset-backed, professionally managed",
      privateCredit: "✅ Monthly cash flow"
    }
  ];

  const howItWorks = [
    {
      step: "1",
      title: "You invest capital",
      description: "Accredited investors allocate capital to our asset-backed lending strategies."
    },
    {
      step: "2",
      title: "We underwrite loans",
      description: "Conservative LTV, first lien priority, clear collateral. Every deal has an exit path."
    },
    {
      step: "3",
      title: "Borrowers make payments",
      description: "Monthly contractual payments from businesses backed by real estate and assets."
    },
    {
      step: "4",
      title: "You receive income",
      description: "Predictable monthly cash flow. No tenants. No management. No market timing."
    },
    {
      step: "5",
      title: "Loans mature or refinance",
      description: "Clear exit paths: sale, bank refi, SBA takeout, or liquidity event."
    }
  ];

  const differentiators = [
    {
      icon: "🛡️",
      title: "Collateral Discipline",
      description: "Every loan is asset-backed. Clear LTV/ARV. First lien priority. We protect downside first."
    },
    {
      icon: "📊",
      title: "Radical Transparency",
      description: "Monthly reports show what's performing, what's stressed, and what we're watching. No surprises is more valuable than perfect numbers."
    },
    {
      icon: "🧠",
      title: "Experience Through Cycles",
      description: "25 years managing credit through 2008, COVID, and rate spikes. We've resolved deals gone sideways — and we'll show you how."
    },
    {
      icon: "🎯",
      title: "Exit-First Mindset",
      description: "Every loan has a clear exit path: sale, refi, SBA, or liquidity event. We underwrite the way out before we fund the way in."
    }
  ];

  const forYou = [
    "You're an accredited investor",
    "You've built wealth in real estate or stocks",
    "You want income without management",
    "You value predictability over max IRR",
    "You're looking to diversify beyond your current assets"
  ];

  const notForYou = [
    "You're chasing max appreciation",
    "You want zero risk (all investing has risk)",
    "You need instant liquidity (private credit has duration)",
    "You're not accredited"
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative text-white overflow-hidden" style={{ backgroundColor: '#0A2540' }}>
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }}></div>
        
        <div className="container-custom relative z-10 py-20 sm:py-32">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6 text-white">
              Private Credit for Investors Who've Outgrown Rentals
            </h1>
            
            <p className="text-lg sm:text-xl text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed">
              Asset-backed private credit strategies delivering monthly income, managed by lenders with 25 years of experience.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/resources" className="btn-primary">
                Download Free Guide
              </Link>
              <Link href="#book-call" className="btn-secondary-white">
                Book a Call
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* The Problem (Resonance) */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-center" style={{ color: '#0A2540' }}>
              If you've built wealth through Airbnb, rentals, or stocks, you've likely felt:
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="flex items-start gap-3">
                <div className="text-2xl">❌</div>
                <div>
                  <h3 className="font-bold mb-1" style={{ color: '#0A2540' }}>Management fatigue</h3>
                  <p className="text-gray-600">Tenants, turnover, nightly pricing algorithms</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="text-2xl">❌</div>
                <div>
                  <h3 className="font-bold mb-1" style={{ color: '#0A2540' }}>Regulatory risk</h3>
                  <p className="text-gray-600">STR restrictions, zoning changes, cap rate compression</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="text-2xl">❌</div>
                <div>
                  <h3 className="font-bold mb-1" style={{ color: '#0A2540' }}>Volatility whiplash</h3>
                  <p className="text-gray-600">Market swings, unpredictable returns</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="text-2xl">❌</div>
                <div>
                  <h3 className="font-bold mb-1" style={{ color: '#0A2540' }}>Illiquidity stress</h3>
                  <p className="text-gray-600">Capital locked up, hard to exit</p>
                </div>
              </div>
            </div>

            <p className="text-xl text-center font-semibold" style={{ color: '#F59E0B' }}>
              You're not alone. Successful investors are reallocating to stability + yield.
            </p>
          </div>
        </div>
      </section>

      {/* Asset Comparison Table */}
      <section className="section-padding" style={{ backgroundColor: '#F8FAFC' }}>
        <div className="container-custom">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-center" style={{ color: '#0A2540' }}>
              How Private Credit Compares
            </h2>

            {/* Desktop Table */}
            <div className="hidden md:block overflow-x-auto">
              <table className="w-full bg-white rounded-lg shadow-sm">
                <thead style={{ backgroundColor: '#0A2540' }}>
                  <tr>
                    <th className="text-left p-4 text-white">Asset</th>
                    <th className="text-left p-4 text-white">Reality Check</th>
                    <th className="text-left p-4 text-white">Private Credit Advantage</th>
                  </tr>
                </thead>
                <tbody>
                  {assetComparison.map((row, index) => (
                    <tr key={index} className="border-b border-gray-200">
                      <td className="p-4 font-semibold" style={{ color: '#0A2540' }}>{row.asset}</td>
                      <td className="p-4 text-gray-600">{row.reality}</td>
                      <td className="p-4 font-semibold" style={{ color: '#F59E0B' }}>{row.privateCredit}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Mobile Cards */}
            <div className="md:hidden space-y-4">
              {assetComparison.map((row, index) => (
                <div key={index} className="bg-white rounded-lg p-6 shadow-sm">
                  <h3 className="font-bold mb-2" style={{ color: '#0A2540' }}>{row.asset}</h3>
                  <p className="text-gray-600 mb-2 text-sm">{row.reality}</p>
                  <p className="font-semibold" style={{ color: '#F59E0B' }}>{row.privateCredit}</p>
                </div>
              ))}
            </div>

            <p className="text-xl text-center font-semibold mt-8" style={{ color: '#0A2540' }}>
              Private credit doesn't replace real estate or stocks — it balances them.
            </p>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-center" style={{ color: '#0A2540' }}>
              How It Works
            </h2>
            <p className="text-lg text-gray-600 mb-12 text-center">
              Simple, transparent, asset-backed.
            </p>

            <div className="space-y-6">
              {howItWorks.map((item, index) => (
                <div key={index} className="flex gap-6 items-start">
                  <div 
                    className="w-16 h-16 rounded-full flex items-center justify-center text-white text-2xl font-bold flex-shrink-0"
                    style={{ backgroundColor: '#F59E0B' }}
                  >
                    {item.step}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2" style={{ color: '#0A2540' }}>
                      {item.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 p-6 rounded-lg" style={{ backgroundColor: '#F8FAFC' }}>
              <p className="text-center text-lg" style={{ color: '#0A2540' }}>
                <span className="font-bold">Tone:</span> Calm, clear, peer-level — no hype, no jargon.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What Makes Us Different */}
      <section className="section-padding" style={{ backgroundColor: '#F8FAFC' }}>
        <div className="container-custom">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center" style={{ color: '#0A2540' }}>
              What Makes Us Different
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {differentiators.map((item, index) => (
                <div key={index} className="bg-white rounded-lg p-8 shadow-sm">
                  <div className="text-5xl mb-4">{item.icon}</div>
                  <h3 className="text-2xl font-bold mb-3" style={{ color: '#0A2540' }}>
                    {item.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Who This Is For */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center" style={{ color: '#0A2540' }}>
              Who This Is For (& Who It's Not)
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* For You */}
              <div className="bg-green-50 rounded-lg p-8 border-2 border-green-200">
                <h3 className="text-2xl font-bold mb-6 flex items-center gap-2" style={{ color: '#0A2540' }}>
                  <span className="text-3xl">✅</span>
                  This is for you if:
                </h3>
                <ul className="space-y-3">
                  {forYou.map((item, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="text-green-600 font-bold">•</span>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Not For You */}
              <div className="bg-red-50 rounded-lg p-8 border-2 border-red-200">
                <h3 className="text-2xl font-bold mb-6 flex items-center gap-2" style={{ color: '#0A2540' }}>
                  <span className="text-3xl">❌</span>
                  This is NOT for you if:
                </h3>
                <ul className="space-y-3">
                  {notForYou.map((item, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="text-red-600 font-bold">•</span>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <p className="text-center text-lg font-semibold mt-8" style={{ color: '#F59E0B' }}>
              Honesty builds trust.
            </p>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section-padding text-white" style={{ backgroundColor: '#0A2540' }}>
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Ready to Learn More?
            </h2>
            <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
              No pressure. No obligation. Just education and transparency.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white/10 rounded-lg p-6">
                <div className="text-4xl mb-4">📥</div>
                <h3 className="text-xl font-bold mb-2">Download Guide</h3>
                <p className="text-gray-300 mb-4 text-sm">
                  "Beyond Rentals: How Accredited Investors Use Private Credit"
                </p>
                <Link href="/resources" className="btn-primary inline-block">
                  Download Free
                </Link>
              </div>

              <div className="bg-white/10 rounded-lg p-6">
                <div className="text-4xl mb-4">📞</div>
                <h3 className="text-xl font-bold mb-2">Book a Call</h3>
                <p className="text-gray-300 mb-4 text-sm">
                  No-pressure conversation about your situation
                </p>
                <Link href="/contact" className="btn-secondary-white inline-block">
                  Schedule Call
                </Link>
              </div>

              <div className="bg-white/10 rounded-lg p-6">
                <div className="text-4xl mb-4">📧</div>
                <h3 className="text-xl font-bold mb-2">Quarterly Insights</h3>
                <p className="text-gray-300 mb-4 text-sm">
                  Join our email list for credit market updates
                </p>
                <Link href="/subscribe" className="btn-secondary-white inline-block">
                  Subscribe
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
