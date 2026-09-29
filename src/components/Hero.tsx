import React from 'react';
import { PhoneVideoPlayer } from './PhoneVideoPlayer';
import { HERO_MEDIA } from '../config/media';

interface HeroProps {
  onGetSampleClick: () => void;
  onSeeExamplesClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onGetSampleClick, onSeeExamplesClick }) => {
  const heroVideoItem = {
    id: 'hero-gym-1',
    title: 'Apex Fitness & Conditioning',
    caption: 'Sarah · 142 classes in 2026',
    video: HERO_MEDIA.video,
    poster: HERO_MEDIA.poster,
    industry: 'gym' as const,
    sampleData: {
      recipient: HERO_MEDIA.recipient,
      headline: HERO_MEDIA.classes,
      metric1: { label: 'Consistency', value: HERO_MEDIA.streak },
      metric2: { label: 'Ranking', value: 'Top 5%' },
      highlight: HERO_MEDIA.highlight,
    },
  };

  return (
    <section className="relative pt-12 pb-20 sm:pt-16 sm:pb-28 lg:pt-20 lg:pb-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Hero Left: Headline, Subline, CTAs */}
          <div className="lg:col-span-7 flex flex-col justify-center text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-stone-900 leading-[1.1] text-balance">
              A personal year-in-review video for every one of your customers.
            </h1>

            <p className="mt-6 text-lg sm:text-xl text-stone-600 leading-relaxed max-w-2xl">
              Send a spreadsheet. Get back a 25-second video for each member, client, student or donor, in your brand, ready to send.
            </p>

            <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
              <button
                type="button"
                onClick={onGetSampleClick}
                className="inline-flex items-center justify-center px-6 py-3.5 text-base font-semibold text-white bg-stone-900 rounded-lg hover:bg-stone-800 transition-colors shadow-xs"
              >
                Get a free sample
              </button>
              <button
                type="button"
                onClick={onSeeExamplesClick}
                className="inline-flex items-center justify-center px-6 py-3.5 text-base font-semibold text-stone-800 bg-white border border-stone-300 rounded-lg hover:bg-stone-50 hover:border-stone-400 transition-colors"
              >
                See examples
              </button>
            </div>

            <div className="mt-4 text-xs sm:text-sm text-stone-500 font-medium">
              Free sample in your brand. No data needed.
            </div>

            {/* Quick feature cues */}
            <div className="mt-12 pt-8 border-t border-stone-200/90 grid grid-cols-2 sm:grid-cols-3 gap-6 text-xs text-stone-600">
              <div>
                <span className="font-semibold text-stone-900 block text-sm">25 Seconds</span>
                <span className="text-stone-500 mt-0.5 block">Made for phone screens & messaging</span>
              </div>
              <div>
                <span className="font-semibold text-stone-900 block text-sm">100% On-Brand</span>
                <span className="text-stone-500 mt-0.5 block">Your colors, logos, and custom motifs</span>
              </div>
              <div className="col-span-2 sm:col-span-1">
                <span className="font-semibold text-stone-900 block text-sm">Ready to Send</span>
                <span className="text-stone-500 mt-0.5 block">MP4 files + matched poster images</span>
              </div>
            </div>
          </div>

          {/* Hero Right: Phone Frame with Gym Video */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="w-full max-w-[310px] sm:max-w-[330px]">
              <PhoneVideoPlayer item={heroVideoItem} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
