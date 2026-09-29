import React, { useState } from 'react';
import { SCALE_POSTERS } from '../config/media';

interface PosterTileProps {
  poster: typeof SCALE_POSTERS[0];
}

const PosterTile: React.FC<PosterTileProps> = ({ poster }) => {
  const [imgError, setImgError] = useState(false);

  return (
    <div
      className="group relative aspect-[9/16] rounded-md bg-stone-200 border border-stone-200 overflow-hidden flex flex-col justify-center items-center transition-all duration-200"
    >
      {!imgError ? (
        <img
          src={poster.path}
          alt=""
          loading="lazy"
          referrerPolicy="no-referrer"
          onError={() => setImgError(true)}
          className="absolute inset-0 w-full h-full object-cover"
        />
      ) : null}

      {/* Styled neat grey placeholder showing filename if image is missing */}
      <div className={`relative z-10 w-full h-full p-1 bg-stone-200 flex flex-col items-center justify-center text-center ${!imgError ? 'hidden' : 'flex'}`}>
        <span className="text-[8px] sm:text-[9px] font-mono text-stone-500 break-all leading-tight select-none">
          {poster.number}.jpg
        </span>
      </div>
    </div>
  );
};

export const ScalePosterGrid: React.FC = () => {
  return (
    <section className="py-20 sm:py-24 border-t border-stone-200 bg-stone-50/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-10 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-stone-900">
            One spreadsheet, 50 videos.
          </h2>
          <p className="mt-3 text-lg text-stone-600 leading-relaxed">
            Every member gets their own video, made automatically from the same file.
          </p>
        </div>

        {/* 50-poster grid: 5 columns on mobile, 10 columns on desktop */}
        <div className="grid grid-cols-5 md:grid-cols-10 gap-2 sm:gap-2.5">
          {SCALE_POSTERS.map((poster) => (
            <PosterTile key={poster.id} poster={poster} />
          ))}
        </div>
      </div>
    </section>
  );
};
