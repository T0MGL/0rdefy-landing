import { AnimatedCounter } from "@/components/ui/animated-counter";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { cn } from "@/lib/utils";
import { TrendingUp, Package, Timer } from "lucide-react";

const stats = [
  {
    icon: TrendingUp,
    value: 150,
    prefix: "+",
    suffix: "",
    label: "Negocios en lista",
    subtext: "y contando",
  },
  {
    icon: Package,
    value: 50,
    prefix: "",
    suffix: "K+",
    label: "Pedidos proyectados",
    subtext: "primer año",
  },
  {
    icon: Timer,
    value: 10,
    prefix: "",
    suffix: "x",
    label: "Más rápido",
    subtext: "que métodos manuales",
  },
];

export function SocialProof() {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 });

  return (
    <section className="relative py-24 md:py-32 bg-[hsl(240,10%,5%)] overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        {/* Gradient orb */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[200px]" />
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main Statement */}
        <div
          ref={ref}
          className={cn(
            "text-center mb-20 transition-all duration-700",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          )}
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light text-white mb-6 tracking-tight leading-[1.1]">
            El futuro del
            <br />
            <span className="relative">
              <span className="text-primary font-normal">e-commerce</span>
              {/* Underline accent */}
              <span className="absolute -bottom-2 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-primary to-transparent opacity-60" />
            </span>
            <br />
            en Latinoamérica
          </h2>
          <p className="text-lg md:text-xl text-white/40 max-w-2xl mx-auto mt-8">
            Estamos construyendo las herramientas que miles de negocios usarán
            para escalar sus operaciones.
          </p>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-4 max-w-5xl mx-auto">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={cn(
                "relative group transition-all duration-700",
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              )}
              style={{
                transitionDelay: isVisible ? `${200 + index * 100}ms` : "0ms",
              }}
            >
              <div className="relative p-8 md:p-10 rounded-3xl bg-white/[0.02] border border-white/5 backdrop-blur-sm transition-all duration-500 hover:border-primary/20 hover:bg-white/[0.03]">
                {/* Glow on hover */}
                <div className="absolute inset-0 rounded-3xl bg-primary/5 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Content */}
                <div className="relative text-center">
                  {/* Icon */}
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-primary/10 border border-primary/20 mb-6 transition-transform duration-300 group-hover:scale-110">
                    <stat.icon className="w-7 h-7 text-primary" />
                  </div>

                  {/* Number */}
                  <AnimatedCounter
                    value={stat.value}
                    prefix={stat.prefix}
                    suffix={stat.suffix}
                    className="text-5xl md:text-6xl font-light text-white mb-2 tracking-tight"
                  />

                  {/* Label */}
                  <p className="text-base text-white/60 font-medium mb-1">
                    {stat.label}
                  </p>
                  <p className="text-sm text-white/30">{stat.subtext}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Quote */}
        <div
          className={cn(
            "mt-20 text-center transition-all duration-700",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          )}
          style={{ transitionDelay: "600ms" }}
        >
          <blockquote className="relative">
            <span className="absolute -top-8 left-1/2 -translate-x-1/2 text-8xl text-primary/10 font-serif">
              "
            </span>
            <p className="text-xl md:text-2xl text-white/50 font-light italic max-w-3xl mx-auto leading-relaxed">
              Cada día que pasa sin organizar tu operación, es dinero que dejas
              en la mesa.
            </p>
          </blockquote>
        </div>
      </div>
    </section>
  );
}
