import React from 'react';

interface TestimonialProps {
  name: string;
  company?: string;
  industry?: string;
  role?: string;
  quote: string;
  metric: string;
  timeframe: string;
  avatar: string;
  rating: number;
}

export function TestimonialCard({
  name,
  company,
  industry,
  role,
  quote,
  metric,
  timeframe,
  avatar,
  rating
}: TestimonialProps) {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
      {/* Rating Stars */}
      <div className="flex gap-1 mb-4">
        {[...Array(rating)].map((_, i) => (
          <svg
            key={i}
            className="w-5 h-5 text-yellow-400 fill-current"
            viewBox="0 0 20 20"
          >
            <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
          </svg>
        ))}
      </div>

      {/* Quote */}
      <blockquote className="text-gray-700 text-lg mb-6 leading-relaxed">
        "{quote}"
      </blockquote>

      {/* Metrics */}
      <div className="flex gap-4 mb-6 text-sm">
        <div className="bg-green-50 px-3 py-1 rounded-full">
          <span className="text-green-700 font-semibold">{metric}</span>
        </div>
        <div className="bg-blue-50 px-3 py-1 rounded-full">
          <span className="text-blue-700 font-semibold">{timeframe}</span>
        </div>
      </div>

      {/* Author Info */}
      <div className="flex items-center gap-3 border-t pt-4">
        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-yellow-400 to-yellow-600 flex items-center justify-center text-white font-bold">
          {avatar}
        </div>
        <div>
          <div className="font-semibold text-gray-900">{name}</div>
          {company && (
            <div className="text-sm text-gray-600">
              {role && `${role}, `}{company}
            </div>
          )}
          {industry && !company && (
            <div className="text-sm text-gray-600">{industry}</div>
          )}
        </div>
      </div>
    </div>
  );
}

export function TestimonialGrid({ testimonials }: { testimonials: TestimonialProps[] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {testimonials.map((testimonial, index) => (
        <TestimonialCard key={index} {...testimonial} />
      ))}
    </div>
  );
}
