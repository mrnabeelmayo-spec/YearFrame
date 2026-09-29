import React, { useEffect, useRef, useState } from 'react';
import type { VideoItem } from '../config/media';

interface PhoneVideoPlayerProps {
  item: VideoItem;
  className?: string;
  badge?: string;
}

export const PhoneVideoPlayer: React.FC<PhoneVideoPlayerProps> = ({
  item,
  className = '',
  badge,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [videoError, setVideoError] = useState(false);
  const [posterError, setPosterError] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const videoEl = videoRef.current;
    const container = containerRef.current;
    if (!container || !videoEl) return;

    setVideoError(false);
    setPosterError(false);
    setVideoLoaded(false);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            videoEl.preload = 'auto';
            const playPromise = videoEl.play();
            if (playPromise !== undefined) {
              playPromise
                .then(() => setIsPlaying(true))
                .catch(() => {
                  setIsPlaying(false);
                });
            }
          } else {
            videoEl.pause();
            setIsPlaying(false);
          }
        });
      },
      { threshold: 0.3 }
    );

    observer.observe(container);

    return () => {
      observer.disconnect();
    };
  }, [item.video]);

  const togglePlay = () => {
    const video = videoRef.current;
    if (!video || videoError) return;
    if (video.paused) {
      video.play().then(() => setIsPlaying(true)).catch(() => {});
    } else {
      video.pause();
      setIsPlaying(false);
    }
  };

  return (
    <div
      ref={containerRef}
      className={`relative group mx-auto w-full max-w-[280px] sm:max-w-[310px] ${className}`}
    >
      {badge && (
        <div className="text-xs font-semibold text-stone-500 mb-2 tracking-wide uppercase">
          {badge}
        </div>
      )}

      {/* Phone chassis */}
      <div
        onClick={togglePlay}
        className="relative aspect-[9/16] w-full rounded-[36px] bg-stone-900 p-2.5 shadow-2xl ring-1 ring-stone-900/20 cursor-pointer overflow-hidden transition-transform duration-300 hover:scale-[1.01]"
        style={{ boxSizing: 'border-box' }}
      >
        {/* Dynamic Island / Speaker notch */}
        <div className="absolute top-4 left-1/2 -translate-x-1/2 z-30 w-24 h-4 bg-black rounded-full flex items-center justify-center pointer-events-none">
          <div className="w-2.5 h-2.5 rounded-full bg-stone-900/80 mr-3"></div>
          <div className="w-1.5 h-1.5 rounded-full bg-stone-800"></div>
        </div>

        {/* Screen container */}
        <div className="relative w-full h-full rounded-[28px] overflow-hidden bg-stone-200 flex flex-col justify-center items-center">
          {/* If video hasn't errored out, render the video with its poster */}
          {!videoError ? (
            <video
              ref={videoRef}
              src={item.video}
              poster={!posterError ? item.poster : undefined}
              preload="none"
              muted
              loop
              playsInline
              onLoadedData={() => setVideoLoaded(true)}
              onError={() => {
                // If the media file does not exist, cleanly fall back to grey placeholder
                setVideoError(true);
              }}
              className={`w-full h-full object-cover transition-opacity duration-300 ${
                videoLoaded ? 'opacity-100' : 'opacity-95'
              }`}
            />
          ) : (
            /* Neat grey placeholder with the file name (no invented screens) */
            <div className="w-full h-full bg-stone-200 flex flex-col items-center justify-center p-6 text-center select-none">
              <div className="w-12 h-12 rounded-xl bg-stone-300/80 text-stone-500 flex items-center justify-center mb-3">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="font-mono text-xs text-stone-700 font-semibold break-all px-2">
                {item.video}
              </div>
              <div className="font-mono text-[11px] text-stone-500 mt-1 break-all px-2">
                poster: {item.poster}
              </div>
            </div>
          )}

          {/* Interactive play/pause indicator on hover when video is active */}
          {!videoError && (
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity bg-black/20">
              <div className="w-12 h-12 rounded-full bg-white/90 text-stone-900 flex items-center justify-center shadow-lg transform transition-transform group-hover:scale-105">
                {isPlaying ? (
                  <span className="text-xs font-bold tracking-widest">PAUSE</span>
                ) : (
                  <span className="text-xs font-bold tracking-widest pl-0.5">PLAY</span>
                )}
              </div>
            </div>
          )}

        </div>
      </div>

      {/* Captions under video: Title / Subtitle */}
      <div className="mt-3 text-center">
        <div className="text-sm font-semibold text-stone-900">{item.title}</div>
        <div className="text-xs text-stone-500 mt-0.5">{item.caption}</div>
      </div>
    </div>
  );
};
