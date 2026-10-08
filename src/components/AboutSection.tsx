import React, { useState } from 'react';
import { ABOUT_MEDIA } from '../config/media';

export const AboutSection: React.FC = () => {
  const [photoError, setPhotoError] = useState(false);

  return (
    <section className="py-20 sm:py-28 bg-[#FAFAF9] border-t border-stone-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white border border-stone-200 rounded-3xl p-8 sm:p-12 shadow-xs">
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-8">
            {/* Photo / Avatar with fallback */}
            <div className="shrink-0">
              <div className="relative w-28 h-28 sm:w-36 sm:h-36 rounded-2xl overflow-hidden bg-stone-100 border border-stone-200 shadow-xs flex items-center justify-center">
                {!photoError ? (
                  <img
                    src={ABOUT_MEDIA.photo}
                    alt="Nabeel Ahmad"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                    onError={() => setPhotoError(true)}
                    className="w-full h-full object-cover object-[50%_15%]"
                  />
                ) : null}

                {/* Elegant fallback if photo file is pending */}
                {photoError && (
                  <div className="w-full h-full p-3 flex flex-col items-center justify-between text-center bg-stone-100 text-stone-600">
                    <span className="text-2xl font-bold font-mono text-stone-700 mt-2">NA</span>
                    <div className="text-[10px] font-mono text-stone-400 truncate max-w-full">
                      {ABOUT_MEDIA.photo}
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Bio text */}
            <div className="flex-1 text-center sm:text-left">
              <div className="text-xs font-mono uppercase tracking-wider text-stone-500 font-semibold mb-1">
                Founder & Developer
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-stone-900">
                Nabeel Ahmad
              </h3>

              <div className="mt-4 space-y-3 text-stone-700 text-base sm:text-lg leading-relaxed">
                <p>
                  Hi, I'm Nabeel. I build personalized videos with code: one design, and every one of your customers gets their own version, made from your data.
                </p>
                <p className="text-base text-stone-600">
                  I work with businesses directly without account managers or bloated agency layers, so turnaround is fast, pricing stays fair, and your customer activity stays strictly confidential.
                </p>
              </div>

              <div className="mt-6 flex flex-wrap items-center justify-center sm:justify-start gap-3">
                <a
                  href={`mailto:${ABOUT_MEDIA.email}`}
                  className="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold text-stone-900 bg-stone-100 hover:bg-stone-200 rounded-lg transition-colors"
                >
                  <span>Email: {ABOUT_MEDIA.email}</span>
                </a>
                <a
                  href={ABOUT_MEDIA.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold text-stone-900 bg-stone-100 hover:bg-stone-200 rounded-lg transition-colors"
                >
                  <span>WhatsApp: {ABOUT_MEDIA.whatsapp}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
