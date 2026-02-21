import { Navigation } from "@/components/landing/Navigation";
import { Footer } from "@/components/landing/Footer";
import { SpotlightCard } from "@/components/ui/spotlight-card";
import { GradientText } from "@/components/ui/gradient-text";
import { MeshGradient } from "@/components/ui/mesh-gradient";
import { AnimatedCounter } from "@/components/ui/animated-counter";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { cn } from "@/lib/utils";
import {
  Cpu,
  TrendingUp,
  Truck,
  ShoppingBag,
  Package,
  ScanLine,
  Zap,
  Shield,
  Bell,
  Smartphone,
  BarChart3,
  Users,
  Download,
  Repeat,
  FileCheck,
  Boxes,
  Calculator,
  CheckCircle,
  ArrowRight,
  Sparkles,
  Clock,
  Target,
  TrendingDown,
} from "lucide-react";

// Stats data
const stats = [
  {
    value: 8,
    suffix: "+",
    label: "Horas ahorradas semanalmente",
    icon: Clock,
  },
  {
    value: 95,
    suffix: "%",
    label: "Precisión en picking",
    icon: Target,
  },
  {
    value: 40,
    suffix: "%",
    label: "Reducción en costos operativos",
    icon: TrendingDown,
  },
  {
    value: 100,
    suffix: "+",
    label: "Tiendas confiando en Ordefy",
    icon: Sparkles,
  },
];

const heroFeatures = [
  {
    icon: Cpu,
    title: "Todo en un solo lugar",
    description:
      "Unifica pedidos, stock, clientes y envíos en una sola plataforma. Dejá de perder tiempo saltando entre 5 apps diferentes.",
    highlights: ["Vista unificada", "Sincronización real-time", "Acceso desde cualquier dispositivo"],
    large: true,
  },
  {
    icon: ScanLine,
    title: "Entrega con QR",
    description:
      "Tu repartidor escanea el QR desde su celular, confirma la entrega, y automáticamente ves el costo real del delivery en tu dashboard.",
    highlights: ["Escaneo instantáneo", "Tracking en vivo", "Costos automáticos"],
    large: true,
  },
];

const coreFeatures = [
  {
    icon: Truck,
    title: "Etiquetas de Envío",
    description:
      "Generá etiquetas térmicas 4x6\" profesionales con un click. Cada etiqueta incluye QR de tracking para confirmación instantánea de entrega.",
    highlights: ["Formato 4x6\"", "QR integrado", "Impresión batch"],
  },
  {
    icon: TrendingUp,
    title: "Métricas en Tiempo Real",
    description:
      "Dashboard inteligente con ventas diarias, costos de delivery por courier y margen de ganancia real. Todo calculado automáticamente.",
    highlights: ["Dashboard en vivo", "KPIs automáticos", "Reportes exportables"],
  },
  {
    icon: ShoppingBag,
    title: "Integración Shopify",
    description:
      "Conectá tu tienda Shopify en un click. Importá productos, clientes y pedidos. Sincronización bidireccional en tiempo real.",
    highlights: ["Setup 1-click", "Sync bidireccional", "Webhooks automáticos"],
  },
  {
    icon: Package,
    title: "Picking & Packing",
    description:
      "Sistema de bodega por lotes. Tu equipo procesa múltiples pedidos simultáneamente con verificación por escaneo. Menos errores, más velocidad.",
    highlights: ["Procesamiento por lotes", "Verificación QR", "Hasta 3x más rápido"],
  },
  {
    icon: Boxes,
    title: "Inventario Inteligente",
    description:
      "Control de stock en tiempo real con alertas automáticas de bajo inventario. Movimientos registrados automáticamente en cada operación.",
    highlights: ["Stock en vivo", "Alertas inteligentes", "Trazabilidad completa"],
  },
  {
    icon: Users,
    title: "CRM Integrado",
    description:
      "Base de datos completa de tus clientes con historial de compras, preferencias, notas y segmentación automática por comportamiento.",
    highlights: ["Historial completo", "Segmentación auto", "Notas personalizadas"],
  },
];

