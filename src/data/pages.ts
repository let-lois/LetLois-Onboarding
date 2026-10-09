import {
  BuildingIcon,
  GlobeIcon,
  HandshakeIcon,
  ImageIcon,
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
  'Three short parts, each with a video and a form. Watch, fill it out, move to the next.',
  icon: HandshakeIcon,
  videoTitle: 'Welcome from Josh and the LetLois founders',
  videoCaption: 'A welcome message from the LetLois founders.',
  wistiaId: 'wr1cv49vhe'
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
  wistiaId: 'xdc0zrpviq',
  formEmbedUrl: 'https://letlois-onboarding-forms.josh-40d.workers.dev/ads/a2p/',
  formUrl: 'https://letlois-onboarding-forms.josh-40d.workers.dev/ads/a2p/',
  formLabel: 'Start the Part 1 form'
},
{
  id: 3,
  slug: 'part-2-website-and-funnels',
  kind: 'part',
  partNumber: 2,
  navLabel: 'Website & Funnels',
  eyebrow: 'Part 2',
  title: 'Your Website',
  blurb:
  'Everything we need to build your site and landing pages — services, service area, offers, photos, and brand assets.',
  icon: GlobeIcon,
  videoTitle: 'Part 2 — Website, funnels, and offers',
  videoCaption:
  'What we ask for so we can build your website and landing pages.',
  wistiaId: 'okdiswshgi',
  formEmbedUrl: 'https://letlois-onboarding-forms.josh-40d.workers.dev/ads/website/',
  formUrl: 'https://letlois-onboarding-forms.josh-40d.workers.dev/ads/website/',
  formLabel: 'Start the Part 2 form'
},
{
  id: 4,
  slug: 'part-3-assets',
  kind: 'part',
  partNumber: 3,
  navLabel: 'Assets',
  eyebrow: 'Part 3',
  title: 'Assets - Photos, Videos & Offers',
  blurb:
  'Real job photos — before and afters, your team, your trucks — plus any video you have. We use them across your site, landing pages, and any creative we build for you.',
  icon: ImageIcon,
  videoTitle: 'Part 3 — Photos and videos',
  videoCaption:
  'What to send, and why real photos beat stock every time.',
  wistiaId: '97ahyunsvz',
  formEmbedUrl: 'https://letlois-onboarding-forms.josh-40d.workers.dev/ads/assets/',
  formUrl: 'https://letlois-onboarding-forms.josh-40d.workers.dev/ads/assets/',
  formLabel: 'Start the Part 3 form'
},
{
  id: 5,
  slug: 'thank-you',
  kind: 'outro',
  navLabel: 'Thank you',
  eyebrow: 'All done',
  title: 'That’s everything — thank you.',
  blurb:
  'Our team reviews your answers within one business day and reaches out to book your kickoff call.',
  icon: PartyPopperIcon,
  videoTitle: 'Thank you from Josh and the LetLois founders',
  videoCaption: 'A closing note on what happens next.',
  wistiaId: '6mrmclvgf9'
}];


export const getPageBySlug = (slug: string): OnboardingPage | undefined =>
pages.find((page) => page.slug === slug);
