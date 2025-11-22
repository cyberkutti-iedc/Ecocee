"use client";

import { useState, useEffect, useRef } from "react";
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
  Loader2,
  CircuitBoard,
  Microchip,
  Brain
} from "lucide-react";
import { useRouter } from "next/navigation";
import { getProducts, Product } from "@/data/products";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register GSAP plugins
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

export const PrototypesSection = () => {
  const router = useRouter();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Refs for animations
  const sectionRef = useRef(null);
  const carouselRef = useRef(null);
  const statsRef = useRef([]);
  const ctaRef = useRef(null);

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

  // GSAP Animations
  useGSAP(() => {
    if (!sectionRef.current) return;

    // Section entrance animation
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse"
      }
    });

    // Header animations
    tl.fromTo(".prototype-header", 
      { 
        y: 100, 
        opacity: 0,
        rotationX: 30 
      },
      { 
        y: 0, 
        opacity: 1,
        rotationX: 0,
        duration: 1.2,
        stagger: 0.2,
        ease: "power3.out"
      }
    )
    // Stats animations
    .fromTo(statsRef.current,
      { 
        scale: 0, 
        opacity: 0,
        rotationY: -45 
      },
      { 
        scale: 1, 
        opacity: 1,
        rotationY: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "back.out(1.7)"
      },
      "-=0.5"
    )
    // CTA animation
    .fromTo(ctaRef.current,
      { 
        y: 50, 
        opacity: 0,
        scale: 0.9 
      },
      { 
        y: 0, 
        opacity: 1,
        scale: 1,
        duration: 1,
        ease: "elastic.out(1, 0.8)"
      },
      "-=0.3"
    );

    // Carousel slide animation
    if (carouselRef.current && featuredProducts.length > 0) {
      gsap.to(carouselRef.current, {
        x: `-${currentSlide * 100}%`,
        duration: 0.8,
        ease: "power2.inOut"
      });
    }

    // Continuous floating animations
    gsap.to(".floating-chip", {
      y: 20,
      rotation: 5,
      duration: 4,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
      stagger: 2
    });

  }, { scope: sectionRef, dependencies: [currentSlide, featuredProducts.length] });

  // Auto-slide functionality
  useEffect(() => {
    if (!isAutoPlaying || featuredProducts.length === 0) return;
    
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % featuredProducts.length);
    }, 5000);

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
        return 'bg-green-500/20 text-green-700 dark:text-green-400 border-green-500/30';
      case 'ai':
        return 'bg-cyan-500/20 text-cyan-700 dark:text-cyan-400 border-cyan-500/30';
      case 'prototype':
        return 'bg-emerald-500/20 text-emerald-700 dark:text-emerald-400 border-emerald-500/30';
      default:
        return 'bg-gray-500/20 text-gray-700 dark:text-gray-400 border-gray-500/30';
    }
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'embedded':
        return <Cpu className="w-4 h-4" />;
      case 'ai':
        return <Brain className="w-4 h-4" />;
      case 'prototype':
        return <Lightbulb className="w-4 h-4" />;
      default:
        return <CircuitBoard className="w-4 h-4" />;
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
    <section 
      ref={sectionRef}
      className="relative w-full max-w-full overflow-hidden py-24 sm:py-32 bg-gradient-to-br from-gray-950 via-black to-green-950/30"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Circuit Pattern */}
        <div 
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `linear-gradient(#10b981 1px, transparent 1px),
                             linear-gradient(90deg, #10b981 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }}
        />
        
        {/* Floating Tech Elements */}
        <div className="floating-chip absolute top-20 left-10 w-12 h-12 border-2 border-green-400/20 rounded-lg rotate-45" />
        <div className="floating-chip absolute bottom-40 right-20 w-8 h-8 border border-cyan-400/20 rounded-full" />
        <div className="floating-chip absolute top-1/3 right-1/4 w-6 h-6 bg-emerald-400/10 rounded" />
        
        {/* Gradient Orbs */}
        <div className="absolute -top-32 left-1/4 w-64 h-64 bg-green-500/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-32 right-1/4 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl" />
      </div>

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="w-full flex justify-center mb-6">
            <Badge
              variant="outline"
              className="text-sm py-3 px-6 bg-black/50 backdrop-blur-md border border-green-500/30 text-green-400 font-mono tracking-wider shadow-2xl prototype-header"
            >
              <CircuitBoard className="w-4 h-4 mr-2" />
              Innovation Showcase
            </Badge>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight tracking-tight text-white mb-6 prototype-header">
            <span className="block mb-2">Engineering The</span>
            <span className="block bg-gradient-to-r from-green-400 via-cyan-400 to-emerald-400 bg-clip-text text-transparent">
              Future
            </span>
          </h2>

          <p className="max-w-3xl mx-auto text-lg lg:text-xl text-gray-300 font-medium bg-black/40 backdrop-blur-md rounded-2xl px-8 py-6 shadow-2xl border border-green-500/20 prototype-header">
            Explore our cutting-edge prototypes and innovations in embedded systems, AI, and IoT. 
            From concept to creation, we transform visionary ideas into working solutions.
          </p>
        </div>

        {/* Loading State */}
        {loading && (
          <div className="flex justify-center items-center py-20">
            <div className="text-center">
              <Loader2 className="w-12 h-12 animate-spin mx-auto mb-4 text-green-400" />
              <p className="text-gray-300 font-medium">Loading our latest innovations...</p>
            </div>
          </div>
        )}

        {/* Error State */}
        {error && !loading && (
          <div className="text-center py-20">
            <div className="bg-red-500/10 border border-red-500/30 rounded-2xl p-8 max-w-md mx-auto backdrop-blur-md">
              <p className="text-red-400 font-medium">{error}</p>
              <Button 
                onClick={() => window.location.reload()} 
                className="mt-4 bg-red-600 hover:bg-red-700 text-white border border-red-500/30"
              >
                Try Again
              </Button>
            </div>
          </div>
        )}

        {/* No Featured Products State */}
        {!loading && !error && featuredProducts.length === 0 && products.length > 0 && (
          <div className="text-center py-20">
            <div className="bg-black/40 backdrop-blur-md border border-green-500/20 rounded-2xl p-8 max-w-md mx-auto">
              <Lightbulb className="w-16 h-16 mx-auto mb-4 text-green-400" />
              <p className="text-gray-300 font-medium text-lg">
                No featured prototypes available at the moment.
              </p>
              <Button 
                onClick={handleViewAllProducts}
                className="mt-6 bg-gradient-to-r from-green-500 to-cyan-500 hover:from-green-400 hover:to-cyan-400 text-white border-0"
              >
                View All Products
              </Button>
            </div>
          </div>
        )}

        {/* Featured Product Carousel */}
        {!loading && !error && featuredProducts.length > 0 && (
          <div className="mb-20">
            <div className="relative max-w-6xl mx-auto">
              <div 
                className="relative bg-black/40 backdrop-blur-md rounded-3xl border border-green-500/20 shadow-2xl overflow-hidden group"
                onMouseEnter={() => setIsAutoPlaying(false)}
                onMouseLeave={() => setIsAutoPlaying(true)}
              >
                
                {/* Carousel Container */}
                <div className="relative overflow-hidden">
                  <div 
                    ref={carouselRef}
                    className="flex transition-transform duration-800 ease-out"
                    style={{ width: `${featuredProducts.length * 100}%` }}
                  >
                    {featuredProducts.map((product, index) => (
                      <div key={product.id} className="w-full flex-shrink-0">
                        <div className="grid lg:grid-cols-2 gap-0 min-h-[500px]">
                          
                          {/* Image Section */}
                          <div className="relative overflow-hidden">
                            <img
                              src={product.headerImage}
                              alt={product.title}
                              className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                              onError={(e) => {
                                (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1518717758536-85ae29035b6d?w=600&h=400&fit=crop';
                              }}
                            />
                            
                            {/* Video Overlay */}
                            {product.video && (
                              <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                <button 
                                  className="bg-white/90 hover:bg-white text-gray-900 p-5 rounded-full transition-all duration-300 hover:scale-110 transform-gpu"
                                  onClick={() => window.open(product.video!, '_blank')}
                                >
                                  <Play className="w-8 h-8" />
                                </button>
                              </div>
                            )}

                            {/* Featured Badge */}
                            <div className="absolute top-6 right-6">
                              <div className="bg-gradient-to-r from-yellow-500 to-amber-500 text-black px-4 py-2 rounded-full flex items-center gap-2 text-sm font-bold shadow-2xl">
                                <Star className="w-4 h-4" />
                                Featured
                              </div>
                            </div>
                          </div>

                          {/* Content Section */}
                          <div className="p-8 lg:p-12 flex flex-col justify-center bg-gradient-to-br from-black/60 to-gray-900/60">
                            <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium border mb-6 w-fit ${getCategoryColor(product.category)}`}>
                              {getCategoryIcon(product.category)}
                              {product.category.charAt(0).toUpperCase() + product.category.slice(1)}
                            </div>

                            <h3 className="text-3xl lg:text-4xl font-bold text-white mb-6 leading-tight">
                              {product.title}
                            </h3>

                            <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                              {product.description}
                            </p>

                            {/* Tech Stack */}
                            <div className="flex flex-wrap gap-3 mb-8">
                              {product.techStack.map((tech, techIndex) => (
                                <span
                                  key={techIndex}
                                  className="bg-green-500/10 text-green-400 px-4 py-2 rounded-xl text-sm font-mono border border-green-500/20"
                                >
                                  {tech}
                                </span>
                              ))}
                            </div>

                            <div className="flex flex-col sm:flex-row gap-4">
                              <Button
                                onClick={handleViewAllProducts}
                                className="font-bold flex items-center justify-center px-8 py-4 rounded-xl bg-gradient-to-r from-green-500 to-cyan-500 hover:from-green-400 hover:to-cyan-400 text-white shadow-2xl transition-all duration-300 hover:scale-105 border-0"
                              >
                                <ExternalLink className="w-5 h-5 mr-3" />
                                Explore All Projects
                              </Button>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Navigation Arrows */}
                {featuredProducts.length > 1 && (
                  <>
                    <button
                      onClick={prevSlide}
                      className="absolute left-6 top-1/2 -translate-y-1/2 bg-black/80 hover:bg-black text-white p-4 rounded-2xl shadow-2xl backdrop-blur-md transition-all duration-300 hover:scale-110 border border-green-500/30"
                    >
                      <ChevronLeft className="w-6 h-6" />
                    </button>
                    
                    <button
                      onClick={nextSlide}
                      className="absolute right-6 top-1/2 -translate-y-1/2 bg-black/80 hover:bg-black text-white p-4 rounded-2xl shadow-2xl backdrop-blur-md transition-all duration-300 hover:scale-110 border border-green-500/30"
                    >
                      <ChevronRight className="w-6 h-6" />
                    </button>
                  </>
                )}
              </div>

              {/* Slide Indicators */}
              {featuredProducts.length > 1 && (
                <div className="flex justify-center mt-8 gap-3">
                  {featuredProducts.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentSlide(index)}
                      className={`w-4 h-4 rounded-full transition-all duration-500 border-2 ${
                        index === currentSlide
                          ? 'bg-gradient-to-r from-green-400 to-cyan-400 scale-125 border-transparent'
                          : 'bg-gray-600 border-gray-500 hover:bg-gray-500'
                      }`}
                    />
                  ))}
                </div>
              )}
            </div>
          </div>
        )}

        {/* Quick Stats Grid */}
        {!loading && !error && products.length > 0 && (
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            {[
              { number: `${stats.totalPrototypes}+`, label: 'Total Projects', icon: <Microchip className="w-8 h-8" /> },
              { number: `${stats.aiSolutions}+`, label: 'AI Solutions', icon: <Brain className="w-8 h-8" /> },
              { number: `${stats.embeddedSystems}+`, label: 'Embedded Systems', icon: <Cpu className="w-8 h-8" /> },
              { number: `${stats.prototypes}+`, label: 'Prototypes', icon: <CircuitBoard className="w-8 h-8" /> }
            ].map((stat, index) => (
              <div
                key={index}
                ref={el => statsRef.current[index] = el}
                className="bg-black/40 backdrop-blur-md rounded-2xl border border-green-500/20 p-8 text-center hover:scale-105 hover:border-green-500/40 transition-all duration-500 group"
              >
                <div className="flex justify-center mb-4 text-green-400 group-hover:scale-110 transition-transform duration-300">
                  {stat.icon}
                </div>
                <div className="text-3xl lg:text-4xl font-black text-white mb-2 group-hover:text-green-400 transition-colors duration-300">
                  {stat.number}
                </div>
                <div className="text-gray-300 font-medium text-sm">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Call to Action */}
        {!loading && (
          <div 
            ref={ctaRef}
            className="text-center bg-gradient-to-br from-green-500/20 via-cyan-500/20 to-emerald-500/20 backdrop-blur-md rounded-3xl p-12 lg:p-16 text-white border border-green-500/30 relative overflow-hidden"
          >
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 left-0 w-32 h-32 border-2 border-green-400 rounded-full -translate-x-1/2 -translate-y-1/2" />
              <div className="absolute bottom-0 right-0 w-32 h-32 border-2 border-cyan-400 rounded-full translate-x-1/2 translate-y-1/2" />
            </div>

            <h3 className="text-3xl lg:text-4xl font-black mb-6 relative z-10">
              Ready to Engineer Your Vision?
            </h3>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto relative z-10">
              Join innovators who trust Ecocee to bring their embedded, IoT, and AI visions to life. 
              From concept to creation, we're your technology partner for the future.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center relative z-10">
              <Button
                onClick={handleViewAllProducts}
                className="font-bold flex items-center justify-center px-10 py-5 rounded-2xl bg-gradient-to-r from-green-500 to-cyan-500 hover:from-green-400 hover:to-cyan-400 text-white shadow-2xl transition-all duration-300 hover:scale-105 text-lg border-0"
              >
                <ExternalLink className="w-6 h-6 mr-3" />
                Explore All Innovations
              </Button>
              
              <Button
                onClick={handleBookConsultation}
                className="font-bold flex items-center justify-center px-10 py-5 rounded-2xl bg-transparent border-2 border-white hover:bg-white hover:text-green-900 text-white shadow-2xl transition-all duration-300 hover:scale-105 text-lg"
              >
                <ArrowRight className="w-6 h-6 mr-3" />
                Start Your Project
              </Button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};