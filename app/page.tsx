import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* Hero Section - Dual Track */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in-up">
              BuildUp Capital
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 mb-8 animate-fade-in-up" style={{animationDelay: '0.2s'}}>
              Real estate-backed capital for time-sensitive deals
            </p>
          </div>

          {/* Two-Path Split */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Borrower Track */}
            <Link href="/borrowers" className="group">
              <div className="bg-white/10 backdrop-blur-sm border-2 border-white/20 rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 hover:scale-105 cursor-pointer">
                <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-400 transition-colors">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <h2 className="text-3xl font-bold mb-4 text-center">I Need Capital</h2>
                <p className="text-lg text-slate-300 text-center mb-6">
                  Fast bridge loans for acquisitions, renovations, and complex borrowers
                </p>
                <div className="space-y-3">
                  <div className="flex items-center text-slate-200">
                    <svg className="w-5 h-5 mr-3 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>7-day average close time</span>
                  </div>
                  <div className="flex items-center text-slate-200">
                    <svg className="w-5 h-5 mr-3 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Clear LTV/ARV guidelines</span>
                  </div>
                  <div className="flex items-center text-slate-200">
                    <svg className="w-5 h-5 mr-3 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Exit-first underwriting</span>
                  </div>
                </div>
                <div className="mt-6 text-center">
                  <span className="inline-block px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg group-hover:bg-blue-400 transition-colors">
                    Learn More →
                  </span>
                </div>
              </div>
            </Link>

            {/* Investor Track */}
            <Link href="/investors" className="group">
              <div className="bg-white/10 backdrop-blur-sm border-2 border-white/20 rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 hover:scale-105 cursor-pointer">
                <div className="w-16 h-16 bg-amber-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-amber-400 transition-colors">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h2 className="text-3xl font-bold mb-4 text-center">I Have Capital</h2>
                <p className="text-lg text-slate-300 text-center mb-6">
                  Monthly income without tenants, toilets, or market whiplash
                </p>
                <div className="space-y-3">
                  <div className="flex items-center text-slate-200">
                    <svg className="w-5 h-5 mr-3 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>100% asset-backed</span>
                  </div>
                  <div className="flex items-center text-slate-200">
                    <svg className="w-5 h-5 mr-3 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Monthly distributions</span>
                  </div>
                  <div className="flex items-center text-slate-200">
                    <svg className="w-5 h-5 mr-3 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Radical transparency</span>
                  </div>
                </div>
                <div className="mt-6 text-center">
                  <span className="inline-block px-6 py-3 bg-amber-500 text-white font-semibold rounded-lg group-hover:bg-amber-400 transition-colors">
                    Learn More →
                  </span>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Row */}
      <section className="py-16 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="stat-card">
              <div className="text-5xl font-bold text-slate-900 mb-2">$50M+</div>
              <div className="text-lg text-slate-600">Capital Deployed</div>
            </div>
            <div className="stat-card" style={{animationDelay: '0.2s'}}>
              <div className="text-5xl font-bold text-slate-900 mb-2">100+</div>
              <div className="text-lg text-slate-600">Deals Closed</div>
            </div>
            <div className="stat-card" style={{animationDelay: '0.4s'}}>
              <div className="text-5xl font-bold text-slate-900 mb-2">25</div>
              <div className="text-lg text-slate-600">Years Experience</div>
            </div>
          </div>
        </div>
      </section>

      {/* What Sets Us Apart */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              What Sets Us Apart
            </h2>
            <p className="text-xl text-slate-600">
              Built on experience. Focused on outcomes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Speed + Certainty</h3>
              <p className="text-slate-600">
                Fast yes/no decisions. Clear timelines. No surprises. When timing matters, we move.
              </p>
              <div className="mt-4 text-sm font-semibold text-blue-600">
                Average 7-day close
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Collateral Discipline</h3>
              <p className="text-slate-600">
                Clear LTV/ARV guidelines. Lien priority. Taxes and insurance current. We protect all parties.
              </p>
              <div className="mt-4 text-sm font-semibold text-slate-600">
                Conservative underwriting
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Exit-First Mindset</h3>
              <p className="text-slate-600">
                Every loan needs a clear exit: sale, refi, SBA, or liquidity event. We plan the path out.
              </p>
              <div className="mt-4 text-sm font-semibold text-green-600">
                100% borrower success
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              What People Say
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-slate-50 p-8 rounded-xl">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-slate-700 mb-6">
                "BuildUp funded our acquisition when the bank couldn't move fast enough. We closed in 9 days and didn't lose the deal."
              </p>
              <div className="font-semibold text-slate-900">— Michael R.</div>
              <div className="text-sm text-slate-600">Real Estate Investor, Phoenix</div>
            </div>

            <div className="bg-slate-50 p-8 rounded-xl">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-slate-700 mb-6">
                "Straightforward process. Clear terms. No hidden fees. They did exactly what they said they'd do."
              </p>
              <div className="font-semibold text-slate-900">— Sarah T.</div>
              <div className="text-sm text-slate-600">Small Business Owner, Denver</div>
            </div>

            <div className="bg-slate-50 p-8 rounded-xl">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-slate-700 mb-6">
                "After SBA declined, BuildUp bridged us while we fixed the issues. Six months later, SBA approved and we refinanced out."
              </p>
              <div className="font-semibold text-slate-900">— James K.</div>
              <div className="text-sm text-slate-600">Franchise Operator, Austin</div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-br from-slate-900 to-slate-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-slate-300 mb-8">
            Choose your path
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/borrowers" className="btn-primary bg-blue-500 hover:bg-blue-400">
              I Need Capital
            </Link>
            <Link href="/investors" className="btn-primary bg-amber-500 hover:bg-amber-400">
              I Have Capital
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
