import BorrowerQualificationForm from '@/components/BorrowerQualificationForm';

export const metadata = {
  title: 'Apply for Funding | BuildUp Capital',
  description: 'Apply for $250K-$10M real estate-backed bridge loans. Fast approval, 7-day average close time.',
};

export default function ApplyPage() {
  return (
    <div className="min-h-screen bg-slate-50 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-black text-slate-900 mb-4 uppercase tracking-tight">
            Borrower Application
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Complete this pre-qualification form to see if you qualify for BuildUp Capital funding.
            Takes 3-5 minutes. No impact to your credit score.
          </p>
        </div>

        {/* Trust Bar */}
        <div className="bg-king-gold py-4 mb-12">
          <div className="max-w-5xl mx-auto px-4">
            <div className="flex items-center justify-center gap-8 text-slate-900 font-bold text-sm overflow-x-auto whitespace-nowrap">
              <span>✓ 7-Day Average Close</span>
              <span className="text-slate-700">•</span>
              <span>✓ $250K - $10M Loans</span>
              <span className="text-slate-700">•</span>
              <span>✓ Real Estate Backed</span>
              <span className="text-slate-700">•</span>
              <span>✓ No Upfront Fees</span>
            </div>
          </div>
        </div>

        {/* Form */}
        <BorrowerQualificationForm />

        {/* FAQ */}
        <div className="mt-16 max-w-3xl mx-auto">
          <h2 className="text-3xl font-black text-slate-900 mb-8 text-center uppercase">
            Common Questions
          </h2>
          <div className="space-y-6">
            <div className="bg-white border-2 border-slate-300 p-6">
              <h3 className="font-black text-slate-900 mb-2">
                What happens after I submit this application?
              </h3>
              <p className="text-slate-600">
                Based on your answers, we'll immediately determine if you pre-qualify. 
                If you do, we'll schedule a call within 24-48 hours to discuss your specific needs and next steps.
              </p>
            </div>

            <div className="bg-white border-2 border-slate-300 p-6">
              <h3 className="font-black text-slate-900 mb-2">
                Will this affect my credit score?
              </h3>
              <p className="text-slate-600">
                No. This is a soft inquiry only. We won't run a hard credit check until you're ready to move forward with a formal loan application.
              </p>
            </div>

            <div className="bg-white border-2 border-slate-300 p-6">
              <h3 className="font-black text-slate-900 mb-2">
                What is LTV and why does it matter?
              </h3>
              <p className="text-slate-600">
                LTV (Loan-to-Value) is the ratio of your total debt to your property value. 
                Lower LTV = less risk = better terms. We typically max out at 75% LTV.
              </p>
            </div>

            <div className="bg-white border-2 border-slate-300 p-6">
              <h3 className="font-black text-slate-900 mb-2">
                How fast can you close?
              </h3>
              <p className="text-slate-600">
                Our average close time is 7-10 days from application approval. If you have all documentation ready 
                and the property appraisal is straightforward, we can close in as little as 5 days.
              </p>
            </div>

            <div className="bg-white border-2 border-slate-300 p-6">
              <h3 className="font-black text-slate-900 mb-2">
                What if I don't pre-qualify?
              </h3>
              <p className="text-slate-600">
                We'll still reach out to discuss your situation. Sometimes there are alternative structures 
                or additional collateral options that can make a deal work. We're problem solvers, not box-checkers.
              </p>
            </div>
          </div>
        </div>

        {/* Security Note */}
        <div className="mt-12 text-center text-sm text-slate-500">
          <p>🔒 Your information is secure and confidential. We never share your data with third parties.</p>
        </div>
      </div>
    </div>
  );
}
