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

// Sample product data matching your ProductCard interface
export const products: Product[] = [
  {
  id: 'autoblend-001',
  title: 'AutoBlend IoT Mojito Mixer',
  description: 'At AutoBlend, we are passionate about crafting the perfect blend of flavors for your refreshing drinks. Our IoT-powered Mojito Mixer / Juice Mixer Machine is designed to elevate your beverage experience with smart automation, real-time control, and precision blending.',
  category: 'embedded',
  headerImage: 'https://styxucsqgybzuprmkmft.supabase.co/storage/v1/object/sign/projects/AitoBlend/IMG-20230910-WA0003.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV82MDdmMzdkYy1iZmY4LTQ1NTQtYjNjZC00YWQ1ZDI0MmI4YTMiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJwcm9qZWN0cy9BaXRvQmxlbmQvSU1HLTIwMjMwOTEwLVdBMDAwMy5qcGciLCJpYXQiOjE3NTU4NDc0OTMsImV4cCI6MTgxODkxOTQ5M30.QZmpbEV9F-hb5eXXHDNJ_ZdQpONKIIQ17X9KV_ih-38',
  images: [
   
    'https://styxucsqgybzuprmkmft.supabase.co/storage/v1/object/sign/projects/AitoBlend/IMG_20230812_034758.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV82MDdmMzdkYy1iZmY4LTQ1NTQtYjNjZC00YWQ1ZDI0MmI4YTMiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJwcm9qZWN0cy9BaXRvQmxlbmQvSU1HXzIwMjMwODEyXzAzNDc1OC5qcGciLCJpYXQiOjE3NTU4NDc3NzUsImV4cCI6MTc4NzM4Mzc3NX0.G2450Phg162kWMzyyLdRpb9DuY-k6FexxmLSgWWuzvw',
    'https://styxucsqgybzuprmkmft.supabase.co/storage/v1/object/sign/projects/AitoBlend/IMG-20230802-WA0063.jpeg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV82MDdmMzdkYy1iZmY4LTQ1NTQtYjNjZC00YWQ1ZDI0MmI4YTMiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJwcm9qZWN0cy9BaXRvQmxlbmQvSU1HLTIwMjMwODAyLVdBMDA2My5qcGVnIiwiaWF0IjoxNzU1ODQ3ODA3LCJleHAiOjE3ODczODM4MDd9.xa2EpMOFo1RY1xLW5O_IzSj0fVongF1Zfe59xZBwdT0',
    'https://styxucsqgybzuprmkmft.supabase.co/storage/v1/object/sign/projects/AitoBlend/IMG-20230814-WA0007.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV82MDdmMzdkYy1iZmY4LTQ1NTQtYjNjZC00YWQ1ZDI0MmI4YTMiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJwcm9qZWN0cy9BaXRvQmxlbmQvSU1HLTIwMjMwODE0LVdBMDAwNy5qcGciLCJpYXQiOjE3NTU4NDc5MjIsImV4cCI6MTc4NzM4MzkyMn0.-nb2TjVUHpWeTz79KoyPWMQQek0ScfPJZiVFcgxITBI'
  ],
  video: 'https://styxucsqgybzuprmkmft.supabase.co/storage/v1/object/sign/projects/AitoBlend/VID-20230819-WA0002.mp4?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV82MDdmMzdkYy1iZmY4LTQ1NTQtYjNjZC00YWQ1ZDI0MmI4YTMiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJwcm9qZWN0cy9BaXRvQmxlbmQvVklELTIwMjMwODE5LVdBMDAwMi5tcDQiLCJpYXQiOjE3NTU4NTA2MDQsImV4cCI6MTc4NzM4NjYwNH0.9tAjjWTZCqbD-WHbRAeU9eSFsI1KF_y-8sTviaMwMbE',
  techStack: ['ESP32', 'IoT Cloud', 'Arduino', 'Mobile App'],
  featured: true,
  createdAt: new Date('2025-08-15'),
  updatedAt: new Date('2025-08-20'),
  price: "Not Available",
  inStock: true,
  tags: ['iot', 'mixer', 'smart-drinks', 'automation'],
  specifications: {
    'Microcontroller': 'ESP32',
    'Connectivity': 'Wi-Fi, Bluetooth',
    'Power Supply': '12V DC / USB-C / Battery',
    'Control': 'Mobile App / Touch Panel',
    'Capacity': 'Up to 1L mixing jar'
  },
  features: [
    'Smart IoT-based beverage mixing',
    'Customizable recipes via mobile app',
    'One-touch Mojito & juice preparation',
    'Portable and stylish design',
    'Automatic cleaning mode'
  ],
  //vision: `Our team of innovators is on a mission to make every sip a delightful adventure. With AutoBlend, mixology becomes an art. Whether you're hosting a party or craving a cool beverage, sit back, relax, and let our Mojito Mixer work its magic. Join us on this journey of taste, technology, and innovation.`
},
  {
    id: 'ai-001',
    title: 'Edge AI Vision System',
    description: 'Compact AI vision module for industrial quality inspection and object recognition with high accuracy and low latency processing.',
    category: 'ai',
    headerImage: 'https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?w=800&h=400&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1581092921461-eab62e97a780?w=800&h=600&fit=crop'
    ],
    video: 'https://player.vimeo.com/video/371231588?background=1&muted=1',
    techStack: ['TensorFlow Lite', 'Python', 'OpenCV', 'NVIDIA Jetson'],
    featured: true,
    createdAt: new Date('2023-07-10'),
    updatedAt: new Date('2023-11-05'),
    price: 24999,
    inStock: true,
    tags: ['computer-vision', 'quality-control'],
    specifications: {
      'Processor': 'NVIDIA Jetson Nano',
      'Camera Interface': '2x MIPI CSI-2',
      'Memory': '4GB LPDDR4'
    },
    features: [
      'Real-time object detection',
      'Custom model deployment',
      'Low power consumption'
    ]
  },
  {
    id: 'proto-001',
    title: 'Wireless Sensor Network Node',
    description: 'Low-power wireless sensor node for environmental monitoring applications with extended battery life and mesh networking capabilities.',
    category: 'prototype',
    headerImage: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=800&h=400&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1591105994050-e1e1e0a7ab2c?w=800&h=600&fit=crop'
    ],
    techStack: ['STM32', 'LoRa', 'C++', 'Low-power Design'],
    featured: false,
    createdAt: new Date('2023-09-01'),
    updatedAt: new Date('2023-12-15'),
    price: 3499,
    inStock: false,
    tags: ['lorawan', 'environmental'],
    specifications: {
      'Microcontroller': 'STM32L0',
      'Wireless': 'LoRa 868/915MHz',
      'Battery': '2x AA lithium'
    },
    features: [
      '2-year battery life',
      'LoRaWAN connectivity',
      'Temperature & humidity sensing'
    ]
  },
  {
    id: 'emb-002',
    title: 'Industrial PLC Controller',
    description: 'Rugged programmable logic controller for industrial automation applications with robust connectivity options.',
    category: 'embedded',
    headerImage: 'https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?w=800&h=400&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1581092921461-eab62e97a780?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1581094271901-8242d0ae2a6d?w=800&h=600&fit=crop'
    ],
    techStack: ['ARM Cortex-M7', 'C', 'Ethernet', 'Modbus'],
    featured: false,
    createdAt: new Date('2023-06-20'),
    updatedAt: new Date('2023-10-30'),
    price: 15999,
    inStock: true,
    tags: ['industrial', 'automation'],
    specifications: {
      'Processor': 'ARM Cortex-M7',
      'Digital I/O': '16 channels',
      'Communication': 'Ethernet, RS-485'
    },
    features: [
      'DIN rail mounting',
      'Digital and analog I/O',
      'Ethernet and serial communication'
    ]
  },
  {
    id: 'ai-002',
    title: 'Smart Voice Assistant Module',
    description: 'Offline voice recognition module with custom wake word support and noise cancellation capabilities.',
    category: 'ai',
    headerImage: 'https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=800&h=400&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1590650516494-0c8e4a4dd67b?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1590650157510-6c7a6b7885c7?w=800&h=600&fit=crop'
    ],
    video: 'https://player.vimeo.com/video/371231686?background=1&muted=1',
    techStack: ['TensorFlow', 'Python', 'DSP', 'Noise Cancellation'],
    featured: true,
    createdAt: new Date('2023-08-05'),
    updatedAt: new Date('2023-11-20'),
    price: 12999,
    inStock: true,
    tags: ['voice-recognition', 'offline-ai'],
    specifications: {
      'Processor': 'Dual-core HiFi4 DSP',
      'Microphone Array': '4 digital MEMS mics',
      'Wake Word Storage': 'Up to 5 custom words'
    },
    features: [
      'Offline voice processing',
      'Custom wake word training',
      'Noise cancellation'
    ]
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