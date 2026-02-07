import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'How It Works',
  description: 'Learn how BuildUp Capital\'s streamlined lending process works. From application to funding in days, not weeks.',
};

export default function HowItWorksPage() {
  const steps = [
    {
      number: '1',
      title: 'Submit Application',
      description: 'Complete our simple online application in 5-10 minutes. Tell us about your project and financing needs.',
      timeline: 'Day 1',
      details: [
        'Choose your loan type',
        'Provide basic property/business info',
        'Upload supporting documents',
        'No obligation or hard credit pull',
      ],
    },
    {
      number: '2',
      title: 'Initial Review',
      description: 'Our team reviews your application and reaches out within hours to discuss your needs.',
      timeline: 'Day 1',
      details: [
        'Quick review of submitted materials',
        'Call or email to discuss details',
        'Answer any questions you have',
        'Preliminary approval indication',
      ],
    },
    {
      number: '3',
      title: 'Underwriting & Approval',
      description: 'We conduct due diligence on the property/business and provide formal approval with terms.',
      timeline: 'Day 1-2',
      details: [
        'Property appraisal or asset valuation',
        'Background and credit review',
        'Deal structure finalization',
        'Formal approval with term sheet',
      ],
    },
    {
      number: '4',
      title: 'Documentation & Closing',
      description: 'Sign loan documents and schedule closing. We handle all the paperwork and logistics.',
      timeline: 'Day 3-7',
      details: [
        'Loan documents prepared',
        'Title work and insurance',
        'Closing scheduled',
        'Final walkthrough and wire',
      ],
    },
    {
      number: '5',
      title: 'Funding',
      description: 'Funds are wired to your account. Start your project or seize your opportunity.',
      timeline: 'Day 7-10',
      details: [
        'Funds wired same day as closing',
        'Loan servicing setup',
        'Ongoing support and communication',
        'Ready for your next deal',
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
              How It Works
            </h1>
            <p className="text-xl text-blue-100 mb-8">
              Our streamlined process gets you from application to funding in 7-10 days. 
              No bureaucracy, no delays—just smart, fast capital.
            </p>
          </div>
        </div>
      </section>

      {/* Process Timeline */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
              The BuildUp Capital Process
            </h2>
            <div className="space-y-12">
              {steps.map((step, index) => (
                <div key={step.number} className="relative">
                  {/* Connector line */}
                  {index < steps.length - 1 && (
                    <div className="absolute left-8 top-20 w-0.5 h-full bg-brand-blue-200 -z-10" />
                  )}
                  
                  <div className="flex gap-6">
                    {/* Number Circle */}
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 bg-brand-blue-600 text-white rounded-full flex items-center justify-center font-bold text-2xl shadow-lg">
                        {step.number}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-grow">
                      <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                        <div className="flex items-center justify-between mb-3">
                          <h3 className="text-2xl font-bold text-gray-900">
                            {step.title}
                          </h3>
                          <span className="text-sm font-semibold text-brand-blue-600 bg-brand-blue-50 px-3 py-1 rounded-full">
                            {step.timeline}
                          </span>
                        </div>
                        <p className="text-gray-600 mb-4 text-lg">
                          {step.description}
                        </p>
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                          {step.details.map((detail, idx) => (
                            <li key={idx} className="flex items-start text-sm">
                              <svg className="w-5 h-5 text-brand-blue-600 mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                              </svg>
                              <span className="text-gray-700">{detail}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* What You Need */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              What You'll Need
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  For Real Estate Loans
                </h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-brand-blue-600 mr-2">•</span>
                    <span className="text-gray-700">Property address and details</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-brand-blue-600 mr-2">•</span>
                    <span className="text-gray-700">Purchase contract or ownership docs</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-brand-blue-600 mr-2">•</span>
                    <span className="text-gray-700">Rehab budget and scope (if applicable)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-brand-blue-600 mr-2">•</span>
                    <span className="text-gray-700">Personal financial statement</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-brand-blue-600 mr-2">•</span>
                    <span className="text-gray-700">Previous project examples (helpful)</span>
                  </li>
                </ul>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  For Business Loans
                </h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-brand-blue-600 mr-2">•</span>
                    <span className="text-gray-700">Business overview and financials</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-brand-blue-600 mr-2">•</span>
                    <span className="text-gray-700">Asset list (equipment, inventory, AR)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-brand-blue-600 mr-2">•</span>
                    <span className="text-gray-700">Bank statements (3-6 months)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-brand-blue-600 mr-2">•</span>
                    <span className="text-gray-700">Use of funds explanation</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-brand-blue-600 mr-2">•</span>
                    <span className="text-gray-700">SBA loan details (for bridge loans)</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Common Questions
            </h2>
            <div className="space-y-6">
              <div className="border-b border-gray-200 pb-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  How fast can I get approved?
                </h3>
                <p className="text-gray-600">
                  Most applications receive initial approval within 24-48 hours. Full underwriting 
                  and formal approval typically takes 2-3 days.
                </p>
              </div>
              <div className="border-b border-gray-200 pb-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  What credit score do I need?
                </h3>
                <p className="text-gray-600">
                  While we prefer 650+, we evaluate each deal holistically. Strong deals with 
                  experienced operators can work with lower scores.
                </p>
              </div>
              <div className="border-b border-gray-200 pb-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Do you charge application or origination fees?
                </h3>
                <p className="text-gray-600">
                  We charge competitive origination fees at closing—no upfront fees. All costs 
                  are disclosed clearly in the term sheet.
                </p>
              </div>
              <div className="pb-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Can I pay off the loan early?
                </h3>
                <p className="text-gray-600">
                  Most of our loans have no prepayment penalty. You can exit early without extra fees.
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
              Ready to Experience the BuildUp Difference?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Start your application today and see why borrowers choose BuildUp Capital.
            </p>
            <Link href="/apply" className="btn-primary bg-white text-brand-blue-600 hover:bg-gray-100">
              Apply Now
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
