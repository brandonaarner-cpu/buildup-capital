import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Asset-Backed Business Loans',
  description: 'Leverage your business assets for flexible working capital. Equipment, inventory, AR financing with fast approvals.',
};

export default function AssetBackedBusinessLoansPage() {
  const features = [
    { title: 'Equipment Financing', description: 'Use machinery, vehicles, and equipment as collateral' },
    { title: 'Inventory Financing', description: 'Leverage your inventory for working capital' },
    { title: 'AR Financing', description: 'Convert accounts receivable into immediate cash' },
    { title: 'Flexible Repayment', description: 'Terms that match your cash flow cycle' },
    { title: 'Fast Approvals', description: '24-48 hour decisions' },
    { title: 'Growth Capital', description: 'Fund expansion without diluting ownership' },
  ];

  const assetTypes = [
    { icon: '🏗️', title: 'Heavy Equipment', description: 'Construction, manufacturing machinery' },
    { icon: '🚚', title: 'Fleet Vehicles', description: 'Trucks, vans, delivery vehicles' },
    { icon: '📦', title: 'Inventory', description: 'Wholesale, retail, manufacturing inventory' },
    { icon: '💵', title: 'Accounts Receivable', description: 'Outstanding invoices and receivables' },
    { icon: '🏭', title: 'Real Estate', description: 'Commercial property owned by the business' },
    { icon: '💻', title: 'Technology Assets', description: 'Servers, equipment, software licenses' },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-br from-brand-blue-600 to-brand-navy-900 text-white section-padding">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">
              Asset-Backed Business Loans
            </h1>
            <p className="text-xl text-blue-100 mb-8">
              Unlock the value in your business assets. Get flexible working capital backed by 
              equipment, inventory, or receivables.
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
            Financing Options
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

      {/* Asset Types */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Acceptable Asset Types
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {assetTypes.map((asset, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
                <div className="text-4xl mb-3">{asset.icon}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {asset.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {asset.description}
                </p>
              </div>
            ))}
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
                  <p className="text-gray-600">$25,000 - $2,000,000+</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Advance Rate</h4>
                  <p className="text-gray-600">Up to 80% of asset value (varies by asset type)</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Term Length</h4>
                  <p className="text-gray-600">3-36 months (customizable)</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Interest Rate</h4>
                  <p className="text-gray-600">Competitive rates based on assets & revenue</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Approval Time</h4>
                  <p className="text-gray-600">24-48 hours</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Funding Time</h4>
                  <p className="text-gray-600">5-7 business days after approval</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="section-padding bg-gray-50">
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
                    Submit Application
                  </h3>
                  <p className="text-gray-600">
                    Tell us about your business and the assets you'd like to leverage
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
                    Asset Valuation
                  </h3>
                  <p className="text-gray-600">
                    We assess the value of your collateral assets
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
                    Receive approval and loan terms within 24-48 hours
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
                    Receive Funding
                  </h3>
                  <p className="text-gray-600">
                    Get your capital in 5-7 business days and fuel your growth
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
              Unlock Your Business Assets Today
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Turn your equipment, inventory, or receivables into working capital.
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
