'use client';

import Link from 'next/link';
import { useState } from 'react';

const Navigation = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const loanPrograms = [
    { name: 'Rehab & Flip Loans', href: '/rehab-flip-loans' },
    { name: 'Acquisition Bridge Loans', href: '/acquisition-bridge-loans' },
    { name: 'Asset-Backed Business Loans', href: '/asset-backed-business-loans' },
    { name: 'SBA Bridge Loans', href: '/sba-bridge-loans' },
  ];

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="container-custom">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="text-2xl font-bold">
              <span style={{ color: '#F59E0B' }}>BuildUp</span>
              <span style={{ color: '#0A2540' }}> Capital</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <div className="relative group">
              <button className="text-gray-700 hover:text-brand-blue-600 font-medium transition-colors">
                Loan Programs
              </button>
              <div className="absolute left-0 mt-2 w-64 bg-white border border-gray-200 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="py-2">
                  {loanPrograms.map((program) => (
                    <Link
                      key={program.href}
                      href={program.href}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-brand-blue-50 hover:text-brand-blue-600 transition-colors"
                    >
                      {program.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
            <Link href="/borrowers" className="text-gray-700 hover:text-brand-blue-600 font-medium transition-colors">
              For Borrowers
            </Link>
            <Link href="/lenders" className="text-gray-700 hover:text-brand-blue-600 font-medium transition-colors">
              For Lenders
            </Link>
            <Link href="/how-it-works" className="text-gray-700 hover:text-brand-blue-600 font-medium transition-colors">
              How It Works
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-brand-blue-600 font-medium transition-colors">
              About
            </Link>
            <Link href="/apply" className="btn-primary">
              Apply Now
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-gray-700 hover:text-brand-blue-600"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-gray-200">
          <div className="container-custom py-4 space-y-4">
            <div className="space-y-2">
              <div className="font-semibold text-gray-900 text-sm uppercase tracking-wide">Loan Programs</div>
              {loanPrograms.map((program) => (
                <Link
                  key={program.href}
                  href={program.href}
                  className="block pl-4 py-2 text-gray-700 hover:text-brand-blue-600"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {program.name}
                </Link>
              ))}
            </div>
            <Link
              href="/borrowers"
              className="block py-2 text-gray-700 hover:text-brand-blue-600 font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              For Borrowers
            </Link>
            <Link
              href="/lenders"
              className="block py-2 text-gray-700 hover:text-brand-blue-600 font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              For Lenders
            </Link>
            <Link
              href="/how-it-works"
              className="block py-2 text-gray-700 hover:text-brand-blue-600 font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              How It Works
            </Link>
            <Link
              href="/about"
              className="block py-2 text-gray-700 hover:text-brand-blue-600 font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="/apply"
              className="block btn-primary text-center"
              onClick={() => setMobileMenuOpen(false)}
            >
              Apply Now
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
