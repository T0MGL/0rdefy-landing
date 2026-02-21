import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Toaster } from '@/components/ui/toaster';
import Whitelist from './pages/Whitelist';
import WaitlistSuccess from './pages/WaitlistSuccess';
import Privacy from './pages/Privacy';
import Pricing from './pages/Pricing';
import Features from './pages/Features';
import './index.css';
import Lenis from 'lenis';

function App() {
  // Remove the static HTML preloader instantly when React mounts.
  // React LoadingScreen (z-index:100) is already rendered underneath — instant swap, no flash.
  useEffect(() => {
    document.getElementById('init-loader')?.remove();
  }, []);

  useEffect(() => {
    // Detect mobile device
    const isMobile = window.innerWidth < 768;

    // Detect if user prefers reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Skip smooth scroll if user prefers reduced motion
    if (prefersReducedMotion) {
      return;
    }

    // Initialize Lenis smooth scroll with optimized settings
    const lenis = new Lenis({
      duration: isMobile ? 1.0 : 1.2, // Faster on mobile
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      smoothWheel: !isMobile, // Disable smooth wheel on mobile (uses touch instead)
      wheelMultiplier: 1,
      touchMultiplier: isMobile ? 1.5 : 2, // More conservative on mobile
      infinite: false,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <>
      <Toaster />
      <Routes>
        <Route path="/" element={<Whitelist />} />
        <Route path="/whitelist" element={<Whitelist />} />
        <Route path="/waitlist-success" element={<WaitlistSuccess />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/features" element={<Features />} />
        <Route path="/privacy" element={<Privacy />} />
      </Routes>
    </>
  );
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
);
