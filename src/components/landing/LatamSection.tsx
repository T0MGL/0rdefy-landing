import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { cn } from "@/lib/utils";
import {
  Globe,
  MessageSquare,
  DollarSign,
  Clock,
  Languages,
  Truck,
  Shield,
  Map,
} from "lucide-react";

const latamFeatures = [
  {
    icon: DollarSign,
    title: "Formato numérico LATAM",
    description: "25.000 no 25,000. Porque así trabajamos acá.",
  },
  {
    icon: Map,
    title: "Zonas de envío locales",
    description: "Asunción, Central, Interior. Configuración que hace sentido.",
  },
  {
    icon: MessageSquare,
    title: "WhatsApp Business nativo",
    description: "El canal #1 en Latinoamérica integrado de forma nativa.",
  },
  {
    icon: Truck,
    title: "Liquidación COD",
    description: "Contra entrega como se usa en la región, no como afterthought.",
  },
  {
    icon: DollarSign,
    title: "Moneda local",
    description: "Guaraníes, pesos, soles. Tu moneda, tus reportes.",
  },
  {
    icon: Clock,
    title: "Tu zona horaria",
    description: "Alertas y reportes respetan tu hora local. Siempre.",
  },
  {
    icon: Languages,
    title: "Español nativo",
    description: "Interfaz, soporte y documentación en tu idioma.",
  },
  {
    icon: Shield,
    title: "Equipo LATAM",
    description: "Desarrollado por quienes entienden tu contexto.",
  },
];

const integrations = [
  { name: "Shopify", status: "live", description: "Sync bidireccional" },
  { name: "WhatsApp Business", status: "live", description: "Con un click" },
  { name: "Google Sheets", status: "live", description: "Export CSV" },
  { name: "PDF", status: "live", description: "Etiquetas y reportes" },
  { name: "Mercado Libre", status: "coming", description: "Próximamente" },
  { name: "Instagram Shop", status: "coming", description: "Próximamente" },
  { name: "WooCommerce", status: "coming", description: "Próximamente" },
  { name: "Tiendanube", status: "coming", description: "Próximamente" },
];

export function LatamSection() {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section className="relative py-24 md:py-32 bg-[hsl(240,10%,5%)] overflow-hidden z-10">
      {/* Background */}
      <div className="absolute inset-0">
        {/* Map-like pattern overlay */}
        <div className="absolute inset-0 opacity-[0.02]">
          <svg
            className="w-full h-full"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
          >
            <defs>
              <pattern
                id="latam-grid"
                width="10"
                height="10"
                patternUnits="userSpaceOnUse"
              >
                <circle cx="0.5" cy="0.5" r="0.3" fill="white" />
              </pattern>
            </defs>
            <rect width="100" height="100" fill="url(#latam-grid)" />
          </svg>
        </div>
        {/* Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] bg-primary/5 rounded-full blur-[200px]" />
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
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <Globe className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">
              Hecho para Latinoamérica
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium text-white mb-6 tracking-tight">
            Diseñado para cómo{" "}
            <span className="text-primary">trabajas</span>
          </h2>
          <p className="text-lg text-white/50 max-w-2xl mx-auto">
            No somos otra herramienta gringa traducida. Ordefy nació en LATAM,
            para LATAM. Cada detalle pensado para tu operación.
          </p>
        </div>

        {/* Features Grid */}
        <div
          className={cn(
            "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-20 transition-all duration-700",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          )}
          style={{ transitionDelay: "200ms" }}
        >
          {latamFeatures.map((feature, index) => (
            <div
              key={index}
              className="group relative p-5 rounded-xl bg-white/[0.02] border border-white/5 hover:border-primary/20 transition-all duration-300"
              style={{
                transitionDelay: isVisible ? `${250 + index * 50}ms` : "0ms",
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateY(0)" : "translateY(10px)",
              }}
            >
              {/* Icon */}
              <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="w-5 h-5 text-primary" />
              </div>

              {/* Content */}
              <h3 className="text-base font-medium text-white mb-1">
                {feature.title}
              </h3>
              <p className="text-sm text-white/40 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Integrations */}
        <div
          className={cn(
            "max-w-4xl mx-auto transition-all duration-700",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          )}
          style={{ transitionDelay: "500ms" }}
        >
          <div className="text-center mb-10">
            <h3 className="text-2xl font-medium text-white mb-3">
              Se conecta con tus herramientas
            </h3>
            <p className="text-white/50">
              Integraciones que simplifican tu stack tecnológico.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {integrations.map((integration, index) => (
              <div
                key={index}
                className={cn(
                  "relative p-4 rounded-xl text-center transition-all duration-300",
                  integration.status === "live"
                    ? "bg-white/[0.03] border border-white/10 hover:border-primary/20"
                    : "bg-white/[0.01] border border-white/5"
                )}
              >
                {/* Status indicator */}
                {integration.status === "live" && (
                  <div className="absolute top-2 right-2">
                    <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                  </div>
                )}

                <p
                  className={cn(
                    "font-medium mb-1",
                    integration.status === "live"
                      ? "text-white"
                      : "text-white/40"
                  )}
                >
                  {integration.name}
                </p>
                <p
                  className={cn(
                    "text-xs",
                    integration.status === "live"
                      ? "text-primary/70"
                      : "text-white/30"
                  )}
                >
                  {integration.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Paraguay badge */}
        <div
          className={cn(
            "mt-16 text-center transition-all duration-700",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          )}
          style={{ transitionDelay: "700ms" }}
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white/[0.03] border border-white/10">
            <span className="text-2xl">py</span>
            <div className="h-6 w-px bg-white/20" />
            <p className="text-sm text-white/60">
              Desarrollado con orgullo en <span className="text-white font-medium">Paraguay</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
