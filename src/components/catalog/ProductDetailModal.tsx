import React from 'react';
import { X, Clock, Ruler, ShieldCheck, Tag, MessageCircle, AlertCircle } from 'lucide-react';
import { Product } from '../../types';
import { PlaceholderImage } from '../ui/PlaceholderImage';

interface ProductDetailModalProps {
  product: Product | null;
  onClose: () => void;
  onInquireWhatsApp: (product: Product) => void;
}

export const ProductDetailModal: React.FC<ProductDetailModalProps> = ({
  product,
  onClose,
  onInquireWhatsApp,
}) => {
  if (!product) return null;

  const formattedPrice = new Intl.NumberFormat('es-AR', {
    style: 'currency',
    currency: 'ARS',
    maximumFractionDigits: 0,
  }).format(product.price);

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-stone-900/60 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 animate-fadeIn">
      {/* Modal Dialog Card */}
      <div 
        className="relative bg-white rounded-2xl border border-stone-300 max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="sticky top-0 z-10 bg-white/95 backdrop-blur-xs px-6 py-4 border-b border-stone-200 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono uppercase bg-stone-100 text-stone-700 px-2 py-0.5 rounded border border-stone-300">
              Ficha Técnica Provisional • Ref: {product.id}
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-stone-500 hover:text-stone-900 hover:bg-stone-100 transition-colors focus:outline-hidden"
            aria-label="Cerrar ficha"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 space-y-6">
          {/* Main Grid: Photo Placeholder on left, details on right */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
            
            {/* Image Placeholder Frame */}
            <div>
              <PlaceholderImage
                aspectRatio="square"
                label={product.imagePlaceholderText}
                sublabel="Espacio reservado para fotografía en alta resolución con zoom interactivo en etapa final."
                iconType="product"
                dimensionsText="800 x 800 px • 1:1"
                badgeText="Imagen de Producto"
              />

              <div className="mt-3 p-2.5 rounded bg-amber-50/70 border border-amber-200 text-amber-900 text-xs flex items-start gap-2">
                <AlertCircle className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
                <p className="leading-snug">
                  <span className="font-semibold">Dato de muestra:</span> Esta ficha utiliza datos ficticios para validar la estructura del catálogo.
                </p>
              </div>
            </div>

            {/* Product Specifications */}
            <div className="space-y-4">
              <div>
                <span className="text-xs font-mono uppercase text-amber-800 font-semibold tracking-wider">
                  Categoría: {product.category}
                </span>
                <h3 className="text-xl sm:text-2xl font-serif font-bold text-stone-900 mt-1">
                  {product.name}
                </h3>
              </div>

              {/* Price & Availability */}
              <div className="p-3.5 rounded-lg bg-stone-50 border border-stone-200 flex items-center justify-between">
                <div>
                  <span className="text-[11px] font-mono text-stone-500 uppercase block">
                    Precio de referencia
                  </span>
                  <div className="flex items-baseline gap-1">
                    <span className="text-2xl font-bold font-mono text-stone-900">
                      {formattedPrice}
                    </span>
                    <span className="text-xs font-mono text-stone-500">[Ficticio]</span>
                  </div>
                </div>

                <div className="text-right">
                  <span className="text-[11px] font-mono text-stone-500 uppercase block">
                    Disponibilidad
                  </span>
                  <span className="text-xs font-medium text-stone-800">
                    {product.availability === 'in_stock' && 'Stock Inmediato'}
                    {product.availability === 'made_to_order' && 'Confección por Encargo'}
                    {product.availability === 'out_of_stock' && 'Agotado'}
                  </span>
                </div>
              </div>

              {/* Description */}
              <div>
                <h4 className="text-xs font-mono uppercase font-bold text-stone-600 mb-1">
                  Descripción del Muñeco
                </h4>
                <p className="text-sm text-stone-700 leading-relaxed">
                  {product.fullDescription}
                </p>
              </div>

              {/* Technical specs badges */}
              <div className="grid grid-cols-2 gap-2 text-xs">
                {product.dimensions && (
                  <div className="p-2.5 rounded bg-stone-50 border border-stone-200">
                    <span className="text-stone-500 font-mono text-[10px] block">Dimensiones</span>
                    <span className="font-semibold text-stone-800">
                      {product.dimensions.heightCm} cm alto × {product.dimensions.widthCm} cm ancho
                    </span>
                  </div>
                )}
                {product.approxCraftTimeHours && (
                  <div className="p-2.5 rounded bg-stone-50 border border-stone-200">
                    <span className="text-stone-500 font-mono text-[10px] block">Tiempo de tejido</span>
                    <span className="font-semibold text-stone-800">
                      ~{product.approxCraftTimeHours} horas manuales
                    </span>
                  </div>
                )}
              </div>

              {/* Materials */}
              <div>
                <h4 className="text-xs font-mono uppercase font-bold text-stone-600 mb-1.5">
                  Materiales Empleados
                </h4>
                <ul className="space-y-1">
                  {product.materials.map((mat, idx) => (
                    <li key={idx} className="text-xs text-stone-700 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-stone-400" />
                      <span>{mat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5 pt-1">
                {product.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="text-[10px] font-mono bg-stone-100 text-stone-700 px-2 py-0.5 rounded border border-stone-200"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>

          </div>

          {/* Action Row */}
          <div className="pt-4 border-t border-stone-200 flex flex-col sm:flex-row items-center justify-between gap-3">
            <p className="text-xs font-mono text-stone-500 text-center sm:text-left">
              Para pedidos o consultas sobre personalizaciones, puedes coordinar directamente por WhatsApp.
            </p>

            <div className="flex items-center gap-2 w-full sm:w-auto">
              <button
                onClick={() => onInquireWhatsApp(product)}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg bg-emerald-700 text-white font-medium text-xs hover:bg-emerald-800 transition-colors cursor-pointer shadow-xs"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Consultar vía WhatsApp [Provisional]</span>
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
