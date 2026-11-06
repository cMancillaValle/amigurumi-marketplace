/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { CatalogSection } from './components/catalog/CatalogSection';
import { CustomizerIntroSection } from './components/CustomizerIntroSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { Product } from './types';
import { businessConfig } from './data/businessConfig';

export default function App() {
  const [activeSection, setActiveSection] = useState<string>('inicio');

  // Handle smooth scroll navigation
  const handleNavigate = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    } else if (sectionId === 'inicio') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  // WhatsApp inquiry handler for individual products
  const handleInquireProductWhatsApp = (product: Product) => {
    const text = encodeURIComponent(
      `¡Hola! Estoy visitando la web y me interesa consultar por el amigurumi "${product.name}" (Ref: ${product.id}). ¿Tienen disponibilidad o cuánto demora su confección artesanal?`
    );
    window.open(`https://wa.me/?text=${text}`, '_blank');
  };

  // Observe scroll position to highlight active section in navbar
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['inicio', 'nosotros', 'catalogo', 'personalizar', 'contacto'];
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-stone-50 text-stone-800 font-sans selection:bg-amber-200 selection:text-amber-900 flex flex-col">
      {/* Navigation Header */}
      <Navbar activeSection={activeSection} onNavigate={handleNavigate} />

      {/* Main Content Area */}
      <main className="flex-1">
        {/* Section 1: Inicio / Hero */}
        <div id="inicio">
          <Hero
            onNavigateToCatalog={() => handleNavigate('catalogo')}
            onNavigateToCustomizer={() => handleNavigate('personalizar')}
          />
        </div>

        {/* Section 2: Presentación del Emprendimiento */}
        <AboutSection />

        {/* Section 3: Catálogo Digital de Productos */}
        <CatalogSection onInquireWhatsApp={handleInquireProductWhatsApp} />

        {/* Section 4: Futura Personalización (3D e IA) */}
        <CustomizerIntroSection />

        {/* Section 5: Contacto e Integración WhatsApp */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer onNavigate={handleNavigate} />
    </div>
  );
}