const advancedFeatures = [
  {
    icon: Bell,
    title: "Alertas Inteligentes",
    description:
      "Sistema de notificaciones proactivo. Te avisa de stock bajo, pedidos pendientes, retrasos en entregas y anomalías operacionales.",
    category: "Automatización",
    planBadge: "Growth+",
  },
  {
    icon: BarChart3,
    title: "Analytics Avanzados",
    description:
      "Reportes detallados con análisis de tendencias, productos top, horarios pico y predicción de demanda usando machine learning.",
    category: "Inteligencia",
    planBadge: "Growth+",
  },
  {
    icon: Repeat,
    title: "Gestión de Devoluciones",
    description:
      "Flujo completo de RMA con control de calidad integrado, ajuste automático de inventario y reportes de motivos de devolución.",
    category: "Operaciones",
    planBadge: "Starter+",
  },
  {
    icon: FileCheck,
    title: "Despacho & Liquidaciones",
    description:
      "Sesiones de despacho por transportadora con cálculo automático de COD, comisiones y liquidaciones. Exporta a Excel con un click.",
    category: "Finanzas",
    planBadge: "Growth+",
  },
  {
    icon: Calculator,
    title: "Tracking de Campañas",
    description:
      "Atribución automática de ventas a tus campañas publicitarias. Calcula ROI real por canal, campaña y producto.",
    category: "Marketing",
    planBadge: "Growth+",
  },
  {
    icon: Zap,
    title: "API REST Completa",
    description:
      "Integrá con tus sistemas internos usando nuestra API RESTful. Lectura, escritura y webhooks salientes para automatización total.",
    category: "Developers",
    planBadge: "Professional",
  },
];

const benefits = [
  {
    icon: CheckCircle,
    title: "Setup en minutos",
    description: "De cero a operativo en menos de 10 minutos. Sin instalación, sin configuración compleja.",
  },
  {
    icon: Shield,
    title: "Seguridad enterprise",
    description: "Encriptación end-to-end, backups automáticos diarios y uptime 99.9% garantizado.",
  },
  {
    icon: Smartphone,
    title: "Mobile-first",
    description: "Diseñado para móvil desde el inicio. Gestioná tu operación desde cualquier dispositivo.",
  },
  {
    icon: Download,
    title: "Migración sin fricción",
    description: "Te ayudamos a migrar tus datos desde Excel, Shopify o cualquier sistema. Sin costo extra.",
  },
];

