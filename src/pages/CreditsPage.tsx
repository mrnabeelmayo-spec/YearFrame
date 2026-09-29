import React, { useEffect } from 'react';

interface CreditsPageProps {
  onBackToHome: () => void;
}

export const CreditsPage: React.FC<CreditsPageProps> = ({ onBackToHome }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#FAFAF9] text-stone-900 py-16 sm:py-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <button
          type="button"
          onClick={onBackToHome}
          className="inline-flex items-center text-sm font-semibold text-stone-600 hover:text-stone-950 mb-8 transition-colors"
        >
          ← Back to home
        </button>

        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-stone-900">
          Photo Credits
        </h1>
        <p className="mt-2 text-sm text-stone-500 font-mono">
          Attributions & Media Disclosures
        </p>

        <div className="mt-8 bg-white border border-stone-200 rounded-2xl p-6 sm:p-8 space-y-6 text-stone-700">
          <p className="text-base sm:text-lg leading-relaxed">
            Sample photos from Unsplash by Jake Nackos, Ofspace LLC, Vitaly Gariev, Victória Kubiaki and Daniel Lara.
          </p>

          <p className="text-sm text-stone-600 leading-relaxed">
            All customer names, workout stats, salon visit records, course progressions, and donation impact figures shown across example videos and posters are fictionalized sample data created strictly for demonstration purposes.
          </p>

          <div className="pt-4 border-t border-stone-100 flex items-center justify-between text-xs text-stone-500">
            <span>Yearframes Media Assets</span>
            <span>Unsplash License</span>
          </div>
        </div>
      </div>
    </div>
  );
};
