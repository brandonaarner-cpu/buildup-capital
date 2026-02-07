'use client';

import { useState } from 'react';

type LoanType = 'rehab-flip' | 'acquisition' | 'asset-backed' | 'sba-bridge' | '';

interface FormData {
  // Step 1: Loan Type Selection
  loanType: LoanType;
  
  // Step 2: Basic Info
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  company: string;
  
  // Step 3: Loan Details (varies by lane)
  loanAmount: string;
  
  // Rehab/Flip specific
  propertyAddress?: string;
  purchasePrice?: string;
  rehabBudget?: string;
  arv?: string;
  
  // Acquisition specific
  acquisitionPropertyAddress?: string;
  acquisitionPurchasePrice?: string;
  closingDate?: string;
  
  // Asset-backed specific
  businessType?: string;
  monthlyRevenue?: string;
  assetsDescription?: string;
  
  // SBA Bridge specific
  sbaLoanAmount?: string;
  sbaLender?: string;
  estimatedClosingDate?: string;
  useOfFunds?: string;
}

const ApplicationForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<FormData>({
    loanType: '',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    loanAmount: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const loanTypes = [
    {
      id: 'rehab-flip' as LoanType,
      title: 'Rehab & Flip Loans',
      description: 'Fix & flip financing for real estate investors',
      icon: '🏠'
    },
    {
      id: 'acquisition' as LoanType,
      title: 'Acquisition Bridge Loans',
      description: 'Fast funding for property acquisitions',
      icon: '🏘️'
    },
    {
      id: 'asset-backed' as LoanType,
      title: 'Asset-Backed Business Loans',
      description: 'Leverage business assets for capital',
      icon: '💼'
    },
    {
      id: 'sba-bridge' as LoanType,
      title: 'SBA Bridge Loans',
      description: 'Bridge financing during SBA processing',
      icon: '🌉'
    },
  ];

  const updateFormData = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const nextStep = () => {
    setStep(prev => Math.min(prev + 1, 3));
  };

  const prevStep = () => {
    setStep(prev => Math.max(prev - 1, 1));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    console.log('Form submitted:', formData);
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="bg-white rounded-lg shadow-md p-8 text-center">
        <div className="text-6xl mb-4">✅</div>
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Application Submitted!</h2>
        <p className="text-lg text-gray-600 mb-6">
          Thank you for applying. A member of our team will review your application and contact you within 24-48 hours.
        </p>
        <div className="bg-brand-blue-50 border border-brand-blue-200 rounded-lg p-4">
          <p className="text-sm text-gray-700">
            <strong>What's next?</strong><br />
            Our underwriting team is reviewing your application. We'll reach out via email or phone with next steps.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      {/* Progress Bar */}
      <div className="bg-gray-100 px-8 py-4">
        <div className="flex items-center justify-between mb-2">
          {[1, 2, 3].map((s) => (
            <div key={s} className="flex items-center">
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center font-semibold ${
                  step >= s
                    ? 'bg-brand-blue-600 text-white'
                    : 'bg-gray-300 text-gray-600'
                }`}
              >
                {s}
              </div>
              {s < 3 && (
                <div
                  className={`h-1 w-24 md:w-32 mx-2 ${
                    step > s ? 'bg-brand-blue-600' : 'bg-gray-300'
                  }`}
                />
              )}
            </div>
          ))}
        </div>
        <div className="flex justify-between text-sm text-gray-600">
          <span>Loan Type</span>
          <span>Your Info</span>
          <span>Loan Details</span>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="p-8">
        {/* Step 1: Loan Type Selection */}
        {step === 1 && (
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              What type of financing do you need?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {loanTypes.map((type) => (
                <button
                  key={type.id}
                  type="button"
                  onClick={() => {
                    updateFormData('loanType', type.id);
                    nextStep();
                  }}
                  className={`text-left p-6 rounded-lg border-2 transition-all ${
                    formData.loanType === type.id
                      ? 'border-brand-blue-600 bg-brand-blue-50'
                      : 'border-gray-200 hover:border-brand-blue-300'
                  }`}
                >
                  <div className="text-4xl mb-3">{type.icon}</div>
                  <h3 className="font-bold text-lg text-gray-900 mb-2">
                    {type.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{type.description}</p>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Step 2: Basic Information */}
        {step === 2 && (
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Tell us about yourself
            </h2>
            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    First Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.firstName}
                    onChange={(e) => updateFormData('firstName', e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-blue-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Last Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.lastName}
                    onChange={(e) => updateFormData('lastName', e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-blue-500 focus:border-transparent"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email *
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => updateFormData('email', e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-blue-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => updateFormData('phone', e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-blue-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Company Name (Optional)
                </label>
                <input
                  type="text"
                  value={formData.company}
                  onChange={(e) => updateFormData('company', e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-blue-500 focus:border-transparent"
                />
              </div>
            </div>
            <div className="flex justify-between mt-8">
              <button
                type="button"
                onClick={prevStep}
                className="btn-secondary"
              >
                Back
              </button>
              <button
                type="button"
                onClick={nextStep}
                className="btn-primary"
              >
                Continue
              </button>
            </div>
          </div>
        )}

        {/* Step 3: Loan Details (Lane-specific) */}
        {step === 3 && (
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Loan Details
            </h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Loan Amount Requested *
                </label>
                <input
                  type="text"
                  required
                  placeholder="$100,000"
                  value={formData.loanAmount}
                  onChange={(e) => updateFormData('loanAmount', e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-blue-500 focus:border-transparent"
                />
              </div>

              {/* Rehab/Flip Lane */}
              {formData.loanType === 'rehab-flip' && (
                <>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Property Address *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.propertyAddress || ''}
                      onChange={(e) => updateFormData('propertyAddress', e.target.value)}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-blue-500 focus:border-transparent"
                    />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Purchase Price *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="$200,000"
                        value={formData.purchasePrice || ''}
                        onChange={(e) => updateFormData('purchasePrice', e.target.value)}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-blue-500 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Rehab Budget *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="$50,000"
                        value={formData.rehabBudget || ''}
                        onChange={(e) => updateFormData('rehabBudget', e.target.value)}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-blue-500 focus:border-transparent"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      After Repair Value (ARV) *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="$350,000"
                      value={formData.arv || ''}
                      onChange={(e) => updateFormData('arv', e.target.value)}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-blue-500 focus:border-transparent"
                    />
                  </div>
                </>
              )}

              {/* Acquisition Lane */}
              {formData.loanType === 'acquisition' && (
                <>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Property Address *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.acquisitionPropertyAddress || ''}
                      onChange={(e) => updateFormData('acquisitionPropertyAddress', e.target.value)}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-blue-500 focus:border-transparent"
                    />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Purchase Price *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="$500,000"
                        value={formData.acquisitionPurchasePrice || ''}
                        onChange={(e) => updateFormData('acquisitionPurchasePrice', e.target.value)}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-blue-500 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Desired Closing Date *
                      </label>
                      <input
                        type="date"
                        required
                        value={formData.closingDate || ''}
                        onChange={(e) => updateFormData('closingDate', e.target.value)}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-blue-500 focus:border-transparent"
                      />
                    </div>
                  </div>
                </>
              )}

              {/* Asset-Backed Lane */}
              {formData.loanType === 'asset-backed' && (
                <>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Business Type *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g., Manufacturing, Retail, Services"
                      value={formData.businessType || ''}
                      onChange={(e) => updateFormData('businessType', e.target.value)}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-blue-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Monthly Revenue *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="$50,000"
                      value={formData.monthlyRevenue || ''}
                      onChange={(e) => updateFormData('monthlyRevenue', e.target.value)}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-blue-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Assets to Leverage *
                    </label>
                    <textarea
                      required
                      rows={4}
                      placeholder="Describe your equipment, inventory, AR, or other assets"
                      value={formData.assetsDescription || ''}
                      onChange={(e) => updateFormData('assetsDescription', e.target.value)}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-blue-500 focus:border-transparent"
                    />
                  </div>
                </>
              )}

              {/* SBA Bridge Lane */}
              {formData.loanType === 'sba-bridge' && (
                <>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      SBA Loan Amount *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="$250,000"
                      value={formData.sbaLoanAmount || ''}
                      onChange={(e) => updateFormData('sbaLoanAmount', e.target.value)}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-blue-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      SBA Lender *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Lender name"
                      value={formData.sbaLender || ''}
                      onChange={(e) => updateFormData('sbaLender', e.target.value)}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-blue-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Estimated SBA Closing Date
                    </label>
                    <input
                      type="date"
                      value={formData.estimatedClosingDate || ''}
                      onChange={(e) => updateFormData('estimatedClosingDate', e.target.value)}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-blue-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Use of Bridge Funds *
                    </label>
                    <textarea
                      required
                      rows={4}
                      placeholder="What will you use the bridge loan for while waiting for SBA approval?"
                      value={formData.useOfFunds || ''}
                      onChange={(e) => updateFormData('useOfFunds', e.target.value)}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-blue-500 focus:border-transparent"
                    />
                  </div>
                </>
              )}
            </div>

            <div className="flex justify-between mt-8">
              <button
                type="button"
                onClick={prevStep}
                className="btn-secondary"
              >
                Back
              </button>
              <button
                type="submit"
                disabled={isSubmitting}
                className="btn-primary"
              >
                {isSubmitting ? 'Submitting...' : 'Submit Application'}
              </button>
            </div>
          </div>
        )}
      </form>
    </div>
  );
};

export default ApplicationForm;
