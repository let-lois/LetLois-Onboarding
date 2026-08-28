import type { LucideIcon } from 'lucide-react';

export type PageKind = 'intro' | 'part' | 'outro';

export interface OnboardingPage {
  /** Sequential position, 1 through 7. */
  id: number;
  slug: string;
  kind: PageKind;
  /** Part number shown to the client (parts only). */
  partNumber?: number;
  navLabel: string;
  eyebrow: string;
  title: string;
  blurb: string;
  icon: LucideIcon;
  videoTitle: string;
  videoCaption: string;
  videoUrl?: string;
  /** Wistia media id, e.g. the "dveqq1nr8j" in a Wistia embed snippet. */
  wistiaId?: string;
  formUrl?: string;
  formLabel?: string;
  optional?: boolean;
  optionalNote?: string;
}