'use client';

import { useState } from 'react';

interface FormData {
  name: string;
  email: string;
  phone: string;
  loanAmount: string;
  propertyType: string;
  collateralValue: string;
  timeframe: string;
  situation: string;
}

export default function BorrowerLeadForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    loanAmount: '',
    propertyType: '',
    collateralValue: '',
    timeframe: '',
    situation: ''
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
          leadType: 'borrower',
          source: 'website'
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to submit form');
      }

      // Track conversion
      if (typeof window !== 'undefined' && (window as any).gtag) {
        (window as any).gtag('event', 'generate_lead', {
          event_category: 'borrower_lead',
          event_label: 'buildup_capital',
          value: 1
        });
      }

      // Redirect to thank you page
      window.location.href = '/borrower-thank-you';
    } catch (err) {
      setError('Something went wrong. Please try again.');
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white border-4 border-[#0A2540] p-8 max-w-2xl">
      <div className="mb-6">
        <h3 className="text-3xl font-black text-[#0A2540] mb-2">
          Get Pre-Qualified in 7 Days
        </h3>
        <p className="text-slate-600">
          Fast bridge loans for real estate investors. No banks, no delays.
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
            Phone Number *
          </label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            className="w-full px-4 py-3 border-2 border-slate-300 focus:border-[#F59E0B] focus:outline-none transition-colors"
            placeholder="(555) 123-4567"
            required
          />
          <div className="text-xs text-slate-500 mt-1">
            For faster approval, we may call you within 24 hours
          </div>
        </div>

        {/* Loan Amount */}
        <div>
          <label className="block text-sm font-bold text-[#0A2540] mb-2">
            Loan Amount Needed
          </label>
          <select
            name="loanAmount"
            value={formData.loanAmount}
            onChange={handleInputChange}
            className="w-full px-4 py-3 border-2 border-slate-300 focus:border-[#F59E0B] focus:outline-none transition-colors"
          >
            <option value="">Select range...</option>
            <option value="$100k - $250k">$100k - $250k</option>
            <option value="$250k - $500k">$250k - $500k</option>
            <option value="$500k - $1M">$500k - $1M</option>
            <option value="$1M - $2M">$1M - $2M</option>
            <option value="$2M+">$2M+</option>
          </select>
        </div>

        {/* Property Type */}
        <div>
          <label className="block text-sm font-bold text-[#0A2540] mb-2">
            Property Type
          </label>
          <select
            name="propertyType"
            value={formData.propertyType}
            onChange={handleInputChange}
            className="w-full px-4 py-3 border-2 border-slate-300 focus:border-[#F59E0B] focus:outline-none transition-colors"
          >
            <option value="">Select...</option>
            <option value="Single-family">Single-family residence</option>
            <option value="Multi-family">Multi-family (2-4 units)</option>
            <option value="Apartment">Apartment building (5+ units)</option>
            <option value="Commercial">Commercial</option>
            <option value="Land">Land / Development</option>
          </select>
        </div>

        {/* Collateral Value */}
        <div>
          <label className="block text-sm font-bold text-[#0A2540] mb-2">
            Estimated Property Value (Collateral)
          </label>
          <input
            type="text"
            name="collateralValue"
            value={formData.collateralValue}
            onChange={handleInputChange}
            className="w-full px-4 py-3 border-2 border-slate-300 focus:border-[#F59E0B] focus:outline-none transition-colors"
            placeholder="$500,000"
          />
        </div>

        {/* Timeframe */}
        <div>
          <label className="block text-sm font-bold text-[#0A2540] mb-2">
            When Do You Need Funding?
          </label>
          <select
            name="timeframe"
            value={formData.timeframe}
            onChange={handleInputChange}
            className="w-full px-4 py-3 border-2 border-slate-300 focus:border-[#F59E0B] focus:outline-none transition-colors"
          >
            <option value="">Select...</option>
            <option value="Immediately">Immediately (within 7 days)</option>
            <option value="Within 2 weeks">Within 2 weeks</option>
            <option value="Within 30 days">Within 30 days</option>
            <option value="Just exploring">Just exploring options</option>
          </select>
        </div>

        {/* Situation */}
        <div>
          <label className="block text-sm font-bold text-[#0A2540] mb-2">
            Briefly Describe Your Situation
          </label>
          <textarea
            name="situation"
            value={formData.situation}
            onChange={handleInputChange}
            rows={3}
            className="w-full px-4 py-3 border-2 border-slate-300 focus:border-[#F59E0B] focus:outline-none transition-colors resize-none"
            placeholder="I'm looking to fund..."
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
          {isSubmitting ? 'Submitting...' : 'Get Pre-Qualified in 7 Days →'}
        </button>

        {/* Privacy note */}
        <div className="text-center text-xs text-slate-500">
          We respect your privacy. Unsubscribe at any time.
        </div>
      </form>
    </div>
  );
}
