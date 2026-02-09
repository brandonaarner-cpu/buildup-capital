import Link from "next/link";
import LeadCaptureForm from "@/components/LeadCaptureForm";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in-up">
              Diversified Monthly Income Without Tenants, Toilets, or Market Whiplash
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 mb-8 animate-fade-in-up" style={{animationDelay: '0.2s'}}>
              Backed by real assets and managed by lenders with 25 years of experience
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up" style={{animationDelay: '0.4s'}}>
              <Link href="/investors" className="btn-primary">
                Learn More
              </Link>
              <Link href="/contact" className="btn-secondary bg-white/10 border-white text-white hover:bg-white/20">
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Row */}
      <section className="py-16 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="stat-card">
              <div className="text-5xl font-bold text-slate-900 mb-2">25</div>
              <div className="text-lg text-slate-600">Years Experience</div>
            </div>
            <div className="stat-card" style={{animationDelay: '0.2s'}}>
              <div className="text-5xl font-bold text-slate-900 mb-2">100%</div>
              <div className="text-lg text-slate-600">Asset-Backed</div>
            </div>
            <div className="stat-card" style={{animationDelay: '0.4s'}}>
              <div className="text-5xl font-bold text-slate-900 mb-2">Monthly</div>
              <div className="text-lg text-slate-600">Income Distributions</div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section: Life After Rentals */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              Life After Rentals
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              You've built wealth through real estate. Now it's time for a different approach.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg trust-badge">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Management Fatigue</h3>
              <p className="text-slate-600">
                No more tenant calls, maintenance emergencies, or nightly pricing algorithms. Your time is valuable.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg trust-badge">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Regulatory Risk</h3>
              <p className="text-slate-600">
                Short-term rental regulations change overnight. Cap rate compression threatens traditional rental returns.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg trust-badge">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 17h8m0 0V9m0 8l-8-8-4 4-6-6" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Market Volatility</h3>
              <p className="text-slate-600">
                Stock market swings and tourism-dependent income streams keep you up at night. There's a better way.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section: Private Credit Positioning */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              A Different Kind of Investment
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Private credit: credit-backed cash flow, not appreciation speculation
            </p>
          </div>

          {/* Comparison Table */}
          <div className="overflow-x-auto">
            <table className="comparison-table w-full">
              <thead>
                <tr>
                  <th>Feature</th>
                  <th>Airbnb</th>
                  <th>Traditional Rentals</th>
                  <th>Stocks</th>
                  <th className="bg-blue-900">Private Credit</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="font-semibold">Management Time</td>
                  <td>High (daily)</td>
                  <td>Medium (monthly)</td>
                  <td>Low</td>
                  <td className="bg-green-50 font-semibold">None</td>
                </tr>
                <tr>
                  <td className="font-semibold">Income Predictability</td>
                  <td>Seasonal</td>
                  <td>Moderate</td>
                  <td>Volatile</td>
                  <td className="bg-green-50 font-semibold">High</td>
                </tr>
                <tr>
                  <td className="font-semibold">Market Correlation</td>
                  <td>Tourism-dependent</td>
                  <td>Cap rate risk</td>
                  <td>High</td>
                  <td className="bg-green-50 font-semibold">Low</td>
                </tr>
                <tr>
                  <td className="font-semibold">Asset-Backed</td>
                  <td>Yes (property)</td>
                  <td>Yes (property)</td>
                  <td>No</td>
                  <td className="bg-green-50 font-semibold">Yes (real estate)</td>
                </tr>
                <tr>
                  <td className="font-semibold">Regulatory Risk</td>
                  <td>High</td>
                  <td>Medium</td>
                  <td>Medium</td>
                  <td className="bg-green-50 font-semibold">Low</td>
                </tr>
                <tr>
                  <td className="font-semibold">Income Frequency</td>
                  <td>Nightly</td>
                  <td>Monthly</td>
                  <td>Quarterly</td>
                  <td className="bg-green-50 font-semibold">Monthly</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="text-3xl font-bold text-slate-900 mb-2">No Tenants</div>
              <p className="text-slate-600">No repairs. No vacancy. No midnight emergencies.</p>
            </div>
            <div className="text-center p-6">
              <div className="text-3xl font-bold text-slate-900 mb-2">No Algorithms</div>
              <p className="text-slate-600">Income that doesn't depend on tourism or tech stocks.</p>
            </div>
            <div className="text-center p-6">
              <div className="text-3xl font-bold text-slate-900 mb-2">Real Assets</div>
              <p className="text-slate-600">Every dollar backed by real estate collateral.</p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              How It Works
            </h2>
            <p className="text-xl text-slate-600">
              Simple, transparent, and straightforward
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="relative">
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center text-2xl font-bold text-blue-900 mb-6">
                  1
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Review Opportunities</h3>
                <p className="text-slate-600">
                  We present real estate-backed lending opportunities with full transparency on terms, collateral, and risk.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center text-2xl font-bold text-blue-900 mb-6">
                  2
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Invest Your Capital</h3>
                <p className="text-slate-600">
                  Choose investments that match your goals. Diversify across multiple deals or focus on specific strategies.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center text-2xl font-bold text-blue-900 mb-6">
                  3
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Receive Monthly Income</h3>
                <p className="text-slate-600">
                  Collect predictable monthly distributions while we handle all underwriting, servicing, and asset management.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why BuildUp */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              Why BuildUp Capital
            </h2>
            <p className="text-xl text-slate-600">
              We care about how this ends
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8">
              <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-slate-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Radical Transparency</h3>
              <p className="text-slate-600">
                We show you reality, not perfection. Full disclosure on every deal, every risk, every outcome.
              </p>
            </div>

            <div className="text-center p-8">
              <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-slate-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Experienced Team</h3>
              <p className="text-slate-600">
                25 years of lending through multiple market cycles. We've seen it all and learned from it.
              </p>
            </div>

            <div className="text-center p-8">
              <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-slate-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Graduation Path</h3>
              <p className="text-slate-600">
                We help our borrowers grow. When they're ready for bank financing, we celebrate that success.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-slate-900 to-slate-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Learn More?
          </h2>
          <p className="text-xl text-slate-300 mb-8">
            Discover how private credit can diversify your portfolio and generate predictable monthly income.
          </p>
          <LeadCaptureForm />
        </div>
      </section>
    </>
  );
}
