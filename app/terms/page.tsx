export default function TermsPage() {
  return (
    <div className="pt-32 pb-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-slate-900 mb-8">Terms of Service</h1>
        
        <div className="prose prose-slate max-w-none">
          <p className="text-slate-600 mb-6">
            <strong>Last Updated:</strong> February 2026
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Agreement to Terms</h2>
            <p className="text-slate-600 mb-4">
              By accessing or using the BuildUp Capital website and services, you agree to be bound by these Terms of Service 
              and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from 
              using or accessing this site.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Accredited Investor Requirement</h2>
            <p className="text-slate-600 mb-4">
              Investment opportunities offered through BuildUp Capital are available only to accredited investors as defined 
              by the Securities and Exchange Commission (SEC). By expressing interest in our investment opportunities, you 
              represent and warrant that you meet the accredited investor requirements.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Investment Risks</h2>
            <p className="text-slate-600 mb-4">
              All investments carry risk, including the possible loss of principal. Private credit investments are:
            </p>
            <ul className="list-disc pl-6 text-slate-600 space-y-2 mb-4">
              <li>Not FDIC insured</li>
              <li>Not guaranteed</li>
              <li>Subject to potential loss of principal</li>
              <li>Illiquid and may have limited or no secondary market</li>
              <li>Subject to market, credit, and other risks</li>
            </ul>
            <p className="text-slate-600 mb-4">
              Past performance is not indicative of future results. You should carefully review all offering documents 
              and consult with your financial, legal, and tax advisors before making any investment decision.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">No Investment Advice</h2>
            <p className="text-slate-600 mb-4">
              Information provided on this website is for informational purposes only and does not constitute investment, 
              financial, legal, or tax advice. We do not make recommendations regarding the suitability of any investment 
              for any particular investor.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Intellectual Property</h2>
            <p className="text-slate-600 mb-4">
              The content, features, and functionality of this website, including but not limited to text, graphics, logos, 
              and software, are owned by BuildUp Capital and are protected by copyright, trademark, and other intellectual 
              property laws.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">User Representations</h2>
            <p className="text-slate-600 mb-4">
              By using our services, you represent and warrant that:
            </p>
            <ul className="list-disc pl-6 text-slate-600 space-y-2 mb-4">
              <li>All information you provide is accurate, current, and complete</li>
              <li>You have the legal capacity to enter into binding agreements</li>
              <li>You will not use our services for any illegal or unauthorized purpose</li>
              <li>Your use of the services will comply with all applicable laws and regulations</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Limitation of Liability</h2>
            <p className="text-slate-600 mb-4">
              To the fullest extent permitted by law, BuildUp Capital and its affiliates, officers, directors, employees, 
              and agents shall not be liable for any indirect, incidental, special, consequential, or punitive damages, 
              or any loss of profits or revenues, whether incurred directly or indirectly, or any loss of data, use, 
              goodwill, or other intangible losses.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Governing Law</h2>
            <p className="text-slate-600 mb-4">
              These Terms shall be governed by and construed in accordance with the laws of the state where BuildUp Capital 
              is registered, without regard to its conflict of law provisions.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Changes to Terms</h2>
            <p className="text-slate-600 mb-4">
              We reserve the right to modify or replace these Terms at any time. Material changes will be notified to 
              registered users. Your continued use of the services after any changes constitutes acceptance of the new Terms.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Contact Information</h2>
            <p className="text-slate-600 mb-4">
              If you have questions about these Terms, please contact us at:
            </p>
            <p className="text-slate-600">
              <strong>Email:</strong> legal@buildupcapital.com<br />
              <strong>Subject Line:</strong> Terms of Service Inquiry
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
