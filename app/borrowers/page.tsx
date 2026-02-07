import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'For Borrowers',
  description: 'Financing solutions for real estate investors, small business owners, developers, and portfolio investors.',
};

export default function BorrowersPage() {
  const lanes = [
    {
      id: 'real-estate',
      icon: '🏘️',
      title: 'Real Estate Investors',
      description: 'Fix & flip, rental acquisitions, and bridge financing for active investors.',
      benefits: [
        'Up to 90% LTC on fix & flip projects',
        'Fast closings (7-10 days)',
        'Interest-only payment options',
        'Multiple exit strategies',
      ],
      programs: [
        { name: 'Rehab & Flip Loans', href: '/rehab-flip-loans' },
        { name: 'Acquisition Bridge Loans', href: '/acquisition-bridge-loans' },
      ],
    },
    {
      id: 'business',
      icon: '💼',
      title: 'Small Business Owners',
      description: 'Asset-backed loans and bridge financing to fuel business growth.',
      benefits: [
        'Leverage equipment & inventory',
        'AR financing available',
        'Flexible repayment terms',
        'Fast 24-48 hour approvals',
      ],
      programs: [
        { name: 'Asset-Backed Business Loans', href: '/asset-backed-business-loans' },
        { name: 'SBA Bridge Loans', href: '/sba-bridge-loans' },
      ],
    },
    {
      id: 'development',
      icon: '🏗️',
      title: 'Developers',
      description: 'Construction and development financing for ground-up and value-add projects.',
      benefits: [
        'Ground-up construction loans',
        'Value-add project financing',
        'Experienced partner support',
        'Competitive rates & terms',
      ],
      programs: [
        { name: 'Construction Loans', href: '/apply' },
        { name: 'Development Financing', href: '/apply' },
      ],
    },
    {
      id: 'portfolio',
      icon: '📊',
      title: 'Portfolio Investors',
      description: 'Bulk financing solutions for multi-property acquisitions and refinances.',
      benefits: [
        'Multi-property financing',
        'Portfolio refinance options',
        'Relationship pricing',
        'Dedicated account management',
      ],
      programs: [
        { name: 'Portfolio Loans', href: '/apply' },
        { name: 'Bulk Acquisition Financing', href: '/apply' },
      ],
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-br from-brand-blue-600 to-brand-navy-900 text-white section-padding">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">
              Financing Built for Your Goals
            </h1>
            <p className="text-xl text-blue-100 mb-8">
              Whether you're flipping properties, growing a business, or building a portfolio, 
              we have the right financing solution for you.
            </p>
            <Link href="/apply" className="btn-primary bg-white text-brand-blue-600 hover:bg-gray-100">
              Get Started
            </Link>
          </div>
        </div>
      </section>

      {/* Lanes */}
      {lanes.map((lane, index) => (
        <section
          key={lane.id}
          id={lane.id}
          className={`section-padding ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}
        >
          <div className="container-custom">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className={index % 2 === 0 ? 'order-1' : 'order-1 lg:order-2'}>
                  <div className="text-6xl mb-4">{lane.icon}</div>
                  <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                    {lane.title}
                  </h2>
                  <p className="text-xl text-gray-600 mb-6">
                    {lane.description}
                  </p>
                  <ul className="space-y-3 mb-8">
                    {lane.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-start">
                        <svg className="w-6 h-6 text-brand-blue-600 mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span className="text-gray-700">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link href="/apply" className="btn-primary">
                      Apply Now
                    </Link>
                    <Link href="#programs" className="btn-secondary">
                      View Programs
                    </Link>
                  </div>
                </div>
                <div className={`${index % 2 === 0 ? 'order-2' : 'order-2 lg:order-1'} space-y-4`}>
                  <h3 className="font-semibold text-gray-900 mb-4">Available Programs</h3>
                  {lane.programs.map((program, idx) => (
                    <Link
                      key={idx}
                      href={program.href}
                      className="block bg-white border-2 border-gray-200 rounded-lg p-6 hover:border-brand-blue-500 hover:shadow-md transition-all group"
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-semibold text-gray-900 group-hover:text-brand-blue-600">
                          {program.name}
                        </span>
                        <svg className="w-5 h-5 text-gray-400 group-hover:text-brand-blue-600 group-hover:translate-x-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Why Choose BuildUp */}
      <section className="section-padding bg-brand-blue-600 text-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center">
              Why Borrowers Choose BuildUp Capital
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-5xl mb-4">⚡</div>
                <h3 className="text-xl font-bold mb-2">Speed</h3>
                <p className="text-blue-100">
                  Get approved in 24-48 hours and close in 7-10 days. We move at your pace.
                </p>
              </div>
              <div className="text-center">
                <div className="text-5xl mb-4">🤝</div>
                <h3 className="text-xl font-bold mb-2">Partnership</h3>
                <p className="text-blue-100">
                  We're in it with you for the long haul. Repeat clients get priority treatment.
                </p>
              </div>
              <div className="text-center">
                <div className="text-5xl mb-4">💡</div>
                <h3 className="text-xl font-bold mb-2">Flexibility</h3>
                <p className="text-blue-100">
                  Custom terms that make sense for your specific situation and goals.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-gray-900 text-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join hundreds of successful investors and business owners who trust BuildUp Capital.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/apply" className="btn-primary bg-brand-blue-600 hover:bg-brand-blue-700">
                Apply Now
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
