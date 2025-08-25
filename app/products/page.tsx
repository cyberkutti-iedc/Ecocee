'use client'

import { useState, useEffect } from 'react'
import { Product, getProducts } from '@/data/products'
import ProductsHeader from '@/components/products/ProductHeader'
import ProductGrid from '@/components/products/ProductGrid'
// import ProductForm from '@/components/products/ProductForm'
import FloatingCTA from '@/components/products/FloatingCTA'
import LoadingSpinner from '@/components/products/LoadingSpinner'
import { Plus, Filter } from 'lucide-react'
import Head from 'next/head'

// SEO Metadata
const productPageSEO = {
  title: "Ecocee Products | Embedded Systems & IoT Solutions | Kerala",
  description: "Explore Ecocee's innovative embedded systems, AI solutions, and prototypes. Kerala-based technology products for industrial automation and smart devices.",
  keywords: [
    "Embedded systems products",
    "IoT solutions Kerala",
    "AI hardware products",
    "Industrial automation devices",
    "Smart home technology India",
    "Kerala electronics products",
    "Embedded prototypes",
    "Ecocee product catalog",
    "IoT development boards",
    "AI edge computing devices",
    "PCB design services",
    "Firmware solutions",
    "Custom hardware products",
    "Electronics manufacturing Kerala",
    "Tech startup products India"
  ],
  image: "https://ecocee.in/images/og-products.webp",
  canonical: "https://ecocee.in/products",
  twitterHandle: "@EcoceeTech"
}

// Structured Data
const productPageStructuredData = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "name": "Ecocee Product Catalog",
  "description": "Collection of embedded systems and IoT products developed by Ecocee",
  "url": "https://ecocee.in/products",
  "publisher": {
    "@type": "Organization",
    "name": "Ecocee",
    "logo": {
      "@type": "ImageObject",
      "url": "https://ecocee.in/logo.webp"
    }
  }
}

export default function ProductsPage() {
  const [products, setProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [showForm, setShowForm] = useState(false)
  const [filterCategory, setFilterCategory] = useState<'all' | 'embedded' | 'ai' | 'prototype'>('all')
  const [showCTA, setShowCTA] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowCTA(true)
    }, 30000)

    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    loadProducts()
  }, [])

  const loadProducts = async () => {
    try {
      setLoading(true)
      setError(null)
      const fetchedProducts = await getProducts()
      setProducts(fetchedProducts)
    } catch (err) {
      console.warn('Unexpected error:', err)
    } finally {
      setLoading(false)
    }
  }

  const handleProductAdded = () => {
    loadProducts()
    setShowForm(false)
  }

  const handleCloseCTA = () => {
    setShowCTA(false)
  }

  const filteredProducts = products.filter(product => 
    filterCategory === 'all' || product.category === filterCategory
  )

  if (loading) {
    return (
      <>
        <Head>
          <title>{productPageSEO.title}</title>
          <meta name="description" content={productPageSEO.description} />
        </Head>
        <LoadingSpinner />
      </>
    )
  }

  return (
    <>
      {/* SEO Meta Tags */}
      <Head>
        <title>{productPageSEO.title}</title>
        <meta name="description" content={productPageSEO.description} />
        <meta name="keywords" content={productPageSEO.keywords.join(', ')} />
        <link rel="canonical" href={productPageSEO.canonical} />
        
        {/* Open Graph */}
        <meta property="og:title" content={productPageSEO.title} />
        <meta property="og:description" content={productPageSEO.description} />
        <meta property="og:image" content={productPageSEO.image} />
        <meta property="og:url" content={productPageSEO.canonical} />
        <meta property="og:type" content="website" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={productPageSEO.title} />
        <meta name="twitter:description" content={productPageSEO.description} />
        <meta name="twitter:image" content={productPageSEO.image} />
        <meta name="twitter:site" content={productPageSEO.twitterHandle} />
        
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(productPageStructuredData) }}
        />
      </Head>

      <div className="min-h-screen bg-black text-white" itemScope itemType="https://schema.org/ItemList">
        {/* Header Section */}
        <ProductsHeader />

        {/* Main Content */}
        <main className="container mx-auto px-4 py-12">
          {/* Action Bar */}
          <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 text-green-400">
                <Filter className="w-5 h-5" />
                <span className="text-sm font-medium">Filter:</span>
              </div>
              <select
                value={filterCategory}
                onChange={(e) => setFilterCategory(e.target.value as any)}
                className="bg-gray-900 border border-gray-700 rounded-lg px-4 py-2 text-white focus:ring-2 focus:ring-green-500 focus:border-transparent"
                aria-label="Filter products by category"
              >
                <option value="all">All Categories</option>
                <option value="embedded">Embedded Systems</option>
                <option value="ai">AI Solutions</option>
                <option value="prototype">Prototypes</option>
              </select>
            </div>
          </div>

          {/* Error Message */}
          {error && (
            <div className="bg-red-900/50 border border-red-500 rounded-lg p-4 mb-8">
              <p className="text-red-200">{error}</p>
              <button
                onClick={loadProducts}
                className="mt-2 text-red-400 hover:text-red-300 underline"
              >
                Try Again
              </button>
            </div>
          )}

          {/* Products Grid */}
          <ProductGrid products={filteredProducts} />

          {/* Empty State */}
          {filteredProducts.length === 0 && !loading && !error && (
            <div className="text-center py-16">
              <div className="w-24 h-24 mx-auto mb-6 bg-gray-800 rounded-full flex items-center justify-center">
                <Plus className="w-12 h-12 text-gray-500" />
              </div>
              <h3 className="text-xl font-semibold text-gray-400 mb-2">No products found</h3>
              <p className="text-gray-500 mb-6">
                {filterCategory === 'all' 
                  ? "Check back soon for our latest product releases."
                  : `No products found in the ${filterCategory} category.`
                }
              </p>
            </div>
          )}
        </main>

        {/* Product Form Modal */}
        {/* {showForm && (
          <ProductForm
            onClose={() => setShowForm(false)}
            onProductAdded={handleProductAdded}
          />
        )} */}

        {/* Floating CTA */}
        {showCTA && <FloatingCTA onClose={handleCloseCTA} />}
      </div>
    </>
  )
}