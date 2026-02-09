import Link from "next/link";

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              We Care About How This Ends
            </h1>
            <p className="text-xl md:text-2xl text-slate-300">
              25 years of lending experience. Real partnerships. Real outcomes.
            </p>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-slate-900 mb-4">
                Our Philosophy
              </h2>
              <p className="text-xl text-slate-600">
                Judgment over formulas. Partnership over transactions.
              </p>
            </div>

            <div className="prose prose-lg max-w-none text-slate-600">
              <p className="text-xl leading-relaxed mb-6">
                Most lenders focus on getting deals done. We focus on how those deals end.
              </p>
              
              <p className="text-lg leading-relaxed mb-6">
                That mindset shapes everything we do — from how we underwrite opportunities, to how we support borrowers, 
                to how we communicate with investors. We've been through enough market cycles to know that the easy money 
                isn't always the smart money.
              </p>

              <p className="text-lg leading-relaxed mb-6">
                We believe in radical transparency. That means showing investors the full picture — risks included — and 
                helping borrowers build businesses that can graduate to traditional financing. It means having hard 
                conversations early instead of harder ones later.
              </p>

              <p className="text-lg leading-relaxed">
                This approach might make us slower to say yes than some lenders. But when we do say yes, it's because 
                we genuinely believe in the outcome.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-slate-900 mb-4">
                Experience That Matters
              </h2>
              <p className="text-xl text-slate-600">
                25 years, multiple market cycles, countless lessons learned
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-3">Resolution Through Cycles</h3>
                  <p className="text-slate-600 text-lg">
                    We've navigated the 2008 financial crisis, the COVID pandemic, and everything in between. 
                    That experience taught us what truly matters: conservative underwriting, real collateral, 
                    and honest communication.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-3">Real Asset Focus</h3>
                  <p className="text-slate-600 text-lg">
                    Every investment we offer is backed by tangible real estate collateral. We've learned that 
                    during tough times, real assets provide real protection. We don't chase yield at the expense 
                    of security.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-3">Borrower Success</h3>
                  <p className="text-slate-600 text-lg">
                    Our proudest moments aren't the biggest deals we've closed — they're watching borrowers 
                    grow strong enough to "graduate" to traditional bank financing. That's the ultimate measure 
                    of partnership.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              Our Team
            </h2>
            <p className="text-xl text-slate-600">
              Partners who've been in the trenches
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {/* Brandon Arner */}
            <div className="bg-slate-50 p-8 rounded-xl">
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-slate-900 mb-2">Brandon Arner</h3>
                <p className="text-lg text-blue-900 font-semibold">Partner - Capital & Operations</p>
              </div>
              
              <p className="text-slate-600 mb-4">
                Brandon brings 25 years of experience in private lending and real estate finance. He's lived 
                through multiple market cycles and learned that the best deals are the ones where everyone wins.
              </p>

              <p className="text-slate-600">
                His focus is on capital deployment, investor relations, and building systems that scale with 
                integrity. Brandon believes that transparency and judgment are the foundation of sustainable 
                growth in private credit.
              </p>
            </div>

            {/* Chris - Placeholder */}
            <div className="bg-slate-50 p-8 rounded-xl border-2 border-dashed border-slate-300">
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-slate-900 mb-2">Chris [Last Name]</h3>
                <p className="text-lg text-blue-900 font-semibold">Partner - [Role]</p>
              </div>
              
              <p className="text-slate-600 mb-4">
                <em>Partner bio coming soon...</em>
              </p>

              <p className="text-slate-600">
                Chris's extensive experience in [area of expertise] complements our team's capabilities 
                and strengthens our ability to serve both investors and borrowers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              Our Values
            </h2>
            <p className="text-xl text-slate-600">
              The principles that guide every decision
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-blue-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Transparency</h3>
              <p className="text-slate-600">
                We show reality, not perfection. Every risk, every opportunity, every outcome — 
                disclosed fully and honestly.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-blue-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Partnership</h3>
              <p className="text-slate-600">
                We succeed when our investors earn returns and our borrowers grow. Simple as that.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-blue-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Judgment</h3>
              <p className="text-slate-600">
                Algorithms can't replace experience. We use data, but we rely on judgment honed over 
                25 years and multiple cycles.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-slate-900 to-slate-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Let's Start a Conversation
          </h2>
          <p className="text-xl text-slate-300 mb-8">
            Whether you're an investor or a borrower, we'd love to hear from you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/investors" className="btn-primary">
              For Investors
            </Link>
            <Link href="/borrowers" className="btn-secondary bg-white/10 border-white text-white hover:bg-white/20">
              For Borrowers
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
