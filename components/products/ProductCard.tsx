// components/products/ProductCard.tsx
'use client'

import { motion } from 'framer-motion'
import { Product } from '@/data/products'
import { ExternalLink, Play, Star } from 'lucide-react'

interface ProductCardProps {
  product: Product
  onClick: () => void
}

export default function ProductCard({ product, onClick }: ProductCardProps) {
  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'embedded':
        return 'bg-blue-500/20 text-blue-400 border-blue-500/30'
      case 'ai':
        return 'bg-green-500/20 text-green-400 border-green-500/30'
      case 'prototype':
        return 'bg-purple-500/20 text-purple-400 border-purple-500/30'
      default:
        return 'bg-gray-500/20 text-gray-400 border-gray-500/30'
    }
  }

  return (
    <motion.div
      whileHover={{ y: -10, scale: 1.02 }}
      transition={{ duration: 0.3 }}
      className="group cursor-pointer"
      onClick={onClick}
    >
      <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl overflow-hidden hover:border-green-500/50 transition-all duration-300">
        {/* Header Image */}
        <div className="relative h-48 overflow-hidden">
          <img
            src={product.headerImage}
            alt={product.title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            onError={(e) => {
              e.currentTarget.src = 'https://images.unsplash.com/photo-1518717758536-85ae29035b6d?w=800&h=400&fit=crop&auto=format'
            }}
          />
          
          {/* Featured badge */}
          {product.featured && (
            <div className="absolute top-3 right-3">
              <div className="bg-yellow-500 text-black px-2 py-1 rounded-full flex items-center gap-1 text-xs font-bold">
                <Star className="w-3 h-3" />
                Featured
              </div>
            </div>
          )}

          {/* Video indicator */}
          {product.video && (
            <div className="absolute top-3 left-3">
              <div className="bg-black/70 backdrop-blur-sm text-white px-2 py-1 rounded-full flex items-center gap-1 text-xs">
                <Play className="w-3 h-3" />
                Video
              </div>
            </div>
          )}

          {/* Hover overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="absolute bottom-4 left-4 right-4">
              <button className="w-full bg-green-500 hover:bg-green-600 text-black font-semibold py-2 px-4 rounded-lg flex items-center justify-center gap-2 transition-colors">
                <ExternalLink className="w-4 h-4" />
                View Details
              </button>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Category and title */}
          <div className="flex items-center justify-between mb-3">
            <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getCategoryColor(product.category)}`}>
              {product.category.charAt(0).toUpperCase() + product.category.slice(1)}
            </span>
          </div>

          <h3 className="text-xl font-bold text-white mb-3 group-hover:text-green-400 transition-colors">
            {product.title}
          </h3>

          <p className="text-gray-400 text-sm mb-4 line-clamp-3">
            {product.description}
          </p>

          {/* Tech stack */}
          <div className="space-y-3">
            <div className="flex flex-wrap gap-2">
              {product.techStack.slice(0, 3).map((tech, index) => (
                <span
                  key={index}
                  className="bg-gray-800 text-green-400 px-2 py-1 rounded text-xs font-mono"
                >
                  {tech}
                </span>
              ))}
              {product.techStack.length > 3 && (
                <span className="bg-gray-800 text-gray-400 px-2 py-1 rounded text-xs">
                  +{product.techStack.length - 3} more
                </span>
              )}
            </div>

            {/* Images count */}
            <div className="flex items-center justify-between text-xs text-gray-500">
              <span>{product.images.length} image{product.images.length !== 1 ? 's' : ''}</span>
              <span>{new Date(product.createdAt).toLocaleDateString()}</span>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}