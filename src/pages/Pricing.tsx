import { useState } from "react";
import { cn } from "@/lib/utils";
import { Navigation } from "@/components/landing/Navigation";
import { Footer } from "@/components/landing/Footer";
import {
  Check,
  Minus,
  ArrowRight,
  Clock,
  Gift,
  HelpCircle,
  ChevronDown,
} from "lucide-react";

const plans = [
  {
    id: "free",
    name: "Free",
    description: "Para emprendedores que recién comienzan",
    price: { monthly: 0, annual: 0 },
    cta: "Comenzar Gratis",
    popular: false,
  },
  {
    id: "starter",
    name: "Starter",
    description: "Para tiendas en crecimiento",
    price: { monthly: 29, annual: 24 },
    cta: "Probar 14 días gratis",
    popular: false,
    trial: true,
  },
  {
    id: "growth",
    name: "Growth",
    description: "Para operaciones medianas",
    price: { monthly: 79, annual: 66 },
    cta: "Probar 14 días gratis",
    popular: true,
    trial: true,
  },
  {
    id: "professional",
    name: "Professional",
    description: "Para operaciones grandes y multi-tienda",
    price: { monthly: 169, annual: 142 },
    cta: "Contactar Ventas",
    popular: false,
  },
];

const featureCategories = [
  {
    name: "Límites",
    features: [
      { name: "Usuarios", free: "1", starter: "3", growth: "10", professional: "25" },
      { name: "Pedidos por mes", free: "50", starter: "500", growth: "2,000", professional: "10,000" },
      { name: "Productos", free: "100", starter: "500", growth: "2,000", professional: "Ilimitados" },
      { name: "Tiendas", free: "1", starter: "1", growth: "3", professional: "10" },
    ],
  },
  {
    name: "Core",
    features: [
      { name: "Dashboard", tooltip: "Panel principal con métricas y alertas", free: "Básico", starter: "Completo", growth: "Completo", professional: "Completo" },
      { name: "Gestión de pedidos", tooltip: "Crear, confirmar, procesar y rastrear pedidos", free: true, starter: true, growth: true, professional: true },
      { name: "Gestión de productos", tooltip: "Catálogo con variantes, precios y stock", free: true, starter: true, growth: true, professional: true },
      { name: "Gestión de clientes", tooltip: "Base de datos de clientes con historial", free: true, starter: true, growth: true, professional: true },
    ],
  },
  {
    name: "Operaciones",
    features: [
      { name: "Warehouse (Picking & Packing)", tooltip: "Sistema de preparación de pedidos por lotes", free: false, starter: true, growth: true, professional: true },
      { name: "Devoluciones", tooltip: "Procesamiento de devoluciones con QC integrado", free: false, starter: true, growth: true, professional: true },
      { name: "Mercadería (Ingresos)", tooltip: "Recepción de mercadería de proveedores", free: false, starter: true, growth: true, professional: true },
      { name: "Etiquetas de envío 4x6\"", tooltip: "Impresión de etiquetas térmicas con QR", free: false, starter: true, growth: true, professional: true },
      { name: "Proveedores", tooltip: "Gestión de proveedores y costos", free: true, starter: true, growth: true, professional: true },
      { name: "Transportadoras", tooltip: "Configuración de couriers y tarifas por zona", free: true, starter: true, growth: true, professional: true },
      { name: "Despacho y Liquidaciones", tooltip: "Sesiones de despacho y cálculo automático COD (requiere Warehouse)", free: false, starter: true, growth: true, professional: true },
    ],
  },
  {
    name: "Integraciones",
    features: [
      { name: "Importación Shopify", tooltip: "Importar productos, clientes y pedidos", free: false, starter: "One-way", growth: "Bidireccional", professional: "Bidireccional" },
      { name: "Sync Shopify en tiempo real", tooltip: "Webhooks para sincronización automática bidireccional", free: false, starter: false, growth: true, professional: true },
    ],
  },
  {
    name: "Analytics & Marketing",
    features: [
      { name: "Alertas inteligentes", tooltip: "Notificaciones proactivas por prioridad", free: false, starter: false, growth: true, professional: true },
      { name: "Tracking de campañas", tooltip: "Atribución de ventas a campañas publicitarias", free: false, starter: false, growth: true, professional: true },
      { name: "Analytics avanzados", tooltip: "Reportes detallados de rendimiento", free: false, starter: false, growth: true, professional: true },
    ],
  },
  {
    name: "Developers",
    features: [
      { name: "API de lectura", tooltip: "Acceso programático a datos (GET)", free: false, starter: false, growth: true, professional: true },
      { name: "API de escritura", tooltip: "Crear y modificar datos (POST/PUT/DELETE)", free: false, starter: false, growth: false, professional: true },
      { name: "Webhooks salientes", tooltip: "Notificaciones automáticas a tu servidor", free: false, starter: false, growth: false, professional: true },
    ],
  },
  {
    name: "Equipo & Soporte",
    features: [
      { name: "Roles de usuario", tooltip: "Permisos predefinidos por módulo", free: false, starter: "6 roles", growth: "6 roles", professional: "Personalizados" },
      { name: "Soporte", free: "Email", starter: "Email", growth: "Chat", professional: "Prioritario" },
    ],
  },
];

