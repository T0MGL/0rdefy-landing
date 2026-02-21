import { useState, useEffect } from "react";
import { Navigation } from "@/components/landing/Navigation";
import { Hero } from "@/components/landing/Hero";
import { IntegrationLogos } from "@/components/landing/IntegrationLogos";
import { ProblemSection } from "@/components/landing/ProblemSection";
import { ProductShowcase } from "@/components/landing/ProductShowcase";
import { FeatureGrid } from "@/components/landing/FeatureGrid";
import { HowItWorks } from "@/components/landing/HowItWorks";
import { ComparisonSection } from "@/components/landing/ComparisonSection";
import { TestimonialsSection } from "@/components/landing/TestimonialsSection";
import { LatamSection } from "@/components/landing/LatamSection";
import { FAQSection } from "@/components/landing/FAQSection";
import { FinalCTA } from "@/components/landing/FinalCTA";
import { Footer } from "@/components/landing/Footer";
import { TypeformModal } from "@/components/landing/TypeformModal";
import { LoadingScreen } from "@/components/landing/LoadingScreen";
import { useLocalStorage } from "@/hooks/useLocalStorage";

export default function Whitelist() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [userEmail, setUserEmail] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [hasVisited, setHasVisited] = useLocalStorage("ordefy_visited", false);
  const [, setAnimationShown] = useLocalStorage("premium_animation_shown", false);

  // Mark animation as shown after initial render
  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimationShown(true);
    }, 5000);
    return () => clearTimeout(timer);
  }, [setAnimationShown]);

  // For return visits (hasVisited=true) there is no LoadingScreen to take over,
  // so we fade out the static HTML preloader ourselves once the page has mounted.
  useEffect(() => {
    if (hasVisited) {
      const el = document.getElementById('_html-preloader');
      if (el) {
        el.classList.add('fade-out');
        const t = setTimeout(() => el.remove(), 450);
        return () => clearTimeout(t);
      }
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleLoadingComplete = () => {
    setIsLoading(false);
    setHasVisited(true);
  };

  const handleEmailSubmit = (email: string) => {
    setUserEmail(email);
    setIsModalOpen(true);
  };

  const handleCtaClick = () => {
    // Scroll to hero section smoothly
    window.scrollTo({ top: 0, behavior: "smooth" });
    // Focus on email input after scroll
    setTimeout(() => {
      const emailInput = document.querySelector('input[type="email"]');
      if (emailInput instanceof HTMLInputElement) {
        emailInput.focus();
      }
    }, 500);
  };

  // Show loading screen only on first visit
  if (isLoading && !hasVisited) {
    return <LoadingScreen onComplete={handleLoadingComplete} minDuration={2500} />;
  }

  return (
    <div className="min-h-screen bg-[hsl(240,10%,4%)] overflow-x-hidden">
      {/* Navigation */}
      <Navigation onCtaClick={handleCtaClick} />

      {/* Main Content */}
      <main className="bg-[hsl(240,10%,4%)]">
        {/* Hero Section - First email capture */}
        <Hero onEmailSubmit={handleEmailSubmit} />

        {/* Integration Logos - Quick credibility */}
        <IntegrationLogos />

        {/* Problem Section - PAS Framework (Pain-Agitate-Solution) */}
        <ProblemSection />

        {/* Product Showcase - Visual solution */}
        <ProductShowcase />

        {/* Features Section - What they get */}
        <FeatureGrid />

        {/* How It Works Section - Simplicity */}
        <HowItWorks />

        {/* Comparison Section - Why Ordefy vs Others */}
        <ComparisonSection />

        {/* Testimonials Section - Social proof */}
        <TestimonialsSection />

        {/* LATAM Section - Local credibility */}
        <LatamSection />

        {/* FAQ Section - Objection handling */}
        <FAQSection />

        {/* Final CTA Section - Last email capture */}
        <FinalCTA onEmailSubmit={handleEmailSubmit} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Typeform Modal */}
      <TypeformModal
        email={userEmail}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
}
