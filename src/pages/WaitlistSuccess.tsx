import { useEffect, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import Confetti from 'react-confetti';
import { ShaderAnimation } from '@/components/ui/shader-animation';
import { Check, Cpu, TrendingUp, Shield, MapPin } from 'lucide-react';

export default function WaitlistSuccess() {
  const [showAnimation, setShowAnimation] = useState(false);
  const [showConfetti, setShowConfetti] = useState(true);
  const [windowSize, setWindowSize] = useState({
    width: typeof window !== 'undefined' ? window.innerWidth : 1920,
    height: typeof window !== 'undefined' ? window.innerHeight : 1080,
  });

  // Detect if user prefers reduced motion (accessibility)
  const prefersReducedMotion = useReducedMotion();

  // Detect mobile device
  const isMobile = typeof window !== 'undefined' ? window.innerWidth < 768 : false;

  useEffect(() => {
    const animationShown = localStorage.getItem('whitelist_animation_shown');
    setShowAnimation(animationShown !== 'true');

    // Stop confetti after 5 seconds (3s on mobile for better performance)
    const timer = setTimeout(() => {
      setShowConfetti(false);
    }, isMobile ? 3000 : 5000);

    // Throttled resize handler for better performance
    let resizeTimeout: ReturnType<typeof setTimeout>;
    const handleResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => {
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      }, 150); // Throttle to 150ms
    };

    window.addEventListener('resize', handleResize, { passive: true });

    return () => {
      clearTimeout(timer);
      clearTimeout(resizeTimeout);
      window.removeEventListener('resize', handleResize);
    };
  }, [isMobile]);

  // Animation variants - simplified if reduced motion is preferred
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: prefersReducedMotion ? 0 : 0.1,
        delayChildren: prefersReducedMotion ? 0 : 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: prefersReducedMotion ? 0 : 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 12,
      },
    },
  };

  const featureVariants = {
    hidden: { opacity: 0, scale: prefersReducedMotion ? 1 : 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 10,
      },
    },
  };

  // Confetti config optimized for mobile
  const confettiConfig = {
    width: windowSize.width,
    height: windowSize.height,
    recycle: false,
    numberOfPieces: isMobile ? 200 : 500, // Reduce particles on mobile
    colors: ['#BAEA59', '#ffffff', '#1a1a1a'],
    gravity: isMobile ? 0.4 : 0.3, // Faster fall on mobile
    wind: 0,
    initialVelocityY: isMobile ? 10 : 20,
  };

  return (
    <div className="relative w-full min-h-screen overflow-hidden">
      {/* Confetti - Only show if not reduced motion preference */}
      {showConfetti && !prefersReducedMotion && (
        <Confetti {...confettiConfig} />
      )}

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
        <motion.div
          className="w-full max-w-4xl"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Success Icon */}
          <motion.div
            className="flex justify-center mb-8 md:mb-12"
            variants={itemVariants}
          >
            <div className="relative">
              <motion.div
                className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-primary/20 flex items-center justify-center backdrop-blur-xl border border-primary/30 will-change-transform"
                animate={prefersReducedMotion ? {} : {
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <Check className="w-10 h-10 md:w-12 md:h-12 text-primary" strokeWidth={3} />
              </motion.div>
              <motion.div
                className="absolute inset-0 w-20 h-20 md:w-24 md:h-24 bg-primary/30 blur-2xl rounded-full will-change-transform"
                animate={prefersReducedMotion ? {} : {
                  scale: [1, 1.2, 1],
                  opacity: [0.5, 0.8, 0.5],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </div>
          </motion.div>

          {/* Main Message */}
          <motion.div
            className="text-center mb-12 md:mb-16 space-y-4 md:space-y-6"
            variants={itemVariants}
          >
            <motion.h1
              className="text-2xl sm:text-4xl md:text-5xl lg:text-7xl font-bold bg-gradient-to-r from-primary via-white to-primary bg-clip-text text-transparent tracking-tight leading-tight px-4"
              initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                type: "spring",
                stiffness: 80,
                damping: 15,
                delay: prefersReducedMotion ? 0 : 0.3,
              }}
            >
              ¡Bienvenido a la revolución!
            </motion.h1>
            <motion.p
              className="text-lg md:text-xl lg:text-2xl text-white/80 font-light max-w-2xl mx-auto px-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: prefersReducedMotion ? 0 : 0.5, duration: 0.8 }}
            >
              Tus datos han sido enviados exitosamente.
              <span className="text-primary font-normal"> Estás entre los primeros</span>.
            </motion.p>
          </motion.div>

          {/* Hype Content */}
          <motion.div
            className="backdrop-blur-2xl bg-gradient-to-br from-black/70 via-black/50 to-black/70 border border-primary/30 rounded-2xl md:rounded-3xl p-6 md:p-8 lg:p-12 shadow-[0_0_60px_rgba(186,234,89,0.2)] mb-8"
            variants={itemVariants}
          >
            <div className="space-y-8 md:space-y-10">
              <motion.div
                className="text-center space-y-3 md:space-y-4"
                variants={itemVariants}
              >
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-light text-white tracking-tight">
                  ¿Qué es <span className="text-primary font-normal">ordefy</span>?
                </h2>
                <p className="text-white/60 text-base md:text-lg font-light max-w-2xl mx-auto leading-relaxed">
                  La primera plataforma integral diseñada específicamente para e-commerce en Paraguay.
                  Simplificamos cada aspecto de tu operación, desde la gestión de pedidos hasta la logística.
                </p>
              </motion.div>

              {/* Features Grid */}
              <motion.div
                className="grid md:grid-cols-2 gap-4 md:gap-6 mt-8 md:mt-12"
                variants={containerVariants}
              >
                <motion.div
                  className="group relative backdrop-blur-xl bg-white/5 border border-primary/20 rounded-xl md:rounded-2xl p-5 md:p-6 will-change-transform"
                  variants={featureVariants}
                  whileHover={prefersReducedMotion ? {} : {
                    scale: 1.02,
                    borderColor: "rgba(186,234,89,0.4)",
                    transition: { duration: 0.2 }
                  }}
                  whileTap={isMobile && !prefersReducedMotion ? { scale: 0.98 } : {}}
                >
                  <motion.div
                    className="absolute inset-0 rounded-xl md:rounded-2xl bg-gradient-to-br from-primary/5 via-transparent to-transparent pointer-events-none"
                    initial={{ opacity: 0 }}
                    whileHover={prefersReducedMotion ? {} : { opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                  <div className="relative">
                    <motion.div
                      className="w-10 h-10 md:w-12 md:h-12 rounded-lg md:rounded-xl bg-primary/20 flex items-center justify-center mb-3 md:mb-4"
                      whileHover={prefersReducedMotion ? {} : { rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      <Cpu className="w-5 h-5 md:w-6 md:h-6 text-primary" />
                    </motion.div>
                    <h3 className="text-lg md:text-xl font-normal text-white mb-2">Automatización Total</h3>
                    <p className="text-sm md:text-base text-white/50 font-light leading-relaxed">
                      Sincroniza tu inventario, procesa pedidos automáticamente y gestiona proveedores sin esfuerzo.
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  className="group relative backdrop-blur-xl bg-white/5 border border-primary/20 rounded-xl md:rounded-2xl p-5 md:p-6 will-change-transform"
                  variants={featureVariants}
                  whileHover={prefersReducedMotion ? {} : {
                    scale: 1.02,
                    borderColor: "rgba(186,234,89,0.4)",
                    transition: { duration: 0.2 }
                  }}
                  whileTap={isMobile && !prefersReducedMotion ? { scale: 0.98 } : {}}
                >
                  <motion.div
                    className="absolute inset-0 rounded-xl md:rounded-2xl bg-gradient-to-br from-primary/5 via-transparent to-transparent pointer-events-none"
                    initial={{ opacity: 0 }}
                    whileHover={prefersReducedMotion ? {} : { opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                  <div className="relative">
                    <motion.div
                      className="w-10 h-10 md:w-12 md:h-12 rounded-lg md:rounded-xl bg-primary/20 flex items-center justify-center mb-3 md:mb-4"
                      whileHover={prefersReducedMotion ? {} : { rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      <TrendingUp className="w-5 h-5 md:w-6 md:h-6 text-primary" />
                    </motion.div>
                    <h3 className="text-lg md:text-xl font-normal text-white mb-2">Inteligencia de Negocio</h3>
                    <p className="text-sm md:text-base text-white/50 font-light leading-relaxed">
                      Analíticas en tiempo real, predicciones de demanda y recomendaciones inteligentes para maximizar tus ventas.
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  className="group relative backdrop-blur-xl bg-white/5 border border-primary/20 rounded-xl md:rounded-2xl p-5 md:p-6 will-change-transform"
                  variants={featureVariants}
                  whileHover={prefersReducedMotion ? {} : {
                    scale: 1.02,
                    borderColor: "rgba(186,234,89,0.4)",
                    transition: { duration: 0.2 }
                  }}
                  whileTap={isMobile && !prefersReducedMotion ? { scale: 0.98 } : {}}
                >
                  <motion.div
                    className="absolute inset-0 rounded-xl md:rounded-2xl bg-gradient-to-br from-primary/5 via-transparent to-transparent pointer-events-none"
                    initial={{ opacity: 0 }}
                    whileHover={prefersReducedMotion ? {} : { opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                  <div className="relative">
                    <motion.div
                      className="w-10 h-10 md:w-12 md:h-12 rounded-lg md:rounded-xl bg-primary/20 flex items-center justify-center mb-3 md:mb-4"
                      whileHover={prefersReducedMotion ? {} : { rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      <Shield className="w-5 h-5 md:w-6 md:h-6 text-primary" />
                    </motion.div>
                    <h3 className="text-lg md:text-xl font-normal text-white mb-2">Logística Simplificada</h3>
                    <p className="text-sm md:text-base text-white/50 font-light leading-relaxed">
                      Integración directa con couriers locales. Compara precios y tiempos en tiempo real.
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  className="group relative backdrop-blur-xl bg-white/5 border border-primary/20 rounded-xl md:rounded-2xl p-5 md:p-6 will-change-transform"
                  variants={featureVariants}
                  whileHover={prefersReducedMotion ? {} : {
                    scale: 1.02,
                    borderColor: "rgba(186,234,89,0.4)",
                    transition: { duration: 0.2 }
                  }}
                  whileTap={isMobile && !prefersReducedMotion ? { scale: 0.98 } : {}}
                >
                  <motion.div
                    className="absolute inset-0 rounded-xl md:rounded-2xl bg-gradient-to-br from-primary/5 via-transparent to-transparent pointer-events-none"
                    initial={{ opacity: 0 }}
                    whileHover={prefersReducedMotion ? {} : { opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                  <div className="relative">
                    <motion.div
                      className="w-10 h-10 md:w-12 md:h-12 rounded-lg md:rounded-xl bg-primary/20 flex items-center justify-center mb-3 md:mb-4"
                      whileHover={prefersReducedMotion ? {} : { rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      <MapPin className="w-5 h-5 md:w-6 md:h-6 text-primary" />
                    </motion.div>
                    <h3 className="text-lg md:text-xl font-normal text-white mb-2">Construido para Paraguay</h3>
                    <p className="text-sm md:text-base text-white/50 font-light leading-relaxed">
                      Diseñado específicamente para el mercado local. Integraciones nativas y soporte en tiempo real.
                    </p>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>

          {/* What's Next */}
          <motion.div
            className="text-center space-y-4 md:space-y-6 px-4"
            variants={itemVariants}
          >
            <motion.div
              className="inline-block px-5 md:px-6 py-2.5 md:py-3 rounded-full bg-primary/10 border border-primary/30"
              whileHover={prefersReducedMotion ? {} : { scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <p className="text-primary font-light text-xs md:text-sm">
                ¿Qué sigue?
              </p>
            </motion.div>
            <p className="text-white/60 text-sm md:text-base lg:text-lg font-light max-w-xl mx-auto leading-relaxed">
              Nuestro equipo revisará tu solicitud y te contactaremos pronto para darte acceso prioritario.
              Mientras tanto, prepárate para transformar tu e-commerce.
            </p>
          </motion.div>

          {/* Footer */}
          <motion.div
            className="text-center mt-8 md:mt-12 pt-6 md:pt-8 border-t border-white/10"
            variants={itemVariants}
          >
            <p className="text-white/30 text-xs md:text-sm font-light flex items-center justify-center gap-2">
              Made with passion in PY 🇵🇾
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
