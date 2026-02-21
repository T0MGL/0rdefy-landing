import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { cn } from "@/lib/utils";
import { Quote, Star, TrendingDown, Clock, Package } from "lucide-react";

const testimonials = [
  {
    id: 1,
    quote: "Vendemos en Instagram y Shopify. Antes perdíamos pedidos entre planillas. Ahora todo entra automático y el stock se sincroniza solo.",
    author: "María González",
    role: "Fundadora",
    company: "Bella Moda PY",
    industry: "Tienda de Ropa Online",
    avatar: null, // Will use initials
    metrics: [
      { icon: Clock, value: "6h", label: "ahorradas/semana" },
      { icon: TrendingDown, value: "90%", label: "menos errores" },
    ],
  },
  {
    id: 2,
    quote: "Procesamos 200+ pedidos diarios. El warehouse de Ordefy nos redujo errores de picking en un 80%. Nuestro equipo por fin puede respirar.",
    author: "Carlos Benítez",
    role: "Director de Operaciones",
    company: "Cosmética del Este",
    industry: "Distribuidora de Cosméticos",
    avatar: null,
    metrics: [
      { icon: Package, value: "200+", label: "pedidos/día" },
      { icon: TrendingDown, value: "80%", label: "menos errores picking" },
    ],
    featured: true,
  },
  {
    id: 3,
    quote: "Importo de proveedores y despacho con 3 couriers. La liquidación automática me ahorra 4 horas semanales que antes gastaba en Excel.",
    author: "Roberto Acosta",
    role: "CEO",
    company: "Drop Paraguay",
    industry: "Dropshipper",
    avatar: null,
    metrics: [
      { icon: Clock, value: "4h", label: "ahorradas/semana" },
      { icon: Package, value: "3", label: "couriers integrados" },
    ],
  },
];

function AvatarInitials({ name, featured }: { name: string; featured?: boolean }) {
  const initials = name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);

  return (
    <div
      className={cn(
        "w-14 h-14 rounded-full flex items-center justify-center text-lg font-semibold",
        featured
          ? "bg-primary/20 text-primary border-2 border-primary/30"
          : "bg-white/10 text-white/80 border border-white/10"
      )}
    >
      {initials}
    </div>
  );
}

function StarRating() {
  return (
    <div className="flex items-center gap-0.5">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          className="w-4 h-4 fill-primary text-primary"
        />
      ))}
    </div>
  );
}

export function TestimonialsSection() {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section className="relative py-24 md:py-32 bg-[hsl(240,10%,4%)] overflow-hidden z-10">
      {/* Background */}
      <div className="absolute inset-0">
        {/* Subtle glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-primary/3 rounded-full blur-[200px]" />
        {/* Quote pattern */}
        <div className="absolute top-20 right-20 opacity-[0.02]">
          <Quote className="w-64 h-64 text-white" />
        </div>
        <div className="absolute bottom-20 left-20 opacity-[0.02] rotate-180">
          <Quote className="w-48 h-48 text-white" />
        </div>
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
          <p className="text-primary font-medium text-sm tracking-wider uppercase mb-4">
            Casos de Éxito
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium text-white mb-6 tracking-tight">
            Negocios que ya{" "}
            <span className="text-primary">transformaron</span> su operación
          </h2>
          <p className="text-lg text-white/50 max-w-2xl mx-auto">
            Historias reales de e-commerce en LATAM que dejaron el caos atrás.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className={cn(
                "relative group transition-all duration-700",
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10",
                testimonial.featured && "lg:scale-105 lg:z-10"
              )}
              style={{
                transitionDelay: isVisible ? `${200 + index * 150}ms` : "0ms",
              }}
            >
              <div
                className={cn(
                  "relative h-full p-6 md:p-8 rounded-2xl border backdrop-blur-sm transition-all duration-300",
                  testimonial.featured
                    ? "bg-primary/[0.03] border-primary/20 shadow-[0_0_40px_rgba(186,234,89,0.08)]"
                    : "bg-white/[0.02] border-white/10 hover:border-white/20"
                )}
              >
                {/* Featured badge */}
                {testimonial.featured && (
                  <div className="absolute -top-3 right-6">
                    <div className="px-3 py-1 rounded-full bg-primary/20 border border-primary/30 text-xs font-medium text-primary">
                      Historia Destacada
                    </div>
                  </div>
                )}

                {/* Quote icon */}
                <div className="mb-6">
                  <Quote
                    className={cn(
                      "w-8 h-8",
                      testimonial.featured ? "text-primary/40" : "text-white/20"
                    )}
                  />
                </div>

                {/* Stars */}
                <div className="mb-4">
                  <StarRating />
                </div>

                {/* Quote text */}
                <blockquote className="text-white/80 leading-relaxed mb-6 text-base md:text-lg">
                  "{testimonial.quote}"
                </blockquote>

                {/* Metrics */}
                <div className="flex gap-4 mb-6">
                  {testimonial.metrics.map((metric, i) => (
                    <div
                      key={i}
                      className={cn(
                        "flex-1 p-3 rounded-xl",
                        testimonial.featured
                          ? "bg-primary/10 border border-primary/20"
                          : "bg-white/5 border border-white/5"
                      )}
                    >
                      <div className="flex items-center gap-2 mb-1">
                        <metric.icon
                          className={cn(
                            "w-4 h-4",
                            testimonial.featured ? "text-primary" : "text-white/40"
                          )}
                        />
                        <span
                          className={cn(
                            "text-xl font-semibold",
                            testimonial.featured ? "text-primary" : "text-white"
                          )}
                        >
                          {metric.value}
                        </span>
                      </div>
                      <p className="text-xs text-white/40">{metric.label}</p>
                    </div>
                  ))}
                </div>

                {/* Author */}
                <div className="flex items-center gap-4 pt-4 border-t border-white/5">
                  <AvatarInitials
                    name={testimonial.author}
                    featured={testimonial.featured}
                  />
                  <div>
                    <p className="font-medium text-white">{testimonial.author}</p>
                    <p className="text-sm text-white/40">
                      {testimonial.role}, {testimonial.company}
                    </p>
                    <p className="text-xs text-primary/60 mt-0.5">
                      {testimonial.industry}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom social proof stats */}
        <div
          className={cn(
            "mt-12 md:mt-20 transition-all duration-700",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          )}
          style={{ transitionDelay: "800ms" }}
        >
          <div className="relative max-w-4xl mx-auto p-5 sm:p-8 rounded-2xl sm:rounded-3xl bg-gradient-to-r from-primary/5 via-primary/10 to-primary/5 border border-primary/20">
            {/* Glow */}
            <div className="absolute inset-0 rounded-2xl sm:rounded-3xl bg-primary/5 blur-2xl -z-10" />

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8 text-center">
              <div>
                <p className="text-2xl sm:text-3xl md:text-4xl font-light text-white mb-1">150+</p>
                <p className="text-xs sm:text-sm text-white/50">Negocios en waitlist</p>
              </div>
              <div>
                <p className="text-2xl sm:text-3xl md:text-4xl font-light text-primary mb-1">85%</p>
                <p className="text-xs sm:text-sm text-white/50">Reducción de errores</p>
              </div>
              <div>
                <p className="text-2xl sm:text-3xl md:text-4xl font-light text-white mb-1">8h+</p>
                <p className="text-xs sm:text-sm text-white/50">Ahorro semanal promedio</p>
              </div>
              <div>
                <p className="text-2xl sm:text-3xl md:text-4xl font-light text-primary mb-1">4.9</p>
                <p className="text-xs sm:text-sm text-white/50">Calificación beta testers</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
