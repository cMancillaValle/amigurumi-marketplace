import React, { useState } from 'react';
import { 
  Sparkles, 
  Box, 
  Palette, 
  Layers, 
  Wand2, 
  RotateCw, 
  Eye, 
  Bell, 
  CheckCircle2, 
  Lock, 
  AlertCircle 
} from 'lucide-react';

export const CustomizerIntroSection: React.FC = () => {
  const [notifySubscribed, setNotifySubscribed] = useState(false);
  const [notifyEmail, setNotifyEmail] = useState('');
  const [showNotifyModal, setShowNotifyModal] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (notifyEmail.trim()) {
      setNotifySubscribed(true);
      setTimeout(() => {
        setShowNotifyModal(false);
      }, 2000);
    }
  };

  return (
    <section id="personalizar" className="py-16 sm:py-24 bg-stone-900 text-stone-100 relative overflow-hidden border-b border-stone-800">
      {/* Subtle blueprint grid overlay on dark background */}
      <div 
        className="absolute inset-0 opacity-15 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(#a8a29e 1px, transparent 1px)',
          backgroundSize: '24px 24px',
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium bg-amber-500/20 text-amber-300 border border-amber-500/30 mb-3">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>Sección 04</span>
            <span>•</span>
            <span>Módulo de Personalización Interactiva</span>
            <span>•</span>
            <span className="bg-amber-400/20 px-1.5 py-0.2 rounded font-bold">FASE 2</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white tracking-tight">
            Diseña tu amigurumi ideal en 3D con asistencia inteligente
          </h2>

          <p className="mt-4 text-base sm:text-lg text-stone-300 leading-relaxed">
            Estamos preparando un entorno interactivo donde podrás visualizar en tiempo real cómo lucirá tu figura tejida, 
            combinar paletas de colores de hilados, agregar accesorios y traducir ideas en patrones viables mediante IA antes de confeccionarlos a mano.
          </p>
        </div>

        {/* Status Callout Banner */}
        <div className="mb-10 p-4 rounded-xl bg-stone-800/80 border border-stone-700/80 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 rounded-lg bg-amber-500/20 border border-amber-500/30 flex items-center justify-center shrink-0 mt-0.5">
              <Lock className="w-4 h-4 text-amber-400" />
            </div>
            <div>
              <h4 className="text-sm font-semibold text-white">
                Espacio técnico reservado para el configurador interactivo
              </h4>
              <p className="text-xs text-stone-400 font-mono mt-0.5">
                En esta primera fase la arquitectura queda organizada para acoplar el motor 3D y la API de IA en la siguiente etapa.
              </p>
            </div>
          </div>

          <button
            onClick={() => setShowNotifyModal(true)}
            className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-amber-500 hover:bg-amber-400 text-stone-950 font-semibold text-xs transition-colors cursor-pointer shrink-0"
          >
            <Bell className="w-3.5 h-3.5" />
            <span>Disponible Próximamente • Notificarme</span>
          </button>
        </div>

        {/* Reserved Wireframe Area for 3D Viewport & Tooling */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left: 3D Viewport Canvas Placeholder */}
          <div className="lg:col-span-8 bg-stone-950 rounded-2xl border-2 border-dashed border-stone-700 p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden min-h-[420px] select-none">
            
            {/* Top Viewport Header */}
            <div className="flex items-center justify-between z-10 border-b border-stone-800 pb-3">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-red-500/50" />
                <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/50" />
                <span className="w-2.5 h-2.5 rounded-full bg-green-500/50" />
                <span className="text-xs font-mono text-stone-400 ml-2">
                  [LIENZO 3D WEBGL • VISTA PREVIA WIREFRAME]
                </span>
              </div>

              <div className="text-[11px] font-mono text-stone-500 flex items-center gap-2">
                <span>FPS: --</span>
                <span>•</span>
                <span>Canvas 1920x1080 (Reservado)</span>
              </div>
            </div>

            {/* Corner Crosshairs */}
            <div className="absolute top-4 left-4 w-4 h-4 border-t-2 border-l-2 border-stone-600 pointer-events-none" />
            <div className="absolute top-4 right-4 w-4 h-4 border-t-2 border-r-2 border-stone-600 pointer-events-none" />
            <div className="absolute bottom-4 left-4 w-4 h-4 border-b-2 border-l-2 border-stone-600 pointer-events-none" />
            <div className="absolute bottom-4 right-4 w-4 h-4 border-b-2 border-r-2 border-stone-600 pointer-events-none" />

            {/* Center Visual Mockup of 3D Model Placeholder */}
            <div className="my-auto py-12 flex flex-col items-center justify-center text-center z-10 space-y-4">
              <div className="relative">
                {/* Simulated 3D Axis Rings */}
                <div className="w-28 h-28 sm:w-36 sm:h-36 rounded-full border border-dashed border-stone-700 flex items-center justify-center animate-spin-slow">
                  <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full border border-stone-600/50 flex items-center justify-center">
                    <Box className="w-10 h-10 sm:w-12 sm:h-12 text-stone-500" />
                  </div>
                </div>

                <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-stone-800 text-stone-300 text-[10px] font-mono px-2 py-0.5 rounded border border-stone-700">
                  Rotación 360°
                </span>
              </div>

              <div className="max-w-md space-y-1">
                <h4 className="text-base font-semibold text-stone-200">
                  Lienzo de renderizado 3D en preparación
                </h4>
                <p className="text-xs text-stone-400 font-mono">
                  Aquí se montará el visor con soporte para orbitar con el mouse, aplicar texturas de punto de crochet y previsualizar medidas a escala.
                </p>
              </div>

              {/* Disabled Action Pill */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-stone-800/80 border border-stone-700 text-xs font-mono text-stone-400">
                <RotateCw className="w-3.5 h-3.5" />
                <span>Interacción 3D desactivada en Fase 1</span>
              </div>
            </div>

            {/* Viewport Bottom Status Bar */}
            <div className="border-t border-stone-800 pt-3 flex flex-wrap items-center justify-between gap-2 z-10 text-[11px] font-mono text-stone-500">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-amber-500" />
                <span>Estado: Pendiente de vinculación con motor 3D</span>
              </div>
              <span>Etapa posterior: Three.js / WebGL</span>
            </div>
          </div>

          {/* Right: Upcoming Features & Customizer Controls Wireframe */}
          <div className="lg:col-span-4 flex flex-col justify-between space-y-4">
            
            <div className="bg-stone-800/60 p-5 rounded-2xl border border-stone-700/80 space-y-5">
              <div>
                <span className="text-[10px] font-mono uppercase text-amber-400 font-bold block mb-1">
                  [CONTROLES PREVISTOS]
                </span>
                <h3 className="text-lg font-serif font-bold text-white">
                  Opciones que podrás configurar
                </h3>
              </div>

              {/* Wireframe Feature 1: Base Character */}
              <div className="space-y-1.5 opacity-75">
                <div className="flex items-center justify-between text-xs font-mono text-stone-300">
                  <span className="flex items-center gap-1.5">
                    <Box className="w-3.5 h-3.5 text-stone-400" />
                    1. Modelo Base
                  </span>
                  <span className="text-[10px] text-amber-400">[Próximamente]</span>
                </div>
                <div className="grid grid-cols-3 gap-1.5">
                  <div className="p-2 rounded bg-stone-700/50 border border-stone-600 text-center text-[10px] font-mono text-stone-300">
                    Oso
                  </div>
                  <div className="p-2 rounded bg-stone-700/30 border border-stone-600/50 text-center text-[10px] font-mono text-stone-400">
                    Conejo
                  </div>
                  <div className="p-2 rounded bg-stone-700/30 border border-stone-600/50 text-center text-[10px] font-mono text-stone-400">
                    Fantástico
                  </div>
                </div>
              </div>

              {/* Wireframe Feature 2: Color Palette */}
              <div className="space-y-1.5 opacity-75">
                <div className="flex items-center justify-between text-xs font-mono text-stone-300">
                  <span className="flex items-center gap-1.5">
                    <Palette className="w-3.5 h-3.5 text-stone-400" />
                    2. Paleta de Hilados
                  </span>
                  <span className="text-[10px] text-amber-400">[Próximamente]</span>
                </div>
                <div className="flex gap-2">
                  <span className="w-6 h-6 rounded-full bg-amber-600 border border-stone-400/50" />
                  <span className="w-6 h-6 rounded-full bg-stone-200 border border-stone-400/50" />
                  <span className="w-6 h-6 rounded-full bg-sky-600 border border-stone-400/50" />
                  <span className="w-6 h-6 rounded-full bg-emerald-600 border border-stone-400/50" />
                  <span className="w-6 h-6 rounded-full bg-rose-400 border border-stone-400/50" />
                </div>
              </div>

              {/* Wireframe Feature 3: Accessories */}
              <div className="space-y-1.5 opacity-75">
                <div className="flex items-center justify-between text-xs font-mono text-stone-300">
                  <span className="flex items-center gap-1.5">
                    <Layers className="w-3.5 h-3.5 text-stone-400" />
                    3. Accesorios
                  </span>
                  <span className="text-[10px] text-amber-400">[Próximamente]</span>
                </div>
                <div className="text-xs text-stone-400 font-mono p-2 rounded bg-stone-700/30 border border-stone-600/50">
                  Bufandas, sombreros, flores y detalles bordados.
                </div>
              </div>

              {/* Wireframe Feature 4: AI Concept Assistant */}
              <div className="space-y-1.5 opacity-75">
                <div className="flex items-center justify-between text-xs font-mono text-stone-300">
                  <span className="flex items-center gap-1.5">
                    <Wand2 className="w-3.5 h-3.5 text-amber-400" />
                    4. Asistente IA de Ideas
                  </span>
                  <span className="text-[10px] text-amber-400">[Etapa 2]</span>
                </div>
                <div className="p-2.5 rounded bg-amber-950/30 border border-amber-800/40 text-xs text-stone-300 font-mono">
                  Sugerencias automáticas para combinar paletas y validar factibilidad del patrón artesanal.
                </div>
              </div>
            </div>

            {/* Bottom Status Box */}
            <div className="p-4 rounded-xl bg-stone-800/40 border border-stone-700 text-xs font-mono text-stone-400">
              <span className="text-amber-300 font-bold block mb-1">
                COMPROMISO DE ETAPAS:
              </span>
              Este generador no realiza peticiones externas ni consume recursos en este momento, manteniendo la web rápida, limpia y ligera.
            </div>

          </div>

        </div>

      </div>

      {/* Modal: Notify When Ready */}
      {showNotifyModal && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-stone-950/80 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-stone-900 border border-stone-700 rounded-2xl max-w-md w-full p-6 text-stone-100 shadow-2xl relative">
            <button
              onClick={() => setShowNotifyModal(false)}
              className="absolute top-4 right-4 text-stone-400 hover:text-white font-mono text-sm"
            >
              ✕
            </button>

            <div className="w-10 h-10 rounded-lg bg-amber-500/20 border border-amber-500/40 flex items-center justify-center mb-3">
              <Bell className="w-5 h-5 text-amber-400" />
            </div>

            <h3 className="text-lg font-serif font-bold text-white">
              Próximo Lanzamiento del Generador 3D
            </h3>

            <p className="text-xs text-stone-300 mt-2 leading-relaxed">
              El personalizador 3D y el asistente de patrones por IA se activarán en la segunda fase del desarrollo. Déjanos un correo de contacto provisional para avisarte apenas esté en línea.
            </p>

            {notifySubscribed ? (
              <div className="mt-4 p-3 rounded-lg bg-emerald-950/50 border border-emerald-800 text-emerald-300 text-xs flex items-center gap-2 font-mono">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>¡Aviso registrado provisionalmente! Gracias por tu interés.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="mt-4 space-y-3">
                <input
                  type="email"
                  required
                  value={notifyEmail}
                  onChange={(e) => setNotifyEmail(e.target.value)}
                  placeholder="tu-correo@ejemplo.com"
                  className="w-full px-3 py-2.5 bg-stone-800 border border-stone-700 rounded-lg text-xs text-white placeholder-stone-500 focus:outline-hidden focus:border-amber-400 font-mono"
                />
                <button
                  type="submit"
                  className="w-full py-2.5 bg-amber-500 hover:bg-amber-400 text-stone-950 text-xs font-bold font-mono rounded-lg transition-colors cursor-pointer"
                >
                  Confirmar Aviso Provisional
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </section>
  );
};
