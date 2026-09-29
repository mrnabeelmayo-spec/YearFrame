import React from 'react';

interface PrivacyCalloutProps {
  onLearnMore?: () => void;
}

export const PrivacyCallout: React.FC<PrivacyCalloutProps> = ({ onLearnMore }) => {
  return (
    <section className="py-16 sm:py-20 bg-stone-900 text-stone-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <div className="text-xs font-mono uppercase tracking-wider text-amber-400 font-semibold mb-3">
            Data Safety Guarantee
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
            Your data stays safe.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-stone-300 leading-relaxed">
            I only need first names and activity, never emails or payment details. Your data is deleted after delivery, and I'm happy to sign your data processing agreement.
          </p>

          <div className="mt-6 flex items-center gap-6 text-sm">
            <button
              type="button"
              onClick={onLearnMore}
              className="text-stone-300 hover:text-white font-medium underline underline-offset-4"
            >
              Read full privacy policy →
            </button>
            <span className="text-stone-500">·</span>
            <span className="text-stone-400">Zero third-party tracking</span>
          </div>
        </div>
      </div>
    </section>
  );
};
