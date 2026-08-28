import React from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { Layout } from './components/Layout';
import { OnboardingScreen } from './pages/OnboardingScreen';
import { pages } from './data/pages';

interface AppProps {
  /** Present the funnels-and-ads part as skippable for clients without an ads plan. */
  adsPartOptional?: boolean;
}

export function App({ adsPartOptional = true }: AppProps) {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Navigate to={`/${pages[0].slug}`} replace />} />
          <Route
            path="/:slug"
            element={<OnboardingScreen adsPartOptional={adsPartOptional} />} />
          
          <Route path="*" element={<Navigate to={`/${pages[0].slug}`} replace />} />
        </Routes>
      </Layout>
    </BrowserRouter>);

}