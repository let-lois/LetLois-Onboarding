import React from 'react';
import { PlayIcon, VideoIcon } from 'lucide-react';

interface VideoPanelProps {
  title: string;
  caption?: string;
  videoUrl?: string;
  /** Wistia media id — rendered through Wistia's iframe embed. */
  wistiaId?: string;
  eyebrow?: string;
  duration?: string;
  compact?: boolean;
}

export function VideoPanel({
  title,
  caption,
  videoUrl,
  wistiaId,
  eyebrow,
  duration,
  compact = false
}: VideoPanelProps) {
  const src =
  videoUrl ?? (
  wistiaId ?
  `https://fast.wistia.net/embed/iframe/${wistiaId}?playerColor=1e93e8&videoFoam=false` :
  undefined);

  return (
    <figure className="w-full">
      <div className="relative w-full overflow-hidden rounded-xl border border-white/10 bg-ink-850 shadow-[0_18px_50px_-30px_rgba(0,0,0,0.9)] sm:rounded-2xl">
        <div className="aspect-video w-full">
          {src ?
          <iframe
            src={src}
            title={title}
            className="h-full w-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            allowFullScreen /> :


          <div
            className="flex h-full w-full flex-col items-center justify-center gap-2.5 bg-[radial-gradient(circle_at_50%_35%,rgba(30,147,232,0.14),transparent_60%)] px-5 text-center sm:gap-4"
            role="img"
            aria-label={`${title} — video placeholder`}>
            
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-500/15 ring-1 ring-brand-400/40 sm:h-16 sm:w-16">
                <PlayIcon
                className="h-5 w-5 translate-x-[1px] fill-brand-300 text-brand-300 sm:h-6 sm:w-6"
                aria-hidden="true" />
              
              </span>
              <div>
                <p
                className={`font-semibold text-white ${
                compact ? 'text-sm' : 'text-sm sm:text-lg'}`
                }>
                
                  {title}
                </p>
                <p className="mt-0.5 text-xs text-white/40 sm:text-sm">
                  Video plays here once attached.
                </p>
              </div>
            </div>
          }
        </div>

        {(eyebrow || duration) && !src &&
        <div className="pointer-events-none absolute inset-x-0 top-0 flex items-center justify-between p-2.5 sm:p-4">
            {eyebrow ?
          <span className="inline-flex items-center gap-1.5 rounded-full bg-black/50 px-2.5 py-1 text-[11px] font-semibold text-white/70 backdrop-blur sm:text-xs">
                <VideoIcon className="h-3 w-3 sm:h-3.5 sm:w-3.5" aria-hidden="true" />
                {eyebrow}
              </span> :

          <span />
          }
            {duration &&
          <span className="rounded-full bg-black/50 px-2.5 py-1 text-[11px] font-medium text-white/60 backdrop-blur sm:text-xs">
                {duration}
              </span>
          }
          </div>
        }
      </div>

      {caption &&
      <figcaption
        className={`mx-auto mt-2.5 max-w-2xl text-center italic text-white/45 sm:mt-4 sm:text-center ${
        compact ? 'text-xs sm:text-sm' : 'text-sm sm:text-base'}`
        }>
        
          {caption}
        </figcaption>
      }
    </figure>);

}