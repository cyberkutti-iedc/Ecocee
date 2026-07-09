export interface Product {
  id: string;
  title: string;
  description: string;
  category: 'embedded' | 'ai' | 'prototype';
  headerImage: string;
  images: string[];
  video?: string; // Optional cloud video URL (muted)
  techStack: string[];
  featured: boolean;
  createdAt: Date;
  updatedAt: Date;
  // Optional fields that might be used elsewhere
  price?: number | string; // Can be a number or a string for "Not Available"
  inStock?: boolean;
  tags?: string[];
  specifications?: Record<string, string>;
  features?: string[];
}

export const products: Product[] = [
  {
    id: 'autoblend',
    title: 'AutoBlend',
    description: 'IoT-based smart beverage automation system engineered for precise mixing, real-time telemetry, and reliable service at scale.',
    category: 'embedded',
    headerImage: 'https://styxucsqgybzuprmkmft.supabase.co/storage/v1/object/sign/projects/AitoBlend/IMG-20230910-WA0003.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV82MDdmMzdkYy1iZmY4LTQ1NTQtYjNjZC00YWQ1ZDI0MmI4YTMiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJwcm9qZWN0cy9BaXRvQmxlbmQvSU1HLTIwMjMwOTEwLVdBMDAwMy5qcGciLCJpYXQiOjE3NTU4NDc0OTMsImV4cCI6MTgxODkxOTQ5M30.QZmpbEV9F-hb5eXXHDNJ_ZdQpONKIIQ17X9KV_ih-38',
    images: [
      'https://styxucsqgybzuprmkmft.supabase.co/storage/v1/object/sign/projects/AitoBlend/IMG_20230812_034758.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV82MDdmMzdkYy1iZmY4LTQ1NTQtYjNjZC00YWQ1ZDI0MmI4YTMiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJwcm9qZWN0cy9BaXRvQmxlbmQvSU1HXzIwMjMwODEyXzAzNDc1OC5qcGciLCJpYXQiOjE3NTU4NDc3NzUsImV4cCI6MTc4NzM4Mzc3NX0.G2450Phg162kWMzyyLdRpb9DuY-k6FexxmLSgWWuzvw'
    ],
    techStack: ['ESP32', 'IoT Cloud', 'Embedded C'],
    featured: true,
    createdAt: new Date('2024-01-01'),
    updatedAt: new Date('2024-05-10'),
    tags: ['IoT', 'Hardware', 'Automation'],
  },
  {
    id: 'smart-display',
    title: 'Smart Display & Booking Platform',
    description: 'Digital signage and scheduling ecosystem offering centralized control, low latency updates, and seamless physical-digital integration.',
    category: 'embedded',
    headerImage: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&q=80',
    images: [],
    techStack: ['Edge Processing', 'Cloud Dashboard', 'Secure OTA'],
    featured: true,
    createdAt: new Date('2024-02-15'),
    updatedAt: new Date('2024-06-01'),
    tags: ['Digital Signage', 'Platform'],
  },
  {
    id: 'custom-ai-builder',
    title: 'Custom AI Builder Platforms',
    description: 'Tailored infrastructure for deploying AI tools, autonomous agents, and process automation within secure organizational boundaries.',
    category: 'ai',
    headerImage: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800&q=80',
    images: [],
    techStack: ['LLMs', 'Agentic Workflows', 'Docker'],
    featured: true,
    createdAt: new Date('2024-03-10'),
    updatedAt: new Date('2024-07-20'),
    tags: ['Agents', 'Automation', 'Enterprise'],
  },
  {
    id: 'rag-systems',
    title: 'RAG-Based AI Systems',
    description: 'Private knowledge assistants utilizing Retrieval-Augmented Generation to securely reason over internal documents and proprietary data.',
    category: 'ai',
    headerImage: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=800&q=80',
    images: [],
    techStack: ['Vector Databases', 'Transformers', 'Secure Enclaves'],
    featured: true,
    createdAt: new Date('2024-01-20'),
    updatedAt: new Date('2024-06-15'),
    tags: ['RAG', 'Knowledge Base', 'Privacy'],
  },
  {
    id: 'rally-box',
    title: 'Rally Box',
    description: 'High-performance embedded system device powered by the ESP32-P4 architecture, optimized for intensive computational tasks at the edge.',
    category: 'embedded',
    headerImage: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80',
    images: [],
    techStack: ['ESP32-P4', 'C++', 'RTOS'],
    featured: true,
    createdAt: new Date('2024-04-05'),
    updatedAt: new Date('2024-07-01'),
    tags: ['ESP32-P4', 'Edge Compute'],
  },
  {
    id: 'iot-automation',
    title: 'IoT & Embedded Automation',
    description: 'End-to-end industrial automation solutions leveraging ESP32 and PIC architectures for robust sensor integration and precision control.',
    category: 'embedded',
    headerImage: 'https://images.unsplash.com/photo-1580584126903-c17d41830450?w=800&q=80',
    images: [],
    techStack: ['ESP32', 'PIC', 'Sensors', 'Actuators'],
    featured: true,
    createdAt: new Date('2023-11-01'),
    updatedAt: new Date('2024-05-15'),
    tags: ['Industrial', 'Sensors'],
  },
  {
    id: 'offline-voice',
    title: 'Offline AI Voice Systems',
    description: 'On-device private voice assistants capable of natural language processing and task execution without requiring cloud connectivity.',
    category: 'ai',
    headerImage: 'https://images.unsplash.com/photo-1589254065878-42c9da997008?w=800&q=80',
    images: [],
    techStack: ['DSP', 'Edge AI', 'Voice Recognition'],
    featured: true,
    createdAt: new Date('2024-02-01'),
    updatedAt: new Date('2024-06-25'),
    tags: ['Voice', 'Offline', 'Privacy'],
  },
  {
    id: 'experimental',
    title: 'Experimental Labs',
    description: 'Internal projects spanning operating systems, frameworks, and developer tooling: Niti, Kode, and Kuttai.',
    category: 'prototype',
    headerImage: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&q=80',
    images: [],
    techStack: ['System Architecture', 'Language Design'],
    featured: true,
    createdAt: new Date('2024-01-10'),
    updatedAt: new Date('2024-07-28'),
    tags: ['R&D', 'Internal'],
  },
  {
    id: 'custom-hardware',
    title: 'Custom Hardware Prototyping',
    description: 'Rapid engineering of bespoke electronic boards and prototypes to validate concepts and accelerate time to market.',
    category: 'prototype',
    headerImage: 'https://images.unsplash.com/photo-1601004890684-d8cbf643f5f2?w=800&q=80',
    images: [],
    techStack: ['PCB Design', '3D Printing', 'Firmware'],
    featured: true,
    createdAt: new Date('2023-12-05'),
    updatedAt: new Date('2024-07-10'),
    tags: ['PCB', 'Prototyping'],
  }
];

// Function to get products (simulating async operation)
export const getProducts = async (): Promise<Product[]> => {
  // Simulate API call delay
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products);
    }, 500);
  });
};

// Function to get product by ID
export const getProductById = async (id: string): Promise<Product | undefined> => {
  return products.find(product => product.id === id);
};

// Function to get products by category
export const getProductsByCategory = async (category: string): Promise<Product[]> => {
  return products.filter(product => product.category === category);
};

// Function to get featured products
export const getFeaturedProducts = async (): Promise<Product[]> => {
  return products.filter(product => product.featured);
};