import React, { useState } from 'react';
import { INDUSTRY_EXAMPLES } from '../config/media';
import { PhoneVideoPlayer } from './PhoneVideoPlayer';

export const ExamplesSection: React.FC = () => {
  const [activeTabId, setActiveTabId] = useState<string>('gyms');

  const currentCategory =
    INDUSTRY_EXAMPLES.find((cat) => cat.id === activeTabId) || INDUSTRY_EXAMPLES[0];

  return (
    <section id="examples" className="py-20 sm:py-28 bg-[#FAFAF9] border-t border-stone-200 scroll-mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="max-w-3xl">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-stone-900">
            Tailored visual designs for every industry
          </h2>
          <p className="mt-3 text-lg text-stone-600">
            Each industry gets its own custom visual metaphor. Your customers feel like it was crafted just for them.
          </p>
        </div>

        {/* Industry Tabs (4 Tabs) */}
        <div className="mt-8 border-b border-stone-200">
          <div className="flex flex-wrap gap-2 sm:gap-4 -mb-px">
            {INDUSTRY_EXAMPLES.map((category) => {
              const isActive = category.id === activeTabId;
              return (
                <button
                  key={category.id}
                  type="button"
                  onClick={() => setActiveTabId(category.id)}
                  className={`pb-4 px-2 sm:px-4 text-sm sm:text-base font-medium transition-colors border-b-2 whitespace-nowrap focus:outline-hidden focus-visible:text-stone-950 ${
                    isActive
                      ? 'border-stone-900 text-stone-950 font-semibold'
                      : 'border-transparent text-stone-500 hover:text-stone-800 hover:border-stone-300'
                  }`}
                >
                  {category.name}
                </button>
              );
            })}
          </div>
        </div>

        {/* Industry Concept Line */}
        <div className="mt-8 flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
          <p className="text-xl sm:text-2xl font-medium text-stone-800">
            "{currentCategory.conceptLine}"
          </p>
          <span className="text-xs text-stone-500 font-mono shrink-0">
            3 vertical video samples
          </span>
        </div>

        {/* Videos Container: 
            Mobile: Horizontal swipe row (snap scroll, one phone at a time with next one peeking in).
            Desktop: 3 in a row grid.
        */}
        <div className="mt-10 flex overflow-x-auto snap-x snap-mandatory pb-4 pt-1 gap-6 md:grid md:grid-cols-3 md:gap-8 lg:gap-10 md:overflow-visible md:pb-0 scrollbar-none">
          {currentCategory.videos.map((item) => (
            <div
              key={item.id}
              className="flex justify-center shrink-0 w-[82vw] max-w-[310px] snap-center md:w-auto md:max-w-none"
            >
              <PhoneVideoPlayer item={item} />
            </div>
          ))}
        </div>

        {/* Required footnote under the videos */}
        <div className="mt-12 text-center text-xs sm:text-sm text-stone-500">
          Demo: made-up people and data.
        </div>
      </div>
    </section>
  );
};
