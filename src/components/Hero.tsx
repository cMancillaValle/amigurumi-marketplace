import React from 'react';
import { ArrowRight, Sparkles, Grid3X3, CheckCircle2, ShieldCheck, Heart } from 'lucide-react';
import { businessConfig } from '../data/businessConfig';
import { PlaceholderImage } from './ui/PlaceholderImage';

interface HeroProps {
  onNavigateToCatalog: () => void;
  onNavigateToCustomizer: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onNavigateToCatalog,
  onNavigateToCustomizer,
}) => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-stone-50 via-stone-100/60 to-stone-50 py-12 sm:py-20 border-b border-stone-200">
      {/* Subtle blueprint grid pattern background */}
      <div 
        className="absolute inset-0 opacity-[0.2] pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(#78716c 1px, transparent 1px)',
          backgroundSize: '24px 24px',
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Welcome copy and Call to Actions */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Status pills */}
            <div className="inline-flex flex-wrap items-center justify-center lg:justify-start gap-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium bg-stone-200 text-stone-800 border border-stone-300">
                <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500/20" />
                Técnica de Crochet 100% Manual
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium bg-amber-50 text-amber-900 border border-amber-200">
                <Sparkles className="w-3.5 h-3.5 text-amber-600" />
                Fase 1: Catálogo Digital Activo
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold font-serif text-stone-900 tracking-tight leading-[1.15]">
              Muñecos tejidos a mano con alma artesanal y dedicación
            </h1>

            {/* Description */}
            <p className="text-base sm:text-lg text-stone-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Explora nuestra colección inicial de amigurumis creados punto a punto con materiales hipoalergénicos. 
              Una plataforma diseñada para mostrar creaciones terminadas y preparar la futura experiencia de personalización digital.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 sm:gap-4 pt-2">
              <button
                onClick={onNavigateToCatalog}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-lg bg-stone-900 text-white font-medium text-sm hover:bg-stone-800 transition-colors shadow-sm cursor-pointer"
              >
                <Grid3X3 className="w-4 h-4" />
                <span>Explorar Catálogo de Productos</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onNavigateToCustomizer}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-lg bg-white border border-stone-300 text-stone-800 font-medium text-sm hover:bg-stone-50 hover:border-stone-400 transition-colors shadow-2xs cursor-pointer group"
              >
                <Sparkles className="w-4 h-4 text-amber-600 group-hover:scale-110 transition-transform" />
                <span>Futuro Generador 3D / IA</span>
                <span className="text-[10px] font-mono bg-stone-100 text-stone-600 px-1.5 py-0.5 rounded border border-stone-200">
                  Pronto
                </span>
              </button>
            </div>

            {/* Quality attributes checklist */}
            <div className="pt-4 border-t border-stone-200/80 grid grid-cols-1 sm:grid-cols-3 gap-3 text-left">
              <div className="flex items-center gap-2 text-xs text-stone-600">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Hilos de algodón seleccionados</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-stone-600">
                <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Ojos de seguridad certificados</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-stone-600">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Relleno siliconado lavable</span>
              </div>
            </div>
          </div>

          {/* Right Column: Reserved Hero Showcase Slot */}
          <div className="lg:col-span-5">
            <div className="bg-white p-4 sm:p-5 rounded-xl border border-stone-200 shadow-sm relative">
              {/* Technical badge */}
              <div className="flex items-center justify-between pb-3 mb-3 border-b border-stone-200 text-xs font-mono text-stone-500">
                <span className="font-semibold text-stone-800">[RESERVA FOTOGRÁFICA HERO]</span>
                <span>Proporción 1:1 / 4:3</span>
              </div>

              {/* Placeholder frame for Hero Image */}
              <PlaceholderImage
                aspectRatio="square"
                label="Espacio reservado para fotografía destacada del taller o producto emblema"
                sublabel="Sugerencia: Foto en plano cenital con madejas de hilo, aguja de crochet y amigurumi terminado."
                iconType="hero"
                dimensionsText="1080 x 1080 px"
                badgeText="Imagen de Portada"
              />

              {/* Caption note */}
              <div className="mt-3.5 p-3 rounded-md bg-stone-50 border border-stone-200 text-xs text-stone-600 flex items-start gap-2.5">
                <span className="text-stone-400 font-mono text-[10px] mt-0.5">ℹ</span>
                <p className="text-xs leading-relaxed">
                  <span className="font-semibold text-stone-800">Nota de diseño:</span> Este espacio alojará la imagen oficial de presentación una vez definida la sesión de fotos del emprendimiento.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
