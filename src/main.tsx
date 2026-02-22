import React, { lazy, Suspense, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Toaster } from '@/components/ui/toaster';
import Whitelist from './pages/Whitelist';
import './index.css';
import Lenis from 'lenis';

// Non-critical routes lazy-loaded — removes Three.js + framer-motion
// from the initial bundle (WaitlistSuccess/Privacy use shader-animation)
const WaitlistSuccess = lazy(() => import('./pages/WaitlistSuccess'));
const Privacy = lazy(() => import('./pages/Privacy'));
const Pricing = lazy(() => import('./pages/Pricing'));
const Features = lazy(() => import('./pages/Features'));

function App() {
  useEffect(() => {
    const isMobile = window.innerWidth < 768;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion) return;

    const lenis = new Lenis({
      duration: isMobile ? 1.0 : 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      smoothWheel: !isMobile,
      wheelMultiplier: 1,
      touchMultiplier: isMobile ? 1.5 : 2,
      infinite: false,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => { lenis.destroy(); };
  }, []);

  return (
    <>
      <Toaster />
      <Routes>
        <Route path="/" element={<Whitelist />} />
        <Route path="/whitelist" element={<Whitelist />} />
        <Route
          path="/waitlist-success"
          element={<Suspense fallback={null}><WaitlistSuccess /></Suspense>}
        />
        <Route
          path="/pricing"
          element={<Suspense fallback={null}><Pricing /></Suspense>}
        />
        <Route
          path="/features"
          element={<Suspense fallback={null}><Features /></Suspense>}
        />
        <Route
          path="/privacy"
          element={<Suspense fallback={null}><Privacy /></Suspense>}
        />
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
