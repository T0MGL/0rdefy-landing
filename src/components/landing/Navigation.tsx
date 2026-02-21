import { Button } from "@/components/ui/button";
import { Layers } from "lucide-react";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

interface NavigationProps {
  onCtaClick: () => void;
}

export function Navigation({ onCtaClick }: NavigationProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Animate in after mount
    setTimeout(() => setIsVisible(true), 100);

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        isScrolled
          ? "bg-[hsl(240,10%,4%)]/90 backdrop-blur-xl border-b border-white/5 py-3"
          : "bg-transparent py-5",
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2.5 group">
            <div className="relative">
              <Layers className="w-7 h-7 text-primary transition-all duration-300 group-hover:scale-110" />
              <div className="absolute inset-0 bg-primary/30 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            <span className="text-xl font-semibold text-white tracking-tight">
              ordefy
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-8">
            <a
              href="/features"
              className="text-sm font-medium text-white/50 hover:text-white transition-colors duration-300"
            >
              Características
            </a>
            <a
              href="#how-it-works"
              className="text-sm font-medium text-white/50 hover:text-white transition-colors duration-300"
            >
              Cómo Funciona
            </a>
            <a
              href="/pricing"
              className="text-sm font-medium text-white/50 hover:text-white transition-colors duration-300"
            >
              Precios
            </a>
          </div>

          {/* CTA Button */}
          <Button
            variant="premium"
            size="sm"
            onClick={onCtaClick}
            className="rounded-full px-6 font-medium"
          >
            Solicitar Acceso
          </Button>
        </div>
      </div>
    </nav>
  );
}
