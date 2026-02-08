'use client';

import { useState } from 'react';

export default function InvestorDownloadForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    portfolio: '',
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setMessage('');

    try {
      const response = await fetch('/api/download-guide', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus('success');
        setMessage('Success! Check your email for the guide.');
        setFormData({ name: '', email: '', portfolio: '' });
      } else {
        setStatus('error');
        setMessage(data.error || 'Something went wrong. Please try again.');
      }
    } catch (error) {
      setStatus('error');
      setMessage('Network error. Please try again.');
    }
  };

  if (status === 'success') {
    return (
      <div className="bg-green-50 border-2 border-green-500 rounded-xl p-8 text-center">
        <div className="text-6xl mb-4">📧</div>
        <h3 className="text-2xl font-bold text-green-900 mb-4">
          Check Your Email!
        </h3>
        <p className="text-green-800 mb-6">
          We've sent "Beyond Rentals" to <strong>{formData.email}</strong>.
        </p>
        <p className="text-green-700 text-sm mb-4">
          The PDF is attached. If you don't see it, check your spam folder.
        </p>
        <p className="text-green-600 text-sm italic">
          You'll receive 6 more emails over the next 3 weeks with real deal examples, case studies, and practical frameworks.
        </p>
        <button
          onClick={() => setStatus('idle')}
          className="mt-6 text-green-600 hover:text-green-700 font-medium"
        >
          Download for someone else →
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-xl shadow-2xl p-8 border-2 border-gray-200">
      <div className="text-center mb-6">
        <div className="text-5xl mb-3">📖</div>
        <h3 className="text-2xl font-bold mb-2" style={{ color: '#0A2540' }}>
          Download Your Free Guide
        </h3>
        <p className="text-gray-600">
          20 pages | PDF format | Instant delivery
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-bold text-gray-700 mb-1">
            Full Name *
          </label>
          <input
            type="text"
            id="name"
            required
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none transition-all"
            style={{ focusBorderColor: '#F59E0B' }}
            placeholder="John Smith"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-bold text-gray-700 mb-1">
            Email Address *
          </label>
          <input
            type="email"
            id="email"
            required
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none transition-all"
            placeholder="john@example.com"
          />
        </div>

        <div>
          <label htmlFor="portfolio" className="block text-sm font-bold text-gray-700 mb-1">
            Current Investments (Optional)
          </label>
          <select
            id="portfolio"
            value={formData.portfolio}
            onChange={(e) => setFormData({ ...formData, portfolio: e.target.value })}
            className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none transition-all"
          >
            <option value="">Select one...</option>
            <option value="airbnb">Short-term rentals (Airbnb)</option>
            <option value="ltr">Long-term rentals</option>
            <option value="syndications">Real estate syndications</option>
            <option value="stocks">Stocks/REITs</option>
            <option value="other">Other</option>
          </select>
        </div>

        {status === 'error' && (
          <div className="bg-red-50 border-2 border-red-300 rounded-lg p-4 text-red-800 text-sm">
            {message}
          </div>
        )}

        <button
          type="submit"
          disabled={status === 'loading'}
          className="w-full text-white px-8 py-4 rounded-lg font-bold text-lg transition-all shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
          style={{ backgroundColor: '#F59E0B' }}
        >
          {status === 'loading' ? (
            <span className="flex items-center justify-center">
              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Sending...
            </span>
          ) : (
            '📧 Send Me the Guide'
          )}
        </button>

        <p className="text-xs text-gray-500 text-center">
          No spam. Unsubscribe anytime. We respect your privacy.
        </p>
      </form>

      <div className="mt-6 pt-6 border-t-2 border-gray-100">
        <p className="text-sm text-gray-600 text-center font-medium">
          ✓ 20-page comprehensive guide<br />
          ✓ Instant email delivery<br />
          ✓ No credit card required
        </p>
      </div>
    </div>
  );
}
