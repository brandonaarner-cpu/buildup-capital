import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'BuildUp Capital terms of service and website usage terms.',
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-white py-16">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Terms of Service</h1>
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600">
              Terms of service content coming soon. By using BuildUp Capital's website and services, 
              you agree to our terms and conditions.
            </p>
            <p className="text-gray-600 mt-4">
              For questions about our terms, please contact us at legal@buildup.capital
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
