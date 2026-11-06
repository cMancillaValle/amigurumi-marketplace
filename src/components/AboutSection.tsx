import React from 'react';
import { Sparkles, Scissors, ShieldAlert, Award, PackageCheck, Layers } from 'lucide-react';
import { businessConfig } from '../data/businessConfig';
import { PlaceholderImage } from './ui/PlaceholderImage';

export const AboutSection: React.FC = () => {
  return (
    <section id="nosotros" className="py-16 sm:py-24 bg-white border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium bg-stone-100 text-stone-700 border border-stone-300 mb-3">
            <span>Sección 02</span>
            <span>•</span>
            <span>Presentación del Emprendimiento</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-stone-900 tracking-tight">
            El arte paciente del crochet tradicional transformado en piezas con vida
          </h2>
          <p className="mt-4 text-base sm:text-lg text-stone-600 leading-relaxed">
            {businessConfig.aboutText}
          </p>
        </div>

        {/* 2-Column Content Grid: Philosophy & Process + Image Placeholder */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Craft Philosophy & Pillars */}
          <div className="lg:col-span-7 space-y-8">
            <div className="p-6 rounded-xl bg-stone-50 border border-stone-200 space-y-3">
              <h3 className="text-lg font-serif font-bold text-stone-900 flex items-center gap-2">
                <Scissors className="w-5 h-5 text-stone-700" />
                <span>Nuestra Filosofía de Confección</span>
              </h3>
              <p className="text-sm text-stone-600 leading-relaxed">
                {businessConfig.craftPhilosophy}
              </p>
            </div>

            {/* Core Values / Features */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-lg border border-stone-200 hover:border-stone-300 transition-colors">
                <div className="w-8 h-8 rounded-md bg-stone-100 flex items-center justify-center text-stone-700 mb-3 font-semibold">
                  01
                </div>
                <h4 className="font-semibold text-stone-900 text-sm">Hilos de Alta Calidad</h4>
                <p className="text-xs text-stone-500 mt-1 leading-relaxed">
                  Fibras naturales de algodón rústico y peinado con tintes seguros que no destiñen ni pierden forma al lavar.
                </p>
              </div>

              <div className="p-4 rounded-lg border border-stone-200 hover:border-stone-300 transition-colors">
                <div className="w-8 h-8 rounded-md bg-stone-100 flex items-center justify-center text-stone-700 mb-3 font-semibold">
                  02
                </div>
                <h4 className="font-semibold text-stone-900 text-sm">Seguridad Garantizada</h4>
                <p className="text-xs text-stone-500 mt-1 leading-relaxed">
                  Ojos de seguridad con arandelas de presión termo-remachadas aptas para el juego seguro de los más pequeños.
                </p>
              </div>

              <div className="p-4 rounded-lg border border-stone-200 hover:border-stone-300 transition-colors">
                <div className="w-8 h-8 rounded-md bg-stone-100 flex items-center justify-center text-stone-700 mb-3 font-semibold">
                  03
                </div>
                <h4 className="font-semibold text-stone-900 text-sm">Detalles Personalizables</h4>
                <p className="text-xs text-stone-500 mt-1 leading-relaxed">
                  Capacidad de adaptar colores, tamaños y accesorios a pedido, sentando las bases para nuestro futuro personalizador 3D.
                </p>
              </div>

              <div className="p-4 rounded-lg border border-stone-200 hover:border-stone-300 transition-colors">
                <div className="w-8 h-8 rounded-md bg-stone-100 flex items-center justify-center text-stone-700 mb-3 font-semibold">
                  04
                </div>
                <h4 className="font-semibold text-stone-900 text-sm">Producción Consciente</h4>
                <p className="text-xs text-stone-500 mt-1 leading-relaxed">
                  Elaboración a escala humana, respetando los tiempos que requiere el tejido artesanal sin producción masiva industrial.
                </p>
              </div>
            </div>

            {/* Note on future visual identity */}
            <div className="p-4 rounded-md border border-dashed border-stone-300 bg-stone-50/50 text-xs font-mono text-stone-600 space-y-1">
              <span className="font-bold text-stone-700 uppercase">[ESPACIO PARA IDENTIDAD Y DECLARACIÓN DE MARCA]</span>
              <p className="font-sans text-xs text-stone-500">
                Esta sección está preparada para incorporar la historia de los artesanos fundadores, la misión oficial y el video/foto de proceso en la etapa definitiva.
              </p>
            </div>
          </div>

          {/* Right Column: Workshop & Process Photo Placeholder */}
          <div className="lg:col-span-5 space-y-4">
            <div className="bg-stone-50 p-4 rounded-xl border border-stone-200">
              <div className="flex items-center justify-between pb-2 mb-3 border-b border-stone-200 text-xs font-mono text-stone-500">
                <span className="font-semibold text-stone-800">[FOTO TALLER / PROCESO ARTESANAL]</span>
                <span>Proporción 4:3</span>
              </div>

              <PlaceholderImage
                aspectRatio="portrait"
                label="Espacio reservado para fotografía del taller o manos tejiendo en primer plano"
                sublabel="Sugerencia: Iluminación cálida, primer plano de las puntadas y herramientas artesanales."
                iconType="product"
                dimensionsText="800 x 1060 px"
                badgeText="Foto Proceso de Tejido"
              />
            </div>

            {/* Secondary small placeholder */}
            <div className="grid grid-cols-2 gap-3">
              <div className="p-2.5 rounded-lg border border-stone-200 bg-stone-50">
                <PlaceholderImage
                  aspectRatio="square"
                  label="Detalle de hilados"
                  sublabel="Muestrario de colores"
                  dimensionsText="400 x 400"
                  badgeText="Materiales"
                />
              </div>
              <div className="p-2.5 rounded-lg border border-stone-200 bg-stone-50">
                <PlaceholderImage
                  aspectRatio="square"
                  label="Detalle de costuras"
                  sublabel="Puntadas de terminación"
                  dimensionsText="400 x 400"
                  badgeText="Terminación"
                />
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
