import { useState } from "react";
import {
  Layers,
  Instagram,
  Twitter,
  Linkedin,
  ArrowRight,
  MapPin,
  Mail,
} from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setEmail("");
      setTimeout(() => setIsSubscribed(false), 3000);
    }
  };

  const footerLinks = {
    producto: [
      { label: "Características", href: "#features" },
      { label: "Integraciones", href: "#integrations" },
      { label: "Precios", href: "/pricing" },
      { label: "Changelog", href: "#" },
    ],
    empresa: [
      { label: "Sobre Nosotros", href: "#" },
      { label: "Blog", href: "#" },
      { label: "Carreras", href: "#" },
      { label: "Contacto", href: "mailto:hola@ordefy.com" },
    ],
    legal: [
      { label: "Privacidad", href: "/privacy" },
      { label: "Términos", href: "#" },
      { label: "Cookies", href: "#" },
    ],
  };

  const socialLinks = [
    { icon: Instagram, href: "https://instagram.com/ordefy", label: "Instagram" },
    { icon: Twitter, href: "https://x.com/ordefy", label: "X (Twitter)" },
    { icon: Linkedin, href: "https://linkedin.com/company/ordefy", label: "LinkedIn" },
  ];

  return (
    <footer className="relative overflow-hidden z-10">
      {/* Top gradient border */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

      {/* Ambient glow effect */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/5 blur-[120px] pointer-events-none" />

      <div className="relative bg-[hsl(240,10%,3%)] pt-16 pb-8 md:pt-20 md:pb-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">

          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 pb-12 border-b border-white/5">

            {/* Brand Column */}
            <div className="lg:col-span-4 space-y-6">
              {/* Logo */}
              <a href="/" className="inline-flex items-center gap-2.5 group">
                <div className="relative">
                  <div className="absolute inset-0 bg-primary/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <Layers className="relative w-8 h-8 text-primary transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6" />
                </div>
                <span className="text-xl font-semibold text-white tracking-tight">
                  ordefy
                </span>
              </a>

              {/* Description */}
              <p className="text-[15px] leading-relaxed text-white/50 max-w-xs">
                La plataforma todo-en-uno que transforma tu negocio en una máquina de ventas automatizada.
              </p>

              {/* Location Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.03] border border-white/5">
                <MapPin className="w-3.5 h-3.5 text-primary/70" />
                <span className="text-xs text-white/40">Asunción, Paraguay</span>
                <span className="text-base leading-none">🇵🇾</span>
              </div>

              {/* Social Links */}
              <div className="flex items-center gap-1">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative p-2.5 rounded-lg transition-all duration-300 hover:bg-white/[0.03]"
                    aria-label={social.label}
                  >
                    <social.icon className="w-[18px] h-[18px] text-white/30 transition-all duration-300 group-hover:text-primary group-hover:scale-110" />
                  </a>
                ))}
              </div>
            </div>

            {/* Links Columns */}
            <div className="lg:col-span-5 grid grid-cols-3 gap-4 sm:gap-8">
              {/* Producto */}
              <div className="space-y-3 sm:space-y-4">
                <h4 className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.12em] sm:tracking-[0.15em] text-white/70">
                  Producto
                </h4>
                <ul className="space-y-2 sm:space-y-3">
                  {footerLinks.producto.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="group inline-flex items-center text-[11px] sm:text-[13px] text-white/40 transition-colors duration-200 hover:text-white"
                      >
                        <span className="relative">
                          {link.label}
                          <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-primary transition-all duration-300 group-hover:w-full" />
                        </span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Empresa */}
              <div className="space-y-3 sm:space-y-4">
                <h4 className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.12em] sm:tracking-[0.15em] text-white/70">
                  Empresa
                </h4>
                <ul className="space-y-2 sm:space-y-3">
                  {footerLinks.empresa.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="group inline-flex items-center text-[11px] sm:text-[13px] text-white/40 transition-colors duration-200 hover:text-white"
                      >
                        <span className="relative">
                          {link.label}
                          <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-primary transition-all duration-300 group-hover:w-full" />
                        </span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Legal */}
              <div className="space-y-3 sm:space-y-4">
                <h4 className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.12em] sm:tracking-[0.15em] text-white/70">
                  Legal
                </h4>
                <ul className="space-y-2 sm:space-y-3">
                  {footerLinks.legal.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="group inline-flex items-center text-[11px] sm:text-[13px] text-white/40 transition-colors duration-200 hover:text-white"
                      >
                        <span className="relative">
                          {link.label}
                          <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-primary transition-all duration-300 group-hover:w-full" />
                        </span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Newsletter Column */}
            <div className="lg:col-span-3 space-y-4">
              <h4 className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.12em] sm:tracking-[0.15em] text-white/70">
                Newsletter
              </h4>
              <p className="text-xs sm:text-[13px] text-white/40 leading-relaxed">
                Recibe tips de e-commerce y actualizaciones exclusivas.
              </p>

              <form onSubmit={handleNewsletterSubmit} className="relative">
                <div className="relative group">
                  {/* Input glow on focus */}
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/20 to-primary/0 rounded-lg opacity-0 group-focus-within:opacity-100 transition-opacity duration-300 blur-sm" />

                  <div className="relative flex items-center">
                    <Mail className="absolute left-3 w-4 h-4 text-white/20 pointer-events-none transition-colors duration-200 group-focus-within:text-primary/50" />
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="tu@email.com"
                      className="w-full bg-white/[0.03] border border-white/10 rounded-lg pl-10 pr-12 py-3 text-[13px] text-white placeholder:text-white/25 focus:outline-none focus:border-primary/30 focus:bg-white/[0.05] transition-all duration-200"
                      required
                    />
                    <button
                      type="submit"
                      className="absolute right-1.5 p-2 rounded-md bg-primary/10 text-primary hover:bg-primary hover:text-black transition-all duration-200 hover:scale-105 active:scale-95"
                      aria-label="Suscribirse"
                    >
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* Success message */}
                <div className={`absolute -bottom-6 left-0 flex items-center gap-1.5 text-[11px] text-primary transition-all duration-300 ${isSubscribed ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-1'}`}>
                  <span>¡Gracias por suscribirte!</span>
                </div>
              </form>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Copyright */}
            <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 text-[12px] text-white/25">
              <span>© {currentYear} Ordefy E.A.S.</span>
              <span className="hidden sm:block">·</span>
              <span>Todos los derechos reservados</span>
            </div>

            {/* Made with love */}
            <div className="flex items-center gap-2 text-[12px] text-white/25">
              <span>Hecho con</span>
              <span className="relative inline-flex">
                <span className="text-primary font-medium">pasión</span>
                <span className="absolute inset-0 text-primary font-medium animate-pulse blur-sm">pasión</span>
              </span>
              <span>en Paraguay</span>
              <span className="text-base">🇵🇾</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom gradient line */}
      <div className="h-1 bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
    </footer>
  );
}
