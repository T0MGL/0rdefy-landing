import { SpotlightCard } from "@/components/ui/spotlight-card";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { cn } from "@/lib/utils";
import {
  Cpu,
  TrendingUp,
  Truck,
  ShoppingBag,
  Package,
  ScanLine,
} from "lucide-react";

const features = [
  {
    icon: Cpu,
    title: "Todo en un solo lugar",
    description:
      "Olvídate de tener 5 apps abiertas. Acá ves todos tus pedidos, tu stock y tus envíos. Simple.",
    large: true,
    highlights: ["Pedidos", "Stock", "Clientes", "Envíos"],
  },
  {
    icon: ScanLine,
    title: "Entrega con QR",
    description:
      "Tu repartidor escanea el QR de la etiqueta, marca como entregado, y vos ves al instante en tu panel cuánto vendiste, cuánto costó el delivery y qué courier rindió mejor.",
    large: true,
    highlights: ["Escaneo rápido", "Tracking real", "Costos automáticos"],
  },
  {
    icon: Truck,
    title: "Etiquetas de Envío",
    description:
      "Generá etiquetas térmicas 4x6 con un click. Incluyen QR de tracking para que el repartidor confirme la entrega desde su celular.",
    highlights: ["Etiquetas 4x6", "QR incluido", "Impresión rápida"],
  },
  {
    icon: TrendingUp,
    title: "Métricas Claras",
    description:
      "Sabé cuánto vendiste, cuánto te costó cada delivery y cuál es tu margen real. Sin Excel, sin fórmulas.",
    highlights: ["Ventas", "Costos delivery", "Margen real"],
  },
  {
    icon: ShoppingBag,
    title: "Conecta tu Shopify",
    description:
      "Importá tus productos y pedidos desde Shopify. Se sincroniza automáticamente.",
    highlights: ["Importación fácil", "Sync automático", "Sin copiar y pegar"],
  },
  {
    icon: Package,
    title: "Picking y Packing",
    description:
      "Tu equipo de bodega procesa pedidos en lote. Menos errores, más velocidad.",
    highlights: ["Lotes de pedidos", "Menos errores", "Más rápido"],
  },
];

export function FeatureGrid() {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section id="features" className="relative py-24 md:py-32 bg-[hsl(240,10%,4%)] z-10">
      {/* Subtle top glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/5 blur-[150px] pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div
          ref={ref}
          className={cn(
            "text-center mb-16 md:mb-20 transition-all duration-700",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          )}
        >
          <p className="text-primary font-medium text-sm tracking-wider uppercase mb-4">
            Qué hace Ordefy
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium text-white mb-6 tracking-tight">
            Gestioná tu negocio{" "}
            <span className="text-primary">sin complicaciones</span>
          </h2>
          <p className="text-lg text-white/50 max-w-2xl mx-auto font-normal">
            Conectá tu tienda, controlá tu stock, despachá pedidos y
            sabé exactamente cuánto te costó cada entrega.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {features.map((feature, index) => (
            <SpotlightCard
              key={index}
              className={cn(
                "p-6 md:p-8 transition-all duration-700 group",
                feature.large && "lg:col-span-2"
              )}
              style={{
                transitionDelay: isVisible ? `${index * 100}ms` : "0ms",
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateY(0)" : "translateY(20px)",
              }}
            >
              {/* Icon */}
              <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>

              {/* Content */}
              <h3 className="text-xl md:text-2xl font-medium text-white mb-3 tracking-tight">
                {feature.title}
              </h3>
              <p className="text-white/50 leading-relaxed mb-5">
                {feature.description}
              </p>

              {/* Highlights */}
              {feature.highlights && (
                <div className="flex flex-wrap gap-2">
                  {feature.highlights.map((highlight, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 text-xs font-medium text-primary/80 bg-primary/10 rounded-full border border-primary/10"
                    >
                      {highlight}
                    </span>
                  ))}
                </div>
              )}
            </SpotlightCard>
          ))}
        </div>
      </div>
    </section>
  );
}
