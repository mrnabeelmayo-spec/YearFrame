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
  const [isMuted, setIsMuted] = useState(true);

  useEffect(() => {
    const videoEl = videoRef.current;
    const container = containerRef.current;
    if (!container || !videoEl) return;

    // Reset error and loaded states if item changes
    setVideoError(false);
    setPosterError(false);
    setVideoLoaded(false);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Visible: trigger load and attempt muted autoplay
            videoEl.preload = 'auto';
            const playPromise = videoEl.play();
            if (playPromise !== undefined) {
              playPromise
                .then(() => setIsPlaying(true))
                .catch(() => {
                  // Autoplay policy or video not ready
                  setIsPlaying(false);
                });
            }
          } else {
            // Scrolled out: pause to save resources
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

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    const video = videoRef.current;
    if (!video) return;
    video.muted = !video.muted;
    setIsMuted(video.muted);
  };

  // Render a theme-accurate placeholder simulation when video/poster file is pending
  const renderSimulatedDesign = () => {
    const { sampleData, industry } = item;

    if (industry === 'gym') {
      return (
        <div className="w-full h-full bg-[#18181B] text-white p-5 flex flex-col justify-between font-mono select-none">
          {/* Top header */}
          <div className="border-b border-stone-700/70 pb-3 pt-4">
            <div className="text-[10px] tracking-wider text-amber-400 uppercase font-sans font-semibold">
              Coach's Whiteboard · 2026
            </div>
            <div className="text-xl font-bold font-sans text-stone-100 mt-1">
              {sampleData.recipient}
            </div>
          </div>

          {/* Whiteboard tally section */}
          <div className="space-y-4 my-auto">
            <div className="bg-stone-900/90 border border-stone-800 rounded-xl p-3.5">
              <div className="text-xs text-stone-400 font-sans">Total Classes</div>
              <div className="text-3xl font-bold text-white tabular-nums mt-0.5 tracking-tight">
                {sampleData.headline}
              </div>
              <div className="mt-2 text-amber-400/90 text-sm tracking-widest font-mono">
                <s>||||</s> <s>||||</s> <s>||||</s> <s>||||</s> |||
              </div>
            </div>

            <div className="grid grid-cols-2 gap-2 text-xs">
              <div className="bg-stone-900/60 border border-stone-800/80 rounded-lg p-2.5">
                <div className="text-[11px] text-stone-400 font-sans">{sampleData.metric1.label}</div>
                <div className="font-semibold text-stone-200 mt-0.5 font-sans">{sampleData.metric1.value}</div>
              </div>
              <div className="bg-stone-900/60 border border-stone-800/80 rounded-lg p-2.5">
                <div className="text-[11px] text-stone-400 font-sans">{sampleData.metric2.label}</div>
                <div className="font-semibold text-stone-200 mt-0.5 font-sans">{sampleData.metric2.value}</div>
              </div>
            </div>
          </div>

          {/* Bottom badge */}
          <div className="border-t border-stone-800 pt-3">
            <div className="text-[11px] text-stone-300 font-sans leading-tight">
              ★ {sampleData.highlight}
            </div>
          </div>
        </div>
      );
    }

    if (industry === 'salon') {
      return (
        <div className="w-full h-full bg-[#1C1917] text-stone-100 p-5 flex flex-col justify-between select-none">
          <div className="border-b border-rose-900/40 pb-3 pt-4">
            <div className="text-[10px] tracking-widest text-rose-300 uppercase font-medium">
              Vanity Mirror · Year in Style
            </div>
            <div className="text-xl font-serif italic text-rose-100 mt-1">
              {sampleData.recipient}
            </div>
          </div>

          <div className="space-y-4 my-auto">
            <div className="bg-gradient-to-b from-stone-900/90 to-stone-950 border border-rose-950/60 rounded-xl p-4 text-center">
              <div className="text-xs text-rose-200/70">Completed Visits</div>
              <div className="text-3xl font-bold text-white mt-1">
                {sampleData.headline}
              </div>
              <div className="flex justify-center gap-2 mt-3 text-rose-400 text-sm">
                <span>✦</span><span>✦</span><span>✦</span><span>✦</span><span>✦</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-2 text-xs">
              <div className="bg-stone-900/70 border border-stone-800 rounded-lg p-2.5">
                <div className="text-[10px] text-stone-400">{sampleData.metric1.label}</div>
                <div className="font-semibold text-stone-200 mt-0.5">{sampleData.metric1.value}</div>
              </div>
              <div className="bg-stone-900/70 border border-stone-800 rounded-lg p-2.5">
                <div className="text-[10px] text-stone-400">{sampleData.metric2.label}</div>
                <div className="font-semibold text-stone-200 mt-0.5">{sampleData.metric2.value}</div>
              </div>
            </div>
          </div>

          <div className="border-t border-rose-950/70 pt-3">
            <div className="text-[11px] text-rose-200/80 leading-tight">
              {sampleData.highlight}
            </div>
          </div>
        </div>
      );
    }

    if (industry === 'learning') {
      return (
        <div className="w-full h-full bg-[#18212F] text-slate-100 p-5 flex flex-col justify-between select-none">
          <div className="border-b border-sky-900/50 pb-3 pt-4">
            <div className="text-[10px] tracking-wider text-sky-400 uppercase font-semibold">
              Exercise Notebook · Academic Year
            </div>
            <div className="text-xl font-bold text-white mt-1">
              {sampleData.recipient}
            </div>
          </div>

          <div className="space-y-4 my-auto">
            <div className="bg-slate-900/90 border border-sky-900/40 rounded-xl p-4">
              <div className="text-xs text-slate-400">Curriculum Progress</div>
              <div className="text-3xl font-bold text-white mt-1 tabular-nums">
                {sampleData.headline}
              </div>
              <div className="w-full bg-slate-800 h-1.5 rounded-full mt-3 overflow-hidden">
                <div className="bg-sky-400 h-full w-4/5 rounded-full"></div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-2 text-xs">
              <div className="bg-slate-900/60 border border-slate-800 rounded-lg p-2.5">
                <div className="text-[10px] text-slate-400">{sampleData.metric1.label}</div>
                <div className="font-semibold text-slate-200 mt-0.5">{sampleData.metric1.value}</div>
              </div>
              <div className="bg-slate-900/60 border border-slate-800 rounded-lg p-2.5">
                <div className="text-[10px] text-slate-400">{sampleData.metric2.label}</div>
                <div className="font-semibold text-slate-200 mt-0.5">{sampleData.metric2.value}</div>
              </div>
            </div>
          </div>

          <div className="border-t border-sky-900/40 pt-3">
            <div className="text-[11px] text-sky-200/90 leading-tight">
              ✓ {sampleData.highlight}
            </div>
          </div>
        </div>
      );
    }

    // Default: nonprofit
    return (
      <div className="w-full h-full bg-[#1C2520] text-emerald-50 p-5 flex flex-col justify-between select-none">
        <div className="border-b border-emerald-900/50 pb-3 pt-4">
          <div className="text-[10px] tracking-wider text-emerald-400 uppercase font-semibold">
            Gratitude Report · 2026
          </div>
          <div className="text-xl font-bold text-white mt-1">
            {sampleData.recipient}
          </div>
        </div>

        <div className="space-y-4 my-auto">
          <div className="bg-emerald-950/80 border border-emerald-900/50 rounded-xl p-4">
            <div className="text-xs text-emerald-300/80">Direct Community Impact</div>
            <div className="text-2xl font-bold text-white mt-1">
              {sampleData.headline}
            </div>
            <div className="text-xs text-emerald-200/70 mt-2">
              Every dollar was converted directly into on-the-ground support.
            </div>
          </div>

          <div className="grid grid-cols-2 gap-2 text-xs">
            <div className="bg-emerald-950/50 border border-emerald-900/40 rounded-lg p-2.5">
              <div className="text-[10px] text-emerald-300/70">{sampleData.metric1.label}</div>
              <div className="font-semibold text-emerald-100 mt-0.5">{sampleData.metric1.value}</div>
            </div>
            <div className="bg-emerald-950/50 border border-emerald-900/40 rounded-lg p-2.5">
              <div className="text-[10px] text-emerald-300/70">{sampleData.metric2.label}</div>
              <div className="font-semibold text-emerald-100 mt-0.5">{sampleData.metric2.value}</div>
            </div>
          </div>
        </div>

        <div className="border-t border-emerald-900/50 pt-3">
          <div className="text-[11px] text-emerald-200 leading-tight">
            ♥ {sampleData.highlight}
          </div>
        </div>
      </div>
    );
  };

  const showFallback = videoError;

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
        <div className="relative w-full h-full rounded-[28px] overflow-hidden bg-stone-950 flex flex-col justify-center items-center">
          {/* Video element */}
          {!showFallback ? (
            <video
              ref={videoRef}
              src={item.video}
              poster={!posterError ? item.poster : undefined}
              preload="none"
              muted={isMuted}
              loop
              playsInline
              onLoadedData={() => setVideoLoaded(true)}
              onError={() => {
                // If local file is missing, seamlessly fall back to neat placeholder design
                setVideoError(true);
              }}
              className={`w-full h-full object-cover transition-opacity duration-300 ${
                videoLoaded ? 'opacity-100' : 'opacity-95'
              }`}
            />
          ) : (
            // Elegant simulated theme template when file has not yet been placed
            renderSimulatedDesign()
          )}

          {/* Interactive play/pause indicator on hover */}
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

          {/* Audio toggle button if video is working */}
          {!videoError && videoLoaded && (
            <button
              onClick={toggleMute}
              type="button"
              aria-label={isMuted ? 'Unmute video' : 'Mute video'}
              className="absolute bottom-3 right-3 z-20 px-2 py-1 bg-black/60 hover:bg-black/80 text-white rounded text-[11px] font-mono transition-colors"
            >
              {isMuted ? 'MUTED' : 'AUDIO ON'}
            </button>
          )}

          {/* Neat grey file label indicator (as specified: "If a file doesn't exist yet, show a neat grey placeholder with the file name") */}
          <div className="absolute bottom-2 left-2 right-2 z-20 pointer-events-none">
            <div className="bg-stone-900/90 backdrop-blur-xs border border-stone-700/60 rounded px-2 py-1 text-[10px] font-mono text-stone-300 truncate text-center shadow-xs">
              {item.video}
            </div>
          </div>
        </div>
      </div>

      {/* Caption below phone */}
      <div className="mt-3 text-center">
        <div className="text-sm font-semibold text-stone-900">{item.title}</div>
        <div className="text-xs text-stone-500 mt-0.5">{item.caption}</div>
      </div>
    </div>
  );
};
