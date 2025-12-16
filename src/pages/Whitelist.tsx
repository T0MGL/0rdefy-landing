import { useState, useEffect } from 'react';
import { ShaderAnimation } from '@/components/ui/shader-animation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { toast } from '@/hooks/use-toast';
import { Layers, ArrowRight, ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const questions = [
  { id: 'businessName', label: 'Nombre de tu negocio', placeholder: 'Mi Tienda Online', type: 'text' },
  { id: 'website', label: 'Sitio web', placeholder: 'www.mitienda.com', type: 'text' },
  { id: 'city', label: 'Ciudad', placeholder: 'Asunción', type: 'text' },
  { id: 'monthlyRevenue', label: 'Facturación mensual aproximada', placeholder: '$10,000', type: 'text' },
  { id: 'monthlyOrders', label: 'Pedidos mensuales aproximados', placeholder: '150', type: 'number' },
  { id: 'mainProducts', label: '¿Qué productos vendes?', placeholder: 'Ropa, accesorios, electrónicos...', type: 'text' },
  { id: 'phone', label: 'Teléfono / WhatsApp', placeholder: '+595 xxx xxx xxx', type: 'tel' },
];

export default function Whitelist() {
  const navigate = useNavigate();
  const [step, setStep] = useState<'email' | 'form'>('email');
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [email, setEmail] = useState('');
  const [showAnimation, setShowAnimation] = useState(true);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [currentAnswer, setCurrentAnswer] = useState('');

  // Check if animation was already shown
  useEffect(() => {
    const animationShown = localStorage.getItem('whitelist_animation_shown');
    if (animationShown === 'true') {
      setShowAnimation(false);
    } else {
      // Mark animation as shown after 3 seconds
      const timer = setTimeout(() => {
        localStorage.setItem('whitelist_animation_shown', 'true');
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      toast({
        title: 'Email requerido',
        description: 'Por favor ingresa tu correo electrónico',
        variant: 'destructive',
      });
      return;
    }
    setStep('form');
  };

  const handleNextQuestion = () => {
    if (!currentAnswer.trim()) {
      toast({
        title: 'Campo requerido',
        description: 'Por favor completa este campo',
        variant: 'destructive',
      });
      return;
    }

    const currentQ = questions[currentQuestion];
    setAnswers(prev => ({ ...prev, [currentQ.id]: currentAnswer }));
    setCurrentAnswer('');

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(prev => prev + 1);
    } else {
      handleSubmitToWebhook();
    }
  };

  const handlePreviousQuestion = () => {
    if (currentQuestion > 0) {
      const prevQ = questions[currentQuestion - 1];
      setCurrentAnswer(answers[prevQ.id] || '');
      setCurrentQuestion(prev => prev - 1);
    } else {
      setStep('email');
    }
  };

  const handleSubmitToWebhook = async () => {
    const finalData = {
      email,
      ...answers,
      [questions[currentQuestion].id]: currentAnswer,
      timestamp: new Date().toISOString(),
    };

    try {
      // Use API route instead of direct webhook call
      const response = await fetch('/api/submit-waitlist', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(finalData),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        navigate('/waitlist-success');
      } else {
        throw new Error(result.error || 'Error al enviar datos');
      }
    } catch (error) {
      toast({
        title: 'Error',
        description: 'Hubo un problema al registrar tu solicitud. Intenta nuevamente.',
        variant: 'destructive',
      });
      console.error('Webhook error:', error);
    }
  };

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Shader Background - Only show once */}
      {showAnimation && (
        <div className="absolute inset-0 z-0">
          <ShaderAnimation />
        </div>
      )}
      
      {/* Premium gradient background if animation already shown */}
      {!showAnimation && (
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-black via-sidebar-background to-black" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(186,234,89,0.1),transparent_50%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,transparent_0%,rgba(186,234,89,0.05)_50%,transparent_100%)] animate-[shimmer_3s_ease-in-out_infinite]" />
        </div>
      )}

      {/* Content Overlay */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-4">
        {step === 'email' ? (
          // STEP 1: Email Collection
          <div className="w-full max-w-md animate-fade-in">
            <div className="text-center mb-10 space-y-6">
              <div className="flex items-center justify-center gap-6 mb-6">
                <div className="relative">
                  <Layers className="w-20 h-20 text-primary" />
                  <div className="absolute inset-0 w-20 h-20 bg-primary/20 blur-xl rounded-full" />
                </div>
                <h1 className="text-8xl font-bold bg-gradient-to-r from-primary via-white to-primary bg-clip-text text-transparent tracking-tight leading-none pb-2">
                  ordefy
                </h1>
              </div>
              <p className="text-2xl text-white/80 font-light tracking-wide">
                El futuro de tu e-commerce empieza aquí
              </p>
              <div className="h-px w-32 mx-auto bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
              <p className="text-sm text-white/50">
                Únete a los pioneros que están revolucionando su negocio
              </p>
            </div>

            <form onSubmit={handleEmailSubmit} className="space-y-6">
              <div className="relative backdrop-blur-2xl bg-gradient-to-br from-black/70 via-black/50 to-black/70 border border-primary/30 rounded-3xl p-10 shadow-[0_0_60px_rgba(186,234,89,0.2),inset_0_0_30px_rgba(186,234,89,0.05)] hover:border-primary/40 transition-all duration-500 group">
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative">
                  <div className="flex gap-3">
                    <Input
                      id="email"
                      type="email"
                      placeholder="tu@email.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="bg-white/5 border-primary/30 text-white placeholder:text-white/30 focus:border-primary focus:ring-2 focus:ring-primary/40 h-14 rounded-xl transition-all duration-300 text-base font-light backdrop-blur-sm"
                      required
                    />
                    <Button
                      type="submit"
                      size="lg"
                      className="bg-primary hover:bg-primary/90 text-black font-semibold whitespace-nowrap rounded-xl shadow-[0_0_30px_rgba(186,234,89,0.3)] hover:shadow-[0_0_40px_rgba(186,234,89,0.5)] transition-all duration-300 hover:scale-[1.02] px-8 h-14"
                    >
                      Continuar
                    </Button>
                  </div>
                </div>
              </div>
            </form>

            <div className="text-center mt-6 space-y-2">
              <p className="text-white/30 text-xs">
                Al unirte aceptas recibir información sobre ordefy
              </p>
              <p className="text-white/20 text-xs font-light flex items-center justify-center gap-1">
                Made in PY 🇵🇾
              </p>
            </div>
          </div>
        ) : (
          // STEP 2: Typeform-style Questions
          <div className="w-full max-w-2xl animate-fade-in">
            <div className="min-h-[400px] flex flex-col justify-between">
              {/* Progress Bar */}
              <div className="mb-8">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-white/40 text-sm font-light">
                    {currentQuestion + 1} de {questions.length}
                  </span>
                  <button
                    onClick={() => setStep('email')}
                    className="text-white/40 hover:text-primary/80 transition-all duration-300 text-sm font-light"
                  >
                    Volver al inicio
                  </button>
                </div>
                <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-primary transition-all duration-500 ease-out"
                    style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
                  />
                </div>
              </div>

              {/* Question */}
              <div className="flex-1 flex flex-col justify-center animate-fade-in">
                <h2 className="text-5xl font-light text-white mb-12 tracking-tight">
                  {questions[currentQuestion].label}
                </h2>

                <div className="relative backdrop-blur-2xl bg-gradient-to-br from-black/70 via-black/50 to-black/70 border border-primary/30 rounded-3xl p-8 shadow-[0_0_60px_rgba(186,234,89,0.2),inset_0_0_30px_rgba(186,234,89,0.05)] hover:border-primary/40 transition-all duration-500 group">
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative">
                    <Input
                      type={questions[currentQuestion].type}
                      placeholder={questions[currentQuestion].placeholder}
                      value={currentAnswer}
                      onChange={(e) => setCurrentAnswer(e.target.value)}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter') {
                          e.preventDefault();
                          handleNextQuestion();
                        }
                      }}
                      className="bg-white/5 border-primary/20 text-white placeholder:text-white/30 focus:border-primary/50 focus:ring-1 focus:ring-primary/30 h-16 rounded-xl transition-all duration-300 text-lg font-light backdrop-blur-sm"
                      autoFocus
                    />
                  </div>
                </div>
              </div>

              {/* Navigation */}
              <div className="flex items-center justify-between mt-12">
                <Button
                  type="button"
                  onClick={handlePreviousQuestion}
                  variant="ghost"
                  className="text-white/40 hover:text-white/80 hover:bg-white/5 transition-all duration-300 gap-2"
                >
                  <ArrowLeft className="w-4 h-4" />
                  Atrás
                </Button>

                <Button
                  type="button"
                  onClick={handleNextQuestion}
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-black font-semibold rounded-xl shadow-[0_0_30px_rgba(186,234,89,0.3)] hover:shadow-[0_0_40px_rgba(186,234,89,0.5)] transition-all duration-300 hover:scale-[1.02] px-8 h-14 gap-2"
                >
                  {currentQuestion === questions.length - 1 ? 'Completar' : 'Siguiente'}
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
