import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { cn } from "@/lib/utils";
import {
  ShoppingCart,
  CheckCircle2,
  Package,
  Truck,
  ScanLine,
  TrendingUp,
  Rocket,
  Plug,
  Database,
  BarChart3,
  Users,
  ArrowRight,
} from "lucide-react";

const steps = [
  {
    number: "01",
    icon: ShoppingCart,
    title: "Llega el pedido",
    description:
      "Desde Shopify, WhatsApp o manualmente. Se crea automáticamente con QR de tracking y link de confirmación.",
    details: ["Auto-genera QR único", "Link de seguimiento", "Notificación WhatsApp"],
    highlight: "Automático",
  },
  {
    number: "02",
    icon: CheckCircle2,
    title: "Cliente confirma",
    description:
      "Enviás WhatsApp o llamás. Cliente confirma datos. El pedido pasa a cola de preparación.",
    details: ["Confirmación WhatsApp", "Validación de datos", "Cola automática"],
    highlight: "Confirmación",
  },
  {
    number: "03",
    icon: Package,
    title: "Picking & Packing",
    description:
      "Tu equipo de bodega procesa pedidos en lote. El sistema agrupa productos y guía el armado. Stock se descuenta al completar.",
    details: ["Procesamiento batch", "Guía de armado", "Stock automático"],
    highlight: "Warehouse",
  },
  {
    number: "04",
    icon: Truck,
    title: "Despacho",
    description:
      "Agrupás por courier, imprimís etiquetas térmicas con QR y entregás. Exportás CSV para el repartidor.",
    details: ["Etiquetas 4x6\"", "QR tracking", "Export CSV"],
    highlight: "Logística",
  },
  {
    number: "05",
    icon: ScanLine,
    title: "Entrega con QR",
    description:
      "El repartidor escanea el QR, confirma entrega con foto y método de pago. Todo se registra al instante.",
    details: ["Escaneo QR", "Foto de prueba", "Timestamp real"],
    highlight: "Tracking",
  },
  {
    number: "06",
    icon: TrendingUp,
    title: "Análisis y liquidación",
    description:
      "Importás resultados del courier. Sistema calcula COD, comisiones y saldo. Ves métricas en vivo.",
    details: ["Cálculo automático", "Analytics real-time", "Reportes"],
    highlight: "Finanzas",
  },
];

const modules = [
  {
    icon: Database,
    title: "Inventario Inteligente",
    description: "Stock se actualiza automáticamente. Alertas de bajo inventario. Trazabilidad completa.",
  },
  {
    icon: BarChart3,
    title: "Analytics en Vivo",
    description: "Dashboard con ventas, costos, margen y ROI calculados en tiempo real. Comparaciones período a período.",
  },
  {
    icon: Users,
    title: "Multi-usuario",
    description: "6 roles predefinidos: Owner, Admin, Logística, Confirmador, Contador, Inventario. Permisos granulares.",
  },
  {
    icon: Plug,
    title: "Integraciones",
    description: "Sincronización con Shopify. Contacto directo por WhatsApp con un clic.",
  },
];

