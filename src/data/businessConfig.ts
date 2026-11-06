import { BusinessConfig, CategoryOption } from '../types';

/**
 * CONFIGURACIÓN GENERAL DEL EMPRENDIMIENTO (DATOS PROVISIONALES)
 * 
 * Este archivo centraliza los datos informativos del negocio.
 * Permite cambiar el nombre comercial, contactos y textos sin alterar los componentes.
 */
export const businessConfig: BusinessConfig = {
  brandName: 'Amigurumi Artesanal',
  provisionalTag: '[Identidad Provisional]',
  tagline: 'Muñecos y figuras tejidas a mano mediante la técnica tradicional de crochet',
  aboutText: `Somos un taller artesanal dedicado a la confección punto a punto de piezas únicas en crochet. 
Cada amigurumi nace de la combinación de hilos seleccionados, paciencia y dedicación manual, logrando figuras cálidas, 
duraderas y llenas de personalidad para decoración, regalos especiales y colección.`,
  craftPhilosophy: `Nuestras creaciones priorizan materiales hipoalergénicos, ojos de seguridad fijados a presión 
y relleno de vellón siliconado lavable. Cada figura es elaborada de manera 100% individual, por lo que cada pieza 
conserva sutiles rasgos artesanales irrepetibles.`,
  contact: {
    whatsappNumberPlaceholder: '+54 9 11 0000-0000',
    whatsappDisplayText: 'Consultas directas por WhatsApp (Próxima integración)',
    emailPlaceholder: 'contacto@amigurumi-artesanal.ejemplo',
    locationPlaceholder: 'Taller Artesanal - Envíos a todo el país / Retiro previa coordinación',
    workshopHours: 'Lunes a Viernes: 10:00 a 18:00 hs',
    instagramPlaceholder: '@amigurumi_artesanal_demo',
  },
};

export const categories: CategoryOption[] = [
  {
    id: 'todos',
    name: 'Todos los productos',
    description: 'Catálogo completo de figuras tejidas a crochet',
  },
  {
    id: 'animales',
    name: 'Animales del Bosque y Selva',
    description: 'Osos, zorros, conejos y fauna en amigurumi',
  },
  {
    id: 'fantasia',
    name: 'Fantasía y Mitología',
    description: 'Dragones, criaturas fantásticas y personajes mágicos',
  },
  {
    id: 'marinos',
    name: 'Vida Marina',
    description: 'Ballenas, pulpos, medusas y fauna acuática',
  },
  {
    id: 'botanica',
    name: 'Botánica y Miniaturas',
    description: 'Cactus, suculentas en maceta tejida y llaveros',
  },
];
