import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { cn } from "@/lib/utils";
import { Check, ArrowRight } from "lucide-react";

const comparisons = [
  {
    category: "Gestión de datos",
    before: "Excel + WhatsApp + 5 apps",
    after: "Todo en un lugar",
  },
  {
    category: "Control de stock",
    before: "Stock manual, vendés lo que no tenés",
    after: "Stock automático en tiempo real",
  },
  {
    category: "Tracking de entregas",
    before: "Llamar al repartidor para saber si entregó",
    after: "QR scan → actualización instantánea",
  },
  {
    category: "Costos de delivery",
    before: "No sabés cuánto te costó cada envío",
    after: "Costos automáticos por pedido",
  },
  {
    category: "Warehouse",
    before: "Armar pedidos de memoria",
    after: "Picking guiado paso a paso",
  },
  {
    category: "Integración Shopify",
    before: "Copiar y pegar pedidos manualmente",
    after: "Sync automático bidireccional",
  },
  {
    category: "Analíticas",
    before: "Sacar cuentas a fin de mes",
    after: "Métricas en tiempo real",
  },
  {
    category: "Mercado objetivo",
    before: "Sistemas pensados para USA/EU",
    after: "Hecho para LATAM desde el día 1",
  },
];

export function ComparisonSection() {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section className="relative py-24 md:py-32 bg-[hsl(240,10%,5%)] overflow-hidden z-10">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-primary/[0.02] rounded-full blur-[200px]" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div
          ref={ref}
          className={cn(
            "text-center mb-16 transition-all duration-700",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          )}
        >
          <p className="text-primary font-medium text-sm tracking-wider uppercase mb-4">
            Comparación
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium text-white mb-6 tracking-tight">
            ¿Por qué <span className="text-primary">Ordefy</span>?
          </h2>
          <p className="text-lg text-white/50 max-w-2xl mx-auto">
            Lo que nos hace diferentes de las alternativas tradicionales.
          </p>
        </div>

        {/* Comparison Cards */}
        <div
          className={cn(
            "max-w-5xl mx-auto transition-all duration-700",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          )}
          style={{ transitionDelay: "200ms" }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {comparisons.map((row, index) => (
              <div
                key={index}
                className="group relative p-6 rounded-2xl bg-white/[0.02] border border-white/[0.06] hover:border-primary/20 transition-all duration-300"
                style={{
                  transitionDelay: isVisible ? `${300 + index * 50}ms` : "0ms",
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? "translateY(0)" : "translateY(10px)",
                }}
              >
                {/* Category Label */}
                <p className="text-xs font-medium text-primary/70 uppercase tracking-wider mb-4">
                  {row.category}
                </p>

                {/* Before → After */}
                <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-3">
                  {/* Before */}
                  <div className="sm:flex-1">
                    <p className="text-sm text-white/50 line-through decoration-white/20">
                      {row.before}
                    </p>
                  </div>

                  {/* Arrow */}
                  <div className="shrink-0 w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-primary/10 flex items-center justify-center">
                    <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 text-primary" />
                  </div>

                  {/* After */}
                  <div className="sm:flex-1">
                    <div className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-primary shrink-0" />
                      <p className="text-sm text-white font-medium">
                        {row.after}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div
          className={cn(
            "mt-16 text-center transition-all duration-700",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          )}
          style={{ transitionDelay: "800ms" }}
        >
          <div className="inline-flex flex-col sm:flex-row items-center gap-5 p-6 rounded-2xl bg-white/[0.02] border border-white/[0.06]">
            <div className="text-center sm:text-left">
              <p className="text-white font-medium mb-1">
                ¿Cansado de las soluciones genéricas?
              </p>
              <p className="text-sm text-white/45">
                Prueba una plataforma diseñada específicamente para tu realidad.
              </p>
            </div>
            <a
              href="#how-it-works"
              className="flex items-center gap-2 px-6 py-3 rounded-xl bg-primary text-black font-medium text-sm hover:bg-primary/90 transition-colors group"
            >
              Ver cómo funciona
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
