import {
  BuildingIcon,
  GlobeIcon,
  HandshakeIcon,
  KeyRoundIcon,
  GraduationCapIcon,
  MegaphoneIcon,
  PartyPopperIcon } from
'lucide-react';
import type { OnboardingPage } from '../types/onboarding';

export const pages: OnboardingPage[] = [
{
  id: 1,
  slug: 'welcome',
  kind: 'intro',
  navLabel: 'Welcome',
  eyebrow: 'Start here',
  title: 'Welcome to LetLois.',
  blurb:
  'Five short parts, each with a video and a form. Watch, fill it out, move to the next.',
  icon: HandshakeIcon,
  videoTitle: 'Welcome from Josh and the LetLois founders',
  videoCaption: 'A welcome message from the LetLois founders.',
  wistiaId: 'dveqq1nr8j'
},
{
  id: 2,
  slug: 'part-1-business-information',
  kind: 'part',
  partNumber: 1,
  navLabel: 'Business Info',
  eyebrow: 'Part 1',
  title: 'Your business information',
  blurb:
  'Alyssa covers the basics we need — legal business name, EIN, and ownership details — for your A2P registration so we can text your leads legally.',
  icon: BuildingIcon,
  videoTitle: 'Part 1 — Business information',
  videoCaption: 'Alyssa explains the business details and A2P registration.',
  formUrl: '#',
  formLabel: 'Open the Part 1 form'
},
{
  id: 3,
  slug: 'part-2-website',
  kind: 'part',
  partNumber: 2,
  navLabel: 'Website',
  eyebrow: 'Part 2',
  title: 'Your new website',
  blurb:
  'What we need to know to build your site — services, service area, offers, photos, and how you want to be found.',
  icon: GlobeIcon,
  videoTitle: 'Part 2 — Website details',
  videoCaption: 'What we ask for so we can build your website.',
  formUrl: '#',
  formLabel: 'Open the Part 2 form'
},
{
  id: 4,
  slug: 'part-3-access',
  kind: 'part',
  partNumber: 3,
  navLabel: 'Access',
  eyebrow: 'Part 3',
  title: 'Access for the LetLois team',
  blurb:
  'Your domain, hosting, Google, and Meta accounts. You stay the owner — we just need invites so we can build and track.',
  icon: KeyRoundIcon,
  videoTitle: 'Part 3 — Backend access',
  videoCaption: 'Which accounts we need access to, and how to grant it safely.',
  formUrl: '#',
  formLabel: 'Open the Part 3 form'
},
{
  id: 5,
  slug: 'part-4-community',
  kind: 'part',
  partNumber: 4,
  navLabel: 'Community',
  eyebrow: 'Part 4',
  title: 'Community and course access',
  blurb:
  'Who on your team should get logins to the LetLois community and training course.',
  icon: GraduationCapIcon,
  videoTitle: 'Part 4 — Community and courses',
  videoCaption: 'Setting up your seats in the community and course.',
  formUrl: '#',
  formLabel: 'Open the Part 4 form'
},
{
  id: 6,
  slug: 'part-5-funnels-and-ads',
  kind: 'part',
  partNumber: 5,
  navLabel: 'Funnels & Ads',
  eyebrow: 'Part 5',
  title: 'Funnels, landing pages, and ads',
  blurb:
  'Assets and offers for the funnels we build, plus access to your Meta Ads Manager and Google Ads Manager.',
  icon: MegaphoneIcon,
  optional: true,
  optionalNote:
  'Ads plans only. If ads are not part of your plan, skip straight to the last page.',
  videoTitle: 'Part 5 — Funnels and ads (Ads plans only)',
  videoCaption: 'Funnel assets and ad account access — skip if ads are not in your plan.',
  formUrl: '#',
  formLabel: 'Open the Part 5 form'
},
{
  id: 7,
  slug: 'thank-you',
  kind: 'outro',
  navLabel: 'Thank you',
  eyebrow: 'All done',
  title: 'That’s everything — thank you.',
  blurb:
  'Our team reviews your answers within one business day and reaches out to book your kickoff call.',
  icon: PartyPopperIcon,
  videoTitle: 'Thank you from Josh and the LetLois founders',
  videoCaption: 'A closing note on what happens next.'
}];


export const getPageBySlug = (slug: string): OnboardingPage | undefined =>
pages.find((page) => page.slug === slug);