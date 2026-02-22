import { useState, lazy, Suspense } from "react";
import { Navigation } from "@/components/landing/Navigation";
import { Hero } from "@/components/landing/Hero";

// Below-fold sections load lazily in parallel after Hero is visible.
// Each becomes a separate chunk — browser fetches them all at once
// while the user reads the hero copy.
const IntegrationLogos = lazy(() =>
  import("@/components/landing/IntegrationLogos").then(m => ({ default: m.IntegrationLogos }))
);
const ProblemSection = lazy(() =>
  import("@/components/landing/ProblemSection").then(m => ({ default: m.ProblemSection }))
);
const ProductShowcase = lazy(() =>
  import("@/components/landing/ProductShowcase").then(m => ({ default: m.ProductShowcase }))
);
const FeatureGrid = lazy(() =>
  import("@/components/landing/FeatureGrid").then(m => ({ default: m.FeatureGrid }))
);
const HowItWorks = lazy(() =>
  import("@/components/landing/HowItWorks").then(m => ({ default: m.HowItWorks }))
);
const ComparisonSection = lazy(() =>
  import("@/components/landing/ComparisonSection").then(m => ({ default: m.ComparisonSection }))
);
const TestimonialsSection = lazy(() =>
  import("@/components/landing/TestimonialsSection").then(m => ({ default: m.TestimonialsSection }))
);
const LatamSection = lazy(() =>
  import("@/components/landing/LatamSection").then(m => ({ default: m.LatamSection }))
);
const FAQSection = lazy(() =>
  import("@/components/landing/FAQSection").then(m => ({ default: m.FAQSection }))
);
const FinalCTA = lazy(() =>
  import("@/components/landing/FinalCTA").then(m => ({ default: m.FinalCTA }))
);
const Footer = lazy(() =>
  import("@/components/landing/Footer").then(m => ({ default: m.Footer }))
);
// Modal only loads when user actually opens it
const TypeformModal = lazy(() =>
  import("@/components/landing/TypeformModal").then(m => ({ default: m.TypeformModal }))
);

export default function Whitelist() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [userEmail, setUserEmail] = useState("");

  const handleEmailSubmit = (email: string) => {
    setUserEmail(email);
    setIsModalOpen(true);
  };

  const handleCtaClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setTimeout(() => {
      const emailInput = document.querySelector('input[type="email"]');
      if (emailInput instanceof HTMLInputElement) {
        emailInput.focus();
      }
    }, 500);
  };

  return (
    <div className="min-h-screen bg-[hsl(240,10%,4%)] overflow-x-hidden">
      {/* Navigation + Hero load eagerly — visible on first paint */}
      <Navigation onCtaClick={handleCtaClick} />

      <main className="bg-[hsl(240,10%,4%)]">
        <Hero onEmailSubmit={handleEmailSubmit} />

        {/* All below-fold sections share one Suspense boundary.
            They load in parallel right after Hero paints. */}
        <Suspense fallback={null}>
          <IntegrationLogos />
          <ProblemSection />
          <ProductShowcase />
          <FeatureGrid />
          <HowItWorks />
          <ComparisonSection />
          <TestimonialsSection />
          <LatamSection />
          <FAQSection />
          <FinalCTA onEmailSubmit={handleEmailSubmit} />
        </Suspense>
      </main>

      <Suspense fallback={null}>
        <Footer />
      </Suspense>

      {/* Modal chunk only fetched when user opens it */}
      {isModalOpen && (
        <Suspense fallback={null}>
          <TypeformModal
            email={userEmail}
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
          />
        </Suspense>
      )}
    </div>
  );
}
