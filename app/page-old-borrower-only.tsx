import Link from 'next/link';

export default function Home() {
  const trustMetrics = [
    { metric: "$50M+", label: "Capital Deployed" },
    { metric: "100+", label: "Deals Closed" },
    { metric: "7-Day", label: "Avg Close Time" },
  ];

  const icpTiles = [
    {
      title: "Rehab & Flip Funding",
      description: "Purchase + rehab capital with draw structures for flippers and value-add operators.",
      icon: "🔨",
      cta: "Learn More",
      href: "/rehab-flip-loans"
    },
    {
      title: "Acquisition Bridge Loans",
      description: "Close the deal now, refinance later. Fast capital when banks are too slow.",
      icon: "🔑",
      cta: "Learn More",
      href: "/acquisition-bridge-loans"
    },
    {
      title: "Asset-Backed Business Loans",
      description: "Capital for complex borrowers with real estate collateral. Unbankable doesn't mean unfundable.",
      icon: "🏢",
      cta: "Learn More",
      href: "/asset-backed-business-loans"
    },
    {
      title: "SBA Bridge Loans",
      description: "Bridge capital while SBA is in process or after decline. Keep your deal moving.",
      icon: "⏱️",
      cta: "Learn More",
      href: "/sba-bridge-loans"
    }
  ];

  const differentiators = [
    {
      icon: "⚡",
      iconColor: "text-brand-gold",
      title: "Speed + Certainty",
      description: "Fast yes/no decisions. Clear timelines. No surprises. When timing matters, we move.",
      trustLine: "Average 7-day close"
    },
    {
      icon: "🛡️",
      iconColor: "text-brand-gold",
      title: "Collateral Discipline",
      description: "Clear LTV/ARV guidelines. Lien priority. Taxes and insurance current. We protect all parties.",
      trustLine: "Conservative underwriting"
    },
    {
      icon: "🎯",
      iconColor: "text-brand-gold",
      title: "Exit-First Mindset",
      description: "Every loan needs a clear exit: sale, refi, SBA, or liquidity event. We plan the path out.",
      trustLine: "100% borrower success"
    }
  ];

  const howItWorks = [
    {
      number: "1",
      title: "Check Eligibility",
      description: "3-minute form. No credit pull. Instant routing to your loan type.",
      timeline: "Day 0"
    },
    {
      number: "2",
      title: "Initial Review",
      description: "We review your collateral, use of proceeds, and exit plan. Fast yes/no.",
      timeline: "1-2 Days"
    },
    {
      number: "3",
      title: "Term Sheet",
      description: "Transparent pricing. Clear structure. Review with your advisors.",
      timeline: "2-3 Days"
    },
    {
      number: "4",
      title: "Close & Fund",
      description: "Title work, docs, wire. You're moving forward.",
      timeline: "5-7 Days"
    }
  ];

  const testimonials = [
    {
      quote: "BuildUp funded our acquisition when the bank couldn't move fast enough. We closed in 9 days and didn't lose the deal.",
      author: "Michael R.",
      title: "Real Estate Investor",
      location: "Phoenix, AZ"
    },
    {
      quote: "Straightforward process. Clear terms. No hidden fees. They did exactly what they said they'd do.",
      author: "Sarah T.",
      title: "Small Business Owner",
      location: "Denver, CO"
    },
    {
      quote: "After SBA declined, BuildUp bridged us while we fixed the issues. Six months later, SBA approved and we refinanced out.",
      author: "James K.",
      title: "Franchise Operator",
      location: "Austin, TX"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative text-white overflow-hidden" style={{ backgroundColor: '#0A2540' }}>
        {/* Subtle background pattern */}
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }}></div>
        
        <div className="container-custom relative z-10 py-20 sm:py-32">
          <div className="max-w-4xl mx-auto text-center">
            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6 text-white">
              Fast, asset-backed capital when banks can't move.
            </h1>
            
            {/* Subheadline */}
            <p className="text-lg sm:text-xl text-gray-300 mb-10 max-w-3xl mx-auto">
              Private bridge loans for acquisitions, renovations, and complex borrowers. 
              Collateral discipline. Creative structure. Fast closings.
            </p>

            {/* Trust Metrics */}
            <div className="grid grid-cols-3 gap-6 sm:gap-12 mb-10 max-w-2xl mx-auto">
              {trustMetrics.map((item, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl sm:text-4xl font-bold mb-1" style={{ color: '#F59E0B' }}>
                    {item.metric}
                  </div>
                  <div className="text-xs sm:text-sm uppercase tracking-wide" style={{ color: '#0A2540', backgroundColor: 'rgba(255,255,255,0.9)', padding: '4px 8px', borderRadius: '4px', display: 'inline-block' }}>
                    {item.label}
                  </div>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/apply" className="btn-primary">
                Check Eligibility
              </Link>
              <Link href="/how-it-works" className="btn-secondary-white">
                See Loan Programs
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ICP Navigation Tiles */}
      <section className="section-padding" style={{ backgroundColor: '#F8FAFC' }}>
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {icpTiles.map((tile, index) => (
              <Link
                key={index}
                href={tile.href}
                className="bg-white rounded-lg p-6 shadow-sm border-l-4 hover:shadow-lg transition-all duration-200 group relative overflow-hidden"
                style={{ borderLeftColor: '#F59E0B' }}
              >
                {/* Hover accent expansion */}
                <div 
                  className="absolute left-0 top-0 bottom-0 w-1 group-hover:w-2 transition-all duration-200"
                  style={{ backgroundColor: '#F59E0B' }}
                ></div>
                
                <div className="text-4xl mb-4" style={{ color: '#0A2540' }}>{tile.icon}</div>
                <h3 className="text-xl font-bold mb-2 group-hover:text-brand-gold transition-colors" style={{ color: '#0A2540' }}>
                  {tile.title}
                </h3>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  {tile.description}
                </p>
                <span className="inline-flex items-center font-semibold text-sm" style={{ color: '#F59E0B' }}>
                  {tile.cta}
                  <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* What Sets Us Apart */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4" style={{ color: '#0A2540' }}>
              What Sets Us Apart
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {differentiators.map((item, index) => (
              <div key={index} className="text-center">
                <div className="text-5xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold mb-3" style={{ color: '#0A2540' }}>
                  {item.title}
                </h3>
                <p className="text-gray-600 mb-3 leading-relaxed">
                  {item.description}
                </p>
                <p className="text-sm font-semibold" style={{ color: '#F59E0B' }}>
                  {item.trustLine}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Timeline */}
      <section className="section-padding" style={{ backgroundColor: '#F8FAFC' }}>
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4" style={{ color: '#0A2540' }}>
              How It Works
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Transparent process. Clear expectations. Fast execution.
            </p>
          </div>

          {/* Desktop: Horizontal Timeline */}
          <div className="hidden md:block">
            <div className="relative">
              {/* Connecting line */}
              <div className="absolute top-12 left-0 right-0 h-0.5" style={{ backgroundColor: '#F59E0B', width: 'calc(100% - 120px)', marginLeft: '60px' }}></div>
              
              <div className="grid grid-cols-4 gap-4 relative">
                {howItWorks.map((step, index) => (
                  <div key={index} className="text-center relative">
                    {/* Number badge */}
                    <div 
                      className="w-24 h-24 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-2xl font-bold relative z-10"
                      style={{ backgroundColor: '#F59E0B' }}
                    >
                      {step.number}
                    </div>
                    <h4 className="font-bold mb-2" style={{ color: '#0A2540' }}>
                      {step.title}
                    </h4>
                    <p className="text-sm text-gray-600 mb-2 leading-relaxed">
                      {step.description}
                    </p>
                    <p className="text-xs uppercase font-semibold tracking-wide" style={{ color: '#F59E0B' }}>
                      {step.timeline}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Mobile: Vertical Stack */}
          <div className="md:hidden space-y-6">
            {howItWorks.map((step, index) => (
              <div key={index} className="flex gap-4">
                <div 
                  className="w-16 h-16 rounded-full flex items-center justify-center text-white text-xl font-bold flex-shrink-0"
                  style={{ backgroundColor: '#F59E0B' }}
                >
                  {step.number}
                </div>
                <div className="flex-1">
                  <h4 className="font-bold mb-1" style={{ color: '#0A2540' }}>
                    {step.title}
                  </h4>
                  <p className="text-sm text-gray-600 mb-1 leading-relaxed">
                    {step.description}
                  </p>
                  <p className="text-xs uppercase font-semibold tracking-wide" style={{ color: '#F59E0B' }}>
                    {step.timeline}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4" style={{ color: '#0A2540' }}>
              What Our Borrowers Say
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-sm border border-gray-200 relative">
                {/* Quote mark */}
                <div className="text-6xl opacity-10 absolute top-4 left-4" style={{ color: '#F59E0B' }}>
                  "
                </div>
                
                <div className="relative z-10">
                  <p className="text-lg italic mb-4" style={{ color: '#0A2540' }}>
                    "{testimonial.quote}"
                  </p>
                  <div className="text-sm text-gray-600">
                    <p className="font-semibold" style={{ color: '#0A2540' }}>
                      — {testimonial.author}
                    </p>
                    <p>{testimonial.title}</p>
                    <p>{testimonial.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="section-padding text-white" style={{ backgroundColor: '#0A2540' }}>
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Left: Borrowers */}
            <div className="text-center md:text-left p-8 rounded-lg border border-white/20">
              <div className="text-4xl mb-4">📋</div>
              <h3 className="text-2xl font-bold mb-3">Ready to check eligibility?</h3>
              <p className="text-gray-300 mb-6">
                See if your deal qualifies. No commitment. No credit pull.
              </p>
              <Link href="/apply" className="btn-primary inline-block">
                Check Eligibility
              </Link>
            </div>

            {/* Right: Lenders */}
            <div className="text-center md:text-left p-8 rounded-lg border border-white/20">
              <div className="text-4xl mb-4">🤝</div>
              <h3 className="text-2xl font-bold mb-3">Lender or referral partner?</h3>
              <p className="text-gray-300 mb-6">
                Join our network of capital providers and referral partners.
              </p>
              <Link href="/lenders" className="btn-secondary-white inline-block">
                Partner With Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
