import { generateMetadata as genMeta } from '../metadata';
import Link from 'next/link';

export const metadata = genMeta({
  title: 'Free Investor Resources | BuildUp Capital',
  description: 'Download the "Beyond Rentals" guide: The sophisticated investor\'s guide to private credit. Learn how to generate income without tenants or market volatility.',
  path: '/resources',
});

export default function ResourcesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero */}
      <section className="relative text-white overflow-hidden pt-32 pb-20" style={{ backgroundColor: '#0A2540' }}>
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }}></div>
        
        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block mb-4">
              <span className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-semibold border border-white/30">
                📚 FREE INVESTOR GUIDE
              </span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight">
              Beyond Rentals
            </h1>
            
            <p className="text-2xl md:text-3xl text-gray-300 mb-6 font-medium">
              The Sophisticated Investor's Guide to Private Credit
            </p>
            
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              For accredited investors who've outgrown rental real estate and are seeking income without management fatigue.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="container-custom">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              {/* Left: What's Inside */}
              <div>
                <h2 className="text-3xl font-bold mb-8" style={{ color: '#0A2540' }}>
                  What's Inside the Guide
                </h2>
                
                <div className="space-y-6">
                  <div className="bg-white rounded-xl shadow-lg p-6 border-2 border-gray-100 hover:border-brand-gold transition-all">
                    <div className="flex items-start gap-4">
                      <div className="text-4xl">📊</div>
                      <div>
                        <h3 className="text-xl font-bold mb-2" style={{ color: '#0A2540' }}>
                          Asset Comparison Matrix
                        </h3>
                        <p className="text-gray-600">
                          Side-by-side comparison of Airbnb, long-term rentals, syndications, stocks, and private credit. See exactly where each fits in your portfolio.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white rounded-xl shadow-lg p-6 border-2 border-gray-100 hover:border-brand-gold transition-all">
                    <div className="flex items-start gap-4">
                      <div className="text-4xl">📈</div>
                      <div>
                        <h3 className="text-xl font-bold mb-2" style={{ color: '#0A2540' }}>
                          Real Case Study
                        </h3>
                        <p className="text-gray-600">
                          How Sarah transitioned from 8 Airbnbs to a hybrid portfolio, reduced her time commitment by 70%, and increased net income by 33%.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white rounded-xl shadow-lg p-6 border-2 border-gray-100 hover:border-brand-gold transition-all">
                    <div className="flex items-start gap-4">
                      <div className="text-4xl">🛡️</div>
                      <div>
                        <h3 className="text-xl font-bold mb-2" style={{ color: '#0A2540' }}>
                          Risk Management Framework
                        </h3>
                        <p className="text-gray-600">
                          Our "downside-first" approach: How to evaluate collateral, LTV, borrower quality, and structure every deal for maximum protection.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white rounded-xl shadow-lg p-6 border-2 border-gray-100 hover:border-brand-gold transition-all">
                    <div className="flex items-start gap-4">
                      <div className="text-4xl">✅</div>
                      <div>
                        <h3 className="text-xl font-bold mb-2" style={{ color: '#0A2540' }}>
                          5-Point Evaluation Checklist
                        </h3>
                        <p className="text-gray-600">
                          Practical framework to evaluate any private credit opportunity: collateral quality, LTV, borrower, economics, and legal structure.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Social Proof */}
                <div className="mt-8 bg-green-50 rounded-xl p-6 border-2 border-green-200">
                  <p className="text-gray-800 font-medium mb-2">
                    "This guide saved me months of research. Clear, practical, and exactly what I needed to make an informed decision."
                  </p>
                  <p className="text-sm text-gray-600">
                    — Michael R., Former Airbnb Operator
                  </p>
                </div>
              </div>

              {/* Right: Download Form */}
              <div className="lg:sticky lg:top-24">
                <div className="bg-white rounded-xl shadow-2xl p-8 border-2 border-gray-200">
                  <div className="text-center mb-6">
                    <div className="text-5xl mb-3">📖</div>
                    <h3 className="text-2xl font-bold mb-2" style={{ color: '#0A2540' }}>
                      Download Your Free Guide
                    </h3>
                    <p className="text-gray-600">
                      20 pages | PDF format | Instant delivery
                    </p>
                  </div>

                  <form className="space-y-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-bold text-gray-700 mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        required
                        className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-brand-gold focus:ring-2 focus:ring-yellow-200 transition-all"
                        placeholder="John Smith"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-bold text-gray-700 mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        required
                        className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-brand-gold focus:ring-2 focus:ring-yellow-200 transition-all"
                        placeholder="john@example.com"
                      />
                    </div>

                    <div>
                      <label htmlFor="portfolio" className="block text-sm font-bold text-gray-700 mb-1">
                        Current Investments (Optional)
                      </label>
                      <select
                        id="portfolio"
                        className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-brand-gold focus:ring-2 focus:ring-yellow-200 transition-all"
                      >
                        <option value="">Select one...</option>
                        <option value="airbnb">Short-term rentals (Airbnb)</option>
                        <option value="ltr">Long-term rentals</option>
                        <option value="syndications">Real estate syndications</option>
                        <option value="stocks">Stocks/REITs</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    <button
                      type="submit"
                      className="w-full text-white px-8 py-4 rounded-lg font-bold text-lg transition-all shadow-lg hover:shadow-xl"
                      style={{ backgroundColor: '#F59E0B' }}
                    >
                      📧 Send Me the Guide
                    </button>

                    <p className="text-xs text-gray-500 text-center">
                      No spam. Unsubscribe anytime. We respect your privacy.
                    </p>
                  </form>

                  <div className="mt-6 pt-6 border-t-2 border-gray-100">
                    <p className="text-sm text-gray-600 text-center font-medium">
                      ✓ 20-page comprehensive guide<br />
                      ✓ Instant email delivery<br />
                      ✓ No credit card required
                    </p>
                  </div>
                </div>

                {/* Trust Signals */}
                <div className="mt-6 text-center text-sm text-gray-600">
                  <p className="mb-2">
                    <strong>200+ investors</strong> have downloaded this guide
                  </p>
                  <div className="flex items-center justify-center gap-4 text-gray-400">
                    <span>🔒 Secure</span>
                    <span>📧 No Spam</span>
                    <span>💯 Free</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 text-white" style={{ backgroundColor: '#0A2540' }}>
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">
              Ready to Explore Private Credit?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Download the guide, then schedule a free 30-minute consultation to discuss your specific situation.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-white text-lg font-bold px-8 py-4 rounded-lg transition-all shadow-lg hover:shadow-xl hover:scale-105"
              style={{ color: '#0A2540' }}
            >
              Schedule Free Consultation
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
