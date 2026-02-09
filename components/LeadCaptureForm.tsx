"use client";

import { useState } from "react";

interface LeadCaptureFormProps {
  ctaText?: string;
  context?: string;
}

export default function LeadCaptureForm({ 
  ctaText = "Get Access",
  context = "general"
}: LeadCaptureFormProps) {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // TODO: Integrate with your email service provider
    // For now, just simulate submission
    setTimeout(() => {
      setSubmitted(true);
      setLoading(false);
      console.log("Lead captured:", { name, email, context });
    }, 1000);
  };

  if (submitted) {
    return (
      <div className="bg-green-50 border-2 border-green-200 rounded-xl p-8 text-center">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-2xl font-bold text-slate-900 mb-2">Thank You!</h3>
        <p className="text-slate-600">
          We've received your information and will be in touch soon.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="name" className="form-label text-white">
          Name
        </label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="form-input"
          placeholder="Your full name"
        />
      </div>

      <div>
        <label htmlFor="email" className="form-label text-white">
          Email Address
        </label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="form-input"
          placeholder="you@example.com"
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full bg-white text-slate-900 px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:bg-slate-100 hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {loading ? "Submitting..." : ctaText}
      </button>

      <p className="text-sm text-slate-300 text-center">
        We respect your privacy. Unsubscribe anytime.
      </p>
    </form>
  );
}
