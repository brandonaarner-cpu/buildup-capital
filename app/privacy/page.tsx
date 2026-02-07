import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'BuildUp Capital privacy policy and data protection information.',
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-white py-16">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Privacy Policy</h1>
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600">
              Privacy policy content coming soon. BuildUp Capital is committed to protecting your privacy 
              and handling your personal information with care and respect.
            </p>
            <p className="text-gray-600 mt-4">
              For questions about our privacy practices, please contact us at privacy@buildup.capital
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
