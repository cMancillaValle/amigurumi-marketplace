import React, { useState } from 'react';
import { 
  MessageCircle, 
  Mail, 
  MapPin, 
  Clock, 
  Send, 
  CheckCircle2, 
  Instagram, 
  AlertCircle,
  PhoneCall
} from 'lucide-react';
import { businessConfig } from '../data/businessConfig';

export const ContactSection: React.FC = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    contactInfo: '',
    inquiryType: 'general',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.contactInfo && formData.message) {
      setFormSubmitted(true);
      // Reset form after short delay
      setTimeout(() => {
        setFormData({ name: '', contactInfo: '', inquiryType: 'general', message: '' });
      }, 500);
    }
  };

  const handleWhatsAppClick = () => {
    // Generates a sample WhatsApp link or placeholder alert
    const message = encodeURIComponent('Hola! Me comunico desde la plataforma de Amigurumis para consultar por una pieza tejida.');
    window.open(`https://wa.me/?text=${message}`, '_blank');
  };

  return (
    <section id="contacto" className="py-16 sm:py-24 bg-white border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium bg-stone-100 text-stone-700 border border-stone-300 mb-3">
            <PhoneCall className="w-3.5 h-3.5 text-stone-600" />
            <span>Sección 05</span>
            <span>•</span>
            <span>Canales de Contacto e Integración</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-stone-900 tracking-tight">
            Consultas, encargos personalizados y atención directa
          </h2>

          <p className="mt-4 text-base sm:text-lg text-stone-600 leading-relaxed">
            Estructura preparada para la comunicación con los clientes. Puedes consultar por stock de piezas existentes, 
            encargos de figuras especiales o tiempos estimados de confección.
          </p>
        </div>

        {/* 2-Column Layout: Direct Contact Cards on Left, Inquiry Form on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Direct channels and WhatsApp slot */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* WhatsApp Featured Slot */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-emerald-50 to-stone-50 border-2 border-emerald-300 shadow-xs relative overflow-hidden">
              <div className="flex items-center justify-between pb-3 mb-3 border-b border-emerald-200/60">
                <span className="text-[10px] font-mono uppercase bg-emerald-100 text-emerald-800 font-bold px-2 py-0.5 rounded border border-emerald-300">
                  Canal Principal • Integración WhatsApp
                </span>
                <span className="text-[11px] font-mono text-emerald-700">Respuesta rápida</span>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-emerald-600 text-white flex items-center justify-center shrink-0 shadow-xs">
                  <MessageCircle className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-base font-serif font-bold text-stone-900">
                    Atención Directa por WhatsApp
                  </h3>
                  <p className="text-xs text-stone-600 mt-1 leading-relaxed">
                    Vía recomendada para enviar referencias fotográficas, coordinar colores y acordar medios de entrega o envíos.
                  </p>
                </div>
              </div>

              <div className="mt-5 pt-4 border-t border-emerald-200/60 flex flex-col sm:flex-row items-center gap-3">
                <button
                  onClick={handleWhatsAppClick}
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-medium text-xs transition-colors shadow-sm cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Abrir Chat de WhatsApp [Provisional]</span>
                </button>
              </div>

              <p className="text-[11px] font-mono text-emerald-800/80 mt-2 text-center sm:text-left">
                * Espacio preparado para vincular el número real del taller.
              </p>
            </div>

            {/* Email & Location Cards */}
            <div className="p-5 rounded-xl bg-stone-50 border border-stone-200 space-y-4">
              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-stone-500 shrink-0 mt-0.5" />
                <div>
                  <span className="text-[11px] font-mono text-stone-400 uppercase block">Correo Electrónico</span>
                  <span className="text-xs font-mono text-stone-800 font-medium">
                    {businessConfig.contact.emailPlaceholder}
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-stone-500 shrink-0 mt-0.5" />
                <div>
                  <span className="text-[11px] font-mono text-stone-400 uppercase block">Ubicación y Despacho</span>
                  <span className="text-xs text-stone-700">
                    {businessConfig.contact.locationPlaceholder}
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-stone-500 shrink-0 mt-0.5" />
                <div>
                  <span className="text-[11px] font-mono text-stone-400 uppercase block">Horarios de Taller</span>
                  <span className="text-xs text-stone-700">
                    {businessConfig.contact.workshopHours}
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Instagram className="w-5 h-5 text-stone-500 shrink-0 mt-0.5" />
                <div>
                  <span className="text-[11px] font-mono text-stone-400 uppercase block">Redes Sociales (Provisional)</span>
                  <span className="text-xs font-mono text-stone-800">
                    {businessConfig.contact.instagramPlaceholder}
                  </span>
                </div>
              </div>
            </div>

            {/* Operational notice */}
            <div className="p-3.5 rounded-lg border border-dashed border-stone-300 text-xs font-mono text-stone-500 bg-stone-50/50">
              <span className="font-semibold text-stone-700">[POLÍTICA DE ENCARGOS]:</span> Las piezas por pedido se inician con 5 a 10 días hábiles de anticipación según la complejidad del patrón.
            </div>

          </div>

          {/* Right Column: Provisional Contact / Inquiry Form */}
          <div className="lg:col-span-7 bg-stone-50 p-6 sm:p-8 rounded-2xl border border-stone-200">
            <div className="mb-6">
              <span className="text-[10px] font-mono uppercase text-stone-400 font-semibold tracking-wider block">
                Formulario de Consulta
              </span>
              <h3 className="text-xl font-serif font-bold text-stone-900 mt-1">
                Envíanos tu consulta sobre piezas o pedidos
              </h3>
              <p className="text-xs text-stone-500 mt-1">
                Estructura de captura de datos lista para enlazar con un servicio de correo o backend.
              </p>
            </div>

            {formSubmitted ? (
              <div className="py-10 text-center space-y-3 bg-white rounded-xl border border-emerald-300 p-6">
                <div className="w-12 h-12 rounded-full bg-emerald-100 mx-auto flex items-center justify-center text-emerald-600">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h4 className="text-base font-serif font-bold text-stone-900">
                  ¡Mensaje de prueba registrado!
                </h4>
                <p className="text-xs text-stone-600 max-w-sm mx-auto">
                  Este formulario valida la interfaz y flujo de usuario. En la versión final enviará la consulta a la casilla de correo del emprendimiento.
                </p>
                <button
                  onClick={() => setFormSubmitted(false)}
                  className="mt-2 text-xs font-mono text-stone-600 underline hover:text-stone-900 cursor-pointer"
                >
                  Enviar otra consulta de prueba
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name field */}
                  <div>
                    <label className="block text-xs font-medium text-stone-700 mb-1">
                      Nombre o Apodo *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Ej: Laura Méndez"
                      className="w-full px-3 py-2 bg-white border border-stone-300 rounded-lg text-xs text-stone-800 placeholder-stone-400 focus:outline-hidden focus:ring-1 focus:ring-stone-500 font-sans"
                    />
                  </div>

                  {/* Contact info field */}
                  <div>
                    <label className="block text-xs font-medium text-stone-700 mb-1">
                      Teléfono o Correo de contacto *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.contactInfo}
                      onChange={(e) => setFormData({ ...formData, contactInfo: e.target.value })}
                      placeholder="Ej: +54 9 11 ... o correo@..."
                      className="w-full px-3 py-2 bg-white border border-stone-300 rounded-lg text-xs text-stone-800 placeholder-stone-400 focus:outline-hidden focus:ring-1 focus:ring-stone-500 font-sans"
                    />
                  </div>
                </div>

                {/* Inquiry Type */}
                <div>
                  <label className="block text-xs font-medium text-stone-700 mb-1">
                    Motivo de la consulta
                  </label>
                  <select
                    value={formData.inquiryType}
                    onChange={(e) => setFormData({ ...formData, inquiryType: e.target.value })}
                    className="w-full px-3 py-2 bg-white border border-stone-300 rounded-lg text-xs text-stone-700 focus:outline-hidden focus:ring-1 focus:ring-stone-500 font-sans"
                  >
                    <option value="general">Consulta general sobre el catálogo</option>
                    <option value="custom">Presupuesto para amigurumi personalizado</option>
                    <option value="stock">Disponibilidad de entrega inmediata</option>
                    <option value="wholesale">Encargos para souvenirs o eventos</option>
                  </select>
                </div>

                {/* Message field */}
                <div>
                  <label className="block text-xs font-medium text-stone-700 mb-1">
                    Detalle o mensaje *
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Cuéntanos qué figura tienes en mente, colores de preferencia o si deseas consultar por un modelo del catálogo..."
                    className="w-full px-3 py-2 bg-white border border-stone-300 rounded-lg text-xs text-stone-800 placeholder-stone-400 focus:outline-hidden focus:ring-1 focus:ring-stone-500 font-sans"
                  />
                </div>

                {/* Privacy & Technical Notice */}
                <div className="flex items-start gap-2 text-[11px] text-stone-500 font-mono">
                  <AlertCircle className="w-4 h-4 text-stone-400 shrink-0 mt-0.5" />
                  <span>
                    Formulario funcional con validación en cliente. Sin conexión a pasarelas de pago ni carritos por requerimiento de la fase 1.
                  </span>
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-stone-900 hover:bg-stone-800 text-white font-medium text-xs transition-colors shadow-2xs cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>Enviar Consulta Provisional</span>
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
};
