'use client';

import { useState } from 'react';

interface FormData {
  name: string;
  email: string;
  phone: string;
  investorType: string;
  investmentAmount: string;
  currentInvestments: string;
  biggestQuestion: string;
}

export default function InvestorLeadForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    investorType: '',
    investmentAmount: '',
    currentInvestments: '',
    biggestQuestion: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    setError('');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name.trim() || !formData.email.trim()) {
      setError('Please fill in all required fields');
      return;
    }

    setIsSubmitting(true);
    setError('');

    try {
      const response = await fetch('/api/leads/buildup-capital', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          leadType: 'investor',
          source: 'website'
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to submit form');
      }

      // Track conversion
      if (typeof window !== 'undefined' && (window as any).gtag) {
        (window as any).gtag('event', 'generate_lead', {
          event_category: 'investor_lead',
          event_label: 'buildup_capital',
          value: 1
        });
      }

      // Redirect to thank you page
      window.location.href = '/investor-thank-you';
    } catch (err) {
      setError('Something went wrong. Please try again.');
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white border-4 border-[#0A2540] p-8 max-w-2xl">
      <div className="mb-6">
        <h3 className="text-3xl font-black text-[#0A2540] mb-2">
          Start Earning Monthly Income
        </h3>
        <p className="text-slate-600">
          No tenants, no toilets, no turnover — just steady returns backed by real estate.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Name & Email */}
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-bold text-[#0A2540] mb-2">
              Your Name *
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border-2 border-slate-300 focus:border-[#F59E0B] focus:outline-none transition-colors"
              placeholder="John Smith"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-bold text-[#0A2540] mb-2">
              Email Address *
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border-2 border-slate-300 focus:border-[#F59E0B] focus:outline-none transition-colors"
              placeholder="john@example.com"
              required
            />
          </div>
        </div>

        {/* Phone */}
        <div>
          <label className="block text-sm font-bold text-[#0A2540] mb-2">
            Phone Number (Optional)
          </label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            className="w-full px-4 py-3 border-2 border-slate-300 focus:border-[#F59E0B] focus:outline-none transition-colors"
            placeholder="(555) 123-4567"
          />
        </div>

        {/* Investor Type */}
        <div>
          <label className="block text-sm font-bold text-[#0A2540] mb-2">
            Investor Status
          </label>
          <select
            name="investorType"
            value={formData.investorType}
            onChange={handleInputChange}
            className="w-full px-4 py-3 border-2 border-slate-300 focus:border-[#F59E0B] focus:outline-none transition-colors"
          >
            <option value="">Select...</option>
            <option value="accredited">Accredited Investor</option>
            <option value="qualified">Qualified Purchaser</option>
            <option value="exploring">Exploring Options</option>
          </select>
        </div>

        {/* Investment Amount */}
        <div>
          <label className="block text-sm font-bold text-[#0A2540] mb-2">
            Target Investment Amount
          </label>
          <select
            name="investmentAmount"
            value={formData.investmentAmount}
            onChange={handleInputChange}
            className="w-full px-4 py-3 border-2 border-slate-300 focus:border-[#F59E0B] focus:outline-none transition-colors"
          >
            <option value="">Select range...</option>
            <option value="$50k - $100k">$50k - $100k</option>
            <option value="$100k - $250k">$100k - $250k</option>
            <option value="$250k - $500k">$250k - $500k</option>
            <option value="$500k - $1M">$500k - $1M</option>
            <option value="$1M+">$1M+</option>
          </select>
        </div>

        {/* Current Investments */}
        <div>
          <label className="block text-sm font-bold text-[#0A2540] mb-2">
            Current Real Estate Investments
          </label>
          <select
            name="currentInvestments"
            value={formData.currentInvestments}
            onChange={handleInputChange}
            className="w-full px-4 py-3 border-2 border-slate-300 focus:border-[#F59E0B] focus:outline-none transition-colors"
          >
            <option value="">Select...</option>
            <option value="None">None (first investment)</option>
            <option value="Short-term rentals">Short-term rentals (Airbnb, VRBO)</option>
            <option value="Long-term rentals">Long-term rentals</option>
            <option value="Syndications">Syndications / REITs</option>
            <option value="Multiple">Multiple types</option>
          </select>
        </div>

        {/* Biggest Question */}
        <div>
          <label className="block text-sm font-bold text-[#0A2540] mb-2">
            What's Your Biggest Question About Private Credit?
          </label>
          <textarea
            name="biggestQuestion"
            value={formData.biggestQuestion}
            onChange={handleInputChange}
            rows={3}
            className="w-full px-4 py-3 border-2 border-slate-300 focus:border-[#F59E0B] focus:outline-none transition-colors resize-none"
            placeholder="I'm curious about..."
          />
        </div>

        {/* Error message */}
        {error && (
          <div className="p-4 bg-red-50 border-l-4 border-red-500 text-red-700 text-sm">
            {error}
          </div>
        )}

        {/* Submit button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-[#F59E0B] hover:bg-[#D97706] text-white font-black py-4 px-6 transition-colors duration-200 text-lg disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? 'Submitting...' : 'Get the ROI Comparison Guide →'}
        </button>

        {/* Privacy note */}
        <div className="text-center text-xs text-slate-500">
          We respect your privacy. Unsubscribe at any time.
        </div>
      </form>
    </div>
  );
}
