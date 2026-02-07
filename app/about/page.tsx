import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn about BuildUp Capital\'s mission to provide fast, flexible financing for real estate investors and small businesses.',
};

export default function AboutPage() {
  const values = [
    {
      icon: '⚡',
      title: 'Speed',
      description: 'We move at the pace of your deals, not bureaucracy. Fast approvals, fast closings.',
    },
    {
      icon: '🤝',
      title: 'Partnership',
      description: 'We\'re invested in your long-term success. Your growth is our success.',
    },
    {
      icon: '💡',
      title: 'Flexibility',
      description: 'Custom solutions tailored to your unique situation. No cookie-cutter terms.',
    },
    {
      icon: '🎯',
      title: 'Transparency',
      description: 'Clear terms, honest communication, no hidden fees or surprises.',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-br from-brand-blue-600 to-brand-navy-900 text-white section-padding">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">
              About BuildUp Capital
            </h1>
            <p className="text-xl text-blue-100">
              We're on a mission to make capital accessible, fast, and flexible for 
              the entrepreneurs and investors building America's future.
            </p>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
              Our Mission
            </h2>
            <p className="text-xl text-gray-600 text-center mb-8">
              Traditional lending is broken. It's slow, inflexible, and built for yesterday's economy. 
              We're building the lending platform for today's entrepreneurs—where speed meets 
              intelligence, and capital flows as fast as opportunity.
            </p>
            <div className="bg-brand-blue-50 border-l-4 border-brand-blue-600 p-6 rounded">
              <p className="text-lg text-gray-700 italic">
                "We believe that good deals with good operators shouldn't be held back by outdated 
                processes. Our job is to say yes when others say maybe, and to move fast when others move slow."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Our Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-sm border border-gray-200 text-center">
                <div className="text-5xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {value.title}
                </h3>
                <p className="text-gray-600">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              What We Do
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="border-l-4 border-brand-blue-600 pl-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  Real Estate Financing
                </h3>
                <p className="text-gray-600 mb-4">
                  Fix & flip loans, bridge financing, and acquisition capital for active 
                  real estate investors and developers.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-brand-blue-600 mr-2">•</span>
                    <span className="text-gray-700">Rehab & flip loans</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-brand-blue-600 mr-2">•</span>
                    <span className="text-gray-700">Acquisition bridge loans</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-brand-blue-600 mr-2">•</span>
                    <span className="text-gray-700">Construction financing</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-brand-blue-600 mr-2">•</span>
                    <span className="text-gray-700">Portfolio financing</span>
                  </li>
                </ul>
              </div>
              <div className="border-l-4 border-brand-blue-600 pl-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  Business Financing
                </h3>
                <p className="text-gray-600 mb-4">
                  Asset-backed loans and bridge capital to help small businesses grow, 
                  expand, and seize opportunities.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-brand-blue-600 mr-2">•</span>
                    <span className="text-gray-700">Equipment financing</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-brand-blue-600 mr-2">•</span>
                    <span className="text-gray-700">Inventory financing</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-brand-blue-600 mr-2">•</span>
                    <span className="text-gray-700">AR financing</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-brand-blue-600 mr-2">•</span>
                    <span className="text-gray-700">SBA bridge loans</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Track Record */}
      <section className="section-padding bg-brand-blue-600 text-white">
        <div className="container-custom">
          <h2 className="text-3xl font-bold mb-12 text-center">
            Our Track Record
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl sm:text-5xl font-bold mb-2">$50M+</div>
              <div className="text-blue-100">Capital Deployed</div>
            </div>
            <div className="text-center">
              <div className="text-4xl sm:text-5xl font-bold mb-2">500+</div>
              <div className="text-blue-100">Deals Closed</div>
            </div>
            <div className="text-center">
              <div className="text-4xl sm:text-5xl font-bold mb-2">24-48hr</div>
              <div className="text-blue-100">Avg. Approval Time</div>
            </div>
            <div className="text-center">
              <div className="text-4xl sm:text-5xl font-bold mb-2">98%</div>
              <div className="text-blue-100">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* Why BuildUp */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Why BuildUp Capital?
            </h2>
            <div className="space-y-6">
              <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  We're Operators, Not Just Lenders
                </h3>
                <p className="text-gray-600">
                  Our team has been in your shoes. We understand the urgency of time-sensitive deals, 
                  the challenges of cash flow management, and the importance of having a capital partner 
                  who truly gets it.
                </p>
              </div>
              <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Built for Speed, Not Bureaucracy
                </h3>
                <p className="text-gray-600">
                  We've eliminated the red tape and built systems that move as fast as your deals. 
                  Our underwriting is thorough but lightning-fast, and our closing process is streamlined 
                  to get you funded when you need it.
                </p>
              </div>
              <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Long-Term Partnership Mindset
                </h3>
                <p className="text-gray-600">
                  We're not chasing one-off transactions. We build relationships with our borrowers 
                  and become their go-to capital partner. Your second and third loans will be even 
                  faster than your first.
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
              Ready to Build Up?
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
