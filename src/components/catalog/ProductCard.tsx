import React from 'react';
import { Clock, Ruler, Eye, Tag } from 'lucide-react';
import { Product } from '../../types';
import { PlaceholderImage } from '../ui/PlaceholderImage';

interface ProductCardProps {
  product: Product;
  onOpenDetails: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, onOpenDetails }) => {
  const getAvailabilityBadge = () => {
    switch (product.availability) {
      case 'in_stock':
        return (
          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-mono font-medium bg-emerald-100 text-emerald-800 border border-emerald-300">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            En Stock Inmediato
          </span>
        );
      case 'made_to_order':
        return (
          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-mono font-medium bg-blue-100 text-blue-800 border border-blue-300">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
            Por Encargo (~{product.approxCraftTimeHours || 8}h de tejido)
          </span>
        );
      case 'out_of_stock':
      default:
        return (
          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-mono font-medium bg-stone-200 text-stone-700 border border-stone-300">
            <span className="w-1.5 h-1.5 rounded-full bg-stone-500" />
            Agotado Temporalmente
          </span>
        );
    }
  };

  const formattedPrice = new Intl.NumberFormat('es-AR', {
    style: 'currency',
    currency: 'ARS',
    maximumFractionDigits: 0,
  }).format(product.price);

  return (
    <article className="group bg-white rounded-xl border border-stone-200 overflow-hidden shadow-2xs hover:shadow-md hover:border-stone-300 transition-all flex flex-col justify-between">
      <div>
        {/* Product Image Slot */}
        <div className="relative p-3 bg-stone-50 border-b border-stone-200">
          <PlaceholderImage
            aspectRatio="square"
            label={product.imagePlaceholderText}
            sublabel="Área para foto real con fondo blanco o luz natural"
            iconType="product"
            dimensionsText="600 x 600 px"
            badgeText={`Ref: ${product.id}`}
          />

          {/* Category Tag overlay */}
          <div className="absolute top-5 left-5">
            <span className="text-[10px] uppercase font-mono font-bold tracking-wider px-2 py-0.5 rounded bg-stone-900/85 text-stone-100 shadow-sm">
              {product.category}
            </span>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-4 sm:p-5 space-y-3">
          {/* Availability badge */}
          <div className="flex items-center justify-between gap-2">
            {getAvailabilityBadge()}
            {product.dimensions && (
              <span className="text-[11px] font-mono text-stone-500 flex items-center gap-1" title="Dimensiones aproximadas">
                <Ruler className="w-3.5 h-3.5 text-stone-400" />
                {product.dimensions.heightCm} cm alto
              </span>
            )}
          </div>

          {/* Product Name */}
          <h3 className="text-base sm:text-lg font-serif font-bold text-stone-900 group-hover:text-amber-900 transition-colors line-clamp-1">
            {product.name}
          </h3>

          {/* Short Description */}
          <p className="text-xs sm:text-sm text-stone-600 line-clamp-2 leading-relaxed">
            {product.shortDescription}
          </p>

          {/* Tags list */}
          <div className="flex flex-wrap gap-1.5 pt-1">
            {product.tags.slice(0, 3).map((tag, idx) => (
              <span
                key={idx}
                className="text-[10px] font-mono text-stone-600 bg-stone-100 px-2 py-0.5 rounded border border-stone-200"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Card Footer: Price & View Action */}
      <div className="p-4 sm:p-5 pt-0 border-t border-stone-100 mt-2">
        <div className="flex items-end justify-between pt-3">
          <div>
            <span className="text-[10px] font-mono uppercase text-stone-400 block">
              Precio provisional
            </span>
            <div className="flex items-baseline gap-1">
              <span className="text-lg sm:text-xl font-bold font-mono text-stone-900">
                {formattedPrice}
              </span>
              <span className="text-[10px] font-mono text-stone-400">[Ficticio]</span>
            </div>
          </div>

          <button
            onClick={() => onOpenDetails(product)}
            className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-medium text-stone-800 bg-stone-100 hover:bg-stone-200 border border-stone-300 rounded-md transition-colors cursor-pointer"
          >
            <Eye className="w-3.5 h-3.5 text-stone-500" />
            <span>Ver Ficha</span>
          </button>
        </div>
      </div>
    </article>
  );
};
