import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Acquisition Bridge Loans',
  description: 'Fast funding for time-sensitive real estate acquisitions. Up to 75% LTV with 6-18 month terms.',
};

export default function AcquisitionBridgeLoansPage() {
  const features = [
    { title: 'Up to 75% LTV', description: 'Maximum leverage for property acquisition' },
    { title: '6-18 Month Terms', description: 'Bridge the gap to permanent financing' },
    { title: 'Fast Closings', description: 'Close in 7-10 days to secure your deal' },
    { title: 'Flexible Exit Strategies', description: 'Refinance, sell, or extend' },
    { title: 'Rental Income Friendly', description: 'Existing cash flow can strengthen terms' },
    { title: 'No Seasoning Required', description: 'Immediate refinance options available' },
  ];

  const idealFor = [
    '🏘️ Multi-family acquisitions',
    '🏢 Commercial property purchases',
    '🏡 Single-family rental portfolios',
    '⏱️ Time-sensitive opportunities',
    '🔄 Cash-out refinances',
    '💰 Rate & term refinances',
  ];

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-br from-brand-blue-600 to-brand-navy-900 text-white section-padding">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">
              Acquisition Bridge Loans
            </h1>
            <p className="text-xl text-blue-100 mb-8">
              Don't miss out on great deals. Get fast bridge financing to acquire properties 
              and refinance on your timeline.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/apply" className="btn-primary bg-white text-brand-blue-600 hover:bg-gray-100">
                Apply Now
              </Link>
              <Link href="#details" className="btn-secondary border-white text-white hover:bg-white/10">
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section id="details" className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Loan Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-6 hover:border-brand-blue-500 transition-colors">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ideal For */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Ideal For
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {idealFor.map((item, index) => (
                <div key={index} className="bg-white rounded-lg p-4 shadow-sm border border-gray-200 flex items-center">
                  <span className="text-2xl mr-3">{item.split(' ')[0]}</span>
                  <span className="text-gray-700">{item.substring(item.indexOf(' ') + 1)}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Loan Details */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Loan Details
            </h2>
            <div className="bg-white rounded-lg shadow-md border border-gray-200 p-8 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Loan Amount</h4>
                  <p className="text-gray-600">$100,000 - $5,000,000+</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Loan-to-Value (LTV)</h4>
                  <p className="text-gray-600">Up to 75%</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Term Length</h4>
                  <p className="text-gray-600">6-18 months (extensions available)</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Interest Rate</h4>
                  <p className="text-gray-600">Competitive rates based on property & borrower</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Closing Time</h4>
                  <p className="text-gray-600">7-10 business days</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Property Types</h4>
                  <p className="text-gray-600">Residential, multi-family, commercial</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Why Choose BuildUp Capital?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-5xl mb-4">⚡</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Speed</h3>
                <p className="text-gray-600">
                  Close in 7-10 days so you don't miss opportunities
                </p>
              </div>
              <div className="text-center">
                <div className="text-5xl mb-4">🤝</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Partnership</h3>
                <p className="text-gray-600">
                  We're invested in your success, not just the transaction
                </p>
              </div>
              <div className="text-center">
                <div className="text-5xl mb-4">💡</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Flexibility</h3>
                <p className="text-gray-600">
                  Custom terms tailored to your specific acquisition strategy
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-brand-blue-600 text-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Ready to Secure Your Next Property?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Get bridge financing approved in 24-48 hours and close in 7-10 days.
            </p>
            <Link href="/apply" className="btn-primary bg-white text-brand-blue-600 hover:bg-gray-100">
              Start Your Application
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
