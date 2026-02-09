import LeadCaptureForm from "@/components/LeadCaptureForm";

export default function InvestorLoginPage() {
  return (
    <div className="min-h-screen pt-32 pb-20 bg-gradient-to-br from-slate-50 to-white">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-blue-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
            
            <h1 className="text-4xl font-bold text-slate-900 mb-4">
              Investor Portal Coming Soon
            </h1>
            <p className="text-xl text-slate-600 mb-8">
              We're building a world-class investor experience. Be the first to know when it launches.
            </p>
          </div>

          <div className="mb-8 p-6 bg-slate-50 rounded-xl">
            <h3 className="font-bold text-slate-900 mb-3">What to Expect:</h3>
            <ul className="space-y-2 text-slate-600">
              <li className="flex items-start">
                <svg className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Secure login with two-factor authentication</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Real-time portfolio performance tracking</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Access to new investment opportunities</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Monthly distribution statements and tax documents</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Detailed deal documentation and updates</span>
              </li>
            </ul>
          </div>

          <div className="border-t border-slate-200 pt-8">
            <h3 className="text-lg font-bold text-slate-900 mb-4 text-center">
              Get Early Access
            </h3>
            <p className="text-slate-600 mb-6 text-center">
              Enter your email to be notified when the investor portal launches.
            </p>
            
            <LeadCaptureForm 
              ctaText="Notify Me"
              context="investor-portal-waitlist"
            />
          </div>
        </div>

        <div className="mt-8 text-center text-slate-600">
          <p>
            Already have an account with us?{" "}
            <a href="mailto:investors@buildupcapital.com" className="text-blue-900 font-semibold hover:underline">
              Contact us directly
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
