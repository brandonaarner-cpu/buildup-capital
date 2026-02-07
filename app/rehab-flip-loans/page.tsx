import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Rehab & Flip Loans',
  description: 'Fast financing for fix-and-flip projects. Up to 90% LTC, 12-24 month terms, and interest-only payments.',
};

export default function RehabFlipLoansPage() {
  const features = [
    { title: 'Up to 90% LTC', description: 'Loan-to-cost financing covering purchase and rehab' },
    { title: '12-24 Month Terms', description: 'Flexible terms that align with your project timeline' },
    { title: 'Interest-Only Payments', description: 'Preserve cash flow during renovation' },
    { title: 'Fast Closings', description: 'Close in as little as 7-10 days' },
    { title: 'No Prepayment Penalty', description: 'Exit the loan early without fees' },
    { title: 'Experienced Investors Welcome', description: 'We work with all experience levels' },
  ];

  const process = [
    { step: '1', title: 'Submit Application', description: 'Complete our quick online form' },
    { step: '2', title: 'Property Review', description: 'We review the deal and property details' },
    { step: '3', title: 'Get Approved', description: 'Receive approval within 24-48 hours' },
    { step: '4', title: 'Close & Fund', description: 'Close and get funded in 7-10 days' },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-br from-brand-blue-600 to-brand-navy-900 text-white section-padding">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">
              Rehab & Flip Loans
            </h1>
            <p className="text-xl text-blue-100 mb-8">
              Fast, flexible financing for your fix-and-flip projects. Get up to 90% LTC with 
              competitive rates and quick closings.
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

      {/* Loan Details */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Loan Details
            </h2>
            <div className="bg-white rounded-lg shadow-md p-8 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Loan Amount</h4>
                  <p className="text-gray-600">$50,000 - $2,000,000+</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Loan-to-Cost (LTC)</h4>
                  <p className="text-gray-600">Up to 90%</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Loan-to-Value (LTV)</h4>
                  <p className="text-gray-600">Up to 75% ARV</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Term Length</h4>
                  <p className="text-gray-600">12-24 months</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Interest Rate</h4>
                  <p className="text-gray-600">Competitive rates based on experience & deal</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Closing Time</h4>
                  <p className="text-gray-600">7-10 business days</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            How It Works
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {process.map((item, index) => (
                <div key={index} className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-brand-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xl">
                      {item.step}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-600">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-brand-blue-600 text-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Ready to Fund Your Next Flip?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Get approved in 24-48 hours and close in as little as 7-10 days.
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
