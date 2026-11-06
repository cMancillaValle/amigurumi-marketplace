import React, { useState } from 'react';
import { Menu, X, Sparkles, MessageCircle, Layers, Grid3X3, Info, PhoneCall } from 'lucide-react';
import { businessConfig } from '../data/businessConfig';

interface NavbarProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection, onNavigate }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { id: 'inicio', label: 'Inicio', icon: Layers },
    { id: 'nosotros', label: 'Nosotros', icon: Info },
    { id: 'catalogo', label: 'Catálogo', icon: Grid3X3 },
    { id: 'personalizar', label: 'Personalizar', icon: Sparkles, badge: 'Próximamente' },
    { id: 'contacto', label: 'Contacto', icon: PhoneCall },
  ];

  const handleLinkClick = (id: string) => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 bg-stone-50/95 backdrop-blur-md border-b border-stone-200">
      {/* Top technical notice bar */}
      <div className="bg-stone-900 text-stone-200 text-xs py-1.5 px-4 font-mono flex items-center justify-between border-b border-stone-800">
        <div className="flex items-center gap-2 overflow-hidden text-ellipsis whitespace-nowrap">
          <span className="inline-block w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
          <span className="font-semibold text-amber-300">ESTRUCTURA BASE FASE 1:</span>
          <span className="text-stone-300 hidden sm:inline">Catálogo digital activo. Módulo 3D e IA reservado para etapa 2.</span>
          <span className="text-stone-300 sm:hidden">Fase 1: Catálogo activo</span>
        </div>
        <span className="text-[11px] text-stone-400 font-mono hidden md:inline">
          {businessConfig.provisionalTag}
        </span>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo & Brand Name Container */}
          <button
            onClick={() => handleLinkClick('inicio')}
            className="flex items-center gap-3 text-left group focus:outline-hidden"
          >
            {/* Reserved Logo Slot */}
            <div className="relative w-10 h-10 sm:w-12 sm:h-12 border-2 border-dashed border-stone-400 rounded-lg bg-stone-100 flex flex-col items-center justify-center p-1 text-center group-hover:border-stone-600 transition-colors">
              <div className="w-2.5 h-2.5 absolute -top-1 -left-1 bg-stone-400" />
              <div className="w-2.5 h-2.5 absolute -bottom-1 -right-1 bg-stone-400" />
              <span className="text-[8px] font-mono leading-tight text-stone-600 uppercase font-semibold">
                LOGOTIPO
              </span>
            </div>

            <div>
              <div className="flex items-center gap-1.5">
                <span className="text-base sm:text-lg font-bold tracking-tight text-stone-900 font-serif">
                  {businessConfig.brandName}
                </span>
                <span className="text-[10px] font-mono bg-stone-200 text-stone-600 px-1.5 py-0.5 rounded border border-stone-300">
                  Demo
                </span>
              </div>
              <p className="text-xs text-stone-500 font-sans hidden sm:block">
                Artesanía en Crochet y Amigurumis
              </p>
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              const Icon = link.icon;
              return (
                <button
                  key={link.id}
                  onClick={() => handleLinkClick(link.id)}
                  className={`relative px-3.5 py-2 rounded-md text-sm font-medium transition-colors flex items-center gap-1.5 ${
                    isActive
                      ? 'bg-stone-200 text-stone-900 font-semibold'
                      : 'text-stone-600 hover:text-stone-900 hover:bg-stone-100'
                  }`}
                >
                  <Icon className="w-4 h-4 text-stone-500" />
                  <span>{link.label}</span>
                  {link.badge && (
                    <span className="text-[10px] font-mono bg-amber-100 text-amber-800 px-1.5 py-0.2 rounded border border-amber-300">
                      {link.badge}
                    </span>
                  )}
                  {isActive && (
                    <span className="absolute bottom-0 left-2 right-2 h-0.5 bg-stone-800 rounded-full" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Quick CTA - WhatsApp Placeholder */}
          <div className="hidden lg:flex items-center gap-3">
            <button
              onClick={() => handleLinkClick('contacto')}
              className="inline-flex items-center gap-2 px-3.5 py-2 text-xs font-mono font-medium text-stone-700 bg-white border border-stone-300 rounded-md shadow-2xs hover:bg-stone-100 hover:border-stone-400 transition-all cursor-pointer"
              title="Espacio para vincular número de WhatsApp"
            >
              <MessageCircle className="w-4 h-4 text-emerald-600" />
              <span>WhatsApp [Provisional]</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-md text-stone-600 hover:text-stone-900 hover:bg-stone-200 border border-stone-300 focus:outline-hidden"
              aria-label="Alternar menú de navegación"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-stone-200 bg-stone-50 px-4 pt-3 pb-6 space-y-1 shadow-lg">
          <p className="text-[11px] font-mono text-stone-500 uppercase px-3 py-1">
            Navegación principal
          </p>
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            const Icon = link.icon;
            return (
              <button
                key={link.id}
                onClick={() => handleLinkClick(link.id)}
                className={`w-full flex items-center justify-between px-3 py-2.5 rounded-md text-sm font-medium ${
                  isActive
                    ? 'bg-stone-200 text-stone-900 font-semibold'
                    : 'text-stone-700 hover:bg-stone-100'
                }`}
              >
                <div className="flex items-center gap-2.5">
                  <Icon className="w-4 h-4 text-stone-500" />
                  <span>{link.label}</span>
                </div>
                {link.badge && (
                  <span className="text-[10px] font-mono bg-amber-100 text-amber-800 px-1.5 py-0.5 rounded border border-amber-300">
                    {link.badge}
                  </span>
                )}
              </button>
            );
          })}

          <div className="pt-3 border-t border-stone-200 mt-2">
            <button
              onClick={() => handleLinkClick('contacto')}
              className="w-full flex items-center justify-center gap-2 px-3 py-2.5 text-xs font-mono font-medium text-stone-700 bg-white border border-stone-300 rounded-md hover:bg-stone-100"
            >
              <MessageCircle className="w-4 h-4 text-emerald-600" />
              <span>Espacio para botón WhatsApp</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
