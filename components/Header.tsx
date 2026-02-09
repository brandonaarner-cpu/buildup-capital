"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-slate-900">BuildUp Capital</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-slate-700 hover:text-slate-900 font-medium transition-colors">
              Home
            </Link>
            <Link href="/investors" className="text-slate-700 hover:text-slate-900 font-medium transition-colors">
              For Investors
            </Link>
            <Link href="/borrowers" className="text-slate-700 hover:text-slate-900 font-medium transition-colors">
              For Borrowers
            </Link>
            <Link href="/about" className="text-slate-700 hover:text-slate-900 font-medium transition-colors">
              About
            </Link>
            <Link href="/contact" className="text-slate-700 hover:text-slate-900 font-medium transition-colors">
              Contact
            </Link>
          </div>

          {/* Login Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Link 
              href="/investor-login" 
              className="text-slate-700 hover:text-slate-900 font-medium transition-colors"
            >
              Investor Login
            </Link>
            <Link 
              href="/borrower-login" 
              className="bg-slate-900 text-white px-6 py-2 rounded-lg font-medium hover:bg-slate-800 transition-all"
            >
              Borrower Login
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-slate-100"
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

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 space-y-4 border-t border-slate-200">
            <Link href="/" className="block py-2 text-slate-700 hover:text-slate-900 font-medium">
              Home
            </Link>
            <Link href="/investors" className="block py-2 text-slate-700 hover:text-slate-900 font-medium">
              For Investors
            </Link>
            <Link href="/borrowers" className="block py-2 text-slate-700 hover:text-slate-900 font-medium">
              For Borrowers
            </Link>
            <Link href="/about" className="block py-2 text-slate-700 hover:text-slate-900 font-medium">
              About
            </Link>
            <Link href="/contact" className="block py-2 text-slate-700 hover:text-slate-900 font-medium">
              Contact
            </Link>
            <div className="pt-4 space-y-2 border-t border-slate-200">
              <Link href="/investor-login" className="block py-2 text-slate-700 hover:text-slate-900 font-medium">
                Investor Login
              </Link>
              <Link href="/borrower-login" className="block py-2 bg-slate-900 text-white px-4 rounded-lg font-medium text-center">
                Borrower Login
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
