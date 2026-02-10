import React from 'react';

interface CaseStudyResult {
  metric: string;
  description: string;
}

interface CaseStudyProps {
  title: string;
  client: string;
  industry?: string;
  type?: string;
  challenge: string;
  solution: string;
  results: CaseStudyResult[];
  testimonial: string;
  testimonialAuthor: string;
}

export function CaseStudyCard({
  title,
  client,
  industry,
  type,
  challenge,
  solution,
  results,
  testimonial,
  testimonialAuthor
}: CaseStudyProps) {
  return (
    <div className="bg-white rounded-lg shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300">
      {/* Header */}
      <div className="bg-gradient-to-r from-slate-900 to-slate-800 text-white p-6">
        <h3 className="text-2xl font-black mb-2">{title}</h3>
        <div className="flex gap-3 text-sm text-slate-300">
          <span>{client}</span>
          {industry && <span>• {industry}</span>}
          {type && <span>• {type}</span>}
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Challenge */}
        <div className="mb-6">
          <h4 className="text-sm font-bold text-red-600 uppercase tracking-wide mb-2">
            The Challenge
          </h4>
          <p className="text-gray-700 leading-relaxed">{challenge}</p>
        </div>

        {/* Solution */}
        <div className="mb-6">
          <h4 className="text-sm font-bold text-blue-600 uppercase tracking-wide mb-2">
            Our Solution
          </h4>
          <p className="text-gray-700 leading-relaxed">{solution}</p>
        </div>

        {/* Results */}
        <div className="mb-6">
          <h4 className="text-sm font-bold text-green-600 uppercase tracking-wide mb-3">
            The Results
          </h4>
          <div className="grid grid-cols-2 gap-4">
            {results.map((result, index) => (
              <div key={index} className="bg-green-50 rounded-lg p-4 text-center">
                <div className="text-3xl font-black text-green-700 mb-1">
                  {result.metric}
                </div>
                <div className="text-sm text-green-600">{result.description}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonial */}
        <div className="border-t pt-6">
          <blockquote className="text-gray-700 italic mb-2">
            "{testimonial}"
          </blockquote>
          <div className="text-sm text-gray-600">— {testimonialAuthor}</div>
        </div>
      </div>
    </div>
  );
}

export function CaseStudyGrid({ caseStudies }: { caseStudies: CaseStudyProps[] }) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      {caseStudies.map((study, index) => (
        <CaseStudyCard key={index} {...study} />
      ))}
    </div>
  );
}

export function CaseStudySection({ 
  title, 
  subtitle, 
  caseStudies 
}: { 
  title: string;
  subtitle: string;
  caseStudies: CaseStudyProps[];
}) {
  return (
    <section className="py-16 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-black text-slate-900 mb-4">{title}</h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">{subtitle}</p>
        </div>
        <CaseStudyGrid caseStudies={caseStudies} />
      </div>
    </section>
  );
}
