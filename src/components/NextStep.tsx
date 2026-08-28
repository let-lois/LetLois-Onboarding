import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowRightIcon, ExternalLinkIcon } from 'lucide-react';
import type { OnboardingPage } from '../types/onboarding';

interface NextStepProps {
  current: OnboardingPage;
  next: OnboardingPage;
}

/**
 * The single forward control. On pages that carry a form, advancing first asks
 * for confirmation that the form was submitted so parts don't get skipped.
 */
export function NextStep({ current, next }: NextStepProps) {
  const navigate = useNavigate();
  const [askConfirm, setAskConfirm] = useState(false);
  const confirmRef = useRef<HTMLButtonElement>(null);
  const needsConfirm = Boolean(current.formUrl);

  useEffect(() => {
    if (!askConfirm) return;
    confirmRef.current?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setAskConfirm(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [askConfirm]);

  const goNext = () => navigate(`/${next.slug}`);

  return (
    <>
      <div className="mt-10 flex flex-col items-center gap-3 sm:mt-14">
        <button
          type="button"
          onClick={() => needsConfirm ? setAskConfirm(true) : goNext()}
          className="group flex h-16 w-16 items-center justify-center rounded-full bg-brand-500 text-white transition-colors duration-150 ease-smooth hover:bg-brand-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-300 focus-visible:ring-offset-2 focus-visible:ring-offset-ink-900"
          aria-label={`Continue to ${next.navLabel}`}>
          
          <ArrowRightIcon
            className="h-6 w-6 transition-transform duration-200 ease-smooth group-hover:translate-x-0.5"
            aria-hidden="true" />
          
        </button>
        <p className="text-[13px] font-semibold uppercase tracking-[0.14em] text-white/35">
          {next.kind === 'outro' ? 'Finish' : `Next — ${next.navLabel}`}
        </p>
      </div>

      <AnimatePresence>
        {askConfirm &&
        <motion.div
          className="fixed inset-0 z-50 flex items-end justify-center bg-black/70 p-4 sm:items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.16, ease: [0.23, 1, 0.32, 1] }}
          onClick={() => setAskConfirm(false)}>
          
            <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="confirm-title"
            className="w-full max-w-sm rounded-2xl border border-white/10 bg-ink-850 p-6 text-left"
            initial={{ opacity: 0, scale: 0.96, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.98, y: 8 }}
            transition={{ duration: 0.22, ease: [0.23, 1, 0.32, 1] }}
            onClick={(e) => e.stopPropagation()}>
            
              <h2
              id="confirm-title"
              className="text-lg font-bold leading-snug tracking-tight text-white">
              
                Did you submit the {current.eyebrow} form?
              </h2>
              <p className="mt-2 text-[14px] leading-snug text-white/55">
                We can&apos;t start this piece of your build until it&apos;s in. If
                you haven&apos;t finished it, go back and submit it first.
              </p>

              <div className="mt-6 flex flex-col gap-2.5">
                <button
                ref={confirmRef}
                type="button"
                onClick={goNext}
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand-500 px-5 py-3 text-sm font-semibold text-white transition-colors duration-150 ease-smooth hover:bg-brand-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-300 focus-visible:ring-offset-2 focus-visible:ring-offset-ink-850">
                
                  Yes, it&apos;s submitted
                  <ArrowRightIcon className="h-4 w-4" aria-hidden="true" />
                </button>
                <a
                href={current.formUrl}
                className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/15 px-5 py-3 text-sm font-semibold text-white/70 transition-colors duration-150 ease-smooth hover:border-white/35 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-300">
                
                  Not yet — open the form
                  <ExternalLinkIcon className="h-4 w-4" aria-hidden="true" />
                </a>
                <button
                type="button"
                onClick={() => setAskConfirm(false)}
                className="mt-1 text-sm font-medium text-white/40 transition-colors duration-150 ease-smooth hover:text-white/70 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-300">
                
                  Cancel
                </button>
              </div>
            </motion.div>
          </motion.div>
        }
      </AnimatePresence>
    </>);

}