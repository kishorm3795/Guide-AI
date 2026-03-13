'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useFavoritesCount } from '../hooks/useFavorites'; // Assuming favorites hook exists, fallback to 0

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
const favoritesCount = 0; // Static for now - add dynamic later if needed

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  // Close menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      <header className="bg-white shadow-sm z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <Link href="/" className="text-2xl font-bold text-gray-900 hover:text-gray-700 transition-colors">
              AI Tools Guide
            </Link>
            
            {/* Desktop Nav */}
            <nav className="hidden md:flex space-x-8">
              <Link href="/" className="text-gray-700 hover:text-gray-900 font-medium py-2 transition-colors">Home</Link>
              <Link href="/tools" className="text-gray-700 hover:text-gray-900 font-medium py-2 transition-colors">Tools</Link>
              <Link href="/favorites" className="text-gray-700 hover:text-gray-900 font-medium py-2 relative transition-colors">
                Favorites
                {favoritesCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-yellow-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold shadow-sm">
                    {favoritesCount}
                  </span>
                )}
              </Link>
              <Link href="/compare" className="text-gray-700 hover:text-gray-900 font-medium py-2 transition-colors">Compare</Link>
              <Link href="/about" className="text-gray-700 hover:text-gray-900 font-medium py-2 transition-colors">About</Link>
              <Link href="/contact" className="text-gray-700 hover:text-gray-900 font-medium py-2 transition-colors">Contact</Link>
            </nav>
            
            {/* Mobile Menu Button */}
            <button
              onClick={toggleMobileMenu}
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
              aria-label="Toggle mobile menu"
              aria-expanded={isMobileMenuOpen}
            >
              <svg className={`w-6 h-6 transition-transform ${isMobileMenuOpen ? 'rotate-90' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <>
          {/* Backdrop */}
          <div 
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden animate-in fade-in duration-200"
            onClick={closeMobileMenu}
            aria-hidden="true"
          />
          
          {/* Slide-in Menu */}
          <div className="fixed top-0 right-0 w-80 h-full bg-white shadow-2xl z-50 md:hidden animate-in slide-in-from-right duration-200">
            <div className="p-6 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <span className="text-xl font-bold text-gray-900">Menu</span>
                <button
                  onClick={closeMobileMenu}
                  className="p-2 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
                  aria-label="Close menu"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>
            
            <nav className="p-6 pt-4 flex-1">
              <ul className="space-y-4">
                <li><Link href="/" className="block text-lg font-medium text-gray-700 hover:text-gray-900 py-2 transition-colors" onClick={closeMobileMenu}>Home</Link></li>
                <li><Link href="/tools" className="block text-lg font-medium text-gray-700 hover:text-gray-900 py-2 transition-colors" onClick={closeMobileMenu}>Tools</Link></li>
                <li>
                  <Link href="/favorites" className="block text-lg font-medium text-gray-700 hover:text-gray-900 py-2 relative transition-colors flex items-center" onClick={closeMobileMenu}>
                    Favorites
                    {favoritesCount > 0 && (
                      <span className="ml-2 bg-yellow-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold shadow-sm">
                        {favoritesCount}
                      </span>
                    )}
                  </Link>
                </li>
                <li><Link href="/compare" className="block text-lg font-medium text-gray-700 hover:text-gray-900 py-2 transition-colors" onClick={closeMobileMenu}>Compare</Link></li>
                <li><Link href="/about" className="block text-lg font-medium text-gray-700 hover:text-gray-900 py-2 transition-colors" onClick={closeMobileMenu}>About</Link></li>
                <li><Link href="/contact" className="block text-lg font-medium text-gray-700 hover:text-gray-900 py-2 transition-colors" onClick={closeMobileMenu}>Contact</Link></li>
              </ul>
            </nav>
          </div>
        </>
      )}
    </>
  );
}

