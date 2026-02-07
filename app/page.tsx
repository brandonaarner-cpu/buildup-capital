import Link from 'next/link';

export default function Home() {
  const icpTiles = [
    {
      title: "Real Estate Investors",
      description: "Fix & flip, rental property acquisition, and bridge financing for active investors.",
      icon: "🏘️",
      cta: "Explore Loans",
      href: "/borrowers#real-estate"
    },
    {
      title: "Small Business Owners",
      description: "Asset-backed loans and SBA bridge financing to fuel business growth.",
      icon: "💼",
      cta: "Get Funding",
      href: "/borrowers#business"
    },
    {
      title: "Developers",
      description: "Construction and development financing for ground-up and value-add projects.",
      icon: "🏗️",
      cta: "View Options",
      href: "/borrowers#development"
    },
    {
      title: "Portfolio Investors",
      description: "Bulk financing solutions for multi-property acquisitions and refinances.",
      icon: "📊",
      cta: "Learn More",
      href: "/borrowers#portfolio"
    }
  ];

  const trustElements = [
    { metric: "$50M+", label: "Funded" },
    { metric: "24-48hr", label: "Approval Time" },
    { metric: "500+", label: "Deals Closed" },
    { metric: "98%", label: "Client Satisfaction" },
  ];

  const loanPrograms = [
    {
      title: "Rehab & Flip Loans",
      description: "Fast financing for fix-and-flip projects with flexible terms and competitive rates.",
      features: ["Up to 90% LTC", "12-24 month terms", "Interest-only payments"],
      href: "/rehab-flip-loans"
    },
    {
      title: "Acquisition Bridge Loans",
      description: "Quick funding for time-sensitive real estate acquisitions and opportunities.",
      features: ["Up to 75% LTV", "6-18 month terms", "Fast closings"],
      href: "/acquisition-bridge-loans"
    },
    {
      title: "Asset-Backed Business Loans",
      description: "Leverage your business assets for flexible working capital and growth funding.",
      features: ["Equipment & inventory", "AR financing", "Flexible repayment"],
      href: "/asset-backed-business-loans"
    },
    {
      title: "SBA Bridge Loans",
      description: "Bridge financing while your SBA loan is in underwriting—don't miss opportunities.",
      features: ["Quick access to capital", "Short-term solution", "Competitive rates"],
      href: "/sba-bridge-loans"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-brand-blue-600 via-brand-blue-700 to-brand-navy-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="container-custom relative z-10 py-20 sm:py-32">
          <div className="max-w-4xl">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              Fast, Flexible Financing for
              <span className="block text-brand-blue-200">Real Estate & Business</span>
            </h1>
            <p className="text-xl sm:text-2xl text-blue-100 mb-8 max-w-2xl">
              Get approved in 24-48 hours. No bureaucracy, no delays—just smart capital 
              that moves at your speed.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/apply" className="btn-primary bg-white text-brand-blue-600 hover:bg-gray-100">
                Apply Now
              </Link>
              <Link href="/how-it-works" className="btn-secondary border-white text-white hover:bg-white/10">
                See How It Works
              </Link>
            </div>
          </div>

          {/* Trust metrics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 pt-16 border-t border-white/20">
            {trustElements.map((item, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl sm:text-4xl font-bold text-white mb-1">
                  {item.metric}
                </div>
                <div className="text-blue-200 text-sm sm:text-base">
                  {item.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ICP Tiles */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Who We Serve
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Tailored financing solutions for ambitious investors and business owners
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {icpTiles.map((tile, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-6 shadow-sm border border-gray-200 hover:border-brand-blue-500 hover:shadow-md transition-all duration-200 group"
              >
                <div className="text-4xl mb-4">{tile.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-brand-blue-600 transition-colors">
                  {tile.title}
                </h3>
                <p className="text-gray-600 mb-4 flex-grow">
                  {tile.description}
                </p>
                <Link
                  href={tile.href}
                  className="inline-flex items-center text-brand-blue-600 hover:text-brand-blue-700 font-semibold"
                >
                  {tile.cta}
                  <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Loan Programs */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Our Loan Programs
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Flexible financing options designed for your unique needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {loanPrograms.map((program, index) => (
              <div
                key={index}
                className="border border-gray-200 rounded-lg p-8 hover:border-brand-blue-500 hover:shadow-lg transition-all duration-200"
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {program.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {program.description}
                </p>
                <ul className="space-y-2 mb-6">
                  {program.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <svg className="w-5 h-5 text-brand-blue-600 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link href={program.href} className="text-brand-blue-600 hover:text-brand-blue-700 font-semibold inline-flex items-center">
                  Learn More
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why BuildUp Capital */}
      <section className="section-padding bg-brand-blue-600 text-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Why BuildUp Capital?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div>
                <div className="text-5xl mb-4">⚡</div>
                <h3 className="text-xl font-bold mb-2">Lightning Fast</h3>
                <p className="text-blue-100">
                  Get approved in 24-48 hours, not weeks. We move at the speed of your deals.
                </p>
              </div>
              <div>
                <div className="text-5xl mb-4">🤝</div>
                <h3 className="text-xl font-bold mb-2">Relationship First</h3>
                <p className="text-blue-100">
                  We're partners in your growth, not just a transaction. Dedicated support every step.
                </p>
              </div>
              <div>
                <div className="text-5xl mb-4">💡</div>
                <h3 className="text-xl font-bold mb-2">Smart & Flexible</h3>
                <p className="text-blue-100">
                  Custom terms that actually make sense for your business. No cookie-cutter solutions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gray-900 text-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Ready to Accelerate Your Growth?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join hundreds of successful investors and business owners who trust BuildUp Capital.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/apply" className="btn-primary bg-brand-blue-600 hover:bg-brand-blue-700">
                Start Your Application
              </Link>
              <Link href="/how-it-works" className="btn-secondary border-white text-white hover:bg-white/10">
                Learn How It Works
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
