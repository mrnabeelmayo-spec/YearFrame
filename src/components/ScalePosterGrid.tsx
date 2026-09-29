import React, { useState } from 'react';
import { SCALE_POSTERS } from '../config/media';

interface PosterTileProps {
  poster: typeof SCALE_POSTERS[0];
}

const PosterTile: React.FC<PosterTileProps> = ({ poster }) => {
  const [imgError, setImgError] = useState(false);

  return (
    <div
      className="group relative aspect-[9/16] rounded-lg bg-stone-100 border border-stone-200/90 overflow-hidden flex flex-col justify-between p-1.5 transition-all duration-200 hover:border-stone-400 hover:shadow-xs"
      title={`${poster.name} · ${poster.classes} (${poster.path})`}
    >
      {!imgError ? (
        <img
          src={poster.path}
          alt={`Year-in-review poster for ${poster.name}`}
          loading="lazy"
          referrerPolicy="no-referrer"
          onError={() => setImgError(true)}
          className="absolute inset-0 w-full h-full object-cover"
        />
      ) : null}

      {/* Styled neat grey placeholder when image is pending */}
      <div className={`relative z-10 w-full h-full flex flex-col justify-between ${!imgError ? 'hidden' : 'flex'}`}>
        <div className="flex items-center justify-between">
          <span className="text-[9px] font-mono font-semibold text-stone-500 tabular-nums">
            #{poster.number}
          </span>
          <span className="text-[8px] font-mono text-stone-400 truncate max-w-[45px]">
            {poster.number}.jpg
          </span>
        </div>

        <div className="my-auto text-center py-1">
          <div className="text-[9px] font-bold text-stone-800 truncate leading-tight">
            {poster.name}
          </div>
          <div className="text-[8px] text-stone-500 font-mono mt-0.5 tabular-nums truncate">
            {poster.classes}
          </div>
        </div>

        <div className="pt-0.5 border-t border-stone-200/80 flex items-center justify-center">
          <span className="text-[7.5px] font-mono text-stone-400 tracking-tighter truncate">
            gym-all/{poster.number}.jpg
          </span>
        </div>
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

        <div className="mt-6 flex flex-wrap items-center justify-between gap-3 text-xs text-stone-500 font-mono">
          <span>Grid preview: 50 personalized posters generated from a single batch</span>
          <span className="text-stone-400">Path configuration: /posters/gym-all/01.jpg – 50.jpg</span>
        </div>
      </div>
    </section>
  );
};
