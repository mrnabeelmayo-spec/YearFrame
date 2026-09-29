import React from 'react';
import { ABOUT_MEDIA } from '../config/media';

interface FooterProps {
  onNavigatePrivacy: () => void;
  onNavigateCredits: () => void;
  onNavigateHome: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onNavigatePrivacy,
  onNavigateCredits,
  onNavigateHome,
}) => {
  return (
    <footer className="bg-stone-950 text-stone-300 py-16 border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-12 border-b border-stone-800">
          <div>
            <a
              href="/"
              onClick={(e) => {
                e.preventDefault();
                onNavigateHome();
              }}
              className="text-2xl font-bold tracking-tight text-white hover:text-stone-200 transition-colors"
            >
              Yearframe
            </a>
            <p className="mt-2 text-sm text-stone-400 max-w-sm leading-relaxed">
              Short personalized year-in-review videos (about 25 seconds) for gyms, salons, courses, and nonprofits.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 sm:gap-10 text-sm">
            <div>
              <span className="text-xs uppercase font-mono text-stone-400 tracking-wider block mb-1">
                Direct Contact
              </span>
              <a
                href={`mailto:${ABOUT_MEDIA.email}`}
                className="text-stone-200 hover:text-white transition-colors block"
              >
                {ABOUT_MEDIA.email}
              </a>
              <a
                href={ABOUT_MEDIA.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-stone-200 hover:text-white transition-colors block mt-1"
              >
                WhatsApp: {ABOUT_MEDIA.whatsapp}
              </a>
            </div>

            <div>
              <span className="text-xs uppercase font-mono text-stone-400 tracking-wider block mb-1">
                Information
              </span>
              <ul className="space-y-1">
                <li>
                  <button
                    type="button"
                    onClick={onNavigatePrivacy}
                    className="text-stone-300 hover:text-white transition-colors"
                  >
                    Privacy Policy
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={onNavigateCredits}
                    className="text-stone-300 hover:text-white transition-colors"
                  >
                    Photo Credits
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-400">
          <div>
            © 2026 Yearframe. All rights reserved.
          </div>
          <div className="text-stone-400">
            Handcrafted by Nabeel Mayo. No tracking cookies.
          </div>
        </div>
      </div>
    </footer>
  );
};
