import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'For Lenders',
  description: 'Partner with BuildUp Capital. Access quality deal flow and invest in vetted real estate and business loans.',
};

export default function LendersPage() {
  const benefits = [
    {
      icon: '📊',
      title: 'Quality Deal Flow',
      description: 'Access to pre-vetted, high-quality real estate and business lending opportunities.',
    },
    {
      icon: '🔍',
      title: 'Thorough Due Diligence',
      description: 'Every deal undergoes rigorous underwriting and risk assessment before presentation.',
    },
    {
      icon: '🤝',
      title: 'Partnership Approach',
      description: 'We handle origination, servicing, and borrower relationships—you provide capital.',
    },
    {
      icon: '💰',
      title: 'Attractive Returns',
      description: 'Competitive risk-adjusted returns backed by real assets and solid fundamentals.',
    },
    {
      icon: '📈',
      title: 'Diversification',
      description: 'Spread capital across multiple deals, asset types, and geographic markets.',
    },
    {
      icon: '⚡',
      title: 'Fast Deployment',
      description: 'Put capital to work quickly with our streamlined closing process.',
    },
  ];

  const investmentTypes = [
    {
      title: 'Individual Loan Participations',
      description: 'Participate in specific loans that match your investment criteria.',
      features: ['Choose individual deals', 'Set your own terms', 'Flexible investment sizes'],
    },
    {
      title: 'Portfolio Investments',
      description: 'Invest in a diversified portfolio of loans for passive income.',
      features: ['Automated diversification', 'Quarterly distributions', 'Professional management'],
    },
    {
      title: 'Strategic Partnerships',
      description: 'Long-term capital partnerships for ongoing deal flow.',
      features: ['Preferred access to deals', 'Custom structuring', 'Dedicated account team'],
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-br from-brand-blue-600 to-brand-navy-900 text-white section-padding">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">
              Partner With BuildUp Capital
            </h1>
            <p className="text-xl text-blue-100 mb-8">
              Access quality deal flow and attractive returns in real estate and business lending.
            </p>
            <Link href="#contact" className="btn-primary bg-white text-brand-blue-600 hover:bg-gray-100">
              Become a Partner
            </Link>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Why Partner With Us
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="text-5xl mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {benefit.title}
                </h3>
                <p className="text-gray-600">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Investment Types */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Investment Opportunities
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {investmentTypes.map((type, index) => (
              <div key={index} className="bg-white rounded-lg p-8 shadow-md border border-gray-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {type.title}
                </h3>
                <p className="text-gray-600 mb-6">
                  {type.description}
                </p>
                <ul className="space-y-2">
                  {type.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <svg className="w-5 h-5 text-brand-blue-600 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
              Our Underwriting Process
            </h2>
            <div className="space-y-8">
              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-brand-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xl">
                    1
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    Borrower & Deal Screening
                  </h3>
                  <p className="text-gray-600">
                    Initial screening of borrower qualifications, credit, and deal fundamentals.
                  </p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-brand-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xl">
                    2
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    Property/Asset Valuation
                  </h3>
                  <p className="text-gray-600">
                    Professional appraisals, BPOs, or asset valuations to confirm collateral value.
                  </p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-brand-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xl">
                    3
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    Risk Assessment & Structuring
                  </h3>
                  <p className="text-gray-600">
                    Comprehensive risk analysis and deal structuring to protect capital.
                  </p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-brand-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xl">
                    4
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    Documentation & Closing
                  </h3>
                  <p className="text-gray-600">
                    Professional loan documentation, title work, and seamless closing process.
                  </p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-brand-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xl">
                    5
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    Ongoing Servicing & Reporting
                  </h3>
                  <p className="text-gray-600">
                    Monthly reporting, payment collections, and proactive loan management.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section id="contact" className="section-padding bg-brand-blue-600 text-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Interested in Partnering?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              We're always looking for capital partners who share our commitment to quality and integrity.
            </p>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 border border-white/20">
              <p className="text-lg mb-4">
                Contact us to discuss partnership opportunities:
              </p>
              <div className="space-y-3 text-blue-100">
                <p className="text-xl font-semibold">
                  partnerships@buildup.capital
                </p>
                <p className="text-sm">
                  (Email Brandon is setting up — placeholder for now)
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