export function HowItWorks() {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation({ threshold: 0.1 });
  const { ref: stepsRef, isVisible: stepsVisible } = useScrollAnimation({ threshold: 0.05 });
  const { ref: modulesRef, isVisible: modulesVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section id="how-it-works" className="relative py-24 md:py-32 bg-[hsl(240,10%,6%)] overflow-hidden z-10">
      {/* Background accent */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,hsl(84_81%_63%/0.05),transparent_50%)]" />

      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '80px 80px',
        }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div
          ref={headerRef}
          className={cn(
            "text-center mb-16 md:mb-24 transition-all duration-700",
            headerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          )}
        >
          <p className="text-primary font-medium text-sm tracking-wider uppercase mb-4">
            Cómo funciona
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium text-white mb-6 tracking-tight">
            Del pedido a la entrega,{" "}
            <span className="text-primary">sin fricción</span>
          </h2>
          <p className="text-lg text-white/50 max-w-2xl mx-auto font-normal">
            Un flujo completo diseñado para e-commerce paraguayo.{" "}
            <span className="text-white/70">Desde la integración con Shopify hasta la liquidación con couriers.</span>
          </p>
        </div>

        {/* Journey Steps */}
        <div ref={stepsRef} className="relative max-w-7xl mx-auto mb-16 md:mb-32">
          {/* Connecting line - desktop only */}
          <div className="hidden xl:block absolute top-[60px] left-[8%] right-[8%] h-[2px]">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
            {/* Animated beam */}
            <div className="absolute inset-0 overflow-hidden">
              <div className="h-full w-1/3 bg-gradient-to-r from-transparent via-primary/60 to-transparent animate-beam" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 lg:gap-x-12 lg:gap-y-16">
            {steps.map((step, index) => (
              <div
                key={index}
                className={cn(
                  "relative group transition-all duration-700",
                  stepsVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                )}
                style={{
                  transitionDelay: stepsVisible ? `${index * 100}ms` : "0ms",
                }}
              >
                {/* Card */}
                <div className="relative h-full p-6 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-primary/30 hover:bg-white/[0.04] transition-all duration-500">
                  {/* Step number badge - top right */}
                  <div className="absolute -top-3 -right-3 w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/20 flex items-center justify-center shadow-lg">
                    <span className="text-lg font-bold text-primary">{step.number}</span>
                  </div>

                  {/* Highlight badge - top left */}
                  <div className="mb-4">
                    <span className="inline-block px-3 py-1 text-xs font-bold text-primary/80 bg-primary/10 rounded-full border border-primary/20">
                      {step.highlight}
                    </span>
                  </div>

                  {/* Icon */}
                  <div className="relative inline-flex mb-5">
                    <div className="w-14 h-14 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                      <step.icon className="w-7 h-7 text-primary" />
                    </div>
                    {/* Glow effect */}
                    <div className="absolute inset-0 rounded-xl bg-primary/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-medium text-white mb-3 tracking-tight">
                    {step.title}
                  </h3>
                  <p className="text-white/50 text-sm leading-relaxed mb-5">
                    {step.description}
                  </p>

                  {/* Details list */}
                  <div className="space-y-2">
                    {step.details.map((detail, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-white/40">
                        <div className="w-1 h-1 rounded-full bg-primary/60" />
                        <span>{detail}</span>
                      </div>
                    ))}
                  </div>

                  {/* Arrow connector for mobile */}
                  {index < steps.length - 1 && (
                    <div className="md:hidden absolute -bottom-10 left-1/2 -translate-x-1/2 text-white/10">
                      <ArrowRight className="w-5 h-5 rotate-90" />
                    </div>
                  )}

                  {/* Hover glow */}
                  <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-500 -z-10" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Key Modules Section */}
        <div
          ref={modulesRef}
          className="max-w-6xl mx-auto"
        >
          <div
            className={cn(
              "text-center mb-12 transition-all duration-700",
              modulesVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            )}
          >
            <p className="text-primary font-medium text-sm tracking-wider uppercase mb-3">
              Módulos Clave
            </p>
            <h2 className="text-3xl md:text-4xl font-medium text-white mb-4 tracking-tight">
              Todo lo que necesitás,{" "}
              <span className="text-primary">en un solo lugar</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {modules.map((module, index) => (
              <div
                key={index}
                className={cn(
                  "relative group p-6 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-primary/30 hover:bg-white/[0.04] transition-all duration-500"
                )}
                style={{
                  transitionDelay: modulesVisible ? `${index * 100}ms` : "0ms",
                  opacity: modulesVisible ? 1 : 0,
                  transform: modulesVisible ? "translateY(0)" : "translateY(20px)",
                }}
              >
                {/* Icon */}
                <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110">
                  <module.icon className="w-6 h-6 text-primary" />
                </div>

                {/* Content */}
                <h3 className="text-lg font-medium text-white mb-2 tracking-tight">
                  {module.title}
                </h3>
                <p className="text-sm text-white/50 leading-relaxed">
                  {module.description}
                </p>

                {/* Hover glow */}
                <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-500 -z-10" />
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA hint */}
        <div className="text-center mt-20">
          <div
            className={cn(
              "inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white/5 border border-white/10 text-white/60 transition-all duration-700",
              modulesVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            )}
            style={{ transitionDelay: "400ms" }}
          >
            <Rocket className="w-4 h-4 text-primary" />
            <span className="text-sm">
              Todo esto funciona <span className="text-white font-medium">desde el día uno</span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
