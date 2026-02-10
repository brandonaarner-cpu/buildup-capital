/**
 * BuildUp Capital Lead Capture Form
 * Optimized for qualifying high-value lending leads
 */

'use client';

import { useState } from 'react';

export default function LeadFormBC() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    businessType: '',
    loanAmount: '',
    realEstateValue: '',
    timeline: '',
  });
  
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const response = await fetch('/api/leads/buildup-capital', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus('success');
        setMessage(data.message);
        
        // Reset form
        setFormData({
          name: '',
          email: '',
          phone: '',
          businessType: '',
          loanAmount: '',
          realEstateValue: '',
          timeline: '',
        });
      } else {
        setStatus('error');
        setMessage(data.error || 'Something went wrong');
      }
    } catch (error) {
      setStatus('error');
      setMessage('Failed to submit form. Please try again.');
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto">
      {status === 'success' ? (
        <div className="bg-[#D4AF37] text-slate-900 p-8 border-2 border-slate-900">
          <h3 className="font-black text-2xl mb-4">✅ CHECK YOUR EMAIL!</h3>
          <p className="text-lg mb-4">{message}</p>
          <p className="text-sm">
            Brandon will review your request and reach out within 24 hours.
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name */}
          <div>
            <label htmlFor="name" className="block font-black text-lg mb-2">
              Your Name *
            </label>
            <input
              id="name"
              type="text"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full px-4 py-3 border-2 border-slate-900 text-lg focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
              placeholder="John Smith"
            />
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block font-black text-lg mb-2">
              Email Address *
            </label>
            <input
              id="email"
              type="email"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full px-4 py-3 border-2 border-slate-900 text-lg focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
              placeholder="john@business.com"
            />
          </div>

          {/* Phone (Optional but encouraged) */}
          <div>
            <label htmlFor="phone" className="block font-black text-lg mb-2">
              Phone Number <span className="font-normal text-sm">(Optional - for faster response)</span>
            </label>
            <input
              id="phone"
              type="tel"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className="w-full px-4 py-3 border-2 border-slate-900 text-lg focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
              placeholder="(555) 123-4567"
            />
          </div>

          {/* Business Type */}
          <div>
            <label htmlFor="businessType" className="block font-black text-lg mb-2">
              Business Type <span className="font-normal text-sm">(Optional)</span>
            </label>
            <select
              id="businessType"
              value={formData.businessType}
              onChange={(e) => setFormData({ ...formData, businessType: e.target.value })}
              className="w-full px-4 py-3 border-2 border-slate-900 text-lg focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
            >
              <option value="">Select type...</option>
              <option value="Retail">Retail</option>
              <option value="Restaurant">Restaurant / Food Service</option>
              <option value="Construction">Construction</option>
              <option value="Manufacturing">Manufacturing</option>
              <option value="Services">Professional Services</option>
              <option value="Real Estate">Real Estate</option>
              <option value="Healthcare">Healthcare</option>
              <option value="Technology">Technology</option>
              <option value="Other">Other</option>
            </select>
          </div>

          {/* Loan Amount */}
          <div>
            <label htmlFor="loanAmount" className="block font-black text-lg mb-2">
              Loan Amount Needed <span className="font-normal text-sm">(Optional)</span>
            </label>
            <select
              id="loanAmount"
              value={formData.loanAmount}
              onChange={(e) => setFormData({ ...formData, loanAmount: e.target.value })}
              className="w-full px-4 py-3 border-2 border-slate-900 text-lg focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
            >
              <option value="">Select range...</option>
              <option value="25000">$25k - $50k</option>
              <option value="75000">$50k - $100k</option>
              <option value="150000">$100k - $250k</option>
              <option value="375000">$250k - $500k</option>
              <option value="750000">$500k - $1M</option>
              <option value="1500000">$1M+</option>
            </select>
          </div>

          {/* Real Estate Value */}
          <div>
            <label htmlFor="realEstateValue" className="block font-black text-lg mb-2">
              Real Estate Value <span className="font-normal text-sm">(Optional - improves terms)</span>
            </label>
            <select
              id="realEstateValue"
              value={formData.realEstateValue}
              onChange={(e) => setFormData({ ...formData, realEstateValue: e.target.value })}
              className="w-full px-4 py-3 border-2 border-slate-900 text-lg focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
            >
              <option value="">Select range...</option>
              <option value="100000">$100k - $250k</option>
              <option value="375000">$250k - $500k</option>
              <option value="750000">$500k - $1M</option>
              <option value="1500000">$1M - $2M</option>
              <option value="3000000">$2M+</option>
            </select>
          </div>

          {/* Timeline */}
          <div>
            <label htmlFor="timeline" className="block font-black text-lg mb-2">
              When Do You Need Funding? <span className="font-normal text-sm">(Optional)</span>
            </label>
            <select
              id="timeline"
              value={formData.timeline}
              onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
              className="w-full px-4 py-3 border-2 border-slate-900 text-lg focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
            >
              <option value="">Select timeline...</option>
              <option value="ASAP">ASAP (within 2 weeks)</option>
              <option value="1-3 months">1-3 months</option>
              <option value="3-6 months">3-6 months</option>
              <option value="Just exploring">Just exploring</option>
            </select>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={status === 'loading'}
            className="w-full bg-[#D4AF37] text-slate-900 font-black text-xl py-4 border-2 border-slate-900 hover:bg-[#BF9B30] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {status === 'loading' ? 'SUBMITTING...' : 'GET YOUR LENDING CALCULATOR →'}
          </button>

          {/* Error Message */}
          {status === 'error' && (
            <div className="bg-red-100 border-2 border-red-500 text-red-700 p-4">
              <p className="font-bold">❌ {message}</p>
            </div>
          )}

          {/* Privacy Note */}
          <p className="text-sm text-slate-600 text-center">
            We respect your privacy. No spam, ever. Unsubscribe anytime.
          </p>
        </form>
      )}
    </div>
  );
}
