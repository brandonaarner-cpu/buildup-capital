import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'SBA Bridge Loans',
  description: 'Bridge financing while your SBA loan is processing. Don\'t miss opportunities while waiting for SBA approval.',
};

export default function SBABridgeLoansPage() {
  const features = [
    { title: 'Quick Access', description: 'Get capital while SBA loan is in underwriting' },
    { title: 'Short-Term Solution', description: '3-12 month terms until SBA closes' },
    { title: 'Multiple Use Cases', description: 'Equipment, inventory, working capital, opportunities' },
    { title: 'Competitive Rates', description: 'Fair pricing for short-term bridge capital' },
    { title: 'SBA-Friendly Structure', description: 'Designed to work alongside SBA financing' },
    { title: 'Fast Approval', description: 'Get approved in 24-48 hours' },
  ];

  const useCases = [
    '💼 Secure time-sensitive business opportunities',
    '📦 Purchase inventory or equipment now',
    '💰 Cover operating expenses during SBA processing',
    '🏢 Down payment for commercial real estate',
    '🔧 Start renovations or improvements',
    '📈 Fund growth initiatives without waiting',
  ];

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-br from-brand-blue-600 to-brand-navy-900 text-white section-padding">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">
              SBA Bridge Loans
            </h1>
            <p className="text-xl text-blue-100 mb-8">
              Don't let SBA processing timelines cost you opportunities. Get bridge financing 
              now and repay when your SBA loan closes.
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

      {/* Problem/Solution */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">The Problem</h3>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <span className="text-red-500 mr-2">❌</span>
                    <p className="text-gray-600">SBA loans take 60-90+ days to close</p>
                  </div>
                  <div className="flex items-start">
                    <span className="text-red-500 mr-2">❌</span>
                    <p className="text-gray-600">Opportunities don't wait that long</p>
                  </div>
                  <div className="flex items-start">
                    <span className="text-red-500 mr-2">❌</span>
                    <p className="text-gray-600">Missing deals costs real money</p>
                  </div>
                  <div className="flex items-start">
                    <span className="text-red-500 mr-2">❌</span>
                    <p className="text-gray-600">Cash flow gaps hurt operations</p>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">The Solution</h3>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <span className="text-green-500 mr-2">✅</span>
                    <p className="text-gray-600">Bridge financing in 24-48 hours</p>
                  </div>
                  <div className="flex items-start">
                    <span className="text-green-500 mr-2">✅</span>
                    <p className="text-gray-600">Act on opportunities immediately</p>
                  </div>
                  <div className="flex items-start">
                    <span className="text-green-500 mr-2">✅</span>
                    <p className="text-gray-600">Repay when SBA loan closes</p>
                  </div>
                  <div className="flex items-start">
                    <span className="text-green-500 mr-2">✅</span>
                    <p className="text-gray-600">Maintain momentum and growth</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section id="details" className="section-padding bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Loan Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-lg p-6 hover:border-brand-blue-500 transition-colors">
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

      {/* Use Cases */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Common Use Cases
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {useCases.map((item, index) => (
                <div key={index} className="bg-gray-50 rounded-lg p-4 border border-gray-200 flex items-start">
                  <span className="text-2xl mr-3">{item.split(' ')[0]}</span>
                  <span className="text-gray-700 pt-1">{item.substring(item.indexOf(' ') + 1)}</span>
                </div>
              ))}
            </div>
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
            <div className="bg-white rounded-lg shadow-md border border-gray-200 p-8 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Loan Amount</h4>
                  <p className="text-gray-600">$25,000 - $500,000</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Term Length</h4>
                  <p className="text-gray-600">3-12 months (or until SBA closes)</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Interest Rate</h4>
                  <p className="text-gray-600">Competitive short-term rates</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Approval Time</h4>
                  <p className="text-gray-600">24-48 hours</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Funding Time</h4>
                  <p className="text-gray-600">3-5 business days</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Requirements</h4>
                  <p className="text-gray-600">Active SBA application in process</p>
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
              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-brand-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xl">
                    1
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    Apply with SBA Details
                  </h3>
                  <p className="text-gray-600">
                    Share your SBA loan details and what you need funding for
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
                    Quick Review
                  </h3>
                  <p className="text-gray-600">
                    We verify your SBA application status and assess your needs
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
                    Get Approved
                  </h3>
                  <p className="text-gray-600">
                    Receive approval within 24-48 hours with clear terms
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
                    Fund & Execute
                  </h3>
                  <p className="text-gray-600">
                    Receive funds in 3-5 days and seize your opportunity
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
                    Repay When SBA Closes
                  </h3>
                  <p className="text-gray-600">
                    Pay off bridge loan when your SBA funding comes through
                  </p>
                </div>
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
              Don't Let SBA Timelines Hold You Back
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Get bridge financing now and repay when your SBA loan closes.
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
