'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <nav className="container mx-auto px-4 py-4">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-lg focus:bg-white focus:px-4 focus:py-2 focus:text-stone-900 focus:shadow-lg"
        >
          Skip to content
        </a>
        <div className="flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold text-teal-600 hover:text-teal-700 transition-colors">
            Ashford Hills
          </Link>
          
          {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-6">
            <li>
              <Link href="/" className="text-stone-700 hover:text-teal-600 font-medium transition-colors">
                Home
              </Link>
            </li>
            <li>
              <Link href="/#hoa" className="text-stone-700 hover:text-teal-600 font-medium transition-colors">
                HOA Info
              </Link>
            </li>
            <li>
              <Link href="/#location" className="text-stone-700 hover:text-teal-600 font-medium transition-colors">
                Location
              </Link>
            </li>
            <li>
              <a
                href="mailto:info@ashfordhills.org"
                className="text-stone-700 hover:text-teal-600 font-medium transition-colors"
              >
                Contact
              </a>
            </li>
          </ul>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-stone-700 hover:text-teal-600 focus:outline-none transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
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

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4">
            <ul className="flex flex-col space-y-4">
              <li>
                <Link 
                  href="/" 
                  className="block text-stone-700 hover:text-teal-600 font-medium transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/#hoa"
                  className="block text-stone-700 hover:text-teal-600 font-medium transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  HOA Info
                </Link>
              </li>
              <li>
                <Link
                  href="/#location"
                  className="block text-stone-700 hover:text-teal-600 font-medium transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Location
                </Link>
              </li>
              <li>
                <a
                  href="mailto:info@ashfordhills.org"
                  className="block text-stone-700 hover:text-teal-600 font-medium transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
}

