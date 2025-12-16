import { useEffect, useState } from 'react';
import { ShaderAnimation } from '@/components/ui/shader-animation';
import { Check, Cpu, TrendingUp, Shield, MapPin } from 'lucide-react';

export default function WaitlistSuccess() {
  const [showAnimation, setShowAnimation] = useState(false);

  useEffect(() => {
    const animationShown = localStorage.getItem('whitelist_animation_shown');
    setShowAnimation(animationShown !== 'true');
  }, []);

  return (
    <div className="relative w-full min-h-screen overflow-hidden">
      {/* Background */}
      {showAnimation ? (
        <div className="absolute inset-0 z-0">
          <ShaderAnimation />
        </div>
      ) : (
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-black via-sidebar-background to-black" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(186,234,89,0.1),transparent_50%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,transparent_0%,rgba(186,234,89,0.05)_50%,transparent_100%)] animate-[shimmer_3s_ease-in-out_infinite]" />
        </div>
      )}

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 py-12">
        <div className="w-full max-w-4xl animate-fade-in">
          {/* Success Icon */}
          <div className="flex justify-center mb-12">
            <div className="relative">
              <div className="w-24 h-24 rounded-full bg-primary/20 flex items-center justify-center backdrop-blur-xl border border-primary/30">
                <Check className="w-12 h-12 text-primary" strokeWidth={3} />
              </div>
              <div className="absolute inset-0 w-24 h-24 bg-primary/30 blur-2xl rounded-full animate-pulse" />
            </div>
          </div>

          {/* Main Message */}
          <div className="text-center mb-16 space-y-6">
            <h1 className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-primary via-white to-primary bg-clip-text text-transparent tracking-tight leading-tight">
              ¡Bienvenido a la revolución!
            </h1>
            <p className="text-xl md:text-2xl text-white/80 font-light max-w-2xl mx-auto">
              Tus datos han sido enviados exitosamente. 
              <span className="text-primary font-normal"> Estás entre los primeros</span>.
            </p>
          </div>

          {/* Hype Content */}
          <div className="backdrop-blur-2xl bg-gradient-to-br from-black/70 via-black/50 to-black/70 border border-primary/30 rounded-3xl p-8 md:p-12 shadow-[0_0_60px_rgba(186,234,89,0.2)] mb-8">
            <div className="space-y-10">
              <div className="text-center space-y-4">
                <h2 className="text-3xl md:text-4xl font-light text-white tracking-tight">
                  ¿Qué es <span className="text-primary font-normal">ordefy</span>?
                </h2>
                <p className="text-white/60 text-lg font-light max-w-2xl mx-auto leading-relaxed">
                  La primera plataforma integral diseñada específicamente para e-commerce en Paraguay. 
                  Simplificamos cada aspecto de tu operación, desde la gestión de pedidos hasta la logística.
                </p>
              </div>

              {/* Features Grid */}
              <div className="grid md:grid-cols-2 gap-6 mt-12">
                <div className="group relative backdrop-blur-xl bg-white/5 border border-primary/20 rounded-2xl p-6 hover:border-primary/40 transition-all duration-300">
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="relative">
                    <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center mb-4">
                      <Cpu className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-normal text-white mb-2">Automatización Total</h3>
                    <p className="text-white/50 font-light leading-relaxed">
                      Sincroniza tu inventario, procesa pedidos automáticamente y gestiona proveedores sin esfuerzo.
                    </p>
                  </div>
                </div>

                <div className="group relative backdrop-blur-xl bg-white/5 border border-primary/20 rounded-2xl p-6 hover:border-primary/40 transition-all duration-300">
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="relative">
                    <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center mb-4">
                      <TrendingUp className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-normal text-white mb-2">Inteligencia de Negocio</h3>
                    <p className="text-white/50 font-light leading-relaxed">
                      Analíticas en tiempo real, predicciones de demanda y recomendaciones inteligentes para maximizar tus ventas.
                    </p>
                  </div>
                </div>

                <div className="group relative backdrop-blur-xl bg-white/5 border border-primary/20 rounded-2xl p-6 hover:border-primary/40 transition-all duration-300">
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="relative">
                    <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center mb-4">
                      <Shield className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-normal text-white mb-2">Logística Simplificada</h3>
                    <p className="text-white/50 font-light leading-relaxed">
                      Integración directa con couriers locales. Compara precios y tiempos en tiempo real.
                    </p>
                  </div>
                </div>

                <div className="group relative backdrop-blur-xl bg-white/5 border border-primary/20 rounded-2xl p-6 hover:border-primary/40 transition-all duration-300">
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="relative">
                    <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center mb-4">
                      <MapPin className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-normal text-white mb-2">Construido para Paraguay</h3>
                    <p className="text-white/50 font-light leading-relaxed">
                      Diseñado específicamente para el mercado local. Integraciones nativas y soporte en tiempo real.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* What's Next */}
          <div className="text-center space-y-6">
            <div className="inline-block px-6 py-3 rounded-full bg-primary/10 border border-primary/30">
              <p className="text-primary font-light text-sm">
                ¿Qué sigue?
              </p>
            </div>
            <p className="text-white/60 text-base md:text-lg font-light max-w-xl mx-auto leading-relaxed">
              Nuestro equipo revisará tu solicitud y te contactaremos pronto para darte acceso prioritario. 
              Mientras tanto, prepárate para transformar tu e-commerce.
            </p>
          </div>

          {/* Footer */}
          <div className="text-center mt-12 pt-8 border-t border-white/10">
            <p className="text-white/30 text-sm font-light flex items-center justify-center gap-2">
              Made with passion in PY 🇵🇾
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
