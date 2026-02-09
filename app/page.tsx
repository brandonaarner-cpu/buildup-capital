import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* URGENCY BANNER */}
      <div className="bg-king-orange text-white py-3 text-center font-black text-sm uppercase tracking-wider">
        ⚡ LIMITED CAPITAL AVAILABILITY • First-Come, First-Served This Month
      </div>

      {/* Hero Section - Dual Track */}
      <section className="relative pt-32 pb-20 bg-slate-900 text-white">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(212, 175, 55, 0.1) 35px, rgba(212, 175, 55, 0.1) 70px)'}}></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-block px-6 py-2 bg-king-gold text-slate-900 text-sm font-black uppercase tracking-widest mb-8">
              Real Estate-Backed Capital
            </div>
            <h1 className="text-5xl md:text-6xl font-black mb-6 leading-tight">
              BuildUp Capital
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 mb-8">
              Fast bridge loans when timing matters.
            </p>
          </div>

          {/* Two-Path Split */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Borrower Track */}
            <Link href="/borrowers" className="group">
              <div className="bg-white/10 backdrop-blur-sm border-4 border-white/20 p-8 hover:border-king-gold transition-all duration-300 hover:scale-105 cursor-pointer">
                <div className="w-24 h-1 bg-king-gold mx-auto mb-6"></div>
                <h2 className="text-3xl font-black mb-4 text-center uppercase tracking-tight">I Need Capital</h2>
                <p className="text-lg text-slate-300 text-center mb-6 font-normal">
                  Fast bridge loans for acquisitions, renovations, and time-sensitive deals
                </p>
                <div className="space-y-3">
                  <div className="flex items-center text-slate-200">
                    <span className="text-king-gold font-black text-xl mr-3">✓</span>
                    <span>7-day average close time</span>
                  </div>
                  <div className="flex items-center text-slate-200">
                    <span className="text-king-gold font-black text-xl mr-3">✓</span>
                    <span>Clear LTV/ARV guidelines</span>
                  </div>
                  <div className="flex items-center text-slate-200">
                    <span className="text-king-gold font-black text-xl mr-3">✓</span>
                    <span>Exit-first underwriting</span>
                  </div>
                </div>
                <div className="mt-6 text-center">
                  <span className="inline-block px-8 py-3 bg-king-orange text-white font-black uppercase tracking-wider group-hover:bg-king-orange-dark transition-colors">
                    Get Funded →
                  </span>
                </div>
              </div>
            </Link>

            {/* Investor Track */}
            <Link href="/investors" className="group">
              <div className="bg-white/10 backdrop-blur-sm border-4 border-white/20 p-8 hover:border-king-gold transition-all duration-300 hover:scale-105 cursor-pointer">
                <div className="w-24 h-1 bg-king-gold mx-auto mb-6"></div>
                <h2 className="text-3xl font-black mb-4 text-center uppercase tracking-tight">I Have Capital</h2>
                <p className="text-lg text-slate-300 text-center mb-6 font-normal">
                  Monthly income without tenants, toilets, or market whiplash
                </p>
                <div className="space-y-3">
                  <div className="flex items-center text-slate-200">
                    <span className="text-king-gold font-black text-xl mr-3">✓</span>
                    <span>100% asset-backed</span>
                  </div>
                  <div className="flex items-center text-slate-200">
                    <span className="text-king-gold font-black text-xl mr-3">✓</span>
                    <span>Monthly distributions</span>
                  </div>
                  <div className="flex items-center text-slate-200">
                    <span className="text-king-gold font-black text-xl mr-3">✓</span>
                    <span>Radical transparency</span>
                  </div>
                </div>
                <div className="mt-6 text-center">
                  <span className="inline-block px-8 py-3 bg-king-gold text-slate-900 font-black uppercase tracking-wider group-hover:bg-king-gold-dark transition-colors">
                    Start Earning →
                  </span>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Row */}
      <section className="py-16 bg-king-orange text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-6xl font-black mb-2">$50M+</div>
              <div className="text-sm uppercase tracking-wider font-bold">Capital Deployed</div>
            </div>
            <div>
              <div className="text-6xl font-black mb-2">100+</div>
              <div className="text-sm uppercase tracking-wider font-bold">Deals Closed</div>
            </div>
            <div>
              <div className="text-6xl font-black mb-2">7</div>
              <div className="text-sm uppercase tracking-wider font-bold">Day Avg Close</div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof Bar */}
      <section className="bg-king-gold py-4">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-center gap-8 text-slate-900 font-bold text-sm overflow-x-auto whitespace-nowrap">
            <span>✓ $250K acquisition funded (3 days ago)</span>
            <span className="text-slate-700">•</span>
            <span>✓ $150K renovation funded (1 week ago)</span>
            <span className="text-slate-700">•</span>
            <span>✓ $400K business acquisition (5 days ago)</span>
          </div>
        </div>
      </section>

      {/* What Sets Us Apart */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-slate-900 mb-4 uppercase tracking-tight">
              What Sets Us Apart
            </h2>
            <p className="text-lg text-slate-600 font-normal">
              Built on experience. Focused on outcomes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white border-2 border-slate-300 p-10 hover:border-king-gold transition-all">
              <div className="w-24 h-1 bg-king-gold mb-6"></div>
              <h3 className="text-xl font-black text-slate-900 mb-4">Speed + Certainty</h3>
              <p className="text-slate-600 leading-relaxed mb-4">
                Fast yes/no decisions. Clear timelines. No surprises. When timing matters, we move.
              </p>
              <div className="text-sm font-black text-king-orange uppercase tracking-wider">
                Average 7-Day Close
              </div>
            </div>

            <div className="bg-white border-2 border-slate-300 p-10 hover:border-king-gold transition-all">
              <div className="w-24 h-1 bg-king-gold mb-6"></div>
              <h3 className="text-xl font-black text-slate-900 mb-4">Collateral Discipline</h3>
              <p className="text-slate-600 leading-relaxed mb-4">
                Clear LTV/ARV guidelines. Lien priority. Taxes and insurance current. We protect all parties.
              </p>
              <div className="text-sm font-black text-slate-900 uppercase tracking-wider">
                Conservative Underwriting
              </div>
            </div>

            <div className="bg-white border-2 border-slate-300 p-10 hover:border-king-gold transition-all">
              <div className="w-24 h-1 bg-king-gold mb-6"></div>
              <h3 className="text-xl font-black text-slate-900 mb-4">Exit-First Mindset</h3>
              <p className="text-slate-600 leading-relaxed mb-4">
                Every loan needs a clear exit: sale, refi, SBA, or liquidity event. We plan the path out.
              </p>
              <div className="text-sm font-black text-green-600 uppercase tracking-wider">
                100% Borrower Success
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-slate-900 mb-4 uppercase tracking-tight">
              What People Say
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white border-2 border-slate-200 p-8">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-king-gold" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-slate-700 mb-6 leading-relaxed">
                "BuildUp funded our acquisition when the bank couldn't move fast enough. We closed in 9 days and didn't lose the deal."
              </p>
              <div className="font-black text-slate-900">— Michael R.</div>
              <div className="text-sm text-slate-600">Real Estate Investor, Phoenix</div>
            </div>

            <div className="bg-white border-2 border-slate-200 p-8">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-king-gold" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-slate-700 mb-6 leading-relaxed">
                "Straightforward process. Clear terms. No hidden fees. They did exactly what they said they'd do."
              </p>
              <div className="font-black text-slate-900">— Sarah T.</div>
              <div className="text-sm text-slate-600">Small Business Owner, Denver</div>
            </div>

            <div className="bg-white border-2 border-slate-200 p-8">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-king-gold" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-slate-700 mb-6 leading-relaxed">
                "After SBA declined, BuildUp bridged us while we fixed the issues. Six months later, SBA approved and we refinanced out."
              </p>
              <div className="font-black text-slate-900">— James K.</div>
              <div className="text-sm text-slate-600">Franchise Operator, Austin</div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-slate-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-black mb-6 uppercase tracking-tight">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-slate-300 mb-8 font-normal">
            Choose your path
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link href="/borrowers" className="px-10 py-4 bg-king-orange hover:bg-king-orange-dark text-white font-black text-lg uppercase tracking-wider transition-all">
              I Need Capital →
            </Link>
            <Link href="/investors" className="px-10 py-4 bg-king-gold hover:bg-king-gold-dark text-slate-900 font-black text-lg uppercase tracking-wider transition-all">
              I Have Capital →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
