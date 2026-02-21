import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { cn } from "@/lib/utils";
import {
  FileSpreadsheet,
  Package,
  Link2Off,
  Users,
  BarChart3,
  Check,
  ArrowRight,
  Minus,
} from "lucide-react";

const painPoints = [
  {
    icon: Package,
    headline: "Vendés lo que no tenés",
    agitate: "El stock de Shopify nunca coincide con tu bodega.",
    impact: "Clientes enojados y plata perdida en reembolsos",
  },
  {
    icon: FileSpreadsheet,
    headline: "No sabés cuánto te debe el courier",
    agitate: "Entre planillas y WhatsApp, perdés la cuenta.",
    impact: "Horas perdidas cuadrando números",
  },
  {
    icon: BarChart3,
    headline: "¿Entregó o no entregó?",
    agitate: "Tenés que llamar al repartidor para saber si llegó.",
    impact: "Cero visibilidad de tus entregas",
  },
  {
    icon: Link2Off,
    headline: "Copy-paste de pedidos",
    agitate: "Copiás pedidos de Shopify a mano.",
    impact: "Errores, pedidos duplicados, caos",
  },
  {
    icon: Users,
    headline: "¿Cuánto te costó el delivery?",
    agitate: "Recién a fin de mes sacás las cuentas.",
    impact: "No sabés si estás ganando o perdiendo",
  },
];

export function ProblemSection() {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section className="relative py-24 md:py-32 bg-[hsl(240,10%,4%)] overflow-hidden z-10">
      {/* Subtle background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-white/[0.01] rounded-full blur-[150px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-primary/[0.02] rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div
          ref={ref}
          className={cn(
            "text-center mb-16 md:mb-20 transition-all duration-700",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          )}
        >
          <p className="text-white/40 font-medium text-sm tracking-wider uppercase mb-4">
            ¿Te suena familiar?
          </p>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-white mb-6 tracking-tight">
            Problemas comunes
            <br />
            <span className="text-white/40">que Ordefy resuelve</span>
          </h2>

          <p className="text-lg md:text-xl text-white/40 max-w-2xl mx-auto leading-relaxed">
            Si tenés una tienda online y despachás pedidos,
            <span className="text-white/60"> seguro pasás por esto todos los días.</span>
          </p>
        </div>

        {/* Pain Points Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5 max-w-6xl mx-auto mb-20">
          {painPoints.map((pain, index) => (
            <div
              key={index}
              className={cn(
                "group relative transition-all duration-700",
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10",
                index === 4 && "lg:col-start-2"
              )}
              style={{
                transitionDelay: isVisible ? `${200 + index * 100}ms` : "0ms",
              }}
            >
              <div className="relative p-6 md:p-8 rounded-2xl bg-white/[0.02] border border-white/[0.06] transition-all duration-500 hover:border-white/10 hover:bg-white/[0.03] h-full">
                <div className="relative">
                  {/* Icon */}
                  <div className="w-11 h-11 rounded-xl bg-white/[0.05] border border-white/[0.08] flex items-center justify-center mb-5 transition-all duration-300 group-hover:bg-white/[0.08] group-hover:border-white/10">
                    <pain.icon className="w-5 h-5 text-white/50 group-hover:text-white/70 transition-colors" />
                  </div>

                  {/* Headline */}
                  <h3 className="text-lg md:text-xl font-medium text-white mb-2 tracking-tight">
                    {pain.headline}
                  </h3>

                  {/* Agitate - the emotional punch */}
                  <p className="text-white/60 font-medium mb-3">
                    "{pain.agitate}"
                  </p>

                  {/* Impact */}
                  <p className="text-sm text-white/35 leading-relaxed">
                    {pain.impact}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Transition / Solution Hint */}
        <div
          className={cn(
            "relative max-w-4xl mx-auto transition-all duration-700",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          )}
          style={{ transitionDelay: "900ms" }}
        >
          {/* Visual transformation line */}
          <div className="flex items-center justify-center gap-6 mb-12">
            <div className="flex-1 h-px bg-gradient-to-r from-transparent to-white/10" />
            <div className="relative">
              <div className="w-12 h-12 rounded-full bg-white/[0.03] border border-white/10 flex items-center justify-center">
                <ArrowRight className="w-5 h-5 text-white/40" />
              </div>
            </div>
            <div className="flex-1 h-px bg-gradient-to-l from-transparent to-white/10" />
          </div>

          {/* The pivot */}
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-light text-white mb-4">
              ¿Y si todo esto{" "}
              <span className="text-primary font-normal">simplemente funcionara</span>?
            </h3>
            <p className="text-white/45 max-w-xl mx-auto leading-relaxed">
              Un solo lugar donde pedidos, inventario y envíos fluyen sin fricción.
              Sin Excel. Sin caos. Sin sorpresas.
            </p>
          </div>

          {/* Before/After mini comparison */}
          <div className="grid grid-cols-2 gap-4 md:gap-6">
            {/* Before */}
            <div className="relative p-5 md:p-6 rounded-2xl bg-white/[0.02] border border-white/[0.06]">
              <div className="text-xs font-medium text-white/30 uppercase tracking-wider mb-5">
                Hoy
              </div>
              <ul className="space-y-3">
                {["5 apps diferentes", "Datos duplicados", "Errores constantes", "Estrés diario"].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm text-white/40">
                    <Minus className="w-3.5 h-3.5 text-white/25 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* After */}
            <div className="relative p-5 md:p-6 rounded-2xl bg-primary/[0.03] border border-primary/10">
              <div className="text-xs font-medium text-primary/60 uppercase tracking-wider mb-5">
                Con Ordefy
              </div>
              <ul className="space-y-3">
                {["Una plataforma", "Datos sincronizados", "Procesos automáticos", "Paz mental"].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm text-white/60">
                    <Check className="w-4 h-4 text-primary/70 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom gradient transition */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[hsl(240,10%,4%)] to-transparent pointer-events-none" />
    </section>
  );
}
