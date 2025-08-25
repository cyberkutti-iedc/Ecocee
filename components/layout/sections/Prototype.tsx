"use client";

import { useState, useEffect } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  ArrowRight, 
  Cpu, 
  Zap, 
  Lightbulb, 
  Play,
  ExternalLink,
  Star,
  ChevronLeft,
  ChevronRight,
  Loader2
} from "lucide-react";
import { useRouter } from "next/navigation";
import { getProducts, Product } from "@/data/products";

export const PrototypesSection = () => {
  const router = useRouter();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Fetch products from database
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const fetchedProducts = await getProducts();
        setProducts(fetchedProducts);
        setError(null);
      } catch (err) {
        console.error('Error fetching products:', err);
        setError('Failed to load prototypes. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const featuredProducts = products.filter(p => p.featured);

  // Auto-slide functionality
  useEffect(() => {
    if (!isAutoPlaying || featuredProducts.length === 0) return;
    
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % featuredProducts.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, featuredProducts.length]);

  const handleViewAllProducts = () => {
    router.push("/products");
  };

  const handleBookConsultation = () => {
    router.push("/bookings");
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'embedded':
        return 'bg-blue-500/20 text-blue-700 dark:text-blue-400 border-blue-500/30';
      case 'ai':
        return 'bg-green-500/20 text-green-700 dark:text-green-400 border-green-500/30';
      case 'prototype':
        return 'bg-purple-500/20 text-purple-700 dark:text-purple-400 border-purple-500/30';
      default:
        return 'bg-gray-500/20 text-gray-700 dark:text-gray-400 border-gray-500/30';
    }
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'embedded':
        return <Cpu className="w-4 h-4" />;
      case 'ai':
        return <Zap className="w-4 h-4" />;
      case 'prototype':
        return <Lightbulb className="w-4 h-4" />;
      default:
        return <Cpu className="w-4 h-4" />;
    }
  };

  const nextSlide = () => {
    if (featuredProducts.length > 0) {
      setCurrentSlide((prev) => (prev + 1) % featuredProducts.length);
    }
  };

  const prevSlide = () => {
    if (featuredProducts.length > 0) {
      setCurrentSlide((prev) => (prev - 1 + featuredProducts.length) % featuredProducts.length);
    }
  };

  // Calculate stats from actual data
  const stats = {
    totalPrototypes: products.length,
    aiSolutions: products.filter(p => p.category === 'ai').length,
    embeddedSystems: products.filter(p => p.category === 'embedded').length,
    prototypes: products.filter(p => p.category === 'prototype').length,
  };

  return (
    <section className="relative w-full max-w-full overflow-hidden py-16 sm:py-20 lg:py-24">
      {/* Background with theme matching your hero */}
      <div className="absolute inset-0 -z-10 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-50/30 via-white/20 to-green-50/30 dark:from-gray-900/30 dark:via-gray-950/30 dark:to-black/30" />
        <div className="absolute top-1/4 left-1/4 w-48 h-48 sm:w-72 sm:h-72 bg-green-300/10 dark:bg-green-900/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 sm:w-72 sm:h-72 bg-blue-300/10 dark:bg-blue-900/10 rounded-full blur-3xl" />
      </div>

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="w-full flex justify-center mb-6">
            <Badge
              variant="outline"
              className="text-sm py-2 px-6 bg-white/80 dark:bg-gray-900/80 border border-gray-200 dark:border-gray-700 shadow-sm font-bold backdrop-blur-md"
            >
              <span className="mr-2 font-semibold animate-pulse text-blue-700 dark:text-green-400">
                Innovation Showcase
              </span>
              <span className="font-semibold text-gray-900 dark:text-white">Our Latest Prototypes</span>
            </Badge>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold leading-tight tracking-tight text-gray-900 dark:text-white mb-6">
            <span className="block mb-2">Bringing Ideas to</span>
            <span className="block bg-gradient-to-r from-blue-700 via-green-400 to-violet-600 bg-clip-text text-transparent dark:from-green-400 dark:via-blue-400 dark:to-violet-400 font-black">
              Reality
            </span>
          </h2>

          <p className="max-w-3xl mx-auto text-base lg:text-lg text-gray-600 dark:text-gray-300 font-medium bg-white/60 dark:bg-gray-900/60 rounded-xl px-6 py-4 shadow-md backdrop-blur-md">
            Explore our cutting-edge prototypes and innovations in embedded systems, AI, and IoT. 
            From concept to creation, we transform visionary ideas into working solutions.
          </p>
        </div>

        {/* Loading State */}
        {loading && (
          <div className="flex justify-center items-center py-20">
            <div className="text-center">
              <Loader2 className="w-8 h-8 animate-spin mx-auto mb-4 text-blue-700 dark:text-green-400" />
              <p className="text-gray-600 dark:text-gray-300">Loading our latest prototypes...</p>
            </div>
          </div>
        )}

        {/* Error State */}
        {error && !loading && (
          <div className="text-center py-20">
            <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-xl p-8 max-w-md mx-auto">
              <p className="text-red-600 dark:text-red-400 font-medium">{error}</p>
              <Button 
                onClick={() => window.location.reload()} 
                className="mt-4 bg-red-600 hover:bg-red-700 text-white"
              >
                Try Again
              </Button>
            </div>
          </div>
        )}

        {/* No Featured Products State */}
        {!loading && !error && featuredProducts.length === 0 && products.length > 0 && (
          <div className="text-center py-20">
            <div className="bg-gray-50 dark:bg-gray-900/20 border border-gray-200 dark:border-gray-700 rounded-xl p-8 max-w-md mx-auto">
              <Lightbulb className="w-12 h-12 mx-auto mb-4 text-gray-400" />
              <p className="text-gray-600 dark:text-gray-300 font-medium">
                No featured prototypes available at the moment.
              </p>
              <Button 
                onClick={handleViewAllProducts}
                className="mt-4 bg-blue-700 hover:bg-blue-800 text-white"
              >
                View All Products
              </Button>
            </div>
          </div>
        )}

        {/* Featured Product Carousel */}
        {!loading && !error && featuredProducts.length > 0 && (
          <div className="mb-16">
            <div className="relative max-w-5xl mx-auto">
              <div 
                className="relative bg-white/70 dark:bg-gray-900/70 rounded-3xl border border-gray-200 dark:border-gray-700 shadow-2xl backdrop-blur-md overflow-hidden"
                onMouseEnter={() => setIsAutoPlaying(false)}
                onMouseLeave={() => setIsAutoPlaying(true)}
              >
                
                {/* Carousel Content */}
                <div className="grid lg:grid-cols-2 gap-0 min-h-[400px]">
                  
                  {/* Image Section */}
                  <div className="relative overflow-hidden">
                    <img
                      src={featuredProducts[currentSlide]?.headerImage}
                      alt={featuredProducts[currentSlide]?.title}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        // Fallback image if the main image fails to load
                        (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1518717758536-85ae29035b6d?w=600&h=400&fit=crop';
                      }}
                    />
                    
                    {/* Overlay with play button for video */}
                    {featuredProducts[currentSlide]?.video && (
                      <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                        <button 
                          className="bg-white/90 hover:bg-white text-gray-900 p-4 rounded-full transition-all duration-300 hover:scale-110"
                          onClick={() => {
                            if (featuredProducts[currentSlide]?.video) {
                              window.open(featuredProducts[currentSlide].video!, '_blank');
                            }
                          }}
                        >
                          <Play className="w-8 h-8" />
                        </button>
                      </div>
                    )}

                    {/* Featured badge */}
                    <div className="absolute top-4 right-4">
                      <div className="bg-yellow-500 text-black px-3 py-1 rounded-full flex items-center gap-2 text-sm font-bold">
                        <Star className="w-4 h-4" />
                        Featured
                      </div>
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="p-8 lg:p-12 flex flex-col justify-center">
                    <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm font-medium border mb-4 w-fit ${getCategoryColor(featuredProducts[currentSlide]?.category || 'prototype')}`}>
                      {getCategoryIcon(featuredProducts[currentSlide]?.category || 'prototype')}
                      {featuredProducts[currentSlide]?.category?.charAt(0).toUpperCase() + featuredProducts[currentSlide]?.category?.slice(1)}
                    </div>

                    <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white mb-4">
                      {featuredProducts[currentSlide]?.title}
                    </h3>

                    <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                      {featuredProducts[currentSlide]?.description}
                    </p>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {featuredProducts[currentSlide]?.techStack.map((tech, index) => (
                        <span
                          key={index}
                          className="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 px-3 py-1 rounded-lg text-sm font-mono"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex flex-col sm:flex-row gap-3">
                      <Button
                        onClick={handleViewAllProducts}
                        className="font-bold flex items-center justify-center px-6 py-3 rounded-xl bg-gradient-to-r from-blue-700 to-green-400 hover:from-green-400 hover:to-blue-700 dark:from-green-700 dark:to-blue-700 dark:hover:from-blue-700 dark:hover:to-green-700 text-white shadow-xl transition-all duration-300 hover:scale-105"
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        View All Prototypes
                      </Button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Navigation Arrows */}
              {featuredProducts.length > 1 && (
                <>
                  <button
                    onClick={prevSlide}
                    className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 dark:bg-gray-900/90 hover:bg-white dark:hover:bg-gray-900 text-gray-900 dark:text-white p-3 rounded-full shadow-lg backdrop-blur-sm transition-all duration-300 hover:scale-110"
                  >
                    <ChevronLeft className="w-6 h-6" />
                  </button>
                  
                  <button
                    onClick={nextSlide}
                    className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 dark:bg-gray-900/90 hover:bg-white dark:hover:bg-gray-900 text-gray-900 dark:text-white p-3 rounded-full shadow-lg backdrop-blur-sm transition-all duration-300 hover:scale-110"
                  >
                    <ChevronRight className="w-6 h-6" />
                  </button>

                  {/* Slide Indicators */}
                  <div className="flex justify-center mt-6 gap-2">
                    {featuredProducts.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentSlide(index)}
                        className={`w-3 h-3 rounded-full transition-all duration-300 ${
                          index === currentSlide
                            ? 'bg-gradient-to-r from-blue-700 to-green-400 scale-125'
                            : 'bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500'
                        }`}
                      />
                    ))}
                  </div>
                </>
              )}
            </div>
          </div>
        )}

        {/* Quick Stats Grid */}
        {!loading && !error && products.length > 0 && (
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {[
              { number: `${stats.totalPrototypes}+`, label: 'Total Projects', icon: <Lightbulb className="w-6 h-6" /> },
              { number: `${stats.aiSolutions}+`, label: 'AI Solutions', icon: <Zap className="w-6 h-6" /> },
              { number: `${stats.embeddedSystems}+`, label: 'Embedded Systems', icon: <Cpu className="w-6 h-6" /> },
              { number: `${stats.prototypes}+`, label: 'Prototypes', icon: <Star className="w-6 h-6" /> }
            ].map((stat, index) => (
              <div
                key={index}
                className="bg-white/70 dark:bg-gray-900/70 rounded-2xl border border-gray-200 dark:border-gray-700 p-6 text-center backdrop-blur-md hover:scale-105 transition-all duration-300"
              >
                <div className="flex justify-center mb-3 text-blue-700 dark:text-green-400">
                  {stat.icon}
                </div>
                <div className="text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white mb-1">
                  {stat.number}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-300 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Call to Action */}
        {!loading && (
          <div className="text-center bg-gradient-to-br from-blue-700 via-green-400 to-violet-600 dark:from-green-700 dark:via-blue-700 dark:to-violet-700 rounded-3xl p-8 lg:p-12 text-white">
            <h3 className="text-2xl lg:text-3xl font-bold mb-4">
              Ready to Turn Your Idea Into Reality?
            </h3>
            <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
              Join the innovators who trust Ecocee to bring their embedded, IoT, and AI visions to life. 
              From concept to creation, we're your technology partner.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                onClick={handleViewAllProducts}
                className="font-bold flex items-center justify-center px-8 py-4 rounded-xl bg-white hover:bg-gray-100 text-blue-700 shadow-xl transition-all duration-300 hover:scale-105 text-lg"
              >
                <ExternalLink className="w-5 h-5 mr-2" />
                Explore All Prototypes
              </Button>
              
              <Button
                onClick={handleBookConsultation}
                className="font-bold flex items-center justify-center px-8 py-4 rounded-xl bg-transparent border-2 border-white hover:bg-white hover:text-blue-700 text-white shadow-xl transition-all duration-300 hover:scale-105 text-lg"
              >
                <ArrowRight className="w-5 h-5 mr-2" />
                Start Your Project
              </Button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};