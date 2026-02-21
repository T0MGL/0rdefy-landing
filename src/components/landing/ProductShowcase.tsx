import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { cn } from "@/lib/utils";
import { useState } from "react";

const showcaseItems = [
  {
    id: "dashboard",
    title: "Centro de Control",
    description: "Vista general de pedidos, métricas y acciones rápidas",
    image: "/screenshots/dashboard.png",
  },
  {
    id: "orders",
    title: "Gestión de Pedidos",
    description: "Confirma, procesa y despacha pedidos en segundos",
    image: "/screenshots/orders.png",
  },
  {
    id: "shipping",
    title: "Coordinación de Envíos",
    description: "Selecciona couriers y genera etiquetas térmicas",
    image: "/screenshots/shipping.png",
  },
];

export function ProductShowcase() {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });
  const [activeTab, setActiveTab] = useState("dashboard");
  const [imageError, setImageError] = useState<Record<string, boolean>>({});

  const activeItem = showcaseItems.find((item) => item.id === activeTab);

  return (
    <section className="relative py-24 md:py-32 bg-[hsl(240,10%,4%)] overflow-hidden z-10">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,hsl(84_81%_63%/0.03),transparent_70%)]" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div
          ref={ref}
          className={cn(
            "text-center mb-12 md:mb-16 transition-all duration-700",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          )}
        >
          <p className="text-primary font-medium text-sm tracking-wider uppercase mb-4">
            Plataforma
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium text-white mb-6 tracking-tight">
            Diseñado para{" "}
            <span className="text-primary">operaciones reales</span>
          </h2>
          <p className="text-lg text-white/50 max-w-2xl mx-auto font-normal">
            Una interfaz que tu equipo amará usar. Sin curva de aprendizaje,
            máxima productividad desde el día uno.
          </p>
        </div>

        {/* Tab Navigation */}
        <div
          className={cn(
            "flex flex-wrap justify-center gap-2 mb-10 transition-all duration-700",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          )}
          style={{ transitionDelay: "100ms" }}
        >
          {showcaseItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={cn(
                "px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300",
                activeTab === item.id
                  ? "bg-primary text-black shadow-[0_0_20px_rgba(186,234,89,0.3)]"
                  : "bg-white/5 text-white/60 hover:bg-white/10 hover:text-white"
              )}
            >
              {item.title}
            </button>
          ))}
        </div>

        {/* Product Preview */}
        <div
          className={cn(
            "relative max-w-6xl mx-auto transition-all duration-700",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          )}
          style={{ transitionDelay: "200ms" }}
        >
          {/* Browser Frame */}
          <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-[hsl(240,10%,6%)] shadow-2xl shadow-black/50">
            {/* Browser Header */}
            <div className="flex items-center gap-2 px-4 py-3 bg-[hsl(240,10%,8%)] border-b border-white/5">
              {/* Traffic lights */}
              <div className="flex items-center gap-1.5">
                <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
                <div className="w-3 h-3 rounded-full bg-[#febc2e]" />
                <div className="w-3 h-3 rounded-full bg-[#28c840]" />
              </div>
              {/* URL Bar */}
              <div className="flex-1 mx-4">
                <div className="max-w-md mx-auto px-4 py-1.5 rounded-lg bg-[hsl(240,10%,12%)] text-white/30 text-sm text-center">
                  app.ordefy.com
                </div>
              </div>
              {/* Spacer for symmetry */}
              <div className="w-14" />
            </div>

            {/* Content Area */}
            <div className="relative aspect-[16/10] bg-[hsl(240,10%,6%)]">
              {/* Screenshot or Placeholder */}
              {activeItem && !imageError[activeItem.id] ? (
                <img
                  src={activeItem.image}
                  alt={activeItem.title}
                  className="w-full h-full object-cover object-top"
                  onError={() =>
                    setImageError((prev) => ({
                      ...prev,
                      [activeItem.id]: true,
                    }))
                  }
                />
              ) : (
                /* Premium Placeholder */
                <div className="absolute inset-0 flex items-center justify-center">
                  {/* Grid Pattern */}
                  <div
                    className="absolute inset-0 opacity-[0.03]"
                    style={{
                      backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                                       linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
                      backgroundSize: "40px 40px",
                    }}
                  />

                  {/* Center Glow */}
                  <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,hsl(84_81%_63%/0.08),transparent_60%)]" />

                  {/* Placeholder Content */}
                  <div className="relative z-10 text-center px-8">
                    <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center">
                      <svg
                        className="w-10 h-10 text-primary/60"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"
                        />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-medium text-white mb-2">
                      {activeItem?.title}
                    </h3>
                    <p className="text-white/40 max-w-md">
                      {activeItem?.description}
                    </p>
                    <p className="mt-6 text-xs text-white/20 uppercase tracking-wider">
                      Screenshot disponible pronto
                    </p>
                  </div>
                </div>
              )}

              {/* Gradient Overlay at Bottom */}
              <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[hsl(240,10%,6%)] to-transparent pointer-events-none" />
            </div>
          </div>

          {/* Glow Effect Behind */}
          <div className="absolute -inset-4 bg-primary/5 blur-3xl rounded-3xl -z-10" />

          {/* Reflection */}
          <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-3/4 h-20 bg-gradient-to-b from-primary/10 to-transparent blur-2xl opacity-50" />
        </div>

        {/* Feature Description */}
        {activeItem && (
          <div
            className={cn(
              "mt-12 text-center transition-all duration-500"
            )}
          >
            <p className="text-white/60 max-w-xl mx-auto">
              {activeItem.description}
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
