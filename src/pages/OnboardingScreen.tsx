import React, { useEffect } from 'react';
import { Link, Navigate, useParams } from 'react-router-dom';
import { ChevronLeftIcon, ExternalLinkIcon, SkipForwardIcon } from 'lucide-react';
import { pages, getPageBySlug } from '../data/pages';
import { VideoPanel } from '../components/VideoPanel';
import { NextStep } from '../components/NextStep';

interface OnboardingScreenProps {
  adsPartOptional: boolean;
}

export function OnboardingScreen({ adsPartOptional }: OnboardingScreenProps) {
  const { slug = '' } = useParams();
  const page = getPageBySlug(slug);

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [slug]);

  if (!page) return <Navigate to={`/${pages[0].slug}`} replace />;

  const index = pages.findIndex((p) => p.id === page.id);
  const next = pages[index + 1];
  const prev = pages[index - 1];
  const lastPage = pages[pages.length - 1];
  const showOptional = Boolean(page.optional) && adsPartOptional;
  const Icon = page.icon;

  return (
    <div className="mx-auto w-full max-w-3xl px-4 pb-16 pt-3 text-center sm:px-8 sm:pb-24 sm:pt-6">
      <div className="flex h-7 items-center justify-start">
        {prev &&
        <Link
          to={`/${prev.slug}`}
          className="inline-flex items-center gap-1 rounded text-[12px] font-medium text-white/25 transition-colors duration-150 ease-smooth hover:text-white/60 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-300">
          
            <ChevronLeftIcon className="h-3.5 w-3.5" aria-hidden="true" />
            Back
          </Link>
        }
      </div>

      <span className="inline-flex items-center gap-1.5 rounded-full bg-brand-500/12 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.14em] text-brand-200 ring-1 ring-inset ring-brand-400/25 sm:text-xs">
        <Icon className="h-3.5 w-3.5" aria-hidden="true" />
        {page.eyebrow}
      </span>

      <h1 className="mx-auto mt-3 max-w-2xl text-[26px] font-extrabold leading-[1.12] tracking-tight text-white sm:mt-5 sm:text-4xl">
        {page.title}
      </h1>
      <p className="mx-auto mt-2.5 max-w-xl text-[15px] leading-snug text-white/55 sm:mt-4 sm:text-lg sm:leading-normal">
        {page.blurb}
      </p>

      <div className="mt-5 sm:mt-8">
        <VideoPanel
          title={page.videoTitle}
          caption={page.videoCaption}
          videoUrl={page.videoUrl}
          wistiaId={page.wistiaId}
          eyebrow={page.eyebrow} />
        
      </div>

      {page.formUrl && page.formLabel &&
      <a
        href={page.formUrl}
        className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand-500 px-6 py-3.5 text-base font-semibold text-white transition-colors duration-150 ease-smooth hover:bg-brand-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-300 focus-visible:ring-offset-2 focus-visible:ring-offset-ink-900 sm:mt-8 sm:w-auto sm:px-8">
        
          {page.formLabel}
          <ExternalLinkIcon className="h-4 w-4" aria-hidden="true" />
        </a>
      }

      {showOptional && page.optionalNote &&
      <div className="mt-5 flex flex-col items-center gap-2 sm:mt-6">
          <p className="text-[13px] leading-snug text-white/45 sm:text-sm">
            {page.optionalNote}
          </p>
          <Link
          to={`/${lastPage.slug}`}
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-300 transition-colors duration-150 ease-smooth hover:text-brand-200">
          
            <SkipForwardIcon className="h-4 w-4" aria-hidden="true" />
            Skip this part
          </Link>
        </div>
      }

      {next && <NextStep current={page} next={next} />}
    </div>);

}