import { Metadata } from 'next';
import ApplicationForm from '@/components/ApplicationForm';

export const metadata: Metadata = {
  title: 'Apply for Financing',
  description: 'Apply for fast, flexible financing from BuildUp Capital. Get approved in 24-48 hours.',
};

export default function ApplyPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Apply for Financing
            </h1>
            <p className="text-xl text-gray-600">
              Complete this quick application and get a decision in 24-48 hours.
            </p>
          </div>

          {/* Form */}
          <ApplicationForm />

          {/* Trust Elements */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="text-3xl mb-2">🔒</div>
              <h3 className="font-semibold text-gray-900 mb-1">Secure & Confidential</h3>
              <p className="text-sm text-gray-600">Your information is encrypted and protected</p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="text-3xl mb-2">⚡</div>
              <h3 className="font-semibold text-gray-900 mb-1">Fast Approval</h3>
              <p className="text-sm text-gray-600">Get a decision in 24-48 hours</p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="text-3xl mb-2">💯</div>
              <h3 className="font-semibold text-gray-900 mb-1">No Obligation</h3>
              <p className="text-sm text-gray-600">Applying doesn't commit you to anything</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
