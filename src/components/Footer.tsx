import React from 'react';
import { Heart, Sparkles, Grid3X3, Layers, PhoneCall, ArrowUp, Instagram, MessageCircle } from 'lucide-react';
import { businessConfig } from '../data/businessConfig';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-stone-900 text-stone-300 font-sans border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12">
          
          {/* Brand Info & Reserved Logo slot */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              {/* Reserved Logo Slot */}
              <div className="w-10 h-10 border-2 border-dashed border-stone-500 rounded-lg bg-stone-800 flex items-center justify-center p-1 text-center">
                <span className="text-[7px] font-mono text-stone-400 uppercase font-semibold leading-none">
                  LOGO
                </span>
              </div>
              <div>
                <h3 className="text-lg font-serif font-bold text-white tracking-tight">
                  {businessConfig.brandName}
                </h3>
                <span className="text-[10px] font-mono text-amber-400">
                  {businessConfig.provisionalTag}
                </span>
              </div>
            </div>

            <p className="text-xs text-stone-400 leading-relaxed max-w-sm">
              {businessConfig.tagline}. Confección manual punto a punto con hilados seleccionados y atención a cada acabado.
            </p>

            <div className="text-[11px] font-mono text-stone-500 pt-1">
              Plataforma web preparada para recibir identidad de marca y catálogo fotográfico definitivo.
            </div>
          </div>

          {/* Navigation Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-mono uppercase font-bold text-stone-200 tracking-wider">
              Navegación del Sitio
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={() => onNavigate('inicio')}
                  className="text-stone-400 hover:text-white transition-colors cursor-pointer"
                >
                  Inicio y Bienvenida
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('nosotros')}
                  className="text-stone-400 hover:text-white transition-colors cursor-pointer"
                >
                  Presentación del Taller
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('catalogo')}
                  className="text-stone-400 hover:text-white transition-colors cursor-pointer"
                >
                  Catálogo de Amigurumis
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('personalizar')}
                  className="text-stone-400 hover:text-white transition-colors flex items-center gap-1.5 cursor-pointer"
                >
                  <span>Módulo 3D / IA</span>
                  <span className="text-[9px] font-mono bg-amber-400/20 text-amber-300 px-1 py-0.2 rounded">
                    Pronto
                  </span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('contacto')}
                  className="text-stone-400 hover:text-white transition-colors cursor-pointer"
                >
                  Canales de Contacto
                </button>
              </li>
            </ul>
          </div>

          {/* Stage Status & Technical Note */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-mono uppercase font-bold text-stone-200 tracking-wider">
              Hoja de Ruta Técnica
            </h4>
            <div className="p-3.5 rounded-xl bg-stone-800/80 border border-stone-700 space-y-2 text-xs font-mono">
              <div className="flex items-center gap-2 text-emerald-400">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                <span>Etapa 1: Estructura & Catálogo (Completada)</span>
              </div>
              <div className="flex items-center gap-2 text-stone-400">
                <span className="w-1.5 h-1.5 rounded-full bg-stone-500" />
                <span>Etapa 2: Identidad visual & Fotos reales</span>
              </div>
              <div className="flex items-center gap-2 text-amber-400">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                <span>Etapa 3: Personalizador 3D y Generador IA</span>
              </div>
            </div>

            <div className="flex items-center gap-2 pt-1">
              <button
                onClick={scrollToTop}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-stone-800 hover:bg-stone-700 text-stone-300 text-xs font-mono transition-colors border border-stone-700 cursor-pointer"
              >
                <ArrowUp className="w-3.5 h-3.5" />
                <span>Volver al inicio</span>
              </button>
            </div>
          </div>

        </div>

        {/* Bottom copyright and artisanal mark */}
        <div className="mt-12 pt-6 border-t border-stone-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-stone-500">
          <p>
            © {new Date().getFullYear()} {businessConfig.brandName} • Estructura base para emprendimiento artesanal.
          </p>
          <p className="flex items-center gap-1">
            <span>Hecho con dedicación manual y código modular</span>
          </p>
        </div>
      </div>
    </footer>
  );
};