function FeatureValue({ value }: { value: boolean | string }) {
  if (typeof value === "boolean") {
    return value ? (
      <Check className="w-5 h-5 text-primary mx-auto" />
    ) : (
      <Minus className="w-4 h-4 text-white/20 mx-auto" />
    );
  }
  return <span className="text-sm text-white/70 font-medium">{value}</span>;
}

function FeatureTooltip({ text }: { text: string }) {
  return (
    <div className="group/tooltip relative inline-flex ml-1.5">
      <HelpCircle className="w-3.5 h-3.5 text-white/30 cursor-help" />
      <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-2 rounded-lg bg-[hsl(240,10%,15%)] border border-white/10 text-xs text-white/70 whitespace-nowrap opacity-0 invisible group-hover/tooltip:opacity-100 group-hover/tooltip:visible transition-all duration-200 z-50 shadow-xl">
        {text}
        <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-[hsl(240,10%,15%)]" />
      </div>
    </div>
  );
}

export default function Pricing() {
  const [isAnnual, setIsAnnual] = useState(true);
  const [expandedCategories, setExpandedCategories] = useState<string[]>(
    featureCategories.map((c) => c.name)
  );

  const toggleCategory = (name: string) => {
    setExpandedCategories((prev) =>
      prev.includes(name) ? prev.filter((c) => c !== name) : [...prev, name]
    );
  };

  const handleCtaClick = () => {
    window.location.href = "/";
  };

  return (
    <div className="min-h-screen bg-[hsl(240,10%,4%)]">
      <Navigation onCtaClick={handleCtaClick} />

      <main className="pt-28 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <p className="text-primary font-medium text-sm tracking-wider uppercase mb-4">
              Precios
            </p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-medium text-white mb-6 tracking-tight">
              Precios transparentes que{" "}
              <span className="text-primary">escalan contigo</span>
            </h1>
            <p className="text-lg text-white/50 max-w-2xl mx-auto mb-10">
              Comienza gratis. Crece cuando estés listo. Sin sorpresas, sin costos ocultos.
            </p>

            {/* Billing Toggle */}
            <div className="inline-flex items-center gap-1 p-1.5 rounded-full bg-white/[0.05] border border-white/10">
              <button
                onClick={() => setIsAnnual(false)}
                className={cn(
                  "px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300",
                  !isAnnual
                    ? "bg-primary text-black shadow-lg"
                    : "text-white/60 hover:text-white"
                )}
              >
                Mensual
              </button>
              <button
                onClick={() => setIsAnnual(true)}
                className={cn(
                  "px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2",
                  isAnnual
                    ? "bg-primary text-black shadow-lg"
                    : "text-white/60 hover:text-white"
                )}
              >
                Anual
                <span className={cn(
                  "px-2 py-0.5 rounded-full text-xs font-bold",
                  isAnnual ? "bg-black/20 text-black" : "bg-primary/20 text-primary"
                )}>
                  -17%
                </span>
              </button>
            </div>
          </div>

          {/* Loss Aversion Banner */}
          <div className="max-w-4xl mx-auto mb-16">
            <div className="relative p-6 rounded-2xl bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 border border-primary/20">
              <div className="flex flex-col md:flex-row items-center justify-center gap-5 text-center md:text-left">
                <div className="w-14 h-14 rounded-2xl bg-primary/20 border border-primary/30 flex items-center justify-center shrink-0">
                  <Clock className="w-7 h-7 text-primary" />
                </div>
                <div>
                  <p className="text-white font-semibold text-lg mb-1">
                    Cada hora que pasas en Excel, es dinero que dejas en la mesa.
                  </p>
                  <p className="text-white/50">
                    Negocios similares al tuyo ahorran{" "}
                    <span className="text-primary font-semibold">8+ horas semanales</span>{" "}
                    automatizando operaciones.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Pricing Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 max-w-7xl mx-auto mb-24">
            {plans.map((plan) => (
              <div
                key={plan.id}
                className={cn(
                  "relative group",
                  plan.popular && "xl:-mt-4 xl:mb-[-16px]"
                )}
              >
                {/* Popular badge */}
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
                    <div className="flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-primary text-black text-xs font-bold shadow-[0_0_30px_rgba(186,234,89,0.5)]">
                      Más Popular
                    </div>
                  </div>
                )}

                <div
                  className={cn(
                    "relative h-full p-8 rounded-3xl border transition-all duration-500",
                    plan.popular
                      ? "bg-gradient-to-b from-primary/10 to-primary/5 border-primary/40 shadow-[0_0_60px_rgba(186,234,89,0.15)]"
                      : "bg-white/[0.02] border-white/10 hover:border-white/20 hover:bg-white/[0.04]"
                  )}
                >
                  {/* Plan header */}
                  <div className="mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">
                      {plan.name}
                    </h3>
                    <p className="text-sm text-white/50">{plan.description}</p>
                  </div>

                  {/* Price */}
                  <div className="mb-8">
                    <div className="flex items-baseline gap-1">
                      <span className="text-5xl font-bold text-white">
                        ${isAnnual ? plan.price.annual : plan.price.monthly}
                      </span>
                      {plan.price.monthly > 0 && (
                        <span className="text-white/40 text-base font-medium">/mes</span>
                      )}
                    </div>
                    {isAnnual && plan.price.monthly > 0 && (
                      <p className="text-sm text-white/30 mt-2">
                        Facturado anualmente (${plan.price.annual * 12}/año)
                      </p>
                    )}
                    {plan.price.monthly === 0 && (
                      <p className="text-sm text-primary mt-2 font-medium">
                        Gratis para siempre
                      </p>
                    )}
                  </div>

                  {/* CTA Button */}
                  <button
                    onClick={handleCtaClick}
                    className={cn(
                      "w-full py-4 px-6 rounded-xl font-semibold text-base transition-all duration-300 flex items-center justify-center gap-2 group/btn",
                      plan.popular
                        ? "bg-primary text-black hover:bg-primary/90 shadow-[0_0_30px_rgba(186,234,89,0.3)] hover:shadow-[0_0_40px_rgba(186,234,89,0.5)]"
                        : "bg-white/10 text-white border border-white/20 hover:bg-white/20 hover:border-white/30"
                    )}
                  >
                    {plan.cta}
                    {plan.trial && (
                      <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                    )}
                  </button>

                  {/* Trial badge */}
                  {plan.trial && (
                    <div className="flex items-center justify-center gap-2 mt-4 text-sm text-white/50">
                      <Gift className="w-4 h-4 text-primary/70" />
                      <span>14 días gratis incluidos</span>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Feature Comparison Table */}
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Comparación detallada
              </h2>
              <p className="text-white/50 text-lg">
                Todo lo que incluye cada plan, sin letra pequeña.
              </p>
            </div>

            {/* Table */}
            <div className="rounded-3xl border border-white/10 overflow-hidden bg-white/[0.01]">
              {/* Table Header */}
              <div className="grid grid-cols-5 gap-4 p-6 bg-white/[0.03] border-b border-white/10">
                <div className="text-sm font-bold text-white/60 uppercase tracking-wider">
                  Funcionalidad
                </div>
                {plans.map((plan) => (
                  <div key={plan.id} className="text-center">
                    <span className={cn(
                      "text-base font-bold",
                      plan.popular ? "text-primary" : "text-white"
                    )}>
                      {plan.name}
                    </span>
                  </div>
                ))}
              </div>

              {/* Feature Categories */}
              {featureCategories.map((category, catIndex) => (
                <div
                  key={category.name}
                  className={cn(
                    catIndex !== featureCategories.length - 1 && "border-b border-white/5"
                  )}
                >
                  {/* Category Header */}
                  <button
                    onClick={() => toggleCategory(category.name)}
                    className="w-full grid grid-cols-5 gap-4 p-5 bg-white/[0.02] hover:bg-white/[0.04] transition-colors border-b border-white/5"
                  >
                    <div className="flex items-center gap-3 text-left">
                      <ChevronDown
                        className={cn(
                          "w-5 h-5 text-primary transition-transform duration-300",
                          expandedCategories.includes(category.name) && "rotate-180"
                        )}
                      />
                      <span className="text-base font-bold text-white">
                        {category.name}
                      </span>
                    </div>
                    <div className="col-span-4" />
                  </button>

                  {/* Features */}
                  <div
                    className={cn(
                      "overflow-hidden transition-all duration-300",
                      expandedCategories.includes(category.name) ? "max-h-[2000px]" : "max-h-0"
                    )}
                  >
                    {category.features.map((feature, index) => (
                      <div
                        key={index}
                        className={cn(
                          "grid grid-cols-5 gap-4 px-5 py-4 transition-colors hover:bg-white/[0.02]",
                          index !== category.features.length - 1 && "border-b border-white/5"
                        )}
                      >
                        <div className="flex items-center text-sm text-white/70">
                          <span>{feature.name}</span>
                          {feature.tooltip && <FeatureTooltip text={feature.tooltip} />}
                        </div>
                        <div className="flex items-center justify-center">
                          <FeatureValue value={feature.free} />
                        </div>
                        <div className="flex items-center justify-center">
                          <FeatureValue value={feature.starter} />
                        </div>
                        <div className="flex items-center justify-center">
                          <FeatureValue value={feature.growth} />
                        </div>
                        <div className="flex items-center justify-center">
                          <FeatureValue value={feature.professional} />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Trust Elements */}
          <div className="mt-16 text-center">
            <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4 text-base text-white/50">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center">
                  <Check className="w-4 h-4 text-primary" />
                </div>
                <span>Cancela cuando quieras</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center">
                  <Check className="w-4 h-4 text-primary" />
                </div>
                <span>Soporte en español</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center">
                  <Check className="w-4 h-4 text-primary" />
                </div>
                <span>Migración incluida</span>
              </div>
            </div>
          </div>

          {/* Final CTA */}
          <div className="mt-24 text-center">
            <div className="relative inline-block">
              {/* Glow effect */}
              <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full" />

              <div className="relative inline-flex flex-col items-center gap-8 p-10 rounded-3xl bg-gradient-to-b from-primary/15 to-primary/5 border border-primary/30">
                <div className="text-center">
                  <h3 className="text-3xl font-bold text-white mb-3">
                    ¿Listo para transformar tu operación?
                  </h3>
                  <p className="text-lg text-white/60">
                    Las primeras 100 tiendas reciben{" "}
                    <span className="text-primary font-bold">50% off por 12 meses</span>.
                  </p>
                </div>
                <button
                  onClick={handleCtaClick}
                  className="flex items-center gap-3 px-10 py-4 rounded-xl bg-primary text-black font-bold text-lg shadow-[0_0_40px_rgba(186,234,89,0.4)] hover:shadow-[0_0_60px_rgba(186,234,89,0.6)] hover:scale-105 transition-all duration-300 group"
                >
                  Solicitar Acceso Anticipado
                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
