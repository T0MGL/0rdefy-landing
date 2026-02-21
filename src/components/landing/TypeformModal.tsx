import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "@/hooks/use-toast";
import { ArrowRight, ArrowLeft, X, Layers } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { cn } from "@/lib/utils";

const questions = [
  {
    id: "businessName",
    label: "¿Cómo se llama tu negocio?",
    placeholder: "Mi Tienda Online",
    type: "text",
    hint: "El nombre que usan tus clientes",
  },
  {
    id: "website",
    label: "¿Tienes sitio web?",
    placeholder: "www.mitienda.com",
    type: "text",
    hint: "Si no tienes, escribe 'No tengo'",
  },
  {
    id: "city",
    label: "¿En qué ciudad operas?",
    placeholder: "Asunción",
    type: "text",
    hint: "Tu ubicación principal",
  },
  {
    id: "monthlyRevenue",
    label: "¿Cuál es tu facturación mensual aproximada?",
    placeholder: "Gs. 50.000.000",
    type: "text",
    hint: "Un aproximado está bien",
  },
  {
    id: "monthlyOrders",
    label: "¿Cuántos pedidos procesas al mes?",
    placeholder: "150",
    type: "number",
    hint: "Número aproximado de órdenes",
  },
  {
    id: "mainProducts",
    label: "¿Qué productos vendes?",
    placeholder: "Ropa, accesorios, electrónicos...",
    type: "text",
    hint: "Categorías principales",
  },
  {
    id: "phone",
    label: "¿Cuál es tu WhatsApp?",
    placeholder: "+595 xxx xxx xxx",
    type: "tel",
    hint: "Para contactarte cuando esté listo tu acceso",
  },
];

interface TypeformModalProps {
  email: string;
  isOpen: boolean;
  onClose: () => void;
}

export function TypeformModal({ email, isOpen, onClose }: TypeformModalProps) {
  const navigate = useNavigate();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [currentAnswer, setCurrentAnswer] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [direction, setDirection] = useState<"forward" | "backward">("forward");

  // Reset state when modal opens
  useEffect(() => {
    if (isOpen) {
      setCurrentQuestion(0);
      setAnswers({});
      setCurrentAnswer("");
      setDirection("forward");
    }
  }, [isOpen]);

  // Handle ESC key
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const handleNextQuestion = () => {
    if (!currentAnswer.trim()) {
      toast({
        title: "Campo requerido",
        description: "Por favor completa este campo para continuar",
        variant: "destructive",
      });
      return;
    }

    const currentQ = questions[currentQuestion];
    setAnswers((prev) => ({ ...prev, [currentQ.id]: currentAnswer }));
    setCurrentAnswer("");
    setDirection("forward");

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion((prev) => prev + 1);
    } else {
      handleSubmitToWebhook();
    }
  };

  const handlePreviousQuestion = () => {
    if (currentQuestion > 0) {
      const prevQ = questions[currentQuestion - 1];
      setCurrentAnswer(answers[prevQ.id] || "");
      setDirection("backward");
      setCurrentQuestion((prev) => prev - 1);
    }
  };

  const handleSubmitToWebhook = async () => {
    setIsSubmitting(true);

    const finalData = {
      email,
      ...answers,
      [questions[currentQuestion].id]: currentAnswer,
      timestamp: new Date().toISOString(),
    };

    try {
      const response = await fetch("/api/submit-waitlist", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(finalData),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        navigate("/waitlist-success");
      } else {
        throw new Error(result.error || "Error al enviar datos");
      }
    } catch (error) {
      toast({
        title: "Error",
        description:
          "Hubo un problema al registrar tu solicitud. Intenta nuevamente.",
        variant: "destructive",
      });
      console.error("Webhook error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  const progress = ((currentQuestion + 1) / questions.length) * 100;

  return (
    <div className="fixed inset-0 z-50">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-[hsl(240,10%,4%)]/95 backdrop-blur-xl"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative z-10 flex items-center justify-center min-h-screen p-4">
        <div className="w-full max-w-2xl animate-scale-up">
          {/* Header */}
          <div className="flex items-center justify-between mb-5 sm:mb-8">
            <div className="flex items-center gap-3">
              <Layers className="w-6 h-6 text-primary" />
              <span className="text-white font-medium">ordefy</span>
            </div>
            <button
              onClick={onClose}
              className="w-10 h-10 flex items-center justify-center rounded-full text-white/40 hover:text-white hover:bg-white/10 transition-all"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Progress */}
          <div className="mb-8 sm:mb-12">
            <div className="flex items-center justify-between mb-3">
              <span className="text-sm text-white/40 font-medium">
                Pregunta {currentQuestion + 1} de {questions.length}
              </span>
              <span className="text-sm text-primary font-medium">
                {Math.round(progress)}%
              </span>
            </div>
            <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-primary/80 via-primary to-primary/80 rounded-full transition-all duration-500 ease-out"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>

          {/* Question */}
          <div
            key={currentQuestion}
            className={cn(
              "animate-fade-up",
              direction === "backward" && "animate-fade-in"
            )}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium text-white mb-3 sm:mb-4 tracking-tight">
              {questions[currentQuestion].label}
            </h2>
            <p className="text-white/40 mb-6 sm:mb-8 text-base sm:text-lg">
              {questions[currentQuestion].hint}
            </p>

            {/* Input */}
            <div className="relative group mb-4">
              <Input
                type={questions[currentQuestion].type}
                placeholder={questions[currentQuestion].placeholder}
                value={currentAnswer}
                onChange={(e) => setCurrentAnswer(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    e.preventDefault();
                    handleNextQuestion();
                  }
                }}
                className="w-full h-16 bg-white/[0.03] border-white/10 text-white text-xl placeholder:text-white/20 focus:border-primary/50 focus:ring-2 focus:ring-primary/20 rounded-xl transition-all duration-300"
                autoFocus
                disabled={isSubmitting}
              />
              {/* Glow effect */}
              <div className="absolute inset-0 rounded-xl bg-primary/10 blur-xl opacity-0 group-focus-within:opacity-100 transition-opacity duration-500 -z-10" />
            </div>

            <p className="hidden sm:block text-white/30 text-sm">
              Presiona <kbd className="px-2 py-0.5 bg-white/10 rounded text-white/50 mx-1">Enter ↵</kbd> para continuar
            </p>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-between mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-white/5">
            <Button
              type="button"
              onClick={handlePreviousQuestion}
              variant="ghost"
              disabled={currentQuestion === 0 || isSubmitting}
              className="text-white/40 hover:text-white hover:bg-white/5 transition-all duration-300 gap-2"
            >
              <ArrowLeft className="w-4 h-4" />
              Atrás
            </Button>

            <Button
              type="button"
              onClick={handleNextQuestion}
              variant="premium"
              size="lg"
              disabled={isSubmitting}
              className="gap-2 min-w-[160px]"
            >
              {isSubmitting ? (
                <span className="flex items-center gap-2">
                  <span className="w-4 h-4 border-2 border-black/20 border-t-black rounded-full animate-spin" />
                  Enviando...
                </span>
              ) : currentQuestion === questions.length - 1 ? (
                <>
                  Completar
                  <ArrowRight className="w-4 h-4" />
                </>
              ) : (
                <>
                  Continuar
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
