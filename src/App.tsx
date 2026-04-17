/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { AnimatePresence } from 'motion/react';
import Navigation from './components/Navigation';
import Hero from './components/sections/Hero';
import Overview from './components/sections/Overview';
import Retail from './components/sections/Retail';
import Entertainment from './components/sections/Entertainment';
import Events from './components/sections/Events';
import Contact from './components/sections/Contact';
import WaterParkSimulation from './components/WaterParkSimulation';

export default function App() {
  const [activeSection, setActiveSection] = useState('hero');
  const [isSimOpen, setIsSimOpen] = useState(false);

  useEffect(() => {
    if (isSimOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isSimOpen]);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    
    const sections = ['hero', 'overview', 'retail', 'entertainment', 'events', 'contact'];
    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <main className="relative bg-luxury-black min-h-screen">
      <Navigation activeSection={activeSection} onNavigate={scrollToSection} />
      
      <div className="flex flex-col">
        <Hero />
        <Overview />
        <Retail />
        <Entertainment onStartSim={() => setIsSimOpen(true)} />
        <Events />
        <Contact />
      </div>

      <AnimatePresence>
        {isSimOpen && (
          <WaterParkSimulation onOpenChange={setIsSimOpen} />
        )}
      </AnimatePresence>

      <footer className="relative bg-luxury-black py-16 px-12 md:px-[50px] border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8 text-[10px] text-luxury-dim uppercase tracking-widest font-medium">
        <div>PROJECT ID: AD-2026-EDITORIAL-PREVIEW</div>
        <div>PROPRIETARY DESIGN DOCUMENT &copy; 2026 AMERICAN DREAM MALL CORP.</div>
        <div className="text-luxury-gold">READY FOR DEPLOYMENT</div>
      </footer>

      {/* Luxury frame overlay */}
      <div className="fixed inset-0 pointer-events-none border-[24px] border-luxury-black z-[100] md:block hidden" />
    </main>
  );
}
