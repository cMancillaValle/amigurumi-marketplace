/**
 * Definiciones de tipos para la plataforma de Amigurumis Artesanales
 * Estructura preparada para integración futura de backend y módulo 3D/IA.
 */

export type ProductAvailability = 'in_stock' | 'made_to_order' | 'out_of_stock';

export interface Product {
  id: string;
  name: string;
  category: string;
  shortDescription: string;
  fullDescription: string;
  price: number;
  currency: string;
  availability: ProductAvailability;
  dimensions?: {
    heightCm: number;
    widthCm: number;
  };
  materials: string[];
  approxCraftTimeHours?: number;
  featured?: boolean;
  /**
   * Identificador o ruta prevista para la imagen futura.
   * En esta fase se representa con un placeholder visual estructurado.
   */
  imagePlaceholderText: string;
  tags: string[];
}

export interface CategoryOption {
  id: string;
  name: string;
  description: string;
  itemCount?: number;
}

export interface BusinessConfig {
  brandName: string;
  provisionalTag: string;
  tagline: string;
  aboutText: string;
  craftPhilosophy: string;
  contact: {
    whatsappNumberPlaceholder: string;
    whatsappDisplayText: string;
    emailPlaceholder: string;
    locationPlaceholder: string;
    workshopHours: string;
    instagramPlaceholder: string;
  };
}
