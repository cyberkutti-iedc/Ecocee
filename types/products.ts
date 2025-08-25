export type Product = {
  id: string;
  title: string;
  description: string;
  header_image: string;
  images: string[];
  video?: string | null;
  tech_stack: string[];
  category: 'embedded' | 'ai' | 'prototype';
  featured: boolean;
  created_at: string;
  updated_at: string;
};

export type ProductFormData = {
  title: string;
  description: string;
  headerImage: string;
  images: string[];
  video?: string;
  techStack: string[];
  category: 'embedded' | 'ai' | 'prototype';
  featured: boolean;
};

export type MediaFolder = {
  id: any;
  name: string;
  path: string;
};

export type MediaFile = {
  name: string;
  path: string;
  url: string;
  type: 'image' | 'video' | 'other';
};

export type ProductStats = {
  total: number;
  embedded: number;
  ai: number;
  prototype: number;
  featured: number;
};