export default function Features() {
  const { ref: heroRef, isVisible: heroVisible } = useScrollAnimation({ threshold: 0.1 });
  const { ref: statsRef, isVisible: statsVisible } = useScrollAnimation({ threshold: 0.2 });
  const { ref: coreRef, isVisible: coreVisible } = useScrollAnimation({ threshold: 0.1 });
  const { ref: advancedRef, isVisible: advancedVisible } = useScrollAnimation({ threshold: 0.1 });
  const { ref: benefitsRef, isVisible: benefitsVisible } = useScrollAnimation({ threshold: 0.1 });

  const handleCtaClick = () => {
    window.location.href = "/";
  };

  return (
    <div className="min-h-screen bg-[hsl(240,10%,4%)] relative overflow-hidden">
      {/* Background mesh gradient */}
      <MeshGradient variant="features" />

      <Navigation onCtaClick={handleCtaClick} />

      <main className="relative z-10 pt-28 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Header */}
          <div className="text-center mb-16 md:mb-24">
            <div
              className={cn(
                "transition-all duration-700",
                heroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              )}
            >
              <p className="text-primary font-medium text-sm tracking-wider uppercase mb-6">
                Características
              </p>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium text-white mb-8 tracking-tight leading-[1.1]">
                Todo lo que necesitás para{" "}
                <br className="hidden sm:block" />
                <GradientText variant="hero" className="inline-block">
                  escalar tu e-commerce
                </GradientText>
              </h1>
              <p className="text-lg md:text-xl text-white/60 max-w-3xl mx-auto leading-relaxed">
                Una plataforma completa diseñada específicamente para operaciones de e-commerce en LATAM.{" "}
                <span className="text-white/80 font-medium">Desde el primer pedido hasta la última milla.</span>
              </p>
            </div>
          </div>

          {/* Stats Section */}
          <div
            ref={statsRef}
            className="mb-32"
          >
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 max-w-6xl mx-auto">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className={cn(
                    "relative group p-6 md:p-8 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-primary/30 transition-all duration-500",
                    statsVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                  )}
                  style={{
                    transitionDelay: statsVisible ? `${index * 100}ms` : "0ms",
                  }}
                >
                  {/* Icon */}
                  <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center mb-4">
                    <stat.icon className="w-5 h-5 text-primary" />
                  </div>

                  {/* Number */}
                  <div className="flex items-baseline gap-1 mb-2">
                    <AnimatedCounter
                      value={stat.value}
                      className="text-3xl md:text-4xl font-bold text-white"
                    />
                    <span className="text-3xl md:text-4xl font-bold text-primary">
                      {stat.suffix}
                    </span>
                  </div>

                  {/* Label */}
                  <p className="text-sm text-white/50 leading-tight">
                    {stat.label}
                  </p>

                  {/* Hover glow */}
                  <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-500 -z-10" />
                </div>
              ))}
            </div>
          </div>

          {/* Hero Features - 2 Large Cards */}
          <div
            ref={heroRef}
            className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-32"
          >
            {heroFeatures.map((feature, index) => (
              <SpotlightCard
                key={index}
                className={cn(
                  "p-8 md:p-10 transition-all duration-700 group"
                )}
                style={{
                  transitionDelay: heroVisible ? `${index * 150}ms` : "0ms",
                  opacity: heroVisible ? 1 : 0,
                  transform: heroVisible ? "translateY(0)" : "translateY(30px)",
                }}
              >
                {/* Icon */}
                <div className="w-16 h-16 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110">
                  <feature.icon className="w-8 h-8 text-primary" />
                </div>

                {/* Content */}
                <h3 className="text-2xl md:text-3xl font-medium text-white mb-4 tracking-tight">
                  {feature.title}
                </h3>
                <p className="text-white/60 leading-relaxed mb-6 text-base md:text-lg">
                  {feature.description}
                </p>

                {/* Highlights */}
                <div className="flex flex-wrap gap-2">
                  {feature.highlights.map((highlight, idx) => (
                    <span
                      key={idx}
                      className="px-4 py-2 text-sm font-medium text-primary/80 bg-primary/10 rounded-full border border-primary/20 hover:bg-primary/20 transition-colors duration-300"
                    >
                      {highlight}
                    </span>
                  ))}
                </div>
              </SpotlightCard>
            ))}
          </div>

          {/* Core Features Section */}
          <div
            ref={coreRef}
            className="mb-32"
          >
            <div
              className={cn(
                "text-center mb-16 transition-all duration-700",
                coreVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              )}
            >
              <p className="text-primary font-medium text-sm tracking-wider uppercase mb-4">
                Funcionalidades Core
              </p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium text-white mb-6 tracking-tight">
                Las herramientas{" "}
                <GradientText variant="primary">esenciales del día a día</GradientText>
              </h2>
              <p className="text-lg text-white/50 max-w-2xl mx-auto">
                Todo lo que necesitás para operar tu e-commerce de forma profesional
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {coreFeatures.map((feature, index) => (
                <SpotlightCard
                  key={index}
                  className="p-6 md:p-8 transition-all duration-700 group"
                  style={{
                    transitionDelay: coreVisible ? `${index * 80}ms` : "0ms",
                    opacity: coreVisible ? 1 : 0,
                    transform: coreVisible ? "translateY(0)" : "translateY(20px)",
                  }}
                >
                  {/* Icon */}
                  <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-medium text-white mb-3 tracking-tight">
                    {feature.title}
                  </h3>
                  <p className="text-white/50 leading-relaxed mb-5 text-sm">
                    {feature.description}
                  </p>

                  {/* Highlights */}
                  <div className="flex flex-wrap gap-2">
                    {feature.highlights.map((highlight, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 text-xs font-medium text-primary/70 bg-primary/10 rounded-full border border-primary/10"
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>
                </SpotlightCard>
              ))}
            </div>
          </div>

          {/* Advanced Features Section */}
          <div
            ref={advancedRef}
            className="mb-32"
          >
            <div
              className={cn(
                "text-center mb-16 transition-all duration-700",
                advancedVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              )}
            >
              <p className="text-primary font-medium text-sm tracking-wider uppercase mb-4">
                Funcionalidades Avanzadas
              </p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium text-white mb-6 tracking-tight">
                Llevá tu operación{" "}
                <GradientText variant="primary">al siguiente nivel</GradientText>
              </h2>
              <p className="text-lg text-white/50 max-w-2xl mx-auto">
                Features premium para operaciones que necesitan escalar sin límites
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {advancedFeatures.map((feature, index) => (
                <div
                  key={index}
                  className={cn(
                    "relative group p-6 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-primary/30 hover:bg-white/[0.04] transition-all duration-500"
                  )}
                  style={{
                    transitionDelay: advancedVisible ? `${index * 80}ms` : "0ms",
                    opacity: advancedVisible ? 1 : 0,
                    transform: advancedVisible ? "translateY(0)" : "translateY(20px)",
                  }}
                >
                  {/* Plan badge */}
                  <div className="absolute top-4 right-4">
                    <span className="px-2.5 py-1 text-xs font-bold text-primary/80 bg-primary/10 rounded-full border border-primary/20">
                      {feature.planBadge}
                    </span>
                  </div>

                  {/* Category badge */}
                  <div className="mb-4">
                    <span className="px-2.5 py-1 text-xs font-medium text-white/40 bg-white/5 rounded-full">
                      {feature.category}
                    </span>
                  </div>

                  {/* Icon */}
                  <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-medium text-white mb-3 tracking-tight pr-16">
                    {feature.title}
                  </h3>
                  <p className="text-white/50 leading-relaxed text-sm">
                    {feature.description}
                  </p>

                  {/* Hover glow */}
                  <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-500 -z-10" />
                </div>
              ))}
            </div>

            {/* View Plans CTA */}
            <div className="text-center mt-12">
              <a
                href="/pricing"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white/5 border border-white/10 text-white/70 hover:bg-white/10 hover:text-white hover:border-primary/30 transition-all duration-300 group"
              >
                Ver planes y precios completos
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </div>

          {/* Benefits Section */}
          <div
            ref={benefitsRef}
            className="mb-24"
          >
            <div
              className={cn(
                "text-center mb-12 transition-all duration-700",
                benefitsVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              )}
            >
              <p className="text-primary font-medium text-sm tracking-wider uppercase mb-4">
                Por Qué Ordefy
              </p>
              <h2 className="text-3xl md:text-4xl font-medium text-white mb-4 tracking-tight">
                Pensado para <GradientText variant="primary">e-commerce LATAM</GradientText>
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className={cn(
                    "text-center p-6 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-primary/30 hover:bg-white/[0.04] transition-all duration-500 group"
                  )}
                  style={{
                    transitionDelay: benefitsVisible ? `${index * 100}ms` : "0ms",
                    opacity: benefitsVisible ? 1 : 0,
                    transform: benefitsVisible ? "translateY(0)" : "translateY(20px)",
                  }}
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mx-auto mb-4 transition-transform duration-300 group-hover:scale-110">
                    <benefit.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-medium text-white mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-sm text-white/50 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Final CTA */}
          <div className="text-center mt-32">
            <div className="relative inline-block">
              {/* Glow effect */}
              <div className="absolute inset-0 bg-primary/20 blur-[80px] rounded-full" />

              <div className="relative inline-flex flex-col items-center gap-8 p-10 md:p-12 rounded-3xl bg-gradient-to-b from-primary/15 via-primary/10 to-primary/5 border border-primary/30">
                <div className="text-center max-w-2xl">
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 border border-primary/30 mb-6">
                    <Sparkles className="w-4 h-4 text-primary" />
                    <span className="text-sm font-medium text-primary">
                      Las primeras 100 tiendas obtienen 50% OFF por 12 meses
                    </span>
                  </div>
                  <h3 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">
                    ¿Listo para transformar tu operación?
                  </h3>
                  <p className="text-lg text-white/60 mb-8">
                    Comenzá gratis. Sin tarjeta de crédito. Setup en minutos.
                  </p>
                </div>
                <button
                  onClick={handleCtaClick}
                  className="flex items-center gap-3 px-10 py-4 rounded-xl bg-primary text-black font-bold text-lg shadow-[0_0_40px_rgba(186,234,89,0.4)] hover:shadow-[0_0_60px_rgba(186,234,89,0.6)] hover:scale-105 transition-all duration-300 group"
                >
                  Solicitar Acceso Anticipado
                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </button>
                <p className="text-sm text-white/40">
                  ⚡ Setup instantáneo · 💳 Sin tarjeta · 🎁 14 días gratis en todos los planes pagos
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
