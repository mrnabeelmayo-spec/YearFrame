import { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ExamplesSection } from './components/ExamplesSection';
import { ScalePosterGrid } from './components/ScalePosterGrid';
import { HowItWorks } from './components/HowItWorks';
import { PricingSection } from './components/PricingSection';
import { PrivacyCallout } from './components/PrivacyCallout';
import { FaqSection } from './components/FaqSection';
import { AboutSection } from './components/AboutSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { PrivacyPage } from './pages/PrivacyPage';
import { CreditsPage } from './pages/CreditsPage';

export default function App() {
  const [currentPath, setCurrentPath] = useState<string>(() => {
    return window.location.pathname;
  });

  const [selectedPlan, setSelectedPlan] = useState<string>('');

  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname);
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigateTo = (path: string) => {
    window.history.pushState({}, '', path);
    setCurrentPath(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectPlan = (planName: string) => {
    setSelectedPlan(planName);
    const contactEl = document.querySelector('#contact');
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToSection = (hash: string) => {
    if (currentPath !== '/') {
      navigateTo('/');
      setTimeout(() => {
        const el = document.querySelector(hash);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      const el = document.querySelector(hash);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Route: /privacy
  if (currentPath === '/privacy') {
    return (
      <div className="min-h-screen flex flex-col bg-[#FAFAF9]">
        <Header onNavigateHome={() => navigateTo('/')} isSubPage />
        <main className="flex-1">
          <PrivacyPage onBackToHome={() => navigateTo('/')} />
        </main>
        <Footer
          onNavigateHome={() => navigateTo('/')}
          onNavigatePrivacy={() => navigateTo('/privacy')}
          onNavigateCredits={() => navigateTo('/credits')}
        />
      </div>
    );
  }

  // Route: /credits
  if (currentPath === '/credits') {
    return (
      <div className="min-h-screen flex flex-col bg-[#FAFAF9]">
        <Header onNavigateHome={() => navigateTo('/')} isSubPage />
        <main className="flex-1">
          <CreditsPage onBackToHome={() => navigateTo('/')} />
        </main>
        <Footer
          onNavigateHome={() => navigateTo('/')}
          onNavigatePrivacy={() => navigateTo('/privacy')}
          onNavigateCredits={() => navigateTo('/credits')}
        />
      </div>
    );
  }

  // Main Home Page
  return (
    <div className="min-h-screen flex flex-col bg-[#FAFAF9] text-stone-900">
      {/* 1. Header */}
      <Header onNavigateHome={() => window.scrollTo({ top: 0, behavior: 'smooth' })} />

      <main className="flex-1">
        {/* 2. Hero */}
        <Hero
          onGetSampleClick={() => scrollToSection('#contact')}
          onSeeExamplesClick={() => scrollToSection('#examples')}
        />

        {/* 3. Examples Section with 4 Tabs */}
        <ExamplesSection />

        {/* 4. Scale: One spreadsheet, 50 videos */}
        <ScalePosterGrid />

        {/* 5. How it works, in 3 steps */}
        <HowItWorks />

        {/* 6. Pricing table (4 columns on desktop, 1 on mobile) */}
        <PricingSection onSelectPlan={handleSelectPlan} />

        {/* 7. Privacy statement */}
        <PrivacyCallout onLearnMore={() => navigateTo('/privacy')} />

        {/* 8. FAQ */}
        <FaqSection />

        {/* 9. About me (Nabeel) */}
        <AboutSection />

        {/* 10. Contact (Free sample & Netlify form) */}
        <ContactSection prefilledPlan={selectedPlan} />
      </main>

      {/* 11. Footer */}
      <Footer
        onNavigateHome={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        onNavigatePrivacy={() => navigateTo('/privacy')}
        onNavigateCredits={() => navigateTo('/credits')}
      />
    </div>
  );
}
