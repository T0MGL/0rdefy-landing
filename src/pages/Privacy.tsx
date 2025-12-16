import { useEffect, useState } from 'react';
import { ShaderAnimation } from '@/components/ui/shader-animation';
import { Shield, Lock, Eye, FileText, Database, UserCheck, Mail, Globe } from 'lucide-react';

export default function Privacy() {
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
      <div className="relative z-10 flex flex-col items-center justify-start min-h-screen px-4 py-12">
        <div className="w-full max-w-4xl animate-fade-in">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="flex justify-center mb-6">
              <div className="relative">
                <div className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center backdrop-blur-xl border border-primary/30">
                  <Shield className="w-10 h-10 text-primary" />
                </div>
                <div className="absolute inset-0 w-20 h-20 bg-primary/30 blur-2xl rounded-full animate-pulse" />
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-primary via-white to-primary bg-clip-text text-transparent tracking-tight mb-4">
              Política de Privacidad
            </h1>
            <p className="text-lg text-white/60 font-light">
              Última actualización: {new Date().toLocaleDateString('es-PY', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
          </div>

          {/* Main Content */}
          <div className="backdrop-blur-2xl bg-gradient-to-br from-black/70 via-black/50 to-black/70 border border-primary/30 rounded-3xl p-8 md:p-12 shadow-[0_0_60px_rgba(186,234,89,0.2)] space-y-8">

            {/* Company Info */}
            <div className="pb-8 border-b border-white/10">
              <h2 className="text-2xl font-normal text-white mb-4 flex items-center gap-3">
                <FileText className="w-6 h-6 text-primary" />
                Información de la Empresa
              </h2>
              <div className="space-y-2 text-white/70 font-light">
                <p><strong className="text-white/90">Nombre:</strong> Ordefy E.A.S</p>
                <p><strong className="text-white/90">Dirección:</strong> Legion Civil Extranjera casi Pacheco, Asunción, Paraguay</p>
                <p><strong className="text-white/90">Sitio web:</strong> <a href="https://ordefy.com" className="text-primary hover:underline">ordefy.com</a></p>
              </div>
            </div>

            {/* Introduction */}
            <section>
              <h2 className="text-2xl font-normal text-white mb-4 flex items-center gap-3">
                <Eye className="w-6 h-6 text-primary" />
                Introducción
              </h2>
              <p className="text-white/70 font-light leading-relaxed">
                En Ordefy E.A.S ("nosotros", "nuestro" o "la Empresa"), nos comprometemos a proteger su privacidad y sus datos personales. Esta Política de Privacidad describe cómo recopilamos, usamos, compartimos y protegemos la información cuando utiliza nuestra aplicación Shopify y nuestros servicios relacionados.
              </p>
            </section>

            {/* Information We Collect */}
            <section>
              <h2 className="text-2xl font-normal text-white mb-4 flex items-center gap-3">
                <Database className="w-6 h-6 text-primary" />
                Información que Recopilamos
              </h2>
              <div className="space-y-4 text-white/70 font-light leading-relaxed">
                <div>
                  <h3 className="text-lg text-white/90 font-normal mb-2">1. Información proporcionada directamente por usted:</h3>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Nombre y apellido</li>
                    <li>Dirección de correo electrónico</li>
                    <li>Número de teléfono</li>
                    <li>Nombre del negocio</li>
                    <li>Sitio web del negocio</li>
                    <li>Ubicación (ciudad)</li>
                    <li>Información comercial (ingresos mensuales, número de pedidos, productos principales)</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg text-white/90 font-normal mb-2">2. Información de la tienda Shopify:</h3>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Datos de pedidos (productos, cantidades, precios, información del cliente)</li>
                    <li>Información de inventario y productos</li>
                    <li>Datos de clientes (con su consentimiento)</li>
                    <li>Configuración de la tienda y preferencias</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg text-white/90 font-normal mb-2">3. Información recopilada automáticamente:</h3>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Dirección IP</li>
                    <li>Tipo de navegador y dispositivo</li>
                    <li>Información de uso de la aplicación</li>
                    <li>Cookies y tecnologías similares</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* How We Use Information */}
            <section>
              <h2 className="text-2xl font-normal text-white mb-4 flex items-center gap-3">
                <UserCheck className="w-6 h-6 text-primary" />
                Cómo Usamos Su Información
              </h2>
              <div className="space-y-2 text-white/70 font-light leading-relaxed">
                <p>Utilizamos la información recopilada para:</p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Proveer y mejorar nuestros servicios de gestión de pedidos y logística</li>
                  <li>Procesar y gestionar pedidos de su tienda Shopify</li>
                  <li>Sincronizar inventario y gestionar proveedores</li>
                  <li>Generar análisis y reportes de negocio</li>
                  <li>Comunicarnos con usted sobre actualizaciones del servicio</li>
                  <li>Proporcionar soporte técnico y atención al cliente</li>
                  <li>Cumplir con obligaciones legales y regulatorias</li>
                  <li>Prevenir fraude y mejorar la seguridad</li>
                </ul>
              </div>
            </section>

            {/* Data Sharing */}
            <section>
              <h2 className="text-2xl font-normal text-white mb-4 flex items-center gap-3">
                <Globe className="w-6 h-6 text-primary" />
                Compartir Información
              </h2>
              <div className="space-y-4 text-white/70 font-light leading-relaxed">
                <p>Podemos compartir su información con:</p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li><strong className="text-white/90">Proveedores de servicios:</strong> Empresas que nos ayudan a operar nuestro negocio (hosting, análisis, email marketing)</li>
                  <li><strong className="text-white/90">Proveedores de logística:</strong> Empresas de courier para procesar envíos</li>
                  <li><strong className="text-white/90">Shopify:</strong> Como plataforma sobre la cual operamos</li>
                  <li><strong className="text-white/90">Requisitos legales:</strong> Cuando sea requerido por ley o para proteger nuestros derechos</li>
                </ul>
                <p className="text-white/80 font-normal">
                  No vendemos ni alquilamos su información personal a terceros.
                </p>
              </div>
            </section>

            {/* Data Security */}
            <section>
              <h2 className="text-2xl font-normal text-white mb-4 flex items-center gap-3">
                <Lock className="w-6 h-6 text-primary" />
                Seguridad de Datos
              </h2>
              <div className="space-y-2 text-white/70 font-light leading-relaxed">
                <p>Implementamos medidas de seguridad técnicas y organizativas apropiadas para proteger su información, incluyendo:</p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Encriptación de datos en tránsito y en reposo</li>
                  <li>Acceso restringido a información personal</li>
                  <li>Monitoreo regular de seguridad</li>
                  <li>Actualizaciones de seguridad periódicas</li>
                </ul>
              </div>
            </section>

            {/* Data Retention */}
            <section>
              <h2 className="text-2xl font-normal text-white mb-4">Retención de Datos</h2>
              <p className="text-white/70 font-light leading-relaxed">
                Conservamos su información personal durante el tiempo que sea necesario para cumplir con los propósitos descritos en esta política, a menos que la ley requiera o permita un período de retención más largo. Cuando desinstale nuestra aplicación, eliminaremos sus datos dentro de un plazo razonable, excepto aquellos que debamos retener por obligaciones legales.
              </p>
            </section>

            {/* Your Rights */}
            <section>
              <h2 className="text-2xl font-normal text-white mb-4">Sus Derechos</h2>
              <div className="space-y-2 text-white/70 font-light leading-relaxed">
                <p>Usted tiene derecho a:</p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Acceder a sus datos personales</li>
                  <li>Corregir datos inexactos o incompletos</li>
                  <li>Solicitar la eliminación de sus datos</li>
                  <li>Oponerse al procesamiento de sus datos</li>
                  <li>Solicitar la portabilidad de sus datos</li>
                  <li>Retirar su consentimiento en cualquier momento</li>
                </ul>
                <p className="mt-4">
                  Para ejercer estos derechos, contáctenos a través de los medios indicados al final de esta política.
                </p>
              </div>
            </section>

            {/* Cookies */}
            <section>
              <h2 className="text-2xl font-normal text-white mb-4">Cookies y Tecnologías Similares</h2>
              <p className="text-white/70 font-light leading-relaxed">
                Utilizamos cookies y tecnologías similares para mejorar su experiencia, analizar el uso de nuestros servicios y personalizar contenido. Puede configurar su navegador para rechazar cookies, aunque esto puede afectar la funcionalidad de algunos servicios.
              </p>
            </section>

            {/* Third Party Services */}
            <section>
              <h2 className="text-2xl font-normal text-white mb-4">Servicios de Terceros</h2>
              <p className="text-white/70 font-light leading-relaxed">
                Nuestra aplicación puede contener enlaces a sitios web de terceros. No somos responsables por las prácticas de privacidad de estos sitios. Le recomendamos revisar sus políticas de privacidad.
              </p>
            </section>

            {/* Children's Privacy */}
            <section>
              <h2 className="text-2xl font-normal text-white mb-4">Privacidad de Menores</h2>
              <p className="text-white/70 font-light leading-relaxed">
                Nuestros servicios están dirigidos a negocios y no recopilamos intencionalmente información de menores de 18 años. Si descubrimos que hemos recopilado información de un menor, la eliminaremos de inmediato.
              </p>
            </section>

            {/* International Transfers */}
            <section>
              <h2 className="text-2xl font-normal text-white mb-4">Transferencias Internacionales</h2>
              <p className="text-white/70 font-light leading-relaxed">
                Su información puede ser transferida y almacenada en servidores ubicados fuera de Paraguay. Nos aseguramos de que estas transferencias cumplan con las leyes de protección de datos aplicables y que se implementen medidas de seguridad adecuadas.
              </p>
            </section>

            {/* GDPR Compliance */}
            <section>
              <h2 className="text-2xl font-normal text-white mb-4">Cumplimiento GDPR</h2>
              <p className="text-white/70 font-light leading-relaxed">
                Si usted es residente de la Unión Europea, cumplimos con el Reglamento General de Protección de Datos (GDPR). Procesamos sus datos personales solo cuando tenemos una base legal para hacerlo, como su consentimiento, cumplimiento de contrato o intereses legítimos.
              </p>
            </section>

            {/* CCPA Compliance */}
            <section>
              <h2 className="text-2xl font-normal text-white mb-4">Cumplimiento CCPA (California)</h2>
              <p className="text-white/70 font-light leading-relaxed">
                Si usted es residente de California, tiene derechos adicionales bajo la Ley de Privacidad del Consumidor de California (CCPA), incluyendo el derecho a saber qué información recopilamos y solicitar su eliminación.
              </p>
            </section>

            {/* Changes to Policy */}
            <section>
              <h2 className="text-2xl font-normal text-white mb-4">Cambios a Esta Política</h2>
              <p className="text-white/70 font-light leading-relaxed">
                Podemos actualizar esta Política de Privacidad periódicamente. Le notificaremos sobre cambios significativos publicando la nueva política en esta página y actualizando la fecha de "Última actualización". Le recomendamos revisar esta política regularmente.
              </p>
            </section>

            {/* Contact Information */}
            <section className="pt-8 border-t border-white/10">
              <h2 className="text-2xl font-normal text-white mb-4 flex items-center gap-3">
                <Mail className="w-6 h-6 text-primary" />
                Contacto
              </h2>
              <div className="space-y-2 text-white/70 font-light leading-relaxed">
                <p>Si tiene preguntas sobre esta Política de Privacidad o desea ejercer sus derechos, contáctenos:</p>
                <div className="mt-4 space-y-1">
                  <p><strong className="text-white/90">Empresa:</strong> Ordefy E.A.S</p>
                  <p><strong className="text-white/90">Dirección:</strong> Legion Civil Extranjera casi Pacheco, Asunción, Paraguay</p>
                  <p><strong className="text-white/90">Email:</strong> <a href="mailto:privacy@ordefy.com" className="text-primary hover:underline">privacy@ordefy.com</a></p>
                  <p><strong className="text-white/90">Sitio web:</strong> <a href="https://ordefy.com" className="text-primary hover:underline">ordefy.com</a></p>
                </div>
              </div>
            </section>

            {/* Shopify Specific */}
            <section className="pt-8 border-t border-white/10">
              <h2 className="text-2xl font-normal text-white mb-4">Información Específica de Shopify</h2>
              <div className="space-y-4 text-white/70 font-light leading-relaxed">
                <p>
                  Ordefy E.A.S es una aplicación de terceros en la plataforma Shopify. Al instalar nuestra aplicación, usted autoriza a Shopify a compartir cierta información de su tienda con nosotros según lo necesario para proveer nuestros servicios.
                </p>
                <p>
                  Cumplimos con todos los requisitos de la <a href="https://www.shopify.com/legal/api-terms" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Política de API de Shopify</a> y <a href="https://www.shopify.com/legal/partners/app-developer-agreement" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Acuerdo para Desarrolladores de Apps de Shopify</a>.
                </p>
              </div>
            </section>
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
