import React, { useState, useEffect } from 'react';

interface HeaderProps {
  onNavigateHome?: () => void;
  isSubPage?: boolean;
}

export const Header: React.FC<HeaderProps> = ({ onNavigateHome, isSubPage = false }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Close menu on ESC key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMobileMenuOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleNavClick = (hash: string) => {
    setMobileMenuOpen(false);
    if (isSubPage && onNavigateHome) {
      onNavigateHome();
      setTimeout(() => {
        const el = document.querySelector(hash);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      const el = document.querySelector(hash);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleBrandClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (isSubPage && onNavigateHome) {
      onNavigateHome();
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-[#FAFAF9]/95 backdrop-blur-md border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-18">
          {/* Brand Wordmark (Simple text wordmark 'Yearframes'. No generic icons.) */}
          <div className="flex-shrink-0">
            <a
              href="/"
              onClick={handleBrandClick}
              className="text-xl sm:text-2xl font-bold tracking-tight text-stone-900 hover:text-stone-700 transition-colors"
            >
              Yearframes
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-stone-600">
            <a
              href="#examples"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('#examples');
              }}
              className="hover:text-stone-950 transition-colors"
            >
              Examples
            </a>
            <a
              href="#how-it-works"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('#how-it-works');
              }}
              className="hover:text-stone-950 transition-colors"
            >
              How it works
            </a>
            <a
              href="#pricing"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('#pricing');
              }}
              className="hover:text-stone-950 transition-colors"
            >
              Pricing
            </a>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('#contact');
              }}
              className="hover:text-stone-950 transition-colors"
            >
              Contact
            </a>
          </nav>

          {/* Primary Action Button */}
          <div className="hidden md:flex items-center">
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('#contact');
              }}
              className="inline-flex items-center justify-center px-4 py-2.5 text-sm font-semibold text-white bg-stone-900 rounded-lg hover:bg-stone-800 transition-colors shadow-xs"
            >
              Get a free sample
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-stone-700 hover:text-stone-950 focus:outline-hidden focus-visible:ring-2 focus-visible:ring-stone-400 rounded-lg"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle navigation menu"
            >
              <span className="sr-only">Open main menu</span>
              {mobileMenuOpen ? (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-stone-200 bg-[#FAFAF9] px-4 pt-2 pb-6 space-y-3">
          <a
            href="#examples"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('#examples');
            }}
            className="block py-2 text-base font-medium text-stone-700 hover:text-stone-950 border-b border-stone-100"
          >
            Examples
          </a>
          <a
            href="#how-it-works"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('#how-it-works');
            }}
            className="block py-2 text-base font-medium text-stone-700 hover:text-stone-950 border-b border-stone-100"
          >
            How it works
          </a>
          <a
            href="#pricing"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('#pricing');
            }}
            className="block py-2 text-base font-medium text-stone-700 hover:text-stone-950 border-b border-stone-100"
          >
            Pricing
          </a>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('#contact');
            }}
            className="block py-2 text-base font-medium text-stone-700 hover:text-stone-950 border-b border-stone-100"
          >
            Contact
          </a>
          <div className="pt-2">
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('#contact');
              }}
              className="w-full inline-flex items-center justify-center px-4 py-3 text-sm font-semibold text-white bg-stone-900 rounded-lg hover:bg-stone-800 transition-colors"
            >
              Get a free sample
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
