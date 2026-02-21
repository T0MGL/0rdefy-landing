import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { GradientText } from "@/components/ui/gradient-text";
import { PremiumShader } from "@/components/ui/premium-shader";
import { MeshGradient } from "@/components/ui/mesh-gradient";
import { ArrowRight, Clock, ShieldCheck, ChevronDown, ShoppingCart, Headset } from "lucide-react";
import { useState } from "react";
import { useLocalStorage } from "@/hooks/useLocalStorage";

interface HeroProps {
  onEmailSubmit: (email: string) => void;
}

export function Hero({ onEmailSubmit }: HeroProps) {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [animationShown] = useLocalStorage("premium_animation_shown", false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;

    setIsLoading(true);
    setTimeout(() => {
      onEmailSubmit(email);
      setIsLoading(false);
    }, 300);
  };

  const scrollToFeatures = () => {
    const featuresSection = document.getElementById("features");
    if (featuresSection) {
      featuresSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const trustBadges = [
    { icon: ShieldCheck, text: "Crece con tu negocio" },
    { icon: Clock, text: "Setup en 5 minutos" },
    { icon: Headset, text: "Soporte local 24/7" },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden z-0">
      {/* Background */}
      {!animationShown ? (
        <PremiumShader className="absolute inset-0 z-0" />
      ) : (
        <MeshGradient variant="hero" className="z-0" />
      )}


      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 pb-16 md:pb-32">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8 animate-fade-up"
            style={{ animationFillMode: "forwards" }}
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            <span className="text-sm font-medium text-primary tracking-wide">
              Acceso Anticipado Exclusivo
            </span>
          </div>

          {/* Headline */}
          <h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium text-white leading-[1.1] mb-6 tracking-tight animate-fade-up"
            style={{ animationDelay: "50ms", animationFillMode: "forwards" }}
          >
            <span className="text-balance">
              Pedidos, stock y envíos.
              <br />
              <GradientText variant="hero" className="font-semibold">
                Todo en un solo lugar.
              </GradientText>
            </span>
          </h1>

          {/* Subheadline */}
          <p
            className="text-lg sm:text-xl text-white/60 max-w-2xl mx-auto mb-12 font-normal leading-relaxed animate-fade-up text-pretty"
            style={{ animationDelay: "100ms", animationFillMode: "forwards" }}
          >
            Ordefy es el sistema que conecta tu tienda online con tu bodega y tus repartidores.
            Confirma pedidos, controla inventario y trackea entregas en tiempo real.
          </p>

          {/* Email Form */}
          <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto mb-8 animate-fade-up"
            style={{ animationDelay: "150ms", animationFillMode: "forwards" }}
          >
            <div className="flex-1 relative group">
              <Input
                type="email"
                placeholder="tu@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full h-14 bg-white/[0.03] border-white/10 text-white placeholder:text-white/30 focus:border-primary/50 focus:ring-2 focus:ring-primary/20 rounded-xl text-base backdrop-blur-sm transition-all duration-300 group-hover:border-white/20 pr-4"
              />
              {/* Input glow on focus */}
              <div className="absolute inset-0 rounded-xl bg-primary/10 blur-xl opacity-0 group-focus-within:opacity-100 transition-opacity duration-500 -z-10" />
            </div>
            <Button
              type="submit"
              variant="premium"
              size="xl"
              disabled={isLoading}
              className="group whitespace-nowrap relative overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-2">
                {isLoading ? (
                  "Procesando..."
                ) : (
                  <>
                    Solicitar Acceso
                    <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                  </>
                )}
              </span>
            </Button>
          </form>

          {/* Trust Badges */}
          <div
            className="flex flex-wrap items-center justify-center gap-x-5 sm:gap-x-8 gap-y-3 text-sm text-white/40 animate-fade-up"
            style={{ animationDelay: "200ms", animationFillMode: "forwards" }}
          >
            {trustBadges.map((badge, index) => (
              <div key={index} className="flex items-center gap-2 transition-colors hover:text-white/60">
                <badge.icon className="w-4 h-4 text-primary/70" />
                <span className="font-medium">{badge.text}</span>
              </div>
            ))}
          </div>

          {/* Urgency Message */}
          <div
            className="mt-10 animate-fade-up"
            style={{ animationDelay: "250ms", animationFillMode: "forwards" }}
          >
            <p className="inline-flex items-center gap-2 text-sm text-white/50 px-4 py-2 rounded-full bg-white/[0.02] border border-white/5">
              <ShoppingCart className="w-4 h-4 text-primary" />
              Las primeras 100 tiendas reciben{" "}
              <span className="font-semibold text-primary">50% off por 12 meses</span>
            </p>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={scrollToFeatures}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/30 hover:text-white/60 transition-colors animate-fade-up cursor-pointer"
        style={{ animationDelay: "350ms", animationFillMode: "forwards" }}
      >
        <span className="text-xs font-medium tracking-widest uppercase">Descubre más</span>
        <ChevronDown className="w-5 h-5 animate-float" />
      </button>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[hsl(240,10%,4%)] via-[hsl(240,10%,4%)]/80 to-transparent pointer-events-none" />
    </section>
  );
}
