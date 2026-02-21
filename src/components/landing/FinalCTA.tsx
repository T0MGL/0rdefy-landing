import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { cn } from "@/lib/utils";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { useState } from "react";

interface FinalCTAProps {
  onEmailSubmit: (email: string) => void;
}

const benefits = [
  "Setup en 5 minutos",
  "Sin tarjeta de crédito",
  "Soporte en español",
  "Cancela cuando quieras",
];

export function FinalCTA({ onEmailSubmit }: FinalCTAProps) {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 });
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;

    setIsLoading(true);
    setTimeout(() => {
      onEmailSubmit(email);
      setIsLoading(false);
    }, 300);
  };

  return (
    <section className="relative py-16 md:py-28 lg:py-40 overflow-hidden z-10">
      {/* Background */}
      <div className="absolute inset-0 bg-[hsl(240,10%,4%)]" />

      {/* Gradient effects */}
      <div className="absolute inset-0">
        {/* Main glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[500px] bg-primary/10 rounded-full blur-[200px]" />
        {/* Side accents */}
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[150px]" />
      </div>

      {/* Border line top */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div
          ref={ref}
          className={cn(
            "max-w-4xl mx-auto text-center transition-all duration-700",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          )}
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            <span className="text-sm font-medium text-primary">
              Plazas Limitadas
            </span>
          </div>

          {/* Headline */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-white mb-6 tracking-tight">
            Dejá de perder tiempo
            <br />
            <span className="text-primary font-normal">
              con planillas y WhatsApp
            </span>
          </h2>

          {/* Subtext */}
          <p className="text-lg md:text-xl text-white/50 mb-12 max-w-2xl mx-auto leading-relaxed">
            Probá Ordefy gratis.{" "}
            <span className="text-primary font-medium">Las primeras 100 tiendas reciben 50% off por 12 meses.</span>
          </p>

          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className={cn(
              "flex flex-col sm:flex-row gap-4 max-w-xl mx-auto mb-10 transition-all duration-700",
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-6"
            )}
            style={{ transitionDelay: "200ms" }}
          >
            <div className="flex-1 relative group">
              <Input
                type="email"
                placeholder="tu@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full h-14 bg-white/[0.03] border-white/10 text-white placeholder:text-white/30 focus:border-primary/50 focus:ring-2 focus:ring-primary/20 rounded-xl text-base backdrop-blur-sm transition-all duration-300 group-hover:border-white/20"
              />
              {/* Input glow */}
              <div className="absolute inset-0 rounded-xl bg-primary/10 blur-xl opacity-0 group-focus-within:opacity-100 transition-opacity duration-500 -z-10" />
            </div>
            <Button
              type="submit"
              variant="premium"
              size="xl"
              disabled={isLoading}
              className="group whitespace-nowrap"
            >
              {isLoading ? (
                "Procesando..."
              ) : (
                <>
                  Reservar Mi Lugar
                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </>
              )}
            </Button>
          </form>

          {/* Benefits */}
          <div
            className={cn(
              "flex flex-wrap justify-center gap-x-8 gap-y-3 transition-all duration-700",
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-6"
            )}
            style={{ transitionDelay: "300ms" }}
          >
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="flex items-center gap-2 text-sm text-white/40"
              >
                <CheckCircle2 className="w-4 h-4 text-primary/60" />
                <span>{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
