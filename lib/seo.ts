/**
 * SEO Utilities and Structured Data
 */

export interface SchemaOrganization {
  '@context': string;
  '@type': string;
  name: string;
  url: string;
  logo: string;
  description: string;
  sameAs: string[];
  address: {
    '@type': string;
    streetAddress: string;
    addressLocality: string;
    addressRegion: string;
    postalCode: string;
    addressCountry: string;
  };
  contact: {
    '@type': string;
    telephone: string;
    email: string;
  };
}

export const organizationSchema: SchemaOrganization = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Ecocee',
  url: 'https://ecocee.in',
  logo: 'https://ecocee.in/logo.png',
  description: 'Ecocee - Kerala-based embedded systems, IoT & AI solutions startup',
  sameAs: [
    'https://www.linkedin.com/company/ecocee',
    'https://twitter.com/ecocee',
    'https://github.com/cyberkutti-iedc',
  ],
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Your Street Address',
    addressLocality: 'Thrissur',
    addressRegion: 'Kerala',
    postalCode: '680001',
    addressCountry: 'IN',
  },
  contact: {
    '@type': 'ContactPoint',
    telephone: '+91-XXX-XXX-XXXX',
    email: 'ecoceeteam@gmail.com',
  },
};

export interface BreadcrumbSchema {
  '@context': string;
  '@type': string;
  itemListElement: Array<{
    '@type': string;
    position: number;
    name: string;
    item: string;
  }>;
}

export function generateBreadcrumbs(path: string): BreadcrumbSchema {
  const segments = path.split('/').filter(Boolean);
  const itemListElement = [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Home',
      item: 'https://ecocee.in',
    },
  ];

  let currentPath = '';
  segments.forEach((segment, index) => {
    currentPath += `/${segment}`;
    itemListElement.push({
      '@type': 'ListItem',
      position: index + 2,
      name: segment.charAt(0).toUpperCase() + segment.slice(1),
      item: `https://ecocee.in${currentPath}`,
    });
  });

  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement,
  };
}

export interface ProductSchema {
  '@context': string;
  '@type': string;
  name: string;
  description: string;
  image: string;
  brand: {
    '@type': string;
    name: string;
  };
  aggregateRating?: {
    '@type': string;
    ratingValue: number;
    ratingCount: number;
    bestRating: number;
    worstRating: number;
  };
}

export function generateProductSchema(product: {
  name: string;
  description: string;
  image: string;
  rating?: number;
  reviewCount?: number;
}): ProductSchema {
  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.name,
    description: product.description,
    image: product.image,
    brand: {
      '@type': 'Brand',
      name: 'Ecocee',
    },
    ...(product.rating && product.reviewCount && {
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: product.rating,
        ratingCount: product.reviewCount,
        bestRating: 5,
        worstRating: 1,
      },
    }),
  };
}

/**
 * Generate optimized meta tags
 */
export interface MetaTags {
  title: string;
  description: string;
  keywords: string[];
  ogTitle: string;
  ogDescription: string;
  ogImage: string;
  ogUrl: string;
  twitterCard: string;
  twitterTitle: string;
  twitterDescription: string;
  twitterImage: string;
  canonical: string;
}

export function generateMetaTags(
  title: string,
  description: string,
  keywords: string[],
  imageUrl: string,
  pageUrl: string,
  overrides?: Partial<MetaTags>
): MetaTags {
  return {
    title,
    description,
    keywords,
    ogTitle: title,
    ogDescription: description,
    ogImage: imageUrl,
    ogUrl: pageUrl,
    twitterCard: 'summary_large_image',
    twitterTitle: title,
    twitterDescription: description,
    twitterImage: imageUrl,
    canonical: pageUrl,
    ...overrides,
  };
}

/**
 * SEO optimization recommendations
 */
export const seoChecklist = {
  'Meta Tags': [
    '✓ Title tag (50-60 characters)',
    '✓ Meta description (150-160 characters)',
    '✓ Keywords (3-5 relevant keywords)',
    '✓ Open Graph tags (OG:title, OG:description, OG:image, OG:url)',
    '✓ Twitter Card tags',
    '✓ Canonical URL',
  ],
  'Structured Data': [
    '✓ Organization schema (JSON-LD)',
    '✓ Product schema (JSON-LD)',
    '✓ Breadcrumb schema (JSON-LD)',
    '✓ Article/BlogPosting schema',
  ],
  'Technical SEO': [
    '✓ Mobile responsiveness',
    '✓ Page speed optimization',
    '✓ SSL/HTTPS',
    '✓ Robots.txt configured',
    '✓ Sitemap.xml generated',
    '✓ XML sitemap submitted',
  ],
  'Content Optimization': [
    '✓ Heading hierarchy (H1, H2, H3)',
    '✓ Image alt texts',
    '✓ Internal linking',
    '✓ URL structure optimization',
    '✓ Keyword optimization',
  ],
};
