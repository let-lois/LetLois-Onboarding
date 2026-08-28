import React from 'react';
import { Link } from 'react-router-dom';
import { brand } from '../data/brand';
import { pages } from '../data/pages';

export function Layout({ children }: {children: React.ReactNode;}) {
  return (
    <div className="flex min-h-screen w-full flex-col bg-ink-900">
      <header className="sticky top-0 z-30 border-b border-white/[0.07] bg-ink-900/90 backdrop-blur">
        <div className="mx-auto flex h-14 w-full max-w-content items-center justify-between gap-3 px-4 sm:px-8">
          <Link
            to={`/${pages[0].slug}`}
            className="flex items-center gap-2.5 rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-400"
            aria-label="LetLois onboarding — start">
            
            <img
              src={brand.wordmark}
              alt="LetLois"
              className="h-6 w-auto"
              width={120}
              height={24} />
            
            <span className="border-l border-white/15 pl-2.5 text-[13px] font-medium text-white/45 sm:text-sm">
              Onboarding
            </span>
          </Link>
          <a
            href={`mailto:${brand.supportEmail}`}
            className="text-[13px] font-semibold text-brand-300 transition-colors duration-150 ease-smooth hover:text-brand-200 sm:text-sm">
            
            Need help?
          </a>
        </div>
      </header>

      <main className="flex-1">{children}</main>
    </div>);

}