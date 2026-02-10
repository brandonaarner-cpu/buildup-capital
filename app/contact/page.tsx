import ContactForm from "@/components/ContactForm";
import LeadFormBC from "@/components/LeadFormBC";

export default function ContactPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Let's Talk
            </h1>
            <p className="text-xl md:text-2xl text-slate-300">
              Whether you're an investor or borrower, we're here to answer your questions
            </p>
          </div>
        </div>
      </section>

      {/* Borrower Lead Form Section */}
      <section className="py-16 bg-king-gold">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-4xl font-black text-slate-900 mb-4 uppercase">
              Need Funding?
            </h2>
            <p className="text-xl text-slate-800">
              Get a lending assessment in 60 seconds. No impact to your credit.
            </p>
          </div>
          <div className="bg-white border-2 border-slate-900 shadow-2xl p-8">
            <LeadFormBC />
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
            {/* Contact Info */}
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">
                Get in Touch
              </h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="font-bold text-slate-900 mb-2">For Investors</h3>
                  <p className="text-slate-600 mb-2">
                    Questions about investment opportunities, portfolio management, or getting started?
                  </p>
                  <a href="mailto:investors@buildupcapital.com" className="text-blue-900 font-semibold hover:underline">
                    investors@buildupcapital.com
                  </a>
                </div>

                <div>
                  <h3 className="font-bold text-slate-900 mb-2">For Borrowers</h3>
                  <p className="text-slate-600 mb-2">
                    Need capital for your business or project? Let's discuss your financing needs.
                  </p>
                  <a href="mailto:loans@buildupcapital.com" className="text-blue-900 font-semibold hover:underline">
                    loans@buildupcapital.com
                  </a>
                </div>

                <div>
                  <h3 className="font-bold text-slate-900 mb-2">General Inquiries</h3>
                  <p className="text-slate-600 mb-2">
                    Everything else — partnerships, press, or general questions.
                  </p>
                  <a href="mailto:hello@buildupcapital.com" className="text-blue-900 font-semibold hover:underline">
                    hello@buildupcapital.com
                  </a>
                </div>
              </div>

              <div className="mt-8 p-6 bg-slate-50 rounded-xl">
                <h3 className="font-bold text-slate-900 mb-3">Office Hours</h3>
                <p className="text-slate-600">
                  Monday - Friday<br />
                  9:00 AM - 5:00 PM EST
                </p>
                <p className="text-slate-500 text-sm mt-2">
                  We typically respond within 24 business hours
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">
                Send Us a Message
              </h2>
              <ContactForm context="general" />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Preview */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Common Questions
            </h2>
            <p className="text-xl text-slate-600">
              Quick answers to frequently asked questions
            </p>
          </div>

          <div className="space-y-6">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-lg font-bold text-slate-900 mb-2">
                What is the minimum investment amount?
              </h3>
              <p className="text-slate-600">
                Minimum investment amounts vary by opportunity, but most offerings start at $50,000. 
                Some opportunities may have higher minimums depending on the deal structure.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-lg font-bold text-slate-900 mb-2">
                How quickly can borrowers get funded?
              </h3>
              <p className="text-slate-600">
                Our typical timeline from application to funding is 3-7 business days for approved loans. 
                Complex deals may take longer, but we pride ourselves on speed and transparency.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-lg font-bold text-slate-900 mb-2">
                What makes BuildUp Capital different?
              </h3>
              <p className="text-slate-600">
                We combine 25 years of experience with radical transparency. We care about how deals end, 
                not just how they begin. For investors, that means conservative underwriting. For borrowers, 
                that means partnership and a path to traditional financing.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-lg font-bold text-slate-900 mb-2">
                Are investments guaranteed or FDIC insured?
              </h3>
              <p className="text-slate-600">
                No. Private credit investments are not FDIC insured and carry risk, including possible loss 
                of principal. All investments are backed by real estate collateral, but there are no guarantees. 
                We provide full disclosure of risks for every opportunity.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
