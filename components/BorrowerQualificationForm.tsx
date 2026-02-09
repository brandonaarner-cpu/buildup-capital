'use client';

import { useState } from 'react';

type FormData = {
  // Personal
  fullName: string;
  email: string;
  phone: string;
  location: string;
  
  // Loan Details
  loanAmount: string;
  loanPurpose: string;
  timeline: string;
  
  // Collateral
  propertyAddress: string;
  propertyType: string;
  propertyValue: string;
  currentMortgage: string;
  propertyCondition: string;
  
  // Financial
  creditScore: string;
  cashReserves: string;
  businessRevenue: string;
  businessCashFlow: string;
  
  // Exit Strategy
  exitStrategy: string;
  exitTimeline: string;
};

export default function BorrowerQualificationForm() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    email: '',
    phone: '',
    location: '',
    loanAmount: '',
    loanPurpose: '',
    timeline: '',
    propertyAddress: '',
    propertyType: '',
    propertyValue: '',
    currentMortgage: '',
    propertyCondition: '',
    creditScore: '',
    cashReserves: '',
    businessRevenue: '',
    businessCashFlow: '',
    exitStrategy: '',
    exitTimeline: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [qualification, setQualification] = useState<string | null>(null);

  const totalSteps = 5;

  const updateField = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const nextStep = () => {
    if (step < totalSteps) setStep(step + 1);
  };

  const prevStep = () => {
    if (step > 1) setStep(step - 1);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Calculate qualification tier
    const ltv = calculateLTV();
    const tier = determineTier(ltv);
    
    // Here you would send to your backend/CRM
    console.log('Form submitted:', formData);
    console.log('Qualification Tier:', tier);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    setQualification(tier);
    setIsSubmitting(false);
  };

  const calculateLTV = (): number => {
    const value = parseFloat(formData.propertyValue.replace(/[^0-9.]/g, '')) || 0;
    const mortgage = parseFloat(formData.currentMortgage.replace(/[^0-9.]/g, '')) || 0;
    const loan = parseFloat(formData.loanAmount.replace(/[^0-9.]/g, '')) || 0;
    
    if (value === 0) return 100;
    return ((mortgage + loan) / value) * 100;
  };

  const determineTier = (ltv: number): string => {
    const loan = parseFloat(formData.loanAmount.replace(/[^0-9.]/g, '')) || 0;
    const creditScore = parseInt(formData.creditScore.replace(/[^0-9]/g, '')) || 0;

    // Tier 1: Fast Track
    if (loan <= 2000000 && ltv < 65 && creditScore >= 680) {
      return 'fast-track';
    }
    
    // Tier 2: Standard
    if (loan <= 5000000 && ltv <= 75 && creditScore >= 620) {
      return 'standard';
    }
    
    // Tier 3: Manual Review
    if (loan <= 10000000 && (ltv > 75 || creditScore >= 580)) {
      return 'manual-review';
    }
    
    // Tier 4: Decline
    return 'decline';
  };

  if (qualification) {
    return (
      <div className="max-w-2xl mx-auto p-8 bg-white border-2 border-king-gold">
        <div className="text-center">
          {qualification === 'fast-track' && (
            <>
              <div className="text-6xl mb-4">✅</div>
              <h2 className="text-3xl font-black text-slate-900 mb-4 uppercase">
                You're Pre-Qualified!
              </h2>
              <p className="text-lg text-slate-600 mb-6">
                Based on your application, you qualify for Fast Track processing.
                We'll schedule a call with you within 24 hours to discuss your loan.
              </p>
              <div className="bg-king-gold/10 border-2 border-king-gold p-6 mb-6">
                <h3 className="font-black text-slate-900 mb-2">What Happens Next:</h3>
                <ul className="text-left space-y-2 text-slate-700">
                  <li>✓ You'll receive a call within 24 hours</li>
                  <li>✓ We'll verify your collateral details</li>
                  <li>✓ Average close time: 7-10 days</li>
                  <li>✓ Loan offers typically within 48 hours</li>
                </ul>
              </div>
            </>
          )}

          {qualification === 'standard' && (
            <>
              <div className="text-6xl mb-4">👍</div>
              <h2 className="text-3xl font-black text-slate-900 mb-4 uppercase">
                Application Received
              </h2>
              <p className="text-lg text-slate-600 mb-6">
                Your application looks good. We'll review it and contact you within 48 hours
                to discuss your financing options.
              </p>
              <div className="bg-king-gold/10 border-2 border-king-gold p-6 mb-6">
                <h3 className="font-black text-slate-900 mb-2">What Happens Next:</h3>
                <ul className="text-left space-y-2 text-slate-700">
                  <li>✓ Call within 48 hours</li>
                  <li>✓ Financial documentation review</li>
                  <li>✓ Property appraisal coordination</li>
                  <li>✓ Average close time: 10-14 days</li>
                </ul>
              </div>
            </>
          )}

          {qualification === 'manual-review' && (
            <>
              <div className="text-6xl mb-4">📋</div>
              <h2 className="text-3xl font-black text-slate-900 mb-4 uppercase">
                Under Review
              </h2>
              <p className="text-lg text-slate-600 mb-6">
                Thank you for your application. Due to the loan size or complexity,
                we need to conduct a detailed review. Our team will reach out within 72 hours.
              </p>
              <div className="bg-king-gold/10 border-2 border-king-gold p-6 mb-6">
                <h3 className="font-black text-slate-900 mb-2">Additional Items May Be Needed:</h3>
                <ul className="text-left space-y-2 text-slate-700">
                  <li>• Last 2 years tax returns</li>
                  <li>• Business financial statements</li>
                  <li>• Property appraisal</li>
                  <li>• Personal financial statement</li>
                </ul>
              </div>
            </>
          )}

          {qualification === 'decline' && (
            <>
              <div className="text-6xl mb-4">⚠️</div>
              <h2 className="text-3xl font-black text-slate-900 mb-4 uppercase">
                Additional Information Needed
              </h2>
              <p className="text-lg text-slate-600 mb-6">
                Based on your initial application, we need more information to proceed.
                A loan specialist will contact you to discuss alternative options.
              </p>
              <div className="bg-slate-100 border-2 border-slate-300 p-6 mb-6">
                <h3 className="font-black text-slate-900 mb-2">Possible Next Steps:</h3>
                <ul className="text-left space-y-2 text-slate-700">
                  <li>• Review loan amount (may need to reduce)</li>
                  <li>• Explore additional collateral options</li>
                  <li>• Credit improvement strategies</li>
                  <li>• Alternative financing structures</li>
                </ul>
              </div>
            </>
          )}

          <div className="text-sm text-slate-500 mt-6">
            Application ID: BU-{Date.now()}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto">
      {/* Progress Bar */}
      <div className="mb-8">
        <div className="flex justify-between mb-2">
          {[1, 2, 3, 4, 5].map((s) => (
            <div
              key={s}
              className={`w-full h-2 mx-1 ${
                s <= step ? 'bg-king-gold' : 'bg-slate-200'
              }`}
            />
          ))}
        </div>
        <div className="text-center text-sm text-slate-600 font-bold">
          Step {step} of {totalSteps}
        </div>
      </div>

      <form onSubmit={handleSubmit} className="bg-white border-2 border-slate-300 p-8">
        {/* Step 1: Personal Info */}
        {step === 1 && (
          <div>
            <h2 className="text-2xl font-black text-slate-900 mb-4 uppercase">
              Personal Information
            </h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  value={formData.fullName}
                  onChange={(e) => updateField('fullName', e.target.value)}
                  className="w-full px-4 py-3 border-2 border-slate-300 focus:border-king-gold outline-none"
                  placeholder="John Smith"
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => updateField('email', e.target.value)}
                  className="w-full px-4 py-3 border-2 border-slate-300 focus:border-king-gold outline-none"
                  placeholder="john@example.com"
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => updateField('phone', e.target.value)}
                  className="w-full px-4 py-3 border-2 border-slate-300 focus:border-king-gold outline-none"
                  placeholder="(555) 123-4567"
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">
                  State/Location *
                </label>
                <input
                  type="text"
                  required
                  value={formData.location}
                  onChange={(e) => updateField('location', e.target.value)}
                  className="w-full px-4 py-3 border-2 border-slate-300 focus:border-king-gold outline-none"
                  placeholder="Texas"
                />
              </div>
            </div>
          </div>
        )}

        {/* Step 2: Loan Details */}
        {step === 2 && (
          <div>
            <h2 className="text-2xl font-black text-slate-900 mb-4 uppercase">
              Loan Details
            </h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">
                  Loan Amount Requested *
                </label>
                <select
                  required
                  value={formData.loanAmount}
                  onChange={(e) => updateField('loanAmount', e.target.value)}
                  className="w-full px-4 py-3 border-2 border-slate-300 focus:border-king-gold outline-none"
                >
                  <option value="">Select amount...</option>
                  <option value="250000">$250,000 - $500,000</option>
                  <option value="500000">$500,000 - $1,000,000</option>
                  <option value="1000000">$1,000,000 - $2,500,000</option>
                  <option value="2500000">$2,500,000 - $5,000,000</option>
                  <option value="5000000">$5,000,000 - $10,000,000</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">
                  Loan Purpose *
                </label>
                <select
                  required
                  value={formData.loanPurpose}
                  onChange={(e) => updateField('loanPurpose', e.target.value)}
                  className="w-full px-4 py-3 border-2 border-slate-300 focus:border-king-gold outline-none"
                >
                  <option value="">Select purpose...</option>
                  <option value="business-acquisition">Business Acquisition</option>
                  <option value="working-capital">Working Capital (Existing Business)</option>
                  <option value="real-estate-acquisition">Real Estate Acquisition</option>
                  <option value="real-estate-renovation">Real Estate Renovation</option>
                  <option value="debt-consolidation">Debt Consolidation</option>
                  <option value="equipment-purchase">Equipment Purchase</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">
                  When Do You Need Funds? *
                </label>
                <select
                  required
                  value={formData.timeline}
                  onChange={(e) => updateField('timeline', e.target.value)}
                  className="w-full px-4 py-3 border-2 border-slate-300 focus:border-king-gold outline-none"
                >
                  <option value="">Select timeline...</option>
                  <option value="immediately">Immediately (within 7 days)</option>
                  <option value="2-weeks">2-3 weeks</option>
                  <option value="1-month">1 month</option>
                  <option value="2-months">2+ months</option>
                </select>
              </div>
            </div>
          </div>
        )}

        {/* Step 3: Collateral */}
        {step === 3 && (
          <div>
            <h2 className="text-2xl font-black text-slate-900 mb-4 uppercase">
              Collateral (Real Estate)
            </h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">
                  Property Address *
                </label>
                <input
                  type="text"
                  required
                  value={formData.propertyAddress}
                  onChange={(e) => updateField('propertyAddress', e.target.value)}
                  className="w-full px-4 py-3 border-2 border-slate-300 focus:border-king-gold outline-none"
                  placeholder="123 Main St, City, State, ZIP"
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">
                  Property Type *
                </label>
                <select
                  required
                  value={formData.propertyType}
                  onChange={(e) => updateField('propertyType', e.target.value)}
                  className="w-full px-4 py-3 border-2 border-slate-300 focus:border-king-gold outline-none"
                >
                  <option value="">Select type...</option>
                  <option value="commercial">Commercial</option>
                  <option value="multifamily">Multifamily (5+ units)</option>
                  <option value="single-family">Single Family Rental</option>
                  <option value="mixed-use">Mixed Use</option>
                  <option value="land">Land (with permits)</option>
                  <option value="industrial">Industrial</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">
                  Estimated Property Value *
                </label>
                <input
                  type="text"
                  required
                  value={formData.propertyValue}
                  onChange={(e) => updateField('propertyValue', e.target.value)}
                  className="w-full px-4 py-3 border-2 border-slate-300 focus:border-king-gold outline-none"
                  placeholder="$1,000,000"
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">
                  Current Mortgage Balance (if any)
                </label>
                <input
                  type="text"
                  value={formData.currentMortgage}
                  onChange={(e) => updateField('currentMortgage', e.target.value)}
                  className="w-full px-4 py-3 border-2 border-slate-300 focus:border-king-gold outline-none"
                  placeholder="$0 or $500,000"
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">
                  Property Condition *
                </label>
                <select
                  required
                  value={formData.propertyCondition}
                  onChange={(e) => updateField('propertyCondition', e.target.value)}
                  className="w-full px-4 py-3 border-2 border-slate-300 focus:border-king-gold outline-none"
                >
                  <option value="">Select condition...</option>
                  <option value="excellent">Excellent (move-in ready)</option>
                  <option value="good">Good (minor repairs)</option>
                  <option value="fair">Fair (needs updates)</option>
                  <option value="poor">Poor (major renovation needed)</option>
                </select>
              </div>
            </div>
          </div>
        )}

        {/* Step 4: Financial Snapshot */}
        {step === 4 && (
          <div>
            <h2 className="text-2xl font-black text-slate-900 mb-4 uppercase">
              Financial Snapshot
            </h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">
                  Credit Score Range *
                </label>
                <select
                  required
                  value={formData.creditScore}
                  onChange={(e) => updateField('creditScore', e.target.value)}
                  className="w-full px-4 py-3 border-2 border-slate-300 focus:border-king-gold outline-none"
                >
                  <option value="">Select range...</option>
                  <option value="750">Excellent (720+)</option>
                  <option value="680">Good (680-719)</option>
                  <option value="640">Fair (640-679)</option>
                  <option value="600">Poor (600-639)</option>
                  <option value="550">Below 600</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">
                  Cash Reserves (Liquid Assets) *
                </label>
                <select
                  required
                  value={formData.cashReserves}
                  onChange={(e) => updateField('cashReserves', e.target.value)}
                  className="w-full px-4 py-3 border-2 border-slate-300 focus:border-king-gold outline-none"
                >
                  <option value="">Select range...</option>
                  <option value="500000">$500,000+</option>
                  <option value="250000">$250,000 - $500,000</option>
                  <option value="100000">$100,000 - $250,000</option>
                  <option value="50000">$50,000 - $100,000</option>
                  <option value="25000">$25,000 - $50,000</option>
                  <option value="10000">Under $25,000</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">
                  Current Business Revenue (Annual, if applicable)
                </label>
                <input
                  type="text"
                  value={formData.businessRevenue}
                  onChange={(e) => updateField('businessRevenue', e.target.value)}
                  className="w-full px-4 py-3 border-2 border-slate-300 focus:border-king-gold outline-none"
                  placeholder="$0 or $500,000/year"
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">
                  Monthly Business Cash Flow (if applicable)
                </label>
                <input
                  type="text"
                  value={formData.businessCashFlow}
                  onChange={(e) => updateField('businessCashFlow', e.target.value)}
                  className="w-full px-4 py-3 border-2 border-slate-300 focus:border-king-gold outline-none"
                  placeholder="$0 or $10,000/month"
                />
              </div>
            </div>
          </div>
        )}

        {/* Step 5: Exit Strategy */}
        {step === 5 && (
          <div>
            <h2 className="text-2xl font-black text-slate-900 mb-4 uppercase">
              Repayment Plan
            </h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">
                  How Will You Repay the Loan? *
                </label>
                <select
                  required
                  value={formData.exitStrategy}
                  onChange={(e) => updateField('exitStrategy', e.target.value)}
                  className="w-full px-4 py-3 border-2 border-slate-300 focus:border-king-gold outline-none"
                >
                  <option value="">Select exit strategy...</option>
                  <option value="business-cash-flow">Business Cash Flow</option>
                  <option value="property-sale">Property Sale (flip)</option>
                  <option value="refinance-conventional">Refinance to Conventional Loan</option>
                  <option value="refinance-sba">Refinance to SBA Loan</option>
                  <option value="cash-out">Cash from Separate Transaction</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">
                  Timeline for Repayment *
                </label>
                <select
                  required
                  value={formData.exitTimeline}
                  onChange={(e) => updateField('exitTimeline', e.target.value)}
                  className="w-full px-4 py-3 border-2 border-slate-300 focus:border-king-gold outline-none"
                >
                  <option value="">Select timeline...</option>
                  <option value="6-months">6 months</option>
                  <option value="12-months">12 months</option>
                  <option value="18-months">18 months</option>
                  <option value="24-months">24 months</option>
                  <option value="36-months">36 months</option>
                </select>
              </div>

              {/* LTV Calculation Preview */}
              {formData.propertyValue && (
                <div className="bg-king-gold/10 border-2 border-king-gold p-4 mt-6">
                  <h3 className="font-black text-slate-900 mb-2">Estimated LTV:</h3>
                  <p className="text-2xl font-black text-king-gold">
                    {calculateLTV().toFixed(1)}%
                  </p>
                  <p className="text-sm text-slate-600 mt-2">
                    {calculateLTV() <= 65 && '✅ Excellent LTV ratio'}
                    {calculateLTV() > 65 && calculateLTV() <= 75 && '👍 Good LTV ratio'}
                    {calculateLTV() > 75 && '⚠️ High LTV - may need additional collateral'}
                  </p>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Navigation Buttons */}
        <div className="flex justify-between mt-8">
          <button
            type="button"
            onClick={prevStep}
            disabled={step === 1}
            className="px-8 py-3 bg-slate-200 hover:bg-slate-300 text-slate-900 font-black uppercase disabled:opacity-50 disabled:cursor-not-allowed"
          >
            ← Back
          </button>

          {step < totalSteps ? (
            <button
              type="button"
              onClick={nextStep}
              className="px-8 py-3 bg-king-orange hover:bg-king-orange-dark text-white font-black uppercase"
            >
              Next →
            </button>
          ) : (
            <button
              type="submit"
              disabled={isSubmitting}
              className="px-8 py-3 bg-king-gold hover:bg-king-gold-dark text-slate-900 font-black uppercase disabled:opacity-50"
            >
              {isSubmitting ? 'Submitting...' : 'Submit Application'}
            </button>
          )}
        </div>
      </form>
    </div>
  );
}
