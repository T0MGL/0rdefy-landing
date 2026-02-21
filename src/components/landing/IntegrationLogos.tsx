import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { cn } from "@/lib/utils";

const integrations = [
  { name: "Shopify", logo: "shopify", comingSoon: false },
  { name: "WooCommerce", logo: "woocommerce", comingSoon: true },
  { name: "Mercado Libre", logo: "mercadolibre", comingSoon: true },
  { name: "Instagram", logo: "instagram", comingSoon: true },
  { name: "WhatsApp", logo: "whatsapp", comingSoon: true },
];

// SVG logos as components for clean rendering
const LogoIcons: Record<string, React.FC<{ className?: string }>> = {
  shopify: ({ className }) => (
    <svg className={className} viewBox="0 0 109 124" fill="currentColor">
      <path d="M95.6 28.1c-.1-.6-.6-1-1.1-1-.5 0-9.3-.2-9.3-.2s-6.2-6-6.9-6.7c-.7-.7-2-.5-2.5-.3-.1 0-1.3.4-3.5 1.1-2.1-6-5.8-11.5-12.3-11.5h-.6c-1.9-2.4-4.2-3.5-6.1-3.5-15.1 0-22.3 18.9-24.6 28.5-5.9 1.8-10.1 3.1-10.6 3.3-3.3 1-3.4 1.1-3.8 4.2-.3 2.3-9 69.5-9 69.5l67.7 12.7 36.6-7.9s-13.9-94.2-14-94.2zm-32.7-3.5c-1.7.5-3.6 1.1-5.7 1.8 0-3-.4-7.2-1.7-10.7 4.3.8 6.4 5.6 7.4 8.9zm-9.7 3c-3.9 1.2-8.1 2.5-12.3 3.8 1.2-4.6 3.5-9.2 6.2-12.2 1-1.1 2.5-2.3 4.2-3 1.6 3.3 2 7.9 1.9 11.4zm-7.8-15.7c1.4 0 2.5.3 3.5.9-1.6.8-3.1 2.1-4.5 3.6-3.7 3.9-6.5 10-7.6 15.8l-10 3.1c2-9.2 8.2-23.4 18.6-23.4z"/>
    </svg>
  ),
  woocommerce: ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M2.227 4.857A2.228 2.228 0 000 7.094v7.457c0 1.236 1.001 2.237 2.237 2.237h5.09l-1.089 2.79 4.665-2.79h8.9c.493 0 .97-.164 1.355-.465a2.25 2.25 0 00.842-1.78V7.086a2.227 2.227 0 00-2.227-2.229H2.227zM5.855 8.377c.243.122.427.35.51.621.122.427.15.876.15 1.325-.04.753-.195 1.495-.447 2.189-.243.595-.622 1.131-1.112 1.537-.367.295-.795.5-1.285.52-.196-.001-.39-.05-.563-.144a1.233 1.233 0 01-.5-.593c-.113-.36-.147-.737-.113-1.116.01-.75.157-1.493.418-2.198.233-.595.612-1.121 1.102-1.527.375-.296.797-.512 1.286-.53.195.01.386.061.554.153zm6.073 0c.243.122.427.35.51.621.121.427.15.876.15 1.325-.04.753-.195 1.495-.447 2.189-.243.595-.622 1.131-1.112 1.537-.367.295-.795.5-1.285.52-.196-.001-.39-.05-.563-.144a1.233 1.233 0 01-.5-.593c-.113-.36-.147-.737-.113-1.116.01-.75.157-1.493.418-2.198.233-.595.612-1.121 1.102-1.527.375-.296.797-.512 1.286-.53.195.01.386.061.554.153zm5.133.306c.33.195.543.53.587.904.029.32-.005.646-.087.961-.082.315-.209.62-.38.903a8.94 8.94 0 01-1.134 1.478 10.09 10.09 0 01-1.459 1.307c.456-1.453.83-2.935 1.122-4.439.113-.408.311-.789.583-1.114.272-.326.734-.305.768 0z"/>
    </svg>
  ),
  mercadolibre: ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 2.824a9.176 9.176 0 110 18.352 9.176 9.176 0 010-18.352zM7.2 7.2v4.8h2.4V9.6h4.8v4.8h-2.4v2.4h4.8V7.2H7.2z"/>
    </svg>
  ),
  instagram: ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
    </svg>
  ),
  whatsapp: ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
    </svg>
  ),
};

export function IntegrationLogos() {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.3 });

  return (
    <section className="relative py-16 md:py-20 bg-[hsl(240,10%,4%)] z-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={ref}
          className={cn(
            "text-center transition-all duration-700",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          )}
        >
          {/* Label */}
          <p className="text-sm text-white/30 uppercase tracking-wider mb-10">
            Conecta con las plataformas que ya usas
          </p>

          {/* Logo Grid */}
          <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-8">
            {integrations.map((integration, index) => {
              const LogoIcon = LogoIcons[integration.logo];
              return (
                <div
                  key={integration.name}
                  className={cn(
                    "group flex flex-col items-center gap-3 transition-all duration-500",
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4",
                    integration.comingSoon && "opacity-40"
                  )}
                  style={{ transitionDelay: `${index * 80}ms` }}
                >
                  <div className="relative p-4">
                    {LogoIcon && (
                      <LogoIcon className={cn(
                        "w-8 h-8 transition-all duration-300",
                        integration.comingSoon
                          ? "text-white/30"
                          : "text-white/40 group-hover:text-white/70 group-hover:scale-110"
                      )} />
                    )}
                    {!integration.comingSoon && (
                      <div className="absolute inset-0 bg-primary/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full" />
                    )}
                  </div>
                  <div className="flex flex-col items-center gap-1">
                    <span className="text-xs text-white/20 font-medium">
                      {integration.name}
                    </span>
                    {integration.comingSoon && (
                      <span className="text-[10px] text-white/20 font-medium tracking-wide">
                        Próximamente
                      </span>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

