import React, { useState, useMemo } from 'react';
import { Search, Filter, SlidersHorizontal, Grid3X3, RefreshCw, AlertTriangle, Layers } from 'lucide-react';
import { Product, ProductAvailability } from '../../types';
import { mockProducts } from '../../data/mockProducts';
import { categories } from '../../data/businessConfig';
import { ProductCard } from './ProductCard';
import { ProductDetailModal } from './ProductDetailModal';

interface CatalogSectionProps {
  onInquireWhatsApp: (product: Product) => void;
}

export const CatalogSection: React.FC<CatalogSectionProps> = ({ onInquireWhatsApp }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('todos');
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [availabilityFilter, setAvailabilityFilter] = useState<string>('all');
  const [sortBy, setSortBy] = useState<'featured' | 'price-asc' | 'price-desc' | 'name'>('featured');
  const [selectedProductForModal, setSelectedProductForModal] = useState<Product | null>(null);

  // Filtered and sorted products
  const filteredProducts = useMemo(() => {
    return mockProducts
      .filter((product) => {
        // Category filter
        if (selectedCategory !== 'todos' && product.category !== selectedCategory) {
          return false;
        }

        // Availability filter
        if (availabilityFilter !== 'all' && product.availability !== availabilityFilter) {
          return false;
        }

        // Search filter (name, tags, description)
        if (searchTerm.trim() !== '') {
          const term = searchTerm.toLowerCase();
          const matchesName = product.name.toLowerCase().includes(term);
          const matchesDesc = product.shortDescription.toLowerCase().includes(term);
          const matchesTags = product.tags.some((t) => t.toLowerCase().includes(term));
          if (!matchesName && !matchesDesc && !matchesTags) {
            return false;
          }
        }

        return true;
      })
      .sort((a, b) => {
        if (sortBy === 'price-asc') return a.price - b.price;
        if (sortBy === 'price-desc') return b.price - a.price;
        if (sortBy === 'name') return a.name.localeCompare(b.name);
        // Default: featured first
        return (b.featured ? 1 : 0) - (a.featured ? 1 : 0);
      });
  }, [selectedCategory, availabilityFilter, searchTerm, sortBy]);

  const resetFilters = () => {
    setSelectedCategory('todos');
    setSearchTerm('');
    setAvailabilityFilter('all');
    setSortBy('featured');
  };

  return (
    <section id="catalogo" className="py-16 sm:py-24 bg-stone-100/60 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium bg-white text-stone-800 border border-stone-300 mb-2">
              <Grid3X3 className="w-3.5 h-3.5 text-stone-600" />
              <span>Sección 03</span>
              <span>•</span>
              <span>Catálogo Digital</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-stone-900 tracking-tight">
              Catálogo de Creaciones en Crochet
            </h2>
            <p className="mt-2 text-stone-600 text-sm sm:text-base max-w-2xl">
              Modelos de muestra con fichas descriptivas, dimensiones estimadas y espacios reservados para fotografías reales de cada pieza.
            </p>
          </div>

          {/* Technical Note Callout */}
          <div className="bg-amber-50 border border-amber-200/90 rounded-lg p-3 text-xs text-amber-900 font-mono flex items-start gap-2 max-w-md">
            <span className="font-bold text-amber-700 uppercase shrink-0 mt-0.5">AVISO:</span>
            <span>
              Precios y descripciones son ejemplos ficticios para la maquetación inicial. Fácilmente configurables en <code className="bg-amber-100/70 px-1 py-0.5 rounded">src/data/mockProducts.ts</code>.
            </span>
          </div>
        </div>

        {/* Category Pills Navigation */}
        <div className="flex items-center gap-2 overflow-x-auto pb-3 mb-6 scrollbar-none">
          {categories.map((cat) => {
            const isSelected = selectedCategory === cat.id;
            const count = cat.id === 'todos' 
              ? mockProducts.length 
              : mockProducts.filter((p) => p.category === cat.id).length;

            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`whitespace-nowrap px-4 py-2 rounded-lg text-xs font-medium transition-all flex items-center gap-2 cursor-pointer ${
                  isSelected
                    ? 'bg-stone-900 text-white shadow-xs'
                    : 'bg-white text-stone-700 border border-stone-300 hover:bg-stone-50 hover:border-stone-400'
                }`}
              >
                <span>{cat.name}</span>
                <span
                  className={`text-[10px] font-mono px-1.5 py-0.2 rounded ${
                    isSelected ? 'bg-stone-700 text-stone-200' : 'bg-stone-100 text-stone-500'
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Filters & Search Toolbar */}
        <div className="bg-white p-4 rounded-xl border border-stone-200 shadow-2xs mb-8 space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-3 items-center">
            
            {/* Search Input */}
            <div className="md:col-span-5 relative">
              <Search className="w-4 h-4 text-stone-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Buscar por nombre, descripción o etiqueta (#oso, #marino)..."
                className="w-full pl-9 pr-3 py-2 bg-stone-50 border border-stone-300 rounded-lg text-xs text-stone-800 placeholder-stone-400 focus:outline-hidden focus:ring-1 focus:ring-stone-500 focus:bg-white transition-all font-sans"
              />
              {searchTerm && (
                <button
                  onClick={() => setSearchTerm('')}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 text-stone-400 hover:text-stone-600 text-xs font-mono"
                >
                  ✕
                </button>
              )}
            </div>

            {/* Availability Filter */}
            <div className="md:col-span-3">
              <div className="relative">
                <select
                  value={availabilityFilter}
                  onChange={(e) => setAvailabilityFilter(e.target.value)}
                  className="w-full px-3 py-2 bg-stone-50 border border-stone-300 rounded-lg text-xs text-stone-700 focus:outline-hidden focus:ring-1 focus:ring-stone-500 appearance-none font-sans"
                >
                  <option value="all">Todas las disponibilidades</option>
                  <option value="in_stock">Solo en stock inmediato</option>
                  <option value="made_to_order">Solo por encargo</option>
                  <option value="out_of_stock">Solo agotados</option>
                </select>
                <div className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-stone-400 text-xs">
                  ▼
                </div>
              </div>
            </div>

            {/* Sort Selector */}
            <div className="md:col-span-3">
              <div className="relative">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as any)}
                  className="w-full px-3 py-2 bg-stone-50 border border-stone-300 rounded-lg text-xs text-stone-700 focus:outline-hidden focus:ring-1 focus:ring-stone-500 appearance-none font-sans"
                >
                  <option value="featured">Destacados primero</option>
                  <option value="price-asc">Precio: Menor a Mayor</option>
                  <option value="price-desc">Precio: Mayor a Menor</option>
                  <option value="name">Alfabético por nombre</option>
                </select>
                <div className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-stone-400 text-xs">
                  ▼
                </div>
              </div>
            </div>

            {/* Reset Button */}
            <div className="md:col-span-1 flex justify-end">
              <button
                onClick={resetFilters}
                title="Restablecer filtros"
                className="w-full md:w-auto p-2 rounded-lg border border-stone-300 text-stone-600 hover:bg-stone-100 flex items-center justify-center transition-colors cursor-pointer text-xs"
              >
                <RefreshCw className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Active Status Bar */}
          <div className="flex items-center justify-between text-xs text-stone-500 font-mono pt-2 border-t border-stone-100">
            <span>
              Mostrando <strong className="text-stone-800">{filteredProducts.length}</strong> de{' '}
              {mockProducts.length} productos
            </span>
            {(selectedCategory !== 'todos' || searchTerm || availabilityFilter !== 'all') && (
              <span className="text-amber-800 bg-amber-50 px-2 py-0.5 rounded border border-amber-200">
                Filtros activos
              </span>
            )}
          </div>
        </div>

        {/* Product Cards Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onOpenDetails={(p) => setSelectedProductForModal(p)}
              />
            ))}
          </div>
        ) : (
          /* Empty Search State */
          <div className="text-center py-16 bg-white rounded-xl border border-stone-300 p-8 space-y-4">
            <div className="w-12 h-12 rounded-full bg-stone-100 mx-auto flex items-center justify-center text-stone-400">
              <Search className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-serif font-bold text-stone-800">
              No se encontraron amigurumis con los filtros seleccionados
            </h3>
            <p className="text-xs text-stone-500 max-w-md mx-auto">
              Prueba cambiando el término de búsqueda o seleccionando otra categoría en la barra superior.
            </p>
            <button
              onClick={resetFilters}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-stone-800 text-white text-xs font-medium hover:bg-stone-900 transition-colors cursor-pointer"
            >
              <RefreshCw className="w-3.5 h-3.5" />
              <span>Restablecer Filtros</span>
            </button>
          </div>
        )}

      </div>

      {/* Modal for Product Details */}
      <ProductDetailModal
        product={selectedProductForModal}
        onClose={() => setSelectedProductForModal(null)}
        onInquireWhatsApp={onInquireWhatsApp}
      />
    </section>
  );
};
