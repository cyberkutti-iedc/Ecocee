'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Product } from '@/data/products'
import { X, Play, ExternalLink, Calendar, Tag } from 'lucide-react'

interface ProductModalProps {
  product: Product
  onClose: () => void
}

export default function ProductModal({ product, onClose }: ProductModalProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose()
      }
    }

    document.addEventListener('keydown', handleEscape)
    document.body.style.overflow = 'hidden'

    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = 'unset'
    }
  }, [onClose])

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

  const openVideoInNewTab = () => {
    if (product.video) {
      window.open(product.video, '_blank')
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          onClose()
        }
      }}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        className="relative bg-gray-900 border border-gray-800 rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
      >
        {/* Header */}
        <div className="sticky top-0 bg-gray-900 border-b border-gray-800 p-6 flex items-center justify-between z-10">
          <div className="flex items-center gap-4">
            <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getCategoryColor(product.category)}`}>
              {product.category.charAt(0).toUpperCase() + product.category.slice(1)}
            </span>
            {product.featured && (
              <span className="bg-yellow-500 text-black px-3 py-1 rounded-full text-xs font-bold">
                Featured
              </span>
            )}
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-800 rounded-lg transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Title and meta */}
          <div className="mb-6">
            <h2 className="text-3xl font-bold text-white mb-4">{product.title}</h2>
            
            <div className="flex items-center gap-6 text-sm text-gray-400 mb-4">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>Created {new Date(product.createdAt).toLocaleDateString()}</span>
              </div>
              <div className="flex items-center gap-2">
                <Tag className="w-4 h-4" />
                <span>{((product.images || []).length + 1)} media file{(product.images || []).length !== 0 ? 's' : ''}</span>
              </div>
            </div>
          </div>

          {/* Main media (image or muted video) */}
          <div className="mb-6">
            <div className="relative h-64 md:h-80 rounded-lg overflow-hidden bg-gray-800">
              {product.video && currentImageIndex === 0 ? (
                <video
                  src={product.video}
                  className="w-full h-full object-cover"
                  muted
                  autoPlay
                  loop
                  playsInline
                  preload="metadata"
                  style={{ aspectRatio: '9/16' }}
                />
              ) : (
                <img
                  src={currentImageIndex === 0 ? product.headerImage : (product.images || [])[currentImageIndex - 1]}
                  alt={product.title}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.currentTarget.src = 'https://images.unsplash.com/photo-1518717758536-85ae29035b6d?w=800&h=400&fit=crop&auto=format'
                  }}
                />
              )}
            </div>

            {/* Thumbnail navigation */}
            {((product.images || []).length > 0 || product.video) && (
              <div className="flex gap-2 mt-4 overflow-x-auto pb-2">
                <button
                  onClick={() => setCurrentImageIndex(0)}
                  className={`relative flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden border-2 transition-colors ${
                    currentImageIndex === 0 ? 'border-green-500' : 'border-gray-700 hover:border-gray-600'
                  }`}
                >
                  <img 
                    src={product.headerImage} 
                    alt="Header" 
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.currentTarget.src = 'https://images.unsplash.com/photo-1518717758536-85ae29035b6d?w=400&h=300&fit=crop&auto=format'
                    }}
                  />
                  {product.video && (
                    <div className="absolute inset-0 flex items-center justify-center bg-black/50">
                      <Play className="w-4 h-4 text-white" />
                    </div>
                  )}
                </button>
                {(product.images || []).map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index + 1)}
                    className={`flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden border-2 transition-colors ${
                      currentImageIndex === index + 1 ? 'border-green-500' : 'border-gray-700 hover:border-gray-600'
                    }`}
                  >
                    <img 
                      src={image} 
                      alt={`Image ${index + 1}`} 
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.currentTarget.src = 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=400&h=300&fit=crop&auto=format'
                      }}
                    />
                  </button>
                ))}
              </div>
            )}
              </div>
            
          </div>

          {/* Description */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-white mb-3">Description</h3>
            <p className="text-gray-300 leading-relaxed">{product.description}</p>
          </div>

          {/* Tech Stack */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-white mb-3">Technology Stack</h3>
            <div className="flex flex-wrap gap-2">
              {(product.techStack || []).map((tech, index) => (
                <span
                  key={index}
                  className="bg-gray-800 border border-gray-700 text-green-400 px-3 py-2 rounded-lg text-sm font-mono hover:border-green-500/50 transition-colors"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Actions */}
          <div className="flex gap-4 pt-6 border-t border-gray-800">
            {product.video && (
              <button
                onClick={openVideoInNewTab}
                className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
              >
                <Play className="w-5 h-5" />
                Watch Demo
              </button>
            )}
            <button
              onClick={onClose}
              className="flex items-center gap-2 bg-gray-800 hover:bg-gray-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
            >
              <ExternalLink className="w-5 h-5" />
              Close
            </button>
          </div>
        
      </motion.div>
    </motion.div>
  )
}