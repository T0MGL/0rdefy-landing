import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { cn } from "@/lib/utils";
import { ChevronDown, MessageCircleQuestion } from "lucide-react";
import { useState } from "react";

const faqs = [
  {
    question: "¿Puedo probar antes de pagar?",
    answer:
      "Sí, ofrecemos 14 días gratis en los planes Starter y Growth. Necesitas agregar una tarjeta pero no cobramos hasta que termine el trial. Puedes cancelar en cualquier momento sin compromiso.",
    category: "trial",
  },
  {
    question: "¿Qué pasa si supero los límites de mi plan?",
    answer:
      "Te avisamos cuando estés cerca del límite (al 80% y 100%). Puedes subir de plan en cualquier momento sin perder datos. Si llegas al límite, no bloqueamos tu acceso - simplemente no podrás crear nuevos pedidos hasta que actualices.",
    category: "pricing",
  },
  {
    question: "¿Funciona con mi tienda Shopify actual?",
    answer:
      "Sí, puedes importar todos tus productos, clientes y pedidos en minutos. La sincronización es bidireccional en planes Growth+, lo que significa que cambios en Ordefy se reflejan automáticamente en Shopify y viceversa.",
    category: "integrations",
  },
  {
    question: "¿Puedo usar Ordefy sin Shopify?",
    answer:
      "Absolutamente. Ordefy funciona como sistema standalone. Puedes crear pedidos manualmente, importar desde Excel, o integrar por API. Muchos de nuestros usuarios operan sin Shopify.",
    category: "integrations",
  },
  {
    question: "¿Mis datos están seguros?",
    answer:
      "Usamos Supabase (PostgreSQL) con backups automáticos diarios, encriptación en tránsito y reposo, y Row Level Security (RLS). Tu data está completamente aislada por tienda. Cumplimos con estándares de seguridad enterprise.",
    category: "security",
  },
  {
    question: "¿Hay soporte en español?",
    answer:
      "Sí, toda la plataforma y el soporte están en español. Somos un equipo LATAM que entiende tu contexto. El soporte está disponible por email en plan Free, chat en Growth, y prioritario en Professional.",
    category: "support",
  },
  {
    question: "¿Qué impresoras de etiquetas soportan?",
    answer:
      "Cualquier impresora térmica que acepte formato 4x6\" estándar, incluyendo Dymo, Zebra, Brother y genéricas. Las etiquetas incluyen QR code para tracking y verificación de entrega.",
    category: "features",
  },
  {
    question: "¿Puedo cambiar de plan cuando quiera?",
    answer:
      "Sí, puedes subir o bajar de plan en cualquier momento. Al subir, se prorratea el costo. Al bajar, validamos que tu uso actual quepa en el nuevo plan (usuarios, productos, pedidos).",
    category: "pricing",
  },
  {
    question: "¿Cómo funciona la liquidación con couriers?",
    answer:
      "Creas sesiones de despacho, exportas un CSV compatible con Google Sheets, el courier entrega y reporta, importas los resultados, y el sistema calcula automáticamente cuánto te deben (COD - comisiones = neto).",
    category: "features",
  },
  {
    question: "¿Hay API disponible?",
    answer:
      "Sí. API de lectura disponible desde Growth, y API completa (lectura + escritura) + webhooks salientes en Professional. Documentación completa incluida.",
    category: "integrations",
  },
];

function FAQItem({
  faq,
  isOpen,
  onToggle,
  index,
  isVisible,
}: {
  faq: (typeof faqs)[0];
  isOpen: boolean;
  onToggle: () => void;
  index: number;
  isVisible: boolean;
}) {
  return (
    <div
      className={cn(
        "border-b border-white/5 transition-all duration-500",
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
      )}
      style={{
        transitionDelay: isVisible ? `${index * 50}ms` : "0ms",
      }}
    >
      <button
        onClick={onToggle}
        className="w-full py-5 flex items-center justify-between gap-4 text-left group"
      >
        <span
          className={cn(
            "text-base md:text-lg font-medium transition-colors",
            isOpen ? "text-primary" : "text-white group-hover:text-white/80"
          )}
        >
          {faq.question}
        </span>
        <div
          className={cn(
            "shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300",
            isOpen
              ? "bg-primary/20 rotate-180"
              : "bg-white/5 group-hover:bg-white/10"
          )}
        >
          <ChevronDown
            className={cn(
              "w-4 h-4 transition-colors",
              isOpen ? "text-primary" : "text-white/50"
            )}
          />
        </div>
      </button>
      <div
        className={cn(
          "overflow-hidden transition-all duration-300",
          isOpen ? "max-h-96 pb-5" : "max-h-0"
        )}
      >
        <p className="text-white/50 leading-relaxed pr-12">{faq.answer}</p>
      </div>
    </div>
  );
}

export function FAQSection() {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="relative py-24 md:py-32 bg-[hsl(240,10%,4%)] overflow-hidden z-10">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/4 w-[600px] h-[600px] bg-primary/3 rounded-full blur-[200px]" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div
            ref={ref}
            className={cn(
              "text-center mb-12 md:mb-16 transition-all duration-700",
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            )}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-6">
              <MessageCircleQuestion className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-white/60">
                Preguntas Frecuentes
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium text-white mb-6 tracking-tight">
              ¿Tienes <span className="text-primary">dudas</span>?
            </h2>
            <p className="text-lg text-white/50 max-w-xl mx-auto">
              Respuestas a las preguntas más comunes sobre Ordefy.
            </p>
          </div>

          {/* FAQ List */}
          <div className="divide-y divide-white/5 border-t border-white/5">
            {faqs.map((faq, index) => (
              <FAQItem
                key={index}
                faq={faq}
                isOpen={openIndex === index}
                onToggle={() =>
                  setOpenIndex(openIndex === index ? null : index)
                }
                index={index}
                isVisible={isVisible}
              />
            ))}
          </div>

          {/* Still have questions */}
          <div
            className={cn(
              "mt-12 text-center transition-all duration-700",
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            )}
            style={{ transitionDelay: "500ms" }}
          >
            <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-6 rounded-2xl bg-white/[0.02] border border-white/10">
              <div className="text-center sm:text-left">
                <p className="text-white font-medium mb-1">
                  ¿No encontraste lo que buscabas?
                </p>
                <p className="text-sm text-white/50">
                  Escríbenos y te respondemos en menos de 24 horas.
                </p>
              </div>
              <a
                href="mailto:hola@ordefy.com"
                className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/5 border border-white/10 text-white text-sm font-medium hover:bg-white/10 transition-colors"
              >
                hola@ordefy.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
